<!-- @format -->

This `/etc/gitconfig` currently just "documents" how to enable signed git
pushes, however it requires a recent git version on the server too to allow
SSH.

Client-side: `git config --global push.gpgSign if-asked` (to not die when
server doesn't support it)

Source: https://people.kernel.org/monsieuricon/signed-git-pushes via
https://github.com/go-gitea/gitea/issues/13454
