# Lab 03: Tools and Function Calling

In this lab, you will create an AI-powered travel assistant that can use tools to perform actions.

You will implement an agent with tools: date calculations and flight search. The agent will automatically decide which tool to use based on the user's question.

By the end of this lab, you will:

- ✅ Create tools (functions) that agents can call automatically
- ✅ Understand how agents decide when and which tools to use
- ✅ See parameter extraction from natural language in action
- ✅ Learn how tools can read from external data sources

## Key Implementation Details

### What is Function Calling?

Without tools, an agent can only answer from its training knowledge. With tools, it can take **actions** — look up live data, call APIs, read files, perform calculations.

**Function calling** (also called tool use) works like this:

1. You register functions as tools on the agent
2. The model reads each tool's name, description, and parameter descriptions
3. When the user asks a question, the model decides whether a tool would help
4. If yes, it outputs a structured tool call (name + arguments) instead of a text response
5. The framework executes the function and sends the result back to the model
6. The model uses the result to write its final response

The agent handles steps 4-6 automatically — you only define the functions.

### Defining Tools with `AIFunctionFactory.Create`

Any static or instance method can be turned into an agent tool with a single line:

```csharp
AIFunctionFactory.Create(SearchFlights)
```

The framework uses reflection to read the method signature and builds a tool description automatically. To make the tool's purpose clear to the model, use:

- **`[Description(...)]` on the method** — tells the model *when* to use this tool
- **`[Description(...)]` on each parameter** — tells the model what to pass in

```csharp
[Description("Search for available flights between two cities. Returns flight options with prices and times.")]
static string SearchFlights(
    [Description("Origin city (e.g., 'Melbourne', 'Sydney')")] string origin,
    [Description("Destination city (e.g., 'Tokyo', 'Paris', 'Singapore')")] string destination)
```

Good descriptions are critical — they are the only thing guiding the model's decision about when and how to call the tool.

### Registering Tools on the Agent

Tools are passed in via `ChatOptions.Tools` when creating the agent:

```csharp
var tools = new List<AITool>
{
    AIFunctionFactory.Create(GetCurrentDate),
    AIFunctionFactory.Create(CalculateDateDifference),
    AIFunctionFactory.Create(CalculateDaysUntil),
    AIFunctionFactory.Create(SearchFlights)
};

var agent = chatClient.AsAIAgent(new ChatClientAgentOptions
{
    ChatOptions = new() { Tools = tools }
});
```

The model can call multiple tools in a single turn if needed. For example, `"How many days until my Tokyo flight?"` might trigger `SearchFlights` and `CalculateDaysUntil` in sequence.

### The `SearchFlights` Tool and the Data File

Rather than calling a real airline API, `SearchFlights` reads from `data/flights_data.json` in the workspace. 

All four tools return a **JSON string**. This is the recommended approach because:

- JSON is structured, so the model can reliably extract individual fields
- Returning multiple values (e.g. flight number, price, departure time) in one call is straightforward
- It mirrors what a real REST API would return

---

## Instructions

### Step 1: Navigate to the Lab Folder

```bash
cd labs/00-foundations/lab03-tools
```

### Step 2: Run the Program

With .NET 10's file-based apps, you can run the single .cs file directly:

```bash
dotnet run Program.cs
```

Or in Visual Studio Code, open Program.cs and click the **"Run"** button that appears above the code

### Step 3: Observe the Output

You should see the agent automatically call tools to answer the questions. Notice how:

- The agent decides which tool(s) to call — you never tell it explicitly
- Parameters like city names are extracted directly from natural language
- The agent weaves the tool results into a natural conversational response

---

## Challenges and Next Steps

**Ask questions that need multiple tools**
- Try: `"Find me flights from Sydney to Paris and tell me how many days until the departure date"`.
- Watch the logs to see the agent chain two tool calls together in one turn.

**Add a new tool**
- Write a `ConvertCurrency` function that takes an amount, a source currency, and a target currency, and returns a converted value using a hardcoded exchange rate.
- Register it with `AIFunctionFactory.Create(ConvertCurrency)` and ask: `"How much is a $800 AUD flight in USD?"`.

**Test tool failure handling**
- Ask for flights from a city that does not exist in the data file (e.g. `"Find me flights from Springfield to Tokyo"`).
- The tool returns `totalFlights: 0`. Does the agent handle this gracefully or does it hallucinate results?