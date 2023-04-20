import {
  IconButton,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  useColorMode,
} from "@chakra-ui/react";
import Icon from "@mdi/react";
import { mdiCog } from "@mdi/js";

const Settings = () => {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <Menu closeOnSelect={false} isLazy>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<Icon path={mdiCog} size={1} />}
        variant="outline"
      />
      <MenuList>
        <MenuOptionGroup defaultValue={colorMode} title="Theme" type="radio">
          <MenuItemOption value="light" onClick={() => setColorMode("light")}>
            Light
          </MenuItemOption>
          <MenuItemOption value="dark" onClick={() => setColorMode("dark")}>
            Dark
          </MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default Settings;
