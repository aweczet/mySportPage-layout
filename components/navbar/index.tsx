import {
  Box,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Icon from "@mdi/react";
import { mdiCog, mdiMagnify, mdiSoccer } from "@mdi/js";

const Navbar = () => {
  const { colorMode, setColorMode } = useColorMode();
  console.log(colorMode);
  return (
    <Box
      px={10}
      py={4}
      bgColor={colorMode === "light" ? "blue.100" : "blue.900"}
    >
      <HStack justifyContent="space-between">
        <HStack>
          <Icon path={mdiSoccer} size={1.5} />
          <Text>My Sports Page</Text>
        </HStack>
        <HStack>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon path={mdiMagnify} size={1} />}
            />
            <Input type="text" placeholder="Search" />
          </InputGroup>
          <Menu closeOnSelect={false} isLazy>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<Icon path={mdiCog} size={1} />}
              variant="outline"
            />
            <MenuList>
              <MenuOptionGroup
                defaultValue={colorMode}
                title="Theme"
                type="radio"
              >
                <MenuItemOption
                  value="light"
                  onClick={() => setColorMode("light")}
                >
                  Light
                </MenuItemOption>
                <MenuItemOption
                  value="dark"
                  onClick={() => setColorMode("dark")}
                >
                  Dark
                </MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;
