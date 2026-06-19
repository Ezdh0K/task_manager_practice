CREATE TABLE tasks (
    task_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    task_title VARCHAR(255) NOT NULL,
    task_description VARCHAR(500),
    task_status VARCHAR(15) NOT NULL DEFAULT 'new'
    CHECK(task_status in ('new', 'done', 'in_progress')),
    category VARCHAR(50),
    priority VARCHAR(50)
    CHECK (priority in ('low', 'middle', 'high')),
    task_created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL,
    user_email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(500) NOT NULL,
    user_created_at TIMESTAMP DEFAULT NOW(),
    role VARCHAR(50) DEFAULT 'user'
    CHECK (role in ('user', 'admin'))
);