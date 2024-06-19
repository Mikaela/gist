<!-- @format -->

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Muting on channel](#muting-on-channel)
  - [Reverting](#reverting)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Muting on channel

There is `channel lobotomy add [<channel>]`, but it may have unexpected
consequences such as disabling titlefetching or not replying to actions from
private or disabling feeds, so to have the bot not reply to anyone I prefer
disabling all responses:

```
config channel #CHAN supybot.reply.whenAddressedBy.chars ""
config channel #CHAN supybot.reply.whenAddressedBy.nick False
config channel #CHAN supybot.reply.whenAddressedBy.nick.atEnd False
config channel #CHAN supybot.reply.whenAddressedBy.nicks ""
config channel #CHAN supybot.reply.whenAddressedBy.strings ""
config channel #CHAN supybot.reply.whenNotAddressed False
```

- disables prefix char (note how "" means empty by default
  (`supybot.commands.quotes`), not to be confused with """)
- disables nick as prefix
- disables nick as suffix (disabled by default)
- disables replying with other nicks as prefix (disabled by default)
- disables replying with strings as prefix (disabled by default, I think,
  might be an option in `supybot-wizard`)
- disables replying to all messages on channel (disabled by default and I have
  no idea why one would enable that globally anyway)

Here also `channel #CHAN` could be `network NETWORKNAME` to disable responses
by default or even `config` to do that globally. Do note that this will allow
contacting the bot privately and doing everything in private to work.

Bonus:

```
config channel #CHAN supybot.reply.inPrivate True
```

In order to answer all commands in private instead of the channel, while that
may not be so desirable either especially in presense of relays.

## Reverting

config reset channel #CHAN supybot.reply.whenAddressedBy.chars config reset
channel #CHAN supybot.reply.whenAddressedBy.nick config reset channel #CHAN
supybot.reply.whenAddressedBy.nick.atEnd config reset channel #CHAN
supybot.reply.whenAddressedBy.nicks config reset channel #CHAN
supybot.reply.whenAddressedBy.strings config reset channel #CHAN
supybot.reply.whenNotAddressed config reset channel #CHAN
supybot.reply.inPrivate
