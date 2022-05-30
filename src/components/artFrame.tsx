import * as React from "react"

import { GatsbyImage, GatsbyImageProps } from "gatsby-plugin-image"

import * as style from '../styles/artFrame.module.scss'

interface ArtFramepRops {

    image: GatsbyImageProps["image"];
    alt: string;
}

const ArtFrame: React.FC<ArtFramepRops> = (props) => {

    return (
        <div className={style.container}>
            <GatsbyImage className={style.image} image={props.image} alt={props.alt} />
        </div>
    )

}

export default ArtFrame;
