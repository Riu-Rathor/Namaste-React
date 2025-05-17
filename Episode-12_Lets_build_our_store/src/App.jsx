import React, { useEffect, useState } from "react";
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
import UserContext from "./utils/UserContext.js";
import {Provider} from 'react-redux';
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.jsx";


const AppLayout = () => {
    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: "Rishit Singh"
        };
        setUserName(data.name);
    }, []);
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div id="app">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
        </UserContext.Provider>
        </Provider>
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
            },
            {
                path: "/cart",
                element: <Cart/>
            }
        ],
        errorElement: <NotFound/>
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
