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
const Store = require("electron-store");
const MainWindow = require("../windows/MainWindow");
const store = new Store();

function getNotifications() {
    return __awaiter(this, void 0, void 0, function*() {
        let unreadNotifCount = 0;
        const newNotifs = [];
        const archivedNotifs = [];
        const notifications = (yield axios.get('https://download.paladium-pvp.fr/notification.json')).data;
        if (notifications == null) {
            return;
        }
        for (const notif of notifications) {
            const archive = store.get('notifications.' + notif.id + '.archive', false);
            if (archive) {
                archivedNotifs.push(Object.assign(Object.assign({}, notif), { read: true }));
            } else {
                const read = store.get('notifications.' + notif.id + '.read', false);
                if (!read) {
                    unreadNotifCount++;
                }
                newNotifs.push(Object.assign(Object.assign({}, notif), { read }));
            }
        }
        return {
            unreadNotifCount,
            newNotifs,
            archivedNotifs,
        };
    });
}
electron.ipcMain.handle('getNotifications', () => __awaiter(void 0, void 0, void 0, function*() {
    return getNotifications();
}));
electron.ipcMain.on('setNotificationRead', (event, id) => __awaiter(void 0, void 0, void 0, function*() {
    if (store.get('notifications.' + id + '.read', null) === null) {
        store.set('notifications.' + id + '.read', true);
    }
    MainWindow.sendWindowWebContentAny('onNotifications', yield getNotifications());
}));
electron.ipcMain.on('setNotificationArchive', (event, id) => __awaiter(void 0, void 0, void 0, function*() {
    if (store.get('notifications.' + id + '.archive', null) === null) {
        store.set('notifications.' + id + '.archive', true);
    }
    MainWindow.sendWindowWebContentAny('onNotifications', yield getNotifications());
}));