import Nav from "../../../components/newscomp/top/nav";
import Footer from "../../../components/newscomp/bot/footer";
import Header from "../../../components/newscomp/main/article/header";

import Script from "next/script";

import SeoHead from "../../../utils/seoHead";

var pageData = {
  title: "Hizbollah chief vows to implement ceasefire with Israel in group’s heartland",
  blog_url:
    "https:/archivebuttons.com/news/articles/hizbollah-chief-vows-to-implement-ceasefire-with-Israel",
  img_alt: "Hizbollah’s leader Naim Qassem",
  des: "Hizbollah endorses a ceasefire with Israel, allowing Lebanon's army to deploy in the south. Amid ongoing tensions and recent strikes, displaced residents begin returning to the war-torn region.",
  twitter_des:
    "Hizbollah endorses a ceasefire with Israel, allowing Lebanon's army to deploy in the south. Amid ongoing tensions and recent strikes, displaced residents begin returning to the war-torn region.",
  twitter_tittle: "Hizbollah chief vows to implement ceasefire with Israel in group’s heartland",
  header_title: "Hizbollah chief vows to implement ceasefire with Israel in group’s heartland",
  page_date: "Nov 30, 2024",
  page_first_p: `Hizbollah’s deputy leader Naim Qassem has expressed support for a key provision of the ceasefire agreement with Israel, which calls for deploying Lebanon’s military to the country’s southern region, a stronghold of the group.`,

  figure_author: "FMT",
  figure_author_url:
    "https://www.freemalaysiatoday.com/category/world/2024/10/30/new-hezbollah-leader-says-ceasefire-with-israel-possible-under-suitable-terms/",
  figure_license: "CC BY-SA 4.0",
  figure_license_url: "https://creativecommons.org/licenses/by/4.0/",
  page_image_src_rel: "/images/naim.webp",
  img_url_full: "https://archivebuttons.com/images/naim.webp",
  figure_p: "Hizbollah’s leader Naim Qassem",
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
              In his first address since the US-mediated truce took effect on Wednesday, Qassem
              emphasized Hizbollah’s adherence to the agreement, framing it not as a new arrangement
              but as the implementation of an existing UN resolution stemming from the 2006 war.
              “This agreement ensures the Israeli army’s withdrawal from all occupied areas and the
              deployment of the Lebanese army south of the Litani River,” Qassem stated. He added
              that Hizbollah and the national military would closely collaborate to enforce the
              ceasefire’s provisions.
            </p>
            <div className="mt-[50px]"></div>
            <p className="mb-4 text-[black] last:mb-0">
              Despite declaring victory after the ceasefire, Hizbollah faces significant losses,
              with much of southern Lebanon devastated by intense fighting. The group has suffered
              substantial damage to its weapons and infrastructure, along with the loss of several
              leaders. Qassem proclaimed, “This is a major victory, surpassing the one in July 2006,
              given the prolonged battle, the intensity of the conflict, the sacrifices made, and
              the widespread hostility supported by American and Western powers.”
            </p>
            <div className="mt-[50px]"></div>
            <div className="mt-[50px]"></div>
            <p className="mb-4 last:mb-0 text-[black]">
              Hizbollah’s involvement in the conflict began following Hamas’s October 7, 2023,
              attack on Israel, leading to escalating cross-border exchanges that erupted into a
              full-scale war two months ago. The fighting has claimed nearly 4,000 lives, including
              almost 1,000 women and children, according to Lebanon’s health ministry. Over 1
              million people have been displaced, with the majority uprooted in the last two months.
              Meanwhile, around 140 Israelis have died, and 60,000 residents from northern Israel
              have been evacuated.
            </p>
            <div className="mt-[50px]"></div>
            <p className="mb-4 last:mb-0 text-[black]">
              Displaced residents have started returning to southern Lebanon following the truce.
              However, Israel has warned against entering 60 villages and their surrounding areas,
              cautioning that doing so could be dangerous. On Friday, Israel’s military reported
              targeting a Hizbollah mobile missile platform and warned it would act against threats
              violating the ceasefire. Recent strikes included an air raid in the Sidon district and
              a drone attack on Taybeh, both attributed to Hizbollah targets. Israel has declined to
              comment on these incidents.
            </p>
            <div className="mt-[50px]"></div>
            <p className="mb-4 last:mb-0 text-[black]">
              Lebanon’s army has condemned multiple Israeli strikes, while UN peacekeepers have
              reported Israeli fire on border villages and continued drone activity over southern
              Lebanon. The US and Israel have reiterated Israel’s right to enforce the ceasefire,
              with Israeli Prime Minister Benjamin Netanyahu affirming the country’s “freedom of
              military action.” Israeli authorities have also pledged to prevent Hizbollah from
              regaining a foothold near the border.
            </p>
            <div className="mt-[50px]"></div>
            <p className="mb-4 last:mb-0 text-[black]">
              Since the ceasefire, Lebanon’s army has established a presence in the south, setting
              up checkpoints and overseeing the return of residents. However, Hizbollah’s civilian
              officials and social services have also resumed activities in the region, underscoring
              the challenge of dislodging the group from its strongholds where it retains
              substantial support. The village of Khiam, a key battleground during the conflict,
              remains a flashpoint. Reports indicate Israeli forces have targeted the area multiple
              times, including firing on a funeral procession. Lebanon’s NNA reported that four
              Israeli tanks entered a neighborhood in Khiam, while Israel’s military claimed it was
              acting to deter individuals in the area, adding that no arrests were made.
            </p>{" "}
            <div className="mt-[150px]"></div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
