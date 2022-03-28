import { Flex, Image, Text } from "@chakra-ui/react";

export type OrganizerProps = {
  name: string;
  avatar: {
    url: string;
  };
  miniBio: string;
  username: string;
}

export const Organizer = ({ name, avatar, username, miniBio }: OrganizerProps) => {
  return (
    <Flex direction="column" justify="center" align="center" h="100%" rowGap={2}>
      <Image 
        src={avatar.url} 
        alt={`Foto de ${name}`}
        w="200px"
        h="200px"
        rounded="full"
      />
      <Text>{name}</Text>
      <Text as="span">{username}</Text>
    </Flex>
  )
}