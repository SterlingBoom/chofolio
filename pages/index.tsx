import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Home: NextPage = () => {
  const router = useRouter();
  const portfolio = () => {
    router.push("/portfolio");
  };
  return (
    <>
      <Head>
        <title>CHOFOLIO</title>
        <meta name="description" content="Portfolio For Developers" />
      </Head>
      <div className={styles.navbar}>
        <h1>CHOFOLIO</h1>
        <button>CONTACT</button>
      </div>
      <div className={styles.section1}>
        <div className={styles.left}>
          <div className={styles.header}>
            <span>CHOFOLIO</span> Online Portfolio Builder for Developers
          </div>
          <div className={styles.text}>
            Portfolio building can be stressful, confusing and time-consuming if
            you do it all on your own. With our portfolio builder, it's quick,
            pain-free and effective
          </div>
          <button onClick={portfolio} className={styles.portfolio}>
            CREATE MY PORTFOLIO NOW
          </button>
        </div>
        <div className={styles.right}>
          <Image
            src="/portfolio.webp"
            width={500}
            height={400}
            alt="Landing Page"
          />
        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.header2}>
          Build your PORTFOLIO in 3 easy steps
        </div>
        <div className={styles.steps}>
          <div className={styles.step}>
            <Image src="/step1.jpg" width={350} height={300} alt="Step 1" />
            <div className={styles.stepText}>Fill in your portfolio data</div>
          </div>{" "}
          <div className={styles.step}>
            <Image src="/step2.jpg" width={350} height={300} alt="Step 1" />
            <div className={styles.stepText}>View your portfolio</div>
          </div>{" "}
          <div className={styles.step}>
            <Image src="/step3.webp" width={350} height={300} alt="Step 1" />
            <div className={styles.stepText}>Share your portfolio link</div>
          </div>
        </div>
        <button onClick={portfolio}>BUILD MY PORTFOLIO NOW</button>
      </div>
      <div className={styles.footer}>
        Copyright &copy; {new Date().getFullYear()}{" "}
        <a href="https://cermuel.vercel.app">Ngene Samuel</a>
      </div>
    </>
  );
};

export default Home;
