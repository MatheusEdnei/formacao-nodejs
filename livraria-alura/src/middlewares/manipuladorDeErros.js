import mongoose from 'mongoose'
import ErrorBase from '../erros/ErroBase.js'
import ErroValidacao from '../erros/ErroValidacao.js'
import NaoEncontrado from '../erros/NaoEncontrado.js'
import RequisicaoIncorreta from '../erros/RequisicaoIncorreta.js'

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros (erro, req, res, next) {
	console.log(erro)
	if (erro instanceof mongoose.Error.CastError) {
		new RequisicaoIncorreta().enviarResposta(res)
	} else if (erro instanceof mongoose.Error.ValidationError) {
		new ErroValidacao(erro).enviarResposta(res)
	} else if (erro instanceof NaoEncontrado) {
		erro.enviarResposta(res)
	} else {
		new ErrorBase().enviarResposta(res)
	}
}

export default manipuladorDeErros