import s from "./Header.module.css";
import browser from "./../../svg/browser.svg";
import search from "./../../svg/search.svg";
import more from "./../../svg/more.svg";
import vector from "./../../svg/Vector.svg";
import stick from "./../../svg/stick.svg";
import avatar from "./../../svg/AvatarBe.jpg";
import bell from "./../../svg/bell.svg";

let Header = () => {
  return (
    <div className={s.MainContainer}>
      <div className={s.e}>
        <div className={s.TitleContainer}>
          <div className={s.Title}>MML TAIL</div>
        </div>
        <div className={s.logo}>
          <img src={stick} alt="stick" className={s.stick} />
          <div className={s.items}>
            <img src={browser} alt="browser" className={s.item}></img>
            <img src={vector} alt="vector" className={s.item}></img>
            <img src={more} alt="more" className={s.item}></img>
          </div>
          <img src={stick} alt="stick" className={s.stick} />
        </div>
        <div className={s.searchBlock}>
          <img className={s.searchItem} src={search} alt="search"></img>
          <input
            className={s.search}
            placeholder="Введите для поиска..."
            type="search"
          ></input>
        </div>
      </div>
      <div className={s.e}>
        <div className={s.avatarBlock}>
          <div>
            <img src={avatar} alt="avatar" className={s.avatar}></img>
          </div>
        </div>
        <div className={s.bellBlock}>
          <div>
            <img src={bell} alt="bell" className={s.bell}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
