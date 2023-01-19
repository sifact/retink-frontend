import React from "react";
import "./Content.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";

const Content = () => {
    return (
        <section className="content my-24 container__vn">
            <div className="content mt-12">
                <h1
                    style={{ color: "var(--primary)" }}
                    className="text-center text-2xl font-semibold py-4"
                >
                    Activate your business growth with RetinkContent.
                </h1>
                <p className="text-center para">
                    Save time and maintain your brand identity within your
                    budget range or <br /> sign up for affordable plans and
                    still access multiple content services like:
                </p>
            </div>

            <div className="box__wrapper my-24">
                <div className="box">
                    <img src={img1} alt="" />
                    <h1>Logos</h1>
                    <hr />
                    <p>
                        {" "}
                        Have a unique & creative logo designed to express and
                        represent your brand identity.
                    </p>
                </div>
                <div className="box">
                    <img src={img2} alt="" />
                    <h1>Blog Writing</h1>
                    <hr />
                    <p>
                        {" "}
                        Write SEO enriched blog posts as long or short articles
                        on any topic of your choice .
                    </p>
                </div>
                <div className="box">
                    <img src={img3} alt="" />
                    <h1>Animated Videos</h1>
                    <hr />
                    <p>
                        Bring animated characters to life to keep your viewers
                        engaged and entertained.
                    </p>
                </div>
                <div className="box">
                    <img src={img4} alt="" />
                    <h1>Product Demo.</h1>
                    <hr />
                    <p>
                        {" "}
                        Introduce your product to potential customers in a clear
                        and creative video.
                    </p>
                </div>
                <div className="box">
                    <img src={img5} alt="" />
                    <h1>Copywriting</h1>
                    <hr />
                    <p>
                        {" "}
                        Have creative and compelling copies written to boost
                        your product, brand, service or company.
                    </p>
                </div>
                <div className="box">
                    <img src={img6} alt="" />
                    <h1>Social Media Ads</h1>
                    <hr />
                    <p>
                        {" "}
                        Boost sales and awareness with tailor made ads from
                        experts.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Content;
