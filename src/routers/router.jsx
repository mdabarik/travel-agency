import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../components/Root/Root";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import News from "../pages/News/News";
import Destination from "../pages/Destination/Destination";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import PrivateRouter from "./PrivateRouter/PrivateRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <h1>Error Element.</h1>,
        children: [
            {
                path: '/',
                element: <PrivateRouter><Home></Home></PrivateRouter>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/news',
                element: <PrivateRouter><News></News></PrivateRouter>
            },
            {
                path: '/destination',
                element: <PrivateRouter><Destination></Destination></PrivateRouter>
            },
            {
                path: '/blog',
                element: <PrivateRouter><Blog></Blog></PrivateRouter>
            },
            {
                path: '/contact',
                element: <PrivateRouter><Contact></Contact></PrivateRouter>
            }
        ]
    }
])


export default router;