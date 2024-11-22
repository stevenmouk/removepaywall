import Nav from "../../components/newscomp/top/nav";

import Footer from "../../components/newscomp/bot/footer";

import Header from "../../components/newscomp/main/list/header";
import Articlelist from "../../components/newscomp/main/list/articleList";
import SeoHead from "../../utils/seoHead";

var listData = [
  {
    title: "Nvidia nearly doubles revenue as AI chip demand remains strong",
    page_link_rel: "/news/articles/nvidia-nearly-doubles-revenue",
    img_link_rel: "/images/nvidia.webp",
    category: "Technology",
    date: " Nov 21, 2024",
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
