require('dotenv').config({
    quiet: true
});
const app = require('./app');
const pool = require('./db/pool');

pool.query('SELECT NOW()', (err, res) => {
    if (err) { console.log('Error connecting to the database', err.stack);  }
    else { console.log('Database connect is succesfuly.', res.rows); }
});

const PORT = process.env.PORT || 4000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
    console.log(`Сервер слушает порт: ${PORT}`);
})