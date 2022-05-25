import * as React from "react"
import Layout from '../components/layout'

import * as style from '../styles/code.module.scss'

const Code: React.FC = () => {

    return (
        <Layout
            title="Code >_<"
            left={
                <div>
                    <h1> PROJECTS </h1>
                    <h3> LightEngine </h3>
                    <h3> VulkanRenderer </h3>
                    <h3> Raytracer </h3>
                    <h3> CSES</h3>
                    <h3> Homepage </h3>
                    <h3> TF </h3>

                </div>
            }
            right={
                <div>
                    <h1> ARTICLES </h1>
                    <h3> The graphics pipeline </h3>
                </div>
            }
        />
    )

}

export default Code;
