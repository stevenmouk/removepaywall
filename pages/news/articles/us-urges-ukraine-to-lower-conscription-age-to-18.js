import Nav from "../../../components/newscomp/top/nav";
import Footer from "../../../components/newscomp/bot/footer";
import Header from "../../../components/newscomp/main/article/header";

import Script from "next/script";

import SeoHead from "../../../utils/seoHead";

var pageData = {
  title: "US tells Ukraine to lower conscription age to 18 to stem manpower shortage",
  blog_url:
    "https:/archivebuttons.com/news/articles/us-urges-ukraine-to-lower-conscription-age-to-18",
  img_alt: "Ukraine Soldiers",
  des: "The U.S. pushes for Ukraine to lower its conscription age to 18, addressing troop shortages amid escalating conflict with Russia and new geopolitical challenges",
  twitter_des:
    "The U.S. pushes for Ukraine to lower its conscription age to 18, addressing troop shortages amid escalating conflict with Russia and new geopolitical challenges",
  twitter_tittle: "US tells Ukraine to lower conscription age to 18 to stem manpower shortage",
  header_title: "US tells Ukraine to lower conscription age to 18 to stem manpower shortage",
  page_date: "Nov 27, 2024",
  page_first_p: `The US is urging Ukraine to lower its military conscription age from 25 to 18 to address a critical shortage of troops. This manpower issue has weakened Ukraine's position on the battlefield and allowed Russia to achieve its fastest territorial gains in two years.`,

  figure_author: "Free Malaysia Today ",
  figure_author_url:
    "https://www.freemalaysiatoday.com/category/world/2024/11/28/us-tells-ukraine-to-lower-conscription-age-to-18/",
  figure_license: "CC BY 4.0",
  figure_license_url: "https://creativecommons.org/licenses/by/4.0/",
  page_image_src_rel: "/images/age18.webp",
  img_url_full: "https://archivebuttons.com/images/age18.webp",
  figure_p: "US tells Ukraine to lower conscription age to 18 to stem manpower shortage",
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
              A senior US official stated on Wednesday that Ukraine must act to bolster its forces,
              warning that current recruitment efforts are insufficient to replace battlefield
              losses or match Russia’s growing military strength. “The simple truth is Ukraine is
              not mobilizing or training enough soldiers,” the official emphasized. The request
              comes as the Biden administration works to deliver $7 billion in security aid to
              Ukraine before President-elect Donald Trump assumes office in January.
            </p>
            <div className="mt-[50px]"></div>
            <p className="mb-4 text-[black] last:mb-0">
              The US has encouraged Kyiv to reevaluate its recruitment policies, balancing
              demographic concerns with immediate military needs. Although Ukraine requires 160,000
              additional troops, US officials believe this figure is too low. However, Ukrainian
              leaders remain resistant to drafting younger citizens, citing demographic challenges.
              President Volodymyr Zelenskyy reassured parliament last week that there are no plans
              to lower the conscription age. Meanwhile, the Biden administration continues to
              approve Ukrainian requests for weapons but warns that equipment alone will not
              decisively alter the battlefield dynamics.
            </p>
            <div className="mt-[50px]"></div>
            <div className="mt-[50px]"></div>
            <p className="mb-4 last:mb-0 text-[black]">
              National Security Adviser Jake Sullivan reiterated this view, stressing that “manpower
              is the key issue” and calling on Ukraine to bolster its front-line forces. National
              Security Council spokesperson John Kirby added that the US is prepared to expand
              training efforts if Ukraine increases recruitment. The conflict has intensified in
              areas such as Kursk and southeastern Ukraine, as both sides strive to gain an
              advantage before Trump takes office. The president-elect has promised to end the war
              quickly, raising concerns among Ukraine’s allies that he might pressure Kyiv into
              accepting unfavorable terms.
            </p>
            <div className="mt-[50px]"></div>
            <p className="mb-4 last:mb-0 text-[black]">
              Trump recently appointed retired lieutenant general Keith Kellogg as his special envoy
              for Ukraine and Russia. Kellogg has proposed freezing the conflict and pushing for
              negotiations. Russia has recently made significant advances, particularly towards
              strategic cities in eastern and southeastern Ukraine, critical for the country’s
              defense. Moscow’s efforts have been bolstered by 11,000 North Korean soldiers deployed
              in the Kursk region, following Ukraine’s surprise August offensive.
            </p>
            <div className="mt-[50px]"></div>
            <p className="mb-4 last:mb-0 text-[black]">
              Ukrainian officials confirmed to the Financial Times that the North Korean troops are
              now positioned on Russia’s second line and are undergoing training in modern warfare.
              Despite these developments, Ukrainian Deputy Prime Minister Olha Stefanishyna
              dismissed the idea of lowering the draft age, urging the US to focus on equipping
              Ukraine with better weapons and training.
            </p>{" "}
            <div className="mt-[150px]"></div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
