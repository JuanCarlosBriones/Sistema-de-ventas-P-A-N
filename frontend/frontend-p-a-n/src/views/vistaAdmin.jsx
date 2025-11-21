import SideBarAdmin from "../adminComponents/SideBarAdmin"
import SideBar from "../components/SideBar"

function vistaAdmin(){
    return(
        <>
            <div className="flex flex-row w-screen h-screen border-4 border-amber-400">
                <div className="border-4 border-pink-800 w-auto h-auto">
                    <SideBarAdmin />
                </div>
                <div className="border-4 border-pink-900 w-full h-full">
                    
                </div>
            </div>
        </>
    )
}

export default vistaAdmin