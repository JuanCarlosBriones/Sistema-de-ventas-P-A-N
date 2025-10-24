
import { useState } from 'react';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Carta from './Carta'
 
function App() {

  const [nombre, setNombre] = useState("")
  const [nombreRecibido, setNombreRecibido] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("http://localhost:3000/api/nombre", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({ nombre }),
      })
      const data = await res.json()
      setNombreRecibido(data.nombre)
    } catch (error) {
      console.error("Error enviando nombre:", error)
    }
  }

  return (
     <>
     <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="Ingresa tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth type='submit'>
          sign up
        </Button>
      </form>
    </Card>

    {nombreRecibido && <Carta nombre={nombreRecibido}/>}
    </>
  );
}

export default App