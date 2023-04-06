import { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Box } from "@chakra-ui/react";

interface DefaultLayoutProps {
  children: ReactNode;
}
const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minH="100vh"
      justifyContent="flex-start"
    >
      <Navbar />
      <>{children}</>
      <Footer />
    </Box>
  );
};

export default DefaultLayout;
