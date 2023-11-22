import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root/Root";
import ErrorPage from "../../Components/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import OurMenu from "../../Pages/OurMenu/OurMenu/OurMenu";
import AllFood from "../../Pages/AllFood/AllFood";
import Login from "../../Auth/Login/Login";
import SignUp from "../../Auth/SignUp/SignUp";
import Contact from "../../Pages/Contact/Contact";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Dashboard from "../../Layout/Dashboard/Dashboard";
import Cart from "../../Pages/Dashboard/Cart/Cart";



const router = createBrowserRouter([
    // normal user's view router
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
            {
                path: "/contact",
                element: <PrivateRouter><Contact /></PrivateRouter>
            }
        ]
    },
    // user login
    {
        path: "/login",
        element: <Login />
    },

    // user signup
    {
        path: "/signup",
        element: <SignUp />
    },

    // User dashbooard router
    {
        path: "dashboard",
        // path: "/dashboard",
        element: <PrivateRouter><Dashboard /></PrivateRouter>,
        children: [
            {
                path: "cart",
                // path: "/cart",
                element: <Cart />
            },
        ]
    }
])

export default router;