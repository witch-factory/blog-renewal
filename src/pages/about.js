import * as React from 'react'
import Layout from "../components/layout";
import Header from "../components/header"
import Container from "../components/container";
import {
  user,
  avatar,
  description,
  username,
  excerpt,
} from "./css-modules.module.css"


const User=(props)=>{
  return (
    <div className={user}>
      <img src={props.avatar} className={avatar} alt=""/>
      <div className={description}>
        <h2 className={username}>{props.username}</h2>
        <p className={excerpt}>{props.excerpt}</p>
      </div>
    </div>
  )
}

const AboutPage=()=>{
    return (
        <Container>
          <Header headerText="About Me"/>
          <p>such good.</p>
          <User
            username="Maria Randall"
            avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-daniel-xavier-1102341.jpg"
            excerpt="I'm Maria Randall. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
        </Container>
    )
}

export default AboutPage