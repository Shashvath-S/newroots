// Node.js webscraper for Seattle Public Library events
// Install dependencies: npm install axios cheerio pg

// RUN TS
//npm install axios cheerio pg
//node scripts/scrape_events.js

const axios = require("axios");
const cheerio = require("cheerio");
const { Client } = require("pg");

// Database connection config (update with your Neon/Postgres credentials)
const db = new Client({
  connectionString: process.env.DATABASE_URL,
});

async function scrapeAndStoreEvents() {
  await db.connect();
  const url = "https://www.spl.org/event-calendar";
  const res = await axios.get(url);
  const $ = cheerio.load(res.data);

  // Example selector, update as needed for real site structure
  $(".event-listing").each(async (i, el) => {
    const title = $(el).find(".event-title").text().trim();
    const date = $(el).find(".event-date").text().trim();
    const location = $(el).find(".event-location").text().trim();
    if (title && date && location) {
      // Insert into DB, upsert by title+date+location
      await db.query(
        `INSERT INTO events (title, date, location) VALUES ($1, $2, $3)
         ON CONFLICT (title, date, location) DO NOTHING`,
        [title, date, location]
      );
      console.log(`Saved: ${title} | ${date} | ${location}`);
    }
  });
  await db.end();
}

scrapeAndStoreEvents().catch(console.error);
