Element config.json

Initially copied from https://develop.element.io/config.json, but modified.

Placement:

Flatpak: `~/.var/app/im.riot.Riot/config/Riot/config.json`

- or `~/.var/app/im.riot.Riot/config/Element-PROFILENAMEHERE/config.json`
- Linux: `~/.config/Element/config.json` or `~/.config/Element-PROFILENAMEHERE/config.json`
  - failing that it appears to read `~/.config/Riot/*` should that exist.
- Windows: `%APPDATA%\Element\config.json`

Labs features:

- https://github.com/vector-im/element-web/blob/develop/docs/labs.md
- https://github.com/matrix-org/matrix-react-sdk/blob/develop/src/settings/Settings.tsx
