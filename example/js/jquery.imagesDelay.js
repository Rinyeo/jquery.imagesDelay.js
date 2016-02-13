;(function($) {
	$.fn.imagesDelay = function(distance) {

		// 获取所有img对象
		var $images = $(this);

		// 获取视口的高度
		var $H = $(window).height();

		// 触发距离,默认距100px时触发加载
		var $D = 100;

		// 如果有传参数,且参数为number
		if (typeof(distance) == 'number') {
			 $D = distance;
		}

		// onload 和 onscroll 时间会触发加载图片
		window.onload = window.onscroll = function() {

			// 获取滚动条的高度
			var $S = $(window).scrollTop();

			// 遍历所有的img对象
			$.each($images, function(index, val) {

				// 把DOM节点对象 转换 成jQuery对象
				var $val = $(val);

				//  过滤所有img中不包含data-src属性
				if(!($val.attr('data-src'))) {
					return ;
				}
				/*当页面底部将要滚动到img的上方时
				把data-src的值添加到src属性上
				并删除data-src属性*/
				if ($H + $S + $D > $val.offset().top) {
					$val.attr('src', $val.attr('data-src'));
					$val.removeAttr('data-src');
				}

			});
		}
	}
})(jQuery);