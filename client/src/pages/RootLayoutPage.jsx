import { Outlet } from 'react-router-dom'

export default function RootLayoutPage() {

    return (
        <div>
            header
            <Outlet />
            footer
        </div>
    );
}
