import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import * as style from "../styles/social.module.scss"

interface SocialProps {
    link: string;
    caption: string
    description: string;
    icon: string;

}

const Social: React.FC<SocialProps> = (props) => {

    return (
        <a href={props.link} className={style.link}>
            <div className={style.container}>
                <div className={style.iconContainer}>
                    <img src={props.icon} className={style.icon} />
                </div>
                <div>
                    <h2 className={style.caption}> {props.caption} </h2>
                    <h3 className={style.description}> {props.description}</h3>
                </div>
            </div >
        </a>
    )

}

export default Social;
