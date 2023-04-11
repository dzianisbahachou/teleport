import { NavLink } from "react-router-dom";
import Transition from "react-transition-group/Transition";
import classes from "./NavBarMobile.module.css";

const NavBarMobile = (props) => {
    return (
        <Transition in={props.active} timeout={1000} mountOnEnter unmountOnExit>
            {state => (
                <ul className={`${classes.list} ${state === "entering" ? classes.acti : state === "exiting" ? classes.aca : state === "unmounted" ? classes.acas : ""}`}>
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
            )}
        </Transition>
    );
};

export default NavBarMobile;