const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.get("/api/health", (req, res) => {
    res.json({ message: "Task Manager Backend is running" });
});
app.get("/", (req, res) => {
    res.send(`
    <div style="font-family: Arial; text-align: center; margin-top: 80px;">
      <h1>Task Manager Backend</h1>
      <p>API is running successfully.</p>
      <p>Health Check: <a href="/api/health">/api/health</a></p>
    </div>
  `);
});
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");

        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error.message);
    });