import { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface DefaultLayoutProps {
  children: ReactNode;
}
const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
