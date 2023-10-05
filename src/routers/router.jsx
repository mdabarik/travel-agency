import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../components/Root/Root";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <h1>Error Element.</h1>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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
                element: <h2>News Page</h2>
            },
            {
                path: '/destination',
                element: <h2>Destination Page</h2>
            },
            {
                path: '/blog',
                element: <h2>Blog Page</h2>
            },
            {
                path: '/contact',
                element: <h2>Contact Page</h2>
            }
        ]
    }
])


export default router;