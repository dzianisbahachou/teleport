import { NavLink } from "react-router-dom";
import classes from "./NavBarDesktop.module.css";

const NavBarDesktop = (props) => {
    return (<>
      <ul className={`${classes.list}`}>
        <li>
          <NavLink to="animators" className={(({isActive}) => isActive ? classes.active : "")}><p onClick={props.navToggle} className={classes["header-items"]}>Аниматоры</p></NavLink>
        </li>
        <li>
          <NavLink to="shows" className={(({isActive}) => isActive ? classes.active : "")}><p onClick={props.navToggle} className={classes["header-items"]}>Шоу-программы</p></NavLink>
        </li>
        <li>
          <NavLink to="addition" className={(({isActive}) => isActive ? classes.active : "")}><p onClick={props.navToggle} className={classes["header-items"]}>Доп услуги</p></NavLink>
        </li>
        <li>
          <NavLink to="animators-3" className={(({isActive}) => isActive ? classes.active : "")}><p onClick={props.navToggle} className={classes["header-items"]}>Онлайн праздники</p></NavLink>
        </li>
        <li>
          <NavLink to="comments" className={(({isActive}) => isActive ? classes.active : "")}><p onClick={props.navToggle} className={classes["header-items"]}>Отзывы</p></NavLink>
        </li>
      </ul>
    </>);
};

export default NavBarDesktop;