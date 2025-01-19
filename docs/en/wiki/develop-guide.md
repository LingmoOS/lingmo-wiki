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

```bash
# Clone the LingmoOS Repository
git clone https://github.com/LingmoOS/LingmoOS

# Set Up the repo Tool
mkdir -pv ~/.local/bin
cp -v LingmoOS/repo ~/.local/bin
export PATH="$PATH:$HOME/bin"

# Create a Build Directory
mkdir -pv lingmowork && cd lingmowork

# Initialize the repo
repo init -u https://github.com/LingmoOS/manifest

# Sync the Code
repo sync
```

## *2* Making a contribution

### *2.1* Contribution Workflow

1. **Fork the Repository (Create a branch)**: Start by forking the repository on GitHub. Alternatively, create a branch if you are in the Lingmo OS organization and have write permission in the repository.
2. **Create a Feature Branch**: Develop your changes in a new branch.
3. **Make Changes**: Implement the desired features or fixes.
4. **Test Changes**: Ensure your changes are tested thoroughly.
5. **Commit Changes**: Commit your changes with clear and descriptive messages, **and follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) as a standard** (very important).
6. **Push Changes**: Push your commits to your forked repository.
7. **Create a Pull Request**: Submit a pull request to the original repository.
8. **Review and Merge**: Wait for the code reviewers in the corresponding team to review your pull request and merge it into the main branch.

### *2.2* Contributing to Lingmo OS localization

*WIP*

### *2.3* Code of Conduct

Please review our [Code of Conduct](code-of-conduct.md) to understand the standards of behavior expected in our community. By participating, you agree to abide by these guidelines.

## *3* Reporting a bug

*WIP*
