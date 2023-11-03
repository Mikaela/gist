# Potentially useful progressive web apps

PWAs are especially useful for iOS users, since PWAs added to homescreen
from Safari are able to request notifications permission resulting
nativeish experience outside of App Store without even having to
install anything.

Method for distinguishing PWAs from normal websites: adding them to
iOS homescreen and seeing which open as "their own apps" _or_ having
Chromium suggest "installing" them without manually "installing" them.

Proper identification: `view-source` (`CTRL - U`) and `CTRL - F` for
`manifest` e.g. `<link rel="manifest" href="/manifest.webmanifest">` in `<head>`.

- https://caniuse.com/web-app-manifest
- https://developer.mozilla.org/docs/Web/Manifest

It looks like `about:apps` on Edge (or all Chromiums?) has a
`Show applications menu on toolbar` button which then when pressed on a tab
has more details for PWAs. "App whatever is available" with logo and "Publisher:"
fields.

**_TODO: Some of these may be miscategorized while not fullfilling the criteria of PWA._**

<!-- prettier-ignore-start -->

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Events](#events)
- [Food](#food)
- [Forums](#forums)
- [Instant messaging](#instant-messaging)
  - [Matrix](#matrix)
    - [Instant messaging](#instant-messaging-1)
    - [Social media](#social-media)
  - [Telegram](#telegram)
  - [Misc](#misc)
- [Learning](#learning)
- [Localization](#localization)
- [Music](#music)
- [News](#news)
- [Parcel tracking](#parcel-tracking)
- [Shopping](#shopping)
  - [Shopping centres](#shopping-centres)
- [Social media](#social-media-1)
  - [Federated social news aggregators](#federated-social-news-aggregators)
- [Travel](#travel)
- [Not PWAs but still possibly useful for homescreens](#not-pwas-but-still-possibly-useful-for-homescreens)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<!-- prettier-ignore-end -->

## Events

- Mobilizon - all instances of the federated event & group site function as
  PWAs. TODO: Do they really nowadays?
  - https://jarkkaa.fi - Finnish instance
- https://calendar.google.com/ - Google's Calendar app

## Food

- https://menu.unicafe.fi/ - menu for UniCafes
- https://resq-club.com/app/ - waste food pickup ordering app
- https://www.fiksuruoka.fi/ - Finnish waste/expiring grocery store
- https://www.kotipizza.fi - Finnish pizzeria

## Forums

- https://keskustelu.suomi24.fi/ - Suomi24. No explanation required.

## Instant messaging

- https://messages.google.com/web/ - Google SMS app web version
- https://web.whatsapp.com/ - WhatsApp Web

### Matrix

#### Instant messaging

- https://fluffychat.im/web/ - Matrix client with multiaccount support
- https://hydrogen.element.io/ - very basic Matrix client for lowend devices
- Element Web - Matrix web client with most features such as /devtools, essential for modding
  - https://app.element.io/ - stable
  - https://staging.element.io/ - rc/beta?
  - https://develop.element.io/ - bleeding edge
- https://app.cinny.in/ - yet another Matrix client (very discordy)

#### Social media

- https://app.minestrix.henri2h.fr/ - social media based on Matrix

### Telegram

- https://web.telegram.org/z/
- https://web.telegram.org/k/

### Misc

- https://latest.glowing-bear.org/ - WeeChat Relay (protocol) client

## Learning

- https://www.duolingo.com/ - language learning website
  - https://preview.duolingo.com/ - testing

## Localization

- https://hosted.weblate.org/ - Translation platform popular amongst FOSS projects

## Music

- https://music.youtube.com/ - YouTube Music (Player)

## News

- https://iltalehti.fi - big Finnish newspaper
- https://www.helsinginuutiset.fi/ - Helsinki area newspaper

## Parcel tracking

- https://oma.posti.fi - Finnish postal services tracking and online mail
  (not to be confused with email)

## Shopping

- https://www.verkkokauppa.com/ - Finnish online retailer

### Shopping centres

- https://www.redi.fi/ - Kalasatama/Fiskehamnen, Helsinki
- https://www.isoomena.fi/ - Matinkylä/Mattsby, Espoo

## Social media

### Federated social news aggregators

- Lemmy
  - https://lemmy.tedomum.net/
  - https://latte.isnot.coffee
- Kbin
  - https://fedia.io

## Travel

- https://guide.suomenlinna.fi/ - mobile guide for Suomenlinna (UNESCO World Heritage site),
  which is also a neighbourhood in Helsinki, Finland.
- https://osmgo.com/ - OpenStreetMap PoI contribution app

## Not PWAs but still possibly useful for homescreens

Continuing the previous method, these open in Safari.

- http://http.badssl.com - essential captive portal trigger
- https://1.1.1.1/help - Cloudflare DNS debug
- https://mullvad.net/check - Mullvad leak test
- https://junalahdot.fi - Official Finnish train station information
- https://www.junat.net/ - Finnish train station information displays (including arrivals)
- https://perille.fi - Finnish long distance transport comparison site
- https://pikavuorot.fi - Finnish long distance transport comparison site
- https://sanakirja.org - Finnish dictionary for translating languages
