
import Order from "../Order/Order";
import s from "./MainBlockOne.module.css";
import searchTwo from "./../../svg/searchTwo.svg";
import cityLogo from "./../../svg/cityLogo.svg";
import logoCityTwo from "./../../svg/logoCityTwo.svg";
import logoCityThree from "./../../svg/logoCityThree.svg";
import logoCityFour from "./../../svg/logoCityFour.svg";
import logoCityFive from "./../../svg/logoCityFive.svg";
import MonitoringOrder from "../MonitoringOrder/MonitoringOrder/MoniroingOrder";
import TitleCompany from "../TitleCompany/TitleCompanyComponent/TitleCompany";

let MainBlockOne = () => {
  return (
    <div className={s.mainAllBlocks}>
      <TitleCompany />
      {/*  Заказы  */}
      <Order />
      {/* Мониторинг */}
      <MonitoringOrder />
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
