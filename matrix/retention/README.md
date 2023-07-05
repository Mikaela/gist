<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [WARNING](#warning)
- [Room history retention settings / state event `m.room.retention`](#room-history-retention-settings--state-event-mroomretention)
  - [Notes](#notes)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# WARNING

**_Don't do this!_**

- [You may corrupt your Synapse database!](https://github.com/matrix-org/synapse/issues/13476)
- If a Synapse homeserver leaves your room for long enough time,
  [it will never be able to rejoin!](https://github.com/matrix-org/synapse/issues/11448)

# Room history retention settings / state event `m.room.retention`

- https://brendan.abolivier.bzh/matrix-retention-policies/

Read that, it explains what is actually done etc.

## Notes

- Not part of spec. https://github.com/matrix-org/matrix-spec-proposals/pull/1763
- Matrix uses milliseconds, keep that in mind!
- Everything requires every server involved to have rention support enabled,
  otherwise the messages go nowhere and are fetchable upon request.
- 86400000 = 1 day (seen in min lifetimes)
- Helpful: https://unitchefs.com/milliseconds/days/ / https://unitchefs.com/days/milliseconds/
