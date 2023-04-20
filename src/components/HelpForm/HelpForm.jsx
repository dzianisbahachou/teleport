import Container from "../UI/Container/Container";
import classes from "./HelpForm.module.css";
import Telegram from 'telegram-send-message';
import { telegramParams } from "./Settings";
import { useRef } from "react";
import useInput from "../../hooks/use-input";
import PhoneInput from "../UI/CommentInput/CommentInput";

const TEL_LINK = 'tel:375298309732';
const TELEGRAM_LINK = "https://t.me/teleport_brest";

const HelpForm = () => {
    const phoneInputRef = useRef();

    const validatePhone = value => {
        return /^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/.test(value);
    };

    const {
        value: phoneValue,
        isValid: phoneIsValid,
        hasError: phoneHasError,
        inputChangeHandler: onPhoneChange,
        inputBlurHandler: onPhoneBlur,
        reset: resetPhone
    } = useInput(validatePhone);

    const sendMsg = () => {
        if (!phoneIsValid) {
            onPhoneBlur();
            phoneInputRef.current.focus();
            return;
        }

        Telegram.setToken(telegramParams.token);
        Telegram.setRecipient(569228258);
        Telegram.setMessage(phoneValue);
        Telegram.send();

        resetPhone();
    };

    return (
        <div className={classes.back}>
            <Container>
                <div className={classes.wrapper}>
                    <div className={classes.pic}>
                        <img src="assets/mini1.webp"/>
                    </div>
                    <div className={classes.info}>
                        <p className={classes.title}>Поможем с выбором персонажа</p>
                        <div className={classes.contacts}>
                            <div className={classes.tel}>
                            <PhoneInput
                                ref={phoneInputRef}
                                name='Тел' 
                                placeholder='Ваш телефон'
                                value={phoneValue}
                                isInvalid={phoneHasError}
                                onChange={onPhoneChange}
                                onBlur={onPhoneBlur}/>
                                <button onClick={sendMsg}>Отправить</button>
                            </div>
                            <div className={classes.links}>
                                <a href={TELEGRAM_LINK} rel='noreferrer' target="_blank" className={classes.telegram}>
                                    <img src='assets/logo/contactsLogo/telegram.webp'/>
                                    <p>Telegram</p>
                                </a>
                                <a href={TEL_LINK} className={classes.telegram}>
                                    <img src='assets/logo/contactsLogo/tel.webp'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HelpForm;