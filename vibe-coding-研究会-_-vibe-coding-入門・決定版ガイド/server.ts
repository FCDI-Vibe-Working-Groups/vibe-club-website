import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import Parser from "rss-parser";

async function startServer() {
  const app = express();
  const PORT = 3000;
  const parser = new Parser();

  // Cache news for 1 hour
  let newsCache: any[] = [];
  let lastFetch = 0;

  app.get("/api/news", async (req, res) => {
    const now = Date.now();
    // Cache for 1 hour (3600000 ms)
    if (now - lastFetch > 3600000 || newsCache.length === 0) {
      try {
        console.log("Fetching latest news from Google News RSS...");
        const feed = await parser.parseURL("https://news.google.com/rss/search?q=Vibe+Coding&hl=ja&gl=JP&ceid=JP:ja");
        newsCache = feed.items.map(item => ({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          source: item.source
        })).slice(0, 5); // Just top 5
        lastFetch = now;
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }
    res.json(newsCache);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
