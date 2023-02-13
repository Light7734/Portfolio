import * as React from "react";
import Layout from "../components/layout";

import CodeFrame from "../components/codeFrame";
// import HorizontalSeparator from "../components/horizontalSeparator";

import * as style from "../styles/code.module.scss";
import * as cstyle from "../styles/common.module.scss";

import CodeProjectsJSON from "../codeProjects/code.json";

const Code: React.FC = () => {
    let codeFrames = CodeProjectsJSON.projects.map((data: any) => (
        <div className={style.container_codeframe}>
            <CodeFrame
                title={data.title}
                description={data.description}
                url={data.url}
                languages={data.languages}
                icon={data.icon}
            />
        </div>
    ));

    return (
        <Layout
            title="Code"
            navIndex={0}
            left={
                <div>
                    <h1> PROJECTS </h1>
                    <div className={cstyle.separator_horizontal} />
                    <div className={style.codeFrames}>{codeFrames}</div>
                </div>
            }
            right={
                <div>
                    <h1> ARTICLES </h1>
                    <div className={cstyle.separator_horizontal} />
                    <h3> Nothing yet... </h3>
                </div>
            }
        />
    );
};

export default Code;
