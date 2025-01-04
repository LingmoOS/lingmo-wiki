# Build LingmoDE (WIP)
## Using the automated `lingmo-build` script (Debian only)
We assume that [PowerShell](https://github.com/PowerShell/PowerShell) is installed on your system.
```console
# apt-get update -y
# apt-get upgrade -y
# apt-get install -y sudo equivs curl git devscripts lintian build-essential automake autotools-dev cmake g++ --no-install-recommends
$ git clone https://github.com/LingmoOS/lingmo-build
$ cd lingmo-build
$ pwsh -c "./build.ps1" # build from tag
$ pwsh -c "./build.ps1 -BuildFromGit" # build from git
```
## Manually
*TODO*
