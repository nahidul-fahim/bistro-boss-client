import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root/Root";
import ErrorPage from "../../Components/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import OurMenu from "../../Pages/OurMenu/OurMenu/OurMenu";
import AllFood from "../../Pages/AllFood/AllFood";
import Login from "../../Auth/Login/Login";
import SignUp from "../../Auth/SignUp/SignUp";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/menu",
                element: <OurMenu />
            },
            {
                path: "/allfood/:category",
                element: <AllFood />
            },
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <SignUp />
    }
])

export default router;