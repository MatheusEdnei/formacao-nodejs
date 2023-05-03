import ErrorBase from './ErroBase.js'

class NaoEncontrado extends ErrorBase {
	constructor(mensagem = 'Página não encontrada') {
		super(mensagem)
	}
}

export default NaoEncontrado