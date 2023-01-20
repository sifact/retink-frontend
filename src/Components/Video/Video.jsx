import React from "react";
import "./Video.css";
import img from "../../assets/Screenshot 2021-10-24 at 14.53 1.png";

const Video = () => {
    return (
        <section className="my-12 container__vn">
            <h1
                style={{ color: "var(--primary)" }}
                className="text-2xl font-bold my-8 text-center"
            >
                Explainer Video
            </h1>
            <div className=" flex justify-center">
                <img src={img} alt="video-img" />
            </div>
        </section>
    );
};

export default Video;
