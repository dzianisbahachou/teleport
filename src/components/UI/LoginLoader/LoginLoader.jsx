import cl from './LoginLoader.module.css';

export default function LoginLoader() {
    return (
        <div className={cl.wrapper}>
            <div className={cl['lds-roller']}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
