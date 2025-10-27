import { useLocation } from "wouter"

function Home(){   
    const [, setLocation] = useLocation() 
    return(
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-2x1 font-bold mb-4">
                    Página principal
                </h1>
                <button
                    onClick={() => setLocation("/dashboard")}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-blue-600"
                >
                    Ir al dashboard
                </button>
            </div>
        </>
    )
    
}

export default Home