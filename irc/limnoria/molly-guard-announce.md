<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Preventing accidental owner announces](#preventing-accidental-owner-announces)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Preventing accidental owner announces

By default `announce` command sends a message to every channel the bot is on
prefixed by `Announcement from my owner (username):` and this may be easy
to trigger by accident when not specifying the plugin such as `GitHub` or `RSS`.

However this is easy to avoid with a couple of plugins

1. `/query botname`
1. `load Aka`
1. `load <Reply|Utilities>` meaning to load either Reply or Utilities
1. `aka add announce "<reply reply|utilities echo> You didn't mean for me to send that message everywhere, so I am hijacking it instead"`

- here again one is picked, "utilities echo" will just repeat the message
  on channel while "reply reply" will ping you. The name of the plugin is
  specified in case the command "echo" or "reply" was in multiple plugins.

1. `defaultplugin announce aka` so that when `announce` is called, it's
   assumed that our new `aka` is meant instead of Owner which is an important
   plugin and loaded by default.
