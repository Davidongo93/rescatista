import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="https://rescatista.vercel.app" />
          <meta
            name="description"
            content="Kevin Alexander Galeano Barbosa. Rescatista especializado, bombero instructor con 15+ años de experiencia en rescate vertical, montaña e incendios forestales."
          />
          <meta property="og:site_name" content="Kevin Galeano — Rescatista" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rescatista.vercel.app" />
          <meta
            property="og:description"
            content="Rescatista especializado, bombero instructor con experiencia en rescate vertical, montaña, incendios y expediciones científicas"
          />
          <meta property="og:image" content="https://rescatista.vercel.app/fallback.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@judasgaleano" />
          <meta name="twitter:image" content="https://rescatista.vercel.app/fallback.jpg" />
          <meta
            name="twitter:description"
            content="Rescatista, bombero e instructor especializado en operaciones de rescate"
          />
          <meta name="theme-color" content="#000000" />
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
