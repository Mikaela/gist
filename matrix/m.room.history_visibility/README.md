# `m.room.history_visibility`

`m.room.history_visibility` controls who can view the room history.

<!-- prettier-ignore-start -->

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Example](#example)
- [Options](#options)
- [See also](#see-also)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<!-- prettier-ignore-end -->

## Example

```json
{
  "history_visibility": "invited"
}
```

## Options

[Refer to the upstream for canonical information.](https://spec.matrix.org/latest/client-server-api/#room-history-visibility)

- `world_readable` - anyone can read the history without joining, and it
  likely will be indexed by search engines.
- `shared` - history is shared to all users in the room, regardless of when
  they joined.
  - [Matrix public archive will publish history of rooms with this option although not allow search engines to index.](https://github.com/matrix-org/matrix-public-archive/blob/main/docs/faq.md#why-does-the-archive-user-join-rooms-instead-of-browsing-them-as-a-guest)
- `invited` - users can see history from the point of time they were invited
  to the room. **_RECOMMENDED FOR SEMI-PUBLIC ROOMS_**
- `joined` users can see history from the point of time they joined

**_WARNING!_** Changing the option **will not affect old messages**.

## See also

- `m.room.join_rules`
