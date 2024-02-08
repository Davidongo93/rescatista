import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Kevin Galeano. Rescatista - Bombero - Instructor"
          />
          <meta property="og:site_name" content="rescatista.vercel.app" />
          <meta
            property="og:description"
            content="Kevin Galeano. Rescatista - Bombero - Instructor"
          />
          <meta property="og:title" content="Kevin Alexander Galeano - Rescatista - Bombero - Instructor" />
          <meta
            name="twitter:description"
            content="Kevin Alexander Galeano - Rescatista - Bombero - Instructor"
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
