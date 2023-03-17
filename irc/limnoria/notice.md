<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Using NOTICEs instead of PRIVMSGs](#using-notices-instead-of-privmsgs)
  - [Other options](#other-options)
  - [Other plugins](#other-plugins)
    - [Reverting](#reverting)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Using NOTICEs instead of PRIVMSGs

Like https://tools.ietf.org/html/rfc1459#section-4.4.2 & https://tools.ietf.org/html/rfc2812#section-3.3.2 say should be used.

This is per-channel, because of https://github.com/42wim/matterbridge/issues/1393 and surely getting a new PM buffer in some clients or consistency, I don't remember the other reason.

```
config channel #CHAN supybot.reply.error.withNotice True
config channel #CHAN supybot.reply.withNotice True
```

## Other options

`supybot.reply.withNoticeWhenPrivate` to have noticed used in private, not
channel-specific

## Other plugins

```
config channel #CHAN supybot.plugins.RSS.notice False
```

- RSS announces as NOTICEs

### Reverting

```
config reset channel #CHAN supybot.reply.error.withNotice
config reset channel #CHAN supybot.reply.withNotice
config reset channel #CHAN supybot.plugins.RSS.notice False
```
