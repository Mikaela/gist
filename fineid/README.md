<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Finnish Electronic Identity](#finnish-electronic-identity)
  - [Requirements for everything](#requirements-for-everything)
  - [Chromium](#chromium)
  - [Firefox and Thunderbird](#firefox-and-thunderbird)
    - [Firefox policy](#firefox-policy)
  - [Okular](#okular)
    - [Validation](#validation)
  - [Root certificates](#root-certificates)
  - [Testing](#testing)
  - [FINEID as SSH key](#fineid-as-ssh-key)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Finnish Electronic Identity

Finnish identity cards have been electronic for ages and as I tend to forget
how to use it on Linux again, here are my notes.

- Official application: https://dvv.fi/en/card-reader-software
  - Fedora/rpm is hidden under "All versions", "Linux versions"
- DVV certificate newsletter: https://uutiskirjeet.dvv.fi/uutiset/varmennepalvelut.html

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

**_This doesn't apply if the above libcryptoki.so is created
and preferably `libcryptoki.so` would be loaded anyway_**

In Settings, Advanced, Security devices load the module from (DVV app) `/usr/lib64/libcryptoki.so` or (OpenSC):

- Debian: `/usr/lib/x86_64-linux-gnu/onepin-opensc-pkcs11.so`
  - Package: `opensc-pkcs11`
- Fedora: `/usr/lib64/onepin-opensc-pkcs11.so`
  - Package: `opensc`

`onepin` is a workaround to not ask for PIN2 which is only used for legal agreements,
email signing also uses PIN1.

### Firefox policy

Firefox organizational policy can also be used for this, Thunderbird likely
has one too. It will affect all users and instances of the application on the
computer.

In the file `/etc/firefox/policies/policies.json` which must be created if it
doesn't exist:

```json
{
  "policies": {
    "SecurityDevices": {
      "Add": {
        "Fujitsu mPollux DigiSignApplication": "/usr/lib64/libcryptoki.so"
      }
    }
  }
}
```

## Okular

Okular is the KDE document viewer and supports signing PDF files using FINEID!

There are three ways to go, they all begin with _Settings_ menu, _Configure backends_
and _PDF_.

Set the certificate database to one of the three:

- `/etc/nssdb` with password that I don't know.
- `~/.pki/nssdb` which password theoretically reads in `~/.digisign/Seed.txt` assuming the official DigiSignApplication is used.
- `~/.mozilla/firefox/<randomString>.<ProfileName>` - when Firefox is used (may require the configuration above), didn't ask me for a password, which may be the main password and directly offers the certificates from FINEID.
  - This seems the most functional, refer to `about:profiles` within
    Firefox/LibreWolf.

Next Apply or OK and restart Okular, open _Tools_ menu and select
_Digitally sign..._, draw an area for the signature (which FINEID wants to be big),
select where to save the signed .pdf and enter the signing PIN a few times.

### Validation

DVV provides a validator in three languages:

- [suomeksi](https://dvv.fineid.fi/fi/validation)
- [på svenska](https://dvv.fineid.fi/sv/validation)
- [in English](https://dvv.fineid.fi/en/validation)

```txt
✔️ PDF document validated. The following signatures were found:
1 valid signatures with EU qualified certificate issuers and signature keys stored in a qualified signature creation device.

Signature 1/1: [...]
✔️ The electronic signature is valid and has not been modified or forged after signature. Signature level is PKCS7_B (basic).
✔️ The signature is made by a party trusted by DVV.
✔️ The signature is made with an EU qualified certificate.
✔️ The signature key is stored in an EU qualified signature creation device (QSCD).
Signed by: ...
Issuer of certificate and root certificate: VRK Gov. CA for Citizen Certificates - G3 | VRK Gov. Root CA - G2 (Trusted)
Time of signature: ... (Time stamp not validated by a time stamp authority (TSA))
```

Although other EIDAS/European signing verification capable services or
applications should work too.

## Root certificates

While I don't think the user necessarily needs them, my notes mention `DVV Gov. Root CA`.

- https://dvv.fi/en/ca-certificates

## Testing

- https://dvv.fineid.fi/en/authentication

## FINEID as SSH key

0. I would start by `ssh-add -D` to remove other keys from the ssh-agent.
1. Add the key to the agent

- Debian: `ssh-add -s /usr/lib/x86_64-linux-gnu/opensc-pkcs11.so`
- Fedora: `ssh-add -s /usr/lib64/opensc-pkcs11.so`

2. Export the public key by `ssh-add -L|head -n1` (the comment should be "todentamis- ja salausavain" ("authentication and encryption key"))
3. Naturally put it into `~/.ssh/authorized_keys`, but SSH should detect
   it automatically. The file could also be mentioned in `ssh_config`

The public key should also be stored somewhere that can be passed to gitconfig
or SSH signing commands if SSH signing is to be used.

Via: https://www.linux.fi/wiki/HST#Ssh_2
