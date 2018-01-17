var config = {};
module.exports = config;

/////////////////////
//  General config //
/////////////////////

// paste the bot API token you got from BotFather here:
config.tgToken = 'CENSORED';

// only relay IRC events present in array
// possible values include:
// message, notice, action, topic, join, part, kick, quit
config.relayIRCEvents = ['message', 'notice', 'action', 'kick', 'topic'];

// enable HTTP server which hosts sent media files, links to files are
// forwarded to IRC
config.showMedia = true;

// HTTP server port
config.httpPort = 61825;

// HTTP server location, URLs are generated from this
config.httpLocation = 'http://hilla.kapsi.fi' + ':' + config.httpPort;
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
config.nameFormat = '%username%';

// fallback format string for %username% if sender lacks username
config.usernameFallbackFormat = '%firstName% %lastName%';

config.ircNick = 'T4';
config.ircServer = 'au.pirateirc.net';

// array of commands to send to IRC server as soon as we're connected,
// example: config.ircPerformCmds = [
//     'PRIVMSG Q@CServe.quakenet.org :AUTH <username> <password>'
// ]

// config.ircPerformCmds = ['NICKSERV identify Euforia CENSORED']
config.ircPerformCmds = ['NICKSERV identify T4 CENSORED', 'NICKSERV regain T4', 'mode T4 -i+gRQ', 'CHANSERV invite #messi', 'JOIN #messi'];
//config.ircPerformCmds = [];

config.channels = [

    {
        ircChan: '#piraattinuoret',
        tgGroup: 'Piraattinuoret'
    },

    {
        ircChan: '#piraatit',
        tgGroup: 'Piraatit'
    },

    {
        ircChan: '#mediaseuranta',
        tgGroup: 'PIR - Mediaseuranta'
    },

    {
        ircChan: '#helsinki',
        tgGroup: 'PIR - Helsinki'
    },

    {
        ircChan: '#uusimaa',
        tgGroup: 'PIR - Uusimaa'
    },

    {
        ircChan: '#toiminta',
        tgGroup: 'PIR - Toiminta'
    },

    {
        ircChan: '#verkkopalvelut',
        tgGroup: 'PIR - Verkkopalvelut'
    },

    {
        ircChan: '#pinu_hallitus',
        tgGroup: 'PiNu hallitus'
    },

    {
        ircChan: '#piraattipuolue',
        tgGroup: 'PIR - Yleiskeskustelu (EI EDUSTA PUOLUEEN LINJAA!)'
    },

    {
        ircChan: '#keski-suomi',
        tgGroup: 'PIR - Keski-Suomi'
    },

    {
        ircChan: '#sateenkaaripiraatit',
        tgGroup: 'Sateenkaaripiraatit'
    },

    {
        ircChan: '#test',
        tgGroup: 'TEST'
    },

    {
        ircChan: '#Mikaela',
        ircChanReadOnly: true,
        ircChanOverrideReadOnly: true,
        tgGroup: 'Mikaela - supergroup',
        tgGroupReadOnly: true,
        tgGroupOverrideReadOnly: true,
    },

    {
        ircChan: '#aaltopiraatit',
        tgGroup: 'PIR - Aaltopiraatit'
    },

    {
        ircChan: '#ppfi',
        tgGroup: 'Pirate Party Finland'
    },

    {
        ircChan: '#grafiikka',
        tgGroup: 'PIR - Grafiikka'
    },

    {
        ircChan: '#messi',
        tgGroup: 'PIR - Messi'
    },

    {
        ircChan: '#varsinais-suomi',
        tgGroup: 'PIR - Varsinais-Suomi'
    },

    {
        ircChan: '#hepihalko',
        tgGroup: 'PIR - Helsingin Hallituskokoukset'
    },

    {
        ircChan: '#syotteet',
        tgGroup: 'Syötteet'
    },

    {
        ircChan: '#sivusto',
        tgGroup: 'PIR - Sivusto'
    },

    {
        ircChan: '#globalPirates',
        tgGroup: 'Global Pirates'
    }

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
    userName: 'Euforia',
    realName: 'Telegram.org Relay ~ @M1kaela',
    port: 6697,
    localAddress: null,
    debug: false,
    showErrors: true,
    autoRejoin: true,
    autoConnect: true,
    channels: [], // auto generated, do not touch
    secure: true,
    // TRUE JOS EPÄKELPO!
    selfSigned: false,
    certExpired: false,
    floodProtection: true,
    floodProtectionDelay: 1000,
    sasl: true,
    //sasl: false,
    stripColors: true,
    channelPrefixes: '&#!',
    messageSplit: 512,
    encoding: '',
    //password: ''
    password: 'CENSORED'
};

// if you wish to relay every irc message to telegram, set this to true.
// if false, then only lines matching config.hlRegexp will be relayed
config.ircRelayAll = true;

// the default hilight regexp will match lines containing the bot nick, or
// lines starting with '! '
var regex = '^ *(?:' + config.ircNick + '[:,]?|!) +(.*\\S.*)$';
config.hlRegexp = new RegExp(regex, 'i');

// automatically added by config upgrade:
config.logLevel = "info";
config.mediaRandomLength = 0;
config.maxMsgAge = 60;
config.allowCommands = true;
config.nickcolor = false;
config.palette = ["white","silver","navy","green","red","brown","purple","olive","yellow","lime","teal","cyan","pink","blue"];
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
    'webp': 'png'
};
config.emphasizeAction = true;
