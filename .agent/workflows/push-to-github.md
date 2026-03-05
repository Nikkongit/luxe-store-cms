---
description: Push changes to GitHub and trigger build
---

This workflow automates the process of committing changes and pushing them to the remote repository.

1. Check git status to ensure everything is staged or ready.
2. // turbo
   Run command to stage, commit, and push:
   `git add . ; git commit -m "update: sync changes" ; git push origin main`
3. Verify the push was successful.
4. Check the GitHub Actions tab to ensure the build pipeline starts.
