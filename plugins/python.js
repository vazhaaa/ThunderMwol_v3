const WhatsAlexa = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

WhatsAlexa.addCommand({pattern: 'bot', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!
    const buttons = [
        {buttonId: 'id1', buttonText: {displayText: '.menu 🥰'}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: '.help'}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: 'EFX SONGS 💥 \n\n ╭──────────────────╮\n     ✰𝐓𝐇𝐔𝐍𝐃𝐄𝐑 𝐌𝐖𝐎𝐋 𝐕3✰ \n ╭──────────────────╯\n │ \n │     ❑ 𝚎𝚏𝚡 𝚊𝚞𝚍𝚒𝚘𝚜 ❑ \n │ \n │ \n │   ▢ s1. Done Da Da \n │   ▢ s2. Calabria 2007 \n │   ▢ s3. Calabria (Firebeatz Remix) \n │   ▢ s4. Calabria 2007 #2 \n │   ▢ s5. Calabria \n │   ▢ s6. Love Nwantiti (ah ah ah) [Remix] \n │   ▢ s7. Drive For Ever BBoy Music \n │   ▢ s8. go off \n │   ▢ s9. Raataan Lambiyan (From Shershaah) \n │   ▢ s10. Raataan Lambiyan (Lofi) \n │   ▢ s11. Raataan Lambiyan (Lofi) #2 \n │   ▢ s12. Play date \n │   ▢ s13. You are my enemy \n │   ▢ s14. Sochta Hoo Ke Woh Kitne Masoom The \n │   ▢ s15. love nwantiti (North African Remix) \n │   ▢ s16. arabic song1 \n │   ▢ s17. arabic song2 \n │   ▢ s18. Old Town Road (Remix) \n │   ▢ s19. Morirò Da Re \n │   ▢ s20. Talking To The Moon \n │   ▢ s21. Toxic \n │   ▢ s22. Such a Whore (Potato Remix) \n │   ▢ s23. INDUSTRY BABY \n │   ▢ s24. How You Like That (Huseyin Yavas Remix) \n │   ▢ s25. Maine Royaan (Lofi Remix) \n │   ▢ s26. Ghalat Fehmi \n │   ▢ s27. XXX Changes \n │   ▢ s28. WHATS POPPIN \n │   ▢ s29. CHANGES (LoFi Remix) \n │   ▢ s30. 7 Rings \n │   ▢ s31. Кайф ты поймала \n │   ▢ s32. Goodbye [Slow Version] \n │   ▢ s33. Way 2 Sexy \n │   ▢ s34. 8teen \n │   ▢ s35. Tujhpe Pyaar Aaya \n │   ▢ s36. Ola La \n │   ▢ s37. Talking To The Moon 2 \n │   ▢ s38. Your Woman \n │   ▢ s39. Mollies, Percs & Drank \n │   ▢ s40. drive for ever#1 \n │   ▢ s41. On The Floor \n │   ▢ s42. Carol Of The Bells \n │   ▢ s43. My Ordinary Life \n │   ▢ s44. Rasputin (Magentaudios Edit) \n │   ▢ s45. Goodbye [Slow Version] \n │   ▢ s46. Vaathi Coming (From Master) \n │   ▢ s47. One Dance \n │   ▢ s48. Mr. Saxobeat \n │   ▢ s49. Be My Love \n │   ▢ s50. Señorita \n │   ▢ s51. Hiya Hiya \n │   ▢ s52. Habibi (Slowed) \n │   ▢ s53. drive for ever#2 \n │   ▢ s54. #BrooklynBloodPop! \n │ \n ╰──────────────────╯ \n  \n ╭──────────────────╮ \n │ 𝙽𝙱 : 𝚓𝚞𝚜𝚝 𝚝𝚢𝚙𝚎 𝚊𝚜 𝚒𝚝 \n │ 𝚒𝚜 𝚠𝚛𝚒𝚝𝚝𝚎𝚗 𝚝𝚑𝚎𝚛𝚎 𝚠𝚒𝚝𝚑- \n │   𝚘𝚞𝚝 𝚖𝚒𝚜𝚝𝚊𝚔𝚎🌝❤‍🔥 \n │  𝚎𝚐: s35 \n ╰──────────────────╯ \n type: 1}
      ]
      
      const buttonMessage = {
          contentText: "Hey bro , How Are You🌝❤️ ?",
          footerText: 'owner pepesir  ©',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
