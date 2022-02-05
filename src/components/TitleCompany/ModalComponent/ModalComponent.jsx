import office from "./../../../svg/Office.jpg";
import circle from "./../../../svg/circle.svg";
import score from "./../../../svg/score.svg";
import s from "./ModalComponent.module.css";

let ModalComponent = () => {
  return (
      <div>Карточка компании
    <div
      className={s.mainOfficeBlock}
      style={{ backgroundImage: `url(${office})`}}
    >
      <div className={s.blockOffice}>
        <div className={s.test}>
        </div>
        <div className={s.blockCompany}>
          <div className={s.blockNameCompany}>
            <div className={s.nameCompany}>ООО «ФЛОРА»</div>
          </div>
          <div>
            <div className={s.nameCity}>г. Лебедь-Рубиновый</div>
          </div>
        </div>
        <div className={s.infoBlocks}>
          <div className={s.infoBlockChildOne}>
            <div className={s.infoItem}>
              <div className={s.buyBlock}>
                <div className={s.buyItem}>Предоплата</div>
                <div className={s.buyItem}>
                  17 000
                  <img className={s.circle} src={circle} rel="circle" />
                </div>
              </div>
            </div>
            <div className={s.infoItem}>
              <div className={s.purposeBlock}>
                <div className={s.buyItem}>Цели</div>
                <div className={s.purpose}>8</div>
              </div>
            </div>
            <div className={s.infoItem}>
              <div className={s.tasksBlock}>
                <div className={s.buyItem}>Задания</div>
                <div className={s.purpose}>3</div>
              </div>
            </div>
          </div>
          <div className={s.infoBlockChildTwo}>
            <div className={s.infoItem}>
              <div className={s.waitingBlock}>
                <div className={s.waiting}>Ожидается получение</div>
                <div className={s.waiting}>
                  1960
                  <img className={s.circle} src={score} rel="score" />
                </div>
              </div>
            </div>
            <div className={s.infoItem}>
              <div className={s.purposeBlock}>
                <div className={s.buyItem}>Выполнено</div>
                <div className={s.purpose}>54</div>
              </div>
            </div>
            <div className={s.infoItem}>
              <div className={s.tasksBlock}>
                <div className={s.buyItem}>На модерации</div>
                <div className={s.purpose}>4</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};


export default ModalComponent