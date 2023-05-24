<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [PlayStation 2 notes](#playstation-2-notes)
  - [Subdirectories](#subdirectories)
  - [PlayStation 2 System Configuration](#playstation-2-system-configuration)
  - [TV configuration](#tv-configuration)
  - [Samba](#samba)
  - [FreeMCBoot](#freemcboot)
    - [FreeMCBoot Installer configuration](#freemcboot-installer-configuration)
    - [FreeMCBoot Configurator](#freemcboot-configurator)
  - [Open PS2 Loader configuration](#open-ps2-loader-configuration)
    - [VMC configuration](#vmc-configuration)
      - [Why share VMC?](#why-share-vmc)
    - [OPS2L Version](#ops2l-version)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# PlayStation 2 notes

I have a ProCaster TV which isn't anything special unless it not being smart
counts. PS2 is connected through
[RCA HDMI adapter/signal converter](https://infshop.fi/hdmi/92919-rca-hdmi-sovitin-signaalimuunnin-7314280105281.html) ([archived](https://archive.is/J9AeJ))

NOTE! This directory contains `.editorconfig` and `.gitattributes` as for
some reason everything related to PS2 is using `crlf` (aka "Windows style")
line-endings, so I am assuming that using `lf` would just mean things won't
work, so be cautious when editing things.  
The `file` command may be helpful e.g.

```bash
% file SCES_509.16.cfg
SCES_509.16.cfg: ASCII text, with CRLF line terminators
```

## Subdirectories

- `CHT/` - OpenPS2Loader `CHT/` directory
- `etc/` - `/etc/` directory, for the samba configuration file
- FreeMCB/ - `mass:/` or whatever device/directory contains FreeMCBoot
  installer

## PlayStation 2 System Configuration

_System Configuration_ is the second option when booting without a disc.

- Screen Size: `16:9` as screens aren't squares nowadays (if yours was, `4:3` or `full`)
- Digital Out (Optical): mine says `On` although I don't remember touching it
- Component Video Out: `Y Cb/Pb Cr/Pr` removed letterboxing for me.

## TV configuration

My TV has an aspect ratio setting and the universal remote control I am using has a `16:9` button that I just kept pressing until it said `16:9`

## Samba

- https://gitea.blesmrt.net/mikaela/shell-things/src/branch/master/etc/samba/playstation2.conf
- Remember firewalls!
  - `sudo ufw allow samba`
  - `sudo firewall-cmd --add-service=samba --permanent --zone=home && sudo firewall-cmd --reload`

## FreeMCBoot

I downloaded it from [ps2-home.com](https://www.ps2-home.com/forum/viewtopic.php?f=11&t=1890) which apparently removes `BOOT/LAUNCHELF.CNF` which is reported to cause black screens.

### FreeMCBoot Installer configuration

If you place files in `INSTALL/BOOT` directory of FreeMCBoot installation
device, those will get copied to the memory card saving time and effort.  
However they may not get automatically added to the menu, unless they are
added into `INSTALL/SYS-CONF/FREEMCB.CNF`.

While it's included here for reference, DON'T USE IT DIRECTLY just in case,
use something like `code --diff` to compare it with your file and just use
the piece if necessary.

The relevant piece is near the end,

```
name_OSDSYS_ITEM_6 = OpenPS2Loader
path1_OSDSYS_ITEM_6 = mass:/BOOT/OPNPS2LD-v1.1.0.ELF
path2_OSDSYS_ITEM_6 = mc?:/BOOT/OPNPS2LD-v1.1.0.ELF
path3_OSDSYS_ITEM_6 = mc?:/B?DATA-SYSTEM/OPNPS2LD-v1.1.0.ELF
```

In my case nothing else was using the ITEM6, so I copied prior example and put it in place. I also had a `ESR.ELF` named there, while I had to add OpenPS2Loader.

### FreeMCBoot Configurator

_FreeMCBoot Configurator_ is the seventh option for me and I set the following so that the boot animation with the boxes play, because of both nostalgia and the secret there :wink:

- Configure OSDSYS options
  - Skip Disc Boot: `OFF`
  - Skip Sony LOGO: `OFF`
  - RETURN
- `Save CNF to MC<0|1>`
- EXIT

## Open PS2 Loader configuration

Start (menu), settings. This is mostly personal opinions too.

- PS2 Logo: `on`
  - Some games allow progressive scanning by holding Triangle and Cross when the logo appears, so seeing them is easier.
- Write Operations `On`
  - Required for using same VMC across multiple games. [ps2homebrew/Open-PS2-Loader#654 (Comment)](https://github.com/ps2homebrew/Open-PS2-Loader/issues/654#issuecomment-1140989005)
- <s>Remember Last Played Game `On` Auto Start `9`</s>
  - actually not that good idea as it seems to cause every time game is
    switched to memory card.
- ETH Device Start Mode `auto`
- Default Menu `ETH Games`

Controller settings

- Configure PADEMU
  - Settings Mode: `Global`
  - Pad Emulator `Off`
    - Required for some games to work [Open-PS2-Loader#842](https://github.com/ps2homebrew/Open-PS2-Loader/issues/842)
      - I experienced this with _Kingdom Hearts II_ not having background music.

Network Settings don't have anything special to note. Remember to `save changes`

### VMC configuration

- Select a game and press `Triangle` for `Options`
- Configure VMC
- This should be clear without extra documentation
- Remember to `Save Changes`

Note: PCSX2 can use the same VMCs as OPS2L, so if OPS2L has just small
segment of unplayable game, PCSX2 can be used to get past it before
continuing on OPS2L.

#### Why share VMC?

Using VMC shares space on the physical memory card and makes backups easier (e.g. script in this directory). When all games have their own memory card, there is less to lose if something goes wrong.

However there are games that give some benefit for having played other games e.g.

- If you have a Ratchet & Clank save on your memory card
  - Ratchet & Clank 2 provides the weapons returning from it for free.
  - Ratchet & Clank 3 provides skin and employee discount in vendors.
- If you have a Ratchet & Clank 2 save on your memory card
  - Ratchet & Clank 3 provides the weapons returing from 2 for free.

See also [TvTropes: Old Save Bonus](https://tvtropes.org/pmwiki/pmwiki.php/Main/OldSaveBonus)

### OPS2L Version

My backup memory card is on [v1.1.0](https://github.com/ps2homebrew/Open-PS2-Loader/releases/tag/v1.1.0),
but due to it getting a bit aged, I had to upgrade the main to [daily builds](https://github.com/ps2homebrew/Open-PS2-Loader/releases/tag/latest)
(currently `bd6df259817242fd9cefcbf005489559068ededd`).

Potentially helpful links:

- [Previous stable to current daily diff](https://github.com/ps2homebrew/Open-PS2-Loader/compare/v1.1.0...latest)
- [Previous stable to my build version](https://github.com/ps2homebrew/Open-PS2-Loader/compare/v1.1.0...bd6df25)
- [Difference between the latest two daily builds I have used](https://github.com/ps2homebrew/Open-PS2-Loader/compare/d26da79...bd6df25)

Note to self: my file name doesn't match the version as I am lazy and don't
want to edit the config file.
