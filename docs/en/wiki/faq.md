# FAQ

Here are some answers to common questions. If your problem cannot be solved here, feel free to join our QQ user communication group (group number 552152860) or [Discord server](https://discord.gg/NP2fsr9dPd).

## What is the password for Lingmo Live User during the installation process?

`live`. If there are any changes, they will be explained here.

## What Linux distribution does Lingmo OS based on?

[Debian](https://debian.org).

## Why not Arch?

There's a project called [ArchLingmo](glossary#archlingmo), but it's not meant to replace the Debian mainline version, because Debian is easier for beginners on system maintenance tasks.

However [LingmoDE packages are available on AUR](https://github.com/LingmoOS/aur).

## Are there any LingmoDE packages for Debian 12?

Yes. See <https://download.opensuse.org/repositories/home:/elysia:/LingmoOS/Debian_12/>.

## I encountered 404 on `apt update`

We removed `hydrogen` from <https://packages.lingmo.org> rencently. Edit your apt sources file, and replace `hydrogen` with `helium`.
