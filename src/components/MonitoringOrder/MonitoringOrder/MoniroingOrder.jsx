import s from "./MonitoringOrder.module.css";
import MonitoringOrderComponent from "./../MonitoringOrderComponents/MonitoringOrderComponent";
import Modal from "./../Modal";
import { useState } from "react";

let MonitoringOrder = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={s.taskAllBlocksContainer}>
      <div>
        <div className={s.taskBlockMonitor}>
          <div className={s.activeOrder}>Заказы (3)</div>
          <div className={s.showAllMonitoring}> Модерация </div>
          <button className={s.showAll} onClick={() => setModalActive(true)}>
            {modalActive ? "Скрыть" : "Посмотреть все"}
          </button>
        </div>
        <div className={s.mainBlockMonitoring}>
          <MonitoringOrderComponent />
        </div>
        <div className={s.mainBlockMonitoring}>
          <MonitoringOrderComponent />
        </div>
        <div className={s.mainBlockMonitoring}>
          <MonitoringOrderComponent />
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className={s.mainBlockMonitoring}>
          <MonitoringOrderComponent />
        </div>
        <div className={s.mainBlockMonitoring}>
          <MonitoringOrderComponent />
        </div>
        <div className={s.mainBlockMonitoring}>
          <MonitoringOrderComponent />
        </div>
        <div className={s.mainBlockMonitoring}>
          <MonitoringOrderComponent />
        </div>
        <div className={s.mainBlockMonitoring}>
          <MonitoringOrderComponent />
        </div>
        <div className={s.mainBlockMonitoring}>
          <MonitoringOrderComponent />
        </div>
      </Modal>
    </div>
  );
};

export default MonitoringOrder;
