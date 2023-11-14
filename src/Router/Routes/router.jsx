import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root/Root";
import ErrorPage from "../../Components/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import OurMenu from "../../Pages/OurMenu/OurMenu/OurMenu";



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
            }
        ]
    }
])

export default router;