<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [`org.matrix.appservice-irc.config`](#orgmatrixappservice-ircconfig)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# `org.matrix.appservice-irc.config`

Also known as IRC bridge configuration, [upstream documentation](https://github.com/matrix-org/matrix-appservice-irc/blob/develop/docs/room_configuration.md)

```json
{
  "allowUnconnectedMatrixUsers": true
}
```

Another option would be `"lineLimit": 5` or whatever to configure at what point
the automatic pastebinning hits. Default is 3.
