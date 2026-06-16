require('dotenv').config();
const taskRoutes = require('./modules/tasks/task.routes');
const userRoutes = require('./modules/users/user.routes');
const authRoutes = require('./modules/auth/auth.routes');
const errorMiddleware = require("./middlewares/error.middleware");
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use("/tasks", taskRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use(errorMiddleware);

module.exports = app;