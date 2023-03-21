import { Form, useNavigation, useSubmit } from 'react-router-dom';

import classes from "./MagicForm.module.css";
import Container from "../UI/Container/Container";
import magicAvatar from "../assets/magic-avatar.jpg";
import useInput from "../../hooks/use-input-reducer";
import { useRef } from 'react';

const MagicForm = () => {
    const instRef = useRef();
    const sub = useSubmit();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    const {value: enteredName,
        hasError: nameInputHasError,
        isValid: enteredNameIsValid,
        inputChangeHandler: nameChangeHandler,
        inputBlurHandler: nameInputBlurHandler,
        reset: nameReset
    } = useInput(value => value.trim() !== "");

    const {value: enteredTel,
        hasError: telInputHasError,
        isValid: enteredTelIsValid,
        inputChangeHandler: telChangeHandler,
        inputBlurHandler: telInputBlurHandler,
        reset: telReset
    } = useInput(value => {
        return /^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/.test(value);
    });
    
    let formIsValid;
    if (enteredNameIsValid && enteredTelIsValid) {
        formIsValid = true;
    }
    const nameInputClasses = nameInputHasError ? `${classes.paragraphs} ${classes.invalid}` : classes.paragraphs;
    const telInputClasses = telInputHasError ? `${classes.paragraphs} ${classes.invalid}` : classes.paragraphs;
    const validateForm = event => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        } else {

        }
        const inst = instRef.current.value;

        const formData = {
            name: enteredName,
            inst: inst,
            tel: enteredTel
        };

        sub(formData, {method: "post"});

        nameReset();
        telReset()
        instRef.current.value = "";
    }

    return ( <Container>
        <div className={classes.wrapper}>
            <div id="magicForm" className={classes.form}>
                <p className={classes["form-title"]}>Форма волшебства</p>
                <Form method="post" action="/" className={classes.inputs}>
                    <p className={nameInputClasses}>
                        <label htmlFor="name">Имя</label>
                        <input 
                            id="name" 
                            type="text" 
                            name="name" 
                            placeholder="Как Вас зовут?"
                            onChange={nameChangeHandler} 
                            onBlur={nameInputBlurHandler}
                            value={enteredName}
                        />
                    </p>
                    <p className={telInputClasses}>
                        <label htmlFor="tel">Телефон</label>
                        <input 
                            id="tel" 
                            type="tel" 
                            name="tel" 
                            placeholder="Номер телефона"
                            onChange={telChangeHandler} 
                            onBlur={telInputBlurHandler}
                            value={enteredTel}
                        />
                    </p>
                    <p className={classes.paragraphs}>
                        <label htmlFor="inst">Instagram</label>
                        <input ref={instRef} id="inst" type="text" name="inst" placeholder="Никнейм в Instagram"/>
                    </p>
                    <div>
                        <button onClick={validateForm} disabled={!formIsValid || isSubmitting} className={classes["form-button"]}>
                            {isSubmitting ? "Отправка..." : "Оставить заявку"}
                        </button>
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