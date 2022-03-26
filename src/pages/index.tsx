import { gql } from 'graphql-request';
import type { GetStaticProps } from 'next';
import { HeroBanner, HeroBannerProps } from '../components/HeroBanner';
import { graphcms } from '../services/graphcms';

const Home = ({title, background, description}: HeroBannerProps) => {
  return (
    <HeroBanner 
      title={title}
      background={background}
      description={description}
    />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const query = gql`
    {
      heroBanner(where: {slug: "hero-principal"}) {
        title,
        background {
          url
        },
        description
      }
    }
  `
  const { heroBanner } = await graphcms.request(query)
  return {
    props: {...heroBanner},
  }
}

export default Home
