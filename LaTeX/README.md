<!-- @format -->

# Notes on using LaTeX

To possibly spare yourself from headache:

- Fedora: `sudo dnf install texlive-scheme-full -y`
- Debian: `sudo apt install texlive-full -y`

<!-- editorconfig-checker-disable -->
<!-- prettier-ignore-start -->

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Simple boilerplate](#simple-boilerplate)
- [Package management](#package-management)
- [Installing custom templates](#installing-custom-templates)
  - [Noteworthy templates](#noteworthy-templates)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<!-- prettier-ignore-end -->
<!-- editorconfig-checker-enable -->

## Simple boilerplate

Refer to `hello.tex`

For leaflets or flyers, https://tex.stackexchange.com/q/16355/274626 has nice
answers.

## Package management

**_Don't do this, use `YOURFAVOURITEPACKAGEMANAGER search texlive-moderncv` or
whatever_**

Fedora: remember to
`sudo dnf install texlive-msg texlive-texlive-msg-translations` to remove one
nag. Which doesn't work with Finnish, naturally.

```bash
tlmgr init-usertree
tlmgr --ignore-warning --usermode install moderncv
```

## Installing custom templates

1. Put them to `~/texmf/tex/latex/local/` The `tlmgr init-usertree` might be
   useful?

- This can be verified with `kpsewhich -var-value=TEXMFHOME` in case this
  happened to be not-Linux.

2. Run `texhash ~/texmf`

### Noteworthy templates

- [Finnish standard document](https://github.com/datakurre/vakioasiakirja)
