const express = require("express")
const app = express();
const cors = require("cors")
const conexaoBd = require("./server/db.js")
const alunoController = require("./controller/alunoController.js")

app.use(cors())
// rota listar alunos
app.get("/alunos", alunoController.listar)

// rota inserir alunos
app.post("/alunos", alunoController.inserir)

conexaoBd

const PORT = 3023;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`)
})