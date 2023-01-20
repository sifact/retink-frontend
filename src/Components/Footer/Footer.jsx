import React from "react";
import "./Footer.css";
import logo from "../../assets/Logoretinklogo.svg";
import fb from "../../assets/facebook.svg";
import twitter from "../../assets/Twitter - Originalsocial-media.svg";
import insta from "../../assets/Group 20963Instagram.svg";
import YouTube from "../../assets/YouTube - Originalsocial-media.svg";
import pinterest from "../../assets/Pinterest - Originalsocial-media.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="top__wrapper container__vn">
                <div className="top flex justify-between mb-8">
                    <img style={{ width: "120px" }} src={logo} alt="logo" />
                    <div className="social">
                        <p>Connect with us</p>
                        <div className="flex ">
                            <img src={fb} alt="" />
                            <img src={twitter} alt="" />
                            <img src={insta} alt="" />
                            <img src={YouTube} alt="" />
                            <img src={pinterest} alt="" />
                        </div>
                    </div>
                </div>
                <div className="middle flex justify-between">
                    <div>
                        <p>Product by Retink Media UG</p>
                        <p>Bonn, Germany</p>
                    </div>
                    <div>
                        <p>Get Early Acess</p>
                        <p>Provide Feedback</p>
                    </div>
                </div>
            </div>
            <div className="bottom__wrapper p-8">
                <div className="bottom container__vn flex justify-around">
                    <a>Copyright © 2021 Retink</a>
                    <div>
                        <a className="mr-8">Privacy Policy</a>
                        <a>Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
