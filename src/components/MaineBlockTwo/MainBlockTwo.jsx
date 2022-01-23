import s from "./MainBlockTwo.module.css";

let MainBlockOne = () => {
  return (
    <div className={s.mainBlockTwoContainer}>
      <div className={s.containerAllBlocksPurpose}>
        <div className={s.purposeContainer}>
          <div className={s.purpose}>Цели</div>
          <div className={s.catalog}>Каталог</div>
        </div>
        <div className={s.blocksContainer}>
          <div className={s.categories}>
            <div className={s.tobaccoBlock}>
              <div>ТАБАК</div>
            </div>
            <div className={s.rrpBlock}>
              <div>РРП</div>
            </div>
            <div className={s.rrpBlock}>
              <div>ЭНЕРГЕТИКИ</div>
            </div>
            <div className={s.rrpBlock}>
              <div>БАКАЛЕЯ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBlockOne;
