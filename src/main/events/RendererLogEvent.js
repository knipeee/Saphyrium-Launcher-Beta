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
const log = require("electron-log");
const Log = log.create('renderer');
Log.transports.file.fileName = 'renderer.log';

electron.ipcMain.handle('logError', (event, ...args) => __awaiter(void 0, void 0, void 0, function*() {
    Log.error(...args);
}));

electron.ipcMain.handle('logWarn', (event, ...args) => __awaiter(void 0, void 0, void 0, function*() {
    Log.warn(...args);
}));

electron.ipcMain.handle('logInfo', (event, ...args) => __awaiter(void 0, void 0, void 0, function*() {
    Log.info(...args);
}));

electron.ipcMain.handle('logVerbose', (event, ...args) => __awaiter(void 0, void 0, void 0, function*() {
    Log.verbose(...args);
}));

electron.ipcMain.handle('logDebug', (event, ...args) => __awaiter(void 0, void 0, void 0, function*() {
    Log.debug(...args);
}));

electron.ipcMain.handle('logSilly', (event, ...args) => __awaiter(void 0, void 0, void 0, function*() {
    Log.silly(...args);
}));