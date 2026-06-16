const pool = require('../../db/pool');

exports.createUser = async (userData) => {
    const {user_name, user_email, password_hash} = userData;
    const result = await pool.query(
        `INSERT INTO users (user_name, user_email, password_hash)
        VALUES ($1, $2, $3)
        RETURNING user_id, user_name, user_email, password_hash`,
        [user_name, user_email, password_hash]
    );

    return result.rows[0];
};

exports.getAllUsers = async () => {
    const result = await pool.query(`SELECT * FROM users`);
    return result.rows;
};

exports.getUserByEmail = async (userData) => {
    const { user_email } = userData;
    const result = await pool.query(
        `SELECT * FROM users
        WHERE user_email = $1`,
        [user_email]
    );

    return result.rows[0];
};

exports.putUser = async (userData) => {
    const { user_id, new_user_name, new_user_email, new_user_password } = userData;
    const result = await pool.query(
        `UPDATE users SET user_name = $1, user_email = $2, password_hash = $3
        WHERE user_id = $4
        RETURNING user_id, user_name, user_email, password_hash`,
        [new_user_name, new_user_email, new_user_password, user_id]
    );

    return result.rows[0];
};

exports.deleteUser = async (userData) => {
    const { user_id } = userData;
    const result = await pool.query(
        `DELETE FROM users WHERE user_id = $1`,
        [user_id]
    );

    return result.rowCount;
};