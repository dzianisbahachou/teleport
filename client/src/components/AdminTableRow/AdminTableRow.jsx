import cl from './AdminTableRow.module.css';

export default function AdminTableRow({user, index}) {
    const telRef = `tel:${user.number}`;
    const date = getUserCreationDate(user.createdAt);

    return (
        <div className={cl.item}>
            <div>{index}</div>
            <div>{user.name}</div>
            <div>{user.instagram}</div>
            <div><a href={telRef} className={cl.number}>{user.number}</a></div>
            <div>{date}</div>
        </div>
    );
}

function getUserCreationDate(date) {
    const isoDate = new Date(date).toISOString().split('T')[0];
    return isoDate.split('-').reverse().join('/');

}