import Nav from "../../components/newscomp/top/nav";

import Footer from "../../components/newscomp/bot/footer";

import Header from "../../components/newscomp/main/list/header";
import Articlelist from "../../components/newscomp/main/list/articleList";
import SeoHead from "../../utils/seoHead";

var listData = [
  {
    title:
      "South Korean president accepts defense minister’s resignation amid backlash over martial law move",
    page_link_rel: "/news/articles/south-korean-defense-minister-resigns-after-martial-law-move",
    img_link_rel: "/images/korea_south.webp",
    category: "Politics",
    date: "Dec 4, 2024",
  },
  {
    title: "Russia, Targeting Ukraine’s Grid, Moves to Cut Off Its Nuclear Plants",
    page_link_rel:
      "/news/articles/russia-targeting-ukraine-grid-moves-to-cut-off-Its-nuclear-plant",
    img_link_rel: "/images/drone.webp",
    category: "Politics",
    date: " Nov 30, 2024",
  },
  {
    title: "Hizbollah chief vows to implement ceasefire with Israel in group’s heartland",
    page_link_rel: "/news/articles/hizbollah-chief-vows-to-implement-ceasefire-with-Israel",
    img_link_rel: "/images/naim.webp",
    category: "Politics",
    date: " Nov 30, 2024",
  },
  {
    title: "British Lawmakers Vote to Legalize Assisted Dying",
    page_link_rel: "/news/articles/british-lawmakers-vote-to-legalize-assisted-dying",
    img_link_rel: "/images/death.webp",
    category: "Politics",
    date: " Nov 29, 2024",
  },
  {
    title: "US tells Ukraine to lower conscription age to 18 to stem manpower shortage",
    page_link_rel: "/news/articles/us-urges-ukraine-to-lower-conscription-age-to-18",
    img_link_rel: "/images/age18.webp",
    category: "Politics",
    date: " Nov 27, 2024",
  },
  {
    title: "North Korean casualties in Storm Shadow strike on Kursk, says Kyiv",
    page_link_rel: "/news/articles/north-korean-casualties-in-storm-shadow-strike",
    img_link_rel: "/images/north_korea.webp",
    category: "Politics",
    date: " Nov 27, 2024",
  },
  {
    title: "Russia recruits Yemeni mercenaries to fight in Ukraine",
    page_link_rel: "/news/articles/russia-recruits-yemeni-mercenaries-to-fight-in-ukraine",
    img_link_rel: "/images/yemini_mercenaries.webp",
    category: "Politics",
    date: " Nov 24, 2024",
  },
  {
    title: "Nvidia nearly doubles revenue as AI chip demand remains strong",
    page_link_rel: "/news/articles/nvidia-nearly-doubles-revenue",
    img_link_rel: "/images/nvidia.webp",
    category: "Technology",
    date: " Nov 21, 2024",
  },
  {
    title: "EU's top central bankers warn economy at risk from political standstill",
    page_link_rel: "/news/articles/eu-top-central-bankers-warn-economy-at-risk",
    img_link_rel: "/images/galhau.webp",
    category: "Money",
    date: " Nov 22, 2024",
  },
];

export default function Home() {
  return (
    <>
      <SeoHead
        title={"Breaking News and Top Stories"}
        des={"See the latest stories on archive buttons"}
        blogURL={"https://archivebuttons/news"}
        imgURL={"https://archivebuttons.com"}
        imgAlt={"Breaking News and Top Stories"}
        twitterTittle={"Breaking News and Top Stories"}
        twitterDes={"See the latest stories on Archive Buttons.."}
      />

      <Nav />

      <Header title={"Latest News"} />
      <Articlelist listData={listData} />
      <Footer />
    </>
  );
}
