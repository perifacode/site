import { Flex, Heading } from "@chakra-ui/react"
import { RiGithubFill, RiInstagramFill, RiTwitterFill, RiYoutubeFill } from 'react-icons/ri'
import { IconLink } from "./IconLink"

export const SocialSection = () => {
  return (
    <Flex py="5rem" align="center" direction="column" rowGap="2rem">
      <Heading as="h2" fontSize="3rem" maxW={480} textAlign="center">
        Da PERIFERIA para o mundo da TECNOLOGIA.
      </Heading>
      <Flex gap="2rem">
        <IconLink 
          href="https://www.youtube.com/perifacode/" 
          icon={RiYoutubeFill} 
        />
        <IconLink 
          href="https://www.twitter.com/perifacode/" 
          icon={RiTwitterFill} 
        />
        <IconLink 
          href="https://www.instagram.com/perifacode/" 
          icon={RiInstagramFill} 
        />
        <IconLink 
          href="https://www.github.com/perifacode/" 
          icon={RiGithubFill} 
        />

      </Flex>
    </Flex>
  )
}