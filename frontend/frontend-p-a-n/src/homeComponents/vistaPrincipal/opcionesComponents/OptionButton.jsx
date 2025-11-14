import { Button } from "@material-tailwind/react";

export function ButtonOption({nombre}){
    return(
        <>
            <div className="m-2">
                <Button size="lg">{nombre}</Button>
            </div>
        </>
    )
}


