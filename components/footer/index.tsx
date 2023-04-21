import { Box, Center, Text, VStack } from "@chakra-ui/react";
import Authors from "@/components/footer/index.authors";
import useColors from "@/components/colors";

const Footer = () => {
  const {backgroundColor} = useColors();
  return (
    <Box w="full" mt="auto" p={4} px={10} bg={backgroundColor}>
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
