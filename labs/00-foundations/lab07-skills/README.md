# Lab 08: File-Based Agent Skills

In this lab, you will learn how to use **file-based skills** with the FileAgentSkillsProvider for progressive disclosure of agent capabilities.

You will use modular skill packages (SKILL.md files) that provide domain-specific instructions to the agent on demand.

By the end of this lab, you will:

- Understand how FileAgentSkillsProvider works
- See progressive disclosure in action (advertise -> load -> read resources)

## Instructions

### Step 1: Navigate to the Lab Folder

```bash
cd labs/00-foundations/lab08-skills
```

### Step 2: Run the Program

With .NET 10's file-based apps, you can run the single .cs file directly:

```bash
dotnet run Program.cs
```

Or in Visual Studio Code, open Program.cs and click the **Run** button that appears above the code.

### Step 3: Observe the Output

The agent discovers skills from the `./skills` directory and loads them on-demand when needed.