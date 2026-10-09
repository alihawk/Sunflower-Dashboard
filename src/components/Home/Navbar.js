import React from 'react';
import Link from 'next/link';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link href="/">
                    <div className="nav-logo">
                        App Name
                    </div>
                </Link>

                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link href="/home">
                            <div className="nav-links">
                                Home
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about">
                            <div className="nav-links">
                                About
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contact">
                            <div className="nav-links">
                                Contact
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
// markers = [
    //   {
    //     position: [32.341004538030566, 72.53857162640408],
    //     content: "Crop Type: Super Kernel - 15",
    //   },
    //   {
    //     position: [32.341013679610755, 72.5390241987202],
    //     content: "Crop Type: Super Kernel - 63",
    //   },
    // ];