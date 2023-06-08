<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [m.room.server_acl](#mroomserver_acl)
  - [Allowlist](#allowlist)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# m.room.server_acl

This event type controls which servers can access the room at all. Be very careful
adjusting this.

- https://matrix.org/docs/guides/moderation#banning-servers-from-rooms-server-acls

Note:

- When sending the custom event via `/devtools` for the first time, click
  the `Event` so it says `State Event` and asks for `State key` in addition to `type`,
  which can/is left empty as usual.
- Subdomains appear to be implied by specifying 2nd level domain. E.g.
  `matrix.org` appears to apply to `*.matrix.org` at least on Synapse.
- See a later section for the allow list explanation

```json
{
  "allow": [
    "*",
    "pikaviestin.fi",
    "dendrite.matrix.org",
    "tedomum.net",
    "artemislena.eu"
  ],
  "allow_ip_literals": false,
  "deny": [
    "matrix.org",
    "mjolnir.matrix.org",
    "the-apothecary.club",
    "disroot.org",
    "privacytools.io",
    "feneas.org",
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

- `matrix.org`, `*.matrix.org`
  - Very big homeservers promoting centralisation of users and power. Also
    big source of spam, poor moderation and abusive bot performing public
    logging of members-only rooms.
  - **_DEAR AMINDA FROM THE FUTURE, DO NOT UNBAN `mjolnir.matrix.org` OR IT WILL LIKELY ACL BAN EVERYONE
    ELSE. YOU HAVE BEEN WARNED.._**
- `matrix.org`, `evulid.cc`
  - Run instances of [matrix-public-archive](https://github.com/matrix-org/matrix-public-archive/issues/47) which [misses proper ability to opt-out](https://github.com/matrix-org/matrix-public-archive/issues/47)
- `the-apothecary.club`
  - _USA far left_ homeserver, confusing in Fenno-Scandia, may be banned from
    my public rooms to avoid fourth worse conflict.
- `nitro.chat`
  - Poorly protected from abuse, abuse contact joins room that their users are raiding and leaves immediately without doing anything.
- `disroot.org`, `privacytools.io`, `feneas.org`, `liberta.casa`
  - Legacy servers that have discontinued, are in progress of discontinuing or
    are just closed for public, that have PL100 in my rooms.
- `glowers.club`, `midov.pl`, `kiwifarms.net`, `nerdsin.space`, `thisisjoes.site`, `pp13.space`, `[no.]lgbtqia.zone`, `freyachat.eu`
  - Connected to abusive raids on communities that I am a part of, sometimes even moderate.
- Others
  - Most likely inherited from _Community Moderation Effort_.

## Allowlist

This configuration only lets servers I or especially close friends have accounts on in.

```json
{
  "allow": [
    "pikaviestin.fi",
    "mozilla.org",
    "tedomum.net",
    "pirateriot.net",
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
