import { Typography } from "@material-tailwind/react"
import { useState } from "react"
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Input,
} from "@material-tailwind/react"
import { motion } from "framer-motion"
import Carta from "./Carta"



function ButtonLogin({setNombreRecibido}){
    
    const [nombre, setNombre] = useState("")
    
    

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
            console.error("Error en el envío del nombre: ", error)
        }
    }


    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen((cur) => !cur)

    return(
        <>
        <Button onClick={handleOpen} size="lg" fullWidth>
            Ingresar
        </Button>
        <Dialog 
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
        >
            <Card className="mx-auto w-full max-w-[24rem]">
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
                    <CardBody className="flex flex-col gap-4">
                        <Typography variant="h4" color="blue-gray">
                            Iniciar Sesión
                        </Typography>
                        <Typography
                        className="mb-3 font-normal"
                        variant="paragraph"
                        color="gray"
                        >
                            Ingresa tu Usuario y Contraseña para acceder.
                        </Typography>
                        <Typography className="-mb-2" variant="h6">
                          Usuario
                        </Typography>
                        <Input 
                            label="Usuario" 
                            size="lg" 
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                        <Typography className="-mb-2" variant="h6">
                          Contraseña
                        </Typography>
                        <Input label="Contraseña" size="lg" type="password" />
                    </CardBody>
                    <CardFooter className="pt-0">
                        <motion.div
                            whileHover={{scale:1.1}}
                            whileTap={{scale:0.95}}
                            transition={{type:"spring", stiffness:300}}
                        >
                            <Button variant="gradient" onClick={handleOpen} fullWidth type="submit" size="lg">
                                Ingresar
                            </Button>
                        </motion.div>
                    </CardFooter>   
                </form>
                
            </Card>
        </Dialog>
        </>
    )
}
function ButtonLoginAnimated({setNombreRecibido}){
    return(
        <>
            <motion.div
                whileHover={{scale:1.1}}
                whileTap={{scale:0.95}}
                transition={{type:"spring", stiffness:300}}
            >
                <ButtonLogin setNombreRecibido={setNombreRecibido} />
            </motion.div>
        </>
    )
}
function NewView(){
    return(
        <Button>Nueva Vista</Button>
    )
}

function WelcomeImage(){
    return(
        <>
            <img
              className="w-full h-screen object-cover"
              src="../src/assets/WelcomeImages/WelcomeImageWhitBread.jpg"
              alt="Welcome image with bread"
            />
        </>
    )
}

function Login(){
    const [nombreRecibido, setNombreRecibido] = useState("")
    return(
        <>

            <WelcomeImage />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 bg-orange-800 bg-opacity-50">
                
                <Typography variant="h1" className="text-6xl font-bold text-center drop-shadow-2xl font-playfair">
                Bienvenid@ al sistema P.A.N
                </Typography>
                
                <Typography variant="h6" className="mt-2 text-3xl text-center  font-playfair">
                Dónde se hornean los mejores negocios
                </Typography>
                
                <div className="mt-16">
                    <ButtonLoginAnimated setNombreRecibido={setNombreRecibido} />
                </div>
            </div>
            {nombreRecibido && <Carta nombre={nombreRecibido}/>}
        </>

    )
}

export default Login