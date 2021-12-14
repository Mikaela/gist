# Palaver configs

Upstream: https://palaverapp.com/guides/commands/set.html

* `/set ui.time_format YY-'W'w-e HH.mm.ss`
  * e.g.  21-W50-2 14.59.12 (on 2021, week 50, the second day (Tuesday) of the week)
* `/set ui.nick_show_mode on`
  * makes prefixes visible
* `/set ui.nick_prefix <`
* `/set ui.nick_suffix >`
* `/set ui.browser system_default`

## Other timestamp formats

Detailed spec: https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Format_Patterns

* `/set ui.time_format yy-D HH.mm.ss`
  * e.g.  21-173 19.51.30 (on 2021-06-22, 173th day of 2021)
