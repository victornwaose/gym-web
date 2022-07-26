import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/download.jpg";

const NavBar = () => {
    return (
        <div className="w-[90%] ml-auto mr-auto mt-3 mb-3">
            <div className="flex justify-between">
                <Link to="/">
                    <img src={Logo} className="w-[48px]  h-12" />
                </Link>
                <div className="flex justify-between">
                    <div className="ml-6">
                        <Link
                            to="/"
                            style={{
                                textDecoration: "none",
                                color: "#3a1212",
                                borderBottom: "3px solid #FF2625",
                            }}
                        >
                            Home
                        </Link>
                    </div>
                    <div className="ml-6">
                        <Link
                            to="/"
                            style={{
                                textDecoration: "none",
                                color: "#3a1212",
                                borderBottom: "3px solid #FF2625",
                            }}
                        >
                            Exercise
                        </Link>
                    </div>{" "}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
