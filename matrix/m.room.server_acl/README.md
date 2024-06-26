<!-- @format -->

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [m.room.server_acl](#mroomserver_acl)
  - [Allowlist](#allowlist)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# m.room.server_acl

This event type controls which servers can access the room at all. Be very
careful adjusting this.

- https://matrix.org/docs/guides/moderation#banning-servers-from-rooms-server-acls

Note:

- When sending the custom event via `/devtools` for the first time, click the
  `Event` so it says `State Event` and asks for `State key` in addition to
  `type`, which can/is left empty as usual.

```json
{
  "allow": ["*", "pikaviestin.fi", "tedomum.net", "artemislena.eu"],
  "allow_ip_literals": false,
  "deny": [
    "the-apothecary.club",
    "disroot.org",
    "privacytools.io",
    "feneas.org",
    "pirateriot.net",
    "glowers.club",
    "midov.pl",
    "kiwifarms.net",
    "liberta.casa",
    "nitro.chat",
    "nerdsin.space",
    "thisisjoes.site",
    "pp13.space",
    "evulid.cc",
    "lgbtqia.zone",
    "freyachat.eu"
  ]
}
```

Explanations:

- `evulid.cc`
  - Runs instance of
    [matrix-public-archive](https://github.com/matrix-org/matrix-public-archive/issues/47)
    which
    [misses proper ability to opt-out](https://github.com/matrix-org/matrix-public-archive/issues/47)
- `the-apothecary.club`
  - Totalitarian homeserver USA far-left style (confusing to Fennoscandian
    eyes). Involved at least in smearcampaigning, making minority X an
    authority on matters regarding minority Y, blocking rooms based on admin
    being AFK for a moment, etc.  
    All my accounts there are deactivated, if you see them around, they are
    fake or connected to administrator abuse.
- `nitro.chat`
  - Poorly protected from abuse, abuse contact joins room that their users are
    raiding and leaves immediately without doing anything.
- `disroot.org`, `privacytools.io`, `feneas.org`, `liberta.casa`,
  `pirateriot.net`
  - Legacy servers that have discontinued, are in progress of discontinuing or
    are just closed for public, that have PL100 in my rooms.
- `glowers.club`, `midov.pl`, `kiwifarms.net`, `nerdsin.space`,
  `thisisjoes.site`, `pp13.space`, `[no.]lgbtqia.zone`, `freyachat.eu`
  - Connected to abusive raids on communities that I am a part of, sometimes
    even moderate.
- Others
  - Most likely inherited from _Community Moderation Effort_.

## Allowlist

This configuration only lets servers I or especially close friends have
accounts on in.

```json
{
  "allow": [
    "pikaviestin.fi",
    "mozilla.org",
    "tedomum.net",
    "tchncs.de",
    "fedora.im",
    "jae.fi",
    "converser.eu",
    "artemislena.eu"
  ],
  "allow_ip_literals": false,
  "deny": []
}
```
