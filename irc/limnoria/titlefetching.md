# A bit opinionated titlefetching

## Preparation

```
load Web
config plugins.web.snarfMultipleUrls True
config plugins.web.snarferShowDomain False
config plugins.web.snarferShowTargetDomain False
config supybot.protocols.http.userAgents "Limnoria UrlPreviewBot"
config supybot.protocols.http.peekSize 1048576
```

* enables the plugin (shipped with Limnoria)
* enables titlefetching for all links on line, not just the first one
* disables showing domain (small protection against multiple titlesfetcherrs
  entering a loop or simply not annoying users with clientside link previews
  (Matrix/Telegram bridges/relays included))
* disables showing redirect target -||-
* sets user-agent to "Limnoria UrlPreviewBot" instead of ['Mozilla/5.0 (compatible; utils.web python module)' from 2005](https://github.com/ProgVal/Limnoria/blame/2990fcd302afdc6a3b741594017c3959fd5da2fd/src/utils/web.py#L120)
  * I have heard that it's bad to pretend to be something you aren't and
    Twitter will only give you HTMl `<title>`s if your user-agent contains
    `UrlPreviewBot`
* search for html titles from the first MEGABYTE of the webpage as modern
  web is horrible (looking at you hs.fi & youtube.com)

## Actually enabling it

```
config channel #CHAN plugins.web.titleSnarfer True
```

* enables titlefetching per-channel, on #CHAN to be accurate
  (avoiding unwanted channels in case of botloop)
  * `"channel #CHAN"` could also be replaced with `network NETWORKNAME` for
    every channel on network or `config` (or omitted entirely) for
    everywhere (channel takes priority over network which *probably takes*
    priority over global)

## Excluding domains from titlefetching

```
config supybot.plugins.Web.nonSnarfingRegexp m/(t.me|matrix.to|facebook.com)/
```

* regexp to block t.me, matrix.to & facebook.com, which are the first useless
examples I have encountered recently. I just stole the regexp from
[canonical Limnoria](https://github.com/ProgVal/Limnoria/wiki/Canonical-%23limnoria-doc)
