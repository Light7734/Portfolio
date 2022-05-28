import * as React from "react"
import Layout from "../components/layout"

import CodeFrame from "../components/codeFrame"

import { graphql } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image"

import * as style from "../styles/code.module.scss"
import * as styleCommon from "../styles/common.module.scss"


const Code: React.FC = (query) => {

    const projects: any[] = query.data.projects.edges.sort((a, b) => { return b.node.frontmatter.priority - a.node.frontmatter.priority; });

    const test = projects.map((project: any, index: number) =>
        <CodeFrame
            thumb={project.node.frontmatter.thumb.childImageSharp.gatsbyImageData}
            title={project.node.frontmatter.title}
            description={project.node.frontmatter.description}
            url={project.node.frontmatter.url}
            languages={project.node.frontmatter.languages}
        />
    );

    return (
        <Layout
            title="Code >_<"
            left={
                <div>
                    <h1> PROJECTS </h1>
                    <div className={styleCommon.hseparator} />
                    {test}
                </div>
            }
            right={
                <div>
                    <h1> ARTICLES </h1>
                    <div className={styleCommon.hseparator} />
                    <h3> No articles yet... </h3>
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
          thumb {
            id
            childImageSharp {
                gatsbyImageData
            }
          }
        }
      }
    }
  }
}

`
