import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="See photos from Colette's Dohl." />
          <meta property="og:site_name" content="colette.choifam.com" />
          <meta property="og:description" content="See photos from Colette's Dohl." />
          <meta property="og:title" content="Colette's Dohl photos" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Colette's Dohl photos" />
          <meta name="twitter:description" content="See photos from Colette's Dohl." />
        </Head>
        <body className="bg-white antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
