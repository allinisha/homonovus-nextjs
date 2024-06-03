import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          src="//js.users.51.la/21833547.js"
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
}
