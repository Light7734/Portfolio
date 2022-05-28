import * as React from "react"
import Layout from '../components/layout'

import * as style from '../styles/art.module.scss'
import * as styleCommon from "../styles/common.module.scss"

const Art: React.FC = () => {

    return (
        <Layout
            title="Art >_<"
            left={
                <div>
                    <h1> PROJECTS </h1>
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
