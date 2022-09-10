# `org.matrix.appservice-irc.config`

Also known as IRC bridge configuration, [upstream documentation](https://github.com/matrix-org/matrix-appservice-irc/blob/develop/docs/room_configuration.md)

```json
{
  "allowUnconnectedMatrixUsers": true
}
```

Another option would be `"lineLimit": 5` or whatever to configure at what point
the automatic pastebinning hits. Default is 3.
