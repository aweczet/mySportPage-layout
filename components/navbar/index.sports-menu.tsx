import { Box, Tab, TabList, Tabs } from "@chakra-ui/react";
import useColors from "@/components/colors";

const SportsMenu = () => {
  const { navBackgroundColor } = useColors();
  return (
    <Box w="full" px={10} bgColor={navBackgroundColor}>
      <Tabs variant="line">
        <TabList>
          <Tab borderColor="transparent">SportName</Tab>
          <Tab isDisabled>SportName</Tab>
          <Tab>SportName</Tab>
          <Tab>SportName</Tab>
          <Tab isDisabled>SportName</Tab>
        </TabList>
      </Tabs>
    </Box>
  );
};

export default SportsMenu;
