import { useColorModeValue } from "@chakra-ui/react";

interface ColorsProps {
  backgroundColor: string;
  borderColor: string;
  textColor: string;
  iconsColor: string;
  hoverColor: string;
}

const useColors = (): ColorsProps => {
  return {
    backgroundColor: useColorModeValue("blue.100", "blue.900"),
    borderColor: useColorModeValue("blue.600", "blue.200"),
    textColor: useColorModeValue("black", "white"),
    iconsColor: useColorModeValue("blue.600", "blue.200"),
    hoverColor: useColorModeValue("blue.50", "rgba(144, 205, 244, 0.12)"),
  };
};

export default useColors;
