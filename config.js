require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"qJTCfBqNd/eyKVeNnTRG2AQdy2RLEZ3DnRE5eTAE6n0="},"public":{"type":"Buffer","data":"1Ck0WW4L6vI8rs01l/5GyrVuLud7DnZjtk/asFKmxUY="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"wFKrZFUQMFstXamvOVU7l7egq2xhgEJVPq6Cts6bEUg="},"public":{"type":"Buffer","data":"wpfw3BwNpDutwBGslZWb0QP7O6Y0s8A+90tnRT2tsBA="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"YDAYuSxoT4lvyh4Us5jmLqJ4Y4C0z14hZzWjNpct1ko="},"public":{"type":"Buffer","data":"yoY/o85Ffb09jXzO56GkDdzvp9/+iYbTrR0+buukfAs="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"4HaoI8BS0v3UOjHQe64uH7K81XlUaiO5w41RkpuY0Vs="},"public":{"type":"Buffer","data":"B8AVpJtb4Uw7PpbvSYCilRAf0KlK1MUTyfMAjDvlcgs="}},"signature":{"type":"Buffer","data":"SgLawSA2W0/J2qePm51eFbqv1WQhBPZ5PCd8BwXe5zismY+PV+JdKMGvLnSf1D2BlP2phpD3CRtULBr6oYeZCg=="},"keyId":1},"registrationId":226,"advSecretKey":"Tc8J5YRyVFreXo3O2YQRBZ21YznDPGSB9sIqL/ey+So=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":false,"account":{"details":"CNyowLcFEPaloMwGGAMgACgA","accountSignatureKey":"pijYZOWYHSv0Uo1uS7eWOPM9MAifKrYyrb6oKtPmUDk=","accountSignature":"ykjTXJv37UA3nT2h2YCNbUkTiVF+2tb2oStqOaQKFx+VshVEns1fGwxjVbD1cT+Pn0F9T7of61oX5eDhPZMEDg==","deviceSignature":"nJKzjxP7d0uEmxW2Gis4dp/sKSfQO6vdoViXheB86r0dBS2nk1NIC0cy7tOqlenCf/PoTaxnPAb+/oh4I765Bw=="},"me":{"id":"447463562170:19@s.whatsapp.net","lid":"219537974800514:19@lid"},"signalIdentities":[{"identifier":{"name":"447463562170:19@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BaYo2GTlmB0r9FKNbku3ljjzPTAInyq2Mq2+qCrT5lA5"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CAgIDQgF"},"lastAccountSyncTimestamp":1770525443,"lastPropHash":"3R9Z39","myAppStateKeyId":"AAAAAC7t"}';
global.ytname = process.env.YT_NAME || "YT: @EliteProTechs";
global.socialm = process.env.SOCIAL_M || "GitHub: EliteProTech";
global.location = process.env.LOCATION || "Nigeria, Port Harcourt";

// Creator details
global.ownernumber = process.env.OWNER_NUMBER || '447463562170';
global.ownername = process.env.OWNER_NAME || 'NABEEL';
global.botname = process.env.BOT_NAME || 'COPRONYX-BOT';

// Default settings 
global.prefix = process.env.PREFIX || '.';
// Settings: true=enable false=disable
global.autoRecording = process.env.AUTO_RECORDING === 'true';
global.autoTyping = process.env.AUTO_TYPING === 'true';
global.autorecordtype = process.env.AUTO_RECORD_TYPE === 'true';
global.autoread = process.env.AUTO_READ === 'true';
global.autobio = process.env.AUTO_BIO !== 'false'; // default true
global.anti92 = process.env.ANTI_92 === 'true';
global.autoswview = process.env.AUTO_SW_VIEW !== 'false'; // default true
global.welcome = process.env.WELCOME !== 'false'; // default true
global.autoreact = process.env.AUTO_REACT === 'true';
global.autolikestatus = process.env.AUTO_LIKE_STATUS === 'true';

// Thumbnail profile picture
global.elitepropp = process.env.ELITE_PRO_PP || 'https://i.postimg.cc/PJqh4Xz3/COPRONYX-COP-ESPORTS-20260207-192245.jpg';
// Default emoji
global.themeemoji = process.env.THEME_EMOJI || '👨‍💻';


// Sticker details
global.packname = process.env.PACKNAME || 'Sticker By';
global.author = process.env.AUTHOR || 'ELITEPRO\n\nContact: +2347047504860';
// Default settings 2
global.wm = process.env.WM || "Youtube @EliteProTechs";
global.link = process.env.LINK || 'https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g';

// Reply messages
global.mess = {
    done: '✅ Task completed successfully!',
    prem: '⚠️ Access denied. This feature is for premium users only.',
    admin: '⚠️ Admin privileges required to perform this action.',
    botAdmin: '⚠️ I need to be an admin in this chat to execute this command.',
    owner: '⛔ Command restricted to the bot owner.',
    group: 'ℹ️ This command can only be used in group chats.',
    private: 'ℹ️ This command can only be used in private chats.',
    wait: '⏳ Processing your request... Please wait a moment.',
    error: '❌ An unexpected error occurred. Please try again later.',
};

global.thumb = fs.readFileSync('./EliteProMedia/thumb.jpg');

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update'${__filename}'`));
    delete require.cache[file];
    require(file);
});
