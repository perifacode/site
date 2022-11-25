import { Flex, List, ListItem } from "@chakra-ui/react"
import { NavItem } from "./NavItem"

export const Navbar = () => {
  return (
    <Flex as="nav" gap="1.5rem" direction={["column", "column", "row"]} aria-label="Navegação principal">
      <List display="flex" flexDirection={{base: "column", md: "column", lg: "row"}} gap="1.5rem">
        <ListItem>
          <NavItem href="/" label="Página inicial" />
        </ListItem>
        <ListItem>
          <NavItem href="/sobre" label="Sobre nós" />
        </ListItem>
        <ListItem>
          <NavItem href="/manifesto" label="Manifesto" />
        </ListItem>
        <ListItem>
          <NavItem href="/coc" label="Código de conduta" />
        </ListItem>
        <ListItem>
          <NavItem href="/mentoria" label="Mentoria" />
        </ListItem>
      </List>
    </Flex>
  )
}