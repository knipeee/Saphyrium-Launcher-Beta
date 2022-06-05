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
exports.loginUser = exports.refreshCurrentAccessToken = void 0;
const electron = require("electron");
const LoginWindow = require("../windows/LoginWindow");
const MainWindow = require("../windows/MainWindow");
const UpdateWindow = require("../windows/UpdateWindow");
const log = require("electron-log");
const AuthenticationHandler = require("./AuthenticationHandler");
const Store = require("electron-store");
const jsonwebtoken = require("jsonwebtoken");
const store = new Store({ name: 'accounts', encryptionKey: '8a753d8a-acb6-451e-8340-7e6b1a2016e3' });
const REDIRECT_URL = 'https://login.microsoftonline.com/common/oauth2/nativeclient';
const CLIENT_ID = 'eded06a1-609d-4aa6-b457-b9c3fd1ab692';
let authWindowclosedByUser = true;
electron.ipcMain.handle('getAccounts', () => __awaiter(void 0, void 0, void 0, function*() {
    const accounts = store.get('accounts');
    if (accounts === null || accounts === undefined || accounts.length <= 0)
        return;
    log.default.info('getAccounts');
    let res = [];
    accounts.forEach(data => {
        res.push({
            username: data.username,
            skinUrl: data.skinUrl,
        });
    });
    log.default.info(JSON.stringify(res));
    return res;
}));

function SetUserData(accessToken, refreshToken, mcInfo, transparent = false) {
    return __awaiter(this, void 0, void 0, function*() {
        if (mcInfo !== null) {
            // Save in current app process
            const decoded = jsonwebtoken.decode(accessToken); // No signature verification
            global.share.auth.access_token = accessToken;
            global.share.auth.xuid = decoded.xuid;
            global.share.auth.uuid = mcInfo.id;
            global.share.auth.name = mcInfo.name;
            // Save in account.json
            let accounts = store.get('accounts');
            const accountData = {
                username: mcInfo.name,
                token: accessToken || '',
                refreshToken: refreshToken || '',
                skinUrl: mcInfo.skins[0].url,
            };
            if (accounts) {
                var accIndex = accounts.findIndex((account) => account.username === mcInfo.name);
                // @ts-ignore
                if (accIndex === -1) {
                    accounts.push(accountData);
                    store.set('accounts', accounts);
                } else {
                    accounts[accIndex] = accountData;
                    store.set('accounts', accounts);
                }
            } else {
                store.set('accounts', [accountData]);
            }
            store.set('current-account', accountData.username);
            // Open / close windows
            if (!transparent) {
                yield MainWindow.createWindow();
                UpdateWindow.destroyWindow();
                const mainWindow = MainWindow.getWindow();
                if (mainWindow) {
                    mainWindow.webContents.send('userDataFetch', {
                        username: mcInfo.name,
                        skinUrl: mcInfo.skins[0].url,
                    });
                }
            }
        } else {
            electron.dialog.showMessageBox({
                type: 'error',
                title: 'Compte invalide',
                message: 'Votre compte Microsoft ne possède pas Minecraft.',
            });
        }
    });
}

function refreshCurrentAccessToken() {
    return __awaiter(this, void 0, void 0, function*() {
        const currAccount = store.get('current-account');
        const accounts = store.get('accounts');
        const accIndex = accounts.findIndex((account) => account.username === currAccount);
        yield loginUser(accounts[accIndex], false, true);
    });
}
exports.refreshCurrentAccessToken = refreshCurrentAccessToken;

function loginUser(account, changeAccount = false, transparent = false) {
    return __awaiter(this, void 0, void 0, function*() {
        let accessToken = account.token;
        let refreshToken = account.refreshToken;
        if (accessToken === undefined && refreshToken === undefined) {
            yield LoginWindow.createWindow();
            UpdateWindow.destroyWindow();
            return;
        }
        let authInfo = null;
        let mcInfo = null;
        try {
            const authenticationHandler = new AuthenticationHandler(CLIENT_ID, REDIRECT_URL);
            authInfo = yield authenticationHandler.getAuthCodes(refreshToken, true);
            accessToken = authInfo.mc_token.access_token;
            refreshToken = authInfo.auth_token.refresh_token;
            mcInfo = yield authenticationHandler.getMCInfoWithToken(accessToken);
        } catch (e) {
            log.default.error('Error, the token is expired.');
            yield MSAuthWindow(!changeAccount);
            return;
        }
        yield SetUserData(accessToken, refreshToken, mcInfo, transparent);
    });
}
exports.loginUser = loginUser;

function logout() {
    return __awaiter(this, void 0, void 0, function*() {
        // Reset
        store.set('current-account', null);
        global.share.auth.access_token = '';
        global.share.auth.xuid = '';
        global.share.auth.uuid = '';
        global.share.auth.name = '';
        yield electron.session.defaultSession.clearCache();
        yield electron.session.defaultSession.clearStorageData();
        // Redirect user
        LoginWindow.createWindow();
        MainWindow.destroyWindow();
    });
}
electron.ipcMain.on('changeAccount', (event, name) => __awaiter(void 0, void 0, void 0, function*() {
    log.default.info('changeAccount', name);
    if (name === global.share.auth.name) // Alreay with this account
        return;
    store.set('current-account', name);
    global.share.auth.access_token = '';
    global.share.auth.xuid = '';
    global.share.auth.uuid = '';
    global.share.auth.name = '';
    yield electron.session.defaultSession.clearCache();
    yield electron.session.defaultSession.clearStorageData();
    const accounts = store.get('accounts');
    const accIndex = accounts.findIndex((account) => account.username === name);
    if (accIndex === -1) {
        log.default.error("Can't find the token for " + name);
        return;
    }
    yield loginUser(accounts[accIndex], true);
}));
electron.ipcMain.on('deleteAccount', (event, username) => __awaiter(void 0, void 0, void 0, function*() {
    log.default.info('deleteAccount', username);
    const accounts = store.get('accounts');
    const newAccounts = accounts.filter((account) => account.username !== username);
    store.set('accounts', newAccounts);
    if (username === global.share.auth.name)
        logout();
    else
        MainWindow.sendWindowWebContent('updateAccounts', { id: username });
}));
electron.ipcMain.on('logout', () => __awaiter(void 0, void 0, void 0, function*() {
    log.default.info('logout');
    logout();
}));

function MSAuthWindow(hidden = false) {
    return __awaiter(this, void 0, void 0, function*() {
        const authenticationHandler = new AuthenticationHandler(CLIENT_ID, REDIRECT_URL);
        const authWindow = new electron.BrowserWindow({
            alwaysOnTop: true,
            modal: true,
            autoHideMenuBar: true,
            parent: hidden ? UpdateWindow.getWindow() : LoginWindow.getWindow(),
            frame: true,
            show: false,
            webPreferences: {
                nodeIntegration: false,
                contextIsolation: true,
                devTools: false,
            },
        });
        authWindowclosedByUser = true;
        authWindow.setMenu(null);
        authWindow.webContents.on('did-finish-load', () => {
            if (authWindow && !hidden) {
                authWindow.show();
            }
            // If the auto-connection is to long (so failed), show auth window
            if (hidden) {
                setTimeout(() => {
                    if (authWindow && !authWindow.isFocused())
                        authWindow.show();
                }, 3000);
            }
        });
        authWindow.on('closed', () => {
            log.default.info('authWindow is closed');
            if (authWindowclosedByUser) {
                LoginWindow.sendWindowWebContentBool('setLoginBtn', false);
            }
        });
        authWindow.loadURL(authenticationHandler.forwardUrl);
        const filter = { urls: [REDIRECT_URL] };
        electron.session.defaultSession.webRequest.onCompleted(filter, (details) => __awaiter(this, void 0, void 0, function*() {
            authWindowclosedByUser = false;
            authWindow.close();
            const url = details.url;
            const regex = url.match(/#(?:code)=([\S\s]*?)$/);
            if (regex === null) {
                console.error('ERROR: The MC code is null.');
                LoginWindow.sendWindowWebContentBool('setLoginBtn', false);
                clearCookies();
                return;
            }
            const code = regex[1];
            let result = null;
            try {
                result = yield authenticationHandler.getAuthCodes(code);
            } catch (e) {
                clearCookies();
                electron.dialog.showMessageBox({
                    type: 'error',
                    title: 'Compte invalide',
                    message: "Votre compte Microsoft n'a pas Minecraft. Veuillez ressayer avec un autre.",
                });
                LoginWindow.sendWindowWebContentBool('setLoginBtn', false);
                return;
            }
            if (result === null) {
                console.error('ERROR: The MC token is null.');
                LoginWindow.sendWindowWebContentBool('setLoginBtn', false);
                clearCookies();
                return;
            }
            // Save globally
            yield SetUserData(result.mc_token.access_token, result.auth_token.refresh_token, result.mc_info);
            if (hidden) {
                UpdateWindow.destroyWindow();
            } else {
                LoginWindow.destroyWindow();
            }
        }));
    });
}

function clearCookies() {
    electron.session.defaultSession.clearStorageData({ storages: ['cookies'] })
        .then(() => {
            console.log('All cookies cleared');
        })
        .catch((error) => {
            console.error('Failed to clear cookies: ', error);
        });
}
electron.ipcMain.on('getAccessToken', () => __awaiter(void 0, void 0, void 0, function*() {
    yield MSAuthWindow();
}));
exports.default = () => __awaiter(void 0, void 0, void 0, function*() {
    const currAccount = store.get('current-account');
    if (currAccount === undefined) {
        yield LoginWindow.createWindow();
        UpdateWindow.destroyWindow();
        return;
    }
    const accounts = store.get('accounts');
    const accIndex = accounts.findIndex((account) => account.username === currAccount);
    if (accIndex > -1) {
        log.default.info('Already login. Get account data.');
        yield loginUser(accounts[accIndex]);
    } else {
        yield LoginWindow.createWindow();
        UpdateWindow.destroyWindow();
    }
});