import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import AboutUs from "../Components/Pages/AboutUs";
import Service from "../Components/Pages/Service";
import Contact from "../Components/Pages/Contact";
import MainLayout from "../Components/Layout/MainLayout";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "about",
                element: <AboutUs />
            },
            {
                path: "service",
                element: <Service />
            },
            {
                path: "contact",
                element: <Contact />
            },
        ]
    }
])

