import MenuInicio from "../homeComponents/menuInicio"
import OpcionesInicio from "../homeComponents/opciones"

import panelPrincipal from "../homeComponents/panelPrincipal"


function vistaCajero(){
    return(
        <>
            <div className="flex  w-full h-full  flex-row justify-between">
                <div className="flex flex-col basis-2/3 border-4 border-light-green-800 w-screen h-screen">
                    <MenuInicio />
                    <OpcionesInicio />
                </div>
                <div className=" basis-[30vw] border-4  border-light-green-800 w-screen h-screen">
                </div>
            </div>
        </>
    )
}

export default vistaCajero