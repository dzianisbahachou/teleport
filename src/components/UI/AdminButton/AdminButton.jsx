import cl from './AdminButton.module.css';

export default function AdminButton({children, ...props}) {
    return (
        <button {...props} className={cl.button}>{children}</button>
    );
}