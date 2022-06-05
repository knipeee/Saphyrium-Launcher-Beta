"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld('electron', {
    // Titlebar
    getLauncherMaximizedAtStartup: () => electron.ipcRenderer.invoke('getLauncherMaximizedAtStartup'),
    setLauncherMaximizedAtStartup: val => electron.ipcRenderer.send('setLauncherMaximizedAtStartup', val),
    minimizeWindow: () => electron.ipcRenderer.send('minimizeWindow'),
    maximizeWindow: () => electron.ipcRenderer.send('maximizeWindow'),
    unmaximizeWindow: () => electron.ipcRenderer.send('unmaximizeWindow'),
    closeWindow: () => electron.ipcRenderer.send('closeWindow'),
    // Auto Update
    checkForUpdates: () => electron.ipcRenderer.send('checkForUpdates'),
    quitAndInstallUpdate: () => electron.ipcRenderer.send('quitAndInstallUpdate'),
    // Logs
    logError: (...args) => electron.ipcRenderer.invoke('logError', ...args),
    logWarn: (...args) => electron.ipcRenderer.invoke('logWarn', ...args),
    logInfo: (...args) => electron.ipcRenderer.invoke('logInfo', ...args),
    logVerbose: (...args) => electron.ipcRenderer.invoke('logVerbose', ...args),
    logDebug: (...args) => electron.ipcRenderer.invoke('logDebug', ...args),
    logSilly: (...args) => electron.ipcRenderer.invoke('logSilly', ...args),
    // Auto Launch
    getAutoLaunchIsEnabled: () => electron.ipcRenderer.invoke('getAutoLaunchIsEnabled'),
    setAutoLaunch: val => electron.ipcRenderer.send('setAutoLaunch', val),
    // Authentication
    getAccounts: () => electron.ipcRenderer.invoke('getAccounts'),
    changeAccount: (username) => electron.ipcRenderer.send('changeAccount', username),
    deleteAccount: (username) => electron.ipcRenderer.send('deleteAccount', username),
    logout: () => electron.ipcRenderer.send('logout'),
    getAccessToken: () => electron.ipcRenderer.send('getAccessToken'),
    getAllVanillaVersions: () => electron.ipcRenderer.invoke('getAllVanillaVersions'),
    checkIfVanillaInstalled: mcVersion => electron.ipcRenderer.invoke('checkIfVanillaInstalled', mcVersion),
    checkIfCustomInstalled: id => electron.ipcRenderer.invoke('checkIfCustomInstalled', id),
    launchCustom: (distributionUrl, javaVer, customName, tweakClass, classPaths) => electron.ipcRenderer.invoke('launchCustom', distributionUrl, javaVer, customName, tweakClass, classPaths),
    launchMinecraftVanilla: mcVersion => electron.ipcRenderer.invoke('launchMinecraftVanilla', mcVersion),
    // Game Options
    getLastVanillaVersion: () => electron.ipcRenderer.invoke('getLastVanillaVersion'),
    getBlogPosts: () => electron.ipcRenderer.invoke('getBlogPosts'),
    getGameJavaPath: (id, jreType) => electron.ipcRenderer.invoke('getGameJavaPath', id, jreType),
    getGameMem: id => electron.ipcRenderer.invoke('getGameMem', id),
    getGameResolution: id => electron.ipcRenderer.invoke('getGameResolution', id),
    getGameStartInFullscreen: id => electron.ipcRenderer.invoke('getGameStartInFullscreen', id),
    getLauncherStayOpen: id => electron.ipcRenderer.invoke('getLauncherStayOpen', id),
    setLastVanillaVersion: (version) => electron.ipcRenderer.send('setLastVanillaVersion', version),
    setGameJavaPath: (id, val) => electron.ipcRenderer.send('setGameJavaPath', id, val),
    setGameMem: (id, min, max) => electron.ipcRenderer.send('setGameMem', id, min, max),
    setGameResolution: (id, w, h) => electron.ipcRenderer.send('setGameResolution', id, w, h),
    setGameStartInFullscreen: (id, val) => electron.ipcRenderer.send('setGameStartInFullscreen', id, val),
    setLauncherStayOpen: (id, val) => electron.ipcRenderer.send('setLauncherStayOpen', id, val),
    // Notifications
    getNotifications: () => electron.ipcRenderer.invoke('getNotifications'),
    setNotificationRead: id => electron.ipcRenderer.send('setNotificationRead', id),
    setNotificationArchive: id => electron.ipcRenderer.send('setNotificationArchive', id),
    // Others
    getVersion: () => electron.ipcRenderer.invoke('getVersion'),
    getTotalMem: () => electron.ipcRenderer.invoke('getTotalMem'),
    getFreeMem: () => electron.ipcRenderer.invoke('getFreeMem'),
    getIsUnderMaintenance: () => electron.ipcRenderer.invoke('getIsUnderMaintenance'),
    isWindows: () => electron.ipcRenderer.invoke('isWindows'),
    isMacos: () => electron.ipcRenderer.invoke('isMacos'),
    isLinux: () => electron.ipcRenderer.invoke('isLinux'),
    loadURL: (url) => electron.ipcRenderer.invoke('loadURL', url),
    // Listeners
    onGoTo: fn => {
        electron.ipcRenderer.on('goTo', (event, ...args) => fn(...args));
    },
    onUserDataFetch: fn => {
        electron.ipcRenderer.on('userDataFetch', (event, ...args) => fn(...args));
    },
    onUpdateAvailable: fn => {
        electron.ipcRenderer.on('updateAvailable', (event, ...args) => fn(...args));
    },
    onGameDownloadProgress: fn => {
        electron.ipcRenderer.on('gameDownloadProgress', (event, ...args) => fn(...args));
    },
    onGameStartup: fn => {
        electron.ipcRenderer.on('gameStartup', (event, ...args) => fn(...args));
    },
    onGameDownloadFinish: fn => {
        electron.ipcRenderer.on('gameDownloadFinish', (event, ...args) => fn(...args));
    },
    onNotifications: fn => {
        electron.ipcRenderer.on('onNotifications', (event, ...args) => fn(...args));
    },
    onSetLoginBtn: fn => {
        electron.ipcRenderer.on('setLoginBtn', (event, ...args) => fn(...args));
    },
    onUpdateAccounts: fn => {
        electron.ipcRenderer.on('updateAccounts', (event, ...args) => fn(...args));
    },
});
