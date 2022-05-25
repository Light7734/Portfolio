import * as React from "react"

import { Link } from "gatsby"

import * as style from '../styles/navbar.module.scss'

const Navbar: React.FC = () => {

    return (
        <nav className={style.nav}>
            <ul className={style.navList}>

                <Link to="/" className={style.navItemBtn}>
                    <li >
                        H O M E
                    </li>
                </Link>
                <li className={style.navItemSeparator}>
                </li>

                <Link to="/code" className={style.navItemBtn}>
                    <li >
                        C O D E
                    </li>
                </Link>

                <Link to="/art" className={style.navItemBtn}>
                    <li >
                        A R T
                    </li>
                </Link>
                <Link to="/music" className={style.navItemBtn}>
                    <li>
                        M U S I C
                    </li>
                </Link>
                <li className={style.navItemSeparator}>
                </li>

                <Link to="/about" className={style.navItemBtn}>
                    <li >
                        A B O U T
                    </li>
                </Link>
            </ul>
        </nav>
    )

}

export default Navbar
