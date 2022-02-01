import s from "./OrderCart.module.css"
import borderBlue from "./../../../svg/borderBlue.svg";

let OrderCart = () =>{
    return(
        <div>
          <div className={s.mainConinerOrder}>
            <div className={s.mainBlocksOrder}>
              <div className={s.newOrderTextContainerTwo}>
                <div className={s.newOrderTextTwoBlock}>Заказ принят</div>
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
                      <div className={s.priceValueBlue}>Цена:</div>
                      <div className={s.boldValue}>140 000,00 ₽</div>
                    </div>
                    <div>
                      <div className={s.ValueBlock}>
                        <div className={s.priceValueBlue}>Количество SKU:</div>
                        <div className={s.boldValue}>300 шт</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={s.borderSettings}>
                  <img className={s.border} src={borderBlue} rel="borderBlue" />
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}


export default OrderCart