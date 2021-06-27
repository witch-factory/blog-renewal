import * as React from 'react'
import Layout from "../components/layout"
import {Link} from "gatsby"
import Header from "../components/header"
import {StaticImage} from "gatsby-plugin-image"

const IndexPage=()=>{
    return(
      <div style={{color:`purple`}}>
        <Link to="/contact/">Contact</Link>
        <Header headerText="Hello Gatsby!"/>
      </div>
    )
}

export default IndexPage