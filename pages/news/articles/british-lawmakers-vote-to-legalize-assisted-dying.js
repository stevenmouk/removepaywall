import Nav from "../../../components/newscomp/top/nav";
import Footer from "../../../components/newscomp/bot/footer";
import Header from "../../../components/newscomp/main/article/header";

import Script from "next/script";

import SeoHead from "../../../utils/seoHead";

var pageData = {
  title: "British Lawmakers Vote to Legalize Assisted Dying",
  blog_url:
    "https:/archivebuttons.com/news/articles/british-lawmakers-vote-to-legalize-assisted-dying",
  img_alt: "Assisted dying protest",
  des: "UK lawmakers vote to legalize assisted dying for terminally ill patients under strict conditions, marking a pivotal step in one of Britain’s most debated social changes",
  twitter_des:
    "UK lawmakers vote to legalize assisted dying for terminally ill patients under strict conditions, marking a pivotal step in one of Britain’s most debated social changes",
  twitter_tittle: "British Lawmakers Vote to Legalize Assisted Dying",
  header_title: "British Lawmakers Vote to Legalize Assisted Dying",
  page_date: "Nov 29, 2024",
  page_first_p: `In a pivotal decision on Friday, British lawmakers voted to legalize assisted suicide for certain terminally ill patients, subject to stringent safeguards. This marks a potentially transformative shift in the country's approach to end-of-life care.`,

  figure_author: "Flicker",
  figure_author_url: "https://www.flickr.com/photos/dignityindying/21483835236/",
  figure_license: "CC BY-SA 2.0",
  figure_license_url: "https://creativecommons.org/licenses/by/2.0/",
  page_image_src_rel: "/images/death.webp",
  img_url_full: "https://archivebuttons.com/images/death.webp",
  figure_p: "British Lawmakers Vote to Legalize Assisted Dying",
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
              Protesters gathered outside the iconic Big Ben and the Houses of Parliament, holding
              placards with messages like "Let us choose" and "Support Assisted Dying." Inside,
              Members of Parliament (MPs) engaged in a five-hour debate before voting 330 to 275 in
              favor of the proposed law. While this vote is not the final step, as the legislation
              will undergo further scrutiny and possible amendments in parliamentary committees, it
              represents a significant milestone. Some have likened it to Britain’s historic
              legalization of abortion in 1967 and the abolition of the death penalty in 1969.
            </p>
            <div className="mt-[50px]"></div>
            <p className="mb-4 text-[black] last:mb-0">
              If enacted, the law would permit doctors in England and Wales to assist terminally ill
              adults with less than six months to live in ending their lives. Such assistance would
              require approval from two doctors and a judge, and the patient would need to
              self-administer the prescribed medication. Assisted dying is already legal in several
              countries, including Canada, New Zealand, and parts of Europe, as well as in 10 U.S.
              states and Washington, D.C. The proposal in Britain has sparked intense and often
              emotional public debate, crossing political lines and raising ethical concerns.
            </p>
            <div className="mt-[50px]"></div>
            <div className="mt-[50px]"></div>
            <p className="mb-4 last:mb-0 text-[black]">
              The bill, introduced by Labour MP Kim Leadbeater, focuses on a tightly defined group
              of individuals. Applicants must be over 18, have a terminal illness, and meet strict
              procedural safeguards. Despite the divisive nature of the issue, MPs were allowed to
              vote according to their conscience, making the outcome uncertain until the last
              moment.
            </p>
            <div className="mt-[50px]"></div>
            <p className="mb-4 last:mb-0 text-[black]">
              Supporters of the bill argue it offers a compassionate solution for those enduring
              severe suffering in their final months. Opponents, however, warn of potential risks to
              vulnerable groups, such as the elderly, disabled, or those with complex medical needs,
              who they fear might feel pressured to end their lives prematurely. Ms. Leadbeater
              urged her colleagues to confront "the brutal and cruel reality of the status quo" and
              to consider the plight of families grappling with existing laws. Under current
              regulations, assisting a loved one in dying is a criminal offense in Britain. This
              forces terminally ill individuals to travel abroad, often alone, to countries like
              Switzerland, where such practices are legal.
            </p>
            <div className="mt-[50px]"></div>
            <p className="mb-4 last:mb-0 text-[black]">
              Advocates of the bill highlighted the grim reality of some end-of-life experiences.
              Conservative MP Kit Malthouse described the suffering endured by many, calling it
              “misery, torture, and degradation.” He added, “There is no compassion or beauty in
              that—only profound human suffering.” Conversely, Labour MP Meg Hillier warned that the
              legislation could fundamentally alter the relationship between the state, its
              citizens, and medical professionals. “This is crossing a Rubicon,” she argued.
            </p>
            <div className="mt-[50px]"></div>
            <p className="mb-4 last:mb-0 text-[black]">
              Faith leaders and prominent politicians, including Justice Secretary Shabana Mahmood
              and Health Secretary Wes Streeting, have voiced their opposition. Mr. Streeting raised
              concerns about the financial burden on the National Health Service (NHS) and uneven
              access to palliative care, which could leave some patients feeling they have no
              alternative. Despite these objections, public sentiment appears to favor assisted
              dying. A recent survey showed that 65% of Britons support the measure, with just 13%
              opposed.
            </p>{" "}
            <div className="mt-[150px]"></div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
