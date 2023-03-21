import { redirect, useNavigation } from "react-router-dom";
import { setToken } from "../util/auth";
import LoginForm from "../components/LoginForm/LoginForm";
import LoginLoader from "../components/UI/LoginLoader/LoginLoader";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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

export async function action({request}) {
    const auth = getAuth();
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');

    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredentials.user;
        const expiration = new Date();
        setToken(user.accessToken);

        
        expiration.setHours(expiration.getHours() + 1);
        localStorage.setItem('expiration', expiration.toISOString());
    } catch(e) {
        const code = e.code;
        return code;
    }   

    return redirect('/admin');
}
