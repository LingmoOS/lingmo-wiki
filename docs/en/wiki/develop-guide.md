# Developers and Contributors' Guide (WIP)

Thank you for choosing Lingmo OS for your development journey! This guide provide you with the necessary tools and resources to get started. If you encounter any issues, please refer to the [FAQ](faq.md) or reach out to our community for support.

## *1* Getting Started

### *1.1* Lingmo Project Structure

For a comprehensive list of Lingmo OS components, including core components, basic components, libraries, plugins, system, and tools, please refer to the [Component List](component-list.md).

This list provides detailed information on each component, including their paths and corresponding GitHub repositories. It is maintained separately for ease of updates and readability.

For LingmoDE, see [List of LingmoDE Applications](list-of-lingmode-applications). (TODO: merge 2 lists)

Also, we have other projects like Lingmo Wiki, LingmoPyUI, etc. (TODO: Add a list)

### *1.2* Get source code

We use the [repo](https://source.android.com/setup/develop/repo) tool to manage the source code. Of course, you can clone every component separately, but it's recommended to get all the source code at once.

```sh
# Clone the LingmoOS Repository
git clone https://github.com/LingmoOS/LingmoOS

# Set Up the repo Tool
mkdir -pv ~/.local/bin
cp -v LingmoOS/repo ~/.local/bin
export PATH="$PATH:$HOME/.local/bin"

# Add above command to your shell's configuration (Optional)
case "$SHELL" in
    */bash)
        echo 'export PATH="$PATH:$HOME/.local/bin"' >> ~/.bashrc
        ;;
    */zsh)
        echo 'export PATH="$PATH:$HOME/.local/bin"' >> ~/.zshrc
        ;;
esac


# Create a Build Directory
mkdir -pv lingmowork && cd lingmowork

# Initialize the repo
repo init -u https://github.com/LingmoOS/manifest

# Sync the Code
repo sync
```

### *1.3* Compile LingmoDE components

#### *1.3.1* By the `lingmo-build` script

We have a [`lingmo-build`](https://github.com/LingmoOS/lingmo-build) script which automates the build process. However, you can still compile them by yourself.

> [!Warning]
> `lingmo-build` is deprecated, but it may be still work in the future. (TODO: add lingmo-pkgbuild)

> [!Note]
> This tool use repositories cloned from GitHub by itself, so it's still necessary to compile manually if you make any modifications to repositories in the  `lingmowork` directory.

> [!Important]
> This script only works on Debian.

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

#### *1.3.2* Manually

Refer to the corresponding selection in [Component List](component-list).

## *2* Making a contribution

### *2.1* Contribution Workflow

1. **Fork the Repository (Create a Branch)**: Start by forking the repository on GitHub. Alternatively, create a branch if you are in the Lingmo OS organization and have write permission in the repository.
2. **Create a Feature Branch**: Develop your changes in the newly created fork (or branch).
3. **Make Changes**: Implement the desired features or fixes.
4. **Test Changes**: Ensure your changes are tested thoroughly.
5. **Commit Changes**: Commit your changes with clear and descriptive messages, **and follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) as a standard**.
6. **Push Changes**: Push your commits to your forked repository.
7. **Create a Pull Request**: Submit a pull request to the original repository.
8. **Review and Merge**: Wait for the code reviewers in the corresponding team to review your pull request and merge it into the main branch.

### *2.2* Localization

Lingmo OS translation is hosted by [Weblate](https://hosted.weblate.org/). Visit <https://hosted.weblate.org/projects/lingmoos/> to participate in the translation.

### *2.3* Code of Conduct

Please review our [Code of Conduct](code-of-conduct.md) to understand the standards of behavior expected in our community. By participating, you agree to abide by these guidelines.

## *3* Reporting a bug

1. **Identify the bug**: Try to reproduce the bug to confirm its existence and check if it's really a bug (don't add the `bug` tag if you want to request a feature).
2. **Check for duplicates**: Search the existing issues to see if the issue has already been reported.
3. **Gather information**: Collect all relevant information that will help us understand and reproduce the bug e.g. detailed explanations, stacktraces and logs, system (or environment) info, related issues, suggestions on how to fix the bug, links, etc.
4. **Report the bug**: Create a new issue in the relevant repository. Fill up the [Issue Template](https://github.com/LingmoOS/.github/blob/main/issue_template.md) with all the information you gathered. Be as detailed and precise as possible.
5. **Be responsive**: After reporting the bug, answer follow-up questions. Developers may need additional information to fix the bug.
