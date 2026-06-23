const axios = require('axios');

async function analyzeTask(text) {
    const response = await axios.post(
        "http://127.0.0.1:8000/analyze", { text }
    );
    return response.data;
}

module.exports = {
    analyzeTask
};