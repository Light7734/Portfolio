import * as React from "react"
import Layout from "../components/layout"

import CodeFrame from "../components/codeFrame"

import * as style from "../styles/code.module.scss"
import * as styleCommon from "../styles/common.module.scss"

import CodeProjectsJSON from "../codeProjects/code.json"

const Code: React.FC = () => {

    let codeFrames = CodeProjectsJSON.projects.map((data: any) =>
        <div className={style.codeFrameContainer}>
            <CodeFrame
                title={data.title}
                description={data.description}
                url={data.url}
                languages={data.languages}
                icon={data.icon}
            />
        </div>
    );

    return (
        <Layout
            title="Code"
            navIndex={0}
            left={
                <div>
                    <h1> PROJECTS </h1>
                    <div className={styleCommon.hseparator} />
                    <h3> Note: these projects aren't even halfway finished (don't take what's written as implemented) </h3>
                    <div className={style.codeFrames}>
                        {codeFrames}
                    </div>
                </div>
            }
            right={
                < div >
                    <h1> ARTICLES </h1>
                    <div className={styleCommon.hseparator} />
                    <h3> Nothing yet... </h3>
                </div >
            }
        />
    )

}

export default Code;
