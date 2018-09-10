### 简介

一个非常简单的csdn网站的博客详情页面的广告屏蔽插件。主要是屏蔽了`https://blog.csdn.net/`为前缀下的网页的广告。
屏蔽这些广告主要是移除`iframe`标签。

### 用法

* 克隆本项目到本地
* 打开chrome浏览器，在地址栏输入 `chrome://extensions/`，进入扩展应用的界面
* 打开右上角的 `开发者模式(Developer mode)`
* 点击出现的 `LOAD UNPACKED`，然后选择到这个插件的目录即可

### 说明
这个插件只是我自己看`chrome extension`的文档，想着做的一个demo。<br>
查看源代码你会发现非常简单，就是使用 `javascript` 来控制广告所在DOM的显示隐藏。这个DOM是我自己在CSDN上找的，所以，如果它网站更新，可能这个插件就不管用了。

### 演示
![演示图](https://github.com/JerryYuanJ/demos/blob/master/images/02.gif)

### 博客
[https://blog.csdn.net/qq_25324335/article/details/82595836](https://blog.csdn.net/qq_25324335/article/details/82595836)
