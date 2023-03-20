import cl from './LoginLoader.module.css';

export default function LoginLoader() {
    return (
        <div className={cl.wrapper}>
            <div class={cl['lds-roller']}>
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
