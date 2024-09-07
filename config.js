//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "examsolutionteam@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ec33ecf51f928d0a89a1b.jpg";
global.devs = "https://t.me/examsolutionteam";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "639707132014";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/a81247659e996130a88ea.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.scan = "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUVkanNXOHZ0NEZiYnl2d2FJczBkVFovYkdueU5ZVWNkcTBxazlJQW1HQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHg4ajN2eGpkdTMxTWI0UUtCNHM1c3pnOEFYOWk0MEFxUDlLa1paTUpWWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPRFFYNFRrRnArRnJEbnhjTUNJbUdhTkcrMngrWGNUUExNYXNUc0pqOVZ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhUDJFZXF4eWhqcTVvWGRwRjk5Yi9yQVI1aCtnQW5DSmVUMmovVlRCc1IwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVKajhSeEJyS3lDMjM5NVpYMzFTTWVyOXp3a1F3YkRXTVcxazZUdUhqRlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJNSDRwTmQySnQwSU9VVzZHUUpraUJqcGQxZDZtSlc5dFI3cTNEdXdtaTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU1CVGNZVm45QXFxSG5BTlVhc2R1Ti9teWhOYU5tMkF6c3FIaFJIQmJXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieTh1YnhyMXAraWtCdEhMYnAxVkh1bXFwbzJlY3JQWlFQb1ZYdG9qZ2wzND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJsVzZkRThHZkM4RkIxUjhiZkxGc2lVc3ppdmlwbWs0ckptRmdpVWc4TTlBcms2RS8xR1ZCWVcwY2Y4ZUZzRTFHekFGY05hWC9oZXNQUlV3NTQ0V0NBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDYsImFkdlNlY3JldEtleSI6IjlDK1hQUXVlcUh6YjEyeXgrQXl0bUJobW1tb0FDT2pFeFNyNE9xcGVTbmM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkZSS3ZfRnZ6VFFtVUdIeWt4T0pISUEiLCJwaG9uZUlkIjoiZThjYzg5ZGItMjUwYS00NjkyLTg1NGMtZDg4ZDE2OWZhZTI1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVuZWJZVkdxTDZWUGU2RFBGejZ6MnhFWEE2QT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDN00vY2JZM2lHelZ5YkFNTGhxVnY2emdVTG89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNkUyTDMyRTEiLCJtZSI6eyJpZCI6IjYzOTcwNzEzMjAxNDo1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPcVF2dHdGRVAydzg3WUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIwMXoxNHVLRDJsU3JXVnZ0YTE2N3N6c1MyNDZQWFFWVm04KzZQbGQ3ODNjPSIsImFjY291bnRTaWduYXR1cmUiOiI5TUxzZ3k3ZFVsWUN4NnRXRUw0OHFhN0VkRWVGVVlESml2d2pGSFRpYlp5Tzd3NkNqNVpFTHBIKzhBUzcxa2pxdThkRHlpUGJpK2E2RXRhcFczZkdDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUCt2ZE5xd1NucGI0TmJmcEZ6NDFNd1RJc21zeGtsdEFrSFpKTjVaNkVONDEvZGI4SzZZc3ZqQmw2QVBNY1lxMmJNdFNJU0xQZUhBVE5HS0JvTUxqRGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI2Mzk3MDcxMzIwMTQ6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkTmM5ZUxpZzlwVXExbGI3V3RldTdNN0V0dU9qMTBGVlp2UHVqNVhlL04zIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1NzQ5Mzg3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJoMiJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔼𝕊 𝕋𝔼𝔸𝕄𝕊-𝕍2👑",
  author: process.env.PACK_AUTHER || "ES TEAMS-V2",
  packname: process.env.PACK_NAME || "ES TEAMS",
  botname: process.env.BOT_NAME || "𝔼𝕊 𝕋𝔼𝔸𝕄𝕊-𝕍2👑",
  ownername: process.env.OWNER_NAME || "𝔼𝕊 𝕋𝔼𝔸𝕄𝕊-𝕋𝔼ℂℍ👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ES TEAMS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
