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
const api = require("@tryghost/content-api");
const ghostApi = new api({
    url: 'https://ghost.paladium-pvp.fr',
    key: 'cc25825386fcf87df32f7fc535',
    version: 'v3',
});
electron.ipcMain.handle('getBlogPosts', () => __awaiter(void 0, void 0, void 0, function*() {
    return yield ghostApi.posts
        .browse({
            limit: 3,
            include: ['tags'],
        })
        .catch(err => {
            console.error(err);
            throw err;
        });
}));