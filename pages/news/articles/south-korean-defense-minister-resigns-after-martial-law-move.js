import Nav from "../../../components/newscomp/top/nav";
import Footer from "../../../components/newscomp/bot/footer";
import Header from "../../../components/newscomp/main/article/header";

import Script from "next/script";

import SeoHead from "../../../utils/seoHead";

var pageData = {
  title:
    "South Korean president accepts defense minister’s resignation amid backlash over martial law move",
  blog_url:
    "https:/archivebuttons.com/news/articles/south-korean-defense-minister-resigns-after-martial-law-move",
  img_alt:
    "Members of South Korea’s opposition Democratic Party protest against President Yoon Suk-yeol outside the national assembly in Seoul.",
  des: "South Korean President Yoon Suk Yeol faces backlash after declaring—and quickly retracting—martial law, leading to Defense Minister Kim Yong-hyun's resignation and calls for impeachment.",
  twitter_des:
    "South Korean President Yoon Suk Yeol faces backlash after declaring—and quickly retracting—martial law, leading to Defense Minister Kim Yong-hyun's resignation and calls for impeachment.",
  twitter_tittle:
    "South Korean president accepts defense minister’s resignation amid backlash over martial law move",
  header_title:
    "South Korean president accepts defense minister’s resignation amid backlash over martial law move",
  page_date: "Dec 4, 2024",
  page_first_p: `South Korean President Yoon Suk Yeol has accepted the resignation of Defense Minister Kim Yong-hyun following intense backlash over Yoon’s brief declaration of martial law. The defense ministry announced that Choi Byung-hyuk, South Korea’s ambassador to Saudi Arabia, has been nominated as Kim's replacement.`,

  figure_author: "FMT",
  figure_author_url:
    "https://www.freemalaysiatoday.com/category/world/2024/12/04/south-korean-president-faces-impeachment-calls-after-martial-law-debacle/",
  figure_license: "CC BY-SA 4.0",
  figure_license_url: "https://creativecommons.org/licenses/by/4.0/",
  page_image_src_rel: "/images/korea_south.webp",
  img_url_full: "https://archivebuttons.com/images/korea_south.webp",
  figure_p:
    "Members of South Korea’s opposition Democratic Party protest against President Yoon Suk-yeol outside the national assembly in Seoul.",
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
              Kim resigned on Wednesday shortly after the opposition Democratic Party filed a motion
              to impeach him. Members of Yoon's own People Power Party had also pushed for his
              dismissal due to his role in recommending martial law. Taking responsibility for the
              controversial decision, Kim told reporters in a text message, “All soldiers who
              executed duties related to the emergency martial law acted under the minister’s
              orders, and I bear full responsibility.” He also expressed regret for “causing public
              concern and confusion.”
            </p>
            <div className="mt-[50px]"></div>
            <p className="mb-4 text-[black] last:mb-0">
              President Yoon is under mounting pressure to resign after declaring martial law—only
              to revoke it hours later. On Wednesday, six opposition parties introduced a bill to
              impeach Yoon, with lawmakers expected to vote on it late Friday or early Saturday.
              Meanwhile, the Democratic Party announced plans to pursue treason charges against the
              president. During a rally in Seoul’s Gwanghwamun Square on December 4, protesters
              carried banners condemning Yoon’s actions, including one that read, "We condemn Yoon
              Suk Yeol's illegal martial law."
            </p>
            <div className="mt-[50px]"></div>
            <div className="mt-[50px]"></div>
            <p className="mb-4 last:mb-0 text-[black]">
              The controversy stems from Yoon’s late-night martial law declaration on Tuesday, where
              he accused the opposition of collaborating with North Korea and engaging in anti-state
              activities. His claims were tied to the opposition’s move to impeach key prosecutors
              and reject a government budget proposal.
            </p>
            <div className="mt-[50px]"></div>
            <p className="mb-4 last:mb-0 text-[black]">
              Lawmakers overwhelmingly overturned Yoon’s decree just hours after it was announced,
              with 190 out of 300 parliament members voting against it. Yoon subsequently rescinded
              the martial law order in the early hours of Wednesday and withdrew the troops.
            </p>

            <div className="mt-[150px]"></div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
