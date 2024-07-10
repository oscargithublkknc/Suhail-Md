const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_32_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE4LFxuICAgICAgICA1NixcbiAgICAgICAgMTIzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTYwLFxuICAgICAgICA4NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMixcbiAgICAgICAgMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTksXG4gICAgICAgIDk2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNyxcbiAgICAgICAgOTksXG4gICAgICAgIDYwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMixcbiAgICAgICAgNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDMwLFxuICAgICAgICA4LFxuICAgICAgICAxMSxcbiAgICAgICAgNjksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjksXG4gICAgICAgIDM4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA1NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMyLFxuICAgICAgICA2MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDY3LFxuICAgICAgICA5MixcbiAgICAgICAgMTUzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDQsXG4gICAgICAgIDIxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzksXG4gICAgICAgIDYyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjU1LFxuICAgICAgICA1LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0LFxuICAgICAgICAxOCxcbiAgICAgICAgOCxcbiAgICAgICAgODEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDczLFxuICAgICAgICA5OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFc1RnWUJseTk3cVdxamVWdDBQWHhuMThxVzR5SHdJUlN0dkpSZTBKT0tvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSTldRQXIyUFRCbUFQMmhoMk9vdWp3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjJlNjIwNzJlLWMzNWItNDlmZS1iNGEzLTk1ODk5YTY0MzE3OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MyxcbiAgICAgIDIyNCxcbiAgICAgIDMzLFxuICAgICAgMTQxLFxuICAgICAgMTI5LFxuICAgICAgMTgxLFxuICAgICAgMjEwLFxuICAgICAgNDAsXG4gICAgICAxNjIsXG4gICAgICAyOSxcbiAgICAgIDEwNixcbiAgICAgIDM4LFxuICAgICAgMTE1LFxuICAgICAgNDQsXG4gICAgICAxNTIsXG4gICAgICAxNzMsXG4gICAgICA5NyxcbiAgICAgIDU3LFxuICAgICAgMTQyLFxuICAgICAgMTc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MCxcbiAgICAgIDM5LFxuICAgICAgMTksXG4gICAgICAyNTUsXG4gICAgICA1MyxcbiAgICAgIDI1MyxcbiAgICAgIDcyLFxuICAgICAgOTMsXG4gICAgICA1NixcbiAgICAgIDE0NixcbiAgICAgIDE0NSxcbiAgICAgIDE4MixcbiAgICAgIDY4LFxuICAgICAgODcsXG4gICAgICA2LFxuICAgICAgNDgsXG4gICAgICAzMCxcbiAgICAgIDIxNixcbiAgICAgIDE2MyxcbiAgICAgIDExMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00yZ3p0a0JFTWFudTdRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRFRCcFpSOS9TY3ZKOG1MS3RPbGt5Z3dGOUNWMEdGZ0J5VSt2bEVEVC9Hdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpRkJtckNHMW83VUp2RDNZUEhmbnRqRjd2S0RDWEVjcys4ZENFYkNROWxZbGllUWpSSmF5NU9jWTQzSk11Zm5TVklZTmJOeFd5dTFpd0JqVWJXMHlEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCQms4My9kNml0VWh3Z2o3T2RLUEdWZHRhQXNISFhwUUsxM3ppTTRYUjR5QThlZXZ1QzVXODN0SUxXZ2pSSkN5Um5lT1M4eG5ESis0M1ZabTI0bFNDQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcxODM1MzkyODo0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkJsdWVwaXBzdW5pdmVyc2l0eVwiLFxuICAgIFwibGlkXCI6IFwiNTA5MjE0NTEwMzI1OTE6NDRAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MTgzNTM5Mjg6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA2MzYzNjRcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
