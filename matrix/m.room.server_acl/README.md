# m.room.server_acl

This event type controls which servers can access the room at all. Be very careful
adjusting this.

* https://matrix.org/docs/guides/moderation#banning-servers-from-rooms-server-acls

```json
{
	"allow": [
		"*"
	],
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

