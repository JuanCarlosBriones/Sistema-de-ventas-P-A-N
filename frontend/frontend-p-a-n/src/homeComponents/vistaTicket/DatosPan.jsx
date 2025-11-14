import PanInfo from "./InfoPan/PanInfo"

function DatosPan(){
    return(
        <>
            <div className=" border-8 border-pink-600">
                <div className="flex flex-row justify-between">
                    <span className="p-3 border-8 border-pink-600">
                        No.
                    </span>
                    <span className="p-3 border-8 border-pink-600">
                        Nombre
                    </span>
                    <span className="p-3 mr-3 border-8 border-pink-600">
                        Precio
                    </span>
                </div>
                <div className="border-8 border-pink-600 min-h-[490px] max-h-[490px] p-3 overflow-y-auto overflow-x-hidden">
                    <PanInfo />
                    <PanInfo />
                    <PanInfo />
                    <PanInfo />
                </div>
            </div>
        </>
    )
}

export default DatosPan