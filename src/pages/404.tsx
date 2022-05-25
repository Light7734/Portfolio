import * as React from "react"
import Layout from '../components/layout'

import * as style from '../styles/404.module.scss'

const NotFound: React.FC = () => {

    return (
        <Layout
            title="404 >_<"
            left={<h1> 404 </h1>}
            right={<h1> uwu </h1>}
        />
    )

}

export default NotFound;
