const path=require(`path`)
const {createFilePath}=require(`gatsby-source-filesystem`)

exports.createPages=async({graphql, actions, reporter})=>{
  const {createPage}=actions

  const blogPost=path.resolve(`./src/templates/blog-post.js`)

  const result=await graphql(
  `
    {
      allMdx(sort: {fields: frontmatter___date, order: ASC}, limit: 1000) {
        nodes {
          id
          slug
        }
      }
    }
  `
  )

  if(result.errors){
    reporter.panicOnBuild(
      `Error occured when loading your blog posts`,
      result.errors
    )
    return
  }

  const posts=result.data.allMdx.nodes

  if(posts.length>0){
    posts.forEach((post,index)=>{
      const prevPostId=index===0?null:posts[index-1].id
      const nextPostId=index===posts.length-1?null:posts[index+1].id

      createPage({
        path:`blog/${post.slug}` || '',
        component:blogPost,
        context:{
          id:post.id,
          prevPostId,
          nextPostId,
        },
      })
    })
  }
}


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}


exports.createSchemaCustomization = ({ actions }) => {
  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.ts

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  actions.createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type Mdx implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `);
};
