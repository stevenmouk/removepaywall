import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const { q } = router.query;

  const [cleanHTML, setCleanHTML] = useState("");

  const getPageData = async (cleanURL) => {
    try {
      const req = await fetch(`https://archive.ph/newest/${cleanURL}`);

      if (req.status !== 200) {
        // Fixed here: Use 'req' instead of 'response'
        setCleanHTML("<h1>No Article Found</h1>");
        return;
      }
      const text = await req.text();

      const parser = new DOMParser();
      const root = parser.parseFromString(text, "text/html");

      root.querySelector("head")?.remove();
      root.querySelector("#HEADER")?.remove();
      root.querySelector("#hashtags")?.remove();

      // Optional: Grab only the body content if you don't want the whole doc
      let bodyContent = root.body.innerHTML;

      bodyContent = bodyContent.replaceAll('src="', 'src="https://archive.ph');

      setCleanHTML(bodyContent);
    } catch (err) {
      console.error("Failed to fetch and clean HTML:", err);
    }
  };

  useEffect(() => {
    if (q) {
      const cleanURL = q.trim().split("?")[0];
      getPageData(cleanURL);
    }
  }, [q]);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />
    </div>
  );
}
