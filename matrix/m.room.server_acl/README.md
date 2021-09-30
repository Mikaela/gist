# m.room.server_acl

This event type controls which servers can access the room at all. Be very careful
adjusting this.

* https://matrix.org/docs/guides/moderation#banning-servers-from-rooms-server-acls

Note: when sending the custom event via `/devtools` for the first time, click
the `Event` so it says `State Event` and asks for `State key` in addition to `type`,
which can/is left empty as usual.

```json
{
	"allow": [
		"*"
	],
	"allow_ip_literals": false,
	"deny": [
		"glowers.club",
		"*.glowers.club",
		"pleasecuminside.me",
		"*.pleasecuminside.me",
		"midov.pl",
		"*.midov.pl",
		"kiwifarms.net",
		"*.kiwifarms.net"
	]
}
```

