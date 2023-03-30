import Head from "next/head";
import HomePage from "@/pages/Home";
import {Box} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Sport Page</title>
        <meta name="description" content="Layout of My Sport Page app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main" w="full" minH="100dvh">
      <HomePage />
      </Box>
    </>
  );
}
