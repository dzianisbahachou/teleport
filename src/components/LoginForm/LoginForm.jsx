import cl from './LoginForm.module.css';
import { useState } from 'react';
import { Form } from "react-router-dom";
import { useActionData } from "react-router-dom";

import LoginInput from "../UI/LoginInput/LoginInput";
import LoginButton from "../UI/LoginButton/LoginButton";
import LoginValidationMessage from "../UI/LoginValidationMessage/LoginValidationMessage";
import { convertResponseCode } from '../../util/firebaseResponseHandler';

export default function LoginForm() {
    const actionData = useActionData(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let errorMessage;

    const isButtonDisabled = !email || !password;

    if (actionData) {
        errorMessage = convertResponseCode(actionData);
    }

    return(
        <div className={cl.content}>
            <h2 className={cl.title}>Войти как Админ</h2>
            <Form method='POST' className={cl.form}>
                <LoginInput 
                    name='email'
                    placeholder='Почта'
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>
                <LoginInput 
                    name='password'
                    placeholder='Пароль'
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>
                <div className={cl.validation}>
                    {errorMessage && <LoginValidationMessage>{errorMessage}</LoginValidationMessage>}
                </div>
                <LoginButton disabled={isButtonDisabled}>Войти</LoginButton>
            </Form>
        </div>
    );
}