import * as React from "react"

import { Link } from "gatsby"

import * as style from '../styles/navbar.module.scss'

interface NavbarProps {
    url: string;
    index: number;
}

const Navbar: React.FC<NavbarProps> = (props) => {

    console.log("HEY!!!!");
    console.log(props.index);
    console.log("HEY!!!!");

    return (
        <nav className={style.nav}>
            <ul className={style.navList}>
                <Link to="/" className={props.index === 0 ? style.navItemBtnActive : style.navItemBtn}>
                    <li >
                        <p> C O D E </p>
                        <img src="/icons/git.svg" />
                    </li>
                </Link>
                <Link to="/art" className={props.index === 1 ? style.navItemBtnActive : style.navItemBtn}>
                    <li >
                        <p> A R T </p>
                        <img src="/icons/paint-brush.svg" />
                    </li>
                </Link>
                <Link to="/music" className={props.index === 2 ? style.navItemBtnActive : style.navItemBtn}>
                    <li >
                        <p> M U S I C </p>
                        <img src="/icons/music.svg" />
                    </li>
                </Link>
                <Link to="/about" className={props.index === 3 ? style.navItemBtnActive : style.navItemBtn}>
                    <li >
                        <p> A B O U T </p>
                        <img src="/icons/user.svg" />
                    </li>
                </Link>

            </ul>
        </nav>
    )

}

export default Navbar
