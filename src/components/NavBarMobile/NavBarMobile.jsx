import { NavLink } from "react-router-dom";
import Transition from "react-transition-group/Transition";
import classes from "./NavBarMobile.module.css";

const TEL_LINK = 'tel:375298309732';
const TELEGRAM_LINK = "https://t.me/teleport_brest";
const INSTAGRAM_LINK = "https://www.instagram.com/teleport.brest/";
const VK_LINK = "https://vk.com/public211042858";

const NavBarMobile = (props) => {
    return (
      <div className={classes.zzz}>
        <Transition in={props.active} timeout={300} mountOnEnter unmountOnExit>
            {state => (
             <> <ul className={`${classes.list} ${state === "entering" ? classes.acti : state === "exiting" ? classes.aca : state === "unmounted" ? classes.acas : ""}`}>
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
            <li>
              <div className={classes.tel}>
                <a href={TEL_LINK}><span className={classes.tel}>+375 (29) 830 97 32</span></a>
              </div>
              <div className={classes.contacts}>
                <a href={TELEGRAM_LINK} rel='noreferrer' target="_blank"><img src='assets/logo/contactsLogo/telegram.webp' alt="Telegram" width="40px"/></a>
                <a href={INSTAGRAM_LINK} rel='noreferrer' target="_blank"><img src='assets/logo/contactsLogo/instagram.webp' alt="Inst" width="40px"/></a>
                <a href={VK_LINK} rel='noreferrer' target="_blank"><img src='assets/logo/contactsLogo/vk.webp' alt="VK" width="40px"/></a>
              </div>
            </li>
        </ul>
       </>
            )}
        </Transition>
      </div>
    );
};

export default NavBarMobile;