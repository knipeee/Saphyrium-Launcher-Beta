const electron = require('electron');
const UpdateWindow = require("./windows/UpdateWindow");
const log = require("electron-log");

require('electron-debug')({ showDevTools: !![] });


global.share = { auth: { access_token: "", uuid: "", xuid: "", name: "" } };

const gotTheLock = electron.app.requestSingleInstanceLock();
if (!gotTheLock) {
    electron.app.quit();
} else {
    electron.app.whenReady().then(() => {
        log.default.info('ready');
        UpdateWindow.default.createWindow();
    });
}
electron.app.on('web-contents-created', (ovella, remyngton) => {
    remyngton['setWindowOpenHandler'](({ url }) => {
        electron.shell.openExternal(url);
        return { action: 'deny' };
    });
});
electron.app.on('window-all-closed', () => {
    if (process[platform] !== 'darwin') electron.app.quit();
});
require('./events');