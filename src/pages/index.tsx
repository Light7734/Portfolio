import * as React from "react"
import Layout from "../components/layout"

import CodeFrame from "../components/codeFrame"

import * as style from "../styles/code.module.scss"
import * as styleCommon from "../styles/common.module.scss"

import CodeProjectsJSON from "../codeProjects/code.json"

const Code: React.FC = () => {

    let codeFrames = CodeProjectsJSON.projects.map((data: any) =>
        <CodeFrame
            title={data.title}
            description={data.description}
            url={data.url}
            languages={data.languages}
        />
    );

    return (
        <Layout
            title="Code"
            navIndex={0}
            left={
                < div className={style.lhs} >
                    <h1> PROJECTS </h1>
                    <div className={styleCommon.hseparator} />
                    <h3> Note: these projects aren't even halfway finished </h3>
                    {codeFrames}
                </div >
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
