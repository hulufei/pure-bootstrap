/**
 * 弹窗组件
 *
 * @class Modal
 * @constructor
 * @param {Object} options 配置
	@param {String/jQuery} options.trigger 触发元素
	@param {String/jQuery} options.element modal弹出内容元素
	@param {Boolean} options.mask 是否显示背景遮罩，默认为false
 */
function Modal(options) {
	this.trigger = $(options.trigger);
	this.element = $(options.element);

	if (options.mask) {
		var $mask = $('body').children('.pure-modal-backdrop');
		this.mask = $mask.length > 0 ? $mask : $('<div class="pure-modal-backdrop"/>').appendTo('body');
		this.mask.hide();
	}

	this.trigger.click($.proxy(this.show, this));
	this.element.on('click', '.J_close', $.proxy(this.hide, this));
}
/**
 * 显示
 *
 * @method show
 */
Modal.prototype.show = function() {
	this.element.show();
	if (this.mask) {
		this.mask.show();
	}
};
/**
 * 隐藏
 *
 * @method hide
 */
Modal.prototype.hide = function() {
	this.element.hide();
	if (this.mask) {
		this.mask.hide();
	}
};
