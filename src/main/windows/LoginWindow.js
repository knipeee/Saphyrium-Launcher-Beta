"use strict";
const electron = require("electron");
const log = require("electron-log");
const path = require("path");
const os = require("os");
let loginWindow = undefined;

function sendWindowWebContentBool(channel, args) {
    if (loginWindow) {
        return loginWindow.webContents.send(channel, args);
    } else {
        return null;
    }
}

function getWindow() {
    return loginWindow;
}

function destroyWindow() {
    if (!loginWindow) {
        return;
    }
    log.default.info('destroy Login Window');
    loginWindow.close();
    loginWindow = undefined;
}

function createWindow() {
    destroyWindow();
    log.default.info('Create Update Window');
    loginWindow = new electron.BrowserWindow({
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
    loginWindow.setMenuBarVisibility(false);
    if (process.env.NODE_ENV === 'development') {
        const rendererPort = process.argv[2];
        loginWindow.loadURL(`http://localhost:${rendererPort}#login`);
        loginWindow.webContents.openDevTools();
    } else {
        loginWindow.loadFile(path.join(electron.app.getAppPath(), 'renderer', 'index.html'), { hash: 'login' });
    }
    loginWindow.once('ready-to-show', () => {
        if (loginWindow) {
            loginWindow.show();
        }
    });
}
exports = {
    sendWindowWebContentBool,
    getWindow,
    createWindow,
    destroyWindow,
};