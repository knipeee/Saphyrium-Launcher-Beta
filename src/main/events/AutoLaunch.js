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
const autoLaunch = require("auto-launch");
const log = require("electron-log");
const appAutoLaunch = new autoLaunch({
    name: 'Paladium',
    path: electron.app.getPath('exe'),
});
electron.ipcMain.handle('getAutoLaunchIsEnabled', () => __awaiter(void 0, void 0, void 0, function*() {
    const isEnabled = yield appAutoLaunch.isEnabled();
    log.info('getAutoLauncherIsEnabled ' + isEnabled);
    return isEnabled;
}));
electron.ipcMain.on('setAutoLaunch', (event, val) => {
    log.info('setAutoLauncher', val);
    if (val) appAutoLaunch.enable();
    else appAutoLaunch.disable();
});