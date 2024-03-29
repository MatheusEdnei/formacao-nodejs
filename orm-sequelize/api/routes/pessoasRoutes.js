const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router.get("/pessoas", PessoaController.pegaPessoasAtivas);
router.get("/pessoas/todos", PessoaController.pegaTodasAsPessoas)
router.get("/pessoas/:id", PessoaController.pegaUmaPessoa);
router.get("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.pegaUmaMatricula)
router.post("/pessoas", PessoaController.criaPessoa);
router.post("pessoas/:estudanteId/matricula", PessoaController.criaMatricula)
router.post("/pessoas/:id/restaura", PessoaController.restauraPessoa)
router.put("/pessoas/:id", PessoaController.atualizaPessoa);
router.put("/pessoas/:estudanteId/matricula/:matriculaid", PessoaController.atualizaMatricula)
router.delete("/pessoas/:id", PessoaController.apagaPessoa);
router.delete("/pessoas/:estudanteId/matricula/:matriculaiD", PessoaController.apagaMatricula)
module.exports = router;
