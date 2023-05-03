import NaoEncontrado from '../erros/NaoEncontrado.js'
import autores from '../models/Autor.js'

class AutorController {
	static listarAutores = async (req, res, next) => {
		try {
			const autoresResultado = await autores.find()
			res.status(200).json(autoresResultado)
		} catch (erro) {
			next(erro)
		}
	}

	static listarAutorPorId = async (req, res, next) => {
		const id = req.params.id
		try {
			const autoresResultado = await autores.findById(id)
			
			if (autoresResultado !== null) {
				res.status(200).json(autoresResultado)
			} else {
				next(new NaoEncontrado('Id não localizado'))
			}

		} catch (erro) {
			next(erro)
		}
	}

	static cadastrarAutor = async (req, res, next) => {
		const autor = new autores(req.body)
		try {
			const autorSalvo = await autor.save()
			res.status(200).send(autorSalvo.toJSON())
		} catch (erro) {
			next(erro)

		}
	}

	static atualizarAutor = async (req, res, next) => {
		const id = req.params.id
		try {
			const autor = await autores.findByIdAndUpdate(id, { $set: req.body })

			if (autor !== null) {
				res.status(200).send({ message: `Autor ${autor} atualizado com sucesso` })
			} else {
				next(new NaoEncontrado('ID do autor não localizado'))
			}
		} catch (erro) {
			next(erro)
		}
	}

	static excluirAutor = async (req, res, next) => {
		const id = req.params.id
		try {
			const autor = await autores.findByIdAndDelete(id)

			if (autor !== null) {
				res.status(200).send({ message: `Autor ${autor} removido com sucesso` })
			} else {
				next(new NaoEncontrado('Id do autor não encontrado'))
			}
		} catch (erro) {
			next(erro)
		}
	}

}

export default AutorController