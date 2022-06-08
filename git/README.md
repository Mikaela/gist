# Random git files

* `gitignore` - `.gitignore` templates I may or may not use
* `etc/gitconfig` - a `/etc/gitconfig` for accepting signed pushes

## Tracking GitHub pull requests with `git`

```bash
git config --add remote.GITHUB.fetch '+refs/pull/*/head:refs/remotes/GITHUB/pr/*'
```

Replace `GITHUB` with the `git remote` name. I have picked this up from a
dead `git.io` link.

* TODO: Figure out if this also works for GitLab or what is the GitLab version?
  Gitea too.
  * https://gitea.blesmrt.net/mikaela/gist/issues/39