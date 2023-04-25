import cl from './Contacts.module.css';

const TEL_LINK = 'tel:375298309732';
const TELEGRAM_LINK = 'https://t.me/teleport_brest';
const INSTAGRAM_LINK = 'https://www.instagram.com/teleport.brest/';
const VK_LINK = 'https://vk.com/public211042858';

const Contacts = ({darkMode}) => {
    const telClass = darkMode ? `${cl.tel} ${cl['tel-dark']}` : cl.tel;

    return (
        <ul className={cl.contacts}>
            <li>
                <a href={TEL_LINK} className={telClass}>+375 (29) 830 97 32</a>
            </li>
            <li>
                <a href={TELEGRAM_LINK} className={cl.social} rel='noreferrer' target='_blank'><img src={`${process.env.PUBLIC_URL}/assets/logo/contactsLogo/telegram.webp`} alt='Telegram'/></a>
            </li>
            <li>
                <a href={INSTAGRAM_LINK} className={cl.social} rel='noreferrer' target='_blank'><img src={`${process.env.PUBLIC_URL}/assets/logo/contactsLogo/instagram.webp`} alt='Inst'/></a>
            </li>
            <li>
                <a href={VK_LINK} className={cl.social} rel='noreferrer' target='_blank'><img src={`${process.env.PUBLIC_URL}/assets/logo/contactsLogo/vk.webp`} alt='VK'/></a>
            </li>
        </ul>
    );
};

export default Contacts;