import Container from '../UI/Container/Container';
import classes from './HelpForm.module.css';
import Telegram from 'telegram-send-message';
import { telegramParams } from './Settings';
import { useRef } from 'react';
import useInput from '../../hooks/use-input';
import PhoneInput from 'react-phone-input-2'
import './style.css';

const TEL_LINK = 'tel:375298309732';
const TELEGRAM_LINK = 'https://t.me/teleport_brest';

const HelpForm = () => {
    const phoneInputRef = useRef();

    const validatePhone = value => {
        return /^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/.test(value);
    };

    const {
        value: phoneValue,
        hasError: phoneHasError,
        inputPhoneChangeHandler: onPhoneChange,
        inputBlurHandler: onPhoneBlur,
        resetPhone
    } = useInput(validatePhone);

    const sendMsg = () => {
        const phoneNumber = phoneInputRef.current.numberInputRef.value;
        const isValidNumber = phoneNumber.replace(/[^\d]/g, '').length === 12;
        if (phoneHasError || !isValidNumber) {
            phoneInputRef.current.numberInputRef.focus();
            onPhoneBlur();
            return;
        }

        if(isValidNumber) {
            Telegram.setToken(telegramParams.token);
            Telegram.setRecipient(407401215);
            Telegram.setMessage(phoneValue);
            Telegram.send();
            resetPhone();
        }
    };

    const classess = phoneHasError ? `${classes.input} ${classes.invalid}` : classes.input;

    return (
        <div className={classes.back}>
            <Container>
                <div className={classes.wrapper}>
                    <div className={classes.pic}>
                        <img src='assets/mini1.webp' alt='Помощник с выбором'/>
                    </div>
                    <div className={classes.info}>
                        <p className={classes.title}>Поможем с выбором персонажа</p>
                        <div className={classes.contacts}>
                            <div className={classes.tel}>
                            <PhoneInput
                                ref={phoneInputRef}
                                name = 'phoneNumber'
                                type = 'text'
                                placeholder='Ваш телефон'
                                country={'by'}
                                countryCodeEditable={false}
                                autoFormat={true}
                                enableAreaCodes={false}
                                areaCodes={{by: ['375']}}
                                inputProps={{
                                    name: 'phone',
                                    country:'by',
                                    required: true,
                                    autoFocus: false
                                }}
                                value={phoneValue}
                                onChange={onPhoneChange}
                                inputClass={classess}
                                onBlur={onPhoneBlur}
                            />
                            <button onClick={sendMsg}>Отправить</button>
                            </div>
                            <div className={classes.links}>
                                <a href={TELEGRAM_LINK} rel='noreferrer' target='_blank' className={classes.telegram}>
                                    <img src='assets/logo/contactsLogo/telegram.webp' alt='Телеграм лого'/>
                                    <span>Telegram</span>
                                </a>
                                <a href={TEL_LINK} className={classes.telegram}>
                                    <img src='assets/logo/contactsLogo/tel.webp' alt='Телефон лого'/>
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