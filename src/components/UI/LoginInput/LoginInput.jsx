import cl from './LoginInput.module.css'

export default function LoginInput({state, ...props}) {
    return (
        <input {...props} className={cl.input}/>
    );
}
