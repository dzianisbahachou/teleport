import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header';
import Container from '../components/UI/Container/Container'

export default function RootLayoutPage() {

    return (
        <Container>
            <Header/>
            <Outlet />
            {/* footer */}
        </Container>
    );
}
