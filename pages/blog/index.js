import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Article from "../../components/article";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { sortByDate } from "../../utils";
import { Nunito } from "next/font/google";

const inter = Nunito({ subsets: ["latin"] });
export default function blog({ posts }) {
  return (
    <div>
      <header className="jsx-790343502 outer snipcss-WqKO4 ">
        <div className="jsx-1255742349 ">
          <div className="jsx-790343502 spaceApart">
            <div className="jsx-1696933329 logoContainer">
              <Link href="/" className="flex items-center">
                <div
                  className={` text-[#FFFEF0] text-xl border-[2px] border-[#FFFEF0] px-3 py-3 rounded-full ${inter.className}`}
                >
                  Archive Buttons
                </div>
              </Link>
            </div>
            <div className="jsx-790343502 style-PzpEU" id="style-PzpEU">
              <div className="jsx-1085858799 ">
                {/* <a href="https://www.going.com/how-it-works" className="jsx-2293331237 dark">
                  <span className="jsx-3506182940 label">How It Works</span>
                </a>
                <a href="https://www.going.com/on-the-fly" className="jsx-2293331237 dark">
                  <span className="jsx-3506182940 label">On The Fly</span>
                </a>
                <a href="https://www.going.com/login?returnTo=/deals" className="jsx-2293331237 dark">
                  <span className="jsx-3506182940 label">Login</span>
                </a> */}
                <div className="jsx-790343502 desktopSignupContainer">
                  <a
                    aria-label="Sign Up"
                    href="/"
                    className="jsx-250574491 jsx-2470624046 jsx-1976409517 jsx-2925995997 button large primary icon-right "
                  >
                    <span className="jsx-250574491 jsx-2470624046 jsx-1976409517 jsx-2925995997 label">
                      <span className="jsx-1705327900 label">Home</span>
                    </span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 12L20 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="square"
                      ></path>
                      <path
                        d="M20 12C15.5817 12 12 8.41828 12 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="square"
                      ></path>
                      <path
                        d="M20 12C15.5817 12 12 15.5817 12 20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="square"
                      ></path>
                    </svg>
                    <span className="jsx-250574491 jsx-2470624046 jsx-1976409517 jsx-2925995997 focusInnerRing"></span>
                  </a>
                </div>
              </div>
              {/* <div className="jsx-2128342494">
                <button
                  aria-label="navigation"
                  aria-controls="nav-dropdown-menu"
                  aria-expanded="false"
                  aria-haspopup="menu"
                  id="header-dropdown-trigger-menu"
                  type="button"
                  className="jsx-250574491 jsx-2470624046 jsx-1976409517 jsx-2925995997 button small tertiaryVariantHeaderDark icon-only "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    aria-hidden="true"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      strokeWidth="1.5"
                      d="M4.276 5.86h15.448M4.276 12h15.448M4.276 18.14h15.448"
                    ></path>
                  </svg>
                  <span className="jsx-250574491 jsx-2470624046 jsx-1976409517 jsx-2925995997 focusInnerRing"></span>
                </button>
                <div bannerscount="0" className="jsx-3165361049 "></div>
              </div> */}
            </div>
          </div>
        </div>
      </header>

      <div className="hero_container small sedona snipcss-31gPQ md:p-0 px-5">
        <div className="hero_textbox _1152">
          <h1 className="gtype_display2 light md:text-[80px] text-[50px]">Paywall Removers Blog</h1>
          <p className="gtype_paragraph2 light">
            You know we’re all about removing paywalls. Follow our blog where we post great ways to
            remove paywalls and get free news.
          </p>
          <div className="divider light"></div>
        </div>
        <div className="spacer8"></div>
        <div className="spacer8"></div>
        <div className="collection-list-wrapper-16 w-dyn-list">
          <div role="list" className="collection-list-12 w-dyn-items">
            <div role="listitem" className="collection-item-15 w-dyn-item">
              <a
                style={{
                  backgroundImage: `url(${posts[0].frontmatter.cover_image})`,
                }}
                href={`/blog/${posts[0].slug}`}
                className="articleblock_featuredlarge w-inline-block"
              >
                <div className="articleblock_wrapper featured">
                  <div className="articleblock2">
                    <div className="article_textcontent">
                      <div className="labeltag small">Announcements</div>
                      <div className="spacer8"></div>
                      <h2 className="gtype_headline3 link">{posts[0].frontmatter.title}</h2>
                      <div className="guideblock_datetimebox">
                        <div className="w-condition-invisible">
                          <div className="gtype_paragraph3">{posts[0].frontmatter.date}</div>
                        </div>
                        <div>
                          <div className="gtype_paragraph3">{posts[0].frontmatter.date}</div>
                        </div>
                        <img
                          src="https://assets-global.website-files.com/62aa06be7dc1037eb83584be/635ad73ad93852bcf5e25c36_24.svg"
                          loading="lazy"
                          alt="Arrow"
                          className="image-123"
                        />
                      </div>
                    </div>
                    <div className="spacer8"></div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-full flex items-center justify-center bg-[#FFFEF0]">
        <div className="flex flex-wrap justify-between w-[80%] mt-[5%]">
          {posts &&
            posts.slice(1).map((post) => {
              return (
                <div className="md:w-1/2 mx-auto p-2" key={post.frontmatter.title}>
                  <Article post={post} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("post"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(path.join("post", filename), "utf-8");

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
