var _0x55d8 = ['default', 'ready', 'createWindow', 'push', 'shift', '0x0', '0x1', '0x2', 'electron', '0x3', '0x4', 'electron-debug', 'app', '0x5', '0x6', '0x7', '0x8', '0x9', '0xa', 'info', '0xb', '0xc', 'web-contents-created', '0xd', '0xf', '0x10', 'window-all-closed', '0x11', '0x12', '0x13', 'setWindowOpenHandler', 'shell', 'openExternal', 'deny', 'platform', '__esModule', './windows/UpdateWindow', 'requestSingleInstanceLock', 'quit', 'whenReady', 'then'];
(function(_0x3f5d46, _0x1d05f7) {
    var _0x2a4eb3 = function(_0x1572c1) { while (--_0x1572c1) { _0x3f5d46['push'](_0x3f5d46['shift']()); } };
    _0x2a4eb3(++_0x1d05f7);
}(_0x55d8, 0x13d));
var _0x1049 = function(_0x1528f7, _0x1767ff) { _0x1528f7 = _0x1528f7 - 0x0; var _0x56cd07 = _0x55d8[_0x1528f7]; return _0x56cd07; };
var _0x2d64 = [_0x1049('0x0'), _0x1049('0x1'), _0x1049('0x2'), _0x1049('0x3'), _0x1049('0x4'), 'darwin', './events', '__importDefault', _0x1049('0x5'), 'defineProperty', _0x1049('0x6'), 'electron-log', _0x1049('0x7'), _0x1049('0x8'), 'app', _0x1049('0x9'), _0x1049('0xa'), _0x1049('0xb'), _0x1049('0xc'), _0x1049('0xd')];
(function(_0x1c125d, _0x241303) {
    var _0x1a7472 = function(_0x50eed3) { while (--_0x50eed3) { _0x1c125d[_0x1049('0xe')](_0x1c125d[_0x1049('0xf')]()); } };
    _0x1a7472(++_0x241303);
}(_0x2d64, 0x133));
var _0x2c76 = function(_0x20a812, _0x4c5c66) { _0x20a812 = _0x20a812 - 0x0; var _0x3a56a6 = _0x2d64[_0x20a812]; return _0x3a56a6; };
var __importDefault = undefined && undefined[_0x2c76(_0x1049('0x10'))] || function(_0x14cf35) { return _0x14cf35 && _0x14cf35[_0x2c76(_0x1049('0x11'))] ? _0x14cf35 : { 'default': _0x14cf35 }; };
Object[_0x2c76(_0x1049('0x12'))](exports, _0x2c76('0x1'), { 'value': !![] });
const electron_1 = require(_0x1049('0x13'));
const UpdateWindow_1 = __importDefault(require(_0x2c76(_0x1049('0x14'))));
const electron_log_1 = __importDefault(require(_0x2c76(_0x1049('0x15'))));
require(_0x1049('0x16'))({ 'showDevTools': !![] });
global['share'] = { 'auth': { 'access_token': '', 'uuid': '', 'xuid': '', 'name': '' } };
const gotTheLock = electron_1[_0x1049('0x17')][_0x2c76(_0x1049('0x18'))]();
if (!gotTheLock) { electron_1[_0x1049('0x17')][_0x2c76(_0x1049('0x19'))](); } else {
    electron_1[_0x2c76(_0x1049('0x1a'))][_0x2c76(_0x1049('0x1b'))]()[_0x2c76(_0x1049('0x1c'))](() => {
        electron_log_1[_0x2c76(_0x1049('0x1d'))][_0x1049('0x1e')](_0x2c76(_0x1049('0x1f')));
        UpdateWindow_1[_0x1049('0xb')][_0x2c76(_0x1049('0x20'))]();
    });
}
electron_1[_0x1049('0x17')]['on'](_0x1049('0x21'), function(_0x5f2a9f, _0x71b0b4) { _0x71b0b4[_0x2c76(_0x1049('0x22'))](({ url }) => { electron_1[_0x2c76('0xe')][_0x2c76(_0x1049('0x23'))](url); return { 'action': _0x2c76(_0x1049('0x24')) }; }); });
electron_1[_0x2c76(_0x1049('0x1a'))]['on'](_0x1049('0x25'), function() { if (process[_0x2c76(_0x1049('0x26'))] !== _0x2c76(_0x1049('0x27'))) electron_1[_0x2c76(_0x1049('0x1a'))]['quit'](); });
require(_0x2c76(_0x1049('0x28')));