/*
 * @Description: 服务器
 * @Author: dongzhiwen
 * @Date: 2021-03-02 23:25:51
 * @LastEditors: dongzhiwen
 * @LastEditTime: 2021-03-02 23:41:08
 */
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // 访问node项目中的资源，主要是通过对访问的url(即req.url)进行解析路由运行相应的逻辑
    console.log(req.url);
    if (req.url === '/fang') {
        fs.readFile('./index.html',(err, data) => {
            if (err) {
                throw err
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
                res.end(data)
                
            }
        })
    } else if (req.url === '/test.png') {
        // 此处是对静态资源进行处理的，在访问静态资源时，因为静态资源在服务器上，在使用时，需要向服务器发起请求
        fs.readFile('./test.png',(err, data) => {
            if (err) {
                throw err
            } else {
                res.writeHead(200, { 'Content-Type': 'image/png; charset=utf-8' })
                res.end(data)
                
            }
        })
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
        res.end('没有访问呢到数据')
    }
})

server.listen('3000', '127.0.0.1')