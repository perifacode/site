import { gql } from 'graphql-request';
import type { GetStaticProps } from 'next';
import { AboutSection } from '../components/AboutSection';
import { HeroBanner, HeroBannerProps } from '../components/HeroBanner';
import { SocialSection } from '../components/SocialSection';
import { graphcms } from '../services/graphcms';

const Home = ({heroBanner}: HeroBannerProps) => {
  return (
    <>
      <HeroBanner heroBanner={heroBanner} />
      <SocialSection />
      <AboutSection />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const query = gql`
    {
      heroBanner(where: {slug: "home-banner"}) {
        title,
        background {
          url
        },
        description,
        buttonLabel,
        buttonLink
      }
    }
  `
  const banner: HeroBannerProps = await graphcms.request(query)
  return {
    props: banner
  }
}

export default Home
