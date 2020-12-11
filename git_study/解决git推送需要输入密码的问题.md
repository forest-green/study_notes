# 解决git pull/push每次都需要输入密码的问题

如果我们git clone的下载代码的时候是使用的https://的形式，而不是使用ssh的形式，当我们操作git pull 或者 git push 时，总会提示我们输入账号和密码才能成功，频繁的操作很麻烦

解决办法：

```javascript
// 在你的项目目录中打开git bash，输入
git config --global credential.helper store
```

然后会生成一个文本，上面记录了你输入的账号和密码。这个不需要我们找到文件进行输入，只需要在操作一次git pull或者push，输入账号密码，然后它就会记录下来你所输入的账号密码。