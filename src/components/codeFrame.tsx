import * as React from "react";
import * as style from "../styles/codeFrame.module.scss";

interface CodeFrameProps {
    title: string;
    description: string;
    url: string;

    languages: string[];
    icon: string;
}

const CodeFrame: React.FC<CodeFrameProps> = (props) => {
    const languages = props.languages.map((content: string) => (
        <img src={content} />
    ));

    return (
        <a href={props.url}>
            <div className={style.container}>
                <img className={style.lhs} src={props.icon} />

                <div className={style.rhs}>
                    <div className={style.rhsTop}>
                        <h2>{props.title}</h2>
                        <div className={style.languages}>{languages}</div>
                    </div>

                    <div className={style.description}>{props.description}</div>
                </div>
            </div>
        </a>
    );
};

export default CodeFrame;
