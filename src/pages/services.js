import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import Dualinfoblock from "../components/Reuseable/Dualinfoblock"
import Flowerscart from "../components/Cart/Flowerscart"

const ServicePage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
    img = {data.img.childImageSharp.fluid}
    title="“We Serve Quality Flowers.”"
    subtitle=""
    heroclass="service-background"/>
    <Flowerscart flowers = {data.flowers}/>
    <Dualinfoblock heading = "Our Team" img ={data.img.childImageSharp.fluid}/>
  </Layout>
)
export const query = graphql` 
{
  img: file(relativePath: { eq: "service.PNG" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
 
  flowers:allContentfulFlowers{
    edges{
      node{
        id
        title
        price
        category
        description{
          description
        }
        image{
          fixed(width:200,height:250){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
  shop: allContentfulShop {
    edges {
      node {
        id
        title
        price
        image {
          fixed(width: 200, height: 120) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`

export default ServicePage;


