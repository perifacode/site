import { Link as ChakraLink } from '@chakra-ui/react'
import Link from "next/link"

type NavItemProps = {
  href: string
  label: string
}

export const NavItem = ({ href, label }: NavItemProps) => {
  return (
    <Link href={href} passHref>
      <ChakraLink>{label}</ChakraLink>
    </Link>
  )
}