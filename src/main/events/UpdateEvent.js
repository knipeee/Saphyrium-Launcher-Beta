"use strict";
const electron = require("electron");
const UpdateWindow = require("../windows/UpdateWindow");
const AuthService = require("../services/AuthService");
const updater = require("electron-updater");
const log = require("electron-log");

electron.ipcMain.on('checkForUpdates', () => {
    log.info('checkForUpdates ipcMain');
    if (process.env.NODE_ENV === 'development' && UpdateWindow.getWindow() !== null) {
        (0, AuthService)();
    }
    else {
        updater.autoUpdater.checkForUpdates();
    }
});

electron.ipcMain.on('quitAndInstallUpdate', () => {
    log.info('quitAndInstallUpdate');
    updater.autoUpdater.quitAndInstall();
});

updater.autoUpdater.on('update-available', () => {
    log.info('update-available');
    const updateWindow = UpdateWindow.getWindow();
    if (updateWindow) {
        updateWindow.webContents.send('updateAvailable');
    }
});

updater.autoUpdater.on('update-not-available', () => {
    log.info('update-not-available');
    (0, AuthService)();
});

updater.autoUpdater.on('update-downloaded', () => {
    log.info('update-downloaded');
    updater.autoUpdater.quitAndInstall();
});

updater.autoUpdater.on('error', err => {
    if (process.env.NODE_ENV === 'development' && err.code === 'ENOENT') {
        return;
    }
    log.info('autoUpdater error ', err);
});
