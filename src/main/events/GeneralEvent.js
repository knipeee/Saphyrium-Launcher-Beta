"use strict";
var __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function(resolve) { resolve(value); }); }
    return new(P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }

        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }

        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const electron = require("electron");
const axios = require("axios");
const os = require("os");

electron.ipcMain.handle('getVersion', () => {
    return electron.app.getVersion();
});
electron.ipcMain.handle('getTotalMem', () => {
    return os.totalmem();
});
electron.ipcMain.handle('getFreeMem', () => {
    return os.freemem();
});
electron.ipcMain.handle('getIsUnderMaintenance', () => __awaiter(void 0, void 0, void 0, function*() {
    const distribution = (yield axios.get('https://download.paladium-pvp.fr/distribution.json')).data;
    return distribution.isUnderMaintenance;
}));
electron.ipcMain.handle('isWindows', () => {
    return os.platform() === 'win32';
});
electron.ipcMain.handle('isMacos', () => {
    return os.platform() === 'darwin';
});
electron.ipcMain.handle('isLinux', () => {
    return os.platform() === 'linux';
});