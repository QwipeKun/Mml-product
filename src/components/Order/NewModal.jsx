import React from "react";
import './NewModal.css'


let NewModal = ({active, setActive, children}) => {
    return(
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className= {active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {children}
                {children}
            </div>
        </div>
    )
}

export default NewModal