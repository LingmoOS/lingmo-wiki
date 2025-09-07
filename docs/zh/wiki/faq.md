# FAQ

这里有一些大家都提出过问题的回答。如果这些仍然不能解决你的问题, 可以加入我们的QQ群（群号：552152860）或 [Discord服务器](https://discord.gg/NP2fsr9dPd).

## 安装进程运行时，“Lingmo Live User”的密码是什么？

`live`。如有更改，我们会在这里注明。

## Lingmo OS 基于什么 Linux？

[Debian](https://debian.org)。

## 为什么使用 Debian 13（稳定版）？

我们计划把 LingmoDE 迁移到 Qt6，因为 Debian 13 有我们必需的包，而且比测试版稳定性更好。

## 为什么不用 Arch ？

我们之前有一个项目叫做 ArchLingmo（见[术语表](glossary#archlingmo)，但是该项目已被取消，因为我们发现 Debian 对新手更加简单（在系统维护任务上）。

不过，LingmoDE 的包在 AUR 上仍然可用。

## 有适用于 Debian 12 的 LingmoDE 包吗？

有。见<https://download.opensuse.org/repositories/home:/elysia:/LingmoOS/Debian_12/>.

## 我在执行 `apt update` 时遇到了404错误

我们现在已经将 `hydrogen` 从 <https://packages.lingmo.org> 移除了。 编辑你的 apt 的 sources.list 文件，然后将 `hydrogen` 替换成 `helium`。
