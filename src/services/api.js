const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const taskAPI = {
  createTask: async (task_title, task_description, task_status = 'new', category = null, priority = null) => {
    try {
      const response = await fetch(`${API_BASE_URL}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task_title, task_description, task_status, category, priority }),
      });
      if (!response.ok) throw new Error('Failed to create task');
      return await response.json();
    } catch (error) {
      console.error('Error creating task:', error);
      throw error;
    }
  },

  getAllTasks: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/tasks`);
      if (!response.ok) throw new Error('Failed to fetch tasks');
      return await response.json();
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw error;
    }
  },

  getTaskById: async (task_id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/tasks/${task_id}`);
      if (!response.ok) throw new Error('Failed to fetch task');
      return await response.json();
    } catch (error) {
      console.error('Error fetching task:', error);
      throw error;
    }
  },

  updateTask: async (task_id, new_task_title, new_task_description, new_task_status, new_category, new_priority) => {
    try {
      const response = await fetch(`${API_BASE_URL}/tasks/${task_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ new_task_title, new_task_description, new_task_status, new_category, new_priority }),
      });
      if (!response.ok) throw new Error('Failed to update task');
      return await response.json();
    } catch (error) {
      console.error('Error updating task:', error);
      throw error;
    }
  },

  deleteTask: async (task_id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/tasks/${task_id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete task');
      return await response.json();
    } catch (error) {
      console.error('Error deleting task:', error);
      throw error;
    }
  },
};

export const userAPI = {
  createUser: async (user_name, user_email, password_hash) => {
    try {
      const response = await fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_name, user_email, password_hash }),
      });
      if (!response.ok) throw new Error('Failed to create user');
      return await response.json();
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },

  getUserByEmail: async (user_email) => {
    try {
      const response = await fetch(`${API_BASE_URL}/users`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_email }),
      });
      if (!response.ok) throw new Error('Failed to fetch user');
      return await response.json();
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  },

  updateUser: async (user_id, new_user_name, new_user_email, new_user_password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/${user_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ new_user_name, new_user_email, new_user_password }),
      });
      if (!response.ok) throw new Error('Failed to update user');
      return await response.json();
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  },

  deleteUser: async (user_id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/${user_id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete user');
      return await response.json();
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  }
};

export const authAPI = {
  login: async (user_email, password, role) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_email, password, role }),
      });
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Ошибка при входе');
      }
      
      return data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  },

  register: async (user_name, user_email, password, role = 'user') => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/registration`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_name, user_email, password, role }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.message || 'Failed to register');
      }
      return data;
    } catch (error) {
      console.error('Error registering:', error);
      throw error;
    }
  }
};
