<!-- @format -->

# Web browser managed policy configuration

_For actual configuration, refer to the shell-things repo which is submoduled
and symlinked in this directory for reference._

<!-- editorconfig-checker-disable -->
<!-- prettier-ignore-start -->

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Abandoned ideas](#abandoned-ideas)
  - [AdNauseam managed policy](#adnauseam-managed-policy)
  - [Blank New Tab](#blank-new-tab)
  - [DuckDuckGo Privacy Essentials](#duckduckgo-privacy-essentials)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<!-- prettier-ignore-end -->
<!-- editorconfig-checker-enable -->

## Abandoned ideas

### AdNauseam managed policy

This breaks `pre-commit` hook `pretty-format-json` which I value above this
feature and besides I am not actually using this setting and lazily just
enabling/disabling JavaScript per-domain-I-am-on when I need it.

This snipped is from Firefox, but the principle applies to Chromium.

```json
{
  "policies": {
    "3rdparty": {
      "Extensions": {
        "adnauseam@rednoise.org": {
          "advancedSettings": [["filterAuthorMode", "true"]]
        }
      }
    }
  }
}
```

### Blank New Tab

This is a Chromium extension and this was a Chromium policy due to Microsoft
pushing itself a lot on the new tab page, which my search engine policies
bypass.

```json
{
  "ExtensionSettings": {
    "pfbmpcgfjncjakgfpddijlbdpjnhnfem": {
      "installation_mode": "force_installed",
      "override_update_url": true,
      "toolbar_pin": "default_unpinned",
      "update_url": "https://edge.microsoft.com/extensionwebstorebase/v1/crx"
    }
  }
}
```

### [DuckDuckGo Privacy Essentials](https://chrome.google.com/webstore/detail/bkdgflcldnnnapblkhphbgpggdiikppg)

Same as Blank New Page, this was to bypass Google being default, which didn't
even work, and is unnecessary with the search engine policies.

```json
{
  "ExtensionSettings": {
    "bkdgflcldnnnapblkhphbgpggdiikppg": {
      "installation_mode": "normal_installed",
      "override_update_url": true,
      "runtime_allowed_hosts": [
        "*://*.duckduckgo.com",
        "*://*.google.com",
        "*://*.bing.com"
      ],
      "runtime_blocked_hosts": ["<all_urls>"],
      "toolbar_pin": "default_unpinned",
      "update_url": "https://clients2.google.com/service/update2/crx"
    }
  }
}
```
