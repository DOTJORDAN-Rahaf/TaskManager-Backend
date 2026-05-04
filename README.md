# TaskManager Backend API

A simple backend API for managing tasks using Node.js, Express.js, MongoDB, and JWT authentication.

## Features

- Register and Login
- Password hashing using bcryptjs
- JWT token generation
- Authentication middleware
- Role-based authorization
- CRUD APIs for tasks
- Admin API to view all tasks

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- jsonwebtoken
- dotenv
- cors
- Postman

## Setup

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
PORT=8000
MONGO_URI=mongodb://127.0.0.1:27017/task_manager_db
JWT_SECRET=task_manager_secret_key
```

Run the project:

```bash
npm run dev
```

Server runs on:

```txt
http://localhost:8000
```

## APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login user and get token |
| GET | `/api/tasks` | Get user tasks |
| POST | `/api/tasks` | Create task |
| PUT | `/api/tasks/:id` | Update task |
| DELETE | `/api/tasks/:id` | Delete task |
| GET | `/api/tasks/admin/all` | Admin view all tasks |

## Authentication

Protected APIs need this header:

```txt
Authorization: Bearer TOKEN_HERE
```

## Notes

- Passwords are hashed before saving.
- Users can manage only their own tasks.
- Admin can view all tasks.