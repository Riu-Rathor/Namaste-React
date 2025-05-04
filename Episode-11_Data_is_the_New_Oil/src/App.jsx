import React from "react";
import ReactDOM from "react-dom/client";
import '../index.css';
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ContactUs from "./components/ContactUs.jsx";
import NotFound from "./components/NotFound.jsx";
import RestaurentCard from "./components/RestaurentCard.jsx";


const AppLayout = () => {
    return (
        <div id="app">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            { 
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <ContactUs/>
            },
            {
                path: "/restaurents/:id",
                element: <RestaurentCard/>
            }
        ],
        errorElement: <NotFound/>
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
