import mongoose from 'mongoose'

const livroScrema = new mongoose.Schema(
    {
       id: { type: String },
       titulo: { type: String, required: true },
       autor: { type: String, required: true },
       editora: { type: String, required: true },
       numeroPaginas: { type: Number }
    }
)

const livros = mongoose.model('livros', livroScrema)

export default livros