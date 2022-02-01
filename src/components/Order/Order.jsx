import s from "./Order.module.css";
import border from "./../../svg/border.svg";
import borderBlue from "./../../svg/borderBlue.svg";
import OrderCart from "./OrderCart/OrderCart";
import OrderCartYellow from "./OrderCartYellow/OrderCartYellow";
import { useState } from "react";
import Modal from "./Modal.js";

let Order = () => {
  const [modal, setModal] = useState({
    modal1: false,
    modal2: false,
  });

  return (
    <div className={s.upperBlocksOrder}>
      <div>
        <div className={s.activeOrderBlock}>
          <div className={s.activeOrder}>Активные заказы (4)</div>
          <button
            className={s.showAll}
            onClick={() =>
              setModal({
                ...modal,
                modal1: true,
              })
            }
          >
            Посмотреть все
          </button>
          <Modal
            closeTimeoutMS={200}
            isOpened={modal.modal1}
            onModalClose={() => setModal({ ...modal, modal1: false })}
          >
            <OrderCartYellow />
            <OrderCart />
            <OrderCart />
            <OrderCart />
          </Modal>
          <Modal title={"Modal 2 Title "} isOpened={modal.modal2}>
            <OrderCart />
          </Modal>
        </div>
        <OrderCartYellow />
        <OrderCart />
        <OrderCart />
      </div>
    </div>
  );
};

export default Order;
