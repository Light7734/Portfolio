import * as React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import '../styles/global.css'

const Layout = ({ pageTitle, children }) => {
    return (
        <div className="layout">
            <title>{pageTitle}</title>
            <Navbar />
            <main className="content">
                {children}
            </main>
            <Footer />
        </div>
    )
}
export default Layout
