# Template power levels event for quick copy-pasting

The main point I do this for is users `users`

```json
{
    "users": {
      "@Ciblia:matrix.org": 100,
      "@aminda:matrix.org": 100,
      "@mikaela:pirateriot.net": 100,
      "@mikaela:liberta.casa": 100,
      "@mikaela.suomalainen:matrix.org": 100,
      "@mikaela:tchncs.de": 100,
      "@aminda:tedomum.net": 100,
      "@aminda:pikaviestin.fi": 100,
      "@mikaela.matterbridge:tedomum.net": 100,
      "@mikaela.matterbridge:converser.eu": 100,
      "@leon:the-apothecary.club": 100
    }
},
```

## Completeish event

This has the rest event in two forms, but doesn't duplicate the above.

### Reasonable version

This is not the Element/Synapse default as that would be pointless to list.

```json5
{
	"ban": 50,
	"events": {
		"im.vector.modular.widgets": 50,
		"m.room.avatar": 50,
		"m.room.canonical_alias": 50,
		"m.room.encryption": 100,
		"m.room.history_visibility": 99,
		"m.room.name": 50,
		"m.room.power_levels": 50,
		"m.room.retention": 100,
		"m.room.server_acl": 100,
		"m.room.tombstone": 100,
		"m.room.topic": 50,
		"m.space.child": 50
	},
	"events_default": 0,
	"historical": 100,
	"invite": 0,
	"kick": 50,
	"redact": 50,
	"state_default": 50,
	"users": {
		// READ THE BEGINNING OF THE FILE FOR THIS SECTION AND PROPER FORMAT! OR SEE YOUR CURRENT EVENT!
	},
	"users_default": 0
}
```

* `m.room.power_levels` is set to `50` so moderators can raise others to moderators
  for example matrix-appservice-irc, which I would then give PL51 for ops syncing.
  On matrix side immune mods, could be PL52.
* invite commonly defaults to `50`, but I haven't seen abuse through it

### Medium version

```json5
{
	"ban": 50,
	"events": {
		"im.vector.modular.widgets": 50,
		"m.room.avatar": 50,
		"m.room.canonical_alias": 50,
		"m.room.encryption": 100,
		"m.room.history_visibility": 99,
		"m.room.name": 50,
		"m.room.power_levels": 50,
		"m.room.retention": 100,
		"m.room.server_acl": 100,
		"m.room.tombstone": 100,
		"m.room.topic": 50,
		"m.space.child": 50
	},
	"events_default": 0,
	"historical": 100,
	"invite": 50,
	"kick": 50,
	"redact": 50,
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
		"m.reaction": 0,
		"m.room.avatar": 100,
		"m.room.canonical_alias": 100,
		"m.room.encryption": 100,
		"m.room.history_visibility": 100,
		"m.room.name": 100,
		"m.room.pinned_events": 50,
		"m.room.power_levels": 100,
		"m.room.redaction": 0,
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
