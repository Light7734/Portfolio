import * as React from "react";
import Layout from "../components/layout";

import CodeFrame from "../components/codeFrame";
import ArticleFrame from "../components/articleFrame";

// import HorizontalSeparator from "../components/horizontalSeparator";

import * as style from "../styles/code.module.scss";
import * as cstyle from "../styles/common.module.scss";

import CodeProjectsJSON from "../codeProjects/code.json";

import { graphql, PageProps } from "gatsby";
import { IGatsbyImageData, GatsbyImage, getImage } from "gatsby-plugin-image";

type Article = {
    thumb: IGatsbyImageData;
    title: string;
    description: string;
    date: string;
    slug: string;
};

function article_query_to_article_frame(
    query: any
): React.ReactElement<any, any> {
    const frontmatter = query.node.frontmatter;

    return (
        <ArticleFrame
            thumb={getImage(frontmatter.thumb as IGatsbyImageData)!}
            title={frontmatter.title}
            description={frontmatter.description}
            date={frontmatter.date}
            slug={frontmatter.slug}
        />
    );
}

function code_data_to_code_frame(json: any): React.ReactElement<any, any> {
    return (
        <div className={style.container_codeframe}>
            <CodeFrame
                title={json.title}
                description={json.description}
                url={json.url}
                languages={json.languages}
                icon={json.icon}
            />
        </div>
    );
}

const Code = (query: PageProps<Queries.ArticlesQuery>) => {
    const code_frames = CodeProjectsJSON.projects.map((data: any) => {
        return code_data_to_code_frame(data);
    });
    const article_frames = query.data.allMdx.edges.map(
        article_query_to_article_frame
    );

    return (
        <Layout
            title="Code"
            navIndex={0}
            left={
                <div>
                    <h1> PROJECTS </h1>
                    <div className={cstyle.separator_horizontal} />
                    <div className={style.code_frame_list}>{code_frames}</div>
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
    }
`;

export default Code;
