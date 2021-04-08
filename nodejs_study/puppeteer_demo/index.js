/*
 * @Description: puppeteer demo
 * @Author: dongzhiwen
 * @since: 2021-04-08 13:51:24
 * @LastAuthor: dongzhiwen
 * @lastTime: 2021-04-08 14:43:21
 */
const puppeteer = require("puppeteer");
const fs = require("fs");
const request = require("request");
const path = require("path");

let i = 2;//页数

async function netbian(i) {
  if (i > 3) {
    return
  }
  // 配置 浏览器内核路径  关键
  // const pathToExtension = require("path").join(
  //   __dirname,
  //   "./chrome-win/chrome.exe"
  // );
  // const browser = await puppeteer.launch({
  //   headless: false,
  //   executablePath: pathToExtension,
  // });
  const browser = await puppeteer.launch()
  const page = await browser.newPage();
  await page.goto(`https://pic.netbian.com/4kfengjing/index_${i}.html`);//为了方便从第二页开始
  let images = await page.$$eval("ul>li>a>img", (el) =>//图片节点，API可查看官方介绍
    el.map((x) => "https://pic.netbian.com" + x.getAttribute("src"))//获取图片的src地址
  );
  mkdirSync(`./images`); // 存放目录
  for (m of images) {
    await downloadImg(m, "./images/" + new Date().getTime() + ".jpg");
  }

  netbian(++i);//下一页，具体结束页可以自己限制
  // 关闭
  await browser.close();
}
netbian(i);//这里执行

// 同步创建目录
function mkdirSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkdirSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
  return false;
}

// 下载文件 保存图片
async function downloadImg(src, path) {
  return new Promise(async function (resolve, reject) {
    let writeStream = fs.createWriteStream(path);
    let readStream = await request(src);
    await readStream.pipe(writeStream);
    readStream.on("end", function () {
      console.log("文件下载成功");
    });
    readStream.on("error", function () {
      console.log("错误信息:" + err);
    });
    writeStream.on("finish", function () {
      console.log("文件写入成功");
      writeStream.end();
      resolve();
    });
  });
}