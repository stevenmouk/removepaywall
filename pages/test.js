import { Nunito } from "next/font/google";
import Head from "next/head";
import React from "react";

const inter = Nunito({ subsets: ["latin"] });

function handleInputChange(e) {
  e.preventDefault();
  // console.log(e.target.value);
  setInput(e.target.value.split("?")[0]);
}

function handleSubmit(e) {
  e.preventDefault();
  // console.log(e.target[0].value);
}

export default function test() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width; initial-scale=.5; maximum-scale=.5; minimum-scale=.5;"
        />
      </Head>

      <div className="fixed bg-[#FFFEF0]  h-fit w-full top-0">
        <div
          className={` text-rose-500 text-xl border-[2px] border-rose-500 px-3 py-3 rounded-full ${inter.className} w-fit mt-2`}
        >
          Archive Buttons
        </div>

        <form
          action="#"
          onSubmit={handleSubmit}
          className="w-full  flex items-center justify-center"
        >
          <div className="items-center w-[60%] mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
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
        </form>

        <div className=" w-full flex items-center justify-center">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group   bg-red-500  hover:text-white dark:text-white">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Archive.is
            </span>
          </button>
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group   bg-red-500  hover:text-white dark:text-white">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Archive.org
            </span>
          </button>
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group   bg-red-500  hover:text-white dark:text-white">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              12ft.io
            </span>
          </button>
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group   bg-red-500  hover:text-white dark:text-white">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Removepaywall.com
            </span>
          </button>
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group   bg-red-500  hover:text-white dark:text-white">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Google Cache
            </span>
          </button>
        </div>
      </div>
      <div className="w-[100%] h-[100vh] overflow-scroll flex  items-center justify-center">
        <iframe
          src="https://archive.today/newest/https://www.nytimes.com/2024/02/09/travel/icon-of-the-seas-cruise-royal-caribbean.html"
          width="100%"
          height="1000px"
          rel="nofollow"
        ></iframe>
      </div>
    </>
  );
}
