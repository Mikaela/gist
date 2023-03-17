<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Requirements for WiFi devices](#requirements-for-wifi-devices)
  - [See also](#see-also)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Requirements for WiFi devices

I am considering getting a 5G (mobile network) capable one, but as none
satisfies my requirements, I might as well write them here for reference
when looking at options.

- WPA3 support as certification began in 2018 already.
  - WPA2/WPA3 Transitional mode
  - WiFi Enhanced Open (OWE) transition mode would be nice
- Multiple SSIDs (including OWE/transition)
  - Option to have lower priority for the guest network
- Transmit power control to set it to low
- 2.4 GHz / 5 GHz dualband (should be obvious in 2022)
  - **_Ability to set same SSID for both_** (looking at you Huawei)
    - If the SSIDs differ, devices won't be able to decide between frequency
      and either 2.4 or 5 GHz must be chosen. 5 GHz is mostly subject to
      _Dynamic Frequency Selection_ which means no WiFi for 10 minutes
      on boot.
- Quality of Service (QoS)

## See also

- [Apple: Recommended settings for Wi-Fi routers and access points](https://support.apple.com/HT202068)
- [EFF: Open Wireless Movement](https://openwireless.org/)
- [Metis: 8 reasons to turn down the transmit power of your Wi-Fi](https://metis.fi/en/2017/10/txpower/)
- [Metis: Increase your cell phone battery life with a small change in the Wi-Fi network](https://metis.fi/en/2018/05/dtim-en/)
  - > Buried deep in the advanced settings of the Wi-Fi access point there is a setting with a friendly title like DTIM Interval or DTIM Period. The default setting is typically one. Change it to three, five or slightly larger, but don’t go over ten. Often you can set it separately for 2.4GHz and 5GHz, but use the same value for both. This is the short answer. Read on to find out what this is all about.
