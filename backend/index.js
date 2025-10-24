import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.post('/api/nombre',(req, res) => {
    const { nombre } = req.body;
    console.log("Nombre recibido: ", nombre)
    res.json({ nombre })
})

app.listen(port, () =>{
    console.log(`Servidor corriendo en http://localhost:${port}`)
})