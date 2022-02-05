import React from "react";
import './ModalTitle.css'


let ModalTitle = ({active, setActive, children}) => {
    return(
        <div className={active ? "modalTitle active" : "modalTitle"} onClick={() => setActive(false)}>
            <div className= {active ? "modalTitle__content active" : "modalTitle__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default ModalTitle