import cl from './AdminTableHeader.module.css';

export default function AdminTableHeader() {

    return (
        <div className={cl.header}>
            <div>№</div>
            <div>Имя</div>
            <div>Инстаграм</div>
            <div>Номер</div>
            <div>Дата</div>
        </div>
    );
}