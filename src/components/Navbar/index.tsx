import { Flex } from "@chakra-ui/react"
import { NavItem } from "./NavItem"

export const Navbar = () => {
  return (
    <Flex as="nav" gap="1.5rem" direction={["column", "column", "row"]}>
      <NavItem href="/" label="Página inicial" />
      <NavItem href="/sobre" label="Sobre nós" />
      <NavItem href="/manifesto" label="Manifesto" />
      <NavItem href="/coc" label="Código de conduta" />
      <NavItem href="/mentoria" label="Mentoria" />
    </Flex>
  )
}