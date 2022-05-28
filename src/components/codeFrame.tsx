import * as React from "react"
import * as style from '../styles/codeFrame.module.scss'

import { GatsbyImage, GatsbyImageProps } from "gatsby-plugin-image"

interface CodeFrameProps {
    thumb: GatsbyImageProps["image"];

    title: string;
    description: string;
    url: string;

    languages: string[];
    //     dateCreated: string[];
    //     stars: number;
    //     contributions: number;
}

const CodeFrame: React.FC<CodeFrameProps> = (props) => {

    console.log(props.languages);

    const languages = props.languages.map((content: string) =>
        <img src={content} />
    );

    return (
        <a href={props.url}>
            <div className={style.container}>
                <div className={style.lhs}>
                    <a href={props.url}><GatsbyImage className={style.image} image={props.thumb} alt="img" /></a>
                </div>
                <div className={style.rhs}>
                    <div className={style.rhsTop}>
                        <div className={style.title}>
                            <a href={props.url}>
                                <h1>
                                    {props.title}
                                </h1>
                            </a>
                        </div >

                        <div className={style.languages}>
                            {languages}
                        </div>
                    </div>

                    <p className={style.description}>
                        {props.description}
                    </p>

                </div>
            </div >
        </a>
    );
}


export default CodeFrame;

