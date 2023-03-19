import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Animators from "./pages/AnimatorsPage";

import RootLayoutPage from './pages/RootLayoutPage';
import AuthPage, {action as authAction} from './pages/AuthPage';
import ErrorPage from './pages/ErrorPage';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';
import { action as MagicFormAction } from './components/MagicForm/MagicForm';


const router = createBrowserRouter([
  {path: '/', element: <RootLayoutPage />, errorElement: <ErrorPage />, children: [
    {path: '/', element: <HomePage/>, action: MagicFormAction},
    {path: 'animators', element: <Animators/>},
  ]},
  {path: '/auth', element: <AuthPage />, errorElement: <ErrorPage />, action: authAction},
  {path: '/admin', element: <AdminPage />, errorElement: <ErrorPage />}
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
