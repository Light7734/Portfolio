import * as React from "react";
import Layout from "../components/layout";

import CodeFrame from "../components/codeFrame";
import ArticleFrame from "../components/articleFrame";
// import HorizontalSeparator from "../components/horizontalSeparator";

import * as style from "../styles/code.module.scss";
import * as cstyle from "../styles/common.module.scss";

import CodeProjectsJSON from "../codeProjects/code.json";

import { graphql, PageProps } from "gatsby"
import { IGatsbyImageData, GatsbyImage, getImage } from "gatsby-plugin-image"

type Article = {
    thumb: IGatsbyImageData;
    title: string;
    description: string;
    date: string;
    slug: string;
}

function gql_to_article(article: any): Article {
    return {
        thumb: getImage(article.node.frontmatter?.thumb as IGatsbyImageData)!,
        title: article.node.frontmatter?.title,
        description: article.node.frontmatter?.description,
        date: article.node.frontmatter?.date,
        slug: article.node.frontmatter?.slug,
    }
}

const Code = ({ data }: PageProps<Queries.ArticlesQuery>) => {


    let codeFrames = CodeProjectsJSON.projects.map((data: any) => (
        <div className={style.container_codeframe}>
            <CodeFrame
                title={data.title}
                description={data.description}
                slug={data.slug}
                languages={data.languages}
                icon={data.icon}
            />
        </div>
    ));

    const articleData = data.allMdx.edges.map(gql_to_article);
    const article_frames = articleData.map((data: Article) => (
        <div>
            <ArticleFrame
                thumb={data.thumb}
                title={data.title}
                description={data.description}
                date={data.date}
                slug={data.slug}
            />
        </div >
    ));

    return (
        <Layout
            title="Code"
            navIndex={0}
            left={
                <div>
                    <h1> PROJECTS </h1>
                    <div className={cstyle.separator_horizontal} />
                    {codeFrames}

                </div>
            }
            right={
                <div>
                    <h1> ARTICLES </h1>
                    <div className={cstyle.separator_horizontal} />
                    {article_frames}
                </div>
            }
        />
    );
};


export const query = graphql`
query Articles {
    allMdx {
        edges {
            node {
                id
                frontmatter {
                    type
                    thumb {
                    childImageSharp {
                        gatsbyImageData
                        }
                    }
                    title
                    description
                    slug
                    date
                }
            }
        }
    }
}`

export default Code;
