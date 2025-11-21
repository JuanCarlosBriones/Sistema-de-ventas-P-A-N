import { useState } from "react"
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react"
import ButtonModalEfectivo from "./ButtonModalEfectivo"

function ButtonModal({ nombre }){
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(prev => !prev)
    

    return(
        <>
            <Button onClick={handleOpen} variant="gradient">
                {nombre}
            </Button>
            <Dialog
                dismiss={{ enabled: false }}
                open={open}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
            >
                
                <DialogHeader>
                    <div className="grid grid-cols-2 grid-rows-2  border-8 border-pink-600 w-full ">
                        <div className="border-8 border-pink-600">
                            Total:
                        </div>
                        <div className="border-8 border-pink-600">
                            $47.26
                        </div>
                        <div className="col-span-2 border-8 border-pink-600">
                            Elegir forma de pago
                        </div>
                    </div>
                </DialogHeader>
                <DialogBody>
                    <div className="border-8 border-pink-600">
                        
                        <ButtonModalEfectivo nombre={"TARJETA"}/>
                        <ButtonModalEfectivo nombre={"EFECTIVO"}/>
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button 
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancelar</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>

    )
}

export default ButtonModal