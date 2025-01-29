# 开发者和贡献者指南（WIP）

感谢您在您的开发之旅中选择 Lingmo OS！本指南将为您提供必要的工具和资源以帮助您入门。如果您遇到任何问题，请参考[常见问题解答](faq.md)或联系我们的社区以获取支持。

## *1* 快速入门

### *1.1* Lingmo 项目结构

完整的Lingmo OS组件列表（包括核心组件、基础组件、库、插件、系统和工具）请参阅[组件列表](component-list.md)。

此列表提供了每个组件的详细信息，包括其路径和相应的 GitHub 仓库。为了便于更新和阅读，它被单独维护。

对于 LingmoDE，请参阅 [LingmoDE 应用程序列表](list-of-lingmode-applications)。(TODO: 合并两个列表)

此外，我们还有其他项目，如 Lingmo Wiki、LingmoPyUI 等。(TODO: 添加列表)

### *1.2* 获取源代码

我们使用 [repo](https://source.android.com/setup/develop/repo) 工具来管理源代码。当然，您可以单独克隆每个组件，但建议一次性获取所有源代码。

```sh
# 克隆 LingmoOS 仓库
git clone https://github.com/LingmoOS/LingmoOS

# 设置 repo 工具
mkdir -pv ~/.local/bin
cp -v LingmoOS/repo ~/.local/bin
export PATH="$PATH:$HOME/bin"

# 将命令添加到 shell 配置（可选）
case "$SHELL" in
    */bash)
        echo 'export PATH="$PATH:$HOME/.local/bin"' >> ~/.bashrc
        ;;
    */zsh)
        echo 'export PATH="$PATH:$HOME/.local/bin"' >> ~/.zshrc
        ;;
esac

# 创建构建目录
mkdir -pv lingmowork && cd lingmowork

# 初始化 repo
repo init -u https://github.com/LingmoOS/manifest

# 同步代码
repo sync
```

### *1.3* 编译 LingmoDE 组件

#### *1.3.1* 使用 `lingmo-build` 脚本

我们提供自动化构建脚本 [`lingmo-build`](https://github.com/LingmoOS/lingmo-build)，您也可以选择手动编译。

> [!Note]
> 该工具会自行从GitHub克隆仓库。若您修改了`lingmowork`目录中的仓库，仍需手动编译。

> [!Important]
> 此脚本仅支持Debian系统。

我们假设您的系统中已安装[PowerShell](https://github.com/PowerShell/PowerShell)。

```console
# apt-get update -y
# apt-get upgrade -y
# apt-get install -y sudo equivs curl git devscripts lintian build-essential automake autotools-dev cmake g++ --no-install-recommends
$ git clone https://github.com/LingmoOS/lingmo-build
$ cd lingmo-build
$ pwsh -c "./build.ps1" # 从 tag 构建
$ pwsh -c "./build.ps1 -BuildFromGit" # 从 Git 构建
```

#### *1.3.2* 手动编译

请参考[组件列表](component-list)中的相应部分。

## *2* 贡献代码

### *2.1* 贡献工作流程

1. **Fork仓库（创建分支）**：在 GitHub 上 fork 目标仓库。若您属于 Lingmo OS 组织且有仓库写入权限，可直接创建分支。
2. **创建功能分支**：在新 fork （或分支）中开发您的更改。
3. **进行更改**：实现所需的功能或修复问题。
4. **测试更改**：确保您的更改经过全面测试。
5. **提交更改**：编写清晰描述性提交信息，并**遵循[Conventional Commits](https://www.conventionalcommits.org/zh-hans/v1.0.0/)**（非常重要）。
6. **推送更改**：将您的提交推送到 fork 的仓库。
7. **创建Pull Request**：向原仓库提交Pull Request。
8. **审核和合并**：等待相应团队的代码审核人员审核您的Pull Request并将其合并到主分支。

### *2.2* 本地化

Lingmo OS 的翻译托管于 [Weblate](https://hosted.weblate.org/)。访问 <https://hosted.weblate.org/projects/lingmoos/> 参与翻译。

### *2.3* 行为准则

请查阅我们的[贡献者公约](code-of-conduct.md) (Contributor Covenant，在1.4译为参与者公约)，以了解社区规范。参与即表示您同意遵守这些准则。

## *3* 问题报告

1. **确认问题**：
2. **查重**：搜索现有issue确认是否重复
3. **收集信息**：包括详细说明、堆栈跟踪、日志、系统环境、关联issue、修复建议等
4. **提交报告**：在对应仓库使用[issue模板](https://github.com/LingmoOS/.github/blob/main/issue_template.md)新建issue
5. **保持响应**：及时回复开发者可能的补充信息请求

1. **识别 Bug**：复现问题并确认其真实性（功能请求请勿添加`bug`标签）
2. **检查重复**：搜索现有 issue 以查看是否重复。
3. **收集信息**：收集所有相关的信息，以便我们理解和复现 Bug，例如详细说明、堆栈跟踪和日志、系统（或环境）信息、关联 issue、修复建议、相关链接等。
4. **报告 Bug**：在对应仓库中创建新 issue。使用 [issue 模板](https://github.com/LingmoOS/.github/blob/main/issue_template.md) 提供您收集的所有信息。尽可能详细和精确。
5. **保持响应**：报告 Bug 后，回答后续问题。开发人员可能需要额外信息来修复 Bug。
