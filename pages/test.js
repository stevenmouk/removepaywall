import Head from "next/head";
import React from "react";

export default function test() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width; initial-scale=.5; maximum-scale=.5; minimum-scale=.5;"
        />
      </Head>
      <div className="w-[100%] min-h-screen flex  items-center justify-center">
        <iframe
          src="https://archive.today/newest/https://www.nytimes.com/2024/02/09/travel/icon-of-the-seas-cruise-royal-caribbean.html"
          width="100%"
          height="1000px"
          scrolling="yes"
          frameborder="0px"
          rel="nofollow"
        ></iframe>
      </div>
    </>
  );
}
