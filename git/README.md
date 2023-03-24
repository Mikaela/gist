<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Random git files](#random-git-files)
  - [Tracking GitHub pull requests with `git`](#tracking-github-pull-requests-with-git)
  - [Debugging git](#debugging-git)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Random git files

- `gitignore` - `.gitignore` templates I may or may not use
- `etc/gitconfig` - a `/etc/gitconfig` for accepting signed pushes

## Tracking GitHub pull requests with `git`

```bash
git config --add remote.GITHUB.fetch '+refs/pull/*/head:refs/remotes/GITHUB/pr/*'
```

Replace `GITHUB` with the `git remote` name. I have picked this up from a
dead `git.io` link.

- TODO: Figure out if this also works for GitLab or what is the GitLab version?
  Gitea too.
  - https://gitea.blesmrt.net/mikaela/gist/issues/39

## Debugging git

Git obeys some environment variables that may be helpful for troubleshooting

- `GIT_CURL_VERBOSE=1` results to more information what git is doing e.g.
  during cloning.
  - [Verbose Output from git](https://wrightturn.wordpress.com/2016/08/16/verbose-output-from-git/)
- `GIT_TRACE=1` & `GIT_TRACE2=1` give very deep debug information
  - [StackOverflow](https://stackoverflow.com/a/47561300)
