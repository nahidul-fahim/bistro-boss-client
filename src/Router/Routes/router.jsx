import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root/Root";
import ErrorPage from "../../Components/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import OurMenu from "../../Pages/OurMenu/OurMenu/OurMenu";
import AllFood from "../../Pages/AllFood/AllFood";
import Login from "../../Auth/Login/Login";



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
    //     element: <div className="grid grid-cols-12">
    //         <div className="col-span-2 bg-[red]">
    //             <h1>Left bar</h1>
    //         </div>
    //         <div className="col-span-10 bg-[yellow]">
    //             <Outlet />
    //         </div>
    //     </div>,
    //     children: [
    //         {
    //             path: "/login",
    //             element: <Login />
    //         },

    //     ]
    }
])

export default router;