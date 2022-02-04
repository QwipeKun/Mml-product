import s from "./Order.module.css";
import border from "./../../svg/border.svg";
import borderBlue from "./../../svg/borderBlue.svg";
import OrderCart from "./OrderCart/OrderCart";
import OrderCartYellow from "./OrderCartYellow/OrderCartYellow";
import { useState } from "react";
import NewModal from "./NewModal.jsx";
import { CSSTransition } from "react-transition-group";

let Order = () => {
  const [modalActive, setModalActive] = useState(true);

  return (
    <div className={s.upperBlocksOrder}>
      <div>
        <div className={s.activeOrderBlock}>
          <div className={s.activeOrder}>Активные заказы (4)</div>
          <button className={s.showAll} onClick={() => setModalActive(true)}>
            Посмотреть все
          </button>
          <NewModal active={modalActive} setActive={setModalActive}>
            <OrderCartYellow />
            <OrderCart />
            <OrderCart />
            <OrderCart />
          </NewModal>
        </div>
        <OrderCartYellow />
        <OrderCart />
        <OrderCart />
      </div>
    </div>
  );
};

export default Order;
