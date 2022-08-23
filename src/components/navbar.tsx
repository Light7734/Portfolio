import * as React from "react"

import { Link } from "gatsby"

import * as style from '../styles/navbar.module.scss'

interface NavbarProps {
    url: string;
    index: number;
}

const Navbar: React.FC<NavbarProps> = (props) => {

    return (
        <nav className={style.container}>
            <Link to="/" className={[style.button, props.index === 0 ? style.button_active : null].join(" ")}>
                <h1> C O D E </h1>
                <img src="/icons/git.svg" />
            </Link>
            <Link to="/art" className={[style.button, props.index === 1 ? style.button_active : null].join(" ")}>
                <h1> A R T </h1>
                <img src="/icons/paint-brush.svg" />
            </Link>
            <Link to="/music" className={[style.button, props.index === 2 ? style.button_active : null].join(" ")}>
                <h1> M U S I C </h1>
                <img src="/icons/music.svg" />
            </Link>
            <Link to="/about" className={[style.button, props.index === 3 ? style.button_active : null].join(" ")}>
                <h1> A B O U T </h1>
                <img src="/icons/user.svg" />
            </Link>
        </nav >
    )

}

export default Navbar
