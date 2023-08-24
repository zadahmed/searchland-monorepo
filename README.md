### Searchland Monorepo Application

## 📁 Directory Structure
backend/
Contains the server logic built with tRPC, typeORM and express with a PSQL DB in Supabase.
Provides endpoints to:
    - Get all users
    - Add a user
    - Delete a user

backend/src/api 
Contains all the api specific definition using tRPC and Express
backend/src/db
Contains all the db specific implementation using typeORM and Supabase

frontend/
Contains the React application.
🔧 Prerequisites
Have Node.js and Yarn installed on your machine.

## 🚀 Getting Started

1. Install Dependencies:
Thanks to Yarn workspaces, dependencies for both the backend and frontend can be managed from the root directory.

bash
yarn install

## 🌐 Running the Backend
1. Navigate to the Backend Directory:
bash
cd backend

2. Start the tRPC + Express Server:
bash
yarn start

## 🖥️ Running the Frontend
1. Navigate to the Frontend Directory:
bash
cd frontend

2. Start the React App:
bash
yarn start

## 🕹️ Interacting with the Backend API
Fetch All Users:
Send a GET request to /api/users/getUsers

Add a New User:
Send a POST request to /api/users/createUser with user name and age as query input.

Delete a User:
Send a DELETE request to /api/users/deleteUser, along with the userID passed in the query input.

