import {VStack} from "@chakra-ui/react";
import Header from "@/components/navbar/index.header";
import SportsMenu from "@/components/navbar/index.sports-menu";

const Navbar = () => {
  return (
    <VStack spacing={0}>
      <Header />
      <SportsMenu />
    </VStack>
  );
};

export default Navbar;
