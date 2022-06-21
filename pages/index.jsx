import Head from "next/head";
import colors from "../constants/colors.ts";

import AboutMe from "./aboutMe";
import LandingPage from "./landingPage";
import Experiences from "./experiences";
import Projects from "./projects";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Khush Patel</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <LandingPage />
      <AboutMe />
      <Experiences />
      <Projects />
      <Footer />

      <style jsx global>
        {`
          body {
            padding: 0px;
            margin: 0px;
            font-family: "Roboto", sans-serif;
            font-weight: 100;
            background-color: ${colors.main.black};
          }
        `}
      </style>
    </div>
  );
}
