import { NavigationBar } from '../../components/navbar/view';
import { Outlet } from 'react-router-dom';

export function RootLayout() {
    return <>
        <NavigationBar />
        <Outlet />
    </>;
}