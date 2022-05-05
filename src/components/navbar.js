import React from "react"
import { Link } from "gatsby"
import { nav, navList, navItemBtn, navItemSeparator } from '../styles/navbar.module.css'

const Navbar = () => {
    return (
        <nav className={nav}>
            <ul className={navList}>

                <Link to="/" className={navItemBtn}>
                    <li >
                        H O M E
                    </li>
                </Link>
                <li className={navItemSeparator}>
                </li>

                <Link to="/" className={navItemBtn}>
                    <li >
                        C O D E
                    </li>
                </Link>

                <Link to="/" className={navItemBtn}>
                    <li >
                        A R T
                    </li>
                </Link>
                <Link to="/" className={navItemBtn}>
                    <li className>
                        M U S I C
                    </li>
                </Link>
                <li className={navItemSeparator}>
                </li>

                <Link to="/" className={navItemBtn}>
                    <li >
                        A B O U T
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar
