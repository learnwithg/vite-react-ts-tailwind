# ERP 2022

Application that will be used to replace https://github.com/kmcwebdev/erp-kmc-2019. Created using react and vite.

<br>
<br>
<br>

# Git Branches

This project will use Git FLow guide in versioning.

> Visit this link for reference https://nvie.com/posts/a-successful-git-branching-model/

#### How To Install

go to **https://github.com/git-for-windows/git/releases/tag/v2.37.3.windows.1** and download the `.exe` file, latest git already includes `git flow`

![](https://miro.medium.com/max/1050/1*8-zDz1s5Atux_yNW_mXmfg@2x.png)

- `main` is the latest stable version
- `develop` is the latest unstable version
- `tag` is the snapshot of version
- `hotfix` is the temporary branch to fix something on `main` branch
- `bugfix` is the temporary branch to fix something on `develop` branch
- `release`is the temporary branch to prepare a new version
- `feature` is the temporary branch to develop a new feature

![](https://miro.medium.com/max/930/1*Fir6912RpKl8ix0oAUbIfQ.png)

##### Starting a New Feature

Action to add new functionality to the project. Always create a new `feature` branch from `develop` branch for each feature.

```bash
git checkout develop
git pull origin develop
git flow feature start {featureName}
```

_This will create a new branch from `develop` called `feature/{featureName}`._

<br>
<br>

##### When working with multiple contributor for a single feature.

_Pushing your feature branch to remote reposotory_

```bash
git flow feature publish {featureName}
```

_This will push your commits to remote repository_

_Pulling other contributor changes in same feature_

```bash
git flow feature pull {featureName}
```

_This will pull other collaborators changes to your local repository_

<br>
<br>

##### Finished Feature

Action for finished `feature` and ready to release in `develop` branch.

```bash
git flow feature finish {featureName}
```

_This action will automatically merge `feature` branch to `develop` branch and remove `feature` branch locally and remotely._

<br>
<br>

##### Theres a BUG in _`develop`_ Branch?

Bug branch that will be created to fix bugs is `develop` branch.

```bash
git checkout develop
git pull origin develop
git flow bugfix start {bugName}
```

_This will create a new branch from `develop` called `bugfix/{bugName}`._

> **Tip:** Other Git flow commands are also applied to bug fixes (publish, pull, finish).

<br>
<br>

##### Theres a BUG in _`main`_ Branch?

Bug branch that will be created to fix bugs is `main` branch.

```bash
git checkout master
git pull origin master
git flow hotfix start {hotfixName}
```

_This will create a new branch from `main` called `hotfix/{hotfixName}`._

> **Tip:** Other Git flow commands are also applied to bug fixes (publish, pull, finish).

<br>
<br>

#### Ready to Release Feature from _`develop`_ Branch

To release a new version based on `develop` This allows you to create `release` branches. `release` branches contains the latest codes from `develop` and at the end creates new tags (versions) in git.

```bash
git checkout develop
git pull origin develop
git flow release start 1.0.8
```

_This will create a new branch called `release/1.0.8` and if you finish it a new tag (1.0.8) is going to be merged into the `master`._

<br>
<br>
<br>

# Versioning Guide

![](https://miro.medium.com/max/786/1*uVfJoHuFKGkAT0PX0nperQ.png)

- Never change the content of a released version. Do not be lazy and release a new one.
- When the major version is zero, we consider the software is in development stage and the public API is not stable. So start the major version at zero but release the `1.0.0` version eventually.
- Patch versions include bug fixes, do not use them for new features.
- If a new major version is released, minor and patch versions must reset to zero.
- If a new minor version is released, patch version must reset to zero
- A pre-release may be denoted by a hyphen and a series of dot separated identifiers immediately following the patch version. e.g. `1.0.0-alpha.1` or `1.5.3-rc.7`
