import { getToken } from "../util/auth";
import URLPaths from "../API/url";
import { redirect, useLoaderData } from "react-router-dom";

import AdminTable from "../components/AdminTable/AdminTable";

export default function AdminPage() {
    const data = useLoaderData();
    debugger

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
    
    const response = await fetch(URLPaths.getUsers(), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });

    if (response.status === 401) {
        throw 'Error'
    }

    if (!response.ok) {
        // common error handler should be 
        console.log('Error')
        return;
    }

    return response;
} 
