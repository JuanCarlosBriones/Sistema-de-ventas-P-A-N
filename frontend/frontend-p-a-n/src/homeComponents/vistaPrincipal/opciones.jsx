import { ButtonOption } from "./opcionesComponents/OptionButton"

function OpcionesInicio(){
    return(
        <>
            <div className="flex justify-start border-8 border-pink-600 w-auto">
                <ButtonOption nombre={ "BOLILLO" }/>
                <ButtonOption nombre={ "DULCE" }/>
                <ButtonOption nombre={ "SALADOS" }/>
                <ButtonOption nombre={ "BEBIDAS" }/>
            </div>
        </>
    )
}

export default OpcionesInicio