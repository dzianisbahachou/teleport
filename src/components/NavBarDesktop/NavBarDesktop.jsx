import { NavLink } from "react-router-dom";
import Transition from "react-transition-group/Transition";
import classes from "./NavBarDesktop.module.css";

const TEL_LINK = 'tel:375298309732';
const TELEGRAM_LINK = "https://t.me/teleport_brest";
const INSTAGRAM_LINK = "https://www.instagram.com/teleport.brest/";
const VK_LINK = "https://vk.com/public211042858";

const NavBarDesktop = (props) => {
    return (<>
      <ul className={`${classes.list}`}>
        <li>
          <NavLink to="animators" className={(({isActive}) => isActive ? classes.active : "")}><p onClick={props.navToggle} className={classes["header-items"]}>АНИМАТОРЫ</p></NavLink>
        </li>
        <li>
          <NavLink to="/admin" className={(({isActive}) => isActive ? classes.active : "")}><p onClick={props.navToggle} className={classes["header-items"]}>ШОУ-ПРОГРАММЫ</p></NavLink>
        </li>
        <li>
          <NavLink to="animators-2" className={(({isActive}) => isActive ? classes.active : "")}><p onClick={props.navToggle} className={classes["header-items"]}>ДОП УСЛУГИ</p></NavLink>
        </li>
        <li>
          <NavLink to="animators-3" className={(({isActive}) => isActive ? classes.active : "")}><p onClick={props.navToggle} className={classes["header-items"]}>ОНЛАЙН ПРАЗДНИКИ</p></NavLink>
        </li>
        <li>
          <NavLink to="comments" className={(({isActive}) => isActive ? classes.active : "")}><p onClick={props.navToggle} className={classes["header-items"]}>ОТЗЫВЫ</p></NavLink>
        </li>
      </ul>
      
    </>);
};

export default NavBarDesktop;