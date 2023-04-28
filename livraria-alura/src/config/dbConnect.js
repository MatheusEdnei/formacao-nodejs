import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

const user = process.env.MONGODB_USER
const password = process.env.MONGODB_PASSWORD
const node = process.env.MONGODB_NODE

mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.mljrufm.mongodb.net/${node}?`)

const db = mongoose.connection

export default db