import cl from './LoginForm.module.css';
import { Form } from "react-router-dom";
import { useActionData } from "react-router-dom";

import LoginInput from "../UI/LoginInput/LoginInput";
import LoginButton from "../UI/LoginButton/LoginButton";
import LoginValidationMessage from "../UI/LoginValidationMessage/LoginValidationMessage";

export default function LoginForm() {
    const actionData = useActionData();

    return(
        <div className={cl.content}>
            <h2 className={cl.title}>Войти как Админ</h2>
            <Form method='POST' className={cl.form}>
                <LoginInput name='login' placeholder="Логин"/>
                <LoginInput name='password' placeholder="Пароль"/>
                <div className={cl.validation}>
                    {actionData?.message && <LoginValidationMessage>{actionData.message}</LoginValidationMessage>}
                </div>
                <LoginButton>Войти</LoginButton>
            </Form>
        </div>
    );
}