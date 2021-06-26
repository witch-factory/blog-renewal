import * as React from 'react'
import Layout from "../components/layout"
import {StaticImage} from "gatsby-plugin-image"

const IndexPage=()=>{
    return(
        <Layout pageTitle="Home Page">
            <p>Making the gatsby tutorial</p>
            <StaticImage
                src="../images/dog.jpg"
                alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
            />
        </Layout>
    )
}

export default IndexPage