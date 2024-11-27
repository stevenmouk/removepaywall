import Nav from "../../../components/newscomp/top/nav";
import Footer from "../../../components/newscomp/bot/footer";
import Header from "../../../components/newscomp/main/article/header";

import Script from "next/script";

import SeoHead from "../../../utils/seoHead";

var pageData = {
  title: "North Korean casualties in Storm Shadow strike on Kursk, says Kyiv",
  blog_url:
    "https:/archivebuttons.com/news/articles/north-korean-casualties-in-storm-shadow-strike",
  img_alt: "North Koreans Training",
  des: "Ukraine targets North Korean troops in Russia's Kursk region with Storm Shadow missiles, injuring a general and escalating tensions as Pyongyang provides military support to Moscow.",
  twitter_des:
    "Ukraine targets North Korean troops in Russia's Kursk region with Storm Shadow missiles, injuring a general and escalating tensions as Pyongyang provides military support to Moscow.",
  twitter_tittle: "North Korean casualties in Storm Shadow strike on Kursk, says Kyiv",
  header_title: "North Korean casualties in Storm Shadow strike on Kursk, says Kyiv",
  page_date: "Nov 27, 2024",
  page_first_p: `Ukraine struck a Russian command center in the Kursk region last week with British-supplied Storm Shadow missiles, injuring a North Korean general and killing several Pyongyang-sent officers, according to Ukrainian officials. The attack, targeting the town of Marino, was part of several strikes aimed at North Korean personnel in the region, using various weapons. Ukrainian forces are actively hunting additional positions where North Koreans are deployed, though their locations are scattered.`,

  figure_author: "FMT",
  figure_author_url:
    "https://www.freemalaysiatoday.com/category/world/2024/11/20/n-korean-troops-join-ukraine-war-as-part-of-russian-units/",
  figure_license: "CC BY 4.0",
  figure_license_url: "https://creativecommons.org/licenses/by/4.0/",
  page_image_src_rel: "/images/north_korea.webp",
  img_url_full: "https://archivebuttons.com/images/north_korea.webp",
  figure_p: "North Korean casualties in Storm Shadow strike on Kursk, says Kyiv",
};

export default function Home() {
  return (
    <>
      <SeoHead
        title={pageData.title}
        des={pageData.des}
        blogURL={pageData.blog_url}
        imgURL={pageData.img_url_full}
        imgAlt={pageData.img_alt}
        twitterTittle={pageData.twitter_tittle}
        twitterDes={pageData.twitter_des}
      />

      <Nav />

      <Header
        title={pageData.title}
        date={pageData.page_date}
        firstP={pageData.page_first_p}
        imgSrc={pageData.page_image_src_rel}
        authorName={pageData.figure_author}
        authorUrl={pageData.figure_author_url}
        licenseName={pageData.figure_license}
        licenseUrl={pageData.figure_license_url}
        imgP={pageData.figure_p}
        articleCategory={"Technology"}
      />

      <section className="px-4 md:px-6 mb-[50px] ">
        <div className="w-full max-w-3xl mx-auto">
          <div className="text-[black] font-serif leading-relaxed md:text-md md:leading-relaxed">
            <p className="mb-4 text-[black] last:mb-0">
              While the general’s identity has not been revealed, Ukrainian intelligence reports
              that Colonel General Kim Jong Bok was sent to Russia to oversee North Korea’s “Storm
              Corps” special forces. It remains unclear if he was present during the Marino strike.
              The Wall Street Journal, citing Western sources, initially reported the injury of the
              North Korean general.
            </p>
            <div className="mt-[50px]"></div>
            <p className="mb-4 text-[black] last:mb-0">
              Last month, U.S. National Security Council spokesperson John Kirby warned that North
              Korean troops entering combat zones would be considered legitimate targets by Ukraine.
              The Institute for the Study of War, referencing South Korean intelligence, noted that
              North Korean units are likely training with Russian forces, preparing for combat in
              Kursk.
            </p>
            <div className="mt-[50px]"></div>
            <div className="mt-[50px]"></div>
            <p className="mb-4 last:mb-0 text-[black]">
              Reports indicate North Korea has stationed over 11,000 soldiers in the Kursk region,
              relieving Russian troops for front-line battles. However, these North Koreans remain
              in secondary positions, undergoing training for modern warfare. Ukrainian officials
              suggest they have yet to engage directly with Kyiv’s infantry but may soon serve as
              assault units.
            </p>
            <div className="mt-[50px]"></div>
            <p className="mb-4 last:mb-0 text-[black]">
              This escalation coincides with intensified fighting along the Kursk and Donetsk
              fronts, as both sides seek to consolidate gains before U.S. president-elect Donald
              Trump assumes office in January. Trump has pledged to swiftly end the war, raising
              concerns among Ukraine’s allies about possible concessions to Moscow.
            </p>
            <div className="mt-[50px]"></div>
            <p className="mb-4 last:mb-0 text-[black]">
              Ukraine’s attacks on North Korean forces began on November 4, shortly after their
              arrival in Kursk. Kyiv estimates that Kim Jong Un seeks to provide his soldiers with
              battlefield experience, even at the cost of losing up to 40% in combat. The remainder
              would return with valuable skills for North Korea’s military ambitions. In exchange
              for its support, Pyongyang receives military technology to advance its missile
              programs and financial aid from Moscow. Intelligence from Ukraine and its allies
              reveals that North Korea has supplied Russia with significant weapons, including
              howitzers, rocket systems, ballistic missiles, and millions of artillery shells. Many
              of these have been deployed to Kursk, with others stored for future use against
              Ukraine.
            </p>{" "}
            <div className="mt-[150px]"></div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
