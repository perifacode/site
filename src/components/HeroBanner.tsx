import { Flex, Heading, Text } from "@chakra-ui/react";
import { LinkButton } from "./LinkButton";

export type HeroBannerProps = {
  title: string,
  background: {
    url: string
  },
  description: string,
  buttonLabel: string,
  buttonLink: string
}

export const HeroBanner = ({ title, background, description, buttonLabel, buttonLink }: HeroBannerProps) => {
  return (
    <Flex
      bgImage={`url(${background.url})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      height="60vh"
      width="100%"
      as="section"
    >
      <Flex
        direction="column"
        height="60vh"
        width="100%"
        bg="blackAlpha.700"
        justify="center"
        pl="3rem"
        as="article"
      >
        <Heading as="h2" color="white">{title}</Heading>
        <Text fontSize="2rem" color="white">{description}</Text>
        <LinkButton href={buttonLink}>{buttonLabel}</LinkButton>
      </Flex>
    </Flex>
  )
}