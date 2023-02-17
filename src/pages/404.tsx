import * as React from "react";
import Layout from "../components/layout";

import * as style from "../styles/404.module.scss";

const NotFound: React.FC = () => {
    return (
        <Layout
            title="404"
            navIndex={-1}
            left={
                <div>
                    <h1> 404 </h1>
                    <h2> Requested page not found! </h2>
                </div>
            }
            right={
                <div>
                    <h2> We are no strangers to love </h2>
                    <h2> You know the rules and so do I ... </h2>
                </div>
            }
        />
    );
};

export default NotFound;
