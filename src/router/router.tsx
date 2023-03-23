import { createHashRouter } from 'react-router-dom';
import { FavoritesPageLayout } from '../pages/favoritesPage/view';
import { HomePage } from '../pages/homePage/view';
import { RootLayout } from '../pages/root/view';

export const router = createHashRouter([
    { path: '/', element: <RootLayout />, children: [
        { path: '/', element: <HomePage /> },
        { path: '/favorites', element: <FavoritesPageLayout /> }
    ]}
]);