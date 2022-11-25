import { Box, Flex, Stack, Text } from "@chakra-ui/react"
import Link from "next/link"
import { RiGithubFill, RiInstagramFill, RiTwitterFill, RiYoutubeFill } from "react-icons/ri"
import { IconLink } from "./IconLink"
import { Logo } from "./Logo"

export const Footer = () => {
  return (
    <Flex
      as="footer"
      bg="blackAlpha.900"
      color="white"
      py="2rem"
      px="5rem"
      justify="space-between"
      direction={["column", "row"]}
      align="center"
    >
      <Flex direction="column" rowGap={4} align={["center", "flex-start"]}>
        <Box>
          <Logo />
        </Box>
        <Text as="span" textAlign={["center", "left"]}>© perifaCode 2022. Todos os direitos Reservados.</Text>
        <Stack my="1rem" textTransform="uppercase" textAlign={["center", "left"]}>
          <Link href="/manifesto"> Manifesto </Link>
          <Link href="/coc"> Código de Conduta </Link>
        </Stack>
      </Flex>
      <Flex direction="column" rowGap={2} textAlign="center" py="1rem">
          <Text as="span">Contato</Text>
          <Link href="mailto:contato@perifacode.com">contato@perifacode.com</Link>
          <Flex gap="1rem">
            <IconLink 
              href="https://www.youtube.com/perifacode/" 
              icon={RiYoutubeFill} 
              aria-label="Youtube"
            />
            <IconLink 
              href="https://www.twitter.com/perifacode/" 
              icon={RiTwitterFill} 
              aria-label="Twitter"
            />
            <IconLink 
              href="https://www.instagram.com/perifacode/" 
              icon={RiInstagramFill} 
              aria-label="Instagram"
            />
            <IconLink 
              href="https://www.github.com/perifacode/" 
              icon={RiGithubFill} 
              aria-label="Github"
            />
          </Flex>
      </Flex>
    </Flex>
  )
}