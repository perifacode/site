import { Icon as ChakraIcon, Link as ChakraLink, LinkProps } from "@chakra-ui/react"
import Link from "next/link"
import { IconType } from "react-icons"

interface IconLinkProps extends LinkProps {
  href: string
  icon: IconType
}
export const IconLink = ({ href, icon, ...props }: IconLinkProps) => {
  return (
    <Link href={href} passHref>
      <ChakraLink target="_blank" rel="noopener norefereer" {...props}>
        <ChakraIcon 
          transition="all 0.4s ease-in-out"
          _hover={{
          color: "brand.primary"
          }}
          as={icon} 
          fontSize={32}
          />
      </ChakraLink>
    </Link>
  )
}