import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { data } from "autoprefixer";
import { Nunito } from "next/font/google";

const inter = Nunito({ subsets: ["latin"] });

export default function Post({
  frontmatter: { title, meta_description, date, cover_image },
  slug,
  content,
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={meta_description} key="desc" />
      </Head>
      <header className="jsx-790343502 outer snipcss-WqKO4 ">
        <div className="jsx-1255742349 ">
          <div className="jsx-790343502 spaceApart">
            {/* <div className="jsx-1696933329 logoContainer"> */}
            <Link href="/" className="flex items-center">
              <div
                className={` text-[#FFFEF0] text-xl border-[2px] border-[#FFFEF0] px-3 py-3 rounded-full ${inter.className}`}
              >
                Archive Buttons
              </div>
            </Link>
            {/* </div> */}
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

      <div className="hero_container sedona snipcss-fRoNQ">
        <div className="hero_flexh_middle _1152">
          <div className="hero_box _564 center-tablet">
            <div className="guidesbackbox">
              <a href="/blog" className="link-block-12 w-inline-block">
                <Image
                  height="25"
                  width="25"
                  src="https://assets-global.website-files.com/62aa06be7dc1037eb83584be/635ae21c1f7b248734936d6f_Arrow24Light.svg"
                  loading="lazy"
                  alt="Arrow"
                  className="image-1246"
                />
                <div className="gtype_paragraph2 caps light_link">Homepage</div>
              </a>
            </div>
            <h1 className="gtype_display2 center-tablet light">{title}</h1>
            <div className="spacer8"></div>
            <div className="spacer8"></div>
            <div className="spacer8"></div>
            <div className="spacer8"></div>
            <div className="w-condition-invisible">
              <div className="w-dyn-list">
                <div className="w-dyn-empty">
                  <div>No items found.</div>
                </div>
              </div>
            </div>
            <div className="div-block-434 nopadding">
              <div>
                <div className="gtype_paragraph3 light">{date}</div>
              </div>
              <div className="w-condition-invisible">
                <div className="gtype_paragraph3 light w-dyn-bind-empty"></div>
              </div>
              <div className="spacer8"></div>
              <div className="spacer8"></div>
              {/* <div className="gtype_paragraph3 light">3 min read</div> */}
            </div>
          </div>
          <div className="hero_leftbox">
            <div
              style={{
                backgroundImage: `url(${cover_image})`,
              }}
              className="div-block-473-copy"
            ></div>
          </div>
        </div>
      </div>

      <main className="richtext_master w-richtext snipcss-N2OlC w-[100%] flex items-center justify-center bg-[#FFFEF0]">
        <div
          className="text-[#601124] w-[90%] md:w-[50%] mt-[5%] "
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        ></div>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("post"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join("post", slug + ".md"), "utf-8");

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
