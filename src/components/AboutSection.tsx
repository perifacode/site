import { Flex, Image, Text } from "@chakra-ui/react"

export const AboutSection = () => {
  return (
    <Flex
      bg="url('https://media.graphcms.com/BVOJKWdQQ0WJ2p2y76gG?_ga=2.139763194.899926076.1648319869-549734489.1647827264')"
      bgColor="blackAlpha.900"
      h="60vh"
      justify="center"
      align="center"
    >
      <Flex 
        bg="white" 
        direction="column" 
        maxWidth="800px"
        px={["1rem", "3rem"]} 
        py={["1rem", "2rem"]}
        mx="1rem"
      >
        <Image src="/sobre-grafite.svg" alt="Sobre" w="200px" />
        <Text>
        A perifaCode é uma ONG que tem com objetivo “desgourmetizar” o mercado digital, preenchido, em sua maioria, por um estereótipo ao qual precisa ser mudado para ser mais inclusivo e com esse propósito a ONG foi criada em 2019 para capacitar, discutir e fazer ouvir a voz da periferia dentro do mercado digital. 

        Realizamos diversos eventos presenciais para capacitar esses jovens da periferia e contavam com vários grupos espalhados pelas redes sociais, contamos com uma comunidade ativa no Discord para discutirmos sobre programação e temas relacionados.
        </Text>
      </Flex>
    </Flex>
  )
}