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
			"room_id": "!fGtopoZuCySnTsSdsU:matrix.org",
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
			"room_id": "!watercooler-v10:maunium.net",
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
			"room_id": "!MHqztrxnQriEOyNLjW:pirateriot.net",
			"type": "m.room_membership"
		},
		{
			"room_id": "!xwkzwkGafsaYJOFWoj:the-apothecary.club",
			"type": "m.room_membership"
		},
		{
			"room_id": "!WDaMZSVinTZRLOTajM:hacklab.fi",
			"type": "m.room_membership"
		},
		{
			"room_id": "!IwPxifXSjBLghpVEMh:matrix.org",
			"type": "m.room_membership"
		}
	],
	"join_rule": "knock_restricted"
}
```

## Note to self

* `!fGtopoZuCySnTsSdsU:matrix.org` - eu.aminda.space v10
* `!ruWhXaXgrPjaSSecvb:matrix.org` - aminda.eu v10
* `!zYPetrOdqxxQYoWCTb:the-apothecary.club` - The Apothecary Community v6
* `!watercooler-v10:maunium.net` - WaterDuck v10
* `!etDMqntYVqugEClPcE:artemislena.eu` - Community Moderation Effort v9
* `!sOLQNHloevPHIEWcYN:matrix.org` - Secure Messaging Apps v6
* `!KMbEUhVQHLwZHmwzKX:matrix.org` - Matrix Haters v9
* `!rCWNvpCTZHQkiRYUDE:matrix.org` - Matrix.fi v5
* `!AUKUBkWpbVaNhXJhuD:vi.fi` - Olohuone v6
* `!MHqztrxnQriEOyNLjW:pirateriot.net` - GlobalPirates v10
* `!xwkzwkGafsaYJOFWoj:the-apothecary.club` - Apothecary Homeserver default/welcome room (v5)
* `!WDaMZSVinTZRLOTajM:hacklab.fi` - Matrix Suomi (Space) v6
* `!IwPxifXSjBLghpVEMh:matrix.org` - FluffyChat v5
