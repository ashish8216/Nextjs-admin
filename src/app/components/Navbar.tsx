"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();
    const [user, setUser] = useState({
        name: "Ashish",
    });

    const logout = async () => {
        // Call Laravel API / Next Auth logout here
        console.log("Logout");

        router.push("/login");
    };

    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <button
                        className="nav-link btn btn-link"
                        onClick={() =>
                            document.body.classList.toggle("sidebar-collapse")
                        }
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                </li>
            </ul>

            {/* Right navbar links */}
            <ul className="navbar-nav ms-auto">

                {/* User Dropdown */}
                <li className="nav-item dropdown">
                    <button
                        className="nav-link btn btn-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                    >
                        <i className="far fa-user"></i>

                        {user ? user.name : "Login"}

                        <i className="fas fa-angle-down ms-2"></i>
                    </button>


                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">

                        <div className="dropdown-divider"></div>


                        {user && (
                            <>
                                <Link
                                    href={`/profiles/edit`}
                                    className="dropdown-item"
                                >
                                    <i className="fa fa-user me-2"></i>
                                    Profile
                                </Link>


                                <button
                                    onClick={logout}
                                    className="dropdown-item"
                                >
                                    <i className="fa fa-power-off me-2"></i>
                                    Logout
                                </button>
                            </>
                        )}

                    </div>

                </li>


                {/* Fullscreen */}
                <li className="nav-item">
                    <button
                        className="nav-link btn btn-link"
                        onClick={() =>
                            document.documentElement.requestFullscreen()
                        }
                    >
                        <i className="fas fa-expand-arrows-alt"></i>
                    </button>
                </li>


                {/* Control Sidebar */}
                <li className="nav-item">
                    <button
                        className="nav-link btn btn-link"
                    >
                        <i className="fas fa-th-large"></i>
                    </button>
                </li>


            </ul>
        </nav>
    );
}