<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [m.room.server_acl](#mroomserver_acl)
  - [Allowlist](#allowlist)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# m.room.server_acl

This event type controls which servers can access the room at all. Be very careful
adjusting this.

- https://matrix.org/docs/guides/moderation#banning-servers-from-rooms-server-acls

Note: when sending the custom event via `/devtools` for the first time, click
the `Event` so it says `State Event` and asks for `State key` in addition to `type`,
which can/is left empty as usual.

```json
{
  "allow": ["*"],
  "allow_ip_literals": false,
  "deny": [
    "matrix.org",
    "*.matrix.org",
    "mjolnir.matrix.org",
    "disroot.org",
    "privacytools.io",
    "feneas.org",
    "glowers.club",
    "*.glowers.club",
    "midov.pl",
    "*.midov.pl",
    "kiwifarms.net",
    "*.kiwifarms.net",
    "liberta.casa",
    "nitro.chat",
    "*.nitro.chat",
    "nerdsin.space",
    "*.nerdsin.space",
    "thisisjoes.site",
    "*.thisisjoes.site",
    "pp13.space",
    "*.pp13.space"
  ]
}
```

Explanations:

- Very big homeservers promoting centralisation of users and power. Also
  big source of spam, poor moderation and abusive bot performing public
  logging of members-only rooms.
- Legacy servers that have discontinued, are in progress of discontinuing or
  are just closed for public, that have PL100 in my rooms. They don't need subdomains
  to be denylisted as the subdomain MXIDs wouldn't have power.
  - `disroot.org`, `privacyguides.io`, `feneas.org`.
- The rest are connected to abusive raids on communities that I am a part of,
  sometimes even moderate.

## Allowlist

This configuration only lets servers I have accounts on in.

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
    "artemislena.eu",
    "the-apothecary.club"
  ],
  "allow_ip_literals": false,
  "deny": []
}
```
