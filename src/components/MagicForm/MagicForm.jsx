import { Form, useNavigation, useSubmit } from 'react-router-dom';
import React, { useRef } from 'react';
import useInput from '../../hooks/use-input';
import classes from "./MagicForm.module.css";
import Container from "../UI/Container/Container";
import magicAvatar from "../assets/magic-avatar.jpg";
import Input from "./../Input/Input";

const MagicForm = () => {
    const sub = useSubmit();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    const nameInputRef = useRef();
    const telInputRef = useRef();

    const validateName = value => {
      return value.length > 0;
    };

    const validateTel = value => {
      return /^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/.test(value);
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
      value: telValue,
      isValid: telIsValid,
      hasError: telHasError,
      inputChangeHandler: onTelChange,
      inputBlurHandler: onTelBlur,
      reset: resetTel
    } = useInput(validateTel);

    const {
      value: instValue,
      inputChangeHandler: onInstChange,
      reset: restInts
    } = useInput(validateInst);

    const formIsValid = nameIsValid && telIsValid;

    const submitHandler = (event) => {
      event.preventDefault();
      
      if (!telIsValid) {
        onTelBlur();
        telInputRef.current.focus();
      }

      if (!nameIsValid) {
        onNameBlur();
        nameInputRef.current.focus();
      }

      if (formIsValid) {
        const formData = {
          nameValue,
          telValue,
          instValue
        };
        sub(formData, {method: "post"});

        resetName();
        resetTel();
        restInts();
      }
    };

    return ( <Container>
        <div className={classes.wrapper}>
            <div id="magicForm" className={classes.form}>
                <p className={classes["form-title"]}>Форма волшебства</p>
                <Form method="post" action="/" className={classes.inputs}>
                    <Input 
                        ref={nameInputRef}
                        id="name" 
                        type="text" 
                        label="Имя*"
                        placeholder="Как Вас зовут?"
                        isValid={!nameHasError}
                        value={nameValue}
                        onChange={onNameChange}
                        onBlur={onNameBlur}/>
                    <Input 
                        ref={telInputRef}
                        id="tel" 
                        type="tel" 
                        label="Телефон*"
                        placeholder="Номер телефона"
                        isValid={!telHasError}
                        value={telValue}
                        onChange={onTelChange}
                        onBlur={onTelBlur}/>
                    <Input 
                        id="inst" 
                        type="text" 
                        label="Instagram"
                        placeholder="Никнейм Instagram"
                        value={instValue}
                        onChange={onInstChange}/>
                    <div>
                        <button onClick={submitHandler} className={classes["form-button"]}>Отправить заявку</button>
                    </div>
                </Form>
            </div>
            <div className={classes.avatar}>
                <img src={magicAvatar} alt="Аватар" width="200px" height="250px"/>
            </div>
        </div>
    </Container>
    );
};

export default MagicForm;