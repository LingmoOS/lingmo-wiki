# Lingmo OS Component List

This list provides a structured overview of the components of Lingmo OS, organized into categories for easy navigation. Each component is linked to its corresponding GitHub repository and includes its path from the [default.xml](https://github.com/LingmoOS/manifest/blob/main/default.xml) file. The list also includes a brief description, documentation links, and licensing information for each component.

## System Services

### **lingmo-core**

- Path: `shell/CoreComponents/CoreServer`
- Revision: `refs/tags/2.0.2`
- URL: [https://github.com/LingmoOS/lingmo-core](https://github.com/LingmoOS/lingmo-core)
  
  **Description:**  
  Core system backend responsible for managing system sessions and providing essential services in Lingmo OS.

  **Dependencies:**  
  For Arch:

  ```bash
  sudo pacman -S extra-cmake-modules pkgconf qt5-base qt5-quickcontrols2 qt5-x11extras qt5-tools\
    kwindowsystem polkit polkit-qt5 xorg-server-devel xf86-input-libinput xf86-input-synaptics
  ```

  For Ubuntu:

  ```bash
  sudo apt install libpolkit-agent-1-dev libpolkit-qt5-1-dev libsm-dev libxtst-dev\
    libxcb-randr0-dev libxcb-shape0-dev libxcb-xfixes0-dev libxcb-composite0-dev libxcb-damage0-dev libxcb-image0-dev libxcb-util0-dev libkf5idletime-dev
  ```

  For Debian:

  ```bash
  sudo apt install extra-cmake-modules pkg-config xserver-xorg-input-libinput-dev libx11-xcb-dev libxcb1-dev libxcb-randr0-dev\
    libxcb-keysyms1-dev libxcursor-dev libxcb-xfixes0-dev libxcb-damage0-dev libxcb-composite0-dev libxcb-shm0-dev libxcb-util-dev\
    libxcb-image0-dev libxcb-dpms0-dev libxcb-dri2-0-dev libxcb-dri3-dev libxcb-ewmh-dev libxcb-glx0-dev libxcb-record0-dev xserver-xorg-dev\
    xserver-xorg-input-synaptics-dev libxtst-dev libsm-dev libpolkit-qt5-1-dev libpolkit-agent-1-dev libkf5windowsystem-dev libkf5globalaccel-dev\
    libkf5coreaddons-dev libkf5idletime-dev libqt5x11extras5-dev qtbase5-dev qtdeclarative5-dev qtquickcontrols2-5-dev qttools5-dev qttools5-dev-tools
  ```

  **Build Instructions:**  

  ```bash
  mkdir build
  cd build
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..
  make
  sudo make install
  ```

  **Note:**  
  Installing the numerous xcb packages can be cumbersome; consider creating a script to automate the installation process.

  **License:**  
  lingmo-core is licensed under the **GPLv3** license.

### **lingmo-daemon**

- Path: `shell/CoreComponents/Daemon`
- URL: [https://github.com/LingmoOS/lingmo-daemon](https://github.com/LingmoOS/lingmo-daemon)
  
  **Description:**
  LingmoOS backend.
  
  **Dependencies:**
  For Debian/Ubuntu:

  ```bash
  sudo apt install cmake libqapt-dev
  ```
  
  **Build Instructions:**

  ```bash
  mkdir build
  cd build
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..
  make
  sudo make install
  ```

  **License:**  
  lingmo-daemon is licensed under the **GPLv3** license.

### **lingmo-appmotor**

- Path: `shell/CoreComponents/Appmotor`
- URL: [https://github.com/LingmoOS/lingmo-appmotor](https://github.com/LingmoOS/lingmo-appmotor)
  
  **Description:**  
  Enhances application launch speed in Lingmo OS by preloading libraries and caching resources using a daemon (applauncherd). It improves performance by enabling shared resources among applications.
  
  **Dependencies:**  
  For Debian/Ubuntu:

  ```bash
  sudo apt install cmake qtbase5-dev qtdeclarative5-dev qtquickcontrols2-5-dev libsystemd-dev libcap-dev libdbus-1-dev
  ```
  
  **Build Instructions:**  

  ```bash
  mkdir build
  cd build
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..
  make
  sudo make install
  ```
  
  **Note:**  
  Applications must be compiled as position-independent executables (PIE) or shared libraries with an exported `main()` function.

  **License:**  
  lingmo-appmotor is licensed under the **LGPL-2.1** license.

### **lingmo-kwin-plugins**

- Path: `shell/CoreComponents/KWinPlugins`
- URL: [https://github.com/LingmoOS/lingmo-kwin-plugins](https://github.com/LingmoOS/lingmo-kwin-plugins)
  
  **Description:**  
  A collection of KWin plugins tailored for LingmoOS, enhancing window management and desktop experience,which is a necessary component of LingmoOS.
  
  **Dependencies:**  

- **Arch Linux:**

    ```bash
    sudo pacman -S extra-cmake-modules qt5-base qt5-declarative kconfig5 kdecoration5 kguiaddons5 kcoreaddons5 kconfigwidgets5 kwindowsystem5 kwayland kwin
    ```

- **Ubuntu/Debian:**

    ```bash
    sudo apt install extra-cmake-modules qtbase5-dev qtdeclarative5-dev kconfig5 kdecoration5 kguiaddons5 kcoreaddons5 kconfigwidgets5 kwindowsystem5 kwayland kwin
    ```
  
  **Build Instructions:**  

  ```bash
  mkdir build
  cd build
  cmake ..
  make
  sudo make install
  ```

  **License:**  
  lingmo-kwin-plugins is licensed under the **GPLv3** license.

### **lingmo-kwin-plugins-roundedwindow**  

- Path: `shell/CoreComponents/KWinRoundedWindow`  
- Revision: `refs/tags/1.0.2`  
- URL: [https://github.com/LingmoOS/lingmo-kwin-plugins-roundedwindow](https://github.com/LingmoOS/lingmo-kwin-plugins-roundedwindow)  

  **Description:**  
  A KWin plugin for LingmoOS that adds rounded corners to application windows, enhancing the visual aesthetics of the desktop environment.  

  **Dependencies:**  

- **Arch Linux:**  

    ```bash  
    sudo pacman -S extra-cmake-modules qt5-base qt5-declarative kconfig5 kdecoration5 kguiaddons5 kcoreaddons5 kconfigwidgets5 kwindowsystem5 kwayland kwin  
    ```  

- **Ubuntu/Debian:**  

    ```bash  
    sudo apt install extra-cmake-modules qtbase5-dev qtdeclarative5-dev kconfig5 kdecoration5 kguiaddons5 kcoreaddons5 kconfigwidgets5 kwindowsystem5 kwayland kwin  
    ```  

  **Build Instructions:**  

  ```bash  
  mkdir build  
  cd build  
  cmake ..  
  make  
  sudo make install  
  ```  

  **Load & Unload:**  

- To activate the effect:  

    ```bash  
    sh ../tools/load.sh  
    ```  

- To uninstall the effect:  

    ```bash  
    sh ../tools/unload.sh  
    sudo make uninstall  
    ```  

  **Auto-install After KWin Update:**  
  After each KWin update, the plugin may become incompatible. To automate reinstallation:  

  ```bash  
  sh ../tools/install-autorun-test.sh  
  ```  

  This adds a desktop file to the autorun directory, ensuring the plugin is rebuilt and reinstalled if necessary.  

  **Tips:**  

- **Disable Conflicting Native Window Outline:**  
    To avoid visual glitches with Breeze window decorations:  
  - Go to `System settings -> Themes -> Window Decorations -> Breeze -> Edit icon -> Shadows and Outline tab -> Outline intensity (Off)`.  

- **Add Shadow to Windows Without Decoration (e.g., Steam):**  
    Use the following steps:  
    1. In `System settings -> Window management -> Window rules -> Appearance & Fixes`:  
       - Add `[steam]` and set `No titlebar` and frame to `No`.  
    2. In `System settings -> Application Style -> Window decoration -> Breeze theme setting -> Window specific overrides`:  
       - Add `[steam]` and set `Hide Window title bar` to `Yes`.  

- **Add Debug Messages:**  
    For troubleshooting, enable debug logs during build:  

    ```bash  
    cmake .. -DCMAKE_BUILD_TYPE=Debug  
    cmake --build . -j  
    ```  

    View debug messages with:  

    ```bash  
    journalctl -f | grep kwin  
    ```  

    Or use colorful logs:  

    ```bash  
    sh ../tools/show-kwin-logs.sh  
    ```  

  **License:**  
  lingmo-kwin-plugins-roundedwindow is licensed under the **GPLv3** license.

### **lingmo-grub-config**  

- Path: `shell/BasicComponents/GrubBoot`  
- URL: [https://github.com/LingmoOS/lingmo-grub-config](https://github.com/LingmoOS/lingmo-grub-config)

  **Description:**  
  This repository contains the configuration files and resources for customizing the GRUB bootloader in Lingmo OS. It includes themes, background images, and scripts to enhance the bootloader's appearance and functionality.

  **Build Instructions:**

     ```bash
     mkdir build
     cd build
     cmake ..
     sudo make install
     ```

## User Interface

**Introduction:**
The User Interface category focuses on the visual and interactive elements that users engage with. It includes components such as docks, status bars, themes, and cursor designs. These elements contribute to the overall look and feel of the OS, enhancing user experience. Both developers looking to customize the interface and users seeking a visually appealing environment will find this section informative.

### **lingmo-dock**  

- Path: `shell/BasicComponents/DockPanel`  
- Revision: `helium_dev`  
- URL: [https://github.com/LingmoOS/lingmo-dock](https://github.com/LingmoOS/lingmo-dock)  

  **Description:**  
  The LingmoOS application dock provides a sleek and functional panel for quick access to frequently used applications, enhancing the desktop experience with intuitive navigation.  

  **Dependencies:**  

- **Arch Linux:**  

    ```bash  
    sudo pacman -S gcc cmake qt5-base qt5-quickcontrols2 kwindowsystem  
    ```  

- **Ubuntu/Debian:**  

    ```bash  
    sudo apt install gcc cmake qtbase5-dev qtdeclarative5-dev qtquickcontrols2-5-dev libkf5windowsystem-dev  
    ```  

- **Additional Dependencies:**  
  - LingmoUI  
  - liblingmo  

  **Build Instructions:**  

  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

  **License:**  
  lingmo-dock is licensed under the **GPLv3** license.

### **lingmo-statusbar**  

- Path: `shell/BasicComponents/StatusBar`  
- Revision: `refs/tags/2.0.1`  
- URL: [https://github.com/LingmoOS/lingmo-statusbar](https://github.com/LingmoOS/lingmo-statusbar)  

  **Description:**  
  The status bar at the top of the LingmoOS desktop displays the current status of the system, including time, system tray, and other essential information. It provides a clean and intuitive interface for monitoring system activities.  

  **Dependencies:**  

- **Ubuntu/Debian:**  

    ```bash  
    sudo apt install libkf5windowsystem-dev
    ```  

  **Build Instructions:**  

  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

  **License:**  
  lingmo-statusbar is licensed under the **GPLv3** license.

### **lingmo-cursor-themes**  

- Path: `shell/BasicComponents/Cursor`  
- URL: [https://github.com/LingmoOS/lingmo-cursor-themes](https://github.com/LingmoOS/lingmo-cursor-themes)  

  **Description:**  
  A collection of cursor themes for LingmoOS, forked from the popular Bibata Cursor project. These themes provide a modern, customizable, and visually appealing cursor experience for users.  

  **Build:**  

  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make
  sudo make install  
  ```  

  **License:**  
  lingmo-cursor-themes is licensed under the **GPLv3** license.

### **lingmo-gtk-themes**  

- Path: `shell/BasicComponents/GtkStyle`  
- URL: [https://github.com/LingmoOS/lingmo-gtk-themes](https://github.com/LingmoOS/lingmo-gtk-themes)  

  **Description:**  
  A collection of GTK themes designed for LingmoOS, providing a consistent and visually appealing look across applications. These themes enhance the user interface by offering modern and customizable styling options.  

  **Dependencies:**  

- **Build Tools:**  
  - `cmake`  
  - `gcc`  

  **Build Instructions:**  

  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

  **License:**  
  lingmo-gtk-themes is licensed under the **GPLv3** license.
  
### **lingmo-wallpapers**  

- Path: `shell/BasicComponents/Wallpapers`  
- URL: [https://github.com/LingmoOS/lingmo-wallpapers](https://github.com/LingmoOS/lingmo-wallpapers)

  **Build:**  

  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make
  sudo make install  
  ```  

  **License:**  
  lingmo-wallpapers is licensed under the [**Unsplash**](https://unsplash.com/license) license.

### **lingmo-sddm-theme**  

- Path: `shell/BasicComponents/LoginManagerStyle`  
- Revision: `refs/tags/2.7.0`  
- URL: [https://github.com/LingmoOS/lingmo-sddm-theme](https://github.com/LingmoOS/lingmo-sddm-theme)  

  **Description:**  
  A modern and visually appealing SDDM (Simple Desktop Display Manager) theme designed specifically for LingmoOS, providing a seamless and elegant login experience.  

  **Dependencies:**  

- **Ubuntu/Debian:**  

    ```bash  
    sudo apt install build-essential cmake extra-cmake-modules qtbase5-dev qtdeclarative5-dev qtquickcontrols2-5-dev qttools5-dev qttools5-dev-tools  
    ```  

- **Arch Linux:**  

    ```bash  
    sudo pacman -S base-devel cmake extra-cmake-modules qt5-base qt5-declarative qt5-quickcontrols2 qt5-tools  
    ```  

  **Build Instructions:**  

  ```bash  
  mkdir build  
  cd build  
  cmake ..  
  make  
  sudo make install  
  ```  

  **License:**  
  lingmo-sddm-theme is licensed under the **GPLv3** license.

### **lingmo-systemicons**  

- Path: `shell/BasicComponents/Icons`  
- URL: [https://github.com/LingmoOS/lingmo-systemicons](https://github.com/LingmoOS/lingmo-systemicons)

  **Description:**  
  A collection of icon themes for Lingmo OS, including Crule and Crule-dark themes, designed to provide a consistent and aesthetically pleasing user interface.

  **Build Instructions:**

     ```bash
     mkdir build
     cd build
     cmake ..
     sudo make install
     ```

## User Applications

**Introduction:**
User Applications are the tools that users interact with daily, providing essential functionalities like file management, text editing, and system settings. This category includes applications such as calculators, file managers, terminals, and more. It is designed to meet the everyday needs of users, while also offering developers insights into how these applications are built and integrated into Lingmo OS.

### **lingmo-calculator**  

- Path: `shell/BasicComponents/Calculator`  
- Revision: `refs/tags/0.6.3`  
- URL: [https://github.com/LingmoOS/lingmo-calculator](https://github.com/LingmoOS/lingmo-calculator)  

  **Description:**  
  A simple and intuitive calculator application for LingmoOS, designed for basic arithmetic operations with a clean and user-friendly interface.  

  **Dependencies:**  

- **Ubuntu/Debian:**  

    ```bash  
    sudo apt install cmake gcc qtbase5-dev qtdeclarative5-dev qml-module-qtquick2 qml-module-qtquick-controls2  
    ```  

- **Arch Linux:**  

    ```bash  
    sudo pacman -S cmake gcc qt5-base qt5-declarative qt5-quickcontrols2  
    ```  

  **Build Instructions:**  

  ```bash  
  mkdir build  
  cd build  
  cmake ..  
  make  
  sudo make install  
  ```  

  **License:**  
  lingmo-calculator is licensed under the **GPLv3** license.

### [**lingmo-filemanager**](lingmo-filemanager.md)

- Path: `shell/CoreComponents/Filemanager`
- Revision: `dev`
- URL: [https://github.com/LingmoOS/lingmo-filemanager](https://github.com/LingmoOS/lingmo-filemanager)
  
  **Description:**  
  Lingmo File Manager is a simple, beautiful file manager that retains the classic PC interactive design, offering a familiar and intuitive experience for users.

  **Dependencies:**  

- **Ubuntu:**

    ```bash
    sudo apt install equivs curl git devscripts lintian build-essential automake autotools-dev --no-install-recommends
    sudo mk-build-deps -i -t "apt-get --yes" -r
    ```

- **Debian:**

    ```bash
    sudo apt install build-essential cmake extra-cmake-modules libkf5kio-dev libkf5solid-dev libkf5windowsystem-dev libkf5config-dev qtbase5-dev qtbase5-private-dev qtdeclarative5-dev qtquickcontrols2-5-dev qttools5-dev qttools5-dev-tools
    ```

- **ArchLinux:**

    ```bash
    sudo pacman -S extra-cmake-modules qt5-base qt5-quickcontrols2 taglib kio
    ```
  
  **Build Instructions:**  

  ```bash
  mkdir build
  cd build
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..
  make
  sudo make install
  ```
  
  **Notes:**  

- The 'mk-build-deps' command might require the 'devscripts' package.

  **License:**  
  lingmo-filemanager is licensed under the **GPLv3** license.

### **lingmo-settings**  

- Path: `shell/BasicComponents/Settings`  
- Revision: `helium`  
- URL: [https://github.com/LingmoOS/lingmo-settings](https://github.com/LingmoOS/lingmo-settings)  

  **Description:**  
  The system settings application for LingmoOS, providing a centralized interface for configuring system preferences. It utilizes LingmoUI as the interface style, offering a modern and user-friendly experience.  

  **Dependencies:**  

- **Arch/Manjaro:**  

    ```bash  
    sudo pacman -S extra-cmake-modules qt5-base qt5-quickcontrols2 freetype2 fontconfig networkmanager-qt modemmanager-qt  
    ```  

- **Debian/Ubuntu:**  

    ```bash  
    sudo apt install cmake debhelper extra-cmake-modules libicu-dev libcrypt-dev libfreetype6-dev libfontconfig1-dev libkf5networkmanagerqt-dev libkf5config-dev modemmanager-qt-dev qtbase5-dev qtdeclarative5-dev qtquickcontrols2-5-dev qttools5-dev qttools5-dev-tools qml-module-qtquick-controls2 qml-module-qtquick2 qml-module-qtquick-layouts qml-module-qt-labs-platform qml-module-qt-labs-settings qml-module-qtqml qml-module-qtquick-window2 qml-module-qtquick-shapes qml-module-qtquick-dialogs qml-module-qtquick-particles2  
    ```  

  **Build Instructions:**  

  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

  **License:**  
  lingmo-settings is licensed under the **GPLv3** license.

### [**lingmo-terminal**](lingmo-terminal.md)

- Path: `shell/BasicComponents/Terminal`  
- URL: [https://github.com/LingmoOS/lingmo-terminal](https://github.com/LingmoOS/lingmo-terminal)  

  **Description:**  
  A terminal emulator for LingmoOS, using LingmoUI as the interface style to provide a modern and user-friendly terminal experience.  

  **Third-Party Code:**  

- [**qmltermwidget**](https://github.com/Swordfish90/qmltermwidget)

  **Dependencies:**  

- **Debian/Ubuntu:**  

    ```bash  
    sudo apt install extra-cmake-modules qtbase5-dev qtdeclarative5-dev qtquickcontrols2-5-dev qttools5-dev  
    ```  

  **Build and Install:**  

  ```bash  
  mkdir build  
  cd build  
  cmake ..  
  make  
  sudo make install  
  ```  

  **License:**  
  lingmo-terminal is licensed under the **GPLv3** license.

### **lingmo-texteditor**  

- Path: `shell/BasicComponents/Texteditor`  
- URL: [https://github.com/LingmoOS/lingmo-texteditor](https://github.com/LingmoOS/lingmo-texteditor)  

  **Description:**  
  An elegant and lightweight text editor for LingmoOS, designed for simplicity and ease of use while providing essential text editing features.  

  **Dependencies:**  

- **Debian/Ubuntu:**  

    ```bash  
    sudo apt install equivs curl git devscripts lintian build-essential automake autotools-dev --no-install-recommends
    ```  

  **Build:**  

  ```bash  
    mkdir build  
    cd build  
    cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
    make
    sudo make install  
  ```  

  **License:**  
  lingmo-texteditor is licensed under the **GPLv3** license.

### **lingmo-updator**  

- Path: `shell/BasicComponents/UpdateTool`  
- URL: [https://github.com/LingmoOS/lingmo-updator](https://github.com/LingmoOS/lingmo-updator)  

  **Description:**  
  The official system update tool for LingmoOS, designed to provide a seamless and user-friendly experience for managing system updates.  

  **Dependencies:**  

- **Debian/Ubuntu:**  

    ```bash  
    sudo apt install cmake libqapt-dev
    ```  

  **Build:**  

  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

  **License:**  
  lingmo-updator is licensed under the **GPLv3** license.

### **lingmo-videoplayer**  

- Path: `shell/BasicComponents/VideoPlayer`  
- URL: [https://github.com/LingmoOS/lingmo-videoplayer](https://github.com/LingmoOS/lingmo-videoplayer)  

  **Description:**  
  An open-source video player for LingmoOS, built using Qt/QML and libmpv, providing a smooth and feature-rich video playback experience.  

  **Third-Party Code:**  

- [**haruna:**](https://invent.kde.org/multimedia/haruna)

  **Dependencies:**  

- **Debian/Ubuntu:**  

    ```bash  
    sudo apt install extra-cmake-modules qtbase5-dev qtdeclarative5-dev qtquickcontrols2-5-dev libmpv-dev
    ```  

  **Build:**  

  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make
  sudo make install  
  ```  

  **License:**  
  lingmo-videoplayer is licensed under the **GPLv3** license.

### **lingmo-launcher**  

- Path: `shell/BasicComponents/Launcher`  
- URL: [https://github.com/LingmoOS/lingmo-launcher](https://github.com/LingmoOS/lingmo-launcher)  

  **Description:**  
  A full-screen application launcher for LingmoOS, designed to provide quick and intuitive access to installed applications, enhancing productivity and user experience.  

  **Dependencies:**  

- **Arch Linux/Manjaro:**  

    ```bash  
    sudo pacman -S gcc cmake qt5-base qt5-quickcontrols2 kwindowsystem  
    ```  

- **Debian/Ubuntu:**  

    ```bash  
    sudo apt install gcc cmake qtbase5-dev qml-module-qtquick-controls2 qml-module-org-kde-kwindowsystem qtdeclarative5-dev qtquickcontrols2-5-dev qttools5-dev libkf5windowsystem-dev  
    ```  

  **Build Instructions:**  

  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

  **License:**  
  lingmo-launcher is licensed under the **GPLv3** license.

### **lingmo-screenlocker**  

- Path: `shell/BasicComponents/ScreenLocker`  
- URL: [https://github.com/LingmoOS/lingmo-screenlocker](https://github.com/LingmoOS/lingmo-screenlocker)  

  **Description:**  
  A screen locker for LingmoOS, designed to secure the system by locking the screen when inactive. It integrates with the system's authentication mechanisms and provides a seamless locking experience.  

  **Third-Party Code:**  

- **kcheckpass:** Used for authentication.  

  **Dependencies:**  

- **Debian/Ubuntu:**  

    ```bash  
    sudo apt install libpam0g-dev libx11-dev cmake extra-cmake-modules qtbase5-dev qtdeclarative5-dev qtquickcontrols2-5-dev  
    ```  

- **Arch Linux:**  

    ```bash  
    sudo pacman -S pam libx11 extra-cmake-modules qt5-base qt5-declarative qt5-quickcontrols2  
    ```  

  **Build Instructions:**  

  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

  **License:**  
  lingmo-screenlocker is licensed under the **GPLv3** license.

## Development Libraries

**Introduction:**
Development Libraries are the building blocks for developers, offering essential functions, styles, and tools to create applications that seamlessly integrate with Lingmo OS. Libraries like lib_lingmo, LingmoUI, and others simplify the development process, ensuring consistency and ease of use across applications. This section is a must-read for developers aiming to create high-quality, integrated software.

### **lib_lingmo**  

- Path: `lib/SystemLibrary`  
- Revision: `qt5`  
- URL: [https://github.com/LingmoOS/lib_lingmo](https://github.com/LingmoOS/lib_lingmo)  

  **Description:**  
  A core system library for LingmoOS, providing essential functionalities and integrations for system management.  

  **Dependencies:**  

- **Arch Linux:**  

    ```bash  
    sudo pacman -S gcc cmake qt5-base qt5-quickcontrols2 networkmanager-qt modemmanager-qt
    ```  

- **Debian/Ubuntu:**  

    ```bash  
    sudo apt install qtbase5-dev qtquickcontrols2-5-dev modemmanager-qt-dev libqt5sensors5-dev libkf5networkmanagerqt-dev libkf5screen-dev libkf5bluezqt-dev libkf5kio-dev cmake qtdeclarative5-dev libcanberra-dev libpulse-dev libcanberra-pulse extra-cmake-modules qttools5-dev qttools5-dev-tools
    ```  

  **Build and Install:**  

  ```bash  
  mkdir build  
  cd build  
  cmake ..  
  make  
  sudo make install  
  ```  

  **License:**  
  lib_lingmo is licensed under the **GPLv3** license.

### **LingmoUI**  

- Path: `lib/SystemUI_Library`  
- Revision: `refs/tags/2.3.0`  
- URL: [https://github.com/LingmoOS/LingmoUI](https://github.com/LingmoOS/LingmoUI)  

  **Description:**  
  LingmoUI is a GUI library based on QQC (Qt Quick Controls) and Qt 6, providing a unified and modern user interface for all LingmoOS applications. It includes features like light and dark mode, borderless windows, blurred windows, window shadows, and desktop-level menus.  

  **Features:**  

- Light and Dark Mode  
- Borderless window (Wayland & XCB Window move & resize)  
- Blurred window  
- Window shadow  
- Desktop-level menu  
- QQC Style  
- ...  

  **Structures:**  

- **Compatible:** This folder stores the old version of LingmoUI 1.0 (will be removed in the future).  

  **Dependencies:**  

- **Debian/Ubuntu:** (Outdated, needs update here)

    ```bash  
    sudo apt install libqt5x11extras5-dev libkf5windowsystem-dev qtbase5-private-dev libxcb1-dev libxcb-shape0-dev libxcb-icccm4-dev -y
    ```  

  **Build:**  

  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

  **Packaging (Debian/Ubuntu):**  

- Install compile dependencies:  

    ```bash  
    sudo apt install equivs devscripts --no-install-recommends  
    sudo mk-build-deps -i -t "apt --yes" -r  
    ```  

- Start packaging:  

    ```bash  
    dpkg-buildpackage -b -uc -us -tc  
    ```  

  **License:**  
  LingmoUI is licensed under the **GPLv3** license.

### **lingmo-qt-plugins**  

- Path: `lib/SystemLibrary_Qt`  
- URL: [https://github.com/LingmoOS/lingmo-qt-plugins](https://github.com/LingmoOS/lingmo-qt-plugins)  

  **Description:**  
  A collection of Qt plugins designed to unify the style and behavior of Qt applications on LingmoOS, ensuring a consistent and seamless user experience across the system.  

  **Dependencies:**  

- **Arch Linux:**  

    ```bash  
    sudo pacman -S gcc extra-cmake-modules qt5-base qt5-tools qt5-x11extras libqtxdg libdbusmenu-qt5 libxcb
    ```  

  **Build:**  

  ```bash  
  mkdir build  
  cd build  
  cmake ..  
  make  
  sudo make install  
  ```  

  **License:**  
  lingmo-qt-plugins is licensed under the **GPLv3** license.

### **libqtxdg**  

- Path: `lib/SystemLibrary_QtXdg`  
- Remote: nebula  
- URL: [https://nebula.lingmo.org/lingmo-os/libqtxdg](https://nebula.lingmo.org/lingmo-os/libqtxdg)  

  **Description:**  
  libqtxdg is a Qt 5 implementation of freedesktop.org XDG specifications. It is maintained by the LXQt project and is used by nearly all LXQt components. However, it can also be used independently of the LXQt desktop environment. The library supports GTK+ icon theme caches for faster icon lookup, with fallback to normal lookup if the cache is missing or outdated.  

  **Installation:**  

- **Runtime Dependencies:**  
  - `qtbase`  
  - (Optional) `gtk-update-icon-cache` for faster icon lookup.  

- **Build Dependencies:**  
  - `CMake`  
  - `qtsvg`  
  - `qttools`  
  - `lxqt-build-tools`  
  - (Optional) `Git` for pulling the latest VCS checkouts.  

  **Build Instructions:**  

- Configure the build using CMake. Specific CMake variables include:  
  - `BUILD_TESTS`: Enable building tests (default: `OFF`).  
  - `BUILD_DEV_UTILS`: Enable building and installing development utilities (default: `OFF`).  

  ```bash  
  mkdir build  
  cd build  
  cmake ..  
  make  
  sudo make install  
  ```  

  **Binary Packages:**  
  The library is available in major Linux distributions such as Arch Linux, Debian, Fedora, and openSUSE. Use your distribution's package manager to install it by searching for `libqtxdg`.  

  **License:**  
  libqtxdg is licensed under the **LGPLv2.1** license.  

## System Tools

**Introduction:**
System Tools encompass utilities that aid in managing and maintaining Lingmo OS. This includes setup tools, screenlockers, and other system-wide utilities. Whether you're a power user looking to tweak system settings or a developer automating tasks, this category provides the necessary tools to enhance your experience with Lingmo OS.

### **lingmo-first-setup**  

- Path: `guide`  
- URL: [https://github.com/LingmoOS/lingmo-first-setup](https://github.com/LingmoOS/lingmo-first-setup)

  **Description:**  
  An application designed to guide users through the initial setup and configuration of Lingmo OS, including user account creation and system customization.

  **Dependencies:**  

- **Ubuntu/Debian:**  

    ```bash  
    sudo apt install cmake libqapt-dev qtbase5-dev qtdeclarative5-dev qml-module-qtwebview qtquickcontrols2-5-dev qttools5-dev qttools5-dev-tools debhelper
    ```

  **Build Instructions:**  

  ```bash  
  mkdir build  
  cd build  
  cmake ..  
  make  
  sudo make install
  ```

  **License:**  
  lingmo-first-setup is licensed under the **GPLv3** license.

### **lingmo-ocr**  

- Path: `shell/BasicComponents/OCRServer`  
- Revision: `refs/tags/v1.2.4`  
- URL: [https://github.com/LingmoOS/lingmo-ocr](https://github.com/LingmoOS/lingmo-ocr)  

  **Description:**  
  An OCR (Optical Character Recognition) server developed for LingmoOS, designed to accurately recognize text from images and support multiple languages.

  **Dependencies:**  

- **Ubuntu/Debian:**  

    ```bash  
    sudo apt install equivs curl git devscripts lintian build-essential automake autotools-dev cmake g++  
    ```  

- **Arch Linux:**  

    ```bash  
    sudo pacman -S base-devel cmake  
    ```  

  **Build Instructions:**  

  ```bash  
  mkdir build  
  cd build  
  cmake ..
  make
  sudo make install
  ```  

  **License:**  
  lingmo-ocr is licensed under the **GPLv3** license.

### **lingmo-screenshots**  

- Path: `shell/BasicComponents/ScreenShots`  
- URL: [https://github.com/LingmoOS/lingmo-screenshots](https://github.com/LingmoOS/lingmo-screenshots)  

  **Description:**  
  A screenshot tool for LingmoOS, designed to capture and save screen images with ease. It provides a simple and intuitive interface for taking full-screen, window, or region-based screenshots.  

  **Dependencies:**  

- **Arch/Manjaro:**  

    ```bash  
    sudo pacman -S extra-cmake-modules qt5-base qt5-quickcontrols2  
    ```  

- **Debian/Ubuntu:**  

    ```bash  
    sudo apt install cmake qtbase5-dev qtdeclarative5-dev qtquickcontrols2-5-dev qttools5-dev qttools5-dev-tools qml-module-qtquick-controls2 qml-module-qtquick2 qml-module-qtquick-layouts qml-module-qt-labs-platform qml-module-qt-labs-settings qml-module-qtqml qml-module-qtquick-window2 qml-module-qtquick-shapes qml-module-qtquick-dialogs qml-module-qtquick-particles2  
    ```  

  **Build Instructions:**  

  ```bash  
  mkdir build  
  cd build  
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..  
  make  
  sudo make install  
  ```  

  **License:**  
  lingmo-screenshots is licensed under the **GPLv3** license.

## Build and Configuration

**Introduction:**
The Build and Configuration category is dedicated to developers who want to compile and customize Lingmo OS from source. It includes build scripts, manifests, and configuration files that allow for tailored OS deployments. This section is essential for those who need flexibility in setting up their development environment or customizing the OS to specific requirements.

### **LingmoOS**  

- Path: `build`  
- URL: [https://github.com/LingmoOS/LingmoOS](https://github.com/LingmoOS/LingmoOS)

  **Description:**  
  This repository contains the build configuration and scripts for Lingmo OS. It utilizes the `repo` tool to manage multiple submodules and dependencies.

  **Build Requirements:**  

- **Operating System:** Debian GNU/Linux 12 (Bookworm), 13 (Trixie), or later
- **Disk Space:** > 50GB
- **Processor:** Multi-core multi-threaded
- **Memory:** Minimum 8GB RAM

  **Tool Preparation:**

  ```bash
  git clone https://github.com/LingmoOS/LingmoOS.git
  mkdir -p ~/bin
  cp -v LingmoOS/repo ~/bin/
  chmod a+x ~/bin/repo
  echo 'export PATH="$PATH:$HOME/bin"' >> ~/.bashrc
  source ~/.bashrc
  ```

  **Build Instructions:**

  1. **Clone the Repository:**

     ```bash
     git clone https://github.com/LingmoOS/LingmoOS.git
     ```

  2. **Set Up the Repo Tool:**

     ```bash
     mkdir -p ~/bin
     cp -v LingmoOS/repo ~/bin/
     chmod a+x ~/bin/repo
     echo 'export PATH="$PATH:$HOME/bin"' >> ~/.bashrc
     source ~/.bashrc
     ```

  3. **Initialize and Sync the Repo:**

     ```bash
     mkdir -p workdir
     cd workdir
     repo init -u https://github.com/LingmoOS/manifest.git
     repo sync
     ```

  4. **Build:**

    ***TODO***

  **Dependencies:**

- **Build Tools:**
  - `git`
  - `python3` (for repo)

- **Install Dependencies:**

    ```bash
    sudo apt install git python3
    ```

### **manifest**  

- Path: `tools`  
- URL: [https://github.com/LingmoOS/manifest](https://github.com/LingmoOS/manifest)

  **Description:**  
  This repository contains the manifest files used by the `repo` tool to manage multiple submodules and dependencies for Lingmo OS. It defines the structure and versions of the repositories required to build Lingmo OS.

  **Usage with Repo Tool:**

  Refer to the `Tools/LingmoOS/Initialize and Sync the Repo` for more information.

  **Notes:**

- The manifest is essential for setting up the build environment for Lingmo OS.
- It ensures that all necessary components are fetched and synchronized correctly before the build process begins.

### **lingmo-base-common**  

- Path: `init`  
- URL: [https://github.com/LingmoOS/lingmo-base-common](https://github.com/LingmoOS/lingmo-base-common)

  **Description:**  
  This package contains the basic filesystem hierarchy and miscellaneous files for Lingmo OS. It includes essential configuration files and directories necessary for the proper functioning of the operating system.  

  **Dependencies:**  

- **Debian/Ubuntu:**  

    ```bash  
    sudo apt install debhelper-compat debhelper dpkg-dev
    ```  

  **Build:**  

  ```bash  
  dpkg-buildpackage -us -uc
  ```  

### **lingmo-live**  

- Path: `system/installer`  
- Revision: `helium`  
- URL: [https://github.com/LingmoOS/lingmo-live](https://github.com/LingmoOS/lingmo-live)  

  **Description:**  
  A repository containing configurations and settings for the Lingmo OS live image, including Calamares installer configurations to streamline the installation process.

  **Dependencies:**  

- **Debian/Ubuntu:**  

    ```bash  
    sudo apt install build-essential debhelper dpkg-dev
    ```

  **Build:**  

  ```bash  
  dpkg-buildpackage -us -uc
  ```

  **License:**  
  lingmo-live is licensed under the **ISC** License, which permits use, copying, modification, and distribution with the condition of including the copyright notice and permission notice in all copies.
