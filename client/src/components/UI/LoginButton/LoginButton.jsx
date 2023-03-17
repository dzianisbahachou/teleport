import cl from './LoginButton.module.css'

export default function LoginButton({children, ...props}) {
    return (
        <button {...props} className={cl.button}>{children}</button>
    );
}
