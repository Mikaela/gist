# Notes related to gaming

A lot of older files that I haven't touched recently were moved to this
directory. I don't think anyone was using them, so I am not afraid of
breaking links.

## Wayland / Sway

### Issues and solutions

#### Constant camera rotation

Reload Sway in-game, `$Mod+Shift+C` and it should stop.

#### Cursor doesn't stick to game window

Run the game with `gamescope`.

Steam? Edit launch options for the game (second click, properties, general,
launch options):

```
gamescope --steam --borderless -- %command%
```

See also `gamescope --help`

* `--steam` - enables Steam integration, whatever that is
* `--borderless` borderless full-screen mode (that Sway may be making
  windowed though)

#### Steam client itself is laggy

Close/logoff friends window/network or disable its animations.

* https://github.com/ValveSoftware/steam-for-linux/issues/7245#issuecomment-897417115
