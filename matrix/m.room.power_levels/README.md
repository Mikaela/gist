<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Template power levels event for quick copy-pasting](#template-power-levels-event-for-quick-copy-pasting)
  - [Completeish event](#completeish-event)
    - [Reasonable version](#reasonable-version)
    - [Paranoid version](#paranoid-version)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Template power levels event for quick copy-pasting

The main point I do this for is users `users`

```json
{
    "users": {
        "@Ciblia:matrix.org": 100,
        "@aminda:dendrite.matrix.org": 100,
        "@aminda:matrix.org": 100,
        "@aminda:mozilla.org": 100,
        "@aminda:pikaviestin.fi": 100,
        "@aminda:tedomum.net": 100,
        "@mikaela:tchncs.de": 100,
        "@mikaela-5756df8cc43b8c6019785660:gitter.im": 100,
        "@mkaysi:fedora.im": 100,
        "@mikaela.suomalainen:matrix.org": 100,
        "@mikaela.matterbridge:converser.eu": 100,
        "@mikaela.matterbridge:tedomum.net": 100,
        "@aminda:beeper.com": 100,
        "@aminda:masfloss.net": 13,
        "@aminda:envs.net": 100,
        "@leon:masfloss.net": 13,
        "@fidino:artemislena.eu": 99,
        "@twisted3484:beeper.com": 99,
        "@mjolnir_3a78dd65-60a4-4c3a-9a60-01e214a5d6f6:draupnir.midnightthoughts.space": 99
    }
},
```

## Completeish event

This has the rest event in two forms, but doesn't duplicate the above.

Generic notes:

- Don't have anything in `events {}` as `0` or otherwise users will be able to
  send state events with that name including gigabytes of data breaking the
  room.
  - Refer to security considerations of
    [MSC3779](https://github.com/matrix-org/matrix-spec-proposals/pull/3779).

### Reasonable version

This is not the Element/Synapse default as that would be pointless to list.

```jsonnet
{
  "ban": 50,
  "events": {
    "im.vector.modular.widgets": 50,
    "m.room.avatar": 50,
    "m.room.canonical_alias": 13,
    "m.room.encryption": 100,
    "m.room.history_visibility": 99,
    "m.room.join_rules": 50,
    "m.room.name": 50,
    "m.room.pinned_events": 25,
    "m.room.power_levels": 50,
    "m.room.retention": 100,
    "m.room.server_acl": 99,
    "m.room.tombstone": 100,
    "m.room.topic": 25,
    "m.space.child": 50,
  },
  "events_default": 0,
  "historical": 100,
  "invite": 25,
  "kick": 25,
  "redact": 25,
  "state_default": 50,
  "users": {
    // READ THE BEGINNING OF THE FILE FOR THIS SECTION AND PROPER FORMAT! OR SEE YOUR CURRENT EVENT!
  },
  "users_default": 0,
}
```

- `m.room.history_visibility` is lowered to 99 as it's a less permanent action
  than many of the others. I am not sure on my initial logic, but it's
  documented in PPFI repo as PL100 vs PL99.
- `m.room.power_levels` is set to `50` so moderators can raise others to
  moderators for example matrix-appservice-irc, which I would then give PL51
  for ops syncing. On matrix side immune mods, could be PL52.
- `m.room.server_acl` is set to `99` so moderation bots can function and do
  mostly everything while admins still have power over them.
- PL25, half-moderator is introduced (inspired from Ergo/IRC halfop), with
  powers to: change room topic, pinned messages, remove messages and kick
  users (but not ban). As kick is also known as rejection of knocking and
  invite is the approval, invite also becomes their power.
  - Maybe this could be used e.g. in an association where a secretary/someone
    unwilling to be a full moderator wants to update room topic for next
    meeting time or update a version number? :shrug: Alternatively someone not
    wanting full moderator responsibility could remove spam while not
    participating in banning discussions.
- PL13 gets access to change main alias and add/remove published room aliases
  alongside (at least on Synapse)
  [un/publish the room in the room directory](https://github.com/vector-im/element-web/issues/13835).
  Additionally has it also affects state, they can invite others.
  - This can be used with e.g.
    [altalias maubot plugin](https://matrix.org/blog/2020/06/19/this-week-in-matrix-2020-06-19#alt-alias-maubot-plugin).
    I don't care about room directory or the main alias as it doesn't affect
    ctrl-k that much anyway, rooms are generally discovered through Spaces and
    I use Matrix URI scheme which takes room internal ID and servers to find
    it from instead of caring about the alias. Most importantly **don't give
    permissions to entirely untrusted users.**

### Paranoid version

```jsonnet
{
  "ban": 50,
  "events": {
    "im.vector.modular.widgets": 100,
    "m.room.avatar": 100,
    "m.room.canonical_alias": 100,
    "m.room.encryption": 100,
    "m.room.history_visibility": 100,
    "m.room.join_rules": 100,
    "m.room.name": 100,
    "m.room.pinned_events": 100,
    "m.room.power_levels": 100,
    "m.room.retention": 100,
    "m.room.server_acl": 99,
    "m.room.tombstone": 100,
    "m.room.topic": 100,
    "m.space.child": 100,
  },
  "events_default": 0,
  "historical": 100,
  "invite": 100,
  "kick": 50,
  "redact": 50,
  "state_default": 100,
  "users": {
    // READ THE BEGINNING OF THE FILE FOR THIS SECTION AND PROPER FORMAT! OR SEE YOUR CURRENT EVENT!
  },
  "users_default": 0,
}
```

- Almost everything requires PL100
- `invite`, `kick`, `redact` and `state_default` are bumbed to `100`, `50`,
  `50` and `100` in that order.
