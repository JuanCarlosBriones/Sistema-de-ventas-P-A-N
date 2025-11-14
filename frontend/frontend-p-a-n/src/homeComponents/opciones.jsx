import { ButtonOption } from "./opcionesComponents/OptionButton"

function OpcionesInicio(){
    return(
        <>
            <div className="flex justify-start border-8 border-pink-600 w-auto">
                <ButtonOption />
                <ButtonOption />
                <ButtonOption />
                <ButtonOption />
            </div>
        </>
    )
}

export default OpcionesInicio