import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="keywords" content="nextjs,expressjs,nodejs,fourdirection" />
          <meta name="description" content="The NextJS and The ExpressJS Integration." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}