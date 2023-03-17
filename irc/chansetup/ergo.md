<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Channel setup on Ergo](#channel-setup-on-ergo)
  - [Private extras](#private-extras)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Channel setup on Ergo

```
/cs register #channel
/cs amode #channel +o relaybot-for-relaymsg
/mode #channel +EMntC
```

## Private extras

```
/cs set #channel query-cutoff join-time
/mode #channel +sf #publicchannel
```
