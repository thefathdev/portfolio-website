import Head from 'next/head';
import '../styles/globals.css';
import type {AppProps} from 'next/app';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Fathul Irfaan Abdillah</title>
        {/* TODO: Add favicons and pwa icons, manifest.json */}
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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
