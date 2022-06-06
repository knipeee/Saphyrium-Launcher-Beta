"use strict";
const electron = require("electron");
const BundledJava = require("../services/BundledJava");
const Store = require("electron-store");
const store = new Store();
// Getters
electron.ipcMain.handle('getLastVanillaVersion', (event) => {
    return store.get('vanilla_lastVersion');
});
electron.ipcMain.handle('getGameJavaPath', (event, id, jreType) => {
    return store.get(id + '_gameJavaPath', (0, BundledJava.BundledJavaPath)(jreType === 'runtime' ? BundledJava.JavaVersion.Runtime : BundledJava.JavaVersion.Legacy));
});
electron.ipcMain.handle('getGameMem', (event, id) => {
    return {
        min: store.get(id + '_gameMemMin', 2),
        max: store.get(id + '_gameMemMax', 4),
    };
});
electron.ipcMain.handle('getGameResolution', (event, id) => {
    return {
        w: store.get(id + '_gameResolutionW', 856),
        h: store.get(id + '_gameResolutionH', 482),
    };
});
electron.ipcMain.handle('getGameStartInFullscreen', (event, id) => {
    return store.get(id + '_gameStartInFullscreen', false);
});
electron.ipcMain.handle('getLauncherStayOpen', (event, id) => {
    return store.get(id + '_launcherStayOpen', true);
});
// Setters
electron.ipcMain.on('setLastVanillaVersion', (event, version) => {
    store.set('vanilla_lastVersion', version);
});
electron.ipcMain.on('setGameJavaPath', (event, id, val) => {
    if (val.length === 0) {
        val = (0, BundledJava.BundledJavaPath)(BundledJava.JavaVersion.Runtime); //ToDo : need to replace java version depending MC version
    }
    store.set(id + '_gameJavaPath', val);
});
electron.ipcMain.on('setGameMem', (event, id, min, max) => {
    store.set(id + '_gameMemMin', min);
    store.set(id + '_gameMemMax', max);
});
electron.ipcMain.on('setGameResolution', (event, id, width, height) => {
    store.set(id + '_gameResolutionW', width);
    store.set(id + '_gameResolutionH', height);
});
electron.ipcMain.on('setGameStartInFullscreen', (event, id, val) => {
    store.set(id + '_gameStartInFullscreen', val);
});
electron.ipcMain.on('setLauncherStayOpen', (event, id, val) => {
    store.set(id + '_launcherStayOpen', val);
});