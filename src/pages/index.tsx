import { gql } from 'graphql-request';
import type { GetStaticProps } from 'next';
import { AboutSection } from '../components/AboutSection';
import { HeroBanner, HeroBannerProps } from '../components/HeroBanner';
import { OrganizerProps } from '../components/Organizer';
import { OrganizersSlide } from '../components/OrganizersSlide';
import { SocialSection } from '../components/SocialSection';
import { graphcms } from '../services/graphcms';

interface HomeProps {
  heroBanner: HeroBannerProps
  organizers: OrganizerProps[]
}

const Home = ({heroBanner, organizers}: HomeProps) => {
  return (
    <>
      <HeroBanner 
        title={heroBanner.title}
        background={heroBanner.background}
        description={heroBanner.description}
        buttonLabel={heroBanner.buttonLabel}
        buttonLink={heroBanner.buttonLink}
      />
      <SocialSection />
      <AboutSection />
      <OrganizersSlide organizers={organizers}/>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const query = gql`
    {
      organizers(orderBy: slug_ASC) {
        id
        name
        avatar {
          url
        }
        miniBio {
          html
        }
        username
      }
      heroBanner(where: {slug: "home-banner"}) {
        title
        background {
          url
        }
        description
        buttonLabel
        buttonLink
      }
    }
  `
  const { organizers, heroBanner } = await graphcms.request(query)
  return {
    props: {
      organizers: [
        ...organizers
      ],
      heroBanner: {
        ...heroBanner
      }
    }
  }
}

export default Home
