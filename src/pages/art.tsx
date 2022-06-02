import * as React from "react"
import Layout from '../components/layout'

import { graphql } from "gatsby"

import ArtFrame from "../components/artFrame"

import * as style from '../styles/art.module.scss'
import * as styleCommon from "../styles/common.module.scss"

const Art: React.FC = (query) => {

    const pixelArts: any[] = query.data.pixelArts.edges;
    const blenderArts: any[] = query.data.blenderArts.edges;

    const pixelArtFrames = pixelArts.map((art: any, index: number) =>
        <ArtFrame
            image={art.node.childImageSharp.gatsbyImageData}
            alt="Test"
        />
    );

    const blenderArtFrames = blenderArts.map((art: any, index: number) =>
        <ArtFrame
            image={art.node.childImageSharp.gatsbyImageData}
            alt="Test"
        />
    );

    return (
        <Layout
            title="Art >_<"

            left={
                <div>
                    <h1> Projects</h1>
                    <div className={styleCommon.hseparator} />

                    <h2>PixelArts</h2>
                    <div className={styleCommon.hseparator} />
                    {pixelArtFrames}
                    {pixelArtFrames}
                    {pixelArtFrames}
                    {pixelArtFrames}

                    <h1> 3DArt</h1>
                    <div className={styleCommon.hseparator} />

                    <h1> VectorArt </h1>
                    <div className={styleCommon.hseparator} />
                </div>
            }

            right={
                <div>
                    <h1> ARTICLES </h1>
                    <div className={styleCommon.hseparator} />
                    <h3> No articles yet... </h3>
                </div>
            }

        />
    )

}

export default Art;

export const query = graphql`
query ArtQuery {
  pixelArts: allFile(
    filter: {relativeDirectory: {in: "pixel"}, sourceInstanceName: {eq: "arts"}}
  ) {
    edges {
      node {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
  blenderArts: allFile(
    filter: {relativeDirectory: {in: "3d"}, sourceInstanceName: {eq: "arts"}}
  ) {
    edges {
      node {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}
`
