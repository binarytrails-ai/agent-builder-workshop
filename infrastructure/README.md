# AWS CDK Infrastructure

This directory contains the Phase 6 AWS CDK scaffolding for the Node.js migration.

## Stacks

- `DatabaseStack`: DynamoDB tables for chat history, user profiles, and flights
- `AuthStack`: Cognito user pool and client
- `ComputeStack`: Lambda handlers and HTTP API wiring

## Usage

```bash
cd infrastructure
npm install
npm run synth
npm run deploy
```
