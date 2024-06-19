<!-- @format -->

# Element config.json

Initially copied from https://develop.element.io/config.json, but it has
evolved.

<!-- editorconfig-checker-disable -->
<!-- prettier-ignore-start -->

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Placement](#placement)
- [Labs features for config.json](#labs-features-for-configjson)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<!-- prettier-ignore-end -->
<!-- editorconfig-checker-enable -->

## Placement

- Flatpak: `~/.var/app/im.riot.Riot/config/Riot/config.json` or
  `~/.var/app/im.riot.Riot/config/Element-PROFILENAMEHERE/config.json`
- Linux outside of flatpak: `~/.config/Element/config.json` or
  `~/.config/Element-PROFILENAMEHERE/config.json`
  - failing that it appears to also read `~/.config/Riot/*` should that exist.
- Windows: `%APPDATA%\Element\config.json` or youcan figure out the profile
  name if you use Windows.

## Labs features for config.json

- https://github.com/vector-im/element-web/blob/develop/docs/labs.md
- https://github.com/matrix-org/matrix-react-sdk/blob/develop/src/settings/Settings.tsx
