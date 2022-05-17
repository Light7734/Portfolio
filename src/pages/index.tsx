import * as React from "react"
import Layout from '../components/layout'
import * as style from '../styles/home.module.scss'

export default function Home() {

    return (
        <Layout title="Home sweet home >_<"
            left={
                <h1> Figure out what to do in home ^^</h1>
            }
            right={
                <h3> Nya </h3>
            }
        >
        </Layout >
    )

}
