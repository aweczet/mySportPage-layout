import { Box, Center, HStack, Link, Text } from "@chakra-ui/react";
import Icon from "@mdi/react";
import { mdiTwitter } from "@mdi/js";

const Footer = () => {
  return (
    <Box w="full" mt="auto" p={4} px={10}>
      <Center>
        <HStack>
          <Text>&copy; MySportPage - </Text>
          <HStack gap={0}>
            <Icon path={mdiTwitter} size={1} />
            <Link href="https://twitter.com/aweczet" isExternal>
              Albert Jendrzejczak
            </Link>
          </HStack>
          <Text>+</Text>
          <HStack gap={0}>
            <Icon path={mdiTwitter} size={1} />
            <Link href="https://twitter.com/Kochanowski97" isExternal>
              Kacper Kochanowski
            </Link>
          </HStack>
        </HStack>
      </Center>
    </Box>
  );
};

export default Footer;
