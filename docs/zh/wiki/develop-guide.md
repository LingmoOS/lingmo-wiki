# 开发者和贡献者指南（WIP）

感谢您在您的开发之旅中选择 Lingmo OS！本指南将为您提供必要的工具和资源以帮助您入门。如果您遇到任何问题，请参考[常见问题解答](faq.md)或联系我们的社区以获取支持。

## 1 开始使用

### 1.1 Lingmo 项目结构

有关 Lingmo OS 组件的全面列表，包括核心组件、基础组件、库、插件、系统和工具，请参考[组件列表](component-list.md)。

此列表提供了每个组件的详细信息，包括其路径和相应的 GitHub 仓库。为了便于更新和阅读，它被单独维护。

对于 LingmoDE，请参阅 [LingmoDE 应用程序列表](list-of-lingmode-applications)。（待办事项：合并两个列表）

此外，我们还有其他项目，如 Lingmo Wiki、LingmoPyUI 等。（待办事项：添加列表）

### 1.2 获取源代码

我们使用 [repo](https://source.android.com/setup/develop/repo) 工具来管理源代码。当然，您可以单独克隆每个组件，但建议一次性获取所有源代码。

```sh
# 克隆 LingmoOS 仓库
git clone https://github.com/LingmoOS/LingmoOS

# 设置 repo 工具
mkdir -pv ~/.local/bin
cp -v LingmoOS/repo ~/.local/bin
export PATH="$PATH:$HOME/bin"

# 创建构建目录
mkdir -pv lingmowork && cd lingmowork

# 初始化 repo
repo init -u https://github.com/LingmoOS/manifest

# 同步代码
repo sync
```

### 1.3 编译 LingmoDE 组件

#### 1.3.1 使用 `lingmo-build` 脚本

我们有一个 [`lingmo-build`](https://github.com/LingmoOS/lingmo-build) 脚本，它自动化了构建过程。当然，您仍然可以自行编译它们。

> [!Note]
> 该工具使用从Github克隆的仓库，因此如果您对 `lingmowork` 目录中的仓库进行了任何修改，仍然需要手动编译。

> [!Important]
> 该脚本仅在 Debian 系统上运行。

我们假设您的系统中已安装[PowerShell](https://github.com/PowerShell/PowerShell)。

```console
# apt-get update -y
# apt-get upgrade -y
# apt-get install -y sudo equivs curl git devscripts lintian build-essential automake autotools-dev cmake g++ --no-install-recommends
$ git clone https://github.com/LingmoOS/lingmo-build
$ cd lingmo-build
$ pwsh -c "./build.ps1" # 从标签构建
$ pwsh -c "./build.ps1 -BuildFromGit" # 从 Git 构建
```

#### 1.3.2 手动编译

请参考[组件列表](component-list)中的相应部分。

## 2 贡献代码

### 2.1 贡献工作流程

1. **Fork仓库（创建分支）**：首先在 GitHub 上Fork仓库。或者，如果您在 Lingmo OS 组织中并有仓库的写权限，可以直接创建分支。
2. **创建功能分支**：在新分支中开发您的更改。
3. **进行更改**：实现所需的特性和修复。
4. **测试更改**：确保您的更改经过彻底测试。
5. **提交更改**：使用清晰且描述性的信息提交更改，并**遵循[约定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0/)**（非常重要）。
6. **推送更改**：将您的提交推送到分叉的仓库。
7. **创建Pull Request**：向原始仓库提交Pull Request。
8. **审核和合并**：等待相应团队的代码审核人员审核您的Pull Request并将其合并到主分支。

### 2.2 本地化

Lingmo OS 的翻译托管于 [Weblate](https://hosted.weblate.org/)。访问 <https://hosted.weblate.org/projects/lingmoos/> 参与翻译。

### 2.3 行为准则

请查阅我们的[贡献者公约](code-of-conduct.md) (Contributor Covenant，在1.4译为参与者公约)，以了解社区中期望的行为标准。参与即表示您同意遵守这些准则。

## 3 报告 Bug

1. **识别 Bug**：尝试复现 Bug 以确认其存在，并检查是否真的是 Bug（如果是要请求功能，请不要添加“Bug”标签）。
2. **检查重复**：搜索现有问题以查看是否已报告该问题。
3. **收集信息**：收集所有相关的信息，以便我们理解和复现 Bug，例如详细说明、堆栈跟踪和日志、系统（或环境）信息、相关问题、修复建议、链接等。
4. **报告 Bug**：在相关仓库中创建新问题。使用 [问题模板](https://github.com/LingmoOS/.github/blob/main/issue_template.md) 提供您收集的所有信息。尽可能详细和精确。
5. **保持响应**：报告 Bug 后，回答后续问题。开发人员可能需要额外信息来修复 Bug。
