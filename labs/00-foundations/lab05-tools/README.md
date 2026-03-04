# Lab 03: Tools and Function Calling

In this lab, you will create an AI-powered travel assistant that can use tools to perform actions.

You will implement an agent with 4 tools: date calculations and flight search. The agent will automatically decide which tool to use based on the user's question.

By the end of this lab, you will:

- ✅ Create tools (functions) that agents can call automatically
- ✅ Understand how agents decide when and which tools to use
- ✅ See parameter extraction from natural language in action
- ✅ Learn how tools can read from external data sources

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
