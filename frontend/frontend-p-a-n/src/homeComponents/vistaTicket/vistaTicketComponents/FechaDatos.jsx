import { MostrarFecha } from "../../vistaPrincipal/MenuInicioComponents/FechaHora"

function FechaDatos(){
    return(
        <>
            <div className="flex justify-center items-center">
                FECHA:
            </div>
            <div className="flex justify-center items-center col-span-3">
                <MostrarFecha />
            </div>
        </>
    )
}
export default FechaDatos