// Lab 03: Tools and Function Calling
// Learn how to equip agents with tools that they can call automatically

// Add NuGet package references
#:package Azure.AI.OpenAI@2.1.0
#:package Azure.Identity@1.18.0
#:package Microsoft.Agents.AI@1.0.0-rc2
#:package Microsoft.Agents.AI.Abstractions@1.0.0-rc2
#:package Microsoft.Extensions.AI@10.3.0
#:package Microsoft.Extensions.AI.OpenAI@10.3.0
#:package DotNetEnv@3.1.1
#:package OpenTelemetry@1.10.0
#:package OpenTelemetry.Exporter.OpenTelemetryProtocol@1.10.0
#:package OpenTelemetry.Extensions.Hosting@1.10.0
#:package Microsoft.Extensions.Logging@10.0.0
#:package Microsoft.Extensions.Logging.Console@10.0.0
#:package Microsoft.Extensions.DependencyInjection@10.0.0

using System.ComponentModel;
using System.Text.Json;
using Azure.AI.OpenAI;
using Azure.Identity;
using DotNetEnv;
using Microsoft.Agents.AI;
using Microsoft.Extensions.AI;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using OpenTelemetry;
using OpenTelemetry.Logs;
using OpenTelemetry.Resources;
using OpenTelemetry.Trace;
using System.ClientModel;

const string SourceName = "TravelAssistant";
const string ServiceName = "TravelAssistant";

// Configure JSON serialization for Azure SDK compatibility with .NET 10
AppContext.SetSwitch("System.Text.Json.JsonSerializer.IsReflectionEnabledByDefault", true);

// Step 1: Load environment variables
LoadEnv();

// Step 2: Initialize OpenTelemetry
var (loggerFactory, appLogger, tracerProvider) = InitTelemetry(ServiceName);

// Step 3: Create chat client
var chatClient = CreateChatClient(appLogger);
if (chatClient == null)
{
    tracerProvider.Dispose();
    return;
}

// Step 4: Define tools that the agent can use
var tools = new List<AITool>
{
    AIFunctionFactory.Create(GetCurrentDate),
    AIFunctionFactory.Create(CalculateDateDifference),
    AIFunctionFactory.Create(CalculateDaysUntil),
    AIFunctionFactory.Create(SearchFlights)
};

appLogger.LogInformation("Created {ToolCount} tools for the agent", tools.Count);

// Step 5: Create agent with tools
var agent = chatClient.AsAIAgent(new ChatClientAgentOptions
{
    Name = "TravelAssistant",
    ChatOptions = new()
    {
        Instructions = """
            You are a helpful travel planning assistant with date calculation tools.
            
            Use your tools to answer questions about dates and durations.
            Provide friendly, conversational responses based on the tool results.
            """,
        Tools = tools
    }
});

agent.AsBuilder()
.UseOpenTelemetry(SourceName, configure: (cfg) => cfg.EnableSensitiveData = true)
.UseLogging(loggerFactory)
.Build();

appLogger.LogInformation("Agent created with tools successfully");

// Step 6: Run conversation with tool usage
try
{
    AgentSession session = await agent.CreateSessionAsync();

    var userInput1 = "Find me flights from Melbourne to Tokyo";
    appLogger.LogInformation("User: {UserInput}", userInput1);

    var response1 = await agent.RunAsync(userInput1, session);
    appLogger.LogInformation("Agent: {AgentResponse}", response1.Text);
}
catch (Exception ex)
{
    appLogger.LogError(ex, "Agent interaction failed: {ErrorMessage}", ex.Message);
}
finally
{
    tracerProvider.Dispose();
}


// ==================== Tool Definitions ====================

/// <summary>
/// Gets the current date.
/// </summary>
[Description("Get today's date. Use this when you need to know what today's date is for calculations or comparisons.")]
static string GetCurrentDate()
{
    var today = DateOnly.FromDateTime(DateTime.Now);
    var result = new
    {
        date = today.ToString("yyyy-MM-dd"),
        dayOfWeek = today.DayOfWeek.ToString()
    };

    return JsonSerializer.Serialize(result);
}

/// <summary>
/// Calculates days between two dates.
/// </summary>
[Description("Calculate how many days between two dates. Dates must be in YYYY-MM-DD format.")]
static string CalculateDateDifference(
    [Description("Start date in YYYY-MM-DD format")] string startDate,
    [Description("End date in YYYY-MM-DD format")] string endDate)
{
    var start = DateOnly.Parse(startDate);
    var end = DateOnly.Parse(endDate);
    var days = end.DayNumber - start.DayNumber;

    var result = new
    {
        startDate,
        endDate,
        totalDays = days
    };

    return JsonSerializer.Serialize(result);
}

/// <summary>
/// Calculates days until a future date.
/// </summary>
[Description("Calculate how many days from today until a future date. Date must be in YYYY-MM-DD format.")]
static string CalculateDaysUntil(
    [Description("Target date in YYYY-MM-DD format")] string targetDate)
{
    var today = DateOnly.FromDateTime(DateTime.Now);
    var target = DateOnly.Parse(targetDate);
    var days = target.DayNumber - today.DayNumber;

    var result = new
    {
        today = today.ToString("yyyy-MM-dd"),
        targetDate,
        daysUntil = days
    };

    return JsonSerializer.Serialize(result);
}

/// <summary>
/// Searches for available flights between cities.
/// </summary>
[Description("Search for available flights between two cities. Returns flight options with prices and times.")]
static string SearchFlights(
    [Description("Origin city (e.g., 'Melbourne', 'Sydney')")] string origin,
    [Description("Destination city (e.g., 'Tokyo', 'Paris', 'Singapore')")] string destination)
{
    // Find the workspace root by looking for azure.yaml
    var currentDir = Directory.GetCurrentDirectory();
    string? workspaceRoot = null;
    while (currentDir != null)
    {
        var azureYaml = Path.Combine(currentDir, "azure.yaml");
        if (File.Exists(azureYaml))
        {
            workspaceRoot = currentDir;
            break;
        }
        currentDir = Directory.GetParent(currentDir)?.FullName;
    }

    if (workspaceRoot == null)
    {
        return JsonSerializer.Serialize(new { error = "Could not find workspace root" });
    }

    // Read flights data from JSON file
    var flightsFile = Path.Combine(workspaceRoot, "data", "flights_data.json");
    if (!File.Exists(flightsFile))
    {
        return JsonSerializer.Serialize(new { error = "Flights data file not found" });
    }

    var jsonContent = File.ReadAllText(flightsFile);
    var allFlights = JsonSerializer.Deserialize<JsonElement>(jsonContent);

    // Filter flights by origin and destination
    var matchingFlights = new List<object>();

    foreach (var flight in allFlights.EnumerateArray())
    {
        var routeOriginCity = flight.GetProperty("route").GetProperty("origin").GetProperty("city").GetString();
        var routeDestCity = flight.GetProperty("route").GetProperty("destination").GetProperty("city").GetString();

        if (routeOriginCity?.Equals(origin, StringComparison.OrdinalIgnoreCase) == true &&
            routeDestCity?.Equals(destination, StringComparison.OrdinalIgnoreCase) == true)
        {
            matchingFlights.Add(new
            {
                flightNumber = flight.GetProperty("flightNumber").GetString(),
                airline = flight.GetProperty("airline").GetProperty("name").GetString(),
                origin = routeOriginCity,
                destination = routeDestCity,
                departureTime = flight.GetProperty("schedule").GetProperty("departure").GetString(),
                arrivalTime = flight.GetProperty("schedule").GetProperty("arrival").GetString(),
                duration = flight.GetProperty("schedule").GetProperty("duration").GetString(),
                price = flight.GetProperty("pricing").GetProperty("amount").GetDecimal(),
                currency = flight.GetProperty("pricing").GetProperty("currency").GetString()
            });
        }
    }

    var result = new
    {
        origin,
        destination,
        totalFlights = matchingFlights.Count,
        flights = matchingFlights.Take(5).ToList() // Limit to 5 results
    };

    return JsonSerializer.Serialize(result);
}


// ==================== Helper Methods ====================

void LoadEnv()
{
    var currentDir = Directory.GetCurrentDirectory();
    while (currentDir != null)
    {
        var azureYaml = Path.Combine(currentDir, "azure.yaml");
        if (File.Exists(azureYaml))
        {
            var envFile = Path.Combine(currentDir, ".env");
            if (File.Exists(envFile))
            {
                Env.Load(envFile);
                return;
            }
        }
        currentDir = Directory.GetParent(currentDir)?.FullName;
    }
}

IChatClient? CreateChatClient(ILogger appLogger)
{
    var azureEndpoint = Environment.GetEnvironmentVariable("AZURE_AI_SERVICES_ENDPOINT");
    var azureApiKey = Environment.GetEnvironmentVariable("AZURE_AI_SERVICES_KEY");
    var modelName = Environment.GetEnvironmentVariable("AZURE_TEXT_MODEL_NAME") ?? "gpt-4o";

    var githubToken = Environment.GetEnvironmentVariable("GITHUB_TOKEN");
    var githubModelId = Environment.GetEnvironmentVariable("GITHUB_TEXT_MODEL_ID") ?? "gpt-4o";
    var githubBaseUrl = Environment.GetEnvironmentVariable("GITHUB_MODELS_BASE_URL") ?? "https://models.inference.ai.azure.com";

    if (!string.IsNullOrEmpty(azureEndpoint) && !string.IsNullOrEmpty(azureApiKey))
    {
        appLogger.LogInformation("Using Azure OpenAI with model: {ModelName}", modelName);
        var azureClient = new AzureOpenAIClient(new Uri(azureEndpoint), new ApiKeyCredential(azureApiKey));
        return azureClient.GetChatClient(modelName)
            .AsIChatClient()
            .AsBuilder()
            .UseOpenTelemetry(sourceName: SourceName, configure: (cfg) => cfg.EnableSensitiveData = true)
            .Build();
    }
    else if (!string.IsNullOrEmpty(githubToken))
    {
        appLogger.LogInformation("Using GitHub Models with model: {ModelId}", githubModelId);
        var githubClient = new AzureOpenAIClient(new Uri(githubBaseUrl), new ApiKeyCredential(githubToken));
        return githubClient.GetChatClient(githubModelId)
            .AsIChatClient()
            .AsBuilder()
            .UseOpenTelemetry(sourceName: SourceName, configure: (cfg) => cfg.EnableSensitiveData = true)
            .Build();
    }
    else
    {
        appLogger.LogError("No valid credentials found.");
        return null;
    }
}

(ILoggerFactory, ILogger<Program>, TracerProvider) InitTelemetry(string serviceName)
{
    var otlpEndpoint = Environment.GetEnvironmentVariable("OTEL_EXPORTER_OTLP_ENDPOINT") ?? "http://localhost:4317";

    var tracerProvider = Sdk.CreateTracerProviderBuilder()
        .SetResourceBuilder(ResourceBuilder.CreateDefault()
            .AddService(serviceName, serviceVersion: "1.0.0"))
        .AddSource(SourceName)
        .AddSource("Microsoft.Agents.AI")
        .AddSource("Microsoft.Extensions.AI")
        .AddOtlpExporter(options => options.Endpoint = new Uri(otlpEndpoint))
        .Build();

    var serviceCollection = new ServiceCollection();
    serviceCollection.AddLogging(loggingBuilder => loggingBuilder
        .SetMinimumLevel(LogLevel.Information)
        .AddConsole()
        .AddOpenTelemetry(options =>
        {
            options.SetResourceBuilder(ResourceBuilder.CreateDefault()
                .AddService(serviceName, serviceVersion: "1.0.0"));
            options.AddOtlpExporter(otlpOptions => otlpOptions.Endpoint = new Uri(otlpEndpoint));
            options.IncludeScopes = true;
            options.IncludeFormattedMessage = true;
        }));

    var serviceProvider = serviceCollection.BuildServiceProvider();
    var loggerFactory = serviceProvider.GetRequiredService<ILoggerFactory>();
    var appLogger = loggerFactory.CreateLogger<Program>();

    return (loggerFactory, appLogger, tracerProvider);
}