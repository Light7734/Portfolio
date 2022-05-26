import * as React from "react"
import * as style from '../styles/codeFrame.module.scss'

interface codeFrameProps {
    imageDir: string;

    title: string;
    description: string;
    url: string;

    languages: string[];
    //     dateCreated: string[];
    //     stars: number;
    //     contributions: number;
}

const CodeFrame: React.FC<codeFrameProps> = (props) => {

    const languages = props.languages.map((content: string) =>
        <img src={content} />
    );

    return (
        <div className={style.container}>
            <div className={style.lhs}>
                <a href={props.url}><img className={style.image} src={props.imageDir} /></a>
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
    );

}


export default CodeFrame;
