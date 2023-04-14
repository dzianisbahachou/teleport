import { NavLink } from "react-router-dom";
import classes from "./NavBarDesktop.module.css";

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