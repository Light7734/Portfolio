import * as React from "react"
import Layout from '../components/layout'
import * as style from '../styles/music.module.scss'

export default function Music() {

    return (
        <Layout title="Music >_<"
            left={
                <h1> PROJECTS </h1>
            }
            right={
                <h1> ARTICLES </h1>
            }
        >
        </Layout >
    )

}
