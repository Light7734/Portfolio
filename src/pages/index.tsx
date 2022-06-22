import * as React from "react"
import Layout from "../components/layout"

import CodeFrame from "../components/codeFrame"

import { graphql } from "gatsby"

import * as style from "../styles/code.module.scss"
import * as styleCommon from "../styles/common.module.scss"


const Code: React.FC = (query) => {

    const projects: any[] = query.data.projects.edges.sort((a, b) => { return b.node.frontmatter.priority - a.node.frontmatter.priority; });

    const codeFrames = projects.map((project: any, index: number) =>
        <div className={style.codeFrameContainer}>
            <CodeFrame
                title={project.node.frontmatter.title}
                description={project.node.frontmatter.description}
                url={project.node.frontmatter.url}
                languages={project.node.frontmatter.languages}
            />
        </div>
    );

    return (
        <Layout
            title="Code >_<"
            left={
                <div className={style.lhs}>
                    <h1> PROJECTS </h1>
                    <div className={styleCommon.hseparator} />
                    <h3> Note: these projects aren't even halfway finished </h3>
                    {codeFrames}
                </div>
            }
            right={
                <div>
                    <h1> ARTICLES </h1>
                    <div className={styleCommon.hseparator} />
                    <h3> Nothing yet... </h3>
                </div>
            }
        />
    )

}

export default Code;

export const query = graphql`
query MyQuery {
  projects: allMarkdownRemark(filter: {fileAbsolutePath: {}}) {
    edges {
      node {
        html
        frontmatter {
            title
            description
            url
            priority
            languages
      }
    }
  }
}
}

`
