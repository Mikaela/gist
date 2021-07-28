# Room history retention settings / state event `m.room.retention`

* https://brendan.abolivier.bzh/matrix-retention-policies/

Read that, it explains what is actually done etc.

## Notes

* Matrix uses milliseconds, keep that in mind!
* Everything requires every server involved to have rention support enabled,
  otherwise the messages go nowhere and are fetchable upon request.
* 86400000 = 1 day (seen in min lifetimes)
* Helpful: https://unitchefs.com/milliseconds/days/ / https://unitchefs.com/days/milliseconds/
