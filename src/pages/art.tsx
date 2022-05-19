import * as React from "react"
import Layout from '../components/layout'
import * as style from '../styles/art.module.scss'

export default function Art() {

    return (
        <Layout title="Art >_<"
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