/**
 * Popup/tooltip组件
 *
 * @class Popup
 * @constructor
 * @param {Object} options 配置
	@param {String/jQuery} options.trigger 触发元素
	@param {String/jQuery} [options.element] tooltip弹出内容元素, 默认为trigger.next()
 */
function Popup(options) {
	this.trigger = $(options.trigger);
	this.element = options.element ? $(options.element) : this.trigger.next();

	this.isPosed = false;

	this.trigger.click($.proxy(this.show, this));
	this.element.on('click', '.close', $.proxy(this.hide, this));
}
/**
 * 设置弹出框的位置在触发元素旁边
 *
 * Note: 最好设置tooltip元素的父元素为relative，否则相对于document定位，当某个
 * 交互改变了页面高度，会让已经弹出的tooltip移位
 *
 * @method setPosition
 */
Popup.prototype.setPosition = function() {
	var position = this.trigger.position(),
		tgWidth = this.trigger.width(),
		tgHeight = this.trigger.height(),
		elWidth = this.element.width(),
		elHeight = this.element.height(),
		arrowWidth = 10,
		offsetLeft, offsetTop;
	if (this.element.hasClass('left')) {
		offsetLeft = position.left + tgWidth + arrowWidth * 2;
		offsetTop = position.top - (elHeight + tgHeight + arrowWidth) / 2;
	}
	else if (this.element.hasClass('top')) {
		offsetLeft = position.left - (elWidth + arrowWidth) / 2;
		offsetTop = position.top + tgHeight + arrowWidth;
	}
	this.element.css({
		left: offsetLeft,
		top: offsetTop
	});
};
/**
 * 显示
 *
 * @method show
 */
Popup.prototype.show = function() {
	if (!this.isPosed) {
		this.setPosition();
		this.isPosed = true;
	}
	this.element.show();
};
/**
 * 隐藏
 *
 * @method hide
 */
Popup.prototype.hide = function() {
	this.element.hide();
};
