import cl from './AdminTableHeader.module.css';

export default function AdminTableHeader() {

    return (
        <div className={cl.header}>
            <div className={cl['index-cell']}>№</div>
            <div className={cl.collapsed}>Имя/Инста</div>
            <div className={cl['name-cell']}>Имя</div>
            <div className={cl['inst-cell']}>Инстаграм</div>
            <div className={cl['tel-cell']}>Номер</div>
            <div className={cl['date-cell']}>Дата</div>
        </div>
    );
}