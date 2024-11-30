import Nav from "../../../components/newscomp/top/nav";
import Footer from "../../../components/newscomp/bot/footer";
import Header from "../../../components/newscomp/main/article/header";

import Script from "next/script";

import SeoHead from "../../../utils/seoHead";

var pageData = {
  title: "Russia, Targeting Ukraine’s Grid, Moves to Cut Off Its Nuclear Plants",
  blog_url:
    "https:/archivebuttons.com/news/articles/russia-targeting-ukraine-grid-moves-to-cut-off-Its-nuclear-plant",
  img_alt:
    "A police forensic expert inspects fragments of a Shahed drone, after a Russian strike on residential neighbourhood.",
  des: "Russia targets substations tied to Ukraine's nuclear power plants, raising nuclear safety concerns. Ukraine responds with leadership changes amid intensifying energy grid attacks.",
  twitter_des:
    "Russia targets substations tied to Ukraine's nuclear power plants, raising nuclear safety concerns. Ukraine responds with leadership changes amid intensifying energy grid attacks.",
  twitter_tittle: "Russia, Targeting Ukraine’s Grid, Moves to Cut Off Its Nuclear Plants",
  header_title: "Russia, Targeting Ukraine’s Grid, Moves to Cut Off Its Nuclear Plants",
  page_date: "Nov 30, 2024",
  page_first_p: `Moscow has escalated its strikes on key electrical substations tied to nuclear power plants in an effort to disrupt Ukraine's power grid. At the same time, Ukraine has announced changes in its military leadership.`,

  figure_author: "FMT",
  figure_author_url:
    "https://www.freemalaysiatoday.com/category/world/2024/11/26/russia-strikes-ukraines-critical-infrastructure-in-wars-largest-drone-attack/",
  figure_license: "CC BY-SA 4.0",
  figure_license_url: "https://creativecommons.org/licenses/by/4.0/",
  page_image_src_rel: "/images/drone.webp",
  img_url_full: "https://archivebuttons.com/images/drone.webp",
  figure_p:
    "A police forensic expert inspects fragments of a Shahed drone, after a Russian strike on residential neighbourhood.",
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
              Russia targeted critical electricity substations connected to Ukraine’s nuclear power
              plants in its latest attack on the energy grid, the International Atomic Energy Agency
              (IAEA) reported Thursday. This marks the third such assault in about three months,
              raising concerns over the risk of a nuclear disaster. The IAEA stated that Russian
              strikes damaged electrical substations crucial for transmitting and receiving power at
              Ukraine’s three operational nuclear plants. Although no reactors sustained direct
              damage, one plant was disconnected from the grid, and all reactors reduced output as a
              safety measure.
            </p>
            <div className="mt-[50px]"></div>
            <p className="mb-4 text-[black] last:mb-0">
              “Ukraine’s energy infrastructure is extremely fragile and vulnerable, putting nuclear
              safety at great risk,” said Rafael Mariano Grossi, the head of the IAEA, in a
              statement released late Thursday. Since the war’s outset, Russia has focused on
              dismantling Ukraine’s energy infrastructure to destabilize the grid and undermine
              civilian morale. These attacks, increasingly frequent since spring, have intensified
              the pressure on a country already struggling to hold its ground on the battlefield. On
              Friday, President Volodymyr Zelensky announced the replacement of Lt. Gen. Oleksandr
              Pavliuk as commander of Ukraine’s ground forces, appointing Maj. Gen. Mykhailo Drapaty
              to the role. General Pavliuk, who had served since February, oversaw a period during
              which Ukraine lost hundreds of square miles of territory.
            </p>
            <div className="mt-[50px]"></div>
            <div className="mt-[50px]"></div>
            <p className="mb-4 last:mb-0 text-[black]">
              “The Ukrainian army needs internal changes to achieve our state’s goals in full,”
              Zelensky said, emphasizing the importance of improving combat capabilities and
              training. He highlighted Drapaty’s role in defending the eastern Kharkiv region during
              a Russian spring offensive that failed to secure significant gains. Earlier in the
              war, Russian strikes primarily targeted thermal and hydroelectric plants and their
              transmission systems, causing widespread blackouts. However, Ukraine’s heavy reliance
              on nuclear power—which had largely been spared—helped prevent a total grid collapse.
            </p>
            <div className="mt-[50px]"></div>
            <p className="mb-4 last:mb-0 text-[black]">
              More recently, Russia has shifted its focus to substations tied to nuclear plants, a
              tactic aimed at dismantling Ukraine’s last major power generation capacity. These
              attacks, which began in late August, threaten the reactors’ dual role: providing
              electricity nationwide and powering the cooling systems essential for nuclear safety.
              Greenpeace warned that losing the cooling function could lead to a meltdown and
              widespread radioactive contamination. “Loss of cooling function at one or more
              reactors would inevitably lead to nuclear fuel melt and large-scale radiological
              release,” the group said in a statement shared with The New York Times. UN experts
              issued a similar warning earlier this week, stating that further damage to the grid
              could cause blackouts, increasing the risk of nuclear plants losing access to safety
              systems. Such a scenario could result in a serious nuclear disaster.
            </p>
            <div className="mt-[50px]"></div>
            <p className="mb-4 last:mb-0 text-[black]">
              Ukrainian officials have been vocal about this emerging threat. Addressing the UN
              General Assembly in September, Zelensky accused Russia of planning catastrophic
              strikes on nuclear plants and related infrastructure to disconnect them from the power
              grid. To counter these risks, Ukraine and the IAEA agreed in September to deploy
              monitoring missions to substations linked to nuclear plants. Inspections conducted at
              seven sites this fall documented extensive damage, with the IAEA concluding that the
              grid’s ability to reliably power nuclear plants had been “significantly reduced.”
              Ukrainian authorities have called for more frequent or permanent IAEA inspections,
              hoping that the agency’s presence might deter further strikes. Greenpeace noted that
              Russia’s global nuclear ambitions rely on IAEA support, making it unlikely to
              jeopardize inspectors’ safety. So far, however, only one monitoring mission has
              occurred, with no follow-up visits announced.
            </p>
            <div className="mt-[50px]"></div>
            <p className="mb-4 last:mb-0 text-[black]">
              “The use of these cluster elements significantly complicates the work of our rescuers
              and power engineers in mitigating the damage, marking yet another vile escalation in
              Russia’s terrorist tactics,” Zelensky said Thursday. Despite the dangers, energy
              workers remain on-site during attacks to keep critical systems running. Oleksandr, a
              production manager at a thermal power plant, described a harrowing experience during a
              recent strike. “There were two of us working at the station’s central control point,”
              Oleksandr said, withholding his surname for security reasons. “I managed to shout ‘Get
              down!’ to my colleague and instantly everything went dark: Dust rose, plaster flew.
              The explosion occurred in the turbine area 150 meters away just as we were falling to
              the floor.”
            </p>{" "}
            <div className="mt-[150px]"></div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
