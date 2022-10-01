# Requirements for WiFi devices

I am considering getting a 5G (mobile network) capable one, but as none
satisfies my requirements, I might as well write them here for reference
when looking at options.

* WPA3 support as certification began in 2018 already.
  * WPA2/WPA3 Transitional mode
  * WiFi Enhanced Open (OWE) transition mode would be nice
* Multiple SSIDs (including OWE/transition)
  * Option to have lower priority for the guest network
* Transmit power control to set it to low
* 2.4 GHz / 5 GHz dualband (should be obvious in 2022)
  * Ability to set same SSID for both (looking at you Huawei)
* Quality of Service (QoS)

## See also

* [Apple: Recommended settings for Wi-Fi routers and access points](https://support.apple.com/HT202068)
* [EFF: Open Wireless Movement](https://openwireless.org/)
* [Metis: 8 reasons to turn down the transmit power of your Wi-Fi](https://metis.fi/en/2017/10/txpower/)
* [Metis: Increase your cell phone battery life with a small change in the Wi-Fi network](https://metis.fi/en/2018/05/dtim-en/)
  * > Buried deep in the advanced settings of the Wi-Fi access point there is a setting with a friendly title like DTIM Interval or DTIM Period. The default setting is typically one. Change it to three, five or slightly larger, but don’t go over ten. Often you can set it separately for 2.4GHz and 5GHz, but use the same value for both. This is the short answer. Read on to find out what this is all about.
