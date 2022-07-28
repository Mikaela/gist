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
			"room_id": "!whatever:example.net",
			"type": "m.room_membership"
		}
	],
	"join_rule": "restricted"
}
```

It can be assumed that multiple spaces is simply copying that more,
see below (with exception of `join_rule`)

### merging knocking and membership of another room

Practically the same, but requires room version 10 and new `join_rule` known as
`knock_restricted`

```json
{
	"allow": [
		{
			"room_id": "!ddFNqIRUacwdicInJz:feneas.org",
			"type": "m.room_membership"
		},
		{
			"room_id": "!SxRXoLGlraVfdhZBYy:matrix.org",
			"type": "m.room_membership"
		},
		{
			"room_id": "!fGtopoZuCySnTsSdsU:matrix.org",
			"type": "m.room_membership"
		},
		{
			"room_id": "!xFKkXCpcnEwgBEQBFt:matrix.org",
			"type": "m.room_membership"
		},
		{
			"room_id": "!ruWhXaXgrPjaSSecvb:matrix.org",
			"type": "m.room_membership"
		},
		{
			"room_id": "!zYPetrOdqxxQYoWCTb:the-apothecary.club",
			"type": "m.room_membership"
		},
		{
			"room_id": "!watercooler-v9:maunium.net",
			"type": "m.room_membership"
		},
		{
			"room_id": "!etDMqntYVqugEClPcE:artemislena.eu",
			"type": "m.room_membership"
		},
		{
			"room_id": "!sOLQNHloevPHIEWcYN:matrix.org",
			"type": "m.room_membership"
		},
		{
			"room_id": "!KMbEUhVQHLwZHmwzKX:matrix.org",
			"type": "m.room_membership"
		},
		{
			"room_id": "!rCWNvpCTZHQkiRYUDE:matrix.org",
			"type": "m.room_membership"
		},
		{
			"room_id": "!AUKUBkWpbVaNhXJhuD:vi.fi",
			"type": "m.room_membership"
		},
		{
			"room_id": "!TtWVeGGDmpLieTGJss:pirateriot.net",
			"type": "m.room_membership"
		}
	],
	"join_rule": "knock_restricted"
}
```

## Note to self

* `!psumPMeAfzgAeQpXMG:feneas.org` - Mikaela.info (space) - room version 6
* `!SxRXoLGlraVfdhZBYy:matrix.org` - eu.aminda.space v9
* `!fGtopoZuCySnTsSdsU:matrix.org` - eu.aminda.space v10
* `!xFKkXCpcnEwgBEQBFt:matrix.org` - aminda.eu v9
* `!ruWhXaXgrPjaSSecvb:matrix.org` - aminda.eu v10
* `!zYPetrOdqxxQYoWCTb:the-apothecary.club` - The Apothecary Community v6
* `!watercooler-v9:maunium.net` - WaterDuck v9
* `!etDMqntYVqugEClPcE:artemislena.eu` - Community Moderation Effort v9
* `!sOLQNHloevPHIEWcYN:matrix.org` - Secure Messaging Apps v6
* `!KMbEUhVQHLwZHmwzKX:matrix.org` - Matrix Haters v9
* `!rCWNvpCTZHQkiRYUDE:matrix.org` - Matrix.fi v5
* `!AUKUBkWpbVaNhXJhuD:vi.fi` - Olohuone v6
* `!TtWVeGGDmpLieTGJss:pirateriot.net` - GlobalPirates v9
