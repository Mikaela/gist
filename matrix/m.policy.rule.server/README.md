# `m.policy.rule.server`

This event is the language of Draupnir/Mjolnir and experimental Mjolnir style ignore in Element Web labs when speaking of homeservers.

TL;DR

- Event type: `m.policy.rule.server`
- State key: `example.net` (server name goes here)

<!-- prettier-ignore-start -->

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Allowing all servers](#allowing-all-servers)
- [Allowing server mjolnir.matrix.org](#allowing-server-mjolnirmatrixorg)
- [Banning evil example.org](#banning-evil-exampleorg)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<!-- prettier-ignore-end -->

## Allowing all servers

- Event type: `m.policy.rule.server`
- State key: `*`

```json
{
  "entity": "*",
  "reason": "Default ACL allow all",
  "recommendation": "org.matrix.mjolnir.allow"
}
```

## Allowing server mjolnir.matrix.org

- Event type: `m.policy.rule.server`
- State key: `mjolnir.matrix.org`

```json
{
  "entity": "mjolnir.matrix.org",
  "reason": "Mjolnir for all!",
  "recommendation": "org.matrix.mjolnir.allow"
}
```

## Banning evil example.org

_Well, the example organization domain is now evil :smirk_cat:_

- Event type: `m.policy.rule.server`
- State key: `example.org`

```json
{
  "entity": "*",
  "reason": "Evil example homeserver",
  "recommendation": "m.ban"
}
```
