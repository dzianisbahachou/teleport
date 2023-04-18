import cl from './EmptyListMessage.module.css';

export default function EmptyListMessage({text}) {
    
    return (
        <div className={cl.wrapper}>
            {text}
        </div>
    );
    
}