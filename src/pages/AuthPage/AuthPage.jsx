import { redirect, useNavigation } from 'react-router-dom';
import cl from './AuthPage.module.css';

import LoginForm from '../../components/LoginForm/LoginForm';
import LoginLoader from '../../components/UI/LoginLoader/LoginLoader';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function AuthPage() {
    const navigation = useNavigation();

    const isSubmitting = navigation.state === 'submitting';

    return (
        <div className={cl.page}>
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
    } catch(e) {
        const code = e.code;
        return code;
    }   

    return redirect('/admin');
}
