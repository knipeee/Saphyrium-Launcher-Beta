"use strict";

exports.getHexHashCrc32 = exports.getHexHash = void 0;
const fs = require("fs");
const crypto = require("crypto");
const crc32 = require("@aws-crypto/crc32");

function getHexHash(filePath) {
    const fileBuffer = fs.readFileSync(filePath);
    const hashSum = crypto.createHash('sha1');
    hashSum.update(fileBuffer);
    return hashSum.digest('hex');
}
exports.getHexHash = getHexHash;

function getHexHashCrc32(filePath) {
    const fileBuffer = fs.readFileSync(filePath);
    const resultHash = (new crc32.Crc32).update(fileBuffer).digest().toString(16);
    return resultHash.length === 8 ? resultHash : `0${resultHash}`;
}
exports.getHexHashCrc32 = getHexHashCrc32;