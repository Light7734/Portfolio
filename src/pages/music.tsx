import * as React from "react"
import Layout from '../components/layout'

import * as style from '../styles/music.module.scss'
import * as cstyle from "../styles/common.module.scss"

const Music: React.FC = () => {

    return (
        <Layout title="Music"
            navIndex={2}

            left={
                <div className={style.lhs}>
                    <h1> PROJECTS </h1>
                    <div className={cstyle.separator_horizontal} />
                    <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1263030598&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
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

export default Music;
