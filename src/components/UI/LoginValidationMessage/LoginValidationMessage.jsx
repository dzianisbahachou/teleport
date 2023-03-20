import cl from './LoginValidationMessage.module.css'

export default function LoginValidationMessage({children}) {
    return (
        <span className={cl.message}>{children}</span>
    );
}
