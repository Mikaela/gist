# WeeChat Triggers

- [WeeChat Trigger plugin documentation](https://weechat.org/files/doc/stable/weechat_user.en.html#trigger)
- [Triggers at WeeChat GitHub Wiki](https://github.com/weechat/weechat/wiki/Triggers)

## msgid visibility

```
/trigger add msgid print "" "${tg_tag_irc_msgid}" "" "/print -buffer ${buffer.full_name} [msgid: ${tg_tag_irc_msgid} ]
```

This adds a `[msgid: <message ID> ]` below all messages, which can then be entered
to Ergo's `/msg HistServ delete`.

I improved this from `FiskFan1999` who had a `${channel}` instead of `${buffer.full_name}`
which was suggested by `trygveaa` on `#weechat` at LiberaChat, after I figured
out `${server}.${channel}` which was improper. I also added spaces to the last
part.
