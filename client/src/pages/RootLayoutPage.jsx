import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header';

export default function RootLayoutPage() {

    return (
        <>
            <Header/>
            <Outlet />
            {/* footer */}
        </>
    );
}
