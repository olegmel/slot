var CryptoJS = require('crypto-js');

var crypto = {
    AESkey: '101112131415161718191a1b1c1d1e1f',
    encodeData: function (data) {
        return CryptoJS.AES.encrypt(data+'', this.AESkey).toString();
    },
    decodeData: function (data) {
        return CryptoJS.AES.decrypt(data+'', this.AESkey).toString(CryptoJS.enc.Utf8);
    }
};

module.exports = crypto;