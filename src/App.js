import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import AnimatorsPage, { loader as animatorsLoader} from "./pages/AnimatorsPage";

import RootLayoutPage from './pages/RootLayoutPage';
import AuthPage, {action as authAction} from './pages/AuthPage/AuthPage';
import ErrorPage from './pages/ErrorPage';
import AdminPage, {loader as adminLoader} from './pages/AdminPage/AdminPage';
import HomePage, {action as addUserAction} from "./pages/HomePage";
import CommentsPage, {loader as commentsLoader, action as commentsAction} from './pages/CommentsPage/CommentsPage';
import EventDetailsPage, {loader as eventDetailsLoader} from './pages/EventDetailsPage';

const router = createBrowserRouter([
  {path: '/', element: <RootLayoutPage />, errorElement: <ErrorPage />, children: [
    {index: true, element: <HomePage/>, action: addUserAction},
    {path: 'animators', element: <AnimatorsPage/>, loader: animatorsLoader },
    {path: 'animators/:eventType', element: <EventDetailsPage/>, loader: eventDetailsLoader },
    {path: 'comments', element: <CommentsPage/>, loader: commentsLoader, action: commentsAction},
  ]},
  {path: '/auth', element: <AuthPage />, errorElement: <ErrorPage />, action: authAction},
  {path: '/admin', element: <AdminPage />, errorElement: <ErrorPage />, loader: adminLoader}
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
