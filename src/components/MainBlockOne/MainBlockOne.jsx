import office from "./../../svg/Office.jpg";
import s from "./MainBlockOne.module.css";
import iconSettings from "./../../svg/IconSettings.svg";
import circle from "./../../svg/circle.svg";
import score from "./../../svg/score.svg";
import border from "./../../svg/border.svg";
import borderBlue from "./../../svg/borderBlue.svg";
import server from "./../../svg/server.svg";
import lineGR from "./../../svg/lineGR.svg";
import calendar from "./../../svg/calendar.svg";
import searchTwo from "./../../svg/searchTwo.svg";

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
      <div className={s.upperBlocksOrder}>
        <div>
          <div className={s.activeOrderBlock}>
            <div className={s.activeOrder}>Активные заказы (4)</div>
            <div className={s.showAll}>Посмотреть все</div>
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
      </div>
      <div>
        {/* block monitor */}
        <div className={s.taskAllBlocksContainer}>
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
        </div>
      </div>
      {/* Блок выбора города */}
      <div className={s.mainContainerChoseCity}>
        <div className={s.choseContainer}>
          <div className={s.activeOrder}>Выбрать ТТ</div>
          <div className={s.showAll}>Посмотреть все</div>
        </div>
        <div className={s.mainContainerChoseBlocks}>
          <div className={s.searchContainer}>
            <div className={s.searchBlock}>
              <div>
                <img className={s.searchTwo} src={searchTwo} rel="searchTwo" />
              </div>
              <div>Введите адрес или название магазина</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBlockOne;
