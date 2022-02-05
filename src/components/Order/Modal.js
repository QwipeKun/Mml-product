// import "./Modal.css"
// import { useState } from "react";

// const Modal = props => {
//     const [modal, setModal] = useState({
//         modal1: false,
//         modal2: false,
//     });

//     return (
//         <div className={`modal__wrapper ${props.isOpened ? 'open' : 'close'}`} style={{ ...props.style }}>
//             <div className="modal__body">
//                 <div className='modal__name'>Активные заказы (4)</div>
//                 <div className='modal__close' onClick={props.onModalClose}>Скрыть</div>
//                 <h2>{props.title}</h2>
//                 {props.children}
//             </div>
//         </div>
//     )
// }
