const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94772136479";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_35_04_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA5MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTkyLFxuICAgICAgICAyNixcbiAgICAgICAgMjUxLFxuICAgICAgICA3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzksXG4gICAgICAgIDksXG4gICAgICAgIDg1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQxLFxuICAgICAgICA4OSxcbiAgICAgICAgNixcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA4NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NixcbiAgICAgICAgMTg5LFxuICAgICAgICA5MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MixcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDgxLFxuICAgICAgICA2NixcbiAgICAgICAgMjksXG4gICAgICAgIDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODksXG4gICAgICAgIDY2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyLFxuICAgICAgICA5MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTExLFxuICAgICAgICA3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDEyLFxuICAgICAgICA4MixcbiAgICAgICAgMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDg5LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDM4LFxuICAgICAgICAxODIsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDM3LFxuICAgICAgICAzOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDYsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDMsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMixcbiAgICAgICAgMzgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTksXG4gICAgICAgIDk3LFxuICAgICAgICA1MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMixcbiAgICAgICAgNjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI3LFxuICAgICAgICA2MixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDksXG4gICAgICAgIDYwLFxuICAgICAgICA0MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDczLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgODgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzIsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZkxCOGdPY0xWR1ZBR0ZyWjF6UTkzUGxKdXUycFlvWXVUOGcrWTBock9tdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYjZRZ0lWczZTY2EteldGdTBfbUFiUVwiLFxuICBcInBob25lSWRcIjogXCI5MDVlMzBiNS1kYTljLTQ5NTctYWMyMy1kZDRhMWM4ZWJkYTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMwLFxuICAgICAgMTA1LFxuICAgICAgNjgsXG4gICAgICAxNTksXG4gICAgICAyNDcsXG4gICAgICAxLFxuICAgICAgMjI4LFxuICAgICAgNDIsXG4gICAgICAyMSxcbiAgICAgIDE2NixcbiAgICAgIDE5OCxcbiAgICAgIDE3MCxcbiAgICAgIDcsXG4gICAgICA0MCxcbiAgICAgIDE0LFxuICAgICAgNTcsXG4gICAgICA4NyxcbiAgICAgIDEzOCxcbiAgICAgIDkyLFxuICAgICAgMTA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NyxcbiAgICAgIDEyNCxcbiAgICAgIDYxLFxuICAgICAgMTE1LFxuICAgICAgMTUwLFxuICAgICAgMTAyLFxuICAgICAgMTc4LFxuICAgICAgMTgzLFxuICAgICAgNTcsXG4gICAgICA3NixcbiAgICAgIDEzMixcbiAgICAgIDE3NyxcbiAgICAgIDEzNCxcbiAgICAgIDIwLFxuICAgICAgMTEwLFxuICAgICAgNjcsXG4gICAgICAxMTMsXG4gICAgICAxMjEsXG4gICAgICAxNixcbiAgICAgIDYyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFSM1E0VFc2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc3MjEzNjQ3OToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTM2NzkzMjEyMTIzNDoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01LMzFLQURFTUtQcjhBR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiejFySStULzZvdkpVUjJCRFJsZWJNM0NUMGRRdmJJZDZYY0piTWgza01pbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJhb1I1YS9XZDlkRDdLYVlyZ1I5bnZSdE9seEJHcmlVc3dlamYxMU01YjhCdmV6RTFlOG1mcTlqV1FBbFlDL3ZoQmo3bTFkM2tnUnBrWjJUWmxLenJDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJhQXRZeEIydHd0WE10R0hEOFl5V05VbDhVaksydGdVb0h2OHZRUXNxUVZURkZCaWJlOVRIQkFEeG1KeE5rN1czMkFLcFhKMmFVcERENmlZc3dBR2ZEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3MjEzNjQ3OToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDU2MDI1MDJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


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
