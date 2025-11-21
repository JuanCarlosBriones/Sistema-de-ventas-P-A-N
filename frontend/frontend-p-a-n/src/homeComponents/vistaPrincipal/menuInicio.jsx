import { CerrarCaja, Cupones } from "./MenuInicioComponents/Buttons"
import { MostrarFecha, MostrarHora } from "./MenuInicioComponents/FechaHora"
import Paths from "./MenuInicioComponents/Paths"

function MenuInicio({vistaPanel, isCupon, setDesabilitar, desabilitado}){
    return(
        <>
            <div className="flex justify-between flex-row   border-8 border-pink-600 w-auto" >
                <Paths />
                <div className="flex flex-row justify-between items-center px-5  border-8 border-pink-600 w-auto">
                    <MostrarFecha />
                    <span>|</span>
                    <MostrarHora />
                </div>
                <div className="flex justify-between">
                    <CerrarCaja />
                    <Cupones vistaPanel={vistaPanel} isCupon={isCupon} setDesabilitar={setDesabilitar} desabilitado={desabilitado} />
                </div>
                
            </div>
        </>
    )
}

export default MenuInicio