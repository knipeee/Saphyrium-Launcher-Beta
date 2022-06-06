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
exports.eventEmitter = exports.VanillaBundledJavaPath = exports.DownloadVanillaJRE = void 0;
const BundledJava = require("./BundledJava");
const path = require("path");
const electron = require("electron");
const os = require("os");
const axios = require("axios");
const log = require("electron-log");
const fs = require("fs");
const download = require("download");
const EventEmitter = require('events').EventEmitter;
let eventEmitter = new EventEmitter();
exports.eventEmitter = eventEmitter;
const Hash = require("../utils/Hash");

function DownloadVanillaJRE(version, customName) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function*() {
        // Get data
        const javaPath = path.join(electron.app.getPath('userData'), 'java', 'vanilla', version);
        const distribution = (yield axios.get('https://launchermeta.mojang.com/v1/products/java-runtime/2ec0cc96c44e5a76b9c8b7c39df7210883d12871/all.json')).data;
        let manifestUrl = null;
        let javaStr = version === BundledJava.JavaVersion.Runtime ? 'java-runtime-beta' : 'jre-legacy';
        let currFiles = 0;
        switch (os.platform()) {
            case 'win32':
                manifestUrl = distribution['windows-x64'][javaStr][0].manifest.url;
                break;
            case 'darwin':
                manifestUrl = distribution['mac-os'][javaStr][0].manifest.url;
                break;
            case 'linux':
                manifestUrl = distribution['linux'][javaStr][0].manifest.url;
                break;
        }
        if (manifestUrl === null || manifestUrl === undefined) {
            log.error(`Failed to download vanilla JRE ${version}`);
            return reject();
        }
        let manifestData = (yield axios.get(manifestUrl)).data;
        const filesObj = Object.entries(manifestData.files);
        const totalFiles = filesObj.length;
        for (const object of filesObj) {
            const [key, value] = object;
            if (!value.downloads || !value.downloads.raw) {
                continue;
            }
            const fullPath = path.join(javaPath, key);
            let fullFolderPath = path.parse(fullPath).dir;
            // Check if need update or exist
            let needDownload = false;
            if (!fs.default.existsSync(fullPath)) { // If file exist?
                fs.default.mkdirSync(fullFolderPath, { recursive: true });
                needDownload = true;
            } else { // Check if checksum is the same
                if (!((0, Hash.getHexHash)(fullPath) === value.downloads.raw.sha1)) {
                    needDownload = true;
                }
            }
            if (needDownload) {
                log.info('before', fullFolderPath);
                fullFolderPath = fullFolderPath.replace('jre.bundle/', '');
                log.info('after', fullFolderPath);
                log.info('Download', value.downloads.raw.url, 'at', fullFolderPath);
                yield(0, download)(value.downloads.raw.url, fullFolderPath);
            }
            currFiles++;
            eventEmitter.emit('progress', { done: currFiles, total: totalFiles });
        }
        return resolve();
    }));
}
exports.DownloadVanillaJRE = DownloadVanillaJRE;

function VanillaBundledJavaPath(version) {
    log.info('VanillaBundledJavaPath', version);
    return path.join(electron.app.getPath('userData'), 'java', 'vanilla', version, os.platform() === 'win32' ? path.default.join('bin', 'java') : 'Contents/Home/bin/java');
}
exports.VanillaBundledJavaPath = VanillaBundledJavaPath;