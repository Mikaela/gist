<!-- @format -->

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [WeeChat colours for dark background](#weechat-colours-for-dark-background)
- [Making colors look good with solarized terminals](#making-colors-look-good-with-solarized-terminals)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

I use `/set irc.look.nick_color_hash djb2` (_"hash algorithm used to find the
color for a nick: djb2 = variant of djb2 (position of letters matters:
anagrams of a nick have different color), sum = sum of letters"_)

## WeeChat colours for dark background

This is one that I stole from someone at \#weechat, but I am not sure whom.

```
/set weechat.color.chat_nick_colors "022,023,024,025,026,027,028,029,030,031,032,033,034,035,036,037,038,039,040,041,042,043,044,045,046,047,048,049,050,051,052,053,054,055,056,057,058,059,060,061,062,063,064,065,066,067,068,069,070,071,072,073,074,075,076,077,078,079,080,081,082,083,084,085,086,087,088,089,090,091,092,093,094,095,096,097,098,099,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229"
```

This is customised version of the previous one possibly that has less colours
that are difficult to read (I am not sure as I added this comment long time
after making that list).

```
/set weechat.color.chat_nick_colors "028,029,030,031,032,033,034,035,036,037,038,039,040,041,042,043,044,045,046,047,048,049,050,051,058,059,060,061,062,063,064,065,066,067,068,069,070,071,072,073,074,075,076,077,078,079,080,081,082,083,084,085,086,087,088,089,090,091,092,093,094,095,096,097,098,099,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229"
```

<s>This is one that doesn't have similar looking colours if I ever write
this.</s> djb2 solves this issue and I don't see need of writing this.

## Making colors look good with solarized terminals

This is copied from @tracphil's gist which you can find at
https://gist.github.com/tracphil/0a6d897f6598abb6a14e on
2018-10-11T09:36+0000.

```
/set weechat.color.chat_nick_colors "red,lightred,162,167,204,green,lightgreen,035,042,047,084,120,154,148,yellow,brown,165,191,222,208,cyan,045,051,087,117,123,159,lightmagenta,128,171,176,213,111,148"
/set weechat.bar.status.color_bg 0
/set weechat.bar.title.color_bg 0
/set buffers.color.current_bg 10
/set buffers.color.hotlist_message_fg 7
```

---

2022-04-15: I am using Selenized Dark and highlights are a bit difficult to
see considering they are yellow on magenta;

```
/set weechat.color.chat_highlight_bg blue
```
