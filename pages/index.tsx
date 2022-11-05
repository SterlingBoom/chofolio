import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>CHOFOLIO</title>
        <meta name="description" content="Portfolio For Developers" />
      </Head>
      <div>GO TO PORTFOLIO CREATION PAGE</div>
      <button
        onClick={() => {
          router.push("/portfolio");
        }}
      >
        Portfolio Page
      </button>
    </>
  );
};

export default Home;
