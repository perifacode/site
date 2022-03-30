import { Container, Heading } from "@chakra-ui/react"
import { gql } from "graphql-request"
import { GetStaticProps } from "next"
import { graphcms } from "../services/graphcms"
import styles from "../styles/BasicPage.module.scss"

type ManifestoProps = {
  title: string
  content: string
}

const Manifesto = ({ title, content }: ManifestoProps) => {
  return (
    <Container maxW={1180} my="2rem">
      <Heading as="h1" textTransform="uppercase" my="2rem">{title}</Heading>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const query = gql`
    {
      basicPage(where: { slug: "manifesto" }) {
        title,
        content {
          html
        }
      }
    }
  `
  const { basicPage } = await graphcms.request(query)
  const { title, content } = basicPage
  return {
    props: {
      title,
      content: content.html,
    },
  }
}


export default Manifesto