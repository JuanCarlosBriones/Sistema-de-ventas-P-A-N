import CajaDatos from "./vistaTicketComponents/CajaDatos"
import FechaDatos from "./vistaTicketComponents/FechaDatos"
import TicketDatos from "./vistaTicketComponents/TicketDatos"

function DatosTicket(){
    return(
        <>
            <div className="grid grid-rows-4 grid-cols-4 border-8 border-pink-600 w-auto">
                <div className="flex justify-center items-center col-span-4">
                    <span> SISTEMA P.A.N </span>
                </div>
                <TicketDatos />
                <CajaDatos />
                <FechaDatos />
            </div>
        </>
    )
}
export default DatosTicket