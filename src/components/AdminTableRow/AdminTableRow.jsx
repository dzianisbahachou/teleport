import cl from './AdminTableRow.module.css';

export default function AdminTableRow({user, index}) {
    const telRef = `tel:${user.tel}`;
    const instLink = `https://www.instagram.com/${user.inst}`;
    const instName = user.inst !== '' 
        ? <a href={instLink} className={cl.inst}>{user.inst}</a>
        : <span className={cl.inst}>Не указано</span>;

    return (
        <div className={cl.item}>

            <div className={cl.collapsed}>
                <div className={cl['collapsed-name']}>{user.name}</div>
                <div className={cl['collapsed-inst']}>
                    {instName}
                </div>
            </div>

            <div className={cl['index-cell']}>
                {index}
            </div>

            <div className={cl['name-cell']}>
                {user.name}
            </div>

            <div className={cl['inst-cell']}>
                {instName}
            </div>

            <div className={cl['tel-cell']}>
                <a href={telRef} className={cl.number}>{user.tel}</a>
            </div>

            <div className={cl['date-cell']}>
                {user.date}
            </div>
        </div>
    );
}
