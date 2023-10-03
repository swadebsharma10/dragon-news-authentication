import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import Register from "../pages/Register/Register";
import PrivetRoute from "./PrivetRoute/PrivetRoute";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/news.json')
            },
            {
                path: '/news/:id',
                element: <PrivetRoute><NewsDetails></NewsDetails></PrivetRoute>
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
                path: '/about',
                element: <About></About>
            },
            {
                path: '/career',
                element: <Career></Career>
            }
        ]
    }
])

export default Router;