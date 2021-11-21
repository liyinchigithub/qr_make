var qr = require('qr-image'); //需要下载生成二维码依赖
var fs = require('fs'); //文件操作依赖

// 接收命令行参数
let arguments = process.argv.splice(2);		// 参数数组
var url_string = arguments[0]; // 获取arg1
var save_qr_image_url= arguments[1];  // 获取arg2
// 生成二维码
var code = qr.image(url_string, { type: 'png', size: 10 });
console.log(code);
// 生成本地文件
var pic = code.pipe(fs.createWriteStream(`${save_qr_image_url}/二维码.png`));
// 监听错误事件
pic.on('error', (err)=> {
	console.log(err);
});
// 监听完成事件
pic.on('finish', ()=> {
	console.log('二维码生成完毕');
});
