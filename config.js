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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_27_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODEsXG4gICAgICAgIDU5LFxuICAgICAgICA1NixcbiAgICAgICAgMTY2LFxuICAgICAgICA5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAzMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMixcbiAgICAgICAgMTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDc5LFxuICAgICAgICA4MixcbiAgICAgICAgNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA4MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDcwLFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzksXG4gICAgICAgIDkyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMixcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUxLFxuICAgICAgICA0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICAyMTksXG4gICAgICAgIDY2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDk1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM3LFxuICAgICAgICA4NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyLFxuICAgICAgICA0NixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDksXG4gICAgICAgIDk1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNyxcbiAgICAgICAgODksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNixcbiAgICAgICAgMTIyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzOCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxLFxuICAgICAgICA0MCxcbiAgICAgICAgODcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDg5LFxuICAgICAgICA5NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDExLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTksXG4gICAgICAgIDk2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRWRua3dMM0haVXIrSDRUakhLRTA5dWJKa1BmaW96ZHMwY0hkVElGQWE2Zz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiR3hrMnkwT25RSC1iV1F0aTlkOXJMUVwiLFxuICBcInBob25lSWRcIjogXCJkZDYxYmUwOC01ZjE0LTQ4ZGEtOWE0MC01NTZhZmI3YjM5YjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAyLFxuICAgICAgMjI2LFxuICAgICAgMTksXG4gICAgICAyMjksXG4gICAgICAxMzksXG4gICAgICAxNjYsXG4gICAgICAxMDgsXG4gICAgICAxMSxcbiAgICAgIDg1LFxuICAgICAgMTM5LFxuICAgICAgNzcsXG4gICAgICAyMjYsXG4gICAgICAyMzIsXG4gICAgICAxMDcsXG4gICAgICA2NyxcbiAgICAgIDg1LFxuICAgICAgNDEsXG4gICAgICAxNjksXG4gICAgICAyMjEsXG4gICAgICAxNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMsXG4gICAgICAyMzAsXG4gICAgICA3LFxuICAgICAgMixcbiAgICAgIDExNixcbiAgICAgIDAsXG4gICAgICAxMSxcbiAgICAgIDcyLFxuICAgICAgMTUsXG4gICAgICA0NixcbiAgICAgIDIyNyxcbiAgICAgIDE0MyxcbiAgICAgIDIyMCxcbiAgICAgIDE0NyxcbiAgICAgIDQsXG4gICAgICAzMSxcbiAgICAgIDI0MyxcbiAgICAgIDIxLFxuICAgICAgNixcbiAgICAgIDY4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnE3OUkwQ0VKZUdxck1HR0FvZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCeHhUTXRRVEJhRmVPWjUyZUUwb0NjM0lRS2VLZGxjME8ra1o1STdDRTA0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImMwd2d4TGpwYzUyYjNNNk1MTVRETWFiYUR3bk4wbWhxcVQ1WjBFN3FHQmNDWGZlK2QyREtYOEpFTW9xSFJGSEpwZmE3eWhhSTNJOXRvUTRCTzdXa0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlEyZDZqRTBOZ1dHT09lZU9oR1lvZHpBV21sQXpabXh5Z2dsME45ZFdjcVNRaTIrN2V2b3ppMzlwL2dnZWZTV3dxc0RTQkR2anZpdXhhcWwwem1BZmpRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0MTEyNjYzODU1OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQ0VPLiBOREVSSVRVXCIsXG4gICAgXCJsaWRcIjogXCIyNjgzNTE3MzgzMDgwNDoyNkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDExMjY2Mzg1NToyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODI1NjQxMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJzVFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQnNSLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUUlZN2ZsaG1UczNtcUhYYmh2UTVRZDFwRUZKc3pPZVhBTGVVNFVxQ1NBWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NjYwNDIwMDYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJzUy5qc29uIjogIntcImtleURhdGFcIjpcImY1R1JMekdyOW9FOU9ad3MvSHl1TGRmQU5RS0pkenE5N3hDYnd2N0R1ckE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTY2MDQyMDA2LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJzVC5qc29uIjogIntcImtleURhdGFcIjpcIlVHTUsxZ0JESEl4UzJaa1ZTcG1aaW9VVlN5dzRVcWVuS2EzU2xXanM1bmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTY2MDQyMDA2LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDQyMjQ5OTg3OTNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCc1cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpZlhxc3BVUkg3T1loeXlzRVdsT05PcHdBUVI3UlZVU1NFdm43T2p6SFBjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU2NjA0MjAwNixcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcwNTM0NjgwMDIyNVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJzWC5qc29uIjogIntcImtleURhdGFcIjpcIjNPSmcwZFU2ZEVweWp1RThMVTdZaWZrc3pBaXJ0M2dtellhMzNNa2c3dlU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTY2MDQyMDA3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDUzNDY4Mjk2NTNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCc1kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSa1JrMnVCNkQwRTdKV2hKYkRVamMvVkg4dGRwQnk0Q0lJWHlEWGRyUEhnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU2NjA0MjAwNyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDY5OTE5NDI0NzZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCc1ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4V0VVWDdrQjBEd1JmVmYxeVgwVGZIcHZ2b29NTkhpTUxVL2ZTUmMyRjNjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU2NjA0MjAwNyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQnNhLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNHJ5eWtGazRxMWZJL0VTQ0pnWVdFeE15US9vcklHTUhQZndrZWp6VHNVMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NjYwNDIwMDcsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDY5OTE5NTM5NTlcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCc2IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ2Nm10V05vbktIRFJlejJlRkVVZTlPdFVZNmZabjkxUmNrYTRncngzc1BjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU2NjA0MjAwOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQnNjLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMWl4Z1p3Y2lGL1B1OSttYUJoVUQ4MVhRNTc5bUpsZ01xTUhUa2VnWXV6bz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NjYwNDIwMDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDgzNzE2MTc5OThcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCc2QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMbGdwOFY4cGZmTGVrUzlnTCtPRURBVDVGZ0MrUFp6SXQyNHNaZXp1bXJRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU2NjA0MjAxMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQnNlLmpzb24iOiAie1wia2V5RGF0YVwiOlwidE9MU2VPUEZjQU9MYXhyYjl6cEdlZWIyU3FpOHlGdEk4TmNpQ0dXUGUzUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NjYwNDIwMTAsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJzZi5qc29uIjogIntcImtleURhdGFcIjpcImZiQTJPbFpLUGs2T2x2bmRMeEs4bTFWRmtDcjJoS3Mwc2FwcGh2cVBQd1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTY2MDQyMDEwLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCc2cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSMFVVNWxPVHhnemxNZzlFeUVoWEJLVXM5ZXFKSTdqTHVTNitkM3QxY0VBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU2NjA0MjAxMCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsNF19LFwidGltZXN0YW1wXCI6XCIxNzExMzk1NzQ5NDE2XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQnNoLmpzb24iOiAie1wia2V5RGF0YVwiOlwiM255aVczb3A5OFgxZzdMS29qb0R5LzBsS1kyblZKQmN5UW9xVld6eDZ4bz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NjYwNDIwMTAsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDVdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJzaS5qc29uIjogIntcImtleURhdGFcIjpcIlNnTU5vdVZZZTFuZVlUblhIcVdHZytaUmorekZRdlpoMWVxYnY4VzlicFE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTY2MDQyMDEwLFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCw1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCc2ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxeDNuNTQzcDkzZURaUnRTNEl0UTFKYmYvSklSSUs2UlNhMmMwcVh3RVRnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU2NjA0MjAxMCxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsNV19LFwidGltZXN0YW1wXCI6XCIxNzE0OTgyMDk4MTEwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQnNrLmpzb24iOiAie1wia2V5RGF0YVwiOlwiM0NFb1pVOTdPMStHRGFrdW4zTTQwVFFtRlYzVU1LQUI1bFd0WlFrOFE0OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NjYwNDIwMTAsXCJjdXJyZW50SW5kZXhcIjo4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDVdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJzbC5qc29uIjogIntcImtleURhdGFcIjpcIklZZWpBVjV6NzZ5L25WcjhoNWVuZHdFcUNlYmdhSTJmZnFNOFRid043ams9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTY2MDQyMDEwLFwiY3VycmVudEluZGV4XCI6OSxcImRldmljZUluZGV4ZXNcIjpbMCw5XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgyNTYzOTg5OTJcIn0iCn0="  // PUT your SESSION_ID 


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
