import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import logo from "../assets/React-icon.png";

const Header = () => {
    return (
      <header className={classes.header}>
        <nav>
          <div className={classes.logo}>
            <NavLink to="/" className={(({isActive}) => isActive ? classes.active : "")} end>
              <img src={logo} alt="Лого"/>
            </NavLink>
          </div>
          <ul className={classes.list}>
            <li>
              <NavLink to="/animators" className={(({isActive}) => isActive ? classes.active : "")}>Events</NavLink>
            </li>
            <li>
              <NavLink to="animators" className={(({isActive}) => isActive ? classes.active : "")}>Newsletter</NavLink>
            </li>
            <li>
              <NavLink to="animators" className={(({isActive}) => isActive ? classes.active : "")}>Newsletter</NavLink>
            </li>
            <li>
              <NavLink to="animators" className={(({isActive}) => isActive ? classes.active : "")}>Newsletter</NavLink>
            </li>
          </ul>
          <ul className={`${classes.list} ${classes.aa}`}>
            <li>
              +375 44 511 11 11
            </li>
            <li>
              Инст
            </li>
            <li>
              Вк
            </li>
            <li>
              Телег
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default Header;