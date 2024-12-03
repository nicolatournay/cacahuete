import React from 'react';
import { DashboardPage } from './DashboardPage';
import { FavouritesPage } from './FavouritesPage';
import { SettingsPage } from './SettingsPage';
import { Link, Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';

// Composants individuels
const Dashboard = () => <DashboardPage />;
const Favourites = () => <FavouritesPage />;
const Settings = () => <SettingsPage />;

// Future sidebar
const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/dashboard/favourites">Favourites</Link>
                </li>
                <li>
                    <Link to="/dashboard/settings">Settings</Link>
                </li>
            </ul>
        </nav>
    );
};

// Layout principal
const Layout = () => (
    <>
        <Navbar />
        <div>
            <Outlet />
        </div>
    </>
);

// Configuration des routes
const router = createBrowserRouter([
    {
        path: '/dashboard',
        element: <Layout />,
        children: [
            { path: '', element: <Dashboard /> },
            { path: 'favourites', element: <Favourites /> },
            { path: 'settings', element: <Settings /> },
        ]
    }
]);

// Composant principal
export const App = () => {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
};
