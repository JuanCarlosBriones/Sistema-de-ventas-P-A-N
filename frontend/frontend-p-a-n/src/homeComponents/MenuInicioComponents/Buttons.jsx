import { Button } from "@material-tailwind/react"

function CerrarCaja(){
    return(
        <>
            <div className="mr-3">
                <Button size="md">Cerrar caja</Button>
            </div>
            
        </>
    )
}

function Cupones(){
    return(
        <>
            <div className="mr-6">

            </div>
            <Button size="md">Cupones</Button>
        </>
    )
}
export {CerrarCaja, Cupones}