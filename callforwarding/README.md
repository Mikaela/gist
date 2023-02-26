# Call forwarding, relevant commands edition

_This is widely documented around the internet, but everything has a lot
of details irrelevant to my case of two phones and it's always effort to
cherry-pick the relevant parts. This file may be unintentionally Finland
specific._

1. Open dialer
2. Enter command. +358 is Finnish international format, remove leading 0 from
   phone number's local format. (040… → +3584…)
3. Call there

## Commands

- `##002#` - Remove all call forwards
- `**61*+358…**30#` - forward if call is not answered in 30 seconds
  - 30 may be replaced with multiples of 5 between 5 and 30.
- `**62*+358…#` - forward if phone is not connected to network.
- `**67*+358…#` - forward if phone is on another call.

Copy-paste template for text editor:

```
**61*+358…**30#
**62*+358…#
**67*+358…#
```

## Status check

- `*#002#` - Supposedly status for all forwards. Will respond with everything
  has failed.
- `*#61#` - Status for forward while not answered. Doesn't show the amount of seconds as
  that would likely make life too easy?
- `*#62#` - Status for forward when not connected to network.
- `*#67#` - Status for when being in other calls.

## GUI

- Apple: has no proper GUI for the cases above, only on/off toggle on forwarding
  every call. https://support.apple.com/guide/iphone/iphe9bdd027a/ios
- Android: likely OEM-dependent and I don't have an Android with a SIM.
- SailfishOS: Settings → Applications → Phone → Call forwarding. Case forward when
  not answered in X time has no option how long to wait and I am not going to try
  whether it forwards in 5 or 30 seconds.
