import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { ToastContainer } from 'react-toastify';

export default function RootLayoutPage() {

    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
            <ToastContainer />
        </>
    );
}
