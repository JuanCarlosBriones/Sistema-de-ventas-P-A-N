import { useState } from "react"
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react"

function ButtonModalEfectivo({ nombre }){
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(prev => !prev)

    return(
        <>
            <Button onClick={handleOpen} variant="gradient">
                {nombre}
            </Button>
            <Dialog
                open={open}
                handler={handleOpen}
                dismiss={{ enabled: false }}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
            >
                <DialogHeader>
                    <div className="border-8 border-pink-600 w-full ">
                        <div className="border-8 border-pink-600">
                            PAGO CON {nombre}
                        </div>
                        <div className="border-8 border-pink-600">
                            PAGO EN PROCESO
                        </div>
                    </div>
                </DialogHeader>
                <DialogBody>
                    <div className="border-8 border-pink-600">
                        <Button onClick={handleOpen}>REGRESAR</Button>
                        <Button>FINALIZAR</Button>
                    </div>
                </DialogBody>
            </Dialog>
        </>

    )
}

export default ButtonModalEfectivo