import * as React from "react"
import Layout from '../components/layout'

// import { graphql } from "gatsby"

// import ArtFrame from "../components/artFrame"

import * as style from '../styles/art.module.scss'
import * as cstyle from "../styles/common.module.scss"

const Art: React.FC = () => {

    return (
        <Layout
            title="Art"
            navIndex={1}

            left={
                <div className={style.lhs}>
                    <h1> PROJECTS </h1>
                    <div className={cstyle.separator_horizontal} />
                    <h3> Nothing yet... </h3>
                </div>
            }

            right={
                <div className={style.rhs}>
                    <h1> ARTICLES </h1>
                    <div className={cstyle.separator_horizontal} />
                    <h3> Nothing yet... </h3>
                </div>
            }
        />
    )

}

export default Art;

// export const query = graphql`
// query ArtQuery {
//   pixelArts: allFile(
//     filter: {relativeDirectory: {in: "pixel"}, sourceInstanceName: {eq: "arts"}}
//   ) {
//     edges {
//       node {
//         childImageSharp {
//           gatsbyImageData
//         }
//       }
//     }
//   }
//   blenderArts: allFile(
//     filter: {relativeDirectory: {in: "3d"}, sourceInstanceName: {eq: "arts"}}
//   ) {
//     edges {
//       node {
//         childImageSharp {
//           gatsbyImageData
//         }
//       }
//     }
//   }
// }
// `
