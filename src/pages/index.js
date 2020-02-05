import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"
import Dualinfoblock from "../components/Reuseable/Dualinfoblock"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
    img = {data.img.childImageSharp.fluid}
    title="“Earth laughs in flowers.”"
    subtitle="Eternal Blossoms"
    heroclass="hero-background"/>

    <Dualinfoblock heading = "About us" img ={data.img.childImageSharp.fluid}/>
    <Infoblock heading = "Our Works" />
    
    
  </Layout>
)
export const query = graphql` 
{
  img: file(relativePath: { eq: "heromain.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default IndexPage
