import Image from "next/image";
import { Nunito } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import Faq from "@/components/Faq";
import Head from "next/head";
import { useRouter } from "next/navigation";

const inter = Nunito({ subsets: ["latin"] });

export default function Home({ context }) {
  const [input, setInput] = useState("");
  const [article, setArticle] = useState(null);

  const router = useRouter();
  useEffect(() => {
    // const newInput = context.id.reduce((acc, part, index) => {
    //   // Add double slash after the first part, otherwise add a single slash
    //   const separator = index === 0 ? "" : index === 1 ? "//" : "/";

    //   return acc + separator + part;
    // }, "");
    setInput(context.article);
    setArticle(`https://archive.is/newest/${context.article?.trim()?.split("?")[0]}`);
  }, [context]);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target[0].value);
    router.push(`/articles?article=${e.target[0].value}`);
  }

  function handleInputChange(e) {
    e.preventDefault();
    // console.log(e.target.value);
    setInput(e.target.value.split("?")[0]);
  }

  useEffect(() => {
    function resizeIframe() {
      const container = document.getElementById("iframe-container");
      const iframe = document.getElementById("content-frame");
      const containerTop = container.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const newHeight = windowHeight - containerTop - 20;
      // 20px for some bottom margin
      container.style.height = `${newHeight}px`;

      // Add mobile scaling
      if (window.innerWidth < 640) {
        // extra small devices
        iframe.style.transform = "scale(0.5)";
        iframe.style.width = "200%";
        iframe.style.height = "200%";
      } else if (window.innerWidth < 768) {
        // small devices
        iframe.style.transform = "scale(0.6)";
        iframe.style.width = "166.67%";
        iframe.style.height = "166.67%";
      } else if (window.innerWidth < 1024) {
        // medium devices
        iframe.style.transform = "scale(0.8)";
        iframe.style.width = "125%";
        iframe.style.height = "125%";
      } else {
        // large devices
        iframe.style.transform = "scale(0.99)";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
      }
    }

    resizeIframe();

    // Add event listener for window resize
    window.addEventListener("resize", resizeIframe);
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>RemovePaywall | Free online paywall remover</title>
      </Head>

      <div className={`absolute z-[20] bg-[#F9F6EE] border-b border-[black] h-fit w-full top-0`}>
        <div>
          <header>
            <nav className="items-center max-w-screen-xl px-4 pt-2 mx-auto sm:px-8 md:flex md:space-x-6">
              <div className="flex justify-between pointer">
                <Link href="/">
                  <Image src="/DCE-4.svg" width={40} height={40} alt="RemovePaywall" />
                </Link>
              </div>
            </nav>
          </header>

          {/* <SearchBarTwo search={search} updateSearch={updateSearch} /> */}
          {/* <Layerbuttons layerId={layerId} setLayerId={setLayerId} /> */}

          <div className="searchBarText">
            <div className="text-sm font-normal text-gray-500 ">
              {" "}
              *Click the different buttons to search various archives{" "}
            </div>
          </div>
        </div>

        <div className=" mb-[-30px] bg-[red] w-[50px] h-[30px]  flex items-center  justify-center rounded-b-md ml-[20px] pointer">
          <svg
            className=" w-[20px] h-[20px]  align-middle"
            fill="black"
            stroke="red"
            strokeWidth="0px"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path>
          </svg>
        </div>
      </div>

      <div className="flex flex-col min-h-screen ">
        <div id="iframe-container" className="relative flex-grow w-full">
          <iframe
            id="content-frame"
            className="absolute inset-0 w-full h-full border-0"
            style={{ transform: "scale(0.99)", transformOrigin: "0 0" }}
            src={article}
          />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  // console.log(context);
  // Fetch the articles from the API route
  // console.log(context);
  const query = context.query;

  //console.log(res);
  return {
    props: {
      context: query,
    },
  };
}
