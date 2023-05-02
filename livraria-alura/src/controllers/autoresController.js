import mongoose from 'mongoose'
import autores from '../models/Autor.js'

class AutorController {
	static listarAutores = async (req, res) => {
		try {
			const autoresResultado = await autores.find()
			res.status(200).json(autoresResultado)
		} catch (erro) {
			res.status(500).json({ message: 'Erro interno no servidor' })
		}
	}

	static listarAutorPorId = async (req, res) => {
		const id = req.params.id
		try {
			const autoresResultado = await autores.findById(id)
			
			if (autoresResultado !== null) {
				res.status(200).json(autoresResultado)
			} else {
				res.status(404).json({ message: 'Id não localizado' })
			}

		} catch (erro) {
			if (erro instanceof mongoose.Error.CastError) {
				res.status(400).send({message: 'Um ou mais dados fornecidos estão incorretos'})
			} else {
				res.status(500).send( { message: 'Erro interno do servidor' } )
			}
		}
	}

	static cadastrarAutor = async (req, res) => {
		const autor = new autores(req.body)
		try {
			const autorSalvo = await autor.save()
			res.status(200).send(autorSalvo.toJSON())
		} catch (erro) {
			res.status(500).send({ message: `${erro.message} - falha ao cadastrar autor` })
		}
	}

	static atualizarAutor = async (req, res) => {
		const id = req.params.id
		try {
			const autor = await autores.findByIdAndUpdate(id, { $set: req.body })
			res.status(200).send({ message: `Autor ${autor} atualizado com sucesso` })
		} catch (erro) {
			res.status(500).send({ message: erro.message })
		}
	}

	static excluirAutor = async (req, res) => {
		const id = req.params.id
		try {
			const autor = await autores.findByIdAndDelete(id)
			res.status(200).send({ message: `Autor ${autor} removido com sucesso` })
		} catch (erro) {
			res.status(500).send({ message: erro.message })
		}
	}

}

export default AutorController