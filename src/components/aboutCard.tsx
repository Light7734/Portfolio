import * as React from "react";

import * as style from "../styles/aboutCard.module.scss";

interface AboutCardProps {
    link: string;
    title: string;
    description: string;
    icon: string;
}

const AboutCard: React.FC<AboutCardProps> = (props) => {
    return (
        <a className={style.container} href={props.link}>
            <img className={style.lhs} src={props.icon} />
            <div className={style.rhs}>
                <h2> {props.title} </h2>
                <h3> {props.description}</h3>
            </div>
        </a>
    );
};

export default AboutCard;
