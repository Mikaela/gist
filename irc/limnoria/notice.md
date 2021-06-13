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

* RSS announces as NOTICEs
