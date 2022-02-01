import Modal from "./components/Order/Modal";
import Header from "./components/Header/Header";
import s from "./App.module.css"
import MainBlockOne from "./components/MainBlockOne/MainBlockOne"
import MainBlockTwo from "./components/MaineBlockTwo/MainBlockTwo"
import OrderCart from "./components/Order/OrderCart/OrderCart";
import { useState } from "react";


let App = () => {

  const [modal, setModal] = useState({
    modal1: false,
    modal2:false
  })

  return (
    <div className={s.body}>
      <Header />
      <MainBlockOne />
      <button className={s.button} onClick={() => setModal({
        ...modal, modal1:true
      })}>
        Open Modal
      </button >
      <MainBlockTwo />
      <Modal
      isOpened={modal.modal1}
      onModalClose={() => setModal({...modal, modal1:false})} >
        <OrderCart/>
        <OrderCart/>
        <OrderCart/>
        <OrderCart/>
        <OrderCart/>
        <OrderCart/>
        <OrderCart/>
      </Modal>
      <Modal
      title={'Modal 2 Title '} 
      isOpened={modal.modal2} >
        <OrderCart/>
      </Modal>
    </div>
  );
}

export default App;
