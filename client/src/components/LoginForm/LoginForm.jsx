import cl from './LoginForm.module.css';
import { useState } from 'react';
import { Form } from "react-router-dom";
import { useActionData } from "react-router-dom";

import LoginInput from "../UI/LoginInput/LoginInput";
import LoginButton from "../UI/LoginButton/LoginButton";
import LoginValidationMessage from "../UI/LoginValidationMessage/LoginValidationMessage";

export default function LoginForm() {
    const actionData = useActionData();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const isButtonDisabled = !login || !password;

    return(
        <div className={cl.content}>
            <h2 className={cl.title}>Войти как Админ</h2>
            <Form method='POST' className={cl.form}>
                <LoginInput 
                    name='login'
                    placeholder="Логин"
                    value={login}
                    onChange={e => setLogin(e.target.value)}/>
                <LoginInput 
                    name='password'
                    placeholder="Пароль"
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>
                <div className={cl.validation}>
                    {actionData?.message && <LoginValidationMessage>{actionData.message}</LoginValidationMessage>}
                </div>
                <LoginButton disabled={isButtonDisabled}>Войти</LoginButton>
            </Form>
        </div>
    );
}