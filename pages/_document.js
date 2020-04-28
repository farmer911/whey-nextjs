import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MTRDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="mobile-web-app-capable" content="yes"></meta>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta content="width=device-width, initial-scale=1, user-scalable=no" name="viewport" />
          <link rel="stylesheet" type="text/css" href="/css/nprogress.css" />
          <link rel="stylesheet" href="/css/override.vendor.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
