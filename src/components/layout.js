import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="global-wrapper">
      <header className="global-header">
        <h1 className="header-link-home">
          <Link to="/">{pageTitle}</Link>
        </h1>
      </header>

      <main>{children}</main>
    </div>
  )


  /*const data = useStaticQuery(graphql`
      query {
          site {
              siteMetadata {
                  title
                  description
              }
          }
      }
  `)

  return (
    <main className={container}>
      <title>{data.site.siteMetadata.title}</title>
      <p className={siteTitle}>{data.site.siteMetadata.title}</p>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
  )*/
}

export default Layout