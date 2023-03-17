<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [HexChat configs](#hexchat-configs)
  - [Settings changes](#settings-changes)
    - [Settings → Text events](#settings-%E2%86%92-text-events)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# HexChat configs

- Timestamp format: `[%Y-%j %H.%M.%S]` or `[%G-W%V-%u %H:%M:%S]`
  - Example: `2021-173 19.40.50` or `2021-W34-5 13:44:50`
- Nickname length: `/set text_max_indent 640`
  - so huge nicknames (especially with RELAYMSG) won't overlap timestamps
  - source: https://hexchat.readthedocs.io/en/latest/faq.html#why-does-the-timestamp-overlap-some-nicknames
- Auto-reconnect: `/set net_ping_timeout 90`
  - https://hexchat.readthedocs.io/en/latest/faq.html#how-do-i-auto-reconnect-after-my-computer-wakes-up-from-being-in-sleep-hibernate-mode

## Settings changes

- When using playback script (might be undesirable due to Ergo with
  @clientid behaving better)
- Disable logging?
- Disable scrollback
- Realname (or `/set irc_real_name Mikaela <email@example.net>`

### Settings → Text events

- Channel messages to show prefix
  - original: `%C18%H<%H$4$1%H>%H%O$t$2`
  - new: `%C18%H<%H$4$3$1%H>%H%O$t$2`
  - source: https://hexchat.readthedocs.io/en/latest/faq.html#how-do-i-show-and-in-front-of-nicknames-that-are-op-and-voice-when-they-talk
