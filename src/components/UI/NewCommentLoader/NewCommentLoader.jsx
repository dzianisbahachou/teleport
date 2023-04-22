import cl from './NewCommentLoader.module.css';

export default function NewCommentLoader() {
    return (
        <div className={cl.wrapper}>
            <div className={cl['lds-ellipsis']}><div></div><div></div><div></div><div></div></div>
        </div>
    );
}