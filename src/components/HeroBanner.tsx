import { Flex } from "@chakra-ui/react";

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
      height="20vh"
    >
      { title }
      { description }
    </Flex>
  )
}