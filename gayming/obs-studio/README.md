# My notes on using OBS Studio.

I have mostly understood how to add sources on OBS Studio, but I needed
help with mainly resolution and bitrate.

## resolution & bitrate

- Settings --> Output:
  - Video Bitrate: CHECK BELOW!
  - [x] Enable Advanced Encoder Settings
  - [x] Enforce streaming site bitrate limits
  - Encoder preset: Low-Latency Performance
- Settings --> Video:
  - Base (Canvas) Resolution: DEPENDS ON STREAMED GAME OR FULL DESKTOP RESOLUTION, CHECK GAME/DISPLAY SETTINGS!
    - _I was mainly playing Final Fantasy X with 1280x720 base/canvas resolution._
  - Output (Scaled) Resolution: WHAT VIEWERS WILL SEE, SEE BELOW
  - Downscale filter: Bilinear (Fastest, but blurry if scaling)
  - Common FPS Values: 30

### Suggestions

- DVD quality? 250 Kbps bitrate with output scaled 424x240
- Steam minimums: 750 Kbps & 640x350 (360p)
  - Note that the second number in resolution is the quality
- Twitch suggested: 3000 Kbps for 1280x720p
- _I may have been trying 1080p but potential settings were lost with hardware issue._

### External links

- https://stream.twitch.tv/?kbid=100005
- https://support.google.com/youtube/answer/2853702

**_NOTE: written from memory and [my TODO entry for this file](https://gitea.blesmrt.net/mikaela/gist/issues/6)
without actually having OBS Studio or anything in front of me._**
