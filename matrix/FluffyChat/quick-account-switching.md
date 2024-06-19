<!-- @format -->

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Quick account switching in FluffyChat](#quick-account-switching-in-fluffychat)
  - [Appendix: example `im.fluffychat.account_bundles` account event](#appendix-example-imfluffychataccount_bundles-account-event)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Quick account switching in FluffyChat

FluffyChat 0.41.0 brings support for using multiple accounts and has an early
implementation of quickly switching accounts via input bar (useful for
roleplaying :wink:), which will get better in a future release, but for now,
for impatient people, it can be used by enabling a prefix with Element's
(Web/Desktop) `/devtools` by editing the account state which can also be used
for sorting accounts.

These steps are repeated for every account into which quick switching is
desired, the ones below add prefix "M" for "mikaela:feneas.org", but to switch
that either using the GUI is necessarily or performing the steps as another
account (e.g. for setting "C" for "Ciblia:matrix.org"). The switching happens
once space is pressed after the prefix char.

1. Open FluffyChat
2. Long touch your account name and select "Add to bundle". Name the new
   bundle whatever you want as long as it's the same across your
   quick-switching accounts, it will be visible below the account switcher and
   groups accounts (e.g. between personal and work)
3. Open Element Web
4. In any chatbox enter `/devtools` and enter
5. Select "Explore Account Data"
6. Search for and select `im.fluffychat.account_bundles`
7. Above (or below, doesn't matter) the `"bundles": [` line, add
   `"prefix": "M",` where `M` is your prefix to quickly switch to this
   account.

- If this is confusing, see the example of finalized event in the bottom of
  this file.

8. Optionally if you wish to sort your account, add a `,` to the line where
   your bundle is named and to the next line: `"priority": 0`
9. Start/restart FluffyChat
10. Type `M message` and the account automatically switches from another
    account to the one you just configured.

General notes:

- 0.4.1 had a bug where using automatic server discovery through well-known
  causes all accounts to get logged out. Use server name instead, e.g.
  `https://matrix-client.matrix.org` (discovered from
  https://matrix.org/.well-known/matrix/client)
  - This is fixed in 0.4.2.
- Quick account switching will only work within a bundle, which by default is
  implied to be the MXID, so by default it's disabled
- Note the avatar next to the input bar showing which account you are using.
  It can also be used for switching accounts.
  - Tapping it to change account will also change which account will send any
    other events like media/reaction etc.
- Long tapping a message and editing a message send as another account will
  auto-set the indicator and action-sender as your roleplay character.

Big thank you to FluffyChat contributors who made this feature and Sorunome
for initially explaining how to do this so I could attempt to make a more
clearer note on how to do it and later corrected me a lot on this file.

## Appendix: example `im.fluffychat.account_bundles` account event

```json
{
  "type": "im.fluffychat.account_bundles",
  "content": {
    "prefix": "M",
    "bundles": [
      {
        "name": "😺",
        "priority": 0
      }
    ]
  }
}
```

on account `@mikaela:feneas.org`

```json
{
  "prefix": "P",
  "priority": 5,
  "bundles": [
    {
      "name": "💼",
      "priority": 5
    },
    {
      "name": "😺"
    }
  ]
}
```

on account `@mikaela.suomalainen:matrix.org`
