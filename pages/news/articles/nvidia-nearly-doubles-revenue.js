import Nav from "../../../components/newscomp/top/nav";
import Footer from "../../../components/newscomp/bot/footer";
import Header from "../../../components/newscomp/main/article/header";

import Script from "next/script";

import SeoHead from "../../../utils/seoHead";

var pageData = {
  title: "Nvidia nearly doubles revenue as AI chip demand remains strong",
  blog_url: "https:/archivebuttons.com/news/articles/nvidia-nearly-doubles-revenue",
  img_alt: "Nvidia company",
  des: "Nvidia reports 94% revenue growth driven by AI demand, with its Blackwell chips exceeding expectations despite earlier challenges. Data center sales soar as tech giants invest heavily in AI infrastructure.",
  twitter_des:
    "Nvidia reports 94% revenue growth driven by AI demand, with its Blackwell chips exceeding expectations despite earlier challenges. Data center sales soar as tech giants invest heavily in AI infrastructure.",
  twitter_tittle: "Nvidia nearly doubles revenue as AI chip demand remains strong",
  header_title: "Nvidia nearly doubles revenue as AI chip demand remains strong",
  page_date: "Nov 23, 2024",
  page_first_p: `Nvidia reported strong revenue growth for the quarter ending in October, driven by intense demand for the technology powering the artificial intelligence boom. The company's latest generation of chips, known as Blackwell, were described as being in "great shape" despite earlier production and technical challenges.`,

  figure_author: "FMT",
  figure_author_url:
    "https://www.freemalaysiatoday.com/category/business/2024/09/04/nvidia-gets-doj-subpoena-in-escalating-antitrust-probe/",
  figure_license: "CC BY-SA 4.0",
  figure_license_url: "https://creativecommons.org/licenses/by/4.0/",
  page_image_src_rel: "/images/nvidia.webp",
  img_url_full: "https://archivebuttons/images/nvidia.webp",
  figure_p: "Nvidia nearly doubles revenue as AI chip demand remains strong",
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
              Revenue for the quarter surged 94% compared to the same period last year, reaching
              $35.1 billion. While this marked a slower growth rate than the prior quarter, it
              surpassed Wall Street estimates of $33.25 billion. Nvidia’s revenue forecast for the
              current quarter stands at $37.5 billion, in line with analysts’ expectations of $37
              billion. Despite these strong numbers, Nvidia's shares dipped 1.2% on Thursday,
              reflecting the high expectations tied to its rapid growth amid AI hype.
            </p>
            <div className="mt-[50px]"></div>
            <p className="mb-4 text-[black] last:mb-0">
              The Blackwell chips, launched earlier this year, have been under scrutiny for their
              potential impact on Nvidia’s short-term revenue. Reports of overheating issues in
              servers and earlier production delays raised concerns. However, CEO Jensen Huang
              stated that Blackwell chip sales this quarter have exceeded forecasts, with the
              company working closely with supply chain partners, including manufacturing giant
              TSMC, to ramp up production.
            </p>
            <div className="mt-[50px]"></div>
            <div className="mt-[50px]"></div>
            <p className="mb-4 last:mb-0 text-[black]">
              “Blackwell is in great shape,” Huang assured, noting that sales for the fiscal year
              have already surpassed Nvidia's earlier estimates of "several billion" dollars. The
              chips are in high demand from hyperscalers such as Microsoft, Google, and Meta, all
              racing to bring the new technology online in their data centers. Nvidia's data center
              revenue, which includes the Hopper chips that fueled the initial wave of AI adoption,
              jumped 112% year-over-year to $30.8 billion. Analysts anticipate this spending spree
              to continue through 2025 as tech giants invest billions in infrastructure for training
              and running AI models.
            </p>
            <div className="mt-[50px]"></div>
            <p className="mb-4 last:mb-0 text-[black]">
              With its shares up over 200% in 2024, Nvidia now has a market valuation of $3.6
              trillion, making it the most valuable publicly traded company in the world. Earlier
              this year, it accounted for nearly a quarter of the S&P 500’s gains, highlighting its
              outsized influence on the stock market. Gross margins were reported at 75%, meeting
              expectations, while adjusted net income hit $20 billion. Earnings per share came in at
              $0.78, exceeding forecasts. Analysts at Citi called the results "better than
              expected," projecting demand for Blackwell chips to outstrip supply well into fiscal
              2026.
            </p>
            <div className="mt-[50px]"></div>
            <p className="mb-4 last:mb-0 text-[black]">
              Nvidia's performance remains a bellwether for the broader tech sector, as major
              companies continue to pour resources into artificial intelligence development and
              adoption.
            </p>{" "}
            <div className="mt-[150px]"></div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
