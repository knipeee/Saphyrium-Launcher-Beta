"use strict";
const electron = require("electron");
const log = require("electron-log");
const path = require("path");
const os = require("os");
const store = require("electron-store");
const Store = new store();
let mainWindow = null;

function getWindow() {
    return mainWindow;
}

function sendWindowWebContentString(channel, args) {
    if (mainWindow) {
        return mainWindow.webContents.send(channel, args);
    } else {
        return null;
    }
}

function sendWindowWebContentAny(channel, args) {
    if (mainWindow) {
        return mainWindow.webContents.send(channel, args);
    } else {
        return null;
    }
}

function sendWindowWebContent(channel, args) {
    if (mainWindow) {
        return mainWindow.webContents.send(channel, args);
    } else {
        return null;
    }
}

function destroyWindow() {
    if (!mainWindow) {
        return;
    }
    log.default.info('destroy Main Window');
    mainWindow.close();
    mainWindow = null;
}

function createWindow() {
    destroyWindow();
    log.default.info('Create Main Window');
    return new Promise(resolve => {
        mainWindow = new electron.BrowserWindow({
            width: 1280,
            height: 720,
            minWidth: 1280,
            minHeight: 720,
            resizable: true,
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
        mainWindow.setMenuBarVisibility(false);
        if (process.env.NODE_ENV === 'development') {
            const rendererPort = process.argv[2];
            mainWindow.loadURL(`http://localhost:${rendererPort}`);
            mainWindow.webContents.openDevTools();
        } else {
            mainWindow.loadFile(path.join(electron.app.getAppPath(), 'renderer', 'index.html'));
        }
        mainWindow.once('ready-to-show', () => {
            if (mainWindow) {
                if (Store.get('launcherMaximizedAtStartup') === true) {
                    mainWindow.maximize();
                }
                if (electron.app.commandLine.getSwitchValue('paladium') === 'true') {
                    sendWindowWebContentAny('goTo', '/paladium');
                } else if (electron.app.commandLine.getSwitchValue('modded') === 'true') {
                    sendWindowWebContentAny('goTo', '/modded');
                } else if (electron.app.commandLine.getSwitchValue('palanarchy') === 'true') {
                    sendWindowWebContentAny('goTo', '/palanarchy');
                }
                mainWindow.show();
            }
            resolve();
        });
    });
}
exports.default = {
    getWindow,
    sendWindowWebContentString,
    sendWindowWebContentAny,
    sendWindowWebContent,
    createWindow,
    destroyWindow,
};