import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import Customers from "../components/About/Customers"
import History from "../components/About/History"

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
    img = {data.img.childImageSharp.fluid}
    title="Our passsion is your Happiness"
    subtitle=""
    heroclass="about-background"/>
    <History />
    <Customers />
  </Layout>
)
export const query = graphql` 
{
  img: file(relativePath: { eq: "about.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default AboutPage
