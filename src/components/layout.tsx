import * as React from "react"

import Navbar from "./navbar"
import Footer from "./footer"

import { PropsWithLocation, WithLocation } from "../utils/withLocation"

import "../styles/global.scss"
import * as style from "../styles/layout.module.scss"

interface LayoutProps extends PropsWithLocation {
    title: string;
    left: React.ReactNode;
    right: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {

    const url = props.location.href;

    return (
        <div>
            <title>{props.title}</title>

            <Navbar
                url={url}

            />

            <main className={style.content}>

                <div className={style.left}>
                    {props.left}
                </div>

                <div className={style.vseparator}>
                    <div className={style.vseparator_line}>
                    </div>
                </div>

                <div className={style.right}>
                    {props.right}
                </div>

            </main >

            <Footer />

        </div >
    )

}

export default WithLocation(Layout);
