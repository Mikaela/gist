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

* disables prefix char (note how "" means empty by default
  (`supybot.commands.quotes`), not to be confused with """)
* disables nick as prefix
* disables nick as suffix (disabled by default)
* disables replying with other nicks as prefix (disabled by default)
* disables replying with strings as prefix (disabled by default, I think,
  might be an option in `supybot-wizard`)
* disables replying to all messages on channel (disabled by default and I
  have no idea why one would enable that globally anyway)
