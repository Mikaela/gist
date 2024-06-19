<!-- @format -->

# `im.nheko.event_expiry`

- Two unit conversion tools from `m.room.retention` notes:
  - https://unitchefs.com/milliseconds/days/
  - https://unitchefs.com/days/milliseconds/

---

<!-- prettier-ignore-start -->

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Disable](#disable)
- [28 days](#28-days)
  - [Example with keep only x messages & always keep](#example-with-keep-only-x-messages--always-keep)
- [31 days](#31-days)
- [365 days](#365-days)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<!-- prettier-ignore-end -->

---

## Disable

- Expire events after 0 days
- Only keep latest 0 events
- Always keep latest 0 events

```json
{
  "exclude_state_events": true
}
```

## 28 days

_Also known as 4 weeks._

```json
{
  "exclude_state_events": true,
  "expire_after_ms": 2419200000
}
```

### Example with keep only x messages & always keep

- Expire events after 28 days
- Only keep latest 5 events
- Always keep latest 1 events

```json
{
  "exclude_state_events": true,
  "expire_after_ms": 2419200000,
  "keep_only_latest": 5,
  "protect_latest": 1
}
```

## 31 days

```json
{
  "exclude_state_events": true,
  "expire_after_ms": 2678400000
}
```

## 365 days

```json
{
  "exclude_state_events": true,
  "expire_after_ms": 31536000000
}
```
