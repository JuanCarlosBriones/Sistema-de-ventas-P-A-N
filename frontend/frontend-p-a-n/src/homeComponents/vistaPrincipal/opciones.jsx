import { ButtonOption } from "./opcionesComponents/OptionButton"

function OpcionesInicio({ isCupon, setIsCupon, vistaPanel, setdesabilitar}){
    let botones
    if(isCupon){
        botones = <ButtonOption nombre={ "REGRESAR" } vistaPanel={vistaPanel} setdesabilitar={setdesabilitar} setIsCupon={setIsCupon} />
    }else{
        botones = 
            [
                <ButtonOption nombre={ "BOLILLO" }/>,
                <ButtonOption nombre={ "DULCE" }/>,
                <ButtonOption nombre={ "SALADOS" }/>,
                <ButtonOption nombre={ "BEBIDAS" }/>
            ]
    }
    return(
        <>
            <div className="flex justify-start border-8 border-pink-600 w-auto">
                {botones}
            </div>
        </>
    )
}

export default OpcionesInicio