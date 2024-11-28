import Nav from "../../components/newscomp/top/nav";

import Footer from "../../components/newscomp/bot/footer";

import Header from "../../components/newscomp/main/list/header";
import Articlelist from "../../components/newscomp/main/list/articleList";
import SeoHead from "../../utils/seoHead";

var listData = [
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
