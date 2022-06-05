"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

exports.eventEmitter = exports.BundledJavaPath = exports.DownloadJRE = exports.JavaVersion = void 0;
const electron = require("electron");
const path = require("path");
const os = require("os");
const axios = require("axios");
const request = require("request");
const fs = require("fs");
const log = require("electron-log");
const EventEmitter = require('events').EventEmitter;
let eventEmitter = new EventEmitter();
exports.eventEmitter = eventEmitter;
const Zip = require('adm-zip');
var JavaVersion;
(function (JavaVersion) {
    JavaVersion["Legacy"] = "legacy";
    JavaVersion["Runtime"] = "runtime";
})(JavaVersion = exports.JavaVersion || (exports.JavaVersion = {}));
function GetUrlByOS(distribution) {
    switch (os.platform()) {
        case 'win32':
            return distribution.win32;
        case 'darwin':
            return distribution.darwin;
        case 'linux':
            return distribution.linux;
    }
}
function DownloadJRE(version, customName) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        // Get data
        eventEmitter.emit('progress', { done: 1, total: 6 });
        const distribution = (yield axios.get('https://download.paladium-pvp.fr/distribution.json')).data;
        eventEmitter.emit('progress', { done: 2, total: 6 });
        let downloadUrl = '';
        let typeStr = '';
        switch (version) {
            case JavaVersion.Legacy:
                typeStr = 'legacy';
                downloadUrl = GetUrlByOS(distribution.java.legacy);
                break;
            case JavaVersion.Runtime:
                typeStr = 'runtime';
                downloadUrl = GetUrlByOS(distribution.java.runtime);
                break;
        }
        // Check if not already installed
        if (fs.existsSync(path.join(electron.app.getPath('userData'), 'java', typeStr))) {
            log.info(`JRE ${version} already installed`);
            eventEmitter.emit('progress', { done: 6, total: 6 });
            return resolve(); // Stop here, already installed
        }
        eventEmitter.emit('progress', { done: 3, total: 6 });
        // Download zip
        eventEmitter.emit('progress', { done: 4, total: 6 });
        let baseRequest = request.defaults({
            pool: { maxSockets: 2 },
            timeout: 10000
        });
        const _request = baseRequest(downloadUrl);
        const destFolder = path.join(electron.app.getPath('userData'), 'java');
        if (!fs.existsSync(destFolder))
            fs.mkdirSync(destFolder);
        eventEmitter.emit('progress', { done: 5, total: 6 });
        const zipPath = path.join(destFolder, typeStr + '.zip');
        const file = fs.createWriteStream(zipPath);
        log.info('Download JRE', version, file.path);
        _request.pipe(file);
        file.on('error', (e) => __awaiter(this, void 0, void 0, function* () {
            log.error(`Failed to download asset ${downloadUrl} due to: ${e}`);
            return reject();
        }));
        _request.on('response', (data) => {
            if (data.statusCode === 404) {
                log.error(`Failed to download ${downloadUrl} due to: File not found...`);
                return reject();
            }
        });
        file.once('finish', () => {
            // Unzip
            try {
                new Zip(file.path).extractAllTo(path.join(electron.app.getPath('userData'), 'java', typeStr), true);
                if (fs.existsSync(zipPath))
                    fs.unlinkSync(zipPath);
            }
            catch (e) {
                log.error(`Failed to unzip ${file.path} due to: ${e}`);
                return reject();
            }
            eventEmitter.emit('progress', { done: 6, total: 6 });
            return resolve();
        });
    }));
}
exports.DownloadJRE = DownloadJRE;
function BundledJavaPath(version) {
    return path.join(electron.app.getPath('userData'), 'java', version, 'java', 'bin', os.platform() === 'win32' ? 'java' : 'jre.bundle/Contents/Home/bin/java');
}
exports.BundledJavaPath = BundledJavaPath;
