# Briar notes

Briar is a P2P over Tor messenger that can also peer over LAN and Bluetooth.

`my-accounts.csv` has list of my Briar addresses, as there isn't support
for multiple devices. They possibly should be in aminda.eu, but I don't
know what would be a good way to show them as browser integrated CSV
viewers are rare and I don't think these would be in so much demand.

_Note that as per the FAQ, the connection request needs to be accepted
within 48 hours by entering your Briar address. However after that
introductions can be made without timeout concerns._

Briar doesn't hold as big place in my heart as IRC or Matrix to have a
dedicated page either and my HTML table tendency is effort even if the page
wasn't given a navigation menu entry.

## Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [My account naming](#my-account-naming)
  - [Which accounts of mine you should care about?](#which-accounts-of-mine-you-should-care-about)
- [Briar desktop](#briar-desktop)
- [Further reading and quotes](#further-reading-and-quotes)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## My account naming

I tend to name my accounts `Aminda-HOSTNAME (%Y-%j)` e.g.
`Aminda-Lumina (2022-153)` where `%Y` is year in 4 digits and `%j` the day
of the year (001 to 366). However the older the Briar account still in use,
the more random naming scheme there is.

This is by no means a security feature, anyone can name their device like
that, it's more of convenience should there be older and newer me on same
device in contacts lists. This doesn't either mean that I will remember
this scheme or updating these files.

### Which accounts of mine you should care about?

For more details such as the Briar links, refer to `my-accounts.tsv`.

- My Briar desktops serve my phones that only connect to network when charging
  - `Aminda-Lumina (2022-153)` has recently been more active and travels with
    me.
  - `Aminda (SedricFlatpak-2022-075)` home device that also runs Samba for
    PlayStation 2
- My phones are
  - `Aminda-Janus (2023-061)` - actually tertiary phone, but native Android
    and which I mostly use to post to forums to (via WLAN)
  - `Mikaela` - my main phone predating the naming scheme discussed earlier,
    but as it's SailfishOS Android AppSupport important Briar features are not
    implemented and I don't use it that much.
- My family devices that are seldom online don't need to be cared about that
  much, but they have all the forums that my other devices if I have been
  sharing them.
  - `Aminda-Zaldaryn (2022-161)` - mostly seen when I am at family.
  - `Aminda-Rbtpzn (2023-034)` - 2006 desktop PC that really shouldn't have
    Briar.
- Then there are deprecated accounts/devices that occassionally come online
  but are not a priority.
  - `A` replaced by `Aminda-Janus`
  - `Aminda-Lumina-UserTest-2023-045` is a Briar test build instance as a
    result of attempting to contribute and test Briar flatpak.
- And dead accounts.
  - `Aminda-Janus (2022-311)`
    - factory reset on 2023-061. Note changed date number.

And to repeat one more time:

> `%j     The day of the year as a decimal number (range 001 to 366).  (Calculated from tm_yday.)`

-- `Manual page strftime(3)`

## Briar desktop

Port: [it will pick one and try to stick with it](https://matrix.to/#/%23briar_desktop%3Atchncs.de/%24FKJk80vFnp2Fqnyov8g2S1QGJuY8SrJBlPjjqGSaW5M?via=pikaviestin.fi&via=matrix.org&via=dendrite.matrix.org&via=tchncs.de), so `sudo netstat -plnt` is your friend, look for `java`. It should be on LAN and link-local interfaces.

I install it from Flathub and at the time of writing it doesn't support
groups (where only creator can add users)<s>, forums (groups where everyone can
add new users)</s> or blogs.

## Further reading and quotes

- https://briarproject.org/quick-start/
  - > Please note that Briar will only synchronize messages with your contacts, not with nearby strangers who are running Briar. And it will only sync the messages you’ve chosen to share with each contact. For example, if you invite your contacts X and Y to join a forum, and they accept, then messages in that forum will be synced with X or Y whenever they’re within range. So you can receive forum messages from X in one location, travel to another location, and deliver those messages to Y.
  - > But this doesn’t work for private messages: they’re only synchronized directly between the sender and recipient.
- https://code.briarproject.org/briar/briar/-/wikis/FAQ
  - > Your Briar link contains a public key and it is safe to publish in the same way as a PGP public key. If you want to contact someone via Briar, both of you need to add each other's links.
  - > No, your online status isn't exposed by publishing your `briar://` link. Only your contacts can tell whether you're online.
  - > No. Unlike with adding contacts at a distance and its 48 hours timeout, there's no such thing for introductions.
- https://code.briarproject.org/briar/briar-desktop/-/wikis/Changelog
  - > \[0.2.0-beta 2022-02-22\] Synchronize messages via local LAN
