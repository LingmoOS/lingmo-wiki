# Lingmo OS 组件列表

该列表提供了Lingmo OS组件的结构化概览，按类别组织以便于浏览。每个组件均链接到其对应的GitHub仓库，并包含其在[default.xml](https://github.com/LingmoOS/manifest/blob/main/default.xml)文件中设置的路径。列表还包含每个组件的简要描述、文档链接和许可信息。

## 内核与系统服务

**简介：**  
内核与系统服务类别构成了Lingmo OS的基础，管理硬件交互并提供基本服务。包括Linux内核、核心系统服务和确保操作系统流畅运行的守护进程。对底层操作、系统性能和核心功能增强感兴趣的开发者会发现此部分至关重要。

### **linux**  

- 路径: `kernel`  
- 仓库地址: [https://github.com/LingmoOS/linux](https://github.com/LingmoOS/linux)  

  **描述：**  
  Linux内核是LingmoOS操作系统的核心，负责管理系统资源、硬件通信并为应用程序提供基本服务。  

  **文档：**  
  - 格式化文档可在线查看：[https://www.kernel.org/doc/html/latest/](https://www.kernel.org/doc/html/latest/)  

  **许可证：**  
  Linux内核采用以下许可：  
  - **SPDX许可证标识符：** `GPL-2.0 WITH Linux-syscall-note`  
  - 内核根据GNU通用公共许可证第二版（`GPL-2.0`）许可，并包含`LICENSES/exceptions/Linux-syscall-note`中明确的系统调用例外条款。  

  **注意：**  
  - 构建指令请参考官方文档。

### **linux-package**  

- 路径: `kernel/debian`  
- 仓库地址: [https://github.com/LingmoOS/linux-package](https://github.com/LingmoOS/linux-package)  

  **描述：**  
  适用于Debian的Linux内核包，包含补丁、配置文件和用于构建与自定义内核的工具。  

  **补丁：**  
  - Debian对内核源码进行小幅修改，拆分为独立补丁。  
  - 补丁可在源码包或以下路径找到：  
    `https://sources.debian.org/src/linux/<version>/debian/patches/`  

  **配置文件：**  
  - 用于构建不同`linux-image`包的`.config`文件在构建过程中动态生成。  
  - 每个`linux-image-*`包提供完整的构建用`.config`文件，安装于`/boot`目录。  

  **安全支持范围：**  
  - 为二进制构建和完整源码包提供安全支持。  
  - 官方Debian构建中未启用的内核选项在安全支持中优先级较低。  

  **注意：**  
  - 构建指令请参考官方文档。  

  **移除非自由内容：**  
  - 参见`debian/copyright`中的`Files-Excluded`字段（注：暂未找到 😅）。  

  **变更日志：**  
  - 旧版Debian变更日志条目不再包含在二进制包中，但可在源码包的`debian/changelog.old`中找到。  

  **更多信息：**  
  - Debian Linux内核手册：[https://kernel-team.pages.debian.net/kernel-handbook/](https://kernel-team.pages.debian.net/kernel-handbook/)  
  - Debian Wiki：[https://wiki.debian.org/DebianKernel](https://wiki.debian.org/DebianKernel)  

  **许可证：**  
  - 格式：[https://www.debian.org/doc/packaging-manuals/copyright-format/1.0/](https://www.debian.org/doc/packaging-manuals/copyright-format/1.0/)  
  - 上游名称：Linux内核  
  - 源码：[https://www.kernel.org/pub/linux/kernel/](https://www.kernel.org/pub/linux/kernel/)  
  - 排除文件：参见`debian/copyright`。  
  - 许可文本：  
    - `GPL-2`: [https://www.gnu.org/licenses/gpl-2.0.html](https://www.gnu.org/licenses/gpl-2.0.html)  
    - `LGPL-2.1`: [https://www.gnu.org/licenses/lgpl-2.1.html](https://www.gnu.org/licenses/lgpl-2.1.html)  
    - `BSD-2-clause`: [https://opensource.org/licenses/BSD-2-Clause](https://opensource.org/licenses/BSD-2-Clause)  

  **注意：**  
  - 构建指令请参考官方文档。  

### **lingmo-core**  

- 路径: `shell/CoreComponents/CoreServer`  
- 版本: `refs/tags/2.0.2`  
- 仓库地址: [https://github.com/LingmoOS/lingmo-core](https://github.com/LingmoOS/lingmo-core)  

  **描述：**  
  管理系统会话并提供Lingmo OS基础服务的核心系统后端。  

  **依赖项：**  
  - **Arch Linux:**  
    ```bash  
    sudo pacman -S extra-cmake-modules pkgconf qt5-base qt5-quickcontrols2 qt5-x11extras qt5-tools\  
      kwindowsystem polkit polkit-qt5 xorg-server-devel xf86-input-libinput xf86-input-synaptics  
    ```  

  - **Ubuntu:**  
    ```bash  
    sudo apt install libpolkit-agent-1-dev libpolkit-qt5-1-dev libsm-dev libxtst-dev\  
      libxcb-randr0-dev libxcb-shape0-dev libxcb-xfixes0-dev libxcb-composite0-dev libxcb-damage0-dev libxcb-image0-dev libxcb-util0-dev libkf5idletime-dev  
    ```  

  - **Debian:**  
    ```bash  
    sudo apt install extra-cmake-modules pkg-config xserver-xorg-input-libinput-dev libx11-xcb-dev libxcb1-dev libxcb-randr0-dev\  
      libxcb-keysyms1-dev libxcursor-dev libxcb-xfixes0-dev libxcb-damage0-dev libxcb-composite0-dev libxcb-shm0-dev libxcb-util-dev\  
      libxcb-image0-dev libxcb-dpms0-dev libxcb-dri2-0-dev libxcb-dri3-dev libxcb-ewmh-dev libxcb-glx0-dev libxcb-record0-dev xserver-xorg-dev\  
      xserver-xorg-input-synaptics-dev libxtst-dev libsm-dev libpolkit-qt5-1-dev libpolkit-agent-1-dev libkf5windowsystem-dev libkf5globalaccel-dev\  
      libkf5coreaddons-dev libkf5idletime-dev libqt5x11extras5-dev qtbase5-dev qtdeclarative5-dev qtquickcontrols2-5-dev qttools5-dev qttools5-dev-tools  
    ```  

  **构建指令：**  
  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

  **注意：**  
  安装大量xcb包可能繁琐，建议编写脚本自动化安装。  

  **许可证：**  
  lingmo-core采用**GPLv3**许可证。  

### **lingmo-daemon**  

- 路径: `shell/CoreComponents/Daemon`  
- 仓库地址: [https://github.com/LingmoOS/lingmo-daemon](https://github.com/LingmoOS/lingmo-daemon)  

  **描述：**  
  LingmoOS后端守护进程。  

  **依赖项：**  
  - **Debian/Ubuntu:**  
    ```bash  
    sudo apt install cmake libqapt-dev  
    ```  

  **构建指令：**  
  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

  **许可证：**  
  lingmo-daemon采用**GPLv3**许可证。  

### **lingmo-appmotor**  

- 路径: `shell/CoreComponents/Appmotor`  
- 仓库地址: [https://github.com/LingmoOS/lingmo-appmotor](https://github.com/LingmoOS/lingmo-appmotor)  

  **描述：**  
  通过守护进程（applauncherd）预加载库和缓存资源，提升Lingmo OS应用启动速度，利用共享资源优化性能。  

  **依赖项：**  
  - **Debian/Ubuntu:**  
    ```bash  
    sudo apt install cmake qtbase5-dev qtdeclarative5-dev qtquickcontrols2-5-dev libsystemd-dev libcap-dev libdbus-1-dev  
    ```  

  **构建指令：**  
  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

  **注意：**  
  应用需编译为位置无关可执行文件（PIE）或导出`main()`函数的共享库。  

  **许可证：**  
  lingmo-appmotor采用**LGPL-2.1**许可证。  

### **lingmo-kwin-plugins**  

- 路径: `shell/CoreComponents/KWinPlugins`  
- 仓库地址: [https://github.com/LingmoOS/lingmo-kwin-plugins](https://github.com/LingmoOS/lingmo-kwin-plugins)  

  **描述：**  
  专为LingmoOS定制的KWin插件集合，增强窗口管理和桌面体验，是系统的必要组件。  

  **依赖项：**  
  - **Arch Linux:**  
    ```bash  
    sudo pacman -S extra-cmake-modules qt5-base qt5-declarative kconfig5 kdecoration5 kguiaddons5 kcoreaddons5 kconfigwidgets5 kwindowsystem5 kwayland kwin  
    ```  

  - **Ubuntu/Debian:**  
    ```bash  
    sudo apt install extra-cmake-modules qtbase5-dev qtdeclarative5-dev kconfig5 kdecoration5 kguiaddons5 kcoreaddons5 kconfigwidgets5 kwindowsystem5 kwayland kwin  
    ```  

  **构建指令：**  
  ```bash  
  mkdir build  
  cd build  
  cmake ..  
  make  
  sudo make install  
  ```  

  **许可证：**  
  lingmo-kwin-plugins采用**GPLv3**许可证。  

### **lingmo-kwin-plugins-roundedwindow**  

- 路径: `shell/CoreComponents/KWinRoundedWindow`  
- 版本: `refs/tags/1.0.2`  
- 仓库地址: [https://github.com/LingmoOS/lingmo-kwin-plugins-roundedwindow](https://github.com/LingmoOS/lingmo-kwin-plugins-roundedwindow)  

  **描述：**  
  为LingmoOS添加应用窗口圆角的KWin插件，提升桌面视觉美感。  

  **依赖项：**  
  - **Arch Linux:**  
    ```bash  
    sudo pacman -S extra-cmake-modules qt5-base qt5-declarative kconfig5 kdecoration5 kguiaddons5 kcoreaddons5 kconfigwidgets5 kwindowsystem5 kwayland kwin  
    ```  

  - **Ubuntu/Debian:**  
    ```bash  
    sudo apt install extra-cmake-modules qtbase5-dev qtdeclarative5-dev kconfig5 kdecoration5 kguiaddons5 kcoreaddons5 kconfigwidgets5 kwindowsystem5 kwayland kwin  
    ```  

  **构建指令：**  
  ```bash  
  mkdir build  
  cd build  
  cmake ..  
  make  
  sudo make install  
  ```  

  **加载与卸载：**  
  - 激活效果：  
    ```bash  
    sh ../tools/load.sh  
    ```  
  - 卸载效果：  
    ```bash  
    sh ../tools/unload.sh  
    sudo make uninstall  
    ```  

  **KWin更新后自动安装：**  
  每次KWin更新可能导致插件不兼容，通过以下命令自动重装：  
  ```bash  
  sh ../tools/install-autorun-test.sh  
  ```  
  该命令将添加桌面文件到自动运行目录，确保必要时插件被重建和重装。  

  **提示：**  
  - **禁用原生窗口轮廓冲突：**  
    为避免与Breeze窗口装饰的视觉冲突：  
    - 前往`系统设置 -> 主题 -> 窗口装饰 -> Breeze -> 编辑图标 -> 阴影与轮廓标签页 -> 轮廓强度（关闭）`。  

  - **为无装饰窗口（如Steam）添加阴影：**  
    步骤如下：  
    1. 在`系统设置 -> 窗口管理 -> 窗口规则 -> 外观与修复`中：  
       - 添加`[steam]`并设置`无标题栏`和框架为`无`。  
    2. 在`系统设置 -> 应用风格 -> 窗口装饰 -> Breeze主题设置 -> 窗口特定覆盖`中：  
       - 添加`[steam]`并设置`隐藏窗口标题栏`为`是`。  

  - **添加调试信息：**  
    调试时可在构建中启用日志：  
    ```bash  
    cmake .. -DCMAKE_BUILD_TYPE=Debug  
    cmake --build . -j  
    ```  
    查看调试消息：  
    ```bash  
    journalctl -f | grep kwin  
    ```  
    或使用彩色日志：  
    ```bash  
    sh ../tools/show-kwin-logs.sh  
    ```  

  **许可证：**  
  lingmo-kwin-plugins-roundedwindow采用**GPLv3**许可证。  

### **lingmo-grub-config**  

- 路径: `shell/BasicComponents/GrubBoot`  
- 仓库地址: [https://github.com/LingmoOS/lingmo-grub-config](https://github.com/LingmoOS/lingmo-grub-config)  

  **描述：**  
  包含Lingmo OS中GRUB引导程序的配置文件和资源，用于定制主题、背景图像和增强功能脚本。  

  **构建指令：**  
  ```bash  
  mkdir build  
  cd build  
  cmake ..  
  sudo make install  
  ```  

## 用户界面  

**简介：**  
用户界面类别聚焦用户交互的视觉元素，包括Dock、状态栏、主题和光标设计等组件。这些元素共同塑造操作系统的外观与体验。无论是定制界面的开发者还是追求美观的用户，都能在此找到有价值的信息。  

### **lingmo-dock**  

- 路径: `shell/BasicComponents/DockPanel`  
- 版本: `helium_dev`  
- 仓库地址: [https://github.com/LingmoOS/lingmo-dock](https://github.com/LingmoOS/lingmo-dock)  

  **描述：**  
  LingmoOS应用Dock提供简洁高效的面板，便于快速访问常用应用，通过直观导航提升桌面体验。  

  **依赖项：**  
  - **Arch Linux:**  
    ```bash  
    sudo pacman -S gcc cmake qt5-base qt5-quickcontrols2 kwindowsystem  
    ```  

  - **Ubuntu/Debian:**  
    ```bash  
    sudo apt install gcc cmake qtbase5-dev qtdeclarative5-dev qtquickcontrols2-5-dev libkf5windowsystem-dev  
    ```  

  - **额外依赖：**  
    - LingmoUI  
    - liblingmo  

  **构建指令：**  
  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

  **许可证：**  
  lingmo-dock采用**GPLv3**许可证。  

### **lingmo-statusbar**  

- 路径: `shell/BasicComponents/StatusBar`  
- 版本: `refs/tags/2.0.1`  
- 仓库地址: [https://github.com/LingmoOS/lingmo-statusbar](https://github.com/LingmoOS/lingmo-statusbar)  

  **描述：**  
  LingmoOS桌面顶部的状态栏显示系统当前状态，包括时间、系统托盘等关键信息，提供简洁直观的系统活动监控界面。  

  **依赖项：**  
  - **Ubuntu/Debian:**  
    ```bash  
    sudo apt install libkf5windowsystem-dev  
    ```  

  **构建指令：**  
  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

  **许可证：**  
  lingmo-statusbar采用**GPLv3**许可证。  

### **lingmo-cursor-themes**  

- 路径: `shell/BasicComponents/Cursor`  
- 仓库地址: [https://github.com/LingmoOS/lingmo-cursor-themes](https://github.com/LingmoOS/lingmo-cursor-themes)  

  **描述：**  
  从Bibata Cursor项目派生的光标主题集合，为LingmoOS用户提供现代、可定制且美观的光标体验。  

  **构建指令：**  
  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

  **许可证：**  
  lingmo-cursor-themes采用**GPLv3**许可证。  

### **lingmo-gtk-themes**  

- 路径: `shell/BasicComponents/GtkStyle`  
- 仓库地址: [https://github.com/LingmoOS/lingmo-gtk-themes](https://github.com/LingmoOS/lingmo-gtk-themes)  

  **描述：**  
  为LingmoOS设计的GTK主题集合，确保应用间视觉风格统一，提供现代化且可定制的界面选项。  

  **依赖项：**  
  - **构建工具：**  
    - `cmake`  
    - `gcc`  

  **构建指令：**  
  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

  **许可证：**  
  lingmo-gtk-themes采用**GPLv3**许可证。  

### **lingmo-wallpapers**  

- 路径: `shell/BasicComponents/Wallpapers`  
- 仓库地址: [https://github.com/LingmoOS/lingmo-wallpapers](https://github.com/LingmoOS/lingmo-wallpapers)  

  **构建指令：**  
  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

  **许可证：**  
  lingmo-wallpapers采用[**Unsplash**](https://unsplash.com/license)许可证。  

### **lingmo-sddm-theme**  

- 路径: `shell/BasicComponents/LoginManagerStyle`  
- 版本: `refs/tags/2.7.0`  
- 仓库地址: [https://github.com/LingmoOS/lingmo-sddm-theme](https://github.com/LingmoOS/lingmo-sddm-theme)  

  **描述：**  
  专为LingmoOS设计的现代化SDDM（简单桌面显示管理器）主题，提供无缝优雅的登录体验。  

  **依赖项：**  
  - **Ubuntu/Debian:**  
    ```bash  
    sudo apt install build-essential cmake extra-cmake-modules qtbase5-dev qtdeclarative5-dev qtquickcontrols2-5-dev qttools5-dev qttools5-dev-tools  
    ```  

  - **Arch Linux:**  
    ```bash  
    sudo pacman -S base-devel cmake extra-cmake-modules qt5-base qt5-declarative qt5-quickcontrols2 qt5-tools  
    ```  

  **构建指令：**  
  ```bash  
  mkdir build  
  cd build  
  cmake ..  
  make  
  sudo make install  
  ```  

  **许可证：**  
  lingmo-sddm-theme采用**GPLv3**许可证。  

### **lingmo-systemicons**  

- 路径: `shell/BasicComponents/Icons`  
- 仓库地址: [https://github.com/LingmoOS/lingmo-systemicons](https://github.com/LingmoOS/lingmo-systemicons)  

  **描述：**  
  包含Crule和Crule-dark等图标主题，为Lingmo OS提供统一美观的用户界面。  

  **构建指令：**  
  ```bash  
  mkdir build  
  cd build  
  cmake ..  
  sudo make install  
  ```  

## 用户应用  

**简介：**  
用户应用是日常使用的工具类程序，涵盖文件管理、文本编辑、系统设置等核心功能。包括计算器、文件管理器、终端等，既满足用户日常需求，也为开发者提供应用构建与集成的参考。  

### **lingmo-calculator**  

- 路径: `shell/BasicComponents/Calculator`  
- 版本: `refs/tags/0.6.3`  
- 仓库地址: [https://github.com/LingmoOS/lingmo-calculator](https://github.com/LingmoOS/lingmo-calculator)  

  **描述：**  
  LingmoOS的简洁直观计算器应用，专注于基础算术运算，界面清爽易用。  

  **依赖项：**  
  - **Ubuntu/Debian:**  
    ```bash  
    sudo apt install cmake gcc qtbase5-dev qtdeclarative5-dev qml-module-qtquick2 qml-module-qtquick-controls2  
    ```  

  - **Arch Linux:**  
    ```bash  
    sudo pacman -S cmake gcc qt5-base qt5-declarative qt5-quickcontrols2  
    ```  

  **构建指令：**  
  ```bash  
  mkdir build  
  cd build  
  cmake ..  
  make  
  sudo make install  
  ```  

  **许可证：**  
  lingmo-calculator采用**GPLv3**许可证。  

### **lingmo-filemanager**  

- 路径: `shell/CoreComponents/Filemanager`  
- 版本: `dev`  
- 仓库地址: [https://github.com/LingmoOS/lingmo-filemanager](https://github.com/LingmoOS/lingmo-filemanager)  

  **描述：**  
  简洁美观的文件管理器，保留经典PC交互设计，为用户提供熟悉直观的操作体验。  

  **依赖项：**  
  - **Ubuntu:**  
    ```bash  
    sudo apt install equivs curl git devscripts lintian build-essential automake autotools-dev --no-install-recommends  
    sudo mk-build-deps -i -t "apt-get --yes" -r  
    ```  

  - **Debian:**  
    ```bash  
    sudo apt install build-essential cmake extra-cmake-modules libkf5kio-dev libkf5solid-dev libkf5windowsystem-dev libkf5config-dev qtbase5-dev qtbase5-private-dev qtdeclarative5-dev qtquickcontrols2-5-dev qttools5-dev qttools5-dev-tools  
    ```  

  - **Arch Linux:**  
    ```bash  
    sudo pacman -S extra-cmake-modules qt5-base qt5-quickcontrols2 taglib kio  
    ```  

  **构建指令：**  
  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

  **注意：**  
  - `mk-build-deps`命令可能需要`devscripts`包。  

  **许可证：**  
  lingmo-filemanager采用**GPLv3**许可证。  

### **lingmo-settings**  

- 路径: `shell/BasicComponents/Settings`  
- 版本: `helium`  
- 仓库地址: [https://github.com/LingmoOS/lingmo-settings](https://github.com/LingmoOS/lingmo-settings)  

  **描述：**  
  LingmoOS系统设置应用，提供集中式配置界面，采用LingmoUI作为界面风格，呈现现代化用户体验。  

  **依赖项：**  
  - **Arch/Manjaro:**  
    ```bash  
    sudo pacman -S extra-cmake-modules qt5-base qt5-quickcontrols2 freetype2 fontconfig networkmanager-qt modemmanager-qt  
    ```  

  - **Debian/Ubuntu:**  
    ```bash  
    sudo apt install cmake debhelper extra-cmake-modules libicu-dev libcrypt-dev libfreetype6-dev libfontconfig1-dev libkf5networkmanagerqt-dev libkf5config-dev modemmanager-qt-dev qtbase5-dev qtdeclarative5-dev qtquickcontrols2-5-dev qttools5-dev qttools5-dev-tools qml-module-qtquick-controls2 qml-module-qtquick2 qml-module-qtquick-layouts qml-module-qt-labs-platform qml-module-qt-labs-settings qml-module-qtqml qml-module-qtquick-window2 qml-module-qtquick-shapes qml-module-qtquick-dialogs qml-module-qtquick-particles2  
    ```  

  **构建指令：**  
  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

  **许可证：**  
  lingmo-settings采用**GPLv3**许可证。  

### **lingmo-terminal**  

- 路径: `shell/BasicComponents/Terminal`  
- 仓库地址: [https://github.com/LingmoOS/lingmo-terminal](https://github.com/LingmoOS/lingmo-terminal)  

  **描述：**  
  LingmoOS终端模拟器，采用LingmoUI界面风格，提供现代化友好的终端体验。  

  **第三方代码：**  
  - [**qmltermwidget**](https://github.com/Swordfish90/qmltermwidget)  

  **依赖项：**  
  - **Debian/Ubuntu:**  
    ```bash  
    sudo apt install extra-cmake-modules qtbase5-dev qtdeclarative5-dev qtquickcontrols2-5-dev qttools5-dev  
    ```  

  **构建与安装：**  
  ```bash  
  mkdir build  
  cd build  
  cmake ..  
  make  
  sudo make install  
  ```  

  **许可证：**  
  lingmo-terminal采用**GPLv3**许可证。  

### **lingmo-texteditor**  

- 路径: `shell/BasicComponents/Texteditor`  
- 仓库地址: [https://github.com/LingmoOS/lingmo-texteditor](https://github.com/LingmoOS/lingmo-texteditor)  

  **描述：**  
  LingmoOS轻量优雅的文本编辑器，设计简洁易用，提供基础文本编辑功能。  

  **依赖项：**  
  - **Debian/Ubuntu:**  
    ```bash  
    sudo apt install equivs curl git devscripts lintian build-essential automake autotools-dev --no-install-recommends  
    ```  

  **构建指令：**  
  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

  **许可证：**  
  lingmo-texteditor采用**GPLv3**许可证。  

### **lingmo-updator**  

- 路径: `shell/BasicComponents/UpdateTool`  
- 仓库地址: [https://github.com/LingmoOS/lingmo-updator](https://github.com/LingmoOS/lingmo-updator)  

  **描述：**  
  LingmoOS官方系统更新工具，提供无缝友好的更新管理体验。  

  **依赖项：**  
  - **Debian/Ubuntu:**  
    ```bash  
    sudo apt install cmake libqapt-dev  
    ```  

  **构建指令：**  
  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

  **许可证：**  
  lingmo-updator采用**GPLv3**许可证。  

### **lingmo-videoplayer**  

- 路径: `shell/BasicComponents/VideoPlayer`  
- 仓库地址: [https://github.com/LingmoOS/lingmo-videoplayer](https://github.com/LingmoOS/lingmo-videoplayer)  

  **描述：**  
  基于Qt/QML和libmpv的开源视频播放器，为LingmoOS提供流畅丰富的播放体验。  

  **第三方代码：**  
  - [**haruna**](https://invent.kde.org/multimedia/haruna)  

  **依赖项：**  
  - **Debian/Ubuntu:**  
    ```bash  
    sudo apt install extra-cmake-modules qtbase5-dev qtdeclarative5-dev qtquickcontrols2-5-dev libmpv-dev  
    ```  

  **构建指令：**  
  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

  **许可证：**  
  lingmo-videoplayer采用**GPLv3**许可证。  

### **lingmo-launcher**  

- 路径: `shell/BasicComponents/Launcher`  
- 仓库地址: [https://github.com/LingmoOS/lingmo-launcher](https://github.com/LingmoOS/lingmo-launcher)  

  **描述：**  
  LingmoOS全屏应用启动器，提供快速直观的应用访问入口，提升生产力与用户体验。  

  **依赖项：**  
  - **Arch Linux/Manjaro:**  
    ```bash  
    sudo pacman -S gcc cmake qt5-base qt5-quickcontrols2 kwindowsystem  
    ```  

  - **Debian/Ubuntu:**  
    ```bash  
    sudo apt install gcc cmake qtbase5-dev qml-module-qtquick-controls2 qml-module-org-kde-kwindowsystem qtdeclarative5-dev qtquickcontrols2-5-dev qttools5-dev libkf5windowsystem-dev  
    ```  

  **构建指令：**  
  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

  **许可证：**  
  lingmo-launcher采用**GPLv3**许可证。  

### **lingmo-screenlocker**  

- 路径: `shell/BasicComponents/ScreenLocker`  
- 仓库地址: [https://github.com/LingmoOS/lingmo-screenlocker](https://github.com/LingmoOS/lingmo-screenlocker)  

  **描述：**  
  LingmoOS屏幕锁，通过系统认证机制在闲置时锁定屏幕，提供无缝锁定体验。  

  **第三方代码：**  
  - **kcheckpass**: 用于认证。  

  **依赖项：**  
  - **Debian/Ubuntu:**  
    ```bash  
    sudo apt install libpam0g-dev libx11-dev cmake extra-cmake-modules qtbase5-dev qtdeclarative5-dev qtquickcontrols2-5-dev  
    ```  

  - **Arch Linux:**  
    ```bash  
    sudo pacman -S pam libx11 extra-cmake-modules qt5-base qt5-declarative qt5-quickcontrols2  
    ```  

  **构建指令：**  
  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

  **许可证：**  
  lingmo-screenlocker采用**GPLv3**许可证。  

## 开发库  

**简介：**  
开发库是开发者构建应用的基础模块，提供功能函数、界面风格与工具，确保应用与Lingmo OS无缝集成。包含lib_lingmo、LingmoUI等库，简化开发流程，保障一致性。开发者可通过此部分创建高质量集成软件。  

### **lib_lingmo**  

- 路径: `lib/SystemLibrary`  
- 版本: `qt5`  
- 仓库地址: [https://github.com/LingmoOS/lib_lingmo](https://github.com/LingmoOS/lib_lingmo)  

  **描述：**  
  LingmoOS核心系统库，提供系统管理的基础功能与集成。  

  **依赖项：**  
  - **Arch Linux:**  
    ```bash  
    sudo pacman -S gcc cmake qt5-base qt5-quickcontrols2 networkmanager-qt modemmanager-qt  
    ```  

  - **Debian/Ubuntu:**  
    ```bash  
    sudo apt install qtbase5-dev qtquickcontrols2-5-dev modemmanager-qt-dev libqt5sensors5-dev libkf5networkmanagerqt-dev libkf5screen-dev libkf5bluezqt-dev libkf5kio-dev cmake qtdeclarative5-dev libcanberra-dev libpulse-dev libcanberra-pulse extra-cmake-modules qttools5-dev qttools5-dev-tools  
    ```  

  **构建与安装：**  
  ```bash  
  mkdir build  
  cd build  
  cmake ..  
  make  
  sudo make install  
  ```  

  **许可证：**  
  lib_lingmo采用**GPLv3**许可证。  

### **LingmoUI**  

- 路径: `lib/SystemUI_Library`  
- 版本: `refs/tags/2.3.0`  
- 仓库地址: [https://github.com/LingmoOS/LingmoUI](https://github.com/LingmoOS/LingmoUI)  

  **描述：**  
  基于QQC（Qt Quick Controls）和Qt 6的GUI库，为LingmoOS应用提供统一现代化界面，支持明暗模式、无边框窗口、模糊窗口、窗口阴影和桌面级菜单等功能。  

  **特性：**  
  - 明/暗模式  
  - 无边框窗口（Wayland & XCB窗口移动/调整大小）  
  - 模糊窗口  
  - 窗口阴影  
  - 桌面级菜单  
  - QQC风格  
  - ...  

  **结构：**  
  - **Compatible:** 存储旧版LingmoUI 1.0（未来将移除）。  

  **依赖项：**  
  - **Debian/Ubuntu:**（已过期，需更新）  
    ```bash  
    sudo apt install libqt5x11extras5-dev libkf5windowsystem-dev qtbase5-private-dev libxcb1-dev libxcb-shape0-dev libxcb-icccm4-dev -y  
    ```  

  **构建指令：**  
  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

  **打包（Debian/Ubuntu）：**  
  - 安装编译依赖：  
    ```bash  
    sudo apt install equivs devscripts --no-install-recommends  
    sudo mk-build-deps -i -t "apt --yes" -r  
    ```  
  - 开始打包：  
    ```bash  
    dpkg-buildpackage -b -uc -us -tc  
    ```  

  **许可证：**  
  LingmoUI采用**GPLv3**许可证。  

### **lingmo-qt-plugins**  

- 路径: `lib/SystemLibrary_Qt`  
- 仓库地址: [https://github.com/LingmoOS/lingmo-qt-plugins](https://github.com/LingmoOS/lingmo-qt-plugins)  

  **描述：**  
  Qt插件集合，统一LingmoOS上Qt应用的风格与行为，确保系统级一致的用户体验。  

  **依赖项：**  
  - **Arch Linux:**  
    ```bash  
    sudo pacman -S gcc extra-cmake-modules qt5-base qt5-tools qt5-x11extras libqtxdg libdbusmenu-qt5 libxcb  
    ```  

  **构建指令：**  
  ```bash  
  mkdir build  
  cd build  
  cmake ..  
  make  
  sudo make install  
  ```  

  **许可证：**  
  lingmo-qt-plugins采用**GPLv3**许可证。  

### **libqtxdg**  

- 路径: `lib/SystemLibrary_QtXdg`  
- 远程仓库: nebula  
- 仓库地址: [https://nebula.lingmo.org/lingmo-os/libqtxdg](https://nebula.lingmo.org/lingmo-os/libqtxdg)  

  **描述：**  
  libqtxdg是freedesktop.org XDG规范的Qt 5实现，由LXQt项目维护，几乎所有LXQt组件均使用该库。该库支持GTK+图标主题缓存加速查找，若缓存缺失或过期则回退至常规查找。  

  **安装：**  
  - **运行时依赖：**  
    - `qtbase`  
    - （可选）`gtk-update-icon-cache`用于加速图标查找。  

  - **构建依赖：**  
    - `CMake`  
    - `qtsvg`  
    - `qttools`  
    - `lxqt-build-tools`  
    - （可选）`Git`用于拉取最新VCS版本。  

  **构建指令：**  
  - 使用CMake配置构建，重要变量包括：  
    - `BUILD_TESTS`: 启用测试构建（默认：`OFF`）。  
    - `BUILD_DEV_UTILS`: 启用开发工具构建与安装（默认：`OFF`）。  

  ```bash  
  mkdir build  
  cd build  
  cmake ..  
  make  
  sudo make install  
  ```  

  **二进制包：**  
  该库在Arch Linux、Debian、Fedora、openSUSE等主流发行版中可用，可通过包管理器搜索`libqtxdg`安装。  

  **许可证：**  
  libqtxdg采用**LGPLv2.1**许可证。  

## 系统工具  

**简介：**  
系统工具包含管理与维护Lingmo OS的实用程序，涵盖安装工具、屏幕锁定等系统级工具。无论您是调整系统的高级用户还是自动化任务的开发者，此类别都能提供增强Lingmo OS体验的必备工具。  

### **lingmo-first-setup**  

- 路径: `guide`  
- 仓库地址: [https://github.com/LingmoOS/lingmo-first-setup](https://github.com/LingmoOS/lingmo-first-setup)  

  **描述：**  
  引导用户完成Lingmo OS初始设置的应用，包括账户创建与系统自定义。  

  **依赖项：**  
  - **Ubuntu/Debian:**  
    ```bash  
    sudo apt install cmake libqapt-dev qtbase5-dev qtdeclarative5-dev qml-module-qtwebview qtquickcontrols2-5-dev qttools5-dev qttools5-dev-tools debhelper  
    ```  

  **构建指令：**  
  ```bash  
  mkdir build  
  cd build  
  cmake ..  
  make  
  sudo make install  
  ```  

  **许可证：**  
  lingmo-first-setup采用**GPLv3**许可证。  

### **lingmo-ocr**  

- 路径: `shell/BasicComponents/OCRServer`  
- 版本: `refs/tags/v1.2.4`  
- 仓库地址: [https://github.com/LingmoOS/lingmo-ocr](https://github.com/LingmoOS/lingmo-ocr)  

  **描述：**  
  为LingmoOS开发的OCR（光学字符识别）服务器，精准识别图像文本并支持多语言。  

  **依赖项：**  
  - **Ubuntu/Debian:**  
    ```bash  
    sudo apt install equivs curl git devscripts lintian build-essential automake autotools-dev cmake g++  
    ```  

  - **Arch Linux:**  
    ```bash  
    sudo pacman -S base-devel cmake  
    ```  

  **构建指令：**  
  ```bash  
  mkdir build  
  cd build  
  cmake ..  
  make  
  sudo make install  
  ```  

  **许可证：**  
  lingmo-ocr采用**GPLv3**许可证。  

### **lingmo-screenshots**  

- 路径: `shell/BasicComponents/ScreenShots`  
- 仓库地址: [https://github.com/LingmoOS/lingmo-screenshots](https://github.com/LingmoOS/lingmo-screenshots)  

  **描述：**  
  LingmoOS截图工具，提供全屏、窗口或区域截图功能，界面简洁易用。  

  **依赖项：**  
  - **Arch/Manjaro:**  
    ```bash  
    sudo pacman -S extra-cmake-modules qt5-base qt5-quickcontrols2  
    ```  

  - **Debian/Ubuntu:**  
    ```bash  
    sudo apt install cmake qtbase5-dev qtdeclarative5-dev qtquickcontrols2-5-dev qttools5-dev qttools5-dev-tools qml-module-qtquick-controls2 qml-module-qtquick2 qml-module-qtquick-layouts qml-module-qt-labs-platform qml-module-qt-labs-settings qml-module-qtqml qml-module-qtquick-window2 qml-module-qtquick-shapes qml-module-qtquick-dialogs qml-module-qtquick-particles2  
    ```  

  **构建指令：**  
  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

  **许可证：**  
  lingmo-screenshots采用**GPLv3**许可证。  

## 构建与配置  

**简介：**  
构建与配置类别面向需要从源码编译和定制Lingmo OS的开发者，包含构建脚本、清单和配置文件，支持灵活的系统部署。此部分对设置开发环境或按需定制OS至关重要。  

### **LingmoOS**  

- 路径: `build`  
- 仓库地址: [https://github.com/LingmoOS/LingmoOS](https://github.com/LingmoOS/LingmoOS)  

  **描述：**  
  包含Lingmo OS的构建配置与脚本，使用`repo`工具管理多个子模块与依赖。  

  **构建要求：**  
  - **操作系统：** Debian GNU/Linux 12（Bookworm）、13（Trixie）或更高版本  
  - **磁盘空间：** > 50GB  
  - **处理器：** 多核多线程  
  - **内存：** 最低8GB RAM  

  **工具准备：**  
  ```bash  
  git clone https://github.com/LingmoOS/LingmoOS.git  
  mkdir -p ~/bin  
  cp -v LingmoOS/repo ~/bin/  
  chmod a+x ~/bin/repo  
  echo 'export PATH="$PATH:$HOME/bin"' >> ~/.bashrc  
  source ~/.bashrc  
  ```  

  **构建指令：**  
  1. **克隆仓库：**  
     ```bash  
     git clone https://github.com/LingmoOS/LingmoOS.git  
     ```  

  2. **设置repo工具：**  
     ```bash  
     mkdir -p ~/bin  
     cp -v LingmoOS/repo ~/bin/  
     chmod a+x ~/bin/repo  
     echo 'export PATH="$PATH:$HOME/bin"' >> ~/.bashrc  
     source ~/.bashrc  
     ```  

  3. **初始化与同步仓库：**  
     ```bash  
     mkdir -p workdir  
     cd workdir  
     repo init -u https://github.com/LingmoOS/manifest.git  
     repo sync  
     ```  

  4. **构建：**  
    ***待补充***  

  **依赖项：**  
  - **构建工具：**  
    - `git`  
    - `python3`（用于repo）  

  - **安装依赖：**  
    ```bash  
    sudo apt install git python3  
    ```  

### **manifest**  

- 路径: `tools`  
- 仓库地址: [https://github.com/LingmoOS/manifest](https://github.com/LingmoOS/manifest)  

  **描述：**  
  包含`repo`工具使用的清单文件，管理Lingmo OS的多个子模块和依赖，定义构建所需的仓库结构与版本。  

  **使用repo工具：**  
  参考`Tools/LingmoOS/初始化与同步仓库`获取更多信息。  

  **注意：**  
  - 该清单对设置Lingmo OS构建环境至关重要。  
  - 确保所有必要组件在构建前正确获取与同步。  

### **lingmo-base-common**  

- 路径: `init`  
- 仓库地址: [https://github.com/LingmoOS/lingmo-base-common](https://github.com/LingmoOS/lingmo-base-common)  

  **描述：**  
  包含Lingmo OS的基本文件系统层次结构和杂项文件，提供操作系统正常运行所需的配置文件和目录。  

  **依赖项：**  
  - **Debian/Ubuntu:**  
    ```bash  
    sudo apt install debhelper-compat debhelper dpkg-dev  
    ```  

  **构建指令：**  
  ```bash  
  dpkg-buildpackage -us -uc  
  ```  

### **lingmo-live**  

- 路径: `system/installer`  
- 版本: `helium`  
- 仓库地址: [https://github.com/LingmoOS/lingmo-live](https://github.com/LingmoOS/lingmo-live)  

  **描述：**  
  包含Lingmo OS Live镜像的配置与设置，集成Calamares安装程序以简化安装流程。  

  **依赖项：**  
  - **Debian/Ubuntu:**  
    ```bash  
    sudo apt install build-essential debhelper dpkg-dev  
    ```  

  **构建指令：**  
  ```bash  
  dpkg-buildpackage -us -uc  
  ```  

  **许可证：**  
  lingmo-live采用**ISC**许可证，允许使用、复制、修改和分发，但需包含版权和许可声明。