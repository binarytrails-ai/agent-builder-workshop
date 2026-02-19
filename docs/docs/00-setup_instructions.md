# Setting Up Your Environment for the Workshop

## Prerequisites

- **GitHub Account**: If you don't have one yet, sign up on [GitHub](https://github.com/join){:target="_blank"}.
- **Azure Subscription**: Sign up for a free [Azure account](https://azure.microsoft.com/free/).

---

## Setup Source Code Repository

1. From your browser, navigate to the [agent-builder-workshop](https://github.com/binarytrails-ai/agent-builder-workshop) repository on GitHub. This repository has all the code and resources for the workshop.
1. Fork this repository to your own GitHub account. </br>
   [![Fork on GitHub](https://img.shields.io/badge/Fork%20Repo-blue?logo=github&style=for-the-badge)](https://github.com/binarytrails-ai/agent-builder-workshop/fork)

1. The recommended way to work through this workshop is with **GitHub Codespaces**, which provides a ready-to-use environment with all required tools. </br>Alternatively, you can use a Visual Studio Code to run the workshop locally.</br></br>
**Using GitHub Codespaces**: Once you've forked the repository, navigate to your forked repository on GitHub and click the green **Code** button, then select the **Codespaces** tab and click **Create codespace on main**. 

    The Codespace will be pre-configured with all the necessary dependencies and tools to run the labs.

    !!! Warning "It may take a few minutes for the Codespace to be created and all dependencies to be installed."
        If you encounter any issues, refer to the [GitHub Codespaces documentation](https://docs.github.com/en/codespaces) for troubleshooting tips and solutions.

---

## Understanding the Labs Structure

The workshop consists of the following labs:

1. [Lab 1: Remember Me - Personalization](./01-lab-personalization.md)
2. [Lab 2: Memory Management](./02-lab-memory.md)
3. [Lab 3: Tool Integration](./03-lab-tools.md)
4. [Lab 4: Human Approval](./05-lab-human-approval.md)
5. [Lab 5: Multi-Agent Systems](./06-lab-multi-agent.md)

The codebase for the workshop is organized into two main parts: the backend (.NET) and the frontend (React).

```text
src/
├── backend/    # .NET backend code
└── frontend/   # React frontend code
```

The labs are expected to be completed in order as they build incrementally on the previous one.
In most of the labs, you will only be modifying the agents in the backend codebase to implement new capabilities.

---

## Set Up Azure Infrastructure

Create your Azure Environment by following the instructions in the [Azure Resource Setup Guide](./Resources/azure-resource-setup.md).  This will provision the necessary resources in Azure for completing the labs.

You will connect to these resources when running the application locally on your machine or in GitHub Codespaces.

---

## Load Sample Data

Before running the application, you should load your database with sample data which includes chat history and flight information. This will allow you to test the agent's memory capabilities and the flight search tool in later labs.

1. Navigate to `notebooks/cosmosdb-insert.ipynb` in your workspace
2. Run the notebook cells to connect to your Azure Cosmos DB instance and insert sample records. You can run the cells in two ways:
    - **Option 1 - Run All**: Click the "Run All" button at the top of the notebook to execute all cells sequentially
    - **Option 2 - Run Individual Cells**: Click the play button next to each cell to run them one by one
3. Verify that the data has been inserted successfully by checking the output messages in the notebook. You should see confirmation messages for each record inserted.

---

## Running the Application Locally

To work through the labs, you need to run both the backend (.NET) and frontend (React) applications simultaneously.

### 1. Start the Backend Server

- Navigate to the backend folder:

    ```bash
    cd src/backend
    ```

- Start the backend server by running the following command. This will start the backend API server on **`http://localhost:5001`**

    ```bash
    dotnet run
    ```

### 2. Start the Frontend Development Server

- In a separate terminal, navigate to the frontend folder by running the following command:

    ```bash
    cd src/frontend
    ```

- Install the required npm packages (if you haven't already):

    ```bash
    npm install
    ```

- Build the frontend application:

    ```bash
    npm run build
    ```

- Start the frontend server. The frontend is configured to communicate with the backend API on port **5001**:

    ```bash
    npm start
    ```

   To access the frontend application:
    
   - **Local Development**: Open your browser to `http://localhost:3000`
   - **GitHub Codespaces**: When the frontend starts, Codespaces will automatically forward port 3000. 
        Go to the **Ports** panel in VS Code, find port **3000**, and click the **globe icon** (🌐) to open the frontend in your browser.

### 3. Test Your Setup

- **API Testing**: Navigate to the file `src/backend/ContosoTravelAgent.http` in the code repository.

  
    This file contains HTTP requests that you can use to interact with the backend API. To send a request, click on the `Send Request` link above each request in the file.

- **Web Application Testing**: Open your web browser and navigate to `http://localhost:3000`.

  
    Click on the `New Chat` button to start a new conversation with the travel assistant. 
    
    Send a few messages to verify that the frontend and backend are communicating correctly.

---

## (Optional) Set Up Aspire Dashboard for Observability

The .NET Aspire Dashboard provides a web-based UI for viewing OpenTelemetry traces, metrics, and logs in real-time. This is useful for monitoring your agent's behavior and debugging .

Refer to the [Aspire Dashboard Setup Guide](./Resources/aspire-dashboard-setup.md) for detailed instructions on how to set up the dashboard locally using Docker.

!!! warning "GitHub Codespaces Limitations"
    Running Docker containers in GitHub Codespaces may have limitations depending on your configuration. If you encounter issues running the Aspire Dashboard in Codespaces, you can skip this optional step and still complete all labs. The dashboard provides enhanced observability but is not required.

---

## Completed Source Code

The complete source code for all labs is available in the `completed` branch of the repository. You can switch to this branch at any time to view the final implementation.

[![View Completed Code](https://img.shields.io/badge/View%20Completed%20Code-blue?logo=github&style=for-the-badge)](https://github.com/binarytrails-ai/agent-builder-workshop/tree/completed)

## Let's get started 👩‍💻🤖

Once your environment is set up, you are ready to begin the labs!

👉 **[Lab 1: Remember Me - Personalization & Memory](./01-lab-personalization.md)**

Happy coding!
