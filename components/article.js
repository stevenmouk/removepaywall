import React from "react";

export default function Article({ post }) {
  return (
    <a
      href={`/blog/${post.slug}`}
      className="articleblock2 w-inline-block snipcss0-0-0-1 snipcss-a3trB "
    >
      <div
        style={{
          backgroundImage: `url("${post.frontmatter.cover_image}")`,
        }}
        className="articleimagethumbnail snipcss0-1-1-2"
      ></div>
      <div className="article_textcontent snipcss0-1-1-3">
        <div className="labeltag small lagoon snipcss0-2-3-4">Culture</div>
        <h3 className="gtype_headline5 link snipcss0-2-3-5">{post.frontmatter.title}</h3>
        <div className="guideblock_datetimebox snipcss0-2-3-6">
          <div className="snipcss0-3-6-7">
            <div className="gtype_paragraph3 snipcss0-4-7-8">{post.frontmatter.date}</div>
          </div>
          <div className="w-condition-invisible snipcss0-3-6-9">
            <div className="gtype_paragraph3 w-dyn-bind-empty snipcss0-4-9-10"></div>
          </div>
          {/* <div className="spacer8 snipcss0-3-6-11"></div>
          <div className="spacer8 snipcss0-3-6-12"></div> */}
          {/* <div className="gtype_paragraph3 snipcss0-3-6-13">6 min read</div> */}
          <img
            src="https://assets-global.website-files.com/62aa06be7dc1037eb83584be/635ad73ad93852bcf5e25c36_24.svg"
            loading="lazy"
            alt="Arrow"
            className="image-123 snipcss0-3-6-14"
          />
        </div>
      </div>
      <div className="spacer8 snipcss0-1-1-15"></div>
    </a>
  );
}
