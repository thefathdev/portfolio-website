import type {NextPage} from 'next';
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
      <Hero />
      <About />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default Home;
