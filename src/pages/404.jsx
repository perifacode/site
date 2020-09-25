import React from "react"
import Anchor from "../components/Anchor"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Deu ruim" />
    <h1> 404: Not Found </h1>{" "}
    <p> Como a gente tá construindo, muita coisa tá fora do lugar.</p>
    <p>Segura a emoção, q já já fica tudo top!</p>
    <Anchor to="/"> Voltar pra home! </Anchor>
  </Layout>
)

export default NotFoundPage
