# Notes related to gayming

_A lot of older files that I haven't touched recently were moved to this
directory. I don't think anyone was using them, so I am not afraid of breaking
links._

<!-- editorconfig-checker-disable -->
<!-- prettier-ignore-start -->

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Wayland / Sway](#wayland--sway)
  - [Issues and solutions](#issues-and-solutions)
    - [Constant camera rotation](#constant-camera-rotation)
    - [Cursor doesn't stick to game window](#cursor-doesnt-stick-to-game-window)
      - [Graphics corruption such as display full of black dots](#graphics-corruption-such-as-display-full-of-black-dots)
    - [Steam client itself is laggy](#steam-client-itself-is-laggy)
- [Fedora Atomic](#fedora-atomic)
  - [Heroic Games flatpak](#heroic-games-flatpak)
    - [Actually using gamescope](#actually-using-gamescope)
  - [Steam flatpak](#steam-flatpak)
  - [Steam Deck](#steam-deck)
  - [Other flatpak lifehacks](#other-flatpak-lifehacks)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<!-- prettier-ignore-end -->
<!-- editorconfig-checker-enable -->

## Wayland / Sway

### Issues and solutions

```bash
sudo flatpak override --env=SteamDeck=1 --env=MANGOHUD=1
```

#### Constant camera rotation

Reload Sway in-game, `$Mod+Shift+C` and it should stop.

#### Cursor doesn't stick to game window

Run the game with `gamescope`.

Steam? Edit launch options for the game (second click, properties, general,
launch options):

```
SteamDeck=1 MANGOHUD=0 gamemoderun gamescope --steam --borderless --mangoapp -- %command%
```

See also `gamescope --help`

- `SteamDeck=1` sends same variable as Steam Deck and magically fixes some
  games. E.g. Kingdom Hearts: Birth by Sleep (part of KH 1.5 + 2.5 HD), except
  that it has screen tearing which gamescope fixes.
- `MANGOHUD=0` disables mangohud so there won't be two of them
  (`sudo flatpak override --env=MANGOHUD=1`)
- `--steam` - enables Steam integration, whatever that is
- `--borderless` borderless full-screen mode (that Sway may be making windowed
  though)
- `--mangoapp` enables mangohud (and without the previous disabling there are
  two overlapping ones)

##### Graphics corruption such as display full of black dots

When the previous launch options cause this,

```
INTEL_DEBUG=norbc SteamDeck=1 MANGOHUD=0 gamemoderun gamescope --steam --borderless --mangoapp -- %command%
```

I saw this advice at
[gamescope#356](https://github.com/Plagman/gamescope/issues/356) which says
it's tracked at
[freedesktop.org/mesa/mesa#6029](https://gitlab.freedesktop.org/mesa/mesa/-/issues/6029).

#### Steam client itself is laggy

Close/logoff friends window/network or disable its animations.

- https://github.com/ValveSoftware/steam-for-linux/issues/7245#issuecomment-897417115

## Fedora Atomic

_Means Fedora Kinoite unless otherwise specified._ Read also
[aminda.eu/n/essentialsoftware](https://aminda.eu/n/essentialsoftware) which
may cross-reference here.

### Heroic Games flatpak

- When asked for Steam flatpak location, it's
  `~/.var/app/com.valvesoftware.Steam/data/Steam`. The `data/Steam` confuses
  me too.
- No input in Skyrim Special Edition GOG? Try quitting Steam. That may also
  affect other games.
- Don't enable mangohud within Heroic. It should enable itself through
  `MANGOHUD=1` (`sudo flatpak override --env=MANGOHUD=1`)
- <del>Gamescope and Mangohud installed, but not found? Pay attention to their
  branch, at the time of writing they want branch `24.08`.</del>
  - <del>Remember the dualslash shortpaw!</del>
    `sudo flatpak install flathub org.freedesktop.Platform.VulkanLayer.MangoHud//24.08 org.freedesktop.Platform.VulkanLayer.gamescope//24.08`

#### Actually using gamescope

**_Hooking error that you can ignore and proceed by pressing OK? Disable
gamescope. And mangohud, see above._**

Having gamescope and mangohud installed and found? That is not enough to use
it.

> It's weird. You have to check the "enable upscaling" box, then set "Game
> Width" and "Game Height", but leave "Upscale {Width,Height}" empty.

- [`@rtxn@lemmy.world`](https://lemmy.world/u/rtxn) on
  [How the heck do I get gamescope working with Heroic Games Launcher?](https://rimworld.gallery/m/linux_gaming@lemmy.world/t/2882/How-the-heck-do-I-get-gamescope-working-with-Heroic/comment/20433#entry-comment-20433)

Same page may have hinted me on the branch version numbers, but I lost the
source for that. And then they updated them anyway and I had to figure out by
myself that I had to install the newer branch.

### Steam flatpak

See also above and below. Remember to
`sudo flatpak install flathub com.valvesoftware.Steam.CompatibilityTool.Proton-GE`
and in Steam settings find the checkbox to make everything run with
compatibility tool `Proton GE (flatpak)`. That however doesn't apply to Steam
Deck/Play compatible games so you will have to edit the compatibility settings
for them and force `Proton GE (flatpak)` (and the launch options) for
everything by yourself.

If you neglect changing the proton version, everything might just work, or you
will get a hooking failure warning that lets you press ok to proceed anyway
and everything might still be working, or you may have screen tearing and
require gamescope far above in this document to fix it.

### Steam Deck

If using Fedora Kinoite, life may be easier by making symlinks to autostart
the gayming apps on login

```bash
mkdir -p ~/.config/autostart/
ln -nsfv /var/lib/flatpak/exports/bin/com.valvesoftware.Steam ~/.config/autostart/
ln -nsfv /var/lib/flatpak/exports/bin/com.heroicgameslauncher.hgl ~/.config/autostart/
```

Visit Steam settings to enable launching in big picture mode and Heroic Games
Launcher settings to start minimized.

### Other flatpak lifehacks

Don't forget
[scripts/bash/flatpak-workarounds.bash](https://gitea.blesmrt.net/mikaela/scripts/src/branch/master/bash/flatpak-workarounds.bash)!
