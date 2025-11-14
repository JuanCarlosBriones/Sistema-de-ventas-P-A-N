import { IconTrashX } from "@tabler/icons-react"


function PanInfo(){
    return(
        <>
            
                <div className="flex flex-row justify-between items-center border-2 border-pink-900 my-3">
                    <span className="flex justify-center items-center py-3 px-7 border-2 border-pink-900 ">
                        1
                    </span>
                    <span className="flex justify-center items-center py-3 px-28 border-2 border-pink-900">
                        Concha
                    </span>
                    <span className="flex justify-center items-center py-3 px-10 border-2 border-pink-900">
                        $12.50
                    </span>
                    <button>
                        <div className="flex justify-center items-center p-3 border-2 border-pink-900">
                            <IconTrashX stroke={2} />
                        </div>
                    </button>
                </div>

            
        </>
    )
}

export default PanInfo