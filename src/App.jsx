import { useEffect, useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Features from "./Components/Features/Features";
import TopBanner from "./Components/TopBanner/TopBanner";
import Video from "./Components/Video/Video";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Notify from "./Components/Notify/Notify";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import Aos from "aos";

import "aos/dist/aos.css";

function App() {
    useEffect(() => {
        Aos.init({
            duration: 2500,
            delay: 400,
        });
    }, []);

    return (
        <section>
            <RouterProvider router={router} />
        </section>
    );
}

export default App;
