import React from "react";
import "./Notify.css";

const Notify = () => {
    return (
        <section className="notify my-24">
            <h1>Sign Up For The BETA to see more</h1>
            <div className="text-center my-8">
                <input type="text" placeholder="Business Name" />{" "}
                <input type="email" placeholder="Email" />
            </div>
            <div className="text-center">
                <button className="btn-primary mb-8">Notify me</button> <br />
                <button className="btn-secondary">
                    Sign up as a freelance partner
                </button>
            </div>
        </section>
    );
};

export default Notify;
