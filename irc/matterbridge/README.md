<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Matterbridge resources](#matterbridge-resources)
  - [My other resources](#my-other-resources)
  - [Other resources](#other-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Matterbridge resources

Mainly _myrelays.md_ documenting what my personal matterbridge instance is
doing and _matterbridge-example.toml_ as an example on what config file
could look like.

## My other resources

- systemd units (including timers to not have to use cron and to see specific
  restart times, even randomized, before they happen in `systemctl status`)
  - [matterbridge.service](https://gitea.blesmrt.net/mikaela/shell-things/src/branch/master/etc/systemd/system/matterbridge.service)
  - [matterbridge-restart.service](https://gitea.blesmrt.net/mikaela/shell-things/src/branch/master/etc/systemd/system/matterbridge-restart.service) and to run it [matterbirdge-restart.timer](https://gitea.blesmrt.net/mikaela/shell-things/src/branch/master/etc/systemd/system/matterbridge-restart.timer)
  - [matterbridge-cleanup.service](https://gitea.blesmrt.net/mikaela/shell-things/src/branch/master/etc/systemd/system/matterbridge-cleanup.service) and to run it [matterbridge-cleanup.timer](https://gitea.blesmrt.net/mikaela/shell-things/src/branch/master/etc/systemd/system/matterbridge-cleanup.timer)
    to not store media uploads for longer than a week.
- [sudoers.d/matterbridge-restart](https://gitea.blesmrt.net/mikaela/shell-things/src/branch/master/etc/sudoers.d/restart-matterbridge)
  for passwordless `sudo systemctl restart matterbridge.service`

## Other resources

- [Upstream wiki](https://github.com/42wim/matterbridge/wiki/)
