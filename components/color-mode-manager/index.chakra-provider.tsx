import { ReactElement, ReactNode } from "react";
import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from "@chakra-ui/react";
import theme from "@/pages/theme";

interface ChakraProps {
  cookies?: string;
  children: ReactNode | ReactElement;
}

export const Chakra = ({ cookies, children }: ChakraProps) => {
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
};
