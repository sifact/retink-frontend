import React from "react";
import "./Features.css";

import logo1 from "../../assets/artificial-intelligence-svgrepo-com 1AI.svg";
import logo2 from "../../assets/Groupbrandidentity.svg";
import logo3 from "../../assets/Vectorinform.svg";
import logo4 from "../../assets/direct-customer-svgrepo-com 1review.svg";
import logo5 from "../../assets/Vectorpublish.svg";

const Features = () => {
    return (
        <section className="features  container__vn my-24">
            <div className="card__wrapper ">
                <div className="card">
                    <div className="flex justify-center">
                        <img
                            src={logo1}
                            alt=""
                            data-aos="fade-left"
                            data-aos-delay="500"
                        />
                    </div>

                    <h1>MakeAI-assisted Content Choices</h1>
                    <p>
                        Access and Order from an extensive catalogue in any
                        language and on your budget’s terms. If unsure, our AI
                        guides you to the best.
                    </p>
                </div>
                <div className="card">
                    <div className="flex justify-center">
                        <img
                            src={logo2}
                            alt=""
                            data-aos="fade-left"
                            data-aos-delay="500"
                        />
                    </div>

                    <h1>Upload and Maintain your Brand Identity</h1>
                    <p>
                        Add your preferences and brand assets to ensure the
                        contents is consistent with your brand identity. No
                        brand asset? We can make for you!
                    </p>
                </div>
                <div className="card">
                    <div className="flex justify-center">
                        {" "}
                        <img
                            src={logo3}
                            alt=""
                            data-aos="fade-left"
                            data-aos-delay="500"
                        />
                    </div>

                    <h1>Be informed as we create</h1>
                    <p>
                        Your details are translated and sent to the AI, FP, or
                        both (per your choice) as you relax and receive
                        continuous updates.
                    </p>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="bottom grid grid-cols-2">
                    <div
                        className="card "
                        style={{ width: "396px", height: "338px" }}
                    >
                        <div className="flex justify-center">
                            {" "}
                            <img
                                data-aos="fade-right"
                                data-aos-delay="500"
                                src={logo4}
                                alt=""
                            />
                        </div>

                        <h1>Receive and Review</h1>
                        <p>
                            The finished content is delivered and you can make
                            corrections that we will effect to satisfy your
                            requirements.
                        </p>
                    </div>

                    <div
                        className="card"
                        style={{ width: "396px", height: "338px" }}
                    >
                        <div className="flex justify-center">
                            <img
                                src={logo5}
                                alt=""
                                data-aos="fade-right"
                                data-aos-delay="500"
                            />
                        </div>

                        <h1>Publish and Monitor your contents’ progress</h1>
                        <p>
                            The finished content is delivered and you can make
                            corrections that we will effect to satisfy your
                            requirements.
                        </p>
                    </div>
                </div>
            </div>

            <div className="content mt-24">
                <h1
                    style={{ color: "var(--primary)" }}
                    data-aos="fade-down"
                    data-aos-delay="500"
                    className="text-center text-2xl font-semibold my-4"
                >
                    Transform your Creation Process
                </h1>
                <p className="text-center para">
                    With a new approach toordering content, you can now stop
                    juggling multiple <br /> documents and meetings and start
                    publishing content faster and on demand
                </p>
            </div>
        </section>
    );
};

export default Features;
