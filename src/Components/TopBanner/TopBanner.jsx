import React from "react";
import "./TopBanner.css";
import img from "../../assets/Retink-hero-img.png";
import { Link } from "react-router-dom";

const TopBanner = () => {
    return (
        <section className="top__banner container__vn flex justify-between my-12">
            <div className="right flex items-center">
                <div>
                    <h1
                        data-aos="fade-down"
                        data-aos-delay="200"
                        className="text-4xl font-bold"
                    >
                        Get Advanced AI + Expert Created
                    </h1>
                    <h1
                        className="text-4xl font-bold mt-4"
                        style={{ color: "var(--primary)" }}
                    >
                        Logos
                    </h1>

                    <p className="text-2xl mt-5">
                        Boost your sales{" "}
                        <span style={{ color: "var(--primary)" }}>
                            10x faster
                        </span>{" "}
                        with content customized by our
                    </p>

                    <p className="text-2xl mb-5">
                        unique partnership of{" "}
                        <span style={{ color: "var(--primary)" }}>
                            human creativity and AI optimization
                        </span>
                    </p>
                    <p
                        style={{ color: "var(--primary)" }}
                        className="text-2xl font-semibold mb-4"
                        data-aos="fade-left"
                        data-aos-delay="200"
                    >
                        Sign Up For The BETA!
                    </p>

                    <form className="form">
                        <div>
                            {" "}
                            <input
                                placeholder="Business name"
                                className="border-b"
                                type="text"
                            />{" "}
                            <span className="margin">
                                would like a beta invite sent to{" "}
                            </span>{" "}
                            <input
                                placeholder="@email address"
                                className="border-b"
                                type="email"
                            />
                            <span>When it's ready!</span>
                        </div>
                    </form>
                    <div className="my-8">
                        <button
                            className="btn-primary smooth mr-20"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Notify me
                        </button>
                        <Link to="/register">
                            <button
                                className="btn-secondary smooth"
                                data-aos="fade-down"
                                data-aos-delay="200"
                            >
                                Sign up as a freelance partner
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="left flex justify-end">
                <img className="w-4/5" src={img} alt="image" />
            </div>
        </section>
    );
};

export default TopBanner;
