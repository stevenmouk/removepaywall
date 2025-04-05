import { parse } from "node-html-parser";
import UserAgent from "user-agents";

const defaultHTML = `
    <!DOCTYPE html>
    <html>
      <h1>Article Not Found.</h1>
    </body>
    </html>`;

export default async function handler(req, res) {
  const { q } = req.query;

  res.setHeader("Content-Type", "text/html");
  // Cache for 30 minutes
  /* res.setHeader('Cache-Control', 'public, max-age=1800, stale-while-revalidate=59'); */

  if (!q) {
    res.status(404).send(defaultHTML);
    return;
  }

  const randomUA = new UserAgent().toString();
  try {
    const url = `https://archive.is/newest/${q}`;

    const response = await fetch(url, {
      method: "GET",
      redirect: "follow",
      headers: {
        "User-Agent": randomUA,
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        Referer: "https://archive.is/",
      },
    });

    if (!response.ok) {
      res.status(200).send(defaultHTML);
      return;
    }

    const text = await response.text();
    const root = parse(text);

    let selector = root.querySelector("head");
    if (selector) selector.remove();

    root.querySelector("#HEADER").remove();
    root.querySelector("#hashtags").remove();

    let clean = root.outerHTML;

    clean = clean.replaceAll('src="', 'src="https://archive.is');

    res.status(200).send(clean);
    return;
  } catch (e) {
    console.log(e);
    res.status(500).send(defaultHTML);
    return;
  }
}
