const pool = require('../../db/pool');

exports.createTask = async (taskData) => {
    const { user_id, task_title, task_description } = taskData;
    const result = await pool.query(
        `INSERT INTO tasks (user_id, task_title, task_description)
        VALUES ($1, $2, $3)
        RETURNING *`, 
        [user_id, task_title, task_description]
    );
    return result.rows[0];
};

exports.getTasksByUser = async (taskData) => {
    const { user_id } = taskData;
    const result = await pool.query(
        `SELECT * FROM tasks
        WHERE user_id = $1`,
        [user_id]
    );
    return result.rows;
};

exports.getTaskById = async (taskData) => {
    const { task_id } = taskData;
    const result = await pool.query(
        `SELECT * FROM tasks
        WHERE task_id = $1`,
        [task_id]
    );
    return result.rows[0];
};

exports.updateTask = async (taskData) => {
    const { task_id, new_task_title, new_task_description, new_task_status } = taskData;
    const result = await pool.query(
        `UPDATE tasks SET task_title = $1, task_description = $2, task_status = $3
        WHERE task_id = $4
        RETURNING *`,
        [ new_task_title, new_task_description, new_task_status, task_id ]
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