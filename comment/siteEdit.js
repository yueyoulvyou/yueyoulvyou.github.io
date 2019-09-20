

+function ($) { "use strict";
  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================
  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.transitioning = null

    if (this.options.parent) this.$parent = $(this.options.parent)
    if (this.options.toggle) this.toggle()
  }

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var actives = this.$parent && this.$parent.find('> .panel > .in')

    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse')
      if (hasData && hasData.transitioning) return
      actives.collapse('hide')
      hasData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')
      [dimension](0)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('in')
        [dimension]('auto')
      this.transitioning = 0
      this.$element.trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
      [dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element
      [dimension](this.$element[dimension]())
      [0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse')
      .removeClass('in')

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .trigger('hidden.bs.collapse')
        .removeClass('collapsing')
        .addClass('collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this   = $(this), href
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
    var $target = $(target)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()
    var parent  = $this.attr('data-parent')
    var $parent = parent && $(parent)

    if (!data || !data.transitioning) {
      if ($parent) $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    }

    $target.collapse(option)
  })

}(jQuery);






var iframeVCWin;
var autoOpenSettingpage = false;
var iframeWin;
var gbit_setting_type;
var defaultWidgetLayout;
var ischangeselecting =false;
var strUrlRegex = '^((https|http|ftp|rtsp|mms)?://)'
			+ '(([0-9]{1,3}.){3}[0-9]{1,3}' // IP形式的URL- 199.194.52.184
			+ '|' // 允许IP和DOMAIN（域名）
			+ '([0-9a-z_!~*\'()-]+.)*' // 域名- www.
			+ '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' // 二级域名
			+ '[a-z]{2,6})' // first level domain- .com or .museum
			+ '(:[0-9]{1,4})?' // 端口- :80
			+ '((/?)|' // a slash isn't required if there is no file name
			+ '(/[0-9a-z_!~*\'().;?:@&=+$,%#-]+)+/?)$';
jQuery(function($) {
	initData();
	//init_checksession();
	//for migration
	$('.migration #import').click(function(){
		if($(this).find(".buttonLoading").length>0) return false;
		$domain = $('#domain').val();
		//url check
		if($domain!="" &&$domain.indexOf("http://")!=0){
			$domain = "http://"+$domain;
			$('#domain').val($domain);
		}
		var re=new RegExp(strUrlRegex);
		if (!re.test($domain) && !$domain.indexOf(':import:')){
			$('#message').text('网址格式错，正确格式如：http://baidu.com，请重试！').show();;
			return false;
		} else {
			var warningString = "警告：此功能会删除网站所有页面。请确认是否继续？";
			if($domain.indexOf(':import:')){
				warningString = "请确认开始批量创建，这仅仅用来进行性能测试";
			}
			var $this = $(this);
			jConfirm(warningString,function(){
				$(".stepContent5").hide();
				$(".migration #import").hide();
				$(".iframe_notice").show();
				var height = $("body").height()-150;
				
				$('#message').text('').hide();
				$('.migration iframe').css("border","1px solid #78a950").css("background","#fff").css("height",height+"px").show();
				$('.migration iframe').attr('src', '/FeiEditor/siteEdit/migrate?url='+$domain);
				$this.find(".buttonLoading").remove();
				var background =$this.css("background-color");
				$this.prepend("<div class='buttonLoading'  style='background-color:"+background+"'><img src='/FeiEditor/images/bitcms/loading_small.gif' /></div>");
				setInterval(function(){$('#migrate_iframe')[0].contentWindow.scrollTo(0, 90000);}, 300);
				
			
			})

		}
	});
});
var loaderImageFrame = "http://fast.qifeiye.com/FeiEditor/bitSite/images/preloader.gif";
var loaderDivFrame = "<div class='loadingFrameClass' align='center' ><img  align='absmiddle' class='loadingClassImg' src='" + loaderImageFrame + "' /></div>";

function iframeAutoHeight(){
	if($(".iframeAutoHeight").length>0){
		$(".iframeAutoHeight").height($("body").height() -150);
		
	}
}

function initData() {
	iframeAutoHeight();
		

	$( ".vc-editor" ).draggable({iframeFix: true, handle: '.panel-heading'});
	//var height=$(window).height();
	//$("#site-content-iframe").height(height);
	$(".psubclass1").bind("mouseenter",function(){
		$(".subclass1").show();
	}).bind("mouseleave",function(){
		$(".subclass1").hide();
	});
	$(".psubclass2").bind("mouseenter",function(){
		$(".subclass2").show();
	}).bind("mouseleave",function(){
		$(".subclass2").hide();
	});
	$(".psubclass3").bind("mouseenter",function(){
		$(".subclass3").show();
	}).bind("mouseleave",function(){
		$(".subclass3").hide();
	});
	$(".psubclass4").bind("mouseenter",function(){
		$(".subclass4").show();
	}).bind("mouseleave",function(){
		$(".subclass4").hide();
	});
	$(".psubclass5").bind("mouseenter",function(){
		$(".subclass5").show();
	}).bind("mouseleave",function(){
		$(".subclass5").hide();
	});
	$(".psubclass6").bind("mouseenter",function(){
		$(".subclass6").show();
	}).bind("mouseleave",function(){
		$(".subclass6").hide();
	});
	$(".psubclass7").bind("mouseenter",function(){
		$(".subclass7").show();
	}).bind("mouseleave",function(){
		$(".subclass7").hide();
	});
	$(".psubclass8").bind("mouseenter",function(){
		$(".subclass8").show();
	}).bind("mouseleave",function(){
		$(".subclass8").hide();
	});
	$(".hasSubMenu").bind("mouseenter",function(){
		$(this).find(">.subMenu").show();
		$(this).find(">a").css("border-right","1px solid transparent");
	}).bind("mouseleave",function(){
		$(this).find(">.subMenu").hide();
		$(this).find(">a").css("border-right","1px solid #000");
	});

	$('#site-content-iframe').load(function() {
		IframeInit(this);
		
	});
	$('#bit_site_top .meunli.noallowed a').bind("click",function(){
		var title = jQuery(this).attr("title");
		jAlert(title);
		return false;
	});	
	
	$('#bit_site_top .deskTopStyle').bind("click",function(e){
		e.preventDefault();
		e.stopPropagation();
		top.setCookie("frame-width","",-1);
		$('#bit_site_top .padStyle span').removeClass('selected');
		$('#bit_site_top .mobileStyle span').removeClass('selected');
		$(this).find('span').addClass('selected');

		
		var tocloselist =top.getCookie("tocloselist");
	    if(tocloselist!="1"){
		   if(top.jQuery("#pagehtmlcontainer").height()==0){
			   top.showpagehtml_fun();
		   }
	    }else{
	    	  if(top.jQuery("#pagehtmlcontainer").height()>0){
				   top.showpagehtml_fun();
			   }
	    }
		//iframeVCWin.vc.setFrameReloadCSS();
		
		top.jQuery("#vc-preloader").show();
		if(iframeVCWin){
			iframeVCWin.vc.ShortcodesBuilder.save(true,function(){
				iframeVCWin.location.reload();
			});
		}	
		
	});
	

	
	$('#bit_site_top .padStyle').bind("click",function(e){
		e.preventDefault();
		e.stopPropagation();
		top.setCookie("frame-width","768px",1);
		$('#bit_site_top .deskTopStyle span').removeClass('selected');
		$('#bit_site_top .mobileStyle span').removeClass('selected');
		$(this).find('span').addClass('selected');
	
		
		var tocloselist =top.getCookie("tocloselist");
	    if(tocloselist!="1"){
		   if(top.jQuery("#pagehtmlcontainer").height()==0){
			   top.showpagehtml_fun();
		   }
	    }else{
	    	  if(top.jQuery("#pagehtmlcontainer").height()>0){
				   top.showpagehtml_fun();
			   }
	    }
		//iframeVCWin.vc.setFrameReloadCSS();	
		top.jQuery("#vc-preloader").show();
		if(iframeVCWin){
			iframeVCWin.vc.ShortcodesBuilder.save(true,function(){
				iframeVCWin.location.reload();
			});
		}	
	});
	$('#bit_site_top .mobileStyle').bind("click",function(e){
		e.preventDefault();
		e.stopPropagation();
		top.setCookie("frame-width","320px",1);
		
		$('#bit_site_top .deskTopStyle span').removeClass('selected');
		$('#bit_site_top .padStyle span').removeClass('selected');
		$(this).find('span').addClass('selected');

		 if(top.jQuery("#pagehtmlcontainer").height()==0){
			 top.showpagehtml_fun("nocookie");
		 }
		//iframeVCWin.vc.setFrameReloadCSS();
		top.jQuery("#vc-preloader").show();
		if(iframeVCWin){
			iframeVCWin.vc.ShortcodesBuilder.save(true,function(){
				iframeVCWin.location.reload();
			});
		}	

	});
	$('#bit_site_top .gobtn').bind("click",function(){
		if(!$(this).hasClass("disabled")){
			var current_pid = $('#pageUrl').val();
			location.href="/FeiEditor/siteEdit/toNext/"+current_pid;
		}
	});
	$('#bit_site_top .backbtn').bind("click",function(){
		if(!$(this).hasClass("disabled")){
			var current_pid = $('#pageUrl').val();
			location.href="/FeiEditor/siteEdit/toBack/"+current_pid;
		}
	});
	$('#bit_site_top .addOnePage').bind("click",function(){
		if(jQuery("#pagehtmlshowtext .text span.fa").length>0){
			return;
		}
		var panel_footer=iframeVCWin.jQuery(".panel-footer");
		panel_footer.hide();
		panel_footer.find("[data-action='next']").show();
		panel_footer.find("[data-action='pre']").hide();
		panel_footer.find(".stepButton").show();
		panel_footer.find(".nomarlButton").hide();
		var load=iframeVCWin.jQuery("#loading").val();
		
		iframeVCWin.vc.edit_menu_block_view.render(false);
		iframeVCWin.vc.edit_menu_block_view.setTitle("创建新页面");
		iframeVCWin.vc.edit_menu_block_view.$max_height = 500;
		
		
		iframeVCWin.loadingAjax(iframeVCWin.jQuery('body').find("#vc-menu-panel .panel-body"));
		
		if($(this).hasClass("page")){
			iframeVCWin.menuEdit(-1,'add',"page");
		}else if($(this).hasClass("post")){
			iframeVCWin.menuEdit(-1,'add',"post");
		}else if($(this).hasClass("products")){
			iframeVCWin.menuEdit(-1,'add',"products");
		}else if($(this).hasClass("product")){
			iframeVCWin.menuEdit(-1,'add',"product");
		}else {
			iframeVCWin.menuEdit(-1,'add');
		}
		
		
	});

	



	$('#bit_site_top .editOnePage').bind("click",function(){
		editOnePage_fun();
	});
	$('#bit_site_top .copyOnePage').bind("click",function(){
		copyOnePage_fun();
		
	});
	$("#bit_site_top .refreshPage").click(function(){
		if( iframeVCWin.vc && iframeWin.jQuery(".section-special").length>0 )iframeVCWin.vc.ShortcodesBuilder.save(true);
		rebuildIframe();
	})
	$("#bit-site-preview").click(function(){
		if( iframeVCWin.vc && iframeWin.jQuery(".section-special").length>0 )iframeVCWin.vc.ShortcodesBuilder.save(true);

	})
	$('#bit_site_top .saveOnePageUnSaved').live("click",function(){
		if(jQuery("#pagehtmlshowtext .text span.fa").length>0){
			return;
		}
		if($(this).find('.fa').length>0){
			return false;
		}
		if(!iframeVCWin){
			return false;
		}
		$(this).find('.icon-save-one-page').removeClass('icon icon-save-one-page').addClass('fa fa-spinner fa-spin fa-3x fa-fw');
		var $this = $(this);
		setTimeout(function(){
				iframeVCWin.vc.ShortcodesBuilder.save(true);
		}, 500);
	});

	$('#bit_site_top .deletepage').bind("click",function(){
		deletepage_fun();
	});
	$('#bit_site_top .saveElement').bind("click",function(){
		
		iframeVCWin.vc.ShortcodesBuilder.save();
	});
	$('#bit_site_top .toggleWp').bind("click",function(){
		iframeVCWin.jQuery('#vc-guides-toggle-button').click();
	});

	$('#bit_site_top .bit_settings').click(function(){
		defaultWidgetLayout  = false;
		bit_settings_pop();
	});
	
	$('#bit_site_top .bit_settings_seo').click(function(){
		defaultWidgetLayout  = false;
		bit_settings_seo_pop();
	});
	$('#bit_site_top .bit_settings_response').click(function(){
		defaultWidgetLayout  = false;
		bit_settings_response_pop();
	});
	$('#bit_site_top .bit_settings_fonts').click(function(){
		defaultWidgetLayout  = false;
		bit_settings_fonts_pop();
	});
	$('#bit_site_top .bit_settings_speedup').click(function(){
		defaultWidgetLayout  = false;
		bit_settings_speedup_pop();
	});
	
	$('#bit_site_top .bit_settings_chat').click(function(){
		defaultWidgetLayout  = false;
		bit_settings_pop_chat();
	});
	$('#bit_site_top .bit_settings_link').click(function(){
		defaultWidgetLayout  = false;
		bit_settings_pop_link();
	});
	$('#bit_site_top .bit_settings_manage').click(function(){
		defaultWidgetLayout  = false;
		bit_settings_pop_manage();
	});
	$('#bit_site_top .header_settings').click(function(){
		//iframeVCWin.bitSettingsEdit(current_pid, title, bit_setting_type);
		var url = '/admin/admin.php?page=of-header-menu';
		if(iframeWin.jQuery("div.fullscreenpage#page .rev_slider_wrapper.fullscreen-container").length >0  && iframeWin.jQuery("body").hasClass("home") && iframeWin.jQuery("body").hasClass("sliderwebsite")){
			url = url+ "&isfullsliderpage=1" ;
		}
		
		bitOpenPanel("头部及菜单设置",url);
		return false;
	});

	$('#bit_site_top .template_settings').click(function(){
		bitOpenTemplate("模板切换","template");
		return false;
	});
	$('#bit_site_top .custom_settings').click(function(){
		var url = '/admin/admin.php?page=of-js-css';
		bitOpenPanel("全局JS设置",url);
		return false;
	});
	$('#bit_site_top .custom_settings_css').click(function(){
		var url = '/admin/admin.php?page=of-css';
		bitOpenPanel("全局CSS设置",url);
		return false;
	});
	$('#bit_site_top .style_settings').click(function(){
		//iframeVCWin.bitSettingsEdit(current_pid, title, bit_setting_type);
		var url = '/admin/admin.php?page=of-skins-menu';
		bitOpenPanel("风格切换",url);
		return false;
	});
	$('#bit_site_top .content_settings').click(function(){
		var url = '/admin/admin.php?page=of-contentarea-menu';
		bitOpenPanel("内容",url);
		return false;
	});
	$('#bit_site_top .topbar_settings').click(function(){
		topbarSetting();
	});
	$('#bit_site_top .logobar_settings').click(function(){
		logobarSetting();
	});
	$('#bit_site_top .background_settings').click(function(){
		//iframeVCWin.bitSettingsEdit(current_pid, title, bit_setting_type);
		var url = '/admin/admin.php?page=options-framework';
		bitOpenPanel("风格设置",url);
		return false;
	});
	$('#bit_site_top .page_settings').click(function(){
		var pid =  $('#pageUrl').val();
		var url = '/admin/admin.php?page=of-pagegeneral&pid='+pid;
		bitOpenPanel("单独页面设置",url);
		return false;
	});
	$('#bit_site_top .page_navigation').click(function(){
		var pid =  $('#pageUrl').val();
		var url = '/admin/admin.php?page=of-pagenav&pid='+pid;
		bitOpenPanel("页面导航设置",url);
		return false;
	});
	$('#bit_site_top .page_rightnavigation').click(function(){
		var pid =  $('#pageUrl').val();
		var url = '/admin/admin.php?page=of-pagerightnav&pid='+pid;
		bitOpenPanel("页面侧栏设置",url);
		return false;
	});
	$('#bit_site_top .pageContent_settings').click(function(){
		//iframeVCWin.bitSettingsEdit(current_pid, title, bit_setting_type);
		var url = '/admin/admin.php?page=of-contentarea-menu';
		bitOpenPanel("单个页面设置",url);
		return false;
	});
	
	$('#bit_site_top .footer_settings').click(function(){

		bottombarSetting();
		return false;
	});
	$('#bit_site_top .plugin_settings').click(function(){
		defaultWidgetLayout  = "widget-layout";
		bit_settings_pop();
		return false;
	});
	$('#bit_site_top .pluginBottom_settings').click(function(){
		defaultWidgetLayout  = "bottom-widget-layout";
		bit_settings_pop();
		return false;
	});
	$('#bit_site_top .footerSliders_settings').click(function(){
		footerSlidersSetting();
		return false;
	});
	//resize Popup 
	$(window).bind('resize', function(){
		var height = $(window).height() - 200;
		$(".vc-editor .panel-body").height(height);
		$(".vc-editor .panel-body #popup_iframe").height(height);
	});

	$('#bit_site_top .redo').click(function(){
		restorePage();
		return false;
	});
	
	$('#bit_site_top .undo').click(function(){
		restorePage();
		return false;
	});
	$('#bit_site_top .qfy_jiaocheng1').click(function(){
		if( iframeVCWin)  iframeVCWin.popjiaocheng_direct()
		return false;
	});
}
function showpagehtml_fun(nocookie){
	 if(jQuery("#pagehtmlcontainer").height()>0){
		 jQuery("#pagehtmlcontainer").animate({height:"0"});
		 jQuery("#pagehtmlshowtext > div").css("border-bottom","0");
		 if(nocookie!="nocookie")  setCookie("tocloselist","1");
	 }else{
		if(jQuery("#pagehtmlshowtext .text span.fa").length>0){
			return;
		}
		if(jQuery("#pagehtmlcontainer .accordion_sections").length==0){
			page_html_ready();
		}
		jQuery("#pagehtmlcontainer").animate({height:"100%"});
		jQuery("#pagehtmlshowtext > div").css("border-bottom","2px solid #fff");
		if(nocookie!="nocookie")   setCookie("tocloselist","0");
		if(iframeWin){
			iframeWin.jQuery("#pagehtmlcontainer_drag .customcontentouter").animate({width:"0"},'fast',function(){
				jQuery(this).hide();
			});
			iframeWin.jQuery("#pagehtmlcontainer_drag .customcontent").css("opacity","1");
		 }
	 }
}
function toedit_fun(obj,e){
	if(jQuery("#pagehtmlshowtext .text span.fa").length>0){
		return;
	}
	if(e){
		e.preventDefault();
		e.stopPropagation();
	}
	if (typeof obj == 'undefined'){
		var current_pid = $('#pageUrl').val();
	}else{
		var current_pid = $(obj).closest("li").attr("value");
	}
	top.jQuery("#pageUrl").val(current_pid);
	top.jQuery("#pageUrl").change();
	//jQuery("#pagehtmlcontainer").animate({height:"0"});
	//jQuery("#pagehtmlshowtext > div").css("border-bottom","0");
}

function preview_fun(obj,e){
	if(e){
		e.preventDefault();
		e.stopPropagation();
	}
	var current_pid = $(obj).closest("li").attr("value");
	if(current_pid>0){
		window.open("/FeiEditor/siteEdit/preview/"+current_pid+"?qfy_preview=1");
		//jQuery("#pagehtmlcontainer").animate({height:"0"});
		//jQuery("#pagehtmlshowtext > div").css("border-bottom","0");
	}
}
function searchtext_fun(obj){
	
	$("#pagehtmlui").animate({height: '100%'});
	
	
}
function deletepage_fun(obj,e){
	if(jQuery("#pagehtmlshowtext .text span.fa").length>0){
		return;
	}
	if(e){
		e.preventDefault();
		e.stopPropagation();
	}
	var islist = false;
	if (typeof obj == 'undefined'){
		var pageId=$("#pageUrl").val();
		if($("#is_system_page").val()=="1"){
			jAlert("该页面是功能页面，禁止删除！");
			return;
		}
	}else{
		var pageId = $(obj).closest("li").attr("value");
		islist = true;
		
		if($("#pagehtmlcontainer .qfyadmintab li a.current").parent().attr("data-key")=="systempage"){
			var tmp = $(obj).closest("li").find("b").html();
			if(tmp.indexOf("底部-组件页面")!==0){
				jAlert("该页面是功能页面，禁止删除！");
				return;
			}

		}
	}

	if(pageId){
			 
		jConfirm("确认是否删除该页面？",function(){
			//jQuery("#pagehtmlcontainer").animate({height:"0"});
			//jQuery("#pagehtmlshowtext > div").css("border-bottom","0");
			iframeVCWin.ajaxBeforeSave(iframeVCWin.jQuery("body"));
			$.post("/FeiEditor/siteEdit/ajax_deletepage/"+pageId,function(){
				if(islist && $("#pageUrl").val()!=pageId){
					page_html_reload();
					iframeVCWin.ajaxAfterSave();
				}else{
					page_html_reload();
					$("#pageUrl").val(jQuery("#homepageid").val()).change();
				}
			})
		})
	}else{
		jAlert("首页无法删除。");
	}
}
function editOnePage_fun(obj,e){
	if(jQuery("#pagehtmlshowtext .text span.fa").length>0){
		return;
	}
	if(e){
		e.preventDefault();
		e.stopPropagation();
	}
	if (typeof obj == 'undefined'){
		var current_pid = $('#pageUrl').val();
		var type = $('#pageUrl_posttype').val();
	}else{
		var current_pid = $(obj).closest("li").attr("value");
		var type = $(obj).closest("li").attr("data-type");
	}

	var bit_setting_type = 'page';
	if(type=="product"){
		iframeVCWin.bitSettingsEdit(current_pid,"设置商品", 'product');
	}else{
		iframeVCWin.bitSettingsEdit(current_pid,"设置页面", bit_setting_type);
	}
	return false;
}
function copyOnePage_fun(obj,e){
	if(jQuery("#pagehtmlshowtext .text span.fa").length>0){
		return;
	}
	if(e){
		e.preventDefault();
		e.stopPropagation();
	}
	if (typeof obj == 'undefined'){
		var current_pid = $('#pageUrl').val();
		var type = $('#pageUrl_posttype').val();
	}else{
		var current_pid = $(obj).closest("li").attr("value");
		var type = $(obj).closest("li").attr("data-type");
	}


	if(current_pid){
		if(type=="product"){
			iframeVCWin.bitSettingsEdit(current_pid,"复制商品", 'product',"COPY");
		}else{
			iframeVCWin.bitSettingsEdit(current_pid, "复制页面", "copyPage","COPY");
		}
	}else{
		jAlert("请选择一个页面。");
	}
	return ;
}
function bit_settings_pop(){
	if(jQuery("#pagehtmlshowtext .text span.fa").length>0){
		return;
	}
	var bit_setting_type = "website";
	var current_pid = $('#pageUrl').val();
	var title = "网站设置";
	iframeVCWin.bitSettingsEdit(current_pid, title, bit_setting_type);
}
function bit_settings_fonts_pop(){
	if(jQuery("#pagehtmlshowtext .text span.fa").length>0){
		return;
	}
	var bit_setting_type = "fonts";
	var current_pid = $('#pageUrl').val();
	var title = "字体管理";
	iframeVCWin.bitSettingsEdit(current_pid, title, bit_setting_type);
}
function bit_settings_response_pop(){
	if(jQuery("#pagehtmlshowtext .text span.fa").length>0){
		return;
	}
	var bit_setting_type = "response";
	var current_pid = $('#pageUrl').val();
	var title = "响应式控制";
	iframeVCWin.bitSettingsEdit(current_pid, title, bit_setting_type);

}
function bit_settings_speedup_pop(){
	if(jQuery("#pagehtmlshowtext .text span.fa").length>0){
		return;
	}
	var bit_setting_type = "speedup";
	var current_pid = $('#pageUrl').val();
	var title = "网站加速";
	iframeVCWin.bitSettingsEdit(current_pid, title, bit_setting_type);

}
function bit_settings_seo_pop(){
	if(jQuery("#pagehtmlshowtext .text span.fa").length>0){
		return;
	}
	var bit_setting_type = "seo";
	var current_pid = $('#pageUrl').val();
	var title = "全局SEO设置";
	iframeVCWin.bitSettingsEdit(current_pid, title, bit_setting_type);
}

function bit_settings_pop_chat(){
	if(jQuery("#pagehtmlshowtext .text span.fa").length>0){
		return;
	}
	var bit_setting_type = "livechat";
	var current_pid = $('#pageUrl').val();
	var title = "内置客服弹窗设置";
	iframeVCWin.bitSettingsEdit(current_pid, title, bit_setting_type);
}
function bit_settings_pop_link(){
	if(jQuery("#pagehtmlshowtext .text span.fa").length>0){
		return;
	}
	var bit_setting_type = "link";
	var current_pid = $('#pageUrl').val();
	var title = "链接设置";
	iframeVCWin.bitSettingsEdit(current_pid, title, bit_setting_type);
}
function bit_settings_pop_manage(){
	if(jQuery("#pagehtmlshowtext .text span.fa").length>0){
		return;
	}
	var bit_setting_type = "manage";
	var current_pid = $('#pageUrl').val();
	var title = "扩展应用";
	iframeVCWin.bitSettingsEdit(current_pid, title, bit_setting_type);
}
function restorePage(){
	if(jQuery("#pagehtmlshowtext .text span.fa").length>0){
		return;
	}
	iframeVCWin.vc.edit_revison_block_view.render();
}
function topbarSetting()
{
	var url = '/admin/admin.php?page=of-topbar-menu';
	bitOpenPanel("页眉设置",url);
	return false;
}
function bottombarSetting(){
	var url = '/admin/admin.php?page=of-bottombar-menu';
	bitOpenPanel("页脚设置",url);
}
function qfMenuSetting(flag){
	if(!iframeWin) return;
	var url = '/admin/admin.php?page=of-menu';
	if(flag=="mobile_menucolor"){
		url = url+"&block="+flag;
	}
	if(iframeWin.jQuery("div.fullscreenpage#page .rev_slider_wrapper.fullscreen-container").length >0  && iframeWin.jQuery("body").hasClass("home") && iframeWin.jQuery("body").hasClass("sliderwebsite")){
		url = url+ "&isfullsliderpage=1" ;
	}
	bitOpenPanel("更改菜单样式",url);
}
function qfHeaderSetting(flag,link){
	if(!iframeWin) return;
	var url = '/admin/admin.php?page=of-header-menu';
	if(flag=="mobile_topbar"||flag=="mobile_menubar"){
		url = url+"&block="+flag;
	}
	if(iframeWin.jQuery("div.fullscreenpage#page .rev_slider_wrapper.fullscreen-container").length >0  && iframeWin.jQuery("body").hasClass("home") && iframeWin.jQuery("body").hasClass("sliderwebsite")){
		url = url+ "&isfullsliderpage=1" ;
	}
	if(link){
		url = url+link;
	}
	bitOpenPanel("设置",url);
}
function qfFloatMenuSetting(){
	var url = '/admin/admin.php?page=of-float-menu';
	bitOpenPanel("更改浮动菜单样式",url);
}
function footerSlidersSetting(flag)
{
	var url = '/admin/admin.php?page=of-footer-menu';
	if(flag=="backtopbutton"||flag=="mobile_cartimagebar"||flag=="mobile_bottommenubar"){
		url = url+"&block="+flag;
	}
	if( iframeWin.jQuery("div.fullscreenpage#page").length >0  ){
		 url = url+"&isfullsliderpage=1";
	}
	bitOpenPanel("底部设置",url);

}
function logobarSetting(link)
{
	var url = '/admin/admin.php?page=of-branding-menu';
	if(link) url = url+"#"+link;
	bitOpenPanel("Logo设置",url);

}
function iframeVCWinInit($this) {
	if (typeof $this != 'undefined'){
		if (typeof $this.contentWindow == 'undefined'|| typeof $this.contentWindow.jQuery === 'undefined'|| typeof $this.contentWindow.jQuery.ui === 'undefined') {
			setTimeout(function() {
				iframeVCWinInit(iframeVCWin.jQuery('#vc-inline-frame')[0]);
			}, 2000);
		} else {
			
			iframeWin = $this.contentWindow;
		}
	}

}
function IframeInit($this) {
	if (typeof $this.contentWindow == 'undefined'|| typeof $this.contentWindow.jQuery === 'undefined' || typeof $this.contentWindow.jQuery.ui === 'undefined') {
		setTimeout(function() {
			IframeInit($('#site-content-iframe')[0]);
		}, 2000);
	} else {
		iframeVCWin = $this.contentWindow;
		iframeVCWinInit(iframeVCWin.jQuery('#vc-inline-frame')[0]);
	}
}


function submitTempalte() {
	var v = jQuery("[name='template']:checked").val();
	ajaxStartEvent();
	$.post("/FeiEditor/siteEdit/ajax_create/" + v, function(id) {
		ajaxEndEvent();
		if (id.length == 7) {
			location.href = "/FeiEditor/siteEdit/index/" + id;
		} else {
			jAlert("System error,please again!");
		}
	});
}


function stopDefault(e) {
	if (e && e.preventDefault)
		e.preventDefault();
	else
		window.event.returnValue = false;

	return false;
}
function reloadPage()
{
	$("#site-content-iframe").prop("src",$("#site-content-iframe").prop("src"));
}


$("#pageUrl").change(function(){
	changePageUrl();
})

function rebuildIframe() {
	iframeVCWin.vc.reloadIframe();
}
var inittoopenpage =false;
function changePageUrl(defaultid)
{
	if(defaultid){
		$("#pageUrl").val(defaultid);
	}
	var id=$("#pageUrl").val();
	$('#bit_site_top .ViewQf').attr('href', $('#bit_site_top .ViewQf').attr('base_href')+id);
	$('#pagehtmlshowtext .text').html('<span class="fa fa-spinner fa-spin fa-3x fa-fw" style="font-size:12px;"></span>');
	$("#site-content-iframe").prop("src","/admin/edit.php?vc_action=vc_inline&post_id="+id+"&post_type=post");


	iframeWin = false;
	var src = $(".vc-editor.bitPopIframe #popup_iframe:visible").attr("src");
	if(src && src.indexOf("page=of-footer-menu")>-1){
		closePanel();
	}
}
function menuRedirect(url,obj,postid){
	var oldId = $("#pageUrl").val();
	var isRedirect =false;
	if(url &&  url.indexOf("#")==0){
		iframeWin.location.hash = url;
		return false;
	}
	if(postid>0 ){
		isRedirect = true;
		if(oldId != postid){
			jConfirm("确认是否需要打开该页面进行编辑？",function(){
				$("#pageUrl").val(postid);
				changePageUrl();
				return false;
			});
		}
		
	}else if(obj.parent().hasClass("menu-item-object-page")||obj.parent().hasClass("menu-item-object-post")||obj.parent().hasClass("menu-item-object-products")||obj.parent().hasClass("menu-item-object-product")){
		var objclass = obj.parent().attr("class");
		var tmp = ""+objclass.match(/bit-menu-post-id-\d+/g);
		if(tmp){
			var id = tmp.match(/\d+/g);
			if(id>0){
				isRedirect = true;
				if(oldId != id){
					jConfirm("确认是否需要打开该页面进行编辑？",function(){
						$("#pageUrl").val(id);
						changePageUrl();
						return false;
					});
				}
			}
		}
	}else if(obj.attr("data-postid") && obj.attr("data-postid")>0){
		var id = obj.attr("data-postid");
		isRedirect = true;
		if(oldId != id && obj.closest(".qfy-element").attr("data-post")!="attachment"){
			jConfirm("确认是否需要打开该页面进行编辑？",function(){
				$("#pageUrl").val(id);
				changePageUrl();
				return false;
			});
		}
		
	}
	
	if(!isRedirect){
		jAlert("这是一个外部或者特殊链接，不能从编辑器打开。如果需要，请从预览模式查看。");
	}

}

function ajaxBeforeSave(w) {
	if (w.find(".loadingFrameClass").length == 0) {
		w.prepend(loaderDivFrame);
	}

	var obj = w.find(".loadingFrameClass:visible")
	
	var lw = obj.width();
	var lh = obj.height();
	
	var height = 42;
	if (lh < 84 && lh > 0) {
		obj.find("img").height(lh / 2);
		height = lh / 2;
	}
	obj.find("img").css("margin-top", lh / 2 -20)
}
function ajaxAfterSave() {
	$('.loadingFrameClass').remove();
}
function closePanel()
{
	$(".vc-editor #popup_iframe").attr("src","");
	jQuery(".panel-footer button:eq(1)").show();
	$(".vc-editor").hide().css("left","50%").css("top","70px");
}
function closePanel3()
{
	$(".vc-editor.bitPopIframe2").hide();
	jQuery("#select_pagetype").val("");
	$(".vc-editor.bitPopIframe2 .plusstep2").hide();
	$(".vc-editor.bitPopIframe2 .plusstep1").show();
	$(".vc-editor.bitPopIframe2 .btn-primary,.vc-editor.bitPopIframe2 .backtobegin,.vc-editor.bitPopIframe2 .cancel").hide();
	$(".vc-editor.bitPopIframe2 .panel-title").html("选择你的页面类型");
}
function backtobegin(){
	jQuery("#select_pagetype").val("");
	$(".vc-editor.bitPopIframe2 .plusstep2").hide();
	$(".vc-editor.bitPopIframe2 .plusstep1").show();
	$(".vc-editor.bitPopIframe2 .btn-primary,.vc-editor.bitPopIframe2 .backtobegin,.vc-editor.bitPopIframe2 .cancel").hide();
	$(".vc-editor.bitPopIframe2 .panel-title").html("选择你的页面类型");
}
function select_pagetype(type){
	$(".vc-editor.bitPopIframe2 .plusstep1").hide();
	$(".vc-editor.bitPopIframe2 .plusstep2").html('<img class="waitingToPanel" style="margin-top:90px;margin-left:190px;" src="//fast.qifeiye.com/FeiEditor/bitSite/images/preloader.gif" />');
	$(".vc-editor.bitPopIframe2 .plusstep2").show();
	if(type=="page"){
		jQuery("#select_pagetype").val(type);
		$(".vc-editor.bitPopIframe2 .panel-title").html("先选择你要应用的具体页面，然后点击批量应用");
		jQuery.post("/FeiEditor/siteEdit/getallpages/"+type,function(data){
			$(".vc-editor.bitPopIframe2 .plusstep2").html(data);
			if($(".vc-editor.bitPopIframe2 .plusstep2 .one_line_ul input").length==0){
				$(".vc-editor.bitPopIframe2 .plusstep2").html("<div style='padding:20px;'>没有找到页面!</div>");
			}
			$(".vc-editor.bitPopIframe2 .btn-primary,.vc-editor.bitPopIframe2 .backtobegin,.vc-editor.bitPopIframe2 .cancel").show();
			
		})
	}else if(type=="post"){
		jQuery("#select_pagetype").val(type);
		$(".vc-editor.bitPopIframe2 .panel-title").html("先选择你要应用的具体分类，然后点击批量应用");
		jQuery.post("/FeiEditor/siteEdit/getallpages/"+type,function(data){
			$(".vc-editor.bitPopIframe2 .plusstep2").html(data);
			if($(".vc-editor.bitPopIframe2 .plusstep2 .one_line_ul li").length==0){
				$(".vc-editor.bitPopIframe2 .plusstep2").html("<div style='padding:20px;'>你还没有给资讯分类!</div>");
			}
			$(".vc-editor.bitPopIframe2 .btn-primary,.vc-editor.bitPopIframe2 .backtobegin,.vc-editor.bitPopIframe2 .cancel").show();
			
		})
	}else if(type=="products"){
		jQuery("#select_pagetype").val(type);
		$(".vc-editor.bitPopIframe2 .panel-title").html("先选择你要应用的具体分类，然后点击批量应用");
		jQuery.post("/FeiEditor/siteEdit/getallpages/"+type,function(data){
			$(".vc-editor.bitPopIframe2 .plusstep2").html(data);
			if($(".vc-editor.bitPopIframe2 .plusstep2 .one_line_ul li").length==0){
				$(".vc-editor.bitPopIframe2 .plusstep2").html("<div style='padding:20px;'>你还没有给产品分类!</div>");
			}
			$(".vc-editor.bitPopIframe2 .btn-primary,.vc-editor.bitPopIframe2 .backtobegin,.vc-editor.bitPopIframe2 .cancel").show();
			
		})
	}else if(type=="product"){
		jQuery("#select_pagetype").val(type);
		$(".vc-editor.bitPopIframe2 .panel-title").html("先选择你要应用的具体分类，然后点击批量应用");
		jQuery.post("/FeiEditor/siteEdit/getallpages/"+type,function(data){
			$(".vc-editor.bitPopIframe2 .plusstep2").html(data);
			if($(".vc-editor.bitPopIframe2 .plusstep2 .one_line_ul li").length==0){
				$(".vc-editor.bitPopIframe2 .plusstep2").html("<div style='padding:20px;'>你还没有给商品分类!</div>");
			}
			$(".vc-editor.bitPopIframe2 .btn-primary,.vc-editor.bitPopIframe2 .backtobegin,.vc-editor.bitPopIframe2 .cancel").show();
			
		})
	}
}
function checkallpages(obj,flag){
	var p = $(obj).closest(".bitPopIframe2");
	if(flag=="1"){
		p.find(".one_line_ul input").prop("checked","checked");
	}else{
		p.find(".one_line_ul input").prop("checked","");
	}
}
function plussubmit(obj,flag){
	var p = $(obj).closest(".bitPopIframe2");
	var type = p.find("#select_pagetype").val();
	var piframe = top.jQuery(".bitPopIframe:visible");
	var toids="";
	var checkedValues = new Array();
	
	if(type=="page"){
		jQuery(".bitPopIframe2 .one_line_ul input:checked").each(function(){
			var name  = jQuery(this).attr("name");
			var v = name.replace("in_pages[","").replace("]","");
			checkedValues.push(v);
		})
		toids = checkedValues.join(',');
	}else if(type=="post"){
		jQuery(".bitPopIframe2 .one_line_ul input:checked").each(function(){
			var v  = jQuery(this).val();
			checkedValues.push(v);
		})
		toids = checkedValues.join(',');
	}else if(type=="products"){
		jQuery(".bitPopIframe2 .one_line_ul input:checked").each(function(){
			var v  = jQuery(this).val();
			checkedValues.push(v);
		})
		toids = checkedValues.join(',');
	}else if(type=="product"){
		jQuery(".bitPopIframe2 .one_line_ul input:checked").each(function(){
			var v  = jQuery(this).val();
			checkedValues.push(v);
		})
		toids = checkedValues.join(',');
	}
	if(!toids){
		jAlert("请先选择一个选项");
		return false;
	}
	if(piframe.length>0){
		ajaxBeforeSave($("#pop2"));
		submitPanel(function(){
			ajaxBeforeSave($("#pop2"));
			var pageid =top.jQuery("#pageUrl").val();
			
			jQuery.post("/FeiEditor/siteEdit/copypageset",{pageid:pageid,toids:toids,type:type,flag:flag},function(data){
				ajaxAfterSave();
				jAlert("批量操作成功");
			});
			
		
		})
	}
	
}
function topclosePanel()
{
	$(".vc-editor #popup_iframe").attr("src","");
	jQuery(".panel-footer button:eq(1)").show();
	$(".vc-editor").hide().css("left","50%").css("top","70px");
	jQuery(".vc-editor.bitPopIframe >.panel").removeClass("animated_new");
}
function bitOpenPanel(title,url){
	//top.jQuery("#pagehtmlcontainer").animate({height:"0"});
	//top.jQuery("#pagehtmlshowtext > div").css("border-bottom","0");
	var height = $(window).height() - 200;
	$(".vc-editor.bitPopIframe .panel-body").height(height);
	$(".vc-editor.bitPopIframe .panel-body #popup_iframe").height(height);
	$(".vc-editor.bitPopIframe .panel-title").html(title);
	$(".vc-editor.bitPopIframe #popup_iframe").attr("src",url);
	$(".vc-editor.bitPopIframe .htmlContent").hide();
	$(".vc-editor.bitPopIframe").show();
	jQuery(".vc-editor.bitPopIframe .panel-footer").show();
	loadingIframe($(".vc-editor.bitPopIframe #vc-bit_style-panel .panel-body"));
	jQuery(".vc-editor.bitPopIframe >.panel").addClass("animated_new");
}
function bitOnlyOpenPanel(title,html){
	var height = $(window).height() - 200;
	$(".vc-editor.bitPopIframe .panel-body").height(height);
	$(".vc-editor.bitPopIframe .panel-body #popup_iframe").height(0);
	$(".vc-editor.bitPopIframe .htmlContent").show();
	$(".vc-editor.bitPopIframe .panel-title").html(title);
	$(".vc-editor.bitPopIframe").show();
	$(".vc-editor.bitPopIframe .htmlContent").html(html);
	jQuery(".vc-editor.bitPopIframe .panel-footer").show();

}
function bitOpenTemplate(title,flag){
	var height = $(window).height() - 200;
	$(".vc-editor.bitTemplate .panel-body").height(height);
	$(".vc-editor.bitTemplate .panel-title").html(title);
	var obj = 	$(".vc-editor.bitTemplate #vc-bit_style-panel .panel-body .templateStep1");
	$(".vc-editor.bitTemplate #vc-bit_style-panel .panel-body .templateStep").hide();
	obj.show();
	$(".vc-editor.bitTemplate .changeTemplateSave").hide();
	$(".vc-editor.bitTemplate .changeTemplatePre").hide();
	$(".vc-editor.bitTemplate .changeTemplateNext").show();
	jQuery(".vc-editor.bitPopIframe .panel-footer").show();
	$(".vc-editor.bitTemplate").show();
	obj.html("");
	loadingIframe(obj);
	if(flag=="template"){
		
		$.post("/FeiEditor/siteEdit/getTemplates",function(data){
			obj.html(data);
		})
	}
}
function stepToChangeTemplate(action){
	var obj =$(".vc-editor.bitTemplate #vc-bit_style-panel .panel-body .templateStep:visible");
	var obj_1 =$(".vc-editor.bitTemplate #vc-bit_style-panel .panel-body .templateStep1");
	var obj_2 =$(".vc-editor.bitTemplate #vc-bit_style-panel .panel-body .templateStep2");
	var obj_3 =$(".vc-editor.bitTemplate #vc-bit_style-panel .panel-body .templateStep3");
	if(action=="pre"){
		if(obj.attr("data-step")=="2"){
			obj.hide();
			obj_1.css("display","table");
			$(".vc-editor.bitTemplate .changeTemplateNext").show();
			$(".vc-editor.bitTemplate .changeTemplatePre").hide();
			$(".vc-editor.bitTemplate .changeTemplateSave").hide();
		}else if(obj.attr("data-step")=="3"){
			obj.hide();
			obj_2.show();
			$(".vc-editor.bitTemplate .changeTemplateNext").show();
			$(".vc-editor.bitTemplate .changeTemplatePre").show();
			$(".vc-editor.bitTemplate .changeTemplateSave").hide();
		}
	}else if(action=="next"){
		if(obj.attr("data-step")=="1"){
			obj.hide();
			obj_2.show();
			$(".vc-editor.bitTemplate .changeTemplateNext").show();
			$(".vc-editor.bitTemplate .changeTemplatePre").show();
			$(".vc-editor.bitTemplate .changeTemplateSave").hide();
		}else if(obj.attr("data-step")=="2"){
			obj.hide();
			obj_3.show();
			$(".vc-editor.bitTemplate .changeTemplatePre").show();
			$(".vc-editor.bitTemplate .changeTemplateNext").hide();
			$(".vc-editor.bitTemplate .changeTemplateSave").show();
		}
	}

}
function loadingIframe(iframe){
	var obi =iframe.prepend('<div class="bitIframeWaiting" align="center"><img class="waitingToPanel "  src="' + loaderImageFrame + '" /></div>');
	var obj = $(".panel-body  .bitIframeWaiting:visible");
	var lw = obj.width();
	var lh = obj.height();
	
	var height = 42;
	if (lh < 84 && lh > 0) {
		obj.find("img").height(lh / 2);
		height = lh / 2;
	}
	obj.find("img").css("margin-top", lh / 2 -20)
}
var js_load_timeout=false;
function topvcReloadSelf(){
	 top.jConfirmMore("糟糕！似乎网络出现了问题。",function(){
			top.window.location.href=top.window.location.href
			return;
		},"警告","重新加载","继续等待",function(){
			js_load_timeout = setTimeout(function(){topvcReloadSelf()},15000);
	})
	
}
function submitPanel(closePanel)
{
	var pageid = top.jQuery("#pageUrl").val();
	

	var iv = $("#popup_iframe")[0].contentWindow;
	var url = $("#popup_iframe").attr("src");
	var pop = iv.jQuery(".media-modal:visible").length;
	if(pop>0){
		iv.jQuery(".media-toolbar-primary a").click();
		return false;
	}
	ajaxBeforeSave($("#vc-bit_style-panel"));

	if(iv.jQuery("#optionsframework form").length==1){
		if(typeof iv.jQuery.fn.froalaEditor == "undefined"){
			if(iv.jQuery("#header-logo_des").length==1){
				iv.jQuery("#header-logo_des").val(iv.CKEDITOR.instances["header-logo_des"].getData());
			}
			if(iv.jQuery("#header-floatlogo_des").length==1){
				iv.jQuery("#header-floatlogo_des").val(iv.CKEDITOR.instances["header-floatlogo_des"].getData());
			}
			if(iv.jQuery("#bottom_bar-copyrights").length==1){
				iv.jQuery("#bottom_bar-copyrights").val(iv.CKEDITOR.instances["bottom_bar-copyrights"].getData());
			}
		}
		if(iv.jQuery("#pageid").length>0){
			iv.jQuery("#pageid").val(pageid);
		}
		var qfy_pagetype = "";
		if(url=="/admin/admin.php?page=of-menu" ||url=="/admin/admin.php?page=of-header-menu" || url=="/admin/admin.php?page=of-branding-menu" || url=="/admin/admin.php?page=of-header-menu&block=mobile_topbar" || url=="/admin/admin.php?page=of-float-menu" || url=="/admin/admin.php?page=of-header-menu&block=mobile_topbar" || url=="/admin/admin.php?page=of-header-menu#section-header-layout" || url=="/admin/admin.php?page=of-branding-menu#section-bit-logo-height" || url=="/admin/admin.php?page=of-header-menu&block=mobile_menubar" || url=="/admin/admin.php?page=of-menu&block=mobile_menucolor"){
			qfy_pagetype = "header";
			if((url.indexOf("/admin/admin.php?page=of-branding-menu")>-1) && iframeWin.jQuery("body").hasClass("page-template-template-fullscreen-php")){
				qfy_pagetype = "header_fullscreen";
			}
		}else if(url=="/admin/admin.php?page=of-header-menu&isfullsliderpage=1" || url=="/admin/admin.php?page=of-menu&isfullsliderpage=1"){
			qfy_pagetype = "header_fullscreen";
		}else if(url=="/admin/admin.php?page=of-topbar-menu"){
			qfy_pagetype = "topbar";
		
		}else if(url=="/admin/admin.php?page=of-footer-menu"){
			qfy_pagetype = "footer";
		}else if(url=="/admin/admin.php?page=of-footer-menu&isfullsliderpage=1"){
			qfy_pagetype = "footer_fullscreen";
		}else if(url=="/admin/admin.php?page=of-bottombar-menu"){
			qfy_pagetype = "bottombar";
			if(iframeWin.jQuery("body.page-template-template-fullscreen-php").length>0){
				qfy_pagetype = "bottombar_fullscreen";
			}
		}else if(url=="/admin/admin.php?page=of-footer-menu&block=backtopbutton"){
			qfy_pagetype = "scrollbar";
		}else if(url=="/admin/admin.php?page=of-footer-menu&block=mobile_cartimagebar"){
			qfy_pagetype = "cart";
		}else if(url=="/admin/admin.php?page=of-footer-menu&block=mobile_bottommenubar"){
			qfy_pagetype = "mobilebottommenu";
			
		}else if(url.indexOf("/admin/admin.php?page=of-pagerightnav&pid=")>-1){
			qfy_pagetype = "rightnavbar";
			
		}
		if(qfy_pagetype!=""){
			if(iv.jQuery("#qfy_pagetype").length>0){
				iv.jQuery("#qfy_pagetype").val(qfy_pagetype);
			}else{
				iv.jQuery("#optionsframework form").append('<input type="hidden"  id="qfy_pagetype" name="qfy_pagetype" value="'+qfy_pagetype+'" />');
			}
			var pageid =top.jQuery("#pageUrl").val();
			if(iv.jQuery("#qfy_pageid").length>0){
				iv.jQuery("#qfy_pageid").val(pageid);
			}else{
				iv.jQuery("#optionsframework form").append('<input type="hidden"  id="qfy_pageid"  name="qfy_pageid" value="'+pageid+'" />');
			}
		}
		
		iv.jQuery("#optionsframework form").ajaxSubmit({
					 dataType: "text",
					 success: function (data) {
						 js_load_timeout = setTimeout(function(){
							 topvcReloadSelf();
						 },10000)
						//$("#pageUrl").change();
						if(qfy_pagetype=="header"||qfy_pagetype=="header_fullscreen"){
							iframeVCWin.reloadheaderevents(data,qfy_pagetype);
						}else if(qfy_pagetype=="topbar"){
							iframeVCWin.reloadTopbarEvents(data);
						}else if(qfy_pagetype=="footer" || qfy_pagetype=="footer_fullscreen"){
							iframeVCWin.reloadFooterEvents(data,qfy_pagetype);
						}else if(qfy_pagetype=="bottombar" || qfy_pagetype=="bottombar_fullscreen"){
							iframeVCWin.reloadBottombarEvents(data,qfy_pagetype);
						}else if(qfy_pagetype=="scrollbar"){
							iframeVCWin.reloadCssEvents(data);
						}else if(qfy_pagetype=="cart"){
							iframeVCWin.reloadCartEvents(data);
						}else if(qfy_pagetype=="mobilebottommenu"){
							iframeVCWin.reloadMobilebottommenuEvents(data);
						}else if(qfy_pagetype=="rightnavbar"){
							iframeVCWin.reloadRightnavbarEvents(data);
						}else{
							rebuildIframe();
						}
						//
						ajaxAfterSave();
						clearTimeout(js_load_timeout);
						
						if (typeof closePanel == 'function'){
								closePanel();
						}
					 }	
		});
	}

}
function templateSetCheckbox(id,url){
	$(".templates .template").removeClass("hover");
	$(".templates .template"+id).addClass("hover");
	var src = $(".templates .template"+id+" img").attr("src");
	$(".templateStep .previewImage").html("<br/><img width='150' src='"+src+"' />");
	$("#template").val(id);
	$("#templateUrl").val(url);
}
function changeTemplate(closePanel){
	var uuid = $("#template").val();
	var url = $("#templateUrl").val();
	var importBanner = $("[name='importBanner']:checked").val();
	var importSlider = $("[name='importSlider']:checked").val();
	ajaxBeforeSave($(".bitTemplatePanel"));
	$.post("/FeiEditor/siteEdit/changeTemplate/"+uuid,{url:url,importBanner:importBanner,importSlider:importSlider},function(){
		rebuildIframe();
		ajaxAfterSave();
		if (typeof closePanel == 'function'){
			closePanel();
		}
	})
	


}
function quickcopy(obj){
	jQuery(obj).closest(".boxy-content").find(".buttonClass0").click();
	
}

function jConfirm(msg,yes,no,title)
{
	if (typeof title == 'undefined'){
		title = "确认信息";
	}
	 Boxy.ask(msg, ["确认", "取消"], function(val) {
			if (val == '确认') {
				if (typeof yes == 'function'){
					yes();
				}
			}else{
				if (typeof no == 'function'){
					no();
				}
			}
	},{title: title});
}
function jConfirmMore(msg,yes,title,zq,qx,no)
{
	if (typeof title == 'undefined'){
		title = "确认信息";
	}
	 Boxy.ask(msg, [zq, qx], function(val) {
			if (val == zq) {
				if (typeof yes == 'function'){
					yes();
				}
			}else{
				if (typeof no == 'function'){
					no();
				}
			}
	},{title: title});
}

function jConfirmMore2(msg,yes,title,zq,qx,back,no,backfun)
{
	if (typeof title == 'undefined'){
		title = "确认信息";
	}
	 Boxy.ask(msg, [zq, qx,back], function(val) {
			if (val == zq) {
				if (typeof yes == 'function'){
					yes();
				}
			}else if (val == back) {
				if (typeof backfun == 'function'){
					backfun();
				}
			}else{
				if (typeof no == 'function'){
					no();
				}
			}
	},{title: title});
}
function jBox(msg,title)
{
	  var box = new Boxy(msg,
		                {
		                    title: title, //对话框标题
		                    modal: true, //是否为模式窗口
		                    draggable: false,
		                    closeable:false,
		                });

		return box;
}
function jConfirmOneButton(msg,yes,title)
{
	if (typeof title == 'undefined'){
		title = "确认信息";
	}
	 Boxy.ask(msg, ["确认"], function(val) {
			if (val == '确认') {
				if (typeof yes == 'function'){
					yes();
				}
			}
	},{title: title});
}
function jConfirmOneButton2(msg,yes,title)
{
	if (typeof title == 'undefined'){
		title = "确认信息";
	}
	 Boxy.ask(msg, ["确认"], function(val) {
			if (val == '确认') {
				if (typeof yes == 'function'){
					yes();
				}
			}
	},{title: title,modal: false});
}
function jAlert(msg,title)
{
	if (typeof title == 'undefined'){
		title = "提示信息";
	}
	//相同提示信息不再提示
	if(jQuery('.boxy-modal-blackout').length > 0 && jQuery(".boxy-wrapper .question").text()==msg){
		
	}else{
		Boxy.alert(msg, null, {title: title});
	}
}
function jInfo(msg,title)
{
	if (typeof title == 'undefined'){
		title = "提示信息";
	}
	//相同提示信息不再提示
	if(jQuery('.boxy-modal-blackout').length > 0 && jQuery(".boxy-wrapper .question").text()==msg){
		
	}else{
		Boxy.alert(msg, null, {title: title,modal: false});

	}
}
function jLoading(){
	jQuery.blockUI({ message: '<img src="http://fast.qifeiye.com/FeiEditor/bitSite/images/preloader.gif" />',css: { backgroundColor: 'transparent',borderColor: 'transparent', margin:"0 0 0 -35px",left:"50%",width:'70px',height:'32px',padding:"8px 0 9px 0"},overlayCSS:{backgroundColor:"#ccc",opacity:"0.9",} });
}
function jLoadingEnd(){
	jQuery.unblockUI();
}

function bitAsk(msg)
{
	Boxy.ask(msg, ["Yes", "Cancel"], function(val) {
			if (val == 'Yes') {
				
			}else{
				
			}
	});
}
function continueImport(){
	$(".stepContent5").show();
	$(".migration #import").show();
	$('#message').text('').hide();
	$('.migration iframe').hide();
	$('.migration iframe').hide();
	$(".importFinished").hide();
}
function backtolist(){
	top.location.href="/FeiEditor/siteEdit";
}
function removeLoading(){
	jQuery(".buttonLoading").remove();
	jQuery(".importFinished").show();

}
function beforeLeave(obj){
	/*var child = jQuery('#site-content-iframe')[0].contentWindow;
	if(child){
		ajaxBeforeSave(child.jQuery("body"))
		child.jQuery('#update-nav-menu').ajaxSubmit({  
                success:function(data){
					if(typeof(obj) =="undefined"){
						top.location.href="/FeiEditor/siteEdit";
					}else{
						obj.form.submit();
					}
					
                }  
            });
	}else{
		top.location.href="/FeiEditor/siteEdit";
	}*/

}
function goEditPage(){
	jQuery(".jiaocheng_div").remove();
	jQuery.post("/FeiEditor/siteEdit/removejiaocheng",function(){
		
	})
}
function iframeHeight(){
	var h = $(window).height();
	$("#site-content-iframe").height(h-36);
}
$(window).bind('resize', function(){
	iframeHeight();
});
iframeHeight();

function topPopTitleWarning(obj){
	jQuery(obj).parent().parent().find(".messenger-close").click();
	$(".psubclass4").trigger('mouseover');
	setTimeout(function(){
		$(".bit_settings_li .bit_settings").addClass('selected');
	}, 500);
	setTimeout(function(){
		$(".psubclass4").trigger('mouseout');
		$(".bit_settings_li .bit_settings").removeClass('selected');
		bit_settings_pop();
	}, 1500);
}
function topPopEmailWarning(obj){
	jQuery(obj).parent().parent().find(".messenger-close").click();
	$(".psubclass4").trigger('mouseover');
	setTimeout(function(){
		$(".bit_settings_li .bit_settings").addClass('selected');
	}, 200);
	setTimeout(function(){
		$(".psubclass4").trigger('mouseout');
		$(".bit_settings_li .bit_settings").removeClass('selected');
		defaultWidgetLayout  = "mailsetting";
		bit_settings_pop();
	}, 1500);
}
function topPopUserWarning(){
	$(".psubclass2").trigger('mouseover');
	setTimeout(function(){
		$(".psubclass2 .subclass2 .usermenu >a").addClass('selected');
	}, 200);
	setTimeout(function(){
		$(".psubclass2").trigger('mouseout');
		$(".psubclass2 .subclass2 .usermenu >a").removeClass('selected');
		top.location.href="/admin/admin.php?page=qfyuser&tab=fields";
	}, 1000);
}
var isjPopWarning = false;
var isjPopWarning2 = false;
function jPop(message){
	var e="flat",t="messenger-on-top messenger-on-center";
	Messenger.options={extraClasses:"messenger-fixed "+t,theme:e};

	//return++a<2?e.error({status:500,readyState:0,responseText:0}):e.success()
	Messenger().post({message:message,type:"error",hideAfter:30,showCloseButton:!0,action:false})
}
function setCookie(cname, cvalue,exdays)		//cookies设置
{
	var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires+"; path=/;";
}

function getCookie(Name)			//cookies读取
{
	var search = Name + "="
	if(document.cookie.length > 0) 
	{
		offset = document.cookie.indexOf(search)
		if(offset != -1) 
		{
			offset += search.length
			end = document.cookie.indexOf(";", offset)
			if(end == -1) end = document.cookie.length
			return unescape(document.cookie.substring(offset, end))
		 }
	else return ""
	  }
}
function setGallery(){
	var url = '/admin/admin.php?page=of-gallerys';
	bitOpenPanel("图库设置",url);
	return false;
}
function edit_line_mouseover(obj){
	jQuery(obj).addClass("hover");
}
function jiaochengmessengerclose(){

	var p = jQuery(".jiaochengmessenger");
	top.jQuery("#TB_window #TB_closeWindowButton:visible").click();
	jConfirm("关闭教程后，您可以在'后台'>'视频教程'中再次打开。",function(){
		p.remove();
		jQuery.post("/FeiEditor/siteEdit/updateOption/option",{name:"jiaocheng_showed",val:"1"},function(data){})
	})
}
function restorePostListIds(id,post_id,list_id){
	if(id!="undefined"){
		var model = iframeVCWin.vc.shortcodes.get(id);
		var p = iframeWin.jQuery("[data-postid="+post_id+"]").closest(".column_inner").parent();
		iframeVCWin.ajaxBeforeLoading(0,p);
		var params = model.get('params');
		params.ignoreids = "";
		model.save({
			params : params
		});
		iframeVCWin.vc.ShortcodesBuilder.update(model);
		iframeVCWin.updatePage(model, null);
	}else{
		var w = iframeWin.jQuery("#" + list_id + ".site_tooler");
		iframeVCWin.ajaxBeforeLoading(0,w);
		jQuery.post("/FeiEditor/siteEdit/ajax_restorepage_list/"+list_id+"/"+post_id,function(){
			iframeVCWin.updateWidgetViewEvent(list_id,w);
		})
	}
	jQuery(".buttonClass2:visible").click();
}


/*!
 * clipboard.js v1.5.16
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Clipboard=e()}}(function(){var e,t,n;return function e(t,n,i){function o(a,c){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!c&&l)return l(a,!0);if(r)return r(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){var n=t[a][1][e];return o(n?n:e)},u,u.exports,e,t,n,i)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<i.length;a++)o(i[a]);return o}({1:[function(e,t,n){function i(e,t){for(;e&&e.nodeType!==o;){if(e.matches(t))return e;e=e.parentNode}}var o=9;if(Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}t.exports=i},{}],2:[function(e,t,n){function i(e,t,n,i,r){var a=o.apply(this,arguments);return e.addEventListener(n,a,r),{destroy:function(){e.removeEventListener(n,a,r)}}}function o(e,t,n,i){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&i.call(e,n)}}var r=e("./closest");t.exports=i},{"./closest":1}],3:[function(e,t,n){n.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},n.nodeList=function(e){var t=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===t||"[object HTMLCollection]"===t)&&"length"in e&&(0===e.length||n.node(e[0]))},n.string=function(e){return"string"==typeof e||e instanceof String},n.fn=function(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t}},{}],4:[function(e,t,n){function i(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!c.string(t))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(e))return o(e,t,n);if(c.nodeList(e))return r(e,t,n);if(c.string(e))return a(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function r(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}function a(e,t,n){return l(document.body,e,t,n)}var c=e("./is"),l=e("delegate");t.exports=i},{"./is":3,delegate:2}],5:[function(e,t,n){function i(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName)e.focus(),e.setSelectionRange(0,e.value.length),t=e.value;else{e.hasAttribute("contenteditable")&&e.focus();var n=window.getSelection(),i=document.createRange();i.selectNodeContents(e),n.removeAllRanges(),n.addRange(i),t=n.toString()}return t}t.exports=i},{}],6:[function(e,t,n){function i(){}i.prototype={on:function(e,t,n){var i=this.e||(this.e={});return(i[e]||(i[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){function i(){o.off(e,i),t.apply(n,arguments)}var o=this;return i._=t,this.on(e,i,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),i=0,o=n.length;for(i;i<o;i++)n[i].fn.apply(n[i].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),i=n[e],o=[];if(i&&t)for(var r=0,a=i.length;r<a;r++)i[r].fn!==t&&i[r].fn._!==t&&o.push(i[r]);return o.length?n[e]=o:delete n[e],this}},t.exports=i},{}],7:[function(t,n,i){!function(o,r){if("function"==typeof e&&e.amd)e(["module","select"],r);else if("undefined"!=typeof i)r(n,t("select"));else{var a={exports:{}};r(a,o.select),o.clipboardAction=a.exports}}(this,function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n(t),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=function(){function e(t){i(this,e),this.resolveOptions(t),this.initSelection()}return a(e,[{key:"resolveOptions",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function e(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function e(){var t=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=document.body.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[n?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.addEventListener("focus",window.scrollTo(0,i)),this.fakeElem.style.top=i+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function e(){this.fakeHandler&&(document.body.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function e(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function e(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function e(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function e(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function e(){this.removeFake()}},{key:"action",set:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function e(){return this._action}},{key:"target",set:function e(t){if(void 0!==t){if(!t||"object"!==("undefined"==typeof t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function e(){return this._target}}]),e}();e.exports=c})},{select:5}],8:[function(t,n,i){!function(o,r){if("function"==typeof e&&e.amd)e(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if("undefined"!=typeof i)r(n,t("./clipboard-action"),t("tiny-emitter"),t("good-listener"));else{var a={exports:{}};r(a,o.clipboardAction,o.tinyEmitter,o.goodListener),o.clipboard=a.exports}}(this,function(e,t,n,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}var s=o(t),u=o(n),f=o(i),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),h=function(e){function t(e,n){r(this,t);var i=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return i.resolveOptions(n),i.listenClick(e),i}return c(t,e),d(t,[{key:"resolveOptions",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText}},{key:"listenClick",value:function e(t){var n=this;this.listener=(0,f.default)(t,"click",function(e){return n.onClick(e)})}},{key:"onClick",value:function e(t){var n=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s.default({action:this.action(n),target:this.target(n),text:this.text(n),trigger:n,emitter:this})}},{key:"defaultAction",value:function e(t){return l("action",t)}},{key:"defaultTarget",value:function e(t){var n=l("target",t);if(n)return document.querySelector(n)}},{key:"defaultText",value:function e(t){return l("text",t)}},{key:"destroy",value:function e(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}]),t}(u.default);e.exports=h})},{"./clipboard-action":7,"good-listener":4,"tiny-emitter":6}]},{},[8])(8)});

function clipboard_fun(){
	
	var clipboard = new Clipboard(".copy_btn");
    
	clipboard.on('success', function(e) {
	   // console.info('Action:', e.action);
	   // console.info('Text:', e.text);
		//console.info('Trigger:', e.trigger);
		jQuery(e.trigger).css("position","relative");
		if(jQuery(e.trigger).find(".copymsg").length>0) jQuery(e.trigger).find(".copymsg").remove();
		jQuery(e.trigger).append('<span class="copymsg qfyfadeOutUp" style="position:absolute; width: 70px;right:-75px;color:green;font-size:16px;">复制成功</span>');
		setTimeout(function(){
			jQuery(".copymsg").remove();
		},2200);
	    e.clearSelection();
	    clipboard.destroy();
	});

	clipboard.on('error', function(e) {
	   // console.error('Action:', e.action);
	    //console.error('Trigger:', e.trigger);
		jQuery(e.trigger).html("抱歉,你的浏览器不支持复制,你可以手动ctrl+c");
		clipboard.destroy();
	});
}
var qfy_select_inputobj = false;
function qfy_select_pages_fun(obj,flag){
	qfy_select_inputobj = jQuery(obj).closest("table");
	new top.Boxy("<div class='boxy-content full pages_html' style='display: block; background: rgb(255, 255, 255);'><div class='question'><div class='waiting' style='text-align:center;height:475px;width:600px;'><div style='margin-top:100px;' class='fa fa-spinner fa-spin fa-3x fa-fw'></div></div></div></div>", {title: "选择"});
	
	//top.Boxy.ask("<div class='waiting' style='text-align:center;height:475px;width:600px;'><div style='margin-top:100px;' class='fa fa-spinner fa-spin fa-3x fa-fw'></div></div>", ["确认","取消"], function(val) {},{title: "选择"});
	top.jQuery(".boxy-wrapper .title-bar").append('<span style="position:absolute;right:12px;top:9px;cursor:pointer;" onclick="page_close()">&#10006;</span>	');
	top.jQuery(".boxy-wrapper .answers").hide();
	if(top.jQuery(".qfy_popinfo:visible").length>0 ){
		top.jQuery(".boxy-wrapper").addClass("topZindex");
	}
	top.jQuery(".boxy-wrapper .boxy-content").addClass("full pages_html");
	jQuery.post("/admin/admin-ajax.php",{"action":"bit_do_accordion_sections","flag":flag,"size":"20"}, function(msg) {
		top.jQuery(".boxy-wrapper .waiting").replaceWith(msg);
		if(top.jQuery(".boxy-wrapper .results li").length>10){
			top.jQuery(".boxy-wrapper .results").addClass("more");
			top.jQuery(".boxy-wrapper .results li").each(function(i){
				if(i%2==1) jQuery(this).addClass("even");
				if(i>9){
					jQuery(this).addClass("leftline").css({"position":"absolute","left":"50%","top":37*(i-10)+"px"});
				}else{
					jQuery(this).addClass("rightline");
				}
			})
		}
		top.jQuery(".boxy-wrapper .results a").unbind().bind("mouseenter",function(e){
			if(jQuery(this).find(".edit").length==0){
				jQuery(this).append('<span class="edit"><span  >选择</span></span>');
			}
			jQuery(this).find(".edit").show();
		}).bind("mouseleave",function(e){
			jQuery(this).find(".edit").hide();
		})
		if($("#pageUrl").val()){
			$(".accordion_sections .results li[value='"+$("#pageUrl").val()+"'] b").css("font-weight","bold");
		}
	});
		
}
function qfy_select_pages_clear(obj){
	var table = jQuery(obj).closest("table");
	table.find(".title").val("");
	table.find(".val").val("").change();
}

function page_html_ready(){
	var size = 40;
	
	jQuery(".pages_html:visible .qfyadmintab a").removeClass("current");
	jQuery(".pages_html:visible .qfyadmintab a:first").addClass("current");
	jQuery("#sitetop_pagehtml").html('<div style="margin-top:200px;margin-bottom:100px;margin-left:130px;text-align:center;color:#333;" class="fa fa-spinner fa-spin fa-3x fa-fw"></div>');
	
	jQuery.post("/admin/admin-ajax.php",{"action":"bit_do_accordion_sections","size":size,"actiontype":"top"}, function(msg) {
		jQuery("#sitetop_pagehtml").html(msg);	
		top.jQuery("#pagehtmlcontainer .results a").unbind().bind("mouseenter",function(e){
			if(jQuery(this).find(".edit").length==0){
				jQuery(this).append('<span class="edit edit_line"><span onclick="toedit_fun(this,event)">编辑</span><span onclick="preview_fun(this,event)">预览</span><span onclick="copyOnePage_fun(this,event)">复制</span><span onclick="editOnePage_fun(this,event)">设置</span><span onclick="deletepage_fun(this,event)">删除</span></span>');
			}
			jQuery(this).find(".edit").show();
		}).bind("mouseleave",function(e){
			jQuery(this).find(".edit").hide();
		})
		if($("#pageUrl").val()){
			$(".accordion_sections .results li[value='"+$("#pageUrl").val()+"'] b").css("font-weight","bold");
		}
	});
	
}
function page_html_reload(){
	if($("#pagehtmlcontainer").height()>0){
		
		if($("#pagehtmlcontainer .mypages a.selected").length>0){
			$("#pagehtmlcontainer .mypages a.selected").click();
		}else if($("#pagehtmlcontainer .accordion_content .sub:visible a.current").length>0){
			$("#pagehtmlcontainer .accordion_content .sub:visible a.current").click();
		}else{
			$("#pagehtmlcontainer .accordion_title a.current").click();
		}
	}
}
function vc_element_loading_preview(){
	//预览变化
	if(iframeWin.dtGlobals.noallow_edit_preview=="1"){
		return;
	}
	var panel = iframeVCWin.jQuery("#vc-properties-panel:visible");
	if(panel.length>0){
		setTimeout(function(){
			var nowtime = new Date().getTime();
	    	 if(iframeVCWin.vc.ShortcodesBuilder.lastChangingElementTime&&nowtime-iframeVCWin.vc.ShortcodesBuilder.lastChangingElementTime<3000){
	    		 return;
	    	 }
	    	 iframeVCWin.vc.ShortcodesBuilder.lastChangingElementTime = nowtime;
			panel.find('[data-save="preview"]').click();
		},200);
	}
}
function page_select_item(e){
	var $target = jQuery(e.currentTarget);
	if($target.closest("#pagehtmlcontainer").length>0){
		$target.closest("li").find(".edit_line>span:eq(0)").click();
	}else if(qfy_select_inputobj){
		var $target = jQuery(e.currentTarget);
		if($target.attr("data-id")){
			var atag = $target;
		}else{
			var atag = $target.closest("a");
		}
		if(atag.length>0){
			if(qfy_select_inputobj.hasClass("multiple")){
				var v = qfy_select_inputobj.find('.qfe_vc_param_value').val();
        		var tmp_str = '<li class="added" ><div class="img_inner" rel="'+atag.attr("data-id")+'" style="width: 75px; height: 75px; overflow: hidden;text-align: center;padding: 5px;box-sizing: border-box;line-height: initial;">#'+atag.attr("data-id")+'<br><br><span class="ellipsis" style="width:75px;">'+atag.attr("data-title")+'</span><a href="#" class="icon-remove"></a></div></li>'
        		if(v==""){
        			qfy_select_inputobj.find('.qfe_vc_param_value').val( atag.attr("data-id"));
        		}else{
        			var v_array = v.split(",");
        			if(jQuery.inArray(atag.attr("data-id"),v_array )=="-1"){
        				qfy_select_inputobj.find('.qfe_vc_param_value').val( v+","+atag.attr("data-id") );
        				$target.append('<span class="qfyfadeOutUp" style="position:absolute;width: 70px;right: 20px;color:green;background: transparent;border: 0;font-size: 12px;">插入成功</span>');
        			}else{
        				tmp_str = "";
        				$target.append('<span class="qfyfadeOutUp" style="position:absolute;width: 70px;right: 20px;color:red;background: transparent;border: 0;font-size: 12px;">已经存在了</span>');
        				
        			}
        		}
        		qfy_select_inputobj.find('.gallery_widget_attached_images_list').append(tmp_str);
			}else{
				qfy_select_inputobj.find(".title").val(atag.attr("data-title"));
				qfy_select_inputobj.find(".val").val(atag.attr("data-id")).attr("data-type",atag.attr("data-type")).change();
				page_close();
				vc_element_loading_preview();
			}
		
		}
	}
}
function page_search_keydown(obj,event){
	if(event.which == "13"){     
		page_search(obj)
	} 
}
function page_add(obj){
	if($("#pagehtmlcontainer .accordion_title a.current").parent().attr("data-key")=="viewtemplate"){
		var category = $("#pagehtmlcontainer .accordion_content .sub a.current").attr("data-key");
		if(category!="viewtemplate_product"){
				iframeVCWin.viewtemplate_createpage(category);
		}else{
				var category = $("#pagehtmlcontainer .accordion_content .sub a.current").attr("data-key");
				if($(obj).find("i").hasClass("fa-spinner")) return;
				$(obj).find("i").attr("class","fa fa-spinner fa-spin fa-3x fa-fw");
				$.post("/FeiEditor/siteEdit/ajax_simplesavepage",{"category":category},function(id){
					$(obj).find("i").attr("class","fa fa-plus");
					page_html_reload();
					if($('#pageUrl').length>0){
						$('#pageUrl').val(id).change();
						autoOpenSettingpage = true;
					}else{
						top.reloadPage();
					}
				});
		}
	}else{
		$('#bit_site_top .addOnePage').click();
	}
}
function page_close(){
	top.jQuery(".boxy-wrapper:visible").remove();
}
function page_search(obj){
		var p = jQuery(obj).closest(".accordion_sections");
		var obj = p.find(".current").parent()[0];
		if(p.find(".sub:visible .current").length>0){
			obj = p.find(".sub:visible .current")[0];
		}
		var v =  p.find("[name='search']").val();
		v = jQuery.trim(v);
		page_type_chagne(obj,1,v);
}
function simple_copypage(obj,e,type){
	if(e){
		e.preventDefault();
		e.stopPropagation();
	}
	top.jConfirm("确认是否复制？",function(){
			var name = jQuery(obj).closest("a").find("b").text()+"-副本";
			var id = jQuery(obj).closest("li").attr("value");
			var postdata = {post_type:type,menu_select_id:0,menu_title:name,post_title:name,current_pid:id,"action":"bit_copypage"};
			jQuery.post("/admin/admin-ajax.php",postdata, function(id) {
				page_html_reload();
			});
		},function(){
			
	},"确认");
}
function page_type_chagne(obj,page,val){
	//2个地方使用，弹出和下拉框
	var key = jQuery(obj).attr("data-key");
	var flag = jQuery(obj).attr("data-flag");
	if(key=="viewtemplate"){
		var lasttypekey = getCookie("lasttypekey");
		if(lasttypekey) key = lasttypekey;
		
	}
	if(key=="viewtemplate_post"||key=="viewtemplate_products"||key=="viewtemplate_product"){
		setCookie("lasttypekey",key,1);
	}
	var container = jQuery(obj).closest(".pages_html");
	if(!page) page = 1;
	if(!val){ 
		val = "";
		container.find("[name='search']").val("");
	}
	container.find(".qfyadmintab a").removeClass("current");
	jQuery(obj).find("a").addClass("current");
	if(jQuery(obj).closest(".sub").length>0){
		container.find('[data-key="viewtemplate"] a').addClass("current");
	}
	container.find(".accordion_content").html('<div style="margin-top:100px;margin-bottom:100px;text-align:center;color:#333;" class="fa fa-spinner fa-spin fa-3x fa-fw"></div>');
	container.find(".accordion_footer").html("").hide();
	var size=20;
	var action = "";
	if(container.attr("id")=="sitetop_pagehtml"){
		action = "top";
		size=40;
	}
	jQuery.post("/admin/admin-ajax.php",{"action":"bit_do_accordion_sections","type":key,"flag":flag,"page":page,"search":val,"size":size,"actiontype":action}, function(msg) {
		if(msg=="0"){
			top.jAlert("页面过期，正尝试自动刷新！");
			setTimeout(function(){top.location.reload();},1000);
			return;
		}
		container.find(".accordion_content").replaceWith(jQuery(msg).find(".accordion_content"));
		container.find(".accordion_footer").replaceWith(jQuery(msg).find(".accordion_footer"));
		
		if(container.find(".results li").length>10 && container.attr("id")!="sitetop_pagehtml" ){
			container.find(".results").addClass("more");
			container.find(".results li").each(function(i){
				if(i%2==1) jQuery(this).addClass("even");
				if(i>9){
					jQuery(this).addClass("leftline").css({"position":"absolute","left":"50%","top":37*(i-10)+"px"});
				}else{
					jQuery(this).addClass("rightline");
				}
			})
		}
		container.find(".results a").unbind().bind("mouseenter",function(e){
			if(jQuery(this).find(".edit").length==0){
				if(action=="top"){
					if(jQuery(this).closest("li").attr("data-type")!="viewtemplate"){
						jQuery(this).append('<span class="edit edit_line"><span onclick="toedit_fun(this,event)">编辑</span><span onclick="preview_fun(this,event)">预览</span><span onclick="copyOnePage_fun(this,event)">复制</span><span onclick="editOnePage_fun(this,event)">设置</span><span onclick="deletepage_fun(this,event)">删除</span></span>');
					}else{
						var id = jQuery(this).closest("li").attr("value");
						jQuery(this).append('<span class="edit edit_line"><span onclick="toedit_fun(this,event)">编辑</span><span onclick="default_fun(this,event)">默认</span><span onclick="simple_copypage(this,event,\'viewtemplate\')">复制</span><span onclick="editOnePage_fun(this,event)">设置</span><span onclick="deletepage_fun(this,event)">删除</span></span>');
					}
				}else{
					jQuery(this).append('<span class="edit"><span >选择</span></span>');
				}
			}
			jQuery(this).find(".edit").show();
		}).bind("mouseleave",function(e){
			jQuery(this).find(".edit").hide();
		})
		if($("#pageUrl").val()){
			$(".accordion_sections .results li[value='"+$("#pageUrl").val()+"'] b").css("font-weight","bold");
		}
	});
}
function default_fun(obj,e){
	if(e){
		e.preventDefault();
		e.stopPropagation();
	}
	var category = $("#pagehtmlcontainer .accordion_content .sub a.current").attr("data-key");
	var current_pid = $(obj).closest("li").attr("value");
	jQuery.post("/admin/admin-ajax.php",{"action":"bit_viewtemplate_default","category":category,"id":current_pid}, function(msg) {
		page_html_reload();
	});
}
function pageNav(page,aobj){
	
	var $target = jQuery(aobj);
	var container = $target.closest(".pages_html");
	var obj = container.find(".qfyadmintab .current").parent()[0];
	var v =  container.find("[name='search']").val();
	page_type_chagne(obj,page,v);
}
function qfy_popinfo_fun(htm,timetoclose){
	jQuery(".qfy_popinfo").remove();
	if(htm){
		var msg = '<div class="qfy_popinfo" ><div class="md-content">'+htm+'</div></div>';
		jQuery("body").append(msg);
		setTimeout(function(){ jQuery(".qfy_popinfo").addClass("qfy_show"); },500);
		if(timetoclose){
			setTimeout(function(){ jQuery(".qfy_popinfo").removeClass("qfy_show"); },timetoclose*1000);
		}
	}
}
var curr_select_font =false;
function select_this_font(obj){
	jQuery(obj).closest("#fonts_list_inner").find(".fl").removeClass("active");
	jQuery(obj).addClass("active");
	var v = jQuery(obj).attr("data-value");
	var t = jQuery(curr_select_font).closest(".ff_kz").find("input");
	var to = jQuery(curr_select_font).closest(".ff_kz").attr("data-to");
	t.val(v);
	top.jQuery(".boxy-wrapper:visible").remove();
	var title = jQuery(curr_select_font).closest(".vc-row").find("[name='"+to+"']");
	var text = title.val();
	if(title.attr("type")!="text"){
		text = text.replace(/<.*?>/ig,"");
	}

	t.css("color","#eee").after('<div style="font-size: 14px; position: absolute; padding: 8px 6px 7px; left: 15px;" class="fa fa-spinner fa-spin fa-3x fa-fw"></div>');
	jQuery.post("/admin/admin-ajax.php",{"action":"auto_create_fonts","text":text,"font":v}, function(msg) {
		//刷新一下
		t.css("color","#333");
		t.parent().find(".fa-spinner").remove();
		top.vc_element_loading_preview();
	});
}
function clear_font(obj){
	jQuery(obj).closest(".ff_kz").find("input").val("");
}
function select_font(obj){
	
	if( jQuery(obj).closest(".ff_kz").find(".fa-spinner").length>0){
		return;
	}
	curr_select_font = obj;
	
	var fonts_list =
		'<ul class="accordion_title qfyadmintab " style="margin-bottom:10px;margin-left:-10px;">'+
		'<li onclick="font_type_chagne(this)" data-key="cn"><a class="current">简体</a></li>'+
		'<li onclick="font_type_chagne(this)" data-key="tw"><a>繁体</a></li>';
	if(top.jQuery("li.qfy-ext").length>0 || iframeWin.dtGlobals.support_extfont=="1") {
		fonts_list += '<li onclick="font_type_chagne(this)" data-key="ext"><a>扩展收费字体</a></li>';
	}

	fonts_list += '</ul>';
	var fonts = [
		{value:'思源宋体CN-Bold', image:'SourceHanSerifCN-Bold.jpg', class:'fl cn'},
		{value:'思源宋体CN-ExtraLight', image:'SourceHanSerifCN-ExtraLight.jpg', class:'fl cn'},
		{value:'思源宋体CN-Heavy', image:'SourceHanSerifCN-Heavy.jpg', class:'fl cn'},
		{value:'思源宋体CN-Light', image:'SourceHanSerifCN-Light.jpg', class:'fl cn'},
		{value:'思源宋体CN-Medium', image:'SourceHanSerifCN-Medium.jpg', class:'fl cn'},
		{value:'思源宋体CN-Regular', image:'SourceHanSerifCN-Regular.jpg', class:'fl cn'},
		{value:'思源宋体CN-SemiBold', image:'SourceHanSerifCN-SemiBold.jpg', class:'fl cn'},

		{value:'思源黑体CN-Bold', image:'SourceHanSansCN-Bold.jpg', class:'fl cn'},
		{value:'思源黑体CN-ExtraLight', image:'SourceHanSansCN-ExtraLight.jpg', class:'fl cn'},
		{value:'思源黑体CN-Heavy', image:'SourceHanSansCN-Heavy.jpg', class:'fl cn'},
		{value:'思源黑体CN-Light', image:'SourceHanSansCN-Light.jpg', class:'fl cn'},
		{value:'思源黑体CN-Medium', image:'SourceHanSansCN-Medium.jpg', class:'fl cn'},
		{value:'思源黑体CN-Normal', image:'SourceHanSansCN-Normal.jpg', class:'fl cn'},
		{value:'思源黑体CN-Regular', image:'SourceHanSansCN-Regular.jpg', class:'fl cn'},

		{value:'庞门正道标题体', image:'pmzd.jpg', class:'fl cn'},
		{value:'站酷高端黑', image:'zkgdh.jpg', class:'fl cn'},
		{value:'郑庆科黄油体-Regular', image:'zqkhyt-Regular.jpg', class:'fl cn'},
		{value:'艺术粗柔体', image:'ys-crt.jpg', class:'fl cn'},
		{value:'艺术魔法体', image:'ys-mft.jpg', class:'fl cn'},
		{value:'艺术太极体', image:'ys-tjt.jpg', class:'fl cn'},
		{value:'艺术爱心体', image:'ys-axt.jpg', class:'fl cn'},
		{value:'艺术可爱体', image:'ys-kat.jpg', class:'fl cn'},
		{value:'艺术特粗柔黑体', image:'ys-tcrht.jpg', class:'fl cn'},
		{value:'艺术哈皮体', image:'ys-hpt.jpg', class:'fl cn'},
		{value:'艺术少儿简体', image:'ys-srjt.jpg', class:'fl cn'},

		{value:'日本花园明朝体HanaMin', image:'rbhymcz-HanaMin.jpg', class:'fl tw'},
		{value:'思源柔黑繁体', image:'SourceHanSerifTW.jpg', class:'fl tw'},
		{value:'王汉宗综艺繁体', image:'whzzyft.jpg', class:'fl tw'},
		{value:'源界明朝繁体', image:'yjmcft.jpg', class:'fl tw'},
		{value:'装甲明朝繁体', image:'zjmcft.jpg', class:'fl tw'}];

	var extfonts = [{value:"feizhaikuaileti", image:null, font:"f7e377ef67ef6d873a829af7858d0d84d", label:"", class:"fl ext"},
		{value:"akaimanhuati", image:null, font:"f6b60a42415094a288eab6dcf189cb82b", label:"", class:"fl ext"},
		{value:"baigetianxingti", image:null, font:"f2f3db7073a0e28e2fcff050b0d572dd2", label:"", class:"fl ext"},
		{value:"bantianyunmeiheishoushu", image:null, font:"f1baffcf23f711a7adbc6023188c37613", label:"", class:"fl ext"},
		{value:"bowenguaiguaiti", image:null, font:"fd6d4cbe90674c9ba987165565a8c7c86", label:"", class:"fl ext"},
		{value:"budingti", image:null, font:"f83da35eed757ef3cd0f4aeee10c6aeaf", label:"", class:"fl ext"},
		{value:"chuangcuhei", image:null, font:"f28c5ab7a9ed6ee72a7adc0f0c5eab16a", label:"", class:"fl ext"},
		{value:"chuangxihei", image:null, font:"f3540be9d489c618ee89da5526ab5bae0", label:"", class:"fl ext"},
		{value:"chuangzhonghei", image:null, font:"fc1b1dac52c932464953d6bafce3e8cef", label:"", class:"fl ext"},
		{value:"chulinti", image:null, font:"fec6d0779a0be4c28aa0ed8408b3d6590", label:"", class:"fl ext"},
		{value:"enuoti", image:null, font:"f0e6258ea9150308fa9d07cf01bcfb4e2", label:"", class:"fl ext"},
		{value:"geyixiaoshoujixingkaiti", image:null, font:"fa5169247625fd8175ede0b0eba130dfe", label:"", class:"fl ext"},
		{value:"gouyuxingshu", image:null, font:"fbd9aa2753b1bd9c3b9d0f18bff496bba", label:"", class:"fl ext"},
		{value:"guochaoshoushu", image:null, font:"f1e8f26ebd82388d1d993e3199e5606b1", label:"", class:"fl ext"},
		{value:"hongliangmaobilishujianti", image:null, font:"f702e9dfb996d6b1e0eb502e60c711b35", label:"", class:"fl ext"},
		{value:"jiangnanshoushu", image:null, font:"f7c3a79fb3fdd97b1c2acea979fb3050d", label:"", class:"fl ext"},
		{value:"jingdianyahei", image:null, font:"f19d0d987934a4630c512d78926870c97", label:"", class:"fl ext"},
		{value:"kongxinsongkai", image:null, font:"fc8851b67e36f10b56089e5539252efc7", label:"", class:"fl ext"},
		{value:"kongxinyahei", image:null, font:"fad808d7b21ab8e93e233c5f846329825", label:"", class:"fl ext"},
		{value:"liliangcuheiti", image:null, font:"fc2b8325c70222e5255078a71ef568f54", label:"", class:"fl ext"},
		{value:"lingchunxingshu", image:null, font:"fb4c6b3e62eb8508e41d2a843afa309e2", label:"", class:"fl ext"},
		{value:"lingyueheiti", image:null, font:"ff807c393e98af06192903088bd013cb1", label:"", class:"fl ext"},
		{value:"longyinshoushu", image:null, font:"f3f416a482933016c6dcc75b227b866fb", label:"", class:"fl ext"},
		{value:"mengquguodongti", image:null, font:"f5faafa8e9a35adffdfcbbb1305ab9c90", label:"", class:"fl ext"},
		{value:"mengxiangshouzhati", image:null, font:"ff378f4b4404660fbba6dbb7413f227d6", label:"", class:"fl ext"},
		{value:"miaomiaoti", image:null, font:"f5dc6b0aefc7ab3e800d150b67ef73a49", label:"", class:"fl ext"},
		{value:"nengyuanheiti", image:null, font:"fc64e0a91f2b20ac34fd115b883c558c1", label:"", class:"fl ext"},
		{value:"ningsong", image:null, font:"fe60c4a067cb9c1ccd0397b6a0b5230b9", label:"", class:"fl ext"},
		{value:"paopaoti", image:null, font:"ff5f3db2de2060e93effb0ffc1db71d19", label:"", class:"fl ext"},
		{value:"qingqingzijinti", image:null, font:"f90efe344c0ed08fde2f9b073c20b7cff", label:"", class:"fl ext"},
		{value:"rijichahuati", image:null, font:"fb186dc39cbee30f17ac2e9bc7109d591", label:"", class:"fl ext"},
		{value:"sanfenxingkai", image:null, font:"fe58af53feb1fb969a1cd98e278710f37", label:"", class:"fl ext"},
		{value:"shaonianhefengti", image:null, font:"fd5bf2eb8174c5a7c9b16c2076ca09718", label:"", class:"fl ext"},
		{value:"shiguangshouzhati", image:null, font:"f7088a1bec897682f639d77503599a156", label:"", class:"fl ext"},
		{value:"shitouti", image:null, font:"f7ebd8b48756fac14e84b6f80d90815d9", label:"", class:"fl ext"},
		{value:"shoujinti", image:null, font:"f84ef29c8192e4770369e00f82d332ece", label:"", class:"fl ext"},
		{value:"tuyati", image:null, font:"fbbd8459f9d4e68b0c012541e63ec4da4", label:"", class:"fl ext"},
		{value:"wangziyixingzuoti", image:null, font:"ff84b2a82b199e69656e42c0e5cf5e068", label:"", class:"fl ext"},
		{value:"wensongti", image:null, font:"f1a7a34bb7ee8799cffb3085239eccf1f", label:"", class:"fl ext"},
		{value:"wuwairunheiti", image:null, font:"f92905acc8eb18b992ab8c76f25cb466b", label:"", class:"fl ext"},
		{value:"xianhei", image:null, font:"f1e3cdc872accb2498b91462b922d552d", label:"", class:"fl ext"},
		{value:"xiaochengfeifanti", image:null, font:"f4a2c1009b6970da60dd63cebfe93a44f", label:"", class:"fl ext"},
		{value:"xiaoyaoxinghshu", image:null, font:"f05039f259804244d95cf79668140f85e", label:"", class:"fl ext"},
		{value:"xingyunfeibaiti", image:null, font:"fc65ae70b7767d04e3548d396f629fd47", label:"", class:"fl ext"},
		{value:"yunxiaoti", image:null, font:"f1e1fc22ffca4fa2bf0c5ce28fc997c6d", label:"", class:"fl ext"},
		{value:"yushoujianshu", image:null, font:"fb9b78c40d240009732471271632f4365", label:"", class:"fl ext"},
		{value:"zhengwensongkai", image:null, font:"f0057d4e7ef4b418ba20168e3a1f1f049", label:"", class:"fl ext"},
		{value:"zhenhunshoushu", image:null, font:"f21de74dfdb6bb2a25f35cb02d63edb88", label:"", class:"fl ext"},
		{value:"muyaoruanbishouxie", image:null, font:"f9e85066ce39d2720e4522593eed4808f", label:"", class:"fl ext"},
		{value:"ruizizhenyanti", image:null, font:"fec10e049dc0de42e972602aa9697cd73", label:"", class:"fl ext"},
	];
	if(iframeWin.dtGlobals.support_extfont=="1"){
		fonts = fonts.concat(extfonts);
	}

	for(var i=0; i<fonts.length; i++){
		if(fonts[i].image != null){
			fonts_list += "<a class='"+fonts[i].class+"' style='cursor:pointer;display:inline-block;padding:10px;' onclick='select_this_font(this)' data-value='"+fonts[i].value+"'><img  width='200'  src='/FeiEditor/bitSite/images/fonts/"+fonts[i].image+"' /></a>";
		}else{
			var label = fonts[i].label;
			if(label == "") label = "龙飞凤舞，中文字体之美。";
			var family = fonts[i].font;
			if(family == ""){
				family = "宋体";
			}else{
				fonts_list += "<style>@font-face {\r\n";
				fonts_list += "font-family: \""+family+"\";\r\n";
				fonts_list += "src: url(\"https://fonts.goodq.top/201905/"+family+"/"+fonts[i].value+".eot\");\r\n";
				fonts_list += "src: url(\"https://fonts.goodq.top/201905/"+family+"/"+fonts[i].value+".eot?#iefix\") format(\"embedded-opentype\"),\r\n";
				fonts_list += "url(\"https://fonts.goodq.top/201905/"+family+"/"+fonts[i].value+".woff\") format(\"woff\"),\r\n";
				fonts_list += "url(\"https://fonts.goodq.top/201905/"+family+"/"+fonts[i].value+".ttf\") format(\"truetype\"),\r\n";
				fonts_list += "url(\"https://fonts.goodq.top/201905/"+family+"/"+fonts[i].value+".svg#"+family+"\") format(\"svg\");\r\n";
				fonts_list += "font-style:normal;font-weight: normal;\r\n";
				fonts_list += "}</style>\r\n";
			}

			fonts_list += "<a class='"+fonts[i].class+"' style='width:95%;cursor:pointer;display:inline-block;padding:10px;font-size:60px;font-family: "+family+"' onclick='select_this_font(this)' data-value='"+fonts[i].value+"'>"+label+"</a>";
		}

	}
	if(iframeWin.dtGlobals.support_extfont!="1"){
		fonts_list += '<a class="fl ext" href="/admin/extension.php" target="_blank" style="cursor: pointer; display: inline-block; padding: 10px;margin-left: 160px;"><img style="width: 550px;" src="/FeiEditor/bitSite/images/extfonts.jpg"></a>';
	}


	var boxyFont = new top.Boxy("<div id='fonts_list_inner' class='boxy-content ' style='display: block; background: rgb(255, 255, 255);    overflow: auto;width:900px;height:500px;border-bottom: 1px solid #e5e5e5;padding:0;'><div class='fonts_list' style='padding-left:10px;'>"+fonts_list+"</div></div>", {title: "选择字体", center:true});

	boxyFont.resize(900, 500);
	boxyFont.center();

	top.jQuery(".boxy-wrapper .title-bar").append('<span style="position:absolute;right:12px;top:9px;cursor:pointer;" onclick="page_close()">&#10006;</span>	');
	top.jQuery(".boxy-wrapper .answers").hide();
	var v = jQuery(obj).closest(".ff_kz").find("input").val();
	if(v){
		var curr = top.jQuery("#fonts_list_inner .fl[data-value='"+v+"']");
		curr.addClass("active");
		if(curr.hasClass("tw")){
			 top.jQuery("#fonts_list_inner .qfyadmintab [data-key='tw']").click();
		}else if(curr.hasClass("ext")){
			top.jQuery("#fonts_list_inner .qfyadmintab [data-key='ext']").click();
		}else{
			top.jQuery("#fonts_list_inner .qfyadmintab [data-key='cn']").click();
		}
	}else{
		 top.jQuery("#fonts_list_inner .qfyadmintab [data-key='cn']").click();
	}
	
}
function font_type_chagne(obj){
	var p = jQuery(obj).closest("#fonts_list_inner");
	var key = jQuery(obj).attr("data-key");
	p.find(".fl").hide();
	p.find(".fl."+key).css("display","inline-block");
	p.find(".qfyadmintab .current").removeClass("current");
	 jQuery(obj).find("a").addClass("current");
}
