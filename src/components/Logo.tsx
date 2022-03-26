import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
  return (
    <Link href="/" passHref>
      <Image src="https://media.graphcms.com/OdWKElwPSEia9nfabuxw?_ga=2.34469153.1858804931.1648141850-710560506.1647625745" width={120} height={40} />
    </Link>
  )
}