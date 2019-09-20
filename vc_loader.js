/*复制组件*/
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Clipboard=e()}}(function(){var e,t,n;return function e(t,n,i){function o(a,c){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!c&&l)return l(a,!0);if(r)return r(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){var n=t[a][1][e];return o(n?n:e)},u,u.exports,e,t,n,i)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<i.length;a++)o(i[a]);return o}({1:[function(e,t,n){function i(e,t){for(;e&&e.nodeType!==o;){if(e.matches(t))return e;e=e.parentNode}}var o=9;if(Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}t.exports=i},{}],2:[function(e,t,n){function i(e,t,n,i,r){var a=o.apply(this,arguments);return e.addEventListener(n,a,r),{destroy:function(){e.removeEventListener(n,a,r)}}}function o(e,t,n,i){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&i.call(e,n)}}var r=e("./closest");t.exports=i},{"./closest":1}],3:[function(e,t,n){n.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},n.nodeList=function(e){var t=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===t||"[object HTMLCollection]"===t)&&"length"in e&&(0===e.length||n.node(e[0]))},n.string=function(e){return"string"==typeof e||e instanceof String},n.fn=function(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t}},{}],4:[function(e,t,n){function i(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!c.string(t))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(e))return o(e,t,n);if(c.nodeList(e))return r(e,t,n);if(c.string(e))return a(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function r(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}function a(e,t,n){return l(document.body,e,t,n)}var c=e("./is"),l=e("delegate");t.exports=i},{"./is":3,delegate:2}],5:[function(e,t,n){function i(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName)e.focus(),e.setSelectionRange(0,e.value.length),t=e.value;else{e.hasAttribute("contenteditable")&&e.focus();var n=window.getSelection(),i=document.createRange();i.selectNodeContents(e),n.removeAllRanges(),n.addRange(i),t=n.toString()}return t}t.exports=i},{}],6:[function(e,t,n){function i(){}i.prototype={on:function(e,t,n){var i=this.e||(this.e={});return(i[e]||(i[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){function i(){o.off(e,i),t.apply(n,arguments)}var o=this;return i._=t,this.on(e,i,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),i=0,o=n.length;for(i;i<o;i++)n[i].fn.apply(n[i].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),i=n[e],o=[];if(i&&t)for(var r=0,a=i.length;r<a;r++)i[r].fn!==t&&i[r].fn._!==t&&o.push(i[r]);return o.length?n[e]=o:delete n[e],this}},t.exports=i},{}],7:[function(t,n,i){!function(o,r){if("function"==typeof e&&e.amd)e(["module","select"],r);else if("undefined"!=typeof i)r(n,t("select"));else{var a={exports:{}};r(a,o.select),o.clipboardAction=a.exports}}(this,function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n(t),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=function(){function e(t){i(this,e),this.resolveOptions(t),this.initSelection()}return a(e,[{key:"resolveOptions",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function e(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function e(){var t=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=document.body.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[n?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.addEventListener("focus",window.scrollTo(0,i)),this.fakeElem.style.top=i+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function e(){this.fakeHandler&&(document.body.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function e(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function e(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function e(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function e(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function e(){this.removeFake()}},{key:"action",set:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function e(){return this._action}},{key:"target",set:function e(t){if(void 0!==t){if(!t||"object"!==("undefined"==typeof t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function e(){return this._target}}]),e}();e.exports=c})},{select:5}],8:[function(t,n,i){!function(o,r){if("function"==typeof e&&e.amd)e(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if("undefined"!=typeof i)r(n,t("./clipboard-action"),t("tiny-emitter"),t("good-listener"));else{var a={exports:{}};r(a,o.clipboardAction,o.tinyEmitter,o.goodListener),o.clipboard=a.exports}}(this,function(e,t,n,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}var s=o(t),u=o(n),f=o(i),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),h=function(e){function t(e,n){r(this,t);var i=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return i.resolveOptions(n),i.listenClick(e),i}return c(t,e),d(t,[{key:"resolveOptions",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText}},{key:"listenClick",value:function e(t){var n=this;this.listener=(0,f.default)(t,"click",function(e){return n.onClick(e)})}},{key:"onClick",value:function e(t){var n=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s.default({action:this.action(n),target:this.target(n),text:this.text(n),trigger:n,emitter:this})}},{key:"defaultAction",value:function e(t){return l("action",t)}},{key:"defaultTarget",value:function e(t){var n=l("target",t);if(n)return document.querySelector(n)}},{key:"defaultText",value:function e(t){return l("text",t)}},{key:"destroy",value:function e(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}]),t}(u.default);e.exports=h})},{"./clipboard-action":7,"good-listener":4,"tiny-emitter":6}]},{},[8])(8)});
function clipboard_fun(toclass){
	
	var clipboard = new Clipboard(toclass);
	clipboard.on('success', function(e) {
		if(jQuery(e.trigger).find(".copymsg").length>0) jQuery(e.trigger).find(".copymsg").remove();
		if(toclass==".copytxt"){
			jQuery(e.trigger).find(".fa").attr("class","icon");
			jQuery(e.trigger).append('<span class="copymsg qfyfadeOutUp" style="position:absolute; width: 70px;right:0px;top:-20px;right:-10px;color:green;font-size:12px !important;background:none;">提取成功</span>');
			setTimeout(function(){
				jQuery(".copymsg").remove();
			},2200);
		}
	    e.clearSelection();
	    clipboard.destroy();
	});

	clipboard.on('error', function(e) {
		jQuery(e.trigger).append('<span class="copymsg qfyfadeOutUp" style="position:absolute; width: 70px;right:0px;top:-20px;right:-10px;color:red;font-size:12px !important;background:none;">抱歉,你的浏览器不支持复制,你可以手动ctrl+c</span>');
		clipboard.destroy();
	});
}
/*编辑下用的方法*/
function customcontent_fun(){
	if(jQuery("#pagehtmlcontainer_drag .customcontentouter").width()!="0"){
		jQuery("#pagehtmlcontainer_drag .customcontentouter").animate({width:"0"},'fast',function(){
			jQuery(this).hide();
		});
		jQuery("#pagehtmlcontainer_drag .customcontent").css("opacity","1");
	}else{
		jQuery("#pagehtmlcontainer_drag .customcontentouter").show().animate({width:290},'fast');
		jQuery("#pagehtmlcontainer_drag .customcontent").css("opacity","0");
		
		//激活
		if(!jQuery("#pagehtmlcontainer_drag").hasClass("dragged")){
			jQuery("#pagehtmlcontainer_drag").addClass("dragged");
			isFirefox=(navigator.userAgent.toLowerCase().indexOf("firefox")!=-1)?true:false;
			jQuery( "#pagehtmlcontainer_drag .dragitem").draggable({
			        revert: "invalid", 
			        //appendTo: isFirefox?".content-wrapper":"body",
			        appendTo:"body",
			       // refreshPositions: true,
			        scroll: true,
			        classes: {
			            "ui-droppable-active": "ui-state-active",
			            "ui-droppable-hover": "ui-state-hover"
			          },
			        cursorAt: {top: 20, left: 16},
			        drag: function(event,ui){
			        	if(isFirefox){
			        		var st = parseInt($(this).data("startingScrollTop"));
			        		ui.position.top = ui.position.top - st;
			        	}
			         },
			        start: function(event, ui){
			        	jQuery(this).data("startingScrollTop",jQuery("html").scrollTop());
			        	jQuery("body").addClass("vc-sorting");
			        	var l = jQuery('.content-wrapper').offset().left;
			        	var t = jQuery('.content-wrapper').offset().top;
			        	var w =jQuery('.content-wrapper').width();
			        	var h = jQuery('.content-wrapper').height();
			        	jQuery("#pagehtmlcontainer_o_top").height(t).width("100%");
			        	jQuery("#pagehtmlcontainer_o_bottom").height(jQuery("body").height() - t-h).css("top",(t*1+h)+"px").width("100%");
			        	jQuery("#pagehtmlcontainer_o_left").height(h+2).width(l).css("top",t+"px");
			        	jQuery("#pagehtmlcontainer_o_right").height(h+2).css("left",(l*1+w)+"px").width(jQuery("body").width() - w-l).css("top",t+"px");
			        	jQuery("#pagehtmlcontainer_o_top,#pagehtmlcontainer_o_bottom,#pagehtmlcontainer_o_left,#pagehtmlcontainer_o_right").show();
			        },
			        stop: function(event, ui){
			        	jQuery("body").removeClass("vc-sorting");
			        	jQuery("#pagehtmlcontainer_o_top,#pagehtmlcontainer_o_bottom,#pagehtmlcontainer_o_left,#pagehtmlcontainer_o_right").hide();
			        },
			        placeholder: 'vc-placeholder-cy',
			        helper: 'clone',
			        iframeFix: true,
			        //connectToSortable:  iframeWin.jQuery('.content-wrapper'),
			        cursor: "move",
			});
		    if(isFirefox){
				jQuery("#pagehtmlcontainer_drag_contrainer .drag_inner_div").mCustomScrollbar({
					theme:"minimal-dark",
					autoHideScrollbar:true,
				});
		    }
		}
		
		var t = jQuery('.content-wrapper').offset().top;
		var st =jQuery('html').scrollTop();
    	if(st<t){
    		jQuery("html").animate({ scrollTop: t }, "slow");
    	}
    	if(top.jQuery("#pagehtmlcontainer").height()>0){
    		top.jQuery("#pagehtmlcontainer").animate({height:"0"});
    		top.jQuery("#pagehtmlshowtext > div").css("border-bottom","0");
    	}
    	
    	
	}
}
function editOnePage(){
	jQuery("#pagehtmlcontainer_drag .customcontentouter").animate({width:"0"},'fast',function(){
		jQuery(this).hide();
	});
	jQuery("#pagehtmlcontainer_drag .customcontent").css("opacity","1");
	top.jQuery(".page_settings").click();
}
function inner_cate(obj){
	var cates = jQuery(obj).attr("data-cates");
	jQuery("#pagehtmlcontainer_drag .innnerCat").removeClass("active");
	jQuery(obj).addClass("active");
	jQuery("#pagehtmlcontainer_drag .innnerContents .dragitem,#pagehtmlcontainer_drag .innnerContents .dragtitle").hide();
	jQuery("#pagehtmlcontainer_drag .innnerContents .dragitem[data-cates='"+cates+"'],#pagehtmlcontainer_drag .innnerContents .dragtitle[data-cates='"+cates+"']").show();
}
function customclose_fun(){
	if(jQuery("#pagehtmlcontainer_drag .customcontentouter").width()!="0"){
		jQuery("#pagehtmlcontainer_drag .customcontentouter").animate({width:"0"},'fast',function(){
			jQuery(this).hide();
		});
		jQuery("#pagehtmlcontainer_drag .customcontent").css("opacity","1");
		return;
	}
	if(jQuery("#pagehtmlcontainer_drag:visible").length>0){
		jQuery("#pagehtmlcontainer_drag").hide();
		jQuery(".pagehtmlcontainer_drag_close").show();
		top.setCookie("fullbarstatusnew","off",7); 
	}else{
		jQuery("#pagehtmlcontainer_drag").show();
		jQuery(".pagehtmlcontainer_drag_close").hide();
		top.setCookie("fullbarstatusnew","on",7);
	}
}

jQuery(window).on("scroll", function() {
	if( jQuery(".inline_editing").length==1 &&  jQuery(".fr-toolbar").length==1){
		var a = jQuery(".inline_editing").offset().top;
		var height =  jQuery(".inline_editing").height();
        if (a >= jQuery(window).scrollTop() && a < (jQuery(window).scrollTop()+jQuery(window).height())) {
        	var lasttop =jQuery(".fr-toolbar").attr("data-old-top");
        	if(lasttop){
        		jQuery(".fr-toolbar").css("top",lasttop);
        	}
        }else{
        	var lasttop =jQuery(".fr-toolbar").attr("data-old-top");
        	if(!lasttop){
        		var  lasttop = jQuery(".fr-toolbar").css("top");
        		jQuery(".fr-toolbar").attr("data-old-top",lasttop);
        	}
        	if( jQuery(window).scrollTop()< a+height ){
        		jQuery(".fr-toolbar").css("top",jQuery(window).scrollTop()+"px");
        	}
        }
	}
})

var vc_iframe = {
  scripts_to_wait: 0,
  time_to_call: false,
  ajax: false,
  activities_list: [],
  scripts_to_load: false,
  loaded_script: {},
  loaded_styles: {}
};
(function($) {
  vc_iframe.showNoContent = function(show) {
    (show === false && $('#vc-no-content-helper').addClass('vc-not-empty')) || $('#vc-no-content-helper').removeClass('vc-not-empty');
  };
  vc_iframe.scrollTo = function(id) {
    var $el, el_height, hidden = true, position_y,
        window_height = $(window).height(),
        window_scroll_top = $(window).scrollTop();
    if(id && ($el = $('[data-model-id=' + id +']'))) {
    	
      if($el.offset && typeof($el.offset) == 'function'){
    	  return;
      }
      
      position_y = $el.offset().top;
      el_height = $el.height();
      if((position_y > window_scroll_top + window_height) ||
        (position_y + el_height < window_scroll_top)) {
        $.scrollTo($el, 500, {offset:-50});
      }
    }
  };
  vc_iframe.startSorting = function() {
    $('body').addClass('vc-sorting');
  };
  vc_iframe.stopSorting = function() {
    $('body').removeClass('vc-sorting')
  };
  vc_iframe.initDroppable = function() {
    $('body').addClass('vc-dragging');
    $('.vc-container').bind('mouseenter.vcDraggable', function(){
      $(this).addClass('vc-catcher');
    }).bind('mouseout.vcDraggable', function(){
      $(this).removeClass('vc-catcher');
    });
  };
  vc_iframe.killDroppable = function() {
    $('body').removeClass('vc-dragging');
    $('.vc-container').unbind('mouseover.vcDraggable mouseleave.vcDraggable');
  };
  vc_iframe.addActivity = function(callback) {
    this.activities_list.push(callback);
  };
  vc_iframe.renderPlaceholder = function(event, element) {
    var tag = $(element).data('tag'),
      $helper = $('<div class="vc-helper vc-helper-' + tag + '"><i class="fa fa-reorder"></i>&nbsp;&nbsp;' + parent.vc.map[tag].name + '</div>').prependTo('body');
    return $helper;
  };
  vc_iframe.setSortable = function(app){
  	var $this = this;
    $('[data-tag=vc_row]').parent().on("initdrag",function(){
    	var $el = $(this);
    	if($el.hasClass("sortableInited")){
    		return;
		}

		$el.sortable({
			forcePlaceholderSize: false,
			scroll: true, scrollSensitivity: 30, scrollSpeed: 30,
			items: '[data-tag=vc_row]',
			handle: '.qfy-tooler .move_row',
			cursor: 'move',
			cursorAt: {top: 20, left: 16},
			placeholder: "vc-placeholder-row",
			helper: $this.renderPlaceholder,
			start: function(event, ui){
				vc_iframe.startSorting();
				ui.placeholder.height(30);
			},
			stop: $this.stopSorting,
			tolerance: "pointer",
			update: function(event, ui) {
				parent.vc.app.saveRowOrder(true);
				//setTimeout(function(){parent.vc.ShortcodesBuilder.save(true);},200);
			}
		});

		$el.addClass("sortableInited");
	});

	$('.vc-element-container').on("initdrag",function(){

		var $el = $(this);
		if($el.hasClass("sortableInited")){
			return;
		}

		$el.sortable({
			forcePlaceholderSize: true,
			helper: $this.renderPlaceholder,
			distance: 3,
			scroll: true,
			scrollSensitivity: 70,
			cursor: 'move',
			cursorAt: {top: 20, left: 16},
			connectWith:'.vc-element-container',
			items: '> [data-model-id]',
			handle: '.vc-element-move',
			start: $this.startSorting,
			update: function(event, ui){ parent.vc.app.saveElementOrder(event, ui);},
			change: function(event, ui) {
				ui.placeholder.height(30);
				ui.placeholder.width(ui.placeholder.parent().width());
			},
			placeholder: 'vc-placeholder',
			tolerance: "pointer",
			over:function (event, ui) {
				var tag = ui.item.data('tag'),
					vc_map = window.parent.vc.map || false,
					parent_tag = ui.placeholder.closest('[data-tag]').data('tag'),
					allowed_container_element = vc_map[parent_tag].allowed_container_element ? vc_map[parent_tag].allowed_container_element : true;
				ui.placeholder.removeClass('hidden-placeholder');
				ui.placeholder.css({maxWidth:ui.placeholder.parent().width()});
				if(tag && vc_map) {
					if (!window.parent.vc.checkRelevance(parent_tag, tag)) {
						ui.placeholder.addClass('hidden-placeholder');
					}
					if(ui.sender) {
						var $sender_column = ui.sender.closest('.vc-element').removeClass('vc-sorting-over');
						$sender_column.find('.vc-element').length < 1 && $sender_column.addClass('vc-empty');
					}
					ui.placeholder.closest('.vc-element').addClass('vc-sorting-over');
					if (vc_map[tag].is_container && !(allowed_container_element === true || allowed_container_element === tag.replace(/_inner$/, ''))) {
						ui.placeholder.addClass('hidden-placeholder');
					}
				}
			},
			out: function() {
				// $($this).closest('.vc-element').removeClass('vc-sorting-over');
			},
			stop:function (event, ui) {
				var tag = ui.item.data('tag'),
					vc_map = window.parent.vc.map || false
				parent_tag = ui.item.parents('[data-tag]:first').data('tag'),
					allowed_container_element = vc_map[parent_tag].allowed_container_element ? vc_map[parent_tag].allowed_container_element : true;
				if (!window.parent.vc.checkRelevance(parent_tag, tag)) {
					ui.placeholder.removeClass('hidden-placeholder');
					$($this).sortable('cancel');
				}
				//。。。not allowed
				if(tag=="vc_row_inner" && parent_tag=="vc_column_inner" ){
					ui.placeholder.removeClass('hidden-placeholder');
					$($this).sortable('cancel');
					top.jAlert("这个位置无法插入,你可以插入它的父级位置,在虚线上方位置！");
				}else	if((tag=="vc_row_inner" || tag=="vc_gallery"||tag=="vc_notice") && parent_tag=="vc_column_embad" ){

					if( tag=="vc_gallery" && ui.sender.closest('.royalSlider_gallery_new').length>0 &&ui.sender.closest('.royalSlider_gallery_new').attr('transitiontype')=="none" ){

					}else{
						ui.placeholder.removeClass('hidden-placeholder');
						$($this).sortable('cancel');
						top.jAlert("该组件无法插入到活动组件中去!");
					}
				}

				if (vc_map[tag].is_container && !(allowed_container_element === true || allowed_container_element === tag.replace(/_inner$/, ''))) { // && ui.item.hasClass('qfe_container_block')
					ui.placeholder.removeClass('hidden-placeholder');
					$($this).sortable('cancel');
				}
				vc_iframe.stopSorting();
				setTimeout(function(){parent.vc.ShortcodesBuilder.save(true);},200);
			}
		});


		$el.addClass("sortableInited");
	});

	$('.content-wrapper .qfe_row').on("initdrag",function(){
	  var $el = $(this);
	  if($el.hasClass("sortableInited")){
		  return;
	  }

	  $el.sortable({
		  forcePlaceholderSize: true,
		  tolerance: "pointer",
		  items: '> [data-tag=vc_column], > [data-tag=vc_column_inner]',
		  handle: '> .vc-controls .vc-move-vc_column',
		  start: function(event, ui) {
			  vc_iframe.startSorting();
			  var id = ui.item.data('modelId'),
				  model = parent.vc.shortcodes.get(id),
				  css_class = model.view.convertSize(model.getParam('width'));
			  // ui.item.removeClass(css_class).data('removedClass', css_class);
			  ui.item.appendTo(ui.item.parent().parent());
			  ui.placeholder.addClass(css_class);
			  ui.placeholder.width(ui.placeholder.width()-4);
		  },
		  cursor: 'move',
		  cursorAt: {top: 20, left: 16},
		  stop: function(event, ui){
			  // ui.item.addClass(ui.item.data('removedClass'));
			  vc_iframe.stopSorting(event, ui);
		  },
		  update: app.saveColumnOrder,
		  placeholder: 'vc-placeholder-column',
		  helper: $this.renderPlaceholder
	  });;

	  $el.addClass("sortableInited");
	});

	//test.................
	//.....................test
    //$('[data-tag=vc_row]').disableSelection();
   
    var qfydirection = "up";
    var oldy = 0;
    var sort_inited = false;
    jQuery(document).bind("mousemove", function (e) {
    	if(!sort_inited){
			$('[data-tag=vc_row]').parent().trigger("initdrag");
			$('.vc-element-container').trigger("initdrag");
			$('.content-wrapper .qfe_row').trigger("initdrag");
			sort_inited = true;
		}

        var activeElement = e.target || e.srcElement;
        if(jQuery(".vc-element.qfy-state-active").length>0){
        	var height = jQuery(".vc-element.qfy-state-active").height();
        	if(height>300){
        			var offset_top = jQuery(".vc-element.qfy-state-active").offset().top;
        			if(e.pageY>(offset_top+height/2) ){
        				jQuery(".vc-element.qfy-state-active .tmp-drag-state.up").remove();
	        			if(jQuery(".vc-element.qfy-state-active .tmp-drag-state.down").length==0){
	        				jQuery(".vc-element.qfy-state-active").append('<div class="tmp-drag-state down" style="background:#3899ec;height:20px;line-height:20px;width:100%;color:#fff;text-align:center;font-size:12px;"><i  class="fa fa-plus" style="display:inline-block;"></i></div>');
	        			}
        			}else{
        				jQuery(".vc-element.qfy-state-active .tmp-drag-state.down").remove();
	        			if(jQuery(".vc-element.qfy-state-active .tmp-drag-state.up").length==0){
	        				jQuery(".vc-element.qfy-state-active").prepend('<div class="tmp-drag-state up" style="background:#3899ec;height:20px;line-height:20px;width:100%;color:#fff;text-align:center;font-size:12px;"><i  class="fa fa-plus" style="display:inline-block;"></i></div>');
	        			}
        			}
        	}else{
			        if (e.pageY > oldy) {
			        	qfydirection = "down";
			        	if(jQuery("body.vc-sorting").length>0){
			        		
			        		if(jQuery(".vc-element.qfy-state-active .tmp-drag-state.up:not(.doing)").length>0){
			        			jQuery(".vc-element.qfy-state-active .tmp-drag-state.up").remove();
			        			if(jQuery(".vc-element.qfy-state-active .tmp-drag-state.down").length==0){
			        				jQuery(".vc-element.qfy-state-active").append('<div class="tmp-drag-state down" style="background:#3899ec;height:20px;line-height:20px;width:100%;color:#fff;text-align:center;font-size:12px;"><i  class="fa fa-plus" style="display:inline-block;"></i></div>');
			        			}
			        		}
			        	}
			        } else if (e.pageY < oldy) {
			        	qfydirection = "up";
			        	if(jQuery("body.vc-sorting").length>0){
			        		if(jQuery(".vc-element.qfy-state-active .tmp-drag-state.down:not(.doing)").length>0){
			        			jQuery(".vc-element.qfy-state-active .tmp-drag-state.down").remove();
			        			if(jQuery(".vc-element.qfy-state-active .tmp-drag-state.up").length==0){
			        				jQuery(".vc-element.qfy-state-active").prepend('<div class="tmp-drag-state up" style="background:#3899ec;height:20px;line-height:20px;width:100%;color:#fff;text-align:center;font-size:12px;"><i  class="fa fa-plus" style="display:inline-block;"></i></div>');
			        			}
			        		}
			        	}
			        }
			        oldy = e.pageY;
        	}
		}
    });

    function get_vc_default_content(tag,action,obj,helper){
    	if((tag=="slidercontent"||tag=="accordioncontent"||tag=="tabcontent" )&& (obj.closest(".vc-vc_row_inner,.vc-slidercontent,.vc-accordioncontent,.vc-tabcontent").length>0)){
    		top.jAlert("无法插入到该活动组件中去");
    		return "";
    	} else   if((tag=="vc_gallery" )&& (obj.closest(".vc-slidercontent,.vc-accordioncontent").length>0)){
    		top.jAlert("无法插入到该活动组件中去");
    		return "";
		} else   if((tag=="vc_gallery" )&& (obj.closest(".vc-tabcontent").length>0 && obj.closest(".royalSlider_gallery_new").attr("transitiontype")!="none" )){
    		top.jAlert("无法插入到该活动组件中去");
    		return "";
    	} else   if((tag=="vc_column_text_notice3" )&& (obj.closest(".vc-slidercontent,.vc-accordioncontent,.vc-tabcontent").length>0)){
    		top.jAlert("无法插入到该活动组件中去");
    		return "";
    	}
    	
    	 var real_v = "";
    	 if(tag=="vc_column_text_block_1"){
 			  real_v = '[vc_column_text d_t="1" css_animation="" css_animation_delay="0" css_animation_time="0.7" css_animation_length="0" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" background_position_type="left top" background_position_vertical="0" bordercorner="0" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_fontcolor="" hover_linkcolor="" hover_iconcolor="" css_hoveranimation="" hover_anim="0" hover_time="0.5s" maxwidth="0" minheight="0" mobilefontsize="" margintop="0" marginbottom="0" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" qfyuuid="qfy_column_text_8iumv"]<div style="position: relative;font-size:14px;">您可以双击编辑按钮来修改内容。<br><br></div>[/vc_column_text]';
    	 }else if(tag=="vc_column_text_image_1"){
    		 real_v = '[vc_single_image d_t="1" image="" bg_image_repeat="no-repeat" background_position_type="0" background_position_vertical="0" css_animation="" css_animation_delay="0" css_animation_time="0.7" css_animation_length="0" img_size="medium" img_size_fun="0" alignment="center" style="" foil_color="#333" foil_position="" foil_padding="20" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" imagehoverstyle="" imagehoverimage_time="" img_link_large="" img_mobile_open="" img_link_target="_self" is_delay_image="" svg_fill="" svg_stroke="" svg_fill_hover="" svg_stroke_hover="" box_border="0" bordercorner="0" imagefilter_val_blur="0" imagefilter_val_brightness="0" imagefilter_val_contrast="0" imagefilter_val_grayscale="0" imagefilter_val_opacity="0" imagefilter_val_saturate="0" imagefilter_val_sepia="0" margintop="0" marginbottom="0" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" image_textbg_show="0" image_textbg_content="0" image_textbg_showstyle="" image_textbg_showanimal="" image_textbg_textcolor="#fff" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_align="" image_textbg_bgmiddle="0" image_text_marginbottom="0" image_desc_marginbottom="0" image_textbg_padding="10px 10px 10px 10px" image_textbg_textfontfaimly="" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo.jpg"]';
    	 }else if(tag=="vc_column_text_header_1"){
    		 real_v = '[vc_header d_t="1" title_from="" title_tag="H2" title_font="" title_fontsize="24" title_mobilefontsize="16" title_weight="1" title_italic="" title_align="center" title_mobilealign="mobilecenter" title_color="#000" subtitle_display="" subtitle_tag="H3" subtitle_font="" subtitle_fontsize="16" subtitle_mobilefontsize="12" subtitle_weight="1" subtitle_italic="" subtitle_color="#000" title_valign="bottom" titleline_show="0" titleline_style="solid" titleline_align="" titleline_align_h="center" titleline_include_image="0" titleline_position="20" titleline_positiontb="0" titleline_width="100" titleline_size="2" titleline_color_type="" titleline_color="#000" titleline_shadow="1" titleline_shadowcolor="#dddddd" titleline_shadowcolorsize="1" titleline_level2_width="50%" titleline_level2_height="" titleline_level2_color="#000" titleline_level2_margin="" widget_display="" widget_vlign="middle" widget_type="" widget_icon="glyphicon glyphicon-icon-chevron-right" widget_icon_color="" widget_icon_hover_color="" widget_icon_size="" widget_area_width="" widget_area_height="" widget_icon_h="" widget_icon_v="" widget_image="" widget_img_size="medium" widget_img_width="" widget_padding="" widget_bg_color="" widget_bg_hover_color="" widget_border="" widget_border_color="" widget_border_hover_color="" widget_border_radio="" svg_fill="" svg_stroke="" svg_fill_hover="" svg_stroke_hover="" btn_show_position="" btn_content_type="" btn_content_text="+ 查看更多" btn_content_icon="fa fa-right" btn_size_type="0" btn_title_width="" btn_title_height="" btn_title_family="" btn_title_size="14" btn_title_fontweight="" btn_custom_textcolor="#333" btn_custom_background="" btn_custom_border="0" btn_custom_border_color="" btn_title_padding="5px" btn_right_distance="5" btn_top_distance="" btn_custom_border_corner="0" btn_hoverchangecolor="0" btn_custom_hover_background="#fff" btn_custom_hover_text="#333" title_hover_fontweight="" btn_custom_hover_border_size="" btn_custom_hover_border_color="" content_area_width_mode="1" content_area_width="" content_padding="" title_padding="" subtitle_padding="" whole_border_color="" bg_color="" whole_border="" content_border_color="" content_area_bgcolor="" content_border="" title_border_color="" title_area_bgcolor="" title_border="" bg_image_repeat="no-repeat" background_position_type="0" background_position_vertical="0" link_target="_self" css_animation="" css_animation_delay="0" css_animation_time="0.7" css_animation_length="0" hover_animation="0" hover_title_color="" hover_subtitle_color="" hover_titleline_width="" hover_titleline_level2_width="" hover_animation_btn="0" maxwidth="0" minheight="0" margintop="0" marginbottom="0" paddingtop="20" paddingbottom="20" paddingleft="0" paddingright="0" display_device="0"]';
    	 }else if(tag=="vc_column_custom_text"){
    		 real_v = ' [vc_column_custom_text d_t="1"]&nbsp;[/vc_column_custom_text]';
    	 }else if(tag=="vc_column_text_notice3"){
    		 real_v = '[vc_notice d_t="1" type="0" optcolor="#000" opt="0.7" align="0" width="600" height="400" mobilewidth="280" mobileheight="250" screenpadding="20" animale="0" animale_time="1" showtimes="3" event="0" device="0" event_delay="0" closetime="0" contenttype="0" bgcolor="#ffffff" bordercolor="transparent" borderwidth="0" shadowwidth="0" shadowcolor="#ccc" radius="0" header_show="0" header_bgcolor="#333333" header_bordercolor="#333333" header_borderwidth="0" header_title="标题" header_color="#fff" header_size="16" header_padding="10px 0px 10px 10px" footer_show="0" footer_bgcolor="#eaeaea" footer_bordercolor="#cccccc" footer_borderwidth="1px 0px 0px 0px" footer_padding="10" btn1_align="right" allow_close="0" closetype="0" closeicon="4" btn_color="#dbdbdb" btn_hovercolor="#ffffff" btn_align="0" btn_position="10" btn_position_x="-10" btn_size="15" btn_padding="5" allow_forceclose="0" btn1_text="确认" btn1_color="#fff" btn1_hovercolor="#fff" btn1_bgcolor="#555555" btn1_bghovercolor="#333333" btn1_marginleft="0" btn1_size="14" btn1_padding="5px 10px 5px 10px" btn1_forceclose="0" btn2_text="取消" btn2_color="#444" btn2_hovercolor="#555555" btn2_bgcolor="#c4c4c4" btn2_bghovercolor="#b7b7b7" btn2_marginleft="10" btn2_size="14" btn2_padding="5px 10px 5px 10px" btn2_forceclose="1" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" btn2_warninfo="不能取消，只能接受" ]<div style="padding:20px;text-align:center;">这是一个弹框通知！</div>[/vc_notice]';
		 }else if(tag =="vc_column_text_dy_user" || tag =="vc_column_text_dy_ulist"){
			 real_v = parent._get_shortcode_default_content(tag);
    	 }else if(tag.indexOf("vc_column_text_viewtemplate_")>-1){
    		    var template_content = "";
    		    if(tag=="vc_column_text_viewtemplate_1"){
    				template_content = '[vc_column_text_header d_t="l" subtitle_tag="H3" subtitle_fontsize="16" subtitle_mobilefontsize="12" subtitle_weight="1" title_tag="H2" title_font="" title_fontsize="24" title_mobilefontsize="16" title_weight="1" title_italic="" title_align="center" title_mobilealign="mobilecenter" title_color="#000" titleline_show="0" titleline_style="solid" titleline_align="" titleline_position="20" titleline_positiontb="20" titleline_width="100" titleline_size="2" titleline_color_type="" titleline_color="#000" titleline_shadow="1" titleline_shadowcolor="#dddddd" titleline_shadowcolorsize="1" bg_image_repeat="no-repeat" background_position_type="0" background_position_vertical="0" link_target="_self" css_animation="" css_animation_delay="0" css_animation_time="0.7" css_animation_length="0" maxwidth="0" minheight="0" margintop="20" marginbottom="20" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" ]&nbsp;[/vc_column_text_header]';
    			}else if(tag=="vc_column_text_viewtemplate_16"){
    				template_content = '[vc_column_text_header d_t="l" title_tag="H3" source="subtitle" title_font="" title_fontsize="16" title_mobilefontsize="12" title_weight="1" title_italic="" title_align="center" title_mobilealign="mobilecenter" title_color="#000" titleline_show="0" titleline_style="solid" titleline_align="" titleline_position="20" titleline_positiontb="20" titleline_width="100" titleline_size="2" titleline_color_type="" titleline_color="#000" titleline_shadow="1" titleline_shadowcolor="#dddddd" titleline_shadowcolorsize="1" bg_image_repeat="no-repeat" background_position_type="0" background_position_vertical="0" link_target="_self" css_animation="" css_animation_delay="0" css_animation_time="0.7" css_animation_length="0" maxwidth="0" minheight="0" margintop="20" marginbottom="20" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" ]&nbsp;[/vc_column_text_header]';
    			}else if(tag=="vc_column_text_viewtemplate_2"){
    				template_content = '[vc_column_text_view content_font="normal normal 14px/px |" customcontent="post_excerpt" customprecontent="" d_t="1" css_animation="" css_animation_delay="0" css_animation_time="0.7" css_animation_length="0" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" background_position_type="left top" background_position_vertical="0" bordercorner="0" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_fontcolor="" hover_linkcolor="" hover_iconcolor="" css_hoveranimation="" hover_anim="0" hover_time="0.5s" maxwidth="0" minheight="0" mobilefontsize="" margintop="0" marginbottom="0" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" ]&nbsp;[/vc_column_text_view]';
    			}else if(tag=="vc_column_text_viewtemplate_3"){
    				template_content = '[vc_column_text_view content_font="normal normal 14px/px |" customcontent="post_author" customprecontent="作者：" d_t="1" css_animation="" css_animation_delay="0" css_animation_time="0.7" css_animation_length="0" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" background_position_type="left top" background_position_vertical="0" bordercorner="0" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_fontcolor="" hover_linkcolor="" hover_iconcolor="" css_hoveranimation="" hover_anim="0" hover_time="0.5s" maxwidth="0" minheight="0" mobilefontsize="" margintop="0" marginbottom="0" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" ]&nbsp;[/vc_column_text_view]';
    			}else if(tag=="vc_column_text_viewtemplate_4"){
    				template_content = '[vc_column_text_view content_font="normal normal 14px/px |" customcontent="post_visit" customprecontent="浏览次数：" d_t="1" css_animation="" css_animation_delay="0" css_animation_time="0.7" css_animation_length="0" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" background_position_type="left top" background_position_vertical="0" bordercorner="0" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_fontcolor="" hover_linkcolor="" hover_iconcolor="" css_hoveranimation="" hover_anim="0" hover_time="0.5s" maxwidth="0" minheight="0" mobilefontsize="" margintop="0" marginbottom="0" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" ]&nbsp;[/vc_column_text_view]';
    			}else if(tag=="vc_column_text_viewtemplate_5"){
    				template_content = '[vc_column_text_viewgroup content_font="normal normal 14px/px |" customcontent="post_category" customprecontent="分类：" customcontent_split=" " d_t="1" css_animation="" css_animation_delay="0" css_animation_time="0.7" css_animation_length="0" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" background_position_type="left top" background_position_vertical="0" bordercorner="0" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_fontcolor="" hover_linkcolor="" hover_iconcolor="" css_hoveranimation="" hover_anim="0" hover_time="0.5s" maxwidth="0" minheight="0" mobilefontsize="" margintop="0" marginbottom="0" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" ]&nbsp;[/vc_column_text_viewgroup]';
    			}else if(tag=="vc_column_text_viewtemplate_6"){
    				template_content = '[vc_column_text_view content_font="normal normal 14px/px |" customcontent="post_content" d_t="1" css_animation="" css_animation_delay="0" css_animation_time="0.7" css_animation_length="0" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" background_position_type="left top" background_position_vertical="0" bordercorner="0" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_fontcolor="" hover_linkcolor="" hover_iconcolor="" css_hoveranimation="" hover_anim="0" hover_time="0.5s" maxwidth="0" minheight="0" mobilefontsize="" margintop="0" marginbottom="0" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" ]&nbsp;[/vc_column_text_view]';
    			}else if(tag=="vc_column_text_viewtemplate_7"){
    				template_content = '[vc_column_text_image d_t="1" bg_image_repeat="no-repeat" background_position_type="0" background_position_vertical="0" css_animation="" css_animation_delay="0" css_animation_time="0.7" css_animation_length="0" img_size="300x300" img_size_fun="0" alignment="center" style="" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" imagehoverstyle="" imagehoverimage_time="" img_link_large="" img_mobile_open="" img_link_target="_self" is_delay_image="" margintop="0" marginbottom="0" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" image_textbg_show="0" image_textbg_content="0" image_textbg_align="" image_textbg_showstyle="" image_textbg_showanimal="" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_bgmiddle="0" image_textbg_padding="10px 10px 10px 10px" image_text_marginbottom="0" image_desc_marginbottom="0" image_textbg_textcolor="#fff" image_textbg_textfontfaimly="" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="//fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/placeholder.jpg" ]';
    			}else if(tag=="vc_column_text_viewtemplate_8"){
    				template_content = '[vc_column_text_images d_t="1" image_all_name="" liblayout="masonry" liblayout_algin="0" img_size="400x400" images_per_line="4" images_per_line_sm="1" img_crop="0" onclick="link_image" custom_links_target="_self" liblayoutright="10" liblayoutbottom="10" css_animation="" css_animation_delay="0" css_animation_time="0.7" css_animation_length="0" image_style="" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" imagehoverstyle="" images_name_color="#333" images_name_font="16" image_name_bottom="20" image_name_left="0" image_name_distance="0" btncat_align="" margintop="0" marginbottom="0" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" image_textbg_show="0" image_textbg_content="0" image_textbg_align="" image_textbg_showstyle="" image_textbg_showanimal="" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_bgmiddle="0" image_textbg_padding="10px 10px 10px 10px" image_text_marginbottom="0" image_desc_marginbottom="0" image_textbg_textcolor="#fff" image_textbg_textfontfaimly="" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" ]';
    			}else if(tag=="vc_column_text_viewtemplate_9"){
    				template_content = '[vc_column_text_sliders d_t="1"  gallery_mode="2" img_size="300x300" img_size_fun="0" new_imagescalemode="fit-if-smaller" new_slidesorientation="horizontal" new_height="400" new_mobileheight="" loop="true" new_controlnavigation="bullets" new_controlnavigation_align="0" new_thumbnails_orientation="horizontal" new_thumbnails_size="96x72" new_visiblenearby="false" new_arrowsnavautohide="true" new_showfullscreen="false" new_bgcolor="transparent" new_fullbgcolor="#151515" new_buttoncolor="#151515" type="flexslider_slide" images_per_line="2" slides_per_view_row="1" itemmarginleft="15" itemmarginbottom="15" interval="30" show_direction="1" direction_color="" show_bottom_nav="0" bordershadownoshow="" imageshowoption="1" imagehoverstyle="" grid_thumb_style="" grid_thumb_border_color="#cccccc" grid_thumb_shadow_color="#cccccc" grid_thumb_shadow_style="0" grid_thumb_shadow_size="1" grid_thumb_rounded_size="4" onclick="link_no" custom_links_target="_self" el_other="" margintop="0" marginbottom="0" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" image_textbg_show="0" image_textbg_content="0" image_textbg_align="" image_textbg_showstyle="" image_textbg_showanimal="" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_bgmiddle="0" image_textbg_padding="10px 10px 10px 10px" image_text_marginbottom="0" image_desc_marginbottom="0" image_textbg_textcolor="#fff" image_textbg_textfontfaimly="" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16"]';
    			}else if(tag=="vc_column_text_viewtemplate_10"){
    				template_content = '[vc_column_text_view content_font="normal normal 14px/px |"  customcontent="post_date" customprecontent="发布日期：" customcontent_date="Y-m-d H:i"  d_t="1" css_animation="" css_animation_delay="0" css_animation_time="0.7" css_animation_length="0" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" background_position_type="left top" background_position_vertical="0" bordercorner="0" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_fontcolor="" hover_linkcolor="" hover_iconcolor="" css_hoveranimation="" hover_anim="0" hover_time="0.5s" maxwidth="0" minheight="0" mobilefontsize="" margintop="0" marginbottom="0" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" ]&nbsp;[/vc_column_text_view]';
    			}else if(tag=="vc_column_text_viewtemplate_11"){
    				template_content = '[vc_column_text_productpage allowed=false id=""  content_type="title,rating,price,excerpt,cart,meta" ]';
    			}else if(tag=="vc_column_text_viewtemplate_12"){
    				template_content = '[vc_column_text_productcommnet ]';
    			}else if(tag=="vc_column_text_viewtemplate_13"){
    				template_content = '[vc_column_text_productinfo ]';
    			}else if(tag=="vc_column_text_viewtemplate_14"){
    				template_content = '[vc_column_text_productlikes  id="list_id" display_type="products" per_page="24" columns="4" mobile_columns="2" searchit="0" orderby="date" order="ASC" support_order="" content_type="image,title,price,rating" cate_type="image,title,num" align="" title_font_size="" price_font_size="" img_size="300x300" ids="" imagehoverstyle="" imagebgstyle="" imageshowstyle="" td_bl="35" td_left_align="left" td_right_align="left" td_right_padding="0 0 0 5px" slides_per_view_row="1 " autoplay="yes" speed="5000" hide_prev_next_buttons="" wrap="yes" margintop="0" marginbottom="0" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" right="15" bottom="15" grid_pagenav_show="1" grid_pagenav_model="" grid_pagenav_model_text="查看更多" grid_pagenav_model_loadingtext="加载中" grid_pagenav_paddingleft="6" grid_pagenav_paddingtop="2" grid_pagenav_position="靠左" grid_pagenav_style="1" grid_pagenav_bgcolor="#cccccc" grid_pagenav_color="#333" grid_pagenav_hcolor="#fff" grid_pagenav_font="16" grid_pagenav_postion_left="0" grid_pagenav_postion_top="0" ]';
    			}else if(tag=="vc_column_text_viewtemplate_15"){
    				template_content = '[vc_column_text_productrelats  id="list_id" display_type="products" per_page="24" columns="4" mobile_columns="2" searchit="0" orderby="date" order="ASC" support_order="" content_type="image,title,price,rating" cate_type="image,title,num" align="" title_font_size="" price_font_size="" img_size="300x300" ids="" imagehoverstyle="" imagebgstyle="" imageshowstyle="" td_bl="35" td_left_align="left" td_right_align="left" td_right_padding="0 0 0 5px" slides_per_view_row="1 " autoplay="yes" speed="5000" hide_prev_next_buttons="" wrap="yes" margintop="0" marginbottom="0" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" right="15" bottom="15" grid_pagenav_show="1" grid_pagenav_model="" grid_pagenav_model_text="查看更多" grid_pagenav_model_loadingtext="加载中" grid_pagenav_paddingleft="6" grid_pagenav_paddingtop="2" grid_pagenav_position="靠左" grid_pagenav_style="1" grid_pagenav_bgcolor="#cccccc" grid_pagenav_color="#333" grid_pagenav_hcolor="#fff" grid_pagenav_font="16" grid_pagenav_postion_left="0" grid_pagenav_postion_top="0" ]';
    			}else if(tag=="vc_column_text_viewtemplate_18"){
    				template_content = '[vc_column_text_video d_t="1"  video_type=""  video_fullscreen="false" video_auto="false" ispopup="0" video_theme="maccaco" video_poster="" video_bgcolor="#fff" video_height="300" el_class="" margintop="0" marginbottom="0" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" isbgcover="1" video_fullfill="true"]';
    			}else if(tag.indexOf("vc_column_text_viewtemplate_")>-1){
    				var slug = helper.attr("data-slug");
    				var slugtype = helper.attr("data-slugtype");
    				var name = jQuery.trim(helper.text());
    				if(slugtype=="file"){
    					template_content = '[vc_column_text_image customprecontent_slug="'+slug+'"  customprecontent_default="'+name+'" d_t="1" bg_image_repeat="no-repeat" background_position_type="0" background_position_vertical="0" css_animation="" css_animation_delay="0" css_animation_time="0.7" css_animation_length="0" img_size="300x300" img_size_fun="0" alignment="center" style="" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" imagehoverstyle="" imagehoverimage_time="" img_link_large="" img_mobile_open="" img_link_target="_self" is_delay_image="" margintop="0" marginbottom="0" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" image_textbg_show="0" image_textbg_content="0" image_textbg_align="" image_textbg_showstyle="" image_textbg_showanimal="" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_bgmiddle="0" image_textbg_padding="10px 10px 10px 10px" image_text_marginbottom="0" image_desc_marginbottom="0" image_textbg_textcolor="#fff" image_textbg_textfontfaimly="" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="//fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/placeholder.jpg" ]';
    				}else if(slugtype=="files"){
    					template_content = '[vc_column_text_images customprecontent_slug="'+slug+'"  customprecontent_default="'+name+'" d_t="1" image_all_name="" liblayout="masonry" liblayout_algin="0" img_size="400x400" images_per_line="4" images_per_line_sm="1" img_crop="0" onclick="link_image" custom_links_target="_self" liblayoutright="10" liblayoutbottom="10" css_animation="" css_animation_delay="0" css_animation_time="0.7" css_animation_length="0" image_style="" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" imagehoverstyle="" images_name_color="#333" images_name_font="16" image_name_bottom="20" image_name_left="0" image_name_distance="0" btncat_align="" margintop="0" marginbottom="0" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" image_textbg_show="0" image_textbg_content="0" image_textbg_align="" image_textbg_showstyle="" image_textbg_showanimal="" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_bgmiddle="0" image_textbg_padding="10px 10px 10px 10px" image_text_marginbottom="0" image_desc_marginbottom="0" image_textbg_textcolor="#fff" image_textbg_textfontfaimly="" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" ]';
    				}else if(slugtype=="gallerys"){
    					template_content = '[vc_column_text_sliders customprecontent_slug="'+slug+'"  customprecontent_default="'+name+'"  d_t="1"  gallery_mode="2" img_size="300x300" img_size_fun="0" new_imagescalemode="fit-if-smaller" new_slidesorientation="horizontal" new_height="400" new_mobileheight="" loop="true" new_controlnavigation="bullets" new_controlnavigation_align="0" new_thumbnails_orientation="horizontal" new_thumbnails_size="96x72" new_visiblenearby="false" new_arrowsnavautohide="true" new_showfullscreen="false" new_bgcolor="transparent" new_fullbgcolor="#151515" new_buttoncolor="#151515" type="flexslider_slide" images_per_line="2" slides_per_view_row="1" itemmarginleft="15" itemmarginbottom="15" interval="30" show_direction="1" direction_color="" show_bottom_nav="0" bordershadownoshow="" imageshowoption="1" imagehoverstyle="" grid_thumb_style="" grid_thumb_border_color="#cccccc" grid_thumb_shadow_color="#cccccc" grid_thumb_shadow_style="0" grid_thumb_shadow_size="1" grid_thumb_rounded_size="4" onclick="link_no" custom_links_target="_self" el_other="" margintop="0" marginbottom="0" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" image_textbg_show="0" image_textbg_content="0" image_textbg_align="" image_textbg_showstyle="" image_textbg_showanimal="" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_bgmiddle="0" image_textbg_padding="10px 10px 10px 10px" image_text_marginbottom="0" image_desc_marginbottom="0" image_textbg_textcolor="#fff" image_textbg_textfontfaimly="" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16"]';
    				}else if(slugtype=="date"){
    					template_content = '[vc_column_text_view customcontent="custom_date" customprecontent_slug="'+slug+'" customprecontent_slugtype="'+slugtype+'" customprecontent="'+name+':" customprecontent_default="'+name+'"  content_font="normal normal 14px/px |" d_t="1" css_animation="" css_animation_delay="0" css_animation_time="0.7" css_animation_length="0" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" background_position_type="left top" background_position_vertical="0" bordercorner="0" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_fontcolor="" hover_linkcolor="" hover_iconcolor="" css_hoveranimation="" hover_anim="0" hover_time="0.5s" maxwidth="0" minheight="0" mobilefontsize="" margintop="0" marginbottom="0" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" ]&nbsp;[/vc_column_text_view]';
    				}else if(slugtype=="productlink"){
    					template_content = '[vc_column_text_button customprecontent_slug="'+slug+'" title="链接按钮" title_family="" style="qfy-custom" custom_background="#555" custom_text="#fff" custom_border="#555" outline_custom_color="#666" outline_custom_hover_background="#464646" outline_custom_hover_text="#fff" custom_hover_border="#464646" custom_border_size="2" shape="square" color="grey" size="sm" align="center" mobilealign="" button_block="false" add_icon="" i_align="left" i_type="fontawesome" i_icon_fontawesome="fa fa-adjust" i_icon_pixelicons="vc_pixel_icon vc_pixel_icon-alert" link_target="_self" css_animation="" css_animation_delay="0" css_animation_time="0.7" css_animation_length="0" title_fontweight="" margintop="0" marginbottom="0" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" el_file1="" el_file4="" el_file2="" el_file3="" ]';
    				}else if(slugtype=="productmap"){
    					template_content = '[vc_column_text_map d_t="1" customprecontent_slug="'+slug+'" bit_qqmaps_type="3" g_address="江苏苏州工业园区金鸡湖大道1355" g_zoom="6" g_language="zh-cn" size="" mobilesize="" margintop="0" marginbottom="0" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" ]';
    				}else if(slugtype=="productvideo"){
    					template_content = '[vc_column_text_video d_t="1" customprecontent_slug="'+slug+'" video_type=""  video_fullscreen="false" video_auto="false" ispopup="0" video_theme="maccaco" video_poster="" video_bgcolor="#fff" video_height="300" el_class="" margintop="0" marginbottom="0" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" isbgcover="1" video_fullfill="true"]';
    				}else if(slugtype=="cloud_video"){
    					template_content = '[vc_column_text_yun_video d_t="1" customprecontent_slug="'+slug+'" d_t="1" isafterload="1" autoplay="false" replay="0" controlbarvisibility="hover" ispopup="0" pop_width="550" pop_height="350" box_border="0" volume="50" video_poster="" bg_image_repeat="cover" background_position_type="left top" background_position_vertical="0" background_position_level="0" video_height="300" mobile_video_height="" video_width="533" mobile_video_width="" el_class=""]&nbsp;[/vc_column_text_yun_video]';
    				}else if(slugtype=="extra_video"){
    					template_content = '[vc_column_text_video d_t="1" customprecontent_slug="'+slug+'" video_type="1" extra_video="1" video_fullscreen="false" video_auto="false" ispopup="0" video_theme="maccaco" video_poster="" video_bgcolor="#fff" video_height="300" el_class="" margintop="0" marginbottom="0" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" isbgcover="1" video_fullfill="true"]';
    				}else{
    					template_content = '[vc_column_text_view customcontent="custom" customprecontent_slug="'+slug+'" customprecontent_slugtype="'+slugtype+'" customprecontent="'+name+':" customprecontent_default="'+name+'"  content_font="normal normal 14px/px |" d_t="1" css_animation="" css_animation_delay="0" css_animation_time="0.7" css_animation_length="0" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" background_position_type="left top" background_position_vertical="0" bordercorner="0" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_fontcolor="" hover_linkcolor="" hover_iconcolor="" css_hoveranimation="" hover_anim="0" hover_time="0.5s" maxwidth="0" minheight="0" mobilefontsize="" margintop="0" marginbottom="0" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" ]&nbsp;[/vc_column_text_view]';
    				}
    			}
    		    real_v = template_content;
    		   
    	 }else {
    		 
    		 if(tag=="vc_column_text_user_1" || tag=="vc_column_text_user_2" || tag=="vc_column_text_user_3" || tag=="vc_column_text_user_4" || tag=="vc_column_text_user_5"){
    			 var defaults = parent.vc.getDefaults("qfyuser");
	    	     if(tag=="vc_column_text_user_1"){
	    	    	 defaults.template = "login";
	    	     }else if(tag=="vc_column_text_user_2"){
	    	    	 defaults.template = "register";
	    	     }else if(tag=="vc_column_text_user_3"){
	    	    	 defaults.template = "edit";
	    	     }else if(tag=="vc_column_text_user_4"){
	    	    	 defaults.template = "view";
	    	     }else if(tag=="vc_column_text_user_5"){
	    	    	 defaults.template = "sub_role";
	    	     }
	    	     tag = "qfyuser";
    		 }else if(tag=="vc_column_text_shop_1"){
    			 var defaults = parent.vc.getDefaults("product_page");
    			 tag = "product_page";
    		 }else if(tag=="vc_column_text_shop_2"){
    			 var defaults = parent.vc.getDefaults("products_list");
    			 tag = "products_list";
    		 }else if(tag=="vc_column_text_shop_3"){
    			 var defaults = parent.vc.getDefaults("add_to_cart");
    			 tag = "add_to_cart";
    		 }else if(tag=="vc_column_text_shop_4"){
    			 var defaults = parent.vc.getDefaults("product_coupon");
    			 tag = "product_coupon";
    		 }else{
    			 var defaults = parent.vc.getDefaults(tag);
    		 }
    		
    		 var default_content = "";
    		 if(tag=="vc_jsscroll_text"){
    			 default_content = defaults.content;
    		 }
    		 real_v = parent.wp.shortcode.string({tag: tag,attrs: defaults,content:default_content,type:''})
    	 }
    	
    	
    	 if(action=="row"){
    		 real_v = '[vc_row id="bit_'+parent.vc.ShortcodesBuilder.randomString()+'" rowmaxwidth="1280" paddingtop="20" ][vc_column width="1/1"]'+real_v+'[/vc_column][/vc_row]';
    	 }else  if(action=="vc_row_embad"){
    		 real_v = '[vc_row_embad  ][vc_column_embad width="1/1"]'+real_v+'[/vc_column_embad][/vc_row_embad]';
    	 }

    	 return real_v;
    }
    jQuery(".content-wrapper>.vc-element").droppable({
        accept: ".dragitem.coll",
        over: function( event, ui ) { 	
            jQuery(this).addClass("qfy-state-active").prepend('<div class="tmp-drag-state up" style="background:#3899ec;height:20px;line-height:20px;width:100%;color:#fff;text-align:center;font-size:12px;padding:5px;"><i  class="fa fa-plus" style="display:inline-block;"></i></div>');

        },
        out: function( event, ui ) {
        	jQuery(this).removeClass("qfy-state-active").find('.tmp-drag-state').remove();
        },
        drop: function( event, ui ) {
        	var dragstate =  jQuery(this).find('.tmp-drag-state:first');
        	dragstate.addClass("doing");
        	var helper = ui.helper;
       	    var tag = helper.attr("data-tag");
       	    var curr = jQuery(this);
        	 if(tag.indexOf("vc_column_text_column_blank")>-1){
        		 dragstate.html('<span class="fa fa-spinner fa-spin fa-3x fa-fw" style="font-size:12px;"></span>创建中...');
        	 }else{
        		 dragstate.html('<span class="fa fa-spinner fa-spin fa-3x fa-fw" style="font-size:12px;"></span>加载远程资源中...');
        	 }
        	 
	  		  parent.vc.group = true;
	  		  if(dragstate.hasClass("up")){
		  		  parent.vc.activity = 'prepend';
		  		  if(jQuery(this).prev().hasClass("vc-element")){
		  			  jQuery(this).prev().addClass('vc-place-after');
		  		  }
	  		  }else{
	  			 jQuery(this).addClass('vc-place-after');
	  		  }
	  		 if(tag.indexOf("vc_column_text_column_blank")>-1){
	  			 if(tag=="vc_column_text_column_blank_1"){
	  				 var full = "yes";
	  			 }else{
	  				 var full = "no";
	  			 }
				 $atts = '';
				 if(tag=="vc_column_text_column_blank_special"){
					$atts = 'minheight="600" mobile_minheight="600" special="1"';
				 }
	  			 var real_v = '[vc_row id="bit_'+parent.vc.ShortcodesBuilder.randomString()+'" rowmaxwidth="1280" paddingtop="20" full="'+full+'" '+$atts+'][vc_column width="1/1"][/vc_column][/vc_row]';
	  			  parent.create_VC_fromString(real_v,false);
	  			  parent.vc.ShortcodesBuilder.render(function(){
					  curr.removeClass("qfy-state-active").find(".tmp-drag-state").remove();
					  helper.remove();
					  parent.vc.app.saveRowOrder(true);
				 });
	     	 }else if(tag=="vc_column_text_postlist_1"){
	     		 curr.removeClass("qfy-state-active").find(".tmp-drag-state").remove();
				 helper.remove();
	    		 var obj = {model:false};
	    		 parent.postListToEditor(parent.vc,0,obj,tag,"postlist","isdrag");
	    		 return "";
	    	 }else if(tag=="vc_column_text_advancedlist_1"){
	    		 curr.removeClass("qfy-state-active").find(".tmp-drag-state").remove();
				 helper.remove();
	    		 var obj = {model:false};
	    		 parent.postListToEditor(parent.vc,0,obj,tag,"advanced","isdrag");
	    		 return "";
	  		  }else{
	  			  parent.create_vc_changyong(tag,helper, jQuery(this));
	  			  
	  		  }
        }
      });
    jQuery(".vc-element-container>.vc-element:not(.vc-container)").droppable({
        accept: ".dragitem.base",
        over: function( event, ui ) { 
        	var $this = jQuery(this);
        	if($this.find(".vc-element-container").length>0){
        		$this = $this.find(".vc-element-container>.vc-element:not(.vc-container)");
        	}
            if(qfydirection=="down"){
            	$this.addClass("qfy-state-active").append('<div class="tmp-drag-state  down" style="background:#3899ec;height:20px;line-height:20px;width:100%;color:#fff;text-align:center;font-size:12px;"><i  class="fa fa-plus" style="display:inline-block;"></i></div>');
            }else{
            	$this.addClass("qfy-state-active").prepend('<div class="tmp-drag-state  up" style="background:#3899ec;height:20px;line-height:20px;width:100%;color:#fff;text-align:center;font-size:12px;"><i  class="fa fa-plus" style="display:inline-block;"></i></div>');
            }
           
        },
        out: function( event, ui ) {
        	jQuery(this).removeClass("qfy-state-active").find('.tmp-drag-state').remove();
        	jQuery(this).find(".qfy-state-active").removeClass("qfy-state-active");
        },
        drop: function( event, ui ) {
        	var dragstate =  jQuery(this).find('.tmp-drag-state:first');
        	dragstate.addClass("doing");
        	dragstate.html('<span class="fa fa-spinner fa-spin fa-3x fa-fw" style="font-size:12px;"></span>创建中...');
        	  var helper = ui.helper;
        	  var tag = helper.attr("data-tag");
        	  var curr = jQuery(this);
        	  jQuery('.vc-place-after').removeClass('vc-place-after');
        	  if(dragstate.hasClass("up")){
		  		  parent.vc.activity = 'prepend';
		  		  if(jQuery(this).prev().hasClass("vc-element")){
		  			  jQuery(this).prev().addClass('vc-place-after');
		  		  }else{
		  			 jQuery(this).before("<div class='tmp-place vc-place-after vc-element'></div>");
		  		  }
        	  }else{
        		  jQuery(this).addClass('vc-place-after');
        	  }
	  		 //....default
	  		  var real_v = get_vc_default_content(tag,"",curr,helper);
	  		  if(real_v){
	  			  var model_id =  jQuery(this).attr("data-model-id");
		  		  var model = parent.vc.shortcodes.get(model_id);
		  		  var parent_id = model.get('parent_id');
		  		  var p_model = parent.vc.shortcodes.get(parent_id);
		  		  parent.vc.ShortcodesBuilder.isCreateNewing = true;
	  			  parent.create_VC_fromString(real_v,p_model);
	  			  parent.vc.ShortcodesBuilder.render(function(){
					  curr.removeClass("qfy-state-active").find(".tmp-drag-state").remove();
					  curr.parent().find(".tmp-place").remove();
					  helper.remove();
					  parent.openVCQuickSet(tag);
					  //parent.vc.app.saveRowOrder(true);
					  parent.vc.ShortcodesBuilder.isCreateNewing = false;
				 },true,p_model);
	  			
	  		  }else{
	  			 curr.removeClass("qfy-state-active").find(".tmp-drag-state").remove();
				  curr.parent().find(".tmp-place").remove();
				  helper.remove();
	  		  }
        },
		// start: function(event, ui){
		// 	console.log($(this));
		// 	$('.vc-element-container').trigger("start_drag");
		// },
      });
    
    jQuery("section.section-special").droppable({
        accept: ".dragitem.base.normal",
        over: function( event, ui ) { 	
            jQuery(this).css("border","2px dashed #3899ec");
        },
        out: function( event, ui ) {
        	  jQuery(this).css("border","");
        },
        drop: function( event, ui ) {
        	  jQuery(this).css("border","");
        	 var helper = ui.helper;
        	 var tag = helper.attr("data-tag");
      	     var curr = jQuery(this);
	  		 var real_v = get_vc_default_content(tag,"",curr,helper);
	  		  if(real_v){
	  			  var curr_top = curr.find("> .container").offset().top;
	  			  var curr_left =  curr.find("> .container").offset().left;
				 
	  			 var parent_id = curr.find(".vc-vc_column:first").attr("data-model-id");
				  var defaultparam = parent.get_default_whlr(parent_id,tag);
	  			  defaultparam._left = ui.position.left-curr_left;
				  defaultparam._top = ui.position.top-curr_top;
	  			 var p_model = parent.vc.shortcodes.get(parent_id);
		  		  parent.vc.ShortcodesBuilder.isCreateNewing = true;
	  			  parent.create_VC_fromString(real_v,p_model,defaultparam);
	  			  
	  			  parent.vc.ShortcodesBuilder.render(function(){
					  helper.remove();
					  parent.openVCQuickSet(tag);
					  parent.vc.ShortcodesBuilder.isCreateNewing = false;
				 },true,p_model);
	  		  }
      	      
        }
      });
    
    jQuery(".content-wrapper #vc-no-content-helper").droppable({
        accept: ".dragitem",
        over: function( event, ui ) { 	
            jQuery(this).addClass("qfy-state-active").prepend('<div class="tmp-drag-state" style="background:#3899ec;height:20px;line-height:20px;width:100%;color:#fff;text-align:center;font-size:12px;padding:5px;"><i  class="fa fa-plus" style="display:inline-block;"></i></div>');

        },
        out: function( event, ui ) {
        	jQuery(this).removeClass("qfy-state-active").find('.tmp-drag-state').remove();
        },
        drop: function( event, ui ) {
        	  var helper = ui.helper;
       	      var tag = helper.attr("data-tag");
       	      var curr = jQuery(this);
	  		  parent.vc.activity = 'prepend';
	  		  parent.vc.group = true;
	  		  if(jQuery(this).prev().hasClass("vc-element")){
	  			  jQuery(this).prev().addClass('vc-place-after');
	  		  }else{
	  			 jQuery(this).before("<div class='tmp-place vc-place-after vc-element'></div>");
	  		  }
	  		if(tag.indexOf("vc_column_text_column_blank")>-1){
	  			 if(tag=="vc_column_text_column_blank_1"){
	  				 var full = "yes";
	  			 }else{
	  				 var full = "no";
	  			 }
  			     jQuery(this).find('.tmp-drag-state').html('<span class="fa fa-spinner fa-spin fa-3x fa-fw" style="font-size:12px;"></span>创建中...');
				 $atts = '';
				 if(tag=="vc_column_text_column_blank_special"){
					$atts = 'minheight="600" mobile_minheight="600" special="1"';
				 }
	  			 var real_v = '[vc_row id="bit_'+parent.vc.ShortcodesBuilder.randomString()+'" rowmaxwidth="1280" paddingtop="20" full="'+full+'" '+$atts+'][vc_column width="1/1"][/vc_column][/vc_row]';
	  			  parent.create_VC_fromString(real_v,false);
	  			  parent.vc.ShortcodesBuilder.render(function(){
					  curr.removeClass("qfy-state-active").find(".tmp-drag-state").remove();
					  helper.remove();
				 });
	     	 }else if(tag=="vc_column_text_postlist_1"){
	     		 curr.removeClass("qfy-state-active").find(".tmp-drag-state").remove();
				 helper.remove();
	    		 var obj = {model:false};
	    		 parent.postListToEditor(parent.vc,0,obj,tag,"postlist","isdrag");
	    		 return "";
	    	 }else if(tag=="vc_column_text_advancedlist_1"){
	    		 curr.removeClass("qfy-state-active").find(".tmp-drag-state").remove();
				 helper.remove();
	    		 var obj = {model:false};
	    		 parent.postListToEditor(parent.vc,0,obj,tag,"advanced","isdrag");
	    		 return "";
	  		  }else if(helper.hasClass("coll")){
	  			  jQuery(this).find('.tmp-drag-state').html('<span class="fa fa-spinner fa-spin fa-3x fa-fw" style="font-size:12px;"></span>加载远程资源中...');
	  			  parent.create_vc_changyong(tag,helper, jQuery(this));
	  		 }else{
		  		 //....default
	  			
	  			jQuery(this).find('.tmp-drag-state').html('<span class="fa fa-spinner fa-spin fa-3x fa-fw" style="font-size:12px;"></span>创建中...');
		  		 var real_v = get_vc_default_content(tag,"row",curr,helper);
			    parent.vc.ShortcodesBuilder.isCreateNewing = true;
		  		parent.create_VC_fromString(real_v,false);
		  		parent.vc.ShortcodesBuilder.render(function(){
					  curr.removeClass("qfy-state-active").find(".tmp-drag-state").remove();
					  helper.remove();
					  parent.openVCQuickSet(tag);
					  parent.vc.ShortcodesBuilder.isCreateNewing = false;
				 });
		  		
	  		 }
        }
      });
    jQuery(".vc-empty-element>.column_inner>.column_containter,.vc-empty-element>.vc-element-container").droppable({
        accept: ".dragitem.base",
        over: function( event, ui ) { 	
        	var $this = jQuery(this);
        	if($this.closest(".vc-empty-element").length==0){
        		return;
        	}else if($this.find(".vc-element").length>0){
        		return;
        	}
        	$this.addClass("qfy-state-active").prepend('<div class="tmp-drag-state" style="background:#3899ec;height:20px;line-height:20px;width:100%;color:#fff;text-align:center;font-size:12px;padding:5px;"><i  class="fa fa-plus" style="display:inline-block;top:-4px;position:relative;"></i></div>');

        },
        out: function( event, ui ) {
        	var $this = jQuery(this);
        	$this.removeClass("qfy-state-active").find('.tmp-drag-state').remove();
        },
        drop: function( event, ui ) {
        	  var helper = ui.helper;
       	      var tag = helper.attr("data-tag");
       	      var curr = jQuery(this);
	       	  if(curr.closest(".vc-empty-element").length==0){
	       		return;
	          }else if(curr.find(".vc-element").length>0){
	       		return;
	          }
       	      //....default
	  		  var real_v = get_vc_default_content(tag,"",curr,helper);
	  		  if(real_v){
	  			 var parent_id = curr.closest(".vc-element").attr("data-model-id");
	  
	  			 var p_model = parent.vc.shortcodes.get(parent_id);
	  		
		  		 parent.vc.ShortcodesBuilder.isCreateNewing = true;
		  		 var ptag = p_model.get("shortcode");
				  if(ptag=="slidercontent"||ptag=="accordioncontent"||ptag=="tabcontent"){
					 real_v = get_vc_default_content(tag,"vc_row_embad",curr,helper);
		  			var params = p_model.get('params');
		  			params.buttons = "内页1";
		  			p_model.save({params: params});
		  			 if(ptag=="tabcontent" || ptag=="accordioncontent" ){
		  				parent.vc.ShortcodesBuilder.update(p_model);
		  				parent.vc.ShortcodesBuilder.isAddSlider = true;
		  				jQuery(".tmp-drag-state").remove();
		  			 }
	  			  }
	  			  parent.create_VC_fromString(real_v,p_model);
	  			  parent.vc.ShortcodesBuilder.render(function(){
					  curr.removeClass("qfy-state-active").find(".tmp-drag-state").remove();
					  helper.remove();
					  parent.openVCQuickSet(tag);
					  parent.vc.ShortcodesBuilder.isCreateNewing = false;
				 },true,p_model);
	  		  }else{
	  			  curr.removeClass("qfy-state-active").find(".tmp-drag-state").remove();
				  helper.remove();
	  		  }
	  		 
	  		
        }
      });
    
    
    app.setFrameSize();
    $('#vc-load-new-js-block').appendTo('body');
  };
  vc_iframe.loadCustomCss = function(css) {
    if(!vc_iframe.$custom_style) {
      $('[data-type=vc-custom-css]').remove();
      vc_iframe.$custom_style = $('<style class="vc_post_custom_css_style"></style>').appendTo('body');
    }
    vc_iframe.$custom_style.html(css)
  };
  vc_iframe.allowedLoadScript = function(src) {
    var script_url, i, scripts_string, scripts = [], scripts_to_add = [], ls_rc;
    if(src.match(/load\-scripts\.php/)) {
      scripts_string = src.match(/load%5B%5D=([^&]+)/)[1];
      if(scripts_string) scripts = scripts_string.split(',');
      for(i in scripts) {
        ls_rc = 'load-script:' + scripts[i];
        if(!vc_iframe.loaded_script[window.md5(ls_rc)]) {
          vc_iframe.loaded_script[window.md5(ls_rc)] = ls_rc;
          scripts_to_add.push(scripts[i]);
        }
      }
      return !scripts_to_add.length ? false : src.replace(/load%5B%5D=[^&]+/, 'load%5B%5D=' + scripts_to_add.join(','));
    } else if(!vc_iframe.loaded_script[window.md5(src)]) {
      vc_iframe.loaded_script[window.md5(src)] = src;
      return src;
    }
    return false;
  };

  vc_iframe.collectScriptsData = function() {
    $('script[src]').each(function(){
      vc_iframe.allowedLoadScript($(this).attr('src'));
    });
    $('link[href]').each(function(){
      var href = $(this).attr('href');
      vc_iframe.loaded_styles[window.md5(href)] = href;
    });
  };
var vc_wait_bitbuild_timer; 

function vc_wait_bitbuild_js(){
	if(window.parent.qfy_vc_bit_js!=true || window.parent.qfy_vc_loaded_js!=true || window.parent.vc_ready!=true || typeof window.parent.vc ==="undefined"  || typeof top.jQuery ==="undefined"){
		//init bit.js
		if ( vc_wait_bitbuild_timer ){
			clearTimeout( vc_wait_bitbuild_timer );
		}
		console.log("timer:"+time());
		vc_wait_bitbuild_timer = setTimeout(function(){vc_wait_bitbuild_js()},1500);
		return false;
	}


	window.parent.vc && !window.parent.vc.loaded && window.parent.vc.build&& window.parent.vc.build(); 
	window.parent.lastVcContent = "None"; 
	window.parent.setBitInitFromQf(); 
}


  $('body').removeClass('admin-bar');
  $(document).ready(function(){
    $('#qfadminbar').hide();
    $('.edit-link').hide();
    vc_wait_bitbuild_js();
    //add by yliu fixed for iframe hover under ie
    if($.browser.msie){
	  $('body').on("hover", ".qfe_content_element iframe", function(){
		  $(this).parents('.qfe_content_element').parent().toggleClass("vc-hover");
	  });
    }
  });
  vc_iframe.reload = function() {
    vc_iframe.reload_safety_call = false;
    $('a:not(.control-btn):not(.no-opennew):not(.page-numbers)').attr("target","_blank");
	//....
    //console.trace();
	//只在编辑下执行bit_product
    bit_product();
    window.vc_js_init2();
	window.vc_js_init();
	



    for(var i in this.activities_list) {
      this.activities_list[i].call(window);
    }
    this.activities_list = [];
    this.collectScriptsData();
    return true;
  };
  vc_iframe.addScripts = function($elements) {
    vc_iframe.scripts_to_wait = $elements.length;
    vc_iframe.scripts_to_load = $elements;
  };
  vc_iframe.loadScripts = function() {
    if(!vc_iframe.scripts_to_wait || !vc_iframe.scripts_to_load) {
      vc_iframe.reload();
      return;
    }
    vc_iframe.scripts_to_load.each(function(){
      var $element = $(this);
      vc_iframe.reload_safety_call = true;
      if($element.is('script')) {
        var src = $element.attr('src');
        src = vc_iframe.allowedLoadScript(src);
        if(src) {
          $.getScript(src, function() {
            vc_iframe.scripts_to_wait -=1;
            vc_iframe.scripts_to_wait < 1 && vc_iframe.reload()
          });
        } else {
          vc_iframe.scripts_to_wait -=1;
          vc_iframe.scripts_to_wait < 1 && vc_iframe.reload()
        }
      } else {
        var href = $element.attr('href');
        if(!vc_iframe.loaded_styles[window.md5(href)]) {
          $('<link/>', {
            rel: 'stylesheet',
            type: 'text/css',
            href: href
          }).appendTo('body');
        }
        vc_iframe.scripts_to_wait -=1;
        vc_iframe.scripts_to_wait < 1 && vc_iframe.reload();
      }
    });
    vc_iframe.scripts_to_load = false;
    $( document ).ajaxComplete(function(e) {
      $(e.currentTarget).unbind('ajaxComplete');
      !vc_iframe.scripts_to_wait && vc_iframe.reload();
    });
    window.setTimeout(function(){
      vc_iframe.reload_safety_call === true && vc_iframe.reload();
    }, 14000);
  };
  vc_iframe.destroyTabs = function($tabs) {
    $tabs.each(function(){
      var $t = $(this).find('.qfe_tour_tabs_wrapper');
      $t.tabs('destroy');
    });
  };
  vc_iframe.buildTabs = function($tab, active) {
    var ver = $.ui.version.split('.'),
       old_version = parseInt(ver[0])==1 &&  parseInt(ver[1]) < 9;
    // if($call.hasClass('ui-widget')) $call.tabs('destroy');
    $tab.each(function(index) {
    var $tabs,
      interval = $(this).attr("data-interval"),
      tabs_array = [],
      $wrapper = $(this).find('.qfe_tour_tabs_wrapper');
    if($wrapper.hasClass('ui-widget')) {
      active = active!==false ? active : $wrapper.tabs('option', 'active');
      $tabs = $wrapper.tabs('refresh');
      $wrapper.tabs('option', 'active', active);
    } else {
      $tabs = $(this).find('.qfe_tour_tabs_wrapper').tabs({
        active: 0,
        show: function(event, ui) {qfe_prepare_tab_content(event, ui);},
        activate: function(event, ui) {qfe_prepare_tab_content(event, ui);}
      }); // .tabs('rotate', interval*1000);
    }
    $(this).find('.vc-element').each(function(){ tabs_array.push(this.id); });
    $(this).find('.qfe_prev_slide a, .qfe_next_slide a').unbind('click').click(function(e) {
      e.preventDefault();
      if(old_version) {
        var index = $tabs.tabs('option', 'selected');
        if ( $(this).parent().hasClass('qfe_next_slide') ) { index++; }
        else { index--; }
        if ( index < 0 ) { index = $tabs.tabs("length") - 1; }
        else if ( index >= $tabs.tabs("length") ) { index = 0; }
        $tabs.tabs("select", index);
      } else {
        var index = $tabs.tabs( "option", "active"),
          length = $tabs.find('.qfe_tab').length;

        if ( $(this).parent().hasClass('qfe_next_slide') ) {
          index = (index+1) >=length ? 0 : index+1;
        } else {
          index = index-1 < 0 ? length -1 : index-1;
        }
        $tabs.tabs( "option", "active", index );
      }
    });

    });
    return true;
  };
  vc_iframe.setActiveTab = function($tabs, index) {
    $tabs.each(function(){
      $(this).find('.qfe_tour_tabs_wrapper').tabs('refresh');
      $(this).find('.qfe_tour_tabs_wrapper').tabs('option', 'active', index);
    });
  };
  vc_iframe.setTabsSorting = function(view) {
    var $controls = $(view.tabsControls().get(0));
    if($controls.hasClass('ui-sortable')) {
      $controls.sortable('destroy');
    }
    $controls.sortable({
      axis:(view.model.get('shortcode') === 'vc_tour' ? 'y' : 'x'),
      update: view.stopSorting,
      items:"> li:not(.add_tab_block)"
    });
  };
  vc_iframe.buildAccordion = function($el, active) {
    $el.each(function(index) {
      var $this = $(this),
        $tabs,
        $wrapper = $this.find('.qfe_accordion_wrapper'),
        interval = $this.attr("data-interval"),
        active_tab = !isNaN($this.data('active-tab')) && parseInt($this.data('active-tab')) >  0 ? parseInt($this.data('active-tab'))-1 : false,
        collapsible =  active_tab === false || $this.data('collapsible') === 'yes';
      //
      if($wrapper.hasClass('ui-widget')) {
       if(active===false) active = $wrapper.accordion("option", 'active');
        $wrapper.accordion("refresh");
        $wrapper.accordion('option', 'active', active);
      } else {
        $tabs = $this.find('.qfe_accordion_wrapper').accordion({
          header: "> .vc-element > div > h3",
          autoHeight: false,
          heightStyle: "content",
          active: active_tab,
          collapsible: collapsible,
          navigation: true,
          change: function(event, ui){
            if($.fn.isotope!=undefined) {
              ui.newContent.find('.isotope').isotope("reLayout");
            }
            window.vc_carouselBehaviour();
          }
        });
      }
      //.tabs().tabs('rotate', interval*1000, true);
    });
  };
  vc_iframe.setAccordionSorting = function(view) {
    $(view.$accordion.find('> .qfe_accordion_wrapper').get(0)).sortable({
      handle: '.vc-move-vc_accordion_tab',
      update: view.stopSorting
    });
  };
  vc_iframe.vc_imageCarousel = function(model_id) {

	var iscarousel = false;
    var $el = $('[data-model-id=' + model_id + ']'),
        images_count = $el.find('img').length,
        $carousel = $el.find('.qfe_images_lib_isotope');
    
	if($carousel.length==0){
		 $carousel = $el.find('[data-ride="vc-carousel"]');
		 if(!$carousel.find('img:first').length) {
		  $carousel.carousel($carousel.data());
		  return;
		}
		if(!$carousel.find('img:first').prop('complete')) {
		  window.setTimeout(function(){
			vc_iframe.vc_imageCarousel(model_id);
		  }, 500);
		  return;
		}
		
		$carousel.carousel($carousel.data());
	}else{
		if(!$carousel.find('img:first').length) {
			if(window.bitLibLayout){
				window.bitLibLayout($carousel);
			}
		  return;
		}
		if(!$carousel.find('img:first').prop('complete')) {
		  window.setTimeout(function(){
			vc_iframe.vc_imageCarousel(model_id);
		  }, 500);
		  return;
		}
		if(window.bitLibLayout){
			window.bitLibLayout($carousel);
		}
	}

  };
  vc_iframe.vc_gallery = function(model_id) {
	
    var $el = $('[data-model-id=' + model_id +']'),
      $gallery = $el.find('.qfe_gallery_slides');
	if($gallery.length==0){
		 $gallery = $el.find('.vc-carousel');
	}
	if($gallery.length==0){
		 return;
	}
    if(!$gallery.find('img:first').prop('complete')) {
      window.setTimeout(function(){
        vc_iframe.vc_gallery(model_id);
      }, 500);
      return;
    }
    this.gallerySlider($gallery);
  };
  vc_iframe.vc_postsSlider = function(model_id) {
    var $el = $('[data-model-id=' + model_id +']'),
      $gallery = $el.find('.qfe_gallery_slides');
    this.gallerySlider($gallery);
  };
  vc_iframe.gallerySlider = function($gallery) {
	
    if($gallery.hasClass('qfe_flexslider')) {
      var sliderSpeed = 800,
        sliderTimeout = parseInt($gallery.attr('data-interval'))*1000,
        sliderFx = $gallery.attr('data-flex_fx'),
        sliderShowDirection = $gallery.attr('data-direction'),
        sliderShowBottomNav = $gallery.attr('data-bottom_nav'),
		minItems = $gallery.attr('data-per-view'),
		itemWidth = $gallery.attr('data-itemWidth'),
        slideshow = true;
      if ( sliderTimeout == 0 ) slideshow = false;
      
      if (sliderShowDirection == 0) sliderShowDirection= false;
  	  if (sliderShowBottomNav == 0) sliderShowBottomNav= false;
  	  if( jQuery('.qfe_flexslider').length==0) return;
		 if(typeof jQuery.fn.flexslider=="undefined"){
			 jQuery.getScript("/qfy-content/plugins/qfy_editor/assets/lib/flexslider/jquery.flexslider-min.js").done(function() {
				 jQuery('head').append('<link href="/qfy-content/plugins/qfy_editor/assets/lib/flexslider/flexslider.css" rel="stylesheet" type="text/css" />');
				 $gallery.flexslider({
				        animation: sliderFx,
				        slideshow: slideshow,
				        slideshowSpeed: sliderTimeout,
				        sliderSpeed: sliderSpeed,
				        controlNav: sliderShowBottomNav,
				        directionNav: sliderShowDirection,
				        smoothHeight: true,
						minItems:minItems,
					    itemWidth:itemWidth,
				      });
			 })
		 }else{
			 $gallery.flexslider({
			        animation: sliderFx,
			        slideshow: slideshow,
			        slideshowSpeed: sliderTimeout,
			        sliderSpeed: sliderSpeed,
			        controlNav: sliderShowBottomNav,
			        directionNav: sliderShowDirection,
			        smoothHeight: true,
					minItems:minItems,
				    itemWidth:itemWidth,
			      });
		 }
	     
	      $gallery.addClass('loaded');
	} else if ( $gallery.hasClass('vc-carousel') ) {
		 if(!$gallery.find('img:first').length) {
		  $gallery.carousel($gallery.data());
		  return;
		}
		if(!$gallery.find('img:first').prop('complete')) {
		  window.setTimeout(function(){
			vc_iframe.gallerySlider($gallery);
		  }, 500);
		  return;
		}
		
		$gallery.carousel($gallery.data());

		if($gallery.closest(".qfe_gallery").hasClass("rela_other")){
			vc_gallery_relat();
		}



    } else if ( $gallery.hasClass('qfe_slider_nivo') ) {
      var sliderSpeed = 800,
        sliderTimeout = $gallery.attr('data-interval')*1000;

      if ( sliderTimeout == 0 ) sliderTimeout = 9999999999;

      $gallery.find('.nivoSlider').nivoSlider({
        effect: 'boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse', // Specify sets like: 'fold,fade,sliceDown'
        slices: 15, // For slice animations
        boxCols: 8, // For box animations
        boxRows: 4, // For box animations
        animSpeed: sliderSpeed, // Slide transition speed
        pauseTime: sliderTimeout, // How long each slide will show
        startSlide: 0, // Set starting Slide (0 index)
        directionNav: true, // Next & Prev navigation
        directionNavHide: true, // Only show on hover
        controlNav: true, // 1,2,3... navigation
        keyboardNav: false, // Use left & right arrows
        pauseOnHover: true, // Stop animation while hovering
        manualAdvance: false, // Force manual transitions
        prevText: 'Prev', // Prev directionNav text
        nextText: 'Next' // Next directionNav text
      });
    } else if ( $gallery.hasClass('qfe_image_grid') ) {
      var isotope = $gallery.find('.qfe_image_grid_ul');
      isotope.isotope({
        // options
        itemSelector : '.isotope-item',
        layoutMode : 'fitRows'
      });
      
      isotope.isotope("reLayout");
    }
  };
  vc_iframe.vc_Flickr = function($placeholder) {
    var link = $placeholder.data('link');
    // $('<script type="text/javascript" src="' + link + '"></script>').prependTo($placeholder);
    $.getScript(link, function() {
      $(window.b_txt).insertAfter($placeholder);
    });
  };
  vc_iframe.vc_toggle = function(model_id) {
    var $el = $('[data-model-id=' + model_id +']');
    $('.last_toggle_el_margin').remove();
    $el.find(".qfe_toggle").unbind('click').click(function(e) {
      var $this = $(this);
      if($this.next().is(':animated')) {
        return false;
      }
      if ( $this.hasClass('qfe_toggle_title_active') ) {
        $this.removeClass('qfe_toggle_title_active').next().slideUp(500);
      } else {
        $this.addClass('qfe_toggle_title_active').next().slideDown(500);
      }
    });
    /*
    $('[data-tag=vc_toggle]').each(function(index) {
      if ( $(this).next().is('[data-tag=vc_toggle]') == false ) {
        $('<div class="last_toggle_el_margin"></div>').appendTo(this);
      }
    });
    */
  };
  // vc_iframe.setSortable(window.parent.vc.app);
})(window.jQuery);
