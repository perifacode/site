import { Link as ChakraLink } from "@chakra-ui/react"
import Link from "next/link"

type LinkButtonProps = {
  children: React.ReactNode,
  href: string,
}

export const LinkButton = ({ children, href }: LinkButtonProps) => {
  return (
    <Link href={href} passHref>
      <ChakraLink
        target="_blank"
        rel="noopener noreferrer"
        my="0.5rem"
        bg="brand.primary"
        width="fit-content"
        py="3"
        px="5"
        borderRadius={8}
        transition="all 0.2s ease-in-out"
        _hover={{
          filter: "brightness(90%)"
        }}
        fontFamily="Fira Code, monospace"
        fontWeight="bold"
      >
        {children}
      </ChakraLink>
    </Link>
  )
}