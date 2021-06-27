import React from "react"
import {Link} from "gatsby"
import Header from "../components/header"

const ContactPage=()=>{
  return (
    <div>
      <Link to="/">Home</Link>
      <Header headerText="Contact"/>
      <p>Send me a message.</p>
    </div>
  )
}

export default ContactPage