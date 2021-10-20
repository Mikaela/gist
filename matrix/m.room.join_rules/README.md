# m.room.join_rules

Controls who can join the room. This is best to configure in room settings.

## knocking

Requires room version 7

```json
{
	"join_rule": "knock"
}
```

## membership of another room

Requires room version <del>8</del> 9. Offers only Spaces in room settings

```json
{
	"allow": [
		{
			"room_id": "!LSWnevuzcRXZZKhqso:privacytools.io",
			"type": "m.room_membership"
		}
	],
	"join_rule": "restricted"
}
```

### membership of one of multiple rooms

```json
{
	"allow": [
		{
			"room_id": "!psumPMeAfzgAeQpXMG:feneas.org",
			"type": "m.room_membership"
		},
		{
			"room_id": "!ddFNqIRUacwdicInJz:feneas.org",
			"type": "m.room_membership"
		}
	],
	"join_rule": "restricted"
}
```

It can be presumed that multiple spaces is simply copying that more.

## Note to self

* `!LSWnevuzcRXZZKhqso:privacytools.io` - Tanukis - room version 5
* `!psumPMeAfzgAeQpXMG:feneas.org` - Mikaela.info (space) - room version 6
