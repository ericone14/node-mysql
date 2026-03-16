const db = require('../server/db.js')

// listar alunos
exports.listarAlunos = (callback) => {
    const sql = "select * from aluno"
    db.query(sql, (erro, resultado) => {
        callback(erro, resultado)
    })
}

// inserir alunos
exports.inserirAlunos = (callback) => {
    const sql = "insert into aluno set ?"
    db.query(sql, (erro, resultado) => {
        callback(erro, resultado)
    })
}

// module.exports = db