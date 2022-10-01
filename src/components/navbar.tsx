import * as React from "react";

import { Link } from "gatsby";

import * as style from "../styles/navbar.module.scss";

interface NavbarProps {
    url: string;
    index: number;
}

const Navbar: React.FC<NavbarProps> = (props) => {
    return (
        <nav className={style.container}>
            <div className={style.navSeparator}></div>

            <Link
                to="/"
                className={[
                    style.button,
                    props.index === 0 ? style.button_active : null,
                ].join(" ")}
            >
                <img src="/icons/git.svg" />
            </Link>

            <Link
                to="/art"
                className={[
                    style.button,
                    props.index === 1 ? style.button_active : null,
                ].join(" ")}
            >
                <img src="/icons/paint-brush.svg" />
            </Link>

            <Link
                to="/music"
                className={[
                    style.button,
                    props.index === 2 ? style.button_active : null,
                ].join(" ")}
            >
                <img src="/icons/music.svg" />
            </Link>

            <Link
                to="/about"
                className={[
                    style.button,
                    props.index === 3 ? style.button_active : null,
                ].join(" ")}
            >
                <img src="/icons/user.svg" />
            </Link>

            <div className={style.navSeparator}></div>
        </nav>
    );
};

export default Navbar;
