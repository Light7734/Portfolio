import * as React from "react"

import { Link } from "gatsby"

import * as style from '../styles/navbar.module.scss'

interface NavbarProps {
    url: string;
}

const Navbar: React.FC<NavbarProps> = (props) => {

    const index = props.url.includes("/art") ? 1 :
        props.url.includes("/music") ? 2 :
            props.url.includes("/about") ? 3 : 0

    console.log("INDEX --> ", index);

    return (
        <nav className={style.nav}>
            <ul className={style.navList}>
                <Link to="/" className={index === 0 ? style.navItemBtnActive : style.navItemBtn}> <li > C O D E </li> </Link>
                <Link to="/art" className={index === 1 ? style.navItemBtnActive : style.navItemBtn}> <li > A R T </li> </Link>
                <Link to="/music" className={index === 2 ? style.navItemBtnActive : style.navItemBtn}> <li> M U S I C </li> </Link>
                <Link to="/about" className={index === 3 ? style.navItemBtnActive : style.navItemBtn}> <li > A B O U T </li> </Link>
            </ul>
        </nav>
    )

}

export default Navbar
