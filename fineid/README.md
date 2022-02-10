# Finnish Electronic Identity

Finnish identity cards have been electronic for ages and as I tend to forget
how to use it on Linux again, here are my notes.

* Official application: https://dvv.fi/en/card-reader-software
  * Fedora/rpm is hidden under "All versions", "Linux versions"
* DVV certificate newsletter: https://uutiskirjeet.dvv.fi/uutiset/varmennepalvelut.html

## Requirements for everything

PCSDd must be running, it's found in package `pcscd` on Debian and likely
`pcsc-lite` on Fedora.

```bash
sudo systemctl enable pcscd --now
```

[As in my shell-things repo, /etc/pkcs11/modules/libcryptoki.module should be created;](https://gitea.blesmrt.net/mikaela/shell-things/src/branch/master/etc/pkcs11/modules)

```
module: /usr/lib64/libcryptoki.so
managed: no
```

## Chromium

Should work as long as the `DigiSignApplication` from above was running before
the browser was started.

## Firefox and Thunderbird

***This doesn't apply if the above libcryptoki.so is created
and preferably `libcryptoki.so` would be loaded anyway***

In Settings, Advanced, Security devices load the module from (DVV app) `/usr/lib64/libcryptoki.so` or (OpenSC):

* Debian: `/usr/lib/x86_64-linux-gnu/onepin-opensc-pkcs11.so`
  * Package: `opensc-pkcs11`
* Fedora: `/usr/lib64/onepin-opensc-pkcs11.so`
  * Package: `opensc`

`onepin` is a workaround to not ask for PIN2 which is only used for legal agreements,
email signing also uses PIN1.

## Root certificates

While I don't think the user necessarily needs them, my notes mention `DVV Gov. Root CA`.

* https://dvv.fi/en/ca-certificates

## Testing

* https://dvv.fineid.fi/en/authentication

## FINEID as SSH key

0. I would start by `ssh-add -D` to remove other keys from the ssh-agent.
1. Add the key to the agent
  * Debian: `ssh-add -s /usr/lib/x86_64-linux-gnu/opensc-pkcs11.so`
  * Fedora: `ssh-add -s /usr/lib64/opensc-pkcs11.so`
2. Export the public key by `ssh-add -L|head -n1` (the comment should be "todentamis- ja salausavain" ("authentication and encryption key"))
3. Naturally put it into `~/.ssh/authorized_keys`, but SSH should detect
   it automatically. The file could also be mentioned in `ssh_config`

The public key should also be stored somewhere that can be passed to gitconfig
or SSH signing commands if SSH signing is to be used.

Via: https://www.linux.fi/wiki/HST#Ssh_2
