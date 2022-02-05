import s from "./MonitoringOrderComponent.module.css"
import server from "./../../../svg/server.svg";
import lineGR from "./../../../svg/lineGR.svg";
import calendar from "./../../../svg/calendar.svg";


let MonitoringOrderComponent = () => {



    return(
        <div className={s.mainContainerMonitoring}>
        <div className={s.newOrderTextContainerTwo}>
          <div className={s.newOrderTextTwoBlock}>ТОП Марки</div>
        </div>
        <div className={s.childMainBlockMonitoring}>
          <div className={s.serverBlock}>
            <img className={s.sever} src={server} rel="server" />
          </div>
          <div className={s.monitoringContainer}>
            <div className={s.monitoringTextContainer}>
              <div className={s.textBlock}>600 ₽ за прохождение</div>
            </div>
            <div className={s.photoMonitoringTitle}>
              Фото мониторинг
            </div>
            <div className={s.progressTitle}>
              <div>Прогресс</div>
              <div>1</div>
            </div>
            <div>
              <img className={s.lineGR} src={lineGR} rel="lineGR" />
            </div>
            <div className={s.calendarBlock}>
              <div>
                <img
                  className={s.calendar}
                  src={calendar}
                  rel="calendar"
                />
              </div>
              <div className={s.dateText}>01.03.2021-31.03.2021</div>
              <div className={s.boldValue}>600 ₽</div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    )
}

export default MonitoringOrderComponent