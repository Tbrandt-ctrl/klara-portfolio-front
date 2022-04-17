import type { NextPage } from "next";
import Head from "next/head";

import styles from "@/styles/pages/Home/Home.module.scss";

import HeroSection from "@/components/pages/home/HeroSection";
import ContentSection from "@/components/pages/home/ContentSection";
import ContactSection from "@/components/pages/home/ContactSection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} min-h-screen relative`}>
        <HeroSection />
        <ContentSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;
