import concha from "../../../assets/PanImages/Concha.png"
function ItemPan(){
    const click = () => console.log("Me clicquearon")
    return(
        <>
            <button
                onClick={click}
            >
                <div className="flex flex-col border-8 border-pink-600 items-center w-60">
                    <img 
                        className="size-56 pointer-events-none select-none"
                        src={concha}

                    />
                    <div className="flex flex-row items-center justify-between border-8 border-pink-600 w-56">
                        <span className="px-5">
                            Concha
                        </span>
                        <span>
                            |
                        </span>
                        <span className="px-5">
                            12pz
                        </span>
                    </div>  
                </div>
                </button>
            
        </>
    )
}
export default ItemPan