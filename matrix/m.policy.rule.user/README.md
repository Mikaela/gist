# `m.policy.rule.user`

This event is the language of Draupnir/Mjolnir and experimental Mjolnir style ignore in Element Web labs when speaking of individual users.

TL;DR

- Event type: `m.policy.rule.server`
- State key: `_username:example.net` (The leading`@` is replaced with an underscore `_`)

<!-- prettier-ignore-start -->

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Banning an user](#banning-an-user)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<!-- prettier-ignore-end -->

## Banning an user

- Event type: `m.policy.rule.user`
- State key: `_username:example.net`

```json
{
  "entity": "@username:example.net",
  "reason": "Example ban",
  "recommendation": "m.ban"
}
```
