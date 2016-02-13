# imagesDelay.js
###介绍
imagesDelay.js是一款基于jQuery的轻量级图片延迟加载插件。

###开发背景
在项目中目前比较常使用图片延迟加载的功能，为此把代码封装成了jQuery插件，方便以后的使用。

###依赖
本插件依赖 jQuery，开发插件使用的 jQuery 版本为 1.11.1。
使用本插件时，需要引入 jQuery 。

###使用方法
在html中引入插件：
```html
<script src="jquery.imagesDelay.js"></script>
```
调用插件入口方法。

```javascript
$(function() {
		$('.main img').imagesDelay();
	});
```
HTML中`class="mian"`下的子节点img会被延迟加载，如果想选取部分img，请使用筛选或者给img添加class。同时延迟加载的img应该符合以下规则：
1.页面初始化时，`data-src`属性为延迟加载的最终图片。
2.页面初始化时，`src`属性为延迟加载默认的图片。

```html
<div><img data-src="delay.jpg" src="defualt.jpg" width="100%"></div>
```

工作原理：当游览器窗口底部快接近img的上方时，把`data-src`的值替换到`src`上，同时删除`data-src`属性。

`imagesDelay()`可以传入一个参数`instance`，可以控制游览器窗口底部到img上方距离多少时延时加载，默认为`100px`。

```javascript
$(function() {
		$('.main').imagesDelay(-200); //可以传入负值
	});
```
注意：传参时不需要带上px，数字类型即可。

###demo演示
[Demo显示地址](http://rinhome.com/demo/imageDelay/)