/*
 * @Description: 对请求进行处理
 * @Author: dongzhiwen
 * @Date: 2021-03-04 22:20:30
 * @LastEditors: dongzhiwen
 * @LastEditTime: 2021-03-04 22:36:15
 */
const http = require('http');
const url = require('url');

let server = http.createServer((req, res) => {
    let myuri = url.parse(req.url)
    console.log(myuri);
    res.setHeader('set-Cookie', 'name=123');
    res.write(`myuri pathname ${myuri.pathname}`);
    res.write(`myuri search ${myuri.search}`);
    res.write(`myuri query ${myuri.query}`);
    res.end();
});

server.listen(3000, '127.0.0.1');