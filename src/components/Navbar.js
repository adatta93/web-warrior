import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import { useState } from "react"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav>
      <h1>{title}</h1>
      <div className={`links ${toggleMenu ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
      <div
        className="hamburger"
        role="button"
        tabIndex={0}
        onClick={() => setToggleMenu(prev => !prev)}
        onKeyDown={() => setToggleMenu(prev => !prev)}
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </nav>
  )
}
