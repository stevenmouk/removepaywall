import { parse } from "node-html-parser";

const defaultHTML = `
  <!DOCTYPE html>
  <html>
    <body>
      <h1>Article Not Found.</h1>
    </body>
  </html>`;

export default async function handler(req, res) {
  const { q } = req.query;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);

  res.setHeader("Content-Type", "text/html");

  if (!q) {
    res.status(200).send(defaultHTML);
    return;
  }

  try {
    const url = `https://archive.is/newest/${q}`;

    const response = await fetch(url, {
      method: "GET",
      signal: controller.signal,
      redirect: "follow",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        Referer: "https://archive.is/",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "same-origin",
      },
    });

    clearTimeout(timeout);

    if (!response.ok) {
      res.status(200).send(defaultHTML);
      return;
    }

    const text = await response.text();
    const root = parse(text);

    // Remove all <header> elements
    let selector = root.querySelector("header");

    if (selector) selector.remove();

    // Remove the element with id="Header"
    root.querySelectorAll("#HEADER").forEach((el) => el.remove());

    // Send the entire modified HTML
    res.status(200).send(root.toString());
  } catch (e) {
    console.error("Error fetching/parsing:", e);
    res.status(200).send(defaultHTML);
  }
}
