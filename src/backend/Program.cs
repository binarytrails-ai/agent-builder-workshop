using ContosoTravelAgent.Host;
using ContosoTravelAgent.Host.Agents;
using ContosoTravelAgent.Host.Agents.Workflow;
using ContosoTravelAgent.Host.Extensions;
using Microsoft.Agents.AI;
using Microsoft.Agents.AI.DevUI;
using Microsoft.Agents.AI.Hosting.AGUI.AspNetCore;
using Microsoft.Extensions.AI;
using OpenAI;
using System.ClientModel;

var builder = WebApplication.CreateBuilder(args);
var config = builder.Services.LoadContosoTravelConfig(builder.Configuration);
builder.Services.AddSingleton(config);

builder.Services.AddHttpContextAccessor();
builder.Services.AddSingleton(sp => new Microsoft.AspNetCore.Http.Json.JsonOptions().SerializerOptions);

builder.Services.AddLogging(logging =>
{
    logging.AddConsole();
    logging.SetMinimumLevel(LogLevel.Debug);
});
builder.AddOpenTelemetryLogging(config);

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader());
});

builder.AddOpenAIChatCompletions();
builder.Services.AddAGUI();

IChatClient chatClient;
OpenAI.Embeddings.EmbeddingClient embeddingClient;

if (config.UseGitHubModels)
{
    Console.WriteLine("Using GitHub Models");
    var clientOptions = new OpenAIClientOptions { Endpoint = new Uri(config.GithubModelsBaseUrl!) };
    var openAiClient = new OpenAIClient(new ApiKeyCredential(config.GithubToken!), clientOptions);
    embeddingClient = openAiClient.GetEmbeddingClient(config.GithubEmbeddingModelId!);
    chatClient = openAiClient.GetChatClient(config.GithubTextModelId!).AsIChatClient().AsBuilder()
        .UseOpenTelemetry(sourceName: Constants.ApplicationId, configure: (cfg) => cfg.EnableSensitiveData = true)
        .Build();
}
else
{
    Console.WriteLine("Using Azure AI Models");
    var azureOpenAIClient = new Azure.AI.OpenAI.AzureOpenAIClient(
        new Uri(config.AzureAIServicesEndpoint!), new ApiKeyCredential(config.AzureAIServicesKey!));

    // Create Azure AI chat client
    chatClient = azureOpenAIClient.GetChatClient(config.AzureTextModelName).AsIChatClient().AsBuilder()
        .UseOpenTelemetry(sourceName: Constants.ApplicationId, configure: (cfg) => cfg.EnableSensitiveData = true)
        .Build();

    embeddingClient = azureOpenAIClient.GetEmbeddingClient(config.AzureEmbeddingModelName);
}

builder.Services.AddChatClient(chatClient);
builder.Services.AddSingleton(embeddingClient);
builder.Services.AddSingleton(sp =>
{
    var cosmosClient = new Microsoft.Azure.Cosmos.CosmosClient(
        config.CosmosDbConnectionString,
        new Microsoft.Azure.Cosmos.CosmosClientOptions
        {
            UseSystemTextJsonSerializerWithOptions = System.Text.Json.JsonSerializerOptions.Default
        });
    return cosmosClient.GetDatabase(config.CosmosDbDatabaseName);
});

// Register tools
builder.Services.AddSingleton<ContosoTravelAgent.Host.Tools.FlightFinderTools>();

// Register agent factories
builder.Services.AddSingleton<ContosoTravelAgentFactory>();
builder.Services.AddKeyedSingleton("ContosoTravelAgent", (sp, key) =>
{
    var factory = sp.GetRequiredService<ContosoTravelAgentFactory>();
    return factory.CreateAsync().Result;
});

//builder.Services.AddSingleton<ContosoTravelWorkflowAgentFactory>();
//builder.Services.AddSingleton<TriageAgentFactory>();
//builder.Services.AddSingleton<TripAdvisorAgentFactory>();
//builder.Services.AddSingleton<FlightSearchAgentFactory>();
//builder.Services.AddKeyedSingleton("ContosoTravelWorkflowAgent", (sp, key) =>
//{
//    var factory = sp.GetRequiredService<ContosoTravelWorkflowAgentFactory>();
//    return factory.Create();
//});

var app = builder.Build();

app.MapGet("/", () => Results.Ok(new { status = "healthy", service = "Contoso Travel Agent API" }));
app.MapGet("/health", () => Results.Ok(new { status = "healthy" }));

var travelBot = app.Services.GetRequiredKeyedService<AIAgent>("ContosoTravelAgent");
app.MapOpenAIChatCompletions(travelBot);
// Map AGUI endpoint
app.MapAGUI("/agent/contoso_travel_bot", travelBot);

//var travelBotWorkflowAgent = app.Services.GetRequiredKeyedService<AIAgent>("ContosoTravelWorkflowAgent");
//app.MapOpenAIChatCompletions(travelBotWorkflowAgent);
//app.MapAGUI("/agent/contoso_travel_bot", travelBotWorkflowAgent);

app.UseRequestContext();
app.UseCors();
await app.RunAsync();