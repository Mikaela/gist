<!-- @format -->

# Proposed `m.room.join_rules` for Community Moderation Effort

For more information about `m.room.join_rules`, refer to `README.md` in this
directory.

<!-- editorconfig-checker-disable -->
<!-- prettier-ignore-start -->

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [The problem](#the-problem)
- [The solution](#the-solution)
  - [The rooms](#the-rooms)
  - [Relevant excluded rooms](#relevant-excluded-rooms)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<!-- prettier-ignore-end -->
<!-- editorconfig-checker-enable -->

## The problem

Whenever new moderators join us, they are generally invited to the main room
and expected to find their way to the other rooms.

However the other rooms will error at them for not being a member of the space
first as that is how Element or Matrix has designed it.

## The solution

Allow moderators to join any room, including the space, as long as they are a
member of another room, even if it was the room they were attempting to join.

```json
{
  "allow": [
    {
      "room_id": "!DcaHQxyIyPiGpoyUcx:fairydust.space",
      "type": "m.room_membership"
    },
    {
      "room_id": "!etDMqntYVqugEClPcE:artemislena.eu",
      "type": "m.room_membership"
    },
    {
      "room_id": "!UzhJxpVKFHtlgsIjjr:fairydust.space",
      "type": "m.room_membership"
    },
    {
      "room_id": "!feRAxFkutgWTcPZMDf:neko.dev",
      "type": "m.room_membership"
    }
  ],
  "join_rule": "restricted"
}
```

### The rooms

- `!DcaHQxyIyPiGpoyUcx:fairydust.space` - The space version 9.
- `!etDMqntYVqugEClPcE:artemislena.eu` - Main version 9.
- `!UzhJxpVKFHtlgsIjjr:fairydust.space` - Secondary version 9.
- `!feRAxFkutgWTcPZMDf:neko.dev` - Code of Conduct discussion version 9.

### Relevant excluded rooms

- `!fTjMjIzNKEsFlUIiru:neko.dev` - The policy room version 9.
