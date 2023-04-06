import cl from './MainButton.module.css'

export default function MainButton({children, ...props}) {

    return (
        <button {...props} className={cl.button}>{children}</button>
    );
}
