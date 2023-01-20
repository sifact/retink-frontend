import React from "react";
import Content from "../Components/Content/Content";
import Features from "../Components/Features/Features";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Notify from "../Components/Notify/Notify";
import TopBanner from "../Components/TopBanner/TopBanner";
import Video from "../Components/Video/Video";

const Home = () => {
    return (
        <section>
            <TopBanner />

            <Video />
            <Features />
            <Content />
            <Notify />
        </section>
    );
};

export default Home;
