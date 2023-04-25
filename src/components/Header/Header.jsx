import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import { useEffect, useState } from 'react';
import NavBarMobile from '../NavBarMobile/NavBarMobile';
import NavBarDesktop from '../NavBarDesktop/NavBarDesktop';
import { throttle } from 'lodash';
import Contacts from '../Contacts/Contacts';

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
        if(!active) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }

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
            <NavBarMobile active={active} toggleIcon={toggleIcon} navToggle={navToggle}/>
            <NavBarDesktop darkMode={isHeaderScrolled}/>
            <Contacts darkMode={isHeaderScrolled}/>
            <div onClick={navToggle} className={`${classes.menu} ${toggleIcon ? classes['menu-toggled'] : ''}`}>
                <div className={classes['menu-top']}></div>
                <div className={classes['menu-middle']}></div>
                <div className={classes['menu-bottom']}></div>
            </div>
        </div>
    )
}

export default Header;