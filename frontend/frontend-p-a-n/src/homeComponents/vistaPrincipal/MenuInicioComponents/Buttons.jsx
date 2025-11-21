import { Button } from "@material-tailwind/react"
import { toast } from "sonner"
import { useLocation } from "wouter"



function CerrarCaja(){
    const [, setLocation] = useLocation()
    const handleCerrar = () => {
        setLocation("/")
        toast.success("Haz cerrado sesión con éxito")
    }
    return(
        <>
            <div className="mr-3">
                <Button onClick={handleCerrar} size="md">Cerrar caja</Button>
            </div>
            
        </>
    )
}

function Cupones({vistaPanel, isCupon, setDesabilitar, desabilitado}){
    
    const handleCupon = () => {
        vistaPanel("cupones")
        isCupon(prev => !prev)
        setDesabilitar(true)
    }
    return(
        
        <>
            <div className="mr-6">
                <Button 
                    onClick={handleCupon}
                    size="md"
                    disabled={desabilitado}
                    >
                        Cupones
                    </Button>
            </div>   
        </>
    )
}
export {CerrarCaja, Cupones}