import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Anchor from "../components/Anchor"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const {
    site: {
      siteMetadata: { social, profile },
    },
  } = useStaticQuery(graphql`
    query SocialMetadata {
      site {
        siteMetadata {
          profile
          social {
            facebook
            linkedin
            instagram
            twitter
            github
          }
        }
      }
    }
  `)

  console.log(social, profile)
  const socialMedia = Object.values(social)
  const socialName = Object.keys(social)
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <h1> Você que chegou agora </h1> <p> Receba nossas boas vindas. </p>{" "}
      <p> Estamos construindo juntos uma comunidade melhor. </p>{" "}
      <p>Aproveita pra seguir a gente</p>
      {socialMedia.map((url, _index) => (
        <strong>
          <Anchor href={`${url}${profile}`}>{socialName[_index]}</Anchor>
        </strong>
      ))}
      <strong>
        <Anchor href="https://bit.ly/cadastro-perifacode">
          Faça parte do Grupo do Discord
        </Anchor>
      </strong>
      <Link to="/page-2/"> Go to page 2 </Link> <br />
      <Link to="/using-typescript/"> Go to "Using TypeScript" </Link>{" "}
    </Layout>
  )
}

export default IndexPage
