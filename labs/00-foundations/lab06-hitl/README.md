# Lab 06: MCP Client - Using MCP Tools with Conversational Approval

In this lab, you will update your travel assistant agent to use tools from an MCP server, including booking flights with human-in-the-loop approval through conversational confirmation. You will connect to the server, retrieve the available tools, and configure your agent to ask for user confirmation before executing sensitive operations.

- ✅ Connect to an MCP server using HTTP transport
- ✅ Retrieve tools from an MCP server dynamically
- ✅ Configure an agent to use MCP tools
- ✅ Implement human approval through conversational confirmation
- ✅ See agents ask for permission before booking flights
- ✅ Experience multi-turn conversations with approval workflows

## Key Concepts: Human-in-the-Loop Patterns

There are two main approaches to implement human approval with AI agents:

### 1. Conversational Approval (This Lab)
The agent asks the user for confirmation through natural conversation before executing sensitive actions. This is implemented through agent instructions that tell it to always ask for confirmation.

**Pros:**
- Simple to implement with any agent framework
- Natural user experience through conversation
- Works with local MCP servers

**Cons:**
- Relies on the LLM following instructions (not guaranteed)
- No hard enforcement at the platform level

### 2. Programmatic Tool Call Interception (Production Recommended)
Platform-level interception of tool calls before execution, requiring explicit approval. This is available in Azure AI Foundry with hosted MCP servers using `McpToolCallApprovalPolicy`.

**Pros:**
- Hard enforcement - tool cannot execute without approval
- Audit trail of approvals/denials
- Centralized policy management

**Cons:**
- Requires Azure AI Foundry hosted agents
- More complex setup

**Example (Azure AI Foundry):**
```csharp
PromptAgentDefinition agentDefinition = new(model: "gpt-4o")
{
    Tools = { ResponseTool.CreateMcpTool(
        serverLabel: "contoso-travel",
        serverUri: new Uri("https://your-mcp-server.com"),
        toolCallApprovalPolicy: new McpToolCallApprovalPolicy(
            GlobalMcpToolCallApprovalPolicy.AlwaysRequireApproval
        )
    )) }
};
```

See [Microsoft Learn - MCP with Approval](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/tools/model-context-protocol?pivots=csharp) for details.

## Key Implementation Details

### What is MCP (Model Context Protocol)?

MCP is a standard protocol that allows AI agents to discover and use tools from remote servers. Instead of embedding all tools directly in your agent code, you can:

- **Host tools on separate servers** — keep tool logic separate and reusable
- **Share tools across multiple agents** — one MCP server can serve many agents
- **Update tools without redeploying agents** — the MCP server can be updated independently
- **Use tools from different vendors** — any MCP-compliant server works

The MCP client connects to the server, discovers available tools, and makes them available to the agent as if they were local functions.

### Connecting to an MCP Server

The lab uses HTTP transport to connect to the MCP server. Here's how it works:

```csharp
// Create HTTP client (must remain alive for the duration of the MCP session)
var httpClient = new HttpClient { BaseAddress = new Uri(mcpBaseUrl) };

// Configure HTTP transport
var transportOptions = new HttpClientTransportOptions
{
    Endpoint = new Uri($"{mcpBaseUrl}/mcp")
};

var transport = new HttpClientTransport(transportOptions, httpClient, loggerFactory);

// Create MCP client
var client = await McpClient.CreateAsync(transport, clientOptions, loggerFactory);
```

### Discovering Tools from the MCP Server

Once connected, retrieve the tools that the server provides:

```csharp
var mcpTools = await mcpClient.ListToolsAsync();
```

The server returns a list of tools with their names, descriptions, and parameter schemas. The agent uses this information exactly like local tools. It reads the descriptions to decide when to call each tool.

### Adding MCP Tools to the Agent with Conversational Approval

MCP tools work seamlessly with local tools. You can instruct the agent to ask for confirmation before executing sensitive operations:

```csharp
var agent = chatClient.AsAIAgent(new ChatClientAgentOptions
{
    Name = "TravelAssistant",
    ChatOptions = new()
    {
        Instructions = """
            You are a helpful travel assistant that can search and book flights.
            
            IMPORTANT: Before booking a flight, always ask the user to confirm the booking details.
            Present the flight details clearly and ask: "Would you like me to proceed with this booking?"
            Only call the BookFlight tool after the user explicitly confirms.
            """,
        Tools = [.. mcpTools]
    }
});
```

The agent's instructions guide it to:
1. Present booking details to the user
2. Explicitly ask for confirmation
3. Only call the booking tool after receiving approval

This creates a natural conversational approval flow while maintaining a smooth user experience for non-sensitive operations like search.

### The Contoso Travel MCP Server

The Contoso Travel MCP server (`src/mcp`) exposes flight management tools:

- **SearchFlights** — search for flights between two cities
- **GetFlightByNumber** — look up flight details by flight number
- **BookFlight** — book a flight with confirmation number and pricing

The server reads from the `data/flights_data.json` file and exposes this data as remote tools. The BookFlight tool returns a mock booking confirmation.

---

## Instructions

### Step 0: Start the MCP Server

**Before running the lab**, you must start the MCP server in a separate terminal:

```bash
cd src/mcp
dotnet run
```

Leave this terminal running. The server will listen on `http://localhost:5002`.

### Step 1: Navigate to the Lab Folder

```bash
cd labs/00-foundations/lab06-mcp
```

### Step 2: Run the Program

With .NET 10's file-based apps, you can run the single .cs file directly:

```bash
dotnet run Program.cs
```

Or in Visual Studio Code, open Program.cs and click the **"Run"** button that appears above the code.

### Step 3: Observe the Output

You should see a three-turn conversation:

**Turn 1: Search for flights**
1. The agent connecting to the MCP server at `http://localhost:5002`
2. Retrieved tool count logged (e.g., "Retrieved 3 tools from MCP server")
3. The user query: "Can you find me flights from Melbourne to Auckland?"
4. The agent automatically calling the `SearchFlights` tool from the MCP server
5. A conversational response presenting the flight results

**Turn 2: Request booking (agent asks for confirmation)**
1. The user requests: "I'd like to book flight NZ102 for March 25, 2026 for 2 passengers."
2. The agent presents the booking details
3. The agent asks: "Would you like me to proceed with this booking?"
4. **No tool is called yet** - the agent waits for explicit confirmation

**Turn 3: User confirms**
1. The user confirms: "Yes, please proceed with the booking."
2. The agent calls the `BookFlight` tool with the specified parameters
3. The booking completes and a confirmation is displayed

Notice how:
- The agent uses remote MCP tools seamlessly
- Human approval happens through natural conversation
- The agent asks for confirmation before executing sensitive operations
- Search operations happen immediately without confirmation

---

## Challenges and Next Steps

**Try denying the booking**
- Run the program again
- When the agent asks for confirmation, respond with "No" or "Actually, I changed my mind"
- Observe how the agent responds to the denial

**Try different conversation patterns**
- Ask "Can you book the cheapest flight for me?" and see how the agent confirms details
- Be vague: "Book a flight" without specifying which one
- Change your mind mid-conversation

**Combine local and remote tools**
- Add a local date calculation tool (like in Lab 05) alongside the MCP tools
- Ask: `"Find me flights from Sydney to Paris departing in 30 days and book the cheapest one"`
- Watch the agent combine local and remote tools in one workflow

**Experiment with instructions**
- Modify the agent instructions to require approval for all operations (including search)
- Or make it more lenient and skip confirmation for bookings under a certain price
- Test how well the LLM follows your instructions

**Upgrade to Programmatic Approval (Advanced)**
- Deploy your MCP server to Azure
- Use Azure AI Foundry to host your agent
- Implement `McpToolCallApprovalPolicy` for hard enforcement
- See the Microsoft Learn link in the "Key Concepts" section above

**Experiment with server failures**
- Stop the MCP server (Ctrl+C in its terminal) and run the lab again
- Observe the error handling and how the agent responds

---

## Key Takeaways

- **Human-in-the-loop** patterns let you gate AI decisions that need human judgment
- **Conversational approval** is simple to implement and provides a natural UX
- **Programmatic approval** (Azure AI Foundry) provides hard enforcement for production scenarios
- **MCP tools** work seamlessly whether approval is conversational or programmatic
- **Multi-turn conversations** maintain context across search, confirmation, and booking operations
- **Agent instructions** can guide behavior, but LLMs may not always follow them perfectly