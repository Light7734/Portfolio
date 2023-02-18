import * as React from "react";
import * as style from "../styles/repoInfo.module.scss";

interface RepoInfoProps {
    name?: string;
    value?: number;
    img?: string;
    // dateCreated: string[];
    // contributions: number;
}

const RepoInfo: React.FC<RepoInfoProps> = (props) => {
    return (
        <div className={style.info} >
            <div className={style.info_img_and_value}>
                <img className={style.info_img} src={props.img} />

                <div className={style.info_value}>
                    {props.value}
                </div>
            </div>

            <p className={style.info_name}> {props.name} </p>
        </div>

    );
}

export default RepoInfo;
