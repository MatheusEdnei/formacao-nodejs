import express from 'express'
import AutorController from '../controllers/autoresController.js'
import paginar from '../middlewares/paginar.js'

const router = express.Router()

router.get('/autores', AutorController.listarAutores, paginar)
router.get('/autores/:id', AutorController.listarAutorPorId)
router.post('/autores', AutorController.cadastrarAutor)
router.put('/autores/:id', AutorController.atualizarAutor)
router.delete('/autores/:id', AutorController.excluirAutor)

export default router