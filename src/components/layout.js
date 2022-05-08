import * as React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import '../styles/global.scss'
import * as style from '../styles/layout.module.scss'

const Layout = ({ title, left, right }) => {
    return (
        <div>
            <title>{title} HOMEPAGE__</title>

            <Navbar />

            <main className={style.content}>

                <div className={style.left}>
                    {left}
                </div>

                <div className={style.vseparator}>
                    <div className={style.vseparator_line}>
                    </div>
                </div>

                <div className={style.right}>
                    {right}
                </div>

            </main >

            <Footer />

        </div >
    )
}

export default Layout
