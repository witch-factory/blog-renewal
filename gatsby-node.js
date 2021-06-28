const path=require(`path`)
const {createFilePath}=require(`gatsby-source-filesystem`)

exports.createPages=async({graphql, actions, reporter})=>{
  const {createPages}=actions

  const blogPost=path.resolve(`./src/templates`)
}