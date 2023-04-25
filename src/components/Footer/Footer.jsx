import { Link } from 'react-router-dom';
import Container from '../UI/Container/Container';
import classes from './Footer.module.css';

const TEL_LINK = 'tel:375298309732';
const TELEGRAM_LINK = 'https://t.me/teleport_brest';
const INSTAGRAM_LINK = 'https://www.instagram.com/teleport.brest/';
const VK_LINK = 'https://vk.com/public211042858';

const Footer = () => {
    return (<div className={classes.back}>
        <Container>
            <div className={classes.wrapper}>
                <ul className={classes.tabs}>
                    <li>
                        <Link to='animators'><p className={classes['tab-items']}>АНИМАТОРЫ</p></Link>
                    </li>
                    <li>
                        <Link to='shows' ><p className={classes['tab-items']}>ШОУ-ПРОГРАММЫ</p></Link>
                    </li>
                    <li>
                        <Link to='addition'><p className={classes['tab-items']}>ДОП УСЛУГИ</p></Link>
                    </li>
                    <li>
                        <Link to='animators-3'><p className={classes['tab-items']}>ОНЛАЙН ПРАЗДНИКИ</p></Link>
                    </li>
                    <li>
                        <Link to='comments'><p className={classes['tab-items']}>ОТЗЫВЫ</p></Link>
                    </li>
                </ul>
                <div className={classes.logo}>
                    <img src={`${process.env.PUBLIC_URL}/assets/logo/footerLogo.webp`} alt='Логотип'/>
                </div>
                <ul className={classes['contacts-wrapper']}>
                    <div className={classes.contacts}>
                        <li><a href={TEL_LINK}><span className={classes.tel}>+375 (29) 830 97 32</span></a></li>
                        <div className={classes.links}>
                            <li>
                                <a href={TELEGRAM_LINK} rel='noreferrer' target='_blank'><img src={`${process.env.PUBLIC_URL}/assets/logo/contactsLogo/telegram.webp`} alt='Telegram' className={classes['link-items']}/></a>
                            </li>
                            <li>
                                <a href={INSTAGRAM_LINK} rel='noreferrer' target='_blank'><img src={`${process.env.PUBLIC_URL}/assets/logo/contactsLogo/instagram.webp`} alt='Inst' className={classes['link-items']}/></a>
                            </li>
                            <li>
                                <a href={VK_LINK} rel='noreferrer' target='_blank'><img src={`${process.env.PUBLIC_URL}/assets/logo/contactsLogo/vk.webp`} alt='VK' className={classes['link-items']}/></a>
                            </li>
                        </div>
                    </div>
                </ul>
            </div>
        </Container>
    </div>);
};

export default Footer;