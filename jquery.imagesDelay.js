/*
* Author: Riny
* PluginName: imagesDelay
*/
;(function($) {
	// 可以不用 extend 方法
	$.fn.imagesDelay = function(distance) {

		// 获取所有 img 对象
		var $images = $(this);

		// 获取视口的高度
		var $H = $(window).height();

		// 触发距离,默认距 100px 时触发加载
		var $D = 100;

		// 如果有传参数,且参数为 number
		if (typeof(distance) == 'number') {
			 $D = distance;
		}

		// onload 和 onscroll 时间会触发加载图片
		window.onload = window.onscroll = function() {

			// 获取滚动条的高度
			var $S = $(window).scrollTop();

			// 遍历所有的 img 对象
			$.each($images, function(index, val) {

				// 把 DOM 节点对象转换 成 jQuery 对象
				var $val = $(val);

				// 过滤所有 img 中不包含 data-src 属性
				if(!($val.attr('data-src'))) {
					return ;
				}
				/* 当页面底部将要滚动到 img 的上方时,
				   把data-src的值添加到 src 属性上, 并删除data-src属性 */
				if ($H + $S + $D > $val.offset().top) {
					$val.attr('src', $val.attr('data-src'));
					$val.removeAttr('data-src');
				}

			});
		}
	}
})(jQuery);