'use strict';

var fs = require('fs');

fs.readFile('sample.txt', 'utf-8', function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

fs.readFile('0.jpg', function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + ' bytes');

        // var text = data.toString('utf-8');
        // console.log(text);

        // var buf = Buffer.from(text, 'utf-8');
        // console.log(buf);
    }
});

var data = fs.readFileSync('sample.txt', 'utf-8');
console.log("sync:" + data);

var data = 'Hello, Node.js';
fs.writeFile('output.txt', data, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});

fs.stat('sample.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});