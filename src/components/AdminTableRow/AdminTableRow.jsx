import cl from './AdminTableRow.module.css';

export default function AdminTableRow({user, index}) {
    const telRef = `tel:${user.tel}`;
    const instaLink = `https://www.instagram.com/${user.inst}`;

    return (
        <div className={cl.item}>

            <div className={cl.collapsed}>
                <div className={cl['collapsed-name']}>{user.name}</div>
                <div className={cl['collapsed-inst']}>
                    <a href={instaLink} className={cl.inst}>{user.inst}</a>
                </div>
            </div>

            <div className={cl['index-cell']}>
                {index}
            </div>

            <div className={cl['name-cell']}>
                {user.name}
            </div>

            <div className={cl['inst-cell']}>
                <span className={cl.inst}>{user.inst}</span>
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
