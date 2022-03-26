import { Flex, Heading, Text } from "@chakra-ui/react";
import { LinkButton } from "./LinkButton";

export type HeroBannerProps = {
  heroBanner: {
    title: string,
    background: {
      url: string
    },
    description: string,
    buttonLabel: string,
    buttonLink: string
  }
}

export const HeroBanner = ({ heroBanner }: HeroBannerProps) => {
  return (
    <Flex
      bgImage={`url(${heroBanner.background.url})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      height="60vh"
      width="100vw"
    >
      <Flex
        direction="column"
        height="60vh"
        width="100vw"
        bg="blackAlpha.700"
        justify="center"
        pl="3rem"
      >
        <Heading as="h2" color="white">{heroBanner.title}</Heading>
        <Text fontSize="2rem" color="white">{heroBanner.description}</Text>
        <LinkButton href={heroBanner.buttonLink}>{heroBanner.buttonLabel}</LinkButton>
      </Flex>
    </Flex>
  )
}