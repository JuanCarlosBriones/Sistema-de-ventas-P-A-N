import ItemPan from "./panelPrincipalComponents/ItemPan"
import useDragScroll from "../../hook/useDragScroll"

function PanelPrincipal(){
    const { ref, onMouseDown, onMouseLeave, onMouseUp, onMouseMove } = useDragScroll()
    return(
        <>
            <div 
                ref={ref}
                onMouseDown={onMouseDown}
                onMouseLeave={onMouseLeave}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
                className="
                    grid 
                    grid-cols-4 
                    gap-10 
                    border-8 
                    border-pink-600 
                    w-auto 
                    p-5 
                    overflow-y-auto 
                    overflow-x-hidden 
                    h-max-screen
                    select-none"
            >
                <ItemPan />


                
            </div>
        </>
    )
}

export default PanelPrincipal