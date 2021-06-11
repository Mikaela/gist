# A bit opinionated titlefetching

```
load Web
config plugins.web.snarfMultipleUrls True
config plugins.web.snarferShowDomain False
config plugins.web.snarferShowTargetDomain False
config channel #CHAN plugins.web.titleSnarfer True
config supybot.protocols.http.userAgents "Limnoria UrlPreviewBot"
config supybot.protocols.http.peekSize 1048576
```

* enables the plugin (shipped with Limnoria)
* enables titlefetching for all links on line, not just the first one
* disables showing domain (small protection against multiple titlesnarfers entering loop)
* disables showing redirect target -||-
* enables titlefetching per-channel (avoids unwanted channels in case of botloop)
  * could also be `config config` or `config network NETWORKNAME` to do globally or per-network, but risk of accidental botloop
* sets user-agent to "Limnoria UrlPreviewBot" instead of ['Mozilla/5.0 (compatible; utils.web python module)' from 2005](https://github.com/ProgVal/Limnoria/blame/2990fcd302afdc6a3b741594017c3959fd5da2fd/src/utils/web.py#L120)
  * I have heard that it's bad to pretend to be something you aren't and Twitter will only give you HTMl `<title>`s if your user-agent contains `UrlPreviewBot`
* search for html titles from the first MEGABYTE of the webpage as modern web is horrible (looking at you hs.fi & youtube.com)
