
var QRCode = require('qrcode')
const { readFile, readFileSync } = require('fs');
const decodeImage = require('jimp').read;
const qrcodeReader = require('qrcode-reader');
const path = require("path");
 
 
let arguments = process.argv.splice(2);		// 参数数组
var url_string = arguments[0]; // 获取arg1
var save_qr_image_url= arguments[1];  // 获取arg2
 
// 控制台输出
 QRCode.toString(url_string, { type: 'terminal' }, (err, qr_image_url)=> {
            // 保存文件到本地
            console.log(qr_image_url)
            console.log(save_qr_image_url)
        })
