import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Archive Buttons | Free Paywall Remover</title>
        <meta
          name="description"
          content="Remove paywalls on any news article with Archive Buttons. This Free online paywall remover works on hundreds of news sites."
          key="desc"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/fav_pac/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/fav_pac/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/fav_pac/favicon-16x16.png" />
        <link rel="manifest" href="/images/fav_pac/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-CKJDVN2F56"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-CKJDVN2F56');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
