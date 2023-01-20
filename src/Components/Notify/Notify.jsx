import React from "react";
import { Link } from "react-router-dom";
import "./Notify.css";

const Notify = () => {
    return (
        <section className="notify my-24">
            <h1>Sign Up For The BETA to see more</h1>
            <div className="text-center my-8">
                <input
                    className="padding"
                    type="text "
                    placeholder="Business Name"
                />{" "}
                <input type="email" placeholder="Email" />
            </div>
            <div className="text-center">
                <button className="btn-primary mb-8">Notify me</button> <br />
                <Link to="/register">
                    <button className="btn-secondary smooth">
                        Sign up as a freelance partner
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Notify;
