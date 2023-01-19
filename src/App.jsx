import { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Features from "./Components/Features/Features";
import TopBanner from "./Components/TopBanner/TopBanner";
import Video from "./Components/Video/Video";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Notify from "./Components/Notify/Notify";

function App() {
    return (
        <section>
            <Navbar />
            <TopBanner />

            <Video />
            <Features />
            <Content />
            <Notify />
            <Footer />
        </section>
    );
}

export default App;
