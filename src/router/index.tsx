import { createBrowserRouter } from "react-router-dom";
import Support from "@/Pages/LangingPages/Support";
import About from "@/Pages/LangingPages/About";
import NotFound from "@/Pages/LangingPages/NotFound";
import Services from "@/Pages/LangingPages/Services";
import Home from "@/Pages/LangingPages/Home";
import Contact from "@/Pages/LangingPages/Contact";
import NavigatorMenu from "@/Pages/LangingPages/Components/Navigator";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home children={undefined} />,
        children: [
            {
                path: "/services",
                element: <Services />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/support",
                element: <Support />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },

            {
                path: "/services",
                element: <Services />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/support",
                element: <Support />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);
