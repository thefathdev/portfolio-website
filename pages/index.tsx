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
