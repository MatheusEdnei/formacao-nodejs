import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://ednei880:<password>@cluster0.mljrufm.mongodb.net/alura-node?')

const db = mongoose.connection

export default db