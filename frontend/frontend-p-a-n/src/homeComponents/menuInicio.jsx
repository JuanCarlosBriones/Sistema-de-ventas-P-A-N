import { CerrarCaja, Cupones } from "./MenuInicioComponents/Buttons"
import { MostrarFecha, MostrarHora } from "./MenuInicioComponents/FechaHora"
import Paths from "./MenuInicioComponents/Paths"

function MenuInicio(){
    return(
        <>
            <div className="flex flex-row justify-center items-center  border-8 border-pink-600 w-auto" >
                <Paths />
                <div className="flex flex-row justify-center items-center  border-8 border-pink-600 w-auto">
                    <MostrarFecha />
                    <MostrarHora />
                </div>
                <div>
                    <CerrarCaja />
                    <Cupones />
                </div>
                
            </div>
        </>
    )
}

export default MenuInicio