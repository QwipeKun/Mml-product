import s from "./Order.module.css";
import border from "./../../svg/border.svg";
import borderBlue from "./../../svg/borderBlue.svg";
import OrderCart from "./OrderCart/OrderCart";

let Order = () => {
  return (
    <div className={s.upperBlocksOrder}>
      <div>
        <div className={s.activeOrderBlock}>
          <div className={s.activeOrder}>Активные заказы (4)</div>
          <button className={s.showAll}>Посмотреть все</button>
        </div>
        <div className={s.mainConinerOrder}>
          <div className={s.mainBlocksOrder}>
            <div className={s.newOrderTextContainer}>
              <div className={s.newOrderText}>Новый заказ</div>
            </div>
            <div className={s.containerOrderBlocks}>
              <div className={s.conrainerO}>
                <div className={s.orderNumberContainer}>
                  <div className={s.boldValue}>Заказ #IQR000000289</div>
                  <div>г.Москва,ул. Коломенская, д.28/7</div>
                  <dvi>01.12.2021 - 18:30</dvi>
                </div>
                <div className={s.priceContainer}>
                  <div className={s.priceValueBlock}>
                    <div className={s.priceValue}>Цена:</div>
                    <div className={s.boldValue}>140 000,00 ₽</div>
                  </div>
                  <div>
                    <div className={s.ValueBlock}>
                      <div className={s.priceValue}>Количество SKU:</div>
                      <div className={s.boldValue}>300 шт</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={s.borderSettings}>
                <img className={s.border} src={border} rel="border" />
              </div>
            </div>
          </div>
        </div>
        <OrderCart />
        <OrderCart />

      </div>
    </div>
  );
};

export default Order;
