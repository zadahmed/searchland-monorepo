# Searchland Monorepo Application

## 📁 Directory Structure

- **`backend/`**
  - Contains the server logic built with tRPC, typeORM, and Express, interfacing with a PSQL DB on Supabase.
  - Provides API endpoints to:
    - Get all users
    - Add a user
    - Delete a user

- **`backend/src/api`**
  - Houses all the API specific definitions using tRPC and Express.

- **`backend/src/db`**
  - Contains the DB-specific implementation leveraging typeORM and Supabase.

- **`frontend/`**
  - Contains the React-based frontend application.

## 🔧 Prerequisites

- Node.js and Yarn installed on your local development machine.

## 🚀 Getting Started

### Install Dependencies:

With Yarn workspaces, manage dependencies for both the backend and frontend from the root directory.

```bash
yarn install
```

## 🌐 Running the Backend
1. Navigate to the Backend Directory:
```bash
cd backend
```

2. Start the tRPC + Express Server:
```bash
yarn start
```

## 🖥️ Running the Frontend
1. Navigate to the Frontend Directory:
```bash
cd frontend
```
2. Start the React App:
```bash
yarn start
```

## 🕹️ Interacting with the Backend API
Fetch All Users:
Send a GET request to /api/users/getUsers

Add a New User:
Send a POST request to /api/users/createUser with user name and age as query input.

Delete a User:
Send a DELETE request to /api/users/deleteUser, along with the userID passed in the query input.

