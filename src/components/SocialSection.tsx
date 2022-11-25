import { Flex, Heading, List, ListItem } from "@chakra-ui/react"
import { RiGithubFill, RiInstagramFill, RiTwitterFill, RiYoutubeFill } from 'react-icons/ri'
import { IconLink } from "./IconLink"

export const SocialSection = () => {
  return (
    <Flex py="5rem" align="center" direction="column" rowGap="2rem" as="section">
      <Heading as="h2" fontSize="3rem" maxW={480} textAlign="center">
        Da PERIFERIA para o mundo da TECNOLOGIA.
      </Heading>
      <Flex  as="nav" aria-label="Redes Sociais">
        <List display="flex" gap="2rem">
          <ListItem>
            <IconLink 
              href="https://www.youtube.com/perifacode/" 
              icon={RiYoutubeFill} 
              aria-label="Youtube"
            />
          </ListItem>
          <ListItem>
            <IconLink 
              href="https://www.twitter.com/perifacode/" 
              icon={RiTwitterFill} 
              aria-label="Twitter"
            />
          </ListItem>
          <ListItem>
            <IconLink 
              href="https://www.instagram.com/perifacode/" 
              icon={RiInstagramFill} 
              aria-label="Instagram"
            />
          </ListItem>
          <ListItem>
            <IconLink 
              href="https://www.github.com/perifacode/" 
              icon={RiGithubFill} 
              aria-label="Github"
            />
          </ListItem>
        </List>

      </Flex>
    </Flex>
  )
}