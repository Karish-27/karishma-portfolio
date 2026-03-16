import { Lexend } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
// setup font
const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-bg text-white bg-cover bg-no-repeat ${lexend.variable} font-lexend relative`}
    >
      {/* metadata */}
      <Head>
        <title>Karishma Kumavat | Portfolio</title>
        <meta
          name="description"
          content="Karishma Kumavat is a Full-stack web developer with 5+ years of experience."
        />
        <meta
          name="keywords"
          content="react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, portfolio, framer-motion, 3d-website, particle-effect"
        />
        <meta name="author" content="Sanidhya Kumar Verma" />
        <meta name="theme-color" content="#7F40FF" />
      </Head>

      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
