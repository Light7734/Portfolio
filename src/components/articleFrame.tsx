import * as React from "react";
import * as style from "../styles/articleFrame.module.scss";

import { graphql } from "gatsby"
import { IGatsbyImageData, GatsbyImage, getImage } from "gatsby-plugin-image"

export interface ArticleProps {
    thumb: IGatsbyImageData;

    title: string;
    description: string;
    slug: string;

    date: string;
}

// TODO: Articles
const ArticleFrame: React.FC<ArticleProps> = (props) => {
    return (
        <a href={`articles/${props.slug}`}>
            <div className={style.container}>
                <GatsbyImage image={props.thumb} alt={props.title} />
                <h2>{props.title}</h2>
                <p >{props.description}</p>
            </div>
        </a>
    );
};

export default ArticleFrame;
