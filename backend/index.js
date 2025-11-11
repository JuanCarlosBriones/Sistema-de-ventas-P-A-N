import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import inicioRouter from './routes/inicioRouter.js'
import { createUser } from './controller/inicioSesión/inicioSesionController.js'

dotenv.config({ path: '.env' })


const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.use("/api", inicioRouter)


app.listen(port, () =>{
    console.log(`Servidor corriendo en http://localhost:${port}`)
})