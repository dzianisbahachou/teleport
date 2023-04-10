import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import { useState } from "react";

const TEL_LINK = 'tel:375298309732';
const TELEGRAM_LINK = "https://t.me/teleport_brest";
const INSTAGRAM_LINK = "https://www.instagram.com/teleport.brest/";
const VK_LINK = "https://vk.com/public211042858";

const Header = () => {
  const [active, setActive] = useState(null);
  const [toggleIcon, setToggleIcon] = useState(null);

  const navToggle = () => {
    setActive(prevState => !prevState);
    setToggleIcon(prevState => !prevState);
  };
  const resetNavBar = () => {
    setToggleIcon(false);
    setActive(false);
  }
    return (<div className={classes.back}>
      <header className={classes.header}>
        <nav className={classes.navbar}>
          <div className={classes.logo}>
            <NavLink to="/" className={(({isActive}) => isActive ? classes.active : "")} end>
              <img onClick={resetNavBar} src="assets/logo/alogo.png" className={classes.qq} alt="Лого"/>
            </NavLink>
          </div>
          <ul className={`${classes.list} ${active === true ? classes.acti : active === false ? classes.aca : active === null ? classes.acas : ""}`}>
            <li>
              <NavLink to="animators" className={(({isActive}) => isActive ? classes.active : "")}><p onClick={navToggle} className={classes["header-items"]}>АНИМАТОРЫ</p></NavLink>
            </li>
            <li>
              <NavLink to="/admin" className={(({isActive}) => isActive ? classes.active : "")}><p onClick={navToggle} className={classes["header-items"]}>ШОУ-ПРОГРАММЫ</p></NavLink>
            </li>
            <li>
              <NavLink to="animators-2" className={(({isActive}) => isActive ? classes.active : "")}><p onClick={navToggle} className={classes["header-items"]}>ДОП УСЛУГИ</p></NavLink>
            </li>
            <li>
              <NavLink to="animators-3" className={(({isActive}) => isActive ? classes.active : "")}><p onClick={navToggle} className={classes["header-items"]}>ОНЛАЙН ПРАЗДНИКИ</p></NavLink>
            </li>
            <li>
              <NavLink to="comments" className={(({isActive}) => isActive ? classes.active : "")}><p onClick={navToggle} className={classes["header-items"]}>ОТЗЫВЫ</p></NavLink>
            </li>
          </ul>
          <ul className={`${classes.list} ${classes.contacts}`}>
            <li>
              <a href={TEL_LINK}><span className={classes.tel}>+375 (29) 830 97 32</span></a>
            </li>
            <li>
              <a href={TELEGRAM_LINK} rel='noreferrer' target="_blank"><img src='assets/logo/contactsLogo/telegram.png' alt="Telegram" width="30px"/></a>
            </li>
            <li>
              <a href={INSTAGRAM_LINK} rel='noreferrer' target="_blank"><img src='assets/logo/contactsLogo/instagram.png' alt="Inst" width="30px"/></a>
            </li>
            <li>
              <a href={VK_LINK} rel='noreferrer' target="_blank"><img src='assets/logo/contactsLogo/vk.png' alt="VK" width="30px"/></a>
            </li>
          </ul>
          <div onClick={navToggle} className={`${classes.aaa} ${toggleIcon ? classes.aaaa : ""}`}>
            <div className={classes.a}></div>
            <div className={classes.b}></div>
            <div className={classes.c}></div>
          </div>
        </nav>
      </header>
    </div>)
}

export default Header;