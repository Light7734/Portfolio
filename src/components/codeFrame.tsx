import * as React from "react";
import * as style from "../styles/codeFrame.module.scss";

import RepoInfo from "../components/repoInfo"

export interface Repository {
    star_count?: number;
    fork_count?: number;
    watch_count?: number;
    issue_count?: number;
    // dateCreated: string[];
    // contributions: number;
}

interface CodeFrameProps {
    title: string;
    description: string;
    url: string;

    languages: string[];
    icon: string;

    repository: Repository;
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

                    <div className={style.description}>
                        {props.description}
                    </div>

                    <div className={style.info_strip}>
                        <RepoInfo
                            name="Contributors"
                            value={1}
                            img={"icons/contributors.svg"}
                        />

                        <RepoInfo
                            name="Stars"
                            value={props.repository.star_count}
                            img={"icons/star.svg"}
                        />

                        <RepoInfo
                            name="Forks"
                            value={props.repository.fork_count}
                            img={"icons/fork.svg"}
                        />

                        <RepoInfo
                            name="Issues"
                            value={props.repository.issue_count}
                            img={"icons/issue.svg"}
                        />

                    </div>
                </div>
            </div>
        </a >
    );
};

export default CodeFrame;
