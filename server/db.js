const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'alunolab',
    database: 'colegio',
    port: '3303'
})

connection.connect((err) => {
    if(err){
        console.error('Erro ao se conectar no MySQL', err)
    }
    console.log('Conectado ao MySQL')
})

module.exports = connection
 