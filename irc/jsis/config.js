var realuserConfig = {
  Mikaela: {
    aliases: [
      "Mkaysi Mkays| Mkaysi- Mkaysi_ TDA_Anima Ciblia Mikaela Mikaela_ Michaela *Mikaela* Ciblia*",
    ],
  },
  notifico: {
    aliases: ["Not-*"],
  },
  onnz423: {
    aliases: ["Onni*"],
  },
  foxiepaws: {
    aliases: ["foxwolfblood"],
  },
  Nikashi: {
    aliases: ["Nikashi Nikashi2"],
  },
};

var GA = {
  customHeadHtml:
    "<script>\r\n  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\r\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\r\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\r\n  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\r\n\r\n  ga('create', 'UA-40171169-4', 'kapsi.fi');\r\n  ga('send', 'pageview');\r\n\r\n</script>",
};

var config = {
  channels: [
    {
      name: "##Mikaela",
      theme: "default",
      destination: "/home/users/mkaysi/public_html/jsis/mikaela",
      logFormat: "supybot",
      logEncoding: "UTF-8",
      logTimezone: "+00:00",
      logPath:
        "/home/users/mkaysi/Yvzabevn3/logs/ChannelLogger/freenode/##mikaela",
      logFileFilter: /\.log/,
      recursive: true,
      maxLogFiles: Infinity,
      statsTimezoneText: "Europe/Helsinki",
      userConfig: realuserConfig,
      customHeadHtml: GA,
    },
    {
      name: "#refud0ge",
      theme: "default",
      destination: "/home/users/mkaysi/public_html/jsis/refud0ge",
      logFormat: "weechat",
      logEncoding: "UTF-8",
      logPath: "/home/users/mkaysi/.weechat/logs/",
      logFileFilter: /\/irc.freenode.#refud0ge.weechatlog[^/]*/i,
      recursive: true,
      maxLogFiles: Infinity,
      statsTimezoneText: "Europe/Helsinki",
      userConfig: realuserConfig,
      customHeadHtml: GA,
    },
  ],
  log: {
    DEBUG: ["STDOUT"],
    INFO: ["STDOUT"],
    MESSAGE: ["STDOUT"],
    WARNING: ["errors.log", "STDERR"],
    ERROR: ["errors.log", "STDERR"],
    CRITICAL: ["errors.log", "STDERR"],
  },
};

module.exports = config;
