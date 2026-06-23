const axios = require("axios");

async function exportTasks(authHeader) {
    const headers = {};
    if (authHeader) {
        headers['Authorization'] = authHeader; // 👈 передаём Bearer <token>
    }

    try {
        const response = await axios.get(
            "http://127.0.0.1:8000/export",
            { responseType: 'arraybuffer', headers }
        );
        return response.data;
    } catch (error) {
        // Логируем, чтобы видеть реальную причину
        if (error.response) {
            console.error('Python вернул ошибку:', {
                status: error.response.status,
                data: error.response.data.toString('utf-8'),
            });
        } else {
            console.error('Не удалось связаться с Python:', error.message);
        }
        throw error;
    }
}

module.exports = { exportTasks };