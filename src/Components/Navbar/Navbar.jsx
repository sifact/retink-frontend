import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Logoretinklogo.svg";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../Contexts/AuthProvider";

const Navbar = () => {
    const { user, logOut, updateInfo } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        logOut()
            .then(() => {})
            .catch((e) => console.log(e));
    };

    return (
        <nav className="my-8 container__vn flex justify-between">
            <div className="logo__wrapper">
                <Link to="/">
                    <img className="logo" src={logo} alt="" />
                </Link>
            </div>

            <div
                // className="h-6 w-6 md:hidden"
                style={{ width: "30px", height: "30px" }}
                onClick={() => setOpen(!open)}
                className="icon"
            >
                {open ? <XMarkIcon /> : <Bars3Icon />}
            </div>
            <div
                className={
                    open
                        ? "d__block nav__items transition"
                        : "d__none nav__items transition"
                }
            >
                <Link to="/">Home</Link>
                {user?.email ? (
                    <Link onClick={handleClick} className="btn-secondary-sm">
                        Log out
                    </Link>
                ) : (
                    <>
                        <Link className="btn-secondary-sm" to="/login">
                            Login
                        </Link>
                        <Link className="btn-primary-sm" to="/register">
                            Register
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
