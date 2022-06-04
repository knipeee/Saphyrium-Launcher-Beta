var jovanta = ["default", "ready", "createWindow", "push", "shift", "0x0", "0x1", "0x2", "electron", "0x3", "0x4", "electron-debug", "app", "0x5", "0x6", "0x7", "0x8", "0x9", "0xa", "info", "0xb", "0xc", "web-contents-created", "0xd", "0xf", "0x10", "window-all-closed", "0x11", "0x12", "0x13", "setWindowOpenHandler", "shell", "openExternal", "deny", "platform", "__esModule", "./windows/UpdateWindow", "requestSingleInstanceLock", "quit", "whenReady", "then"];

(function(annalysse, tyeishia) {
    var koralee = function(guenevere) {
        while (--guenevere) {
            annalysse.push(annalysse.shift());
        }
    };
    koralee(++tyeishia);
}(jovanta, 317));

var athanasius = function(jeydi, malulani) {
    jeydi = jeydi - 0;
    var karinda = jovanta[jeydi];
    return karinda;
};
var taka = [athanasius("0x0"), athanasius("0x1"), athanasius("0x2"), athanasius("0x3"), athanasius("0x4"), "darwin", "./events", "__importDefault", athanasius("0x5"), "defineProperty", athanasius("0x6"), "electron-log", athanasius("0x7"), athanasius("0x8"), "app", athanasius("0x9"), athanasius("0xa"), athanasius("0xb"), athanasius("0xc"), athanasius("0xd")];
(function(taisia, delyle) {
    var maxola = function(tonay) {
        while (--tonay) {
            taisia[athanasius("0xe")](taisia[athanasius("0xf")]());
        }
    };
    maxola(++delyle);
}(taka, 307));
var lanesa = function(woo, xandyr) {
    woo = woo - 0;
    var zerenity = taka[woo];
    return zerenity;
};
var __importDefault = undefined && undefined[lanesa(athanasius("0x10"))] || function(lorianne) {
    return lorianne && lorianne[lanesa(athanasius("0x11"))] ? lorianne : { default: lorianne };
};
Object[lanesa(athanasius("0x12"))](exports, lanesa("0x1"), { value: !![] });
const electron_1 = require(athanasius("0x13"));
const UpdateWindow_1 = __importDefault(require(lanesa(athanasius("0x14"))));
const electron_log_1 = __importDefault(require(lanesa(athanasius("0x15"))));
require(athanasius("0x16"))({ showDevTools: !![] });
global.share = { auth: { access_token: "", uuid: "", xuid: "", name: "" } };
const gotTheLock = electron_1[athanasius("0x17")][lanesa(athanasius("0x18"))]();
if (!gotTheLock) {
    electron_1[athanasius("0x17")][lanesa(athanasius("0x19"))]();
} else {
    electron_1[lanesa(athanasius("0x1a"))][lanesa(athanasius("0x1b"))]()[lanesa(athanasius("0x1c"))](() => {
        electron_log_1[lanesa(athanasius("0x1d"))][athanasius("0x1e")](lanesa(athanasius("0x1f")));
        UpdateWindow_1[athanasius("0xb")][lanesa(athanasius("0x20"))]();
    });
}
electron_1[athanasius("0x17")].on(athanasius("0x21"), function(ovella, remyngton) {
    remyngton[lanesa(athanasius("0x22"))](({ url }) => {
        electron_1[lanesa("0xe")][lanesa(athanasius("0x23"))](url);
        return { action: lanesa(athanasius("0x24")) };
    });
});
electron_1[lanesa(athanasius("0x1a"))].on(athanasius("0x25"), function() {
    if (process[lanesa(athanasius("0x26"))] !== lanesa(athanasius("0x27"))) electron_1[lanesa(athanasius("0x1a"))].quit();
});
require(lanesa(athanasius("0x28")));