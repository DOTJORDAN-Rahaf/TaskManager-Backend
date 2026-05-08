# Task Manager Backend API

A backend REST API for managing tasks using Node.js, Express.js, MongoDB Atlas, and JWT authentication.

## Live Deployment

Render Live Backend:

```txt
https://taskmanager-backend-98x0.onrender.com
```

Health Check API:

```txt
https://taskmanager-backend-98x0.onrender.com/api/health
```

GitHub Repository:

```txt
https://github.com/DOTJORDAN-Rahaf/TaskManager-Backend
```

## Features

- User registration and login
- Password hashing using bcryptjs
- JWT token generation
- Authentication middleware
- Role-based authorization
- CRUD APIs for tasks
- Users can manage only their own tasks
- Admin can view all tasks
- MongoDB Atlas cloud database connection
- Render deployment support
- Simple backend home page
- Health check endpoint

## Technologies

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- bcryptjs
- jsonwebtoken
- dotenv
- cors
- Postman
- Render

## Setup Locally

Install dependencies:

```bash
npm install
```

Create a `.env` file in the root directory:

```env
PORT=8000
MONGO_URI=mongodb+srv://USERNAME:PASSWORD@cluster-url/taskmanager?retryWrites=true&w=majority
JWT_SECRET=your_secret_key
```

Run the project in development mode:

```bash
npm run dev
```

Or run it using the start script:

```bash
npm start
```

Server runs locally on:

```txt
http://localhost:8000
```

Health check locally:

```txt
http://localhost:8000/api/health
```

## Deployment on Render

The backend is deployed on Render as a Web Service.

Render settings:

```txt
Build Command:
npm install

Start Command:
npm start
```

Environment variables added on Render:

```txt
MONGO_URI
JWT_SECRET
```

Note: `PORT` is not added manually on Render because Render provides it automatically during deployment.

## APIs

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Simple backend home page |
| GET | `/api/health` | Check if backend is running |
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login user and get token |
| GET | `/api/tasks` | Get user tasks |
| POST | `/api/tasks` | Create task |
| PUT | `/api/tasks/:id` | Update task |
| DELETE | `/api/tasks/:id` | Delete task |
| GET | `/api/tasks/admin/all` | Admin view all tasks |

## Authentication

Protected APIs require this header:

```txt
Authorization: Bearer TOKEN_HERE
```

## Example Health Check Response

```json
{
  "message": "Task Manager Backend is running"
}
```

## Notes

- Passwords are hashed before saving.
- JWT is used for authentication.
- Users can manage only their own tasks.
- Admin can view all tasks.
- MongoDB Atlas is used as the cloud database.
- The backend is deployed publicly using Render.
- The `.env` file is not pushed to GitHub for security reasons.