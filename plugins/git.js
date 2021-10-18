const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const config = require('../config');
const fs = require("fs")
const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var respoimage = await axios.get(config.LIZA, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , thumbnail: fs.readFileSync('20211015_064632.png'), mimetype: Mimetype.png, caption: `*≈≈≈≈≈≈≈Links ☟︎︎︎≈≈≈≈≈≈≈≈* @${sender.split("@")[0]} 
 
*owner number wa.me/917736622139*
   
*whatsapp group : _https://chat.whatsapp.com/Ima3CdRZ81NCvGshtcQhK3_*


*githublink     : _https://github.com/pepesir/ThunderMwol_v3_*

    
`}) 

})); 
