import {Box, HStack, Text} from "@chakra-ui/react";
import Icon from "@mdi/react";
import {mdiSoccer} from "@mdi/js";
import Search from "@/components/navbar/index.search";
import Settings from "@/components/navbar/index.settings";
import useColors from "@/components/colors";

const Header = () => {
  const { backgroundColor } = useColors();
  return (
    <Box w="full" px={10} py={4} bgColor={backgroundColor}>
      <HStack justifyContent="space-between">
        <HStack>
          <Icon path={mdiSoccer} size={1.5} />
          <Text>My Sports Page</Text>
        </HStack>
        <HStack>
          <Search />
          <Settings />
        </HStack>
      </HStack>
    </Box>
  );
}

export default Header;