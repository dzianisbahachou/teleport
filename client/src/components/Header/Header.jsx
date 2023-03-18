import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import logo from "../assets/React-icon.png";
import telegram from "../assets/telegram.png";
import instagram from "../assets/instagram.png";
import vk from "../assets/vk.png";

const Header = () => {
    return (
      <header className={classes.header}>
        <nav className={classes.navbar}>
          <div className={classes.logo}>
            <NavLink to="/" style={{background: "red", paddingTop: "10px"}} className={(({isActive}) => isActive ? classes.active : "")} end>
              <img src={logo} className={classes.qq} alt="Лого"/>
            </NavLink>
          </div>
          <ul className={classes.list}>
            <li>
              <NavLink to="animators" className={(({isActive}) => isActive ? classes.active : "")}><p className={classes["header-items"]}>Аниматоры</p></NavLink>
            </li>
            <li>
              <NavLink to="animators" className={(({isActive}) => isActive ? classes.active : "")}><p className={classes["header-items"]}>Шоу-программы</p></NavLink>
            </li>
            <li>
              <NavLink to="animators" className={(({isActive}) => isActive ? classes.active : "")}><p className={classes["header-items"]}>Доп услуги</p></NavLink>
            </li>
            <li>
              <NavLink to="animators" className={(({isActive}) => isActive ? classes.active : "")}><p className={classes["header-items"]}>Онлайн-праздники</p></NavLink>
            </li>
            <li>
              <NavLink to="animators" className={(({isActive}) => isActive ? classes.active : "")}><p className={classes["header-items"]}>Отзывы</p></NavLink>
            </li>
          </ul>
          <ul className={`${classes.list} ${classes.contacts}`}>
            <li><a href='tel:375445134151'>+375 44 513 41 51</a></li>
            <li><a href="https://t.me/qwenpis" rel='noreferrer' target="_blank"><img src={telegram} alt="Telegram" width="20px"/></a></li>
            <li><a href="https://www.instagram.com/direct/t/340282366841710300949128137501689590966" rel='noreferrer' target="_blank"><img src={instagram} alt="Inst" width="20px"/></a></li>
            <li><a href="https://vk.com/im?media=&sel=-211042858" rel='noreferrer' target="_blank"><img src={vk} alt="VK" width="20px"/></a></li>
          </ul>
          </nav>
      </header>
    )
}

export default Header;