import cl from './AdminTable.module.css';

import AdminTableHeader from "../AdminTableHeader/AdminTableHeader";
import AdminTableRow from "../AdminTableRow/AdminTableRow";

export default function AdminTable({users}) {

    return (
        <div className={cl.table}>
            <h2 className={cl.title}>Список клиентов</h2>
            <AdminTableHeader />
            {users.map((user, index) => <AdminTableRow key={user.id} user={user} index={index + 1}/>)}
        </div>
    );
}