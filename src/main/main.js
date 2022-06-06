const { app, shell } = require('electron');
const UpdateWindow = require("./windows/UpdateWindow");
const log = require("electron-log");

require('electron-debug')({ showDevTools: !![] });

global.share = { auth: { access_token: "", uuid: "", xuid: "", name: "" } };
const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
    app.quit();
} else {
    app.whenReady().then(() => {
        log.info('ready');
        UpdateWindow.createWindow();
    });
}

app.on('web-contents-created', (ovella, remyngton) => {
    remyngton.setWindowOpenHandler(({ url }) => {
        shell.openExternal(url);
        return { action: 'deny' };
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

require('./events');