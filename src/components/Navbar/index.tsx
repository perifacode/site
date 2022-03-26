import { Flex } from "@chakra-ui/react"
import { NavItem } from "./NavItem"

export const Navbar = () => {
  return (
    <Flex as="nav" gap="1.5rem">
      <NavItem href="/" label="Home" />
      <NavItem href="/about" label="About" />
      <NavItem href="/blog" label="Blog" />
    </Flex>
  )
}