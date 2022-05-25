import * as React from "react"
import Layout from '../components/layout'

import * as style from '../styles/music.module.scss'

const Music: React.FC = () => {

    return (
        <Layout title="Music >_<"
            left={
                <div>
                    <h1>
                        PROJECTS
                    </h1>
                    <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1263030598&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div className={style.soundCloud}></div>
                </div>
            }
            right={
                <div>
                    <h1> ARTICLES </h1>
                    <h4> No articles yet... ^^ </h4>
                </div>
            }
        />
    )

}

export default Music;
