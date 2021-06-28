import * as React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import {MDXRenderer} from "gatsby-plugin-mdx"

const BlogPostTemplate=({data})=>{
  const post=data.mdx

  return(
    <Layout pageTitle="My Blog Posts">
      <MDXRenderer>{post.body}</MDXRenderer>
    </Layout>
  )
}

/*export const query=graphql`
    query{
        allFile{
            nodes{
                name
            }
        }
    }
`*/

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug(
        $slug:String
        $prevPostId: String
        $nextPostId: String
    ) {
        site {
            siteMetadata {
                title
            }
        }
        mdx(slug: { eq: $slug }) {
            id
            excerpt(pruneLength: 160)
            body
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
            }
        }
        prev: mdx(id: { eq: $prevPostId }) {
            slug
            frontmatter {
                title
            }
        }
        next: mdx(id: { eq: $nextPostId }) {
            slug
            frontmatter {
                title
            }
        }
    }
`