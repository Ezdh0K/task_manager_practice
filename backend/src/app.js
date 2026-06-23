require('dotenv').config({
    quiet: true
});
const taskRoutes = require('./modules/tasks/task.routes');
const userRoutes = require('./modules/users/user.routes');
const authRoutes = require('./modules/auth/auth.routes');
const errorMiddleware = require("./middlewares/error.middleware");
const authMiddleware = require("./middlewares/auth.middleware");
const express = require('express');
const cors = require('cors');
const app = express();
const exportService = require('./services/export.service');

app.use(cors());
app.use(express.json());
app.use("/tasks", taskRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use(errorMiddleware);
app.get("/export", authMiddleware, async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization; // 👈 забираем токен
        const csvBuffer = await exportService.exportTasks(authHeader);
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename=tasks.csv');
        res.send(csvBuffer);
    } catch (error) {
        next(error);
    }
});

module.exports = app;