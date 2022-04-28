import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
    return (
        <nav>
            <h1> Light </h1>
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/about"> About </Link>
            </div>
        </nav>
    )
}

export default Navbar
