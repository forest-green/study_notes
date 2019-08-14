# 一台电脑配置多个git账号，并实现同步提交

- 查看当前电脑的git用户配置信息

  ```
  使用 git config --list 查看当前配置
  ```

## 使用工具拉取、推送git

此处建议使用[Sourcetree](https://www.sourcetreeapp.com/),简单方便快捷

### 使用Sourcetree拉取多个git上的代码，操作步骤如下：

1. 创建一个new Tab

   ![new Tab](https://github.com/forest-green/study_notes/blob/master/git_study/image/create_tab.png)

2. 在菜单栏选择Remote模块

   ![remote](https://github.com/forest-green/study_notes/blob/master/git_study/image/remote.png)

   

3. 点击页面中的【添加一个账户】会弹出【编辑托管账户】的弹窗，根据你想要拉取代码的托管服务商，选择对应的选项，这里我使用的是git，便选择了github；在Credentials中选择账号类型，默认的是Oauth，此处是你默认配置的全局git，另外一个选项是Basic，此处可以输入你的git账号，用于添加账号信息

   ![添加账户信息](https://github.com/forest-green/study_notes/blob/master/git_study/image/add_account.png)

   ![配置账户](https://github.com/forest-green/study_notes/blob/master/git_study/image/create_account.gif)

4. 添加完成之后，就可以进行远程代码clone

## 使用指令，命令行的形式进行配置多个git账号

此处参考[《Git多账号配置》](https://gist.github.com/yeungeek/596984fd9e53d6c36c0d)，[一台电脑绑定两个github帐号教程](https://www.jianshu.com/p/3fc93c16ad2d)