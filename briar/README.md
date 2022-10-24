# Briar notes

Briar is a P2P over Tor messenger that can also peer over LAN and Bluetooth.

`my-accounts.csv` has list of my Briar addresses, as there isn't support
for multiple devices. They possibly should be in aminda.eu, but I don't
know what would be a good way to show them as browser integrated CSV
viewers are rare and I don't think these would be in so much demand.

*Note that as per the FAQ, the connection request needs to be accepted
within 48 hours by entering your Briar address. However after that
introductions can be made without timeout concerns.*

Briar doesn't hold as big place in my heart as IRC or Matrix to have a
dedicated page either and my HTML table tendency is effort even if the page
wasn't given a navigation menu entry.

## Naming

I tend to name my accounts `Aminda-HOSTNAME (%Y-%j)` e.g.
`Aminda-Lumina (2022-153)` where `%Y` is year in 4 digits and `%j` the day
of the year (001 to 366). However the older the Briar account still in use,
the more random naming scheme there is.

This is by no means a security feature, anyone can name their device like
that, it's more of convenience should there be older and newer me on same
device in contacts lists. This doesn't either mean that I will remember
this scheme or updating these files.

## Briar desktop

Port: [it will pick one and try to stick with it](https://matrix.to/#/%23briar_desktop%3Atchncs.de/%24FKJk80vFnp2Fqnyov8g2S1QGJuY8SrJBlPjjqGSaW5M?via=pikaviestin.fi&via=matrix.org&via=dendrite.matrix.org&via=tchncs.de), so `sudo netstat -plnt` is your friend, look for `java`. It should be on LAN and link-local interfaces.

I install it from Flathub and at the time of writing it doesn't support
groups (where only creator can add users), forums (groups where everyone can
add new users) or blogs.

## Further reading and quotes

* https://briarproject.org/quick-start/
  * > Please note that Briar will only synchronize messages with your contacts, not with nearby strangers who are running Briar. And it will only sync the messages you’ve chosen to share with each contact. For example, if you invite your contacts X and Y to join a forum, and they accept, then messages in that forum will be synced with X or Y whenever they’re within range. So you can receive forum messages from X in one location, travel to another location, and deliver those messages to Y.
  * > But this doesn’t work for private messages: they’re only synchronized directly between the sender and recipient.
* https://code.briarproject.org/briar/briar/-/wikis/FAQ
  * > Your Briar link contains a public key and it is safe to publish in the same way as a PGP public key. If you want to contact someone via Briar, both of you need to add each other's links.
  * > No, your online status isn't exposed by publishing your `briar://` link. Only your contacts can tell whether you're online.
  * > No. Unlike with adding contacts at a distance and its 48 hours timeout, there's no such thing for introductions.
* https://code.briarproject.org/briar/briar-desktop/-/wikis/Changelog
  * > \[0.2.0-beta 2022-02-22\] Synchronize messages via local LAN
