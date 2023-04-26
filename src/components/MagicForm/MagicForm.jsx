import { Form, useNavigation, useSubmit } from 'react-router-dom';
import React, { useRef } from 'react';
import useInput from '../../hooks/use-input';
import classes from './MagicForm.module.css';
import Container from '../UI/Container/Container';
import Input from './../Input/Input';
import PhoneInput from 'react-phone-input-2'
import '../HelpForm/style.css';

const MagicForm = () => {
    const sub = useSubmit();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    const nameInputRef = useRef();
    const phoneInputRef = useRef();

    const validateName = value => {
      return value.length > 0;
    };

    const validatePhone = value => {
      return /^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/.test(value) && value.replace(/[^\d]/g, '').length === 12
    };

    const validateInst = () => {
      return true;
    };

    const {
      value: nameValue,
      isValid: nameIsValid,
      hasError: nameHasError,
      inputChangeHandler: onNameChange,
      inputBlurHandler: onNameBlur,
      reset: resetName
    } = useInput(validateName);

    const {
      value: phoneValue,
      hasError: phoneHasError,
      inputPhoneChangeHandler: onPhoneChange,
      inputBlurHandler: onPhoneBlur,
      resetPhone
  } = useInput(validatePhone);

    const {
      value: instValue,
      inputChangeHandler: onInstChange,
      reset: resetInts
    } = useInput(validateInst);


    const submitHandler = (event) => {
      event.preventDefault();

      const phoneNumber = phoneInputRef.current.numberInputRef.value;
        let isValidNumber = phoneNumber.replace(/[^\d]/g, '').length === 12;
        if (phoneHasError || !isValidNumber) {
          phoneInputRef.current.numberInputRef.focus();
          onPhoneBlur();
      }

      if (!nameIsValid) {
        onNameBlur();
        nameInputRef.current.focus();
      }

      if (nameIsValid && isValidNumber && !phoneHasError) {
        const formData = {
          name: nameValue,
          tel: phoneValue,
          inst: instValue
        };
        sub(formData, {method: 'post'});

        resetName();
        resetPhone();
        resetInts();
      }
    };

    let classess = phoneHasError ? `${classes.input} ${classes.invalid}` : classes.input;

    return ( <div className={classes.back}>
      <Container>
        <div className={classes.wrapper}>
            <div id='magicForm' className={classes.form}>
                <span className={classes['form-title']}>Волшебство начинается здесь</span>
                <span className={classes['form-description']}>Мы поможем вам организовать праздник мечты.</span>
                <Form method='post' action='/' className={classes.inputs}>
                    <Input 
                        ref={nameInputRef}
                        id='name' 
                        type='text' 
                        label='Имя*'
                        placeholder='Как Вас зовут?'
                        isValid={!nameHasError}
                        value={nameValue}
                        onChange={onNameChange}
                        onBlur={onNameBlur}/>
                    <label className={classes['phone-label']} htmlFor='phone'>Телефон</label>
                    <PhoneInput
                        id='phone'
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
                    <Input 
                        id='inst' 
                        type='text' 
                        label='Instagram'
                        placeholder='Никнейм Instagram (необязательно)'
                        value={instValue}
                        onChange={onInstChange}/>
                    <div className={classes['form-submit']}>
                        <button onClick={submitHandler} disabled={isSubmitting} className={classes['form-button']}>Отправить</button>
                    </div>
                </Form>
            </div>
            <div className={classes.avatar}>
              <img src='assets/child.png' alt='Фото формы волшебства'/>
            </div>
        </div>
      </Container>
    </div>);
};

export default MagicForm;