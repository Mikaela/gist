# Notes on using LaTeX

## Simple boilerplate

Refer to `hello.tex`

## Installing custom templates

1. Put them to `~/texmf/tex/latex/local/`
  * This can be verified with `kpsewhich -var-value=TEXMFHOME` in case this
    happened to be not-Linux.
2. Run `texhash ~/texmf`

### Noteworthy templates

* [Finnish standard document](https://github.com/datakurre/vakioasiakirja)
