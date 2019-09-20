var $j = jQuery.noConflict();
var iframeWin;
var Interval;
var lastVcContent ="None";
var holdStopSlider=false;
var loaderImage = "http://fast.qifeiye.com/FeiEditor/bitSite/images/preloader.gif";
var loaderDiv = "<div align='center' class='loadingClass' ><img  align='absmiddle' class='loadingClassImg' src='" + loaderImage + "' /></div>";
var loaderDivFrame = "<div class='loadingFrameClass' align='center' ><img  align='absmiddle' class='loadingClassImg' src='" + loaderImage + "' /></div>";
//get url,site id from vc init
$j(function(){
	getMessageFromVCInit();
});
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

function setBitInitFromQf() {
	setVcDocumentInit($j('#vc-inline-frame')[0]);
	Interval && self.clearInterval(Interval);
	Interval = self.setInterval("autoSaveVcContent()", 60000);
	//addbitWidgetFrameOption();

}
/* auto save page element */
function autoSaveVcContent() {
	if (lastVcContent == "None") {
		lastVcContent = vc.ShortcodesBuilder.getContent();
	} else {
		var newContent = vc.ShortcodesBuilder.getContent();

		if (lastVcContent != newContent) {
			//for combine js
			vc.ShortcodesBuilder.save(true);
			// this function save lasContent=newContent;
		}
	}
}

function addbitWidgetFrameOption(){
	iframeWin.jQuery(".bitWidgetFrameOption").css("width","100%").css("height","100%");
}
/* init vc iframe */
function setVcDocumentInit($this) {
	if (typeof $this.contentWindow == 'undefined' || typeof $this.contentWindow.jQuery === 'undefined' || typeof $this.contentWindow.jQuery.ui === 'undefined' || typeof top.jQuery === 'undefined') {
		setTimeout(function() {
			setVcDocumentInit($j('#vc-inline-frame')[0]);
		}, 1000);
	} else {
		iframeWin = $this.contentWindow;
		if(jQuery("#jiaocheng_showed").val()=="1"){
			if( top.jQuery(".jiaocheng_div").length==0 && (iframeWin.jQuery("title").html().indexOf("一个新云平台站点") >-1 ||iframeWin.jQuery("title").html().indexOf("一个新起飞页站点") >-1) ){
				if( top.jQuery(".messenger .websitenameewarning:visible").length==0 && top.getCookie('infowarning_title')!="1"){
					setTimeout(function(){
						top.jPop("亲，您还没有给网站取个名字哦，点击<a style='color:#FF6600;' href='#' class='websitenameewarning' onclick='topPopTitleWarning(this)'>这里</a>修改");
						top.jQuery(".websitenameewarning").closest(".messenger").find(".messenger-close").click(function(){
							 top.setCookie('infowarning_title','1',0.01);
						})
					},2000);
				}
			}
			if( top.jQuery(".jiaocheng_div").length==0 &&  $j("#vc_post_email").val() =="website_admin@qifeiye.com" ){
				if( top.jQuery(".messenger .websiteemailwarning:visible").length==0 && top.getCookie('infowarning_email')!="1"){
						setTimeout(function(){
							top.jPop("亲，您还没有设置接收网站信息的邮箱哦，点击<a style='color:#FF6600;' class='websiteemailwarning' href='#' onclick='topPopEmailWarning(this)'>这里</a>设置");
							top.jQuery(".websiteemailwarning").closest(".messenger").find(".messenger-close").click(function(){
								 top.setCookie('infowarning_email','1',0.01);
							})
						},2000);
				}
			}
		}

		if(iframeWin.dtGlobals.viewtemplate>0 ){
			if(iframeWin.dtGlobals.viewtemplate_sc=="1"){
				jQuery("#vc-inline-page-info").show();
			}else{
				if( top.jQuery(".messenger .viewtemplatewarning:visible").length==0){
					setTimeout(function(){
							top.jPop("本页面已经绑定了显示页模版，您在预览模式下看到的页面可能会和编辑模式下不一致，推荐使用后台编辑器<a style='color:#FF6600;' class='viewtemplatewarning' target=_blank href='/admin/qifeiye-post.php?post="+jQuery("#vc-post-id").val()+"&action=edit&qifeiye=page&edit=custom'>进行编辑</a>");
					},500);
				}
			}

		}
		//使用新的编辑器
		if(typeof iframeWin.jQuery.fn.froalaEditor == "undefined"){
			setTimeout(function(){
				iframeWin.jQuery('body').append("<div id='bit_test' style='display:none'></div>");
				iframeWin.CKEDITOR.inline("bit_test");
			},5000);
		}
		// page init to bind event
		bindEventAfterLoading(iframeWin.jQuery('body'));
		top.jQuery("#vc-preloader").hide();
		setTimeout(function(){
			SortableInit(iframeWin.jQuery('body'));
			draggableInit(iframeWin.jQuery('body'));

			keyEventInit(iframeWin);
			selectableInit();


			if(top.autoOpenSettingpage==true){
				top.autoOpenSettingpage = false;
				top.jQuery(".editOnePage").click();
			}
		},600)
		if(jQuery("#vc-inline-frame").attr("data-back")==0){
			top.jQuery(".control-btn.backbtn").addClass("disabled");
		}
		if(jQuery("#vc-inline-frame").attr("data-go")==0){
			top.jQuery(".control-btn.gobtn").addClass("disabled");
		}
		if(iframeWin.jQuery("#pagehtmlcontainer_drag_contrainer").length>0){
			iframeWin.jQuery("#pagehtmlcontainer_drag_contrainer").html(jQuery("#pagehtmlcontainer_drag_contrainer").html());

			if(top.getCookie("fullbarstatusnew")=="on"){
				iframeWin.jQuery("#pagehtmlcontainer_drag").show();
				iframeWin.jQuery(".pagehtmlcontainer_drag_close").hide();
			}else{
				iframeWin.jQuery("#pagehtmlcontainer_drag").hide();
				iframeWin.jQuery(".pagehtmlcontainer_drag_close").show();
			}
		}

		popjiaocheng_xd();

		 var anchor = GetQueryString("qfy_anchor");
		  if(anchor){
			  if( iframeWin.jQuery("#"+anchor).length>0){
				var srcolltop = iframeWin.jQuery("#"+anchor).offset().top;
				if(srcolltop>36) srcolltop = srcolltop-36;
				iframeWin.jQuery("html, body").animate({ scrollTop: srcolltop },'fast');
			  }
		  }
		  if(top.inittoopenpage=="revison"){
			  //auto open
			  top.restorePage();
			  top.inittoopenpage = false;
		  }

	}
}

function gobackend_edit(){
	var post_id = jQuery("#vc-post-id").val();
	var post_type = jQuery("#pageUrl_posttype").val();
	if(post_id>0){
		if(post_type=="product"){
			top.location.href="/admin/qifeiye-post.php?post="+post_id+"&action=edit";
		}else{
			top.location.href="/admin/qifeiye-post.php?post="+post_id+"&action=edit&qifeiye=page&edit=custom";
		}
	}
}
function gofrontend_edit(){
	jQuery("#vc-inline-page-info").remove();
}
function goviewend_edit(){
	if(iframeWin.dtGlobals.viewtemplate>0 ){
		top.$('#pageUrl').val(iframeWin.dtGlobals.viewtemplate).change();
	}
}
function goviewclose_edit(){
	top.jConfirm('确认是否禁用所有显示页效果，你还可以在"后台 > 页面和菜单 > 显示页面"重新开启这个功能。',function(){
		$j.post("/FeiEditor/siteEdit/ajax_updateOption" ,{"key":"closeAllViewTemplate","val":"1"},function(data){
				top.location.reload();
		});
	});
}
function popjiaocheng_xd(){
	if(jQuery("#welcomeWizard").val()=="1" || top.jQuery(".boxy-wrapper:visible").length>0){
		popjiaocheng();
		return;
	}
	var topbox_step = 0;
	var topbox_btn = '<form class="answers" > <input type="button" class="xd_cancel buttonClass1" value="关闭" style="text-decoration: none;color:#fff;background:#ccc;float:left;"> <input type="button" class="xd_next buttonClass0" value="继续"></form>';
	var topbox = top.jBox("<div><div class='xd_content' style='height:80px;'>客官好，小飞这厢有礼了。<br><br>接下来有些小提示，帮助您更快的熟悉编辑器，开始建站之旅...</div>"+topbox_btn+"</div>","新手提示");
	top.jQuery(".boxy-modal-blackout").addClass("xd");
	top.jQuery(".xd_next").click(function(){
		var maxleft = top.jQuery("body").width() - 520;
		top.jQuery(".outlineyellow").removeClass("outlineyellow");
		iframeWin.jQuery(".outlineyellow").removeClass("outlineyellow");
		if(topbox_step==0){
			if(top.jQuery("#pagehtmlcontainer:visible").height()>1){
				top.jQuery("#pagehtmlcontainer .container_inner:visible").addClass("outlineyellow");
				top.jQuery(".boxy-wrapper.fixed:visible").animate({"left":"370","top":"100"},function(){
					top.jQuery(".xd_content").html("左边是打开之后的页面导航栏。<br><br>点击页面的标题就可以在不同页面之间进行切换！");
				});
			}else{
				top.jQuery("#bit_site_top #pagehtmlshowtext>div").addClass("outlineyellow");
				top.jQuery(".boxy-wrapper.fixed:visible").animate({"left":"100","top":"60"},function(){
					top.jQuery(".xd_content").html("您可以从上方打开页面导航。<br><br>打开之后，可以看到所有的页面！");
				});

			}
		}else if(topbox_step==1){
			if(top.jQuery("#pagehtmlcontainer:visible").height()>1){
				top.showpagehtml_fun();
				top.jQuery("#bit_site_top #pagehtmlshowtext>div").addClass("outlineyellow");
				top.jQuery(".boxy-wrapper.fixed:visible").animate({"left":"100","top":"60"},function(){
					top.jQuery(".xd_content").html("您可以从上方打开页面导航。<br><br>打开之后，可以看到所有的页面！");
				});
			}else{
				top.showpagehtml_fun();
				top.jQuery("#pagehtmlcontainer .container_inner:visible").addClass("outlineyellow");
				top.jQuery(".boxy-wrapper.fixed:visible").animate({"left":"370","top":"100"},function(){
					top.jQuery(".xd_content").html("左边是打开之后的页面导航栏。<br><br>点击页面的标题就可以在不同页面之间进行切换！");
				});
			}
		}else if(topbox_step==2){
			if(top.jQuery("#pagehtmlcontainer:visible").height()>1){
				top.showpagehtml_fun();
			}
			top.jQuery("#bit_site_top .addOnePage").addClass("outlineyellow");
			top.jQuery(".boxy-wrapper.fixed:visible").animate({"left":"260","top":"60"},function(){
				top.jQuery(".xd_content").html("这是新增按钮。<br><br>点击这里可以新创建一个页面哦！");
			});

		}else if(topbox_step==3){
			if(iframeWin.jQuery('.pagehtmlcontainer_drag_close:visible').length>0){
				iframeWin.customclose_fun();
			}
			iframeWin.jQuery("#pagehtmlcontainer_drag .customcontent").addClass("outlineyellow");
			top.jQuery(".boxy-wrapper.fixed:visible").animate({"left":"100","top":"150"},function(){
				top.jQuery(".xd_content").html("这是常用设计。<br><br>点击这里可以快速添加常用内容！");
			});
		}else if(topbox_step==4){
			iframeWin.customcontent_fun();
			iframeWin.jQuery("#pagehtmlcontainer_drag .innnerContainer").addClass("outlineyellow");
			top.jQuery(".boxy-wrapper.fixed:visible").animate({"left":"390","top":"200"},function(){
				top.jQuery(".xd_content").html("左边是常用设计面板。<br><br>你可以拖动常用设计到右边页面的内容区域！");
			});
		}else if(topbox_step==5){
			top.jQuery("#bit_site_top #qiyukf").addClass("outlineyellow");
			top.jQuery(".boxy-wrapper.fixed:visible").animate({"left":maxleft,"top":"60"},function(){
				top.jQuery(".xd_content").html("如果在建站过程中遇到什么困难,可以通过这里获得更多的帮助。<br><br>祝您拥有一个愉快的建站之旅！");
				top.jQuery(".xd_next").hide();
				top.jQuery(".xd_cancel").css("float","none").css("background-color","#58ACFE").css("border-color","#58ACFE");
			});
		}
		topbox_step ++;
	});
	top.jQuery(".xd_cancel").click(function(){
		topbox.hide();
		top.jQuery(".outlineyellow").removeClass("outlineyellow");
		iframeWin.jQuery(".outlineyellow").removeClass("outlineyellow");
		jQuery.post("/FeiEditor/siteEdit/updateOption/option",{name:"welcomeWizard",val:"1"},function(data){})

		popjiaocheng();
	});

}
function popjiaocheng_direct(){
	jQuery.post("/FeiEditor/siteEdit/updateOption/option",{name:"jiaocheng_showed",val:"0"},function(data){})
	jQuery("#jiaocheng_showed").val(0);
	top.setCookie("jiaocheng1_visited","");
	popjiaocheng();
}

function popjiaocheng(){
	if(jQuery("#jiaocheng_showed").val()=="1"){
		return;
	}
	if(top.jQuery(".jiaochengmessenger").length>0){
		return;
	}
	var urlparam = '&autoplay=1&play_height=510&KeepThis=true&TB_iframe=true&height=510&width=910';
	var url_1 = 'http://www.qifeiye.com/api/video-server/play.php?se=0&media_id=7e4817f065a5492eaa5ba98bd142061c&callback=区块'+urlparam;
	var url_2 = 'http://www.qifeiye.com/api/video-server/play.php?se=0&media_id=3b4e6ebd58e64e788d8c1867461a4712&callback=边距'+urlparam;
	var url_3 = 'http://www.qifeiye.com/api/video-server/play.php?se=0&media_id=1635ae8051c4410ca2fbf555693fd770&callback=logo'+urlparam;
	var url_4 = 'http://www.qifeiye.com/api/video-server/play.php?se=0&media_id=a28b7850fe3e4aefa7cdca1b0cd07f82&callback=标题'+urlparam;
	var url_5 = 'http://www.qifeiye.com/api/video-server/play.php?se=0&media_id=08ddf3c45de948739beaa21a849d33ce&callback=背景图片'+urlparam;
	var url_6 = 'http://www.qifeiye.com/api/video-server/play.php?se=0&media_id=f70e860d152a4fbb9e6b7abe0fae5997&callback=链接'+urlparam;
	var url_7 = 'http://www.qifeiye.com/api/video-server/play.php?se=0&media_id=4404c5410cc9441cab9d86ec887c8efc&callback=菜单'+urlparam;
	var url_8 = 'http://www.qifeiye.com/api/video-server/play.php?se=0&media_id=4ea52a76d94d487289c95e3ed0bfffe1&callback=视频'+urlparam;
	var url_9 = 'http://www.qifeiye.com/api/video-server/play.php?se=0&media_id=4c957a624e514775aff189d69788e3d7&callback=背景视频'+urlparam;
	var url_10 ='http://www.qifeiye.com/api/video-server/play.php?se=0&media_id=b827e7e788b44acca10d10ea5725b51c&callback=邮件'+urlparam;
	var url_11 = 'http://www.qifeiye.com/api/video-server/play.php?se=0&media_id=661e5c425e93446b8944ce262dc52dfb&callback=表单'+urlparam;
	var url_12 ='http://www.qifeiye.com/api/video-server/play.php?se=0&media_id=030d8721793f48efb8e3419f7f247633&callback=名字及图标'+urlparam;
	var visited = top.getCookie("jiaocheng1_visited");

	var str = '<div style="width:100%;padding-bottom:20px;" class="messenger-message-inner jiaocheng-message-inner"><h4 style="color:#fff;">入门视频教程</h4>';
		str += '<div style="width:100%" class="item_inner">';
		str += '<div  style="width:100%;position:relative;" class="item1  '+(visited.indexOf("item1")>-1?"visited":"")+'"><a style="color: #5e87b0;text-decoration: none;line-height:20px;"   rel="nofollow" href="'+url_1+'" class="thickbox">如何设计页面：从简单画格子开始！</a></div>';
		str += '<div  style="width:100%;position:relative;" class="item2 '+(visited.indexOf("item2")>-1?"visited":"")+'"><a  style="color: #5e87b0;text-decoration: none;line-height:20px;"  rel="nofollow" href="'+url_2+'" class="thickbox">如何调整边距？</a></div>';
		str += '<div  style="width:100%;position:relative;" class="item3 '+(visited.indexOf("item3")>-1?"visited":"")+'"><a  style="color: #5e87b0;text-decoration: none;line-height:20px;"  rel="nofollow" href="'+url_3+'" class="thickbox">如何更换网站的LOGO？</a></div>';
		str += '<div  style="width:100%;position:relative;" class="item4 '+(visited.indexOf("item4")>-1?"visited":"")+'"><a  style="color: #5e87b0;text-decoration: none;line-height:20px;"  rel="nofollow" href="'+url_4+'" class="thickbox">如何修改标题，修改文字？</a></div>';
		str += '<div  style="width:100%;position:relative;" class="item5 '+(visited.indexOf("item5")>-1?"visited":"")+'"><a  style="color: #5e87b0;text-decoration: none;line-height:20px;"  rel="nofollow" href="'+url_5+'" class="thickbox">如何替换网站的图片，背景图片？</a></div>';
		str += '<div  style="width:100%;position:relative;" class="item6 '+(visited.indexOf("item6")>-1?"visited":"")+'"><a  style="color: #5e87b0;text-decoration: none;line-height:20px;"  rel="nofollow" href="'+url_6+'" class="thickbox">如何给内容添加链接？</a></div>';
		str += '<div  style="width:100%;position:relative;" class="item7 '+(visited.indexOf("item7")>-1?"visited":"")+'"><a  style="color: #5e87b0;text-decoration: none;line-height:20px;" rel="nofollow" href="'+url_7+'" class="thickbox">如何新增一个页面,且插入到菜单中？</a></div>';
		str += '<div  style="width:100%;position:relative;" class="item8 '+(visited.indexOf("item8")>-1?"visited":"")+'"><a  style="color: #5e87b0;text-decoration: none;line-height:20px;" rel="nofollow" href="'+url_8+'" class="thickbox">如何添加视频？</a></div>';
		str += '<div  style="width:100%;position:relative;" class="item9 '+(visited.indexOf("item9")>-1?"visited":"")+'"><a  style="color: #5e87b0;text-decoration: none;line-height:20px;" rel="nofollow" href="'+url_9+'" class="thickbox">如何添加超级好看的特色背景视频？</a></div>';
		str += '<div  style="width:100%;position:relative;" class="item_10 '+(visited.indexOf("item_10")>-1?"visited":"")+'"><a  style="color: #5e87b0;text-decoration: none;line-height:20px;" rel="nofollow" href="'+url_10+'" class="thickbox">如何设置网站邮件？</a></div>';
		str += '<div  style="width:100%;position:relative;" class="item_11 '+(visited.indexOf("item_11")>-1?"visited":"")+'"><a  style="color: #5e87b0;text-decoration: none;line-height:20px;" rel="nofollow" href="'+url_11+'" class="thickbox">如何设置表单设置接收邮箱？</a></div>';
		str += '<div  style="width:100%;position:relative;" class="item_12 '+(visited.indexOf("item_12")>-1?"visited":"")+'"><a  style="color: #5e87b0;text-decoration: none;line-height:20px;" rel="nofollow" href="'+url_12+'" class="thickbox">如何修改网站的名字及图标？</a></div>';
		str += '</div>';
		str += '</div>';
	var msg = "";
		msg += '<ul class="messenger messenger-fixed messenger-on-top messenger-on-right messenger-theme-flat jiaochengmessenger">';
		msg += '<li class="messenger-message-slot">';
		msg += '<div class="messenger-message message alert info message-info alert-info "><button data-dismiss="alert" class="messenger-close jiaocheng-messenger-close" onclick="jiaochengmessengerclose()" type="button">×</button>';
		msg +=	str;
		msg += '</div>';
		msg += '</div>';
		msg += '</li>';
		msg += '</ul>';


		top.jQuery("body").prepend(msg);

		top.jQuery("body .jiaochengmessenger .item_inner>div").click(function(){
			var $this = jQuery(this);
			top.jQuery("#TB_window #TB_title:visible").remove();
			$this.addClass("visited");
			var allvisited = new Array();　

			top.jQuery(".jiaochengmessenger .visited").each(function(i){
				allvisited[i] = jQuery(this).attr("class");
			})
			top.setCookie("jiaocheng1_visited",allvisited.join("|^|"));
		})

}
function bind_topbar_events($column){
	var isfullpage = 0;
	if($column.hasClass("page-template-template-fullscreen-php")){
		isfullpage = 1;
	}
	//top bar
	var obj_bittopbar = $column.find(".bit-top-bar");
	var obj_bittopbar_left = obj_bittopbar.css("padding-left");
	var obj_bittopbar_right = obj_bittopbar.css("padding-right");


	obj_bittopbar.bind("mouseenter",function() {
		var obj= $j(this);
		$j(this).find(".vc-resize-linebar,.vc-resize-x-left-bar,.vc-resize-x-right-bar,.other_controls").fadeIn();
		if (obj.find(">.bit-controls-element").length > 0) {
			obj.find(">.bit-controls-element").show();
		} else {
			var str = '<div class="controls-element vc-controls bit-controls-element"  style="line-height:0px;opacity:1;visibility:visible;transition:auto">';
			str += '<div class="controls-cc">';
			str += '<a class="control-btn vc-element-name">';
			str += '<span  class="vc-btn-content vo-btn-nomove">页眉</span>';
			str += '</a>';
			str += '<a title="设置 页眉"  class="control-btn control-btn-edit setIcon bit-set-topbar" ><span class="vc-btn-content"><span class="icon"></span></span></a>';
			str += '<a title="帮助"  data-for="页眉"  class="control-btn  bit_button_helper"><span> ？</span></a>';
			str += '</div>';
			str += '</div>';
			obj.prepend(str);
			obj.find(".controls-element").fadeIn();

			obj.find(".bit-set-topbar").bind("click",function(){
				parent.topbarSetting();
			})
		}
	}).bind("mouseleave", function() {
			if( $j(this).find(".ui-draggable-dragging").length==0){
				$j(this).find(".vc-resize-linebar,.vc-resize-x-left-bar,.vc-resize-x-right-bar,.other_controls").fadeOut("fast");
			}
			$j(this).find(">.controls-element").fadeOut("fast");

	}).append(editorLineBar(obj_bittopbar_left,obj_bittopbar_right,"topbar"))
	obj_bittopbar.find(".vc-resize-controls_container").draggable({axis: "y",
			handle: ".vc-resize-linebar",
			helper: function() {
				return $j("<div></div>");
			},
			start: function( event, ui ) {
				obj_bittopbar.find(".topbar .drag-element-right-value,.topbar .drag-element-value").show();
			},
			drag: function( event, ui ) {
				obj_bittopbar.css("line-height",ui.position.top+"px");
				obj_bittopbar.find(".topbar .drag-element-right-value,.topbar .drag-element-value").html("高度:"+(ui.position.top>0?ui.position.top:0)+"px");
			},
			stop: function( event, ui ) {
				var current_value = obj_bittopbar.height();
				obj_bittopbar.find(".topbar .drag-element-right-value,.topbar .drag-element-value").html("").hide();
				$j.post("/FeiEditor/siteEdit/updateOneOption" ,{"bit-topbar-minheight":current_value});
			}
	})
	var $topbar_start_left = 0;
	obj_bittopbar.find(".vc-resize-x-left-bar").draggable({axis: "x",
			helper: function() {
				return $j("<div></div>");
			},
			start: function( event, ui ) {
				var current_value = obj_bittopbar.css("padding-left");
				if(current_value) current_value = current_value.replace("px","");
			    if(isNaN(current_value))current_value = 0;
				$topbar_start_left = ui.position.left*1+current_value*1;
				$j(this).next().show();
				guideline_start(event,obj_bittopbar.find(".wf-table"),'container');
			},
			stop: function( event, ui ) {
				var current_value = obj_bittopbar.css("padding-left");
				if(current_value) current_value = current_value.replace("px","");
			    if(isNaN(current_value))current_value = 0;
				$j.post("/FeiEditor/siteEdit/updateOneOption" ,{"bit-topbar-left-padding":current_value});
				$j(this).next().html("").hide();
				guideline_end();

			},
			drag: function( event, ui ) {
				var nowpx = $topbar_start_left + ui.position.left;
				obj_bittopbar.css("padding-left",nowpx+"px");
				$j(this).next().html("左内:"+(nowpx>0?nowpx:0)+"px");
				guideline_draw(event,obj_bittopbar.find(".vc-resize-x-left-bar"),null,"left");

			}
	});
	var $topbar_start_right = 0;
	obj_bittopbar.find(".vc-resize-x-right-bar").draggable({axis: "x",
			helper: function() {
				return $j("<div></div>");
			},
			start: function( event, ui ) {
				var current_value = obj_bittopbar.css("padding-right");
				if(current_value) current_value = current_value.replace("px","");
			    if(isNaN(current_value))current_value = 0;
				$topbar_start_right = ui.position.left*1+current_value*1;
				$j(this).next().show();
				guideline_start(event,obj_bittopbar.find(".wf-table"),'container');
			},
			stop: function( event, ui ) {
				var current_padding = obj_bittopbar.css("padding-right");
				if(current_padding) current_padding = current_padding.replace("px","");
			    if(isNaN(current_padding))current_padding = 0;
				$j(this).next().html("").hide();
				$j.post("/FeiEditor/siteEdit/updateOneOption" ,{"bit-topbar-right-padding":current_padding});
				guideline_end();
			},
			drag: function( event, ui ) {
				var nowpx = $topbar_start_right - ui.position.left;
				obj_bittopbar.css("padding-right",nowpx+"px");
				$j(this).next().html("右内:"+(nowpx>0?nowpx:0)+"px");
				guideline_draw(event,obj_bittopbar.find(".vc-resize-x-right-bar"),null,"left");
			}
	});

	var topbar_1 = $column.find(".topbar_right");
	if(topbar_1.length>0){
		topbar_1.append(editorSmallLineBar3('topbar_1'));
		var topbar_1_control = topbar_1.find(".vc-resize-controls_container.topbar_1");
		var topbar_1_start_bottom = 0;
		var topbar_1_start_top = 0;
		var topbar_1_start_left = 0;
		var topbar_1_start_right = 0;
		topbar_1_control.find(".drag-element").draggable({axis: "y",
				helper: function() {
					return $j("<div></div>");
				},
				start: function( event, ui ) {
					var current_value = topbar_1.css("padding-bottom");
					if(current_value) current_value = current_value.replace("px","");
					if(isNaN(current_value))current_value = 0;
					topbar_1_start_bottom = current_value*1 + ui.position.top*1;
					$j(this).next().show();
				},
				stop: function( event, ui ) {
					var current_value = topbar_1.css("padding-bottom");
					if(current_value) current_value = current_value.replace("px","");
					if(isNaN(current_value))current_value = 0;
					$j(this).next().html("").hide();
					jQuery('[name="bit-topbar_1-padding-bottom"]').val(current_value);
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"bit-topbar_1-padding-bottom":current_value});


				},
				drag: function( event, ui ) {
					var nowpx = topbar_1_start_bottom  + ui.position.top;
					topbar_1.css("padding-bottom",nowpx+"px");
					$j(this).next().html("内下:"+(nowpx>0?nowpx:0)+"px");
				}
		});
		topbar_1_control.find(".drag-element-right").draggable({axis: "y",
				helper: function() {
					return $j("<div></div>");
				},
				start: function( event, ui ) {
					var current_value = topbar_1.css("padding-top");
					if(current_value) current_value = current_value.replace("px","");
					if(isNaN(current_value))current_value = 0;
					topbar_1_start_top = current_value*1 + ui.position.top*1;
					$j(this).next().show();
				},
				stop: function( event, ui ) {
					var current_value = topbar_1.css("padding-top");
					if(current_value) current_value = current_value.replace("px","");
					if(isNaN(current_value))current_value = 0;
					$j(this).next().html("").hide();
					jQuery('[name="bit-topbar_1-padding-top"]').val(current_value);
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"bit-topbar_1-padding-top":current_value});

				},
				drag: function( event, ui ) {
					var nowpx = topbar_1_start_top  + ui.position.top;
					topbar_1.css("padding-top",nowpx+"px");
					$j(this).next().html("内上:"+(nowpx>0?nowpx:0)+"px");
				}
		});
		topbar_1_control.find(".vc-resize-x-left-bar").draggable({axis: "x",
				helper: function() {
					return $j("<div></div>");
				},
				start: function( event, ui ) {
					var current_value = topbar_1.width();
					topbar_1_start_left = current_value*1 + ui.position.left*1;
					$j(this).next().show();
				},
				stop: function( event, ui ) {
					var current_value = topbar_1.width();
					$j(this).next().html("").hide();
					jQuery('[name="bit-topbar_1-width"]').val(current_value);
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"bit-topbar_1-width":current_value});

				},
				drag: function( event, ui ) {
					var nowpx = topbar_1_start_left  - ui.position.left;
					topbar_1.css("width",nowpx+"px");
					if($column.width()>768 ){
						topbar_1.parent().css("width",nowpx+"px");
					}
					$j(this).next().html("宽度:"+Math.ceil(nowpx>0?nowpx:0)+"px");

				}
		});
		topbar_1_control.find(".vc-resize-x-right-bar").draggable({axis: "x",
				helper: function() {
					return $j("<div></div>");
				},
				start: function( event, ui ) {
					var current_value = topbar_1.width();
					topbar_1_start_left = current_value*1 + ui.position.left*1;
					$j(this).next().show();
				},
				stop: function( event, ui ) {
					var current_value = topbar_1.width();
					$j(this).next().html("").hide();
					jQuery('[name="bit-topbar_1-width"]').val(current_value);
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"bit-topbar_1-width":current_value});

				},
				drag: function( event, ui ) {
					var nowpx = topbar_1_start_right  + ui.position.left;
					topbar_1.css("width",nowpx+"px");
					$j(this).next().html("宽度:"+Math.ceil(nowpx>0?nowpx:0)+"px");
				}
		});
		topbar_1_control.find(".set").click(function(){

			vc.setting_widget_dialog5.render_topbar("topbar_1");
		});


	}
	var topbar_2 = $column.find(".topbar_left");
	if(topbar_2.length>0){
		topbar_2.append(editorSmallLineBar3('topbar_2'));
		var topbar_2_control = topbar_2.find(".vc-resize-controls_container.topbar_2");
		var topbar_2_start_bottom = 0;
		var topbar_2_start_top = 0;
		var topbar_2_start_left = 0;
		var topbar_2_start_right = 0;
		topbar_2_control.find(".drag-element").draggable({axis: "y",
				helper: function() {
					return $j("<div></div>");
				},
				start: function( event, ui ) {
					var current_value = topbar_2.css("padding-bottom");
					if(current_value) current_value = current_value.replace("px","");
					if(isNaN(current_value))current_value = 0;
					topbar_2_start_bottom = current_value*1 + ui.position.top*1;
					$j(this).next().show();
				},
				stop: function( event, ui ) {
					var current_value = topbar_2.css("padding-bottom");
					if(current_value) current_value = current_value.replace("px","");
					if(isNaN(current_value))current_value = 0;
					$j(this).next().html("").hide();
					jQuery('[name="bit-topbar_2-padding-bottom"]').val(current_value);
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"bit-topbar_2-padding-bottom":current_value});


				},
				drag: function( event, ui ) {
					var nowpx = topbar_2_start_bottom  + ui.position.top;
					topbar_2.css("padding-bottom",nowpx+"px");
					$j(this).next().html("内下:"+(nowpx>0?nowpx:0)+"px");
				}
		});
		topbar_2_control.find(".drag-element-right").draggable({axis: "y",
				helper: function() {
					return $j("<div></div>");
				},
				start: function( event, ui ) {
					var current_value = topbar_2.css("padding-top");
					if(current_value) current_value = current_value.replace("px","");
					if(isNaN(current_value))current_value = 0;
					topbar_2_start_top = current_value*1 + ui.position.top*1;
					$j(this).next().show();
				},
				stop: function( event, ui ) {
					var current_value = topbar_2.css("padding-top");
					if(current_value) current_value = current_value.replace("px","");
					if(isNaN(current_value))current_value = 0;
					$j(this).next().html("").hide();
					jQuery('[name="bit-topbar_2-padding-top"]').val(current_value);
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"bit-topbar_2-padding-top":current_value});
				},
				drag: function( event, ui ) {
					var nowpx = topbar_2_start_top  + ui.position.top;
					topbar_2.css("padding-top",nowpx+"px");
					$j(this).next().html("内上:"+(nowpx>0?nowpx:0)+"px");
				}
		});
		topbar_2_control.find(".vc-resize-x-left-bar").draggable({axis: "x",
				helper: function() {
					return $j("<div></div>");
				},
				start: function( event, ui ) {
					var current_value = topbar_2.width();
					topbar_2_start_left = current_value*1 + ui.position.left*1;
					$j(this).next().show();
				},
				stop: function( event, ui ) {
					var current_value = topbar_2.width();
					$j(this).next().html("").hide();
					jQuery('[name="bit-topbar_2-width"]').val(current_value);
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"bit-topbar_2-width":current_value});

				},
				drag: function( event, ui ) {
					var nowpx = topbar_2_start_left  - ui.position.left;
					topbar_2.css("width",nowpx+"px");
					if($column.width()>768 ){
						topbar_2.parent().css("width",nowpx+"px");
					}
					$j(this).next().html("宽度:"+Math.ceil(nowpx>0?nowpx:0)+"px");

				}
		});
		topbar_2_control.find(".vc-resize-x-right-bar").draggable({axis: "x",
				helper: function() {
					return $j("<div></div>");
				},
				start: function( event, ui ) {
					var current_value = topbar_2.width();
					topbar_2_start_left = current_value*1 + ui.position.left*1;
					$j(this).next().show();
				},
				stop: function( event, ui ) {
					var current_value = topbar_2.width();
					$j(this).next().html("").hide();
					jQuery('[name="bit-topbar_2-width"]').val(current_value);
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"bit-topbar_2-width":current_value});
				},
				drag: function( event, ui ) {
					var nowpx = topbar_2_start_right  + ui.position.left;
					topbar_2.css("width",nowpx+"px");
					$j(this).next().html("宽度:"+Math.ceil(nowpx>0?nowpx:0)+"px");
				}
		});

		topbar_2_control.find(".set").click(function(){

			vc.setting_widget_dialog6.render_topbar("topbar_2");


		});

	}
}
function bind_header_events($column){
	var isfullpage = 0;
	if($column.hasClass("page-template-template-fullscreen-php")){
		isfullpage = 1;
	}
	setTimeout(function(){
		if($column.find("#page #header").css("position")=="absolute" || $column.find("#page #header").css("position")=="fixed"){
			header_absolute_generate($column);
		}
	},1000);

	if($column.find("#header.headerPM").length>0){
		var obj_header_wrap = $column.find("#header.headerPM");
	}else{
	    var obj_header_wrap = $column.find("#header.headerInnerPM > .wf-wrap,#header.headerInnerPM .navigation-holder > div");
	}
	$column.find("#header").bind("mouseenter",function() {
		header_absolute_show($column);
		bitshowBar(this,"header");
		$j(this).find(".vc-resize-linebar,.vc-resize-x-left-bar,.vc-resize-x-right-bar,.other_controls").fadeIn();
		$column.find("#header .vc-resize-x-v").html("左内:"+obj_header_wrap.css("padding-left"));
		$column.find("#header .vc-resize-x-r-v").html("右内:"+obj_header_wrap.css("padding-right"));

	}).bind("mouseleave", function() {
		header_absolute_hide($column);
		$j(this).find(".controls-column").hide();
		if( $j(this).find(".ui-draggable-dragging").length==0){
			$j(this).find(".vc-resize-linebar,.vc-resize-x-left-bar,.vc-resize-x-right-bar,.other_controls").fadeOut("fast");
		}
	})


	$column.find(".qfy-sub-div-inner").each(function(){
		 var $this = jQuery(this);
		 var p = $this.closest("li");
		 p.bind("mouseenter",function() {
			var obj= $this;
			if (obj.find(".bit-controls-metaelement").length > 0) {
				obj.find(".bit-controls-metaelement").show();
			} else {
				var str = '<div class="controls-element vc-controls bit-controls-metaelement wf-mobile-hidden"  style="  position: absolute;top: 10px;left:60px;line-height:0px;opacity:1;visibility:visible;transition:auto">';
				str += '<div class="controls-cc">';

				str += '<a title="编辑Meta菜单" style="cursor:pointer;color:#fff;padding:2px 2px;height: 18px; line-height: 18px; font-size: 13px ! important;"  class="control-btn control-btn-edit tosubpage" >编辑Meta菜单</a>';
				str += '<a title="删除"  style="background:#f9b418;cursor:pointer;color:#fff;padding:2px 2px;height: 18px; line-height: 18px; font-size: 13px ! important;"  class="control-btn control-btn-edit todeletesubpage" >删除</a>';
				str += '</div>';
				str += '</div>';
				obj.prepend(str);
				obj.find(".controls-element").show();

				obj.find(".tosubpage").bind("click",function(){
					var postid =obj.parent().attr("data-postid");
					top.$('#pageUrl').val(postid).change();
				});
				obj.find(".todeletesubpage").bind("click",function(){
					var postid =obj.parent().attr("data-postid");
					var menuid =obj.parent().attr("data-menuid");
					jConfirm("确认是否删除Meta菜单",function(){
						jQuery.post("/FeiEditor/siteEdit/deletemetamenu",{"menuid":menuid,"postid":postid},function(){
							location.reload();
						});
					})


				})


			}
		}).bind("mouseleave", function() {
			$this.find(".bit-controls-metaelement").hide();
		});

	})

	if($column.find(">#page").hasClass("qfy-meta-page")){

		top.jQuery(".editOnePage").hide();
		top.jQuery(".copyOnePage").hide();
		top.jQuery(".deletepage").hide();
		top.jQuery(".site_tabs .psubclass3").hide();
		top.jQuery(".site_tabs_other .backStyle span").css("background-position-y","-48px");
		top.jQuery(".site_tabs_other .backStyle").removeAttr("href").bind("click",function(e){
				e.stopPropagation();
				e.preventDefault();
				$column.find(".metamenuinfo .tohomepage").click();


		})
		jQuery(".mobile_setting_bar").addClass("displaynone");


		//top.jQuery(".site_tabs_other>li").hide();
		//top.jQuery(".site_tabs_other>li:last").show();
		var obj= $column.find(">#page");
		if (obj.find(".metamenubar").length > 0) {
			obj.find(".metamenubar").show();
		} else {
			var w = $column.find(">#page").width();
			var h = $column.find(">#page").height();
			var full =$column.find(">#page").attr("data-full");
			var bodywidth  = $column.width();
			var bodyheigbt  = jQuery("body").height();

			if(h<bodyheigbt){
				var top1=(h/2)+"px";
			}else{
				var top1="50%";
			}
			var right = (bodywidth-w)/2-120;
			if(full=="1"){
				right = "0";
			}
			var name = top.jQuery("#pagehtmlshowtext .text").html();
			var str = '<div class="metamenuinfo" style="max-width: 1280px; margin: 0px auto; text-align: left;"><table border=0 STYLE="WIDTH:100%"><tr><td><h4  style="color: rgb(51, 51, 51); font-size: 20px; text-align: left; line-height: 60px; margin-bottom: 0px; height: 60px;"><strong style="color:#000;display:inline-block;font-size:20px;  overflow: hidden;">正在编辑组件页面:</strong><span style="color:#333;display:inline-block;width:200px;overflow:hidden;white-space:nowrap;overflow:hidden;text-overflow:ellipsis; ">'+name+'</span></h4></td><td width="15"><a href="#" class="tohomepage" style="font-weight: 700;position:relative;top:2px;color: #333" ONMOUSEOVER="this.style.color=\'#1e73be\'" ONMOUSEOUT="this.style.color=\'#333\'"  >&#10005;</a></td></tr></table></div>';
			$column.prepend(str);

			if($column.find(">#page").hasClass("metamenu") ){
				var str = '<div class="metamenubar " style="z-index:9;position:fixed;top:'+top1+';right:'+right+'px"><a title="左右拖动，调整宽度" style="cursor:w-resize;color:#fff;padding:2px 2px;height: 18px; line-height: 18px; font-size: 13px ! important;background:#5E87B0;"  class="control-btn control-btn-edit tosetsubpagewidth" ><i style="background-position: -80px -144px;width: 18px;background-image: url(http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/images/toolbar_new.png);background-repeat: no-repeat;cursor: w-resize;display: inline-block;font-size: 12px;height: 18px;"></i><span style="position:relative;top:-4px;">调整宽度</span></a><a title="设置参数" style="cursor:pointer;color:#fff;padding:2px 2px;height: 18px; line-height: 18px; font-size: 13px ! important;background:#F7B519;"  class="control-btn control-btn-edit tosetsubpage" ><i style="background-position: -80px -246px;width: 18px;background-image: url(http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/images/toolbar_new.png);background-repeat: no-repeat;cursor: pointer;display: inline-block;font-size: 12px;height: 18px;"></i><span style="position:relative;top:-4px;">设置</span></a>';
				str += '</div>';
				obj.prepend(str);
				$column.find(".metamenuinfo").css("max-width",$column.find("#page").css("width"));
			}

			var metamenubar = obj.find(".metamenubar");
			metamenubar.show();
			var oldpagewidth = 0;
			$column.find(".tosetsubpagewidth").draggable({axis: "x",
				helper: function() {
					return $j("<div></div>");
				},
				start: function( event, ui ) {
					oldpagewidth = obj.width();
				},
				stop: function( event, ui ) {
					var menuid =obj.attr("data-menuid");
					var width = obj.width();
					var right = (bodywidth-width)/2-120;
					metamenubar.css("right",right+"px");
					ajaxBeforeLoading(0,$column);

					jQuery.post("/FeiEditor/siteEdit/updatemetamenu",{"postid":menuid,"width":width,"full":0},function(){
						location.reload();
					});
				},
				drag: function( event, ui ) {
					var nowpx = oldpagewidth  + ui.position.left*2;
					obj.css("width",nowpx+"px").css("margin","0 auto");

				}
		})
			$column.find(".metamenuinfo .tohomepage").bind("click",function(e){
				e.stopPropagation();
				e.preventDefault();
				var homeid = jQuery("#bit-hide-homeid").val();
				var id = parent.jQuery("#pageUrl").val();
				jQuery.get("/FeiEditor/siteEdit/ajax_get_last_pageid/"+id,function(lastid){
					if(lastid==0){
						lastid = homeid;
					}
					if(lastid>0){
						if( $column.find(".qfy-meta-page.footerpost,.qfy-meta-page.qfynotice").length>0){
							top.$('#bit_site_top .ViewQf').attr('href', top.$('#bit_site_top .ViewQf').attr('base_href')+lastid);
							var qfy_anchor ="footer";
							if(iframeWin.last_div_id){
								qfy_anchor = iframeWin.last_div_id;
							}
							top.$("#site-content-iframe").prop("src","/admin/edit.php?vc_action=vc_inline&post_id="+lastid+"&post_type=post&qfy_anchor="+qfy_anchor);
						}else{
							top.$('#pageUrl').val(lastid).change();
						}
					}

				});

			});
			obj.find(".tosetsubpage").bind("click",function(){
				var postid =obj.attr("data-menuid");
				var params =obj.attr("data-params");

				var type="vc_page";
				if(params){
					var hiddenText = base64_decode(params);
				}else{
					var hiddenText = "[vc_page ]";
				}
				var data = {"action":"qfe_show_edit_form","element":type,"vc_inline":true,"shortcode":hiddenText};
				vc.edit_bit_settings_view.render("createPostList");
				$j("#vc-bit_settings-panel .panel-title").html("页面组件");
				$j("#vc-bit_settings-panel").css("position","relative");
				loadingAjax($j("#vc-bit_settings-panel .panel-body"));
				$j("#vc-bit_settings-panel .waitingToPanel").css("height","auto");
				$j.post("/admin/admin-ajax.php",data,function(html){
					$j("#vc-bit_settings-panel .panel-footer").show();
					$j("#vc-bit_settings-panel .panel-body").html("<form action='/FeiEditor/siteEdit/updatemetamenu' method='post' ><input type='hidden' name='postid' value='"+postid+"' />"+html+"</form>");
					vc.edit_element_block_view2 = new vc.EditElementPanelView({el: '#vc-bit_settings-panel'});
					vc.edit_element_block_view2.render2(type);
					vc.edit_element_block_view2.init("change");
					$j("#vc-bit_settings-panel .btn-primary").unbind("click").bind("click",function(){

						$j("#vc-bit_settings-panel [name='box_border_settings']").val(vc.edit_element_block_view2.getBorderSet($j("#vc-bit_settings-panel")));
						var  $savebtn = $j("#vc-bit_settings-panel .btn-primary");
						if($savebtn.hasClass("btn")){
							 $savebtn.addClass('btn_data_onsaving').attr("data-old-btnname",$savebtn.html()).prop('disabled', true).prop('btn_data_onsaving',true).html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
						 }
						$j("#vc-bit_settings-panel form").ajaxSubmit({
							success:function(htm){
								top.location.reload();
								return;
							}
						});
					})
				})

			})
		}

	}else{

		top.jQuery(".editOnePage").show();
		top.jQuery(".copyOnePage").show();
		top.jQuery(".deletepage").show();
		top.jQuery(".site_tabs_other .backStyle span").css("background-position-y","-112px");
		top.jQuery(".site_tabs_other .backStyle").attr("href","/FeiEditor/siteEdit/close").unbind();
		top.jQuery(".site_tabs .psubclass3").show();
		//top.jQuery(".site_tabs_other>li").show();
		jQuery(".mobile_setting_bar").removeClass("displaynone");

	}

	$column.find("#header > .wf-wrap").append(editorLineBar(obj_header_wrap.css("padding-left"),obj_header_wrap.css("padding-right"),"header"));
	var header_start_height = 0;
	var header_start_top = 0;
	var header_start_left = 0;
	var header_start_right = 0;
	$column.find("#header .vc-resize-controls_container.big").draggable({axis: "y",
			handle: ".vc-resize-linebar",
			helper: function() {
				return $j("<div></div>");
			},
			start: function( event, ui ) {
				header_start_height = $column.find("#header .wf-table").height();
				header_start_top = ui.position.top;
				$column.find("#header .big .drag-element-right-value,#header .big .drag-element-value").show();
			},
			stop: function( event, ui ) {
				var current_value = $column.find("#header .wf-table").height();
				$column.find("#header .big .drag-element-right-value,#header .big .drag-element-value").html("").hide();
				if($column.width()>768 ){
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"header-bg_height":current_value});
				}else{
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"mobileheader-bg_height":current_value});
				}
			},
			drag: function( event, ui ) {

				var nowpx = header_start_height - (header_start_top - ui.position.top) ;
				$column.find("#header .wf-table").css("height",nowpx+"px").css("min-height",nowpx+"px");
				$column.find("#header .big .drag-element-right-value,#header .big .drag-element-value").html("高度:"+(nowpx>0?nowpx:0)+"px");
			}
	})
	$column.find("#header .big .vc-resize-x-left-bar").draggable({axis: "x",
			helper: function() {
				return $j("<div></div>");
			},
			start: function( event, ui ) {
				var current_value = obj_header_wrap.css("padding-left");
				if(current_value) current_value = current_value.replace("px","");
				if(isNaN(current_value))current_value = 0;
				header_start_left = current_value*1 + ui.position.left*1;
				$j(this).next().show();
				guideline_start(event,jQuery(this).closest(".wf-table"),'container');
			},
			stop: function( event, ui ) {
				var current_value = obj_header_wrap.css("padding-left");
				if(current_value) current_value = current_value.replace("px","");
			    if(isNaN(current_value))current_value = 0;
				$j(this).next().html("").hide();
				if($column.width()>768 ){
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"bit-header-left-padding":current_value});
				}else{
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"mobilebit-header-left-padding":current_value});
				}
				 guideline_end();
			},
			drag: function( event, ui ) {
				var nowpx = header_start_left + ui.position.left;
				obj_header_wrap.css("padding-left",nowpx+"px");
				$j(this).next().html("左内:"+(nowpx>0?nowpx:0)+"px");
				guideline_draw(event,jQuery(this),null,"left");
			}
	});

	$column.find("#header .big .vc-resize-x-right-bar").draggable({axis: "x",
			helper: function() {
				return $j("<div></div>");
			},
			start: function( event, ui ) {
				var current_value = obj_header_wrap.css("padding-right");
				if(current_value) current_value = current_value.replace("px","");
				if(isNaN(current_value))current_value = 0;
				header_start_right = current_value*1 + ui.position.left*1;
				if($column.width()<=768 ){
					$column.find("#header .wf-wrap .wf-table #branding").css("table-layout","fixed");
				}
				$j(this).next().show();
				guideline_start(event,jQuery(this).closest(".wf-table"),'container');
			},
			stop: function( event, ui ) {
				var current_value = obj_header_wrap.css("padding-right");
				if(current_value) current_value = current_value.replace("px","");
			    if(isNaN(current_value))current_value = 0;
				$j(this).next().html("").hide();
				if($column.width()>768 ){
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"bit-header-right-padding":current_value,"bit-header-table-layout":"fixed"});
				}else{
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"mobilebit-header-right-padding":current_value});
				}
				 guideline_end();
			},
			drag: function( event, ui ) {
				var nowpx = header_start_right - ui.position.left;
				obj_header_wrap.css("padding-right",nowpx+"px");
				$j(this).next().html("右内:"+(nowpx>0?nowpx:0)+"px");
				guideline_draw(event,jQuery(this),null,"left");
			}
	});

	var topbarright = $column.find(".top-bar-right");
	var topbarright_parent = topbarright.parent();

	if($j.trim(topbarright.html())=="" && topbarright.width()=="0"){
		topbarright.width("160");
	}
	topbarright_parent.append(editorSmallLineBar3('topbarright'));

	var topbarright_control = topbarright_parent.find(".vc-resize-controls_container.topbarright");
	topbarright_control.find(".set").click(function(){
		vc.setting_widget_dialog9.render("bitHeader-2");
	});
	var topbarright_start_bottom = 0;
	var topbarright_start_top = 0;
	var topbarright_start_left = 0;
	var topbarright_start_right = 0;
	topbarright_control.find(".drag-element").draggable({axis: "y",
			helper: function() {
				return $j("<div></div>");
			},
			start: function( event, ui ) {
				var current_value = topbarright.css("padding-bottom");
				if(current_value) current_value = current_value.replace("px","");
				if(isNaN(current_value))current_value = 0;
				topbarright_start_bottom = current_value*1 + ui.position.top*1;
				$j(this).next().show();
			},
			stop: function( event, ui ) {
				var current_value = topbarright.css("padding-bottom");
				if(current_value) current_value = current_value.replace("px","");
			    if(isNaN(current_value))current_value = 0;
				$j(this).next().html("").hide();
				if($column.width()>768 ){
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"bit-headertopright-padding-bottom":current_value});
					$j("#vc-setting-widget-dialog9 [name='bit-headertopright-padding-bottom']").val(current_value);
				}else{
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"mobilebit-headertopright-padding-bottom":current_value});
					$j("#vc-setting-widget-dialog9 [name='mobilebit-headertopright-padding-bottom']").val(current_value);
				}
			},
			drag: function( event, ui ) {
				var nowpx = topbarright_start_bottom  + ui.position.top;
				topbarright.css("padding-bottom",nowpx+"px");
				$j(this).next().html("内下:"+(nowpx>0?nowpx:0)+"px");
			}
	});
	topbarright_control.find(".drag-element-right").draggable({axis: "y",
			helper: function() {
				return $j("<div></div>");
			},
			start: function( event, ui ) {
				var current_value = topbarright.css("padding-top");
				if(current_value) current_value = current_value.replace("px","");
				if(isNaN(current_value))current_value = 0;
				topbarright_start_top = current_value*1 + ui.position.top*1;
				$j(this).next().show();
			},
			stop: function( event, ui ) {
				var current_value = topbarright.css("padding-top");
				if(current_value) current_value = current_value.replace("px","");
			    if(isNaN(current_value))current_value = 0;
				$j(this).next().html("").hide();
				if($column.width()>768 ){
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"bit-headertopright-padding-top":current_value});
					$j("#vc-setting-widget-dialog9 [name='bit-headertopright-padding-top']").val(current_value);
				}else{
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"mobilebit-headertopright-padding-top":current_value});
					$j("#vc-setting-widget-dialog9 [name='mobilebit-headertopright-padding-top']").val(current_value);
				}
			},
			drag: function( event, ui ) {
				var nowpx = topbarright_start_top  + ui.position.top;
				topbarright.css("padding-top",nowpx+"px");
				$j(this).next().html("内上:"+(nowpx>0?nowpx:0)+"px");
			}
	});
	topbarright_control.find(".vc-resize-x-left-bar").draggable({axis: "x",
			helper: function() {
				return $j("<div></div>");
			},
			start: function( event, ui ) {
				var current_value = topbarright.width();
				topbarright_start_left = current_value*1 + ui.position.left*1;
				$j(this).next().show();
			},
			stop: function( event, ui ) {
				var current_value = topbarright.width();
				$j(this).next().html("").hide();
				if($column.width()>768 ){
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"bit-headertopright-width":current_value});
				}else{
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"mobilebit-headertopright-width":current_value});
				}
				if($column.find("#header.logo-left-right #navigation ul.ab-center").length>0){
					var v1 = $column.find("#header #branding").width();
					var v2 = $column.find("#header .assistive-info .top-bar-right").width();
					$column.find("#header #navigation #main-nav").css("text-align","center").css("left",(v2-v1)/2+"px");
				}
			},
			drag: function( event, ui ) {
				var nowpx = topbarright_start_left  - ui.position.left;
				topbarright.css("width",nowpx+"px");
				if($column.width()>768 ){
					topbarright.parent().css("width",nowpx+"px");
				}
				$j(this).next().html("宽度:"+Math.ceil(nowpx>0?nowpx:0)+"px");

			}
	});
	topbarright_control.find(".vc-resize-x-right-bar").draggable({axis: "x",
			helper: function() {
				return $j("<div></div>");
			},
			start: function( event, ui ) {
				var current_value = topbarright.width();
				topbarright_start_left = current_value*1 + ui.position.left*1;
				$j(this).next().show();
			},
			stop: function( event, ui ) {
				var current_value = topbarright.width();
				$j(this).next().html("").hide();
				if($column.width()>768 ){
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"bit-headertopright-width":current_value});
				}else{
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"mobilebit-headertopright-width":current_value});
				}
				if($column.find("#header.logo-left-right #navigation ul.ab-center").length>0){
					var v1 = $column.find("#header #branding").width();
					var v2 = $column.find("#header .assistive-info .top-bar-right").width();
					$column.find("#header #navigation #main-nav").css("text-align","center").css("left",(v2-v1)/2+"px");
				}
			},
			drag: function( event, ui ) {
				var nowpx = topbarright_start_right  + ui.position.left;
				topbarright.css("width",nowpx+"px");
				$j(this).next().html("宽度:"+Math.ceil(nowpx>0?nowpx:0)+"px");
			}
	});

	topbarright_control.find(".control_left").click(function(){

		if($column.width()>768 ){
			topbarright.parent().addClass("align_left").removeClass("align_right align_center");
			$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"bit-headertopright-align":'align_left'});
		}else{
			topbarright.parent().addClass("mobilealign_left").removeClass("mobilealign_right mobilealign_center");
			$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"mobilebit-headertopright-align":'mobilealign_left'});
		}
	});
	topbarright_control.find(".control_right").click(function(){

		if($column.width()>768 ){
			topbarright.parent().addClass("align_right").removeClass("align_left align_center");
			$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"bit-headertopright-align":'align_right'});
		}else{
			topbarright.parent().addClass("mobilealign_right").removeClass("mobilealign_left mobilealign_center");
			$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"mobilebit-headertopright-align":'mobilealign_right'});
		}
	});
	topbarright_control.find(".control_center").click(function(){
		if($column.width()>768 ){
			topbarright.parent().addClass("align_center").removeClass("align_left align_right");
			$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"bit-headertopright-align":'align_center'});
		}else{
			topbarright.parent().addClass("mobilealign_center").removeClass("mobilealign_left mobilealign_right");
			$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"mobilebit-headertopright-align":'mobilealign_center'});
		}
	});
	topbarright_control.find(".control_align").click(function(){
		if($column.width()>768 ){
			topbarright.parent().addClass("align").removeClass("valign");
			$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"bit-headertopright-valign":'align'});
		}else{
			topbarright.parent().addClass("mobilealign").removeClass("mobilevalign");
			$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"mobilebit-headertopright-valign":'mobilealign'});
		}
	});
	topbarright_control.find(".control_valign").click(function(){
		if($column.width()>768 ){
			topbarright.parent().addClass("valign").removeClass("align");
			$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"bit-headertopright-valign":'valign'});
		}else{
			topbarright.parent().addClass("mobilevalign").removeClass("mobilealign");
			$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"mobilebit-headertopright-valign":'mobilevalign'});
		}
	});
	topbarright_control.find(".emptyFix").click(function() {
		var rlt = 'bitHeader-2';
		var portal = new vc.BitModel({
			sid : rlt
		});
		vc.add_header2_block_view.render(portal);

	})


	$column.find("#header").bind("mouseenter",function() {
		var obj= $j(this);
		if (obj.find(".ui-custom-drop-container").length ==0) {
			headerlogotextmovecontrols($column,isfullpage);
		}
		if(obj.find(".logo img:visible").length>0){
			obj.find(".logo .ui-custom-drop-container").fadeIn("fast");
			obj.find(".bitem.logo").addClass("now");
		}
		if(obj.find("#bit-logoText").length>0){
			obj.find("#bit-logoText .ui-custom-drop-container").fadeIn("fast");
			obj.find("#bit-logoText").addClass("now");
		}

	}).bind("mouseleave", function() {
		  $j(this).find(".ui-custom-drop-container").fadeOut("fast");
		  $j(this).find(".bitem.logo,#bit-logoText").removeClass("now");

	});

}

function bind_footer_events($column){
	var isfullpage = 0;
	if($column.hasClass("page-template-template-fullscreen-php")){
		isfullpage = 1;
	}
	var bitfooterbar = $column.find("#footer");
	bitfooterbar.bind("mouseenter",function() {
		bitshowBar(this,"footer");
		bitfooterbar.find(".vc-resize-linebar,.vc-resize-x-left-bar,.vc-resize-x-right-bar").fadeIn();
	}).bind("mouseleave", function() {
		bitfooterbar.find(".controls-column").hide();
		if( bitfooterbar.find(".ui-draggable-dragging").length==0){
			bitfooterbar.find(".vc-resize-linebar,.vc-resize-x-left-bar,.vc-resize-x-right-bar").fadeOut("fast");
		}
	});
	bitfooterbar.append(editorLineBar(bitfooterbar.css("padding-left"),bitfooterbar.css("padding-right"),"footer"));
	var footer_start_height = 0;
	var footer_start_top = 0;
	var footer_start_left = 0;
	var footer_start_right = 0;

	bitfooterbar.find(".vc-resize-controls_container").draggable({axis: "y",
			handle: ".vc-resize-linebar",
			helper: function() {
				return $j("<div></div>");
			},
			start: function( event, ui ) {
				footer_start_height = bitfooterbar.height();
				footer_start_top = ui.position.top;
				bitfooterbar.find(".drag-element-right-value,.drag-element-value").show();
			},
			stop: function( event, ui ) {
				var current_value = bitfooterbar.height();
				bitfooterbar.find(".drag-element-right-value,.drag-element-value").html("").hide();
				if($column.width()>768 ){
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"footer-bg_height":current_value});
				}else{
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"mobilefooter-bg_height":current_value});
				}
			},
			drag: function( event, ui ) {

				var nowpx = footer_start_height - (footer_start_top - ui.position.top) ;
				bitfooterbar.find("> .wf-wrap").css("min-height",nowpx+"px");
				bitfooterbar.css("min-height",nowpx+"px");
				bitfooterbar.find(".drag-element-right-value,.drag-element-value").html("高度:"+(nowpx>0?nowpx:0)+"px");
			}
	})
	bitfooterbar.find(".vc-resize-x-left-bar").draggable({axis: "x",
			helper: function() {
				return $j("<div></div>");
			},
			start: function( event, ui ) {
				var current_value = bitfooterbar.css("padding-left");
				if(current_value) current_value = current_value.replace("px","");
				if(isNaN(current_value))current_value = 0;
				footer_start_left = current_value*1 + ui.position.left*1;
				$j(this).next().show();
				guideline_start(event,jQuery(this).closest(".wf-wrap"),'container');
			},
			stop: function( event, ui ) {
				var current_value = bitfooterbar.css("padding-left");
				if(current_value) current_value = current_value.replace("px","");
			    if(isNaN(current_value))current_value = 0;
				$j(this).next().html("").hide();
				if($column.width()>768 ){
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"bit-footer-left-padding":current_value});
				}else{
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"mobilebit-footer-left-padding":current_value});
				}
				 guideline_end();
			},
			drag: function( event, ui ) {
				var nowpx = footer_start_left + ui.position.left;
				bitfooterbar.css("padding-left",nowpx+"px");
				$j(this).next().html("左内:"+(nowpx>0?nowpx:0)+"px");
				 guideline_draw(event,jQuery(this),null,"left");
			}
	});

	bitfooterbar.find(".vc-resize-x-right-bar").draggable({axis: "x",
			helper: function() {
				return $j("<div></div>");
			},
			start: function( event, ui ) {
				var current_value = bitfooterbar.css("padding-right");
				if(current_value) current_value = current_value.replace("px","");
				if(isNaN(current_value))current_value = 0;
				footer_start_right = current_value*1 + ui.position.left*1;
				$j(this).next().show();
				guideline_start(event,jQuery(this).closest(".wf-wrap"),'container');
			},
			stop: function( event, ui ) {
				var current_value = bitfooterbar.css("padding-right");
				if(current_value) current_value = current_value.replace("px","");
			    if(isNaN(current_value))current_value = 0;
				$j(this).next().html("").hide();
				if($column.width()>768 ){
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"bit-footer-right-padding":current_value});
				}else{
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"mobilebit-footer-right-padding":current_value});
				}
				 guideline_end();
			},
			drag: function( event, ui ) {
				var nowpx = footer_start_right - ui.position.left;
				bitfooterbar.css("padding-right",nowpx+"px");
				$j(this).next().html("右内:"+(nowpx>0?nowpx:0)+"px");
				 guideline_draw(event,jQuery(this),null,"left");
			}
	});
}
function bind_bottombar_events($column){
	var isfullpage = 0;
	if($column.hasClass("page-template-template-fullscreen-php")){
		isfullpage = 1;
	}
	var bottombitbar = $column.find(".bottom-bit-bar");
	bottombitbar.bind("mouseenter",function() {

		bottombitbar.find(".vc-resize-linebar,.vc-resize-x-left-bar,.vc-resize-x-right-bar").fadeIn();

		var obj= $j(this);
		if (obj.find(".bit-controls-element").length > 0) {
			obj.find(".bit-controls-element").fadeIn();
		} else {
			var str = '<div class="controls-element vc-controls bit-controls-element wf-mobile-hidden"  style="line-height:0px;opacity:1;visibility:visible;transition:auto">';
			str += '<div class="controls-cc">';
			str += '<a class="control-btn vc-element-name">';
			str += '<span  class="vc-btn-content vo-btn-nomove">页脚设置</span>';
			str += '</a>';
			str += '<a title="设置"  class="control-btn control-btn-edit setIcon setting_bottombar" ><span class="vc-btn-content"><span class="icon"></span></span></a>';
			str += '<a class="control-btn  hidden_bottombar" style="cursor: pointer; text-align: left; opacity: 1; color: rgb(255, 255, 255); text-decoration: none; position: relative; height: 20px; line-height: 20px; font-size: 13px ! important; width: 55px;" title="暂时隐藏页脚，方便编辑,10秒后恢复">隐藏10秒</a>';
			str += '<a title="帮助" data-for="页脚"  class="control-btn  bit_button_helper"><span> ？</span></a>';
			str += '</div>';
			str += '</div>';
			obj.prepend(str);
			obj.find(".controls-element").show();

			obj.find(".setting_bottombar").bind("click",function(){
				parent.bottombarSetting();
			})
		}
	}).bind("mouseleave", function() {
			if( bottombitbar.find(".ui-draggable-dragging").length==0){
				bottombitbar.find(".vc-resize-linebar,.vc-resize-x-left-bar,.vc-resize-x-right-bar").fadeOut("fast");
			}
			$j(this).find(".controls-element").fadeOut("fast");

	});


	bottombitbar.append(editorLineBar(bottombitbar.css("padding-left"),bottombitbar.css("padding-right"),"bottombitbar"));
	var bottom_start_height = 0;
	var bottom_start_top = 0;
	var bottom_start_left = 0;
	var bottom_start_right = 0;

	bottombitbar.find(".vc-resize-controls_container").draggable({axis: "y",
			handle: ".vc-resize-linebar",
			helper: function() {
				return $j("<div></div>");
			},
			start: function( event, ui ) {
				bottom_start_height = bottombitbar.height();
				bottom_start_top = ui.position.top;
				bottombitbar.find(".drag-element-right-value,.drag-element-value").show();
			},
			stop: function( event, ui ) {
				var current_value = bottombitbar.height();
				bottombitbar.find(".drag-element-right-value,.drag-element-value").html("").hide();
				if($column.width()>768 ){
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"bottombar-bg_height":current_value});
				}else{
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"mobilebottombar-bg_height":current_value});
				}
			},
			drag: function( event, ui ) {

				var nowpx = bottom_start_height - (bottom_start_top - ui.position.top) ;
				bottombitbar.find("> .wf-wrap").css("min-height",nowpx+"px");
				bottombitbar.css("min-height",nowpx+"px");
				bottombitbar.find(".drag-element-right-value,.drag-element-value").html("高度:"+(nowpx>0?nowpx:0)+"px");

			}
	})
	bottombitbar.find(".vc-resize-x-left-bar").draggable({axis: "x",
			helper: function() {
				return $j("<div></div>");
			},
			start: function( event, ui ) {
				var current_value = bottombitbar.css("padding-left");
				if(current_value) current_value = current_value.replace("px","");
				if(isNaN(current_value))current_value = 0;
				bottom_start_left = current_value*1 + ui.position.left*1;
				$j(this).next().show();
				guideline_start(event,bottombitbar.find(".wf-table:first"),'container');
			},
			stop: function( event, ui ) {
				var current_value = bottombitbar.css("padding-left");
				if(current_value) current_value = current_value.replace("px","");
			    if(isNaN(current_value))current_value = 0;
				$j(this).next().html("").hide();
				if($column.width()>768 ){
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"bit-bottombar-left-padding":current_value});
				}else{
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"mobilebit-bottombar-left-padding":current_value});
				}
				 guideline_end();
			},
			drag: function( event, ui ) {
				var nowpx = bottom_start_left + ui.position.left;
				bottombitbar.css("padding-left",nowpx+"px");
				$j(this).next().html("左内:"+(nowpx>0?nowpx:0)+"px");
				guideline_draw(event,jQuery(this),null,"left");
			}
	});

	bottombitbar.find(".vc-resize-x-right-bar").draggable({axis: "x",
			helper: function() {
				return $j("<div></div>");
			},
			start: function( event, ui ) {
				var current_value = bottombitbar.css("padding-right");
				if(current_value) current_value = current_value.replace("px","");
				if(isNaN(current_value))current_value = 0;
				bottom_start_right = current_value*1 + ui.position.left*1;
				$j(this).next().show();
				guideline_start(event,bottombitbar.find(".wf-table:first"),'container');
			},
			stop: function( event, ui ) {
				var current_value = bottombitbar.css("padding-right");
				if(current_value) current_value = current_value.replace("px","");
			    if(isNaN(current_value))current_value = 0;
				$j(this).next().html("").hide();
				if($column.width()>768 ){
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"bit-bottombar-right-padding":current_value});
				}else{
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"mobilebit-bottombar-right-padding":current_value});
				}
				 guideline_end();
			},
			drag: function( event, ui ) {
				var nowpx = bottom_start_right - ui.position.left;
				bottombitbar.css("padding-right",nowpx+"px");
				$j(this).next().html("右内:"+(nowpx>0?nowpx:0)+"px");
				guideline_draw(event,jQuery(this),null,"left");
			}
	});

	$column.find(".qfy_advertising").bind("mouseenter",function() {
		var obj= $j(this);
		if (obj.find(".bit-controls-element").length > 0) {
			obj.find(".bit-controls-element").show();
		} else {
			var str = '<div class="controls-element vc-controls bit-controls-element"  style="line-height:0px;opacity:1;visibility:visible;transition:auto">';
			str += '<div class="controls-cc">';
			str += '<a class="control-btn vc-element-name">';
			str += '<span  class="vc-btn-content vo-btn-nomove">关于底标</span>';
			str += '</a>';
			str += '<a title="设置 底标"  class="control-btn control-btn-edit setIcon setting_qfy_advertising" ><span class="vc-btn-content"><span class="icon"></span></span></a>';
			str += '<a title="帮助" data-for="底标"  class="control-btn  bit_button_helper"><span> ？</span></a>';
			str += '</div>';
			str += '</div>';
			obj.prepend(str);
			obj.find(".controls-element").show();

			obj.find(".setting_qfy_advertising").bind("click",function(e){
				e.stopPropagation();
				e.preventDefault();
				setting_qfy_advertising();
			})
		}
	}).bind("mouseleave", function() {
			$j(this).find(".controls-element").hide();
	});

}
function bind_others_events($column){
	var isfullpage = 0;
	if($column.hasClass("page-template-template-fullscreen-php") || $column.closest("body").hasClass("page-template-template-fullscreen-php")){
		isfullpage = 1;
	}
	// a init
	redireactMenulink($column);
	$column.find(".site_tooler > .widget-title").each(function(){
		widget_title_hoveredit(jQuery(this));
	})

	// widget mouse init

	$column.find("[bitDataAction='site_widget_container'] .site_tooler").each(function() {
		widgetHover(this, $column);
	})


	$column.find("[bitDataAction='site_fix_container']").each(function() {
		widgetFixEvent(this);
	})
	// widget mouse init

	$column.find("[bitDataAction='site_fix_container'] .site_tooler").unbind().bind("mouseenter",
			function() {
				elementHover($j(this), "编辑", "fix", "widget");
				$j(this).css("outline","1px dashed rgba(125, 125, 125, 0.4)");
				if($j(this).hasClass("bitBanner")){
					var id=$j(this).attr("id");
					imageTextInit(id);
				}
			}).bind("mouseleave", function() {

			$j(this).find(".controls-element").fadeOut("fast");
			$j(this).css("outline", "0");
			if($j(this).hasClass("bitBanner")){
				$j(this).find(".sliderheight_drag_div").fadeOut("fast");
			}

	});


	// //menu mouse init
	$column.find("[bitDataAction='site_menu_container']").unbind().bind("mouseenter",function() {

					elementHover($j(this), "菜单", "menu", "menu");
					if($j(this).find(".vc-btn-move.move_menu.ui-draggable").length==0){
						headermovecontrols($column,isfullpage);
					}
					$j(this).find(".controls-element").addClass("wf-mobile-hidden");

	}).bind("mouseleave", function() {
			$j(this).find(".controls-element").fadeOut("fast");
	});
	// slider mouse init
	$column.find("[bitDataAction='site_widget_container']").each(function() {
		elementAdd($j(this));
	}).unbind().bind("mouseenter", function() {
			$j(this).css("outline", "1px dashed rgba(125, 125, 125, 0.4)");
	}).bind("mouseleave", function() {
			$j(this).css("outline", "0");

	})


	_bind_product_grouptable($column);

	_bind_advanced_list_btn($column);


}
function _bind_product_grouptable($column){

	$column.find(".qfy-single-product .group_table.old_table").bind("mouseenter",function() {
		var obj= $j(this);
		if (obj.find(".bit-controls-element").length > 0) {
			obj.find(".bit-controls-element").show();
		} else {
			var str = '<div class="controls-element vc-controls bit-controls-element"  style="line-height:0px;opacity:1;visibility:visible;transition:auto;position:absolute;">';
			str += '<a title="设置样式" style="background:#84c137;" class="control-btn control-btn-edit  group_table_setting" ><span class="vc-btn-content"><span class="icon"></span></span></a>';
			str += '</div>';
			str += '</div>';
			obj.prepend(str);
			obj.find(".controls-element").show();

			obj.find(".group_table_setting").bind("click",function(e){
				e.stopPropagation();
				e.preventDefault();
				toeditlistmore(this,e,"group_table_setting")
			})
		}
	}).bind("mouseleave", function() {
			$j(this).find(".controls-element").hide();
	});
}
function _bind_advanced_list_btn($column){
	$column.find(".advanced_list .vc-left,.advanced_list .vc-right").bind("mouseenter",function() {
		var obj= $j(this);
		if (obj.find(".bit-controls-element").length > 0) {
			obj.find(".bit-controls-element").show();
		} else {
			var str = '<div class="controls-element vc-controls bit-controls-element"  style="line-height:0px;opacity:1;visibility:visible;transition:auto">';
			if(obj.hasClass("vc-right")){
				str += '<div class="controls-cc control-right" >';
			}else{
				str += '<div class="controls-cc control-left" >';
			}
			str += '<a title="设置样式"  class="control-btn control-btn-edit  setting_leftright" ><span class="vc-btn-content"><span class="icon"></span></span></a>';
			str += '</div>';
			str += '</div>';
			obj.prepend(str);
			obj.find(".controls-element").show();

			obj.find(".setting_leftright").bind("click",function(e){
				e.stopPropagation();
				e.preventDefault();
				toeditlistmore(this,e,"qfy_element_leftright")
			})
		}
	}).bind("mouseleave", function() {
			$j(this).find(".controls-element").hide();
	});


}
/* init page element event */
function bindEventAfterLoading($column) {
	var isfullpage = 0;
	if($column.hasClass("page-template-template-fullscreen-php")){
		isfullpage = 1;
	}
	//分级管理
	if(top.jQuery("body").hasClass("caterole")){
		return false;
	}

	bind_topbar_events($column);
	bind_header_events($column);
	bind_footer_events($column);
	bind_bottombar_events($column);
	setTimeout(function(){
		bind_others_events($column);
	},200);


	if($column.hasClass("single-product")){
		$column.find(".product-content").bind("mouseenter",function() {
			bitshowBar(this,"product");
		}).bind("mouseleave", function() {
			$j(this).find(".controls-column").hide();
		});
	}


	$column.find("#sc_chat_box .sc-chat-header").bind("mouseenter",function() {
		var obj= $j(this);
		if (obj.find(".bit-controls-element").length > 0) {
			obj.find(".bit-controls-element").show();
		} else {
			var str = '<div class="controls-element vc-controls bit-controls-element wf-mobile-hidden"  style="  position: absolute;top: 0;line-height:0px;opacity:1;visibility:visible;transition:auto">';
			str += '<div class="controls-cc">';
			str += '<a class="control-btn vc-element-name">';
			str += '<span  class="vc-btn-content vo-btn-nomove">客服设置</span>';
			str += '</a>';
			str += '<a title="设置"  class="control-btn control-btn-edit setIcon setting_popbar" ><span class="vc-btn-content"><span class="icon"></span></span></a>';
			//str += '<a class="control-btn  hidden_bottombar" style="cursor:pointer;width: 70px; height: 30px; text-align: left; opacity: 1; font-size: 16px ! important; color: rgb(255, 255, 255); text-decoration: none;line-height:16px;position:relative;top:7px;" title="暂时隐藏页脚，方便编辑,10秒后恢复">隐藏10秒</a>';
			str += '<a title="帮助" data-for="客服"  class="control-btn  bit_button_helper"><span> ？</span></a>';
			str += '</div>';
			str += '</div>';
			obj.prepend(str);
			obj.find(".controls-element").show();

			obj.find(".setting_popbar").bind("click",function(){
				parent.bit_settings_pop_chat();
			})
		}
	}).bind("mouseleave", function() {
			$j(this).find(".controls-element").hide();

	});
	$column.find(".mobile_footer_menu").bind("mouseenter",function() {
		var obj= $j(this);
		if (obj.find(".bit-controls-element").length > 0) {
			obj.find(".bit-controls-element").show();
		} else {
			var str = '<div class="controls-element vc-controls bit-controls-element"  style="line-height:0px;opacity:1;visibility:visible;transition:auto">';
			str += '<div class="controls-cc">';
			str += '<a class="control-btn vc-element-name">';
			str += '<span  class="vc-btn-content vo-btn-nomove">设置</span>';
			str += '</a>';
			str += '<a title="设置"  class="control-btn control-btn-edit setIcon setting_mobilefooterbar" ><span class="vc-btn-content"><span class="icon"></span></span></a>';
			str += '</div>';
			str += '</div>';
			obj.prepend(str);
			obj.find(".controls-element").show();

			obj.find(".setting_mobilefooterbar").bind("click",function(){
				mobile_bottommenubar();
			})
		}
	}).bind("mouseleave", function() {

			$j(this).find(".controls-element").hide();

	});

	$column.find("#parallax-nav").bind("mouseenter",function() {
		var obj= $j(this);
		if (obj.find(".bit-controls-element").length > 0) {
			obj.find(".bit-controls-element").show();
		} else {
			var str = '<div class="controls-element vc-controls bit-controls-element"  style="line-height:0px;opacity:1;visibility:visible;transition:auto">';
			str += '<div class="controls-cc">';
			str += '<a title="设置参数"  class="control-btn control-btn-edit setIcon setting_qfyscrollbar" ><span class="vc-btn-content"><span class="icon"></span></span></a>';
			str += '<a title="隐藏起来，方便其他区域操作"  class="control-btn control-btn-edit setIcon setting_qfyscrollbar_hide" ><span class="vc-btn-content"><span class="icon"></span></span></a>';
			str += '</div>';
			str += '</div>';
			obj.prepend(str);
			obj.find(".controls-element").show();

			obj.find(".setting_qfyscrollbar").bind("click",function(){
				parent.jQuery('#bit_site_top .page_navigation').click();
			})
			obj.find(".setting_qfyscrollbar_hide").bind("click",function(){
				obj.remove();
			})
		}
	}).bind("mouseleave", function() {

			$j(this).find(".controls-element").hide();

	});



	$column.find(".scroll-top").unbind().bind("mouseenter",function(e) {
		var obj= $j(this);
		if (obj.find(".bit-controls-element").length > 0) {
			obj.find(".bit-controls-element").show();
		} else {
			var str = '<div class="controls-element vc-controls bit-controls-element"  style="line-height:0px;opacity:1;visibility:visible;transition:auto;">';
			str += '<div class="controls-cc" style="left:0">';
			str += '<a class="control-btn vc-element-name">';
			str += '<span  class="vc-btn-content vo-btn-nomove">设置</span>';
			str += '</a>';
			str += '<a title="设置"  class="control-btn control-btn-edit  setting_scrollbar" ><span class="vc-btn-content"><span class="icon"></span></span></a>';
			str += '</div>';
			str += '</div>';
			obj.prepend(str);
			obj.find(".controls-element").show();

			obj.find(".setting_scrollbar").bind("click",function(e){
				e.stopPropagation();
				parent.footerSlidersSetting("backtopbutton");
				return false;
			})
		}
	}).bind("mouseleave", function() {

			$j(this).find(".controls-element").hide();

	});



	$column.find(".shopping-cart-inner").each(function(){
		if(jQuery(this).find(".setting_cart_inner").length==0){
			jQuery(this).append('<div class="controls-element vc-controls bit-controls-element inner" style="line-height: 0px;"><div class="controls-cc" style="left:50%;top:50%;"><a class="control-btn vc-element-name"><span class="vc-btn-content vo-btn-nomove">设置</span></a><a title="设置" class="control-btn control-btn-edit  " onclick="setting_cart_inner(event,this);"><span class="vc-btn-content"><span class="icon"></span></span></a></div></div>');
		}
	})
	$column.find(".shopping-cart-inner").bind("mouseenter",function(e) {
		if(jQuery(this).find(".setting_cart_inner").length==0){
			jQuery(this).append('<div class="controls-element vc-controls bit-controls-element inner" style="line-height: 0px;"><div class="controls-cc" style="left:50%;top:50%;"><a class="control-btn vc-element-name"><span class="vc-btn-content vo-btn-nomove">设置</span></a><a title="设置" class="control-btn control-btn-edit  " onclick="setting_cart_inner(event,this);"><span class="vc-btn-content"><span class="icon"></span></span></a></div></div>');
		}
	});

	right_nav_bar_control($column);
	// slider text mouse init
	sliderControl($column);

}
function right_nav_bar_control($column){
	$column.find(".right_nav_bar").unbind().bind("mouseenter",function(e) {
		var obj= $j(this);
		if (obj.find(".bit-controls-element").length > 0) {
			obj.find(".bit-controls-element").show();
		} else {
			var str = '<div class="controls-element vc-controls bit-controls-element"  style="line-height:0px;opacity:1;visibility:visible;transition:auto;">';
			str += '<div class="controls-cc" style="left:0">';
			str += '<a class="control-btn vc-element-name">';
			str += '<span  class="vc-btn-content vo-btn-nomove">设置</span>';
			str += '</a>';
			str += '<a title="设置"  class="control-btn control-btn-edit  setting_right_nav_bar" ><span class="vc-btn-content"><span class="icon"></span></span></a>';
			str += '</div>';
			str += '</div>';
			obj.prepend(str);
			obj.find(".controls-element").show();

			obj.find(".setting_right_nav_bar").bind("click",function(){
				top.jQuery('#bit_site_top .page_rightnavigation').click();
			})
		}
	}).bind("mouseleave", function() {

			$j(this).find(".controls-element").hide();

	});
}
function sliderControl($column)
{
	$column.find("[bitDataAction='site_slider_container'] li.bitSliderLi .tp-caption").bind("mouseenter",
			function() {
					var s = $j(this);
					s.css("position","absolute");
					if (s.children(".slideText").length == 0) {
						s.html("<div class='slideText'>" + s.html() + "</div>");
					}
					elementHover(s, "幻灯片文字", "slider","slider");
					if (isVCStatus($column)&&$j(this).find(".cke_editable_inline").length==0) {
						$j(this).find(".controls-element").show();
						$j(this).css("outline", "1px dashed #000").css("min-height", "8px").css("min-width", "50px");
					}
	}).bind("mouseleave", function() {
		$j(this).find(".controls-element").fadeOut("fast");
		$j(this).css("outline", "0");
	}).bind('dblclick', function() {
			var s = $j(this);
			var sc = $j(this).find(".slideText");
			var id = $j(this).parent().attr("data-slideid");
			if(!sc.hasClass("cke_editable") &&  !sc.hasClass("inline_editing")  ){
				bitSiteSlideTextInline(s, sc, id);
			}
	}).draggable({
		iframeFix: true,
		containment:$column.find("[bitDataAction='site_slider_container']"),
		cursor:"move",
		handle: ".vc-element-name",
		start: function(event, ui) {
			var jThis = $j(this);
			jThis.find(".controls-element.bit-controls-element").css("opacity","0.1");
			guideline_start(event,jQuery(this).closest(".tp-caption"),"caption");
		},
		drag: function( event, ui ) {
			guideline_draw(event,jQuery(this).closest(".tp-caption"),null);
		},
		stop: function(event, ui) {

			var jThis = $j(this);
			jThis.find(".controls-element.bit-controls-element").css("opacity","1");
			var id = jThis.parent().attr("data-slideid");
			var left=ui.position.left;
			var positionTop=ui.position.top;
//http://rd.ckada.com/issues/465

			var container = $column.find(".rev_slider_wrapper.fullscreen-container");
			var width = 0;
			var height = 0;
			var isFullScreen = 0;
			if(container != null){
				width = container.width();
				height = container.height();
				isFullScreen = true;
			}
			var sliderStartWidth = iframeWin.jQuery("div.rev_slider_wrapper").width();
			var sliderStartheight = iframeWin.jQuery("div.rev_slider_wrapper").height();
			//1280 640
			var sliderId=jThis.parent().parent().parent().parent().attr("bitdatalocation");

			var load=jThis.parent().parent().parent().find(".tp-loader");
			var textIndex=jThis.attr("bitslidetextindex");
			var bodywidth = iframeWin.jQuery("body").width();

			if(bodywidth>760){
				var data = {slideid:id,sliderID:sliderId,bitAction:"changePostion",textIndex:textIndex,top:positionTop,left:left,width:width,height:height,full:isFullScreen,sliderStartWidth:sliderStartWidth};
			}else{
				var container_width = jThis.attr("data-width");
				if(!container_width) container_width="1280";
				var container_height =  jThis.attr("data-height");
				if(!container_height) container_height = "300";
				var bw = container_width/sliderStartWidth;
				var bh = container_height/sliderStartheight;

				var data = {slideid:id,sliderID:sliderId,bitAction:"changePostion",textIndex:textIndex,top:positionTop*bh,left:left*bw,full:isFullScreen};
			}
			//ajaxBeforeLoading(0, jThis.parent().parent().parent());

			revAjaxRequest("update_slide_sample" ,data, function(){
					reloadRevSlider(data);
			});
			guideline_end();
		}

	});

	$column.find("[bitDataAction='site_slider_container']").bind("mouseenter",
			function() {
				if (isVCStatus($column)) {
					slide($j(this));
				}
			}).bind("mouseleave", function() {
		if (isVCStatus($column)) {
			$j(this).find(".bitSiteSlide,.sliderheight_drag,.sliderheight_drag_line").fadeOut("fast");
			$j(this).find(".bitSiteSlideLeft").fadeOut("fast");
		}
		if (slider_nowid > 0) {
			var sliderObj = eval("iframeWin.revapi" + slider_nowid);
			if (sliderObj&&$j(this).find(".cke_editable_inline").length==0&&$j(this).find(".ui-draggable-dragging").length==0) {
				sliderObj.revresume();
			}
		}
	});


}
function imageTextInit(id){
	var str = '<div class="sliderheight_drag_line sliderheight_drag_div" style="top: 0px; position: absolute; z-index: 96;height:1px;background:#285a85;width:100%;"></div>';
	str += '<div class="sliderheight_drag_line sliderheight_drag_div" style="bottom: 0px; position: absolute; z-index: 97;height:1px;background:#285a85;width:100%;"></div>';
	str += '<div class="sliderheight_drag sliderheight_drag_div" style="bottom: -10px; position: absolute; z-index: 99; font-size: 12px; background: #285a85; color: rgb(255, 255, 255); padding: 2px 7px; left: 50%; margin-left: -62px; cursor: n-resize;">拖动调整图片高度';

	if(id.indexOf("bit_banner_image")>-1){

		if( iframeWin.jQuery("#"+id+" .sliderheight_drag").length==0 ){
			iframeWin.jQuery("#"+id).append(str);
			var start_height = 0;
			var start_top = 0;
			var sdrag = iframeWin.jQuery("#"+id+" .sliderheight_drag");
			var sdrag_element = iframeWin.jQuery("#"+id+" .bit_banner_image_parent");
			var sdrag_p = sdrag.closest("#bitBanner");
			sdrag.draggable({axis: "y",
					helper: function() {
						return $j("<div></div>");
					},
					start: function( event, ui ) {
						start_height =sdrag_p.height();
						start_top = ui.position.top;
					},
					stop: function( event, ui ) {
						var current_value = sdrag_p.height();
						var postdata = {};
						if( iframeWin.jQuery("body").width()>760){
							//height
							postdata = {id:id,height:current_value};
						}else if( iframeWin.jQuery("body").width()>320){
							//padheight
							postdata = {id:id,padheight:current_value};
						}else{
							//mobileheight
							postdata = {id:id,mobileheight:current_value};
						}
						$j.post("/FeiEditor/siteEdit/ajax_updateWidgetParam/",postdata,function(data){
							updateWidgetViewEvent(id,jQuery("#"+id));
						});

					},
					drag: function( event, ui ) {
						var nowpx = start_height + (ui.position.top - start_top) ;
						sdrag_element.css({"height":nowpx+"px","max-height":nowpx+"px"});

					}
				})

		}
		iframeWin.jQuery("#"+id).find(".sliderheight_drag_div").show();
	}


	iframeWin.jQuery("#"+id+" .bitBanerImageText .tp-caption").each(function(){
		elementHover($j(this), "文字", "imageText","imageText");
		$j(this).find(".controls-element").hide();
	})
	iframeWin.jQuery("#"+id+" .bitBanerImageText  .tp-caption").bind("mouseenter",
	function() {
		if ($j(this).find(".cke_editable_inline").length==0) {
			$j(this).find(".controls-element").fadeIn("fast");
			$j(this).css("outline", "1px dashed #000").css("min-height", "8px").css("min-width", "50px");
		}
	}).bind("mouseleave", function() {
		$j(this).find(".controls-element").fadeOut("fast");
		$j(this).css("outline", "0");
	}).bind('dblclick', function() {
			var s = $j(this);
			var sc = $j(this).find(".slideText");
			var id = $j(this).parent().attr("id");
			if(!sc.hasClass("cke_editable") &&  !sc.hasClass("inline_editing")  ){
				bitSiteSlideTextInline(s, sc, id,'imageText');
			}

	}).draggable({
		iframeFix: true,
		containment:iframeWin.jQuery("#"+id),
		cursor:"move",
		handle: ".vc-element-name",
		start: function(event, ui) {
			$j(this).find(".controls-element.bit-controls-element").css("opacity","0.1");
			$j(this).css("bottom","auto").css("right","auto");
		},
		stop: function(event, ui) {
			$j(this).find(".controls-element.bit-controls-element").css("opacity","1");
			updateImageText($j(this).find(".slideText"),'imageText',false);
		}
		});
}
function image_draggle(model, el){
	if(model.get('shortcode') != 'vc_single_image'){
		return;
	}

	var $el;
	if(el){
		$el = el;
	}else{
		$el = iframeWin.jQuery("[data-model-id='"+ model.get('id')+"']");
	}

	if($el.hasClass("idinited")){
		return;
	}

	var $moveImageSize = $el.find(".move-image-size");

	if($moveImageSize.length>0){

			var params = model.get('params');
			var $thiview=$el;
			var $this = $moveImageSize;
			var maxheight = $this.attr("data-max-height");
			var maxwidth = $this.attr("data-max-width");
			var logoimg = $this.parent().find("img");
			var img_old_width = 0;
			var logo_start_x = 0;
			var logo_old_size = 0;
			if($thiview.closest(".section-special").length>0){
				$this.hide();
				return;
			}

			$this.draggable({
				helper: function() {
					return jQuery("<div></div>");
				},

				start: function( event, ui ) {
					img_old_width = logoimg.width();
					logo_start_x = ui.position.left*1;
					guideline_start(event,logoimg,"content");
				},
				stop: function( event, ui ) {
					var current_value = logoimg.width();
					var current_value2 = logoimg.height();
					ajaxBeforeLoading(model.get('id'));
					params.img_size = current_value+"x"+current_value2;
					model.save({params: params}, {silent: true});
					vc.ShortcodesBuilder.update(model);
					vc.ShortcodesBuilder.save();
					guideline_end();
				},
				drag: function( event, ui ) {
					var nowpx2 = img_old_width*1 +  ui.position.left - logo_start_x;
					if(nowpx2>maxwidth ){
						//...

					}else{
						logoimg.width(nowpx2);
					}
					jQuery(this).find("div").html("宽度: "+Math.ceil(nowpx2)+"px");
					guideline_draw(event,logoimg,null);

				}

		});

		$el.addClass("idinited");
	}
}
function singleImageTextInit(id){

	iframeWin.jQuery("[data-model-id='"+id+"']:visible .singleImageText .tp-caption").each(function(){
		elementHover($j(this), "文字", "imageText","imageText");
		$j(this).find(".controls-element").hide();
	})
	iframeWin.jQuery("[data-model-id='"+id+"']:visible .singleImageText .tp-caption").bind("mouseenter",
	function() {

		if ($j(this).find(".cke_editable_inline").length==0) {
			$j(this).find(".controls-element").fadeIn("fast");

			$j(this).css("outline", "1px dashed #000").css("min-height", "8px").css("min-width", "50px");
		}
	}).bind("mouseleave", function() {
		$j(this).find(".controls-element").fadeOut("fast");
		$j(this).css("outline", "0");
	}).bind('dblclick', function() {

			var s = $j(this);
			var sc = $j(this).find(".slideText");
			var id = $j(this).parent().attr("data-model-id");
			bitSiteSlideTextInline(s, sc, id,'singleImageText');

	}).draggable({
		iframeFix: true,
		containment:iframeWin.jQuery("[data-model-id='"+id+"']"),
		cursor:"move",
		handle: ".vc-element-name",
		start: function(event, ui) {
			$j(this).css("bottom","auto").css("right","auto");
			$j(this).find(".controls-element.bit-controls-element").css("opacity","0.1");
		},
		stop: function(event, ui) {
			updateImageText($j(this).find(".slideText"),'singleImageText',false);
			$j(this).find(".controls-element.bit-controls-element").css("opacity","1");
		}
		});

}
function cleanContentBeforeSave(content){
	if(content=="") return "";
	//bitImageControlDiv ,bitImageParentDiv
	content=content.replace("bitSliderLi","").replace("slideText","").replace("singleImageText","");
	return content;
}

function bitSiteSlideTextInline(obj, s, id,flag) {

	var textIndex=s.parent().attr("bitslidetextindex");
	var editid = "bitSiteSlide" + id+"_"+textIndex;
	/****************************      使用新的编辑器      begin****************************/
	if(typeof iframeWin.jQuery.fn.froalaEditor != "undefined"){
		s.attr("id", editid);
		var tmpobj = iframeWin.jQuery("#"+editid);
		var oldHtml = s.html();
		s.parent().find(".vc-controls").addClass("displaynone");
		inline_editor_new(tmpobj,function(){
			tmpobj.removeClass("inline_editing").froalaEditor('destroy');
			if ($j("#vc-edit-icon-dialog:visible").length == 0&&$j(".media-modal .media-modal-content:visible").length == 0) {
				if(flag=="imageText"){
					updateImageText(s,flag,false);
				}else if(flag=="singleImageText"){
					updateImageText(s,flag,false);
				}else{
					updateSliderText(s);
				}
			}
			iframeWin.toolTip(s.parent().find("[data-tooltip='on']"));
			s.parent().find(".vc-controls").removeClass("displaynone");
		},function(){
			isEditChanged = iframeWin.jQuery('[data-cmd="undo"].fr-disabled').length==0?true:false;
			tmpobj.removeClass("inline_editing").froalaEditor('destroy');
			if (isEditChanged) {
				jConfirm("内容被改动，确认是否保存？",function(){
					if(flag=="imageText"){
						updateImageText(s,flag,false);
					}else if(flag=="singleImageText"){
						updateImageText(s,flag,false);
					}else{
						updateSliderText(s);
					}
				},function(){
					s.html(oldHtml);
				})
			}

			iframeWin.toolTip(obj.find("[data-tooltip='on']"));
			s.parent().find(".vc-controls").removeClass("displaynone");
		});
		return true;

	}else{
		s.attr("contenteditable", "true").attr("id", editid);
	}
	/****************************      使用新的编辑器      end****************************/

	iframeWin.CKEDITOR.disableAutoInline = true;
	s.parents('[data-tag=vc_row]').enableSelection();
	if (!iframeWin.CKEDITOR.instances[editid]) {
		var oldHtml = s.html();
		var instance = iframeWin.CKEDITOR.inline(editid);
		instance.config.startupFocus = true;

	} else {
		var instance = iframeWin.CKEDITOR.instances[editid];
	}
	s.parent().find(".vc-controls").hide();
	instance.on('instanceReady', function (ev) {
		    iframeWin.jQuery("#cke_" + editid+" .cke_button.cke_button__savebtn").attr("click","").unbind("click").bind("click",function(){
				if ($j("#vc-edit-icon-dialog:visible").length == 0&&$j(".media-modal .media-modal-content:visible").length == 0) {
					changeButtonOrIconAttr_after(s);
					if(flag=="imageText"){
						updateImageText(s,flag,false);
					}else if(flag=="singleImageText"){
						updateImageText(s,flag,false);
					}else{
						updateSliderText(s);
					}
					instance.destroy();
					s.removeAttr("contenteditable").removeAttr("id");
				}
				iframeWin.jQuery("body").unbind("keyup");
				iframeWin.toolTip(s.parent().find("[data-tooltip='on']"));

			})
			iframeWin.jQuery("#cke_" + editid+" .cke_button.cke_button__closebtn").attr("click","").unbind("click").bind("click",function(){

				var ckid = "#cke_" + editid;
				var isEditChanged=iframeWin.jQuery(ckid+" .cke_button.cke_button__undo.cke_button_disabled").length == 0?true:false;

				instance.destroy();
				s.removeAttr("contenteditable").removeAttr("id");
				if (isEditChanged) {
					jConfirm("内容被改动，确认是否保存？",function(){
						changeButtonOrIconAttr_after(s);
						if(flag=="imageText"){
							updateImageText(s,flag,false);
						}else if(flag=="singleImageText"){
							updateImageText(s,flag,false);
						}else{
							updateSliderText(s);
						}
					},function(){
						s.html(oldHtml);
					})
				}
				iframeWin.jQuery("body").unbind("keyup");
				iframeWin.toolTip(obj.find("[data-tooltip='on']"));


			})
			iframeWin.jQuery("body").unbind("keyup").bind("keyup",function(e){
				if(e.keyCode === 27)
					iframeWin.jQuery("#cke_" + editid+" .cke_button.cke_button__closebtn:visible").click();
			});
			changeButtonOrIconAttr_paste_after(s);
	});
	instance.on('blur', function(e) {
		return false;
	});


}
function updateImageText(s,flag,isnew){

	var content=s.html();
	var text=$j.trim(s.text());
	if(flag=="imageText")
	{
		if(text!="" || s.find("img").length>0  || s.find(".banner-img").length>0 || s.find("video").length>0 ||  s.find("a.bitIcon").length>0||  s.find("a.bitButton").length>0){
			if(content){content=cleanContentBeforeSave(content);}
			var imageid=s.parent().parent().parent().attr("id");

			var textIndex=s.parent().attr("bitslidetextindex");
			var leftVal=s.parent().css("left").replace("px","");
			var topVal=s.parent().css("top").replace("px","");
			s.parent().attr("dataleft",leftVal);
			s.parent().attr("datatop",topVal);
			var textStyle=s.parent().attr("datastyle");
			var imgW=jQuery(this).parent().parent().find(".bitImageParentDiv img").width();
			var para=getOrgPara(s.parent());
			var slideTextShadow = $j("#slideTextShadow").val();
			var slideTextShadowColor = $j("#slideTextShadowColor").val();


			var border_show = s.parent().attr("databordersshow")? s.parent().attr("databordersshow"):"0";
			var borders = s.parent().attr("databorders")? s.parent().attr("databorders"):"";

			var data = {imageid:imageid,bitAction:"saveText",isnew:isnew,textIndex:textIndex,content:content,left:leftVal,top:topVal,textStyle:textStyle,orgPara:para,slideTextShadow:slideTextShadow,slideTextShadowColor:slideTextShadowColor,border_show:border_show,borders:borders};
			var sparent = s.parent();
			var textBgColor =  sparent.attr("bgcolor");
			if(textBgColor){
				data.textBgColor = textBgColor;
			}
			var bgcolor_opt =  sparent.attr("bgcolor_opt");
			if(bgcolor_opt){
				data.bgcolor_opt = bgcolor_opt;
			}
			var st =  sparent.attr("data-st");
			if(st){
				data.st = st;
			}
			var sb =  sparent.attr("data-sb");
			if(sb){
				data.sb = sb;
			}
			var sl =  sparent.attr("data-sl");
			if(sl){
				data.sl = sl;
			}
			var sr =  sparent.attr("data-sr");
			if(sr){
				data.sr = sr;
			}
			if( iframeWin.jQuery("body").width()>760){
				data.showcontrol_device = 1;
				sparent.addClass("wf-mobile-hidden");
			}else{
				data.showcontrol_device = 2;
				sparent.addClass("wf-mobile-visible desktopHidden");
			}
			if(isnew){
				ajaxBeforeLoading(0, s.parent().parent().parent());
			}
			$j.post("/FeiEditor/siteEdit/updateText/update_image_text" ,data, function(){
				ajaxAfterSave();
			});
		}else{
			var jThis = $j(this);
			jConfirm("文字内容为空，将删除这段文字?",function(){
				var imageid=s.parent().parent().parent().attr("id");
				var textIndex=s.parent().attr("bitslidetextindex");
				var data = {imageid:imageid,bitAction:"delete",textIndex:textIndex};
				ajaxBeforeLoading(0, s.parent().parent().parent());
				$j.post("/FeiEditor/siteEdit/updateText/update_image_text" ,data, function(){
					ajaxAfterSave();
				});

			})

		}
	}else if(flag=="singleImageText"){
		if(text!=""  || s.find("img").length>0 || s.find("video").length>0){
			if(content){content=cleanContentBeforeSave(content);}

			var imageid=s.parent().parent().parent().parent().attr("data-model-id");
			var textIndex=s.parent().attr("bitslidetextindex");
			var leftVal=s.parent().css("left").replace("px","");
			var topVal=s.parent().css("top").replace("px","");
			s.parent().attr("dataleft",leftVal);
			s.parent().attr("datatop",topVal);
			var textStyle=s.parent().attr("datastyle");
			var model = vc.shortcodes.get(imageid);
			var params = model.get('params');
			var para=getOrgPara(s.parent());
			var data = {textIndex:textIndex,content:content,left:leftVal,top:topVal,textStyle:textStyle,orgPara:para,hidetextval:params["hidetextval"]};

			$j.post("/FeiEditor/siteEdit/setPara" ,data, function(rs){

				params["hidetextval"] = rs;
				model.save({
					params : params
				 });

				updatePage(model, null,"noloading");


			});

		}else{
			var jThis = $j(this);
			jConfirm("文字内容为空，将删除这段文字?",function(){
				var imageid=s.parent().parent().parent().parent().attr("data-model-id");
				var textIndex=s.parent().attr("bitslidetextindex");
				var model = vc.shortcodes.get(imageid);
				var params = model.get('params');
				var data = {textIndex:textIndex,action:'delete',hidetextval:params["hidetextval"]};
				$j.post("/FeiEditor/siteEdit/setPara" ,data, function(rs){

					params["hidetextval"] = rs;
					model.save({
						params : params
					 });
					updatePage(model, null);
					s.parent().parent().find(".tp-caption").each(function(){
						var index=$j(this).attr("bitslidetextindex");
						if(index>textIndex){
							jThis.attr("bitslidetextindex",index-1).css("z-index",index-1);
						}
					});
					 ajaxAfterSave();
				});


			},function(){  s.html("&nbsp;");});

		}

	}

}

function getOrgPara(text){
		var imgW=text.parent().parent().find(".bitImageParentDiv img").width();
		var imgH=text.parent().parent().find(".bitImageParentDiv img").height();
		var textW=text.width();
		var textH=text.height();
		var textLeft=text.css("left");
		if(textLeft&&textLeft.indexOf("px")){textLeft=textLeft.replace("px","")};
		var textTop=text.css("top");
		if(textTop&&textTop.indexOf("px")){textTop=textTop.replace("px","")};
		var paddingLeft=text.css("padding-left");
		if(paddingLeft&&paddingLeft.indexOf("px")){paddingLeft=paddingLeft.replace("px","")};
		var paddingTop=text.css("padding-top");
		if(paddingTop&&paddingTop.indexOf("px")){paddingTop=paddingTop.replace("px","")};
		var org_left=(textW/2+textLeft*1+paddingLeft*1)/imgW;
		if(textLeft==0){org_left=0}
		var org_top=(textH/2+textTop*1+paddingTop*1)/imgH;
		if(textTop==0){org_top=0}
		var size=text.css("font-size");
		if(size.indexOf("px")>-1){ size=size.replace("px","");}
		org_right=0;
		if(Math.abs(textW*1+paddingLeft*2+textLeft*1-imgW)<2){
			org_right=1;
		}
		org_bottom=0;
		if(Math.abs(textH*1+paddingTop*2+textTop*1-imgH)<2){
			org_bottom=1;
		}
		var org_para=org_left.toFixed(4)+"|"+org_top.toFixed(4)+"|"+imgW+"|"+size+"|"+org_right+"|"+org_bottom;
		text.attr("dataorgipara",org_para);
		return org_para;
}
function updateSliderText(s){

	var content=s.html();
	var text=$j.trim(s.text());
	var load=s.parent().parent().parent().parent().parent().find(".tp-loader");
	if(text!=""|| s.find("img").length>0 ||  s.find("video").length>0 ||  s.find("a.bitIcon").length>0||  s.find("a.bitButton").length>0){
		if(content){content=cleanContentBeforeSave(content);}
		var slideid=s.parent().parent().attr("data-slideid");
		var sliderID=s.parent().parent().parent().parent().parent().attr("bitdatalocation");
		var textIndex=s.parent().attr("bitslidetextindex");
		var data = {slideid:slideid,sliderID:sliderID,bitAction:"saveText",textIndex:textIndex,content:content};
		ajaxBeforeLoading(0,iframeWin.jQuery('.rev_slider_wrapper'));
		revAjaxRequest("update_slide_sample" ,data, function(){
			ajaxAfterLoading();
			hiddentext = base64_encode(content);
			s.closest(".tp-caption").attr("hiddentext",hiddentext);
		});
	}else{
		jConfirm("文字内容为空，将删除这段文字?",function(){
			var slideid=s.parent().parent().attr("data-slideid");
			var sliderID=s.parent().parent().parent().parent().parent().attr("bitdatalocation");
			var textIndex=s.parent().attr("bitslidetextindex");
			var data = {slideid:slideid,sliderID:sliderID,bitAction:"delete",textIndex:textIndex};
			ajaxBeforeLoading(0,iframeWin.jQuery('.rev_slider_wrapper'));
			revAjaxRequest("update_slide_sample" ,data, function(){
				s.remove();
				ajaxAfterLoading();
			});
		})

	}

}
var slider_nonce;
var slider_nowid = 0;
var pop_once =false;
function slide(obj) {
	var sliderId = obj.attr("bitdatalocation");
	if(!sliderId && pop_once==false){
		jConfirm("检测到幻灯片已经被损坏，是否删除后重新添加幻灯片？",function(){
				pop_once = true;
				var revs = $j(obj).closest('.bitBanner.widget_revslider');
				var widget_id = revs.attr('id');
				$j.post("/FeiEditor/siteEdit/ajax_deleteWidget/"+widget_id, function(msg) {
					if (obj.closest("[bitdataaction='site_fix_container']").length > 0) {
							var tmp = obj.closest("[bitdataaction='site_fix_container']");
							$j(tmp).html("");
							widgetFixEvent(tmp);
						}
				});
		})
	}
	slideId = 0;
	var slidedom = null;
	obj.find("li.bitSliderLi").each(function() {
		if ($j(this).css("z-index") == "20") {
			slideId = $j(this).attr("data-slideid");
			slidedom = $j(this);
		}
	});

	slider_nowid = sliderId;
	slider_nonce = obj.attr("bidatanonce");
	var sliderObj = eval("iframeWin.revapi" + sliderId);
	sliderObj.revpause();

	var str = '<div class="bitSiteSlide " ><div>';
	str += '<a class="control-btn vc-element-name wf-mobile-hidden"><span class="vc-btn-content vo-btn-nomove">幻灯片页面:</span></a>';

	str += '<a class="control-btn bitSlideToLeft" style="color:#fff;text-decoration:none;padding:0 3px;"><span class="vc-btn-content" style="font-size:12px !important;line-height: 18px !important;">左移</span></a>';
	str += '<a class="control-btn bitSlideToRight" style="color:#fff;text-decoration:none;padding:0 3px;"><span class="vc-btn-content" style="font-size:12px !important;line-height: 18px !important;">右移</span></a>';
	str += '<a class="control-btn bitSlideToCopy" style="color:#fff;text-decoration:none;padding:0 3px;"><span class="vc-btn-content" style="font-size:12px !important;line-height: 18px !important;">复制</span></a>';
	str += '<a class="control-btn bitSlideEdit" style="color:#fff;text-decoration:none;padding:0 3px;"><span class="vc-btn-content" style="font-size:12px !important;line-height: 18px !important;">换图</span></a>';
	str += '<a class="control-btn bitSlideaddText" style="color:#fff;text-decoration:none;padding:0 3px;"><span class="vc-btn-content" style="font-size:12px !important;line-height: 18px !important;">加字</span></a>';
	str += '<a class="control-btn bitSlidesetting" style="color:#fff;text-decoration:none;padding:0 3px;"><span class="vc-btn-content" style="font-size:12px !important;line-height: 18px !important;">设置</span></a>';
	str += '<a class="control-btn bitSlideDelete" style="color:#fff;text-decoration:none;padding:0 8px 0 3px;"><span class="vc-btn-content" style="font-size:12px !important;line-height: 18px !important;">删除</span></a>';

	str += '<a title="隐藏工具栏10秒钟" class="control-btn control-btn-hidden"><span class="vc-btn-content"><span class="icon"></span></span></a>';
	str += '</div>';
	str += '</div>';
	str += '<div class="sliderheight_drag_line" style="top: 0px; position: absolute; z-index: 96;height:1px;background:#3e3e3e;width:100%;"></div>';
	str += '<div class="sliderheight_drag_line" style="bottom: 0px; position: absolute; z-index: 97;height:1px;background:#3e3e3e;width:100%;"></div>';
	str += '<div class="sliderheight_drag" style="bottom: -10px; position: absolute; z-index: 99; font-size: 12px; background: #3e3e3e; color: rgb(255, 255, 255); padding: 2px 0px; left: 50%; margin-left: -75px; cursor: n-resize;"><i  class="fa fa-angle-left" style="cursor:pointer;padding:0 8px;"></i>拖动调整幻灯片高度<i class="fa fa-angle-right" style="cursor:pointer;padding:0 8px;;"></i>';
	str += '</div>';

	var strleft = '<div class="bitSiteSlideLeft wf-mobile-hidden" ><div >';
	strleft += '<a class="control-btn vc-element-name"><span class="vc-btn-content vo-btn-nomove">整个幻灯片:</span></a>';
	strleft += '<a class="control-btn bitSlideAdd" style="color:#fff;text-decoration:none;padding:0 3px;"><span class="vc-btn-content" style="font-size:12px !important;line-height: 18px !important;">新增页面</span></a>';
	strleft += '<a class="control-btn bitSlideSet" style="color:#fff;text-decoration:none;padding:0 3px;"><span class="vc-btn-content" style="font-size:12px !important;line-height: 18px !important;">设置</span></a>';
	if(iframeWin.jQuery(".fullscreencontenter").length <=0){
		strleft += '<a class="control-btn bitSlideClone" style="color:#fff;text-decoration:none;padding:0 3px;"><span class="vc-btn-content" style="font-size:12px !important;line-height: 18px !important;">复制</span></a>';
	}
	strleft += '<a class="control-btn bitSliderDel" style="color:#fff;text-decoration:none;padding:0 3px;"><span class="vc-btn-content" style="font-size:12px !important;line-height: 18px !important;">删除</span></a>';
	strleft += '<a class="control-btn bit_button_helper" data-for="幻灯片" style="background-color: #3e3e3e;color:#fff;text-decoration:none;padding-right:8px;"><span class="vc-btn-content" style="font-size:12px !important;line-height: 18px !important;top:0px;">？</span></a>';

	strleft += '</div>';
	strleft += '</div>';


	if (obj.find(".bitSiteSlide").length == 0) {
		obj.prepend(str);
		obj.find(".bitSlideToLeft").bind("click", function() {
			if (obj.find(".tp-loader:visible").length == 0) {

				obj.find(".tp-loader").show();
				bitSiteSlideAction(obj, "left", sliderObj);
			}
		});
		obj.find(".bitSlideToRight").bind("click", function() {
			if (obj.find(".tp-loader:visible").length == 0) {

				obj.find(".tp-loader").show();
				bitSiteSlideAction(obj, "right", sliderObj);
			}
		});
		obj.find(".bitSlideToCopy").bind("click", function() {
			if (obj.find(".tp-loader:visible").length == 0) {

				obj.find(".tp-loader").show();
				bitSiteSlideAction(obj, "copy", sliderObj);
			}
		});
		obj.find(".bitSlideEdit").bind("click", function() {
			if (obj.find(".tp-loader:visible").length == 0) {
				bitSiteSlideAction(obj, "edit", sliderObj);
			}
		});
		obj.find(".bitSlideaddText").bind("click", function() {
			if (obj.find(".tp-loader:visible").length == 0) {
				bitSiteSlideAction(obj, "addText", sliderObj);
			}
		});
		obj.find(".bitSlidesetting").bind("click", function() {
			if (obj.find(".tp-loader:visible").length == 0) {
				obj.find("li.bitSliderLi").each(function() {
					if ($j(this).css("z-index") == "20") {
						slideId = $j(this).attr("data-slideid");
						slidedom = $j(this);
					}
				});
				vc.edit_slide_block_view.render(sliderId, slideId, sliderObj,slidedom,"slide_set",obj);
				sliderObj.revpause();
				bitSiteSlideAction(obj, "setting", sliderObj);
			}
		});
		obj.find(".bitSlideDelete").bind("click", function() {
			if (obj.find(".tp-loader:visible").length == 0) {
				if(obj.find(".bitSliderLi").length<2){
					jAlert("一个幻灯片最少需要有一个页面，不能进行删除操作。如果您需要删除整个幻灯片，请点击幻灯片的删除按钮（黑色工具条上）。");
					return ;
				}

				jConfirm("确认是否删除该页幻灯片？",function(){
					obj.find(".tp-loader").show();
					bitSiteSlideAction(obj, "delete", sliderObj);
				})

			}
		});
		obj.find(".control-btn-hidden").bind("click", function() {
			obj.find(".bitSiteSlide,.sliderheight_drag,.sliderheight_drag_line").hide();
			setTimeout(function(){obj.find(".bitSiteSlide,.sliderheight_drag,.sliderheight_drag_line").show();},10000);
		});

		var start_height = 0;
		var start_top = 0;
		var sdrag = iframeWin.jQuery(".rev_slider_wrapper .sliderheight_drag");
		var sdrag_p = sdrag.closest(".rev_slider_wrapper");
		var sdrag_p_all = sdrag_p.parent().find("ul,.rev_slider_wrapper,.rev_slider");
		iframeWin.jQuery(".rev_slider_wrapper .sliderheight_drag i.fa-angle-left").click(function(){
			iframeWin.jQuery(".rev_slider_wrapper .tp-leftarrow").click();
		})
		iframeWin.jQuery(".rev_slider_wrapper .sliderheight_drag i.fa-angle-right").click(function(){
			iframeWin.jQuery(".rev_slider_wrapper .tp-rightarrow").click();
		})
		sdrag.draggable({axis: "y",

				helper: function() {
					return $j("<div></div>");
				},
				start: function( event, ui ) {
					start_height =sdrag_p.height();
					start_top = ui.position.top;
				},
				stop: function( event, ui ) {
					var current_value = sdrag_p.height();
					var data = {main:{}};
					data.sliderid = sliderId;
					if( iframeWin.jQuery("body").width()>760){
						data.main.height = current_value;
					}else if( iframeWin.jQuery("body").width()>320){
						data.main.mobileheight = current_value*320/760;
					}else{
						data.main.mobileheight = current_value;
					}
					revAjaxRequest("update_slider_sample_height" ,data, function(){
						refreshREvSlider(iframeWin.jQuery("[bitdatalocation="+sliderId+"]"),0);
					});
				},
				drag: function( event, ui ) {
					var nowpx = start_height + (ui.position.top - start_top) ;
					sdrag_p_all.css({"height":nowpx+"px","max-height":nowpx+"px"});

				}
			})

	} else {
		obj.find(".bitSiteSlide,.sliderheight_drag,.sliderheight_drag_line").show();
	}


	if (obj.find(".bitSiteSlideLeft").length == 0) {
		obj.prepend(strleft);

		obj.find(".bitSlideAdd").bind("click", function() {

				bitSiteSlideAction(obj, "add", sliderObj);

		});
		obj.find(".bitSlideSet").bind("click", function() {
			if (obj.find(".tp-loader:visible").length == 0) {
				obj.find("li.bitSliderLi").each(function() {
					if ($j(this).css("z-index") == "20") {
						slideId = $j(this).attr("data-slideid");
						slidedom = $j(this);
					}
				});
				vc.edit_slide_block_view.render(sliderId, slideId, sliderObj,slidedom,"set",obj);
				sliderObj.revpause();
				//obj.find(".tp-loader").show();
				bitSiteSlideAction(obj, "set", sliderObj);
			}
		});

		obj.find(".bitSlideClone").bind("click", function() {
			if (obj.find(".tp-loader:visible").length == 0) {
				var revs = $j(obj).parents('.bitBanner.widget_revslider');
				var widget_id = revs.attr('id');
				if(!widget_id) return false;
				vc.edit_widget_block_view.render(false);
				ajaxGetWidgetCloneToForm(widget_id);
			}else{
				jConfirm("未知页面错误，请刷新页面后重试。",function(){});
			}
		});

		obj.find(".bitSliderDel").bind("click", function() {
			if (obj.find(".tp-loader:visible").length == 0) {
				jConfirm("请确认是否需要删除整个横幅幻灯片？如果您只是需要删除其中的一个图片，请点击右边绿色工具栏中的删除按钮。",function(){
					var revs = $j(obj).parents('.bitBanner.widget_revslider');
					var widget_id = revs.attr('id');
					$j.post("/FeiEditor/siteEdit/ajax_deleteWidget/"+widget_id, function(msg) {
						if (obj.parents("[bitdataaction='site_fix_container']").length > 0) {
								var tmp = obj.parents("[bitdataaction='site_fix_container']")[0];
								$j(tmp).html("");
								widgetFixEvent(tmp);
							}
					});

				});
			}

		});
		obj.find(".bitSlideHidden").bind("click", function() {
			if (obj.find(".tp-loader:visible").length == 0) {
				jAlert("该页幻灯片无法隐藏！")
			}
		})
	} else {
		obj.find(".bitSiteSlideLeft").fadeIn("fast");
	}
}
function bitSiteSlideAction(obj, action, sliderObj) {
	var sliderId = obj.attr("bitdatalocation");
	var slid = 0;
	var o = null;
	sliderObj.revpause();
	obj.find("li.bitSliderLi").each(function() {
		if ($j(this).css("z-index") == "20") {
			slid = $j(this).attr("data-slideid");
			o = $j(this);

		}
	});
	// add
	if (action == "right") {
		var next = o.next();
		if (next.length > 0) {
			var tmp = o.clone();
			o.remove();
			next.after(tmp);
		} else {
			jAlert("已经在最后面了");
			obj.find(".tp-loader").hide();
			return;
		}
		var tmparr = new Array();
		obj.find("li.bitSliderLi").each(function(i) {
			tmpslid = $j(this).attr("data-slideid");
			tmparr[i] = tmpslid;
		});
		var data = {
			arrIDs : tmparr,
			sliderID : sliderId
		};
		ajaxBeforeLoading(0,obj);
		revAjaxRequest("update_slides_order", data, function() {
			refreshREvSlider(obj,slid);
		});

	} else if (action == "left") {
		var prev = o.prev();
		if (prev.length > 0) {
			var tmp = o.clone();
			o.remove();
			prev.before(tmp);
		} else {
			jAlert("已经在最前面了");
			obj.find(".tp-loader").hide();
			return;
		}
		var tmparr = new Array();
		obj.find("li.bitSliderLi").each(function(i) {
			tmpslid = $j(this).attr("data-slideid");
			tmparr[i] = tmpslid;
		});
		var data = {
			arrIDs : tmparr,
			sliderID : sliderId
		};
		ajaxBeforeLoading(0,obj);
		revAjaxRequest("update_slides_order", data, function() {
			refreshREvSlider(obj,slid);
		});
	} else if (action == "copy") {
		var data = {
			slideID : slid,
			sliderID : sliderId
		};
		ajaxBeforeLoading(0,obj);
		revAjaxRequest("duplicate_slide", data, function() {
			refreshREvSlider(obj,slid,"copy");
		});

	} else if (action == "delete") {
		var data = {
			slideID : slid,
			sliderID : sliderId
		};
		ajaxBeforeLoading(0,obj);
		revAjaxRequest("delete_slide", data, function() {
			refreshREvSlider(obj,0);
		});
	} else if (action == "setting") {
		var data = {
			slideID : slid,
			sliderID : sliderId
		};

	} else if (action == "add") {

		revOpenAddImageDialog('选择图片', function(img) {
			if(!img) return false;
			var data = {
				sliderid : sliderId,
				obj : img
			};
			ajaxBeforeLoading(0,obj);
			revAjaxRequest("add_single_slide", data, function(res) {
				refreshREvSlider(obj,"add");
			});
		}, false, false,sliderObj)
	}else if(action == "addText"){
		vc.edit_slide_block_view.render(sliderId, slid, sliderObj,o,"add text");

	} else if (action == "edit") {
		revOpenAddImageDialog('替换图片', function(urlImage, imageID) {
			if(!urlImage) return false;
			var data = {
				slider_id : sliderId,
				slide_id : slid,
				url_image : urlImage,
				image_id : imageID
			};
			ajaxBeforeLoading(0,obj);
			revAjaxRequest("change_slide_image", data, function() {
				refreshREvSlider(obj,slid);
			});
		}, false, false,sliderObj);

	}

}

function revAjaxRequest(action, data, successFunction) {

	var objData = {
		action : "revslider_ajax_action",
		client_action : action,
		nonce : slider_nonce,
		data : data
	}

	jQuery.ajax({
		type : "post",
		url : ajaxurl,
		dataType : 'json',
		data : objData,
		success : function(response) {

			if (!response) {
				console.log("Empty ajax response!");
				return (false);
			}

			if (response == -1) {
				console.log("ajax error!!!");
				return (false);
			}

			if (response == 0) {
				console.log("ajax error, action: <b>" + action
						+ "</b> not found");
				return (false);
			}

			if (response.success == undefined) {
				console.log("The 'success' param is a must!");
				return (false);
			}

			if (response.success == false) {
				console.log(response.message);
				return (false);
			}

			if (typeof successFunction == "function")
				successFunction(response);

		},
		error : function(jqXHR, textStatus, errorThrown) {

			console.log("Ajax Error!!! " + textStatus);
		}
	});

}
var openNewImageDialog=function(title,onInsert,isMultiple,defalutVal,sliderObj){if(isMultiple==undefined){isMultiple=false}if(defalutVal==undefined){defalutVal=false}var frame=wp.media({title:title,multiple:isMultiple,editing:false,library:{type:"image"},button:{text:"插入图片"}});wp.global_curr_frame=frame;frame.on("select",function(){var objSettings=frame.state().get("selection").first().toJSON();var selection=frame.state().get("selection");var arrImages=[];if(isMultiple==true){selection.map(function(attachment){var objImage=attachment.toJSON();var obj={};obj.url=objImage.url;obj.id=objImage.id;arrImages.push(obj)});onInsert(arrImages)}else{if(objSettings.islib){if(jQuery(".btn-img-upload:visible").length==1){jQuery(".btn-img-upload:visible img:last").attr("src","/qfy-content/plugins/revslider/rs-plugin/assets/loader.gif").width("100%")}$j.post("/admin/admin-ajax.php",{action:"bit_auto_uploadimage",obj:objSettings},function(data){var tmpJson=jQuery.parseJSON(data);onInsert(tmpJson.url,tmpJson.id)})}else{onInsert(objSettings.url,objSettings.id,objSettings.alt,objSettings.caption)}}});if(defalutVal){frame.on("open",function(){var id=frame.$el.attr("id");selectDefaultImg(id,defalutVal,0)})}if(typeof(sliderObj)!="undefined"){frame.on("open",function(){setTimeout(function(){sliderObj.revpause()},500);setTimeout(function(){sliderObj.revpause()},2000)})}frame.on("close",function(){onInsert("","")});frame.open();return frame};
var post_one_frame;
function openNewVideoDialog(obj,oninsert){qfy_media_video=true;var $el=jQuery(obj);if(post_one_frame){post_one_frame.open();return}post_one_frame=new wp.media.view.MediaFrame.Select({title:"视频",onlylocal:true,button:{text:"插入",},multiple:true,library:{order:"ASC",orderby:"title",type:"video/mp4",search:null,uploadedTo:null},});post_one_frame.on("open",function(){$this=this;var media=wp.media,Attachment=media.model.Attachment;var selection=post_one_frame.state().get("selection");var id=$el.attr("data-id");var attachment;if(""!==id&&-1!==id){attachment=Attachment.get(id);attachment.fetch()}selection.reset(attachment?[attachment]:[])});post_one_frame.on("close",function(){});post_one_frame.on("select",function(){var selection=post_one_frame.state().get("selection");selection.map(function(attachment){attachment=attachment.toJSON();if(attachment.id){oninsert(attachment.icon,attachment.id)}})});post_one_frame.open()};
function selectDefaultImg(id,defalutVal,n){
	n++;
	if(n>10){
		return false;
	}
	if($j("#"+id).find("li img").length==0){
		setTimeout(function(){
			selectDefaultImg(id,defalutVal,n);
		},600);
		return false;
	}
	$j("#"+id).find("li img").each(function(){
				var s=$j(this).attr("src");
				if(s){
					var tmp=s.substr(s.lastIndexOf("/")+1);
					var len=tmp.lastIndexOf("-");
					tmp=tmp.substr(len);
					if(len>-1){
						tmp=tmp.split("\.");
						s=s.replace(tmp[0],"");
					}
				}

				if(defalutVal&&s){
					if(s==defalutVal){
						$j(this).parent().parent().parent().parent().addClass("save-ready details selected");
						$j(this).click();
						return;
					}
				}
	})

}
/**
 * open old add image dialog
 */
var openOldImageDialog = function(title, onInsert) {
	var params = "type=image&post_id=0&TB_iframe=true";

	params = encodeURI(params);

	tb_show(title, 'media-upload.php?' + params);

	window.send_to_editor = function(html) {
		tb_remove();
		var urlImage = jQuery(html).attr('src');
		if (!urlImage || urlImage == undefined || urlImage == "")
			var urlImage = jQuery('img', html).attr('src');
		onInsert(urlImage, ""); // return empty id, it can be changed
	}
}

function revOpenAddImageDialog(title, onInsert, isMultiple,defalutVal,sliderObj) {

	if (!title)
		title = '选择图片';

	if (typeof wp != "undefined" && typeof wp.media != "undefined")
		openNewImageDialog(title, onInsert, isMultiple,defalutVal,sliderObj);
	else {
		openOldImageDialog(title, onInsert);
	}
}
/* get widget fix hover event */
function widgetFixEvent(obj) {
	if ($j.trim($j(obj).html()) == "") {
		if(!$j(obj).hasClass("floatmenu-bar-right") && !$j(obj).hasClass("topbar_right")  && !$j(obj).hasClass("topbar_left")  ){
			$j(obj).html("<div class='emptyFix bitActionClass' title='添加零件' ></div>");
		}
		if($j(obj).hasClass("bitBanner")){
			$j(obj).css("position","absolute").css("right",0);
		}
	}else{
		if($j(obj).hasClass("bitBanner")){
			$j(obj).css("position","relative");
		}

	}


	var rlt = $j(obj).attr("bitdatamarker");
	//yliu add for header height
	if ($j(obj).find(".ckeditorInLine").length > 0 && $j.inArray(rlt, ['bitHeader', 'bitHeader-1']) == -1) {
		$j(obj).find(".ckeditorInLine").css("min-height", "23px").css("min-width", "100px");
	}
	$j(obj).find(".emptyFix").click(function() {
		var portal = new vc.BitModel({
			sid : rlt
		});
		if($j.inArray(rlt, ['bitHeader', 'bitHeader-1']) != -1) {
			vc.add_header_widget_block_view.render(portal);
		} else if(rlt == 'bitBanner') {
			vc.add_banner_block_view.render(portal);
		} else if(rlt == 'bitHeader-2'|| rlt == 'bitHeader-3'|| rlt == 'bitHeader-4'|| rlt == 'bitHeader-5') {
			vc.add_header2_block_view.render(portal);
		} else {
			vc.add_widget_block_view.render(portal);
		}
	})
	$j(obj).find('.ckeditorInLine').bind('dblclick', function() {
		if(!$j(this).hasClass("cke_editable")   &&  !$j(this).hasClass("inline_editing")   ){
			ckInlinedblclick(this);
		}
	});
}
/* get widget fix logo event */
function widgetFixLogoEvent(obj) {
	if ($j.trim($j(obj).html()) == "") {
		$j(obj).html("<div class='emptyFix bit_site_logo_empty' title='添加Logo' ></div>");
	}
	var rlt = $j(obj).attr("bitdatamarker");
	$j(obj).find(".bit_site_logo_empty").click(function() {
		var portal = new vc.BitModel({
			sid : rlt
		});
		vc.add_logo_block_view.render(portal);

	});

	$j(obj).find('.ckeditorInLine').bind('dblclick', function() {
		if(!$j(this).hasClass("cke_editable")  &&  !$j(this).hasClass("inline_editing")  ){
			ckInlinedblclick(this);
		}
	});

}



function widgetHover(obj, $column) {
	$j(obj).bind("mouseenter", function() {
		$j(this).css("position", "relative");
		var type = "widget", obj = $j(this), wid = $j(this).attr("id");
		if (wid&&wid.indexOf("menu") > -1) {
			type = "widget_menu";
		} else if (wid&&wid.indexOf("iphorm-widget") > -1) {
			type = "widget_form";
		}
		elementHover($j(this), "插件", "widget", type);
		$j(this).css("outline", "1px dashed rgba(125, 125, 125, 0.4)");
		if($j(this).hasClass("bitBanner")){
			var id=$j(this).attr("id");
			imageTextInit(id);

		}
	}).bind("mouseleave", function() {

		$j(this).find(".controls-element").fadeOut("fast");
		$j(this).css("outline", "0");
		if($j(this).hasClass("bitBanner")){
			$j(this).find(".sliderheight_drag_div").fadeOut("fast");
		}

	});
	$j(obj).find('.ckeditorInLine').bind('dblclick', function() {
		if(!$j(this).hasClass("cke_editable") &&  !$j(this).hasClass("inline_editing")  ){
			ckInlinedblclick(this);
		}
	});

}
function isVCStatus($column) {
	var is = $j($column).hasClass("compose-mode")
	if (is == true) {
		return true;
	} else {
		return false;
	}

}
function SortableInit($column) {


	$column.find("[bitDataAction='site_widget_container'].bitRightSider,[bitDataAction='site_widget_container'].bitLeftSider").sortable({
		handle : ".vc-controls .vc-element-name",
		placeholder : "vc-placeholder-row",
		connectWith: ".bitRightSider,.bitLeftSider",
		cursor : 'move',
		scroll : false,
		cursorAt : {
			top : 16,
			left : 16
		},
		helper : holdHelper,
		start : function(event, ui) {

		},
		stop : function(event, ui) {
		},
		update : function(event, ui) {

			var addnew;
			var widget = ui.item;
			var sidebar_id = $j(this).attr("bitdatamarker");
			var list = new Array();
			var itemId =  $j(widget).attr("id");
			$j(this).children(".site_tooler").each(function(n) {
				// get id
				list[n] = $j(this).prop("id");
			});
			ajaxChangeWidget(sidebar_id, list,itemId);
		}
	});
	$column.find("[bitDataAction='site_widget_container'].bitMainTopSider .bitMainTopSider_warp>div,[bitDataAction='site_widget_container'].bitMainBottomSider .bitMainBottomSider_warp>div").sortable({
		handle : ".vc-controls .vc-element-name",
		placeholder : "vc-placeholder-row",
		connectWith: ".bitRightSider,.bitLeftSider",
		cursor : 'move',
		scroll : false,
		cursorAt : {
			top : 16,
			left : 16
		},
		helper : holdHelper,
		start : function(event, ui) {

		},
		stop : function(event, ui) {
		},
		update : function(event, ui) {

			var addnew;
			var widget = ui.item;
			var sidebar_id = $j(this).parent().parent().attr("bitdatamarker");
			var list = new Array();
			var itemId =  $j(widget).attr("id");
			$j(this).children(".site_tooler").each(function(n) {
				// get id
				list[n] = $j(this).prop("id");
			});
			ajaxChangeWidget(sidebar_id, list,itemId);
		}
	});

	$column.find("[bitDataAction='site_widget_container']:not(.bitRightSider,.bitMainTopSider,.bitLeftSider,.bitMainBottomSider)").sortable({
		handle : ".vc-element-name",
		placeholder : "vc-placeholder-row",
		cursor : 'move',
		scroll : false,
		cursorAt : {
			top : 16,
			left : 16
		},
		helper : holdHelper,
		start : function(event, ui) {
		},
		stop : function(event, ui) {
		},
		update : function(event, ui) {

			var addnew;
			var widget = ui.item;
			var sidebar_id = $j(this).attr("bitdatamarker");
			var list = new Array();
			var itemId =  $j(widget).attr("id");
			$j(this).children(".site_tooler").each(function(n) {
				// get id
				list[n] = $j(this).prop("id");
			});
			ajaxChangeWidget(sidebar_id, list,itemId);
		}
	});
		$column.find("[bitDataAction='site_fix_container'].top-bar-right,[bitDataAction='site_fix_container'].topbar_right,[bitDataAction='site_fix_container'].topbar_left,[bitDataAction='site_fix_container'].floatmenu-bar-right").sortable({
		handle : ".vc-controls .vc-element-name",
		placeholder : "vc-placeholder-row",
		//connectWith: ".bitRightSider,.bitLeftSider",
		cursor : 'move',
		scroll : false,
		cursorAt : {
			top : 16,
			left : 16
		},
		helper : holdHelper,
		start : function(event, ui) {

		},
		stop : function(event, ui) {
		},
		update : function(event, ui) {

			var addnew;
			var widget = ui.item;
			var sidebar_id = $j(this).attr("bitdatamarker");
			var list = new Array();
			var itemId =  $j(widget).attr("id");
			$j(this).children(".site_tooler").each(function(n) {
				// get id
				list[n] = $j(this).prop("id");
			});
			ajaxChangeWidget(sidebar_id, list,itemId);
		}
	});
}
function holdHelper() {
	str = '<div class="vc-helper ui-sortable-helper widget-drag-helper " style="position: absolute; z-index: 1000; "><i class="vc-element-icon icon-qfe-layer-shape-text"></i> </div>';
	$helper = $j(str);
	return $helper;
}
function draggableInit($column) {
	// $column.find("#vc-add-menu-dialog .modal-dialog").draggable();
	// $column.find("#vc-edit-widget-dialog .modal-dialog").draggable();


}
function keyEventInit(win){
	win.document.addEventListener("keydown", function(e){
		_keyEventInit(e);
	});
	top.document.addEventListener("keydown", function(e){
		_keyEventInit(e);
	});
}
function _delete_selected_element(){
	if(iframeWin.jQuery(".section-special .ui-selected.qfy-element").length>0 && iframeWin.jQuery("body.doing").length==0 ){
		 jConfirm("确认是否删除？",function(){
			 iframeWin.jQuery(".section-special .ui-selected.qfy-element").each(function(){
				    var obj = jQuery(this);
				    var id = obj.parent().attr("data-model-id");
				    var model = vc.shortcodes.get(id);
				    if(model.get('shortcode') == "iphorm_vc") {
						var $formId = model.view.$el.find('.qfe_content_element').data('id');
						ajax_delete_form($formId);
					}else if(model.get('shortcode') == "vc_notice") {
						var to_post_id = model.view.$el.find('.notice_warp').attr('data-post_id');
						if(to_post_id && to_post_id>0){
							jQuery.post("/FeiEditor/siteEdit/ajax_deletepage/"+to_post_id);
						}
					}
				 	model.destroy();
					vc.ShortcodesBuilder.save(true);
			 });
		 },function(){ return false;});
			top.jQuery(".boxy-wrapper:first").addClass("deletePanel");

			if(iframeWin.jQuery("body").width()>992 ){

					top.jQuery(".boxy-wrapper.deletePanel .answers").prepend('<input type="button" class="buttonPCHide" style="background-color: #fff;border: 1px solid #58ACFE;border-radius: 4px;padding: 6px 12px;color: #58ACFE;float:LEFT;cursor:pointer;" value="仅在PC端隐藏它">');
					top.jQuery(".boxy-wrapper.deletePanel .answers .buttonPCHide").click(function(){
						iframeWin.jQuery(".section-special .ui-selected.qfy-element").each(function(){
							var obj = jQuery(this);
							var id = obj.parent().attr("data-model-id");
							var model = vc.shortcodes.get(id);
							var params = model.get('params');
							params.display_device=2;
							model.save({params: params}, {silent: true});
							vc.ShortcodesBuilder.update(model);
							updatePage(model, null);
							top.jQuery(".buttonPCHide").closest(".boxy-wrapper").find(".buttonClass1").click();
						});
					})

			}else{

					top.jQuery(".boxy-wrapper.deletePanel .answers").prepend('<input type="button" class="buttonMobileHide" style="background-color: #fff;border: 1px solid #58ACFE;border-radius: 4px;padding: 6px 12px;color: #58ACFE;float:LEFT;cursor:pointer;" value="仅在手机端隐藏它">');
					top.jQuery(".boxy-wrapper.deletePanel .answers .buttonMobileHide").click(function(){
						iframeWin.jQuery(".section-special .ui-selected.qfy-element").each(function(){
							var obj = jQuery(this);
							var id = obj.parent().attr("data-model-id");
							var model = vc.shortcodes.get(id);
							var params = model.get('params');
							params.display_device=1;
							model.save({params: params}, {silent: true});
							vc.ShortcodesBuilder.update(model);
							updatePage(model, null);
							top.jQuery(".buttonMobileHide").closest(".boxy-wrapper").find(".buttonClass1").click();
						});
					});

			}

	}
}
function _keyEventInit(e){

		if (e.target.nodeName == 'INPUT' || e.target.nodeName == 'TEXTAREA') {
				return;
		}
		if(e.keyCode==46){
			//delete
			_delete_selected_element();

		}else if(e.ctrlKey && e.keyCode==67){
			//ctrl c
			if(iframeWin.jQuery(".section-special .ui-selected.qfy-element").length==1&& iframeWin.jQuery("body.doing").length==0){
				e.preventDefault();
			    e.stopPropagation();

				 var id = iframeWin.jQuery(".section-special .ui-selected.qfy-element").parent().attr("data-model-id");
				 var shortcode = vc.shortcodes.where({id: id});
				 var model = vc.shortcodes.get(id);
				  var tag =  model.get('shortcode');
				  var string = vc.ShortcodesBuilder.modelsToString(shortcode);
				  var host = "";
				  var url = window.location.href;
				  var regex = /.*\:\/\/([^\/|:]*).*/;
				  var match = url.match(regex);
				  if (typeof match != "undefined"&& null != match) {
					host = match[1];
				  }
				  var helperinfo = '';
				  if(top.jQuery("#qiyukf").length>0){
					  helperinfo = '<a href="http://www.qifeiye.com/%e5%a6%82%e4%bd%95%e5%a4%8d%e5%88%b6%e8%b7%a8%e9%a1%b5%e9%9d%a2%e5%a4%8d%e5%88%b6%e8%b7%a8%e7%bd%91%e7%ab%99%e5%a4%8d%e5%88%b6%e5%86%85%e5%ae%b9%ef%bc%9f/" style="color:#67b3ff" target=_blank  >详细帮助</a>';
				  }
				 top.jConfirmMore('<div><div><div style="text-align:center;margin-top:10px;"><a class="qfy_second_btn" style="font-size: 18px; cursor: pointer; border: 1px solid rgb(103, 179, 255); color: rgb(103, 179, 255); padding: 8px 39px;" onclick="quickcopy(this)">快速复制到当前页</a></div><div style="text-align:center;margin-top:30px;"><a class="copy_btn qfy_primiry_btn" style="font-size: 18px; cursor: pointer; background: rgb(103, 179, 255) none repeat scroll 0% 0%; color: rgb(255, 255, 255); border: 1px solid rgb(103, 179, 255); padding: 6px 57px;" onclick="clipboard_fun(this)" data-clipboard-text='+base64_encode(host+'|^^|'+string)+'>复制到剪贴板</a></div><div><div style="width: 260px; margin: 25px auto 10px; font-size: 12px;">说明：复制到剪贴板之后可以粘贴到其它页面，甚至其它网站。但图片和表单等复杂对象不支持跨站复制。'+helperinfo+'</div></div></div></div>',function(){
					    vc.ShortcodesBuilder.isCustomSuffix = "-c-"+vc.ShortcodesBuilder.randomString().substr(0,2);
						if(tag=="vc_column"||tag=="vc_column_inner"){
								_.each(vc.shortcodes.where({parent_id:model.get('id')}), function (shortcode) {
									vc.CloneModel(shortcode, model.get('id'), true);
								}, this);
								 vc.ShortcodesBuilder.setResultMessage(window.sprintf(window.i18nLocale.inline_element_cloned, model.setting('name'), model.get('id')));
								 vc.ShortcodesBuilder.render(null,true,model);
						 }else{
							  var new_model;
							  vc.clone_index = vc.clone_index / 10;
							  new_model = vc.CloneModel(model, model.get('parent_id'));
							  var newtag =new_model.get('shortcode');
							  vc.ShortcodesBuilder.setResultMessage(window.sprintf(window.i18nLocale.inline_element_cloned, new_model.setting('name'), new_model.get('id')));
							  vc.ShortcodesBuilder.render();
						 }
					 	vc.ShortcodesBuilder.isCustomSuffix = "";

				  },"确认信息","快速复制","关闭")

				  top.jQuery(".boxy-wrapper .buttonClass0:visible").hide();


				  return false;
			}
		}else if (e.keyCode==37){//左
			if(iframeWin.jQuery(".section-special .ui-selected.qfy-element").length>0&& iframeWin.jQuery("body.doing").length==0){
				e.preventDefault();
			    e.stopPropagation();

				 iframeWin.jQuery(".section-special .ui-selected.qfy-element").each(function(){
					 var obj = jQuery(this);
					 var id = obj.parent().attr("data-model-id");
					 var model = vc.shortcodes.get(id);
					 var params = model.get('params');
					  if(iframeWin.jQuery("body").width()>992 ){
						  params["_left"] = params["_left"]*1-1;
						  obj.css("left", params["_left"]+"px");
					  }else{
						  params["__left"] = params["__left"]*1-1;
						  obj.css("left", params["__left"]+"px");
					  }
					  model.save({ params : params });
				 });


				  vc.ShortcodesBuilder.delay_save();
			}
		}else if (e.keyCode==38){//上
			if(iframeWin.jQuery(".section-special .ui-selected.qfy-element").length>0&& iframeWin.jQuery("body.doing").length==0){
				e.preventDefault();
			    e.stopPropagation();

				 iframeWin.jQuery(".section-special .ui-selected.qfy-element").each(function(){
					 var obj = jQuery(this);
					 var id = obj.parent().attr("data-model-id");
					 var model = vc.shortcodes.get(id);
					 var params = model.get('params');
					  if(iframeWin.jQuery("body").width()>992 ){
						  params["_top"] = params["_top"]*1-1;
						  obj.css("top", params["_top"]+"px");
					  }else{
						  params["_top"] = params["_top"]*1-1;
						  obj.css("top", params["__top"]+"px");
					  }
					  model.save({ params : params });
				 })


				  vc.ShortcodesBuilder.delay_save();
			}
		}else if (e.keyCode==39){//右
			if(iframeWin.jQuery(".section-special .ui-selected.qfy-element").length>0&& iframeWin.jQuery("body.doing").length==0){
				e.preventDefault();
			    e.stopPropagation();

				 iframeWin.jQuery(".section-special .ui-selected.qfy-element").each(function(){
					 var obj = jQuery(this);
					 var id = obj.parent().attr("data-model-id");
					 var model = vc.shortcodes.get(id);
					 var params = model.get('params');
					  if(iframeWin.jQuery("body").width()>992 ){
						  params["_left"] = params["_left"]*1+1;
						  obj.css("left", params["_left"]+"px");
					  }else{
						  params["__left"] = params["__left"]*1+1;
						  obj.css("left", params["__left"]+"px");
					  }
					  model.save({ params : params });
				 });
				  vc.ShortcodesBuilder.delay_save();


			}
		}else if (e.keyCode==40){//下
			if(iframeWin.jQuery(".section-special .ui-selected.qfy-element").length>0&& iframeWin.jQuery("body.doing").length==0){
				e.preventDefault();
			    e.stopPropagation();

				 iframeWin.jQuery(".section-special .ui-selected.qfy-element").each(function(){
					 var obj = jQuery(this);
					 var id = obj.parent().attr("data-model-id");
					 var model = vc.shortcodes.get(id);
					 var params = model.get('params');
					  if(iframeWin.jQuery("body").width()>992 ){
						  params["_top"] = params["_top"]*1+1;
						  obj.css("top", params["_top"]+"px");
					  }else{
						  params["__top"] = params["__top"]*1+1;
						  obj.css("top", params["__top"]+"px");
					  }
					  model.save({ params : params });
				 })
				 vc.ShortcodesBuilder.delay_save();
			}

		}
}
var ismousedowning = false;
var selectable_opos = [];
var selectable_parent = false;
var selectable_parent_elements = false;
function selectableInit(){
	if(iframeWin.jQuery("section.section-special").length==0){
		return;
	}
	iframeWin.jQuery("section.section-special .qfy-element").each(function(){
		_newcontrl_drag( jQuery(this));
	})


	iframeWin.jQuery("body").addClass("listening");

	iframeWin.document.addEventListener("mousedown", function(e){
		 _selectableInit_begin(e);
	});
	top.document.addEventListener("mousedown", function(e){
		 _selectableInit_begin(e);
	});
	iframeWin.addEventListener("mousemove", function (e) {
			_selectableInit_ing(e);
    });
	top.addEventListener("mousemove", function (e) {
			_selectableInit_ing(e);
    });
    iframeWin.addEventListener("mouseup", function (type, evt) {
    	_selectableInit_end(evt);
    });
    top.addEventListener("mouseup", function (type, evt) {
    	_selectableInit_end(evt);
    });
    iframeWin.addEventListener("click", function (e) {
    	var obj = e.target;
		if(obj){
			obj = jQuery(obj);
			if(obj.closest("section.section-special").length>0){
				if(obj.closest(".qfy-element").length==0 && !obj.hasClass("qfy-element")){
					iframeWin.jQuery(".qfy-element.ui-selected.ui-resizable").each(function(){
						jQuery(this).resizable("destroy").removeClass("ui-selected");
					});
					selectable_group_hide();
				}
			}
		}
    });
}
function selectable_group_show(objs){
	if( iframeWin.jQuery(".selectable_group").length==0 ){
		iframeWin.jQuery("body").append('<div class="selectable_group"><div class="select-header"><span>多选操作</span></div><div class="select-content"><a class="select-btn"><span class="toleft" title="居左对齐"></span></a><a class="select-btn" ><span class="tocenter" title="居中对齐"></span></a><a class="select-btn"><span class="toright" title="居右对齐"></span></a><a class="select-btn"><span class="totop" title="顶部对齐"></span></a><a class="select-btn"><span class="tomiddle" title="垂直对齐"></span></a><a class="select-btn"><span class="tobottom" title="底部对齐"></span></a><a class="select-btn"><span class="todelete  fa fa-trash-o fa-lg" title="全部删除"></span></a></div></div>');
		var groupcontrol = iframeWin.jQuery(".selectable_group");
		groupcontrol.draggable({
			handle:     '.select-header',
		});
	}else{
		iframeWin.jQuery(".selectable_group").show();
		var groupcontrol = iframeWin.jQuery(".selectable_group");
	}
	groupcontrol.find(".toleft").parent().unbind().click(function(){
		var minleft = 999999;
		objs.find(".qfy-element.ui-selected").each(function(){
				var obj = jQuery(this);
				var currleft = obj.css("left").replace("px","");
				if(currleft<minleft){
					minleft = currleft;
				}
		});
		objs.find(".qfy-element.ui-selected").each(function(){
			 var obj = jQuery(this);
			 var id = obj.parent().attr("data-model-id");
			 var model = vc.shortcodes.get(id);
			 var params = model.get('params');
			 obj.css("left",minleft+"px");
			  if(iframeWin.jQuery("body").width()>992 ){
				  params["_left"] = minleft;
			  }else{
				  params["__left"] = minleft;
			  }
			  model.save({ params : params });
		 })
		 vc.ShortcodesBuilder.delay_save();
	});
	groupcontrol.find(".toright").parent().unbind().click(function(){
		var maxleft = -999999;
		objs.find(".qfy-element.ui-selected").each(function(){
				var obj = jQuery(this);
				var currleft = obj.css("left").replace("px","")*1+obj.outerWidth()*1;
				if(currleft>maxleft){
					maxleft = currleft;
				}
		});
		objs.find(".qfy-element.ui-selected").each(function(){
			 var obj = jQuery(this);
			 var id = obj.parent().attr("data-model-id");
			 var model = vc.shortcodes.get(id);
			 var params = model.get('params');
			 var currleft = maxleft-obj.outerWidth();
			 obj.css("left",currleft+"px");
			  if(iframeWin.jQuery("body").width()>992 ){
				  params["_left"] = currleft;
			  }else{
				  params["__left"] = currleft;
			  }
			  model.save({ params : params });
		 })
		 vc.ShortcodesBuilder.delay_save();
	});
	groupcontrol.find(".toright").parent().unbind().click(function(){
		var maxleft = -999999;
		objs.find(".qfy-element.ui-selected").each(function(){
				var obj = jQuery(this);
				var currleft = obj.css("left").replace("px","")*1+obj.outerWidth()*1;
				if(currleft>maxleft){
					maxleft = currleft;
				}
		});
		objs.find(".qfy-element.ui-selected").each(function(){
			 var obj = jQuery(this);
			 var id = obj.parent().attr("data-model-id");
			 var model = vc.shortcodes.get(id);
			 var params = model.get('params');
			 var currleft = maxleft-obj.outerWidth();
			 obj.css("left",currleft+"px");
			  if(iframeWin.jQuery("body").width()>992 ){
				  params["_left"] = currleft;
			  }else{
				  params["__left"] = currleft;
			  }
			  model.save({ params : params });
		 })
		 vc.ShortcodesBuilder.delay_save();
	});
	groupcontrol.find(".tocenter").parent().unbind().click(function(){
		var minleft = 999999;
		var maxleft = -999999;
		objs.find(".qfy-element.ui-selected").each(function(){
				var obj = jQuery(this);
				var currleft = obj.css("left").replace("px","")*1;
				if(currleft<minleft){
					minleft = currleft;
				}
				var outerleft = obj.css("left").replace("px","")*1+obj.outerWidth()*1;
				if(outerleft>maxleft){
					maxleft = outerleft;
				}

		});
		var centerleft = (minleft*1+maxleft)/2;

		objs.find(".qfy-element.ui-selected").each(function(){
			 var obj = jQuery(this);
			 var id = obj.parent().attr("data-model-id");
			 var model = vc.shortcodes.get(id);
			 var params = model.get('params');
			 var currleft = centerleft-(obj.outerWidth()/2);
			 obj.css("left",currleft+"px");
			  if(iframeWin.jQuery("body").width()>992 ){
				  params["_left"] = currleft;
			  }else{
				  params["__left"] = currleft;
			  }
			  model.save({ params : params });
		 })
		 vc.ShortcodesBuilder.delay_save();
	});
	groupcontrol.find(".totop").parent().unbind().click(function(){
		var mintop = 999999;
		objs.find(".qfy-element.ui-selected").each(function(){
				var obj = jQuery(this);
				var currtop = obj.css("top").replace("px","");
				if(currtop<mintop){
					mintop = currtop;
				}
		});
		objs.find(".qfy-element.ui-selected").each(function(){
			 var obj = jQuery(this);
			 var id = obj.parent().attr("data-model-id");
			 var model = vc.shortcodes.get(id);
			 var params = model.get('params');
			 obj.css("top",mintop+"px");
			  if(iframeWin.jQuery("body").width()>992 ){
				  params["_top"] = mintop;
			  }else{
				  params["__top"] = mintop;
			  }
			  model.save({ params : params });
		 })
		 vc.ShortcodesBuilder.delay_save();
	});
	groupcontrol.find(".tomiddle").parent().unbind().click(function(){
		var mintop = 999999;
		var maxtop = -999999;
		objs.find(".qfy-element.ui-selected").each(function(){
				var obj = jQuery(this);
				var currtop = obj.css("top").replace("px","");
				if(currtop<mintop){
					mintop = currtop;
				}
				currtop =  obj.css("top").replace("px","")*1+obj.outerHeight()*1;
				if(currtop>maxtop){
					maxtop = currtop;
				}

		});
		var centertop = (mintop*1+maxtop)/2;

		objs.find(".qfy-element.ui-selected").each(function(){
			 var obj = jQuery(this);
			 var id = obj.parent().attr("data-model-id");
			 var model = vc.shortcodes.get(id);
			 var params = model.get('params');
			 var currtop = centertop-(obj.outerHeight()/2);
			 obj.css("top",currtop+"px");
			  if(iframeWin.jQuery("body").width()>992 ){
				  params["_top"] = currtop;
			  }else{
				  params["__top"] = currtop;
			  }
			  model.save({ params : params });
		 })
		 vc.ShortcodesBuilder.delay_save();
	});
	groupcontrol.find(".tobottom").parent().unbind().click(function(){
		var maxtop = -999999;
		objs.find(".qfy-element.ui-selected").each(function(){
				var obj = jQuery(this);
				var currtop = obj.css("top").replace("px","")*1+obj.outerHeight()*1;
				if(currtop>maxtop){
					maxtop = currtop;
				}
		});
		objs.find(".qfy-element.ui-selected").each(function(){
			 var obj = jQuery(this);
			 var id = obj.parent().attr("data-model-id");
			 var model = vc.shortcodes.get(id);
			 var params = model.get('params');
			 var currtop = maxtop-obj.outerHeight();
			 obj.css("top",currtop+"px");
			  if(iframeWin.jQuery("body").width()>992 ){
				  params["_top"] = currtop;
			  }else{
				  params["__top"] = currtop;
			  }
			  model.save({ params : params });
		 })
		 vc.ShortcodesBuilder.delay_save();
	});
	groupcontrol.find(".todelete").parent().unbind().click(function(){
		_delete_selected_element();
	});

}
function selectable_group_hide(){
	iframeWin.jQuery(".selectable_group").hide();
}
function _selectableInit_begin(event){
	 var curr = jQuery(event.target);
	selectable_opos = [ event.pageX, event.pageY ];
	selectable_parent = curr.closest("section.section-special");
	if(selectable_parent.length==0){
		return;
	}
	if(curr.closest(".qfe_wrapper.inline_editing").length>0){
		return;
	}
	if(selectable_parent.find(".qfe_wrapper.inline_editing").length>0){
		return;
	}
	if(selectable_parent.find(".vc-empty-element").length>0){
		return;
	}


	var obj = curr.closest(".qfy-element");
	if(!obj.hasClass("ui-selected") &&!obj.hasClass("ui-draggable") && !event.shiftKey && !event.ctrlKey){
		ismousedowning = true;
		selectable_parent_elements = new Array();
		selectable_parent.find(".qfy-element").each(function(){
		    var $this =  jQuery(this);
			var pos = jQuery(this).offset();
			var hit = false,offset = {};
			offset.obj = $this;
			offset.left   = pos.left;
			offset.right  = pos.left + $this.outerWidth(),
			offset.top    = pos.top;
			offset.bottom = pos.top + $this.outerHeight(),
			selectable_parent_elements.push(offset);
		});
		iframeWin.jQuery("body").append('<div class="ui-selectable-helper">');
	}
	if ( !event.shiftKey && !event.ctrlKey  ) {
		if( !obj.hasClass("ui-selected") ){
			iframeWin.jQuery(".qfy-element.ui-selected.ui-resizable").each(function(){
				jQuery(this).resizable("disable").removeClass("ui-selected" );
			});
	    }
	}else{
		if( obj.hasClass("ui-selected") ){
			obj.resizable("disable").removeClass("ui-selected" );
			return;
		}
	}
	if(obj.length>0){
		obj.addClass("ui-selected" );
		 _newcontrol(obj);
		 if(selectable_parent.find(".qfy-element.ui-selected").length>1){
			 selectable_group_show(selectable_parent);
		}else{
			selectable_group_hide();
		}
	 }


}
function _selectableInit_ing(event){
	   if(!ismousedowning){
			return ;
	   }
	   var curr = jQuery(event.target);

	   if(curr.closest(".ui-selected.qfy-element").length>0){
		   return;
	   }
		var tmp,
		x1 = selectable_opos[ 0 ],
		y1 = selectable_opos[ 1 ],
		x2 = event.pageX,
		y2 = event.pageY;

		if ( x1 > x2 ) { tmp = x2; x2 = x1; x1 = tmp; }
		if ( y1 > y2 ) { tmp = y2; y2 = y1; y1 = tmp; }
		iframeWin.jQuery(".ui-selectable-helper").css( { left: x1, top: y1, width: x2 - x1, height: y2 - y1 } );


		jQuery.each(selectable_parent_elements,function(index,object){
			var hit = false,offset = object;

			hit = ( !( offset.left > x2 || offset.right < x1 || offset.top > y2 ||  offset.bottom < y1 ) );
			if(hit){
				object.obj.addClass("ui-selecting" );
			}else{
				object.obj.removeClass("ui-selecting" );
			}
		});
}
function _selectableInit_end(event){
	 if(!ismousedowning){
			return ;
	   }else{
		   ismousedowning = false;
	   }
	iframeWin.jQuery(".ui-selectable-helper").remove();
	var $n = 0;
	selectable_parent.find(".qfy-element.ui-selecting").each(function(){
		jQuery(this).removeClass("ui-selecting").addClass("ui-selected");
		_newcontrol(jQuery(this));
		$n++;
	});
	if($n>1){
		selectable_group_show(selectable_parent);
	}
}
var selectable_drag_left = 0;
var selectable_drag_top = 0;
var selectable_drag_more = false;
function _newcontrl_drag(obj){
	if(!obj.hasClass("ui-draggable") ){
		obj.draggable({
			//handle:     '.vc-element-move',
			start: function( event, ui ) {
				selectable_drag_left = Math.ceil(ui.position.left);
				selectable_drag_top = Math.ceil(ui.position.top);
				selectable_drag_more = obj.closest("section.section-special").find(".ui-selected").not( jQuery(this));

				if(selectable_drag_more.length==0){
					guideline_start(event,jQuery(this),"special");
				}
			},
			drag: function( event, ui ) {

				if(selectable_drag_more.length>0){
					var curr_left =Math.ceil(ui.position.left);
					var curr_top = Math.ceil(ui.position.top);
					selectable_drag_more.not(  jQuery(this) ).each(function(){
						var $this = jQuery(this);
						$this.css("left",curr_left-selectable_drag_left+$this.css("left").replace("px","")*1 );
						$this.css("top",curr_top-selectable_drag_top+$this.css("top").replace("px","")*1 );
					});
					selectable_drag_left = Math.ceil(ui.position.left);
					selectable_drag_top = Math.ceil(ui.position.top);
				}else{
					guideline_draw(event, jQuery(this),ui);
				}
			},
		  stop: function( event, ui ) {
			    guideline_end();
			      var id = jQuery(this).closest("[data-model-id]").attr("data-model-id");
				  var model = vc.shortcodes.get(id);
				  var params = model.get('params');
				  if(iframeWin.jQuery("body").width()>992 ){
					  params["_left"] = Math.ceil(ui.position.left);
					  params["_top"] = Math.ceil(ui.position.top);
				  }else{
					  params["__left"] = Math.ceil(ui.position.left);
					  params["__top"] = Math.ceil(ui.position.top);
				  }
				  model.save({ params : params });
				  if(selectable_drag_more.length>0){
					  selectable_drag_more.each(function(){
							var $this = jQuery(this);
							var curr_left = $this.css("left").replace("px","")*1;
							var curr_top = $this.css("top").replace("px","")*1;
							var id =$this.closest("[data-model-id]").attr("data-model-id");
							var model = vc.shortcodes.get(id);
							var params = model.get('params');
							if(iframeWin.jQuery("body").width()>992 ){
								  params["_left"] = curr_left;
								  params["_top"] = curr_top;
							}else{
								  params["__left"] = curr_left;
								  params["__top"] = curr_top;
							}
					  });
				  }
			  //vc.ShortcodesBuilder.update(model,true);
			  vc.ShortcodesBuilder.delay_save();
		  }
		});
	}else{
		if(obj.hasClass("ui-draggable-disabled") ){
			obj.draggable( "enable" );
		}
	}
}
function _newcontrol(obj){
	//drag
	_newcontrl_drag(obj);


	var aspectRatio = false;
	var alsoResize = false;
	if(obj.hasClass("bitImageControlDiv")){
		if(iframeWin.jQuery("body").width()>992){
			aspectRatio = true
		};
		alsoResize =  obj.find('img.front_image');
	}else if(obj.hasClass("qfe_gmaps_widget") ){
		alsoResize = obj.find('.qfe_map_wraper');
	}else if(obj.hasClass("vc_bit_raw_videoparent") ){
		alsoResize =  obj.find('.vc_bit_raw_video');
	}else if( obj.hasClass("qfy-yun-video") ){
		alsoResize =  obj.find('.video_play');
	}
	if(!obj.hasClass("ui-resizable") ){
		obj.resizable({
			aspectRatio: aspectRatio,
			alsoResize: alsoResize,
			handles:     'n,e,w,s,ne,nw,se,sw',
			start: function(event, ui) {
				guideline_start(event, jQuery(this),"special");
			},
			resize: function( event, ui ) {
				guideline_draw(event, jQuery(this),ui);
			},
			stop: function( event, ui ) {
				 guideline_end();
				  var id = jQuery(this).closest("[data-model-id]").attr("data-model-id");

				  var model = vc.shortcodes.get(id);
				  var params = model.get('params');

				  if(iframeWin.jQuery("body").width()>992 ){
					  params["_left"] = Math.ceil(ui.position.left);
					  params["_top"] = Math.ceil(ui.position.top);
					  params["_width"] = Math.ceil(ui.size.width);
					  params["_height"] = Math.ceil(ui.size.height);
					  if( model.get("shortcode")=="vc_single_image"){
						  params["img_size"] = Math.ceil(ui.size.width)+"x"+Math.ceil(ui.size.height);
					  }else if( model.get("shortcode")=="vc_bit_qqmaps"){
						  params["size"] = Math.ceil(ui.size.height);
						  if(!params["mobilesize"]){
							  params["mobilesize"] = "200";
						  }
					  }else if( model.get("shortcode")=="vc_gallery"){
						  params["new_height"] = Math.ceil(ui.size.height);
						  params["img_size"] = Math.ceil(ui.size.width)+"x"+Math.ceil(ui.size.height-40);
					  }else if( model.get("shortcode")=="vc_bit_raw_video" ){
						  params["video_size"] = Math.ceil(ui.size.height);
					  }else if( model.get("shortcode")=="qfy_yun_video" ){
						  params["video_height"] = Math.ceil(ui.size.height);
						  params["video_width"] = Math.ceil(ui.size.width);
					  }
				  }else{
					  params["__left"] = Math.ceil(ui.position.left);
					  params["__top"] = Math.ceil(ui.position.top);
					  params["__width"] = Math.ceil(ui.size.width);
					  params["__height"] = Math.ceil(ui.size.height);
					  if( model.get("shortcode")=="vc_bit_qqmaps"){
						  params["mobilesize"] = Math.ceil(ui.size.height);
					  }else if( model.get("shortcode")=="vc_gallery"){
						  params["new_mobileheight"] = Math.ceil(ui.size.height);
					  }else if( model.get("shortcode")=="vc_bit_qqmaps"){
						  params["mobilesize"] = Math.ceil(ui.size.height);
					  }else if( model.get("shortcode")=="qfy_yun_video" ){
						  params["mobile_video_height"] = Math.ceil(ui.size.height);
						  params["mobile_video_width"] = Math.ceil(ui.size.width);
					  }
				  }

				  model.save({ params : params });
				  if( jQuery(this).hasClass("bitImageControlDiv") || jQuery(this).hasClass("vc_bit_raw_videoparent") ){
					   vc.ShortcodesBuilder.update(model,true);
				  }
				  vc.ShortcodesBuilder.delay_save();

				}
			})
	}else{
		if(obj.hasClass("ui-resizable-disabled") ){
			obj.resizable( "enable" );
		}
	}


	var angle = getRotationDegrees(obj );
	if(angle){
		angle = angle*(Math.PI/180)
	}else{
		angle = 0;
	}
	var id = obj.closest("[data-model-id]").attr("data-model-id");
	iframeWin.jQuery("[data-model-id='" + id + "']>.qfy-element").rotatable({
		 angle:  angle,
		 wheelRotate: false,
		 start: function(event, ui) {
			 var angle =  Math.ceil(ui.angle.degrees);
			 var angleval = '<span class="ratate-value" >'+angle+'</span>';
			 jQuery(this).find(".ui-rotatable-handle").html( angleval );
		 },
         stop: function(event, ui) {
        	 var angle =  Math.ceil(ui.angle.degrees);
        	 var angleval = '<span class="ratate-value" >'+angle+'</span>';
        	 jQuery(this).find(".ui-rotatable-handle").html( angleval );

        	 var id = jQuery(this).closest("[data-model-id]").attr("data-model-id");
			  var model = vc.shortcodes.get(id);
			  var params = model.get('params');
			  if(iframeWin.jQuery("body").width()>992 ){
				  params._angle = angle;
			  }else{
				  params.__angle = angle;
			  }
			  model.save({ params : params });
			  vc.ShortcodesBuilder.delay_save();
         },
	});
}
function getRotationDegrees(obj) {
    var matrix = obj.css("-webkit-transform") ||
    obj.css("-moz-transform")    ||
    obj.css("-ms-transform")     ||
    obj.css("-o-transform")      ||
    obj.css("transform");
    if(matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    } else { var angle = 0; }
    return (angle < 0) ? angle + 360 : angle;
}
/* element pop panel */
function elementHover(obj, name, flag, flagname) {

	if (obj.prop('id').toLowerCase().indexOf("rev-slider-widget") >= 0) {
		return;
	}

	if (obj.find(".cke_editable_inline").length == 0) {
		if (obj.find(".bit-controls-element:not(.inner)").length > 0) {
			obj.find(".bit-controls-element").fadeIn("fast");
		} else {

			var str = '<div class="controls-element vc-controls bit-controls-element"  style="line-height:0px;opacity:1;visibility:visible;transition:auto">';
			str += '<div class="controls-cc">';
			str += '<a class="control-btn vc-element-name">';

			var newname = "";
			if (obj.parent().hasClass('bitLogo')) {
				newname = "Logo";
			}

			if (obj.parent().hasClass('bitBanner')) {
				newname = "横幅";
			}
			if (obj.attr('bitdatalocation')=="primary"){
				newname = "菜单";
			}

			if (flag.indexOf("widget") > -1 && !obj.parent().hasClass('bitLogo')&& !obj.parent().hasClass('bitBanner')) {
				str += '<span  class="vc-btn-content">' + newname + '</span>';
			}else if( obj.parent().hasClass('top-bar-right') || obj.parent().hasClass('topbar_left') || obj.parent().hasClass('topbar_right')|| obj.parent().hasClass('floatmenu-bar-right')){
				str += '<span  class="vc-btn-content">' + newname + '</span>';
			}else if (flag.indexOf("slider") > -1 ||flag.indexOf("imageText") > -1 ) {
				str += '<span  class="vc-btn-content  vc-btn-move move_'+flag+'"  title="拖拽 '+name+'" style="cursor:pointer !important;">' + newname + '</span>';
			}else if ( flag.indexOf("menu") > -1) {
				str += '<span  class="vc-btn-content  vc-btn-move move_'+flag+'"  title="移动 '+name+'" >' + newname + '</span>';
			} else {
				str += '<span  class="vc-btn-content vo-btn-nomove">' + newname + '</span>';
			}
			if(newname!="横幅" && newname != "菜单" &&  flag.indexOf("slider")<0 && flag.indexOf("imageText") <0){
				str += '<a  title="点击打开快捷边距设置" class="control-btn control-btn-padding"><span class="vc-btn-content"><span class="icon" style="background-position: 0 -96px;"></span></span></a>';
			}

			if ( newname != "横幅" && flagname != "menu"  && name != "幻灯片文字" && name != "文字" && !obj.hasClass("simplepage") ) {
				str += '<a  title="复制" class="control-btn control-btn-edit bit-btn-clone"><span class="vc-btn-content"><span class="icon"></span></span></a>';
			}

			str += '</a>';
			$Inline = true;
			if (flag == "widget" && (obj.find(".ckeditorInLine").length == 0 && flagname != "widget_menu")) {
				$Inline = false;
			}else if (obj.hasClass("loginandregister") ) {
				$Inline = false;
			}else if (obj.hasClass("widget_search") ) {
				$Inline = false;
			}else if (obj.hasClass("simplepage") ) {
				$Inline = false;
			}
			if (obj.parent().hasClass('bitBanner')) {
				str += '<a  title="添加文字" class="control-btn control-btn-edit bit_textSet_' + flagname + '"><span class="vc-btn-content"><span class="icon"></span></span></a>';
				$Inline = false;
			}

			if ( (flag.indexOf("widget") > -1 || flag.indexOf("fix") > -1 ) && obj.attr("id").indexOf("bit_postlist")>-1) {
				$Inline = false;
				str += '<a  title="编辑" class="control-btn control-btn-edit bit_edit_postlist"><span class="vc-btn-content"><span class="icon"></span></span></a>';
			}

			//for form add by yliu
			if ($Inline || flagname == 'widget_form') {
				if(obj.find(".product-categories.menu").length==0){
					str += '<a  title="编辑" class="control-btn control-btn-edit bit_edit_' + flagname + '"><span class="vc-btn-content"><span class="icon"></span></span></a>';
				}
			}

			if ( obj.hasClass("simplepage") ) {
				str += '<a  title="跳转到页面编辑" class="control-btn control-btn-edit bit_gotoedit_' + flagname + '"><span class="vc-btn-content"><span class="icon"></span></span></a>';
			}

			if (flagname != "slider"&&flagname != "imageText") {
				if ( flagname == "menu"){
					str += '<a  title="创建" class="control-btn control-btn-add bit_setting_' + flagname + '"><span class="vc-btn-content"><span class="icon"></span></span></a>';
				}else{
					str += '<a  title="设置" class="control-btn control-btn-add bit_setting_' + flagname + '"><span class="vc-btn-content"><span class="icon"></span></span></a>';
				}

				if(obj.parent().hasClass('bitBanner')){
					str += '<a  title="切换图片" class="control-btn control-btn-edit bit_setting_images"><span class="vc-btn-content"><span class="icon"></span></span></a>';
					str += '<a  title="复制" class="control-btn control-btn-edit bit-btn-clone-to-page"><span class="vc-btn-content"><span class="icon"></span></span></a>';
				}
				if ( flagname == "menu" ) {
					str += '<a  title="菜单文字大小" class="control-btn control-btn-edit bit_setting_font"><span class="vc-btn-content"><span class="icon"></span></span></a>';

					str += '<a  title="菜单颜色/样式设置" class="control-btn control-btn-edit bit_setting_menu_style"><span class="vc-btn-content"><span class="icon"></span></span></a>';
					str += '<a  title="设置头部布局/更换菜单" class="control-btn control-btn-edit bit_setting_header_style"><span class="vc-btn-content"><span class="icon"></span></span></a>';
					str += '<a class="control-btn  control-btn-edit control-btn-hidden control-btn-qfy-hidden" title="隐藏按钮"><span class="vc-btn-content"><span class="icon"></span></span></a>';
				}
				if (flag.indexOf("widget") > -1 || flag.indexOf("fix") > -1) {
					str += '<a title="删除 '+name+'" class="control-btn control-btn-delete  bit_delete_' + flagname + '"><span class="vc-btn-content"><span class="icon"></span></span></a>';
				}

			} else {
				str += '<a title="设置 '+name+'"  class="control-btn control-btn-edit setIcon bit_setting_' + flagname + '"><span class="vc-btn-content"><span class="icon"></span></span></a>';
			}
			if (flagname == "slider") {
				str += '<a title="动画 '+name+'" class="control-btn control-btn-edit  bit_anim_' + flagname + '"><span class="vc-btn-content"><span class="icon"></span></span></a>';
				str += '<a title="复制 '+name+'" class="control-btn control-btn-clone  bit_copy_' + flagname + '"><span class="vc-btn-content"><span class="icon"></span></span></a>';
			}

			if (flagname == "slider"||flagname == "imageText") {
				str += '<a title="删除 '+name+'" class="control-btn control-btn-delete  bit_delete_' + flagname + '"><span class="vc-btn-content"><span class="icon"></span></span></a>';
			}

			if( iframeWin.jQuery("div.fullscreenpage#page .rev_slider_wrapper.fullscreen-container").length >0 && flagname == "menu"){
				str += '<a title="暂时隐藏菜单，方便编辑,10秒后恢复" style="cursor: pointer; text-align: left; opacity: 1; color: rgb(255, 255, 255); text-decoration: none; position: relative; height: 20px; line-height: 20px; font-size: 13px ! important; width: 55px;" class="control-btn  bit_hidden_menu">隐藏10秒</a>';
			}else if(iframeWin.jQuery("header#header").css("position")=="absolute" && flagname == "menu" ){
				str += '<a title="暂时隐藏头部，方便编辑,10秒后恢复" style="cursor: pointer; text-align: left; opacity: 1; color: rgb(255, 255, 255); text-decoration: none; position: relative; height: 20px; line-height: 20px; font-size: 13px ! important; width: 55px;" class="control-btn  bit_hidden_header">隐藏10秒</a>';
			}



			str += '</div>';
			str += '</div>';

			obj.prepend(str);
			if (flagname != 'slider'&&flagname != 'imageText' ) {
				obj.css("position", "relative");
			}

			if( (flagname=="widget" || flagname == "widget_menu" ) && !obj.parent().hasClass('bitBanner') ){
					if(obj.find(">div>.vc-element-warp").length==0){
						obj.prepend('<div class="controls-element vc-controls bit-controls-element"  style="line-height:0px;opacity:1;visibility:visible;transition:auto"><div class="pre-add-element-wrap "><div class="pre-add-element-btn" title="往前插入零件"></div></div><div class="next-add-element-wrap "><div class="next-add-element-btn" title="往后插入零件"></div></div><div class="vc-element-warp"  ></div></div>');
					}
					obj.find(".pre-add-element-btn,.next-add-element-btn").click(function(){
						var p = obj.closest('[bitdataaction="site_widget_container"],[bitdataaction="site_fix_container"]');
						if( p.hasClass("floatmenu-bar-right") ){
							p.parent().next(".vc-resize-column-bar").find(".add-element").click();
						} else if( p.find(".vc-add-widget-action").length>0 ){
							p.find(".vc-add-widget-action").click();
						}else if( p.find(".vc-resize-column-bar").length>0 ){
							p.find(".vc-resize-column-bar").find(".add-element").click();
						}else if( p.next(".vc-resize-column-bar").length>0 ){
							p.next(".vc-resize-column-bar").find(".add-element").click();
						}
						if(jQuery(this).hasClass("pre-add-element-btn")){
							obj.addClass("adding pre");
						}else{
							obj.addClass("adding next");
						}
					})
					obj.find(".controls-cc").unbind().bind("mouseenter",
						function() {
								obj.find(">div>.vc-element-warp").fadeIn();
						}).bind("mouseleave",
						function() {
							obj.find(">div>.vc-element-warp").fadeOut("fast");
						});

			}
			obj.find(".controls-element").fadeIn("fast");
		}

	}
}

/* element add button */
function elementAdd(obj) {
	if (obj.find(".vc-no-content-helper").length == 0) {
		var rlt = obj.attr("bitdatamarker");
		var str = '<div class="vc-no-content-helper vc-not-empty " bitdatamarker="'
				+ rlt + '"><div class="vc-buttons">';
		str += '<a title="添加零件"  class="vc-add-widget-not-empty-button  vc-add-widget-action" id="widget-add-element" ></a>';
		if(obj.hasClass("bitLeftSider")|| obj.hasClass("bitRightSider") || obj.hasClass("bitHeader-6") || obj.hasClass("bitHeader-7")){
			str += '<a title="设置挂件区"  class="vc-setting-widget-not-empty-button  vc-edit-widget-action"  ></a>';
			str += '<a title="在手机上隐藏挂件区"  class="vc-setting-widget-mobilehide-button  vc-edit-widget-action wf-mobile-visible-inline"  style="display:none;"></a>';
		}else if(obj.hasClass("bitMainTopSider")|| obj.hasClass("bitMainBottomSider") || obj.hasClass("bitHeader-8") || obj.hasClass("bitHeader-9")){
			str += '<a title="设置挂件区"  class="vc-setting-widget-not-empty-button  vc-edit-widget-action"  ></a>';
		}
		str += '</div></div>';
		obj.append(str);
	}

}
/* add a widget to silder */
function ajaxAddWidget(sid, wid, obj,defalutObj) {
	if ($j.trim(sid) == "bitBanner"){
		var slide = iframeWin.jQuery("[bitdatamarker='" + sid + "'][bitdataaction='site_fix_container']");
		slide.css("height","350px").css("position","relative").html("");
	}else if ($j.trim(sid) == "bitMainTopSider" ){
		var slide = iframeWin.jQuery("[bitdatamarker='" + sid + "'][bitdataaction='site_widget_container'] .bitMainTopSider_warp >div");
	}else if ($j.trim(sid) == "bitMainBottomSider"){
		var slide = iframeWin.jQuery("[bitdatamarker='" + sid + "'][bitdataaction='site_widget_container'] .bitMainBottomSider_warp >div");
	}else{
		var slide = iframeWin.jQuery("[bitdatamarker='" + sid + "'][bitdataaction='site_widget_container']");

	}

	if (slide.length > 0) {
		if (slide.find(".site_tooler").length > 0) {
			slide.find(".site_tooler:last").after(loaderDiv);
		} else {
			slide.prepend(loaderDiv);
		}

	} else {
		slide = iframeWin.jQuery("[bitdatamarker='" + sid+ "'][bitdataaction='site_fix_container']");
		if(slide.hasClass("bit_widget_more")){
			if (slide.find(".site_tooler").length > 0) {
				slide.find(".site_tooler:last").after(loaderDiv);
			} else {
				slide.prepend(loaderDiv);
			}
		}else{
			slide.html(loaderDiv);
		}
	}
	var isneedreload = false;
	if(wid.indexOf("simplepage")>-1 ||wid.indexOf("bit_user")>-1 || wid.toLowerCase().indexOf("nav_widget") >= 0){
		top.jQuery("#vc-preloader").show();
		isneedreload = true;
	}else{
		loaderDivUI(slide);
	}

	var color = slide.attr('bitdatacolor');
	var url = "/FeiEditor/siteEdit/ajax_addWidget/" + sid + "/" + wid + "/view";
	if(typeof color != "undefined") {
		url += '/'+color;
	}

	$j.post(url,{defalutObj:defalutObj,post_id : $j('#bit-hide-pageid').val()}, function(data) {
		if (data) {
			if(isneedreload){
				if (slide.find(".site_tooler.adding").length > 0) {
					if(slide.find(".site_tooler.adding:first").hasClass("pre")){
						slide.find(".site_tooler.adding:first").before('<div class="site_tooler" id="'+data+'"></div>');
					}else{
						slide.find(".site_tooler.adding:first").after('<div class="site_tooler" id="'+data+'"></div>');
					}
					slide.find(".site_tooler.adding").removeClass("adding pre next");
					//后台保存
					var list = new Array();
					slide.children(".site_tooler").each(function(n) {
						list[n] = $j(this).prop("id");
					});
					ajaxChangeWidget(sid, list,data,true);
					return;
				}else{
					location.reload();
					return;
				}
			}
			data = $j.trim(data);

			if ($j.trim(sid) == "bitBanner" && wid.indexOf("rev-slider-widget")>-1) {
				location.reload();
				return;
			}

			if ($j.trim(wid) == "bit_breadcrumbs") {
				//location.reload();
				//return;
			}
			//for nav_menu
			if(wid == 'nav_menu') {
				vc.edit_widget_block_view.render(false);
				ajaxGetWidgetForm(data);
			}
			var href = iframeWin.jQuery("#qfy_dynamic_css-css").attr("href");
			if(href.indexOf("&qfytmp_")>-1){
			  href = href.split("&qfytmp_")[0];
			}
			iframeWin.jQuery("#qfy_dynamic_css-css").attr("href",href+"&qfytmp_"+time());

			$j.post("/FeiEditor/siteEdit/ajax_getWidgetView/" + data,{post_id : $j('#bit-hide-pageid').val()},
					function(msg) {
					slide.find(".loadingWidget").remove();
					if (slide.find(".site_tooler.adding").length > 0) {
							if(slide.find(".site_tooler.adding:first").hasClass("pre")){
								slide.find(".site_tooler.adding:first").before(msg);
							}else{
								slide.find(".site_tooler.adding:first").after(msg);
							}
							slide.find(".site_tooler.adding").removeClass("adding pre next");
							//后台保存
							var list = new Array();
							slide.children(".site_tooler").each(function(n) {
								list[n] = $j(this).prop("id");
							});
							ajaxChangeWidget(sid, list,data);
					}else if (slide.length > 0) {
							if ($j.trim(sid) == "bitBanner") {
								slide.html(msg);
								slide.css("position","relative").css("height","auto");
								if(slide.find(".rev_slider_wrapper").length>0){
									refreshREvSlider(slide.find(".rev_slider_wrapper"),0);
								}else{
									OpenImageLibToBanner();

								}
							}else{
								if(slide.hasClass("bit_widget_more")){
									if (slide.find(".site_tooler").length > 0) {
										if(slide.find(".site_tooler:last").next().prop("tagName")=="BR"){
											slide.find(".site_tooler:last").next().after(msg);
										}else{
											slide.find(".site_tooler:last").after(msg);
										}
									} else {
										slide.prepend(msg);
									}
									widgetFixEvent(slide);
								}else{
									if (slide.find(".site_tooler").length > 0) {
										slide.find(".site_tooler:last").after(msg);
									} else {
										slide.prepend(msg);
									}
								}
							}
				} else {
						slide = iframeWin.jQuery("[bitdatamarker='" + sid+ "'][bitdataaction='site_fix_container']");
						//slide = slide.length > 0 ? slide : iframeWin.jQuery("[bitdatamarker='" + sid+ "'][bitdataaction='bit_site_logo']");
						if(!slide.hasClass("bit_widget_more")){
							slide.html(msg);
						}else{
							if (slide.find(".site_tooler").length > 0) {
								slide.find(".site_tooler:last").after(msg);
							} else {
								slide.prepend(msg);
							}
							widgetFixEvent(slide);
						}
				}
				iframeWin.jQuery("#shopping-cart-bitcommerce .carsize:not(.pulse1)").addClass("pulse1");
				if(data.indexOf("search")>-1){
					iframeWin.searchForm(iframeWin.jQuery("#"+data).find(".searchform .submit"));
				}else if(data.indexOf("loginandregister")>-1){
					iframeWin.jQuery(".dropdown-toggle").unbind("click").bind("click",function(){
						 var obj =jQuery(this).parent().find(".dropdown-menu");
						 if(obj.css("display") == "none"){
							obj.show();
						 }else{
							obj.hide();
						 }
					})
				}else if(data.indexOf("bit_postlist") >= 0){
					iframeWin.vc_plugin_flexslider();
					if(iframeWin.jQuery("#"+data).find(".qfy_carousel .vc-carousel").length==1){
						iframeWin.qfy_carousel_fun(iframeWin.jQuery("#"+data).find(".qfy_carousel .vc-carousel"));
					}
					else if(iframeWin.jQuery("#"+data).find(".vc-carousel").length>0){
						iframeWin.qfy_carousel_fun(iframeWin.jQuery("#"+data).find(".vc-carousel"));
					}else if(iframeWin.jQuery("#"+data).find(".qfy_custom_select").length>0){
						iframeWin.qfy_custom_select();
					}else if(iframeWin.jQuery("#"+data).find(".qfe_images_lib_isotope").length>0){
						iframeWin.bitLibLayout(iframeWin.jQuery("#"+data+" .qfe_images_lib_isotope"));
					}else if(iframeWin.jQuery("#"+data).find(".ts-vcsc-countdown-container").length>0){
						iframeWin.bit_counterdown();
					}else if(iframeWin.jQuery("#"+data).find(".royalSlider_gallery").length>0){
						iframeWin.bit_newgallery(iframeWin.jQuery("#"+data));
					}else if(iframeWin.jQuery("#"+data).find(".vc_jplayer_container").length>0){
						iframeWin.qfy_jplayer_init();
					}else if(iframeWin.jQuery("#"+data).find(".opentip,.qfy-jiathis,.qfy-listcatecontrols").length>0){
						iframeWin.vc_js_init();
					}
					if(iframeWin.jQuery("#"+data).find(".teaser_grid_container,.list-style9").length>0){
						iframeWin.vc_teaserGrid();
					}
					if(iframeWin.jQuery("#"+data).find(".qfy-listcatecontrols[data-child='1'],.qfy-listmenuvertical[data-child='1']").length>0){
						iframeWin.jQuery("#"+data).find(".qfy-listcatecontrols[data-child='1'],.qfy-listmenuvertical[data-child='1']").each(function(){
							var cur = jQuery(this).find(".list-content .current-cat");
							jQuery(this).find(".list-content .children").hide();
							cur.parents("li,ul").show();
							if(cur.hasClass("cat-parent") && cur.closest(".list-content").length>0 ) cur.find(">.children").show();
						})
					}
				}else if(data.indexOf("nav_menu") >= 0 || data.indexOf("nav_menuhorizontal") >= 0 || data.indexOf("text") >= 0){
					redireactMenulink(iframeWin.jQuery("#"+data));
				}

				widgetHover(iframeWin.jQuery("#"+data),iframeWin.jQuery('body'));

				widget_title_hoveredit(iframeWin.jQuery("#"+data+" > .widget-title"));
			});
		}

	});
}
function OpenImageLibToBanner()
{
	if(iframeWin){
		//1:横幅幻灯片
		iframeWin.openImageLibaray = "1";
	}

	var frame = openNewImageDialog('选择图片', function(img) {

		var tmp=  jQuery("#bitBanner .bitImageControlDiv", vc.frame_window.document);
		var bitImageControlDiv = tmp.attr("id");
		if(tmp.find(".loadingClass").length==0 && img !=""){
			ajaxBeforeLoading(0,tmp);
			$j.post("/FeiEditor/siteEdit/ajax_updageWidgetImage/"+bitImageControlDiv ,{img:img}, function(rs){
				tmp.find("img").attr("src",img);
				ajaxAfterSave();
			});
		}
	}, false);
}
/* change widget position in silder */
function ajaxChangeWidget(sid, sdata,itemId,$isreload) {
	$j.post("/FeiEditor/siteEdit/ajax_ChangeWidget/", {
		id : sid,
		data : sdata,
		itemId:itemId
	}, function() {
		if($isreload===true){
			location.reload();
		};
	});
}

/* open a panel of manage menu */
var action_of_addonepage = "";
function menuEdit(menu_id, action,callback,callbackfun) {
	$j("#vc-menu-panel").addClass("animated_new");

	$j("#vc-menu-panel .panel-footer").hide();

	if (menu_id == 0) {
		url = "/FeiEditor/siteEdit/navMenus/addmenu?action=edit&menu=0&tag=addExisttoMenu";
	} else if (menu_id == -1) {
		url = "/FeiEditor/siteEdit/navMenus?action=edit&menu=0&tag=add";
	} else {
		url = "/FeiEditor/siteEdit/navMenus?action=edit&menu=" + menu_id + "&tag="+ action;
	}
	$j.post(url, function(data) {
		$j("#vc-menu-panel .panel-body").html(data);
		vc.edit_menu_block_view.render(false);

		if(menu_id!=0&&menu_id!=-1&&action=="edit"){
			$j("#vc-menu-panel .panel-footer").hide();
		}else{
			$j("#vc-menu-panel .panel-footer").show();
		}

		if (typeof preStep !== 'undefined' && typeof preStep === 'function') {preStep();}

		if(callback=="page"){
			welcomeToAdd(0);
			nextStep();
		}else if(callback=="post"){
			welcomeToAdd(1);
			nextStep();
		}else if(callback=="products"){
			welcomeToAdd(2);
			nextStep();
		}else if(callback=="product"){
			welcomeToAdd(4);
			nextStep();
		}
		if(typeof callbackfun=="function"){
			callbackfun();
		}

	});
	return false;
}
/* open a panel of manage menu */
function setMenuFont(menu_id) {
	//init

	var url = '/FeiEditor/siteEdit/setMenuFont?id='+menu_id+'&action=init';
	if( iframeWin.jQuery("div.fullscreenpage#page .rev_slider_wrapper.fullscreen-container").length >0  && iframeWin.jQuery("body").hasClass("home") && iframeWin.jQuery("body").hasClass("sliderwebsite")){

		 url = url+"&isfullsliderpage=1";
	}
	var font = iframeWin.jQuery("#"+menu_id+"  li  a span").css("font-size");
	var font_family = iframeWin.jQuery("#"+menu_id+"  li  a span").css("font-family");
	var font_weight = iframeWin.jQuery("#"+menu_id+"  li  a span").css("font-weight");
	font_family = font_family.split(",")[0].replace("\"","").replace("\"","");
	font_family = font_family.replace(/[\'\\\/\"]/g,"");
	$j('#font-size').val(font);
	$j('#font-family option').each(function(){
		$j(this).attr("value",$j(this).attr("value").toLowerCase());
	})
	$j('#font-family').val(font_family.toLowerCase());
	$j('#font-weight').prop('checked', font_weight>400);
	$j('#fontDemo').css("font-size",font).css("font-family",font_family).css("font-weight",font_weight);

	$j("#vc-set-menu-font-panel .tab input, #vc-set-menu-font-panel .tab select").change(function(){
		$j('#fontDemo').css('font-family', $j('#font-family').val()).css('font-weight', $j('#font-weight').prop('checked') ? 'bold' : 'normal').css('font-size', $j('#font-size').val());
	});
	var obj =iframeWin.jQuery("#"+menu_id+"  .sub-nav li  a span");
	var font1 = "";
	var font_family1 = "";
	var font_weight1 = "";
	if(obj.length>0){
		font1 = obj.css("font-size");
		font_family1= obj.css("font-family");
		font_weight1 = obj.css("font-weight");
		font_family1 = font_family1.split(",")[0].replace("\"","").replace("\"","");
		font_family1 = font_family1.replace(/[\'\\\/\"]/g,"");
	}
	$j('#font-size-1').val(font1);
	$j('#font-family-1 option').each(function(){
		$j(this).attr("value",$j(this).attr("value").toLowerCase());
	})
	$j('#font-family-1').val(font_family1.toLowerCase());
	$j('#font-weight-1').prop('checked', font_weight1>400);
	$j('#fontDemo-1').css("font-size",font1).css("font-family",font_family1).css("font-weight",font_weight1);
	$j("#vc-set-menu-font-panel .tab1 input, #vc-set-menu-font-panel .tab1 select").change(function(){
		$j('#fontDemo-1').css('font-family', $j('#font-family-1').val()).css('font-weight', $j('#font-weight-1').prop('checked') ? 'bold' : 'normal').css('font-size', $j('#font-size-1').val());
	});

	$j("#vc-set-menu-font-panel button[data-save]").unbind('click').bind('click', function(){
		var style = $j('#fontDemo').attr('style') != undefined ? $j('#fontDemo').attr('style') : '';
		var style2 = $j('#fontDemo-1').attr('style') != undefined ? $j('#fontDemo-1').attr('style') : '';
		style = style.replace(/[\'\"]/g,"");
		style2 = style2.replace(/[\'\"]/g,"");
		var url = '/FeiEditor/siteEdit/setMenuFont?id='+menu_id+'&action="update"&style='+style+'&style2='+style2;
		if( iframeWin.jQuery("div.fullscreenpage#page .rev_slider_wrapper.fullscreen-container").length >0  && iframeWin.jQuery("body").hasClass("home") && iframeWin.jQuery("body").hasClass("sliderwebsite")){
		 url = url+"&isfullsliderpage=1";
		}
		var pageid = top.jQuery("#pageUrl").val();
		ajaxBeforeSave($j("#vc-set-menu-font-panel"));
		$j.get(url,{qfy_pageid:pageid}, function(msg){
			if(msg.indexOf("|<result>|")>-1){

				reloadheaderevents(msg);
				setTimeout(function(){ajaxAfterSave();$j("#vc-set-menu-font-panel .vc-close").click();},500);
			}else{
				location.reload();
			}
		});

	});
}

/* open a panel of manage widget menu */
function ajaxGetWidgetMenu(wid) {
	$j(".panel-footer").hide();
	var load = $j("#loading").val();
	$j("#vc-menu-panel .panel-body").html(' <img class="waitingToPanel" src="' + load + '" />');
	url = "/FeiEditor/siteEdit/navMenus?action=edit&menu=0&wid=" + wid;
	$j.post(url, function(data) {
		$j("#vc-menu-panel .panel-body").html(data);
		// addPage();
		$j("#vc-menu-panel .panel-body form").attr("action",
				"/FeiEditor/siteEdit/navMenus");
		var portal = new vc.BitModel({
			wid : wid
		});
		vc.edit_menu_block_view.render(portal);
		vc.edit_menu_block_view.setTitle("编辑菜单");
		// $j(".panel-footer").show();
	});
}
/* open a panel of edit widget iphorm */
function ajaxGetWidgetIphorm(wid, fid) {
	$j("#vc-edit-widget-dialog .panel-body").html('<span class="vc-spinner" style="position:absolute;top:200px;left:50%;margin-left:-40px;"></span>');
	var url = "/admin/admin.php?page=iphorm_generate&amp;id="+fid+"&amp;noheader&amp;nofooter";
	//$j("#vc-menu-panel .panel-body").html(url);
	var tab = '<div class="col-md-12 vc-column vc-column qfe_el_type_tab" style="margin-left:-15px;"><div class="qfe_element_label"></div><div class="edit_form_line"><input type="hidden" value="1" style="pacity:0;height:0;width:0;" class="qfe_vc_param_value d_t tab" name="d_t"><label class="vc_tab on">字段设置</label><label class="vc_tab ">常用设置</label><label class="vc_tab ">风格设置</label><label class="vc_tab ">邮件设置</label><label class="vc_tab ">短信设置</label><label class="vc_tab ">API设置</label></div></div>';

	var window_height = $j(window).height() - 230;


	$j("#vc-edit-widget-dialog .panel-body").append(tab+'<iframe id="iphorm_iframe"  style="width:865px;height:'+window_height+'px" name="iphorm_iframe" src="'+url+'" frameborder="no" border="0" marginwidth="0" marginheight="0"  width="100%" height="100%" allowtransparency="yes" ></iframe>');

	// change ui
	changeFormUI();
	$j("#vc-edit-widget-dialog  [data-save=true]").unbind("click").click(
		function() {
			var w = iframeWin.jQuery("#" + wid + ".site_tooler");
			loaderDivUI(w);
			ajaxBeforeSave($j("#vc-edit-widget-dialog"));
			updateWidgetViewEvent(wid,w);
		})
		var portal = new vc.BitModel({
			wid : wid
		});

		vc.edit_widget_block_view.render(portal);

		$j(".panel-footer").show();
}
function changeBorderSetting(widgetBorderDiv,master){
		if(widgetBorderDiv.length==0) return false;
		var arrayObj = new Array();　
		arrayObj[0] = widgetBorderDiv.find("[name='useSameSetting']").attr("checked")=="checked"?1:0;
		if(arrayObj[0]==0) return false;
		arrayObj[1]  = widgetBorderDiv.find("[name='set_border_top_size']").val();
		arrayObj[2]  = widgetBorderDiv.find("[name='set_border_top_color']").val();
		arrayObj[3]  = widgetBorderDiv.find("[name='set_border_top_line']").val();
		arrayObj[4]  = widgetBorderDiv.find("[name='set_border_bottom_size']").val();
		arrayObj[5]  = widgetBorderDiv.find("[name='set_border_bottom_color']").val();
		arrayObj[6]  = widgetBorderDiv.find("[name='set_border_bottom_line']").val();
		arrayObj[7]  = widgetBorderDiv.find("[name='set_border_left_size']").val();
		arrayObj[8]  = widgetBorderDiv.find("[name='set_border_left_color']").val();
		arrayObj[9]  = widgetBorderDiv.find("[name='set_border_left_line']").val();
		arrayObj[10]  = widgetBorderDiv.find("[name='set_border_right_size']").val();
		arrayObj[11]  = widgetBorderDiv.find("[name='set_border_right_color']").val();
		arrayObj[12]  = widgetBorderDiv.find("[name='set_border_right_line']").val();
		arrayObj[13]  = widgetBorderDiv.find("[name='set_border_top_coloropt']").val();
		arrayObj[14]  = widgetBorderDiv.find("[name='set_border_bottom_coloropt']").val();
		arrayObj[15]  = widgetBorderDiv.find("[name='set_border_left_coloropt']").val();
		arrayObj[16]  = widgetBorderDiv.find("[name='set_border_right_coloropt']").val();

		if(master.attr("name")=="set_border_bottom_size"||master.attr("name")=="set_border_bottom_color"||master.attr("name")=="set_border_bottom_coloropt"||master.attr("name")=="set_border_bottom_line"){
			widgetBorderDiv.find("[name='set_border_top_size']").val(arrayObj[4]);
			widgetBorderDiv.find("[name='set_border_top_color']").val(arrayObj[5]).change();
			widgetBorderDiv.find("[name='set_border_top_line']").val(arrayObj[6]);
			widgetBorderDiv.find("[name='set_border_top_coloropt']").val(arrayObj[14]);
			widgetBorderDiv.find("[name='set_border_left_size']").val(arrayObj[4]);
			widgetBorderDiv.find("[name='set_border_left_color']").val(arrayObj[5]).change();
			widgetBorderDiv.find("[name='set_border_left_coloropt']").val(arrayObj[14]);
			widgetBorderDiv.find("[name='set_border_left_line']").val(arrayObj[6]);
			widgetBorderDiv.find("[name='set_border_right_size']").val(arrayObj[4]);
			widgetBorderDiv.find("[name='set_border_right_color']").val(arrayObj[5]).change();
			widgetBorderDiv.find("[name='set_border_right_coloropt']").val(arrayObj[14]);
			widgetBorderDiv.find("[name='set_border_right_line']").val(arrayObj[6]);
		}else if(master.attr("name")=="set_border_left_size"||master.attr("name")=="set_border_left_color"||master.attr("name")=="set_border_left_coloropt"||master.attr("name")=="set_border_left_line"){
			widgetBorderDiv.find("[name='set_border_top_size']").val(arrayObj[7]);
			widgetBorderDiv.find("[name='set_border_top_color']").val(arrayObj[8]).change();
			widgetBorderDiv.find("[name='set_border_top_coloropt']").val(arrayObj[15]);
			widgetBorderDiv.find("[name='set_border_top_line']").val(arrayObj[9]);
			widgetBorderDiv.find("[name='set_border_bottom_size']").val(arrayObj[7]);
			widgetBorderDiv.find("[name='set_border_bottom_color']").val(arrayObj[8]).change();
			widgetBorderDiv.find("[name='set_border_bottom_coloropt']").val(arrayObj[15]);
			widgetBorderDiv.find("[name='set_border_bottom_line']").val(arrayObj[9]);
			widgetBorderDiv.find("[name='set_border_right_size']").val(arrayObj[7]);
			widgetBorderDiv.find("[name='set_border_right_color']").val(arrayObj[8]).change();
			widgetBorderDiv.find("[name='set_border_right_coloropt']").val(arrayObj[15]);
			widgetBorderDiv.find("[name='set_border_right_line']").val(arrayObj[9]);
		}else if(master.attr("name")=="set_border_right_size"||master.attr("name")=="set_border_right_color"||master.attr("name")=="set_border_right_coloropt"||master.attr("name")=="set_border_right_line"){
			widgetBorderDiv.find("[name='set_border_top_size']").val(arrayObj[10]);
			widgetBorderDiv.find("[name='set_border_top_color']").val(arrayObj[11]).change();
			widgetBorderDiv.find("[name='set_border_top_coloropt']").val(arrayObj[16]);
			widgetBorderDiv.find("[name='set_border_top_line']").val(arrayObj[12]);
			widgetBorderDiv.find("[name='set_border_left_size']").val(arrayObj[10]);
			widgetBorderDiv.find("[name='set_border_left_color']").val(arrayObj[11]).change();
			widgetBorderDiv.find("[name='set_border_left_coloropt']").val(arrayObj[16]);
			widgetBorderDiv.find("[name='set_border_left_line']").val(arrayObj[12]);
			widgetBorderDiv.find("[name='set_border_bottom_size']").val(arrayObj[10]);
			widgetBorderDiv.find("[name='set_border_bottom_color']").val(arrayObj[11]).change();
			widgetBorderDiv.find("[name='set_border_bottom_coloropt']").val(arrayObj[16]);
			widgetBorderDiv.find("[name='set_border_bottom_line']").val(arrayObj[12]);
		}else{
			widgetBorderDiv.find("[name='set_border_bottom_size']").val(arrayObj[1]);
			widgetBorderDiv.find("[name='set_border_bottom_color']").val(arrayObj[2]).change();
			widgetBorderDiv.find("[name='set_border_bottom_coloropt']").val(arrayObj[13]);
			widgetBorderDiv.find("[name='set_border_bottom_line']").val(arrayObj[3]);
			widgetBorderDiv.find("[name='set_border_left_size']").val(arrayObj[1]);
			widgetBorderDiv.find("[name='set_border_left_color']").val(arrayObj[2]).change();
			widgetBorderDiv.find("[name='set_border_left_coloropt']").val(arrayObj[13]);
			widgetBorderDiv.find("[name='set_border_left_line']").val(arrayObj[3]);
			widgetBorderDiv.find("[name='set_border_right_size']").val(arrayObj[1]);
			widgetBorderDiv.find("[name='set_border_right_color']").val(arrayObj[2]).change();
			widgetBorderDiv.find("[name='set_border_right_coloropt']").val(arrayObj[13]);
			widgetBorderDiv.find("[name='set_border_right_line']").val(arrayObj[3]);
		}

	}
function getBorderSet(widgetBorderDiv){
		var arrayObj = new Array();　
		arrayObj[0] = widgetBorderDiv.find("[name='useSameSetting']").attr("checked")=="checked"?1:0;
		arrayObj[1]  = widgetBorderDiv.find("[name='set_border_top_size']").val();
		arrayObj[2]  = widgetBorderDiv.find("[name='set_border_top_color']").val();
		arrayObj[3]  = widgetBorderDiv.find("[name='set_border_top_line']").val();
		arrayObj[4]  = widgetBorderDiv.find("[name='set_border_bottom_size']").val();
		arrayObj[5]  = widgetBorderDiv.find("[name='set_border_bottom_color']").val();
		arrayObj[6]  = widgetBorderDiv.find("[name='set_border_bottom_line']").val();
		arrayObj[7]  = widgetBorderDiv.find("[name='set_border_left_size']").val();
		arrayObj[8]  = widgetBorderDiv.find("[name='set_border_left_color']").val();
		arrayObj[9]  = widgetBorderDiv.find("[name='set_border_left_line']").val();
		arrayObj[10]  = widgetBorderDiv.find("[name='set_border_right_size']").val();
		arrayObj[11]  = widgetBorderDiv.find("[name='set_border_right_color']").val();
		arrayObj[12]  = widgetBorderDiv.find("[name='set_border_right_line']").val();
		arrayObj[13]  = widgetBorderDiv.find("[name='set_border_top_coloropt']").val();
		arrayObj[14]  = widgetBorderDiv.find("[name='set_border_bottom_coloropt']").val();
		arrayObj[15]  = widgetBorderDiv.find("[name='set_border_left_coloropt']").val();
		arrayObj[16]  = widgetBorderDiv.find("[name='set_border_right_coloropt']").val();
		return arrayObj.join("|^|");
}
/* get a widget form */
function ajaxGetWidgetCloneToForm(wid) {
	var widgetType = '';

	if (wid.toLowerCase().indexOf("bit_banner_image") >= 0) {
		widgetType = '横幅图片';
	}else if (wid.toLowerCase().indexOf("rev-slider-widget") >= 0) {
		widgetType = '横幅幻灯片';
	}else{
		widgetType = wid.toLowerCase();
	}

	$j("#vc-edit-widget-dialog .panel-title").text("复制"+widgetType);
	var htm = "";
	var load = $j("#loading").val();
	$j(".panel-footer").hide();
	$j("#vc-edit-widget-dialog .panel-body").html('<img class="waitingToPanel" src="' + load + '" />');
	$j.post("/FeiEditor/siteEdit/ajax_cloneToForm/" + wid, {
		post_id : $j('#bit-hide-pageid').val()
	}, function(data) {
		var panel_body = $j("#vc-edit-widget-dialog .panel-body");
		panel_body.html(data);
		//hide frame  to  fix containter
		var bitdataaction = iframeWin.jQuery("#" + wid).parent().attr("bitdataaction");
		var bitdatamarker = iframeWin.jQuery("#" + wid).parent().attr("bitdatamarker");
		if (bitdataaction == "site_fix_container" || bitdatamarker=="bitMainTopSider" || bitdatamarker=="bitMainBottomSider") {
			$j("#vc-edit-widget-dialog .widgetFrameDiv").hide();
		}
		// change ui
		changeFormUI();
		$j("#vc-edit-widget-dialog  [data-save=true]").unbind("click").click(
				function() {
					var checked_ids = new Array();

					$j(".multiple_page_ids_clone_to_pages input:checkbox:checked").each(function(i){
						checked_ids[i] = $j(this).attr('id').replace('clone_to_pages[', '').replace(']', '');
					});

					if(checked_ids.length<=0){
						alert('请至少选择一个目标页面。');
						return;
					}

					if(checked_ids.length>999){
						alert('一次不能选择超过999个页面');
						return;
					}

					jConfirm('如果目标页面上已经存在幻灯品或横幅图片，此操作将覆盖掉它。是否继续？', function(){

						var w = iframeWin.jQuery("#" + wid + ".site_tooler");
						loaderDivUI(w);
						ajaxBeforeSave($j("#vc-edit-widget-dialog"));
						$j("#vc-edit-widget-dialog form").ajaxSubmit(
						{
							url : '/FeiEditor/siteEdit/ajax_cloneTo/'+wid,
							dataType : "text",
							data : {
								post_id : $j('#bit-hide-pageid').val(),

							},

							success : function(result) {
								ajaxAfterSave();
								if(result == 'OK'){
									jConfirm('复制完成。', function(){

									});

									$j("#vc-edit-widget-dialog .vc-close").click();
								}else{
									jConfirm(result, function(){

									});
								}
							},

							error : function(jqXHR, textStatus, errorThrown) {
								jConfirm('复制失败，请重试。', function(){

								});
								console.log("复制失败. " + textStatus);
							}
						});
					});
				});
		$j("#vc-edit-widget-dialog  [data-save=trueAndClose]").unbind("click").click(function(){
				$j("#vc-edit-widget-dialog  [data-save=true]").click();
		});

		var portal = new vc.BitModel({
			wid : wid
		});

		vc.edit_widget_block_view.render(portal);

		$j(".panel-footer").show();

	});

}
function change_mobile_padding_setting(obj){
	var p = jQuery(obj).closest(".s_tab_div");
	if(jQuery(obj).val()=="1"){
		p.find(".mobile_padding_setting").show();
	}else{
		p.find(".mobile_padding_setting").hide();
	}

}
/* get a widget form */
function ajaxGetWidgetForm(wid) {
	if (wid.toLowerCase().indexOf("bit_banner_image") >= 0) {
		$j("#vc-edit-widget-dialog .panel-title").text("横幅图片 设置");
	}else if (wid.toLowerCase().indexOf("bit_breadcrumbs") >= 0) {
		$j("#vc-edit-widget-dialog .panel-title").text("导航栏");
	}else{
		$j("#vc-edit-widget-dialog .panel-title").text("设置");
	}

	var htm = "";
	var load = $j("#loading").val();
	$j(".panel-footer").hide();
	$j("#vc-edit-widget-dialog .panel-body").html('<img class="waitingToPanel" src="' + load + '" />');
	$j.post("/FeiEditor/siteEdit/ajax_getWidgetForm/" + wid, {
		post_id : $j('#bit-hide-pageid').val()
	}, function(data) {

		var panel_body = $j("#vc-edit-widget-dialog .panel-body");
		panel_body.html(data);
		if($j("#vc-edit-widget-dialog .set_header_border_div").length==1){

			$j("#vc-edit-widget-dialog .set_header_border_div .useSameSettingchange,#vc-edit-widget-dialog .set_header_border_div .useSameSetting").change(function(){
				changeBorderSetting($j("#vc-edit-widget-dialog .set_header_border_div"), $j(this));
			});

		};
		if($j("#vc-edit-widget-dialog .set_content_border_div").length==1){
			$j("#vc-edit-widget-dialog .set_content_border_div .useSameSettingchange,#vc-edit-widget-dialog .set_content_border_div .useSameSetting").change(function(){
					changeBorderSetting($j("#vc-edit-widget-dialog .set_content_border_div"), $j(this));
			})
		}
		if (wid.indexOf("search-") >= 0) {
			$j("#vc-edit-widget-dialog .ajax_chosen_select").ajaxChosen({
				method: 		'GET',
				url: 			"/admin/admin-ajax.php",
				dataType: 		'json',
				afterTypeDelay: 1000,
				minTermLength: 	2,
				data:		{
					action: 	"json_search_posts",
				}
			}, function (data) {
				var terms = {};
				$j.each(data, function (i, val) {
					terms[i] = val;
				});

				return terms;
			});


		}
		//hide frame  to  fix containter
		var bitdataaction = iframeWin.jQuery("#" + wid).parent().attr("bitdataaction");
		var bitdatamarker = iframeWin.jQuery("#" + wid).parent().attr("bitdatamarker");
		if (bitdataaction == "site_fix_container" || bitdatamarker=="bitMainTopSider" || bitdatamarker=="bitMainBottomSider") {
			$j("#vc-edit-widget-dialog .widgetFrameDiv").hide();
		}


		// change ui
		changeFormUI();
		$j("#vc-edit-widget-dialog  [data-save=true]").unbind("click").click(
				function() {
					var w = iframeWin.jQuery("#" + wid + ".site_tooler");

					loaderDivUI(w);
					ajaxBeforeSave($j("#vc-edit-widget-dialog"));
					if(typeof jQuery.fn.froalaEditor == "undefined"){
						if($j("#vc-edit-widget-dialog form .ckedtorTextarea").length>0){
							var id = $j("#vc-edit-widget-dialog form .ckedtorTextarea").attr("id");
							$j("#vc-edit-widget-dialog form .ckedtorTextarea").val(CKEDITOR.instances[id].getData());
						}
					}
					if($j("#vc-edit-widget-dialog form .set_header_border_div").length==1){
						var p = $j("#vc-edit-widget-dialog form .set_header_border_div");
						p.find(".set_border_input").val(getBorderSet($j("#vc-edit-widget-dialog form .set_header_border_div")));
					}
					if($j("#vc-edit-widget-dialog form .set_content_border_div").length==1){
						var p = $j("#vc-edit-widget-dialog form .set_content_border_div");
						p.find(".set_border_input").val(getBorderSet($j("#vc-edit-widget-dialog form .set_content_border_div")));
					}

					$j("#vc-edit-widget-dialog form").ajaxSubmit(
							{
								url : '/FeiEditor/siteEdit/ajax_updateWidgetMsg',
								dataType : "text",
								// add by yliu, add post_id
								data : {
									post_id : $j('#bit-hide-pageid').val()
								},
								success : function(result) {
									if($j("#vc-edit-widget-dialog form .qfy_widget_type").val()=="bit_user"){
										location.reload();
										return;
									}
									if(	$j("#vc-edit-widget-dialog .display_settings.on").length>0){
										location.reload();
										return;
									}else{
										updateWidgetViewEvent(wid,w);
									}
								}
							});
				})
		$j("#vc-edit-widget-dialog  [data-save=trueAndClose]").unbind("click").click(function(){
				$j("#vc-edit-widget-dialog  [data-save=true]").click();
				$j("#vc-edit-widget-dialog .vc-close").click();

		});
		var portal = new vc.BitModel({
			wid : wid
		});

		vc.edit_widget_block_view.render(portal);

		$j(".panel-footer").show();

	});

}
function updateWidgetViewEvent(wid,w){
	if (wid.toLowerCase().indexOf("nav_widget") >= 0 || wid.indexOf("simplepage") >= 0) {
			location.reload();
			return;
	}
	var href = iframeWin.jQuery("#qfy_dynamic_css-css").attr("href");
	if(href.indexOf("&qfytmp_")>-1){
	  href = href.split("&qfytmp_")[0];
	}
	iframeWin.jQuery("#qfy_dynamic_css-css").attr("href",href+"&qfytmp_"+time());
	$j.post("/FeiEditor/siteEdit/ajax_getWidgetView/"+ wid,{ post_id : $j('#bit-hide-pageid').val()
		}, function(msg) {

		if(msg.indexOf(">[qfyuser") >-1){
			location.reload();
			return;
		}
		if(msg == ''){
			w.hide();
		}else{
			if(w.next().prop("tagName")=="BR"){
				w.next().remove();
			}
			w.replaceWith(msg);
			w.show();
		}

		ajaxAfterSave();
		iframeWin.jQuery("#shopping-cart-bitcommerce .carsize:not(.pulse1)").addClass("pulse1");
		//$j("#vc-edit-widget-dialog .vc-close").click();
		widgetHover(iframeWin.jQuery("#" + wid),iframeWin.jQuery('body'));

		widget_title_hoveredit(iframeWin.jQuery("#"+wid+" > .widget-title"));

		if(wid.indexOf("search")>-1){
			iframeWin.searchForm(iframeWin.jQuery("#"+wid).find(".searchform .submit"));
		}else if(wid.indexOf("loginandregister")>-1){
			iframeWin.jQuery(".dropdown-toggle").unbind("click").bind("click",function(){
				 var obj =jQuery(this).parent().find(".dropdown-menu");
				 if(obj.css("display") == "none"){
					obj.show();
				 }else{
					obj.hide();
				 }
			})
		}else if(wid.indexOf("bit_postlist") >= 0){

			iframeWin.vc_plugin_flexslider();
			if(iframeWin.jQuery("#"+wid).find(".qfy_carousel .vc-carousel").length==1){
				iframeWin.qfy_carousel_fun(iframeWin.jQuery("#"+wid).find(".qfy_carousel .vc-carousel"));
			}else if(iframeWin.jQuery("#"+wid+" .vc-carousel").length>0){
				iframeWin.qfy_carousel_fun(iframeWin.jQuery("#"+wid+" .vc-carousel"));
			}else if(iframeWin.jQuery("#"+wid).find(".qfy_custom_select").length>0){
				iframeWin.qfy_custom_select();
			}else if(iframeWin.jQuery("#"+wid).find(".qfe_images_lib_isotope").length>0){
				iframeWin.bitLibLayout(iframeWin.jQuery("#"+wid+" .qfe_images_lib_isotope"));
			}else if(iframeWin.jQuery("#"+wid).find(".ts-vcsc-countdown-container").length>0){
				iframeWin.bit_counterdown();
			}else if(iframeWin.jQuery("#"+wid).find(".royalSlider_gallery").length>0){
				iframeWin.bit_newgallery(iframeWin.jQuery("#"+wid));
			}else if(iframeWin.jQuery("#"+wid).find(".vc_jplayer_container").length>0){
				iframeWin.qfy_jplayer_init();
			}else if(iframeWin.jQuery("#"+wid).find(".opentip,.qfy-jiathis,.qfy-listcatecontrols").length>0){
				iframeWin.vc_js_init();
			}else if(iframeWin.jQuery("#"+wid).find(".lrmiddlelayout").length>0){
				iframeWin.prenext_event()
			}else if(iframeWin.jQuery("#"+wid).find(".teaser_grid_container,.list-style9").length>0){
				iframeWin.vc_teaserGrid();
			}

			if(iframeWin.jQuery("#"+wid).find(".qfy-listcatecontrols[data-child='1'],.qfy-listmenuvertical[data-child='1']").length>0){
				iframeWin.jQuery("#"+wid).find(".qfy-listcatecontrols[data-child='1'],.qfy-listmenuvertical[data-child='1']").each(function(){
					var cur = jQuery(this).find(".list-content .current-cat");
					jQuery(this).find(".list-content .children").hide();
					cur.parents("li,ul").show();
					if(cur.hasClass("cat-parent") && cur.closest(".list-content").length>0 ) cur.find(">.children").show();
				})

			}

		}else if(wid.indexOf("nav_menu") >= 0 || wid.indexOf("nav_menuhorizontal") >= 0 || wid.indexOf("text") >= 0){
			redireactMenulink(iframeWin.jQuery("#"+wid));
		}
		iframeWin.vc_waypoints();

		iframeWin.jQuery(".bit-tp-caption").addClass("on");
	});

}
function changeFormUI() {
	var name = $j.trim($j(
			"#vc-edit-widget-dialog .panel-body .widget-top .widget-title")
			.text());
	$j("#vc-edit-widget-dialog .panel-body .widget-top").remove();
	$j("#vc-edit-widget-dialog .panel-body .widget-description").remove();
}
function loaderDivUI(w) {

	if (w.find(".loadingClass").length == 0) {
		w.prepend(loaderDiv);
	}
	var obj = iframeWin.jQuery(".loadingClass");
	var lw = obj.width();
	var lh = obj.height();
	var height = 42;
	if (lh < 84 && lh > 0) {
		iframeWin.jQuery(".loadingClass img").height(lh / 2);
		height = lh / 2;
	}
	iframeWin.jQuery(".loadingClass img").css("top", (lh - height) / 2).css(
			"left", (lw - height) / 2);

}
/* delete a widget */
function ajaxDeleteWidget(widget_id) {
	var obj = iframeWin.jQuery("#" + widget_id);
	var title = "这个挂件仅在本页面上使用，可以安全删除。是否继续？";

	if(obj.find(".notDeleteWarning").length==0&&!obj.hasClass("bitBanner")){
		title = "这是一个公共挂件，删除它会影响到其它页面。如果您仅希望在部分页面上显示这个挂件，请到相应页面（您希望显示的页面上）点击设置按钮，然后选择显示范围为\"仅在此页面显示\"。如果您确认需要删除这个挂件，请点击\"确认\"，否则点击\"取消\"。<br><br><span style='color:#CC3300;'>警告：这是一个不可撤销的操作</span><br><br>"
	}
	jConfirm(title,function(){

		loaderDivUI(obj);
			$j.post("/FeiEditor/siteEdit/ajax_deleteWidget/" + widget_id,
						function(msg) {
							if (obj.closest("[bitdataaction='site_fix_container']").length > 0) {
								var tmp = obj.closest("[bitdataaction='site_fix_container']")[0];
								if($j(tmp).hasClass("bit_widget_more")){
									if(obj.next().prop("tagName")=="BR"){
										obj.next().remove();
									}
									obj.remove();
								}else{
									$j(tmp).html("");
								}
								widgetFixEvent($j(tmp));
							} else if(obj.parents("[bitdataaction='bit_site_logo']").length > 0){
								var tmp = obj.parents("[bitdataaction='bit_site_logo']")[0];
								$j(tmp).html("");
								widgetFixLogoEvent(tmp);
							}else {
								obj.remove();
							}
							if(widget_id.indexOf("simplepage-")>-1){
								//...
								var pid = obj.find(".simplepage_container").attr("data-post_id");
								if(pid>0){
									top.jQuery("#pagehtmlui >li[value='"+pid+"']").remove();
								}
							}

			});


	})

}
/* widget inline */
function editWidgetInLine(pObj, wid) {
	ckInlinedblclick(pObj, wid);
}
function inline_editor_new(obj,savefun,cancelfun){

	//if(!obj.data('froala.editor')){
		if(iframeWin.jQuery('.inline_editing').length>0){
			iframeWin.jQuery('.inline_editing').parents("section").find(".vc-controls").show();
			iframeWin.jQuery('.inline_editing').parent().find(".vc-controls").removeClass("displaynone");
			iframeWin.jQuery('.inline_editing').removeClass('inline_editing').froalaEditor('destroy');
		}
		iframeWin.jQuery("body").addClass('doing');
		obj.find("table").addClass("qtable");
		obj.addClass("inline_editing").froalaEditor({
	        toolbarContainer: 'body',
	        disableRightClick:true,
	        charCounterCount:false,
	        enter: iframeWin.jQuery.FroalaEditor.ENTER_DIV,
	        htmlUntouched: true,
			fontFamily:iframeWin.froala_fontFamily,
			htmlAllowedEmptyTags: ['textarea', 'a', 'img', 'i', 'b', 'span','iframe','object', '.fa','.glyphicon'],
			language: 'zh_cn',
			linkAlwaysNoFollow: false,
			linkNoOpener: false,
			linkNoReferrer: false,
			quickInsertButtons:false,
			linkAlwaysBlank: false,
			linkAutoPrefix: '',
			linkInsertButtons: ['linkBack','linkMore'],
			quickInsertButtons: [ 'table', 'ul', 'ol'],
			imageUploadParam:'async-upload',
			imageUploadParams:{actiontype:'qeditor'},
			imageUploadURL:'/admin/async-upload-qifeiye.php',
			linkEditButtons:['linkOpen', 'insertLink2','insertBtn2', 'linkRemove2'],
			tableEditButtons:['tableHeader', 'tableRemove', '|', 'tableRows', 'tableColumns','tableBorderSize','tableBorderColor','tableBorderpadding','tableBorderpaddingv','-', 'tableCells', 'tableCellBackground', 'tableCellVerticalAlign', 'tableCellHorizontalAlign', 'tableStyle',  'tableCellStyle',],
			tableStyles: {'fr-dashed-borders': '边框虚线','fr-alternate-rows': '间隔背景','fr-noVborder': '无竖边框','fr-noLborder':'中间无竖边框 ','fr-noCborder':'中间无边框'},
			fontSize: ['8', '10', '12', '13', '14', '15', '16', '17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','45','50','60','70','80','90','100'],
			imageEditButtons: ['imageReplace2', 'imageAlign', 'imageRemove', '|', 'imageLink', 'linkOpen', 'linkEdit', 'linkRemove', '-', 'imageDisplay', 'imageStyle', 'imageAlt', 'imageSize'],
	        toolbarButtons: [  'fontFamily', 'fontSize', 'color', 'paragraphFormat','bold', 'italic', 'underline', 'strikeThrough','lineHeight','letterSpacing','|', 'align', 'formatOL', 'formatUL', 'outdent', 'indent',  'insertLink2', 'insertImage2','insertBtn','insertTable','specialCharacters','|', 'selectAll', 'clearFormatting', 'undo', 'redo','|','保存','取消'],
	        toolbarButtonsXS: ['fontFamily','fontSize','color','bold','underline','align','insertLink2', 'insertImage2','insertBtn','insertTable','|','保存','取消'],
	        htmlAllowedAttrs: ['accept', 'accept-charset', 'accesskey', 'action', 'align', 'allowfullscreen', 'allowtransparency', 'alt', 'async', 'autocomplete', 'autofocus', 'autoplay', 'autosave', 'background', 'bgcolor', 'border', 'charset', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'color', 'cols', 'colspan', 'content', 'contenteditable', 'contextmenu', 'controls', 'coords', 'data', 'data-.*', 'datetime', 'default', 'defer', 'dir', 'dirname', 'disabled', 'download', 'draggable', 'dropzone', 'enctype', 'for', 'form', 'formaction', 'frameborder', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'http-equiv', 'icon', 'id', 'ismap', 'itemprop', 'keytype', 'kind', 'label', 'lang', 'language', 'list', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'mozallowfullscreen', 'multiple', 'muted', 'name', 'novalidate', 'open', 'optimum', 'pattern', 'ping', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'reversed', 'rows', 'rowspan', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'src', 'srcdoc', 'srclang', 'srcset', 'start', 'step', 'summary', 'spellcheck', 'style', 'tabindex', 'target', 'title', 'type', 'translate', 'usemap', 'value', 'valign', 'webkitallowfullscreen', 'width', 'wrap','url-flagtarget','backgroundcolor','backgroundhovercolor','bordercolor','borderhovercolor','iconcolor','iconhovercolor','textcolor','texthovercolor'],
		}).on('froalaEditor.table.inserted', function (e, editor, table) {
		    jQuery(table).addClass("qtable");
		}).on('froalaEditor.paste.after', function (e, editor) {
			editor.$el.find("table:not(.qtable)").addClass("qtable").css("width","100%");
		})


		obj.find(".fr-element.fr-view").focus();

		var obj_top = obj.offset().top;
        var obj_left = obj.offset().left;
        var obj_width = obj.width();
        var obj_height = obj.height();
        var h = 43;
	    iframeWin.jQuery(".fr-toolbar").css("opacity","0").css("position","absolute").css("top",(obj_top-h-5)+"px").css("left",obj_left+"px");
	    setTimeout(function(){
	    	var hh = iframeWin.jQuery(".fr-toolbar").height();
	    	if(h>obj_top){
	    		var l = obj_left*1+obj_width-1025;
				if(l<0) l =  obj_left;
	    		iframeWin.jQuery(".fr-toolbar").css("opacity","1").css("top",(obj_top+obj_height-5)+"px").css("left",l+"px");
	    	}else if(hh>obj_top){
	    		var l = obj_left*1+obj_width-1025;
			    if(l<0) l =  obj_left;
	    		iframeWin.jQuery(".fr-toolbar").css("opacity","1").css("left",l+"px");
	    	}else{
	    		iframeWin.jQuery(".fr-toolbar").css("opacity","1").css("top",(obj_top-hh-5)+"px");
	    	}

	    },100);
	    iframeWin.jQuery('.fr-toolbar [data-cmd="保存"]').addClass("active").unbind().click(function(){
	    	if(typeof savefun == "function"){ savefun() }
	    	iframeWin.jQuery("body").removeClass('doing');
	    });
	     iframeWin.jQuery('.fr-toolbar [data-cmd="取消"]').addClass("active").unbind().click(function(){
	    	 if(typeof cancelfun == "function"){ cancelfun() }
	    	 iframeWin.jQuery("body").removeClass('doing');
	    })

		iframeWin.jQuery("body").unbind("keyup.editor").bind("keyup.editor",function(e){
			if(e.keyCode === 27){
				if(iframeWin.jQuery('.inline_editing').length>0){
					iframeWin.jQuery('.inline_editing').parents("section").find(".vc-controls").show();
					iframeWin.jQuery('.inline_editing').parent().find(".vc-controls").removeClass("displaynone");
					iframeWin.jQuery('.inline_editing').removeClass('inline_editing').froalaEditor('destroy');
					iframeWin.jQuery("body").removeClass('doing');
				}
			}
		});
	//}else{
	//	obj.removeClass('inline_editing').froalaEditor('destroy');
	//	iframeWin.jQuery("body").removeClass('doing');
//
	//}
	return true;


}

var ckInlinedblclick = function(oobj,wid) {
	var obj = iframeWin.jQuery(oobj);
	/****************************      使用新的编辑器      begin****************************/
	if(typeof iframeWin.jQuery.fn.froalaEditor != "undefined"){



		var oldHtml=obj.html();
		inline_editor_new(obj,function(){
			var isEditChanged = iframeWin.jQuery('[data-cmd="undo"].fr-disabled').length==0?true:false;
			obj.removeClass("inline_editing").froalaEditor('destroy');
			if (_checkContentIsChanged(editid, oldHtml, obj.html())||isEditChanged) {
				updateWidgetInLine(wid, obj);
			}
			iframeWin.toolTip(obj.find("[data-tooltip='on']"));
		},function(){
			var isEditChanged = iframeWin.jQuery('[data-cmd="undo"].fr-disabled').length==0?true:false;
			obj.removeClass("inline_editing").froalaEditor('destroy');
			if (isEditChanged) {
				jConfirm("内容被改动，确认是否保存？",function(){
					updateWidgetInLine(wid, obj);
				},function(){
					obj.html(oldHtml);
				})
			};
			iframeWin.toolTip(obj.find("[data-tooltip='on']"));
		});
		return true;
	}
	/****************************      使用新的编辑器      end****************************/
	if(!wid){
		wid = obj.attr('wid');
	}
	var editid = "edit_" + wid;
	iframeWin.jQuery('#' + wid + ' .vc-controls').hide();
	obj.attr("contenteditable", "true").attr("id", editid);
	var objControl = obj.find(".vc-controls");
	objControl.hide();
	iframeWin.CKEDITOR.disableAutoInline = true;
	iframeWin.jQuery("body").addClass('doing');
	if (!iframeWin.CKEDITOR.instances[editid]) {
		var oldHtml=obj.html();
		var instance = iframeWin.CKEDITOR.inline(editid);
		instance.on('instanceReady', function (ev) {
			iframeWin.jQuery("#cke_" + editid+" .cke_button.cke_button__savebtn").attr("click","").bind("click",function(){
				var ckid = "#cke_" + editid;
				var isEditChanged=iframeWin.jQuery(ckid+" .cke_button.cke_button__undo.cke_button_disabled").length == 0?true:false;
				instance.destroy();
				objControl.show();

				if (_checkContentIsChanged(editid, oldHtml, obj.html())||isEditChanged) {
					obj.removeAttr("contenteditable").removeAttr("id");
					changeButtonOrIconAttr_after(obj);
					updateWidgetInLine(wid, obj);
				}
				iframeWin.jQuery("body").unbind("keyup");
				iframeWin.toolTip(obj.find("[data-tooltip='on']"));
				iframeWin.jQuery("body").removeClass('doing');

			});
			iframeWin.jQuery("#cke_" + editid+" .cke_button.cke_button__closebtn").attr("click","").unbind("click").bind("click",function(){
				var ckid = "#cke_" + editid;
				var isEditChanged=iframeWin.jQuery(ckid+" .cke_button.cke_button__undo.cke_button_disabled").length == 0?true:false;
				objControl.show();
				instance.destroy();
				obj.removeAttr("contenteditable").removeAttr("id");
				if (_checkContentIsChanged(editid, oldHtml, obj.html())||isEditChanged) {
					jConfirm("内容被改动，确认是否保存？",function(){
						changeButtonOrIconAttr_after(obj);
						updateWidgetInLine(wid, obj);
					},function(){
						obj.html(oldHtml);
					})

				}
				iframeWin.jQuery("body").unbind("keyup");
				iframeWin.toolTip(obj.find("[data-tooltip='on']"));
				iframeWin.jQuery("body").removeClass('doing');

			});
			iframeWin.jQuery("body").unbind("keyup").bind("keyup",function(e){
				if(e.keyCode === 27)
					iframeWin.jQuery("#cke_" + editid+" .cke_button.cke_button__closebtn:visible").click();
			});
			changeButtonOrIconAttr_paste_after(obj);
		});
		instance.on('blur', function(e) {
			return false;
		});
	}else{
		var instance = iframeWin.CKEDITOR.instances[editid];
	}
	instance.config.startupFocus = true;
};
function updateWidgetInLine(wid, obj) {
	var key = obj.attr("bitKey");
	var id_base = obj.attr("bitRlt");
	var val = obj.html();
	ajaxBeforeLoading("-1", obj) ;
	$j.post("/FeiEditor/siteEdit/ajax_updateWidgetContent/" + wid, {
		key : key,
		id_base : id_base,
		val : val
	}, function(msg) {
		ajaxAfterLoading();
	});
}

//add by yliu for delete form
function ajax_delete_form(id) {
	if(iframeWin.jQuery(".vc-iphorm_vc .qfe_content_element[data-id='"+id+"']").length==1){
		$j.get("/FeiEditor/siteEdit/ajax_delete_form/"+id);
	}
}
var ckeditor_copy_prevval ="";
function getTheCKHtml (editor) {
	var range = editor.getSelection().getRanges()[ 0 ], el = editor.document.createElement( 'div' );
	el.append( range.cloneContents() );
	return el.getHtml();

}
function changeButtonOrIconAttr_before(obj){
	//排除class style href target rel id name
	obj.find(".bitButton,.bitIcon").each(function() {
		  $this = jQuery(this);
		  jQuery.each(this.attributes, function() {
		    // this.attributes is not a plain object, but an array
		    // of attribute nodes, which contain both the name and value
		    if(this.name.indexOf("data-")<0 && this.name!="onmouseover"&& this.name!="onmouseout"  && this.name!="class" && this.name!="style" && this.name!="href"&& this.name!="target"&& this.name!="rel"&& this.name!="id"&& this.name!="name") {
		    	$this.attr("data-"+this.name,this.value);
		    }
		  });
	 });
	return obj;
}
function changeButtonOrIconAttr_after(obj){
	//排除class style href target rel id name
	obj.find(".bitButton,.bitIcon").each(function() {
		  $this = jQuery(this);
		  jQuery.each(this.attributes, function() {
		    // this.attributes is not a plain object, but an array
		    // of attribute nodes, which contain both the name and value

		    if(this.name.indexOf("data-")>-1) {
				if(this.name.indexOf("data-original-title")<0 && this.name.indexOf("data-original-image")<0&& this.name.indexOf("data-original-imagewidth")<0&& this.name.indexOf("data-original-imageheight")<0&& this.name.indexOf("data-tooltip-cate")<0&&this.name.indexOf("data-tooltip")<0 ){
		    		$this.attr(this.name.replace("data-",""),this.value);
				}
		    }
		  });
	 });
	obj.find(".bitButton,.bitIcon").mouseout();
}
function changeElementTag(obj,newType){

	var attrs = {};
	jQuery.each(obj[0].attributes, function(idx, attr) {
	       attrs[attr.nodeName] = attr.nodeValue;
	});
	var newobj = jQuery("<" + newType + "/>", attrs).append(obj.contents())
	return newobj;
}
function changeButtonOrIconAttr_paste_after(objContent){
	objContent.unbind('paste').bind('paste', function() {
	     setTimeout(function(){
	    	 objContent.find(".bitButton,.bitIcon").each(function(){
	    		 var i = jQuery(this).find(".glyphicon");
	    		 if(i.prop("tagName")=="SPAN"){
					 var style = i.attr("style");
	    			 jQuery(this).html(jQuery(this).html().replace(/&nbsp;/g, ''));
					 if(jQuery(this).hasClass("bitButton")){
						i.html('<span style="display: none; width: 0px;">&nbsp;</span>');
	    				jQuery(this).find(".glyphicon").html('<span style="display: none; width: 0px;">&nbsp;</span>');
						 jQuery(this).find(".glyphicon").replaceWith(changeElementTag(i,"i"));
					 }else{
						 jQuery(this).find(".glyphicon").replaceWith(changeElementTag(i,"i"));
						 jQuery(this).find(".glyphicon").html("");
					 }


					 if(style)
						 jQuery(this).find(".glyphicon").attr("style",style);
	    		 }
	    		 var b = jQuery(this).find(".glyphicon").parent();
	    		 if(b && b.prop("tagName")=="SPAN"){
					 var bstyle = b.attr("style");
	    			 b.replaceWith(changeElementTag(b,"b"));
	    			 b = jQuery(this).find(".glyphicon").parent();
		    		 b.html( jQuery(this).find(".glyphicon").prop("outerHTML"));
					 if(bstyle)
						b.attr("style",bstyle);

	    		 }
	    	 });

	    	 objContent.find(".bitLine").each(function(){
	    		var w = jQuery(this).width();
	    		var pw =  jQuery(this).attr("bitSize")?jQuery(this).attr("bitSize"):jQuery(this).attr("data-bitSize");
	    		if(w<=1 && pw){
	    			jQuery(this).css("width",pw+"%");
	    		}
	    	 })
	     },200);
	});
}

/* page inline edit */
function editInLine(id, model) {
	if(iframeWin.jQuery("body").hasClass("resizing")){
		return false;
	}
	iframeWin.jQuery(".bitPcontrolsChild:visible").hide();
	var obj = iframeWin.jQuery("[data-model-id='" + id + "']");
	var objContent = obj.find(".qfe_wrapper");
	var editid = "edit_" + id;
	if (objContent.find(".qfy_no_editor.pname,.qfy_no_editor.pdate").length > 0) {
		top.jQuery(".editOnePage").click();
		return;
	}

	if (objContent.find(".qfy_no_editor").length > 0) {
		jAlert("对不起，此文本区域中含有动态参数，不支持所见即所得的编辑方式。如果需要更改内容，请点击设置 > HTML修改代码。");
		return;
	}
	if( obj.find(">.qfy-element").hasClass("ui-selected") ){
		if(obj.find(">.qfy-element").hasClass("ui-draggable") ){
			obj.find(">.qfy-element").each(function(){
				jQuery(this).draggable( "disable" );
			})
		}
		if(obj.find(">.qfy-element").hasClass("ui-resizable") ){
			obj.find(">.qfy-element").each(function(){
				jQuery(this).resizable( "disable" );
			})
		}
	}



	var objControl = obj.parents("section").find(".vc-controls");
	objControl.hide();


	/****************************      使用新的编辑器      begin****************************/
	if(typeof iframeWin.jQuery.fn.froalaEditor != "undefined"){
		var oldHtml = objContent.html();
		inline_editor_new(objContent,function(){
			var isEditChanged=iframeWin.jQuery('[data-cmd="undo"].fr-disabled').length==0?true:false;
			objContent.removeClass("inline_editing").froalaEditor('destroy');
			objControl.show();
			if (_checkContentIsChanged(editid, oldHtml, objContent.html()) || isEditChanged) {
				var params = model.get('params');
				if(objContent.html()==""){
					objContent.html("&nbsp");
				}
				params["content"] = objContent.html();
				model.save({
					params : params
				});
				updatePage(model, obj);
			}

			iframeWin.toolTip(obj.find("[data-tooltip='on']"));
		},function(){
			var isEditChanged=iframeWin.jQuery('[data-cmd="undo"].fr-disabled').length==0?true:false;
			objContent.removeClass("inline_editing").froalaEditor('destroy');
			objControl.show();
			if (_checkContentIsChanged(editid, oldHtml, objContent.html())||isEditChanged) {
				jConfirm("内容被改动，确认是否保存？",function(){
					var params = model.get('params');
					if(objContent.html()==""){
						objContent.html("&nbsp");
					}
					params["content"] = objContent.html();
					model.save({
						params : params
					});
					updatePage(model, obj);
				},function(){
					objContent.html(oldHtml);
				});
			}
		});

		return true;

	}
	/****************************      使用新的编辑器      end****************************/
	changeButtonOrIconAttr_before(objContent);






	objContent.attr("contenteditable", "true").attr("id", editid).attr("tabindex", '1');

	obj.parents('[data-tag=vc_row]').enableSelection();
	iframeWin.CKEDITOR.disableAutoInline = true;
	iframeWin.jQuery("body").addClass('doing');
	if (!iframeWin.CKEDITOR.instances[editid]) {
		var oldHtml = objContent.html();
		var instance = iframeWin.CKEDITOR.inline(editid);


		instance.on('instanceReady', function (ev) {
			iframeWin.jQuery("#cke_" + editid+" .cke_button.cke_button__savebtn").attr("click","").unbind("click").bind("click",function(){
				var ckid = "#cke_" + editid;
				var isEditChanged=iframeWin.jQuery(ckid+" .cke_button.cke_button__undo.cke_button_disabled").length == 0?true:false;
				objControl.show();
				instance.destroy();
				objContent.removeAttr("contenteditable").removeAttr("id").removeAttr("tabindex");
				if (_checkContentIsChanged(editid, oldHtml, objContent.html())||isEditChanged) {
					var params = model.get('params');
					if(objContent.html()==""){
						objContent.html("&nbsp");
					}
					changeButtonOrIconAttr_after(objContent);
					params["content"] = objContent.html();
					model.save({
						params : params
					});
					updatePage(model, obj);
				}
				iframeWin.jQuery("body").removeClass('doing');
				iframeWin.jQuery("body").unbind("keyup");
				iframeWin.toolTip(obj.find("[data-tooltip='on']"));

			})
			iframeWin.jQuery("#cke_" + editid+" .cke_button.cke_button__closebtn").attr("click","").unbind("click").bind("click",function(){
				var ckid = "#cke_" + editid;
				var isEditChanged=iframeWin.jQuery(ckid+" .cke_button.cke_button__undo.cke_button_disabled").length == 0?true:false;
				objControl.show();
				instance.destroy();
				objContent.removeAttr("contenteditable").removeAttr("id").removeAttr("tabindex");
				if (_checkContentIsChanged(editid, oldHtml, objContent.html())||isEditChanged) {
					jConfirm("内容被改动，确认是否保存？",function(){
						var params = model.get('params');
						if(objContent.html()==""){
							objContent.html("&nbsp");
						}
						changeButtonOrIconAttr_after(objContent);
						params["content"] = objContent.html();
						model.save({
							params : params
						});
						updatePage(model, obj);
					},function(){
						objContent.html(oldHtml);
					});
					iframeWin.toolTip(obj.find("[data-tooltip='on']"));
				}
				iframeWin.jQuery("body").removeClass('doing');
				iframeWin.jQuery("body").unbind("keyup");


			})
			iframeWin.jQuery("body").unbind("keyup").bind("keyup",function(e){
				if(e.keyCode === 27)
					iframeWin.jQuery("#cke_" + editid+" .cke_button.cke_button__closebtn:visible").click();
			});
			changeButtonOrIconAttr_paste_after(objContent);


		});
		instance.on('blur', function(e) {
			return false;
		});



	} else {
		var instance = iframeWin.CKEDITOR.instances[editid];
	}
	instance.config.startupFocus = true;

}

function updatePage(model, obj,load) {

	if(load!="noloading"){
		ajaxBeforeLoading(model.get("id"));
	}
	vc.ShortcodesBuilder.save();

}
function _checkContentIsChanged(id,oldHtml,newHtml) {
	oldHtml = $j.trim(oldHtml.replace(/[\r\n]/g,"").replace(/<br>/g,'').replace(/\&nbsp;/g,'').replace(/data-cke-saved-src=\".*?\"\s/g,''));
	newHtml = newHtml.replace(/[\r\n]/g,"").replace(/<br>/g,'').replace(/\&nbsp;/g,'').replace(/data-cke-saved-src=\".*?\"\s/g,'');
	if (oldHtml != newHtml) {
		return true;
	} else {
		return false;
	}
}
function closePanel() {
	jQuery(".panel").close();

}
/*
 * ajax loading
 */
function ajaxBeforeLoading(id, toObj) {
	var obj = iframeWin.jQuery("[data-model-id='" + id + "']").closest(".vc-element:first");
	if (obj.length == 0) {
		obj = iframeWin.jQuery("[data-model-id='" + id + "']");
	}
	if (obj.length == 0) {
		obj = iframeWin.jQuery(".builder-editor:first");
	}
	if (obj.length == 0 && toObj) {
		obj = toObj
	}
	if (obj.length == 0) {
		obj = iframeWin.jQuery(".qfe-js-composer");
	}
	var section = iframeWin.jQuery("[data-model-id='" + id + "']").closest("section.section-special");
	if(section.length>0){
		obj = iframeWin.jQuery("[data-model-id='" + id + "']>.qfy-element");
	}
	if (obj.length > 0) {
		loaderDivUI(obj);
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
	obj.find("img").css("margin-top", lh / 2 -20);
}
function ajaxAfterSave() {
	$j('.loadingFrameClass').remove();
}
function ajaxAfterLoading() {
	if (iframeWin && iframeWin.jQuery) {
		iframeWin.jQuery('.loadingClass').remove();
		if ($j('.btn_data_onsaving').prop('btn_data_onsaving')) {
			var btn = $j('.btn_data_onsaving');
			var $this = btn.closest('.panel').find('.panel-body');
			$j('.btn_data_onsaving').each(function(){
				if($j(this).attr("data-save")=="trueAndClose"){
					var buttonHtml = "保存并关闭";
				}else if($j(this).attr("data-old-btnname")){
					var buttonHtml = $j(this).attr("data-old-btnname");
				}else {
					var buttonHtml = "保存";
				}
				$j(this).removeClass('btn_data_onsaving').removeAttr('btn_data_onsaving').removeAttr('disabled').html(buttonHtml);
			})

			var $message_box = $j('<div class="vc-panel-message type-success"></div>').appendTo($this);

			if(btn.attr("data-old-btnname") =="预览"){
				$message_box.text('预览数据刷新成功。').fadeIn();
			}else{
				$message_box.text('页面设置更新成功。').fadeIn();
			}
			window.setTimeout(function(){
				$message_box.remove();
			}, 6000);
		}
		iframeWin.jQuery('body').removeClass('doing');
	}
}

var gbit_setting_type;
function bitSettingsEdit(current_pid, title, bit_setting_type, action, show_panel) {
	//top.jQuery("#pagehtmlcontainer").animate({height:"0"});
	//top.jQuery("#pagehtmlshowtext > div").css("border-bottom","0");
	if(bit_setting_type=="product"){
		$j("#vc-bit_settings-panel .panel-footer").hide();
		$j("#vc-bit_settings-panel .panel-title").html(title);
		vc.edit_bit_settings_view.render("product");

		$j("#vc-bit_settings-panel").addClass("iframeDiv");
		if(action=="COPY"){
			$j("#vc-bit_settings-panel .panel-body").html('<div id="site-content" style="width:100%;height:100%" ><iframe id="site-content-iframe" style="width:100%;height:100%" border=0 	src="/admin/edit-bit.php?post_type=product&qifeiye=page&action=duplicate_product&post='+current_pid+'&copy=true" ></iframe></div>');
		}else{
			$j("#vc-bit_settings-panel .panel-body").html('<div id="site-content" style="width:100%;height:100%" ><iframe id="site-content-iframe" style="width:100%;height:100%" border=0 	src="/admin/product-post.php?post='+current_pid+'&action=edit" ></iframe></div>');
		}
		ajaxBeforeSave($j("#vc-bit_settings-panel .panel-body"));
		$j("#vc-bit_settings-panel .panel-footer").show();
		$j("#vc-bit_settings-panel").width("1160");
		return ;
	}else{
		$j("#vc-bit_settings-panel").width("900");
		$j("#vc-bit_settings-panel").removeClass("iframeDiv");

	}

	var url = '/FeiEditor/siteEdit/ajax_getPageSettings/' + bit_setting_type + '/' + current_pid;
	gbit_setting_type = bit_setting_type;
	$j("#vc-bit_settings-panel .panel-footer").hide();
	$j("#vc-bit_settings-panel .panel-title").html(title);
	vc.edit_bit_settings_view.render(action);
	loadingAjax($j("#vc-bit_settings-panel .panel-body"));
	$j("#vc-bit_settings-panel").addClass("animated_new");

	$j.ajax({
		  type: 'POST',
		  url: url,
		  success: function(data) {


					if(bit_setting_type=="link"){
						$j("#vc-bit_settings-panel .panel-body").append(data);
						return false;
					}else{
						$j("#vc-bit_settings-panel .panel-footer .btn-primary").html("保存并关闭").unbind("click");
						$j("#vc-bit_settings-panel .panel-body").html(data);
					}

					if(action=="COPY"){
						$j("#vc-bit_settings-panel [name='post_title']").val($j("#vc-bit_settings-panel [name='post_title']").val()+"-副本");
						$j("#vc-bit_settings-panel [name='menu_title']").val($j("#vc-bit_settings-panel [name='menu_title']").val()+"-副本");
					}
					$j("#vc-bit_settings-panel .panel-footer").show();
					if (show_panel == "show") {
						$j("#vc-bit_settings-panel [data-filter='pagesetting-mail']").click();
					}
					$j('#vc-bit_settings-panel .bit-color-control:visible').qfColorPicker();
					$j('#livechat-qf-picker-container input').css({'padding':'3px 5px','width': '65px'});
					$j('#livechat-qf-picker-container input.qf-picker-clear').css({'padding':'0px 8px 1px 8px'});
					if(	$j('#vc-bit_settings-panel [name=sc_chat_on_off]').length>0){
						var target = $j('#vc-bit_settings-panel [name=sc_chat_on_off]');
						var input_status = !target.is(':checked');
						if(input_status){
							$j("#vc-bit_settings-panel .chatform > .chatformdiv").hide();
						}else{
							$j("#vc-bit_settings-panel .chatform > .chatformdiv").show();
						}
						$j('#vc-bit_settings-panel .chatform input').prop('disabled', input_status);
						$j('#vc-bit_settings-panel .chatform select ').prop('disabled', input_status);
						$j('#vc-bit_settings-panel .chatform [name=pop_msg]').prop('disabled', input_status);
						target.prop('disabled', false);
					}
					if($j(".widget-layout .set_header_border_div").length==1){

						$j(".widget-layout .set_header_border_div .useSameSettingchange,.widget-layout .set_header_border_div .useSameSetting").change(function(){
							changeBorderSetting($j(".widget-layout .set_header_border_div"), $j(this));
						});

					};
					if($j(".widget-layout .set_content_border_div").length==1){
						$j(".widget-layout .set_content_border_div .useSameSettingchange,.widget-layout .set_content_border_div .useSameSetting").change(function(){
								changeBorderSetting($j(".widget-layout .set_content_border_div"), $j(this));
						})
					}
					if($j(".bottom-widget-layout .set_header_border_div").length==1){
						$j(".bottom-widget-layout .set_header_border_div .useSameSettingchange,.bottom-widget-layout .set_header_border_div .useSameSetting").change(function(){
							changeBorderSetting($j(".bottom-widget-layout .set_header_border_div"), $j(this));
						});

					};
					if($j(".bottom-widget-layout .set_content_border_div").length==1){
						$j(".bottom-widget-layout .set_content_border_div .useSameSettingchange,.bottom-widget-layout .set_content_border_div .useSameSetting").change(function(){
								changeBorderSetting($j(".bottom-widget-layout .set_content_border_div"), $j(this));
						})
					}
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
		   top.location.reload();
		}
	});
	return false;
}
function mb_strlen(str){
    var len = 0;
    for (var i=0; i<str.length; i++) {
     var c = str.charCodeAt(i);
    //单字节加1
     if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {
       len++;
     }
     else {
      len+=2;
     }
    }
    return len;
}
function bitSettingsSave(reload_type, test_email) {
	if($j("#vc-bit_settings-panel form #pid").val()>0){
		var gcurrent_pid = $j("#vc-bit_settings-panel form #pid").val();
	}else{
		var gcurrent_pid=parent.$('#pageUrl').val();
	}

	ajaxBeforeSave($j("#vc-bit_settings-panel"));
	var is_valid = true;
	if (gbit_setting_type == 'livechat') {
		var qqdata = $j("#vc-bit_settings-panel form input[name=online_qqs]").val();
		$j('#livechat_err').html('').hide();
		if (qqdata) {
			qqdata = qqdata.replace("：", ":").replace("；", ";");
			$j("#vc-bit_settings-panel form input[name=online_qqs]").val(qqdata);
			$j.each(qqdata.split(';'), function(key, value) {
				var qqvals = value.split(':');
				var qqnum = qqvals[0];
				if (qqvals.length > 1) {
					qqnum = qqvals[1];
				}
				var intRegex = /^\d+$/;
				if (qqnum != "" &&  !intRegex.test(qqnum)) {
					$j('#livechat_err').html('请检查QQ号码的格式。').show();
					is_valid = false;
				}
			});
		}

		var email = $j("#vc-bit_settings-panel form input[name=offline_msg_email]").val();
		var emailRegex = /^[\.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
		if (email != "") {
			email = email.replace("；", ";");
			$j("#vc-bit_settings-panel form input[name=offline_msg_email]").val(email);
			$j.each(email.split(';'), function(key, value) {
				if (value != "" && !emailRegex.test(value)) {
					$j('#livechat_err').html('请检查E-mail格式。').show();
					is_valid = false;
				}
			});
		}
	} else if (gbit_setting_type == 'website') {
		var sms_support = $j("#vc-bit_settings-panel form [name=sms_support]").val();

		if(sms_support=="1"){
			var sms_signature = $j("#vc-bit_settings-panel form input[name=sms_signature]").val();
			if(sms_signature!=""){
				sms_signature = sms_signature.replace("【","");
				sms_signature = sms_signature.replace("】","");
				if(mb_strlen(sms_signature)<4 || mb_strlen(sms_signature)>16){
					alert("短信签名格式错误");
					is_valid = false;
				}

				var reg = /^\+[\d]+$/;
				var zoneNumber = $j("#vc-bit_settings-panel form input[name=sms_default_pre]").val();
				if(zoneNumber){
					var flag = reg.test(zoneNumber); //true
					if(!flag){
						jAlert("国家区号格式错误，请正确的格式为加号和数字，例如+86,+1等。");
						is_valid = false;
					}
				}
			}

		}

	}

	if (!is_valid) {
		ajaxAfterSave();
		return false;
	}

	if($j(".widget-layout .set_header_border_div").length==1){
		var p = $j(".widget-layout .set_header_border_div");
		p.find(".set_border_input").val(getBorderSet($j(".widget-layout  .set_header_border_div")));
	}
	if($j(".widget-layout .set_content_border_div").length==1){
		var p = $j(".widget-layout .set_content_border_div");
		p.find(".set_border_input").val(getBorderSet($j(".widget-layout .set_content_border_div")));
	}
	if($j(".bottom-widget-layout .set_header_border_div").length==1){
		var p = $j(".bottom-widget-layout .set_header_border_div");
		p.find(".set_border_input").val(getBorderSet($j(".bottom-widget-layout  .set_header_border_div")));
	}
	if($j(".bottom-widget-layout .set_content_border_div").length==1){
		var p = $j(".bottom-widget-layout .set_content_border_div");
		p.find(".set_border_input").val(getBorderSet($j(".bottom-widget-layout .set_content_border_div")));
	}

	var postdata = $j("#vc-bit_settings-panel form").serialize();
	var post_title_html = $j("#vc-bit_settings-panel .panel-body input[name='post_title']").val();

	if(top.jQuery("body").hasClass("caterole")){
		if( jQuery("[name='tax_input[products_category][]']:checked").length==0 && jQuery("[name='post_category[]']:checked").length==0){
			jAlert("请选择一个分类！");
			ajaxAfterSave();
			return ;
		}
	}


	if(post_title_html && "products" == post_title_html.toLowerCase()){
		jAlert("标题"+post_title_html+"为保留字符，请重新填写");
		ajaxAfterSave();
		return;
	}


	$j.post("/FeiEditor/siteEdit/ajax_setPageSettings/" + gbit_setting_type + '/' + gcurrent_pid, postdata, function(data) {
		top.page_html_reload();
		if (reload_type == 'no') {
			ajaxAfterSave();
			if (test_email == 'yes') {
				var to = $j("#vc-bit_settings-panel form input[name=admin_email]").val();
				if($j.trim(to)==""){
					to = $j("#vc-bit_settings-panel form input[name=mail_from]").val();
				}
				TestSmtpEmail(to);
			}
		} else {
			if (gbit_setting_type == 'website'||gbit_setting_type == 'fonts') {
				parent.location.reload();
			}else if(gbit_setting_type == 'manage'){
				if(jQuery("#qfy_manage_support_shop").attr("checked")=="checked"){
					parent.location.reload();
				}else{
					var bit_homeId = $j("#bit-hide-homeid").val();
					parent.$('#pageUrl').val(bit_homeId).change();
				}

			} else {
				location.reload();
			}
		}
	});
}

function ajaxValidateSiteurl() {
	$j('#pageset_err').html('').hide();
	var siteurl = $j("#vc-bit_settings-panel form input[name=siteurl]").val();
	if (siteurl.length < 5) {
		return ;
	}

	var siteurlRegex = /^[\w-]{5,}$/;
	if (siteurl != "" && !siteurlRegex.test(siteurl)) {
		$j('#pageset_err').html('网站域名格式不正确。支持数字、字母、英文中划线， 最小长度为5个字符。').show();
		return false;
	}

	$j.post("/FeiEditor/siteEdit/ajax_validateSiteurl", {siteurl:siteurl}, function(data) {
		if (data != "success") {
			$j('#pageset_err').html('网站域名已存在请换一个。').show();
		}
	});
}



function TestSmtpEmail(to){
	$j('.bit_test_smtp_email_result').html(loaderDivFrame);

	var mail_from = $j.trim($j("[name='mail_from']").val());
	var mail_from_name  = $j.trim($j("[name='mail_from_name']").val());
	var smtp_host = $j.trim($j("[name='smtp_host']").val());
	var smtp_port = $j.trim($j("[name='smtp_port']").val());
	var smtp_user = $j.trim($j("[name='smtp_user']").val());
	var smtp_pass = $j.trim($j("[name='smtp_pass']").val());

	if(mail_from==""&&mail_from_name==""&&smtp_host==""&&smtp_port==""&&smtp_user==""&&smtp_pass==""){

	}else if(mail_from!=""&&mail_from_name!=""&&smtp_host!=""&&smtp_port!=""&&smtp_user!=""&&smtp_pass!=""){

	}else{
		jAlert("请正确填写所有邮箱的参数。");
		ajaxAfterSave();
		return false;
	}

	jQuery.ajax({
		url:"/admin/admin-ajax.php",
		type:'post',
		data:{"action":"qfy_testsmtpemail",to: to},
		dataType: 'json',
		success:function(result) {
			var flag = result.result;
			var error_type = result.error_type;
			var debug = result.debug;
			if (flag) {
				//if($j("[name='qfy_email_action']").val()=="1"){
					//$j('.bit_test_smtp_email_result').html("<span style='color:#057748;'>请在邮箱["+to+"]查看邮件是否发送，想立即知道配置是否正确，请选择同步发送测试。</span>");
				//}else{
					$j('.bit_test_smtp_email_result').html("<span style='color:#057748;'>发送成功， 请到邮箱["+to+"]查收邮件。</span>");
				//}
			} else {
				var reuslt_string = '';

				if(error_type == 'auth'){
					reuslt_string = "<span style='color:#FA8C35;'>发送失败，用户名密码错误。如果您正在使用QQ邮箱或者Gmail，请注意这里填写的密码是授权密码，不是您QQ或者Gmail的密码哦。<a href='http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=28&&no=1001256' target='_BLANK'>什么是QQ邮箱授权码?</a></span>";
				}else if(error_type == 'host'){
					reuslt_string = "<span style='color:#FA8C35;'>连接失败，发送服务器地址错误，或者是端口错误，或者是加密协议错误。</span>";
				}else if(error_type == 'own'){
					reuslt_string = "<span style='color:#FA8C35;'>可惜了，您这个用户不能用这个邮箱发送邮件。请让发送邮箱和登录用户对应起来（保持一致。）</span>";
				}else{
					reuslt_string = "<span style='color:#FA8C35;'>出现未知错误。请看以下调试信息。有时重试一次问题会自动消失。如果尝试多次仍有错误，可联系客服。联系时，请附带下面的调试信息。</span>";
				}

				reuslt_string = reuslt_string+"<br><span style='color:#333;' sytle='clear:both;'>"+debug+"</span>";
				$j('.bit_test_smtp_email_result').html(reuslt_string);
			}
		}
	});
}

function changeStyleText(val)
{
	$j("#vc-edit-slide-dialog .textStyleDiv").removeClass("hover");
	$j("#vc-edit-slide-dialog .textStyleDiv[value='"+val+"']").addClass("hover");
	$j("#vc-edit-slide-dialog #textStyle").val(val);
}

function editOrChangeImage() {
	var dialogHtml =
		 '<div id="vc-edit-or-change-image-dialog" class="panel" style="display: none;background-color:#ffffff;">'+
			'<div class="panel-heading">'+
				'<h3 class="panel-title">编辑/替换图片</h3>'+
			'</div><br/><br/>'+
			'<div class="vc-properties-list qfe-edit-form" >'+
				'<span style="padding-left:70px"></span>'+
				'<button class="editOrChange btn btn-primary" value="edit">编辑图片</button>'+
				'<span style="padding-left:50px"></span>'+
				'<button class="editOrChange btn btn-primary" value="change">替换图片</button>'+
			'</div><br/><br/>'+
			'<div class="panel-footer">'+
				'<button type="button" class="btn btn-default vc-close" data-dismiss="panel">关闭</button>\r\n'+
			'</div>'+
		'</div>';
	if( $j('#vc-edit-or-change-image-dialog').length == 0 ) {
		$j('body').append(dialogHtml);
	}
	$j('#vc-edit-or-change-image-dialog').dialog({
		create: function( e, ui ) {
			$j(this).parent().css('z-index', '1000000');
			$j(this).prev('.ui-dialog-titlebar').remove();
		},
		modal: true ,
		position: ['center', 40],
		closeOnEscape: true,
		width: 400,


	});
	$j('#vc-edit-or-change-image-dialog .vc-close').click(function(){
		$j('#vc-edit-or-change-image-dialog').dialog("close");
	});
}
function showsearchpagetype(obj,default_val){
	var v = jQuery(obj).val();
	var p = jQuery(obj).closest(".panel-body");
	if(v=="post"||v=="product"||v=="products"){
		p.find(".showsearchpagecate select").css("color","#fff").after('<div style="font-size: 14px;position: absolute;left: 6px;top: 9px;" class="fa fa-spinner fa-spin fa-3x fa-fw"></div>');
		jQuery.post("/admin/admin-ajax.php",{"action":"bit_get_postListWizHtml"}, function(htm) {
			p.find(".showsearchpagecate").find(".fa").remove();
			if(v=="post"){
				var objhtml = jQuery(htm).find("[name='post_categories']").html();
				p.find(".showsearchpagecate select").html(objhtml).css("color","#333");
			}else if(v=="product"){
				var objhtml = jQuery(htm).find("[name='product_categories']").html();
				p.find(".showsearchpagecate select").html(objhtml).css("color","#333");
			}else if(v=="products"){
				var objhtml = jQuery(htm).find("[name='pro_categories']").html();
				p.find(".showsearchpagecate select").html(objhtml).css("color","#333");
			}
			if(default_val){
				p.find(".showsearchpagecate select").val(default_val);
			}
		})
	}else{
		p.find(".showsearchpagecate select").html("<option value=''>无分类</option>");
	}


}


function imageTableFloat() {
	var dialogHtml =
		 '<div id="vc-edit-or-change-float-dialog" class="panel" style="display: none;">'+
			'<div class="panel-heading">'+
				'<h3 class="panel-title">图片/表格位置</h3>'+
			'</div>'+
			'<div class="panel-body vc-properties-list qfe-edit-form" style="background-color:#ffffff">'+
				'<span style="padding-left:20px"></span>'+
				'<div class="editOrChange" style="display:inline;cursor:pointer" value="left"><img src="/FeiEditor/bitSite/images/tableStyle/left-cat.png" /></div>'+
				'<span style="padding-left:20px"></span>'+
				'<div class="editOrChange"  style="display:inline;cursor:pointer" value="right"><img src="/FeiEditor/bitSite/images/tableStyle/right-cat.png" /></div>'+
				'<span style="padding-left:20px"></span>'+
				'<div class="editOrChange " style="display:inline;cursor:pointer"  value="cancel"><img src="/FeiEditor/bitSite/images/tableStyle/center-cat.png" /></div>'+
			'</div>'+
			'<div class="panel-footer">'+
				'<button type="button" class="btn btn-default vc-close" data-dismiss="panel">关闭</button>\r\n'+
			'</div>'+
		'</div>';
	if( $j('#vc-edit-or-change-float-dialog').length == 0 ) {
		$j('body').append(dialogHtml);
	}
	$j('#vc-edit-or-change-float-dialog').dialog({
		create: function( e, ui ) {
			$j(this).parent().css('z-index', '1000000');
			$j(this).prev('.ui-dialog-titlebar').remove();
		},
		modal: true ,
		position: ['center', 40],
		closeOnEscape: true,
		width: 450
	});
	$j('#vc-edit-or-change-float-dialog .vc-close').click(function(){
		$j('#vc-edit-or-change-float-dialog').dialog("close");
	});
}
function editImageFront(obj, id) {

	 if(!id) {
		id = $j(obj).attr('data-id');
	 }

	 var dialogHtml =
		 '<div id="vc-edit-image-front-dialog" class="panel" style="display: none;">'+
			'<div class="panel-heading">'+
				'<h3 class="panel-title">编辑图片</h3>'+
			'</div>'+
			'<div class="panel-body vc-properties-list qfe-edit-form" style="background-color:#ffffff">'+
				'<img class="waitingToPanel" src="'+loaderImage+'" />'+
			'</div>'+
			'<div class="panel-footer">'+
				'<button type="button" class="btn btn-default vc-close" data-dismiss="panel">关闭</button>\r\n'+
				'<button type="button" class="btn btn-primary vc-save" data-save="true">保存</button>'+
			'</div>'+
		'</div>';

	if( $j('#vc-edit-image-front-dialog').length == 0 ) {
		$j('body').append(dialogHtml);
	} else {
		if(typeof loaderImageFrame !="undefined"){
			$j('#vc-edit-image-front-dialog .panel-body').html('<img class="waitingToPanel" src="'+loaderImageFrame+'" />');
		}else{
			$j('#vc-edit-image-front-dialog .panel-body').html('');
		}
	}

	$j('#vc-edit-image-front-dialog').dialog({
		create: function( e, ui ) {
			$j(this).parent().css('z-index', '1000000');
			$j(this).prev('.ui-dialog-titlebar').remove();
		},
		modal: true ,
		position: ['center', 40],
		closeOnEscape: true,
		width: 900
	});
	$j('#vc-edit-image-front-dialog .vc-close').click(function(){
		edit_image_after_save();
	});

	$url = '../admin/edit-image-front.php?id='+id+'&timestamp='+$j.now();
	$j("#vc-edit-image-front-dialog .panel-body").append('<iframe name="editImage_iframe" src="'+$url+'" frameborder="no" border="0" marginwidth="0" marginheight="0"  width="100%" height="420" allowtransparency="yes" ></iframe>');
}


function editImageFrontInfo(obj, id) {

	 if(!id) {
		id = $j(obj).attr('data-id');
	 }

	 var dialogHtml =
		 '<div id="vc-edit-image-front-dialog2" class="panel" style="display: none;">'+
			'<div class="panel-heading">'+
				'<h3 class="panel-title">编辑</h3>'+
			'</div>'+
			'<div class="panel-body vc-properties-list qfe-edit-form" style="background-color:#ffffff">'+
				'<img class="waitingToPanel" style="margin-left:200px;" src="'+loaderImage+'" />'+
				'<div class="imageInfoPanel" style="display:none;" >'+
				'<div class="col-md-12 vc-column vc-column qfe_el_type_textfield" style="display: block;"><div class="qfe_element_label">标题</div><div class="edit_form_line"><input type="text" value="" style="width:400px;" class="qfe_vc_param_value qfe-textinput  textfield" name="img_title"></div></div>'+
				'<div class="col-md-12 vc-column vc-column qfe_el_type_textfield" style="display: block;"><div class="qfe_element_label">描述</div><div class="edit_form_line"><textarea style="width: 387px;height: 52px;border: 1px solid #ccc;resize: none;" class="qfe_vc_param_value qfe-textinput  textfield" name="img_content"></textarea></div></div>'+
				'<div class="col-md-12 vc-column vc-column qfe_el_type_textfield" style="display: block;"><div class="qfe_element_label">链接</div><div class="edit_form_line"><input type="text" value="" style="width:400px;" class="qfe_vc_param_value qfe-textinput  textfield" name="img_link"></div></div>'+
				'</div>'+

			'</div>'+
			'<div class="panel-footer">'+
				'<button type="button" class="btn btn-default vc-close" data-dismiss="panel">关闭</button>\r\n'+
				'<button type="button" class="btn btn-primary vc-save" data-save="true">保存</button>'+
			'</div>'+
		'</div>';

	if( $j('#vc-edit-image-front-dialog2').length == 0 ) {
		$j('body').append(dialogHtml);
	} else {
		 $j('#vc-edit-image-front-dialog2 .imageInfoPanel').hide();
		 $j('#vc-edit-image-front-dialog2 .waitingToPanel').show();
	}

	$j('#vc-edit-image-front-dialog2').dialog({
		create: function( e, ui ) {
			$j(this).parent().css('z-index', '1000000').css('top', '50px').css('left', '50%').css('margin-left', '-260px');
			$j(this).prev('.ui-dialog-titlebar').remove();
		},
		modal: true ,
		position: ['center', 40],
		closeOnEscape: true,
		width: 500
	});
	$j.getJSON("/FeiEditor/siteEdit/getImageInfo/"+id,function(data){
		 $j('#vc-edit-image-front-dialog2 [name="img_title"]').val(data.title);
		 $j('#vc-edit-image-front-dialog2 [name="img_content"]').val(data.content);
		 $j('#vc-edit-image-front-dialog2 [name="img_link"]').val(data.link);
		 $j('#vc-edit-image-front-dialog2 .imageInfoPanel').show();
		 $j('#vc-edit-image-front-dialog2 .waitingToPanel').hide();
	})
	$j('#vc-edit-image-front-dialog2 .vc-close').unbind("click").click(function(){
		$j('#vc-edit-image-front-dialog2').dialog("close");
	});
	$j('#vc-edit-image-front-dialog2 .vc-save').unbind("click").click(function(){
		 var title = $j('#vc-edit-image-front-dialog2 [name="img_title"]').val();
		 var content = $j('#vc-edit-image-front-dialog2 [name="img_content"]').val();
		 var link = $j.trim($j('#vc-edit-image-front-dialog2 [name="img_link"]').val());
		 if(link!="" && link.indexOf("://")<0){
			 link = "http://"+link;
		 }

		$j.post("/FeiEditor/siteEdit/setImageInfo/"+id,{title:title,content:content,link:link},function(data){
			if(data!="success"){
				jAlert("保存失败，请刷新后再尝试一次");
			}else{
				$j('#vc-edit-image-front-dialog2').dialog("close");
			}
		})
	});


}

function relaceToInt(obj){
	var val = obj.value;
	val = val.replace(/[^\d\.]/g,"");
	obj.value = val;

}

function editImageStyle() {
	 var dialogHtml =
		 '<div id="vc-edit-or-change-imagestyle-dialog" class="panel" style="display: none;background-color:#ffffff;">'+
			'<div class="panel-heading">'+
				'<h3 class="panel-title">重新设置图片样式</h3>'+
			'</div><br/>'+
			'<div class="vc-properties-list qfe-edit-form" style="padding-left:20px;">'+
				'<table border=0 cellpadding=3 cellspacing=3 ><tr><td>图片宽度<span class="imagedw_v"></span></td><td><input type="text" onkeyup="relaceToInt(this)"   class="qfe_vc_param_value qfe-textinput textfield"  name="image_width" id="image_width" />  <select name="imagedw"  id="imagedw"><option value=0 >像素(px)</option><option value=1 >百分比</option></select></td></tr><tr><td>图片高度<span class="imagedw_v"></span></td><td><input type="text" onkeyup="relaceToInt(this)" class="qfe_vc_param_value qfe-textinput textfield" name="image_height" id="image_height" /></td></tr><tr><td>图片样式</td><td><select class="qfe_vc_param_value qfe-input qfe-selectdropdown" name="image_style" id="image_style"><option value="">无效果</option><option value="1">加边框</option></select></td></tr><tr><td>边框颜色</td><td><input type="text" class="bit-color-control" name="image_border_color" id="image_border_color" /></td></tr><tr><td>边框的宽度(px)</td><td><input type="text"  name="image_border_width" onkeyup="relaceToInt(this)" id="image_border_width" /></td></tr><tr><td>边框和图片的距离(px)</td><td><input type="text"  name="image_border_padding" onkeyup="relaceToInt(this)" id="image_border_padding" /></td></tr></table>'+
			'</div><br/><br/>'+
			'<div class="panel-footer">'+
				'<button type="button" class="btn btn-default vc-close" data-dismiss="panel">关闭</button>\r\n'+
				'<button type="button" class="btn btn-primary vc-submit" data-dismiss="panel">确认</button>\r\n'+
			'</div>'+
		'</div>';
	if( $j('#vc-edit-or-change-imagestyle-dialog').length == 0 ) {
		$j('body').append(dialogHtml);
	}
	$j('#vc-edit-or-change-imagestyle-dialog').dialog({
		create: function( e, ui ) {
			$j(this).parent().css('z-index', '1000000');
			$j(this).prev('.ui-dialog-titlebar').remove();
		},
		modal: true ,
		position: ['center', 40],
		closeOnEscape: true,
		width: 450,


	});

	$j('#vc-edit-or-change-imagestyle-dialog .vc-close').click(function(){
		$j('#vc-edit-or-change-imagestyle-dialog').dialog("close");
	});
}

function edit_image_after_save(attachment_id,src) {
	if (attachment_id){
		//refresh text area image
		var append = '&' + new Date().getTime() + 'a' + Math.random();
		//alert(src+"?attachment_id="+attachment_id);
		$j.post("/FeiEditor/siteEdit/getImageSrc/"+attachment_id,function(src){
			iframeWin.jQuery('img[src*='+attachment_id+']').each(function(){
				iframeWin.jQuery(this).attr('src', src+"?attachment_id="+attachment_id+append);
				iframeWin.jQuery(this).attr('data-cke-saved-src', src+"?attachment_id="+attachment_id+append);
			});
		})
		//refresh vc single image
		$j('img[rel="'+attachment_id+'"]').each(function(){
			$j(this).attr('src', $j('#vc-inline-frame').attr('src').split('?')[0]+'image.php?attachment_id='+attachment_id );
		});
	}
	$j('.refresh-attachment').click();
	$j('#vc-edit-image-front-dialog').dialog("close");
}

function bitweb_save_callback(){
	iframeWin.jQuery(".content-wrapper .qfe_text_column a").attr("target","_blank");
	var $this = $j(window.top.document).find('#bit_site_top .saveOnePage');
	$this.addClass('saveOnePageUnSaved');
	$this.find('span > span').removeClass('fa fa-spinner fa-spin fa-3x fa-fw').addClass('icon icon-save-one-page')
}
function bit_add_new_menu() {
	top.location.href = '/FeiEditor/siteEdit/menu/new';
}
function bitCopyPage(){

	if(jQuery("#vc-bit_settings-panel .panel-body input[name='pid']").val()>0){
		var gcurrent_pid=$j("#vc-bit_settings-panel .panel-body input[name='pid']").val();
	}else{
		var gcurrent_pid=parent.$('#pageUrl').val();
	}
	var refresh = true;
	//if(jQuery("#vc-bit_settings-panel .panel-body input[name='pid']").val()!=parent.$('#pageUrl').val()){
		//refresh = false;
	//}
	var postdata = $j("#vc-bit_settings-panel form").serialize();
	var post_title_html = $j("#vc-bit_settings-panel .panel-body input[name='post_title']").val();
	if(post_title_html && "products" == post_title_html.toLowerCase()){
		jAlert("标题"+post_title_html+"为保留字符，请重新填写");
		return;
	}
	ajaxBeforeSave($j("#vc-bit_settings-panel"));
	$j.post("/FeiEditor/siteEdit/ajax_copyPage/"+gcurrent_pid, postdata, function(id) {
		top.page_html_reload();
		if(refresh){
			top.autoOpenSettingpage = true;
			parent.$('#pageUrl').val(id).change();
		}else{
			parent.$('#pageUrl').change();
		}

	});


}
function getMessageFromVCInit()
{
	 if(typeof window.parent.jQuery === 'undefined'){
		 setTimeout(function(){getMessageFromVCInit()},500);
		 return;
	 }

		var bit_hide_siteurl = $j("#bit-hide-siteurl").val();
		var bit_homeId = $j("#bit-hide-homeid").val();
		parent.jQuery("#bitSiteDomain").val(bit_hide_siteurl);

		top.jQuery("#pageUrl").val($j("#bit_page_id").val());
		top.jQuery("#pagehtmlcontainer .accordion_sections .results li b").css("font-weight","400");
		top.jQuery("#pagehtmlcontainer .accordion_sections .results li[value='"+$j("#bit_page_id").val()+"'] b").css("font-weight","bold");

		top.jQuery("#is_system_page").val($j("#is_system_page").val());
		top.jQuery("#pageUrl_posttype").val($j("#pageUrl_posttype").val());
		top.jQuery("#homepageid").val($j("#bit-hide-homeid").val());

		var p = top.jQuery(".site_msg_selecthtml");
		p.find("#pagehtmlshowtext .text").html($j("#bit_page_title").val());

		var id = parent.jQuery("#pageUrl").val();

		var original_url = $j('#vc-inline-frame').attr('src');
		if(original_url.indexOf(bit_hide_siteurl)>=0){
			//same domain
			original_url = original_url.replace('&vceditor=true', '');
			original_url = original_url.replace('?vceditor=true', '');
			if(original_url.indexOf('?') > -1){
				parent.jQuery("#bit-site-preview").attr("href", original_url+'&qfy_preview=1');
			}else{
				parent.jQuery("#bit-site-preview").attr("href", original_url+'?qfy_preview=1');
			}

		}else{
			jAlert('您已经在浏览外部网站。如果需要，可以从工具栏的页面列表中返回到您的网站并继续编辑。');
		}

		var result = $j.post("/FeiEditor/siteEdit/ajax_set_current_biz_pageid/"+id);

        try {
			parent.window.history.pushState({
				path: parent.window.location.href
			}, '', "/FeiEditor/siteEdit/#pageid="+id);
        } catch(e) {
            console.error('history.pushState failed, maybe HTML5 is not supported?')
            console.error(e.stack);
        }
}
$j(function(){
		//  for wp media under VC and BITWEB
		_qfUtilSettings.ajax.url = '/admin/admin-ajax.php';
})
function loadingAjax(ajax){
	var load = $j("#loading").val();
	ajax.html('<div class="bitAjaxWaiting" align="center"><img   class="waitingToPanel" src="' + load + '" /></div>');
	var obj = ajax.find(".bitAjaxWaiting:visible");
	var lw = obj.width();
	var lh = obj.height();
	var height = 42;
	if (lh < 84 && lh > 0) {
		obj.find("img").height(lh / 2);
		height = lh / 2;
	}
	obj.find("img").css("margin-top", lh / 2 -20)
}

function getAllrevisions(toobj){
	var id =parent.jQuery("#pageUrl").val();
	loadingAjax(toobj);
	$j.post("/FeiEditor/siteEdit/getAllrevisions/"+id,function(data){
		toobj.html(data);
	})
}


function reloadRevSlider(obj)
{
	eval("iframeWin.revapi"+obj.sliderID+".revRefresh(obj)");
}

function refreshREvSlider(slider,slide,action,flag)
{
	//存在视频的时候，部分刷新了出BUG，只能全部刷新
	if(slider.find("video").length>0){
		if(action=="resize"){
			return false;
		}else{
			location.reload();
			return false;
		}
	}
	var index = 0;
	if(slide=="add"){
		index = slider.find("li.bitSliderLi").length;
	} else {
		slider.find("li.bitSliderLi").each(function(i){
			if($j(this).attr("data-slideid")==slide){
				index = i;
			}
		})
	}
	if(action=="copy"){
		index = index + 1;
	}
	//one plugin
	var slider_id = slider.attr("bitdatalocation");
	var url =$j("#vc-inline-frame").attr("src");

	if(slider.closest("body").width()<760){
		flag="mobile";
	}
	if(flag=="mobile"){
		url += "&mobiledevice=true";
	}
	ajaxBeforeLoading(0,slider);
	$j.post(url+"&startWithSlide="+index,function(data){
		var tmpObj = $j(data).find(".rev_slider_wrapper");
		var tmp = tmpObj.html();
		var jshtml = $j.trim($j(data).find("#bit_revsider").html());
		var csshtml = $j.trim($j(data).find("#bit_revsider_style").html());

		slider.html(tmp).attr("style",tmpObj.attr("style"));
		slider.parent().find("#bit_revsider_style").html(csshtml);

		eval("iframeWin.revapi"+slider_id+"_param="+jshtml.replace("var revapi"+slider_id+"_param =",""));
		iframeWin.run_revApi();

		if(iframeWin.jQuery(".tp-fullwidth-forcer").length>1){
			iframeWin.jQuery(".tp-fullwidth-forcer:last").remove();
		}
		ajaxAfterSave();
		if(action!="set"){
			$j(".panel").hide();
		}
		sliderControl(iframeWin.jQuery('body'));
		ajaxAfterLoading();
	})
}

function gethost(){
	return window.location.hostname;
}
function getVCDefaultHtml(tag){
	var str = "";
	var location_url = iframeWin.location.href;
	location_url = location_url.replace("?vceditor=true","");
	location_url = location_url.replace("&vceditor=true","");
	switch(tag)
	{
		case "vc_column_text_block_1":
			str +='<div><span style="color:#666666;">您可以双击这里或者点击编辑按钮来修改内容。</span></div><div><span style="color:#666666;">您还可以添加图标，按钮，图片等常用元素</span></div><div><br></div>';
			break;
		default:
			 str ="";
	}

	return str;
}
function createVCColumn(vc,pid,width,obj,align_sm){
	if(obj.model==false){
		if(typeof(align_sm) == undefined){
			vc.ShortcodesBuilder.create({shortcode: 'vc_column', parent_id:pid, params: {width: width}});
		}else{
			vc.ShortcodesBuilder.create({shortcode: 'vc_column', parent_id:pid, params: {width: width, align_sm:align_sm}});
		}
		return vc.ShortcodesBuilder.lastID();
	}else{
		return obj.model.get("id");

	}
}

function createVCElement(tag,totag,cid,obj,defaultParam,order){

	var vcParams = vc.getDefaults(tag);
	vcParams.content =  getVCDefaultHtml(totag);
	if(totag=="vc_column_text_title_2"||totag=="vc_column_text_title_3"){
		vcParams.bg_color="#595959";
	}
	if(totag == "vc_column_text_feature_1_1" || totag == "vc_column_text_feature_1_2" || totag == "vc_column_text_feature_1_3" || totag == "vc_column_text_feature_1_4"){
		vcParams.box_shadow = 1;
		if(totag == "vc_column_text_feature_1_2"){
			vcParams.box_shadowcolor = '#919191';
		}else{
			vcParams.box_shadowcolor = '#ffffff';
		}
		vcParams.box_shadowstyle = 0;
		vcParams.box_shadowsize = 4;
	}else if(totag.indexOf("vc_column_text_postlist_")>-1){
		vcParams = vc_column_text_postlist(totag,vcParams);
		if(defaultParam){
			jQuery.each(defaultParam,function(n,value) {
				vcParams[n] = value;
			});
		}
	}else if(totag.indexOf("vc_column_text_postsliderlist_")>-1){
		vcParams = vc_column_text_postsliderlist(totag,vcParams);
		if(defaultParam){
			jQuery.each(defaultParam,function(n,value) {
				vcParams[n] = value;
			});
		}
	}else if(totag.indexOf("vc_column_text_advancedlist_")>-1){
		vcParams = vc_column_text_advancedlist(totag,vcParams);
		if(defaultParam){
			jQuery.each(defaultParam,function(n,value) {
				vcParams[n] = value;
			});
		}
	}else if(totag.indexOf("vc_column_text_user_")>-1){

		if(totag=="vc_column_text_user_1"){
			vcParams.template = "login";
		}else if(totag=="vc_column_text_user_2"){
			vcParams.template = "register";
		}else if(totag=="vc_column_text_user_3"){
			vcParams.template = "edit";
		}else if(totag=="vc_column_text_user_4"){
			vcParams.template = "view";
		}else if(totag=="vc_column_text_user_5"){
			vcParams.template = "sub_role";
		}
	}else if(totag.indexOf("vc_column_text_shop_")>-1){
		if(totag=="vc_column_text_shop_5"){
			vcParams.list_type = "4";
			vcParams.display_type="products"
		}else if(totag=="vc_column_text_shop_6"){
			vcParams.list_type = "5";
			vcParams.display_type="products"
		}else if(totag=="vc_column_text_shop_7"){
			vcParams.list_type = "";
			vcParams.imageshowstyle="1";
			vcParams.display_type="products"
		}
	}else if(totag.indexOf("vc_column_text_header_")>-1){
		vcParams.paddingtop = "20";
		vcParams.paddingbottom = "20";
		if(totag=="vc_column_text_header_1"){
			vcParams.titleline_show = "0";
			vcParams.title_tag = "H2";
			vcParams.title_fontsize = "24";
			vcParams.title_mobilefontsize = "16";
			vcParams.title_weight = "1";
			vcParams.subtitle_tag = "H3";
			vcParams.subtitle_fontsize = "16";
			vcParams.subtitle_mobilefontsize = "12";
			vcParams.subtitle_weight = "1";
		}else if(totag=="vc_column_text_header_2"){
			vcParams.titleline_align = "1";
			vcParams.titleline_positiontb = "10";
			vcParams.titleline_width = "";
		}else if(totag=="vc_column_text_header_3"){
			vcParams.titleline_align = "2";
			vcParams.titleline_positiontb = "10";
			vcParams.titleline_width = "";
		}else if(totag=="vc_column_text_header_4"){
			vcParams.titleline_align = "3";
			vcParams.titleline_position = "20";
			vcParams.titleline_width = "100";
			vcParams.titleline_align = "3";
			vcParams.title_align = "right";
		}else if(totag=="vc_column_text_header_5"){
			vcParams.titleline_align = "4";
			vcParams.titleline_position = "20";
			vcParams.titleline_width = "100";
			vcParams.title_align = "left";
		}else if(totag=="vc_column_text_header_6"){
			vcParams.titleline_align = "";
			vcParams.titleline_position = "20";
			vcParams.titleline_width = "100";
		}

	}

	if(iframeWin.jQuery("[data-model-id='"+cid+"']").closest("section.section-special").length>0){
			var defaultparam = get_default_whlr( cid,tag );
			if(defaultparam){
				for (var key in defaultparam) {
					vcParams[key] = defaultparam[key];
				}
			}

	}


	params = {shortcode: tag, parent_id: cid, params: vcParams};
	if(obj.prepend) {
		var shortcode_first = vc.shortcodes.findWhere({parent_id: cid});
		if(shortcode_first) params.order = shortcode_first.get('order') -1;
		vc.activity = 'prepend';
	}
	if(order) params.order = order;

	vc.ShortcodesBuilder.create(params);
	return vc.ShortcodesBuilder.last();
}
function createVCImageElement(cid, obj, default_image, alignment, style){

	var vcParams = vc.getDefaults("vc_single_image");
	vcParams.default_image = default_image;
	vcParams.alignment = alignment;
	vcParams.style = style;
	if(iframeWin.jQuery("[data-model-id='"+cid+"']").closest("section.section-special").length>0){
			var defaultparam = get_default_whlr( cid,"vc_single_image");
			if(defaultparam){
				for (var key in defaultparam) {
					vcParams[key] = defaultparam[key];
				}
			}
	}
	params = {shortcode: "vc_single_image", parent_id: cid, params: vcParams};
	if(obj.prepend) {
		var shortcode_first = vc.shortcodes.findWhere({parent_id: cid});
		if(shortcode_first) params.order = shortcode_first.get('order') -1;
		vc.activity = 'prepend';
	}
	vc.ShortcodesBuilder.create(params);
}

function createComplexVCImageElement(cid, obj, default_image, alignment, style, rounded_size, border_color){

	var vcParams = vc.getDefaults("vc_single_image");
	vcParams.default_image = default_image;
	vcParams.alignment = alignment;
	vcParams.style = style;
	if(rounded_size != null){
		vcParams.rounded_size = rounded_size;
	}
	if(border_color != null && (style == 'vc_box_outline' || style == 'vc_box_border')){
		vcParams.border_color = border_color;
	}

	if(style == 'vc_box_shadow' || style == 'vc_box_3d'){
		vcParams.shadow_color = '#9e9e9e';
		vcParams.shadow_style = '0';
		vcParams.shadow_size = '2';
	}
	if(iframeWin.jQuery("[data-model-id='"+cid+"']").closest("section.section-special").length>0){
			var defaultparam = get_default_whlr(cid,"vc_single_image" );
			if(defaultparam){
				for (var key in defaultparam) {
					vcParams[key] = defaultparam[key];
				}
			}
	}
	params = {shortcode: "vc_single_image", parent_id: cid, params: vcParams};
	if(obj.prepend) {
		var shortcode_first = vc.shortcodes.findWhere({parent_id: cid});
		if(shortcode_first) params.order = shortcode_first.get('order') -1;
		vc.activity = 'prepend';
	}
	vc.ShortcodesBuilder.create(params);
}
function createInnerContentFromVC(tag,vc,obj){
	if( obj){
		var modeltag = obj.model.get('shortcode');
		var pc_id = obj.model.get('id');
		if(modeltag=="vc_column_inner"){
			 var parent1 = vc.shortcodes.get(obj.model.get('parent_id'));
			 var p1 = parent1.get('parent_id');
			 var column = vc.shortcodes.get(p1);
			 pc_id = column.get('id');
		}

		vc.ShortcodesBuilder.create({shortcode: 'vc_row_inner', parent_id:pc_id, params: {full: "bothfull",background_is_extend:"1",overlay_opacity:"0",paddingtop:'0'}});
		var pid = vc.ShortcodesBuilder.lastID();
		if(tag=="vc_column_text_column_inner_blank_1-1" || tag=="vc_column_text_column_inner_blank" ){
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/1"}});
		}else if(tag=="vc_column_text_column_inner_blank_1-2_1-2"){
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/2"}});
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/2"}});
		}else if(tag=="vc_column_text_column_inner_blank_1-3_1-3_1-3"){
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/3"}});
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/3"}});
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/3"}});
		}else if(tag=="vc_column_text_column_inner_blank_1-4_1-4_1-4_1-4"){
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/4"}});
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/4"}});
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/4"}});
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/4"}});
		}else if(tag=="vc_column_text_column_inner_blank_1-3_2-3"){
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/3"}});
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "2/3"}});
		}else if(tag=="vc_column_text_column_inner_blank_2-3_1-3"){
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "2/3"}});
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/3"}});
		}else if(tag=="vc_column_text_column_inner_blank_1-4_3-4"){
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/4"}});
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "3/4"}});
		}else if(tag=="vc_column_text_column_inner_blank_3-4_1-4"){
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "3/4"}});
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/4"}});
		}else if(tag=="vc_column_text_column_inner_blank_1-4_1-4_1-2"){
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/4"}});
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/4"}});
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/2"}});
		}else if(tag=="vc_column_text_column_inner_blank_1-4_1-2_1-4"){
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/4"}});
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/2"}});
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/4"}});
		}else if(tag=="vc_column_text_column_inner_blank_1-2_1-4_1-4"){
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/2"}});
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/4"}});
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/4"}});
		}else if(tag=="vc_column_text_column_inner_blank_1-6_2-3_1-6"){
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/6"}});
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "2/3"}});
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/6"}});
		}else if(tag=="vc_column_text_column_inner_blank_1-1_1-2_1-2"){
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/1"}});
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/2"}});
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/2"}});
		}else if(tag=="vc_column_text_column_inner_blank_1-1_1-3_1-3_1-3"){
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/1"}});
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/3"}});
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/3"}});
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/3"}});
		}else if(tag=="vc_column_text_column_inner_blank_1-1_1-3_2-3"){
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/1"}});
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/3"}});
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "2/3"}});
		}else if(tag=="vc_column_text_column_inner_blank_1-1_1-4_1-2_1-4"){
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/1"}});
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/4"}});
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "2/4"}});
			vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id:pid, params: {width: "1/4"}});
		}

		obj.$el.modal('hide');
	}
}
function create_vc_changyong(tag,obj,curr){
	//常用组件
	if(tag.indexOf("vc_column_text_column_vc-")>-1){
		var text = "";
		jQuery.each(inline_custom_js,function(n,value) {
			if(value.id==tag){
				text = value.content;
			}
		});
		var host = "";
		var url = window.location.href;
		var regex = /.*\:\/\/([^\/|:]*).*/;
		var match = url.match(regex);
		if (typeof match != "undefined"&& null != match) {
			host = match[1];
		}

		if(text!=null && text.indexOf("|^^|")>-1 ){
			var tmparray = text.split("|^^|");
			var real_url = tmparray[0];
			tmparray.splice(0,1);
			real_v = tmparray.join("|^^|");

			if(real_url!=host){
				//waiting
				jQuery.post("/FeiEditor/siteEdit/change_vc_custom",{url:real_url,content:real_v},function(data){
					if(data.indexOf("success|^^|")==0){
						var tmpdata = data.split("|^^|");
						tmpdata.splice(0,1);
						real_v = tmpdata.join("|^^|");
						vc.ShortcodesBuilder.isCustomSuffix = "-c-"+vc.ShortcodesBuilder.randomString().substr(0,2);
						create_VC_fromString(real_v,false);
						vc.ShortcodesBuilder.isCustomSuffix = "";
						 //var model = vc.ShortcodesBuilder.last();
						 vc.ShortcodesBuilder.render(function(){
							 curr.removeClass("qfy-state-active").find(".tmp-drag-state").remove();
							 obj.remove();
							 vc.app.saveRowOrder(true);
						 });

					}
				})
				jQuery.post("/FeiEditor/siteEdit/add_a_record",{tag:tag})
			}else{
				jQuery.post("/FeiEditor/siteEdit/add_a_record",{tag:tag})
				vc.ShortcodesBuilder.isCustomSuffix = "-c-"+vc.ShortcodesBuilder.randomString().substr(0,2);
				create_VC_fromString(real_v,false);
				vc.ShortcodesBuilder.isCustomSuffix = "";
				  //var model = vc.ShortcodesBuilder.last();
				  //vc.ShortcodesBuilder.update(model);
				  vc.ShortcodesBuilder.render(function(){
					  curr.removeClass("qfy-state-active").find(".tmp-drag-state").remove();
					  obj.remove();
					  vc.app.saveRowOrder(true);
				  });

			}
		}
	}
}
function get_default_whlr( id,tag){
	var m_top = 0;
	var len =  iframeWin.jQuery("[data-model-id='"+id+"'] [data-model-id]").length ;
	m_top = 60*len;
	var default_width =400;
	var default_height = 150;
	var default_m_width = 270;
	var default_m_height = 150;
	if(tag=="vc_btn" || tag=="vc_jplayer"||tag=="vc_header" || tag=="vc_icon" || tag=="vc_column_search" || tag=="vc_column_breadcrumbs" ||tag=="list_menu_level"||tag=="vc_jplayer"||tag=="qfyshare"||tag=="qfyatt"||tag=="vc_flag_list"
		||tag=="Bit-progressbar"){
		default_height = default_m_height = 80;
	}else if(tag=="vc_raw_js" ||tag=="vc_notice" ||tag=="Bit-vc-counter"){
		default_width = 100;
		default_height = default_m_height = 40;
	}else if(tag=="vc_simple_header"){
		default_width = 600;
	}else if(tag=="vc_bit_qqmaps"){
		default_width = 400;
		default_height = 200;
		default_m_height = 200;
	}else if(tag=="vc_single_image"){
		default_height = 400;
	}else if(tag=="vc_column_text_image"){
		default_width =default_height = 300;
	}else if(tag=="Bit-VCSC-Circliful"){
		default_height = 260;
		default_m_height = 260;
	}else if(tag=="vc_gallery" || tag=="vc_posts_grid" || tag=="advanced_list"|| tag=="iphorm_vc" ||tag=="vc_bit_raw_video" ||tag=="Bit_HTML5_Video"||tag=="qfy_yun_video"||tag=="products_list"||tag=="product_page"
				||tag=="add_to_cart"||tag=="qfyuser"||tag=="comment" ||tag=="vc_column_text_images" || tag=="vc_column_text_sliders"){
		default_width = 400;
		default_height = 460;
	}else if(tag=="vc_column_text_dy_ulist"){
		default_width = 800;
		default_height = 600;
	}else if(tag=="vc_images_list" || tag=="vc_images_carousel"){
		default_width = 600;
		default_height = 200;
		default_m_height = 600;
	}
	var defaultparam = {"_left":rand(50,200),"_top":rand(50,100),"_width":default_width,"_height":default_height,"__left":0,"__top":m_top,"__width":default_m_width,"__height":default_m_height};
	return defaultparam;
}
/*default */
function create_VC_fromString(real_v,model,defaultparam){
	if(model!=false){
		vc_parent = model.toJSON();
		var new_data = vc.ShortcodesBuilder.parse({}, real_v,vc_parent);


	}else{
		var new_data = vc.ShortcodesBuilder.parse({}, real_v);
	}
	_.each(new_data, function(object){
		if(model!=false){
			if(!defaultparam){
				var id = model.get("id");
				if(iframeWin.jQuery("[data-model-id='"+id+"']").closest("section.section-special").length>0){
					defaultparam = get_default_whlr(id,object.shortcode);
				}
			}
			if(defaultparam){
				for (var key in defaultparam) {
					object.params[key] = defaultparam[key];
				}
			}
		}
		vc.ShortcodesBuilder.create(object);
	});
	vc.group=true;
}
function _get_shortcode_default_content(tag){
	var template_content= "";
	if(tag =="vc_column_text_dy_user"){
		template_content = '[vc_column_text_dy_user content_font="normal normal 14px/px |" customcontent="r1_sum" customprecontent="用户相关数据：" d_t="1" css_animation="" css_animation_delay="0" css_animation_time="0.7" css_animation_length="0" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" background_position_type="left top" background_position_vertical="0" bordercorner="0" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_fontcolor="" hover_linkcolor="" hover_iconcolor="" css_hoveranimation="" hover_anim="0" hover_time="0.5s" maxwidth="0" minheight="0" mobilefontsize="" margintop="0" marginbottom="0" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" ]&nbsp;[/vc_column_text_dy_user]';
	}else if(tag =="vc_column_text_dy_ulist"){
		template_content = '[vc_column_text_dy_ulist d_t="2" customcontent="r1_list" table_page="0" table_search="0" table_info="1" table_pagenav="1" table_order="1" table_page_length="20" table_odd_bg="#f9f9f9" table_even_bg="#fff" table_bordercolor="#ccc" table_h_padding="8px 10px" paddingtop="66" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" updateparamtime="1503395661473" table_font="微软雅黑" table_h_color="#333333" table_even_color="#999999" table_odd_color="#999999" table_up_color="#999999" table_down_color="#999999" table_up_fontsize="14" table_down_fontsize="14" table_h_fontsize="16" table_t_fontsize="14"]&nbsp;[/vc_column_text_dy_ulist]';
	}
	return template_content;
}
function createDefaultContentFromVC(tag,vc,obj)
{
	if(obj.model && obj.model.get("shortcode")=="vc_row_inner" && (vc.add_element_block_view.flag=="vc_row_inner_first"|| vc.add_element_block_view.flag=="vc_row_inner") ){
		  vc.ShortcodesBuilder.create({shortcode: 'vc_column_inner', parent_id: obj.model.get("id"), params: {width: '1/1'}});
		  obj.model = vc.ShortcodesBuilder.last();
		  if(vc.add_element_block_view.flag=="vc_row_inner_first"){
			 var order= 0;
			  var shortcode_first = vc.shortcodes.findWhere({parent_id: obj.model.get('parent_id')});
			  if(shortcode_first) order = shortcode_first.get('order') -1;
			  obj.model.save({'order':order}, {silent: true});
		  }
	 }


	var vc_row = "vc_row";
	var vc_column = "vc_column";

	if(obj.model && obj.model.get("shortcode") !="vc_column_inner"){
		vc_row = "vc_row_inner";
		vc_column = "vc_column_inner";
	}
	//常用组件
	if(tag.indexOf("vc_column_text_column_vc-")>-1){
		var text = "";
		jQuery.each(inline_custom_js,function(n,value) {
			if(value.id==tag){
				text = value.content;
			}
		});
		var host = "";
		var url = window.location.href;
		var regex = /.*\:\/\/([^\/|:]*).*/;
		var match = url.match(regex);
		if (typeof match != "undefined"&& null != match) {
			host = match[1];
		}
		if(text!=null && text.indexOf("|^^|")>-1 ){
			var tmparray = text.split("|^^|");
			var real_url = tmparray[0];
			tmparray.splice(0,1);
			real_v = tmparray.join("|^^|");
			if(real_url!=host){
				jQuery("#vc-add-element-dialog:visible .modal-content").prepend('<div class="modal-content-loading" style="height: 100%; text-align: center; position: absolute; width: 100%; background-color: rgb(255, 255, 255); z-index: 2; background-position: 50% center; opacity: 0.9; vertical-align: middle;"><span style="position:relative;top:40%;"><img src="http://fast.qifeiye.com/FeiEditor/bitSite/images/preloader.gif"><br/><b style="font-size:15px;">正在获取远程资源，请稍后...</b></span></div>');
				jQuery.post("/FeiEditor/siteEdit/change_vc_custom",{url:real_url,content:real_v},function(data){
					jQuery("#vc-add-element-dialog:visible .modal-content-loading").remove();
					if(data.indexOf("success|^^|")==0){
						var tmpdata = data.split("|^^|");
						tmpdata.splice(0,1);
						real_v = tmpdata.join("|^^|");
						create_VC_fromString(real_v,obj.model);
					}
					obj.$el.modal('hide');
				})
				jQuery.post("/FeiEditor/siteEdit/add_a_record",{tag:tag})
			}else{
				jQuery.post("/FeiEditor/siteEdit/add_a_record",{tag:tag})
				create_VC_fromString(real_v,obj.model);
				obj.$el.modal('hide');
			}
		}

		return ;
	}else if(tag=="vc_column_text_block_5"){
		var text = '['+vc_row+' id="bit_7goto" rowmaxwidth="1280"]['+vc_column+' width="1/1" align_sm="undefined"][vc_column_text d_t="1" css_animation="" css_animation_delay="0" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_fontcolor="" hover_linkcolor="" hover_iconcolor="" css_hoveranimation="" hover_anim="0" hover_time="0.5s" maxwidth="0" minheight="0" mobilefontsize=""]<div><h2><span style="font-size:18px;"><strong><span style="color: rgb(178, 34, 34);"></span></strong><a style="null" data-tooltip="off" class="bitIcon iconLeft" target="_blank"><b style="color: rgb(178, 34, 34); border: 0px none; font-size: 20px; border-radius: 0px;"> <i style="margin: 1px; top: 0px;" class="glyphicon glyphicon-icon-caret-right"> <span style="display: none; width: 0px;">&nbsp;</span> </i> </b><span style="font-size:14px;" class="iconText"></span></a><strong><span style="color: rgb(178, 34, 34);"> 核心价值观</span></strong></span></h2><hr style="border-width: 1px 0px 0px; border-style: solid; border-color: rgb(178, 34, 34); margin: 0px; padding: 0px; width: 90%; height: 1px; float: none; top: -13px;" class="bitLine" bitsize="90">		</div>[/vc_column_text][vc_column_text d_t="1" css_animation="" css_animation_delay="0" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_fontcolor="" hover_linkcolor="" hover_iconcolor="" css_hoveranimation="" hover_anim="0" hover_time="0.5s" maxwidth="0" minheight="0" mobilefontsize=""]<div><span style="color:#696969;">为客户服务是我们存在的唯一理由，客户需求是我们发展的原动力。我们坚持以客户为中心，快速响应客户需求，持续为客户创造长期价值进而成就客户。为客户提供有效服务，是我们工作的方向和价值评价的标尺，成就客户就是成就我们自己。</span></div>[/vc_column_text][/'+vc_column+'][/'+vc_row+']';
		if(obj.model && obj.model.get("shortcode") =="vc_column_inner"){
			var p1 = vc.shortcodes.get(obj.model.get("parent_id"));
			var p2 = vc.shortcodes.get(p1.get("parent_id"));
			var p3 = vc.shortcodes.get(p2.get("parent_id"));
			p3.view.$el.addClass('vc-place-after');
			vc.add_element_block_view.after = true;
			create_VC_fromString(text,false);
		}else{
			create_VC_fromString(text,obj.model);
		}
		obj.$el.modal('hide');
		return ;
	}else if(tag.indexOf("vc_column_text_viewtemplate_")>-1 || tag =="vc_column_text_dy_user" || tag =="vc_column_text_dy_ulist"){
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
		}else if(tag=="vc_column_text_viewtemplate_17"){
			template_content = '[vc_column_text_view content_font="normal normal 14px/px |" customcontent="post_from" customprecontent="文章来源：" d_t="1" css_animation="" css_animation_delay="0" css_animation_time="0.7" css_animation_length="0" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" background_position_type="left top" background_position_vertical="0" bordercorner="0" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_fontcolor="" hover_linkcolor="" hover_iconcolor="" css_hoveranimation="" hover_anim="0" hover_time="0.5s" maxwidth="0" minheight="0" mobilefontsize="" margintop="0" marginbottom="0" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" ]&nbsp;[/vc_column_text_view]';
		}else if(tag=="vc_column_text_viewtemplate_18"){
			template_content = '[vc_column_text_video d_t="1"  video_type=""  video_fullscreen="false" video_auto="false" ispopup="0" video_theme="maccaco" video_poster="" video_bgcolor="#fff" video_height="300" el_class="" margintop="0" marginbottom="0" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" isbgcover="1" video_fullfill="true"]';
		}else if(tag.indexOf("vc_column_text_viewtemplate_")>-1){
			var li = obj.control.closest("li");
			var slug = li.attr("data-slug");
			var slugtype = li.attr("data-slugtype");
			var name = jQuery.trim(li.find(".overlay_name").text());

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
				template_content = '[vc_column_text_video d_t="1" customprecontent_slug="'+slug+'" extra_video="1" video_type=""  video_fullscreen="false" video_auto="false" ispopup="0" video_theme="maccaco" video_poster="" video_bgcolor="#fff" video_height="300" el_class="" margintop="0" marginbottom="0" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" isbgcover="1" video_fullfill="true"]';
			}else{
				template_content = '[vc_column_text_view customcontent="custom" customprecontent_slug="'+slug+'" customprecontent_slugtype="'+slugtype+'" customprecontent="'+name+':" customprecontent_default="'+name+'"  content_font="normal normal 14px/px |" d_t="1" css_animation="" css_animation_delay="0" css_animation_time="0.7" css_animation_length="0" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" background_position_type="left top" background_position_vertical="0" bordercorner="0" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_fontcolor="" hover_linkcolor="" hover_iconcolor="" css_hoveranimation="" hover_anim="0" hover_time="0.5s" maxwidth="0" minheight="0" mobilefontsize="" margintop="0" marginbottom="0" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" ]&nbsp;[/vc_column_text_view]';
			}
		}else if(tag =="vc_column_text_dy_user" || tag =="vc_column_text_dy_ulist"){
			template_content = _get_shortcode_default_content(tag);
		}

		var text = '['+vc_row+' id="bit_'+vc.ShortcodesBuilder.randomString()+'" rowmaxwidth="1280"]['+vc_column+' width="1/1" ]'+template_content+'[/'+vc_column+'][/'+vc_row+']';
		if(obj.model ){
			create_VC_fromString(template_content,obj.model);
		}else{
			create_VC_fromString(text,false);
		}
		obj.$el.modal('hide');
		return ;
		//自定义文本组件
	}else if(tag=="vc_column_text_block_new1"){
		var text = '['+vc_row+' background_is_extend="0" rowmaxwidth="1280" color="#000000" overlay_colour="#ffffff" overlay_opacity="0.5" overlay_grid="0" full="no" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" display_entire="0" minheight="0" height="normal" margintop="0" marginbottom="0" paddingleft="0" paddingright="0" paddingtop="20" paddingbottom="0" display_device="0" z_index="0" updateparamtime="" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]['+vc_column+' width="1/1" align_sm="" minheight="0" d_t="4" align="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="0" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="0" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0" updateparamtime="1454558210031"][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="full" img_size_fun="0" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_bigimage.jpg" link_html_type="0" updateparamtime="1454567963397" paddingtop="5" paddingbottom="5"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" bg_color="transparent" paddingbottom="5" updateparamtime="1454556733333" paddingtop="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="color:#696969;"><strong><span style="font-family: 微软雅黑;"><span style="font-size: 18px;">点击修改标题</span></span></strong></span></div></div>[/vc_column_text][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454556741453" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:14px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容，您可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。</span></span></span></div></div>[/vc_column_text][/'+vc_column+'][/'+vc_row+']';
		if(obj.model && obj.model.get("shortcode") =="vc_column_inner"){
			var p1 = vc.shortcodes.get(obj.model.get("parent_id"));
			var p2 = vc.shortcodes.get(p1.get("parent_id"));
			var p3 = vc.shortcodes.get(p2.get("parent_id"));
			p3.view.$el.addClass('vc-place-after');
			vc.add_element_block_view.after = true;
			create_VC_fromString(text,false);
		}else{
			create_VC_fromString(text,obj.model);
		}
		obj.$el.modal('hide');
		return ;
	}else if(tag=="vc_column_text_block_new2"){
		var text = '['+vc_row+'  d_t="4" rowmaxwidth="1280" background_is_extend="0" color="#000000" overlay_colour="#ffffff" overlay_opacity="0.5" overlay_grid="0" full="no" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" display_entire="0" minheight="0" height="normal" margintop="0" marginbottom="0" paddingleft="0" paddingright="0" paddingtop="20" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454557779761" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]['+vc_column+' width="1/2" align_sm="undefined" minheight="0" d_t="4" align="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="550" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="5" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558126364" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="full" img_size_fun="0" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_middle.jpg" link_html_type="0" updateparamtime="1454568125456" paddingtop="5" paddingbottom="5"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454556741453" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:14px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容，您可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。</span></span></span></div></div>[/vc_column_text][/'+vc_column+']['+vc_column+' width="1/2" minheight="0" d_t="4" align="Default" align_sm="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="550" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="5" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558067193" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="full" img_size_fun="0" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_middle.jpg" link_html_type="0" updateparamtime="1454568131289" paddingtop="5" paddingbottom="5"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454556741453" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:14px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容，您可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。</span></span></span></div></div>[/vc_column_text][/'+vc_column+'][/'+vc_row+']';
		if(obj.model && obj.model.get("shortcode") =="vc_column_inner"){
			var p1 = vc.shortcodes.get(obj.model.get("parent_id"));
			var p2 = vc.shortcodes.get(p1.get("parent_id"));
			var p3 = vc.shortcodes.get(p2.get("parent_id"));
			p3.view.$el.addClass('vc-place-after');
			vc.add_element_block_view.after = true;
			create_VC_fromString(text,false);
		}else{
			create_VC_fromString(text,obj.model);
		}
		obj.$el.modal('hide');
		return ;
	}else if(tag=="vc_column_text_block_new3"){
		var text = '['+vc_row+'  d_t="4" rowmaxwidth="1280" background_is_extend="0" color="#000000" overlay_colour="#ffffff" overlay_opacity="0.5" overlay_grid="0" full="no" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" display_entire="0" minheight="0" height="normal" margintop="0" marginbottom="0" paddingleft="0" paddingright="0" paddingtop="20" paddingbottom="0" display_device="0" z_index="0" updateparamtime="" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]['+vc_column+' width="1/2" align_sm="" minheight="0" d_t="4" align="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="550" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="5" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" bg_color="transparent" paddingbottom="5" updateparamtime="1454556733333" paddingtop="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="color:#696969;"><strong><span style="font-family: 微软雅黑;"><span style="font-size: 18px;">点击修改标题</span></span></strong></span></div></div>[/vc_column_text][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="full" img_size_fun="0" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_middle.jpg" link_html_type="0" updateparamtime="1454568005235" paddingtop="5" paddingbottom="5"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454556741453" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:14px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容，您可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。</span></span></span></div></div>[/vc_column_text][/'+vc_column+']['+vc_column+' width="1/2" minheight="0" d_t="4" align="Default" align_sm="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="550" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="5" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558067193" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" bg_color="transparent" paddingbottom="5" updateparamtime="1454556733333" paddingtop="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="color:#696969;"><strong><span style="font-family: 微软雅黑;"><span style="font-size: 18px;">点击修改标题</span></span></strong></span></div></div>[/vc_column_text][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="full" img_size_fun="0" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_middle.jpg" link_html_type="0" updateparamtime="1454568005235" paddingtop="5" paddingbottom="5"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454556741453" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:14px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容，您可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。</span></span></span></div></div>[/vc_column_text][/'+vc_column+'][/'+vc_row+']';
		if(obj.model && obj.model.get("shortcode") =="vc_column_inner"){
			var p1 = vc.shortcodes.get(obj.model.get("parent_id"));
			var p2 = vc.shortcodes.get(p1.get("parent_id"));
			var p3 = vc.shortcodes.get(p2.get("parent_id"));
			p3.view.$el.addClass('vc-place-after');
			vc.add_element_block_view.after = true;
			create_VC_fromString(text,false);
		}else{
			create_VC_fromString(text,obj.model);
		}
		obj.$el.modal('hide');
		return ;
	}else if(tag=="vc_column_text_block_new4"){
		var text = '['+vc_row+'  d_t="4" rowmaxwidth="1280" background_is_extend="0" color="#000000" overlay_colour="#ffffff" overlay_opacity="0.5" overlay_grid="0" full="no" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" display_entire="0" minheight="0" height="normal" marginbottom="0" paddingleft="0" paddingright="0" paddingtop="20" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558417081" margintop="0" box_border_settings="0|^|0|^|#c1c1c1|^|0|^|0|^|#ffffff|^|0|^|0|^|#ffffff|^|0|^|0|^|#ffffff|^|0"]['+vc_column+' width="1/3" align_sm="undefined" d_t="4" align="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="350" minheight="0" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="0" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558642649" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="full" img_size_fun="0" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_middle2.jpg" link_html_type="0" updateparamtime="1454568109432" paddingtop="5" paddingbottom="5"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454556741453" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:12px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标按钮图片等常用元素。</span></span></span></div></div>[/vc_column_text][/'+vc_column+']['+vc_column+' width="1/3" d_t="4" align="Default" align_sm="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="350" minheight="0" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="0" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558635836" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="full" img_size_fun="0" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_middle2.jpg" link_html_type="0" updateparamtime="1454568090366" paddingtop="5" paddingbottom="5"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454556741453" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:12px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标按钮图片等常用元素。</span></span></span></div></div>[/vc_column_text][/'+vc_column+']['+vc_column+' width="1/3" d_t="4" align="Default" align_sm="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="350" minheight="0" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="0" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558589979" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="full" img_size_fun="0" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_middle2.jpg" link_html_type="0" updateparamtime="1454568101302" paddingtop="5" paddingbottom="5"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454556741453" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:12px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标按钮图片等常用元素。</span></span></span></div></div>[/vc_column_text][/'+vc_column+'][/'+vc_row+']';
		if(obj.model && obj.model.get("shortcode") =="vc_column_inner"){
			var p1 = vc.shortcodes.get(obj.model.get("parent_id"));
			var p2 = vc.shortcodes.get(p1.get("parent_id"));
			var p3 = vc.shortcodes.get(p2.get("parent_id"));
			p3.view.$el.addClass('vc-place-after');
			vc.add_element_block_view.after = true;
			create_VC_fromString(text,false);
		}else{
			create_VC_fromString(text,obj.model);
		}
		obj.$el.modal('hide');
		return ;
	}else if(tag=="vc_column_text_block_new5"){
		var text = '['+vc_row+'  d_t="4" rowmaxwidth="1280" background_is_extend="0" color="#000000" overlay_colour="#ffffff" overlay_opacity="0.5" overlay_grid="0" full="no" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" display_entire="0" minheight="0" height="normal" marginbottom="0" paddingleft="0" paddingright="0" paddingtop="20" paddingbottom="0" display_device="0" z_index="0" updateparamtime="" margintop="0" box_border_settings="0|^|0|^|#c1c1c1|^|0|^|0|^|#ffffff|^|0|^|0|^|#ffffff|^|0|^|0|^|#ffffff|^|0"]['+vc_column+' width="1/3" align_sm="" d_t="4" align="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="350" minheight="0" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="0" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" bg_color="transparent" paddingbottom="5" updateparamtime="1454556733333" paddingtop="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div style="text-align: center;"><span style="font-size:16px;"><span style="color: rgb(105, 105, 105);"><strong><span style="font-family: 微软雅黑;">点击修改标题</span></strong></span></span></div></div>[/vc_column_text][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="full" img_size_fun="0" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_middle2.jpg" link_html_type="0" updateparamtime="1454568046186" paddingtop="5" paddingbottom="5"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454556741453" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:12px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标按钮图片等常用元素。</span></span></span></div></div>[/vc_column_text][/'+vc_column+']['+vc_column+' width="1/3" d_t="4" align="Default" align_sm="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="350" minheight="0" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="0" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558635836" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" bg_color="transparent" paddingbottom="5" updateparamtime="1454556733333" paddingtop="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div style="text-align: center;"><span style="font-size:16px;"><span style="color: rgb(105, 105, 105);"><strong><span style="font-family: 微软雅黑;">点击修改标题</span></strong></span></span></div></div>[/vc_column_text][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="full" img_size_fun="0" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_middle2.jpg" link_html_type="0" updateparamtime="1454568046186" paddingtop="5" paddingbottom="5"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454556741453" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:12px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标按钮图片等常用元素。</span></span></span></div></div>[/vc_column_text][/'+vc_column+']['+vc_column+' width="1/3" d_t="4" align="Default" align_sm="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="350" minheight="0" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="0" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558589979" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" bg_color="transparent" paddingbottom="5" updateparamtime="1454556733333" paddingtop="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div style="text-align: center;"><span style="font-size:16px;"><span style="color: rgb(105, 105, 105);"><strong><span style="font-family: 微软雅黑;">点击修改标题</span></strong></span></span></div></div>[/vc_column_text][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="full" img_size_fun="0" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_middle2.jpg" link_html_type="0" updateparamtime="1454568046186" paddingtop="5" paddingbottom="5"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454556741453" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:12px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标按钮图片等常用元素。</span></span></span></div></div>[/vc_column_text][/'+vc_column+'][/'+vc_row+']';
		if(obj.model && obj.model.get("shortcode") =="vc_column_inner"){
			var p1 = vc.shortcodes.get(obj.model.get("parent_id"));
			var p2 = vc.shortcodes.get(p1.get("parent_id"));
			var p3 = vc.shortcodes.get(p2.get("parent_id"));
			p3.view.$el.addClass('vc-place-after');
			vc.add_element_block_view.after = true;
			create_VC_fromString(text,false);
		}else{
			create_VC_fromString(text,obj.model);
		}
		obj.$el.modal('hide');
		return ;
	}else if(tag=="vc_column_text_block_new6"){
		var text = '['+vc_row+'  d_t="4" rowmaxwidth="1280" background_is_extend="0" color="#000000" overlay_colour="#ffffff" overlay_opacity="0.5" overlay_grid="0" full="no" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" display_entire="0" minheight="0" height="normal" marginbottom="0" paddingleft="0" paddingright="0" paddingtop="20" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558417081" margintop="0" box_border_settings="0|^|0|^|#c1c1c1|^|0|^|0|^|#ffffff|^|0|^|0|^|#ffffff|^|0|^|0|^|#ffffff|^|0"]['+vc_column+' width="1/4" align_sm="undefined" d_t="4" align="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="280" minheight="0" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="0" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558642649" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="full" img_size_fun="0" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_thumb.jpg" link_html_type="0" paddingtop="5" paddingbottom="5" updateparamtime="1454568286446"][/'+vc_column+']['+vc_column+' width="1/4"  d_t="4" align="Default" align_sm="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="280" minheight="0" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="0" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558635836" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="full" img_size_fun="0" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_thumb.jpg" link_html_type="0" paddingtop="5" paddingbottom="5" updateparamtime="1454568278201"][/'+vc_column+']['+vc_column+' width="1/4" maxwidth="280"][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="full" img_size_fun="0" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_thumb.jpg" link_html_type="0" paddingtop="5" paddingbottom="5" updateparamtime="1454568269968"][/'+vc_column+']['+vc_column+' width="1/4" maxwidth="280"][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="full" img_size_fun="0" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_thumb.jpg" link_html_type="0" paddingtop="5" paddingbottom="5" updateparamtime="1454568261305"][/'+vc_column+'][/'+vc_row+']';
		if(obj.model && obj.model.get("shortcode") =="vc_column_inner"){
			var p1 = vc.shortcodes.get(obj.model.get("parent_id"));
			var p2 = vc.shortcodes.get(p1.get("parent_id"));
			var p3 = vc.shortcodes.get(p2.get("parent_id"));
			p3.view.$el.addClass('vc-place-after');
			vc.add_element_block_view.after = true;
			create_VC_fromString(text,false);
		}else{
			create_VC_fromString(text,obj.model);
		}
		obj.$el.modal('hide');
		return ;
	}else if(tag=="vc_column_text_block_new7"){
		var text = '['+vc_row+'  d_t="4" rowmaxwidth="1280" background_is_extend="0" color="#000000" overlay_colour="#ffffff" overlay_opacity="0.5" overlay_grid="0" full="no" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" display_entire="0" minheight="0" height="normal" marginbottom="0" paddingleft="0" paddingright="0" paddingtop="20" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558417081" margintop="0" box_border_settings="0|^|0|^|#c1c1c1|^|0|^|0|^|#ffffff|^|0|^|0|^|#ffffff|^|0|^|0|^|#ffffff|^|0"]['+vc_column+' width="1/4" align_sm="undefined" d_t="4" align="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="280" minheight="0" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="0" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558642649" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="full" img_size_fun="0" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_thumb.jpg" link_html_type="0" paddingtop="5" paddingbottom="5" updateparamtime="1454568213289"][vc_column_text d_t="6" line_height="1.3" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454559299867" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:12px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span></span></span></div></div>[/vc_column_text][/'+vc_column+']['+vc_column+' width="1/4" d_t="4" align="Default" align_sm="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="280" minheight="0" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="0" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558635836" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="full" img_size_fun="0" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_thumb.jpg" link_html_type="0" paddingtop="5" paddingbottom="5" updateparamtime="1454568221812"][vc_column_text d_t="6" line_height="1.3" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454559309094" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:12px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span></span></span></div></div>[/vc_column_text][/'+vc_column+']['+vc_column+' width="1/4" maxwidth="280"][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="full" img_size_fun="0" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_thumb.jpg" link_html_type="0" paddingtop="5" paddingbottom="5" updateparamtime="1454568230388"][vc_column_text d_t="7" line_height="1.3" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454559317783" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:12px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span></span></span></div></div>[/vc_column_text][/'+vc_column+']['+vc_column+' width="1/4" maxwidth="280"][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="full" img_size_fun="0" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_thumb.jpg" link_html_type="0" paddingtop="5" paddingbottom="5" updateparamtime="1454568238893"][vc_column_text d_t="6" line_height="1.3" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454559325797" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:12px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span></span></span></div></div>[/vc_column_text][/'+vc_column+'][/'+vc_row+']';
		if(obj.model && obj.model.get("shortcode") =="vc_column_inner"){
			var p1 = vc.shortcodes.get(obj.model.get("parent_id"));
			var p2 = vc.shortcodes.get(p1.get("parent_id"));
			var p3 = vc.shortcodes.get(p2.get("parent_id"));
			p3.view.$el.addClass('vc-place-after');
			vc.add_element_block_view.after = true;
			create_VC_fromString(text,false);
		}else{
			create_VC_fromString(text,obj.model);
		}
		obj.$el.modal('hide');
		return ;
	}else if(tag=="vc_column_text_block_new8"){
		var text = '['+vc_row+'  d_t="4" rowmaxwidth="1280" background_is_extend="0" color="#000000" overlay_colour="#ffffff" overlay_opacity="0.5" overlay_grid="0" full="no" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" display_entire="0" minheight="0" height="normal" marginbottom="0" paddingleft="0" paddingright="0" paddingtop="20" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558417081" margintop="0" box_border_settings="0|^|0|^|#c1c1c1|^|0|^|0|^|#ffffff|^|0|^|0|^|#ffffff|^|0|^|0|^|#ffffff|^|0"]['+vc_column+' width="1/4" align_sm="undefined" d_t="4" align="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="280" minheight="0" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="0" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558642649" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" bg_color="transparent" paddingbottom="5" updateparamtime="1454556733333" paddingtop="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div style="text-align: center;"><span style="font-size:16px;"><span style="color: rgb(105, 105, 105);"><strong><span style="font-family: 微软雅黑;">点击修改标题</span></strong></span></span></div></div>[/vc_column_text][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="full" img_size_fun="0" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_thumb.jpg" link_html_type="0" paddingtop="5" paddingbottom="5" updateparamtime="1454568164598"][vc_column_text d_t="6" line_height="1.3" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454559299867" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:12px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span></span></span></div></div>[/vc_column_text][/'+vc_column+']['+vc_column+' width="1/4" d_t="4" align="Default" align_sm="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="280" minheight="0" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="0" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558635836" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" bg_color="transparent" paddingbottom="5" updateparamtime="1454556733333" paddingtop="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div style="text-align: center;"><span style="font-size:16px;"><span style="color: rgb(105, 105, 105);"><strong><span style="font-family: 微软雅黑;">点击修改标题</span></strong></span></span></div></div>[/vc_column_text][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="full" img_size_fun="0" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_thumb.jpg" link_html_type="0" paddingtop="5" paddingbottom="5" updateparamtime="1454568174474"][vc_column_text d_t="6" line_height="1.3" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454559309094" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:12px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span></span></span></div></div>[/vc_column_text][/'+vc_column+']['+vc_column+' width="1/4" maxwidth="280"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" bg_color="transparent" paddingbottom="5" updateparamtime="1454556733333" paddingtop="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div style="text-align: center;"><span style="font-size:16px;"><span style="color: rgb(105, 105, 105);"><strong><span style="font-family: 微软雅黑;">点击修改标题</span></strong></span></span></div></div>[/vc_column_text][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="full" img_size_fun="0" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_thumb.jpg" link_html_type="0" paddingtop="5" paddingbottom="5" updateparamtime="1454568181319"][vc_column_text d_t="7" line_height="1.3" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454559317783" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:12px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span></span></span></div></div>[/vc_column_text][/'+vc_column+']['+vc_column+' width="1/4" maxwidth="280"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" bg_color="transparent" paddingbottom="5" updateparamtime="1454556733333" paddingtop="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div style="text-align: center;"><span style="font-size:16px;"><span style="color: rgb(105, 105, 105);"><strong><span style="font-family: 微软雅黑;">点击修改标题</span></strong></span></span></div></div>[/vc_column_text][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="full" img_size_fun="0" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_thumb.jpg" link_html_type="0" paddingtop="5" paddingbottom="5" updateparamtime="1454568188795"][vc_column_text d_t="6" line_height="1.3" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454559325797" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:12px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span></span></span></div></div>[/vc_column_text][/'+vc_column+'][/'+vc_row+']'
		if(obj.model && obj.model.get("shortcode") =="vc_column_inner"){
			var p1 = vc.shortcodes.get(obj.model.get("parent_id"));
			var p2 = vc.shortcodes.get(p1.get("parent_id"));
			var p3 = vc.shortcodes.get(p2.get("parent_id"));
			p3.view.$el.addClass('vc-place-after');
			vc.add_element_block_view.after = true;
			create_VC_fromString(text,false);
		}else{
			create_VC_fromString(text,obj.model);
		}
		obj.$el.modal('hide');
		return ;

	}else if(tag=="vc_column_text_column_blank_special"){
		var text = '['+vc_row+' d_t="4" rowmaxwidth="1280" minheight="600" mobile_minheight="600" special="1" background_is_extend="0" color="#000000" overlay_colour="#ffffff" overlay_opacity="0.5" overlay_grid="0" full="yes" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" display_entire="0" height="normal" margintop="0" marginbottom="0" paddingleft="0" paddingright="0" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454557779761" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]['+vc_column+' width="1/1" d_t="4" align="Default"][/'+vc_column+'][/'+vc_row+']';
		create_VC_fromString(text,obj.model);
		obj.$el.modal('hide');
		return ;
	}else if(tag=="vc_column_text_notice3"){
		var text = '['+vc_row+' paddingtop="0"]['+vc_column+' width="1/1"][vc_notice d_t="1" type="0" optcolor="#000" opt="0.7" align="0" width="600" height="400" mobilewidth="280" mobileheight="250" screenpadding="20" animale="0" animale_time="1" showtimes="3" event="0" device="0" event_delay="0" closetime="0" contenttype="0" bgcolor="#ffffff" bordercolor="transparent" borderwidth="0" shadowwidth="0" shadowcolor="#ccc" radius="0" header_show="0" header_bgcolor="#333333" header_bordercolor="#333333" header_borderwidth="0" header_title="标题" header_color="#fff" header_size="16" header_padding="10px 0px 10px 10px" footer_show="0" footer_bgcolor="#eaeaea" footer_bordercolor="#cccccc" footer_borderwidth="1px 0px 0px 0px" footer_padding="10" btn1_align="right" allow_close="0" closetype="0" closeicon="4" btn_color="#dbdbdb" btn_hovercolor="#ffffff" btn_align="0" btn_position="10" btn_position_x="-10" btn_size="15" btn_padding="5" allow_forceclose="0" btn1_text="确认" btn1_color="#fff" btn1_hovercolor="#fff" btn1_bgcolor="#555555" btn1_bghovercolor="#333333" btn1_marginleft="0" btn1_size="14" btn1_padding="5px 10px 5px 10px" btn1_forceclose="0" btn2_text="取消" btn2_color="#444" btn2_hovercolor="#555555" btn2_bgcolor="#c4c4c4" btn2_bghovercolor="#b7b7b7" btn2_marginleft="10" btn2_size="14" btn2_padding="5px 10px 5px 10px" btn2_forceclose="1" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" qfyuuid="qfy_notice_'+vc.ShortcodesBuilder.randomString()+'" updateparamtime="1479972483590" btn2_warninfo="不能取消，只能接受" ]<div style="padding:20px;text-align:center;">这是一个弹框通知！</div>[/vc_notice][/'+vc_column+'][/'+vc_row+']';
		if(obj.model && obj.model.get("shortcode") =="vc_column_inner"){
			var p1 = vc.shortcodes.get(obj.model.get("parent_id"));
			var p2 = vc.shortcodes.get(p1.get("parent_id"));
			var p3 = vc.shortcodes.get(p2.get("parent_id"));
			p3.view.$el.addClass('vc-place-after');
			vc.add_element_block_view.after = true;
			create_VC_fromString(text,false);
		}else{
			create_VC_fromString(text,obj.model);
		}
		obj.$el.modal('hide');
		return ;
	}

	var old_tag = tag;
	var pid = 0;
	if(old_tag.indexOf("vc_column_text_custom_")>-1 ){
		var id = old_tag.replace("vc_column_text_custom_","");
		pid = top.jQuery("#pageUrl").val();
		top.jQuery("#vc-preloader").show();
		jQuery.post("/FeiEditor/siteEdit/addBitTemplate",{pid:pid,customId:id},function(data){
			if(data=="success"){
				location.reload();
			}else{
				top.jQuery("#vc-preloader").hide();
			}
		})

	}else if(old_tag.indexOf("vc_column_text_postlist_")>-1 || old_tag.indexOf("vc_column_text_postsliderlist_")>-1 || old_tag.indexOf("vc_column_text_advancedlist_")>-1){
		//not create
	}else {
		if(obj.model==false){
			if(old_tag=="vc_column_text_block_1" || old_tag.indexOf("vc_column_text_shop_")>-1 || old_tag.indexOf("vc_column_text_feature_")>-1|| old_tag.indexOf("vc_column_text_service_")>-1|| old_tag.indexOf("vc_column_text_team_")>-1|| old_tag.indexOf("vc_column_text_time_")>-1|| old_tag.indexOf("vc_column_text_process_bar_")>-1){
				vc.ShortcodesBuilder.create({shortcode: 'vc_row', params: {rowmaxwidth: "1280"}});
			}else if(old_tag=="vc_column_text_column_blank_1"){
				vc.ShortcodesBuilder.create({shortcode: 'vc_row', params: {rowmaxwidth: "1280",full:"yes"}});
			}else{
				vc.ShortcodesBuilder.create({shortcode: 'vc_row'});
			}
			pid = vc.ShortcodesBuilder.lastID();
		}
	}


	if(old_tag=="vc_column_text_column_blank_1-1" || old_tag=="vc_column_text_column_blank" || old_tag=="vc_column_text_column_blank_1"){
		createVCColumn(vc,pid,"1/1",obj);
	}else if(old_tag=="vc_column_text_column_blank_1-2_1-2"){
		createVCColumn(vc,pid,"1/2",obj);
		createVCColumn(vc,pid,"1/2",obj);
		vc.group=true;
	}else if(old_tag=="vc_column_text_column_blank_1-3_1-3_1-3"){
		createVCColumn(vc,pid,"1/3",obj);
		createVCColumn(vc,pid,"1/3",obj);
		createVCColumn(vc,pid,"1/3",obj);
		vc.group=true;
	}else if(old_tag=="vc_column_text_column_blank_1-4_1-4_1-4_1-4"){
		createVCColumn(vc,pid,"1/4",obj);
		createVCColumn(vc,pid,"1/4",obj);
		createVCColumn(vc,pid,"1/4",obj);
		createVCColumn(vc,pid,"1/4",obj);
		vc.group=true;

	}else if(old_tag=="vc_column_text_image_1"){
		var cid = createVCColumn(vc,pid,"1/1",obj);
		createComplexVCImageElement(cid, obj, "http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo.jpg", "center", "", null, null);
	}else if(old_tag=="vc_column_text_block_1"){
		var cid = createVCColumn(vc,pid,"1/1",obj);
		createVCElement("vc_column_text","vc_column_text_block_1",cid,obj);
	}else if(old_tag.indexOf("vc_column_text_postlist_")>-1){
		postListToEditor(vc,0,obj,old_tag,"postlist");
	}else if(old_tag.indexOf("vc_column_text_postsliderlist_")>-1){
		postListToEditor(vc,0,obj,old_tag,"silider");
	}else if(old_tag.indexOf("vc_column_text_advancedlist_")>-1){
		postListToEditor(vc,0,obj,old_tag,"advanced");
	}else if(old_tag.indexOf("vc_column_text_user_")>-1){
		var cid = createVCColumn(vc,pid,"1/1",obj);
		createVCElement("qfyuser",old_tag,cid,obj);
	}else if(old_tag.indexOf("vc_column_text_shop_")>-1){
		var cid = createVCColumn(vc,pid,"1/1",obj);
		if(old_tag=="vc_column_text_shop_1"){
			createVCElement("product_page",old_tag,cid,obj);
		}else if(old_tag=="vc_column_text_shop_2"){
			createVCElement("products_list",old_tag,cid,obj);
		}else if(old_tag=="vc_column_text_shop_3"){
			createVCElement("add_to_cart",old_tag,cid,obj);
		}
	}else if(old_tag.indexOf("vc_column_text_header_")>-1){
		var cid = createVCColumn(vc,pid,"1/1",obj);
		createVCElement("vc_header",old_tag,cid,obj);

	}
	obj.$el.modal('hide');

}

function vc_column_text_postlist(tag,param){
	var element_string = '';
	if(tag=="vc_column_text_postlist_1"){
		element_string ='subtitle_font="14" d_t="1" post_style_category="post_blog" post_type="post" page_categories="0" post_categories="0" size="10" order_by="date" order="DESC" grid_columns_count="1" grid_link_target="_self" grid_layout="image|link_post,text|excerpt,title|link_post,link" post_title_color="#373A41" post_comment_color="#686868" post_content_color="#494e56" post_link_color="#1e73be" post_title_font="24" post_comment_font="12" post_content_font="12" post_margin_size="15" grid_thumb_size="200x133" grid_thumb_valign="top" grid_thumb_style="vc_box_outline" grid_thumb_border_color="#cccccc" grid_thumb_shadow_color="#cccccc" grid_thumb_shadow_style="0" grid_thumb_shadow_size="1" grid_thumb_rounded_size="4" post_icon_show="1" post_icon_style="glyphicon glyphicon-expand" post_icon_color="#cccccc" post_icon_font="8" post_icon_margin_left="0" post_icon_margin_top="0" post_date_show="1" post_category_show="0" post_date_format="Y-m-d" post_date_align="right" grid_pagenav_show="1" grid_pagenav_style="1" grid_pagenav_position="0" grid_pagenav_bgcolor="#595959" grid_pagenav_color="#595959" grid_pagenav_hcolor="#fff" grid_pagenav_font="14" post_border_show="1" post_border_color="#e5e5e5" post_border_style="solid" width="1/1" frame_set="bg_color=&bg_titleimg=&bg_titleimg_repeat=no-repeat&bg_img=&bg_img_repeat=no-repeat&frame_style=0&frame_type=1&frame_select_style=0&frame_header_bg_color=&frame_header_color=&frame_border_color=&frame_selected=1&frame_active=0&widgetTitleFont=黑体&widgetTitleFontSize=16&widgetTitleFontSize=16&titleFontWeight=0&titleFontIn=0&titleFontUnderline=0&widgetShadow=0&widgetShadowStyle=0&widgetShadowSize=1&widgetShadowColor=" post_morelink_show="1" post_morelink_name="更多新闻" post_morelink_font="12" post_morelink_color="#ffffff" post_morelink_url_is_cate="1" ';
	}

	if(param===false){
		element_string = element_string.replace('post_type="post" page_categories="0" post_categories="0"','');
		element_string = element_string.replace('size="4"','');
		element_string = element_string.replace('size="5','');
		element_string = element_string.replace('size="6"','');
		element_string = element_string.replace('size="10"','');
		return element_string;
	}

	var arr = element_string.split('" ');
	jQuery.each(arr,function(n,value) {
       var tmp = value.split('="');
		if(tmp.length>1){
			var name = tmp[0];
			var v = tmp[1];
			param[name] = v;
		}
	});


	return param;
}
function vc_column_text_postsliderlist(tag,param){
	var element_string = '';
	if(tag=="vc_column_text_postsliderlist_1"){
		element_string ='d_t="2" post_type="post" size="10" slides_per_view="4" slides_per_view_row="1" order_by="date" order="ASC" post_categories="0" page_categories="0" pro_categories="0" link_target="_self" grid_layout="image|link_post,title|link_post" post_title_color="#373a41" post_comment_color="#cccccc" post_content_color="#333333" post_link_color="#7bcd40" post_title_font="12" post_comment_font="14" post_content_font="16" post_date_show="0" post_date_format="Y-m-d" post_category_show="0" grid_thumb_style="vc_box_outline" grid_thumb_border_color="#d8d8d8" grid_thumb_shadow_color="#cccccc" grid_thumb_shadow_style="0" grid_thumb_shadow_size="1" grid_thumb_rounded_size="4" speed="5000" post_margin_size="30" wrap="yes" post_morelink_show=0" post_morelink_name="更多" post_morelink_font="40" post_morelink_color="#cccccc" post_morelink_url_is_cate="0" thumb_size="170x170" frame_set="bg_color=&bg_titleimg=&bg_titleimg_repeat=no-repeat&bg_img=&bg_img_repeat=no-repeat&frame_style=0&frame_type=1&frame_select_style=0&frame_header_bg_color=&frame_header_color=&frame_border_color=&frame_selected=1&frame_active=0&widgetTitleFont=黑体&widgetTitleFontSize=16&widgetTitleFontSize=16&titleFontWeight=0&titleFontIn=0&titleFontUnderline=0&widgetShadow=0&widgetShadowStyle=0&widgetShadowSize=1&widgetShadowColor=&frame_header_height=28" hide_pagination_control="yes" ';
	}

	var arr = element_string.split('" ');
	jQuery.each(arr,function(n,value) {
       var tmp = value.split('="');
		if(tmp.length>1){
			var name = tmp[0];
			var v = tmp[1];
			param[name] = v;
		}
	});
	return param;
}
function vc_column_text_advancedlist(tag,param){
	var element_string = '';
	if(tag=="vc_column_text_advancedlist_1"){
		element_string ='d_t="3" post_style_category="list-style1" regular_price_font="12" sale_price_font="12" grid_columns_count="3" grid_thumb_size="600x400" post_type="post" page_categories="0" post_categories="0" pro_categories="0" order_by="date" order="ASC" size="10" grid_link_target="_self" grid_layout="title|link_post,subtitle" post_title_color="transparent" post_title_hovercolor="#ffffff" post_title_weight="1" post_title_font="16" subtitle_color="transparent" subtitle_hovercolor="#dddddd" subtitle_font="12" post_content_color="#ffffff" post_content_hovercolor="#dddddd" post_content_font="12" post_content_fontfamily="宋体" post_content_break="0" post_date_format="m-d" post_date_color="#cccccc" post_date_hovercolor="#cccccc" post_date_font="12" post_md_color="#cccccc" post_md_hovercolor="#cccccc" post_md_font="12" post_comment_color="#cccccc" post_comment_hovercolor="#cccccc" post_comment_font="12" grid_thumb_border_color="#cccccc" grid_thumb_shadow_color="#cccccc" grid_thumb_shadow_style="0" grid_thumb_shadow_size="1" grid_thumb_rounded_size="4" speed="5000" hide_pagination_control="yes" slides_per_view_row="1" txt_height="100" txt_mobileheight="100" txt_bgcolor="#ffffff" txt_bghovercolor="#000000" txt_bgopt="100" img_maxwidth="100" txt_align="left" txt_bordercolor="#ffffff" txt_iconcolor="#ffffff" txt_width="220" txt_t_bgcolor="#262626" des_height="100" txt_paddingtop="100" txt_hoverpaddingtop="20" txt_iconbg="#000" txt_iconbgopt="80" txt_iconhoverbg="#000" txt_iconhoverbgopt="80" animale_open="0" grid_pagenav_show="0" grid_pagenav_model_text="查看更多" grid_pagenav_model_loadingtext="加载中" grid_pagenav_style="1" grid_pagenav_position="0" grid_pagenav_paddingleft="6" grid_pagenav_paddingtop="2" grid_pagenav_bgcolor="#cccccc" grid_pagenav_color="#ccc" grid_pagenav_hcolor="#fff" grid_pagenav_font="16" grid_pagenav_postion_left="0" grid_pagenav_postion_top="0" post_margin_size="0" post_padding_lr="5" minheight="0" post_border_open="0" post_bgcolor="transparent" parent_minheight="0" margintop="0" marginbottom="0" paddingtop="0" paddingbottom="0" paddingleft="0" paddingright="0" display_device="0" ptitle_paddingbottom="4" post_date_fh=" " post_borders="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0" ';
		element_string = element_string+'lr_style="new2" lr_position_type_style="lr" lr_color_style="0" lr_bgcolor="#cccccc" lr_bghovercolor="#cccccc" lr_icon_color="#ffffff" lr_icon_hovercolor="#ffffff" lr_bg_opt="70" lr_bg_hoveropt="100" lr_border="0" lr_border_color="#cccccc" lr_border_hovercolor="#cccccc" lr_border1="0" lr_bgcolor1="#cccccc" lr_bghovercolor1="#cccccc" lr_icon_color1="#ffffff" lr_icon_hovercolor1="#ffffff" lr_bg_opt1="70" lr_bg_hoveropt1="100" lr_border_color1="#cccccc" lr_border_hovercolor1="#cccccc" ';
	}

	if(param===false){
		element_string = element_string.replace('post_type="post" page_categories="0" post_categories="0"','');
		element_string = element_string.replace('size="4"','');
		element_string = element_string.replace('size="5','');
		element_string = element_string.replace('size="6"','');
		element_string = element_string.replace('size="10"','');
		return element_string;
	}
	var arr = element_string.split('" ');
	jQuery.each(arr,function(n,value) {
       var tmp = value.split('="');
		if(tmp.length>1){
			var name = tmp[0];
			var v = tmp[1];
			param[name] = v;
		}
	});
	return param;
}
function topostListToEditor(obj){
	if(jQuery(obj).closest(".vc-vc_posts_grid").length>0){
		var id= jQuery(obj).closest(".vc-vc_posts_grid").attr("data-model-id");
	}else if(jQuery(obj).closest(".vc-advanced_list").length>0){
		var id= jQuery(obj).closest(".vc-advanced_list").attr("data-model-id");
	}else{
		var id= jQuery(obj).closest(".vc-vc_carousel").attr("data-model-id");
	}

	var model = vc.shortcodes.get(id);
	var params = model.get('params');
	//var htm = jQuery("#postListWizHtml2").html();
	$j("#vc-bit_settings-panel .panel-footer").hide();
	$j("#vc-bit_settings-panel .panel-title").html("填写信息");

	vc.edit_bit_settings_view.render("updatePostList",0,model);
	loadingAjax($j("#vc-bit_settings-panel .panel-body"));
	jQuery.post("/admin/admin-ajax.php",{"action":"bit_get_postListWizHtml2"}, function(htm) {
		$j("#vc-bit_settings-panel .panel-body").html(htm);
		$j("#vc-bit_settings-panel .panel-footer").show();
		$j("#vc-bit_settings-panel .changePostType").change(function(){
			var v = jQuery(this).val();
			$j("#vc-bit_settings-panel .types").hide();
			$j("#vc-bit_settings-panel .types."+v).show();
		});

		$j("#vc-bit_settings-panel [name='post_type']").val(params.post_type).change();
		$j("#vc-bit_settings-panel [name='post_categories']").val(params.post_categories);
		$j("#vc-bit_settings-panel [name='pro_categories']").val(params.pro_categories);
		$j("#vc-bit_settings-panel [name='product_categories']").val(params.product_categories);
		$j("#vc-bit_settings-panel [name='size']").val(params.size);
	});

	return false;
}
function topostListToLayout(obj){
	var id= jQuery(obj).closest(".vc-vc_posts_grid").attr("data-model-id");
	var model = vc.shortcodes.get(id);
	var params = model.get('params');
	var p = jQuery(obj).closest(".column_inner").parent();

	var htm = jQuery("#postListStylelist").html();
	$j("#vc-bit_settings-panel .panel-footer").hide();
	$j("#vc-bit_settings-panel .panel-title").html("填写信息");

	vc.edit_bit_settings_view.render("postlistlayout",0,model);
	loadingAjax($j("#vc-bit_settings-panel .panel-body"));
	$j("#vc-bit_settings-panel .panel-body").html(htm);
	$j("#vc-bit_settings-panel .simplelistpost").unbind().bind("click",function(){
		$j("#vc-bit_settings-panel .simplelistpost").removeClass("active");
		$j(this).addClass("active");
	})
	$j("#vc-bit_settings-panel [name=postListStyle]").each(function(){
		if($j(this).val()== params.post_style_category){
			$j(this).click();
		}
	})
	$j("#vc-bit_settings-panel .panel-footer").show();

	return false;
}


function toeditlistmore(obj,e,type){
	 e.preventDefault();
      e.stopPropagation();
	//vc_list_title_element
	//vc_list_comment_element
	//vc_text_element
	var list_type=0;
	var p = jQuery(obj).closest(".vc-vc_posts_grid,.vc-advanced_list");
	if(p.length==0){
		list_type=1;
		p =  jQuery(obj).closest(".vc-vc_carousel");
	}
	if(p.length==0){
		list_type=2;
		p =  jQuery(obj).closest(".vc-product_page");
	}
	if(p.length==0){
		return;
	}
	var id= p.attr("data-model-id");
	var model = vc.shortcodes.get(id);
	var params = model.get('params');
	var defaultparams = vc.map[type].params;


	var hiddenText = '['+type;
	jQuery.each(defaultparams,function(n,value) {
          if(params[value.pn]){
				hiddenText += ' '+value.pn+'="'+params[value.pn]+'"';
		  }else{
			hiddenText += ' '+value.pn+'=""';
		  }

    });
	hiddenText += ' ]';
	var data = {"action":"qfe_show_edit_form","element":type,"vc_inline":true,"shortcode":hiddenText};

	vc.edit_element_block_view.simple_pop();
	$j("#vc-properties-panel .panel-title").html("编辑");
	$j("#vc-properties-panel [data-copystyle=true]").hide();
	loadingAjax($j("#vc-properties-panel .panel-body"));
	$j("#vc-properties-panel .waitingToPanel").css("height","auto");
	$j.post("/admin/admin-ajax.php",data,function(html){
		$j("#vc-properties-panel .panel-footer").show();

		$j("#vc-properties-panel .panel-body").html('<div >'+html+'</div>');
		if(list_type==1 && type=="vc_list_image_element"){
			$j("#vc-properties-panel .panel-body input.image_size_dropdown_for_list").attr("name","thumb_size");
		}
		vc.edit_element_block_view.render2(type,model);
		vc.edit_element_block_view.init("change");

	})
	$j("#vc-bit_settings-panel .panel-footer").show();
	return false;
}
function changeviewtemplatePagedefault(id){

	$j(".qfe_edit_form_elements.viewtemplate .defaultdemo").removeClass("hover");
	$j(".qfe_edit_form_elements.viewtemplate .defaultdemo"+id).addClass("hover");
	$j(".qfe_edit_form_elements.viewtemplate #defaultdemo").val(id);

}
function viewtemplate_createpage(category){
	var htm = '<div  class="row vc-row qfe_edit_form_elements viewtemplate">';

	htm +='<div class="edit_form_line" style="padding-left: 50px;position: absolute;top: 50%;margin-top: -105px;">';
	htm +='<input type="hidden"  id="defaultdemo" value=0 />';
	htm +='<input type="hidden"  id="category" value="'+category+'"/>';
	htm +='<div class="col-md-1" style="padding:0px;width:150px; margin-right: 20px;">';
	htm +='<div class="defaultdemo defaultdemo0 hover"style="width:150px;height:175px;background-image:none;text-align: center;" onclick="changeviewtemplatePagedefault(0)">';
	htm +='<br><br><br>空白<br>内容';
	htm +='</div>';
	htm +='</div>';
	htm +='<div class="col-md-1" style="padding:0px;width:150px; margin-right: 20px;margin-bottom:20px;" >';
	htm +='<div style="width:150px;height:175px;background-image:none;" class="defaultdemo defaultdemo1" onclick="changeviewtemplatePagedefault(1)"><img src="/FeiEditor/bitSite/images/layout/'+category+'-1.jpg" style="width:150px;height:175px;"></div>';
	htm +='</div>';
	htm +='<div class="col-md-1" style="padding:0px;width:150px; margin-right: 20px;margin-bottom:20px;" >';
	htm +='<div style="width:150px;height:175px;background-image:none;" class="defaultdemo defaultdemo2" onclick="changeviewtemplatePagedefault(2)"><img src="/FeiEditor/bitSite/images/layout/'+category+'-2.jpg" style="width:150px;height:175px;"></div>';
	htm +='</div>';
	htm +='<div class="col-md-1" style="padding:0px;width:150px; margin-right: 20px;margin-bottom:20px;" >';
	htm +='<div style="width:150px;height:175px;background-image:none;" class="defaultdemo defaultdemo3" onclick="changeviewtemplatePagedefault(3)"><img src="/FeiEditor/bitSite/images/layout/'+category+'-3.jpg" style="width:150px;height:175px;"></div>';
	htm +='</div>';
	htm +='<div class="col-md-1" style="padding:0px;width:150px; margin-right: 20px;margin-bottom:20px;" >';
	htm +='<div style="width:150px;height:175px;background-image:none;" class="defaultdemo defaultdemo4" onclick="changeviewtemplatePagedefault(4)"><img src="/FeiEditor/bitSite/images/layout/'+category+'-4.jpg" style="width:150px;height:175px;"></div>';
	htm +='</div>';

	htm +='<span class="description clear">模板页面一般选择的是满屏页面，正文自适应结构。你也可以把你的网站在设计-&gt;整体效果里修改成相同结构，这样会使效果一样。</span>';
	htm +='</div>';
	$j("#vc-bit_settings-panel .panel-footer").hide();

	$j("#vc-bit_settings-panel .panel-title").html("选择一个模板来快速创建显示页");

	vc.edit_bit_settings_view.render("viewtemplate",0);
	loadingAjax($j("#vc-bit_settings-panel .panel-body"));
	$j("#vc-bit_settings-panel .panel-body").html(htm);


	$j("#vc-bit_settings-panel .panel-footer").show();

	return false;

}

function wctab(obj){
	var tab = $j(obj).attr("data-tab");
	var p = $j(obj).closest(".wc_type_tab_container");
	p.find(".wc_tab").removeClass("on");
	p.find(".wc_tab_div").hide();
	p.find(".wc_tab_"+tab).show();
	$j(obj).addClass("on");
}
function topostListToOpen(obj){
	var p = jQuery(obj).closest(".vc-element");
	var id= p.attr("data-model-id");

	var model = vc.shortcodes.get(id);
	var params = p.find(".list_hidden_btn").attr("data-params");


	var type="vc_btn_element";
	if(params){
		var hiddenText = base64_decode(params);
	}else{
		var hiddenText = "["+type+" ]";
	}
	var data = {"action":"qfe_show_edit_form","element":type,"vc_inline":true,"shortcode":hiddenText};

	vc.edit_element_block_view.simple_pop();
	$j("#vc-properties-panel .panel-title").html("打开方式");

	loadingAjax($j("#vc-properties-panel .panel-body"));
	$j("#vc-properties-panel .waitingToPanel").css("height","auto");
	$j.post("/admin/admin-ajax.php",data,function(html){
		$j("#vc-properties-panel .panel-footer").show();
		$j("#vc-properties-panel .panel-body").html('<div >'+html+'</div>');
		vc.edit_element_block_view.render2(type,model);
		vc.edit_element_block_view.init("change");

	})


	$j("#vc-bit_settings-panel .panel-footer").show();

	return false;
}
function topostListmobile_setting(obj,e){
	 e.preventDefault();
	 e.stopPropagation();
	var p = jQuery(obj).closest(".vc-element");
	var id= p.attr("data-model-id");

	var model = vc.shortcodes.get(id);
	var params = p.find(".list_mobile_element").attr("data-params");


	var type="list_mobile_element";
	if(params){
		var hiddenText = base64_decode(params);
	}else{
		var hiddenText = "["+type+" ]";
	}
	var data = {"action":"qfe_show_edit_form","element":type,"vc_inline":true,"shortcode":hiddenText};

	vc.edit_element_block_view.simple_pop();
	$j("#vc-properties-panel .panel-title").html("手机端独立设置");

	loadingAjax($j("#vc-properties-panel .panel-body"));
	$j("#vc-properties-panel .waitingToPanel").css("height","auto");
	$j.post("/admin/admin-ajax.php",data,function(html){
		$j("#vc-properties-panel .panel-footer").show();
		$j("#vc-properties-panel .panel-body").html('<div >'+html+'</div>');
		vc.edit_element_block_view.render2(type,model);
		vc.edit_element_block_view.init("change");

	})


	$j("#vc-bit_settings-panel .panel-footer").show();

	return false;

}

function topostListToAdd(obj){
	if(jQuery(obj).closest(".vc-vc_posts_grid").length>0){
		var id= jQuery(obj).closest(".vc-vc_posts_grid").attr("data-model-id");
	}else if(jQuery(obj).closest(".vc-advanced_list").length>0){
		var id= jQuery(obj).closest(".vc-advanced_list").attr("data-model-id");
	}else{
		var id= jQuery(obj).closest(".vc-vc_carousel").attr("data-model-id");
	}

	var model = vc.shortcodes.get(id);
	var params = model.get('params');
	var panel_footer= jQuery("#vc-menu-panel .panel-footer");
	panel_footer.hide();
	panel_footer.find("[data-action='next']").show();
	panel_footer.find("[data-action='pre']").hide();
	panel_footer.find(".stepButton").show();
	panel_footer.find(".nomarlButton").hide();
	var load=jQuery("#loading").val();
	vc.edit_menu_block_view.render(false);
	vc.edit_menu_block_view.setTitle("创建新页面向导");
	loadingAjax(jQuery("#vc-menu-panel .panel-body"));
	if(params.post_type=="page"){
		menuEdit(-1,'add',"page",function(){
			action_of_addonepage = model;
		});
	}else if(params.post_type=="post"){
		menuEdit(-1,'add',"post",function(){
			action_of_addonepage = model;
			jQuery("#vc-menu-panel [name='post_category[]']").each(function(){
				if(jQuery(this).val()==params.post_categories){
					jQuery(this).attr("checked","checked");
				}
			})
		});
	}else if(params.post_type=="products"){
		menuEdit(-1,'add',"products",function(){
			action_of_addonepage = model;
			jQuery("#vc-menu-panel [name='tax_input[products_category][]']").each(function(){
				if(jQuery(this).val()==params.pro_categories){
					jQuery(this).attr("checked","checked");
				}
			})
		});
	}
}
function postListToEditor(vc,pid,obj,old_tag,type,isdrag){
	//var htm = jQuery("#postListWizHtml").html();
	var currmodel =false;
	$j("#vc-bit_settings-panel .panel-footer").hide();
	$j("#vc-bit_settings-panel .panel-title").html("填写信息");

	vc.edit_bit_settings_view.render("createPostList");
	loadingAjax($j("#vc-bit_settings-panel .panel-body"));

	jQuery.post("/admin/admin-ajax.php",{"action":"bit_get_postListWizHtml"}, function(htm) {
		$j("#vc-bit_settings-panel .panel-body").html(htm);
		$j("#vc-bit_settings-panel .panel-footer").show();
		$j("#vc-bit_settings-panel .changePostType").change(function(){
			var v = jQuery(this).val();
			$j("#vc-bit_settings-panel .types").hide();
			$j("#vc-bit_settings-panel .types."+v).show();
			if(v=="page"){
				$j("#vc-bit_settings-panel [name='page_catecontrol']").val(0).change();
			}
		})

		if(type=="postlist"||type=="advanced"){
			$j("#vc-bit_settings-panel .catecontrol_style_div").show();
			$j("#vc-bit_settings-panel .catecontrol_style label").unbind().click(function(){
				$j("#vc-bit_settings-panel .catecontrol_style label").removeClass("active");
				$j(this).addClass("active");
			})
			$j("#vc-bit_settings-panel [name='page_catecontrol']").unbind().change(function(){
				var v = $j(this).val();
				if(v=="0"){
					$j("#vc-bit_settings-panel .catecontrol_style").closest(".vc-column").hide();
				}else{
					$j("#vc-bit_settings-panel .catecontrol_style").closest(".vc-column").show();
				}
			})
			if(obj.model!=false ||type=="advanced"){
				$j("#vc-bit_settings-panel [name='page_catecontrol']").val(0).change();
			}
		}else{
			$j("#vc-bit_settings-panel .catecontrol_style_div").hide();
		}
		$j("#vc-bit_settings-panel .savePostList").unbind("click").bind("click",function(){
			var page_catecontrol = $j("#vc-bit_settings-panel [name='page_catecontrol']").val();
			var page_catecontrol_style = $j("#vc-bit_settings-panel label.active [name='page_catecontrol_style']").val();
			if(obj.model==false){
				if( (type=="postlist" || type=="advanced") && page_catecontrol=="1"){

				}else{
				vc.ShortcodesBuilder.create({shortcode: 'vc_row', params: {rowmaxwidth: "1280"}});
				var pid = vc.ShortcodesBuilder.lastID();
				}
			}
			var object = new Object();
			object.post_type = $j("#vc-bit_settings-panel .changePostType").val();
			object.post_categories = $j("#vc-bit_settings-panel .types.post select").val();
			object.page_categories = $j("#vc-bit_settings-panel .types.page select").val();
			object.pro_categories = $j("#vc-bit_settings-panel .types.products select").val();
			object.product_categories = $j("#vc-bit_settings-panel .types.product select").val();
			object.size = $j("#vc-bit_settings-panel .size").val();
			if(type=="postlist"){
				var currtag = "vc_posts_grid";
			}else if(type=="advanced"){
				var currtag = "advanced_list";
			}
			if(type=="postlist" || type=="advanced"){
				if(page_catecontrol=="1"){
					vc.ShortcodesBuilder.isGroup=true;
					if(type=="postlist"){
						var uuid ="qfy_posts_grid_"+vc.ShortcodesBuilder.randomString();
						var defalut_cate ='cate_orderby="0" cate_floor="1" cate_emptyshow="1" cate_ajax="1" cate_showcurrchild="1" cate_width="600" cate_style="1" cate_bgcolor="#f6f6f6" cate_bghovercolor="#cccccc" cate_fontcolor="#333" cate_fonthovercolor="#333" cate_sub_bgcolor="#f6f6f6" cate_sub_bghovercolor="#f6f6f6" cate_sub_fontcolor="#333" cate_sub_fonthovercolor="#333" cate_line="#fff" cate_padding="10" cate_subwidth="200" cate_font="normal normal 16px/px " cate_sub_font="normal normal 16px/px "';
						var  default_list = vc_column_text_postlist(old_tag,false);

						if(page_catecontrol_style==""){
							var text = '[vc_row rowmaxwidth="1280"][vc_column width="1/4" z_index="4"][list_cate_controls cate_to_listuuid="'+uuid+'" cate_type="'+object.post_type+'" cate_post_selected_id="'+object.post_categories+'" cate_products_selected_id="'+object.pro_categories+'" '+defalut_cate+' ][/vc_column][vc_column width="3/4" align_sm="center" ][vc_posts_grid qfyuuid="'+uuid+'" post_type="'+object.post_type+'" post_categories="'+object.post_categories+'" page_categories="'+object.page_categories+'" pro_categories="'+object.pro_categories+'" size="'+object.size+'" post_category_showlink="1" '+default_list+' ][/vc_column][/vc_row]';
						}else if(page_catecontrol_style=="1"){
							var text = '[vc_row rowmaxwidth="1280"][vc_column width="1/1" z_index="4" ][list_btncate_controls d_t="1" cate_to_listuuid="'+uuid+'" cate_type="'+object.post_type+'" cate_post_selected="" cate_post_selected_exclude="" cate_post_selected_id="'+object.post_categories+'" cate_products_selected="" cate_products_selected_exclude="" cate_products_selected_id="'+object.pro_categories+'" cate_orderby="0" cate_emptyshow="1" cate_ajax="1" buttonbar_maxwidth="100%" buttonbar_align="1" buttonbar_color="transparent" buttonbar_border="0" buttonbar_bordercolor="#f1f2f2" buttonbar_corner="0" buttonbar_margin="0" buttonbar_padding="0" buttonbar_centerwidth="1" buttonbar_layout="1" btn_title_width="100" btn_title_family="" btn_title_size="16" btn_title_fontweight="" btn_custom_textcolor="#333" btn_custom_background="#f1f2f2" btn_custom_border="1" btn_custom_border_settings="0|^|2|^|#dddddd|^|0|^|0|^|#ffffff|^|0|^|1|^|#eaeaea|^|0|^|1|^|#eaeaea|^|0" btn_title_padding="10px 20px 10px 20px" btn_custom_border_corner="0" btn_hoverchangecolor="1" btn_custom_hover_background="#fff" btn_custom_hover_text="#333" title_hover_fontweight="" btn_custom_hover_border="1" btn_custom_hover_border_settings="0|^|2|^|#81d742|^|0|^|0|^|#ffffff|^|0|^|1|^|#eaeaea|^|0|^|1|^|#eaeaea|^|0" ][/vc_column][vc_column width="1/1" align_sm="center"][vc_posts_grid qfyuuid="'+uuid+'" post_type="'+object.post_type+'" post_categories="'+object.post_categories+'" page_categories="'+object.page_categories+'" pro_categories="'+object.pro_categories+'" size="'+object.size+'" post_category_showlink="1" '+default_list+' ][/vc_column][/vc_row]';
						}else {
							var text = '[vc_row rowmaxwidth="1280"][vc_column width="3/4" align_sm="center"][vc_posts_grid qfyuuid="'+uuid+'" post_type="'+object.post_type+'" post_categories="'+object.post_categories+'" page_categories="'+object.page_categories+'" pro_categories="'+object.pro_categories+'" size="'+object.size+'" post_category_showlink="1" '+default_list+' ][/vc_column][vc_column width="1/4" z_index="4" ][list_cate_controls cate_to_listuuid="'+uuid+'"  cate_type="'+object.post_type+'" cate_post_selected_id="'+object.post_categories+'" cate_products_selected_id="'+object.pro_categories+'" '+defalut_cate+' ][/vc_column][/vc_row]';
						}
					}else if(type=="advanced"){
						var uuid ="advanced_list_"+vc.ShortcodesBuilder.randomString();
						var defalut_cate ='cate_orderby="0" cate_floor="1" cate_emptyshow="1" cate_ajax="1" cate_showcurrchild="1" cate_width="600" cate_style="1" cate_bgcolor="#f6f6f6" cate_bghovercolor="#cccccc" cate_fontcolor="#333" cate_fonthovercolor="#333" cate_sub_bgcolor="#f6f6f6" cate_sub_bghovercolor="#f6f6f6" cate_sub_fontcolor="#333" cate_sub_fonthovercolor="#333" cate_line="#fff" cate_padding="10" cate_subwidth="200" cate_font="normal normal 16px/px " cate_sub_font="normal normal 16px/px "';
						var default_list = vc_column_text_advancedlist(old_tag,false);

						if(page_catecontrol_style==""){
							var text = '[vc_row rowmaxwidth="1280"][vc_column width="1/4" z_index="4"][list_cate_controls cate_to_listuuid="'+uuid+'" cate_type="'+object.post_type+'" cate_post_selected_id="'+object.post_categories+'" cate_products_selected_id="'+object.pro_categories+'" '+defalut_cate+' ][/vc_column][vc_column width="3/4"][advanced_list qfyuuid="'+uuid+'" post_type="'+object.post_type+'" post_categories="'+object.post_categories+'" page_categories="'+object.page_categories+'" pro_categories="'+object.pro_categories+'" size="'+object.size+'" '+default_list+' ][/vc_column][/vc_row]';
						}else if(page_catecontrol_style=="1"){
							var text = '[vc_row rowmaxwidth="1280"][vc_column width="1/1" z_index="4"][list_btncate_controls d_t="1" cate_to_listuuid="'+uuid+'" cate_type="'+object.post_type+'" cate_post_selected="" cate_post_selected_exclude="" cate_post_selected_id="'+object.post_categories+'" cate_products_selected="" cate_products_selected_exclude="" cate_products_selected_id="'+object.pro_categories+'" cate_orderby="0" cate_emptyshow="1" cate_ajax="1" buttonbar_maxwidth="100%" buttonbar_align="1" buttonbar_color="transparent" buttonbar_border="0" buttonbar_bordercolor="#f1f2f2" buttonbar_corner="0" buttonbar_margin="0" buttonbar_padding="0" buttonbar_centerwidth="1" buttonbar_layout="1" btn_title_width="100" btn_title_family="" btn_title_size="16" btn_title_fontweight="" btn_custom_textcolor="#333" btn_custom_background="#f1f2f2" btn_custom_border="1" btn_custom_border_settings="0|^|2|^|#dddddd|^|0|^|0|^|#ffffff|^|0|^|1|^|#eaeaea|^|0|^|1|^|#eaeaea|^|0" btn_title_padding="10px 20px 10px 20px" btn_custom_border_corner="0" btn_hoverchangecolor="1" btn_custom_hover_background="#fff" btn_custom_hover_text="#333" title_hover_fontweight="" btn_custom_hover_border="1" btn_custom_hover_border_settings="0|^|2|^|#81d742|^|0|^|0|^|#ffffff|^|0|^|1|^|#eaeaea|^|0|^|1|^|#eaeaea|^|0" ][/vc_column][vc_column width="1/1"][advanced_list qfyuuid="'+uuid+'" post_type="'+object.post_type+'" post_categories="'+object.post_categories+'" page_categories="'+object.page_categories+'" pro_categories="'+object.pro_categories+'" size="'+object.size+'" post_category_showlink="1" '+default_list+' ][/vc_column][/vc_row]';
						}else {
							var text = '[vc_row rowmaxwidth="1280"][vc_column width="3/4"][advanced_list qfyuuid="'+uuid+'" post_type="'+object.post_type+'" post_categories="'+object.post_categories+'" page_categories="'+object.page_categories+'" pro_categories="'+object.pro_categories+'" size="'+object.size+'" '+default_list+' ][/vc_column][vc_column width="1/4" z_index="4" ][list_cate_controls cate_to_listuuid="'+uuid+'"  cate_type="'+object.post_type+'" cate_post_selected_id="'+object.post_categories+'" cate_products_selected_id="'+object.pro_categories+'" '+defalut_cate+' ][/vc_column][/vc_row]';
						}
					}

					if(obj.model && obj.model.get("shortcode") =="vc_column_inner"){
						var p1 = vc.shortcodes.get(obj.model.get("parent_id"));
						var p2 = vc.shortcodes.get(p1.get("parent_id"));
						var p3 = vc.shortcodes.get(p2.get("parent_id"));
						p3.view.$el.addClass('vc-place-after');
						create_VC_fromString(text,false);
					}else if(obj.model && obj.model.get("shortcode") =="vc_column"){
						var p1 = vc.shortcodes.get(obj.model.get("parent_id"));
						p1.view.$el.addClass('vc-place-after');
						create_VC_fromString(text,false);
					}else{
						create_VC_fromString(text,obj.model);
					}

					vc.ShortcodesBuilder.render(function(){
						openVCQuickSet(currtag);
					},true);
					vc.ShortcodesBuilder.isGroup=false;
					$j("#vc-bit_settings-panel").hide();
					return ;
				}else{
					var cid = createVCColumn(vc,pid,"1/1",obj, 'center');
					if(type=="postlist"){
						createVCElement("vc_posts_grid",old_tag,cid,obj,object);
					}else if(type=="advanced"){
						createVCElement("advanced_list",old_tag,cid,obj,object);
					}
				}

			}else if(type=="silider"){
				var cid = createVCColumn(vc,pid,"1/1",obj, 'center');
				createVCElement("vc_carousel",old_tag,cid,obj,object);
			}

			if(iframeWin.jQuery('[data-tag=vc_row] .section').length>1 && obj.model==false && isdrag!="isdrag"){
				jConfirmOneButton("<div class='addtocontentpositionHtml'><span class='warnradio'><input type='radio' name='addtocontentposition' onclick='addtocontentpositionFun(this,0)' checked value='0'><label for='addtocontentposition0'>页面的最后</label> &nbsp;&nbsp;&nbsp;&nbsp;<input  type='radio' name='addtocontentposition' id='addtocontentposition1' value='1'><label  for='addtocontentposition1'>页面中的某个位置</label></span></div>",function(){
					var check = top.jQuery(".addtocontentpositionHtml [name='addtocontentposition']:checked").val();
					if(check==1){
						jConfirmOneButton("请在页面的正文区域单击您需要插入区块的地方。(您也可以在页面最后创建这个区块，然后将新创建的区块拖动到想要的位置。)",function(){
							iframeWin.jQuery("body").addClass("clicktoaddmodel");
							iframeWin.jQuery('[data-tag=vc_row] .section').unbind("click").bind("click",function(){
								var jjthis = this;
								jConfirm("您确认需要将新的区块插入到这个区块之后吗？",function(){
									iframeWin.jQuery('[data-tag=vc_row] .section').unbind("click");
									iframeWin.jQuery("body").removeClass("clicktoaddmodel");
									var model_id = iframeWin.jQuery(jjthis).parent().attr("data-model-id");
									var findmodel = vc.shortcodes.findWhere({id: model_id});
									ajaxBeforeLoading(model_id);
									findmodel.view.$el.addClass('vc-place-after');
									vc.ShortcodesBuilder.render(function(){
										openVCQuickSet(currtag);
									},true);
								});
							})
						});
					}else{
						ajaxBeforeLoading("0",iframeWin.jQuery("section.content-wrapper"));
						vc.ShortcodesBuilder.render(function(){
							openVCQuickSet(currtag);
						},true);
					}
				});

			}else{
				ajaxBeforeLoading("0",iframeWin.jQuery("section.content-wrapper"));
				vc.ShortcodesBuilder.render(function(){
					openVCQuickSet(currtag);
				},true);
			}


			jQuery("#vc-bit_settings-panel").hide();
		});
	});




}
function postListToEditor2(sid,tag,AddWidgetBlockView){
	//var htm = jQuery("#postListWizHtml").html();
	$j("#vc-bit_settings-panel .panel-footer").hide();
	$j("#vc-bit_settings-panel .panel-title").html("填写信息");

	vc.edit_bit_settings_view.render("createPostList");
	loadingAjax($j("#vc-bit_settings-panel .panel-body"));
	jQuery.post("/admin/admin-ajax.php",{"action":"bit_get_postListWizHtml"}, function(htm) {
		$j("#vc-bit_settings-panel .panel-body").html(htm);
		$j("#vc-bit_settings-panel .panel-footer").show();
		$j("#vc-bit_settings-panel .changePostType").change(function(){
			var v = jQuery(this).val();
			$j("#vc-bit_settings-panel .types").hide();
			$j("#vc-bit_settings-panel .types."+v).show();
		})

		$j("#vc-bit_settings-panel .savePostList").unbind("click").bind("click",function(){

			var object = new Object();
			object.post_type = $j("#vc-bit_settings-panel .changePostType").val();
			object.post_categories = $j("#vc-bit_settings-panel .types.post select").val();
			object.page_categories = $j("#vc-bit_settings-panel .types.page select").val();
			object.pro_categories = $j("#vc-bit_settings-panel .types.products select").val();
			object.product_categories = $j("#vc-bit_settings-panel .types.product select").val();
			object.size = $j("#vc-bit_settings-panel .size").val();

			ajaxAddWidget(sid,tag,AddWidgetBlockView,object);
			jQuery("#vc-bit_settings-panel").hide();
		});
	});

}
function openGlobalSet(id){
	var obj =iframeWin.jQuery("#"+id).parent();

	if(obj.attr("bitdatamarker") =="sidebar_2"){
		parent.defaultWidgetLayout = "bottom-widget-layout";
	}else {
		parent.defaultWidgetLayout = "widget-layout";
	}
	parent.bit_settings_pop();

}
function toAddcatepage(model_id,model){
	var p = model.view.$el;
	//var htm = jQuery("#postListWizHtml4").html();
	$j("#vc-bit_settings-panel .panel-footer").hide();
	$j("#vc-bit_settings-panel .panel-title").html("创建一个新的分类");

	vc.edit_bit_settings_view.render("createPostList");
	loadingAjax($j("#vc-bit_settings-panel .panel-body"));
	jQuery.post("/admin/admin-ajax.php",{"action":"bit_get_postListWizHtml4"}, function(htm) {
		$j("#vc-bit_settings-panel .panel-body").html(htm);
		$j("#vc-bit_settings-panel .panel-footer").show();
		var params = model.get('params');
		if(params.cate_type=="products"){
			$j("#vc-bit_settings-panel .col-md-12.vc-column.post").hide();
			$j("#vc-bit_settings-panel .col-md-12.vc-column.products").show();
		}else{
			$j("#vc-bit_settings-panel .col-md-12.vc-column.products").hide();
			$j("#vc-bit_settings-panel .col-md-12.vc-column.post").show();
		}
		$j("#vc-bit_settings-panel .btn-primary").unbind("click").bind("click",function(e){
			 e.preventDefault();
			 e.stopPropagation();
			var objparam = {};
			objparam.post_type = params.cate_type;
			objparam["slug"] =  $j("#vc-bit_settings-panel [name='slug']").val();
			objparam["tag-name"] =  $j("#vc-bit_settings-panel [name='tag-name']").val();
			if(params.cate_type=="products"){
				objparam.parent =  $j("#vc-bit_settings-panel [name='pro_categories']").val();
			}else{
				objparam.parent =  $j("#vc-bit_settings-panel [name='post_categories']").val();
			}
			if(objparam["slug"]=="" || objparam["tag-name"]==""){
				top.jAlert("参数不能为空");
				return ;
			}
			$j("#vc-bit_settings-panel").hide();
			jQuery.post("/FeiEditor/siteEdit/insert_term",objparam,function(data){
				location.reload();
				return false;
			})
		})
	});
}
function toDeleteCate(obj){
	var c = jQuery(obj).closest("li");
	var id = c.attr("data-id");
	var p = jQuery(obj).closest(".vc-list_cate_controls,.vc-list_btncate_controls");
	var model_id = p.attr("data-model-id");
	top.jConfirm('确认是否隐藏该分类',function(){
		var model = vc.shortcodes.get(model_id);
		var params = model.get('params');
		if(params.cate_type=="products"){
			if(params.cate_products_selected_exclude){
				params.cate_products_selected_exclude = params.cate_products_selected_exclude+","+id;
			}else{
				params.cate_products_selected_exclude = id;
			}
		}else{
			if(params.cate_post_selected_exclude){
				params.cate_post_selected_exclude = params.cate_post_selected_exclude+","+id;
			}else{
				params.cate_post_selected_exclude = id;
			}
		}
		model.save({
					params : params
				});
		ajaxBeforeLoading(0,p);
		vc.ShortcodesBuilder.update(model);
		updatePage(model, null);
	});

}
function toDelete(obj){

	var p  = jQuery(obj).closest(".qfy_item_post");
	var id=p.closest(".vc-element").attr("data-model-id");


	var post_id = p.attr("data-postid");
	var pt = p.find('[data-title="true"]');
	var title = "";
	if(pt.length>0){
		var title =jQuery.trim(pt.text());
	}
	var isWidget = false;
	if(id){
		var model = vc.shortcodes.get(id);
		var params = model.get('params');
		var t = "页面";
		if(params.post_type=="post"){
			t="资讯";
		}else if(params.post_type=="products"){
			t="产品";
		}
		var pp = p.closest(".column_inner").parent();
		var list_id = 0;
	}else{
		//挂件区
		var model = null;
		var post_type= p.closest(".teaser_grid_container").attr("data-type");
		var t = "页面";
		if(post_type=="post"){
			t="资讯";
		}else if(post_type=="products"){
			t="产品";
		}
		var pp = p.closest(".teaser_grid_container");
		var list_id = p.closest(".site_tooler").attr("id");
		isWidget = true;
	}

	top.jConfirmMore2('确认是否删除该'+t+':【'+title+'】,还是在当前列表内隐藏'+t+'不显示呢?<br/><br/><span style="color:#666">如果你想还原该列表内被隐藏的所有'+t+'，请点击<a href=javascript:restorePostListIds("'+id+'","'+post_id+'","'+list_id+'") style="color:#5E87B0">这里</a>',function(){

			ajaxBeforeLoading(0,pp);
			if(!isWidget){
				if(params.ignoreids!=null && params.ignoreids!=""){
					params.ignoreids = params.ignoreids+","+post_id;
				}else{
					params.ignoreids = post_id;
				}
				model.save({
					params : params
				});
				vc.ShortcodesBuilder.update(model);
				updatePage(model, null);
			}else{
				jQuery.post("/FeiEditor/siteEdit/ajax_hidepage_list/"+list_id+"/"+post_id,function(){
					var w = iframeWin.jQuery("#" + list_id + ".site_tooler");
					updateWidgetViewEvent(list_id,w);
				})


			}
		},"确认信息","隐藏"+t,"删除"+t,"关闭",function(){
			if(top.jQuery("#pagehtmlui li[value='"+post_id+"']").hasClass("noAllowDelete")){
				jAlert("该页面是功能页面，禁止删除！");
				return;
			}
			ajaxBeforeLoading(0,pp);
			jQuery.post("/FeiEditor/siteEdit/ajax_deletepage/"+post_id,function(){
				if(!isWidget){
					vc.ShortcodesBuilder.update(model);
				}else{
					var w = iframeWin.jQuery("#" + list_id + ".site_tooler");
					updateWidgetViewEvent(list_id,w);
				}
			})
		})


}

function toEditProduct(obj){


	if(jQuery(obj).parents('.product_a').length==1){
		var current_pid = jQuery(obj).parents('.wd_product_wrapper').attr("data-proid");
	}else{
		var current_pid = jQuery(obj).parents('div.single-product').parent().attr("data-proid");
	}
	bitSettingsEdit(current_pid,"设置当前商品", 'product');
	return false;
}
function toRedirectProduct(obj){
	if(jQuery(obj).parents('.product_a').length==1){
		var current_pid = jQuery(obj).closest(".wd_product_wrapper").attr("data-proid");
	}else{
		var current_pid = jQuery(obj).closest('div.single-product').parent().attr("data-proid");
	}
	jConfirm("你确认访问该商品页面？",function(){
			parent.jQuery('#pageUrl').val(current_pid);
			parent.jQuery('#pageUrl').change();
	},function(){return false;});
	return false;
}

function toEditor(obj){
	var htm = '<div  class="row vc-row qfe_edit_form_elements toPopEditor"><form method="post" id="editorForm" action="/FeiEditor/siteEdit/savepost">';
	htm +='<input type="hidden" name="post_id" />';
	htm +='<div class="col-md-12 vc-column qfe_el_type_textfield"><div class="qfe_element_label">标题</div><div class="edit_form_line"><input type="text" maxlength="2048" value="" class="qfe_vc_param_value qfe-textinput  textfield" name="title"></div></div>';
	htm +='<div class="col-md-12 vc-column qfe_el_type_subtitle"><div class="qfe_element_label">副标题</div><div class="edit_form_line"><input type="text" maxlength="2048" value="" class="qfe_vc_param_value qfe-textinput  textfield" name="subtitle"></div></div>';
	htm +='<div class="col-md-12 vc-column qfe_el_type_post_date"><div class="qfe_element_label">发布日期</div><div class="edit_form_line"><input type="text" maxlength="2048" value="" class="qfe_vc_param_value qfe-textinput  textfield" name="post_date"><span class="description clear">请按照固定格式填写日期格式</span></div></div>';
	htm +='<div class="col-md-12 vc-column  qfe_el_type_attach_image"><div class="qfe_element_label">缩略图</div><div class="edit_form_line"><input type="hidden" value="" id="editor_image" name="editor_image" class="qfe_vc_param_value gallery_widget_attached_images_ids editor_image attach_image"><div class="gallery_widget_attached_images"><ul class="gallery_widget_attached_images_list ui-sortable"></ul></div><div class="gallery_widget_site_images"></div><a title="添加图片" use-single="true" href="#" class="gallery_widget_add_images">添加图片</a><span class="description clear">选择一个图像。</span></div></div>';
	htm +='<div class="col-md-12 vc-column  qfe_el_type_attach_video"><div class="qfe_element_label">视频</div><div class="edit_form_line"><input type="hidden" value="" id="editor_video" name="editor_video" class="qfe_vc_param_value gallery_widget_attached_videos_ids  editor_video attach_image"><div class="gallery_widget_attached_images"><ul class="gallery_widget_attached_images_list ui-sortable"></ul></div><div class="gallery_widget_site_images"></div><a title="添加视频" use-single="true" href="#" data-type="attach_localvideo"  class="gallery_widget_add_videos">添加视频</a><span class="description clear">选择一个视频。</span></div></div>';
	htm +='<div class="col-md-12 vc-column  qfe_el_type_textarea"><div class="qfe_element_label">摘要</div><div class="edit_form_line"><textarea  maxlength="20480" style="resize: none;height:100px;"  class="qfe_vc_param_value qfe-textinput  textfield" name="content"></textarea><span class="description clear">只能在这里修改摘要，想要修改具体内容，请到该页面修改！</span></div></div>';
	htm +='</form></div>';
	$j("#vc-bit_settings-panel .panel-footer").hide();
	$j("#vc-bit_settings-panel .panel-title").html("编辑");

	var p  = jQuery(obj).closest(".qfy_item_post");
	var id=p.closest(".vc-element").attr("data-model-id");


	var model = vc.shortcodes.get(id);
	p.find(".toEditor").remove();
	var post_id = p.attr("data-postid");

	vc.edit_bit_settings_view.render("savePost",post_id,model,p);
	loadingAjax($j("#vc-bit_settings-panel .panel-body"));
	$j("#vc-bit_settings-panel .panel-body").html(htm);
	var isAttachment  = p.closest(".qfy-element").hasClass("qfe_teaser_grid_attachment")?true:false;
	if(isAttachment){
		$j("#vc-bit_settings-panel .toPopEditor").addClass("type_attachment");
	}
	$j("#vc-bit_settings-panel .toPopEditor [name='post_id']").val(post_id);
	var pt = p.find('[data-title="true"]');
	if(pt.length>0 ){
		if(p.find(".post-title,.title").attr("data-content")){
			var title = base64_decode(p.find(".post-title,.title").attr("data-content"));
		}else{
			pt.find(".edittitle").remove();
			var title =jQuery.trim(pt.text());
		}
		$j("#vc-bit_settings-panel .toPopEditor [name='title']").val(title);
	}else{
		$j("#vc-bit_settings-panel .toPopEditor .qfe_el_type_textfield").remove();
	}
	if(p.find('.subtitle').length>0){
		var subtitle =jQuery.trim(p.find('.subtitle').text());
		$j("#vc-bit_settings-panel .toPopEditor [name='subtitle']").val(subtitle);
	}else{
		$j("#vc-bit_settings-panel .toPopEditor .qfe_el_type_subtitle").remove();
	}
	var pi = p.find(".post-thumb img,.item_img img");
	if(pi.length>0 ){
		if(!pi.hasClass("demo"))
		{
			var imgId =pi.attr("data-t-id");
			var img =pi.attr("src");
			$j("#vc-bit_settings-panel .toPopEditor [name='editor_image']").val(imgId);
			$j("#vc-bit_settings-panel .toPopEditor .gallery_widget_attached_images_list").html('<li class="added"><div style="width: 75px; height: 75px; overflow: hidden;text-align: center;" class="inner"><img src="'+img+'" rel="id"></div><a class="icon-remove" href="#"></a></li>');
			$j('#vc-bit_settings-panel .toPopEditor .gallery_widget_attached_images_list').unbind('click.removeImage').on('click.removeImage',  'a.icon-remove', function(e){
				e.preventDefault();
				var $block = $j(this).closest('.edit_form_line');
				$j(this).parent().remove();
				var img_ids = [];
				$block.find('.added img').each(function () {
					img_ids.push($(this).attr("rel"));
				});
				$block.find('.gallery_widget_attached_images_ids').val(img_ids.join(',')).trigger('change');
			});
		}
	}else{
		$j("#vc-bit_settings-panel .toPopEditor .qfe_el_type_attach_image").remove();
	}
	if( p.find(".post-thumb video").length==0 ){
		$j("#vc-bit_settings-panel .toPopEditor .qfe_el_type_attach_video").remove();
	}else{
		var video = p.find(".post-thumb video");
		var videoId =video.attr("data-t-id");
		var img =video.attr("poster");
		$j("#vc-bit_settings-panel .gallery_widget_add_videos").attr("data-id",videoId);
		$j("#vc-bit_settings-panel .qfe_el_type_attach_video [name='editor_video']").val(videoId);
		$j("#vc-bit_settings-panel .qfe_el_type_attach_video .gallery_widget_attached_images_list").html('<li class="added"><div style="width: 75px; height: 75px; overflow: hidden;text-align: center;" class="inner"><img src="'+img+'" rel="'+videoId+'"></div><a class="icon-remove" href="#"></a></li>');
			$j('#vc-bit_settings-panel .qfe_el_type_attach_video .gallery_widget_attached_images_list').unbind('click.removeImage').on('click.removeImage',  'a.icon-remove', function(e){
				e.preventDefault();
				var $block = $j(this).closest('.edit_form_line');
				$j(this).parent().remove();
				var img_ids = [];
				$block.find('.added img').each(function () {
					img_ids.push($(this).attr("rel"));
				});
				$block.find('.gallery_widget_attached_video_ids').val(img_ids.join(',')).trigger('change');
			});
	}
	var pc = p.find(".entry-content");
	if(pc.length>0 ){
		if(p.find(".entry-content").attr("data-content")){
			var content = base64_decode(p.find(".entry-content").attr("data-content"));
			if(content && content.indexOf("<p>")>-1){
				content = jQuery(content).text();
			}
		}else{
			var content = jQuery.trim(pc.text());
		}
		$j("#vc-bit_settings-panel .toPopEditor [name='content']").val(content);
	}else if( p.find(".description").length>0 ){
		var content = jQuery.trim( p.find(".description").text());
		$j("#vc-bit_settings-panel .toPopEditor [name='content']").val(content);
	}else{
		$j("#vc-bit_settings-panel .toPopEditor .qfe_el_type_textarea").remove();
	}
	var post_date = p.find(".post_date .post_date_text");
	if(post_date.length>0){
		var content = jQuery.trim(post_date.attr("data-date"));
		$j("#vc-bit_settings-panel .toPopEditor [name='post_date']").val(content);
	}else{
		$j("#vc-bit_settings-panel .toPopEditor .qfe_el_type_post_date").remove();
	}

	$j("#vc-bit_settings-panel .panel-footer").show();
	return false;

}

function saveEditorPost(form,post_id,new_model,oriobj){
	if(new_model){
		var id= new_model.get("id");
		var obj = iframeWin.jQuery("[data-model-id='"+id+"']");
	}else{
		//挂件区
		var obj = jQuery(oriobj).closest(".site_tooler");
		var list_id = obj.attr("id");
	}
	ajaxBeforeSave(form)
	jQuery(form).find("form").ajaxSubmit(function(data) {
		if(data=="success"){
			var contentPost = obj.find('.entry-content.post_content');
			if(contentPost==1){
				jAlert("友情提示：你当前设置摘要区域显示的是内容，而非摘要");
			}
			if(new_model){
				var p = obj.closest(".column_inner").parent();
				ajaxBeforeLoading(0,p);
				vc.ShortcodesBuilder.update(new_model);
			}else{
				//挂件区
				ajaxBeforeLoading(0,obj);
				updateWidgetViewEvent(list_id,obj);
			}
			ajaxAfterSave();
			jQuery(form).find(".vc-close").click();
		}else if(data=="empty"){
			ajaxAfterSave();
			jQuery(form).find(".vc-close").click();
			jAlert("请检查你的参数");
		}else {
			ajaxAfterSave();
			jQuery(form).find(".vc-close").click();
			jAlert("保存失败，请刷新后重试")
		}

    });

}
function selectCustom(obj){
	jQuery(obj).parent().find(".vc-shortcode-link").click();
}
function setCustom(obj){
	jQuery("#vc-add-element-dialog .vc-close").click();
	var p = jQuery(obj).parent();
	var custom_id = p.attr("data-element").replace("vc_column_text_custom_",""),imgId=p.attr("data-imageid");


	var htm = '<div  class="row vc-row qfe_edit_form_elements toPopEditor"><form method="post" id="editorCustomForm" action="/FeiEditor/siteEdit/saveCustom">';
	htm +='<input type="hidden" name="custom_id" />';
	htm +='<div class="col-md-12 vc-column qfe_el_type_textfield"><div class="qfe_element_label">标题</div><div class="edit_form_line"><input type="text" maxlength="2048" value="" class="qfe_vc_param_value qfe-textinput  textfield" name="title"></div></div>';
	htm +='<div class="col-md-12 vc-column  qfe_el_type_attach_image"><div class="qfe_element_label">背景图</div><div class="edit_form_line"><input type="hidden" value="" id="editor_image" name="editor_image" class="qfe_vc_param_value gallery_widget_attached_images_ids editor_image attach_image"><div class="gallery_widget_attached_images"><ul class="gallery_widget_attached_images_list ui-sortable"></ul></div><div class="gallery_widget_site_images"></div><a title="添加图片" use-single="true" href="#" class="gallery_widget_add_images">添加图片</a><span class="description clear">选择一个图像。</span></div></div>';
	htm +='</form></div>';
	$j("#vc-bit_settings-panel .panel-footer").hide();
	$j("#vc-bit_settings-panel .panel-title").html("编辑");
	var id= jQuery(obj).closest(".vc-vc_posts_grid").attr("data-model-id");
	var model = vc.shortcodes.get(id);
	vc.edit_bit_settings_view.render("saveCustom",custom_id,model);
	loadingAjax($j("#vc-bit_settings-panel .panel-body"));
	$j("#vc-bit_settings-panel .panel-body").html(htm);
	$j("#vc-bit_settings-panel .toPopEditor [name='custom_id']").val(custom_id);
	var title = p.attr("data-name");
	$j("#vc-bit_settings-panel .toPopEditor [name='title']").val(title);
	if(imgId>0){
		img = p.css("background-image");
		img = img.replace('url("','').replace('")','');
		$j("#vc-bit_settings-panel .toPopEditor [name='editor_image']").val(imgId);
		$j("#vc-bit_settings-panel .toPopEditor .gallery_widget_attached_images_list").html('<li class="added"><div style="width: 75px; height: 75px; overflow: hidden;text-align: center;" class="inner"><img src="'+img+'" rel="id"></div><a class="icon-remove" href="#"></a></li>');
		$j('#vc-bit_settings-panel .toPopEditor .gallery_widget_attached_images_list').unbind('click.removeImage').on('click.removeImage',  'a.icon-remove', function(e){
			e.preventDefault();
			var $block = $j(this).closest('.edit_form_line');
			$j(this).parent().remove();
			var img_ids = [];
			$block.find('.added img').each(function () {
				img_ids.push($(this).attr("rel"));
			});
			$block.find('.gallery_widget_attached_images_ids').val(img_ids.join(',')).trigger('change');
		});
	}
	$j("#vc-bit_settings-panel .panel-footer").show();
	return false;

}
function deleteCustom(obj){

	jConfirm("确认是否删除？",function(){
		var p = jQuery(obj).parent();
		var element = jQuery(obj).parent().attr("data-element");
		var id = element.replace("vc_column_text_custom_","");
		p.remove();
		jQuery.post("/FeiEditor/siteEdit/removeBitTemplate",{customId:id},function(data){

		})
	})

}

function redireactMenulink($column){

	$column.find("a:not(.thickbox):not(.control-btn):not(.no-opennew)").each(function() {
		if($j(this).closest(".menu-item").length==0){
			//$j(this).removeAttr("href");
			$j(this).attr("target","_blank");
		}else if($j(this).closest(".textwidget,.qfy-text").length>0){
			//$j(this).removeAttr("href");
			$j(this).attr("target","_blank");
		}else if($j(this).closest(".dl-container").length>0){
			//$j(this).removeAttr("href");
			$j(this).attr("target","_blank");
		}else{
			var href = $j(this).attr("href");
			//$j(this).removeAttr("href");
			if(href){
				$j(this).click(function(e){
					e.preventDefault();
					 e.stopPropagation();
					top.menuRedirect(href,$j(this));
					return false;
				});
			}

		}
	});
}

function bitshowBar(obj,flag){
	var title ="";
	var help = "";
	var classes = "";
	if(flag=="header"){
		title ="头部设置";
		help = "头部";
		classes = "header_control wf-mobile-hidden";
	}else if(flag=="footer"){
		title ="底部设置";
		help = "底部";
		classes = "footer_control";
	}else if(flag=="product"){
		title ="商品页面设置";
		help = "商品";
		classes = "product_control";
	}

	if(jQuery(obj).find(".extra_set_control").length>0){
		jQuery(obj).find(".extra_set_control").fadeIn("fast");
	}else{
		var str ='<div class="controls-column bitPcontrols extra_set_control vc-controls '+classes+'" >';
		str +='<div class="controls-out-tl">';
		str +='<div class="parent parent-vc_row active ">';
		str +='<a  class="control-btn  vc-element-name"><span class="vc-btn-content vo-btn-nomove" style="padding:0 5px 0 10px !important;  line-height: 18px !important;">'+title+'</span></a>';
		str +='<a  href="#" title="设置" class="control-btn control-btn-edit control-btn-qfy-edit" data-for="header" ><span class="vc-btn-content"><span class="icon" ></span></span></a>';
		if(flag=="product"){
			str +='<a title="定义颜色字体" href="#" class="control-btn bitPcontrolsChild control-btn-prepend control-btn-product-color" ><span class="vc-btn-content"><span class="icon" ></span></span></a>';
		}
		if(flag=="footer"){
			str +='<a title="改变 区块 分栏设置"  class="control-btn bitPcontrolsChild control-btn-prepend control-btn-qfy-prepend" ><span class="vc-btn-content"><span class="icon" style="background-position: 0 -60px;height:12px;"></span></span></a>';
		}

		str +='<a title="隐藏工具栏10秒钟" class="control-btn control-btn-hidden control-btn-qfy-hidden" data-for="header" ><span class="vc-btn-content"><span class="icon"></span></span></a>';

		if(flag=="header"){
			str += '<br><a title="更换头部的显示风格" style="padding-left:10px;padding-right:10px;margin-top:5px;cursor: pointer; text-align: left; background:#3e3e3e;color: rgb(255, 255, 255); text-decoration: none; position: relative; height: 18px; line-height: 18px; font-size: 13px ! important; width: 55px;" class="control-btn control-btn-qfy-edit-style ">更换风格</a>';
			str += '<br><a title="重置头部所有位移(包含手机端)" style="padding-left:10px;padding-right:10px;margin-top:5px;cursor: pointer; text-align: left; background:#3e3e3e;color: rgb(255, 255, 255); text-decoration: none; position: relative; height: 18px; line-height: 18px; font-size: 13px ! important; width: 55px;" class="control-btn control-btn-qfy-edit-logo ">重置LOGO</a>';
		}

		str +='</div>';
		str +='</div>';
		str +='</div>';
		jQuery(obj).prepend(str);
		jQuery(obj).find(".extra_set_control").fadeIn("fast");
	}

}
function image_style_change(obj){
	var val = jQuery(obj).val();
	var p = jQuery(obj).parent().parent();
	if(val==""){
		p.find(".image_corner").hide();
		p.find(".image_border").hide();
	}else if(val=="1"){
		p.find(".image_corner").show();
		p.find(".image_border").hide();
	}else {
		p.find(".image_corner").hide();
		p.find(".image_border").show();
	}
}

function qfy_product_style_set(content){
	if(!content || typeof(content) == undefined){
		content = iframeWin.jQuery("body");
	}

	if(qfy_global_product_style && (content.find(".bitcommerce").length>0|| content.find(".QFBOOKSearch-wrapper").length>0) ){
	  for(var classname in qfy_global_product_style){
			var to = qfy_global_product_style[classname];
			var obj = content.find(classname);
			if(classname==".product_mobilemeta_warp"){
				obj = iframeWin.jQuery(".product_mobilemeta_warp");
			}
			if(obj.find(".color_set_img").length==0){

				if(obj.hasClass("variations") && obj.find("select").length>0 ){
					obj = obj.find(".label:first");
				}
				obj.attr("data-to",to).css("position","relative").mouseenter(function(){
					if(jQuery(this).find(".color_set_img").length==0){
						jQuery(this).append('<img src="/qfy-content/plugins/qfy_editor/inline/assets/vc/color_panel_new.png" title="商品样式自定义" style="background:none;padding:0;margin:0;border:none;display: none;position: absolute;vertical-align: middle;right:0px;top:50%;width: 20px;height:20px;margin-top:-9px;border-radius:0;box-shadow:none;cursor:pointer;z-index:1000000;" class="color_set_img" />');
						jQuery(this).find(".color_set_img").click(function(e){
							e.stopPropagation();
							e.preventDefault();
							vc.vc_edit_productcolor_dialog.render("",jQuery(this).parent().attr("data-to"));
							return false;
						});
					}

					jQuery(this).find(".color_set_img").css("display","inline-block").show();
				}).mousemove(function(){
					jQuery(this).find(".color_set_img").css("display","inline-block").show();
				})
				.mouseleave(function(){
					 jQuery(this).find(".color_set_img").hide();
				});
			}
		}
	}

}



function qfy_product_style_preview(key){
	jQuery.post("/FeiEditor/siteEdit/update_product_style",{"key":key},function(){
		location.reload();
	});
}
function widget_from_colorpicker(p){

	p.find('.bit-color-control').qfColorPicker();
	p.find('.vc-color-control-special').qfColorPicker({
    	  change: function(event, ui){
    		  if(jQuery(this).hasClass("useSameColor")){
    			 var color =  ui.color.toString();
    			 $this = this;
    			 var p = jQuery(this).parents(".set_header_border_div");
    			 if(p.length>0){
	    			  if(p.find("[name='useSameSetting']").attr("checked")=="checked"){
	    				  p.find(".useSameColor").each(function(){
	    					  if($this!=this ){
	    						  jQuery(this).val(color).change();
	    					  }
	    				  })
	    			  }
    			 }else{
    				  p = jQuery(this).parents(".set_content_border_div");
    				  if(p.length==0) p= jQuery(this).parents(".set_border_table");
	    			  if(p.find("[name='useSameSetting']").attr("checked")=="checked"){
	    				  p.find(".useSameColor").each(function(){
	    					  if($this!=this ){
	    						  jQuery(this).val(color).change();
	    					  }
	    				  })
	    			  }
    			 }

    		  }
    	   },
    	   clear: function(event){
    		   var p = jQuery(this).parent().find(".useSameColor");
    		   if(p.length==1){
    				 var pdiv = jQuery(this).parents(".set_header_border_div");
    				 if(pdiv.length>0){
    					  if(pdiv.find("[name='useSameSetting']").attr("checked")=="checked"){
    						  pdiv.find(".set_border_table .qf-color-result").attr("style","");
    						  pdiv.find(".set_border_table .useSameColor ").val("");
	  	     			  }
	    			 }else{
	    				 pdiv = jQuery(this).parents(".set_content_border_div");
	    				 if(pdiv.length==0) pdiv= jQuery(this).parents(".set_border_table");
	    				 if(pdiv.find("[name='useSameSetting']").attr("checked")=="checked"){
	    					  pdiv.find(".set_border_table .qf-color-result").attr("style","");
	    					  pdiv.find(".set_border_table .useSameColor ").val("");
	  	     			  }
		    		 }
    		   }

     	   },
    	});

}



function base64_encode(str){var str=toUTF8(str);var base64EncodeChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");var out,i,j,len,r,l,c;i=j=0;len=str.length;r=len%3;len=len-r;l=(len/3)<<2;if(r>0){l+=4}out=new Array(l);while(i<len){c=str.charCodeAt(i++)<<16|str.charCodeAt(i++)<<8|str.charCodeAt(i++);out[j++]=base64EncodeChars[c>>18]+base64EncodeChars[c>>12&63]+base64EncodeChars[c>>6&63]+base64EncodeChars[c&63]}if(r==1){c=str.charCodeAt(i++);out[j++]=base64EncodeChars[c>>2]+base64EncodeChars[(c&3)<<4]+"=="}else{if(r==2){c=str.charCodeAt(i++)<<8|str.charCodeAt(i++);out[j++]=base64EncodeChars[c>>10]+base64EncodeChars[c>>4&63]+base64EncodeChars[(c&15)<<2]+"="}}return out.join("")};
function base64_decode(str){var base64DecodeChars=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1];var c1,c2,c3,c4;var i,j,len,r,l,out;len=str.length;if(len%4!=0){return""}if(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(str)){return""}if(str.charAt(len-2)=="="){r=1}else{if(str.charAt(len-1)=="="){r=2}else{r=0}}l=len;if(r>0){l-=4}l=(l>>2)*3+r;out=new Array(l);i=j=0;while(i<len){c1=base64DecodeChars[str.charCodeAt(i++)];if(c1==-1){break}c2=base64DecodeChars[str.charCodeAt(i++)];if(c2==-1){break}out[j++]=String.fromCharCode((c1<<2)|((c2&48)>>4));c3=base64DecodeChars[str.charCodeAt(i++)];if(c3==-1){break}out[j++]=String.fromCharCode(((c2&15)<<4)|((c3&60)>>2));c4=base64DecodeChars[str.charCodeAt(i++)];if(c4==-1){break}out[j++]=String.fromCharCode(((c3&3)<<6)|c4)}return toUTF16(out.join(""))};
function toUTF8(str){if(str.match(/^[\x00-\x7f]*$/)!=null){return str.toString()}var out,i,j,len,c,c2;out=[];len=str.length;for(i=0,j=0;i<len;i++,j++){c=str.charCodeAt(i);if(c<=127){out[j]=str.charAt(i)}else{if(c<=2047){out[j]=String.fromCharCode(192|(c>>>6),128|(c&63))}else{if(c<55296||c>57343){out[j]=String.fromCharCode(224|(c>>>12),128|((c>>>6)&63),128|(c&63))}else{if(++i<len){c2=str.charCodeAt(i);if(c<=56319&&56320<=c2&&c2<=57343){c=((c&1023)<<10|(c2&1023))+65536;if(65536<=c&&c<=1114111){out[j]=String.fromCharCode(240|((c>>>18)&63),128|((c>>>12)&63),128|((c>>>6)&63),128|(c&63))}else{out[j]="?"}}else{i--;out[j]="?"}}else{i--;out[j]="?"}}}}}return out.join("")};
function toUTF16(str){if((str.match(/^[\x00-\x7f]*$/)!=null)||(str.match(/^[\x00-\xff]*$/)==null)){return str.toString()}var out,i,j,len,c,c2,c3,c4,s;out=[];len=str.length;i=j=0;while(i<len){c=str.charCodeAt(i++);switch(c>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:out[j++]=str.charAt(i-1);break;case 12:case 13:c2=str.charCodeAt(i++);out[j++]=String.fromCharCode(((c&31)<<6)|(c2&63));break;case 14:c2=str.charCodeAt(i++);c3=str.charCodeAt(i++);out[j++]=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));break;case 15:switch(c&15){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:c2=str.charCodeAt(i++);c3=str.charCodeAt(i++);c4=str.charCodeAt(i++);s=((c&7)<<18)|((c2&63)<<12)|((c3&63)<<6)|(c4&63)-65536;if(0<=s&&s<=1048575){out[j++]=String.fromCharCode(((s>>>10)&1023)|55296,(s&1023)|56320)}else{out[j++]="?"}break;case 8:case 9:case 10:case 11:i+=4;out[j++]="?";break;case 12:case 13:i+=5;out[j++]="?";break}}}return out.join("")};

function widget_title_hoveredit(obj){
	obj.unbind().bind("mouseenter",function() {
		if (obj.find(".bit-controls-element-1").length > 0) {
			obj.find(".bit-controls-element-1").show();
		} else {
			var str = '<div class="controls-element vc-controls bit-controls-element-1"  style="line-height:0px;opacity:1;visibility:visible;transition:auto">';
			str += '<div class="controls-cc">';
			str += '<a class="control-btn vc-element-name">';
			str += '<span  class="vc-btn-content vo-btn-nomove">标题</span>';
			str += '</a>';
			str += '<a title="编辑"  class="control-btn control-btn-edit  bit-set-widgetheader" ><span class="vc-btn-content"><span class="icon"></span></span></a>';
			str += '</div>';
			str += '</div>';
			obj.prepend(str);
			obj.find(".controls-element").show();

			obj.find(".bit-set-widgetheader").bind("click",function(){
				var id = obj.parent().attr("id");
				var title = obj.find(".bit_widget_title").html();
				top.jConfirm('<div >插件标题：<input type="text" style="border:1px solid #ddd;padding:2px;width:250px;" value="'+title+'" name="tmp_pop_title"></div>',function(){
					var newTitle = top.jQuery("[name='tmp_pop_title']").val();
					obj.find(".bit_widget_title").html(newTitle);
					$j.post("/FeiEditor/siteEdit/updateWidget" ,{id:id,title:newTitle}, function(data){
						if(data!="success"){
							jAlert("保存未成功！");
							obj.find(".bit_widget_title").html(title);
						}
					});
				},function(){
				},"修改标题")
			})
		}
	}).bind("mouseleave", function() {
		$j(this).find(".controls-column").hide();
	});

}
function slider_type_fun(){
	var isfullpage = 0;
	if(iframeWin.jQuery("body").hasClass("page-template-template-fullscreen-php")){
		isfullpage = 1;
	}
	if(isfullpage=="1"){
		$j(".slideSetDiv #slider_type").closest(".row").hide();
	}
	var v = $j(".slideSetDiv #slider_type").val();
	if(v=="fullwidth"){
		$j(".slideSetDiv .slide_width").hide();
		$j(".slideSetDiv .slide_height").show();
	}else if(v=="fixed"){
		$j(".slideSetDiv .slide_width").show();
		$j(".slideSetDiv .slide_height").show();
	}else if(v=="fullscreen"){
		$j(".slideSetDiv .slide_width").hide();
		$j(".slideSetDiv .slide_height").hide();
	}

	var v = $j(".slideSetDiv #navigation_arrows").val();
	var v1 = $j(".slideSetDiv #navigation_arrows_style").val();
	if(v=="none"){
		$j(".slideSetDiv .navigation_arrows_style_div").hide();
		$j(".slideSetDiv .navigation_arrows_style_custom").hide();
	}else{
		$j(".slideSetDiv .navigation_arrows_style_div").show();
		if(v1=="new1"||v1=="new2"){
			$j(".slideSetDiv .navigation_arrows_style_custom").show();
		}else{
			$j(".slideSetDiv .navigation_arrows_style_custom").hide();
		}
	}

	var v = $j(".slideSetDiv #navigation_style").val();
	if(v=="new1"||v=="new2"||v=="new3"){
		$j(".slideSetDiv .navigation_style_custom").show();
	}else{
		$j(".slideSetDiv .navigation_style_custom").hide();
	}


}
function mobile_topbar(){
	parent.qfHeaderSetting("mobile_topbar");
}
function mobile_menubar(){
	parent.qfHeaderSetting("mobile_menubar");
}
function mobile_topbarcolor(){
	parent.qfMenuSetting("mobile_menucolor");
}
function mobile_sliderbar(){
	if(iframeWin){
		var obj =  iframeWin.jQuery("#bitBanner .bitImageControlDiv .rev_slider_wrapper");
		var sliderId = obj.attr("bitdatalocation");
		var sliderObj = eval("iframeWin.revapi" + sliderId);
		obj.find("li.bitSliderLi").each(function() {
			if ($j(this).css("z-index") == "20") {
				slideId = $j(this).attr("data-slideid");
				slidedom = $j(this);
			}
		});
		vc.edit_slide_block_view.render(sliderId, slideId, sliderObj,slidedom,"set",obj);
		sliderObj.revpause();
		//obj.find(".tp-loader").show();
		bitSiteSlideAction(obj, "set", sliderObj);
	}
}
function mobile_sliderimagebar(){
	var wid = iframeWin.jQuery("#bitBanner .bitImageControlDiv.bitBanner").attr("id");
	vc.edit_widget_block_view.render(false);
	ajaxGetWidgetForm(wid);
}
function mobile_cartimagebar(){
	parent.footerSlidersSetting("mobile_cartimagebar");
}
function mobile_bottommenubar(){
	parent.footerSlidersSetting("mobile_bottommenubar");
}
function setting_qfy_advertising(){
	var htm = '<div  class="row vc-row qfe_edit_form_elements toPopEditor"><form method="post" id="editorForm" action="/FeiEditor/siteEdit/savepost">';

	htm +='<div class="col-md-12 vc-column qfe_el_type_textfield"><div class="qfe_element_label"><div style="padding:50px;">亲，底标是试用版才有的。<br/><br/>升级到任何一个付费版本之后，底标会自动消失。其它情况下，它永远都在那里。<br/><br/> Forever...</div></div></div>';


	htm +='</form></div>';
	$j("#vc-bit_settings-panel .panel-footer").hide();

	$j("#vc-bit_settings-panel .panel-title").html("关于底标");

	vc.edit_bit_settings_view.render("saveadvertising",0);
	loadingAjax($j("#vc-bit_settings-panel .panel-body"));
	$j("#vc-bit_settings-panel .panel-body").html(htm);


	$j("#vc-bit_settings-panel .panel-footer").show();

	return false;

}
function editorLineBar(paddingleft,paddingright,flag){
	var lineclass="";
	if(flag=="topbar" || flag=="header" || flag=="bottombitbar" || flag=="footer"|| flag=="floatmenubitbar" ){
		var addelement = '';
		var lineclass = 'no-add-element';
	}else{
		var addelement = '<div class="add-element"></div>';
	}
	flag = flag+"-control";
	var controls = '<div class="no-controls vc-resize-linebar '+lineclass+" "+flag+'" style="display:none;"><div class="line" style="height:2px;"></div><div class="drag-element" title="上下拖动"></div><div class="drag-element-value"></div>'+addelement+'<div class="drag-element-right" title="上下拖动"></div><div class="drag-element-right-value"></div></div>';
	var controls_x_left = '<div class="vc-resize-x-left-bar" title="左右拖动" ></div><div class="vc-resize-x-v">左内:'+paddingleft+'</div>';
	var controls_x_right = '<div class="vc-resize-x-right-bar" title="左右拖动" ></div><div class="vc-resize-x-r-v">右内:'+paddingright+'</div>';
	var controls_container = '<div class="vc-resize-controls_container big '+flag+'-container" ><div class="vc-resize-controls_inner">'+controls+controls_x_left+controls_x_right+'</div></div>';
	return controls_container;
}
function editorSmallLineBar(divclass){

	var tmp_str ='<div class="other_controls"><span class="control_left">靠左</span><span class="control_right">靠右</span><span class="control_center">居中</span><span class="control_align  ">横排</span><span class="control_valign " style="margin-right:0;">竖排</span></span>';
	var str ='<div class="vc-resize-controls_container vc-resize-column-bar '+divclass+'"><div class="vc-resize-controls_inner"><div class="vc-resize-linebar"><div class="line" ></div><div title="上下拖动" class="drag-element"></div><div class="drag-element-value"></div><div class="add-element emptyFix" title="添加零件"></div><div title="上下拖动" class="drag-element-right"></div><div class="drag-element-right-value"></div></div><div title="左右拖动" class="vc-resize-x-left-bar"></div><div class="vc-resize-x-v" style="display: none;"></div><div title="左右拖动" class="vc-resize-x-right-bar"></div><div class="vc-resize-x-r-v"></div>'+tmp_str+'</div></div>'

	return str;
}
function editorSmallLineBar2(divclass){

	var tmp_str ='<div class="other_controls" style="width:100px;"><span class="control_left">靠左</span><span class="control_right">靠右</span><span class="control_center">居中</span></span>';
	var str ='<div class="vc-resize-controls_container vc-resize-column-bar '+divclass+'" ><div class="vc-resize-controls_inner" style="top:-10px;"><div class="vc-resize-linebar"><div class="line" ></div><div class="add-element emptyFix" title="添加零件"></div></div><div title="左右拖动" class="vc-resize-x-left-bar"></div><div class="vc-resize-x-v" style="display: none;"></div><div title="左右拖动" class="vc-resize-x-right-bar"></div><div class="vc-resize-x-r-v"></div>'+tmp_str+'</div></div>'

	return str;
}
function editorSmallLineBar3(divclass){
	var tmp_str = "";
	var str ='<div class="vc-resize-controls_container vc-resize-column-bar '+divclass+'"><div class="vc-resize-controls_inner"><div class="vc-resize-linebar"><div class="line" ></div><div title="上下拖动" class="drag-element"></div><div class="drag-element-value"></div><div class="add-element emptyFix" title="添加零件"></div><div class="set" title="设置"></div><div title="上下拖动" class="drag-element-right"></div><div class="drag-element-right-value"></div></div><div title="左右拖动" class="vc-resize-x-left-bar"></div><div class="vc-resize-x-v" style="display: none;"></div><div title="左右拖动" class="vc-resize-x-right-bar"></div><div class="vc-resize-x-r-v"></div>'+tmp_str+'</div></div>'

	return str;
}
function floatmenucontrols_mouseenter(){
	if(iframeWin.jQuery("#phantom").length>0 ){
		var isfullpage = 0;
		if(iframeWin.jQuery("body").hasClass("page-template-template-fullscreen-php")){
			isfullpage = 1;
		}
		var $column = iframeWin.jQuery("body");
		var phantom = iframeWin.jQuery("#phantom");
		if( phantom.find(".vc-resize-controls_container").length==0){
			var phantomcontent = phantom.find(".ph-wrap-content");
			var phantominner = phantom.find(".ph-wrap-inner");
			phantomcontent.append(editorLineBar(0,0,"floatmenubitbar"));
			var phantom_start_height = 0;
			var phantom_start_top = 0;
			var phantom_start_left = 0;
			var phantom_start_right = 0;

			phantom.find(".vc-resize-controls_container.big").draggable({axis: "y",
				handle: ".vc-resize-linebar",
				helper: function() {
					return $j("<div></div>");
				},
				start: function( event, ui ) {
					phantom_start_height = phantominner.height();
					phantom_start_top = ui.position.top;
					phantom.find(".big .drag-element-right-value,.big .drag-element-value").show();
				},
				stop: function( event, ui ) {
					var current_value = phantominner.height();
					phantom.find(".big .drag-element-right-value,.big .drag-element-value").html("").hide();

					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"floatmenubar-bg_height":current_value});

				},
				drag: function( event, ui ) {

					var nowpx = phantom_start_height - (phantom_start_top - ui.position.top) ;
					phantominner.css("height",nowpx+"px");
					phantom.find(".big .drag-element-right-value,.big .drag-element-value").html("高度:"+(nowpx>0?nowpx:0)+"px");
				}
			})
			phantom.find(".big .vc-resize-x-left-bar").draggable({axis: "x",
					helper: function() {
						return $j("<div></div>");
					},
					start: function( event, ui ) {
						var current_value = phantomcontent.css("padding-left");
						if(current_value) current_value = current_value.replace("px","");
						if(isNaN(current_value))current_value = 0;
						phantom_start_left = current_value*1 + ui.position.left*1;
						$j(this).next().show();
					},
					stop: function( event, ui ) {
						var current_value = phantomcontent.css("padding-left");
						if(current_value) current_value = current_value.replace("px","");
						if(isNaN(current_value))current_value = 0;
						$j(this).next().html("").hide();

						$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"bit-floatmenubar-left-padding":current_value});

					},
					drag: function( event, ui ) {
						var nowpx = phantom_start_left + ui.position.left;
						phantomcontent.css("padding-left",nowpx+"px");
						$j(this).next().html("左内:"+(nowpx>0?nowpx:0)+"px");
					}
			});

			phantom.find(".big .vc-resize-x-right-bar").draggable({axis: "x",
					helper: function() {
						return $j("<div></div>");
					},
					start: function( event, ui ) {
						var current_value = phantomcontent.css("padding-right");
						if(current_value) current_value = current_value.replace("px","");
						if(isNaN(current_value))current_value = 0;
						phantom_start_right = current_value*1 + ui.position.left*1;
						$j(this).next().show();
					},
					stop: function( event, ui ) {
						var current_value = phantomcontent.css("padding-right");
						if(current_value) current_value = current_value.replace("px","");
						if(isNaN(current_value))current_value = 0;
						$j(this).next().html("").hide();

						$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"bit-floatmenubar-right-padding":current_value});

					},
					drag: function( event, ui ) {
						var nowpx = phantom_start_right - ui.position.left;
						phantomcontent.css("padding-right",nowpx+"px");
						$j(this).next().html("右内:"+(nowpx>0?nowpx:0)+"px");
					}
			});

			var menu_info_box = phantom.find(".menu-info-box");
			menu_info_box.append(editorSmallLineBar3("menuinfobox"));
			menu_info_box.find(".set").click(function(){
				vc.setting_widget_dialog10.render("bitHeader-3");
			});
			menu_info_box.find(".emptyFix").click(function() {
				var rlt = 'bitHeader-3';
				var portal = new vc.BitModel({
					sid : rlt
				});
				vc.add_header2_block_view.render(portal);
			})
			var menu_start_width = 0;
			var menu_start_left = 0;
			var menu_start_right = 0;
			menu_info_box.find(".vc-resize-x-left-bar").draggable({axis: "x",
					helper: function() {
						return $j("<div></div>");
					},
					start: function( event, ui ) {
						menu_start_width = menu_info_box.width();
						menu_start_left =  ui.position.left*1;
						$j(this).next().show();
					},
					stop: function( event, ui ) {
						var current_value = menu_info_box.width();
						$j(this).next().html("").hide();
						$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"header-floating_menu_rightwidth":current_value});

					},
					drag: function( event, ui ) {
						var nowpx = menu_start_width+(menu_start_left - ui.position.left);
						menu_info_box.width(nowpx);
						$j(this).next().html("宽度:"+(nowpx>0?nowpx:0)+"px");
					}
			});

			menu_info_box.find(".vc-resize-x-right-bar").draggable({axis: "x",
					helper: function() {
						return $j("<div></div>");
					},
					start: function( event, ui ) {
						menu_start_width = menu_info_box.width();
						menu_start_right = ui.position.left*1;
						$j(this).next().show();
					},
					stop: function( event, ui ) {
						var current_value = menu_info_box.width();
						$j(this).next().html("").hide();
						$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"header-floating_menu_rightwidth":current_value});

					},
					drag: function( event, ui ) {
						var nowpx = menu_start_width + (menu_start_right - ui.position.left);
						menu_info_box.width(nowpx);
						$j(this).next().html("宽度:"+(nowpx>0?nowpx:0)+"px");
					}
			});

			menu_info_box.find(".control_left").click(function(){
				menu_info_box.addClass("align_left").removeClass("align_right align_center");
				$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"header-floating_menu_rightalign":'align_left'});
			});
			menu_info_box.find(".control_center").click(function(){
				menu_info_box.addClass("align_center").removeClass("align_right align_left");
				$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"header-floating_menu_rightalign":'align_center'});
			});
			menu_info_box.find(".control_right").click(function(){
				menu_info_box.addClass("align_right").removeClass("align_left align_center");
				$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"header-floating_menu_rightalign":'align_right'});
			});

		}
		phantom.find(".vc-resize-linebar,.vc-resize-x-left-bar,.vc-resize-x-right-bar,.other_controls,.vc-resize-controls_container.menuinfobox").show();

	}
}
function floatmenucontrols_mouseout(){
	if(iframeWin.jQuery("#phantom").length>0 ){
		var phantom = iframeWin.jQuery("#phantom");
		phantom.find(".vc-resize-linebar,.vc-resize-x-left-bar,.vc-resize-x-right-bar,.other_controls,.vc-resize-controls_container.menuinfobox").hide();
	}
}
function headermovecontrols($column,isfullpage){
	if($column.get(0).tagName!="BODY"){
		$column = $column.closest("body");
	}
	var menunav_start_left = 0;
	var menunav_start_top = 0;
	if($column.find("#header .navigation-holder").length==0){
		var menu_nav = $column.find("#header.menuPosition #navigation #main-nav");
	}else{
		var menu_nav = $column.find("#header.menuPositionHolder .navigation-holder");
	}
	$column.find("#header .move_menu").css("position","relative").draggable({
			helper: function() {
				return $j("<div></div>");
			},
			containment: "#header",
			start: function( event, ui ) {
				var current_value = menu_nav.css("left");
				if(current_value) current_value = current_value.replace("px","");
				if(isNaN(current_value))current_value = 0;
				menunav_start_left = current_value*1 + ui.position.left*1;
				current_value = menu_nav.css("top");
				if(current_value) current_value = current_value.replace("px","");
				if(isNaN(current_value))current_value = 0;
				menunav_start_top = current_value*1 + ui.position.top*1;
				guideline_start(event,jQuery(this).closest("#navigation"),"logo");
			},
			stop: function( event, ui ) {
				menu_nav.find(".navigation-drop-value").html("");
				var current_value = menu_nav.css("left");
				if(current_value) current_value = current_value.replace("px","");
				if(isNaN(current_value))current_value = 0;

				current_value2 = menu_nav.css("top");
				if(current_value2) current_value2 = current_value2.replace("px","");
				if(isNaN(current_value2))current_value2 = 0;
				$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"bit-header-position-left":current_value,"bit-header-position-top":-current_value2});
				 guideline_end();
			},
			drag: function( event, ui ) {
				var nowpx = menunav_start_left + ui.position.left;
				menu_nav.css("left",nowpx+"px");
				var nowpx2 = menunav_start_top + ui.position.top;
				menu_nav.css("top",nowpx2+"px");
				guideline_draw(event,jQuery(this).closest("#navigation"),null);
			}
	});
}
function headerlogotextmovecontrols($column,isfullpage){
	var logtext_start_left = 0;
	var logtext_start_top = 0;
	var logcontrol = $column.find(".controls-element.bit-controls-element");
	var logtext = $column.find("#branding .bitem.text");
	$column.find("#bit-logoText .logotext_outner").prepend('<div class="ui-custom-drop-container" style="left: 50%; display: none; top: 50%; position: absolute; margin-left: -8px; margin-top: -10px;"><div class="ui-custom-drop" title="移动Logo文字"></div><div class="ui-custom-drop-value" ></div></div><div class="edit_logotext bit-set-logobar"><div></div></div>');
	if($column.find("#header .menu-center-nav").length==0){
		containment = $column.find("#branding");
	}else{
		containment = "#header .menu-center-nav";
	}
	$column.find("#branding .text .ui-custom-drop").draggable({
			helper: function() {
				return $j("<div></div>");
			},
			containment:containment,
			start: function( event, ui ) {
				logtext.css("position","relative");
				var current_value = logtext.css("left");
				if(current_value) current_value = current_value.replace("px","");
				if(isNaN(current_value))current_value = 0;
				logtext_start_left = current_value*1 + ui.position.left*1;
				current_value = logtext.css("top");
				if(current_value) current_value = current_value.replace("px","");
				if(isNaN(current_value))current_value = 0;
				logtext_start_top = current_value*1 + ui.position.top*1;
				//$j(this).next().show();
				logcontrol.hide();
				guideline_start(event,logtext.find("#bit-logoText"),"logo");
			},
			stop: function( event, ui ) {
				//logtext.find(".navigation-drop-value").html("");
				var current_value = logtext.css("left");
				if(current_value) current_value = current_value.replace("px","");
				if(isNaN(current_value))current_value = 0;
				//$j(this).next().hide();
				current_value2 = logtext.css("top");
				if(current_value2) current_value2 = current_value2.replace("px","");
				if(isNaN(current_value2))current_value2 = 0;
				if($column.width()>768 ){
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"bit-logotext-position-left":current_value,"bit-logotext-position-top":current_value2});
				}else{
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"mobilebit-logotext-position-left":current_value,"mobilebit-logotext-position-top":current_value2});
				}
				guideline_end();
			},
			drag: function( event, ui ) {
				var nowpx = logtext_start_left + ui.position.left;
				logtext.css("left",nowpx+"px");
				var nowpx2 = logtext_start_top + ui.position.top;
				logtext.css("top",nowpx2+"px");
				$j(this).next().html("X: "+Math.ceil(nowpx)+"px Y:"+Math.ceil(nowpx2)+"px");
				guideline_draw(event,jQuery(this),null);

			}

	}).mouseenter(function(){
		if($j(this).next().html()==""){
			var current_value = logtext.css("left");
			if(current_value) current_value = current_value.replace("px","");
			if(isNaN(current_value))current_value = 0;

			current_value2 = logtext.css("top");
			if(current_value2) current_value2 = current_value2.replace("px","");
			if(isNaN(current_value2))current_value2 = 0;
			$j(this).next().html("X: "+current_value+"px Y:"+current_value2+"px");
		}
		$j(this).next().show();
	}).mouseleave(function(){
		$j(this).next().html("").hide();
	})
	var logo = $column.find(".bitem.logo");

    $column.find(".bitem.logo .logospan").prepend('<div class="ui-custom-drop-container logoposition" style="display:none;position:absolute;left:50%;top:50%;margin-top:-9px;margin-left:-9px;z-index:1"><div class="ui-custom-drop" title="移动图片"></div><div class="ui-custom-drop-value" ></div></div>');
	var logo_start_left = 0;
	var logo_start_top = 0;
	if(logo.closest(".menu-center-nav").length==0){
		containment = "#header .wf-table:first";
	}else{
		containment = "#header .menu-center-nav";
	}
	logo.find(".logoposition .ui-custom-drop").draggable({
			helper: function() {
				return $j("<div></div>");
			},
			containment: containment,
			start: function( event, ui ) {
				var current_value = logo.css("left");
				if(current_value) current_value = current_value.replace("px","");
				if(isNaN(current_value))current_value = 0;
				logo_start_left = current_value*1 + ui.position.left*1;
				current_value = logo.css("top");
				if(current_value) current_value = current_value.replace("px","");
				if(isNaN(current_value))current_value = 0;
				logo_start_top = current_value*1 + ui.position.top*1;
				//$j(this).next().show();
				logcontrol.hide();
				guideline_start(event,logo.find("img"),"logo");
			},
			stop: function( event, ui ) {

				var current_value = logo.css("left");
				if(current_value) current_value = current_value.replace("px","");
				if(isNaN(current_value))current_value = 0;
				//$j(this).next().html("").hide();
				current_value2 = logo.css("top");
				if(current_value2) current_value2 = current_value2.replace("px","");
				if(isNaN(current_value2))current_value2 = 0;
				if($column.width()>768 ){
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"bit-logo-position-left":current_value,"bit-logo-position-top":current_value2});
				}else{
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"mobilebit-logo-position-left":current_value,"mobilebit-logo-position-top":current_value2});
				}
				guideline_end();
			},
			drag: function( event, ui ) {
				var nowpx = logo_start_left + ui.position.left;
				logo.css("left",nowpx+"px");
				var nowpx2 = logo_start_top + ui.position.top;
				logo.css("top",nowpx2+"px");
				$j(this).next().html("X: "+Math.ceil(nowpx)+"px Y:"+Math.ceil(nowpx2)+"px");
				guideline_draw(event,jQuery(this),null);
			}

	}).mouseenter(function(){
		if($j(this).next().html()==""){
			var current_value = logo.css("left");
			if(current_value) current_value = current_value.replace("px","");
			if(isNaN(current_value))current_value = 0;

			current_value2 = logo.css("top");
			if(current_value2) current_value2 = current_value2.replace("px","");
			if(isNaN(current_value2))current_value2 = 0;
			$j(this).next().html("X: "+current_value+"px Y:"+current_value2+"px");
		}
		$j(this).next().show();
	}).mouseleave(function(){
		$j(this).next().html("").hide();
	});

	$column.find(".bitem.logo .logospan").prepend('<div class="ui-custom-drop-container logosize" style="bottom:23px;display:none;position:absolute;right:18px;z-index:2"><div class="ui-custom-drop" title="拉伸图片"></div><div class="ui-custom-drop-value" ></div></div>');
	$column.find(".bitem.logo .logospan").prepend('<div class="ui-custom-drop-container resize" style="display:none;position:absolute;right:0px;;top:0px;z-index:3;"><div class="ui-custom-drop changeimage" title="设置" ></div><div class="ui-custom-drop restore" title="重置头部所有位移(包含手机端)"></div></div>');

	var logo_start_x = 0;
	var logo_start_y = 0;
	var logo_old_size = 0;
	var logoimg = logo.find("img");
	logo.find(".logosize .ui-custom-drop").draggable({
			helper: function() {
				return $j("<div></div>");
			},

			start: function( event, ui ) {
				logoimg = logo.find("img:visible");
				var current_value = logoimg.width();
				logo_start_x = current_value*1 + ui.position.left*1;
				current_value = logoimg.height();
				logo_start_y = current_value*1 + ui.position.top*1;
				//$j(this).next().show();
				logo_old_size = logoimg.width()/logoimg.height();
				logcontrol.hide();
				guideline_start(event,logo.find("img"),"logo");
			},
			stop: function( event, ui ) {
				var current_value = logoimg.width();
				//$j(this).next().html("").hide();
				var current_value2 = logoimg.height();
				if($column.width()>768 ){
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"bit-logo-width":current_value,"bit-logo-height":current_value2});
				}else{
					$j.post("/FeiEditor/siteEdit/updateOneOption/"+isfullpage ,{"mobilebit-logo-width":current_value,"mobilebit-logo-height":current_value2});
				}
				if($column.find("#header.logo-left-right #navigation ul.ab-center").length>0){
					var v1 = $column.find("#header #branding").width();
					var v2 = $column.find("#header .assistive-info .top-bar-right").width();
					$column.find("#header #navigation #main-nav").css("text-align","center").css("left",(v2-v1)/2+"px");
				}
				guideline_end();
			},
			drag: function( event, ui ) {
				//var nowpx = logo_start_x + ui.position.left;
				var nowpx2 = logo_start_y + ui.position.top;
				logoimg.height(nowpx2).css("max-height",nowpx2+"px");
				logo.css("max-height",nowpx2+"px");
				logoimg.width(logo_old_size*nowpx2);
				nowpx = logoimg.width();
				$j(this).next().html("W: "+Math.ceil(nowpx)+"px H:"+Math.ceil(nowpx2)+"px");
				guideline_draw(event,jQuery(this),null);

			}

	})
	logo.find(".ui-custom-drop-container.logosize").mouseenter(function(){
		var t = $j(this).find(".ui-custom-drop-value");
		if(t.html()==""){
			var current_value = logoimg.width();
			var current_value2 = logoimg.height();
			t.html("W: "+current_value+"px H:"+current_value2+"px");
		}
		t.show();
	}).mouseleave(function(){
		var t = $j(this).find(".ui-custom-drop-value");
		t.hide();
	});
	logo.find(".ui-custom-drop-container.resize .restore").click(function(){
		top.jConfirm('确认是否重置头部各位移参数,恢复默认状态？',function(){
				var pageid = top.jQuery("#pageUrl").val();
				var str ="";
				if(isfullpage=="1"){
					str = "?isfullsliderpage=1";
				}
				$j.post("/FeiEditor/siteEdit/cleanheaderpositionoption/"+isfullpage+str,{qfy_pageid:pageid},function(data){
					if(data.indexOf("|<result>|")>-1){
						reloadheaderevents(data);
					}else{
						location.reload();
					}
				});
			},function(){
			},"重置参数")
		return false;
	});
	logo.find(".ui-custom-drop-container.resize .changeimage").click(function(){
		if(logo.find("img.wf-mobile-visible-inline:visible").length>0){
			mobile_topbar();
		}else{
			top.logobarSetting();
		}
		return false;
	})
	$column.find("#bit-logoText .bit-set-logobar").bind("click",function(){
		top.logobarSetting("section-bit-logo-height");
		return false;
	})

}
function header_absolute_generate(obj){
	if (obj.find(".header-controls-element-top").length == 0) {

		var str = '<div class="controls-element vc-controls header-controls-element-top wf-mobile-hidden"  style="left:50%;background:#f9b418;opacity: 1; visibility: visible; transition: auto 0s ease 0s; display: block; position: absolute; z-index: 10000; line-height: 0; top: 10px;margin:10px 10px;">';
		str += '<div class="controls-cc" style="background:#f9b418;">';
		str += '<a  style="cursor: pointer; text-align: left; opacity: 1;background:#f9b418; color: rgb(255, 255, 255); text-decoration: none; position: relative; height: 20px; line-height: 20px; font-size: 20px ! important; padding:5px !important;" class="control-btn absolute_header_div_show">点击编辑被头部遮罩区域</a><a data-for="header" class="control-btn control-btn-hidden control-btn-qfy-hidden" title="隐藏工具栏10秒钟"><span class="vc-btn-content" style="background-color:#f9b418 "><span class="icon" style="background-color:#f9b418 "></span></span></a>';
		str += '</div>';
		str += '</div>';
		obj.find("#header").prepend(str);
		str = '<div class="controls-element vc-controls header-controls-element"  style=" display:none;left:50%;background:#f9b418;opacity: 1;display:none; visibility: visible; transition: auto 0s ease 0s; position: absolute; z-index: 10000; line-height: 0; top: 12px;margin:10px 10px;">';
		str += '<div class="controls-cc" style="background:#f9b418;">';

		str += '<a  style="cursor: pointer; text-align: left; opacity: 1;background:#f9b418; color: rgb(255, 255, 255); text-decoration: none; position: relative; height: 20px; line-height: 20px; font-size: 20px ! important;padding:5px !important;" class="control-btn absolute_header_div_hide">恢复头部</a>';
		str += '</div>';
		str += '</div>';
		if(obj.find("#main.bit_main_content .header-controls-element").length==0){
			obj.find("#main.bit_main_content").prepend(str);
		}
		obj.find(".absolute_header_div_show").unbind().bind("click",function(){
			obj.find(".absolute_header_div_hide").closest(".header-controls-element").show();
			if(obj.find("#main.bit_main_content").offset().top==0){
				var mt = obj.find("#main.bit_main_content").css("margin-top");
				if(mt) mt = mt.replace("px","");
				if(mt<20){
					obj.find("#main.bit_main_content").addClass("main_margin20");
				}
			}
			obj.find('header#header').hide();

		})
		obj.find(".absolute_header_div_hide").unbind().bind("click",function(){
			obj.find(".absolute_header_div_hide").closest(".header-controls-element").hide();
			obj.find('header#header').show();
			obj.find("#main.bit_main_content").removeClass("main_margin20");
		})
	}
}
function header_absolute_show(obj){
	obj.find(".header-controls-element-top").show();
}
function header_absolute_hide(obj){
	obj.find(".header-controls-element-top").hide();
}
function reloadheaderevents(msg){
	if(msg.indexOf("|<result>|")>-1){
		var tmp = msg.split("|<result>|");
		jQuery(tmp[1]).each(function(){
			var id = jQuery(this).attr("id");
			var href = jQuery(this).attr("href");
			if(href.indexOf("&qfytmp_")>-1){
			  href = href.split("&qfytmp_")[0];
			}
			iframeWin.jQuery("#"+id).attr("href",href+"&qfytmp_"+time());
		});
			//...
		var href = iframeWin.jQuery("#qfy_dynamic_css-css").attr("href");
		if(href.indexOf("&qfytmp_")>-1){
		  href = href.split("&qfytmp_")[0];
		}
		iframeWin.jQuery("#qfy_dynamic_css-css").attr("href",href+"&qfytmp_"+time());

		iframeWin.jQuery("#dl-menu:not(.dl-qfymobile-menu),.dl-menuwrapper.floatmenu").remove();
		iframeWin.jQuery("header#header").replaceWith(tmp[2]);
		iframeWin.jQuery("#static-stylesheet-full").html(tmp[4]);

		var tmpJson = jQuery.parseJSON(tmp[3]);
		iframeWin.dtGlobals.logoEnabled = tmpJson.logoEnabled;
		iframeWin.dtGlobals.logoURL =tmpJson.logoURL;
		iframeWin.dtGlobals.logoW = tmpJson.logoW;
		iframeWin.dtGlobals.logoH = tmpJson.logoH;
		iframeWin.smartMenu  = tmpJson.smartMenu;
		iframeWin.jQuery("body>#page").removeClass("bodyheader0 bodyheader40");
		if(tmpJson.bodyclass){
			iframeWin.jQuery("body>#page").addClass(tmpJson.bodyclass);
		}
		if(tmpJson.header_bg_mobilehide=="1"){
			iframeWin.jQuery("body>#page").addClass("header_bg_mobilehide");
		}else {
			iframeWin.jQuery("body>#page").removeClass("header_bg_mobilehide");
		}
		iframeWin.jQuery("body").removeClass("dl-menu-open");
		iframeWin.jQuery("body>#page").css("transform","none");
		if(iframeWin.jQuery(".floatmenu.leftbtnmenu").length>0){
			iframeWin.jQuery("body").addClass("mobileleftbtnmenu");
		}else{
			iframeWin.jQuery("body").removeClass("mobileleftbtnmenu");
		}
		//事件
		SortableInit(iframeWin.jQuery("header#header"));
		bind_header_events(iframeWin.jQuery("body"));
		bind_others_events(iframeWin.jQuery("header#header"));
		//菜单
		iframeWin.mainmenu_event();
		//悬浮菜单
		iframeWin.jQuery("#phantom").remove();
		iframeWin.floatmenu_create();

		iframeWin.qfy_jplayer_init();
		iframeWin.vc_js_init();


	}

}
function reloadTopbarEvents(msg){
	if(iframeWin.jQuery("body.page-template-template-fullscreen-php").length>0){
		location.reload();
		return false;
	}

	if(msg.indexOf("|<result>|")>-1){
		var tmp = msg.split("|<result>|");
		jQuery(tmp[1]).each(function(){
			var id = jQuery(this).attr("id");
			var href = jQuery(this).attr("href");
			if(href.indexOf("&qfytmp_")>-1){
			  href = href.split("&qfytmp_")[0];
			}
			iframeWin.jQuery("#"+id).attr("href",href+"&qfytmp_"+time());
		});
				//...
		var href = iframeWin.jQuery("#qfy_dynamic_css-css").attr("href");
		if(href.indexOf("&qfytmp_")>-1){
		  href = href.split("&qfytmp_")[0];
		}
		iframeWin.jQuery("#qfy_dynamic_css-css").attr("href",href+"&qfytmp_"+time());
		if(iframeWin.jQuery("#top-bar.bit-top-bar").length>0){
			iframeWin.jQuery("#top-bar.bit-top-bar").replaceWith(tmp[2]);
		}else{
			iframeWin.jQuery("body >#page").prepend(tmp[2]);
		}
		//事件
		SortableInit(iframeWin.jQuery("#top-bar.bit-top-bar"));
		bind_topbar_events(iframeWin.jQuery("body"));
		bind_others_events(iframeWin.jQuery("#top-bar.bit-top-bar"));
		iframeWin.qfy_jplayer_init();
		iframeWin.vc_js_init();
	}
}
function reloadFooterEvents(msg,flag){
	if(iframeWin.jQuery("body.page-template-template-fullscreen-php").length>0){
		location.reload();
		return false;
	}
	if(msg.indexOf("|<result>|")>-1){
		var tmp = msg.split("|<result>|");
		jQuery(tmp[1]).each(function(){
			var id = jQuery(this).attr("id");
			var href = jQuery(this).attr("href");
			if(href.indexOf("&qfytmp_")>-1){
			  href = href.split("&qfytmp_")[0];
			}
			iframeWin.jQuery("#"+id).attr("href",href+"&qfytmp_"+time());
		});
				//...
		var href = iframeWin.jQuery("#qfy_dynamic_css-css").attr("href");
		if(href.indexOf("&qfytmp_")>-1){
		  href = href.split("&qfytmp_")[0];
		}
		iframeWin.jQuery("#qfy_dynamic_css-css").attr("href",href+"&qfytmp_"+time());
		if(flag=="footer"){
			iframeWin.jQuery("footer#footer").replaceWith(tmp[2]);
		}else if(flag=="footer_fullscreen"){
			if(iframeWin.jQuery("#fullscreenfooter footer#footer").length==0){
				iframeWin.jQuery("#fullscreenfooter").prepend(tmp[2]);
			}else{
				iframeWin.jQuery("#fullscreenfooter footer#footer").replaceWith(tmp[2]);
			}
		}

		bind_footer_events(iframeWin.jQuery("body"));
		bind_others_events(iframeWin.jQuery("footer#footer"));
		SortableInit(iframeWin.jQuery("footer#footer"));
		//....
		if(iframeWin.jQuery("footer#footer .qfe_gallery_slides.qfe_flexslider").length>0){
			iframeWin.vc_plugin_flexslider();
		}else if(iframeWin.jQuery('footer#footer [data-ride="vc-carousel"]').length>0){
			  iframeWin.jQuery('footer#footer [data-ride="vc-carousel"]').each(function () {
			      var $carousel = jQuery(this).attr("id");
			      iframeWin.jQuery('#'+$carousel).carousel(jQuery(this).data())
			  })
		}else if(iframeWin.jQuery('footer#footer .royalSlider_gallery').length>0){
			iframeWin.bit_newgallery(iframeWin.jQuery('footer#footer'));
		}
		iframeWin.jQuery(".scroll-top").removeClass("wf-mobile-hidden wf-mobile-visible displaynone");
		var tmpJson = jQuery.parseJSON(tmp[3]);
		if(tmpJson.bottom_backbutton_show=="1"){
			iframeWin.jQuery(".scroll-top").addClass("wf-mobile-hidden");
		}else if(tmpJson.bottom_backbutton_show=="2"){
			iframeWin.jQuery(".scroll-top").addClass("wf-mobile-visible");
		}else if(tmpJson.bottom_backbutton_show=="3"){
			iframeWin.jQuery(".scroll-top").addClass("displaynone");
		}
		iframeWin.qfy_jplayer_init();
		iframeWin.vc_js_init();

	}
}

function reloadBottombarEvents(msg){
	if(msg.indexOf("|<result>|")>-1){
		var tmp = msg.split("|<result>|");
		jQuery(tmp[1]).each(function(){
			var id = jQuery(this).attr("id");
			var href = jQuery(this).attr("href");
			if(href.indexOf("&qfytmp_")>-1){
			  href = href.split("&qfytmp_")[0];
			}
			iframeWin.jQuery("#"+id).attr("href",href+"&qfytmp_"+time());
		});
				//...
		var href = iframeWin.jQuery("#qfy_dynamic_css-css").attr("href");
		if(href.indexOf("&qfytmp_")>-1){
		  href = href.split("&qfytmp_")[0];
		}
		iframeWin.jQuery("#qfy_dynamic_css-css").attr("href",href+"&qfytmp_"+time());

		if(iframeWin.jQuery("#bottom-bar").length>0){
			iframeWin.jQuery("#bottom-bar").replaceWith(tmp[2]);
		}else if(iframeWin.jQuery("#fullscreenfooter").length>0){
			iframeWin.jQuery("#fullscreenfooter").append(tmp[2]);
		}else{
			iframeWin.jQuery("footer#footer").after(tmp[2]);
		}
		//事件
		SortableInit(iframeWin.jQuery("#bottom-bar"));
		bind_bottombar_events(iframeWin.jQuery("body"));
		bind_others_events(iframeWin.jQuery("#bottom-bar"));
		iframeWin.qfy_jplayer_init();
		iframeWin.vc_js_init();

	}
}
function reloadCssEvents(msg){
	if(msg.indexOf("|<result>|")>-1){
		var tmp = msg.split("|<result>|");
		jQuery(tmp[1]).each(function(){
			var id = jQuery(this).attr("id");
			var href = jQuery(this).attr("href");
			if(href.indexOf("&qfytmp_")>-1){
			  href = href.split("&qfytmp_")[0];
			}
			iframeWin.jQuery("#"+id).attr("href",href+"&qfytmp_"+time());
			var tmpJson = jQuery.parseJSON(tmp[2]);
			iframeWin.jQuery(".scroll-top").removeClass("wf-mobile-hidden wf-mobile-visible displaynone");
			if(tmpJson.bottom_backbutton_show=="1"){
				iframeWin.jQuery(".scroll-top").addClass("wf-mobile-hidden");
			}else if(tmpJson.bottom_backbutton_show=="2"){
				iframeWin.jQuery(".scroll-top").addClass("wf-mobile-visible");
			}else if(tmpJson.bottom_backbutton_show=="3"){
				iframeWin.jQuery(".scroll-top").addClass("displaynone");

			}

		});
	}
}
function reloadCartEvents(msg){
	if(msg.indexOf("|<result>|")>-1){
		if(iframeWin.jQuery(".mobile-cart").length==0){
			location.reload();
			top.closePanel();
			return false;
		}
		var tmp = msg.split("|<result>|");
		var tmpJson = jQuery.parseJSON(tmp[2]);
		if(tmpJson.cart_show=="1"){
			iframeWin.jQuery(".mobile-cart").show();
		}else{
			iframeWin.jQuery(".mobile-cart").hide();
		}
		iframeWin.jQuery(".mobile-cart").css("color",tmpJson.cart_color);
		iframeWin.jQuery(".mobile-cart").css("font-size",tmpJson.cart_size+"px");
		iframeWin.jQuery(".mobile-cart-amount").css("background-color",tmpJson.cartamountbg_color).css("color",tmpJson.cartamount_color);

	}


}
function reloadMobilebottommenuEvents(msg){
	if(msg.indexOf("|<result>|")>-1){
		var tmp = msg.split("|<result>|");
		if(iframeWin.jQuery(".mobile_footer_menu").length>0){
			iframeWin.jQuery(".mobile_footer_menu").replaceWith(tmp[2]);
		}else{
			iframeWin.jQuery("#page").append(tmp[2]);
		}
		var href = iframeWin.jQuery("#qfy_dynamic_css-css").attr("href");
		if(href.indexOf("&qfytmp_")>-1){
		  href = href.split("&qfytmp_")[0];
		}
		iframeWin.jQuery("#qfy_dynamic_css-css").attr("href",href+"&qfytmp_"+time());
		iframeWin.jQuery(".footerbar-menu .menu-item-has-children>a").unbind().click(function(e){
			e.stopPropagation();
			e.preventDefault();
			var submenu = jQuery(this).next(".sub-menu");
			if(submenu.css("display")=="none"){
				submenu.css("display","block");
			}else{
				submenu.css("display","none");
			}
		})
	}
}
function reloadRightnavbarEvents(msg){
	if(msg.indexOf("|<result>|")>-1){
		var tmp = msg.split("|<result>|");
		if(iframeWin.jQuery(".right_nav_bar").length>0){
			iframeWin.jQuery("#right_nav_bar_scroll").remove();
			iframeWin.jQuery(".right_nav_bar").replaceWith(tmp[2]);
		}else{
			iframeWin.jQuery("#page").append(tmp[2]);
		}
		right_nav_bar_control(iframeWin.jQuery("body"));
		iframeWin.right_nav_bar();
	}
}
function onchange_image_size(obj){
	var selected_value;

	var input = $j(obj).next();

	selected_value = $j(obj).val();

	if(selected_value == 'customize'){
		input.show();
		var input_value = input.val();
		if(input_value == 'thumb' || input_value == 'medium' || input_value == 'large' || input_value == 'full' || input_value == 'widthfull' ){
			var raw_value = input.attr('raw-value');
			if(raw_value == 'thumb' || raw_value == 'medium' || raw_value == 'large' || raw_value == 'full'|| raw_value == 'widthfull' ){
				input.val('');
			}else{
				input.val(raw_value);
			}
		}
	}else{
		input.hide();
		input.val(selected_value);
	}
}
function add_mapobjects(obj){
		var  addbtn = jQuery(obj);
		var p = addbtn.closest(".mapobjects_inner");
		var onetable = p.find("div:first").prop('outerHTML');
		addbtn.before(onetable);
		addbtn.prev().removeClass("active").find("input").val("");
}

/************************layout preview**********************/
function change_layout_anim(obj,val){
	var p = jQuery(obj).parent();
	p.find(".sliderAniElementDiv").removeClass("hover");
	jQuery(obj).addClass("hover");
	jQuery('#layer_animation').val(val);
	jQuery('#startSpeed').val("2000");
	setInAnimOfPreview()
}
function stopAnimationInPreview() {
		var nextcaption = jQuery('#preview_caption_animateme');
		TweenLite.killTweensOf(nextcaption,false);
		if (nextcaption.data("timer")) clearTimeout(nextcaption.data('timer'));
		if (nextcaption.data("timera")) clearTimeout(nextcaption.data('timera'));
	}

function setInAnimOfPreview() {
		var nextcaption = jQuery('#preview_caption_animateme');
		var startease = 'Power3.easeInOut';
		var startanim = jQuery('#layer_animation');
		var startspeed = jQuery('#startSpeed');
		var endanim = jQuery("#layer_endanimation").val();
		var endspeed = jQuery("#endSpeed").val()/1000;
		var endease = 'Power3.easeInOut';
		var anim = startanim.val();
		var speed = 2;
		var easedata = 'Power3.easeInOut';

		TweenLite.killTweensOf(nextcaption,false);if(nextcaption.data("timer")){clearTimeout(nextcaption.data("timer"))}if(nextcaption.data("timera")){clearTimeout(nextcaption.data("timera"))}var tlop=0,tlxx=198,tlyy=82,tlzz=2,tlsc=1,tlro=0,sc=1,scX=1,scY=1,ro=0,roX=0,roY=0,roZ=0,skwX=0,skwY=0,opa=0,trorig="center,center",tper=300,repeatV=0,yoyoV=false,repeatdelayV=0,calcx=198,calcy=82;if(anim==null){anim="fade"}if(anim=="randomrotate"){sc=Math.random()*3+1;ro=Math.round(Math.random()*200-100);tlxx=calcx+Math.round(Math.random()*200-100);tlyy=calcy+Math.round(Math.random()*200-100)}if(anim==("lfr")||anim==("skewfromright")){tlxx=560}if(anim==("lfl")||anim==("skewfromleft")){tlxx=-100}if(anim==("sfl")|anim==("skewfromleftshort")){tlxx=calcx-50}if(anim==("sfr")|anim==("skewfromrightshort")){tlxx=calcx+50}if(anim==("lft")){tlyy=-50}if(anim==("lfb")){tlyy=250}if(anim==("sft")){tlyy=calcy-50}if(anim==("sfb")){tlyy=calcy+50}if(anim==("skewfromright")||anim==("skewfromrightshort")){skwX=-85}if(anim==("skewfromleft")||anim==("skewfromleftshort")){skwX=85}if(anim.split("custom").length>1){var id=anim.split("-")[1];var params=new Object;params=getCutCustomParams(id);var transx=params.movex;var transy=params.movey;var transz=params.movez;var rotatex=params.rotationx;var rotatey=params.rotationy;var rotatez=params.rotationz;var scalex=params.scalex/100;var scaley=params.scaley/100;var skewx=params.skewx;var skewy=params.skewy;var opac=params.captionopacity/100;var tper=params.captionperspective;var originx=params.originx+"%";var originy=params.originy+"%";var origin=originx+" "+originy;nextcaption.data("newanim",TweenLite.fromTo(nextcaption,speed,{scaleX:scalex,scaleY:scaley,rotationX:rotatex,rotationY:rotatey,rotationZ:rotatez,x:transx,y:transy,z:transz+1,skewX:skewx,skewY:skewy,left:calcx,top:calcy,opacity:opac,transformPerspective:tper,transformOrigin:origin,visibility:"hidden"},{left:calcx,top:calcy,x:0,y:0,scaleX:1,scaleY:1,rotationX:0,rotationY:0,rotationZ:0,skewX:0,skewY:0,z:1,visibility:"visible",opacity:1,ease:easedata,overwrite:"all",onComplete:function(){nextcaption.data("timera",setTimeout(function(){if(!jQuery("#preview_looper").hasClass("deactivated")&&jQuery("#preview_looper").data("loop")!=2){setOutAnimOfPreview()}},500))}}))}else{nextcaption.data("newanim",TweenLite.fromTo(nextcaption,speed,{scale:sc,rotation:ro,rotationX:0,rotationY:0,rotationZ:0,x:0,y:0,left:tlxx+"px",top:tlyy+"px",opacity:0,z:1,skewX:skwX,skewY:0,transformPerspective:600,transformOrigin:"50% 50%",visibility:"visible"},{left:calcx+"px",top:calcy+"px",scale:1,skewX:0,rotation:0,z:1,x:0,y:0,visibility:"visible",opacity:1,ease:easedata,overwrite:"all",onComplete:function(){nextcaption.data("timera",setTimeout(function(){if(!jQuery("#preview_looper").hasClass("deactivated")&&jQuery("#preview_looper").data("loop")!=2){setOutAnimOfPreview()}},500))}}))};

}
/******************************
 -	PLAY OUT ANIMATION	-
 ********************************/

function setOutAnimOfPreview() {

	var nextcaption = jQuery('#preview_caption_animateme');
	var startanim = jQuery('#layer_animation');
	var startspeed = jQuery('#layer_speed');
	var startease = jQuery('#layer_easing');
	var endanim = jQuery('#layer_endanimation');
	var endspeed = jQuery('#layer_endspeed');
	var endease = jQuery('#layer_endeasing');

	var anim=endanim.val();var speed=endspeed.val()/1000;var easedata=endease.val();var xx=198;var yy=82;skwX=0;if(anim==null){anim="auto"}if(anim==("fadeout")||anim==("ltr")||anim==("ltl")||anim==("str")||anim==("stl")||anim==("ltt")||anim==("ltb")||anim==("stt")||anim==("stb")||anim==("skewtoright")||anim==("skewtorightshort")||anim==("skewtoleft")||anim==("skewtoleftshort")){if(anim==("skewtoright")||anim==("skewtorightshort")){skwX=35}if(anim==("skewtoleft")||anim==("skewtoleftshort")){skwX=-35}if(anim==("ltr")||anim==("skewtoright")){xx=560}else{if(anim==("ltl")||anim==("skewtoleft")){xx=-100}else{if(anim==("ltt")){yy=-50}else{if(anim==("ltb")){yy=250}else{if(anim==("str")||anim==("skewtorightshort")){xx=xx+50;oo=0}else{if(anim==("stl")||anim==("skewtoleftshort")){xx=xx-50;oo=0}else{if(anim==("stt")){yy=yy-50;oo=0}else{if(anim==("stb")){yy=yy+50;oo=0}}}}}}}}if(anim==("skewtorightshort")){xx=400}if(anim==("skewtoleftshort")){xx=0}nextcaption.data("newanim",TweenLite.to(nextcaption,speed,{left:xx,top:yy,scale:1,rotation:0,skewX:skwX,opacity:0,z:2,overwrite:"auto",ease:easedata,onComplete:function(){nextcaption.data("timera",setTimeout(function(){if(jQuery("#preview_looper").hasClass("deactivated")){jQuery("#preview_looper").data("loop",2)}setInAnimOfPreview()},500))}}))}else{if(anim.split("custom").length>1){var id=anim.split("-")[1];var params=new Object;params=getCutCustomParams(id);var transx=params.movex;var transy=params.movey;var transz=params.movez;var rotatex=params.rotationx;var rotatey=params.rotationy;var rotatez=params.rotationz;var scalex=params.scalex/100;var scaley=params.scaley/100;var skewx=params.skewx;var skewy=params.skewy;var opac=params.captionopacity/100;var tper=params.captionperspective;var originx=params.originx+"%";var originy=params.originy+"%";var origin=originx+" "+originy;nextcaption.data("newanim",TweenLite.fromTo(nextcaption,speed,{left:xx,top:yy,x:0,y:0,scaleX:1,scaleY:1,rotationX:0,rotationY:0,rotationZ:0,skewX:0,skewY:0,transformPerspective:tper,transformOrigin:origin,z:1,visibility:"visible",opacity:1,},{scaleX:scalex,scaleY:scaley,rotationX:rotatex,rotationY:rotatey,rotationZ:rotatez,x:transx,y:transy,z:transz+1,skewX:skewx,skewY:skewy,left:xx,top:yy,opacity:opac,transformPerspective:tper,transformOrigin:origin,ease:easedata,onComplete:function(){nextcaption.data("timera",setTimeout(function(){if(jQuery("#preview_looper").hasClass("deactivated")){jQuery("#preview_looper").data("loop",2)}setInAnimOfPreview()},500))}}))}else{nextcaption.data("newanim").reverse();nextcaption.data("timer",setTimeout(function(){if(jQuery("#preview_looper").hasClass("deactivated")){jQuery("#preview_looper").data("loop",2)}setInAnimOfPreview()},(speed*1000)+1000))}};
}
function getCutCustomParams(id) {
		var params = new Object;
		var initLayerAnims = [];
		jQuery.each(initLayerAnims,function(i,curobj) {
			if (parseInt(curobj.id,0) == parseInt(id,0)) params = curobj.params;
		})
		return params;
}
var MIN_DISTANCE = 10; // minimum distance to "snap" to a guide
var guides = []; // no guides available ...
var innerOffsetX, innerOffsetY; // we'll use those during drag ...
function computeGuidesForElement( elem, pos, w, h ){
		if( elem != null ){
			var $t = jQuery(elem);
			pos = $t.offset();
			w = $t.outerWidth() - 1;
			h = $t.outerHeight() - 1;
		}

		return [
			{ type: "h", left: pos.left, top: pos.top,obj:$t },
			{ type: "h", left: pos.left, top: pos.top + h,obj:$t },
			{ type: "v", left: pos.left, top: pos.top,obj:$t },
			{ type: "v", left: pos.left + w, top: pos.top,obj:$t },
			// you can add _any_ other guides here as well (e.g. a guide 10 pixels to the left of an element)
			{ type: "h", left: pos.left, top: pos.top + h/2,obj:$t },
			{ type: "v", left: pos.left + w/2, top: pos.top ,obj:$t}
		];
}
function guideline_start(e,obj,contain){
	if(contain=="content"){
		guides = jQuery.map( vc.frame_window.jQuery( ".qfy-element,#content img,section.section >.container,.qfy-column-inner >.column_inner,.vc_icon_element-icon,.qfy-icon,button.vc_btn3,a.bitButton,a.bitButton,a.bitIcon" ).not( obj ).not(obj.find(".qfy-element")).not(obj.find("img,.vc_icon_element-icon,.qfy-icon,button.vc_btn3,a.bitButton,a.bitIcon")), computeGuidesForElement );
	}else if(contain=="container"){
		guides = jQuery.map( vc.frame_window.jQuery( "#top-bar .wf-table,#header .wf-table,#footer .wf-wrap,#main .wf-wrap,section.section >.container,section.section").not( obj ), computeGuidesForElement );
	}else if(contain=="logo"){
		guides = jQuery.map( vc.frame_window.jQuery( "#top-bar .wf-table,#header .wf-table,#bit-logoText,#navigation,#branding img").not( obj ), computeGuidesForElement );
	}else if(contain=="caption"){
		guides = jQuery.map( vc.frame_window.jQuery( "#header .wf-table,#navigation,#bitBanner .tp-caption,#bitBanner .tp-caption img,#main .wf-wrap").not( obj ), computeGuidesForElement );
	}else if(contain=="special"){
		guides = jQuery.map( obj.closest(".vc-vc_column").find(".qfy-element").not( obj ), computeGuidesForElement );
	}else{
		guides = jQuery.map( vc.frame_window.jQuery( ".qfy-element,#content img,#top-bar .wf-table,#header .wf-table,#footer .wf-wrap,#main .wf-wrap,section.section >.container,section.section,.vc_icon_element-icon,.qfy-icon" ).not( obj ).not(obj.find("img,.vc_icon_element-icon,.qfy-icon,button.vc_btn3,a.bitButton,a.bitIcon")).not(obj.find(".qfy-element")), computeGuidesForElement );
	}

	innerOffsetX = e.originalEvent.offsetX;
	innerOffsetY = e.originalEvent.offsetY;
}

function guideline_draw(e,$t,ui,flag){
	var guideV, guideH, distV = MIN_DISTANCE+1, distH = MIN_DISTANCE+1, offsetV, offsetH;
	var chosenGuides = { top: { dist: MIN_DISTANCE+1 }, left: { dist: MIN_DISTANCE+1 } };


	var pos = { top: e.originalEvent.pageY - innerOffsetY, left: e.originalEvent.pageX - innerOffsetX };
	var w = $t.outerWidth() - 1;
	var h = $t.outerHeight() - 1;
	var elemGuides = computeGuidesForElement( null, pos, w, h );
	jQuery.each( guides, function( i, guide ){
		guide.obj.css("outline","0");
		jQuery.each( elemGuides, function( i, elemGuide ){
			if( guide.type == elemGuide.type ){
				var prop = guide.type == "h"? "top":"left";
				var d = Math.abs( elemGuide[prop] - guide[prop] );
				if( d < chosenGuides[prop].dist ){
					chosenGuides[prop].dist = d;
					chosenGuides[prop].offset = elemGuide[prop] - pos[prop];
					chosenGuides[prop].guide = guide;
				}
			}
		} );
	} );

	if(flag!="left" &&  typeof chosenGuides.top.guide !="undefined"){
		if( chosenGuides.top.dist <= MIN_DISTANCE ){
			vc.frame_window.jQuery( "#guide-h" ).css( "top", chosenGuides.top.guide.top ).show();
			chosenGuides.top.guide.obj.css("outline","1px solid #60c1ff");
		}
		else{
			vc.frame_window.jQuery( "#guide-h" ).hide();
		}
	}
	if(flag!="top" &&  typeof chosenGuides.left.guide !="undefined"){
		if( chosenGuides.left.dist <= MIN_DISTANCE ){
			vc.frame_window.jQuery( "#guide-v" ).css( "left", chosenGuides.left.guide.left ).show();
			chosenGuides.left.guide.obj.css("outline","1px solid #60c1ff");
		}
		else{
			vc.frame_window.jQuery( "#guide-v" ).hide();
		}
	}
}
function guideline_end(){
	  vc.frame_window.jQuery( "#guide-v, #guide-h" ).hide();
	  jQuery.each( guides, function( i, guide ){
		guide.obj.css("outline","0");
	  });
}

function hex2rgba_convert(hex,opacity){
	 hex = hex.replace('#','');
	 r = parseInt(hex.substring(0,2), 16);
	 g = parseInt(hex.substring(2,4), 16);
	 b = parseInt(hex.substring(4,6), 16);

	 result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
	 return result;
}
function borders_convert(borders,obj){
	$value = borders.split("|^|")

	 if($value[13] &&$value[2]){
	       $value[2]= hex2rgba_convert( $value[2], $value[13]);
	 }
     if($value[14] &&$value[5]){
        $value[5]= hex2rgba_convert( $value[5], $value[14]);
     }
    if($value[15] && $value[8]){
        $value[8]= hex2rgba_convert( $value[8], $value[15]);
    }
    if($value[16] && $value[11]){
        $value[11]= hex2rgba_convert( $value[11], $value[16]);
    }
    if($value[2]=="") $value[2] = "transparent";
	if($value[5]=="") $value[5] = "transparent";
	if($value[8]=="") $value[8] = "transparent";
	if($value[11]=="") $value[11] = "transparent";
	$arrTmp = new Array("solid","dashed","dotted");
	if(obj){
		obj.css("border-top",$value[1]+"px "+$arrTmp[$value[3]]+" "+$value[2]);
		obj.css("border-bottom",$value[4]+"px "+$arrTmp[$value[6]]+" "+$value[5]);
		obj.css("border-left",$value[7]+"px "+$arrTmp[$value[9]]+" "+$value[8]);
		obj.css("border-right",$value[10]+"px "+$arrTmp[$value[12]]+" "+$value[11]);
	}else{
		borderCss="border-top:"+$value[1]+"px "+$arrTmp[$value[3]]+" "+$value[2]+";";
		borderCss +="border-bottom:"+$value[4]+"px "+$arrTmp[$value[6]]+" "+$value[5]+";";
		borderCss +="border-left:"+$value[7]+"px "+$arrTmp[$value[9]]+" "+$value[8]+";";
		borderCss +="border-right:"+$value[10]+"px "+$arrTmp[$value[12]]+" "+$value[11]+";";
	}
	return borderCss;
}
function openVCQuickSet(tag,model){
	if(!model) model = vc.ShortcodesBuilder.last();
	if(tag=='vc_column_text_image_1'||tag=='vc_single_image'){
		vc.edit_element_block_view.render(model,false,true);
		return;
    }else if(tag=='vc_qf_custommenu'||tag=='vc_bit_qqmaps'||tag=='vc_bit_raw_video') {
    	//tag=='iphorm_vc'||
		vc.edit_element_block_view.render(vc.ShortcodesBuilder.last());
		return;
	}else if(tag=='iphorm_vc'){
		return;
	}
	if(tag=="vc_column_text_header_1") tag="vc_header";
	else if(tag=="vc_column_text_notice4") tag="vc_notice";
	else if(tag=="vc_column_text_shop_1") tag="product_page";
    else if(tag=="vc_column_text_shop_2") tag="products_list";
    else if(tag=="vc_column_text_shop_3") tag="add_to_cart";
    else if(tag.indexOf("vc_column_text_user_")>-1) tag="qfyuser";

	if(jQuery('#vc-add-element-dialog2 .qfe-content-layouts>li[data-element="'+tag+'"]').length>0){
		 vc.add_element_block_view2.render(model);
	}

}
/**********************/
(function($){var defaults;$.event.fix=(function(originalFix){return function(event){event=originalFix.apply(this,arguments);if(event.type.indexOf('copy')===0||event.type.indexOf('paste')===0){event.clipboardData=event.originalEvent.clipboardData}return event}})($.event.fix);defaults={callback:$.noop,matchType:/image.*/};return $.fn.pasteImageReader=function(options){if(typeof options==="function"){options={callback:options}}options=$.extend({},defaults,options);return this.each(function(){var $this,element;element=this;$this=$(this);return $this.bind('paste',function(event){var clipboardData,found;found=false;clipboardData=event.clipboardData;return Array.prototype.forEach.call(clipboardData.types,function(type,i){var file,reader;if(found){return}if(type.match(options.matchType)||clipboardData.items[i].type.match(options.matchType)){file=clipboardData.items[i].getAsFile();reader=new FileReader();reader.onload=function(evt){return options.callback.call(element,{dataURL:evt.target.result,event:evt,file:file,name:file.name})};reader.readAsDataURL(file);return found=true}})})})}})(jQuery);
/************************layout preview**********************/
function send_b64_data(b64data,filename,post_data,success_callback){var boundary,dashdash,crlf,multipart_string,file_data_name,name,mime_type,xhr;boundary="----multipart_boundary"+(new Date().getTime().toString(32))+Math.random().toString(32);dashdash="--";crlf="\r\n";multipart_string="";for(name in post_data){multipart_string+=dashdash+boundary+crlf+'Content-Disposition: form-data; name="'+name+'"'+crlf+crlf;multipart_string+=unescape(encodeURIComponent(post_data[name]))+crlf}mime_type="image/png";file_data_name="async-upload";multipart_string+=dashdash+boundary+crlf+'Content-Disposition: form-data; name="'+wp.Uploader.defaults.file_data_name+'"; filename="'+filename+'"'+crlf+"Content-Type: "+mime_type+crlf+crlf+atob(b64data)+crlf+dashdash+boundary+dashdash+crlf;xhr=new XMLHttpRequest();xhr.open("post",wp.Uploader.defaults.url,true);xhr.setRequestHeader("Content-Type","multipart/form-data; boundary="+boundary);xhr.onreadystatechange=function(){var httpStatus,chunkArgs;if(xhr.readyState==4){try{httpStatus=xhr.status}catch(ex){httpStatus=0}if(httpStatus==200){success_callback(xhr,httpStatus)}else{if(httpStatus>=400){}}}};if(xhr.sendAsBinary){xhr.sendAsBinary(multipart_string)}else{var ui8a=new Uint8Array(multipart_string.length);for(var i=0;i<multipart_string.length;i++){ui8a[i]=(multipart_string.charCodeAt(i)&255)}xhr.send(ui8a.buffer)}};

jQuery("html").pasteImageReader(function(results){if(results&&results.dataURL&&jQuery(".media-modal.qf-core-ui:visible").length>0){var file={};var attributes={file:file,uploading:true,date:new Date(),filename:"snapshot.jpg",menuOrder:0,uploadedTo:wp.media.model.settings.post.id,type:"image",subtype:"jpg",loaded:0,size:100,percent:0};file.attachment=wp.media.model.Attachment.create(attributes);wp.Uploader.queue.add(file.attachment);var post_data={action:wp.Uploader.defaults.multipart_params.action,_qfnonce:wp.Uploader.defaults.multipart_params._qfnonce,post_id:wp.media.model.settings.post.id};function upload_succes(xhr,httpStatus){if(wp.global_curr_frame){wp.global_curr_frame.uploader.uploader.uploader.trigger("FileUploaded",file,{response:xhr.responseText,status:httpStatus})}}var b64data=results.dataURL.replace("data:image/png;base64,","");send_b64_data(b64data,attributes.filename,post_data,upload_succes)}return true});


function jConfirm(msg,yes,no,title){
	parent.jConfirm(msg,yes,no,title);
}
function jConfirmOneButton(msg,yes,title){
	parent.jConfirmOneButton(msg,yes,title);
}
function jAlert(msg,title){
	parent.jAlert(msg,title);
}


var qfy_vc_bit_js = true;
jQuery(document).ready(function($) {
   if(top.getCookie){
	   var tocloselist =top.getCookie("tocloselist");
	   if(tocloselist!="1"){
		   if(top.jQuery("#pagehtmlcontainer").height()=="0"){
			   top.showpagehtml_fun();
		   }
	   }
   }

   $.datepicker.setDefaults({
	   changeMonth: true,
	   changeYear: true,
	   yearRange: "-100:+10",
	 });
});

jQuery("html").bind('paste', function(e) {
	if(!e.clipboardData){
		var clipboardData = e.originalEvent.clipboardData;
	}else{
		var clipboardData = e.clipboardData;
	}
	if(clipboardData){
		var text = clipboardData.getData('text/plain');
		if(text && jQuery("#vc-add-element-dialog .bit-insert-html:visible").length==1){
			var tmp = base64_decode(text);
			if(tmp.indexOf("|^^|")>-1 ){
				var tmparr = tmp.split('|^^|');
				if(tmparr.length==2){
					jQuery("#vc-add-element-dialog .bit-insert-html:visible").click();
					setTimeout(function(){
						top.jQuery(".boxy-wrapper:visible #copyText").val(text);
						top.jQuery(".boxy-wrapper:visible .copytitle").html("点击确认，将复制该组件到当前页面");
					},300);
				}
			}
		}
	}
});

/*!
 * clipboard.js v1.5.16
 * https://zenorocha.github.io/clipboard.js
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Clipboard=e()}}(function(){var e,t,n;return function e(t,n,i){function o(a,c){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!c&&l)return l(a,!0);if(r)return r(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){var n=t[a][1][e];return o(n?n:e)},u,u.exports,e,t,n,i)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<i.length;a++)o(i[a]);return o}({1:[function(e,t,n){function i(e,t){for(;e&&e.nodeType!==o;){if(e.matches(t))return e;e=e.parentNode}}var o=9;if(Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}t.exports=i},{}],2:[function(e,t,n){function i(e,t,n,i,r){var a=o.apply(this,arguments);return e.addEventListener(n,a,r),{destroy:function(){e.removeEventListener(n,a,r)}}}function o(e,t,n,i){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&i.call(e,n)}}var r=e("./closest");t.exports=i},{"./closest":1}],3:[function(e,t,n){n.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},n.nodeList=function(e){var t=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===t||"[object HTMLCollection]"===t)&&"length"in e&&(0===e.length||n.node(e[0]))},n.string=function(e){return"string"==typeof e||e instanceof String},n.fn=function(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t}},{}],4:[function(e,t,n){function i(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!c.string(t))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(e))return o(e,t,n);if(c.nodeList(e))return r(e,t,n);if(c.string(e))return a(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function r(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}function a(e,t,n){return l(document.body,e,t,n)}var c=e("./is"),l=e("delegate");t.exports=i},{"./is":3,delegate:2}],5:[function(e,t,n){function i(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName)e.focus(),e.setSelectionRange(0,e.value.length),t=e.value;else{e.hasAttribute("contenteditable")&&e.focus();var n=window.getSelection(),i=document.createRange();i.selectNodeContents(e),n.removeAllRanges(),n.addRange(i),t=n.toString()}return t}t.exports=i},{}],6:[function(e,t,n){function i(){}i.prototype={on:function(e,t,n){var i=this.e||(this.e={});return(i[e]||(i[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){function i(){o.off(e,i),t.apply(n,arguments)}var o=this;return i._=t,this.on(e,i,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),i=0,o=n.length;for(i;i<o;i++)n[i].fn.apply(n[i].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),i=n[e],o=[];if(i&&t)for(var r=0,a=i.length;r<a;r++)i[r].fn!==t&&i[r].fn._!==t&&o.push(i[r]);return o.length?n[e]=o:delete n[e],this}},t.exports=i},{}],7:[function(t,n,i){!function(o,r){if("function"==typeof e&&e.amd)e(["module","select"],r);else if("undefined"!=typeof i)r(n,t("select"));else{var a={exports:{}};r(a,o.select),o.clipboardAction=a.exports}}(this,function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n(t),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=function(){function e(t){i(this,e),this.resolveOptions(t),this.initSelection()}return a(e,[{key:"resolveOptions",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function e(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function e(){var t=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=document.body.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[n?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.addEventListener("focus",window.scrollTo(0,i)),this.fakeElem.style.top=i+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function e(){this.fakeHandler&&(document.body.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function e(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function e(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function e(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function e(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function e(){this.removeFake()}},{key:"action",set:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function e(){return this._action}},{key:"target",set:function e(t){if(void 0!==t){if(!t||"object"!==("undefined"==typeof t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function e(){return this._target}}]),e}();e.exports=c})},{select:5}],8:[function(t,n,i){!function(o,r){if("function"==typeof e&&e.amd)e(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if("undefined"!=typeof i)r(n,t("./clipboard-action"),t("tiny-emitter"),t("good-listener"));else{var a={exports:{}};r(a,o.clipboardAction,o.tinyEmitter,o.goodListener),o.clipboard=a.exports}}(this,function(e,t,n,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}var s=o(t),u=o(n),f=o(i),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),h=function(e){function t(e,n){r(this,t);var i=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return i.resolveOptions(n),i.listenClick(e),i}return c(t,e),d(t,[{key:"resolveOptions",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText}},{key:"listenClick",value:function e(t){var n=this;this.listener=(0,f.default)(t,"click",function(e){return n.onClick(e)})}},{key:"onClick",value:function e(t){var n=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s.default({action:this.action(n),target:this.target(n),text:this.text(n),trigger:n,emitter:this})}},{key:"defaultAction",value:function e(t){return l("action",t)}},{key:"defaultTarget",value:function e(t){var n=l("target",t);if(n)return document.querySelector(n)}},{key:"defaultText",value:function e(t){return l("text",t)}},{key:"destroy",value:function e(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}]),t}(u.default);e.exports=h})},{"./clipboard-action":7,"good-listener":4,"tiny-emitter":6}]},{},[8])(8)});

function clipboard_fun(toclass){
	var clipboard = new Clipboard(toclass);
	clipboard.on('success', function(e) {
		jQuery(e.trigger).css("position","relative");
		if(jQuery(e.trigger).find(".copymsg").length>0) jQuery(e.trigger).find(".copymsg").remove();
		jQuery(e.trigger).append('<span class="copymsg qfyfadeOutUp" style="position:absolute; width: 70px;right:-75px;color:green;font-size:12px;">复制成功</span>');
		setTimeout(function(){
			jQuery(".copymsg").remove();
		},2200);
	    e.clearSelection();
	    clipboard.destroy();
	});
	clipboard.on('error', function(e) {
		jQuery(e.trigger).html("抱歉,你的浏览器不支持复制,你可以手动ctrl+c");
		clipboard.destroy();
	});
}
if(typeof qfy_popinfo_fun!="function"){
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
}
