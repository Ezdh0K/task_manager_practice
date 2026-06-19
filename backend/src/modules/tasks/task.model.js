const pool = require('../../db/pool.js');

exports.createTask = async (taskData) => {
    const { user_id, task_title, task_description, task_status = 'new', category, priority } = taskData;
    const result = await pool.query(
        `INSERT INTO tasks (user_id, task_title, task_description, task_status, category, priority)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING task_id, user_id, task_title, task_description, task_status, category, priority, task_created_at`, 
        [user_id, task_title, task_description, task_status, category, priority]
    );
    return result.rows[0];
};

exports.getTasksByUser = async (taskData) => {
    const { user_id } = taskData;
    const result = await pool.query(`SELECT task_id, user_id, task_title, task_description, task_status, category, priority, task_created_at FROM tasks WHERE user_id = $1`, [user_id]);
    return result.rows;
};

exports.getTaskById = async (taskData) => {
    const { task_id } = taskData;
    const result = await pool.query(
        `SELECT task_id, user_id, task_title, task_description, task_status, category, priority, task_created_at FROM tasks
        WHERE task_id = $1`,
        [task_id]
    );
    return result.rows[0];
};

exports.updateTask = async (taskData) => {
    const { task_id, new_task_title, new_task_description, new_task_status, new_category, new_priority } = taskData;
    const result = await pool.query(
        `UPDATE tasks SET task_title = $1, task_description = $2, task_status = $3, category = $4, priority = $5
        WHERE task_id = $6
        RETURNING task_id, user_id, task_title, task_description, task_status, category, priority, task_created_at`,
        [ new_task_title, new_task_description, new_task_status, new_category, new_priority, task_id ]
    );
    return result.rows[0];
};

exports.deleteTask = async (taskData) => {
    const { task_id } = taskData;
    const result = await pool.query(
        `DELETE FROM tasks WHERE task_id = $1 RETURNING *`,
        [task_id]
    );
    return result.rows[0];
};