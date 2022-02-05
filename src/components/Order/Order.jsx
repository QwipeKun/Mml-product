import s from "./Order.module.css";
import OrderCart from "./OrderCart/OrderCart";
import OrderCartYellow from "./OrderCartYellow/OrderCartYellow";
import { useState } from "react";
import NewModal from "./NewModal.jsx";

let Order = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={s.upperBlocksOrder}>
      <div>
        <div className={s.activeOrderBlock}>
          <div className={s.activeOrder}>Активные заказы (4)</div>
          <button className={s.showAll} onClick={() => setModalActive(true)}>
          {modalActive ? "Скрыть" : "Посмотреть все"}
          </button>
        </div>
        <OrderCartYellow />
        <OrderCart />
        <OrderCart />
      </div>
          <NewModal active={modalActive} setActive={setModalActive}>
            <OrderCartYellow />
            <OrderCart />
            <OrderCart />
            <OrderCart />
          </NewModal>
    </div>
  );
};

export default Order;
