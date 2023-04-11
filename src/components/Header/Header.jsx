import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import telegram from "../assets/telegram.png";
import instagram from "../assets/instagram.png";
import vk from "../assets/vk.png";
import { useState } from "react";
import NavBarMobile from "../NavBarMobile/NavBarMobile";
import NavBarDesktop from "../NavBarDesktop/NavBarDesktop";

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
          <div className={classes["show-navbar"]}>
            <NavBarMobile active={active} toggleIcon={toggleIcon} navToggle={navToggle}/>
          </div>
          <NavBarDesktop/>
          <ul className={`${classes.list} ${classes.contacts}`}>
            <li><a href={TEL_LINK}><span className={classes.tel}>+375 (29) 830 97 32</span></a></li>
            <li><a href={TELEGRAM_LINK} rel='noreferrer' target="_blank"><img src={telegram} alt="Telegram" width="30px"/></a></li>
            <li><a href={INSTAGRAM_LINK} rel='noreferrer' target="_blank"><img src={instagram} alt="Inst" width="30px"/></a></li>
            <li><a href={VK_LINK} rel='noreferrer' target="_blank"><img src={vk} alt="VK" width="30px"/></a></li>
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