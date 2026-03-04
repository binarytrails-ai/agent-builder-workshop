# Lab 04: Travel Assistant with Long-Term Memory

In this lab, you will extend your travel assistant with **long-term memory** that persists across sessions.

You will implement in-memory storage for user preferences like seat and meal choices, allowing the agent to remember and personalize experiences.  In production, you would use a database or external storage, but for simplicity, this lab uses in-memory storage. 

By the end of this lab, you will:

- Understand the use of long-term memory in agents
- Use the LLM to extract structured preference data from conversation
- Build an agent that provides personalized experiences across sessions

## Instructions

### Step 1: Navigate to the Lab Folder

```bash
cd labs/00-foundations/lab04-longterm-memory
```

### Step 2: Run the Program

With .NET 10's file-based apps, you can run the single .cs file directly:

```bash
dotnet run Program.cs
```

Or in Visual Studio Code, open Program.cs and click the **"Run"** button that appears above the code.

### Step 3: Observe the Output

You should see the agent remember your preferences across multiple sessions. Notice how:

- The agent extracts preferences from natural conversation (e.g., "I prefer window seats and vegetarian meals")
- The agent personalizes responses based on stored preferences