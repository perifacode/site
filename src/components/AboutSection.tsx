import { Flex, Heading } from "@chakra-ui/react"

export const AboutSection = () => {
  return (
    <Flex
      bg="url('https://media.graphcms.com/BVOJKWdQQ0WJ2p2y76gG?_ga=2.139763194.899926076.1648319869-549734489.1647827264')"
      bgColor="blackAlpha.900"
      h="50vh"
      justify="center"
      align="center"
    >
      <Flex bg="whiteAlpha.900" p="3rem">
        <Heading as="h2">Sobre</Heading>
      </Flex>
    </Flex>
  )
}