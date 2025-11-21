import MenuInicio from "../homeComponents/vistaPrincipal/menuInicio"
import OpcionesInicio from "../homeComponents/vistaPrincipal/opciones"
import PanelPrincipal from "../homeComponents/vistaPrincipal/PanelPrincipal"
import DatosPan from "../homeComponents/vistaTicket/DatosPan"
import DatosTicket from "../homeComponents/vistaTicket/DatosTicket"
import TotalDatos from "../homeComponents/vistaTicket/TotalDatos"
import ButtonAction from "../homeComponents/vistaTicket/ButtonsAction"
import { useState } from "react"
import PanelCuponesCajero from "../homeComponents/vistaPrincipal/panelPrincipalCupones/PanelPrincipalCupones"



function vistaCajero(){
    const [vistaPanel, setVista] = useState("principal")
    const [isCupon, setIsCupon] = useState(false)
    const [desabilitar, setDesabilitar] = useState(false)

    return(
        <>
            <div className="flex  w-full h-full  flex-row ">
                <div className="flex flex-col  border-4 border-light-green-800 w-screen h-screen">
                    <MenuInicio vistaPanel={setVista} isCupon={setIsCupon} setDesabilitar={setDesabilitar} desabilitado={desabilitar}  />
                    <OpcionesInicio vistaPanel={setVista} isCupon={isCupon} setdesabilitar={setDesabilitar} setIsCupon={setIsCupon}/>
                    <div>
                        {vistaPanel === "principal" ? <PanelPrincipal /> : <PanelCuponesCajero />}
                    </div>
                </div>
                <div className="flex flex-col basis-[40vw] border-4  border-light-green-800 w-screen max-h-screen">
                    <DatosTicket />
                    <DatosPan />
                    <TotalDatos />
                    <ButtonAction />
                    
                </div>
            </div>
        </>
    )
}

export default vistaCajero