/*
 * @Description: 创建一个静态资源服务器
 * @Author: dongzhiwen
 * @Date: 2021-03-09 21:36:36
 * @LastEditors: dongzhiwen
 * @LastEditTime: 2021-03-09 21:50:31
 */
const http = require('http');
const url = require('url');
const fs = require('fs');


http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname
    console.log(pathname);
    fs.readFile(`./static${pathname}`, (err, data) => {
        if (err) {
            fs.readFile('./static/404.html', (err, data) => {
                if (err) {
                    throw err
                }
                res.writeHead(200, {"Content-type": "text/html; charset:utf-8"})
                res.end(data)
            })
            return
        }
        // 剩余  需要根据请求的资源类型 进行动态配置content-type
        
        res.writeHead(200, {"Content-type": "text/html;charset:utf8"})
        res.end(data)
    })

}).listen(3000, '127.0.0.1')