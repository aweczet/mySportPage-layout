import { Box, Center, Text, VStack } from "@chakra-ui/react";
import Authors from "@/components/footer/index.authors";

const Footer = () => {
  return (
    <Box w="full" mt="auto" p={4} px={10}>
      <Center>
        <VStack>
          <Text>MySportPage is proudly made by</Text>
          <Authors />
        </VStack>
      </Center>
    </Box>
  );
};

export default Footer;
