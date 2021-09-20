# Quick account switching in FluffyChat

FluffyChat 0.41.0 brings support for using multiple accounts and has an early
implementation of quickly switching accounts via input bar (useful for roleplaying :wink:), which will get
better in a future release, but for now, for impatient people, it can
be used by enabling a prefix with Element's (Web/Desktop) `/devtools` by editing
the account state which can also be used for sorting accounts.

1. Open FluffyChat
2. Long touch your account name and select "Add to bundle". Name the new
   bundle whatever you want as long as it's the same across your quick-switching accounts,
   it will be visible below the account switcher and groups accounts (e.g. between personal and work)
3. Open Element Web
4. In any chatbox enter `/devtools` and enter
5. Select "Explore Account Data"
6. Search for and select `im.fluffychat.account_bundles`
7. Above (or below, doesn't matter) the `"bundles": [` line, add `"prefix": "M",` where `M` is your
   prefix to quickly switch to this account.
8. Optionally if you wish to sort your account, add a `,` to the line where
   your bundle is named and to the next line: `"priority": 0`
9. Start/restart FluffyChat
10. Type `M message` and the account automatically switches from another account
    to the one you just configured.

General notes:

* 0.4.1 has a bug where using automatic server discovery through well-known
  causes all accounts to get logged out. Use server name instead, e.g. `https://matrix-client.matrix.org` (discovered from https://matrix.org/.well-known/matrix/client)
* Quick account switching will only work within a bundle, which by default is implied to be the MXID, so by default it's disabled

Big thank you to FluffyChat contributors who made this feature and Sorunome
for initially explaining how to do this so I could attempt to make a more clearer
note on how to do it and later corrected me a lot on this file.

## Appendix: example `im.fluffychat.account_bundles` account event

```json
{
  "type": "im.fluffychat.account_bundles",
  "content": {
    "prefix": "M",
    "bundles": [
      {
        "name": "Meow",
        "priority": 0
      }
    ]
  }
}
```

on account `mikaela` on `https://matrix.feneas.org` (aka `@mikaela:feneas.org`)
