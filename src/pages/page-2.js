import * as React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

/*function BlogPost() {
  const data = pageQuery.allStrapiArticle.edges[0].node.image.file.publicURL;
  const image = getImage(data)
  return (
    <section>
      <h2>Hola</h2>
      <GatsbyImage image={image} />
    </section>
  )
}

export const pageQuery = graphql`
  query {
    allStrapiArticle {
      edges {
        node {
          image {
            file {
              childImageSharp {
                gatsbyImageData(width: 200)
              }
            }
          }
        }
      }
    }
  }
`

*/


export default function SecondPage() {

  const result = useStaticQuery(graphql`
  query MyQuery {
    allStrapiArticle {
      edges {
        node {
          id
          image {
            file {
              publicURL
              childImageSharp {
                gatsbyImageData(width: 200)
              }
            }
          }
        }
      }
    }
  }
  
`)

console.log(result.allStrapiArticle);
const dataImage = result.allStrapiArticle.edges[0].node.image.file;
const image = getImage(dataImage.childImageSharp.gatsbyImageData)

return (
  <Layout>
    <p>Estamos en Page-2</p>
     <img
        style={{ width: "300px" }}
        alt="JS"
        src={dataImage.publicURL}
      />      
      <GatsbyImage image={image} />
  </Layout>
)
}
