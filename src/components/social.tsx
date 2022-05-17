import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import * as style from "../styles/social.module.scss"

export default function Social({ icon, caption, link, description }) {

    return (
        <div className={style.compContainer}>
            <a href={link} className={style.link}>
                <div>
                    <img src={icon} />
                </div>
                <div>
                    <h2 className={style.caption}> {caption} </h2>
                    <h3 className={style.description}> {description}</h3>
                </div>
            </a>
        </div >
    )

}
