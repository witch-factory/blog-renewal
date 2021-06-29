import * as React from 'react'
import Layout from "../components/layout"
import {StaticImage} from "gatsby-plugin-image";
import {Link, graphql} from 'gatsby'

const BlogHomePage=({data})=>{
  const siteTitle=data.site.siteMetadata?.title || `Title`
  const posts=data.allMdx.nodes

  if(posts.length===0){
    return (
      <Layout pageTitle={siteTitle}>

        <p>No blog posts found.</p>
      </Layout>
    )
  }

  return(

    <Layout pageTitle={siteTitle}>

      <main>
        <title>{data.site.siteMetadata.title}</title>

        <ol style={{listStyle:`none`}}>
          {
            posts.map(post=>{
              const title=post.frontmatter.title || post.slug

              return(
                <li key={post.slug}>
                  <article>
                    <header>
                      <h2>
                        <Link to={post.slug}>
                          <span>{title}</span>
                        </Link>
                      </h2>
                      <p>{post.frontmatter.date}</p>
                    </header>

                    <section>
                      <p>{post.frontmatter.description || post.excerpt}</p>
                    </section>
                  </article>
                </li>
              )
            })
          }
        </ol>
      </main>
    </Layout>
  )
}

export default BlogHomePage

export const query=graphql`
  query {
      site {
          siteMetadata {
              title
              description
          }
      }
      allMdx(sort: {fields: frontmatter___date, order: DESC}) {
          nodes {
              excerpt
              slug
              frontmatter {
                  title
                  date(formatString: "MMMM DD, YYYY")
                  description
              }
          }
      }
  }

`