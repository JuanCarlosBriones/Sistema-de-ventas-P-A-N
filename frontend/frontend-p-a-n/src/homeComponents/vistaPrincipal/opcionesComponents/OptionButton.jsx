import { Button } from "@material-tailwind/react";

export function ButtonOption({nombre, vistaPanel, setdesabilitar, setIsCupon}){
    const handleRegresar = () => {
        vistaPanel("principal")
        setdesabilitar(false)
        setIsCupon(false)
    }
    return(
        <>
            <div className="m-2">
                {nombre === "REGRESAR" ? 
                <Button onClick={handleRegresar} size="lg">{nombre}</Button>:
                <Button size="lg">{nombre}</Button>}
                
            </div>
        </>
    )
}


