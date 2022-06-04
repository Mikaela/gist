# Template power levels event for quick copy-pasting

The main point I do this for is users `users`

```json
{
    "users": {
      "@Ciblia:matrix.org": 100,
      "@aminda:matrix.org": 100,
      "@aminda:mozilla.org": 100,
      "@aminda:pikaviestin.fi": 100,
      "@aminda:tedomum.net": 100,
      "@mikaela:pirateriot.net": 100,
      "@mikaela:tchncs.de": 100,
      "@mkaysi:fedora.im": 100,
      "@mikaela.suomalainen:matrix.org": 100,
      "@mikaela.matterbridge:converser.eu": 100,
      "@mikaela.matterbridge:tedomum.net": 100,
      "@aminda.matterbridge:jae.fi": 100,
      "@leon:the-apothecary.club": 100
    }
},
```

## Completeish event

This has the rest event in two forms, but doesn't duplicate the above.

Generic notes:

* Don't have anything in `events {}` as `0` or otherwise users will be
  able to send state events with that name including gigabytes of
  data breaking the room.
  * Refer to security considerations of MSC 3779.

### Reasonable version

This is not the Element/Synapse default as that would be pointless to list.

```json5
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
		"m.room.server_acl": 100,
		"m.room.tombstone": 100,
		"m.room.topic": 25,
		"m.space.child": 50
	},
	"events_default": 0,
	"historical": 100,
	"invite": 0,
	"kick": 25,
	"redact": 25,
	"state_default": 50,
	"users": {
		// READ THE BEGINNING OF THE FILE FOR THIS SECTION AND PROPER FORMAT! OR SEE YOUR CURRENT EVENT!
	},
	"users_default": 0
}
```

* `m.room.history_visibility` is lowered to 99 as it's a less permanent action than
  many of the others. I am not sure on my initial logic, but it's documented in
  PPFI repo as PL100 vs PL99.
* `m.room.power_levels` is set to `50` so moderators can raise others to moderators
  for example matrix-appservice-irc, which I would then give PL51 for ops syncing.
  On matrix side immune mods, could be PL52.
* invite commonly defaults to `50`, but I haven't seen abuse through it
* PL25, half-moderator is introduced (inspired from Ergo/IRC halfop), with powers to:
  change room topic, pinned messages, remove messages and kick users (but not ban).
  * Maybe this could be used e.g. in an association where a secretary/someone
    unwilling to be a full moderator wants to update room topic for next
    meeting time or update a version number? :shrug:
    Alternatively someone not wanting full moderator responsibility could remove
    spam while not participating in banning discussions.
* PL13 gets access to change main alias and add/remove published room aliases alongside
  (at least on Synapse) [un/publish the room in the room directory](https://github.com/vector-im/element-web/issues/13835).
  * This can be used with e.g. [altalias maubot plugin](https://matrix.org/blog/2020/06/19/this-week-in-matrix-2020-06-19#alt-alias-maubot-plugin).
    I don't care about room directory or the main alias as it doesn't affect ctrl-k that much anyway,
    rooms are generally discovered through Spaces and I use Matrix URI scheme
    which takes room internal ID and servers to find it from instead of caring about
    the alias. Most importantly **don't give permissions to entirely untrusted users.**

### Medium version

```json5
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
		"m.room.server_acl": 100,
		"m.room.tombstone": 100,
		"m.room.topic": 25,
		"m.space.child": 50
	},
	"events_default": 0,
	"historical": 100,
	"invite": 50,
	"kick": 25,
	"redact": 25,
	"state_default": 50,
	"users": {
		// READ THE BEGINNING OF THE FILE FOR THIS SECTION AND PROPER FORMAT! OR SEE YOUR CURRENT EVENT!
	},
	"users_default": 0
}
```

* Otherwise "Reasonable version", but
* Only moderators can invite

### Paranoid version

```json5
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
		"m.room.server_acl": 100,
		"m.room.tombstone": 100,
		"m.room.topic": 100,
		"m.space.child": 100
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
	"users_default": 0
}
```
