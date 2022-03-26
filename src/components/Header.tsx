import { Flex } from "@chakra-ui/react"
import { Logo } from "./Logo"
import { Navbar } from "./Navbar"

export const Header = () => {
  return (
    <Flex as="header"
      bg="brand.primary"
      align="center"
      justify="space-around"
      py="4"
    >
      <Logo />
      <Navbar />
    </Flex>
  )
}