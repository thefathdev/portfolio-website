import type {NextPage} from 'next';
import Head from 'next/head';
import About from '../components/about';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Layout from '../components/layout';
import Projects from '../components/projects';
import {projects} from '../data/projects';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Fathul Irfaan Abdillah</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Fathul Irfaan Abdillah Personal Portfolio Website" />
        <meta property="og:url" content="https://fathdev.vercel.app/" />
        <meta property="og:title" content="Fathul Irfaan Abdillah" />
        <meta
          property="og:description"
          content="Fathul Irfaan Abdillah Personal Portfolio Website"
        />
        <meta
          property="og:image"
          content="https://fathdev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.cdca1108.jpg&w=828&q=75"
        />
        <meta property="og:image:alt" content="Fathul Irfaan Abdillah" />
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:creator" content="@FathulIrfaan"></meta>
        <link rel="canonical" href="https://fathdev.vercel.app/" key="canonical" />
      </Head>

      <Hero />
      <About />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default Home;
