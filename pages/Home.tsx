import Head from "next/head";
import { DarkModeSwitcher } from "@/components/dark-mode";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <div>
        <p>try me out!</p>
        <DarkModeSwitcher />
      </div>
    </>
  );
};

export default HomePage;
