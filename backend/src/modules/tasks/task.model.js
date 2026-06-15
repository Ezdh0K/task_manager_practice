const pool = require('../../db/pool');

exports.createTask = async (taskData) => {
    const { task_title, task_description } = taskData;
    const result = await pool.query(
        `INSERT INTO tasks (task_title, task_description)
        VALUES ($1, $2)
        RETURNING task_title, task_description`, 
        [task_title, task_description]
    );
    return result.rows[0];
};

exports.readAllTasks = async (taskData) => {
    const result = await pool.query(`SELECT * FROM tasks`);
    return result.rows;
};

exports.readTaskById = async (taskData) => {
    const { task_id } = taskData;
    const result = await pool.query(
        `SELECT * FROM tasks
        WHERE task_id = $1`,
        [task_id]
    );
    return result.rows[0];
};

exports.putTask = async (taskData) => {
    const { task_id, task_title, task_description, task_status } = taskData;
    const result = await pool.query(
        `UPDATE tasks SET task_title = $1, task_description = $2, task_status = $3
        WHERE task_id = $4
        RETURNING task_id, task_title, task_description, task_status`,
        [ task_title, task_description, task_status, task_id ]
    );
    return result.rows[0];
};

exports.deleteTask = async (taskData) => {
    const { task_id } = taskData;
    const result = await pool.query(
        `DELETE FROM tasks WHERE task_id = $1`,
        [task_id]
    );
    return result.rowCount;
};