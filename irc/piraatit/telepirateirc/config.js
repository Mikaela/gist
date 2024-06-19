/** @format */

var config = {};
module.exports = config;

/////////////////////
//  General config //
/////////////////////

// paste the bot API token you got from BotFather here:
config.tgToken = "CENSORED";

// only relay IRC events present in array
// possible values include:
// message, notice, action, topic, join, part, kick, quit
config.relayIRCEvents = ["message", "notice", "action", "kick", "topic"];

// enable HTTP server which hosts sent media files, links to files are
// forwarded to IRC
config.showMedia = true;

// HTTP server port
config.httpPort = 61825;

// HTTP server location, URLs are generated from this
config.httpLocation = "http://silta.piraatit.fi" + ":" + config.httpPort;
//config.httpLocation = 'https://t4.mikaela.info';

//////////////////
//  IRC config  //
//////////////////

// formatting of Telegram usernames on IRC.
// the following placeholders are available:
//
// - %firstName% (first name of sender)
// - %lastName% (last name of sender)
// - %username% (optional Telegram username of sender)
config.nameFormat = "%username%";

// fallback format string for %username% if sender lacks username
config.usernameFallbackFormat =
  "%firstName% (MISSING @USERNAME! telegram.org/faq#usernames-and-t-me)";

config.ircNick = "T4";
//config.ircServer = 'fi.pirateirc.net';
// Yggdrasil
config.ircServer = "201:677d:1809:c5eb:202a:d39:e598:305";

// array of commands to send to IRC server as soon as we're connected,
// example: config.ircPerformCmds = [
//     'PRIVMSG Q@CServe.quakenet.org :AUTH <username> <password>'
// ]

config.ircPerformCmds = [
  "NICKSERV identify T4 CENSORED",
  "NICKSERV regain T4",
  "mode T4 -i+RQ",
  "CHANSERV invite #messi",
  "JOIN #messi",
];
//config.ircPerformCmds = [];

config.channels = [
  {
    ircChan: "#piraattinuoret",
    tgGroup: "Piraattinuoret",
  },

  {
    ircChan: "#piraatit",
    tgGroup: "Piraatit",
  },

  {
    ircChan: "#mediaseuranta",
    tgGroup: "PPFI - Mediaseuranta",
  },

  {
    ircChan: "#helsinki",
    tgGroup: "PPFI - Helsinki",
  },

  {
    ircChan: "#uusimaa",
    tgGroup: "PPFI - Uusimaa",
  },

  {
    ircChan: "#toiminta",
    tgGroup: "PPFI - Toiminta",
  },

  {
    ircChan: "#puoluetoimisto",
    tgGroup: "PPFI - Puoluetoimisto",
  },

  {
    ircChan: "#verkkopalvelut",
    tgGroup: "PPFI - Verkkopalvelut",
  },

  {
    ircChan: "#pinu_hallitus",
    tgGroup: "PiNu hallitus",
  },

  {
    ircChan: "#keski-suomi",
    tgGroup: "PPFI - Keski-Suomi",
  },

  {
    ircChan: "#sateenkaaripiraatit",
    tgGroup: "Sateenkaaripiraatit",
  },

  {
    ircChan: "#suomiareena",
    tgGroup: "PPFI - Suomiareena",
  },

  {
    ircChan: "#Mikaela",
    ircChanReadOnly: true,
    ircChanOverrideReadOnly: true,
    tgGroup: "##Mikaela",
    tgGroupReadOnly: true,
    tgGroupOverrideReadOnly: true,
  },

  {
    ircChan: "#aaltopiraatit",
    tgGroup: "PPFI - Aaltopiraatit",
  },

  {
    ircChan: "#ppfi",
    tgGroup: "Pirate Party Finland",
  },

  {
    ircChan: "#grafiikka",
    tgGroup: "PPFI - Grafiikka",
  },

  {
    ircChan: "#messi",
    tgGroup: "PPFI - Messi",
  },

  {
    ircChan: "#varsinais-suomi",
    tgGroup: "PPFI - Varsinais-Suomi",
  },

  {
    ircChan: "#syotteet",
    tgGroup: "Syötteet",
  },

  {
    ircChan: "#sivusto",
    tgGroup: "PPFI - Sivusto",
  },

  {
    ircChan: "#globalPirates",
    tgGroup: "Global Pirates",
  },

  {
    ircChan: "#antikupla",
    tgGroup: "Antikupla",
  },

  {
    ircChan: "#hame",
    tgGroup: "PPFI - Häme",
  },

  {
    ircChan: "#akateemisetpiraatit",
    tgGroup: "Akateemiset Piraatit",
  },

  {
    ircChan: "#hallituskokous",
    tgGroup: "PIR - Hallituksen kokoukset",
  },

  {
    ircChan: "T4",
    tgGroup: "SPAM-TELEIRC-PRIVAT",
    tgGroupReadOnly: true,
  },

  {
    ircChan: "*",
    tgGroup: "SPAM-TELEIRC-PRIVAT",
    tgGroupReadOnly: true,
  },

  {
    ircChan: "#opers",
    tgGroup: "PirateIRC Telegram Opers/Staff",
    tgGroupReadOnly: true,
    tgGroupOverrideReadOnly: true,
  },

  {
    ircChan: "#satakunta",
    tgGroup: "PIR - Satakunta",
  },

  {
    ircChan: "#viestinta_markkinointi",
    chanPwd: "CENSORED",
    tgGroup: "PPFI - Viestintä ja Markkinointi",
  },

  {
    ircChan: "#TechPirates",
    tgGroup: "Tech Pirates",
  },

  //{
  //    ircChan: '#teleirc',
  //    tgGroup: 'teleirc'
  //}

  // example of a password-protected IRC channel:
  //{
  //ircChan: '#channel2',
  //chanPwd: 'passwd',
  //tgGroup: 'Tg_Group_2'
  //},

  // example of an IRC channel with an alias:
  // channel name will be displayed as '!channel3' instead of '!XXXXXchannel3'
  //{
  //ircChan: '!XXXXXchannel3',
  //chanAlias: '!channel3',
  //tgGroup: 'Tg_Group_3'
  //}
];

// see https://node-irc.readthedocs.org/en/latest/API.html#client for
// documentation
config.ircOptions = {
  userName: "Telegram",
  realName: "mailto:pikaviestimet+PircTGRelay@piraattipuolue.fi",
  port: 6697,
  localAddress: null,
  debug: false,
  showErrors: true,
  autoRejoin: true,
  autoConnect: true,
  channels: [], // auto generated, do not touch
  secure: true,
  // TRUE JOS EPÄKELPO!
  // Yggdrasil
  //selfSigned: false,
  //certExpired: false,
  selfSigned: true,
  certExpired: true,
  floodProtection: true,
  floodProtectionDelay: 1000,
  sasl: true,
  //sasl: false,
  stripColors: true,
  channelPrefixes: "&#!",
  messageSplit: 512,
  encoding: "",
  //password: ''
  password: "CENSORED",
};

// if you wish to relay every irc message to telegram, set this to true.
// if false, then only lines matching config.hlRegexp will be relayed
config.ircRelayAll = true;

// the default hilight regexp will match lines containing the bot nick, or
// lines starting with '! '
var regex = "^ *(?:" + config.ircNick + "[:,]?|!) +(.*\\S.*)$";
config.hlRegexp = new RegExp(regex, "i");

// automatically added by config upgrade:
config.logLevel = "error";
config.mediaRandomLength = 10;
config.maxMsgAge = 60;
config.allowCommands = true;
config.nickcolor = false;
config.palette = [
  "white",
  "silver",
  "navy",
  "green",
  "red",
  "brown",
  "purple",
  "olive",
  "yellow",
  "lime",
  "teal",
  "cyan",
  "pink",
  "blue",
];
config.soloUse = false;
config.replaceNewlines = " … ";
config.hlOnlyShowMatch = false;

// automatically added by config upgrade:
//config.httpLocation = "http://mydomain.com:9090";
config.uploadToImgur = false;
config.imgurClientId = "CENSORED";

// automatically added by config upgrade:
config.replySnippetLength = 46;
config.mediaConversions = {
  webp: "png",
};
config.emphasizeAction = true;
config.relayEdited = true;
