import Head from "next/head";
import { Box } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <Box px={10}>
        <p>try me out!</p>
      </Box>
    </>
  );
};

export default HomePage;
