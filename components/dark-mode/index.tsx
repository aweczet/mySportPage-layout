import Icon from "@mdi/react";
import { mdiWeatherNight, mdiWeatherSunny } from "@mdi/js";
import { Button, Text, useColorMode } from "@chakra-ui/react";

export const DarkModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode);
  return (
    <Button onClick={toggleColorMode} variant="outline">
      <Icon
        path={colorMode === "light" ? mdiWeatherSunny : mdiWeatherNight}
        size={1}
      />
      <Text ml={1}>Change theme</Text>
    </Button>
  );
};
