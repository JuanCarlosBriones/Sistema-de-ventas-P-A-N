import { useEffect, useState } from "react"

function MostrarFecha(){
    const [fecha, setFecha] = useState("")
    const opciones = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setFecha(new Date().toLocaleDateString("es-MX", opciones))
        }, 1000)
        return () => clearInterval(interval)
    })
    return(
        <>
            <span className="mx-5">
                {fecha}
            </span>
        </>
    )
}

function MostrarHora(){
    const [hora, setHora] = useState("")
    useEffect(() => {
        const interval = setInterval(() => {
            setHora(new Date().toLocaleTimeString("es-MX", { hour12: true }))
        }, 1000)
        return () => clearInterval(interval)
    })
    return(
        <>
            <span className="mx-5">
                {hora}
            </span>
        </>
    )
}

export {MostrarFecha, MostrarHora}