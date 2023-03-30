import Head from "next/head";
import { Button, Text, useColorMode } from "@chakra-ui/react";
import Icon from "@mdi/react";
import { mdiWeatherNight, mdiWeatherSunny } from "@mdi/js";

const HomePage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <div>
        <p>try me out!</p>
        <Button onClick={toggleColorMode} variant="outline">
          <Icon
            path={colorMode === "light" ? mdiWeatherSunny : mdiWeatherNight}
            size={1}
          />
          <Text ml={1}>Change theme</Text>
        </Button>
      </div>
    </>
  );
};

export default HomePage;
