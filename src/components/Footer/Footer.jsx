import { Link } from "react-router-dom";
import Container from "../UI/Container/Container";
import classes from "./Footer.module.css";

const TEL_LINK = 'tel:375298309732';
const TELEGRAM_LINK = "https://t.me/teleport_brest";
const INSTAGRAM_LINK = "https://www.instagram.com/teleport.brest/";
const VK_LINK = "https://vk.com/public211042858";

const Footer = () => {
    return (<div className={classes.back}>
        <Container>
            <div className={classes.wrapper}>
                <div className={classes.box}>
                    <ul className={classes.tabs}>
                        <li>
                            <Link to="animators"><p className={classes["tab-items"]}>АНИМАТОРЫ</p></Link>
                        </li>
                        <li>
                            <Link to="/admin" ><p className={classes["tab-items"]}>ШОУ-ПРОГРАММЫ</p></Link>
                        </li>
                        <li>
                            <Link to="animators-2"><p className={classes["tab-items"]}>ДОП УСЛУГИ</p></Link>
                        </li>
                        <li>
                            <Link to="animators-3"><p className={classes["tab-items"]}>ОНЛАЙН ПРАЗДНИКИ</p></Link>
                        </li>
                        <li>
                            <Link to="comments"><p className={classes["tab-items"]}>ОТЗЫВЫ</p></Link>
                        </li>
                    </ul>
                </div>
                <div className={classes.logo}>
                    <img src={`${process.env.PUBLIC_URL}/assets/logo/footerLogo.webp`} alt="Логотип"/>
                </div>
                <div className={classes.refs}>
                    <ul className={classes.contacts}>
                        <li><a href={TEL_LINK}><span className={classes.tel}>+375 (29) 830 97 32</span></a></li>
                        <div className={classes.links}>
                            <li>
                                <a href={TELEGRAM_LINK} rel='noreferrer' target="_blank"><img src={`${process.env.PUBLIC_URL}/assets/logo/contactsLogo/telegram.webp`} alt="Telegram" width="30px"/></a>
                            </li>
                            <li>
                                <a href={INSTAGRAM_LINK} rel='noreferrer' target="_blank"><img src={`${process.env.PUBLIC_URL}/assets/logo/contactsLogo/instagram.webp`} alt="Inst" width="30px"/></a>
                            </li>
                            <li>
                                <a href={VK_LINK} rel='noreferrer' target="_blank"><img src={`${process.env.PUBLIC_URL}/assets/logo/contactsLogo/vk.webp`} alt="VK" width="30px"/></a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </Container>
    </div>);
};

export default Footer;