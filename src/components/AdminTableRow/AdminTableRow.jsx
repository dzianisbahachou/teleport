import cl from './AdminTableRow.module.css';

export default function AdminTableRow({user, index}) {
    const telRef = `tel:${user.tel}`;

    return (
        <div className={cl.item}>
            <div>{index}</div>
            <div>{user.name}</div>
            <div>{user.inst}</div>
            <div><a href={telRef} className={cl.number}>{user.tel}</a></div>
            <div>{user.date}</div>
        </div>
    );
}
