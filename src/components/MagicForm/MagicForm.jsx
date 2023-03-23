import { Form, useNavigation, useSubmit } from 'react-router-dom';
import React, { useState, useEffect, useReducer, useRef } from 'react';
import classes from "./MagicForm.module.css";
import Container from "../UI/Container/Container";
import magicAvatar from "../assets/magic-avatar.jpg";
import Input from "./../Input/Input";

const nameReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
      return {value: action.val, isValid: action.val.length > 0, initial: false}
    }
    if (action.type === "USER_BLUR") {
      return {value: state.value, isValid: state.value.length > 0, initial: false}
    }
    return {value: "", isValid: false, initial: true}
  };
  
  const telReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
      return {value: action.val, isValid: /^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/.test(action.val), initial: false}
    }
    if (action.type === "USER_BLUR") {
      return {value: state.value, isValid: /^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/.test(state.value), initial: false}
    }
    return {value: "", isValid: false, initial: true}
  };

  const instReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
      return {value: action.val, isValid: true, initial: false}
    }
    if (action.type === "USER_BLUR") {
      return {value: state.value, isValid: true, initial: false}
    }
    return {value: "", isValid: true, initial: true}
  };

const MagicForm = () => {
    const sub = useSubmit();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

  
    const [formIsValid, setFormIsValid] = useState(false);

    const [nameState, dispatchName, initialName] = useReducer(nameReducer, {
      value: "", 
      isValid: null,
      initial: true
    });
    const [telState, dispatchTel, initialTel] = useReducer(telReducer, {
      value: "", 
      isValid: null,
      initial: true
    });
    const [instState, dispatchInst] = useReducer(instReducer, {
        value: "", 
        isValid: null
      });
  
    const {isValid: nameIsValid} = nameState;
    const {isValid: telIsValid} = telState;
  
    const nameInputRef = useRef();
    const telInputRef = useRef();
    const instInputRef = useRef();

    const nameChangeHandler = (event) => {
      dispatchName({type: "USER_INPUT", val: event.target.value});
    };
  
    const telChangeHandler = (event) => {
      dispatchTel({type: "USER_INPUT", val: event.target.value});
    };

    const instChangeHandler = (event) => {
        dispatchInst({type: "USER_INPUT", val: event.target.value});
    };    
  
    const validateNameHandler = () => {
        dispatchName({type: "USER_BLUR"});
    };
  
    const validateTelHandler = () => {
        dispatchTel({type: "USER_BLUR"});
    };

    const validateInstHandler = () => {
        dispatchInst({type: "USER_BLUR"});
    };
  
    const submitHandler = (event) => {
        event.preventDefault();
        if (formIsValid) {
            const formData = {
                name: nameState.value,
                tel: telState.value,
                inst: instState.value
            };
            sub(formData, {method: "post"});
            dispatchName({type: ""});
            dispatchInst({type: ""});
            dispatchTel({type: ""});
        } else if (!nameIsValid && telIsValid) {
            debugger
            validateNameHandler();
            nameInputRef.current.focus();
        }else if (nameIsValid && !telIsValid) {
            validateTelHandler()
            telInputRef.current.focus();
        }else if (!nameIsValid && !telIsValid) {
            validateNameHandler();
            validateTelHandler()
            nameInputRef.current.focus();
        };
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
                        label="Имя"
                        placeholder="Как Вас зовут?"
                        isValid={nameIsValid && initialName}
                        value={nameState.value}
                        onChange={nameChangeHandler}
                        onBlur={validateNameHandler}/>
                    <Input 
                        ref={telInputRef}
                        id="tel" 
                        type="tel" 
                        label="Телефон"
                        placeholder="Номер телефона"
                        isValid={telIsValid && initialTel}
                        value={telState.value}
                        onChange={telChangeHandler}
                        onBlur={validateTelHandler}/>
                    <Input 
                        ref={instInputRef}
                        id="inst" 
                        type="text" 
                        label="Instagram"
                        placeholder="Никнейм Instagram"
                        value={instState.value}
                        onChange={instChangeHandler}
                        onBlur={validateInstHandler}/>
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