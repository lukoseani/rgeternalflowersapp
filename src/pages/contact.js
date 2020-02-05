import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import Contact from "../components/contact/Contact"

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
    img = {data.img.childImageSharp.fluid}
    title=""
    subtitle=""
    heroclass="contact-background"/>
   <Contact/>
  </Layout>
)
export const query = graphql` 
{
  img: file(relativePath: { eq: "contact.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default AboutPage
