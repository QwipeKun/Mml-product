import border from "./../../../svg/border.svg";
import s from "./OrderCartYellow.module.css";

let OrderCartYellow = () => {
  return (
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
              <div>01.12.2021 - 18:30</div>
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
            <img className={s.border} src={border} rel="border" alt="border"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCartYellow;
