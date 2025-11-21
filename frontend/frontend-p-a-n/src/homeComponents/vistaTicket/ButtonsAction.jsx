import { Button } from "@material-tailwind/react"
import ButtonModal from "./vistaTicketComponents/ButtonModal"

function ButtonAction(){
    return(
        <>
            <div className="flex flex-row justify-between items-center border-8 border-pink-600 p-3">
                <div className="flex justify-center items-center ml-20  border-8 border-pink-600">
                    <Button>Cancelar</Button>
                </div>
                <div className="flex justify-center items-center mr-20 border-8 border-pink-600">
                    <ButtonModal nombre={ 'Continuar' }  />
                </div>
            </div>
        </>
    )
}

export default ButtonAction