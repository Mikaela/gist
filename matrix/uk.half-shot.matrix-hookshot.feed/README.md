# hookshot room state configuration

When Hookshot is configured via the manage integrations menu, it appears to
perform two state events with state keys:

- `uk.half-shot.matrix-hookshot.feed`
  - state events with state keys that are the feed name
    - contains the json below
- `io.element.integrations.installations`
  - contains uuid below

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [feed](#feed)
  - [Template variations](#template-variations)
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
  "template": "$FEEDTITLE: $AUTHOR $LINK ($DATE) $SUMMARY",
  "url": "https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_NEWS"
}
```

- `"template"` is optional and defaults to `New post in $FEEDNAME: $LINK`
  - Note: `$LINK` actually means `[$TITLE](LINK)`. `$URL` is just the link.
  - [Upstream documentation](https://matrix-org.github.io/matrix-hookshot/latest/setup/feeds.html#feed-templates)

### Template variations

This contains the whole JSON line to easen copy-pasting as my events are missing it entirely.

- default: `"template": "New post in $FEEDNAME: $LINK",`
- Matrix: `"template": "$FEEDTITLE: $AUTHOR $LINK ($DATE) $SUMMARY",`
- IRC: `"template": "$URL $FEEDTITLE: $TITLE $AUTHOR ($DATE) $SUMMARY",`
  - Line length is limited so if the URL is long, it's the most important thing.
- IRCish: `"template": "$TITLE $URL $SUMMARY $AUTHOR $DATE $FEEDTITLE",`
  - Still compatibleish with IRC, but in case the client has preview, it may be more useful now.

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
