import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contactus from "./components/Contactus";
import Error from "./components/Error";
import Menu from "./components/Menu";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet />
            {/* <Footer /> */}
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contactus />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>
            },
            {
                path: "/restaurant/:resID",
                element: <Menu />
            }
        ],
        errorElement: <Error />
    },
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <RouterProvider router = {appRouter}/>
);