# Lab 05: Hosting Agents as Web Services

In this lab, you will learn how to host an AI agent as a web service using ASP.NET Core, making it accessible via HTTP endpoints.

You will create a web API that exposes your agent through OpenAI-compatible endpoints and an interactive web interface, allowing it to be consumed by various clients.

By the end of this lab, you will:

- ✅ Host an agent as an ASP.NET Core web service
- ✅ Expose agents via OpenAI-compatible API endpoints

## Instructions

### Step 1: Navigate to the Lab Folder

```bash
cd labs/00-foundations/lab05-host
```

### Step 2: Run the Web Service

```bash
dotnet run
```

You should see output indicating the service has started with available endpoints:
- Agent UI: http://localhost:5000/agent/travel
- Health Check: http://localhost:5000/health
- OpenAI API: http://localhost:5000/v1/chat/completions

### Step 3: Test the Agent

Open your browser to: http://localhost:5000/agent/travel

You'll see an interactive chat interface. Try asking:
- "Find me flights from Melbourne to Tokyo for next Friday"
- "What is today's date?"

Observe how the agent uses tools in real-time to answer your questions.

### Step 4: Stop the Service

Press `Ctrl+C` in the terminal to shut down the web service.

