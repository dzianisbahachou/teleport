import APICalls from '../../API/API';
import { useLoaderData, json, useNavigate, redirect } from 'react-router-dom';
import cl from './AdminPage.module.css';
import app from '../../firebaseConfig';
import { getAuth, signOut } from 'firebase/auth';

import AdminTable from '../../components/AdminTable/AdminTable';
import { convertResponse } from '../../util/firebaseResponseHandler';
import AdminButton from '../../components/UI/AdminButton/AdminButton';
import { convertResponseErrorMessage } from '../../util/firebaseResponseHandler';
import { getCurrentUser } from '../../util/auth';
import * as XLSX from 'xlsx/xlsx.mjs';

export default function AdminPage() {
    const data = useLoaderData();
    const navigate = useNavigate();

    const onExitPress = async () => {
        const auth = getAuth();
        await signOut(auth);
        navigate('/');
    };

    const onExportBtnClick = () => {
        const wb = XLSX.utils.book_new();
        const exportData = data.map(item => {return {
            'Имя': item.name,
            'Телефон': item.tel,
            'Инстаграм': item.inst,
            'Дата': item.date
        }});
        const ws = XLSX.utils.json_to_sheet(exportData);
        ws['!cols'] = columnsWidth();

        XLSX.utils.book_append_sheet(wb, ws, 'Clients');
        XLSX.writeFile(wb, 'Clients.xlsx');
    };

    const columnsWidth = () => {
        // returns column width
        return [
            {wch:18},
            {wch:16},
            {wch:18},
            {wch:10}
        ];
    };

    return (
        <div className={cl.page}>
            <div className={cl.actions}>
                <AdminButton onClick={onExportBtnClick}>Экспорт в Excel</AdminButton>
                <AdminButton onClick={onExitPress}>Выйти</AdminButton>
            </div>
            <AdminTable users={data}/>
        </div>
    );
}

export async function loader() {
    try {
        const user = await getCurrentUser();

        if (!user) {
            return redirect('/auth');
        }

        const snapshot = await APICalls.getUsers();
        
        if (!snapshot.exists()) {
            throw new Error();
        }

        const value = snapshot.val();
        const users = convertResponse(value);

        return users;
    } catch(e) {
        const message = convertResponseErrorMessage(e.message);

        throw json(
            { message },
            { status: 500 }
        );
    }
}
