const mysql = require('mysql')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'rede',
})

conn.connect(function (err) {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log('Conectado com o banco!');
    }
});

module.exports = conn;