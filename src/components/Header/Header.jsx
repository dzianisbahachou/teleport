import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import logo from "../assets/React-icon.png";
import telegram from "../assets/telegram.png";
import instagram from "../assets/instagram.png";
import vk from "../assets/vk.png";
import Container from "../UI/Container/Container";

const TEL_LINK = 'tel:375298309732';
const TELEGRAM_LINK = "https://t.me/teleport_brest";
const INSTAGRAM_LINK = "https://www.instagram.com/teleport.brest/";
const VK_LINK = "https://vk.com/public211042858";

const Header = () => {
    return ( <Container>
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
              <NavLink to="/admin" className={(({isActive}) => isActive ? classes.active : "")}><p className={classes["header-items"]}>Шоу-программы</p></NavLink>
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
            <li><a href={TEL_LINK}><span className={classes.tel}>+375 (29) 830 97 32</span></a></li>
            <li><a href={TELEGRAM_LINK} rel='noreferrer' target="_blank"><img src={telegram} alt="Telegram" width="20px"/></a></li>
            <li><a href={INSTAGRAM_LINK} rel='noreferrer' target="_blank"><img src={instagram} alt="Inst" width="20px"/></a></li>
            <li><a href={VK_LINK} rel='noreferrer' target="_blank"><img src={vk} alt="VK" width="20px"/></a></li>
          </ul>
          </nav>
      </header>
    </Container>
    )
}

export default Header;