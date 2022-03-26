import { Flex, Heading, Text } from "@chakra-ui/react";

export type HeroBannerProps = {
  title: string,
  background: {
    url: string
  },
  description: string,
}

export const HeroBanner = ({ title, background, description}: HeroBannerProps) => {
  return (
    <Flex
      bgImage={`url(${background.url})`}
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
        <Heading as="h2" color="white">{ title }</Heading>
        <Text fontSize="2rem" color="white">{ description }</Text>
      </Flex>
    </Flex>
  )
}