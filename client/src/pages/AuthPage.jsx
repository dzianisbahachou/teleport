import { redirect, useNavigation } from "react-router-dom";
import { setToken } from "../util/auth";
import LoginForm from "../components/LoginForm/LoginForm";
import LoginLoader from "../components/UI/LoginLoader/LoginLoader";

export default function AuthPage() {
    const navigation = useNavigation();

    const isSubmitting = navigation.state === 'submitting';

    return (
        <div>
            {isSubmitting && <LoginLoader />}
            <LoginForm />
        </div>
    );
}

export async function action({request, params}) {
    const url = 'http://localhost:5000/api/admin/login';
    const data = await request.formData();
    const payload = {
        login: data.get('login'),
        password: data.get('password')
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    if (response.status === 422) {
        return response;
    }

    if (!response.ok) {
        // common error handler should be 
        console.log('Error')
    }

    const responseData = await response.json();
    setToken(responseData);

    return redirect('/admin');
}
