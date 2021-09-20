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
        "name": "Personal",
        "priority": 123
      }
    ],
    "prefix": "C"
}
```

*This one is what I set as `@Ciblia:matrix.org` which is logged in as `Ciblia`
on `https://matrix-client.matrix.org` (the address was found from https://matrix.org/.well-known/matrix/client)*

* name: name of the account bundle (kind of tab bar, which can separate personal account from work accounts)
  below the account switcher. Quick account switching can only be done within the same bundle.
  * additionally bundles should be created by long touching the account on the bar and selecting "add to bundle".
    `/devtools` is needed only for priority/sorting and prefix
* priority: defines the order of accounts on the account bar.
* prefix: what will need to be typed to the input bar in FluffyChat for quick account switching. Case-insensitive.

6. Start/restart FluffyChat
7. Type "C message" and the account will be swithed to `@Ciblia:matrix.org`.
  * If C is needed to be said in the room without switching sending account,
    start the message with space e.g. ` C message` and the account switching
    won't happen.

Big thank you to FluffyChat contributors who made this feature and Sorunome
for initially explaining how to do this so I could attempt to make a more clearer
note on how to do it and later corrected me on this file.
