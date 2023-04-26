import { NavLink } from 'react-router-dom';
import classes from './NavBarMobile.module.css';
import { useEffect } from 'react';

const TEL_LINK = 'tel:375298309732';
const TELEGRAM_LINK = 'https://t.me/teleport_brest';
const INSTAGRAM_LINK = 'https://www.instagram.com/teleport.brest/';
const VK_LINK = 'https://vk.com/public211042858';

const NavBarMobile = ({show, ...props}) => {
    useEffect(() => {
      document.body.classList.add('modal-open');
      return () => {
        document.body.classList.remove('modal-open');
      }
    }, []);

    const wrapperClasses = [classes.wrapper];
    if (show === 'entering') {
      wrapperClasses.push(classes.opened);
    } else if (show === 'exiting') {
      wrapperClasses.push(classes.closed);
    }

    return (
      <div className={wrapperClasses.join(' ')}>
        <nav> 
          <ul className={classes.list}>
            <li>
              <NavLink to='animators' onClick={props.navToggle} className={(({isActive}) => isActive ? `${classes.active} ${classes['nav-item']}` : classes['nav-item'])}>АНИМАТОРЫ</NavLink>
            </li>
            <li>
              <NavLink to='shows' onClick={props.navToggle} className={(({isActive}) => isActive ? `${classes.active} ${classes['nav-item']}` : classes['nav-item'])}>ШОУ-ПРОГРАММЫ</NavLink>
            </li>
            <li>
              <NavLink to='addition' onClick={props.navToggle} className={(({isActive}) => isActive ? `${classes.active} ${classes['nav-item']}` : classes['nav-item'])}>ДОП УСЛУГИ</NavLink>
            </li>
            <li>
              <NavLink to='animators-3' onClick={props.navToggle} className={(({isActive}) => isActive ? `${classes.active} ${classes['nav-item']}` : classes['nav-item'])}>ОНЛАЙН ПРАЗДНИКИ</NavLink>
            </li>
            <li>
              <NavLink to='comments' onClick={props.navToggle} className={(({isActive}) => isActive ? `${classes.active} ${classes['nav-item']}` : classes['nav-item'])}>ОТЗЫВЫ</NavLink>
            </li>
          </ul>
        </nav>
        <div className={classes.contacts}>
          <div>
            <a href={TEL_LINK} className={classes.tel}>+375 (29) 830 97 32</a>
          </div>
          <div className={classes.social}>
            <a href={TELEGRAM_LINK} rel='noreferrer' target='_blank'><img src={`${process.env.PUBLIC_URL}/assets/logo/contactsLogo/telegram.webp`} alt='Telegram' width='40px'/></a>
            <a href={INSTAGRAM_LINK} rel='noreferrer' target='_blank'><img src={`${process.env.PUBLIC_URL}/assets/logo/contactsLogo/instagram.webp`} alt='Inst' width='40px'/></a>
            <a href={VK_LINK} rel='noreferrer' target='_blank'><img src={`${process.env.PUBLIC_URL}/assets/logo/contactsLogo/vk.webp`} alt='VK' width='40px'/></a>
          </div>
        </div>
      </div>
    );
};

export default NavBarMobile;