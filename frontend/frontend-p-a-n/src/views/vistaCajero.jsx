import MenuInicio from "../homeComponents/menuInicio"
import OpcionesInicio from "../homeComponents/opciones"

import panelPrincipal from "../homeComponents/panelPrincipal"


function vistaCajero(){
    return(
        <>
            <div className="flex justify-center items-center flex-row border-4 border-indigo-500 h-svh">
                <div className="flex flex-col basis-2/3 border-4 border-light-green-800 h-svh">
                    <MenuInicio />
                    <OpcionesInicio />
                </div>
                <div className=" basis-[30vw] border-4 ml-5 border-light-green-800 h-svh">

                </div>
            </div>
        </>
    )
}

export default vistaCajero