# Maubot notes

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [RSS templates](#rss-templates)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## RSS templates

Like with Hookshot, RSS templates must be specified per feed.
[Upstream documentation](https://github.com/maubot/rss/blob/master/README.md#templates)

Replace X with the feed ID seen in `!rss subscriptions`:

- default: `!rss template X New post in $feed_title: [$title]($link)`
- Matrix: `!rss template X [$feed_title]($feed_link): [$title]($link) ($date) $summary`
- IRC: `!rss template X $link $feed_title: $title ($date) $summary`

Note: at the time of writing `$author` is not supported?

Remember also that [matterbridge requires](https://github.com/42wim/matterbridge/issues/1393) `!rss notice X false`
