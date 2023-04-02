import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import logo from "../assets/React-icon.png";
import telegram from "../assets/telegram.png";
import instagram from "../assets/instagram.png";
import vk from "../assets/vk.png";
import Container from "../UI/Container/Container";
import { useState } from "react";

const TEL_LINK = 'tel:375298309732';
const TELEGRAM_LINK = "https://t.me/teleport_brest";
const INSTAGRAM_LINK = "https://www.instagram.com/teleport.brest/";
const VK_LINK = "https://vk.com/public211042858";

const Header = () => {
  const [active, setActive] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);

  const navToggle = () => {
    setActive(prevState => !prevState);
    setToggleIcon(prevState => !prevState);
  };
    return ( <Container>
      <header className={classes.header}>
        <nav className={classes.navbar}>
          <div className={classes.logo}>
            <NavLink to="/" style={{background: "red", paddingTop: "10px"}} className={(({isActive}) => isActive ? classes.active : "")} end>
              <img onClick={navToggle} src={logo} className={classes.qq} alt="Лого"/>
            </NavLink>
          </div>
          <ul className={`${classes.list} ${active ? classes.acti : ""}`}>
            <li>
              <NavLink to="animators" className={(({isActive}) => isActive ? classes.active : "")}><p onClick={navToggle} className={classes["header-items"]}>Аниматоры</p></NavLink>
            </li>
            <li>
              <NavLink to="/admin" className={(({isActive}) => isActive ? classes.active : "")}><p onClick={navToggle} className={classes["header-items"]}>Шоу-программы</p></NavLink>
            </li>
            <li>
              <NavLink to="animators-2" className={(({isActive}) => isActive ? classes.active : "")}><p onClick={navToggle} className={classes["header-items"]}>Доп услуги</p></NavLink>
            </li>
            <li>
              <NavLink to="animators-3" className={(({isActive}) => isActive ? classes.active : "")}><p onClick={navToggle} className={classes["header-items"]}>Онлайн-праздники</p></NavLink>
            </li>
            <li>
              <NavLink to="comments" className={(({isActive}) => isActive ? classes.active : "")}><p onClick={navToggle} className={classes["header-items"]}>Отзывы</p></NavLink>
            </li>
          </ul>
          <ul className={`${classes.list} ${classes.contacts}`}>
            <li><a href={TEL_LINK}><span className={classes.tel}>+375 (29) 830 97 32</span></a></li>
            <li><a href={TELEGRAM_LINK} rel='noreferrer' target="_blank"><img src={telegram} alt="Telegram" width="20px"/></a></li>
            <li><a href={INSTAGRAM_LINK} rel='noreferrer' target="_blank"><img src={instagram} alt="Inst" width="20px"/></a></li>
            <li><a href={VK_LINK} rel='noreferrer' target="_blank"><img src={vk} alt="VK" width="20px"/></a></li>
          </ul>
          <div onClick={navToggle} className={`${classes.aaa} ${toggleIcon ? classes.aaaa : ""}`}>
            <div className={classes.a}></div>
            <div className={classes.b}></div>
            <div className={classes.c}></div>
          </div>
        </nav>
      </header>
    </Container>
    )
}

export default Header;