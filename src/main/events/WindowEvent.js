"use strict";
const electron = require("electron");
const Store = require("electron-store");
const store = new Store();

electron.ipcMain.handle('getLauncherMaximizedAtStartup', () => {
    return store.get('launcherMaximizedAtStartup');
});

electron.ipcMain.on('setLauncherMaximizedAtStartup', (event, val) => {
    store.set('launcherMaximizedAtStartup', val);
});

electron.ipcMain.on('closeWindow', () => {
    const focusedWindow = electron.BrowserWindow.getFocusedWindow();
    if (focusedWindow) {
        focusedWindow.close();
    }
    electron.app.quit();
});

electron.ipcMain.on('minimizeWindow', () => {
    const focusedWindow = electron.BrowserWindow.getFocusedWindow();
    if (focusedWindow) {
        focusedWindow.minimize();
    }
});

electron.ipcMain.on('maximizeWindow', () => {
    const focusedWindow = electron.BrowserWindow.getFocusedWindow();
    if (focusedWindow) {
        focusedWindow.maximize();
    }
});

electron.ipcMain.on('unmaximizeWindow', () => {
    const focusedWindow = electron.BrowserWindow.getFocusedWindow();
    if (focusedWindow) {
        focusedWindow.unmaximize();
    }
});