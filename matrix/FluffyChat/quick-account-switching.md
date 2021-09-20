# Quick account switching in FluffyChat

FluffyChat 0.41.0 brings support for using multiple accounts and has an early
implementation of quickly switching accounts via input bar, which will get
better in a future release, but for now, for impatient people, it can
be used by enabling it with Element's (Web/Desktop) `/devtools` by sending
a custom account state event.

1. Open Element Web with an account where to set quick switching prefix.
2. In any chatbox enter `/devtools` and enter
3. Select "Send account data"
4. Enter the type as `im.fluffychat.account_bundles` (***WARNING: in case it's
   typoed the typoed event cannot be removed without being an server administrator with
   database access.***
5. Send the following JSON, adjusting where needed (note: the opening and closing
brackets `{}` are added automatically):

```json
{
    "bundles": [
      {
        "name": "Ciblia",
        "priority": 0
      }
    ],
    "prefix": "C"
}
```

*This one is what I set as `@Ciblia:matrix.org` which is logged in as `Ciblia`
on `https://matrix-client.matrix.org` (the address was found from https://matrix.org/.well-known/matrix/client)*

* name: I think it's a local name that will be used in the future for differentiating accounts in FluffyChat, but I am unsure as of time of typing*
* priority: I have no idea what this is either :sweat_smile:
* prefix: what will need to be typed to the input bar in FluffyChat for quick account switching

6. Start/restart FluffyChat
7. Type "C message" and the account will be swithed to `@Ciblia:matrix.org`.
  * If C is needed to be said in the room without switching sending account,
    start the message with space e.g. ` C message` and the account switching
    won't happen.

Big thank you to FluffyChat contributors who made this feature and Sorunome
for initially explaining how to do this so I could attempt to make a more clearer
note on how to do it.
