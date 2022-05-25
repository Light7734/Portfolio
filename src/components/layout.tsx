import * as React from "react"

import Navbar from "./navbar"
import Footer from "./footer"

import "../styles/global.scss"
import * as style from "../styles/layout.module.scss"

interface LayoutProps {
    title: string;
    left: React.ReactNode;
    right: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {

    return (
        <div>
            <title>{props.title}</title>

            <Navbar />

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

export default Layout;
