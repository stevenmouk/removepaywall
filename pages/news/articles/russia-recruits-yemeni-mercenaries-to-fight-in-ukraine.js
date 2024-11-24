import Nav from "../../../components/newscomp/top/nav";
import Footer from "../../../components/newscomp/bot/footer";
import Header from "../../../components/newscomp/main/article/header";

import Script from "next/script";

import SeoHead from "../../../utils/seoHead";

var pageData = {
  title: "Russia recruits Yemeni mercenaries to fight in Ukraine",
  blog_url:
    "https:/archivebuttons.com/news/articles/russia-recruits-yemeni-mercenaries-to-fight-in-ukraine",
  img_alt: "Yemini fighter in Ukraine",
  des: "How Russia is recruiting Yemeni fighters through Houthi networks, highlighting growing ties with Iran and escalating global tensions as untrained mercenaries face harsh conditions on Ukraine's front lines.",
  twitter_des:
    "How Russia is recruiting Yemeni fighters through Houthi networks, highlighting growing ties with Iran and escalating global tensions as untrained mercenaries face harsh conditions on Ukraine's front lines.",
  twitter_tittle: "Russia recruits Yemeni mercenaries to fight in Ukraine",
  header_title: "Russia recruits Yemeni mercenaries to fight in Ukraine",
  page_date: "Nov 24, 2024",
  page_first_p: `Russia has recruited hundreds of Yemeni men to fight in Ukraine, facilitated by a clandestine trafficking network that reflects deepening ties between Moscow and the Houthi rebel group.`,

  figure_author: "",
  figure_author_url: "",
  figure_license: "",
  figure_license_url: "",
  page_image_src_rel: "/images/yemini_mercenaries.webp",
  img_url_full: "https://archivebuttons.com/images/yemini_mercenaries.webp",
  figure_p:
    "A screen grab from a video shows Yemeni mercenaries in Ukraine in late September or early October",
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
              Yemeni recruits told the Financial Times they were promised lucrative jobs and even
              Russian citizenship. However, upon arrival in Russia—assisted by a Houthi-affiliated
              company—they were forcibly conscripted into the Russian army and sent to Ukraine's
              front lines. This influx of largely unwilling Yemeni fighters illustrates how Russia
              is increasingly enlisting foreign soldiers to avoid a full-scale mobilization as
              casualties rise. Alongside Yemenis, there are reports of mercenaries from Nepal,
              India, and approximately 12,000 North Korean troops in combat against Ukraine in the
              Kursk region.
            </p>
            <div className="mt-[50px]"></div>
            <p className="mb-4 text-[black] last:mb-0">
              The recruitment effort also highlights Russia’s growing partnership with Iran and
              allied militant groups in the Middle East. The Houthis, backed by Tehran, have
              previously disrupted global shipping in the Red Sea and are now forming deeper ties
              with Moscow amid escalating tensions with the West. US special envoy for Yemen, Tim
              Lenderking, confirmed active Russian engagement with the Houthis, including
              discussions about weapons transfers. He described these weapons, designed to enhance
              Houthi capabilities against Red Sea shipping, as "very alarming."
            </p>
            <div className="mt-[50px]"></div>
            <div className="mt-[50px]"></div>
            <p className="mb-4 last:mb-0 text-[black]">
              Maged Almadhaji of the Sana’a Center for Strategic Studies noted Russia’s interest in
              aligning with any Middle Eastern group hostile to the US. He said Houthi-organized
              recruitment of Yemeni fighters serves to strengthen ties with Moscow. Contracts for
              Yemeni recruits, reviewed by the Financial Times, were linked to a company founded by
              Abdulwali Abdo Hassan al-Jabri, a prominent Houthi politician. Registered as a tour
              operator in Oman, the company began recruitment efforts as early as July.
            </p>
            <div className="mt-[50px]"></div>
            <p className="mb-4 last:mb-0 text-[black]">
              Nabil, a Yemeni recruit, shared his ordeal with the FT. Promised a high-paying job in
              fields like security or engineering, he found himself on the front lines in Ukraine,
              ill-equipped and untrained. He described harsh conditions, including constant
              bombardments and no winter clothing, and recounted colleagues attempting suicide.
              Another recruit, Abdullah, revealed he was promised $10,000 upfront, a $2,000 monthly
              salary, and Russian citizenship. Instead, upon arriving in Moscow, he and others were
              coerced at gunpoint to sign enlistment contracts in Russian. After minimal training,
              they were sent to fight in Ukraine, where many of their group perished. Abdullah
              described the operation as human trafficking and a complete scam.
            </p>
            <div className="mt-[50px]"></div>
            <p className="mb-4 last:mb-0 text-[black]">
              Efforts to contact Al Jabri General Trading & Investment Co, the firm facilitating the
              recruitment, were unsuccessful. Al Jabri, a major general allied with the Houthis,
              remains a polarizing figure in Yemen's ongoing conflict. The Houthis have sent
              delegations to Moscow this year, meeting senior Russian officials such as Mikhail
              Bogdanov, the Kremlin’s Middle East envoy. US diplomats believe Russia provides
              targeting data for Houthi missile attacks and is exploring weapons sales, including
              advanced anti-ship missiles. Abdullah was one of 11 Yemenis recently repatriated to
              Yemen, thanks to the International Federation of Yemeni Migrants, which advocated for
              their release. However, hundreds of Yemeni recruits remain in Russia. Federation chair
              Ali Al-Subahi emphasized the humanitarian crisis, saying efforts are ongoing to rescue
              those trapped in the conflict.
            </p>{" "}
            <div className="mt-[150px]"></div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
