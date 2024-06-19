<!-- @format -->

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Hardening Limnoria](#hardening-limnoria)
  - [Passwordless users](#passwordless-users)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Hardening Limnoria

- Upstream documentation: https://docs.limnoria.net/use/security.html

## Passwordless users

_This is subject to moving to the upstream documentation, see
[Limnoria/Limnoria-doc#91](https://github.com/Limnoria/Limnoria-doc/issues/91)_

Passwordless user accounts have been supported since version 2021-05-27. They
must login by some other mechanism such as NickAuth, GPG or hostmasks.

Registering a passwordless user happens by
`/msg Limnoria user register <username> !`, and existing user may remove their
password by `/msg Limnoria user set password <old password> !`

It's also possible (while not recommended) to edit `users.conf` by hand.

1. `/msg bot flush` to save all current configuration changes to disc
1. `/msg bot config flush false` to disable automatic config file writing
1. Open `botdir/conf/users.conf` with your favourite text editor and remove
   the lines beginning with `password`
1. `/msg bot config reload` and all the accounts should be passwordless. You
   may also check that `config flush` is `True`, but the `False` shouldn't
   have gotten stored to disc anyway as it wasn't written to disc.
