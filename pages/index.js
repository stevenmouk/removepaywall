import Image from "next/image";
import { Nunito } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import Faq from "@/components/Faq";
import { useRouter } from "next/navigation";

const inter = Nunito({ subsets: ["latin"] });

export default function Home() {
  const [input, setInput] = useState(null);

  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target[0].value);

    window.location.href = `/articles?article=${e.target[0].value}`;
  }

  function handleStuff(e) {
    e.preventDefault();
    if (input != null && input.trim() != "") {
      window.open(`https://archive.is/newest/${input.trim()}`);
    }
  }

  function handleStuff2(e) {
    e.preventDefault();
    if (input != null && input.trim() != "") {
      window.open(`https://web.archive.org/${input.trim()}`);
    }
  }
  function handleStuff3(e) {
    if (input != null && input.trim() != "") {
      e.preventDefault();
      window.open(`https://webcache.googleusercontent.com/search?q=cache:${input.trim()}`);
    }
  }
  function handleStuff4(e) {
    e.preventDefault();
    if (input != null && input.trim() != "") {
      window.open(`https://removepaywall.com/${input.trim()}`);
    }
  }

  function handleInputChange(e) {
    e.preventDefault();
    // console.log(e.target.value);
    setInput(e.target.value.split("?")[0]);
  }
  function handleStuff5(e) {
    e.preventDefault();
    if (input != null && input.trim() != "") {
      window.open(`https://12ft.io/${input.trim()}`);
    }
  }
  return (
    <>
      <main>
        <nav className="bg-[#FFFEF0] border-gray-200 px-4 lg:px-6 pt-2.5 ">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link href="/" className="cursor-pointer">
              <div
                className={` text-rose-500 text-xl border-[2px] border-rose-500 px-3 py-3 rounded-full ${inter.className}`}
              >
                Archive Buttons
              </div>
            </Link>
            <div className="flex items-center lg:order-2"></div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            ></div>
          </div>
        </nav>

        <section className="bg-[#FFFEF0] dark:bg-gray-900 min-h-screen pt-20">
          <div className="flex flex-col items-center justify-between  py-8 px-4 mx-auto  lg:py-16 ">
            <div className="place-self-center text-center lg:col-span-7">
              <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md sm:text-center">
                  <h1 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
                    All of the paywall removers in one place
                  </h1>
                  <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
                    Simply enter the URL of the article and click the archive buttons to remove any
                    paywall.
                  </p>
                  <form action="#" onSubmit={handleSubmit}>
                    <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                      <div className="relative w-full">
                        <label
                          htmlFor="email"
                          className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Enter Article URL
                        </label>
                        <div className="flex absolute inset-y-0  items-center pl-3 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                          </svg>
                        </div>
                        <input
                          className="block p-3 pl-10 w-full text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Enter Article URL"
                          id="email"
                          onInput={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        {/* <button
                          type="submit"
                          className="py-3 px-5  text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-red-500 border-red-500 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-red-500 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                          Search
                        </button> */}
                      </div>
                      <button
                        type="submit"
                        className="py-3 px-5  ml-2 text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-red-500 border-red-500  rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-white dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        Search
                      </button>
                    </div>
                    <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
                      We all hate paywalls, these paywall removers can help with that.
                      {/* <a
                        href="#"
                        className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                      >
                        Read our Privacy Policy
                      </a> */}
                    </div>
                    {/* <Link
                      href="https://mhtntimes.com"
                      target="_blank"
                      className="w-full flex justify-center"
                    >
                      <section className="bg-white w-[70%] border-2 border-black rounded-xl flex flex-row mt-10">
                        <Image
                          src="/images/manhattanTimes.svg"
                          width={100}
                          height={100}
                          unoptimized
                          className="object-fit w-[150px] h-[150px] rounded-xl p-3 hidden sm:inline"
                        ></Image>
                        <div>
                          <div className=" px-4 mx-auto max-w-screen-xl lg:px-6">
                            <div className="mx-auto max-w-screen-md sm:text-center">
                              <h2 className="mb-4 text-xl tracking-tight font-extrabold  sm:text-2xl text-black">
                                Check out our very own news website! No paywalls ever!
                              </h2>
                            </div>
                          </div>

                          <div className="w-full flex items-center justify-center">
                            <div
                              className=" hover:text-white focus:outline-none text-white bg-red-500
                            hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg
                            text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700
                            dark:focus:ring-red-900 w-[30%] hover:cursor-pointer "
                            >
                              Visit
                            </div>
                          </div>
                        </div>
                      </section>
                    </Link>
                  */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <Toaster /> */}

        {/* <section className="bg-[#FFFEF0] dark:bg-gray-900 ">
          <div className=" px-4 mx-auto max-w-screen-xl ">
            <h2 className="mb-8 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 lg:mb-16 dark:text-white md:text-4xl">
              Past Editions
            </h2>
          </div>
        </section> */}
        {/* <ArticlesGrid articles={articles} /> */}

        <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700  " />

        <Faq />

        <footer className="p-4  bg-[#FFFEF0] sm:p-6 dark:bg-gray-800">
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a href="/" className="hover:underline">
                Archive Buttons™
              </a>
              . All Rights Reserved.
            </span>

            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <Link className="text-gray-500 dark:hover:text-white" href="/privacy">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link className="text-gray-500 dark:hover:text-white" href="/blog">
                blog
              </Link>
              <span>|</span>
              <p className="text-gray-500 dark:hover:text-white mr-24">
                contact: archivebuttons@gmail.com
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
