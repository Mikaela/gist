var config = {};
module.exports = config;

/////////////////////
//  General config //
/////////////////////

// verbosity of console output
// possible options from most to least verbose:
// silly, debug, verbose, info, warn, error
config.logLevel = 'error';

// paste the bot API token you got from BotFather here:
config.tgToken = 'CENSORED';

// only relay IRC events present in array
// possible values include:
// message, notice, action, topic, join, part, kick, quit
config.relayIRCEvents = ['message', 'notice', 'action', 'kick'];

// enable HTTP server which hosts sent media files, links to files are
// forwarded to IRC
config.showMedia = true;

// Convert these media files to other types using the "convert" command.
// To be able to convert from WebP, install imagemagick and the dwebp tool
// (e.g. sudo apt install imagemagick webp)
config.mediaConversions = {
    'webp': 'png'
};

// Add some randomness to url when relaying media
// Use 0 to disable
config.mediaRandomLength = 10;

// Age in seconds after which a Telegram message is not relayed, this prevents
// spamming the IRC channel if your bot was offline for a long time
config.maxMsgAge = 60;

// HTTP server port
config.httpPort = 9090;

// HTTP server location, URLs are generated from this
config.httpLocation = 'http://149.202.119.142' + ':' + config.httpPort;
//config.httpLocation = 'https://teleirc.mikaela.info';

// Upload sent photos to Imgur, links to Imgur uploads are
// forwared to IRC
config.uploadToImgur = false;

// Imgur client id required for uploading photos to Imgur
config.imgurClientId = 'YOUR-CLIENT-ID';

// Whether to allow sending messages to IRC without nick prefix
config.allowCommands = true;

//////////////////
//  IRC config  //
//////////////////

// Colorizes nicks
config.nickcolor = false;

// Nick color palette
config.palette = [
    'white', 'silver', 'navy',
    'green', 'red', 'brown',
    'purple', 'olive', 'yellow',
    'lime', 'teal', 'cyan',
    'pink', 'blue'
];

// If soloUse is true, send all messages without username preview, intented
// to use telegram as a limited IRC client.
config.soloUse = false;

// formatting of Telegram usernames on IRC.
// the following placeholders are available:
//
// - %firstName% (first name of sender)
// - %lastName% (last name of sender)
// - %username% (optional Telegram username of sender)
config.nameFormat = '%username%';

// fallback format string for %username% if sender lacks username
config.usernameFallbackFormat = '%firstName% (MISSING @USERNAME! telegram.org/faq#usernames-and-t-me)';

// Replace newline characters in Telegram messages with this string before
// relaying them to IRC, prevents flood from long messages.
//
// Tip: you can set this to \n if you want them as separate messages on IRC
config.replaceNewlines = ' … ';

config.ircNick = 'T4';
config.ircServer = 'chat.freenode.net';

// array of commands to send to IRC server as soon as we're connected,
// example: config.ircPerformCmds = [
//     'PRIVMSG Q@CServe.quakenet.org :AUTH <username> <password>'
// ]
config.ircPerformCmds = ['NICKSERV identify T4 CENSORED', 'NICKSERV regain T4', 'mode T4 -i+RQ'];

config.channels = [
    // example of a barebones IRC channel:
    // '#channel1' will be bridged to a Telegram group called 'Tg_Group_1'
    {
        ircChan: '##Mikaela',
        tgGroup: '##Mikaela'
    },

    {
        ircChan: '#nemomobile',
        tgGroup: 'NemoMobile'
    },

    //{
    //    ircChan: '#akunapu',
//        tgGroup: 'akunapu'
//	tgGroup: 'Akun apu ja #akubuntu'
//    },

    {
        ircChan: '#mer-meeting',
        tgGroup: 'Mer-meeting',
        tgGroupReadOnly: true
    },

    {
        ircChan: '#jollafanclub',
        tgGroup: 'Sailfish OS Fan Club'
    },

    {
        ircChan: '#sailfishos-porters',
        tgGroup: 'Sailfish OS Porters'
    },

    {
        ircChan: '#sailfish-hackclub-hki',
        tgGroup: 'Sailfish Hackclub Helsinki'
    },

    {
	ircChan: '##castellano',
	tgGroup: '##castellano'
    },

    {
        ircChan: 'T4',
        tgGroup: 'SPAM-TELEIRC-PRIVAT',
	tgGroupReadOnly: true
    },

    {
        ircChan: 'T4',
        tgGroup: 'SPAM-TELEIRC-PRIVAT',
	tgGroupReadOnly: true
    }

]

    // example of a readOnly IRC channel and Telegram Group:
/*    {
        ircChan: '#channel3',
        ircChanReadOnly: true,          // if true, irc can not send to telegram
        ircChanOverrideReadOnly: false, // if true, override readonly by highlighting the bot
        tgGroup: 'Tg_Group_3',
        tgGroupReadOnly: true,          // if true, telegram can not send to irc
        tgGroupOverrideReadOnly: true,  // if true, override readonly by highlighting the bot
    },

    // example of an IRC channel with an alias:
    // channel name will be displayed as '!channel3' instead of '!XXXXXchannel3'
    {
        ircChan: '!XXXXXchannel3',
        chanAlias: '!channel3',
        tgGroup: 'Tg_Group_3'
    }

];
*/
// see https://node-irc.readthedocs.org/en/latest/API.html#client for
// documentation
config.ircOptions = {
    userName: 'T4',
    realName: 'mailto:pikaviestimet+FreTGRelay@piraattipuolue.fi',
    port: 6697,
    localAddress: null,
    showErrors: true,
    autoRejoin: true,
    autoConnect: true,
    channels: [], // auto generated, do not touch
    secure: true,
    selfSigned: false,
    certExpired: false,
    floodProtection: true,
    floodProtectionDelay: 1000,
    sasl: true,
    stripColors: true,
    channelPrefixes: '&#!',
    messageSplit: 512,
    encoding: '',
    password: 'CENSORED'
};

// the default hilight regexp will match lines containing the bot nick, or
// lines starting with '! '
var regex = '^ *(?:' + config.ircNick + '[:,]?|!) +(.*\\S.*)$';
config.hlRegexp = new RegExp(regex, 'i');

// if there was a match, should we only show the parenthesized substring match?
// with the default regexp this would hide the bot nickname in messages when
// highlighted
config.hlOnlyShowMatch = false;

// put action messages (posted with /me in IRC) between '*'
config.emphasizeAction = true;

// automatically added by config upgrade:
config.replySnippetLength = 46;
config.relayEdited = true;
