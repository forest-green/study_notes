/*
 * @Description: 获取当前文件的类型
 * @Author: dongzhiwen
 * @Date: 2021-03-09 21:01:07
 * @LastEditors: dongzhiwen
 * @LastEditTime: 2021-03-09 21:36:12
 */
const http = require('http');
const url = require('url');
const fs = require('fs');


http.createServer((req, res) => {
    const pathname = url.parse(req.url).pathname;
    if (pathname == '/favicon.ico') {
        return false;
    }
    console.log(pathname);
    fs.readdir(`./static/`, (err, files ) => {
        if (err) {
            throw err
        }
        console.log(files);
        let length = files.length;
        let result = [];
        (function Iteration(i) {
            if (i > length) {
                console.log(result);
                return
            }
            fs.stat(`./static/${files[i]}`, (err, stats) => {
                if (err) {
                    return false
                }
                console.log(stats.isDirectory());
                if (stats.isDirectory()) {
                    console.log(files[i]);
                    result.push(files[i])
                }
                Iteration(i+1)
            })
        })(0)
    })
   
    res.end('testsss')
    // res.writeHead(200, {"content-Type": "text/html; charset:utf-8"});
}).listen(3000, '127.0.0.1')