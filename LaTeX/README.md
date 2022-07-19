# Notes on using LaTeX

## Simple boilerplate

Refer to `hello.tex`

## Package management

***Don't do this, use `YOURFAVOURITEPACKAGEMANAGER search texlive-moderncv`
or whatever***

Fedora: remember to `sudo dnf install texlive-msg texlive-texlive-msg-translations` to
remove one nag. Which doesn't work with Finnish, naturally.

```bash
tlmgr init-usertree
tlmgr --ignore-warning --usermode install moderncv
```

## Installing custom templates

1. Put them to `~/texmf/tex/latex/local/` The `tlmgr init-usertree` might be useful?
  * This can be verified with `kpsewhich -var-value=TEXMFHOME` in case this
    happened to be not-Linux.
2. Run `texhash ~/texmf`

### Noteworthy templates

* [Finnish standard document](https://github.com/datakurre/vakioasiakirja)
