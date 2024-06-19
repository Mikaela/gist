<!-- @format -->

Bot config files or samples or examples that have something to do with me and
Pirate Party Finland (Piraattipuolue). I am not sure if they can be used
directly to start bots, at least Limnoria configs require creating other
directories around them and
`supybot-adduser -u root -p password -c owner conf/users.conf`.

I won't promise to keep this up-to-date, but I think it might be better than
nothing.

**_READ ALSO https://wiki.piraattipuolue.fi/K%C3%A4ytt%C3%A4j%C3%A4:Mikaela
!_**

Notes:

- teleirc.service is not used by the PirateIRC instance that I run. It has to
  be started manually as I don't have root on Kapsi and they don't have
  systemd or user services at the time of writing and without lithing that
  would require logging in once after every reboot for it to start doing
  anything
- discord-irc assumes that you have cloned the git repo and installed using
  npm there.
  - offtopic, but remember to enable Discord developer mode in settings for
    being able to right click channel name to copy ID.
