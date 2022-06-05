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
const MainWindow = require("../windows/MainWindow");
const axios = require("axios");
const log = require("electron-log");
const fs = require("fs");
const path = require("path");
const minecraftLauncherCore = require("minecraft-launcher-core");
const BundledJava = require("../services/BundledJava");
const VanillaBundledJava = require("../services/VanillaBundledJava");
const DownloadService = require("../services/DownloadService");
const StartService = require("../services/StartService");
const Store = require("electron-store");
const AuthService = require("../services/AuthService");
const store = new Store();

const root = path.join(electron.app.getPath('appData'), '.minecraft');
const checkVersion = (customName, distribVersion, gamePath) => __awaiter(void 0, void 0, void 0, function*() {
    const version = store.get(customName + '_gameVersion', null);
    log.info(`version game ${customName} : ${version}, distribVersion: ${distribVersion}`);
    if (fs.existsSync(gamePath) && version !== distribVersion) {
        fs.rmdirSync(gamePath, { recursive: true });
    }
});
electron.ipcMain.handle('getAllVanillaVersions', () => __awaiter(void 0, void 0, void 0, function*() {
    const versionManifest = yield axios.get('https://launchermeta.mojang.com/mc/game/version_manifest.json');
    const allVersions = [];
    versionManifest.data.versions.forEach(item => {
        if (item.type === 'release') {
            allVersions.push(item.id);
        }
    });
    return allVersions;
}));
electron.ipcMain.handle('checkIfVanillaInstalled', (event, mcVersion) => {
    log.info('checkIfVanillaInstalled');
    return fs.existsSync(path.join(root, 'versions', mcVersion, `${mcVersion}.jar`));
});
electron.ipcMain.handle('checkIfCustomInstalled', (event, id) => {
    log.info('checkIfCustomInstalled', id);
    return fs.existsSync(path.join(electron.app.getPath('appData'), '.' + id));
});
electron.ipcMain.handle('launchCustom', (event, distributionUrl, javaVer, customName, tweakClass, classPaths) => __awaiter(void 0, void 0, void 0, function*() {
    log.info('launchCustom', customName);
    const distributionData = (yield axios.get(distributionUrl)).data;
    const rootPath = path.join(electron.app.getPath('appData'), '.' + customName);
    MainWindow.sendWindowWebContent('gameStartup', { id: customName, value: true });
    // Check & download if needed
    BundledJava.eventEmitter.on('progress', args => {
        const value = (args.done / args.total) * 100;
        MainWindow.sendWindowWebContent('gameDownloadProgress', { id: customName, value });
    });
    yield(0, BundledJava.DownloadJRE)(javaVer, customName);
    DownloadService.eventEmitter.on('progress', args => {
        const value = (args.done / args.total) * 100;
        MainWindow.sendWindowWebContent('gameDownloadProgress', { id: customName, value });
    });
    DownloadService.eventEmitter.on('finish', args => {
        MainWindow.sendWindowWebContent('gameDownloadFinish', { id: customName });
    });
    yield checkVersion(customName, distributionData.version, rootPath);
    yield(0, DownloadService)(distributionData, rootPath);
    store.set(customName + '_gameVersion', distributionData.version);
    // Start the game
    const fullscreen = store.get(customName + '_gameStartInFullscreen', false);
    const windowWidth = store.get(customName + '_gameResolutionW', 856);
    const windowHeight = store.get(customName + '_gameResolutionH', 482);
    const memMin = store.get(customName + '_gameMemMin', 2);
    const memMax = store.get(customName + '_gameMemMax', 4);
    const javaPath = store.get(customName + '_gameJavaPath', (0, BundledJava.BundledJavaPath)(javaVer));
    // Refresh token
    yield(0, AuthService.refreshCurrentAccessToken)();
    yield(0, StartService)(distributionData, rootPath, {
        tweakClass,
        classPaths,
        authorization: {
            user_properties: '{}',
            access_token: global.share.auth.access_token,
            uuid: global.share.auth.uuid,
            name: global.share.auth.name,
            meta: {
                type: 'msa',
                xuid: global.share.auth.xuid,
                demo: false,
            },
        },
        window: {
            width: windowWidth,
            height: windowHeight,
            fullscreen,
        },
        memory: {
            max: memMax + 'G',
            min: memMin + 'G',
        },
        javaPath,
    });
    setTimeout(() => {
        MainWindow.sendWindowWebContent('gameStartup', { id: customName, value: false });
    }, 10000);
    // Check if we close the launcher
    const launcherStayOpen = store.get(customName + '_launcherStayOpen', true);
    if (!launcherStayOpen) {
        electron.app.quit();
    }
}));
electron.ipcMain.handle('launchMinecraftVanilla', (event, mcVersion) => __awaiter(void 0, void 0, void 0, function*() {
    log.info('launchMinecraftVanilla');
    MainWindow.sendWindowWebContent('gameStartup', { id: 'minecraft', value: true });
    const fullscreen = store.get('minecraft_gameStartInFullscreen', false);
    const windowWidth = store.get('minecraft_gameResolutionW', 856);
    const windowHeight = store.get('minecraft_gameResolutionH', 482);
    const memMin = store.get('minecraft_gameMemMin', 1);
    const memMax = store.get('minecraft_gameMemMax', 2);
    // Check if it is a legacy version of MC
    let javaVer = BundledJava.JavaVersion.Runtime;
    if (parseInt(mcVersion.split('.')[1]) <= 16)
        javaVer = BundledJava.JavaVersion.Legacy;
    // Check Java
    const javaPath = store.get('minecraft_gameJavaPath', (0, VanillaBundledJava.VanillaBundledJavaPath)(javaVer));
    VanillaBundledJava.eventEmitter.on('progress', args => {
        const value = (args.done / args.total) * 100;
        MainWindow.sendWindowWebContent('gameDownloadProgress', { id: 'minecraft', value });
    });
    yield(0, VanillaBundledJava.DownloadVanillaJRE)(javaVer, 'minecraft');
    // Refresh token
    yield(0, AuthService.refreshCurrentAccessToken)();
    const launcher = new minecraftLauncherCore.Client();
    const opts = {
        root,
        authorization: {
            user_properties: '{}',
            access_token: global.share.auth.access_token,
            uuid: global.share.auth.uuid,
            name: global.share.auth.name,
            meta: {
                type: 'msa',
                xuid: global.share.auth.xuid,
                demo: false,
            },
        },
        version: {
            number: mcVersion,
            type: 'release',
        },
        window: {
            width: windowWidth,
            height: windowHeight,
            fullscreen,
        },
        memory: {
            max: memMax + 'G',
            min: memMin + 'G',
        },
        javaPath,
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    launcher.launch(opts);
    // Emitted when launch arguments are set for the Minecraft Jar.
    launcher.on('arguments', () => {
        MainWindow.sendWindowWebContent('gameDownloadFinish', { id: 'minecraft' });
    });
    launcher.on('progress', data => {
        const value = (data.task / data.total) * 100;
        log.info('Download Progress:', value, data.type);
        MainWindow.sendWindowWebContent('gameDownloadProgress', { id: 'minecraft', value });
    });
    launcher.on('finish', args => {
        MainWindow.sendWindowWebContent('gameDownloadFinish', { id: 'minecraft' });
    });
    launcher.on('close', e => {
        if (e === 1) {
            // Error: Command failed: "java" -version
            electron.dialog.showMessageBox({
                type: 'error',
                title: 'Impossible de démarrer Minecraft',
                message: '"Java" n\'est pas reconnu en tant que commande interne ou externe. Vérifier dans les paramètres que le chemin vers Java est valide.',
            });
            setTimeout(() => {
                MainWindow.sendWindowWebContent('gameStartup', { id: 'minecraft', value: false });
            }, 10000);
        }
    });
    launcher.on('debug', e => log.debug(e));
    launcher.on('data', e => console.log(e));
    setTimeout(() => {
        MainWindow.sendWindowWebContent('gameStartup', { id: 'minecraft', value: false });
    }, 10000);
    // Check if we close the launcher
    const launcherStayOpen = store.get('minecraft_launcherStayOpen', true);
    if (!launcherStayOpen) {
        electron.app.quit();
    }
}));