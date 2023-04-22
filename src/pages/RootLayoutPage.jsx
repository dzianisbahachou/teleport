import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { ToastContainer } from 'react-toastify';

export default function RootLayoutPage() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
            <ToastContainer />
        </>
    );
}
