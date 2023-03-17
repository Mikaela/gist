<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Notes regarding Matrix, a decentralised conversation store](#notes-regarding-matrix-a-decentralised-conversation-store)
  - [Other notes not needing their own directories](#other-notes-not-needing-their-own-directories)
    - [Account migration](#account-migration)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Notes regarding Matrix, a decentralised conversation store

As a lot of things require playing around with `/devtools` and raw state
events, this is where I collect those and other things related to Matrix.

Events are mostly named how they are used, but `retention` predates that so
`m.room.retention` is a symlink to not break either links or muscle memory
on terminal. `account-data` is an exception for appearing that way in `/devtools`
(kind of) and clients (Element & FluffyChat) have their own directories.

## Other notes not needing their own directories

### Account migration

- [EMS Matrix account migration tool](https://ems.element.io/tools/matrix-migration)
  - Centralized, propietary, service, works less well since Synapse 1.11.0rc1
    made PL50 requirement for inviting users to new rooms.
- [Variate](https://github.com/ShadowJonathan/variate) is planning to be
  a tool for _migrating between different Matrix server implementations_.
