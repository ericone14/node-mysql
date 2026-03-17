const repository = require("../repository/alunoRepository.js")

// listar aluno
exports.listar = (req, resp) => {
    repository.listarAlunos((erro, resultado) => {
        if(erro){
            resp.send("Erro de banco")
        } else {
            resp.json(resultado)
        }
    })
}

// inserir aluno
exports.inserir = (req, resp) => {
    const dados = req.body
    repository.inserirAlunos(dados, (erro, resultado) => {
        if(erro){
            return res.status(500).send("Erro ao inserir: " + err.message)
        } else {
            resp.send("Aluno inserido.")
        }
    })
}
