# hookshot room state configuration

When Hookshot is configured via the manage integrations menu, it appears to
perform two state installations/directories/whatever:

- `uk.half-shot.matrix-hookshot.feed`
  - contains state events with the feed name
    - contains the json below
- `io.element.integrations.installations`
  - contains uuid below

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [feed](#feed)
- [installation](#installation)
- [Usage without integration manager](#usage-without-integration-manager)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

--

## feed

This entry is the feed url e.g.
`https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_NEWS`, and
contains:

```json
{
  "label": "YLE News in English",
  "url": "https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_NEWS"
}
```

## installation

This probably has or should be left for the integration manager.

```json
{
  "appId": "hookshot-feeds",
  "installationId": "uuid-goes-here",
  "userIds": ["@feeds:integrations.ems.host"],
  "widgetIds": []
}
```

## Usage without integration manager

Hookshot appears to answer `/invite @feeds:integrations.ems.host` and
`!feeds help` so it will hopefully work without having to touch an
integration manager for benefit of Element iOS users.

Note that the bot will likely require power level to touch room state so
it will in most cases require power level 50.

For reference the list of commands:

- `!feeds feed <url> [label]` - Bridge an RSS/Atom feed to the room.
- `!feeds feed list` - Show feeds currently subscribed to.
- `!feeds feed remove <url>` - Unsubscribe from an RSS/Atom feed.
- `!feeds setup-widget` - Open the setup widget in the room
- `!feeds help` - This help text
