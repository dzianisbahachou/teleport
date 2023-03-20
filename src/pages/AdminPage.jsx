import { getToken } from "../util/auth";
import APICalls from "../API/API";
import { redirect, useLoaderData, json } from "react-router-dom";

import AdminTable from "../components/AdminTable/AdminTable";
import { convertResponse } from "../util/firebaseResponseHandler";

export default function AdminPage() {
    const data = useLoaderData();

    return (
        <div>
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

