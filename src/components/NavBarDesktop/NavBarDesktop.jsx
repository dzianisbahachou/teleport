import { NavLink } from 'react-router-dom';
import classes from './NavBarDesktop.module.css';

const NavBarDesktop = ({darkMode}) => {
  const itemClasses = darkMode ? `${classes['nav-item']} ${classes['nav-item-dark']}` : classes['nav-item'];

  return (
    <nav className={classes.nav}>
      <ul className={`${classes.list}`}>
        <li>
          <NavLink to='animators' className={(({isActive}) => isActive ? `${classes.active} ${itemClasses}` : itemClasses)}>
            Аниматоры
          </NavLink>
        </li>
        <li>
          <NavLink to='shows' className={(({isActive}) => isActive ? `${classes.active} ${itemClasses}` : itemClasses)}>
            Шоу-программы
          </NavLink>
        </li>
        <li>
          <NavLink to='addition' className={(({isActive}) => isActive ? `${classes.active} ${itemClasses}` : itemClasses)}>
            Доп услуги
          </NavLink>
        </li>
        <li>
          <NavLink to='animators-3' className={(({isActive}) => isActive ? `${classes.active} ${itemClasses}` : itemClasses)}>
            Онлайн праздники
          </NavLink>
        </li>
        <li>
          <NavLink to='comments' className={(({isActive}) => isActive ? `${classes.active} ${itemClasses}` : itemClasses)}>
            Отзывы
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarDesktop;