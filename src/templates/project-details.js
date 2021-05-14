import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import {
  details,
  featured,
  htmlSection,
} from "../styles/project-details.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { stack, title, featuredImg } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={featured}>
          <GatsbyImage image={getImage(featuredImg)} alt={title} />
        </div>
        <div
          className={htmlSection}
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`
