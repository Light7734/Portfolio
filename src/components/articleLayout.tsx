import * as React from "react";

import Navbar from "./navbar";
import Footer from "./footer";

import { PropsWithLocation, WithLocation } from "../utils/withLocation";

import "../styles/global.scss";
import * as style from "../styles/layout.module.scss";

interface LayoutProps extends PropsWithLocation {
    title: string;
    content: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
    const url = props.location.href;

    return (
        <div>
            <title>{props.title}</title>

            <Navbar index={69} url={url} />

            <main className={style.content}>
                <div className={style.lhs}>{props.content}</div>
            </main>
        </div>
    );
};

export default WithLocation(Layout);
