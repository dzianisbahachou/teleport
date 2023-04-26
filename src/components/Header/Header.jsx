import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import { useEffect, useState } from 'react';
import NavBarMobile from '../NavBarMobile/NavBarMobile';
import NavBarDesktop from '../NavBarDesktop/NavBarDesktop';
import { throttle } from 'lodash';
import Contacts from '../Contacts/Contacts';
import { Transition } from 'react-transition-group';

const Header = () => {
    const [active, setActive] = useState(null);
    const [toggleIcon, setToggleIcon] = useState(null);
    const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);

    const scrollHeaderHandler = () => {
        window.scrollY > 50 ? setIsHeaderScrolled(true) : setIsHeaderScrolled(false); 
    };

    useEffect(() => {
        window.addEventListener('scroll', throttle(scrollHeaderHandler, 200));
    }, []);

    const navToggle = () => {
        setActive(prevState => !prevState);
        setToggleIcon(prevState => !prevState);
    };

    const resetNavBar = () => {
        setToggleIcon(false);
        setActive(false);
    };

    const headerClass = isHeaderScrolled ? `${classes.scrolled} ${classes.header}` : classes.header;
    const logoName = isHeaderScrolled ? 'appLogo' : 'appLogoLight';

    return (
        <div className={headerClass}>
            <NavLink to='/' end>
                <img onClick={resetNavBar} src={`${process.env.PUBLIC_URL}/assets/logo/${logoName}.webp`} className={classes.logo} alt='Лого'/>
            </NavLink>
            <NavBarDesktop darkMode={isHeaderScrolled}/>
            <Contacts darkMode={isHeaderScrolled}/>
            <Transition in={active} timeout={300} mountOnEnter unmountOnExit>
                { state => <NavBarMobile show={state} toggleIcon={toggleIcon} navToggle={navToggle}/>}
            </Transition>
            <div onClick={navToggle} className={`${classes.menu} ${toggleIcon ? classes['menu-toggled'] : ''}`}>
                <div className={classes['menu-top']}></div>
                <div className={classes['menu-middle']}></div>
                <div className={classes['menu-bottom']}></div>
            </div>
        </div>
    )
}

export default Header;