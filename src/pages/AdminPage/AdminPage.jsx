import { getToken } from "../../util/auth";
import APICalls from "../../API/API";
import { redirect, useLoaderData, json, useNavigate } from "react-router-dom";
import cl from './AdminPage.module.css';
import { removeToken } from "../../util/auth";
import { removeExpiration } from "../../util/auth";

import AdminTable from "../../components/AdminTable/AdminTable";
import { convertResponse } from "../../util/firebaseResponseHandler";
import AdminButton from "../../components/UI/AdminButton/AdminButton";

export default function AdminPage() {
    const data = useLoaderData();
    const navigate = useNavigate();

    const onExitPress = () => {
        navigate('/');
        removeToken();
        removeExpiration();
    };

    return (
        <div>
            <div className={cl.actions}>
                <AdminButton>Экспорт в Excel</AdminButton>
                <AdminButton onClick={onExitPress}>Выйти</AdminButton>
            </div>
            <AdminTable users={data}/>
        </div>
    );
}

export async function loader() {
    const token = getToken();

    if (!token) {
        return redirect('/auth');
    }

    try {
        const snapshot = await APICalls.getUsers();

        if (!snapshot.exists()) {
            throw new Error();
        }

        const value = snapshot.val();
        const users = convertResponse(value);

        return users;
    } catch(e) {
        throw json(
            { message: "Произошла ошибка!" },
            { status: 500 }
        );
    }
}

