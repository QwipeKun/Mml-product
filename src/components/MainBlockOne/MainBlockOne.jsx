import office from "./../../svg/Office.jpg";
import Order from "../Order/Order";
import s from "./MainBlockOne.module.css";
import iconSettings from "./../../svg/IconSettings.svg";
import circle from "./../../svg/circle.svg";
import score from "./../../svg/score.svg";
import searchTwo from "./../../svg/searchTwo.svg";
import cityLogo from "./../../svg/cityLogo.svg";
import logoCityTwo from "./../../svg/logoCityTwo.svg";
import logoCityThree from "./../../svg/logoCityThree.svg";
import logoCityFour from "./../../svg/logoCityFour.svg";
import logoCityFive from "./../../svg/logoCityFive.svg";
import MonitoringOrder from "../MonitoringOrder/MonitoringOrder/MoniroingOrder";

let MainBlockOne = () => {
  return (
    <div className={s.mainAllBlocks}>
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
      </div>
      {/*             ЗАКАЗЫ                 */}
      <Order />
      {/* END  ЗАКАЗЫ */}
        {/* block monitor */}

        <MonitoringOrder />

        {/* <div className={s.taskAllBlocksContainer}>
          <div>
            <div className={s.taskBlockMonitor}>
              <div className={s.activeOrder}>Заказы (3)</div>
              <div className={s.showAll}> Модерация </div>
              <div className={s.showAll}>Посмотреть все</div>
            </div>
            <div className={s.mainBlockMonitoring}>
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
            </div>
            <div className={s.mainBlockMonitoring}>
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
            </div>
            <div className={s.mainBlockMonitoring}>
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
              </div>
            </div>
          </div>
        </div> */}
      {/* Блок выбора города и поиск */}
      <div className={s.mainContainerChoseCity}>
        <div className={s.choseContainer}>
          <div className={s.activeOrder}>Выбрать ТТ</div>
          <div className={s.showAll}>Посмотреть все</div>
        </div>
        <div className={s.mainContainerChoseBlocks}>
          <div>
            <div className={s.searchContainer}>
              <div className={s.searchBlock}>
                <div>
                  <img
                    className={s.searchTwo}
                    src={searchTwo}
                    rel="searchTwo"
                  />
                </div>
                <div>Введите адрес или название магазина</div>
              </div>
            </div>
          </div>
          {/* Блок 1 Выбор городов */}
          <div>
            <div className={s.cityContainer}>
              <div className={s.cityBlocks}>
                <div className={s.numberCityPosition}>1</div>
                <div className={s.cityPhotoContainer}>
                  <div>
                    <img
                      className={s.cityLogo}
                      src={logoCityTwo}
                      rel="logoCityTwo"
                    />
                  </div>
                  <div className={s.premiumStatusGold}>Gold</div>
                </div>
                <div>
                  <div className={s.cityName}>г. Владимир</div>
                  <div className={s.fullCityName}>
                    г. Владимир, ул. Спасская, д.4
                  </div>
                </div>
              </div>
              <div className={s.choseBlock}>
                <div className={s.lineGradientOne}></div>
              </div>
            </div>
            {/* Блок 2 Выбор городов */}
            <div className={s.cityContainer}>
              <div className={s.cityBlocks}>
                <div className={s.numberCityPosition}>2</div>
                <div className={s.cityPhotoContainer}>
                  <div>
                    <img className={s.cityLogo} src={cityLogo} rel="cityLogo" />
                  </div>
                  <div className={s.premiumStatus}>Silver</div>
                </div>
                <div>
                  <div className={s.cityName}>г. Судогда</div>
                  <div className={s.fullCityName}>
                    Владимирская область, г. Судогда, ул. Горького, д.16
                  </div>
                </div>
              </div>
              <div className={s.choseBlock}>
                <div className={s.choseText}>Выбрать</div>
                <div className={s.lineGradient}></div>
              </div>
            </div>
            {/* Блок 3 Выбор городов */}
            <div className={s.cityContainer}>
              <div className={s.cityBlocks}>
                <div className={s.numberCityPosition}>3</div>
                <div className={s.cityPhotoContainer}>
                  <div>
                    <img
                      className={s.cityLogo}
                      src={cityLogo}
                      rel="logoCityThree"
                    />
                  </div>
                  <div className={s.premiumStatus}>Silver</div>
                </div>
                <div>
                  <div className={s.cityName}>г. Владимир</div>
                  <div className={s.fullCityName}>
                    г. Владимир, просп. Ленина, д.29Б
                  </div>
                </div>
              </div>
              <div className={s.choseBlock}>
                <div className={s.choseText}>Выбрать</div>
                <div className={s.lineGradient}></div>
              </div>
            </div>
            {/* Блок 4 Выбор городов */}
            <div className={s.cityContainer}>
              <div className={s.cityBlocks}>
                <div className={s.numberCityPosition}>4</div>
                <div className={s.cityPhotoContainer}>
                  <div>
                    <img
                      className={s.cityLogo}
                      src={logoCityFour}
                      rel="logoCityFour"
                    />
                  </div>
                  <div className={s.premiumStatusIron}>Iron</div>
                </div>
                <div>
                  <div className={s.cityName}>г. Владимир</div>
                  <div className={s.fullCityName}>
                    г. Владимир, ул. Диктора Левитана, д.42
                  </div>
                </div>
              </div>
              <div className={s.choseBlock}>
                <div className={s.choseText}>Выбрать</div>
                <div className={s.lineGradientIron}></div>
              </div>
              {/* Блок 5 Выбор городов */}
            </div>
            <div className={s.cityContainerFive}>
              <div className={s.cityBlocks}>
                <div className={s.numberCityPosition}>5</div>
                <div className={s.cityPhotoContainer}>
                  <div>
                    <img
                      className={s.cityLogo}
                      src={logoCityFive}
                      rel="logoCityFive"
                    />
                  </div>
                  <div className={s.premiumStatusIron}>Iron</div>
                </div>
                <div>
                  <div className={s.cityName}>г. Владимир</div>
                  <div className={s.fullCityName}>
                    г. Владимир, ул. Куйбышева, д.16
                  </div>
                </div>
              </div>
              <div className={s.choseBlock}>
                <div className={s.choseText}>Выбрать</div>
                <div className={s.lineGradientIron}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBlockOne;
