import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
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
