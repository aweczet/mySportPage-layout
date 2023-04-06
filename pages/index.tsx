import Head from "next/head";
import HomePage from "@/pages/Home";
import { Box } from "@chakra-ui/react";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";
import DefaultLayout from "@/layouts/defaultLayout";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>My Sport Page</title>
        <meta name="description" content="Layout of My Sport Page app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main" w="full">
        <HomePage />
      </Box>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
