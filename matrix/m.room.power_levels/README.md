# Template power levels event for quick copy-pasting

The main point I do this for is users `users`

```json
{
    "users": {
      "@mikaela:feneas.org": 100,
      "@Ciblia:matrix.org": 100,
      "@aminda:matrix.org": 100,
      "@mikaela:pirateriot.net": 100,
      "@mikaela:liberta.casa": 100,
      "@mikaela.suomalainen:matrix.org": 100,
      "@mikaela:tchncs.de": 100,
      "@aminda:tedomum.net": 100,
      "@mikaela.matterbridge:tedomum.net": 100,
      "@mikaela.matterbridge:converser.eu": 100,
      "@mikaela-matterbridge:feneas.org": 100,
      "@leon:the-apothecary.club": 100
    }
},
```

but here is `events` just in case. Please don't copy-paste directly, that may
break things:

```json
{
  "type": "m.room.power_levels",
  "content": {
    "invite": 100,
    "events": {
      "m.room.avatar": 100,
      "im.vector.modular.widgets": 100,
      "m.room.history_visibility": 100,
      "m.room.name": 100,
      "m.room.encryption": 100,
      "m.room.tombstone": 100,
      "m.room.canonical_alias": 100,
      "m.room.power_levels": 49,
      "m.room.topic": 100,
      "m.room.retention": 100
    },
    "redact": 50,
    "ban": 50,
    "kick": 50,
    "users_default": 0,
    "events_default": 0,
    "state_default": 50
  },
}
```

* If `m.room.power_levels` event is 49, moderators (PL50) are able to raise
  other users to moderators while sharing equal power they won't be able to
  demote.
