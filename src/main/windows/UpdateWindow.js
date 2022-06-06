"use strict";
const electron = require("electron");
const log = require("electron-log");
const path = require("path");
const os = require("os");
let updateWindow = undefined;

function getWindow() {
    return updateWindow;
}

function destroyWindow() {
    if (!updateWindow) {
        return;
    }
    log.info('destroy Update Window');
    updateWindow.close();
    updateWindow = undefined;
}

function createWindow() {
    destroyWindow();
    log.info('Create Update Window');
    updateWindow = new electron.BrowserWindow({
        width: 616,
        height: 840,
        resizable: false,
        transparent: os.platform() === 'win32',
        frame: os.platform() !== 'win32',
        titleBarStyle: os.platform() === 'win32' ? 'hidden' : 'hiddenInset',
        show: false,
        webPreferences: {
            preload: path.join(__dirname, '..', 'preload.js'),
        },
    });
    // Hide the default menu
    electron.Menu.setApplicationMenu(null);
    updateWindow.setMenuBarVisibility(false);
    updateWindow.loadFile(path.join(electron.app.getAppPath(), 'renderer', 'index.html'), { hash: 'splash' });
    updateWindow.once('ready-to-show', () => {
        if (updateWindow) {
            updateWindow.show();
        }
    });
}

module.exports = {
    getWindow,
    createWindow,
    destroyWindow,
};