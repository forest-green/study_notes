/*
 * @Description: demo
 * @Author: dongzhiwen
 * @since: 2021-04-08 14:02:51
 * @LastAuthor: dongzhiwen
 * @lastTime: 2021-04-08 16:55:59
 */
const puppeteer = require("puppeteer");
const fs = require("fs");
const request = require("request");
const path = require("path");

(async () => {
  const pathToExtension = path.join(
    __dirname,
    "./chrome-win/chrome.exe"
  );
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: pathToExtension,
  });
  // 默认使用的是系统中的浏览器
  // const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8080/auth/login');
  await page.setViewport({
    width:1920,
    height:1080
  })
  await page.waitForSelector('#NG-user-login-username');
  await page.type('#NG-user-login-username', 'admin', {delay: 350});
  await page.type('#NG-user-login-password', '123456j', {delay: 350});
  await page.type('#NG-user-login-vercode', '12', {delay: 350});
  await page.click('#NG-login-form button[type="button"]');
  await page.waitForSelector('#NG-system-side-menu .layui-nav-item')
    // let selector = page.$$('#NG-system-side-menu .layui-nav-item')[0]
  await page.click('#NG-system-side-menu .layui-nav-item');
  await page.click('#NG-system-side-menu .layui-nav-item .layui-nav-child dd');
  
  // other actions...
  // await browser.close();
})();