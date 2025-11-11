import express from 'express'
import { createUser } from '../controller/inicioSesión/inicioSesionController.js'

const inicioRouter = express.Router()


inicioRouter.post('/login', createUser)

export default inicioRouter