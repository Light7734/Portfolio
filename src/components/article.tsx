import * as React from "react";
import * as style from "../styles/article.module.scss";

interface ArticleProps {
    image: string;

    title: string;
    description: string;
    url: string;

    date: string;
}

// TODO: Articles
const Article: React.FC<ArticleProps> = (props) => {
    return <div className={style.container}></div>;
};

export default Article;
