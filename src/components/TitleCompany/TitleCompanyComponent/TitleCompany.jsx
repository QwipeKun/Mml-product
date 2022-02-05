import s from "./TitleCompany.module.css";
import office from "./../../../svg/Office.jpg";
import iconSettings from "./../../../svg/IconSettings.svg";
import circle from "./../../../svg/circle.svg";
import score from "./../../../svg/score.svg";
import { useState } from "react";
import ModalTitle from "./../ModalTitle.jsx";
import ModalComponent from "../ModalComponent/ModalComponent";

let TitleCompany = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div
      className={s.mainOfficeBlock}
      style={{ backgroundImage: `url(${office})` }}
    >
      <div className={s.blockOffice}>
        <div className={s.test}>
          <div className={s.officeText}>
            <img
              className={s.iconSett}
              src={iconSettings}
              rel="iconSettings"
              onClick={() => setModalActive(true)}
            />
          </div>
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
      <ModalTitle active={modalActive} setActive={setModalActive}>
        <ModalComponent />
      </ModalTitle>
    </div>
  );
};

export default TitleCompany;
