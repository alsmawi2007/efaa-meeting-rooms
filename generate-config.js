// generate-config.js
import fs from "fs";

const config = {
  SUPABASE_URL: process.env.VITE_SUPABASE_URL,
  SUPABASE_ANON_KEY: process.env.VITE_SUPABASE_ANON_KEY
};

fs.writeFileSync(
  "./public/config.js",
  `window.APP_CONFIG = ${JSON.stringify(config, null, 2)};`
);

console.log("config.js generated successfully!");
