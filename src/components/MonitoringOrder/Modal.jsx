import React from "react";
import './Modal.css'


let Modal = ({active, setActive, children}) => {
    return(
        <div className={active ? "modalOrder active" : "modalOrder"} onClick={() => setActive(false)}>
            <div className= {active ? "modalOrder__content active" : "modalOrder__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal