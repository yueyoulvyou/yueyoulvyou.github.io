/*
Cache: vc_inline_models_js, vc_inline_shortcodes_builder_js, qfe_jscomposer_media_editor_js, qfe_qfy_editor_js_view, media-editor, shortcode, media-views, qf-plupload, json2, plupload-html4, plupload-html5, plupload, media-models, qf-backbone, qf-util, jquery-lazy, qfe_qfy_editor_js_tools, backbone, underscore, qfe_json-js, qfe_php_js, qfe_scrollTo_js, farbtastic, vc_inline_bootstap_js, qfe_bit_form-js
*/
/* qfe_bit_form-js: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/FeiEditor/bitSite/js/jquery.form.min.js) */
/*
* jQuery Form Plugin; v20140218
* http://jquery.malsup.com/form/
* Copyright (c) 2014 M. Alsup; Dual licensed: MIT/GPL
* https://github.com/malsup/form#copyright-and-license
*/
;!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(a){"use strict";function b(b){var c=b.data;b.isDefaultPrevented()||(b.preventDefault(),a(b.target).ajaxSubmit(c))}function c(b){var c=b.target,d=a(c);if(!d.is("[type=submit],[type=image]")){var e=d.closest("[type=submit]");if(0===e.length)return;c=e[0]}var f=this;if(f.clk=c,"image"==c.type)if(void 0!==b.offsetX)f.clk_x=b.offsetX,f.clk_y=b.offsetY;else if("function"==typeof a.fn.offset){var g=d.offset();f.clk_x=b.pageX-g.left,f.clk_y=b.pageY-g.top}else f.clk_x=b.pageX-c.offsetLeft,f.clk_y=b.pageY-c.offsetTop;setTimeout(function(){f.clk=f.clk_x=f.clk_y=null},100)}function d(){if(a.fn.ajaxSubmit.debug){var b="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(b):window.opera&&window.opera.postError&&window.opera.postError(b)}}var e={};e.fileapi=void 0!==a("<input type='file'/>").get(0).files,e.formdata=void 0!==window.FormData;var f=!!a.fn.prop;a.fn.attr2=function(){if(!f)return this.attr.apply(this,arguments);var a=this.prop.apply(this,arguments);return a&&a.jquery||"string"==typeof a?a:this.attr.apply(this,arguments)},a.fn.ajaxSubmit=function(b){function c(c){var d,e,f=a.param(c,b.traditional).split("&"),g=f.length,h=[];for(d=0;g>d;d++)f[d]=f[d].replace(/\+/g," "),e=f[d].split("="),h.push([decodeURIComponent(e[0]),decodeURIComponent(e[1])]);return h}function g(d){for(var e=new FormData,f=0;f<d.length;f++)e.append(d[f].name,d[f].value);if(b.extraData){var g=c(b.extraData);for(f=0;f<g.length;f++)g[f]&&e.append(g[f][0],g[f][1])}b.data=null;var h=a.extend(!0,{},a.ajaxSettings,b,{contentType:!1,processData:!1,cache:!1,type:i||"POST"});b.uploadProgress&&(h.xhr=function(){var c=a.ajaxSettings.xhr();return c.upload&&c.upload.addEventListener("progress",function(a){var c=0,d=a.loaded||a.position,e=a.total;a.lengthComputable&&(c=Math.ceil(d/e*100)),b.uploadProgress(a,d,e,c)},!1),c}),h.data=null;var j=h.beforeSend;return h.beforeSend=function(a,c){c.data=b.formData?b.formData:e,j&&j.call(this,a,c)},a.ajax(h)}function h(c){function e(a){var b=null;try{a.contentWindow&&(b=a.contentWindow.document)}catch(c){d("cannot get iframe.contentWindow document: "+c)}if(b)return b;try{b=a.contentDocument?a.contentDocument:a.document}catch(c){d("cannot get iframe.contentDocument: "+c),b=a.document}return b}function g(){function b(){try{var a=e(r).readyState;d("state = "+a),a&&"uninitialized"==a.toLowerCase()&&setTimeout(b,50)}catch(c){d("Server abort: ",c," (",c.name,")"),h(A),w&&clearTimeout(w),w=void 0}}var c=l.attr2("target"),f=l.attr2("action"),g="multipart/form-data",j=l.attr("enctype")||l.attr("encoding")||g;x.setAttribute("target",o),(!i||/post/i.test(i))&&x.setAttribute("method","POST"),f!=m.url&&x.setAttribute("action",m.url),m.skipEncodingOverride||i&&!/post/i.test(i)||l.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(w=setTimeout(function(){v=!0,h(z)},m.timeout));var k=[];try{if(m.extraData)for(var n in m.extraData)m.extraData.hasOwnProperty(n)&&(a.isPlainObject(m.extraData[n])&&m.extraData[n].hasOwnProperty("name")&&m.extraData[n].hasOwnProperty("value")?k.push(a('<input type="hidden" name="'+m.extraData[n].name+'">').val(m.extraData[n].value).appendTo(x)[0]):k.push(a('<input type="hidden" name="'+n+'">').val(m.extraData[n]).appendTo(x)[0]));m.iframeTarget||q.appendTo("body"),r.attachEvent?r.attachEvent("onload",h):r.addEventListener("load",h,!1),setTimeout(b,15);try{x.submit()}catch(p){var s=document.createElement("form").submit;s.apply(x)}}finally{x.setAttribute("action",f),x.setAttribute("enctype",j),c?x.setAttribute("target",c):l.removeAttr("target"),a(k).remove()}}function h(b){if(!s.aborted&&!F){if(E=e(r),E||(d("cannot access response document"),b=A),b===z&&s)return s.abort("timeout"),y.reject(s,"timeout"),void 0;if(b==A&&s)return s.abort("server abort"),y.reject(s,"error","server abort"),void 0;if(E&&E.location.href!=m.iframeSrc||v){r.detachEvent?r.detachEvent("onload",h):r.removeEventListener("load",h,!1);var c,f="success";try{if(v)throw"timeout";var g="xml"==m.dataType||E.XMLDocument||a.isXMLDoc(E);if(d("isXml="+g),!g&&window.opera&&(null===E.body||!E.body.innerHTML)&&--G)return d("requeing onLoad callback, DOM not available"),setTimeout(h,250),void 0;var i=E.body?E.body:E.documentElement;s.responseText=i?i.innerHTML:null,s.responseXML=E.XMLDocument?E.XMLDocument:E,g&&(m.dataType="xml"),s.getResponseHeader=function(a){var b={"content-type":m.dataType};return b[a.toLowerCase()]},i&&(s.status=Number(i.getAttribute("status"))||s.status,s.statusText=i.getAttribute("statusText")||s.statusText);var j=(m.dataType||"").toLowerCase(),k=/(json|script|text)/.test(j);if(k||m.textarea){var l=E.getElementsByTagName("textarea")[0];if(l)s.responseText=l.value,s.status=Number(l.getAttribute("status"))||s.status,s.statusText=l.getAttribute("statusText")||s.statusText;else if(k){var o=E.getElementsByTagName("pre")[0],p=E.getElementsByTagName("body")[0];o?s.responseText=o.textContent?o.textContent:o.innerText:p&&(s.responseText=p.textContent?p.textContent:p.innerText)}}else"xml"==j&&!s.responseXML&&s.responseText&&(s.responseXML=H(s.responseText));try{D=J(s,j,m)}catch(t){f="parsererror",s.error=c=t||f}}catch(t){d("error caught: ",t),f="error",s.error=c=t||f}s.aborted&&(d("upload aborted"),f=null),s.status&&(f=s.status>=200&&s.status<300||304===s.status?"success":"error"),"success"===f?(m.success&&m.success.call(m.context,D,"success",s),y.resolve(s.responseText,"success",s),n&&a.event.trigger("ajaxSuccess",[s,m])):f&&(void 0===c&&(c=s.statusText),m.error&&m.error.call(m.context,s,f,c),y.reject(s,"error",c),n&&a.event.trigger("ajaxError",[s,m,c])),n&&a.event.trigger("ajaxComplete",[s,m]),n&&!--a.active&&a.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,s,f),F=!0,m.timeout&&clearTimeout(w),setTimeout(function(){m.iframeTarget?q.attr("src",m.iframeSrc):q.remove(),s.responseXML=null},100)}}}var j,k,m,n,o,q,r,s,t,u,v,w,x=l[0],y=a.Deferred();if(y.abort=function(a){s.abort(a)},c)for(k=0;k<p.length;k++)j=a(p[k]),f?j.prop("disabled",!1):j.removeAttr("disabled");if(m=a.extend(!0,{},a.ajaxSettings,b),m.context=m.context||m,o="jqFormIO"+(new Date).getTime(),m.iframeTarget?(q=a(m.iframeTarget),u=q.attr2("name"),u?o=u:q.attr2("name",o)):(q=a('<iframe name="'+o+'" src="'+m.iframeSrc+'" />'),q.css({position:"absolute",top:"-1000px",left:"-1000px"})),r=q[0],s={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(b){var c="timeout"===b?"timeout":"aborted";d("aborting upload... "+c),this.aborted=1;try{r.contentWindow.document.execCommand&&r.contentWindow.document.execCommand("Stop")}catch(e){}q.attr("src",m.iframeSrc),s.error=c,m.error&&m.error.call(m.context,s,c,b),n&&a.event.trigger("ajaxError",[s,m,c]),m.complete&&m.complete.call(m.context,s,c)}},n=m.global,n&&0===a.active++&&a.event.trigger("ajaxStart"),n&&a.event.trigger("ajaxSend",[s,m]),m.beforeSend&&m.beforeSend.call(m.context,s,m)===!1)return m.global&&a.active--,y.reject(),y;if(s.aborted)return y.reject(),y;t=x.clk,t&&(u=t.name,u&&!t.disabled&&(m.extraData=m.extraData||{},m.extraData[u]=t.value,"image"==t.type&&(m.extraData[u+".x"]=x.clk_x,m.extraData[u+".y"]=x.clk_y)));var z=1,A=2,B=a("meta[name=csrf-token]").attr("content"),C=a("meta[name=csrf-param]").attr("content");C&&B&&(m.extraData=m.extraData||{},m.extraData[C]=B),m.forceSync?g():setTimeout(g,10);var D,E,F,G=50,H=a.parseXML||function(a,b){return window.ActiveXObject?(b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a)):b=(new DOMParser).parseFromString(a,"text/xml"),b&&b.documentElement&&"parsererror"!=b.documentElement.nodeName?b:null},I=a.parseJSON||function(a){return window.eval("("+a+")")},J=function(b,c,d){var e=b.getResponseHeader("content-type")||"",f="xml"===c||!c&&e.indexOf("xml")>=0,g=f?b.responseXML:b.responseText;return f&&"parsererror"===g.documentElement.nodeName&&a.error&&a.error("parsererror"),d&&d.dataFilter&&(g=d.dataFilter(g,c)),"string"==typeof g&&("json"===c||!c&&e.indexOf("json")>=0?g=I(g):("script"===c||!c&&e.indexOf("javascript")>=0)&&a.globalEval(g)),g};return y}if(!this.length)return d("ajaxSubmit: skipping submit process - no element selected"),this;var i,j,k,l=this;"function"==typeof b?b={success:b}:void 0===b&&(b={}),i=b.type||this.attr2("method"),j=b.url||this.attr2("action"),k="string"==typeof j?a.trim(j):"",k=k||window.location.href||"",k&&(k=(k.match(/^([^#]+)/)||[])[1]),b=a.extend(!0,{url:k,success:a.ajaxSettings.success,type:i||a.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},b);var m={};if(this.trigger("form-pre-serialize",[this,b,m]),m.veto)return d("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(b.beforeSerialize&&b.beforeSerialize(this,b)===!1)return d("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var n=b.traditional;void 0===n&&(n=a.ajaxSettings.traditional);var o,p=[],q=this.formToArray(b.semantic,p);if(b.data&&(b.extraData=b.data,o=a.param(b.data,n)),b.beforeSubmit&&b.beforeSubmit(q,this,b)===!1)return d("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[q,this,b,m]),m.veto)return d("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var r=a.param(q,n);o&&(r=r?r+"&"+o:o),"GET"==b.type.toUpperCase()?(b.url+=(b.url.indexOf("?")>=0?"&":"?")+r,b.data=null):b.data=r;var s=[];if(b.resetForm&&s.push(function(){l.resetForm()}),b.clearForm&&s.push(function(){l.clearForm(b.includeHidden)}),!b.dataType&&b.target){var t=b.success||function(){};s.push(function(c){var d=b.replaceTarget?"replaceWith":"html";a(b.target)[d](c).each(t,arguments)})}else b.success&&s.push(b.success);if(b.success=function(a,c,d){for(var e=b.context||this,f=0,g=s.length;g>f;f++)s[f].apply(e,[a,c,d||l,l])},b.error){var u=b.error;b.error=function(a,c,d){var e=b.context||this;u.apply(e,[a,c,d,l])}}if(b.complete){var v=b.complete;b.complete=function(a,c){var d=b.context||this;v.apply(d,[a,c,l])}}var w=a("input[type=file]:enabled",this).filter(function(){return""!==a(this).val()}),x=w.length>0,y="multipart/form-data",z=l.attr("enctype")==y||l.attr("encoding")==y,A=e.fileapi&&e.formdata;d("fileAPI :"+A);var B,C=(x||z)&&!A;b.iframe!==!1&&(b.iframe||C)?b.closeKeepAlive?a.get(b.closeKeepAlive,function(){B=h(q)}):B=h(q):B=(x||z)&&A?g(q):a.ajax(b),l.removeData("jqxhr").data("jqxhr",B);for(var D=0;D<p.length;D++)p[D]=null;return this.trigger("form-submit-notify",[this,b]),this},a.fn.ajaxForm=function(e){if(e=e||{},e.delegation=e.delegation&&a.isFunction(a.fn.on),!e.delegation&&0===this.length){var f={s:this.selector,c:this.context};return!a.isReady&&f.s?(d("DOM not ready, queuing ajaxForm"),a(function(){a(f.s,f.c).ajaxForm(e)}),this):(d("terminating; zero elements found by selector"+(a.isReady?"":" (DOM not ready)")),this)}return e.delegation?(a(document).off("submit.form-plugin",this.selector,b).off("click.form-plugin",this.selector,c).on("submit.form-plugin",this.selector,e,b).on("click.form-plugin",this.selector,e,c),this):this.ajaxFormUnbind().bind("submit.form-plugin",e,b).bind("click.form-plugin",e,c)},a.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},a.fn.formToArray=function(b,c){var d=[];if(0===this.length)return d;var f,g=this[0],h=this.attr("id"),i=b?g.getElementsByTagName("*"):g.elements;if(i&&!/MSIE 8/.test(navigator.userAgent)&&(i=a(i).get()),h&&(f=a(":input[form="+h+"]").get(),f.length&&(i=(i||[]).concat(f))),!i||!i.length)return d;var j,k,l,m,n,o,p;for(j=0,o=i.length;o>j;j++)if(n=i[j],l=n.name,l&&!n.disabled)if(b&&g.clk&&"image"==n.type)g.clk==n&&(d.push({name:l,value:a(n).val(),type:n.type}),d.push({name:l+".x",value:g.clk_x},{name:l+".y",value:g.clk_y}));else if(m=a.fieldValue(n,!0),m&&m.constructor==Array)for(c&&c.push(n),k=0,p=m.length;p>k;k++)d.push({name:l,value:m[k]});else if(e.fileapi&&"file"==n.type){c&&c.push(n);var q=n.files;if(q.length)for(k=0;k<q.length;k++)d.push({name:l,value:q[k],type:n.type});else d.push({name:l,value:"",type:n.type})}else null!==m&&"undefined"!=typeof m&&(c&&c.push(n),d.push({name:l,value:m,type:n.type,required:n.required}));if(!b&&g.clk){var r=a(g.clk),s=r[0];l=s.name,l&&!s.disabled&&"image"==s.type&&(d.push({name:l,value:r.val()}),d.push({name:l+".x",value:g.clk_x},{name:l+".y",value:g.clk_y}))}return d},a.fn.formSerialize=function(b){return a.param(this.formToArray(b))},a.fn.fieldSerialize=function(b){var c=[];return this.each(function(){var d=this.name;if(d){var e=a.fieldValue(this,b);if(e&&e.constructor==Array)for(var f=0,g=e.length;g>f;f++)c.push({name:d,value:e[f]});else null!==e&&"undefined"!=typeof e&&c.push({name:this.name,value:e})}}),a.param(c)},a.fn.fieldValue=function(b){for(var c=[],d=0,e=this.length;e>d;d++){var f=this[d],g=a.fieldValue(f,b);null===g||"undefined"==typeof g||g.constructor==Array&&!g.length||(g.constructor==Array?a.merge(c,g):c.push(g))}return c},a.fieldValue=function(b,c){var d=b.name,e=b.type,f=b.tagName.toLowerCase();if(void 0===c&&(c=!0),c&&(!d||b.disabled||"reset"==e||"button"==e||("checkbox"==e||"radio"==e)&&!b.checked||("submit"==e||"image"==e)&&b.form&&b.form.clk!=b||"select"==f&&-1==b.selectedIndex))return null;if("select"==f){var g=b.selectedIndex;if(0>g)return null;for(var h=[],i=b.options,j="select-one"==e,k=j?g+1:i.length,l=j?g:0;k>l;l++){var m=i[l];if(m.selected){var n=m.value;if(n||(n=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),j)return n;h.push(n)}}return h}return a(b).val()},a.fn.clearForm=function(b){return this.each(function(){a("input,select,textarea",this).clearFields(b)})},a.fn.clearFields=a.fn.clearInputs=function(b){var c=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var d=this.type,e=this.tagName.toLowerCase();c.test(d)||"textarea"==e?this.value="":"checkbox"==d||"radio"==d?this.checked=!1:"select"==e?this.selectedIndex=-1:"file"==d?/MSIE/.test(navigator.userAgent)?a(this).replaceWith(a(this).clone(!0)):a(this).val(""):b&&(b===!0&&/hidden/.test(d)||"string"==typeof b&&a(this).is(b))&&(this.value="")})},a.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},a.fn.enable=function(a){return void 0===a&&(a=!0),this.each(function(){this.disabled=!a})},a.fn.selected=function(b){return void 0===b&&(b=!0),this.each(function(){var c=this.type;if("checkbox"==c||"radio"==c)this.checked=b;else if("option"==this.tagName.toLowerCase()){var d=a(this).parent("select");b&&d[0]&&"select-one"==d[0].type&&d.find("option").selected(!1),this.selected=b}})},a.fn.ajaxSubmit.debug=!1});;

/* vc_inline_bootstap_js: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-content/plugins/qfy_editor/assets/lib/bootstrap/js/bootstrap.min.js) */
/**
* Bootstrap.js by @fat & @mdo
* plugins: bootstrap-transition.js, bootstrap-modal.js
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(a){a(function(){a.support.transition=function(){var a=function(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},c;for(c in b)if(a.style[c]!==undefined)return b[c]}();return a&&{end:a}}()})}(window.jQuery),!function(a){var b=function(b,c){this.options=c,this.$element=a(b).delegate('[data-dismiss="modal"]',"click.dismiss.modal",a.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};b.prototype={constructor:b,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var b=this,c=a.Event("show");this.$element.trigger(c);if(this.isShown||c.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.backdrop(function(){var c=a.support.transition&&b.$element.hasClass("fade");b.$element.parent().length||b.$element.appendTo(document.body),b.$element.show(),c&&b.$element[0].offsetWidth,b.$element.addClass("in").attr("aria-hidden",!1),b.enforceFocus(),c?b.$element.one(a.support.transition.end,function(){b.$element.focus().trigger("shown")}):b.$element.focus().trigger("shown")})},hide:function(b){b&&b.preventDefault();var c=this;b=a.Event("hide"),this.$element.trigger(b);if(!this.isShown||b.isDefaultPrevented())return;this.isShown=!1,this.escape(),a(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),a.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var b=this;a(document).on("focusin.modal",function(a){b.$element[0]!==a.target&&!b.$element.has(a.target).length&&b.$element.focus()})},escape:function(){var a=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(b){b.which==27&&a.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var b=this,c=setTimeout(function(){b.$element.off(a.support.transition.end),b.hideModal()},500);this.$element.one(a.support.transition.end,function(){clearTimeout(c),b.hideModal()})},hideModal:function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?a.proxy(this.$element[0].focus,this.$element[0]):a.proxy(this.hide,this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!b)return;e?this.$backdrop.one(a.support.transition.end,b):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b):b()):b&&b()}};var c=a.fn.modal;a.fn.modal=function(c){return this.each(function(){var d=a(this),e=d.data("modal"),f=a.extend({},a.fn.modal.defaults,d.data(),typeof c=="object"&&c);e||d.data("modal",e=new b(this,f)),typeof c=="string"?e[c]():f.show&&e.show()})},a.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f).one("hide",function(){c.focus()})})}(window.jQuery);

/* farbtastic: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/admin/js/farbtastic.js) */
/*!
 * Farbtastic: jQuery color picker plug-in v1.3u
 *
 * Licensed under the GPL license:
 *   http://www.gnu.org/licenses/gpl.html
 */
(function($) {

$.fn.farbtastic = function (options) {
  $.farbtastic(this, options);
  return this;
};

$.farbtastic = function (container, callback) {
  var container = $(container).get(0);
  return container.farbtastic || (container.farbtastic = new $._farbtastic(container, callback));
};

$._farbtastic = function (container, callback) {
  // Store farbtastic object
  var fb = this;

  // Insert markup
  $(container).html('<div class="farbtastic"><div class="color"></div><div class="wheel"></div><div class="overlay"></div><div class="h-marker marker"></div><div class="sl-marker marker"></div></div>');
  var e = $('.farbtastic', container);
  fb.wheel = $('.wheel', container).get(0);
  // Dimensions
  fb.radius = 84;
  fb.square = 100;
  fb.width = 194;

  // Fix background PNGs in IE6
  if (navigator.appVersion.match(/MSIE [0-6]\./)) {
    $('*', e).each(function () {
      if (this.currentStyle.backgroundImage != 'none') {
        var image = this.currentStyle.backgroundImage;
        image = this.currentStyle.backgroundImage.substring(5, image.length - 2);
        $(this).css({
          'backgroundImage': 'none',
          'filter': "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='" + image + "')"
        });
      }
    });
  }

  /**
   * Link to the given element(s) or callback.
   */
  fb.linkTo = function (callback) {
    // Unbind previous nodes
    if (typeof fb.callback == 'object') {
      $(fb.callback).unbind('keyup', fb.updateValue);
    }

    // Reset color
    fb.color = null;

    // Bind callback or elements
    if (typeof callback == 'function') {
      fb.callback = callback;
    }
    else if (typeof callback == 'object' || typeof callback == 'string') {
      fb.callback = $(callback);
      fb.callback.bind('keyup', fb.updateValue);
      if (fb.callback.get(0).value) {
        fb.setColor(fb.callback.get(0).value);
      }
    }
    return this;
  };
  fb.updateValue = function (event) {
    if (this.value && this.value != fb.color) {
      fb.setColor(this.value);
    }
  };

  /**
   * Change color with HTML syntax #123456
   */
  fb.setColor = function (color) {
    var unpack = fb.unpack(color);
    if (fb.color != color && unpack) {
      fb.color = color;
      fb.rgb = unpack;
      fb.hsl = fb.RGBToHSL(fb.rgb);
      fb.updateDisplay();
    }
    return this;
  };

  /**
   * Change color with HSL triplet [0..1, 0..1, 0..1]
   */
  fb.setHSL = function (hsl) {
    fb.hsl = hsl;
    fb.rgb = fb.HSLToRGB(hsl);
    fb.color = fb.pack(fb.rgb);
    fb.updateDisplay();
    return this;
  };

  /////////////////////////////////////////////////////

  /**
   * Retrieve the coordinates of the given event relative to the center
   * of the widget.
   */
  fb.widgetCoords = function (event) {
    var offset = $(fb.wheel).offset();
    return { x: (event.pageX - offset.left) - fb.width / 2, y: (event.pageY - offset.top) - fb.width / 2 };
  };

  /**
   * Mousedown handler
   */
  fb.mousedown = function (event) {
    // Capture mouse
    if (!document.dragging) {
      $(document).bind('mousemove', fb.mousemove).bind('mouseup', fb.mouseup);
      document.dragging = true;
    }

    // Check which area is being dragged
    var pos = fb.widgetCoords(event);
    fb.circleDrag = Math.max(Math.abs(pos.x), Math.abs(pos.y)) * 2 > fb.square;

    // Process
    fb.mousemove(event);
    return false;
  };

  /**
   * Mousemove handler
   */
  fb.mousemove = function (event) {
    // Get coordinates relative to color picker center
    var pos = fb.widgetCoords(event);

    // Set new HSL parameters
    if (fb.circleDrag) {
      var hue = Math.atan2(pos.x, -pos.y) / 6.28;
      if (hue < 0) hue += 1;
      fb.setHSL([hue, fb.hsl[1], fb.hsl[2]]);
    }
    else {
      var sat = Math.max(0, Math.min(1, -(pos.x / fb.square) + .5));
      var lum = Math.max(0, Math.min(1, -(pos.y / fb.square) + .5));
      fb.setHSL([fb.hsl[0], sat, lum]);
    }
    return false;
  };

  /**
   * Mouseup handler
   */
  fb.mouseup = function () {
    // Uncapture mouse
    $(document).unbind('mousemove', fb.mousemove);
    $(document).unbind('mouseup', fb.mouseup);
    document.dragging = false;
  };

  /**
   * Update the markers and styles
   */
  fb.updateDisplay = function () {
    // Markers
    var angle = fb.hsl[0] * 6.28;
    $('.h-marker', e).css({
      left: Math.round(Math.sin(angle) * fb.radius + fb.width / 2) + 'px',
      top: Math.round(-Math.cos(angle) * fb.radius + fb.width / 2) + 'px'
    });

    $('.sl-marker', e).css({
      left: Math.round(fb.square * (.5 - fb.hsl[1]) + fb.width / 2) + 'px',
      top: Math.round(fb.square * (.5 - fb.hsl[2]) + fb.width / 2) + 'px'
    });

    // Saturation/Luminance gradient
    $('.color', e).css('backgroundColor', fb.pack(fb.HSLToRGB([fb.hsl[0], 1, 0.5])));

    // Linked elements or callback
    if (typeof fb.callback == 'object') {
      // Set background/foreground color
      $(fb.callback).css({
        backgroundColor: fb.color,
        color: fb.hsl[2] > 0.5 ? '#000' : '#fff'
      });

      // Change linked value
      $(fb.callback).each(function() {
        if (this.value && this.value != fb.color) {
          this.value = fb.color;
        }
      });
    }
    else if (typeof fb.callback == 'function') {
      fb.callback.call(fb, fb.color);
    }
  };

  /* Various color utility functions */
  fb.pack = function (rgb) {
    var r = Math.round(rgb[0] * 255);
    var g = Math.round(rgb[1] * 255);
    var b = Math.round(rgb[2] * 255);
    return '#' + (r < 16 ? '0' : '') + r.toString(16) +
           (g < 16 ? '0' : '') + g.toString(16) +
           (b < 16 ? '0' : '') + b.toString(16);
  };

  fb.unpack = function (color) {
    if (color.length == 7) {
      return [parseInt('0x' + color.substring(1, 3)) / 255,
        parseInt('0x' + color.substring(3, 5)) / 255,
        parseInt('0x' + color.substring(5, 7)) / 255];
    }
    else if (color.length == 4) {
      return [parseInt('0x' + color.substring(1, 2)) / 15,
        parseInt('0x' + color.substring(2, 3)) / 15,
        parseInt('0x' + color.substring(3, 4)) / 15];
    }
  };

  fb.HSLToRGB = function (hsl) {
    var m1, m2, r, g, b;
    var h = hsl[0], s = hsl[1], l = hsl[2];
    m2 = (l <= 0.5) ? l * (s + 1) : l + s - l*s;
    m1 = l * 2 - m2;
    return [this.hueToRGB(m1, m2, h+0.33333),
        this.hueToRGB(m1, m2, h),
        this.hueToRGB(m1, m2, h-0.33333)];
  };

  fb.hueToRGB = function (m1, m2, h) {
    h = (h < 0) ? h + 1 : ((h > 1) ? h - 1 : h);
    if (h * 6 < 1) return m1 + (m2 - m1) * h * 6;
    if (h * 2 < 1) return m2;
    if (h * 3 < 2) return m1 + (m2 - m1) * (0.66666 - h) * 6;
    return m1;
  };

  fb.RGBToHSL = function (rgb) {
    var min, max, delta, h, s, l;
    var r = rgb[0], g = rgb[1], b = rgb[2];
    min = Math.min(r, Math.min(g, b));
    max = Math.max(r, Math.max(g, b));
    delta = max - min;
    l = (min + max) / 2;
    s = 0;
    if (l > 0 && l < 1) {
      s = delta / (l < 0.5 ? (2 * l) : (2 - 2 * l));
    }
    h = 0;
    if (delta > 0) {
      if (max == r && max != g) h += (g - b) / delta;
      if (max == g && max != b) h += (2 + (b - r) / delta);
      if (max == b && max != r) h += (4 + (r - g) / delta);
      h /= 6;
    }
    return [h, s, l];
  };

  // Install mousedown handler (the others are set on the document on-demand)
  $('*', e).mousedown(fb.mousedown);

    // Init color
  fb.setColor('#000000');

  // Set linked elements/callback
  if (callback) {
    fb.linkTo(callback);
  }
};

})(jQuery);;

/* qfe_scrollTo_js: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-content/plugins/qfy_editor/assets/lib/scrollTo/jquery.scrollTo.min.js) */
/**
 * Copyright (c) 2007-2014 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 1.4.11
 */
;(function(a){if(typeof define==='function'&&define.amd){define(['jquery'],a)}else{a(jQuery)}}(function($){var j=$.scrollTo=function(a,b,c){return $(window).scrollTo(a,b,c)};j.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};j.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(f,g,h){if(typeof g=='object'){h=g;g=0}if(typeof h=='function')h={onAfter:h};if(f=='max')f=9e9;h=$.extend({},j.defaults,h);g=g||h.duration;h.queue=h.queue&&h.axis.length>1;if(h.queue)g/=2;h.offset=both(h.offset);h.over=both(h.over);return this._scrollable().each(function(){if(f==null)return;var d=this,$elem=$(d),targ=f,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}var e=$.isFunction(h.offset)&&h.offset(d,targ)||h.offset;$.each(h.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=j.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(h.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=e[pos]||0;if(h.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*h.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(h.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&h.queue){if(old!=attr[key])animate(h.onAfterFirst);delete attr[key]}});animate(h.onAfter);function animate(a){$elem.animate(attr,g,h.easing,a&&function(){a.call(this,targ,h)})}}).end()};j.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return $.isFunction(a)||typeof a=='object'?a:{top:a,left:a}};return j}));
;

/* qfe_php_js: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-content/plugins/qfy_editor/assets/lib/php.default/php.default.min.js) */
/* 
 * More info at: http://phpjs.org
 * 
 * This is version: 3.26
 * php.js is copyright 2011 Kevin van Zonneveld.
 * 
 * Portions copyright Brett Zamir (http://brett-zamir.me), Kevin van Zonneveld
 * (http://kevin.vanzonneveld.net), Onno Marsman, Theriault, Michael White
 * (http://getsprink.com), Waldo Malqui Silva, Paulo Freitas, Jack, Jonas
 * Raoni Soares Silva (http://www.jsfromhell.com), Philip Peterson, Legaev
 * Andrey, Ates Goral (http://magnetiq.com), Alex, Ratheous, Martijn Wieringa,
 * Rafał Kukawski (http://blog.kukawski.pl), lmeyrick
 * (https://sourceforge.net/projects/bcmath-js/), Nate, Philippe Baumann,
 * Enrique Gonzalez, Webtoolkit.info (http://www.webtoolkit.info/), Carlos R.
 * L. Rodrigues (http://www.jsfromhell.com), Ash Searle
 * (http://hexmen.com/blog/), Jani Hartikainen, travc, Ole Vrijenhoek,
 * Erkekjetter, Michael Grier, Rafał Kukawski (http://kukawski.pl), Johnny
 * Mast (http://www.phpvrouwen.nl), T.Wild, d3x,
 * http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript,
 * Rafał Kukawski (http://blog.kukawski.pl/), stag019, pilus, WebDevHobo
 * (http://webdevhobo.blogspot.com/), marrtins, GeekFG
 * (http://geekfg.blogspot.com), Andrea Giammarchi
 * (http://webreflection.blogspot.com), Arpad Ray (mailto:arpad@php.net),
 * gorthaur, Paul Smith, Tim de Koning (http://www.kingsquare.nl), Joris, Oleg
 * Eremeev, Steve Hilder, majak, gettimeofday, KELAN, Josh Fraser
 * (http://onlineaspect.com/2007/06/08/auto-detect-a-time-zone-with-javascript/),
 * Marc Palau, Kevin van Zonneveld (http://kevin.vanzonneveld.net/), Martin
 * (http://www.erlenwiese.de/), Breaking Par Consulting Inc
 * (http://www.breakingpar.com/bkp/home.nsf/0/87256B280015193F87256CFB006C45F7),
 * Chris, Mirek Slugen, saulius, Alfonso Jimenez
 * (http://www.alfonsojimenez.com), Diplom@t (http://difane.com/), felix,
 * Mailfaker (http://www.weedem.fr/), Tyler Akins (http://rumkin.com), Caio
 * Ariede (http://caioariede.com), Robin, Kankrelune
 * (http://www.webfaktory.info/), Karol Kowalski, Imgen Tata
 * (http://www.myipdf.com/), mdsjack (http://www.mdsjack.bo.it), Dreamer,
 * Felix Geisendoerfer (http://www.debuggable.com/felix), Lars Fischer, AJ,
 * David, Aman Gupta, Michael White, Public Domain
 * (http://www.json.org/json2.js), Steven Levithan
 * (http://blog.stevenlevithan.com), Sakimori, Pellentesque Malesuada,
 * Thunder.m, Dj (http://phpjs.org/functions/htmlentities:425#comment_134018),
 * Steve Clay, David James, Francois, class_exists, nobbler, T. Wild, Itsacon
 * (http://www.itsacon.net/), date, Ole Vrijenhoek (http://www.nervous.nl/),
 * Fox, Raphael (Ao RUDLER), Marco, noname, Mateusz "loonquawl" Zalega, Frank
 * Forte, Arno, ger, mktime, john (http://www.jd-tech.net), Nick Kolosov
 * (http://sammy.ru), marc andreu, Scott Cariss, Douglas Crockford
 * (http://javascript.crockford.com), madipta, Slawomir Kaniecki,
 * ReverseSyntax, Nathan, Alex Wilson, kenneth, Bayron Guevara, Adam Wallner
 * (http://web2.bitbaro.hu/), paulo kuong, jmweb, Lincoln Ramsay, djmix,
 * Pyerre, Jon Hohle, Thiago Mata (http://thiagomata.blog.com), lmeyrick
 * (https://sourceforge.net/projects/bcmath-js/this.), Linuxworld, duncan,
 * Gilbert, Sanjoy Roy, Shingo, sankai, Oskar Larsson Högfeldt
 * (http://oskar-lh.name/), Denny Wardhana, 0m3r, Everlasto, Subhasis Deb,
 * josh, jd, Pier Paolo Ramon (http://www.mastersoup.com/), P, merabi, Soren
 * Hansen, Eugene Bulkin (http://doubleaw.com/), Der Simon
 * (http://innerdom.sourceforge.net/), echo is bad, Ozh, XoraX
 * (http://www.xorax.info), EdorFaus, JB, J A R, Marc Jansen, Francesco, LH,
 * Stoyan Kyosev (http://www.svest.org/), nord_ua, omid
 * (http://phpjs.org/functions/380:380#comment_137122), Brad Touesnard, MeEtc
 * (http://yass.meetcweb.com), Peter-Paul Koch
 * (http://www.quirksmode.org/js/beat.html), Olivier Louvignes
 * (http://mg-crea.com/), T0bsn, Tim Wiel, Bryan Elliott, Jalal Berrami,
 * Martin, JT, David Randall, Thomas Beaucourt (http://www.webapp.fr), taith,
 * vlado houba, Pierre-Luc Paour, Kristof Coomans (SCK-CEN Belgian Nucleair
 * Research Centre), Martin Pool, Kirk Strobeck, Rick Waldron, Brant Messenger
 * (http://www.brantmessenger.com/), Devan Penner-Woelk, Saulo Vallory, Wagner
 * B. Soares, Artur Tchernychev, Valentina De Rosa, Jason Wong
 * (http://carrot.org/), Christoph, Daniel Esteban, strftime, Mick@el, rezna,
 * Simon Willison (http://simonwillison.net), Anton Ongson, Gabriel Paderni,
 * Marco van Oort, penutbutterjelly, Philipp Lenssen, Bjorn Roesbeke
 * (http://www.bjornroesbeke.be/), Bug?, Eric Nagel, Tomasz Wesolowski,
 * Evertjan Garretsen, Bobby Drake, Blues (http://tech.bluesmoon.info/), Luke
 * Godfrey, Pul, uestla, Alan C, Ulrich, Rafal Kukawski, Yves Sucaet,
 * sowberry, Norman "zEh" Fuchs, hitwork, Zahlii, johnrembo, Nick Callen,
 * Steven Levithan (stevenlevithan.com), ejsanders, Scott Baker, Brian Tafoya
 * (http://www.premasolutions.com/), Philippe Jausions
 * (http://pear.php.net/user/jausions), Aidan Lister
 * (http://aidanlister.com/), Rob, e-mike, HKM, ChaosNo1, metjay, strcasecmp,
 * strcmp, Taras Bogach, jpfle, Alexander Ermolaev
 * (http://snippets.dzone.com/user/AlexanderErmolaev), DxGx, kilops, Orlando,
 * dptr1988, Le Torbi, James (http://www.james-bell.co.uk/), Pedro Tainha
 * (http://www.pedrotainha.com), James, Arnout Kazemier
 * (http://www.3rd-Eden.com), Chris McMacken, gabriel paderni, Yannoo,
 * FGFEmperor, baris ozdil, Tod Gentille, Greg Frazier, jakes, 3D-GRAF, Allan
 * Jensen (http://www.winternet.no), Howard Yeend, Benjamin Lupton, davook,
 * daniel airton wermann (http://wermann.com.br), Atli Þór, Maximusya, Ryan
 * W Tenney (http://ryan.10e.us), Alexander M Beedie, fearphage
 * (http://http/my.opera.com/fearphage/), Nathan Sepulveda, Victor, Matteo,
 * Billy, stensi, Cord, Manish, T.J. Leahy, Riddler
 * (http://www.frontierwebdev.com/), Rafał Kukawski, FremyCompany, Matt
 * Bradley, Tim de Koning, Luis Salazar (http://www.freaky-media.com/), Diogo
 * Resende, Rival, Andrej Pavlovic, Garagoth, Le Torbi
 * (http://www.letorbi.de/), Dino, Josep Sanz (http://www.ws3.es/), rem,
 * Russell Walker (http://www.nbill.co.uk/), Jamie Beck
 * (http://www.terabit.ca/), setcookie, Michael, YUI Library:
 * http://developer.yahoo.com/yui/docs/YAHOO.util.DateLocale.html, Blues at
 * http://hacks.bluesmoon.info/strftime/strftime.js, Ben
 * (http://benblume.co.uk/), DtTvB
 * (http://dt.in.th/2008-09-16.string-length-in-bytes.html), Andreas, William,
 * meo, incidence, Cagri Ekin, Amirouche, Amir Habibi
 * (http://www.residence-mixte.com/), Luke Smith (http://lucassmith.name),
 * Kheang Hok Chin (http://www.distantia.ca/), Jay Klehr, Lorenzo Pisani,
 * Tony, Yen-Wei Liu, Greenseed, mk.keck, Leslie Hoare, dude, booeyOH, Ben
 * Bryan
 * 
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL KEVIN VAN ZONNEVELD BE LIABLE FOR ANY CLAIM, DAMAGES
 * OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */ 


// Compression: minified


function abs(mixed_number){return Math.abs(mixed_number)||0;}
function acos(arg){return Math.acos(arg);}
function acosh(arg){return Math.log(arg+Math.sqrt(arg*arg-1));}
function addslashes(str){return(str+'').replace(/[\\"']/g,'\\$&').replace(/\u0000/g,'\\0');}
function array_change_key_case(array,cs){var case_fn,key,tmp_ar={};if(Object.prototype.toString.call(array)==='[object Array]'){return array;}
if(array&&typeof array==='object'&&array.change_key_case){return array.change_key_case(cs);}
if(array&&typeof array==='object'){case_fn=(!cs||cs==='CASE_LOWER')?'toLowerCase':'toUpperCase';for(key in array){tmp_ar[key[case_fn]()]=array[key];}
return tmp_ar;}
return false;}
function array_chunk(input,size,preserve_keys){var x,p='',i=0,c=-1,l=input.length||0,n=[];if(size<1){return null;}
if(Object.prototype.toString.call(input)==='[object Array]'){if(preserve_keys){while(i<l){(x=i%size)?n[c][i]=input[i]:n[++c]={},n[c][i]=input[i];i++;}}
else{while(i<l){(x=i%size)?n[c][x]=input[i]:n[++c]=[input[i]];i++;}}}
else{if(preserve_keys){for(p in input){if(input.hasOwnProperty(p)){(x=i%size)?n[c][p]=input[p]:n[++c]={},n[c][p]=input[p];i++;}}}
else{for(p in input){if(input.hasOwnProperty(p)){(x=i%size)?n[c][x]=input[p]:n[++c]=[input[p]];i++;}}}}
return n;}
function array_combine(keys,values){var new_array={},keycount=keys&&keys.length,i=0;if(typeof keys!=='object'||typeof values!=='object'||typeof keycount!=='number'||typeof values.length!=='number'||!keycount){return false;}
if(keycount!=values.length){return false;}
for(i=0;i<keycount;i++){new_array[keys[i]]=values[i];}
return new_array;}
function array_count_values(array){var tmp_arr={},key='',t='';var __getType=function(obj){var t=typeof obj;t=t.toLowerCase();if(t==="object"){t="array";}
return t;};var __countValue=function(value){switch(typeof(value)){case"number":if(Math.floor(value)!==value){return;}
case"string":if(value in this&&this.hasOwnProperty(value)){++this[value];}else{this[value]=1;}}};t=__getType(array);if(t==='array'){for(key in array){if(array.hasOwnProperty(key)){__countValue.call(tmp_arr,array[key]);}}}
return tmp_arr;}
function array_diff(arr1){var retArr={},argl=arguments.length,k1='',i=1,k='',arr={};arr1keys:for(k1 in arr1){for(i=1;i<argl;i++){arr=arguments[i];for(k in arr){if(arr[k]===arr1[k1]){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_diff_assoc(arr1){var retArr={},argl=arguments.length,k1='',i=1,k='',arr={};arr1keys:for(k1 in arr1){for(i=1;i<argl;i++){arr=arguments[i];for(k in arr){if(arr[k]===arr1[k1]&&k===k1){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_diff_key(arr1){var argl=arguments.length,retArr={},k1='',i=1,k='',arr={};arr1keys:for(k1 in arr1){for(i=1;i<argl;i++){arr=arguments[i];for(k in arr){if(k===k1){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_diff_uassoc(arr1){var retArr={},arglm1=arguments.length-1,cb=arguments[arglm1],arr={},i=1,k1='',k='';cb=(typeof cb==='string')?this.window[cb]:(Object.prototype.toString.call(cb)==='[object Array]')?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){for(i=1;i<arglm1;i++){arr=arguments[i];for(k in arr){if(arr[k]===arr1[k1]&&cb(k,k1)===0){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_diff_ukey(arr1){var retArr={},arglm1=arguments.length-1,cb=arguments[arglm1],arr={},i=1,k1='',k='';cb=(typeof cb==='string')?this.window[cb]:(Object.prototype.toString.call(cb)==='[object Array]')?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){for(i=1;i<arglm1;i++){arr=arguments[i];for(k in arr){if(cb(k,k1)===0){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_fill(start_index,num,mixed_val){var key,tmp_arr={};if(!isNaN(start_index)&&!isNaN(num)){for(key=0;key<num;key++){tmp_arr[(key+start_index)]=mixed_val;}}
return tmp_arr;}
function array_fill_keys(keys,value){var retObj={},key='';for(key in keys){retObj[keys[key]]=value;}
return retObj;}
function array_filter(arr,func){var retObj={},k;for(k in arr){if(func(arr[k])){retObj[k]=arr[k];}}
return retObj;}
function array_flip(trans){var key,tmp_ar={};for(key in trans){if(!trans.hasOwnProperty(key)){continue;}
tmp_ar[trans[key]]=key;}
return tmp_ar;}
function array_intersect(arr1){var retArr={},argl=arguments.length,arglm1=argl-1,k1='',arr={},i=0,k='';arr1keys:for(k1 in arr1){arrs:for(i=1;i<argl;i++){arr=arguments[i];for(k in arr){if(arr[k]===arr1[k1]){if(i===arglm1){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_intersect_assoc(arr1){var retArr={},argl=arguments.length,arglm1=argl-1,k1='',arr={},i=0,k='';arr1keys:for(k1 in arr1){arrs:for(i=1;i<argl;i++){arr=arguments[i];for(k in arr){if(arr[k]===arr1[k1]&&k===k1){if(i===arglm1){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_intersect_key(arr1){var retArr={},argl=arguments.length,arglm1=argl-1,k1='',arr={},i=0,k='';arr1keys:for(k1 in arr1){arrs:for(i=1;i<argl;i++){arr=arguments[i];for(k in arr){if(k===k1){if(i===arglm1){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_intersect_uassoc(arr1){var retArr={},arglm1=arguments.length-1,arglm2=arglm1-1,cb=arguments[arglm1],k1='',i=1,arr={},k='';cb=(typeof cb==='string')?this.window[cb]:(Object.prototype.toString.call(cb)==='[object Array]')?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){arrs:for(i=1;i<arglm1;i++){arr=arguments[i];for(k in arr){if(arr[k]===arr1[k1]&&cb(k,k1)===0){if(i===arglm2){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_intersect_ukey(arr1){var retArr={},arglm1=arguments.length-1,arglm2=arglm1-1,cb=arguments[arglm1],k1='',i=1,arr={},k='';cb=(typeof cb==='string')?this.window[cb]:(Object.prototype.toString.call(cb)==='[object Array]')?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){arrs:for(i=1;i<arglm1;i++){arr=arguments[i];for(k in arr){if(cb(k,k1)===0){if(i===arglm2){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_key_exists(key,search){if(!search||(search.constructor!==Array&&search.constructor!==Object)){return false;}
return key in search;}
function array_keys(input,search_value,argStrict){var search=typeof search_value!=='undefined',tmp_arr=[],strict=!!argStrict,include=true,key='';if(input&&typeof input==='object'&&input.change_key_case){return input.keys(search_value,argStrict);}
for(key in input){if(input.hasOwnProperty(key)){include=true;if(search){if(strict&&input[key]!==search_value){include=false;}
else if(input[key]!=search_value){include=false;}}
if(include){tmp_arr[tmp_arr.length]=key;}}}
return tmp_arr;}
function array_map(callback){var argc=arguments.length,argv=arguments;var j=argv[1].length,i=0,k=1,m=0;var tmp=[],tmp_ar=[];while(i<j){while(k<argc){tmp[m++]=argv[k++][i];}
m=0;k=1;if(callback){if(typeof callback==='string'){callback=this.window[callback];}
tmp_ar[i++]=callback.apply(null,tmp);}else{tmp_ar[i++]=tmp;}
tmp=[];}
return tmp_ar;}
function array_merge(){var args=Array.prototype.slice.call(arguments),argl=args.length,arg,retObj={},k='',argil=0,j=0,i=0,ct=0,toStr=Object.prototype.toString,retArr=true;for(i=0;i<argl;i++){if(toStr.call(args[i])!=='[object Array]'){retArr=false;break;}}
if(retArr){retArr=[];for(i=0;i<argl;i++){retArr=retArr.concat(args[i]);}
return retArr;}
for(i=0,ct=0;i<argl;i++){arg=args[i];if(toStr.call(arg)==='[object Array]'){for(j=0,argil=arg.length;j<argil;j++){retObj[ct++]=arg[j];}}
else{for(k in arg){if(arg.hasOwnProperty(k)){if(parseInt(k,10)+''===k){retObj[ct++]=arg[k];}
else{retObj[k]=arg[k];}}}}}
return retObj;}
function array_merge_recursive(arr1,arr2){var idx='';if(arr1&&Object.prototype.toString.call(arr1)==='[object Array]'&&arr2&&Object.prototype.toString.call(arr2)==='[object Array]'){for(idx in arr2){arr1.push(arr2[idx]);}}else if((arr1&&(arr1 instanceof Object))&&(arr2&&(arr2 instanceof Object))){for(idx in arr2){if(idx in arr1){if(typeof arr1[idx]=='object'&&typeof arr2=='object'){arr1[idx]=this.array_merge(arr1[idx],arr2[idx]);}else{arr1[idx]=arr2[idx];}}else{arr1[idx]=arr2[idx];}}}
return arr1;}
function array_pad(input,pad_size,pad_value){var pad=[],newArray=[],newLength,diff=0,i=0;if(Object.prototype.toString.call(input)==='[object Array]'&&!isNaN(pad_size)){newLength=((pad_size<0)?(pad_size*-1):pad_size);diff=newLength-input.length;if(diff>0){for(i=0;i<diff;i++){newArray[i]=pad_value;}
pad=((pad_size<0)?newArray.concat(input):input.concat(newArray));}else{pad=input;}}
return pad;}
function array_pop(inputArr){var key='',lastKey='';if(inputArr.hasOwnProperty('length')){if(!inputArr.length){return null;}
return inputArr.pop();}else{for(key in inputArr){if(inputArr.hasOwnProperty(key)){lastKey=key;}}
if(lastKey){var tmp=inputArr[lastKey];delete(inputArr[lastKey]);return tmp;}else{return null;}}}
function array_product(input){var idx=0,product=1,il=0;if(Object.prototype.toString.call(input)!=='[object Array]'){return null;}
il=input.length;while(idx<il){product*=(!isNaN(input[idx])?input[idx]:0);idx++;}
return product;}
function array_push(inputArr){var i=0,pr='',argv=arguments,argc=argv.length,allDigits=/^\d$/,size=0,highestIdx=0,len=0;if(inputArr.hasOwnProperty('length')){for(i=1;i<argc;i++){inputArr[inputArr.length]=argv[i];}
return inputArr.length;}
for(pr in inputArr){if(inputArr.hasOwnProperty(pr)){++len;if(pr.search(allDigits)!==-1){size=parseInt(pr,10);highestIdx=size>highestIdx?size:highestIdx;}}}
for(i=1;i<argc;i++){inputArr[++highestIdx]=argv[i];}
return len+i-1;}
function array_rand(input,num_req){var indexes=[];var ticks=num_req||1;var checkDuplicate=function(input,value){var exist=false,index=0,il=input.length;while(index<il){if(input[index]===value){exist=true;break;}
index++;}
return exist;};if(Object.prototype.toString.call(input)==='[object Array]'&&ticks<=input.length){while(true){var rand=Math.floor((Math.random()*input.length));if(indexes.length===ticks){break;}
if(!checkDuplicate(indexes,rand)){indexes.push(rand);}}}else{indexes=null;}
return((ticks==1)?indexes.join():indexes);}
function array_reduce(a_input,callback){var lon=a_input.length;var res=0,i=0;var tmp=[];for(i=0;i<lon;i+=2){tmp[0]=a_input[i];if(a_input[(i+1)]){tmp[1]=a_input[(i+1)];}else{tmp[1]=0;}
res+=callback.apply(null,tmp);tmp=[];}
return res;}
function array_reverse(array,preserve_keys){var isArray=Object.prototype.toString.call(array)==="[object Array]",tmp_arr=preserve_keys?{}:[],key;if(isArray&&!preserve_keys){return array.slice(0).reverse();}
if(preserve_keys){var keys=[];for(key in array){keys.push(key);}
var i=keys.length;while(i--){key=keys[i];tmp_arr[key]=array[key];}}else{for(key in array){tmp_arr.unshift(array[key]);}}
return tmp_arr;}
function array_search(needle,haystack,argStrict){var strict=!!argStrict,key='';if(haystack&&typeof haystack==='object'&&haystack.change_key_case){return haystack.search(needle,argStrict);}
if(typeof needle==='object'&&needle.exec){if(!strict){var flags='i'+(needle.global?'g':'')+
(needle.multiline?'m':'')+
(needle.sticky?'y':'');needle=new RegExp(needle.source,flags);}
for(key in haystack){if(needle.test(haystack[key])){return key;}}
return false;}
for(key in haystack){if((strict&&haystack[key]===needle)||(!strict&&haystack[key]==needle)){return key;}}
return false;}
function array_shift(inputArr){var props=false,shift=undefined,pr='',allDigits=/^\d$/,int_ct=-1,_checkToUpIndices=function(arr,ct,key){if(arr[ct]!==undefined){var tmp=ct;ct+=1;if(ct===key){ct+=1;}
ct=_checkToUpIndices(arr,ct,key);arr[ct]=arr[tmp];delete arr[tmp];}
return ct;};if(inputArr.length===0){return null;}
if(inputArr.length>0){return inputArr.shift();}}
function array_slice(arr,offst,lgth,preserve_keys){var key='';if(Object.prototype.toString.call(arr)!=='[object Array]'||(preserve_keys&&offst!==0)){var lgt=0,newAssoc={};for(key in arr){lgt+=1;newAssoc[key]=arr[key];}
arr=newAssoc;offst=(offst<0)?lgt+offst:offst;lgth=lgth===undefined?lgt:(lgth<0)?lgt+lgth-offst:lgth;var assoc={};var start=false,it=-1,arrlgth=0,no_pk_idx=0;for(key in arr){++it;if(arrlgth>=lgth){break;}
if(it==offst){start=true;}
if(!start){continue;}++arrlgth;if(this.is_int(key)&&!preserve_keys){assoc[no_pk_idx++]=arr[key];}else{assoc[key]=arr[key];}}
return assoc;}
if(lgth===undefined){return arr.slice(offst);}else if(lgth>=0){return arr.slice(offst,offst+lgth);}else{return arr.slice(offst,lgth);}}
function array_splice(arr,offst,lgth,replacement){var _checkToUpIndices=function(arr,ct,key){if(arr[ct]!==undefined){var tmp=ct;ct+=1;if(ct===key){ct+=1;}
ct=_checkToUpIndices(arr,ct,key);arr[ct]=arr[tmp];delete arr[tmp];}
return ct;};if(replacement&&typeof replacement!=='object'){replacement=[replacement];}
if(lgth===undefined){lgth=offst>=0?arr.length-offst:-offst;}else if(lgth<0){lgth=(offst>=0?arr.length-offst:-offst)+lgth;}
if(Object.prototype.toString.call(arr)!=='[object Array]'){var lgt=0,ct=-1,rmvd=[],rmvdObj={},repl_ct=-1,int_ct=-1;var returnArr=true,rmvd_ct=0,rmvd_lgth=0,key='';for(key in arr){lgt+=1;}
offst=(offst>=0)?offst:lgt+offst;for(key in arr){ct+=1;if(ct<offst){if(this.is_int(key)){int_ct+=1;if(parseInt(key,10)===int_ct){continue;}
_checkToUpIndices(arr,int_ct,key);arr[int_ct]=arr[key];delete arr[key];}
continue;}
if(returnArr&&this.is_int(key)){rmvd.push(arr[key]);rmvdObj[rmvd_ct++]=arr[key];}else{rmvdObj[key]=arr[key];returnArr=false;}
rmvd_lgth+=1;if(replacement&&replacement[++repl_ct]){arr[key]=replacement[repl_ct];}else{delete arr[key];}}
return returnArr?rmvd:rmvdObj;}
if(replacement){replacement.unshift(offst,lgth);return Array.prototype.splice.apply(arr,replacement);}
return arr.splice(offst,lgth);}
function array_sum(array){var key,sum=0;if(typeof array!=='object'){return null;}
for(key in array){sum+=(array[key]*1);}
return sum;}
function array_udiff(arr1){var retArr={},arglm1=arguments.length-1,cb=arguments[arglm1],arr='',i=1,k1='',k='';cb=(typeof cb==='string')?this.window[cb]:(Object.prototype.toString.call(cb)==='[object Array]')?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){for(i=1;i<arglm1;i++){arr=arguments[i];for(k in arr){if(cb(arr[k],arr1[k1])===0){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_udiff_assoc(arr1){var retArr={},arglm1=arguments.length-1,cb=arguments[arglm1],arr={},i=1,k1='',k='';cb=(typeof cb==='string')?this.window[cb]:(Object.prototype.toString.call(cb)==='[object Array]')?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){for(i=1;i<arglm1;i++){arr=arguments[i];for(k in arr){if(cb(arr[k],arr1[k1])===0&&k===k1){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_udiff_uassoc(arr1){var retArr={},arglm1=arguments.length-1,arglm2=arglm1-1,cb=arguments[arglm1],cb0=arguments[arglm2],k1='',i=1,k='',arr={};cb=(typeof cb==='string')?this.window[cb]:(Object.prototype.toString.call(cb)==='[object Array]')?this.window[cb[0]][cb[1]]:cb;cb0=(typeof cb0==='string')?this.window[cb0]:(Object.prototype.toString.call(cb0)==='[object Array]')?this.window[cb0[0]][cb0[1]]:cb0;arr1keys:for(k1 in arr1){for(i=1;i<arglm2;i++){arr=arguments[i];for(k in arr){if(cb0(arr[k],arr1[k1])===0&&cb(k,k1)===0){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_uintersect(arr1){var retArr={},arglm1=arguments.length-1,arglm2=arglm1-1,cb=arguments[argm1],k1='',i=1,arr={},k='';cb=(typeof cb==='string')?this.window[cb]:(Object.prototype.toString.call(cb)==='[object Array]')?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){arrs:for(i=1;i<arglm1;i++){arr=arguments[i];for(k in arr){if(cb(arr[k],arr1[k1])===0){if(i===arglm2){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_uintersect_assoc(arr1){var retArr={},arglm1=arguments.length-1,arglm2=arglm1-2,cb=arguments[arglm1],k1='',i=1,arr={},k='';cb=(typeof cb==='string')?this.window[cb]:(Object.prototype.toString.call(cb)==='[object Array]')?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){arrs:for(i=1;i<arglm1;i++){arr=arguments[i];for(k in arr){if(k===k1&&cb(arr[k],arr1[k1])===0){if(i===arglm2){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_uintersect_uassoc(arr1){var retArr={},arglm1=arguments.length-1,arglm2=arglm1-1,cb=arguments[arglm1],cb0=arguments[arglm2],k1='',i=1,k='',arr={};cb=(typeof cb==='string')?this.window[cb]:(Object.prototype.toString.call(cb)==='[object Array]')?this.window[cb[0]][cb[1]]:cb;cb0=(typeof cb0==='string')?this.window[cb0]:(Object.prototype.toString.call(cb0)==='[object Array]')?this.window[cb0[0]][cb0[1]]:cb0;arr1keys:for(k1 in arr1){arrs:for(i=1;i<arglm2;i++){arr=arguments[i];for(k in arr){if(cb0(arr[k],arr1[k1])===0&&cb(k,k1)===0){if(i===arguments.length-3){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_unique(inputArr){var key='',tmp_arr2={},val='';var __array_search=function(needle,haystack){var fkey='';for(fkey in haystack){if(haystack.hasOwnProperty(fkey)){if((haystack[fkey]+'')===(needle+'')){return fkey;}}}
return false;};for(key in inputArr){if(inputArr.hasOwnProperty(key)){val=inputArr[key];if(false===__array_search(val,tmp_arr2)){tmp_arr2[key]=val;}}}
return tmp_arr2;}
function array_unshift(array){var i=arguments.length;while(--i!==0){arguments[0].unshift(arguments[i]);}
return arguments[0].length;}
function array_values(input){var tmp_arr=[],key='';if(input&&typeof input==='object'&&input.change_key_case){return input.values();}
for(key in input){tmp_arr[tmp_arr.length]=input[key];}
return tmp_arr;}
function array_walk(array,funcname,userdata){var key;if(typeof array!=='object'||array===null){return false;}
for(key in array){if(typeof(userdata)!=='undefined'){eval(funcname+'( array [key] , key , userdata  )');}else{eval(funcname+'(  userdata ) ');}}
return true;}
function array_walk_recursive(array,funcname,userdata){var key;if(typeof array!='object'){return false;}
for(key in array){if(typeof array[key]=='object'){return this.array_walk_recursive(array[key],funcname,userdata);}
if(typeof(userdata)!='undefined'){eval(funcname+'( array [key] , key , userdata  )');}else{eval(funcname+'(  userdata ) ');}}
return true;}
function arsort(inputArr,sort_flags){var valArr=[],valArrLen=0,k,i,ret,sorter,that=this,strictForIn=false,populateArr={};switch(sort_flags){case'SORT_STRING':sorter=function(a,b){return that.strnatcmp(b,a);};break;case'SORT_LOCALE_STRING':var loc=this.i18n_loc_get_default();sorter=this.php_js.i18nLocales[loc].sorting;break;case'SORT_NUMERIC':sorter=function(a,b){return(a-b);};break;case'SORT_REGULAR':default:sorter=function(b,a){var aFloat=parseFloat(a),bFloat=parseFloat(b),aNumeric=aFloat+''===a,bNumeric=bFloat+''===b;if(aNumeric&&bNumeric){return aFloat>bFloat?1:aFloat<bFloat?-1:0;}else if(aNumeric&&!bNumeric){return 1;}else if(!aNumeric&&bNumeric){return-1;}
return a>b?1:a<b?-1:0;};break;}
this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(k in inputArr){if(inputArr.hasOwnProperty(k)){valArr.push([k,inputArr[k]]);if(strictForIn){delete inputArr[k];}}}
valArr.sort(function(a,b){return sorter(a[1],b[1]);});for(i=0,valArrLen=valArr.length;i<valArrLen;i++){populateArr[valArr[i][0]]=valArr[i][1];}
return strictForIn||populateArr;}
function asin(arg){return Math.asin(arg);}
function asinh(arg){return Math.log(arg+Math.sqrt(arg*arg+1));}
function asort(inputArr,sort_flags){var valArr=[],valArrLen=0,k,i,ret,sorter,that=this,strictForIn=false,populateArr={};switch(sort_flags){case'SORT_STRING':sorter=function(a,b){return that.strnatcmp(a,b);};break;case'SORT_LOCALE_STRING':var loc=this.i18n_loc_get_default();sorter=this.php_js.i18nLocales[loc].sorting;break;case'SORT_NUMERIC':sorter=function(a,b){return(a-b);};break;case'SORT_REGULAR':default:sorter=function(a,b){var aFloat=parseFloat(a),bFloat=parseFloat(b),aNumeric=aFloat+''===a,bNumeric=bFloat+''===b;if(aNumeric&&bNumeric){return aFloat>bFloat?1:aFloat<bFloat?-1:0;}else if(aNumeric&&!bNumeric){return 1;}else if(!aNumeric&&bNumeric){return-1;}
return a>b?1:a<b?-1:0;};break;}
this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(k in inputArr){if(inputArr.hasOwnProperty(k)){valArr.push([k,inputArr[k]]);if(strictForIn){delete inputArr[k];}}}
valArr.sort(function(a,b){return sorter(a[1],b[1]);});for(i=0,valArrLen=valArr.length;i<valArrLen;i++){populateArr[valArr[i][0]]=valArr[i][1];}
return strictForIn||populateArr;}
function atan(arg){return Math.atan(arg);}
function atan2(y,x){return Math.atan2(y,x);}
function atanh(arg){return 0.5*Math.log((1+arg)/(1-arg));}
function base64_decode(data){var b64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var o1,o2,o3,h1,h2,h3,h4,bits,i=0,ac=0,dec="",tmp_arr=[];if(!data){return data;}
data+='';do{h1=b64.indexOf(data.charAt(i++));h2=b64.indexOf(data.charAt(i++));h3=b64.indexOf(data.charAt(i++));h4=b64.indexOf(data.charAt(i++));bits=h1<<18|h2<<12|h3<<6|h4;o1=bits>>16&0xff;o2=bits>>8&0xff;o3=bits&0xff;if(h3==64){tmp_arr[ac++]=String.fromCharCode(o1);}else if(h4==64){tmp_arr[ac++]=String.fromCharCode(o1,o2);}else{tmp_arr[ac++]=String.fromCharCode(o1,o2,o3);}}while(i<data.length);dec=tmp_arr.join('');dec=this.utf8_decode(dec);return dec;}
function base64_encode(data){var b64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var o1,o2,o3,h1,h2,h3,h4,bits,i=0,ac=0,enc="",tmp_arr=[];if(!data){return data;}
data=this.utf8_encode(data+'');do{o1=data.charCodeAt(i++);o2=data.charCodeAt(i++);o3=data.charCodeAt(i++);bits=o1<<16|o2<<8|o3;h1=bits>>18&0x3f;h2=bits>>12&0x3f;h3=bits>>6&0x3f;h4=bits&0x3f;tmp_arr[ac++]=b64.charAt(h1)+b64.charAt(h2)+b64.charAt(h3)+b64.charAt(h4);}while(i<data.length);enc=tmp_arr.join('');var r=data.length%3;return(r?enc.slice(0,r-3):enc)+'==='.slice(r||3);}
function base_convert(number,frombase,tobase){return parseInt(number+'',frombase|0).toString(tobase|0);}
function bin2hex(s){var i,f=0,a=[];s+='';f=s.length;for(i=0;i<f;i++){a[i]=s.charCodeAt(i).toString(16).replace(/^([\da-f])$/,"0$1");}
return a.join('');}
function bindec(binary_string){binary_string=(binary_string+'').replace(/[^01]/gi,'');return parseInt(binary_string,2);}
function ceil(value){return Math.ceil(value);}
function checkdate(m,d,y){return m>0&&m<13&&y>0&&y<32768&&d>0&&d<=(new Date(y,m,0)).getDate();}
function chop(str,charlist){return this.rtrim(str,charlist);}
function chr(codePt){if(codePt>0xFFFF){codePt-=0x10000;return String.fromCharCode(0xD800+(codePt>>10),0xDC00+(codePt&0x3FF));}
return String.fromCharCode(codePt);}
function chunk_split(body,chunklen,end){chunklen=parseInt(chunklen,10)||76;end=end||'\r\n';if(chunklen<1){return false;}
return body.match(new RegExp(".{0,"+chunklen+"}","g")).join(end);}
function class_exists(cls){var i='';cls=this.window[cls];if(typeof cls!=='function'){return false;}
for(i in cls.prototype){return true;}
for(i in cls){if(i!=='prototype'){return true;}}
if(cls.toSource&&cls.toSource().match(/this\./)){return true;}
return false;}
function compact(){var matrix={},that=this;var process=function(value){var i=0,l=value.length,key_value='';for(i=0;i<l;i++){key_value=value[i];if(Object.prototype.toString.call(key_value)==='[object Array]'){process(key_value);}else{if(typeof that.window[key_value]!=='undefined'){matrix[key_value]=that.window[key_value];}}}
return true;};process(arguments);return matrix;}
function cos(arg){return Math.cos(arg);}
function cosh(arg){return(Math.exp(arg)+Math.exp(-arg))/2;}
function count(mixed_var,mode){var key,cnt=0;if(mixed_var===null||typeof mixed_var==='undefined'){return 0;}else if(mixed_var.constructor!==Array&&mixed_var.constructor!==Object){return 1;}
if(mode==='COUNT_RECURSIVE'){mode=1;}
if(mode!=1){mode=0;}
for(key in mixed_var){if(mixed_var.hasOwnProperty(key)){cnt++;if(mode==1&&mixed_var[key]&&(mixed_var[key].constructor===Array||mixed_var[key].constructor===Object)){cnt+=this.count(mixed_var[key],1);}}}
return cnt;}
function count_chars(str,mode){var result={},resultArr=[],i;str=(''+str).split('').sort().join('').match(/(.)\1*/g);if((mode&1)==0){for(i=0;i!=256;i++){result[i]=0;}}
if(mode===2||mode===4){for(i=0;i!=str.length;i+=1){delete result[str[i].charCodeAt(0)];}
for(i in result){result[i]=(mode===4)?String.fromCharCode(i):0;}}else if(mode===3){for(i=0;i!=str.length;i+=1){result[i]=str[i].slice(0,1);}}else{for(i=0;i!=str.length;i+=1){result[str[i].charCodeAt(0)]=str[i].length;}}
if(mode<3){return result;}
for(i in result){resultArr.push(result[i]);}
return resultArr.join('');}
function crc32(str){str=this.utf8_encode(str);var table="00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D";var crc=0;var x=0;var y=0;crc=crc^(-1);for(var i=0,iTop=str.length;i<iTop;i++){y=(crc^str.charCodeAt(i))&0xFF;x="0x"+table.substr(y*9,8);crc=(crc>>>8)^x;}
return crc^(-1);}
function date(format,timestamp){var that=this,jsdate,f,formatChr=/\\?([a-z])/gi,formatChrCb,_pad=function(n,c){if((n=n+'').length<c){return new Array((++c)-n.length).join('0')+n;}
return n;},txt_words=["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur","January","February","March","April","May","June","July","August","September","October","November","December"];formatChrCb=function(t,s){return f[t]?f[t]():s;};f={d:function(){return _pad(f.j(),2);},D:function(){return f.l().slice(0,3);},j:function(){return jsdate.getDate();},l:function(){return txt_words[f.w()]+'day';},N:function(){return f.w()||7;},S:function(){var j=f.j();return j>4&&j<21?'th':{1:'st',2:'nd',3:'rd'}[j%10]||'th';},w:function(){return jsdate.getDay();},z:function(){var a=new Date(f.Y(),f.n()-1,f.j()),b=new Date(f.Y(),0,1);return Math.round((a-b)/864e5)+1;},W:function(){var a=new Date(f.Y(),f.n()-1,f.j()-f.N()+3),b=new Date(a.getFullYear(),0,4);return _pad(1+Math.round((a-b)/864e5/7),2);},F:function(){return txt_words[6+f.n()];},m:function(){return _pad(f.n(),2);},M:function(){return f.F().slice(0,3);},n:function(){return jsdate.getMonth()+1;},t:function(){return(new Date(f.Y(),f.n(),0)).getDate();},L:function(){return new Date(f.Y(),1,29).getMonth()===1|0;},o:function(){var n=f.n(),W=f.W(),Y=f.Y();return Y+(n===12&&W<9?-1:n===1&&W>9);},Y:function(){return jsdate.getFullYear();},y:function(){return(f.Y()+"").slice(-2);},a:function(){return jsdate.getHours()>11?"pm":"am";},A:function(){return f.a().toUpperCase();},B:function(){var H=jsdate.getUTCHours()*36e2,i=jsdate.getUTCMinutes()*60,s=jsdate.getUTCSeconds();return _pad(Math.floor((H+i+s+36e2)/86.4)%1e3,3);},g:function(){return f.G()%12||12;},G:function(){return jsdate.getHours();},h:function(){return _pad(f.g(),2);},H:function(){return _pad(f.G(),2);},i:function(){return _pad(jsdate.getMinutes(),2);},s:function(){return _pad(jsdate.getSeconds(),2);},u:function(){return _pad(jsdate.getMilliseconds()*1000,6);},e:function(){throw'Not supported (see source code of date() for timezone on how to add support)';},I:function(){var a=new Date(f.Y(),0),c=Date.UTC(f.Y(),0),b=new Date(f.Y(),6),d=Date.UTC(f.Y(),6);return 0+((a-c)!==(b-d));},O:function(){var tzo=jsdate.getTimezoneOffset(),a=Math.abs(tzo);return(tzo>0?"-":"+")+_pad(Math.floor(a/60)*100+a%60,4);},P:function(){var O=f.O();return(O.substr(0,3)+":"+O.substr(3,2));},T:function(){return'UTC';},Z:function(){return-jsdate.getTimezoneOffset()*60;},c:function(){return'Y-m-d\\Th:i:sP'.replace(formatChr,formatChrCb);},r:function(){return'D, d M Y H:i:s O'.replace(formatChr,formatChrCb);},U:function(){return jsdate.getTime()/1000|0;}};this.date=function(format,timestamp){that=this;jsdate=((typeof timestamp==='undefined')?new Date():(timestamp instanceof Date)?new Date(timestamp):new Date(timestamp*1000));return format.replace(formatChr,formatChrCb);};return this.date(format,timestamp);}
function decbin(number){if(number<0){number=0xFFFFFFFF+number+1;}
return parseInt(number,10).toString(2);}
function dechex(number){if(number<0){number=0xFFFFFFFF+number+1;}
return parseInt(number,10).toString(16);}
function decoct(number){if(number<0){number=0xFFFFFFFF+number+1;}
return parseInt(number,10).toString(8);}
function deg2rad(angle){return(angle/180)*Math.PI;}
function doubleval(mixed_var){return this.floatval(mixed_var);}
function echo(){var arg='',argc=arguments.length,argv=arguments,i=0,holder,win=this.window,d=win.document,ns_xhtml='http://www.w3.org/1999/xhtml',ns_xul='http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul';var stringToDOM=function(str,parent,ns,container){var extraNSs='';if(ns===ns_xul){extraNSs=' xmlns:html="'+ns_xhtml+'"';}
var stringContainer='<'+container+' xmlns="'+ns+'"'+extraNSs+'>'+str+'</'+container+'>';var dils=win.DOMImplementationLS,dp=win.DOMParser,ax=win.ActiveXObject;if(dils&&dils.createLSInput&&dils.createLSParser){var lsInput=dils.createLSInput();lsInput.stringData=stringContainer;var lsParser=dils.createLSParser(1,null);return lsParser.parse(lsInput).firstChild;}else if(dp){try{var fc=new dp().parseFromString(stringContainer,'text/xml');if(fc&&fc.documentElement&&fc.documentElement.localName!=='parsererror'&&fc.documentElement.namespaceURI!=='http://www.mozilla.org/newlayout/xml/parsererror.xml'){return fc.documentElement.firstChild;}}catch(e){}}else if(ax){var axo=new ax('MSXML2.DOMDocument');axo.loadXML(str);return axo.documentElement;}
if(d.createElementNS&&(d.documentElement.namespaceURI||d.documentElement.nodeName.toLowerCase()!=='html'||(d.contentType&&d.contentType!=='text/html'))){holder=d.createElementNS(ns,container);}else{holder=d.createElement(container);}
holder.innerHTML=str;while(holder.firstChild){parent.appendChild(holder.firstChild);}
return false;};var ieFix=function(node){if(node.nodeType===1){var newNode=d.createElement(node.nodeName);var i,len;if(node.attributes&&node.attributes.length>0){for(i=0,len=node.attributes.length;i<len;i++){newNode.setAttribute(node.attributes[i].nodeName,node.getAttribute(node.attributes[i].nodeName));}}
if(node.childNodes&&node.childNodes.length>0){for(i=0,len=node.childNodes.length;i<len;i++){newNode.appendChild(ieFix(node.childNodes[i]));}}
return newNode;}else{return d.createTextNode(node.nodeValue);}};var replacer=function(s,m1,m2){if(m1!=='\\'){return m1+eval(m2);}else{return s;}};this.php_js=this.php_js||{};var phpjs=this.php_js,ini=phpjs.ini,obs=phpjs.obs;for(i=0;i<argc;i++){arg=argv[i];if(ini&&ini['phpjs.echo_embedded_vars']){arg=arg.replace(/(.?)\{?\$(\w*?\}|\w*)/g,replacer);}
if(!phpjs.flushing&&obs&&obs.length){obs[obs.length-1].buffer+=arg;continue;}
if(d.appendChild){if(d.body){if(win.navigator.appName==='Microsoft Internet Explorer'){d.body.appendChild(stringToDOM(ieFix(arg)));}else{var unappendedLeft=stringToDOM(arg,d.body,ns_xhtml,'div').cloneNode(true);if(unappendedLeft){d.body.appendChild(unappendedLeft);}}}else{d.documentElement.appendChild(stringToDOM(arg,d.documentElement,ns_xul,'description'));}}else if(d.write){d.write(arg);}}}
function end(arr){this.php_js=this.php_js||{};this.php_js.pointers=this.php_js.pointers||[];var indexOf=function(value){for(var i=0,length=this.length;i<length;i++){if(this[i]===value){return i;}}
return-1;};var pointers=this.php_js.pointers;if(!pointers.indexOf){pointers.indexOf=indexOf;}
if(pointers.indexOf(arr)===-1){pointers.push(arr,0);}
var arrpos=pointers.indexOf(arr);if(Object.prototype.toString.call(arr)!=='[object Array]'){var ct=0;for(var k in arr){ct++;var val=arr[k];}
if(ct===0){return false;}
pointers[arrpos+1]=ct-1;return val;}
if(arr.length===0){return false;}
pointers[arrpos+1]=arr.length-1;return arr[pointers[arrpos+1]];}
function exp(arg){return Math.exp(arg);}
function explode(delimiter,string,limit){var emptyArray={0:''};if(arguments.length<2||typeof arguments[0]=='undefined'||typeof arguments[1]=='undefined'){return null;}
if(delimiter===''||delimiter===false||delimiter===null){return false;}
if(typeof delimiter=='function'||typeof delimiter=='object'||typeof string=='function'||typeof string=='object'){return emptyArray;}
if(delimiter===true){delimiter='1';}
if(!limit){return string.toString().split(delimiter.toString());}
var splitted=string.toString().split(delimiter.toString());var partA=splitted.splice(0,limit-1);var partB=splitted.join(delimiter.toString());partA.push(partB);return partA;}
function expm1(x){var ret=0,n=50;var factorial=function factorial(n){if((n===0)||(n===1)){return 1;}else{var result=(n*factorial(n-1));return result;}};for(var i=1;i<n;i++){ret+=Math.pow(x,i)/factorial(i);}
return ret;}
function floatval(mixed_var){return(parseFloat(mixed_var)||0);}
function floor(value){return Math.floor(value);}
function fmod(x,y){var tmp,tmp2,p=0,pY=0,l=0.0,l2=0.0;tmp=x.toExponential().match(/^.\.?(.*)e(.+)$/);p=parseInt(tmp[2],10)-(tmp[1]+'').length;tmp=y.toExponential().match(/^.\.?(.*)e(.+)$/);pY=parseInt(tmp[2],10)-(tmp[1]+'').length;if(pY>p){p=pY;}
tmp2=(x%y);if(p<-100||p>20){l=Math.round(Math.log(tmp2)/Math.log(10));l2=Math.pow(10,l);return(tmp2/l2).toFixed(l-p)*l2;}else{return parseFloat(tmp2.toFixed(-p));}}
function get_class(obj){if(obj&&typeof obj==='object'&&Object.prototype.toString.call(obj)!=='[object Array]'&&obj.constructor&&obj!=this.window){var arr=obj.constructor.toString().match(/function\s*(\w+)/);if(arr&&arr.length==2){return arr[1];}}
return false;}
function get_defined_vars(){var i='',arr=[],already={};for(i in this.window){try{if(typeof this.window[i]==='object'){for(var j in this.window[i]){if(this.window[j]&&!already[j]){already[j]=1;arr.push(j);}}}else if(!already[i]){already[i]=1;arr.push(i);}}catch(e){if(!already[i]){already[i]=1;arr.push(i);}}}
return arr;}
function get_headers(url,format){var req=this.window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest();if(!req){throw new Error('XMLHttpRequest not supported');}
var tmp,headers,pair,i,j=0;req.open('HEAD',url,false);req.send(null);if(req.readyState<3){return false;}
tmp=req.getAllResponseHeaders();tmp=tmp.split('\n');tmp=this.array_filter(tmp,function(value){return value.substring(1)!=='';});headers=format?{}:[];for(i in tmp){if(format){pair=tmp[i].split(':');headers[pair.splice(0,1)]=pair.join(':').substring(1);}else{headers[j++]=tmp[i];}}
return headers;}
function get_html_translation_table(table,quote_style){var entities={},hash_map={},decimal;var constMappingTable={},constMappingQuoteStyle={};var useTable={},useQuoteStyle={};constMappingTable[0]='HTML_SPECIALCHARS';constMappingTable[1]='HTML_ENTITIES';constMappingQuoteStyle[0]='ENT_NOQUOTES';constMappingQuoteStyle[2]='ENT_COMPAT';constMappingQuoteStyle[3]='ENT_QUOTES';useTable=!isNaN(table)?constMappingTable[table]:table?table.toUpperCase():'HTML_SPECIALCHARS';useQuoteStyle=!isNaN(quote_style)?constMappingQuoteStyle[quote_style]:quote_style?quote_style.toUpperCase():'ENT_COMPAT';if(useTable!=='HTML_SPECIALCHARS'&&useTable!=='HTML_ENTITIES'){throw new Error("Table: "+useTable+' not supported');}
entities['38']='&amp;';if(useTable==='HTML_ENTITIES'){entities['160']='&nbsp;';entities['161']='&iexcl;';entities['162']='&cent;';entities['163']='&pound;';entities['164']='&curren;';entities['165']='&yen;';entities['166']='&brvbar;';entities['167']='&sect;';entities['168']='&uml;';entities['169']='&copy;';entities['170']='&ordf;';entities['171']='&laquo;';entities['172']='&not;';entities['173']='&shy;';entities['174']='&reg;';entities['175']='&macr;';entities['176']='&deg;';entities['177']='&plusmn;';entities['178']='&sup2;';entities['179']='&sup3;';entities['180']='&acute;';entities['181']='&micro;';entities['182']='&para;';entities['183']='&middot;';entities['184']='&cedil;';entities['185']='&sup1;';entities['186']='&ordm;';entities['187']='&raquo;';entities['188']='&frac14;';entities['189']='&frac12;';entities['190']='&frac34;';entities['191']='&iquest;';entities['192']='&Agrave;';entities['193']='&Aacute;';entities['194']='&Acirc;';entities['195']='&Atilde;';entities['196']='&Auml;';entities['197']='&Aring;';entities['198']='&AElig;';entities['199']='&Ccedil;';entities['200']='&Egrave;';entities['201']='&Eacute;';entities['202']='&Ecirc;';entities['203']='&Euml;';entities['204']='&Igrave;';entities['205']='&Iacute;';entities['206']='&Icirc;';entities['207']='&Iuml;';entities['208']='&ETH;';entities['209']='&Ntilde;';entities['210']='&Ograve;';entities['211']='&Oacute;';entities['212']='&Ocirc;';entities['213']='&Otilde;';entities['214']='&Ouml;';entities['215']='&times;';entities['216']='&Oslash;';entities['217']='&Ugrave;';entities['218']='&Uacute;';entities['219']='&Ucirc;';entities['220']='&Uuml;';entities['221']='&Yacute;';entities['222']='&THORN;';entities['223']='&szlig;';entities['224']='&agrave;';entities['225']='&aacute;';entities['226']='&acirc;';entities['227']='&atilde;';entities['228']='&auml;';entities['229']='&aring;';entities['230']='&aelig;';entities['231']='&ccedil;';entities['232']='&egrave;';entities['233']='&eacute;';entities['234']='&ecirc;';entities['235']='&euml;';entities['236']='&igrave;';entities['237']='&iacute;';entities['238']='&icirc;';entities['239']='&iuml;';entities['240']='&eth;';entities['241']='&ntilde;';entities['242']='&ograve;';entities['243']='&oacute;';entities['244']='&ocirc;';entities['245']='&otilde;';entities['246']='&ouml;';entities['247']='&divide;';entities['248']='&oslash;';entities['249']='&ugrave;';entities['250']='&uacute;';entities['251']='&ucirc;';entities['252']='&uuml;';entities['253']='&yacute;';entities['254']='&thorn;';entities['255']='&yuml;';}
if(useQuoteStyle!=='ENT_NOQUOTES'){entities['34']='&quot;';}
if(useQuoteStyle==='ENT_QUOTES'){entities['39']='&#39;';}
entities['60']='&lt;';entities['62']='&gt;';for(decimal in entities){if(entities.hasOwnProperty(decimal)){hash_map[String.fromCharCode(decimal)]=entities[decimal];}}
return hash_map;}
function getdate(timestamp){var _w=['Sun','Mon','Tues','Wednes','Thurs','Fri','Satur'];var _m=['January','February','March','April','May','June','July','August','September','October','November','December'];var d=((typeof(timestamp)=='undefined')?new Date():(typeof(timestamp)=='object')?new Date(timestamp):new Date(timestamp*1000));var w=d.getDay();var m=d.getMonth();var y=d.getFullYear();var r={};r.seconds=d.getSeconds();r.minutes=d.getMinutes();r.hours=d.getHours();r.mday=d.getDate();r.wday=w;r.mon=m+1;r.year=y;r.yday=Math.floor((d-(new Date(y,0,1)))/86400000);r.weekday=_w[w]+'day';r.month=_m[m];r['0']=parseInt(d.getTime()/1000,10);return r;}
function getrandmax(){return 2147483647;}
function hexdec(hex_string){hex_string=(hex_string+'').replace(/[^a-f0-9]/gi,'');return parseInt(hex_string,16);}
function html_entity_decode(string,quote_style){var hash_map={},symbol='',tmp_str='',entity='';tmp_str=string.toString();if(false===(hash_map=this.get_html_translation_table('HTML_ENTITIES',quote_style))){return false;}
delete(hash_map['&']);hash_map['&']='&amp;';for(symbol in hash_map){entity=hash_map[symbol];tmp_str=tmp_str.split(entity).join(symbol);}
tmp_str=tmp_str.split('&#039;').join("'");return tmp_str;}
function htmlentities(string,quote_style,charset,double_encode){var hash_map=this.get_html_translation_table('HTML_ENTITIES',quote_style),symbol='';string=string==null?'':string+'';if(!hash_map){return false;}
if(quote_style&&quote_style==='ENT_QUOTES'){hash_map["'"]='&#039;';}
if(!!double_encode||double_encode==null){for(symbol in hash_map){if(hash_map.hasOwnProperty(symbol)){string=string.split(symbol).join(hash_map[symbol]);}}}else{string=string.replace(/([\s\S]*?)(&(?:#\d+|#x[\da-f]+|[a-zA-Z][\da-z]*);|$)/g,function(ignore,text,entity){for(symbol in hash_map){if(hash_map.hasOwnProperty(symbol)){text=text.split(symbol).join(hash_map[symbol]);}}
return text+entity;});}
return string;}
function htmlspecialchars(string,quote_style,charset,double_encode){var optTemp=0,i=0,noquotes=false;if(typeof quote_style==='undefined'||quote_style===null){quote_style=2;}
string=string.toString();if(double_encode!==false){string=string.replace(/&/g,'&amp;');}
string=string.replace(/</g,'&lt;').replace(/>/g,'&gt;');var OPTS={'ENT_NOQUOTES':0,'ENT_HTML_QUOTE_SINGLE':1,'ENT_HTML_QUOTE_DOUBLE':2,'ENT_COMPAT':2,'ENT_QUOTES':3,'ENT_IGNORE':4};if(quote_style===0){noquotes=true;}
if(typeof quote_style!=='number'){quote_style=[].concat(quote_style);for(i=0;i<quote_style.length;i++){if(OPTS[quote_style[i]]===0){noquotes=true;}
else if(OPTS[quote_style[i]]){optTemp=optTemp|OPTS[quote_style[i]];}}
quote_style=optTemp;}
if(quote_style&OPTS.ENT_HTML_QUOTE_SINGLE){string=string.replace(/'/g,'&#039;');}
if(!noquotes){string=string.replace(/"/g,'&quot;');}
return string;}
function htmlspecialchars_decode(string,quote_style){var optTemp=0,i=0,noquotes=false;if(typeof quote_style==='undefined'){quote_style=2;}
string=string.toString().replace(/&lt;/g,'<').replace(/&gt;/g,'>');var OPTS={'ENT_NOQUOTES':0,'ENT_HTML_QUOTE_SINGLE':1,'ENT_HTML_QUOTE_DOUBLE':2,'ENT_COMPAT':2,'ENT_QUOTES':3,'ENT_IGNORE':4};if(quote_style===0){noquotes=true;}
if(typeof quote_style!=='number'){quote_style=[].concat(quote_style);for(i=0;i<quote_style.length;i++){if(OPTS[quote_style[i]]===0){noquotes=true;}else if(OPTS[quote_style[i]]){optTemp=optTemp|OPTS[quote_style[i]];}}
quote_style=optTemp;}
if(quote_style&OPTS.ENT_HTML_QUOTE_SINGLE){string=string.replace(/&#0*39;/g,"'");}
if(!noquotes){string=string.replace(/&quot;/g,'"');}
string=string.replace(/&amp;/g,'&');return string;}
function http_build_query(formdata,numeric_prefix,arg_separator){var value,key,tmp=[],that=this;var _http_build_query_helper=function(key,val,arg_separator){var k,tmp=[];if(val===true){val="1";}else if(val===false){val="0";}
if(val!==null&&typeof(val)==="object"){for(k in val){if(val[k]!==null){tmp.push(_http_build_query_helper(key+"["+k+"]",val[k],arg_separator));}}
return tmp.join(arg_separator);}else if(typeof(val)!=="function"){return that.urlencode(key)+"="+that.urlencode(val);}else{throw new Error('There was an error processing for http_build_query().');}};if(!arg_separator){arg_separator="&";}
for(key in formdata){value=formdata[key];if(numeric_prefix&&!isNaN(key)){key=String(numeric_prefix)+key;}
tmp.push(_http_build_query_helper(key,value,arg_separator));}
return tmp.join(arg_separator);}
function hypot(x,y){return Math.sqrt(x*x+y*y)||0;}
function implode(glue,pieces){var i='',retVal='',tGlue='';if(arguments.length===1){pieces=glue;glue='';}
if(typeof(pieces)==='object'){if(Object.prototype.toString.call(pieces)==='[object Array]'){return pieces.join(glue);}
for(i in pieces){retVal+=tGlue+pieces[i];tGlue=glue;}
return retVal;}
return pieces;}
function in_array(needle,haystack,argStrict){var key='',strict=!!argStrict;if(strict){for(key in haystack){if(haystack[key]===needle){return true;}}}else{for(key in haystack){if(haystack[key]==needle){return true;}}}
return false;}
function intval(mixed_var,base){var tmp;var type=typeof(mixed_var);if(type==='boolean'){return+mixed_var;}else if(type==='string'){tmp=parseInt(mixed_var,base||10);return(isNaN(tmp)||!isFinite(tmp))?0:tmp;}else if(type==='number'&&isFinite(mixed_var)){return mixed_var|0;}else{return 0;}}
function ip2long(IP){var i=0;IP=IP.match(/^([1-9]\d*|0[0-7]*|0x[\da-f]+)(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?$/i);if(!IP){return false;}
IP[0]=0;for(i=1;i<5;i+=1){IP[0]+=!!((IP[i]||'').length);IP[i]=parseInt(IP[i])||0;}
IP.push(256,256,256,256);IP[4+IP[0]]*=Math.pow(256,4-IP[0]);if(IP[1]>=IP[5]||IP[2]>=IP[6]||IP[3]>=IP[7]||IP[4]>=IP[8]){return false;}
return IP[1]*(IP[0]===1||16777216)+IP[2]*(IP[0]<=2||65536)+IP[3]*(IP[0]<=3||256)+IP[4]*1;}
function is_bool(mixed_var){return(typeof mixed_var==='boolean');}
function is_double(mixed_var){return this.is_float(mixed_var);}
function is_finite(val){var warningType='';if(val===Infinity||val===-Infinity){return false;}
if(typeof val=='object'){warningType=(Object.prototype.toString.call(val)==='[object Array]'?'array':'object');}else if(typeof val=='string'&&!val.match(/^[\+\-]?\d/)){warningType='string';}
if(warningType){throw new Error('Warning: is_finite() expects parameter 1 to be double, '+warningType+' given');}
return true;}
function is_float(mixed_var){return+mixed_var===mixed_var&&!!(mixed_var%1);}
function is_infinite(val){var warningType='';if(val===Infinity||val===-Infinity){return true;}
if(typeof val=='object'){warningType=(Object.prototype.toString.call(val)==='[object Array]'?'array':'object');}else if(typeof val=='string'&&!val.match(/^[\+\-]?\d/)){warningType='string';}
if(warningType){throw new Error('Warning: is_infinite() expects parameter 1 to be double, '+warningType+' given');}
return false;}
function is_int(mixed_var){return mixed_var===~~mixed_var;}
function is_integer(mixed_var){return this.is_int(mixed_var);}
function is_long(mixed_var){return this.is_float(mixed_var);}
function is_nan(val){var warningType='';if(typeof val=='number'&&isNaN(val)){return true;}
if(typeof val=='object'){warningType=(Object.prototype.toString.call(val)==='[object Array]'?'array':'object');}
else if(typeof val=='string'&&!val.match(/^[\+\-]?\d/)){warningType='string';}
if(warningType){throw new Error('Warning: is_nan() expects parameter 1 to be double, '+warningType+' given');}
return false;}
function is_null(mixed_var){return(mixed_var===null);}
function is_numeric(mixed_var){return(typeof(mixed_var)==='number'||typeof(mixed_var)==='string')&&mixed_var!==''&&!isNaN(mixed_var);}
function is_real(mixed_var){return this.is_float(mixed_var);}
function is_scalar(mixed_var){return(/boolean|number|string/).test(typeof mixed_var);}
function is_string(mixed_var){return(typeof(mixed_var)=='string');}
function join(glue,pieces){return this.implode(glue,pieces);}
function json_decode(str_json){var json=this.window.JSON;if(typeof json==='object'&&typeof json.parse==='function'){try{return json.parse(str_json);}catch(err){if(!(err instanceof SyntaxError)){throw new Error('Unexpected error type in json_decode()');}
this.php_js=this.php_js||{};this.php_js.last_error_json=4;return null;}}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;var j;var text=str_json;cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if((/^[\],:{}\s]*$/).test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return j;}
this.php_js=this.php_js||{};this.php_js.last_error_json=4;return null;}
function json_encode(mixed_val){var retVal,json=this.window.JSON;try{if(typeof json==='object'&&typeof json.stringify==='function'){retVal=json.stringify(mixed_val);if(retVal===undefined){throw new SyntaxError('json_encode');}
return retVal;}
var value=mixed_val;var quote=function(string){var escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;var meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';};var str=function(key,holder){var gap='';var indent='    ';var i=0;var k='';var v='';var length=0;var mind=gap;var partial=[];var value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
if((this.PHPJS_Resource&&value instanceof this.PHPJS_Resource)||(window.PHPJS_Resource&&value instanceof window.PHPJS_Resource)){throw new SyntaxError('json_encode');}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}
for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;case'undefined':case'function':default:throw new SyntaxError('json_encode');}};return str('',{'':value});}catch(err){if(!(err instanceof SyntaxError)){throw new Error('Unexpected error type in json_encode()');}
this.php_js=this.php_js||{};this.php_js.last_error_json=4;return null;}}
function krsort(inputArr,sort_flags){var tmp_arr={},keys=[],sorter,i,k,that=this,strictForIn=false,populateArr={};switch(sort_flags){case'SORT_STRING':sorter=function(a,b){return that.strnatcmp(b,a);};break;case'SORT_LOCALE_STRING':var loc=this.i18n_loc_get_default();sorter=this.php_js.i18nLocales[loc].sorting;break;case'SORT_NUMERIC':sorter=function(a,b){return(b-a);};break;case'SORT_REGULAR':default:sorter=function(b,a){var aFloat=parseFloat(a),bFloat=parseFloat(b),aNumeric=aFloat+''===a,bNumeric=bFloat+''===b;if(aNumeric&&bNumeric){return aFloat>bFloat?1:aFloat<bFloat?-1:0;}else if(aNumeric&&!bNumeric){return 1;}else if(!aNumeric&&bNumeric){return-1;}
return a>b?1:a<b?-1:0;};break;}
for(k in inputArr){if(inputArr.hasOwnProperty(k)){keys.push(k);}}
keys.sort(sorter);this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(i=0;i<keys.length;i++){k=keys[i];tmp_arr[k]=inputArr[k];if(strictForIn){delete inputArr[k];}}
for(i in tmp_arr){if(tmp_arr.hasOwnProperty(i)){populateArr[i]=tmp_arr[i];}}
return strictForIn||populateArr;}
function ksort(inputArr,sort_flags){var tmp_arr={},keys=[],sorter,i,k,that=this,strictForIn=false,populateArr={};switch(sort_flags){case'SORT_STRING':sorter=function(a,b){return that.strnatcmp(a,b);};break;case'SORT_LOCALE_STRING':var loc=this.i18n_loc_get_default();sorter=this.php_js.i18nLocales[loc].sorting;break;case'SORT_NUMERIC':sorter=function(a,b){return((a+0)-(b+0));};break;default:sorter=function(a,b){var aFloat=parseFloat(a),bFloat=parseFloat(b),aNumeric=aFloat+''===a,bNumeric=bFloat+''===b;if(aNumeric&&bNumeric){return aFloat>bFloat?1:aFloat<bFloat?-1:0;}else if(aNumeric&&!bNumeric){return 1;}else if(!aNumeric&&bNumeric){return-1;}
return a>b?1:a<b?-1:0;};break;}
for(k in inputArr){if(inputArr.hasOwnProperty(k)){keys.push(k);}}
keys.sort(sorter);this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(i=0;i<keys.length;i++){k=keys[i];tmp_arr[k]=inputArr[k];if(strictForIn){delete inputArr[k];}}
for(i in tmp_arr){if(tmp_arr.hasOwnProperty(i)){populateArr[i]=tmp_arr[i];}}
return strictForIn||populateArr;}
function lcfirst(str){str+='';var f=str.charAt(0).toLowerCase();return f+str.substr(1);}
function lcg_value(){return Math.random();}
function levenshtein(s1,s2){if(s1==s2){return 0;}
var s1_len=s1.length;var s2_len=s2.length;if(s1_len===0){return s2_len;}
if(s2_len===0){return s1_len;}
var split=false;try{split=!('0')[0];}catch(e){split=true;}
if(split){s1=s1.split('');s2=s2.split('');}
var v0=new Array(s1_len+1);var v1=new Array(s1_len+1);var s1_idx=0,s2_idx=0,cost=0;for(s1_idx=0;s1_idx<s1_len+1;s1_idx++){v0[s1_idx]=s1_idx;}
var char_s1='',char_s2='';for(s2_idx=1;s2_idx<=s2_len;s2_idx++){v1[0]=s2_idx;char_s2=s2[s2_idx-1];for(s1_idx=0;s1_idx<s1_len;s1_idx++){char_s1=s1[s1_idx];cost=(char_s1==char_s2)?0:1;var m_min=v0[s1_idx+1]+1;var b=v1[s1_idx]+1;var c=v0[s1_idx]+cost;if(b<m_min){m_min=b;}
if(c<m_min){m_min=c;}
v1[s1_idx+1]=m_min;}
var v_tmp=v0;v0=v1;v1=v_tmp;}
return v0[s1_len];}
function log(arg,base){return(typeof base==='undefined')?Math.log(arg):Math.log(arg)/Math.log(base);}
function log10(arg){return Math.log(arg)/2.302585092994046;}
function log1p(x){var ret=0,n=50;if(x<=-1){return'-INF';}
if(x<0||x>1){return Math.log(1+x);}
for(var i=1;i<n;i++){if((i%2)===0){ret-=Math.pow(x,i)/i;}else{ret+=Math.pow(x,i)/i;}}
return ret;}
function long2ip(proper_address){var output=false;if(!isNaN(proper_address)&&(proper_address>=0||proper_address<=4294967295)){output=Math.floor(proper_address/Math.pow(256,3))+'.'+Math.floor((proper_address%Math.pow(256,3))/Math.pow(256,2))+'.'+Math.floor(((proper_address%Math.pow(256,3))%Math.pow(256,2))/Math.pow(256,1))+'.'+Math.floor((((proper_address%Math.pow(256,3))%Math.pow(256,2))%Math.pow(256,1))/Math.pow(256,0));}
return output;}
function ltrim(str,charlist){charlist=!charlist?' \\s\u00A0':(charlist+'').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g,'$1');var re=new RegExp('^['+charlist+']+','g');return(str+'').replace(re,'');}
function max(){var ar,retVal,i=0,n=0,argv=arguments,argc=argv.length,_obj2Array=function(obj){if(Object.prototype.toString.call(obj)==='[object Array]'){return obj;}
else{var ar=[];for(var i in obj){if(obj.hasOwnProperty(i)){ar.push(obj[i]);}}
return ar;}},_compare=function(current,next){var i=0,n=0,tmp=0,nl=0,cl=0;if(current===next){return 0;}
else if(typeof current==='object'){if(typeof next==='object'){current=_obj2Array(current);next=_obj2Array(next);cl=current.length;nl=next.length;if(nl>cl){return 1;}
else if(nl<cl){return-1;}
for(i=0,n=cl;i<n;++i){tmp=_compare(current[i],next[i]);if(tmp==1){return 1;}
else if(tmp==-1){return-1;}}
return 0;}
return-1;}
else if(typeof next=='object'){return 1;}
else if(isNaN(next)&&!isNaN(current)){if(current==0){return 0;}
return(current<0?1:-1);}
else if(isNaN(current)&&!isNaN(next)){if(next==0){return 0;}
return(next>0?1:-1);}
if(next==current){return 0;}
return(next>current?1:-1);};if(argc===0){throw new Error('At least one value should be passed to max()');}
else if(argc===1){if(typeof argv[0]==='object'){ar=_obj2Array(argv[0]);}
else{throw new Error('Wrong parameter count for max()');}
if(ar.length===0){throw new Error('Array must contain at least one element for max()');}}
else{ar=argv;}
retVal=ar[0];for(i=1,n=ar.length;i<n;++i){if(_compare(retVal,ar[i])==1){retVal=ar[i];}}
return retVal;}
function md5(str){var xl;var rotateLeft=function(lValue,iShiftBits){return(lValue<<iShiftBits)|(lValue>>>(32-iShiftBits));};var addUnsigned=function(lX,lY){var lX4,lY4,lX8,lY8,lResult;lX8=(lX&0x80000000);lY8=(lY&0x80000000);lX4=(lX&0x40000000);lY4=(lY&0x40000000);lResult=(lX&0x3FFFFFFF)+(lY&0x3FFFFFFF);if(lX4&lY4){return(lResult^0x80000000^lX8^lY8);}
if(lX4|lY4){if(lResult&0x40000000){return(lResult^0xC0000000^lX8^lY8);}else{return(lResult^0x40000000^lX8^lY8);}}else{return(lResult^lX8^lY8);}};var _F=function(x,y,z){return(x&y)|((~x)&z);};var _G=function(x,y,z){return(x&z)|(y&(~z));};var _H=function(x,y,z){return(x^y^z);};var _I=function(x,y,z){return(y^(x|(~z)));};var _FF=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(_F(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b);};var _GG=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(_G(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b);};var _HH=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(_H(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b);};var _II=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(_I(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b);};var convertToWordArray=function(str){var lWordCount;var lMessageLength=str.length;var lNumberOfWords_temp1=lMessageLength+8;var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1%64))/64;var lNumberOfWords=(lNumberOfWords_temp2+1)*16;var lWordArray=new Array(lNumberOfWords-1);var lBytePosition=0;var lByteCount=0;while(lByteCount<lMessageLength){lWordCount=(lByteCount-(lByteCount%4))/4;lBytePosition=(lByteCount%4)*8;lWordArray[lWordCount]=(lWordArray[lWordCount]|(str.charCodeAt(lByteCount)<<lBytePosition));lByteCount++;}
lWordCount=(lByteCount-(lByteCount%4))/4;lBytePosition=(lByteCount%4)*8;lWordArray[lWordCount]=lWordArray[lWordCount]|(0x80<<lBytePosition);lWordArray[lNumberOfWords-2]=lMessageLength<<3;lWordArray[lNumberOfWords-1]=lMessageLength>>>29;return lWordArray;};var wordToHex=function(lValue){var wordToHexValue="",wordToHexValue_temp="",lByte,lCount;for(lCount=0;lCount<=3;lCount++){lByte=(lValue>>>(lCount*8))&255;wordToHexValue_temp="0"+lByte.toString(16);wordToHexValue=wordToHexValue+wordToHexValue_temp.substr(wordToHexValue_temp.length-2,2);}
return wordToHexValue;};var x=[],k,AA,BB,CC,DD,a,b,c,d,S11=7,S12=12,S13=17,S14=22,S21=5,S22=9,S23=14,S24=20,S31=4,S32=11,S33=16,S34=23,S41=6,S42=10,S43=15,S44=21;str=this.utf8_encode(str);x=convertToWordArray(str);a=0x67452301;b=0xEFCDAB89;c=0x98BADCFE;d=0x10325476;xl=x.length;for(k=0;k<xl;k+=16){AA=a;BB=b;CC=c;DD=d;a=_FF(a,b,c,d,x[k+0],S11,0xD76AA478);d=_FF(d,a,b,c,x[k+1],S12,0xE8C7B756);c=_FF(c,d,a,b,x[k+2],S13,0x242070DB);b=_FF(b,c,d,a,x[k+3],S14,0xC1BDCEEE);a=_FF(a,b,c,d,x[k+4],S11,0xF57C0FAF);d=_FF(d,a,b,c,x[k+5],S12,0x4787C62A);c=_FF(c,d,a,b,x[k+6],S13,0xA8304613);b=_FF(b,c,d,a,x[k+7],S14,0xFD469501);a=_FF(a,b,c,d,x[k+8],S11,0x698098D8);d=_FF(d,a,b,c,x[k+9],S12,0x8B44F7AF);c=_FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);b=_FF(b,c,d,a,x[k+11],S14,0x895CD7BE);a=_FF(a,b,c,d,x[k+12],S11,0x6B901122);d=_FF(d,a,b,c,x[k+13],S12,0xFD987193);c=_FF(c,d,a,b,x[k+14],S13,0xA679438E);b=_FF(b,c,d,a,x[k+15],S14,0x49B40821);a=_GG(a,b,c,d,x[k+1],S21,0xF61E2562);d=_GG(d,a,b,c,x[k+6],S22,0xC040B340);c=_GG(c,d,a,b,x[k+11],S23,0x265E5A51);b=_GG(b,c,d,a,x[k+0],S24,0xE9B6C7AA);a=_GG(a,b,c,d,x[k+5],S21,0xD62F105D);d=_GG(d,a,b,c,x[k+10],S22,0x2441453);c=_GG(c,d,a,b,x[k+15],S23,0xD8A1E681);b=_GG(b,c,d,a,x[k+4],S24,0xE7D3FBC8);a=_GG(a,b,c,d,x[k+9],S21,0x21E1CDE6);d=_GG(d,a,b,c,x[k+14],S22,0xC33707D6);c=_GG(c,d,a,b,x[k+3],S23,0xF4D50D87);b=_GG(b,c,d,a,x[k+8],S24,0x455A14ED);a=_GG(a,b,c,d,x[k+13],S21,0xA9E3E905);d=_GG(d,a,b,c,x[k+2],S22,0xFCEFA3F8);c=_GG(c,d,a,b,x[k+7],S23,0x676F02D9);b=_GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);a=_HH(a,b,c,d,x[k+5],S31,0xFFFA3942);d=_HH(d,a,b,c,x[k+8],S32,0x8771F681);c=_HH(c,d,a,b,x[k+11],S33,0x6D9D6122);b=_HH(b,c,d,a,x[k+14],S34,0xFDE5380C);a=_HH(a,b,c,d,x[k+1],S31,0xA4BEEA44);d=_HH(d,a,b,c,x[k+4],S32,0x4BDECFA9);c=_HH(c,d,a,b,x[k+7],S33,0xF6BB4B60);b=_HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);a=_HH(a,b,c,d,x[k+13],S31,0x289B7EC6);d=_HH(d,a,b,c,x[k+0],S32,0xEAA127FA);c=_HH(c,d,a,b,x[k+3],S33,0xD4EF3085);b=_HH(b,c,d,a,x[k+6],S34,0x4881D05);a=_HH(a,b,c,d,x[k+9],S31,0xD9D4D039);d=_HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);c=_HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);b=_HH(b,c,d,a,x[k+2],S34,0xC4AC5665);a=_II(a,b,c,d,x[k+0],S41,0xF4292244);d=_II(d,a,b,c,x[k+7],S42,0x432AFF97);c=_II(c,d,a,b,x[k+14],S43,0xAB9423A7);b=_II(b,c,d,a,x[k+5],S44,0xFC93A039);a=_II(a,b,c,d,x[k+12],S41,0x655B59C3);d=_II(d,a,b,c,x[k+3],S42,0x8F0CCC92);c=_II(c,d,a,b,x[k+10],S43,0xFFEFF47D);b=_II(b,c,d,a,x[k+1],S44,0x85845DD1);a=_II(a,b,c,d,x[k+8],S41,0x6FA87E4F);d=_II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);c=_II(c,d,a,b,x[k+6],S43,0xA3014314);b=_II(b,c,d,a,x[k+13],S44,0x4E0811A1);a=_II(a,b,c,d,x[k+4],S41,0xF7537E82);d=_II(d,a,b,c,x[k+11],S42,0xBD3AF235);c=_II(c,d,a,b,x[k+2],S43,0x2AD7D2BB);b=_II(b,c,d,a,x[k+9],S44,0xEB86D391);a=addUnsigned(a,AA);b=addUnsigned(b,BB);c=addUnsigned(c,CC);d=addUnsigned(d,DD);}
var temp=wordToHex(a)+wordToHex(b)+wordToHex(c)+wordToHex(d);return temp.toLowerCase();}
function method_exists(obj,method){if(typeof obj==='string'){return this.window[obj]&&typeof this.window[obj][method]==='function';}
return typeof obj[method]==='function';}
function microtime(get_as_float){var now=new Date().getTime()/1000;var s=parseInt(now,10);return(get_as_float)?now:(Math.round((now-s)*1000)/1000)+' '+s;}
function min(){var ar,retVal,i=0,n=0,argv=arguments,argc=argv.length,_obj2Array=function(obj){if(Object.prototype.toString.call(obj)==='[object Array]'){return obj;}
var ar=[];for(var i in obj){if(obj.hasOwnProperty(i)){ar.push(obj[i]);}}
return ar;},_compare=function(current,next){var i=0,n=0,tmp=0,nl=0,cl=0;if(current===next){return 0;}
else if(typeof current==='object'){if(typeof next==='object'){current=_obj2Array(current);next=_obj2Array(next);cl=current.length;nl=next.length;if(nl>cl){return 1;}
else if(nl<cl){return-1;}
for(i=0,n=cl;i<n;++i){tmp=_compare(current[i],next[i]);if(tmp==1){return 1;}
else if(tmp==-1){return-1;}}
return 0;}
return-1;}
else if(typeof next=='object'){return 1;}
else if(isNaN(next)&&!isNaN(current)){if(current==0){return 0;}
return(current<0?1:-1);}
else if(isNaN(current)&&!isNaN(next)){if(next==0){return 0;}
return(next>0?1:-1);}
if(next==current){return 0;}
return(next>current?1:-1);};if(argc===0){throw new Error('At least one value should be passed to min()');}
else if(argc===1){if(typeof argv[0]==='object'){ar=_obj2Array(argv[0]);}
else{throw new Error('Wrong parameter count for min()');}
if(ar.length===0){throw new Error('Array must contain at least one element for min()');}}
else{ar=argv;}
retVal=ar[0];for(i=1,n=ar.length;i<n;++i){if(_compare(retVal,ar[i])==-1){retVal=ar[i];}}
return retVal;}
function mktime(){var d=new Date(),r=arguments,i=0,e=['Hours','Minutes','Seconds','Month','Date','FullYear'];for(i=0;i<e.length;i++){if(typeof r[i]==='undefined'){r[i]=d['get'+e[i]]();r[i]+=(i===3);}else{r[i]=parseInt(r[i],10);if(isNaN(r[i])){return false;}}}
r[5]+=(r[5]>=0?(r[5]<=69?2e3:(r[5]<=100?1900:0)):0);d.setFullYear(r[5],r[3]-1,r[4]);d.setHours(r[0],r[1],r[2]);return(d.getTime()/1e3>>0)-(d.getTime()<0);}
function mt_getrandmax(){return 2147483647;}
function mt_rand(min,max){var argc=arguments.length;if(argc===0){min=0;max=2147483647;}else if(argc===1){throw new Error('Warning: mt_rand() expects exactly 2 parameters, 1 given');}
return Math.floor(Math.random()*(max-min+1))+min;}
function natcasesort(inputArr){var valArr=[],k,i,ret,that=this,strictForIn=false,populateArr={};this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(k in inputArr){if(inputArr.hasOwnProperty(k)){valArr.push([k,inputArr[k]]);if(strictForIn){delete inputArr[k];}}}
valArr.sort(function(a,b){return that.strnatcasecmp(a[1],b[1]);});for(i=0;i<valArr.length;i++){populateArr[valArr[i][0]]=valArr[i][1];}
return strictForIn||populateArr;}
function natsort(inputArr){var valArr=[],k,i,ret,that=this,strictForIn=false,populateArr={};this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(k in inputArr){if(inputArr.hasOwnProperty(k)){valArr.push([k,inputArr[k]]);if(strictForIn){delete inputArr[k];}}}
valArr.sort(function(a,b){return that.strnatcmp(a[1],b[1]);});for(i=0;i<valArr.length;i++){populateArr[valArr[i][0]]=valArr[i][1];}
return strictForIn||populateArr;}
function nl2br(str,is_xhtml){var breakTag=(is_xhtml||typeof is_xhtml==='undefined')?'<br />':'<br>';return(str+'').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,'$1'+breakTag+'$2');}
function number_format(number,decimals,dec_point,thousands_sep){number=(number+'').replace(/[^0-9+\-Ee.]/g,'');var n=!isFinite(+number)?0:+number,prec=!isFinite(+decimals)?0:Math.abs(decimals),sep=(typeof thousands_sep==='undefined')?',':thousands_sep,dec=(typeof dec_point==='undefined')?'.':dec_point,s='',toFixedFix=function(n,prec){var k=Math.pow(10,prec);return''+Math.round(n*k)/k;};s=(prec?toFixedFix(n,prec):''+Math.round(n)).split('.');if(s[0].length>3){s[0]=s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,sep);}
if((s[1]||'').length<prec){s[1]=s[1]||'';s[1]+=new Array(prec-s[1].length+1).join('0');}
return s.join(dec);}
function octdec(oct_string){oct_string=(oct_string+'').replace(/[^0-7]/gi,'');return parseInt(oct_string,8);}
function ord(string){var str=string+'',code=str.charCodeAt(0);if(0xD800<=code&&code<=0xDBFF){var hi=code;if(str.length===1){return code;}
var low=str.charCodeAt(1);return((hi-0xD800)*0x400)+(low-0xDC00)+0x10000;}
if(0xDC00<=code&&code<=0xDFFF){return code;}
return code;}
function parse_str(str,array){var glue1='=',glue2='&',array2=String(str).replace(/^&?([\s\S]*?)&?$/,'$1').split(glue2),i,j,chr,tmp,key,value,bracket,keys,evalStr,that=this,fixStr=function(str){return that.urldecode(str).replace(/([\\"'])/g,'\\$1').replace(/\n/g,'\\n').replace(/\r/g,'\\r');};if(!array){array=this.window;}
for(i=0;i<array2.length;i++){tmp=array2[i].split(glue1);if(tmp.length<2){tmp=[tmp,''];}
key=fixStr(tmp[0]);value=fixStr(tmp[1]);while(key.charAt(0)===' '){key=key.substr(1);}
if(key.indexOf('\0')!==-1){key=key.substr(0,key.indexOf('\0'));}
if(key&&key.charAt(0)!=='['){keys=[];bracket=0;for(j=0;j<key.length;j++){if(key.charAt(j)==='['&&!bracket){bracket=j+1;}else if(key.charAt(j)===']'){if(bracket){if(!keys.length){keys.push(key.substr(0,bracket-1));}
keys.push(key.substr(bracket,j-bracket));bracket=0;if(key.charAt(j+1)!=='['){break;}}}}
if(!keys.length){keys=[key];}
for(j=0;j<keys[0].length;j++){chr=keys[0].charAt(j);if(chr===' '||chr==='.'||chr==='['){keys[0]=keys[0].substr(0,j)+'_'+keys[0].substr(j+1);}
if(chr==='['){break;}}
evalStr='array';for(j=0;j<keys.length;j++){key=keys[j];if((key!==''&&key!==' ')||j===0){key="'"+key+"'";}else{key=eval(evalStr+'.push([]);')-1;}
evalStr+='['+key+']';if(j!==keys.length-1&&eval('typeof '+evalStr)==='undefined'){eval(evalStr+' = [];');}}
evalStr+=" = '"+value+"';\n";eval(evalStr);}}}
function parse_url(str,component){var key=['source','scheme','authority','userInfo','user','pass','host','port','relative','path','directory','file','query','fragment'],ini=(this.php_js&&this.php_js.ini)||{},mode=(ini['phpjs.parse_url.mode']&&ini['phpjs.parse_url.mode'].local_value)||'php',parser={php:/^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/\/?)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/};var m=parser[mode].exec(str),uri={},i=14;while(i--){if(m[i]){uri[key[i]]=m[i];}}
if(component){return uri[component.replace('PHP_URL_','').toLowerCase()];}
if(mode!=='php'){var name=(ini['phpjs.parse_url.queryKey']&&ini['phpjs.parse_url.queryKey'].local_value)||'queryKey';parser=/(?:^|&)([^&=]*)=?([^&]*)/g;uri[name]={};uri[key[12]].replace(parser,function($0,$1,$2){if($1){uri[name][$1]=$2;}});}
delete uri.source;return uri;}
function pi(){return 3.141592653589793;}
function pow(base,exp){return Math.pow(base,exp);}
function preg_grep(pattern,input,flags){var p='',retObj={};var invert=(flags===1||flags==='PREG_GREP_INVERT');if(typeof pattern==='string'){pattern=eval(pattern);}
if(invert){for(p in input){if(input[p].search(pattern)===-1){retObj[p]=input[p];}}}else{for(p in input){if(input[p].search(pattern)!==-1){retObj[p]=input[p];}}}
return retObj;}
function preg_quote(str,delimiter){return(str+'').replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\'+(delimiter||'')+'-]','g'),'\\$&');}
function print_r(array,return_val){var output='',pad_char=' ',pad_val=4,d=this.window.document,getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];},repeat_char=function(len,pad_char){var str='';for(var i=0;i<len;i++){str+=pad_char;}
return str;},formatArray=function(obj,cur_depth,pad_val,pad_char){if(cur_depth>0){cur_depth++;}
var base_pad=repeat_char(pad_val*cur_depth,pad_char);var thick_pad=repeat_char(pad_val*(cur_depth+1),pad_char);var str='';if(typeof obj==='object'&&obj!==null&&obj.constructor&&getFuncName(obj.constructor)!=='PHPJS_Resource'){str+='Array\n'+base_pad+'(\n';for(var key in obj){if(Object.prototype.toString.call(obj[key])==='[object Array]'){str+=thick_pad+'['+key+'] => '+formatArray(obj[key],cur_depth+1,pad_val,pad_char);}
else{str+=thick_pad+'['+key+'] => '+obj[key]+'\n';}}
str+=base_pad+')\n';}
else if(obj===null||obj===undefined){str='';}
else{str=obj.toString();}
return str;};output=formatArray(array,0,pad_val,pad_char);if(return_val!==true){if(d.body){this.echo(output);}
else{try{d=XULDocument;this.echo('<pre xmlns="http://www.w3.org/1999/xhtml" style="white-space:pre;">'+output+'</pre>');}catch(e){this.echo(output);}}
return true;}
return output;}
function printf(){var body,elmt,d=this.window.document;var ret='';var HTMLNS='http://www.w3.org/1999/xhtml';body=d.getElementsByTagNameNS?(d.getElementsByTagNameNS(HTMLNS,'body')[0]?d.getElementsByTagNameNS(HTMLNS,'body')[0]:d.documentElement.lastChild):d.getElementsByTagName('body')[0];if(!body){return false;}
ret=this.sprintf.apply(this,arguments);elmt=d.createTextNode(ret);body.appendChild(elmt);return ret.length;}
function property_exists(cls,prop){cls=(typeof cls==='string')?this.window[cls]:cls;if(typeof cls==='function'&&cls.toSource&&cls.toSource().match(new RegExp('this\\.'+prop+'\\s'))){return true;}
return(cls[prop]!==undefined&&typeof cls[prop]!=='function')||(cls.prototype!==undefined&&cls.prototype[prop]!==undefined&&typeof cls.prototype[prop]!=='function')||(cls.constructor&&cls.constructor[prop]!==undefined&&typeof cls.constructor[prop]!=='function');}
function quotemeta(str){return(str+'').replace(/([\.\\\+\*\?\[\^\]\$\(\)])/g,'\\$1');}
function rad2deg(angle){return angle*57.29577951308232;}
function rand(min,max){var argc=arguments.length;if(argc===0){min=0;max=2147483647;}else if(argc===1){throw new Error('Warning: rand() expects exactly 2 parameters, 1 given');}
return Math.floor(Math.random()*(max-min+1))+min;}
function range(low,high,step){var matrix=[];var inival,endval,plus;var walker=step||1;var chars=false;if(!isNaN(low)&&!isNaN(high)){inival=low;endval=high;}else if(isNaN(low)&&isNaN(high)){chars=true;inival=low.charCodeAt(0);endval=high.charCodeAt(0);}else{inival=(isNaN(low)?0:low);endval=(isNaN(high)?0:high);}
plus=((inival>endval)?false:true);if(plus){while(inival<=endval){matrix.push(((chars)?String.fromCharCode(inival):inival));inival+=walker;}}else{while(inival>=endval){matrix.push(((chars)?String.fromCharCode(inival):inival));inival-=walker;}}
return matrix;}
function rawurldecode(str){return decodeURIComponent(str+'');}
function rawurlencode(str){str=(str+'').toString();return encodeURIComponent(str).replace(/!/g,'%21').replace(/'/g,'%27').replace(/\(/g,'%28').replace(/\)/g,'%29').replace(/\*/g,'%2A');}
function reset(arr){this.php_js=this.php_js||{};this.php_js.pointers=this.php_js.pointers||[];var indexOf=function(value){for(var i=0,length=this.length;i<length;i++){if(this[i]===value){return i;}}
return-1;};var pointers=this.php_js.pointers;if(!pointers.indexOf){pointers.indexOf=indexOf;}
if(pointers.indexOf(arr)===-1){pointers.push(arr,0);}
var arrpos=pointers.indexOf(arr);if(Object.prototype.toString.call(arr)!=='[object Array]'){for(var k in arr){if(pointers.indexOf(arr)===-1){pointers.push(arr,0);}else{pointers[arrpos+1]=0;}
return arr[k];}
return false;}
if(arr.length===0){return false;}
pointers[arrpos+1]=0;return arr[pointers[arrpos+1]];}
function round(value,precision,mode){var m,f,isHalf,sgn;precision|=0;m=Math.pow(10,precision);value*=m;sgn=(value>0)|-(value<0);isHalf=value%1===0.5*sgn;f=Math.floor(value);if(isHalf){switch(mode){case'PHP_ROUND_HALF_DOWN':value=f+(sgn<0);break;case'PHP_ROUND_HALF_EVEN':value=f+(f%2*sgn);break;case'PHP_ROUND_HALF_ODD':value=f+!(f%2);break;default:value=f+(sgn>0);}}
return(isHalf?value:Math.round(value))/m;}
function rsort(inputArr,sort_flags){var valArr=[],k='',i=0,sorter=false,that=this,strictForIn=false,populateArr=[];switch(sort_flags){case'SORT_STRING':sorter=function(a,b){return that.strnatcmp(b,a);};break;case'SORT_LOCALE_STRING':var loc=this.i18n_loc_get_default();sorter=this.php_js.i18nLocales[loc].sorting;break;case'SORT_NUMERIC':sorter=function(a,b){return(b-a);};break;case'SORT_REGULAR':default:sorter=function(b,a){var aFloat=parseFloat(a),bFloat=parseFloat(b),aNumeric=aFloat+''===a,bNumeric=bFloat+''===b;if(aNumeric&&bNumeric){return aFloat>bFloat?1:aFloat<bFloat?-1:0;}else if(aNumeric&&!bNumeric){return 1;}else if(!aNumeric&&bNumeric){return-1;}
return a>b?1:a<b?-1:0;};break;}
this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(k in inputArr){if(inputArr.hasOwnProperty(k)){valArr.push(inputArr[k]);if(strictForIn){delete inputArr[k];}}}
valArr.sort(sorter);for(i=0;i<valArr.length;i++){populateArr[i]=valArr[i];}
return strictForIn||populateArr;}
function rtrim(str,charlist){charlist=!charlist?' \\s\u00A0':(charlist+'').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g,'\\$1');var re=new RegExp('['+charlist+']+$','g');return(str+'').replace(re,'');}
function serialize(mixed_value){var _utf8Size=function(str){var size=0,i=0,l=str.length,code='';for(i=0;i<l;i++){code=str.charCodeAt(i);if(code<0x0080){size+=1;}else if(code<0x0800){size+=2;}else{size+=3;}}
return size;};var _getType=function(inp){var type=typeof inp,match;var key;if(type==='object'&&!inp){return'null';}
if(type==="object"){if(!inp.constructor){return'object';}
var cons=inp.constructor.toString();match=cons.match(/(\w+)\(/);if(match){cons=match[1].toLowerCase();}
var types=["boolean","number","string","array"];for(key in types){if(cons==types[key]){type=types[key];break;}}}
return type;};var type=_getType(mixed_value);var val,ktype='';switch(type){case"function":val="";break;case"boolean":val="b:"+(mixed_value?"1":"0");break;case"number":val=(Math.round(mixed_value)==mixed_value?"i":"d")+":"+mixed_value;break;case"string":val="s:"+_utf8Size(mixed_value)+":\""+mixed_value+"\"";break;case"array":case"object":val="a";var count=0;var vals="";var okey;var key;for(key in mixed_value){if(mixed_value.hasOwnProperty(key)){ktype=_getType(mixed_value[key]);if(ktype==="function"){continue;}
okey=(key.match(/^[0-9]+$/)?parseInt(key,10):key);vals+=this.serialize(okey)+this.serialize(mixed_value[key]);count++;}}
val+=":"+count+":{"+vals+"}";break;case"undefined":default:val="N";break;}
if(type!=="object"&&type!=="array"){val+=";";}
return val;}
function setcookie(name,value,expires,path,domain,secure){return this.setrawcookie(name,encodeURIComponent(value),expires,path,domain,secure);}
function setrawcookie(name,value,expires,path,domain,secure){if(typeof expires==='string'&&(/^\d+$/).test(expires)){expires=parseInt(expires,10);}
if(expires instanceof Date){expires=expires.toGMTString();}else if(typeof(expires)==='number'){expires=(new Date(expires*1e3)).toGMTString();}
var r=[name+'='+value],s={},i='';s={expires:expires,path:path,domain:domain};for(i in s){if(s.hasOwnProperty(i)){s[i]&&r.push(i+'='+s[i]);}}
return secure&&r.push('secure'),this.window.document.cookie=r.join(";"),true;}
function settype(vr,type){var is_array=function(arr){return typeof arr==='object'&&typeof arr.length==='number'&&!(arr.propertyIsEnumerable('length'))&&typeof arr.splice==='function';};var v,mtch,i,obj;v=this[vr]?this[vr]:vr;try{switch(type){case'boolean':if(is_array(v)&&v.length===0){this[vr]=false;}else if(v==='0'){this[vr]=false;}else if(typeof v==='object'&&!is_array(v)){var lgth=false;for(i in v){lgth=true;}
this[vr]=lgth;}else{this[vr]=!!v;}
break;case'integer':if(typeof v==='number'){this[vr]=parseInt(v,10);}else if(typeof v==='string'){mtch=v.match(/^([+\-]?)(\d+)/);if(!mtch){this[vr]=0;}else{this[vr]=parseInt(v,10);}}else if(v===true){this[vr]=1;}else if(v===false||v===null){this[vr]=0;}else if(is_array(v)&&v.length===0){this[vr]=0;}else if(typeof v==='object'){this[vr]=1;}
break;case'float':if(typeof v==='string'){mtch=v.match(/^([+\-]?)(\d+(\.\d+)?|\.\d+)([eE][+\-]?\d+)?/);if(!mtch){this[vr]=0;}else{this[vr]=parseFloat(v,10);}}else if(v===true){this[vr]=1;}else if(v===false||v===null){this[vr]=0;}else if(is_array(v)&&v.length===0){this[vr]=0;}else if(typeof v==='object'){this[vr]=1;}
break;case'string':if(v===null||v===false){this[vr]='';}else if(is_array(v)){this[vr]='Array';}else if(typeof v==='object'){this[vr]='Object';}else if(v===true){this[vr]='1';}else{this[vr]+='';}
break;case'array':if(v===null){this[vr]=[];}else if(typeof v!=='object'){this[vr]=[v];}
break;case'object':if(v===null){this[vr]={};}else if(is_array(v)){for(i=0,obj={};i<v.length;i++){obj[i]=v;}
this[vr]=obj;}else if(typeof v!=='object'){this[vr]={scalar:v};}
break;case'null':delete this[vr];break;}
return true;}catch(e){return false;}}
function sha1(str){var rotate_left=function(n,s){var t4=(n<<s)|(n>>>(32-s));return t4;};var cvt_hex=function(val){var str="";var i;var v;for(i=7;i>=0;i--){v=(val>>>(i*4))&0x0f;str+=v.toString(16);}
return str;};var blockstart;var i,j;var W=new Array(80);var H0=0x67452301;var H1=0xEFCDAB89;var H2=0x98BADCFE;var H3=0x10325476;var H4=0xC3D2E1F0;var A,B,C,D,E;var temp;str=this.utf8_encode(str);var str_len=str.length;var word_array=[];for(i=0;i<str_len-3;i+=4){j=str.charCodeAt(i)<<24|str.charCodeAt(i+1)<<16|str.charCodeAt(i+2)<<8|str.charCodeAt(i+3);word_array.push(j);}
switch(str_len%4){case 0:i=0x080000000;break;case 1:i=str.charCodeAt(str_len-1)<<24|0x0800000;break;case 2:i=str.charCodeAt(str_len-2)<<24|str.charCodeAt(str_len-1)<<16|0x08000;break;case 3:i=str.charCodeAt(str_len-3)<<24|str.charCodeAt(str_len-2)<<16|str.charCodeAt(str_len-1)<<8|0x80;break;}
word_array.push(i);while((word_array.length%16)!=14){word_array.push(0);}
word_array.push(str_len>>>29);word_array.push((str_len<<3)&0x0ffffffff);for(blockstart=0;blockstart<word_array.length;blockstart+=16){for(i=0;i<16;i++){W[i]=word_array[blockstart+i];}
for(i=16;i<=79;i++){W[i]=rotate_left(W[i-3]^W[i-8]^W[i-14]^W[i-16],1);}
A=H0;B=H1;C=H2;D=H3;E=H4;for(i=0;i<=19;i++){temp=(rotate_left(A,5)+((B&C)|(~B&D))+E+W[i]+0x5A827999)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
for(i=20;i<=39;i++){temp=(rotate_left(A,5)+(B^C^D)+E+W[i]+0x6ED9EBA1)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
for(i=40;i<=59;i++){temp=(rotate_left(A,5)+((B&C)|(B&D)|(C&D))+E+W[i]+0x8F1BBCDC)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
for(i=60;i<=79;i++){temp=(rotate_left(A,5)+(B^C^D)+E+W[i]+0xCA62C1D6)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
H0=(H0+A)&0x0ffffffff;H1=(H1+B)&0x0ffffffff;H2=(H2+C)&0x0ffffffff;H3=(H3+D)&0x0ffffffff;H4=(H4+E)&0x0ffffffff;}
temp=cvt_hex(H0)+cvt_hex(H1)+cvt_hex(H2)+cvt_hex(H3)+cvt_hex(H4);return temp.toLowerCase();}
function shuffle(inputArr){var valArr=[],k='',i=0,strictForIn=false,populateArr=[];for(k in inputArr){if(inputArr.hasOwnProperty(k)){valArr.push(inputArr[k]);if(strictForIn){delete inputArr[k];}}}
valArr.sort(function(){return 0.5-Math.random();});this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(i=0;i<valArr.length;i++){populateArr[i]=valArr[i];}
return strictForIn||populateArr;}
function sin(arg){return Math.sin(arg);}
function sinh(arg){return(Math.exp(arg)-Math.exp(-arg))/2;}
function sizeof(mixed_var,mode){return this.count(mixed_var,mode);}
function sort(inputArr,sort_flags){var valArr=[],keyArr=[],k='',i=0,sorter=false,that=this,strictForIn=false,populateArr=[];switch(sort_flags){case'SORT_STRING':sorter=function(a,b){return that.strnatcmp(a,b);};break;case'SORT_LOCALE_STRING':var loc=this.i18n_loc_get_default();sorter=this.php_js.i18nLocales[loc].sorting;break;case'SORT_NUMERIC':sorter=function(a,b){return(a-b);};break;case'SORT_REGULAR':default:sorter=function(a,b){var aFloat=parseFloat(a),bFloat=parseFloat(b),aNumeric=aFloat+''===a,bNumeric=bFloat+''===b;if(aNumeric&&bNumeric){return aFloat>bFloat?1:aFloat<bFloat?-1:0;}else if(aNumeric&&!bNumeric){return 1;}else if(!aNumeric&&bNumeric){return-1;}
return a>b?1:a<b?-1:0;};break;}
this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(k in inputArr){if(inputArr.hasOwnProperty(k)){valArr.push(inputArr[k]);if(strictForIn){delete inputArr[k];}}}
valArr.sort(sorter);for(i=0;i<valArr.length;i++){populateArr[i]=valArr[i];}
return strictForIn||populateArr;}
function soundex(str){str=(str+'').toUpperCase();if(!str){return'';}
var sdx=[0,0,0,0],m={B:1,F:1,P:1,V:1,C:2,G:2,J:2,K:2,Q:2,S:2,X:2,Z:2,D:3,T:3,L:4,M:5,N:5,R:6},i=0,j,s=0,c,p;while((c=str.charAt(i++))&&s<4){if(j=m[c]){if(j!==p){sdx[s++]=p=j;}}else{s+=i===1;p=0;}}
sdx[0]=str.charAt(0);return sdx.join('');}
function split(delimiter,string){return this.explode(delimiter,string);}
function sprintf(){var regex=/%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuidfegEG])/g;var a=arguments,i=0,format=a[i++];var pad=function(str,len,chr,leftJustify){if(!chr){chr=' ';}
var padding=(str.length>=len)?'':Array(1+len-str.length>>>0).join(chr);return leftJustify?str+padding:padding+str;};var justify=function(value,prefix,leftJustify,minWidth,zeroPad,customPadChar){var diff=minWidth-value.length;if(diff>0){if(leftJustify||!zeroPad){value=pad(value,minWidth,customPadChar,leftJustify);}else{value=value.slice(0,prefix.length)+pad('',diff,'0',true)+value.slice(prefix.length);}}
return value;};var formatBaseX=function(value,base,prefix,leftJustify,minWidth,precision,zeroPad){var number=value>>>0;prefix=prefix&&number&&{'2':'0b','8':'0','16':'0x'}[base]||'';value=prefix+pad(number.toString(base),precision||0,'0',false);return justify(value,prefix,leftJustify,minWidth,zeroPad);};var formatString=function(value,leftJustify,minWidth,precision,zeroPad,customPadChar){if(precision!=null){value=value.slice(0,precision);}
return justify(value,'',leftJustify,minWidth,zeroPad,customPadChar);};var doFormat=function(substring,valueIndex,flags,minWidth,_,precision,type){var number;var prefix;var method;var textTransform;var value;if(substring=='%%'){return'%';}
var leftJustify=false,positivePrefix='',zeroPad=false,prefixBaseX=false,customPadChar=' ';var flagsl=flags.length;for(var j=0;flags&&j<flagsl;j++){switch(flags.charAt(j)){case' ':positivePrefix=' ';break;case'+':positivePrefix='+';break;case'-':leftJustify=true;break;case"'":customPadChar=flags.charAt(j+1);break;case'0':zeroPad=true;break;case'#':prefixBaseX=true;break;}}
if(!minWidth){minWidth=0;}else if(minWidth=='*'){minWidth=+a[i++];}else if(minWidth.charAt(0)=='*'){minWidth=+a[minWidth.slice(1,-1)];}else{minWidth=+minWidth;}
if(minWidth<0){minWidth=-minWidth;leftJustify=true;}
if(!isFinite(minWidth)){throw new Error('sprintf: (minimum-)width must be finite');}
if(!precision){precision='fFeE'.indexOf(type)>-1?6:(type=='d')?0:undefined;}else if(precision=='*'){precision=+a[i++];}else if(precision.charAt(0)=='*'){precision=+a[precision.slice(1,-1)];}else{precision=+precision;}
value=valueIndex?a[valueIndex.slice(0,-1)]:a[i++];switch(type){case's':return formatString(String(value),leftJustify,minWidth,precision,zeroPad,customPadChar);case'c':return formatString(String.fromCharCode(+value),leftJustify,minWidth,precision,zeroPad);case'b':return formatBaseX(value,2,prefixBaseX,leftJustify,minWidth,precision,zeroPad);case'o':return formatBaseX(value,8,prefixBaseX,leftJustify,minWidth,precision,zeroPad);case'x':return formatBaseX(value,16,prefixBaseX,leftJustify,minWidth,precision,zeroPad);case'X':return formatBaseX(value,16,prefixBaseX,leftJustify,minWidth,precision,zeroPad).toUpperCase();case'u':return formatBaseX(value,10,prefixBaseX,leftJustify,minWidth,precision,zeroPad);case'i':case'd':number=(+value)|0;prefix=number<0?'-':positivePrefix;value=prefix+pad(String(Math.abs(number)),precision,'0',false);return justify(value,prefix,leftJustify,minWidth,zeroPad);case'e':case'E':case'f':case'F':case'g':case'G':number=+value;prefix=number<0?'-':positivePrefix;method=['toExponential','toFixed','toPrecision']['efg'.indexOf(type.toLowerCase())];textTransform=['toString','toUpperCase']['eEfFgG'.indexOf(type)%2];value=prefix+Math.abs(number)[method](precision);return justify(value,prefix,leftJustify,minWidth,zeroPad)[textTransform]();default:return substring;}};return format.replace(regex,doFormat);}
function sql_regcase(str){this.setlocale('LC_ALL',0);var i=0,upper='',lower='',pos=0,retStr='';upper=this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.upper;lower=this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.lower;for(i=0;i<str.length;i++){if(((pos=upper.indexOf(str.charAt(i)))!==-1)||((pos=lower.indexOf(str.charAt(i)))!==-1)){retStr+='['+upper.charAt(pos)+lower.charAt(pos)+']';}else{retStr+=str.charAt(i);}}
return retStr;}
function sqrt(arg){return Math.sqrt(arg);}
function str_getcsv(input,delimiter,enclosure,escape){var output=[];var backwards=function(str){return str.split('').reverse().join('');};var pq=function(str){return(str+'').replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g,"\\$1");};delimiter=delimiter||',';enclosure=enclosure||'"';escape=escape||'\\';input=input.replace(new RegExp('^\\s*'+pq(enclosure)),'').replace(new RegExp(pq(enclosure)+'\\s*$'),'');input=backwards(input).split(new RegExp(pq(enclosure)+'\\s*'+pq(delimiter)+'\\s*'+pq(enclosure)+'(?!'+pq(escape)+')','g')).reverse();for(var i=0;i<input.length;i++){output.push(backwards(input[i]).replace(new RegExp(pq(escape)+pq(enclosure),'g'),enclosure));}
return output;}
function str_ireplace(search,replace,subject){var i,k='';var searchl=0;var reg;var escapeRegex=function(s){return s.replace(/([\\\^\$*+\[\]?{}.=!:(|)])/g,'\\$1');};search+='';searchl=search.length;if(Object.prototype.toString.call(replace)!=='[object Array]'){replace=[replace];if(Object.prototype.toString.call(search)==='[object Array]'){while(searchl>replace.length){replace[replace.length]=replace[0];}}}
if(Object.prototype.toString.call(search)!=='[object Array]'){search=[search];}
while(search.length>replace.length){replace[replace.length]='';}
if(Object.prototype.toString.call(subject)==='[object Array]'){for(k in subject){if(subject.hasOwnProperty(k)){subject[k]=str_ireplace(search,replace,subject[k]);}}
return subject;}
searchl=search.length;for(i=0;i<searchl;i++){reg=new RegExp(escapeRegex(search[i]),'gi');subject=subject.replace(reg,replace[i]);}
return subject;}
function str_pad(input,pad_length,pad_string,pad_type){var half='',pad_to_go;var str_pad_repeater=function(s,len){var collect='',i;while(collect.length<len){collect+=s;}
collect=collect.substr(0,len);return collect;};input+='';pad_string=pad_string!==undefined?pad_string:' ';if(pad_type!='STR_PAD_LEFT'&&pad_type!='STR_PAD_RIGHT'&&pad_type!='STR_PAD_BOTH'){pad_type='STR_PAD_RIGHT';}
if((pad_to_go=pad_length-input.length)>0){if(pad_type=='STR_PAD_LEFT'){input=str_pad_repeater(pad_string,pad_to_go)+input;}else if(pad_type=='STR_PAD_RIGHT'){input=input+str_pad_repeater(pad_string,pad_to_go);}else if(pad_type=='STR_PAD_BOTH'){half=str_pad_repeater(pad_string,Math.ceil(pad_to_go/2));input=half+input+half;input=input.substr(0,pad_length);}}
return input;}
function str_repeat(input,multiplier){return new Array(multiplier+1).join(input);}
function str_replace(search,replace,subject,count){var i=0,j=0,temp='',repl='',sl=0,fl=0,f=[].concat(search),r=[].concat(replace),s=subject,ra=Object.prototype.toString.call(r)==='[object Array]',sa=Object.prototype.toString.call(s)==='[object Array]';s=[].concat(s);if(count){this.window[count]=0;}
for(i=0,sl=s.length;i<sl;i++){if(s[i]===''){continue;}
for(j=0,fl=f.length;j<fl;j++){temp=s[i]+'';repl=ra?(r[j]!==undefined?r[j]:''):r[0];s[i]=(temp).split(f[j]).join(repl);if(count&&s[i]!==temp){this.window[count]+=(temp.length-s[i].length)/f[j].length;}}}
return sa?s:s[0];}
function str_rot13(str){return(str+'').replace(/[a-z]/gi,function(s){return String.fromCharCode(s.charCodeAt(0)+(s.toLowerCase()<'n'?13:-13));});}
function str_shuffle(str){if(str==undefined){throw'Wrong parameter count for str_shuffle()';}
var getRandomInt=function(max){return Math.floor(Math.random()*(max+1));};var newStr='',rand=0;while(str.length){rand=getRandomInt(str.length-1);newStr+=str.charAt(rand);str=str.substring(0,rand)+str.substr(rand+1);}
return newStr;}
function str_split(string,split_length){if(split_length===null){split_length=1;}
if(string===null||split_length<1){return false;}
string+='';var chunks=[],pos=0,len=string.length;while(pos<len){chunks.push(string.slice(pos,pos+=split_length));}
return chunks;}
function str_word_count(str,format,charlist){var len=str.length,cl=charlist&&charlist.length,chr='',tmpStr='',i=0,c='',wArr=[],wC=0,assoc={},aC=0,reg='',match=false;var _preg_quote=function(str){return(str+'').replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!<>\|\:])/g,'\\$1');},_getWholeChar=function(str,i){var code=str.charCodeAt(i);if(code<0xD800||code>0xDFFF){return str.charAt(i);}
if(0xD800<=code&&code<=0xDBFF){if(str.length<=(i+1)){throw'High surrogate without following low surrogate';}
var next=str.charCodeAt(i+1);if(0xDC00>next||next>0xDFFF){throw'High surrogate without following low surrogate';}
return str.charAt(i)+str.charAt(i+1);}
if(i===0){throw'Low surrogate without preceding high surrogate';}
var prev=str.charCodeAt(i-1);if(0xD800>prev||prev>0xDBFF){throw'Low surrogate without preceding high surrogate';}
return false;};if(cl){reg='^('+_preg_quote(_getWholeChar(charlist,0));for(i=1;i<cl;i++){if((chr=_getWholeChar(charlist,i))===false){continue;}
reg+='|'+_preg_quote(chr);}
reg+=')$';reg=new RegExp(reg);}
for(i=0;i<len;i++){if((c=_getWholeChar(str,i))===false){continue;}
match=this.ctype_alpha(c)||(reg&&c.search(reg)!==-1)||((i!==0&&i!==len-1)&&c==='-')||(i!==0&&c==="'");if(match){if(tmpStr===''&&format===2){aC=i;}
tmpStr=tmpStr+c;}
if(i===len-1||!match&&tmpStr!==''){if(format!==2){wArr[wArr.length]=tmpStr;}else{assoc[aC]=tmpStr;}
tmpStr='';wC++;}}
if(!format){return wC;}else if(format===1){return wArr;}else if(format===2){return assoc;}
throw'You have supplied an incorrect format';}
function strcasecmp(f_string1,f_string2){var string1=(f_string1+'').toLowerCase();var string2=(f_string2+'').toLowerCase();if(string1>string2){return 1;}else if(string1==string2){return 0;}
return-1;}
function strchr(haystack,needle,bool){return this.strstr(haystack,needle,bool);}
function strcmp(str1,str2){return((str1==str2)?0:((str1>str2)?1:-1));}
function strcspn(str,mask,start,length){start=start?start:0;var count=(length&&((start+length)<str.length))?start+length:str.length;strct:for(var i=start,lgth=0;i<count;i++){for(var j=0;j<mask.length;j++){if(str.charAt(i).indexOf(mask[j])!==-1){continue strct;}}++lgth;}
return lgth;}
function strip_tags(input,allowed){allowed=(((allowed||"")+"").toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join('');var tags=/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,commentsAndPhpTags=/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;return input.replace(commentsAndPhpTags,'').replace(tags,function($0,$1){return allowed.indexOf('<'+$1.toLowerCase()+'>')>-1?$0:'';});}
function stripos(f_haystack,f_needle,f_offset){var haystack=(f_haystack+'').toLowerCase();var needle=(f_needle+'').toLowerCase();var index=0;if((index=haystack.indexOf(needle,f_offset))!==-1){return index;}
return false;}
function stripslashes(str){return(str+'').replace(/\\(.?)/g,function(s,n1){switch(n1){case'\\':return'\\';case'0':return'\u0000';case'':return'';default:return n1;}});}
function stristr(haystack,needle,bool){var pos=0;haystack+='';pos=haystack.toLowerCase().indexOf((needle+'').toLowerCase());if(pos==-1){return false;}else{if(bool){return haystack.substr(0,pos);}else{return haystack.slice(pos);}}}
function strlen(string){var str=string+'';var i=0,chr='',lgth=0;if(!this.php_js||!this.php_js.ini||!this.php_js.ini['unicode.semantics']||this.php_js.ini['unicode.semantics'].local_value.toLowerCase()!=='on'){return string.length;}
var getWholeChar=function(str,i){var code=str.charCodeAt(i);var next='',prev='';if(0xD800<=code&&code<=0xDBFF){if(str.length<=(i+1)){throw'High surrogate without following low surrogate';}
next=str.charCodeAt(i+1);if(0xDC00>next||next>0xDFFF){throw'High surrogate without following low surrogate';}
return str.charAt(i)+str.charAt(i+1);}else if(0xDC00<=code&&code<=0xDFFF){if(i===0){throw'Low surrogate without preceding high surrogate';}
prev=str.charCodeAt(i-1);if(0xD800>prev||prev>0xDBFF){throw'Low surrogate without preceding high surrogate';}
return false;}
return str.charAt(i);};for(i=0,lgth=0;i<str.length;i++){if((chr=getWholeChar(str,i))===false){continue;}
lgth++;}
return lgth;}
function strnatcasecmp(str1,str2){var a=(str1+'').toLowerCase();var b=(str2+'').toLowerCase();var isWhitespaceChar=function(a){return a.charCodeAt(0)<=32;};var isDigitChar=function(a){var charCode=a.charCodeAt(0);return(charCode>=48&&charCode<=57);};var compareRight=function(a,b){var bias=0;var ia=0;var ib=0;var ca;var cb;for(var cnt=0;true;ia++,ib++){ca=a.charAt(ia);cb=b.charAt(ib);if(!isDigitChar(ca)&&!isDigitChar(cb)){return bias;}else if(!isDigitChar(ca)){return-1;}else if(!isDigitChar(cb)){return 1;}else if(ca<cb){if(bias===0){bias=-1;}}else if(ca>cb){if(bias===0){bias=1;}}else if(ca==='0'&&cb==='0'){return bias;}}};var ia=0,ib=0;var nza=0,nzb=0;var ca,cb;var result;while(true){nza=nzb=0;ca=a.charAt(ia);cb=b.charAt(ib);while(isWhitespaceChar(ca)||ca==='0'){if(ca==='0'){nza++;}else{nza=0;}
ca=a.charAt(++ia);}
while(isWhitespaceChar(cb)||cb==='0'){if(cb==='0'){nzb++;}else{nzb=0;}
cb=b.charAt(++ib);}
if(isDigitChar(ca)&&isDigitChar(cb)){if((result=compareRight(a.substring(ia),b.substring(ib)))!==0){return result;}}
if(ca==='0'&&cb==='0'){return nza-nzb;}
if(ca<cb){return-1;}else if(ca>cb){return+1;}
++ia;++ib;}}
function strnatcmp(f_string1,f_string2,f_version){var i=0;if(f_version==undefined){f_version=false;}
var __strnatcmp_split=function(f_string){var result=[];var buffer='';var chr='';var i=0,f_stringl=0;var text=true;f_stringl=f_string.length;for(i=0;i<f_stringl;i++){chr=f_string.substring(i,i+1);if(chr.match(/\d/)){if(text){if(buffer.length>0){result[result.length]=buffer;buffer='';}
text=false;}
buffer+=chr;}else if((text==false)&&(chr=='.')&&(i<(f_string.length-1))&&(f_string.substring(i+1,i+2).match(/\d/))){result[result.length]=buffer;buffer='';}else{if(text==false){if(buffer.length>0){result[result.length]=parseInt(buffer,10);buffer='';}
text=true;}
buffer+=chr;}}
if(buffer.length>0){if(text){result[result.length]=buffer;}else{result[result.length]=parseInt(buffer,10);}}
return result;};var array1=__strnatcmp_split(f_string1+'');var array2=__strnatcmp_split(f_string2+'');var len=array1.length;var text=true;var result=-1;var r=0;if(len>array2.length){len=array2.length;result=1;}
for(i=0;i<len;i++){if(isNaN(array1[i])){if(isNaN(array2[i])){text=true;if((r=this.strcmp(array1[i],array2[i]))!=0){return r;}}else if(text){return 1;}else{return-1;}}else if(isNaN(array2[i])){if(text){return-1;}else{return 1;}}else{if(text||f_version){if((r=(array1[i]-array2[i]))!=0){return r;}}else{if((r=this.strcmp(array1[i].toString(),array2[i].toString()))!=0){return r;}}
text=false;}}
return result;}
function strncasecmp(argStr1,argStr2,len){var diff,i=0;var str1=(argStr1+'').toLowerCase().substr(0,len);var str2=(argStr2+'').toLowerCase().substr(0,len);if(str1.length!==str2.length){if(str1.length<str2.length){len=str1.length;if(str2.substr(0,str1.length)==str1){return str1.length-str2.length;}}else{len=str2.length;if(str1.substr(0,str2.length)==str2){return str1.length-str2.length;}}}else{len=str1.length;}
for(diff=0,i=0;i<len;i++){diff=str1.charCodeAt(i)-str2.charCodeAt(i);if(diff!==0){return diff;}}
return 0;}
function strncmp(str1,str2,lgth){var s1=(str1+'').substr(0,lgth);var s2=(str2+'').substr(0,lgth);return((s1==s2)?0:((s1>s2)?1:-1));}
function strpbrk(haystack,char_list){for(var i=0,len=haystack.length;i<len;++i){if(char_list.indexOf(haystack.charAt(i))>=0){return haystack.slice(i);}}
return false;}
function strpos(haystack,needle,offset){var i=(haystack+'').indexOf(needle,(offset||0));return i===-1?false:i;}
function strrchr(haystack,needle){var pos=0;if(typeof needle!=='string'){needle=String.fromCharCode(parseInt(needle,10));}
needle=needle.charAt(0);pos=haystack.lastIndexOf(needle);if(pos===-1){return false;}
return haystack.substr(pos);}
function strrev(string){string=string+'';var grapheme_extend=/(.)([\uDC00-\uDFFF\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065E\u0670\u06D6-\u06DC\u06DE-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0901-\u0903\u093C\u093E-\u094D\u0951-\u0954\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C01-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C82\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D02\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F90-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B6-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8\u19C9\u1A17-\u1A1B\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAA\u1C24-\u1C37\u1DC0-\u1DE6\u1DFE\u1DFF\u20D0-\u20F0\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA67C\uA67D\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C4\uA926-\uA92D\uA947-\uA953\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uFB1E\uFE00-\uFE0F\uFE20-\uFE26]+)/g;string=string.replace(grapheme_extend,'$2$1');return string.split('').reverse().join('');}
function strripos(haystack,needle,offset){haystack=(haystack+'').toLowerCase();needle=(needle+'').toLowerCase();var i=-1;if(offset){i=(haystack+'').slice(offset).lastIndexOf(needle);if(i!==-1){i+=offset;}}else{i=(haystack+'').lastIndexOf(needle);}
return i>=0?i:false;}
function strrpos(haystack,needle,offset){var i=-1;if(offset){i=(haystack+'').slice(offset).lastIndexOf(needle);if(i!==-1){i+=offset;}}else{i=(haystack+'').lastIndexOf(needle);}
return i>=0?i:false;}
function strspn(str1,str2,start,lgth){var found;var stri;var strj;var j=0;var i=0;start=start?(start<0?(str1.length+start):start):0;lgth=lgth?((lgth<0)?(str1.length+lgth-start):lgth):str1.length-start;str1=str1.substr(start,lgth);for(i=0;i<str1.length;i++){found=0;stri=str1.substring(i,i+1);for(j=0;j<=str2.length;j++){strj=str2.substring(j,j+1);if(stri==strj){found=1;break;}}
if(found!=1){return i;}}
return i;}
function strstr(haystack,needle,bool){var pos=0;haystack+='';pos=haystack.indexOf(needle);if(pos==-1){return false;}else{if(bool){return haystack.substr(0,pos);}else{return haystack.slice(pos);}}}
function strtok(str,tokens){this.php_js=this.php_js||{};if(tokens===undefined){tokens=str;str=this.php_js.strtokleftOver;}
if(str.length===0){return false;}
if(tokens.indexOf(str.charAt(0))!==-1){return this.strtok(str.substr(1),tokens);}
for(var i=0;i<str.length;i++){if(tokens.indexOf(str.charAt(i))!==-1){break;}}
this.php_js.strtokleftOver=str.substr(i+1);return str.substring(0,i);}
function strtolower(str){return(str+'').toLowerCase();}
function strtotime(str,now){var i,match,s,strTmp='',parse='';strTmp=str;strTmp=strTmp.replace(/\s{2,}|^\s|\s$/g,' ');strTmp=strTmp.replace(/[\t\r\n]/g,'');if(strTmp=='now'){return(new Date()).getTime()/1000;}else if(!isNaN(parse=Date.parse(strTmp))){return(parse/1000);}else if(now){now=new Date(now*1000);}else{now=new Date();}
strTmp=strTmp.toLowerCase();var __is={day:{'sun':0,'mon':1,'tue':2,'wed':3,'thu':4,'fri':5,'sat':6},mon:{'jan':0,'feb':1,'mar':2,'apr':3,'may':4,'jun':5,'jul':6,'aug':7,'sep':8,'oct':9,'nov':10,'dec':11}};var process=function(m){var ago=(m[2]&&m[2]=='ago');var num=(num=m[0]=='last'?-1:1)*(ago?-1:1);switch(m[0]){case'last':case'next':switch(m[1].substring(0,3)){case'yea':now.setFullYear(now.getFullYear()+num);break;case'mon':now.setMonth(now.getMonth()+num);break;case'wee':now.setDate(now.getDate()+(num*7));break;case'day':now.setDate(now.getDate()+num);break;case'hou':now.setHours(now.getHours()+num);break;case'min':now.setMinutes(now.getMinutes()+num);break;case'sec':now.setSeconds(now.getSeconds()+num);break;default:var day;if(typeof(day=__is.day[m[1].substring(0,3)])!='undefined'){var diff=day-now.getDay();if(diff==0){diff=7*num;}else if(diff>0){if(m[0]=='last'){diff-=7;}}else{if(m[0]=='next'){diff+=7;}}
now.setDate(now.getDate()+diff);}}
break;default:if(/\d+/.test(m[0])){num*=parseInt(m[0],10);switch(m[1].substring(0,3)){case'yea':now.setFullYear(now.getFullYear()+num);break;case'mon':now.setMonth(now.getMonth()+num);break;case'wee':now.setDate(now.getDate()+(num*7));break;case'day':now.setDate(now.getDate()+num);break;case'hou':now.setHours(now.getHours()+num);break;case'min':now.setMinutes(now.getMinutes()+num);break;case'sec':now.setSeconds(now.getSeconds()+num);break;}}else{return false;}
break;}
return true;};match=strTmp.match(/^(\d{2,4}-\d{2}-\d{2})(?:\s(\d{1,2}:\d{2}(:\d{2})?)?(?:\.(\d+))?)?$/);if(match!=null){if(!match[2]){match[2]='00:00:00';}else if(!match[3]){match[2]+=':00';}
s=match[1].split(/-/g);for(i in __is.mon){if(__is.mon[i]==s[1]-1){s[1]=i;}}
s[0]=parseInt(s[0],10);s[0]=(s[0]>=0&&s[0]<=69)?'20'+(s[0]<10?'0'+s[0]:s[0]+''):(s[0]>=70&&s[0]<=99)?'19'+s[0]:s[0]+'';return parseInt(this.strtotime(s[2]+' '+s[1]+' '+s[0]+' '+match[2])+(match[4]?match[4]/1000:''),10);}
var regex='([+-]?\\d+\\s'+'(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?'+'|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday'+'|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday)'+'|(last|next)\\s'+'(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?'+'|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday'+'|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday))'+'(\\sago)?';match=strTmp.match(new RegExp(regex,'gi'));if(match==null){return false;}
for(i=0;i<match.length;i++){if(!process(match[i].split(' '))){return false;}}
return(now.getTime()/1000);}
function strtoupper(str){return(str+'').toUpperCase();}
function strtr(str,from,to){var fr='',i=0,j=0,lenStr=0,lenFrom=0,tmpStrictForIn=false,fromTypeStr='',toTypeStr='',istr='';var tmpFrom=[];var tmpTo=[];var ret='';var match=false;if(typeof from==='object'){tmpStrictForIn=this.ini_set('phpjs.strictForIn',false);from=this.krsort(from);this.ini_set('phpjs.strictForIn',tmpStrictForIn);for(fr in from){if(from.hasOwnProperty(fr)){tmpFrom.push(fr);tmpTo.push(from[fr]);}}
from=tmpFrom;to=tmpTo;}
lenStr=str.length;lenFrom=from.length;fromTypeStr=typeof from==='string';toTypeStr=typeof to==='string';for(i=0;i<lenStr;i++){match=false;if(fromTypeStr){istr=str.charAt(i);for(j=0;j<lenFrom;j++){if(istr==from.charAt(j)){match=true;break;}}}else{for(j=0;j<lenFrom;j++){if(str.substr(i,from[j].length)==from[j]){match=true;i=(i+from[j].length)-1;break;}}}
if(match){ret+=toTypeStr?to.charAt(j):to[j];}else{ret+=str.charAt(i);}}
return ret;}
function substr(str,start,len){var i=0,allBMP=true,es=0,el=0,se=0,ret='';str+='';var end=str.length;this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};switch((this.php_js.ini['unicode.semantics']&&this.php_js.ini['unicode.semantics'].local_value.toLowerCase())){case'on':for(i=0;i<str.length;i++){if(/[\uD800-\uDBFF]/.test(str.charAt(i))&&/[\uDC00-\uDFFF]/.test(str.charAt(i+1))){allBMP=false;break;}}
if(!allBMP){if(start<0){for(i=end-1,es=(start+=end);i>=es;i--){if(/[\uDC00-\uDFFF]/.test(str.charAt(i))&&/[\uD800-\uDBFF]/.test(str.charAt(i-1))){start--;es--;}}}else{var surrogatePairs=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g;while((surrogatePairs.exec(str))!=null){var li=surrogatePairs.lastIndex;if(li-2<start){start++;}else{break;}}}
if(start>=end||start<0){return false;}
if(len<0){for(i=end-1,el=(end+=len);i>=el;i--){if(/[\uDC00-\uDFFF]/.test(str.charAt(i))&&/[\uD800-\uDBFF]/.test(str.charAt(i-1))){end--;el--;}}
if(start>end){return false;}
return str.slice(start,end);}else{se=start+len;for(i=start;i<se;i++){ret+=str.charAt(i);if(/[\uD800-\uDBFF]/.test(str.charAt(i))&&/[\uDC00-\uDFFF]/.test(str.charAt(i+1))){se++;}}
return ret;}
break;}
case'off':default:if(start<0){start+=end;}
end=typeof len==='undefined'?end:(len<0?len+end:len+start);return start>=str.length||start<0||start>end?!1:str.slice(start,end);}
return undefined;}
function substr_compare(main_str,str,offset,length,case_insensitivity){if(!offset&&offset!==0){throw'Missing offset for substr_compare()';}
if(offset<0){offset=main_str.length+offset;}
if(length&&length>(main_str.length-offset)){return false;}
length=length||main_str.length-offset;main_str=main_str.substr(offset,length);str=str.substr(0,length);if(case_insensitivity){main_str=(main_str+'').toLowerCase();str=(str+'').toLowerCase();if(main_str==str){return 0;}
return(main_str>str)?1:-1;}
return((main_str==str)?0:((main_str>str)?1:-1));}
function substr_count(haystack,needle,offset,length){var pos=0,cnt=0;haystack+='';needle+='';if(isNaN(offset)){offset=0;}
if(isNaN(length)){length=0;}
offset--;while((offset=haystack.indexOf(needle,offset+1))!=-1){if(length>0&&(offset+needle.length)>length){return false;}else{cnt++;}}
return cnt;}
function substr_replace(str,replace,start,length){if(start<0){start=start+str.length;}
length=length!==undefined?length:str.length;if(length<0){length=length+str.length-start;}
return str.slice(0,start)+replace.substr(0,length)+replace.slice(length)+str.slice(start+length);}
function tan(arg){return Math.tan(arg);}
function tanh(arg){return(Math.exp(arg)-Math.exp(-arg))/(Math.exp(arg)+Math.exp(-arg));}
function time(){return Math.floor(new Date().getTime()/1000);}
function trim(str,charlist){var whitespace,l=0,i=0;str+='';if(!charlist){whitespace=" \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";}else{charlist+='';whitespace=charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g,'$1');}
l=str.length;for(i=0;i<l;i++){if(whitespace.indexOf(str.charAt(i))===-1){str=str.substring(i);break;}}
l=str.length;for(i=l-1;i>=0;i--){if(whitespace.indexOf(str.charAt(i))===-1){str=str.substring(0,i+1);break;}}
return whitespace.indexOf(str.charAt(0))===-1?str:'';}
function uasort(inputArr,sorter){var valArr=[],tempKeyVal,tempValue,ret,k='',i=0,strictForIn=false,populateArr={};if(typeof sorter==='string'){sorter=this[sorter];}else if(Object.prototype.toString.call(sorter)==='[object Array]'){sorter=this[sorter[0]][sorter[1]];}
this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(k in inputArr){if(inputArr.hasOwnProperty(k)){valArr.push([k,inputArr[k]]);if(strictForIn){delete inputArr[k];}}}
valArr.sort(function(a,b){return sorter(a[1],b[1]);});for(i=0;i<valArr.length;i++){populateArr[valArr[i][0]]=valArr[i][1];}
return strictForIn||populateArr;}
function ucfirst(str){str+='';var f=str.charAt(0).toUpperCase();return f+str.substr(1);}
function ucwords(str){return(str+'').replace(/^([a-z])|\s+([a-z])/g,function($1){return $1.toUpperCase();});}
function uksort(inputArr,sorter){var tmp_arr={},keys=[],i=0,k='',strictForIn=false,populateArr={};if(typeof sorter==='string'){sorter=this.window[sorter];}
for(k in inputArr){if(inputArr.hasOwnProperty(k)){keys.push(k);}}
try{if(sorter){keys.sort(sorter);}else{keys.sort();}}catch(e){return false;}
this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(i=0;i<keys.length;i++){k=keys[i];tmp_arr[k]=inputArr[k];if(strictForIn){delete inputArr[k];}}
for(i in tmp_arr){if(tmp_arr.hasOwnProperty(i)){populateArr[i]=tmp_arr[i];}}
return strictForIn||populateArr;}
function unserialize(data){var that=this;var utf8Overhead=function(chr){var code=chr.charCodeAt(0);if(code<0x0080){return 0;}
if(code<0x0800){return 1;}
return 2;};var error=function(type,msg,filename,line){throw new that.window[type](msg,filename,line);};var read_until=function(data,offset,stopchr){var buf=[];var chr=data.slice(offset,offset+1);var i=2;while(chr!=stopchr){if((i+offset)>data.length){error('Error','Invalid');}
buf.push(chr);chr=data.slice(offset+(i-1),offset+i);i+=1;}
return[buf.length,buf.join('')];};var read_chrs=function(data,offset,length){var buf;buf=[];for(var i=0;i<length;i++){var chr=data.slice(offset+(i-1),offset+i);buf.push(chr);length-=utf8Overhead(chr);}
return[buf.length,buf.join('')];};var _unserialize=function(data,offset){var readdata;var readData;var chrs=0;var ccount;var stringlength;var keyandchrs;var keys;if(!offset){offset=0;}
var dtype=(data.slice(offset,offset+1)).toLowerCase();var dataoffset=offset+2;var typeconvert=function(x){return x;};switch(dtype){case'i':typeconvert=function(x){return parseInt(x,10);};readData=read_until(data,dataoffset,';');chrs=readData[0];readdata=readData[1];dataoffset+=chrs+1;break;case'b':typeconvert=function(x){return parseInt(x,10)!==0;};readData=read_until(data,dataoffset,';');chrs=readData[0];readdata=readData[1];dataoffset+=chrs+1;break;case'd':typeconvert=function(x){return parseFloat(x);};readData=read_until(data,dataoffset,';');chrs=readData[0];readdata=readData[1];dataoffset+=chrs+1;break;case'n':readdata=null;break;case's':ccount=read_until(data,dataoffset,':');chrs=ccount[0];stringlength=ccount[1];dataoffset+=chrs+2;readData=read_chrs(data,dataoffset+1,parseInt(stringlength,10));chrs=readData[0];readdata=readData[1];dataoffset+=chrs+2;if(chrs!=parseInt(stringlength,10)&&chrs!=readdata.length){error('SyntaxError','String length mismatch');}
readdata=that.utf8_decode(readdata);break;case'a':readdata={};keyandchrs=read_until(data,dataoffset,':');chrs=keyandchrs[0];keys=keyandchrs[1];dataoffset+=chrs+2;for(var i=0;i<parseInt(keys,10);i++){var kprops=_unserialize(data,dataoffset);var kchrs=kprops[1];var key=kprops[2];dataoffset+=kchrs;var vprops=_unserialize(data,dataoffset);var vchrs=vprops[1];var value=vprops[2];dataoffset+=vchrs;readdata[key]=value;}
dataoffset+=1;break;default:error('SyntaxError','Unknown / Unhandled data type(s): '+dtype);break;}
return[dtype,dataoffset-offset,typeconvert(readdata)];};return _unserialize((data+''),0)[2];}
function urldecode(str){return decodeURIComponent((str+'').replace(/\+/g,'%20'));}
function urlencode(str){str=(str+'').toString();return encodeURIComponent(str).replace(/!/g,'%21').replace(/'/g,'%27').replace(/\(/g,'%28').replace(/\)/g,'%29').replace(/\*/g,'%2A').replace(/%20/g,'+');}
function usort(inputArr,sorter){var valArr=[],k='',i=0,strictForIn=false,populateArr={};if(typeof sorter==='string'){sorter=this[sorter];}else if(Object.prototype.toString.call(sorter)==='[object Array]'){sorter=this[sorter[0]][sorter[1]];}
this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(k in inputArr){if(inputArr.hasOwnProperty(k)){valArr.push(inputArr[k]);if(strictForIn){delete inputArr[k];}}}
try{valArr.sort(sorter);}catch(e){return false;}
for(i=0;i<valArr.length;i++){populateArr[i]=valArr[i];}
return strictForIn||populateArr;}
function utf8_decode(str_data){var tmp_arr=[],i=0,ac=0,c1=0,c2=0,c3=0;str_data+='';while(i<str_data.length){c1=str_data.charCodeAt(i);if(c1<128){tmp_arr[ac++]=String.fromCharCode(c1);i++;}else if(c1>191&&c1<224){c2=str_data.charCodeAt(i+1);tmp_arr[ac++]=String.fromCharCode(((c1&31)<<6)|(c2&63));i+=2;}else{c2=str_data.charCodeAt(i+1);c3=str_data.charCodeAt(i+2);tmp_arr[ac++]=String.fromCharCode(((c1&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return tmp_arr.join('');}
function utf8_encode(argString){if(argString===null||typeof argString==="undefined"){return"";}
var string=(argString+'');var utftext="",start,end,stringl=0;start=end=0;stringl=string.length;for(var n=0;n<stringl;n++){var c1=string.charCodeAt(n);var enc=null;if(c1<128){end++;}else if(c1>127&&c1<2048){enc=String.fromCharCode((c1>>6)|192)+String.fromCharCode((c1&63)|128);}else{enc=String.fromCharCode((c1>>12)|224)+String.fromCharCode(((c1>>6)&63)|128)+String.fromCharCode((c1&63)|128);}
if(enc!==null){if(end>start){utftext+=string.slice(start,end);}
utftext+=enc;start=end=n+1;}}
if(end>start){utftext+=string.slice(start,stringl);}
return utftext;}
function var_dump(){var output='',pad_char=' ',pad_val=4,lgth=0,i=0,d=this.window.document;var _getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];};var _repeat_char=function(len,pad_char){var str='';for(var i=0;i<len;i++){str+=pad_char;}
return str;};var _getInnerVal=function(val,thick_pad){var ret='';if(val===null){ret='NULL';}else if(typeof val==='boolean'){ret='bool('+val+')';}else if(typeof val==='string'){ret='string('+val.length+') "'+val+'"';}else if(typeof val==='number'){if(parseFloat(val)==parseInt(val,10)){ret='int('+val+')';}else{ret='float('+val+')';}}
else if(typeof val==='undefined'){ret='undefined';}else if(typeof val==='function'){var funcLines=val.toString().split('\n');ret='';for(var i=0,fll=funcLines.length;i<fll;i++){ret+=(i!==0?'\n'+thick_pad:'')+funcLines[i];}}else if(val instanceof Date){ret='Date('+val+')';}else if(val instanceof RegExp){ret='RegExp('+val+')';}else if(val.nodeName){switch(val.nodeType){case 1:if(typeof val.namespaceURI==='undefined'||val.namespaceURI==='http://www.w3.org/1999/xhtml'){ret='HTMLElement("'+val.nodeName+'")';}else{ret='XML Element("'+val.nodeName+'")';}
break;case 2:ret='ATTRIBUTE_NODE('+val.nodeName+')';break;case 3:ret='TEXT_NODE('+val.nodeValue+')';break;case 4:ret='CDATA_SECTION_NODE('+val.nodeValue+')';break;case 5:ret='ENTITY_REFERENCE_NODE';break;case 6:ret='ENTITY_NODE';break;case 7:ret='PROCESSING_INSTRUCTION_NODE('+val.nodeName+':'+val.nodeValue+')';break;case 8:ret='COMMENT_NODE('+val.nodeValue+')';break;case 9:ret='DOCUMENT_NODE';break;case 10:ret='DOCUMENT_TYPE_NODE';break;case 11:ret='DOCUMENT_FRAGMENT_NODE';break;case 12:ret='NOTATION_NODE';break;}}
return ret;};var _formatArray=function(obj,cur_depth,pad_val,pad_char){var someProp='';if(cur_depth>0){cur_depth++;}
var base_pad=_repeat_char(pad_val*(cur_depth-1),pad_char);var thick_pad=_repeat_char(pad_val*(cur_depth+1),pad_char);var str='';var val='';if(typeof obj==='object'&&obj!==null){if(obj.constructor&&_getFuncName(obj.constructor)==='PHPJS_Resource'){return obj.var_dump();}
lgth=0;for(someProp in obj){lgth++;}
str+='array('+lgth+') {\n';for(var key in obj){var objVal=obj[key];if(typeof objVal==='object'&&objVal!==null&&!(objVal instanceof Date)&&!(objVal instanceof RegExp)&&!objVal.nodeName){str+=thick_pad+'['+key+'] =>\n'+thick_pad+_formatArray(objVal,cur_depth+1,pad_val,pad_char);}else{val=_getInnerVal(objVal,thick_pad);str+=thick_pad+'['+key+'] =>\n'+thick_pad+val+'\n';}}
str+=base_pad+'}\n';}else{str=_getInnerVal(obj,thick_pad);}
return str;};output=_formatArray(arguments[0],0,pad_val,pad_char);for(i=1;i<arguments.length;i++){output+='\n'+_formatArray(arguments[i],0,pad_val,pad_char);}
if(d.body){this.echo(output);}else{try{d=XULDocument;this.echo('<pre xmlns="http://www.w3.org/1999/xhtml" style="white-space:pre;">'+output+'</pre>');}catch(e){this.echo(output);}}}
function var_export(mixed_expression,bool_return){var retstr='',iret='',cnt=0,x=[],i=0,funcParts=[],idtLevel=arguments[2]||2,innerIndent='',outerIndent='';var getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];};var _makeIndent=function(idtLevel){return(new Array(idtLevel+1)).join(' ');};var __getType=function(inp){var i=0;var match,type=typeof inp;if(type==='object'&&inp.constructor&&getFuncName(inp.constructor)==='PHPJS_Resource'){return'resource';}
if(type==='function'){return'function';}
if(type==='object'&&!inp){return'null';}
if(type==="object"){if(!inp.constructor){return'object';}
var cons=inp.constructor.toString();match=cons.match(/(\w+)\(/);if(match){cons=match[1].toLowerCase();}
var types=["boolean","number","string","array"];for(i=0;i<types.length;i++){if(cons===types[i]){type=types[i];break;}}}
return type;};var type=__getType(mixed_expression);if(type===null){retstr="NULL";}else if(type==='array'||type==='object'){outerIndent=_makeIndent(idtLevel-2);innerIndent=_makeIndent(idtLevel);for(i in mixed_expression){var value=this.var_export(mixed_expression[i],true,idtLevel+2);value=typeof value==='string'?value.replace(/</g,'&lt;').replace(/>/g,'&gt;'):value;x[cnt++]=innerIndent+i+' => '+(__getType(mixed_expression[i])==='array'?'\n':'')+value;}
iret=x.join(',\n');retstr=outerIndent+"array (\n"+iret+'\n'+outerIndent+')';}else if(type==='function'){funcParts=mixed_expression.toString().match(/function .*?\((.*?)\) \{([\s\S]*)\}/);retstr="create_function ('"+funcParts[1]+"', '"+funcParts[2].replace(new RegExp("'",'g'),"\\'")+"')";}else if(type==='resource'){retstr='NULL';}else{retstr=(typeof(mixed_expression)!=='string')?mixed_expression:"'"+mixed_expression.replace(/(["'])/g,"\\$1").replace(/\0/g,"\\0")+"'";}
if(bool_return!==true){this.echo(retstr);return null;}else{return retstr;}}
function vprintf(format,args){var body,elmt;var ret='',d=this.window.document;var HTMLNS='http://www.w3.org/1999/xhtml';body=d.getElementsByTagNameNS?(d.getElementsByTagNameNS(HTMLNS,'body')[0]?d.getElementsByTagNameNS(HTMLNS,'body')[0]:d.documentElement.lastChild):d.getElementsByTagName('body')[0];if(!body){return false;}
ret=this.sprintf.apply(this,[format].concat(args));elmt=d.createTextNode(ret);body.appendChild(elmt);return ret.length;}
function vsprintf(format,args){return this.sprintf.apply(this,[format].concat(args));}
function wordwrap(str,int_width,str_break,cut){var m=((arguments.length>=2)?arguments[1]:75);var b=((arguments.length>=3)?arguments[2]:"\n");var c=((arguments.length>=4)?arguments[3]:false);var i,j,l,s,r;str+='';if(m<1){return str;}
for(i=-1,l=(r=str.split(/\r\n|\n|\r/)).length;++i<l;r[i]+=s){for(s=r[i],r[i]="";s.length>m;r[i]+=s.slice(0,j)+((s=s.slice(j)).length?b:"")){j=c==2||(j=s.slice(0,m+1).match(/\S*(\s)?$/))[1]?m:j.input.length-j[0].length||c==1&&m||j.input.length+(j=s.slice(m).match(/^\S*/)).input.length;}}
return r.join("\n");};

/* qfe_json-js: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-content/plugins/qfy_editor/assets/lib/json-js/json2.js) */
/*
    json2.js
    2013-05-26

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (typeof JSON !== 'object') {
    JSON = {};
}

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function () {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear()     + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate())      + 'T' +
                    f(this.getUTCHours())     + ':' +
                    f(this.getUTCMinutes())   + ':' +
                    f(this.getUTCSeconds())   + 'Z'
                : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function () {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());
;

/* underscore: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-includes/js/underscore.min.js) */
//     Underscore.js 1.4.4
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,j=i.bind,w=function(n){return n instanceof w?n:this instanceof w?(this._wrapped=n,void 0):new w(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=w),exports._=w):n._=w,w.VERSION="1.4.4";var A=w.each=w.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(w.has(n,a)&&t.call(e,n[a],a,n)===r)return};w.map=w.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),e)};var O="Reduce of empty array with no initial value";w.reduce=w.foldl=w.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=w.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},w.reduceRight=w.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=w.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=w.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},w.find=w.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},w.filter=w.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},w.reject=function(n,t,r){return w.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},w.every=w.all=function(n,t,e){t||(t=w.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var E=w.some=w.any=function(n,t,e){t||(t=w.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};w.contains=w.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:E(n,function(n){return n===t})},w.invoke=function(n,t){var r=o.call(arguments,2),e=w.isFunction(t);return w.map(n,function(n){return(e?t:n[t]).apply(n,r)})},w.pluck=function(n,t){return w.map(n,function(n){return n[t]})},w.where=function(n,t,r){return w.isEmpty(t)?r?null:[]:w[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},w.findWhere=function(n,t){return w.where(n,t,!0)},w.max=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.max.apply(Math,n);if(!t&&w.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>=e.computed&&(e={value:n,computed:a})}),e.value},w.min=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.min.apply(Math,n);if(!t&&w.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;e.computed>a&&(e={value:n,computed:a})}),e.value},w.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=w.random(r++),e[r-1]=e[t],e[t]=n}),e};var k=function(n){return w.isFunction(n)?n:function(t){return t[n]}};w.sortBy=function(n,t,r){var e=k(t);return w.pluck(w.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),"value")};var F=function(n,t,r,e){var u={},i=k(t||w.identity);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};w.groupBy=function(n,t,r){return F(n,t,r,function(n,t,r){(w.has(n,t)?n[t]:n[t]=[]).push(r)})},w.countBy=function(n,t,r){return F(n,t,r,function(n,t){w.has(n,t)||(n[t]=0),n[t]++})},w.sortedIndex=function(n,t,r,e){r=null==r?w.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;u>r.call(e,n[o])?i=o+1:a=o}return i},w.toArray=function(n){return n?w.isArray(n)?o.call(n):n.length===+n.length?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:n.length===+n.length?n.length:w.keys(n).length},w.first=w.head=w.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},w.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},w.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},w.rest=w.tail=w.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var R=function(n,t,r){return A(n,function(n){w.isArray(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r};w.flatten=function(n,t){return R(n,t,[])},w.without=function(n){return w.difference(n,o.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isFunction(t)&&(e=r,r=t,t=!1);var u=r?w.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:w.contains(a,r))||(a.push(r),i.push(n[e]))}),i},w.union=function(){return w.uniq(c.apply(e,arguments))},w.intersection=function(n){var t=o.call(arguments,1);return w.filter(w.uniq(n),function(n){return w.every(t,function(t){return w.indexOf(t,n)>=0})})},w.difference=function(n){var t=c.apply(e,o.call(arguments,1));return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){for(var n=o.call(arguments),t=w.max(w.pluck(n,"length")),r=Array(t),e=0;t>e;e++)r[e]=w.pluck(n,""+e);return r},w.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=w.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},w.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},w.range=function(n,t,r){1>=arguments.length&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i},w.bind=function(n,t){if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));var r=o.call(arguments,2);return function(){return n.apply(t,r.concat(o.call(arguments)))}},w.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},w.bindAll=function(n){var t=o.call(arguments,1);return 0===t.length&&(t=w.functions(n)),A(t,function(t){n[t]=w.bind(n[t],n)}),n},w.memoize=function(n,t){var r={};return t||(t=w.identity),function(){var e=t.apply(this,arguments);return w.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},w.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=function(n){return w.delay.apply(w,[n,1].concat(o.call(arguments,1)))},w.throttle=function(n,t){var r,e,u,i,a=0,o=function(){a=new Date,u=null,i=n.apply(r,e)};return function(){var c=new Date,l=t-(c-a);return r=this,e=arguments,0>=l?(clearTimeout(u),u=null,a=c,i=n.apply(r,e)):u||(u=setTimeout(o,l)),i}},w.debounce=function(n,t,r){var e,u;return function(){var i=this,a=arguments,o=function(){e=null,r||(u=n.apply(i,a))},c=r&&!e;return clearTimeout(e),e=setTimeout(o,t),c&&(u=n.apply(i,a)),u}},w.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},w.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},w.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},w.after=function(n,t){return 0>=n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},w.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)w.has(n,r)&&(t[t.length]=r);return t},w.values=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push(n[r]);return t},w.pairs=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push([r,n[r]]);return t},w.invert=function(n){var t={};for(var r in n)w.has(n,r)&&(t[n[r]]=r);return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},w.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},w.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)w.contains(r,u)||(t[u]=n[u]);return t},w.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)null==n[r]&&(n[r]=t[r])}),n},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n};var I=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==t+"";case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;r.push(n),e.push(t);var a=0,o=!0;if("[object Array]"==u){if(a=n.length,o=a==t.length)for(;a--&&(o=I(n[a],t[a],r,e)););}else{var c=n.constructor,f=t.constructor;if(c!==f&&!(w.isFunction(c)&&c instanceof c&&w.isFunction(f)&&f instanceof f))return!1;for(var s in n)if(w.has(n,s)&&(a++,!(o=w.has(t,s)&&I(n[s],t[s],r,e))))break;if(o){for(s in t)if(w.has(t,s)&&!a--)break;o=!a}}return r.pop(),e.pop(),o};w.isEqual=function(n,t){return I(n,t,[],[])},w.isEmpty=function(n){if(null==n)return!0;if(w.isArray(n)||w.isString(n))return 0===n.length;for(var t in n)if(w.has(n,t))return!1;return!0},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=x||function(n){return"[object Array]"==l.call(n)},w.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){w["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return!(!n||!w.has(n,"callee"))}),"function"!=typeof/./&&(w.isFunction=function(n){return"function"==typeof n}),w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!=+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return n===void 0},w.has=function(n,t){return f.call(n,t)},w.noConflict=function(){return n._=t,this},w.identity=function(n){return n},w.times=function(n,t,r){for(var e=Array(n),u=0;n>u;u++)e[u]=t.call(r,u);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};M.unescape=w.invert(M.escape);var S={escape:RegExp("["+w.keys(M.escape).join("")+"]","g"),unescape:RegExp("("+w.keys(M.unescape).join("|")+")","g")};w.each(["escape","unescape"],function(n){w[n]=function(t){return null==t?"":(""+t).replace(S[n],function(t){return M[n][t]})}}),w.result=function(n,t){if(null==n)return null;var r=n[t];return w.isFunction(r)?r.call(n):r},w.mixin=function(n){A(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),D.call(this,r.apply(w,n))}})};var N=0;w.uniqueId=function(n){var t=++N+"";return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var T=/(.)^/,q={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\t|\u2028|\u2029/g;w.template=function(n,t,r){var e;r=w.defaults({},r,w.templateSettings);var u=RegExp([(r.escape||T).source,(r.interpolate||T).source,(r.evaluate||T).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(B,function(n){return"\\"+q[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,w);var c=function(n){return e.call(this,n,w)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},w.chain=function(n){return w(n).chain()};var D=function(n){return this._chain?w(n).chain():n};w.mixin(w),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],D.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];w.prototype[n]=function(){return D.call(this,t.apply(this._wrapped,arguments))}}),w.extend(w.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);;

/* backbone: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-includes/js/backbone.min.js) */
// Backbone.js 1.0.0

// (c) 2010-2013 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://backbonejs.org
(function(){var t=this;var e=t.Backbone;var i=[];var r=i.push;var s=i.slice;var n=i.splice;var a;if(typeof exports!=="undefined"){a=exports}else{a=t.Backbone={}}a.VERSION="1.0.0";var h=t._;if(!h&&typeof require!=="undefined")h=require("underscore");a.$=t.jQuery||t.Zepto||t.ender||t.$;a.noConflict=function(){t.Backbone=e;return this};a.emulateHTTP=false;a.emulateJSON=false;var o=a.Events={on:function(t,e,i){if(!l(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var r=this._events[t]||(this._events[t]=[]);r.push({callback:e,context:i,ctx:i||this});return this},once:function(t,e,i){if(!l(this,"once",t,[e,i])||!e)return this;var r=this;var s=h.once(function(){r.off(t,s);e.apply(this,arguments)});s._callback=e;return this.on(t,s,i)},off:function(t,e,i){var r,s,n,a,o,u,c,f;if(!this._events||!l(this,"off",t,[e,i]))return this;if(!t&&!e&&!i){this._events={};return this}a=t?[t]:h.keys(this._events);for(o=0,u=a.length;o<u;o++){t=a[o];if(n=this._events[t]){this._events[t]=r=[];if(e||i){for(c=0,f=n.length;c<f;c++){s=n[c];if(e&&e!==s.callback&&e!==s.callback._callback||i&&i!==s.context){r.push(s)}}}if(!r.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this;var e=s.call(arguments,1);if(!l(this,"trigger",t,e))return this;var i=this._events[t];var r=this._events.all;if(i)c(i,e);if(r)c(r,arguments);return this},stopListening:function(t,e,i){var r=this._listeners;if(!r)return this;var s=!e&&!i;if(typeof e==="object")i=this;if(t)(r={})[t._listenerId]=t;for(var n in r){r[n].off(e,i,this);if(s)delete this._listeners[n]}return this}};var u=/\s+/;var l=function(t,e,i,r){if(!i)return true;if(typeof i==="object"){for(var s in i){t[e].apply(t,[s,i[s]].concat(r))}return false}if(u.test(i)){var n=i.split(u);for(var a=0,h=n.length;a<h;a++){t[e].apply(t,[n[a]].concat(r))}return false}return true};var c=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],h=e[2];switch(e.length){case 0:while(++r<s)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<s)(i=t[r]).callback.call(i.ctx,n);return;case 2:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a);return;case 3:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a,h);return;default:while(++r<s)(i=t[r]).callback.apply(i.ctx,e)}};var f={listenTo:"on",listenToOnce:"once"};h.each(f,function(t,e){o[e]=function(e,i,r){var s=this._listeners||(this._listeners={});var n=e._listenerId||(e._listenerId=h.uniqueId("l"));s[n]=e;if(typeof i==="object")r=this;e[t](i,r,this);return this}});o.bind=o.on;o.unbind=o.off;h.extend(a,o);var d=a.Model=function(t,e){var i;var r=t||{};e||(e={});this.cid=h.uniqueId("c");this.attributes={};h.extend(this,h.pick(e,p));if(e.parse)r=this.parse(r,e)||{};if(i=h.result(this,"defaults")){r=h.defaults({},r,i)}this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};var p=["url","urlRoot","collection"];h.extend(d.prototype,o,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return h.clone(this.attributes)},sync:function(){return a.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return h.escape(this.get(t))},has:function(t){return this.get(t)!=null},set:function(t,e,i){var r,s,n,a,o,u,l,c;if(t==null)return this;if(typeof t==="object"){s=t;i=e}else{(s={})[t]=e}i||(i={});if(!this._validate(s,i))return false;n=i.unset;o=i.silent;a=[];u=this._changing;this._changing=true;if(!u){this._previousAttributes=h.clone(this.attributes);this.changed={}}c=this.attributes,l=this._previousAttributes;if(this.idAttribute in s)this.id=s[this.idAttribute];for(r in s){e=s[r];if(!h.isEqual(c[r],e))a.push(r);if(!h.isEqual(l[r],e)){this.changed[r]=e}else{delete this.changed[r]}n?delete c[r]:c[r]=e}if(!o){if(a.length)this._pending=true;for(var f=0,d=a.length;f<d;f++){this.trigger("change:"+a[f],this,c[a[f]],i)}}if(u)return this;if(!o){while(this._pending){this._pending=false;this.trigger("change",this,i)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,h.extend({},e,{unset:true}))},clear:function(t){var e={};for(var i in this.attributes)e[i]=void 0;return this.set(e,h.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!h.isEmpty(this.changed);return h.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?h.clone(this.changed):false;var e,i=false;var r=this._changing?this._previousAttributes:this.attributes;for(var s in t){if(h.isEqual(r[s],e=t[s]))continue;(i||(i={}))[s]=e}return i},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return h.clone(this._previousAttributes)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=this;var i=t.success;t.success=function(r){if(!e.set(e.parse(r,t),t))return false;if(i)i(e,r,t);e.trigger("sync",e,r,t)};R(this,t);return this.sync("read",this,t)},save:function(t,e,i){var r,s,n,a=this.attributes;if(t==null||typeof t==="object"){r=t;i=e}else{(r={})[t]=e}if(r&&(!i||!i.wait)&&!this.set(r,i))return false;i=h.extend({validate:true},i);if(!this._validate(r,i))return false;if(r&&i.wait){this.attributes=h.extend({},a,r)}if(i.parse===void 0)i.parse=true;var o=this;var u=i.success;i.success=function(t){o.attributes=a;var e=o.parse(t,i);if(i.wait)e=h.extend(r||{},e);if(h.isObject(e)&&!o.set(e,i)){return false}if(u)u(o,t,i);o.trigger("sync",o,t,i)};R(this,i);s=this.isNew()?"create":i.patch?"patch":"update";if(s==="patch")i.attrs=r;n=this.sync(s,this,i);if(r&&i.wait)this.attributes=a;return n},destroy:function(t){t=t?h.clone(t):{};var e=this;var i=t.success;var r=function(){e.trigger("destroy",e,e.collection,t)};t.success=function(s){if(t.wait||e.isNew())r();if(i)i(e,s,t);if(!e.isNew())e.trigger("sync",e,s,t)};if(this.isNew()){t.success();return false}R(this,t);var s=this.sync("delete",this,t);if(!t.wait)r();return s},url:function(){var t=h.result(this,"urlRoot")||h.result(this.collection,"url")||U();if(this.isNew())return t;return t+(t.charAt(t.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(t){return this._validate({},h.extend(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=h.extend({},this.attributes,t);var i=this.validationError=this.validate(t,e)||null;if(!i)return true;this.trigger("invalid",this,i,h.extend(e||{},{validationError:i}));return false}});var v=["keys","values","pairs","invert","pick","omit"];h.each(v,function(t){d.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.attributes);return h[t].apply(h,e)}});var g=a.Collection=function(t,e){e||(e={});if(e.url)this.url=e.url;if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,h.extend({silent:true},e))};var m={add:true,remove:true,merge:true};var y={add:true,merge:false,remove:false};h.extend(g.prototype,o,{model:d,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return a.sync.apply(this,arguments)},add:function(t,e){return this.set(t,h.defaults(e||{},y))},remove:function(t,e){t=h.isArray(t)?t.slice():[t];e||(e={});var i,r,s,n;for(i=0,r=t.length;i<r;i++){n=this.get(t[i]);if(!n)continue;delete this._byId[n.id];delete this._byId[n.cid];s=this.indexOf(n);this.models.splice(s,1);this.length--;if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}this._removeReference(n)}return this},set:function(t,e){e=h.defaults(e||{},m);if(e.parse)t=this.parse(t,e);if(!h.isArray(t))t=t?[t]:[];var i,s,a,o,u,l;var c=e.at;var f=this.comparator&&c==null&&e.sort!==false;var d=h.isString(this.comparator)?this.comparator:null;var p=[],v=[],g={};for(i=0,s=t.length;i<s;i++){if(!(a=this._prepareModel(t[i],e)))continue;if(u=this.get(a)){if(e.remove)g[u.cid]=true;if(e.merge){u.set(a.attributes,e);if(f&&!l&&u.hasChanged(d))l=true}}else if(e.add){p.push(a);a.on("all",this._onModelEvent,this);this._byId[a.cid]=a;if(a.id!=null)this._byId[a.id]=a}}if(e.remove){for(i=0,s=this.length;i<s;++i){if(!g[(a=this.models[i]).cid])v.push(a)}if(v.length)this.remove(v,e)}if(p.length){if(f)l=true;this.length+=p.length;if(c!=null){n.apply(this.models,[c,0].concat(p))}else{r.apply(this.models,p)}}if(l)this.sort({silent:true});if(e.silent)return this;for(i=0,s=p.length;i<s;i++){(a=p[i]).trigger("add",a,this,e)}if(l)this.trigger("sort",this,e);return this},reset:function(t,e){e||(e={});for(var i=0,r=this.models.length;i<r;i++){this._removeReference(this.models[i])}e.previousModels=this.models;this._reset();this.add(t,h.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return this},push:function(t,e){t=this._prepareModel(t,e);this.add(t,h.extend({at:this.length},e));return t},pop:function(t){var e=this.at(this.length-1);this.remove(e,t);return e},unshift:function(t,e){t=this._prepareModel(t,e);this.add(t,h.extend({at:0},e));return t},shift:function(t){var e=this.at(0);this.remove(e,t);return e},slice:function(t,e){return this.models.slice(t,e)},get:function(t){if(t==null)return void 0;return this._byId[t.id!=null?t.id:t.cid||t]},at:function(t){return this.models[t]},where:function(t,e){if(h.isEmpty(t))return e?void 0:[];return this[e?"find":"filter"](function(e){for(var i in t){if(t[i]!==e.get(i))return false}return true})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");t||(t={});if(h.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(h.bind(this.comparator,this))}if(!t.silent)this.trigger("sort",this,t);return this},sortedIndex:function(t,e,i){e||(e=this.comparator);var r=h.isFunction(e)?e:function(t){return t.get(e)};return h.sortedIndex(this.models,t,r,i)},pluck:function(t){return h.invoke(this.models,"get",t)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=t.success;var i=this;t.success=function(r){var s=t.reset?"reset":"set";i[s](r,t);if(e)e(i,r,t);i.trigger("sync",i,r,t)};R(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?h.clone(e):{};if(!(t=this._prepareModel(t,e)))return false;if(!e.wait)this.add(t,e);var i=this;var r=e.success;e.success=function(s){if(e.wait)i.add(t,e);if(r)r(t,s,e)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(t instanceof d){if(!t.collection)t.collection=this;return t}e||(e={});e.collection=this;var i=new this.model(t,e);if(!i._validate(t,e)){this.trigger("invalid",this,t,e);return false}return i},_removeReference:function(t){if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(e&&t==="change:"+e.idAttribute){delete this._byId[e.previous(e.idAttribute)];if(e.id!=null)this._byId[e.id]=e}this.trigger.apply(this,arguments)}});var _=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];h.each(_,function(t){g.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.models);return h[t].apply(h,e)}});var w=["groupBy","countBy","sortBy"];h.each(w,function(t){g.prototype[t]=function(e,i){var r=h.isFunction(e)?e:function(t){return t.get(e)};return h[t](this.models,r,i)}});var b=a.View=function(t){this.cid=h.uniqueId("view");this._configure(t||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var x=/^(\S+)\s*(.*)$/;var E=["model","collection","el","id","attributes","className","tagName","events"];h.extend(b.prototype,o,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(t,e){if(this.$el)this.undelegateEvents();this.$el=t instanceof a.$?t:a.$(t);this.el=this.$el[0];if(e!==false)this.delegateEvents();return this},delegateEvents:function(t){if(!(t||(t=h.result(this,"events"))))return this;this.undelegateEvents();for(var e in t){var i=t[e];if(!h.isFunction(i))i=this[t[e]];if(!i)continue;var r=e.match(x);var s=r[1],n=r[2];i=h.bind(i,this);s+=".delegateEvents"+this.cid;if(n===""){this.$el.on(s,i)}else{this.$el.on(s,n,i)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_configure:function(t){if(this.options)t=h.extend({},h.result(this,"options"),t);h.extend(this,h.pick(t,E));this.options=t},_ensureElement:function(){if(!this.el){var t=h.extend({},h.result(this,"attributes"));if(this.id)t.id=h.result(this,"id");if(this.className)t["class"]=h.result(this,"className");var e=a.$("<"+h.result(this,"tagName")+">").attr(t);this.setElement(e,false)}else{this.setElement(h.result(this,"el"),false)}}});a.sync=function(t,e,i){var r=k[t];h.defaults(i||(i={}),{emulateHTTP:a.emulateHTTP,emulateJSON:a.emulateJSON});var s={type:r,dataType:"json"};if(!i.url){s.url=h.result(e,"url")||U()}if(i.data==null&&e&&(t==="create"||t==="update"||t==="patch")){s.contentType="application/json";s.data=JSON.stringify(i.attrs||e.toJSON(i))}if(i.emulateJSON){s.contentType="application/x-www-form-urlencoded";s.data=s.data?{model:s.data}:{}}if(i.emulateHTTP&&(r==="PUT"||r==="DELETE"||r==="PATCH")){s.type="POST";if(i.emulateJSON)s.data._method=r;var n=i.beforeSend;i.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",r);if(n)return n.apply(this,arguments)}}if(s.type!=="GET"&&!i.emulateJSON){s.processData=false}if(s.type==="PATCH"&&window.ActiveXObject&&!(window.external&&window.external.msActiveXFilteringEnabled)){s.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var o=i.xhr=a.ajax(h.extend(s,i));e.trigger("request",e,o,i);return o};var k={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};a.ajax=function(){return a.$.ajax.apply(a.$,arguments)};var S=a.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var $=/\((.*?)\)/g;var T=/(\(\?)?:\w+/g;var H=/\*\w+/g;var A=/[\-{}\[\]+?.,\\\^$|#\s]/g;h.extend(S.prototype,o,{initialize:function(){},route:function(t,e,i){if(!h.isRegExp(t))t=this._routeToRegExp(t);if(h.isFunction(e)){i=e;e=""}if(!i)i=this[e];var r=this;a.history.route(t,function(s){var n=r._extractParameters(t,s);i&&i.apply(r,n);r.trigger.apply(r,["route:"+e].concat(n));r.trigger("route",e,n);a.history.trigger("route",r,e,n)});return this},navigate:function(t,e){a.history.navigate(t,e);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=h.result(this,"routes");var t,e=h.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(A,"\\$&").replace($,"(?:$1)?").replace(T,function(t,e){return e?t:"([^/]+)"}).replace(H,"(.*?)");return new RegExp("^"+t+"$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return h.map(i,function(t){return t?decodeURIComponent(t):null})}});var I=a.History=function(){this.handlers=[];h.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var N=/^[#\/]|\s+$/g;var P=/^\/+|\/+$/g;var O=/msie [\w.]+/;var C=/\/$/;I.started=false;h.extend(I.prototype,o,{interval:50,getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(t==null){if(this._hasPushState||!this._wantsHashChange||e){t=this.location.pathname;var i=this.root.replace(C,"");if(!t.indexOf(i))t=t.substr(i.length)}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(I.started)throw new Error("Backbone.history has already been started");I.started=true;this.options=h.extend({},{root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var e=this.getFragment();var i=document.documentMode;var r=O.exec(navigator.userAgent.toLowerCase())&&(!i||i<=7);this.root=("/"+this.root+"/").replace(P,"/");if(r&&this._wantsHashChange){this.iframe=a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;this.navigate(e)}if(this._hasPushState){a.$(window).on("popstate",this.checkUrl)}else if(this._wantsHashChange&&"onhashchange"in window&&!r){a.$(window).on("hashchange",this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=e;var s=this.location;var n=s.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!n){this.fragment=this.getFragment(null,true);this.location.replace(this.root+this.location.search+"#"+this.fragment);return true}else if(this._wantsPushState&&this._hasPushState&&n&&s.hash){this.fragment=this.getHash().replace(N,"");this.history.replaceState({},document.title,this.root+this.fragment+s.search)}if(!this.options.silent)return this.loadUrl()},stop:function(){a.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);I.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getFragment(this.getHash(this.iframe))}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(t){var e=this.fragment=this.getFragment(t);var i=h.any(this.handlers,function(t){if(t.route.test(e)){t.callback(e);return true}});return i},navigate:function(t,e){if(!I.started)return false;if(!e||e===true)e={trigger:e};t=this.getFragment(t||"");if(this.fragment===t)return;this.fragment=t;var i=this.root+t;if(this._hasPushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,i)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getFragment(this.getHash(this.iframe))){if(!e.replace)this.iframe.document.open().close();this._updateHash(this.iframe.location,t,e.replace)}}else{return this.location.assign(i)}if(e.trigger)this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});a.history=new I;var j=function(t,e){var i=this;var r;if(t&&h.has(t,"constructor")){r=t.constructor}else{r=function(){return i.apply(this,arguments)}}h.extend(r,i,e);var s=function(){this.constructor=r};s.prototype=i.prototype;r.prototype=new s;if(t)h.extend(r.prototype,t);r.__super__=i.prototype;return r};d.extend=g.extend=S.extend=b.extend=I.extend=j;var U=function(){throw new Error('A "url" property or function must be specified')};var R=function(t,e){var i=e.error;e.error=function(r){if(i)i(t,r,e);t.trigger("error",t,r,e)}}}).call(this);
;

/* qfe_qfy_editor_js_tools: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-content/plugins/qfy_editor/assets/js/backend/composer-atts.js) */
/* =========================================================
 * composer-atts.js v0.2.1
 * =========================================================
 * Copyright 2013 QFEditor
 *
 * Visual composer backbone/underscore shortcodes attributes
 * form field and parsing controls
 * ========================================================= */
var vc = {filters:{templates:[]}, addTemplateFilter:function (callback) {
    if (_.isFunction(callback)) this.filters.templates.push(callback);
}};
(function ($) {
    var i18n = window.i18nLocale;
    vc.atts = {
        parse:function (param) {
            var value;
            var $field = this.content().find('.qfe_vc_param_value[name=' + param.pn + ']');
            if (!_.isUndefined(vc.atts[param.type]) && !_.isUndefined(vc.atts[param.type].parse)) {
                value = vc.atts[param.type].parse.call(this, param);
            } else {
                value = $field.length ? $field.val() : null;
            }
            if ($field.data('js-function') !== undefined && typeof(window[$field.data('js-function')]) !== 'undefined') {
                var fn = window[$field.data('js-function')];
                fn(this.$el, this);
            }
            return value;
        },
        parseFrame:function (param) {
          var value;
		  if(this.content().find('.btn-icon.qfe_vc_param_value[name=' + param.pn + ']').length>0){
			var $field = this.content().find('.btn-icon.qfe_vc_param_value[name=' + param.pn + '] >input');
		  }else{
			var $field = this.content().find('.qfe_vc_param_value[name=' + param.pn + ']');
		  }

          if (!_.isUndefined(vc.atts[param.type]) && !_.isUndefined(vc.atts[param.type].parse)) {
            value = vc.atts[param.type].parse.call(this, param);
          } else {
            value = $field.length ? $field.val() : null;
          }
		  if(this.content().find('.qfe_el_type_checkbox_js [name=' + param.pn + ']').length>0){
			var $field = this.content().find('.qfe_el_type_checkbox_js [name=' + param.pn + ']:checked');
			var values = [];
			$field.each(function() {
				values.push(jQuery(this).val());
			});
			value = values.join(",");
		  }
		   if(this.content().find('.icons_list[name=' + param.pn + ']').length>0){
			var $field = this.content().find('.gallery_icons_list_container.' + param.pn + ' li');
			var values = [];
			$field.each(function() {
				values.push(jQuery(this).find("input").val());
			});
			value = values.join("|^^|");
		  }
		
          if ($field.data('js-function') !== undefined && typeof(window[$field.data('js-function')]) !== 'undefined') {
            var fn = window[$field.data('js-function')];
            fn(this.$el, this);
          }
          return value;
        }
    };

    // Default atts
    _.extend(vc.atts, {
        textarea_html:{
            parse:function (param) {
                var $field = this.content().find('textarea.qfe_vc_param_value.' + param.pn + ''),
                    mce_id = $field.attr('id');
                // try {
                return this.window().tinyMCE.activeEditor.save();
                // } catch (err) {
                // }
                return vc_wpnop($field.val()); // !_.isUndefined(window.switchEditors) ? window.switchEditors._qf_Nop($field.val()) : $field.val();
            },
            render:function (param, value) {
                return _.isUndefined(value) ? value : vc_qfautop(value);
            }
        },
        checkbox:{
            parse:function (param) {
                var arr = [],
                    new_value = '';
                $('input[name=' + param.pn + ']', this.content()).each(function (index) {
                    var self = $(this);
                    if (self.is(':checked')) {
                        arr.push(self.attr("value"));
                    }
                });
                if (arr.length > 0) {
                    new_value = arr.join(',');
                }
                return new_value;
            }
        },
        posttypes:{
            parse:function (param) {
                var posstypes_arr = [],
                    new_value = '';
                $('input[name=' + param.pn + ']', this.content()).each(function (index) {
                    var self = $(this);
                    if (self.is(':checked')) {
                        posstypes_arr.push(self.attr("value"));
                    }
                });
                if (posstypes_arr.length > 0) {
                    new_value = posstypes_arr.join(',');
                }
                return new_value;
            }
        },
        taxonomies:{
            parse:function (param) {
                var posstypes_arr = [],
                    new_value = '';
                $('input[name=' + param.pn + ']', this.content()).each(function (index) {
                    var self = $(this);
                    if (self.is(':checked')) {
                        posstypes_arr.push(self.attr("value"));
                    }
                });
                if (posstypes_arr.length > 0) {
                    new_value = posstypes_arr.join(',');
                }
                return new_value;
            }
        },
        exploded_textarea:{
            parse:function (param) {
                var $field = this.content().find('.qfe_vc_param_value[name=' + param.pn + ']');
                return $field.val().replace(/\n/g, ",");
            }
        },
        textarea_raw_html:{
            parse:function (param) {
                var $field = this.content().find('.qfe_vc_param_value[name=' + param.pn + ']'),
                    new_value = $field.val();
				if(new_value.indexOf("wmode")<0 && new_value.indexOf("</script>")<0){
					new_value = new_value.replace('src=','wmode="transparent" src=');
				}
                return base64_encode(rawurlencode(new_value));
            },
            render:function (param, value) {
                return $("<div/>").text(rawurldecode(base64_decode(value))).html();
            }
        },
        dropdown:{
            render:function (param, value) {
                var all_classes = _.isObject(param.value) ? _.values(param.value).join(' ') : '';
                //  this.$el.find('> .qfe_element_wrapper').removeClass(all_classes).addClass(value); // remove all possible class names and add only selected one
                return value;
            }
        },
        attach_images:{
            parse:function (param) {
                var $field = this.content().find('.qfe_vc_param_value[name=' + param.pn + ']'),
                    thumbnails_html = '';
                // TODO: Check image search with Bitwebcms
                $field.parent().find('li.added').each(function () {
                    thumbnails_html += '<li><img src="' + $(this).find('img').attr('src') + '" alt=""></li>';
                });
                $('[data-model-id=' + this.model.id + ']').data('field-' + param.pn + '-attach-images', thumbnails_html);
                return $field.length ? $field.val() : null;
            },
            render:function (param, value) {
                var $thumbnails = this.$el.find('.attachment-thumbnails[data-name=' + param.pn + ']'),
                    thumbnails_html = this.$el.data('field-' + param.pn + '-attach-images');
                if (_.isUndefined(thumbnails_html)) {
                    $.ajax({
                        type:'POST',
                        url:window.ajaxurl,
                        data:{
                            action:'qfe_gallery_html',
                            content:value
                        },
                        dataType:'html',
                        context:this
                    }).done(function (html) {
                            vc.atts.attach_images.updateImages($thumbnails, html);
                        });
                } else {
                    this.$el.removeData('field-' + param.pn + '-attach-images');
                    vc.atts.attach_images.updateImages($thumbnails, thumbnails_html);
                }
                return value;
            },
            updateImages:function ($thumbnails, thumbnails_html) {
                $thumbnails.html(thumbnails_html);
                if (thumbnails_html.length) {
                    $thumbnails.removeClass('image-exists').next().addClass('image-exists');
                } else {
                    $thumbnails.addClass('image-exists').next().removeClass('image-exists');
                }
            }
        },
        attach_image:{
            parse:function (param) {
                var $field = this.content().find('.qfe_vc_param_value[name=' + param.pn + ']'),
                    image_src = '';
                if ($field.parent().find('li.added').length) {
                    image_src = $field.parent().find('li.added img').attr('src');
                }
                $('[data-model-id=' + this.model.id + ']').data('field-' + param.pn + '-attach-image', image_src);
                return $field.length ? $field.val() : null;
            },
            render:function (param, value) {
                var image_src = $('[data-model-id=' + this.model.id + ']').data('field-' + param.pn + '-attach-image');
                var $thumbnail = this.$el.find('.attachment-thumbnail[data-name=' + param.pn + ']');
                if (_.isUndefined(image_src)) {
                    $.ajax({
                        type:'POST',
                        url:window.ajaxurl,
                        data:{
                            action:'qfe_single_image_src',
                            content:value
                        },
                        dataType:'html',
                        context:this
                    }).done(function (src) {
                            vc.atts['attach_image'].updateImage($thumbnail, src);
                        });
                } else {
                    $('[data-model-id=' + this.model.id + ']').removeData('field-' + param.pn + '-attach-image');
                    vc.atts['attach_image'].updateImage($thumbnail, image_src);
                }

                return value;
            },
            updateImage:function ($thumbnail, image_src) {
                if (_.isEmpty(image_src)) {
                    $thumbnail.attr('src', '').hide();
                    $thumbnail.next().removeClass('image-exists').next().removeClass('image-exists');
                } else {
                    $thumbnail.attr('src', image_src).show();
                    $thumbnail.next().addClass('image-exists').next().addClass('image-exists');
                }
            }
        }
    });

})(window.jQuery);;

/* jquery-lazy: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-includes/js/jquery.lazy.min.js) */
/*! jQuery & Zepto Lazy v1.7.6 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2017 Daniel 'Eisbehr' Kern */
!function(t,e){"use strict";function r(r,a,i,u,l){function f(){L=t.devicePixelRatio>1,i=c(i),a.delay>=0&&setTimeout(function(){s(!0)},a.delay),(a.delay<0||a.combined)&&(u.e=v(a.throttle,function(t){"resize"===t.type&&(w=B=-1),s(t.all)}),u.a=function(t){t=c(t),i.push.apply(i,t)},u.g=function(){return i=n(i).filter(function(){return!n(this).data(a.loadedName)})},u.f=function(t){for(var e=0;e<t.length;e++){var r=i.filter(function(){return this===t[e]});r.length&&s(!1,r)}},s(),n(a.appendScroll).on("scroll."+l+" resize."+l,u.e))}function c(t){var i=a.defaultImage,o=a.placeholder,u=a.imageBase,l=a.srcsetAttribute,f=a.loaderAttribute,c=a._f||{};t=n(t).filter(function(){var t=n(this),r=m(this);return!t.data(a.handledName)&&(t.attr(a.attribute)||t.attr(l)||t.attr(f)||c[r]!==e)}).data("plugin_"+a.name,r);for(var s=0,d=t.length;s<d;s++){var A=n(t[s]),g=m(t[s]),h=A.attr(a.imageBaseAttribute)||u;g===N&&h&&A.attr(l)&&A.attr(l,b(A.attr(l),h)),c[g]===e||A.attr(f)||A.attr(f,c[g]),g===N&&i&&!A.attr(E)?A.attr(E,i):g===N||!o||A.css(O)&&"none"!==A.css(O)||A.css(O,"url('"+o+"')")}return t}function s(t,e){if(!i.length)return void(a.autoDestroy&&r.destroy());for(var o=e||i,u=!1,l=a.imageBase||"",f=a.srcsetAttribute,c=a.handledName,s=0;s<o.length;s++)if(t||e||A(o[s])){var g=n(o[s]),h=m(o[s]),b=g.attr(a.attribute),v=g.attr(a.imageBaseAttribute)||l,p=g.attr(a.loaderAttribute);g.data(c)||a.visibleOnly&&!g.is(":visible")||!((b||g.attr(f))&&(h===N&&(v+b!==g.attr(E)||g.attr(f)!==g.attr(F))||h!==N&&v+b!==g.css(O))||p)||(u=!0,g.data(c,!0),d(g,h,v,p))}u&&(i=n(i).filter(function(){return!n(this).data(c)}))}function d(t,e,r,i){++z;var o=function(){y("onError",t),p(),o=n.noop};y("beforeLoad",t);var u=a.attribute,l=a.srcsetAttribute,f=a.sizesAttribute,c=a.retinaAttribute,s=a.removeAttribute,d=a.loadedName,A=t.attr(c);if(i){var g=function(){s&&t.removeAttr(a.loaderAttribute),t.data(d,!0),y(T,t),setTimeout(p,1),g=n.noop};t.off(I).one(I,o).one(D,g),y(i,t,function(e){e?(t.off(D),g()):(t.off(I),o())})||t.trigger(I)}else{var h=n(new Image);h.one(I,o).one(D,function(){t.hide(),e===N?t.attr(C,h.attr(C)).attr(F,h.attr(F)).attr(E,h.attr(E)):t.css(O,"url('"+h.attr(E)+"')"),t[a.effect](a.effectTime),s&&(t.removeAttr(u+" "+l+" "+c+" "+a.imageBaseAttribute),f!==C&&t.removeAttr(f)),t.data(d,!0),y(T,t),h.remove(),p()});var m=(L&&A?A:t.attr(u))||"";h.attr(C,t.attr(f)).attr(F,t.attr(l)).attr(E,m?r+m:null),h.complete&&h.trigger(D)}}function A(t){var e=t.getBoundingClientRect(),r=a.scrollDirection,n=a.threshold,i=h()+n>e.top&&-n<e.bottom,o=g()+n>e.left&&-n<e.right;return"vertical"===r?i:"horizontal"===r?o:i&&o}function g(){return w>=0?w:w=n(t).width()}function h(){return B>=0?B:B=n(t).height()}function m(t){return t.tagName.toLowerCase()}function b(t,e){if(e){var r=t.split(",");t="";for(var a=0,n=r.length;a<n;a++)t+=e+r[a].trim()+(a!==n-1?",":"")}return t}function v(t,e){var n,i=0;return function(o,u){function l(){i=+new Date,e.call(r,o)}var f=+new Date-i;n&&clearTimeout(n),f>t||!a.enableThrottle||u?l():n=setTimeout(l,t-f)}}function p(){--z,i.length||z||y("onFinishedAll")}function y(t,e,n){return!!(t=a[t])&&(t.apply(r,[].slice.call(arguments,1)),!0)}var z=0,w=-1,B=-1,L=!1,T="afterLoad",D="load",I="error",N="img",E="src",F="srcset",C="sizes",O="background-image";"event"===a.bind||o?f():n(t).on(D+"."+l,f)}function a(a,o){var u=this,l=n.extend({},u.config,o),f={},c=l.name+"-"+ ++i;return u.config=function(t,r){return r===e?l[t]:(l[t]=r,u)},u.addItems=function(t){return f.a&&f.a("string"===n.type(t)?n(t):t),u},u.getItems=function(){return f.g?f.g():{}},u.update=function(t){return f.e&&f.e({},!t),u},u.force=function(t){return f.f&&f.f("string"===n.type(t)?n(t):t),u},u.loadAll=function(){return f.e&&f.e({all:!0},!0),u},u.destroy=function(){return n(l.appendScroll).off("."+c,f.e),n(t).off("."+c),f={},e},r(u,l,a,f,c),l.chainable?a:u}var n=t.jQuery||t.Zepto,i=0,o=!1;n.fn.Lazy=n.fn.lazy=function(t){return new a(this,t)},n.Lazy=n.lazy=function(t,r,i){if(n.isFunction(r)&&(i=r,r=[]),n.isFunction(i)){t=n.isArray(t)?t:[t],r=n.isArray(r)?r:[r];for(var o=a.prototype.config,u=o._f||(o._f={}),l=0,f=t.length;l<f;l++)(o[t[l]]===e||n.isFunction(o[t[l]]))&&(o[t[l]]=i);for(var c=0,s=r.length;c<s;c++)u[r[c]]=t[0]}},a.prototype.config={name:"lazy",chainable:!0,autoDestroy:!0,bind:"load",threshold:500,visibleOnly:!1,appendScroll:t,scrollDirection:"both",imageBase:null,defaultImage:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",placeholder:null,delay:-1,combined:!1,attribute:"data-src",srcsetAttribute:"data-srcset",sizesAttribute:"data-sizes",retinaAttribute:"data-retina",loaderAttribute:"data-loader",imageBaseAttribute:"data-imagebase",removeAttribute:!0,handledName:"handled",loadedName:"loaded",effect:"show",effectTime:0,enableThrottle:!0,throttle:250,beforeLoad:e,afterLoad:e,onError:e,onFinishedAll:e},n(t).on("load",function(){o=!0})}(window);;

/* qf-util: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-includes/js/qf-util.min.js) */
window.wp=window.wp||{},function(a){var b="undefined"==typeof _qfUtilSettings?{}:_qfUtilSettings;wp.template=_.memoize(function(b){var c,d={evaluate:/<#([\s\S]+?)#>/g,interpolate:/\{\{\{([\s\S]+?)\}\}\}/g,escape:/\{\{([^\}]+?)\}\}(?!\})/g,variable:"data"};return function(e){return c=c||_.template(a("#tmpl-"+b).html(),null,d),c(e)}}),wp.ajax={settings:b.ajax||{},post:function(a,b){return wp.ajax.send({data:_.isObject(a)?a:_.extend(b||{},{action:a})})},send:function(b,c){return _.isObject(b)?c=b:(c=c||{},c.data=_.extend(c.data||{},{action:b})),c=_.defaults(c||{},{type:"POST",url:wp.ajax.settings.url,context:this}),a.Deferred(function(b){c.success&&b.done(c.success),c.error&&b.fail(c.error),delete c.success,delete c.error,a.ajax(c).done(function(a){("1"===a||1===a)&&(a={success:!0}),_.isObject(a)&&!_.isUndefined(a.success)?b[a.success?"resolveWith":"rejectWith"](this,[a.data]):b.rejectWith(this,[a])}).fail(function(){b.rejectWith(this,arguments)})}).promise()}}}(jQuery);

function qfjsde(){
	var stack = new Error().stack;
	console.log("PRINTING CALL STACK");
	console.log( stack );
};

/* qf-backbone: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-includes/js/qf-backbone.min.js) */
window.wp=window.wp||{},function(a){wp.Backbone={},wp.Backbone.Subviews=function(a,b){this.view=a,this._views=_.isArray(b)?{"":b}:b||{}},wp.Backbone.Subviews.extend=Backbone.Model.extend,_.extend(wp.Backbone.Subviews.prototype,{all:function(){return _.flatten(this._views)},get:function(a){return a=a||"",this._views[a]},first:function(a){var b=this.get(a);return b&&b.length?b[0]:null},set:function(a,b,c){var d,e;return _.isString(a)||(c=b,b=a,a=""),c=c||{},b=_.isArray(b)?b:[b],d=this.get(a),e=b,d&&(c.add?_.isUndefined(c.at)?e=d.concat(b):(e=d,e.splice.apply(e,[c.at,0].concat(b))):(_.each(e,function(a){a.__detach=!0}),_.each(d,function(a){a.__detach?a.$el.detach():a.remove()}),_.each(e,function(a){delete a.__detach}))),this._views[a]=e,_.each(b,function(b){var c=b.Views||wp.Backbone.Subviews,d=b.views=b.views||new c(b);d.parent=this.view,d.selector=a},this),c.silent||this._attach(a,b,_.extend({ready:this._isReady()},c)),this},add:function(a,b,c){return _.isString(a)||(c=b,b=a,a=""),this.set(a,b,_.extend({add:!0},c))},unset:function(a,b,c){var d;return _.isString(a)||(c=b,b=a,a=""),b=b||[],(d=this.get(a))&&(b=_.isArray(b)?b:[b],this._views[a]=b.length?_.difference(d,b):[]),c&&c.silent||_.invoke(b,"remove"),this},detach:function(){return a(_.pluck(this.all(),"el")).detach(),this},render:function(){var a={ready:this._isReady()};return _.each(this._views,function(b,c){this._attach(c,b,a)},this),this.rendered=!0,this},remove:function(a){return a&&a.silent||(this.parent&&this.parent.views&&this.parent.views.unset(this.selector,this.view,{silent:!0}),delete this.parent,delete this.selector),_.invoke(this.all(),"remove"),this._views=[],this},replace:function(a,b){return a.html(b),this},insert:function(a,b,c){var d,e=c&&c.at;return _.isNumber(e)&&(d=a.children()).length>e?d.eq(e).before(b):a.append(b),this},ready:function(){this.view.trigger("ready"),_.chain(this.all()).map(function(a){return a.views}).flatten().where({attached:!0}).invoke("ready")},_attach:function(a,b,c){var d,e=a?this.view.$(a):this.view.$el;return e.length?(d=_.chain(b).pluck("views").flatten().value(),_.each(d,function(a){a.rendered||(a.view.render(),a.rendered=!0)},this),this[c.add?"insert":"replace"](e,_.pluck(b,"el"),c),_.each(d,function(a){a.attached=!0,c.ready&&a.ready()},this),this):this},_isReady:function(){for(var a=this.view.el;a;){if(a===document.body)return!0;a=a.parentNode}return!1}}),wp.Backbone.View=Backbone.View.extend({Subviews:wp.Backbone.Subviews,constructor:function(){this.views=new this.Subviews(this,this.views),this.on("ready",this.ready,this),Backbone.View.apply(this,arguments)},remove:function(){var a=Backbone.View.prototype.remove.apply(this,arguments);return this.views&&this.views.remove(),a},render:function(){var a;return this.prepare&&(a=this.prepare()),this.views.detach(),this.template&&(a=a||{},this.trigger("prepare",a),this.$el.html(this.template(a))),this.views.render(),this},prepare:function(){return this.options},ready:function(){}})}(jQuery);;

/* media-models: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-includes/js/media-models.min.js) */
/* global _qfMediaModelsL10n:false */
window.wp = window.wp || {};

(function($){
	var Attachment, Attachments, Query, compare, l10n, media;

	/**
	 * wp.media( attributes )
	 *
	 * Handles the default media experience. Automatically creates
	 * and opens a media frame, and returns the result.
	 * Does nothing if the controllers do not exist.
	 *
	 * @param  {object} attributes The properties passed to the main media controller.
	 * @return {object}            A media workflow.
	 */
	media = wp.media = function( attributes ) {
		var MediaFrame = media.view.MediaFrame,
			frame;

		if ( ! MediaFrame )
			return;

		attributes = _.defaults( attributes || {}, {
			frame: 'select'
		});

		if ( 'select' === attributes.frame && MediaFrame.Select )
			frame = new MediaFrame.Select( attributes );
		else if ( 'post' === attributes.frame && MediaFrame.Post )
			frame = new MediaFrame.Post( attributes );

		delete attributes.frame;

		return frame;
	};

	_.extend( media, { model: {}, view: {}, controller: {}, frames: {} });

	// Link any localized strings.
	l10n = media.model.l10n = typeof _qfMediaModelsL10n === 'undefined' ? {} : _qfMediaModelsL10n;

	// Link any settings.
	media.model.settings = l10n.settings || {};
	delete l10n.settings;

	/**
	 * ========================================================================
	 * UTILITIES
	 * ========================================================================
	 */

	/**
	 * A basic comparator.
	 *
	 * @param  {mixed}  a  The primary parameter to compare.
	 * @param  {mixed}  b  The primary parameter to compare.
	 * @param  {string} ac The fallback parameter to compare, a's cid.
	 * @param  {string} bc The fallback parameter to compare, b's cid.
	 * @return {number}    -1: a should come before b.
	 *                      0: a and b are of the same rank.
	 *                      1: b should come before a.
	 */
	compare = function( a, b, ac, bc ) {
		if ( _.isEqual( a, b ) )
			return ac === bc ? 0 : (ac > bc ? -1 : 1);
		else
			return a > b ? -1 : 1;
	};

	_.extend( media, {
		/**
		 * media.template( id )
		 *
		 * Fetches a template by id.
		 * See wp.template() in `qfy-includes/js/qf-util.js`.
		 */
		template: wp.template,

		/**
		 * media.post( [action], [data] )
		 *
		 * Sends a POST request to BitWebcms.
		 * See wp.ajax.post() in `qfy-includes/js/qf-util.js`.
		 */
		post: wp.ajax.post,

		/**
		 * media.ajax( [action], [options] )
		 *
		 * Sends an XHR request to BitWebcms.
		 * See wp.ajax.send() in `qfy-includes/js/qf-util.js`.
		 */
		ajax: wp.ajax.send,

		// Scales a set of dimensions to fit within bounding dimensions.
		fit: function( dimensions ) {
			var width     = dimensions.width,
				height    = dimensions.height,
				maxWidth  = dimensions.maxWidth,
				maxHeight = dimensions.maxHeight,
				constraint;

			// Compare ratios between the two values to determine which
			// max to constrain by. If a max value doesn't exist, then the
			// opposite side is the constraint.
			if ( ! _.isUndefined( maxWidth ) && ! _.isUndefined( maxHeight ) ) {
				constraint = ( width / height > maxWidth / maxHeight ) ? 'width' : 'height';
			} else if ( _.isUndefined( maxHeight ) ) {
				constraint = 'width';
			} else if (  _.isUndefined( maxWidth ) && height > maxHeight ) {
				constraint = 'height';
			}

			// If the value of the constrained side is larger than the max,
			// then scale the values. Otherwise return the originals; they fit.
			if ( 'width' === constraint && width > maxWidth ) {
				return {
					width : maxWidth,
					height: Math.round( maxWidth * height / width )
				};
			} else if ( 'height' === constraint && height > maxHeight ) {
				return {
					width : Math.round( maxHeight * width / height ),
					height: maxHeight
				};
			} else {
				return {
					width : width,
					height: height
				};
			}
		},

		// Truncates a string by injecting an ellipsis into the middle.
		// Useful for filenames.
		truncate: function( string, length, replacement ) {
			length = length || 30;
			replacement = replacement || '&hellip;';

			if ( string.length <= length )
				return string;

			return string.substr( 0, length / 2 ) + replacement + string.substr( -1 * length / 2 );
		}
	});


	/**
	 * ========================================================================
	 * MODELS
	 * ========================================================================
	 */

	/**
	 * wp.media.attachment
	 */
	media.attachment = function( id ) {
		return Attachment.get( id );
	};

	/**
	 * wp.media.model.Attachment
	 */
	Attachment = media.model.Attachment = Backbone.Model.extend({
		sync: function( method, model, options ) {
			// If the attachment does not yet have an `id`, return an instantly
			// rejected promise. Otherwise, all of our requests will fail.
			if ( _.isUndefined( this.id ) )
				return $.Deferred().rejectWith( this ).promise();

			// Overload the `read` request so Attachment.fetch() functions correctly.
			if ( 'read' === method ) {
				options = options || {};
				options.context = this;
				options.data = _.extend( options.data || {}, {
					action: 'get-attachment',
					id: this.id
				});
				return media.ajax( options );

			// Overload the `update` request so properties can be saved.
			} else if ( 'update' === method ) {
				// If we do not have the necessary nonce, fail immeditately.
				if ( ! this.get('nonces') || ! this.get('nonces').update )
					return $.Deferred().rejectWith( this ).promise();

				options = options || {};
				options.context = this;

				// Set the action and ID.
				options.data = _.extend( options.data || {}, {
					action:  'save-attachment',
					id:      this.id,
					nonce:   this.get('nonces').update,
					post_id: media.model.settings.post.id
				});

				// Record the values of the changed attributes.
				if ( model.hasChanged() ) {
					options.data.changes = {};

					_.each( model.changed, function( value, key ) {
						options.data.changes[ key ] = this.get( key );
					}, this );
				}

				return media.ajax( options );

			// Overload the `delete` request so attachments can be removed.
			// This will permanently delete an attachment.
			} else if ( 'delete' === method ) {
				options = options || {};

				if ( ! options.wait )
					this.destroyed = true;

				options.context = this;
				options.data = _.extend( options.data || {}, {
					action:   'delete-post',
					id:       this.id,
					_qfnonce: this.get('nonces')['delete']
				});

				return media.ajax( options ).done( function() {
					this.destroyed = true;
				}).fail( function() {
					this.destroyed = false;
				});

			// Otherwise, fall back to `Backbone.sync()`.
			} else {
				return Backbone.Model.prototype.sync.apply( this, arguments );
			}
		},

		parse: function( resp ) {
			if ( ! resp )
				return resp;

			// Convert date strings into Date objects.
			resp.date = new Date( resp.date );
			resp.modified = new Date( resp.modified );
			return resp;
		},

		saveCompat: function( data, options ) {
			var model = this;

			// If we do not have the necessary nonce, fail immeditately.
			if ( ! this.get('nonces') || ! this.get('nonces').update )
				return $.Deferred().rejectWith( this ).promise();

			return media.post( 'save-attachment-compat', _.defaults({
				id:      this.id,
				nonce:   this.get('nonces').update,
				post_id: media.model.settings.post.id
			}, data ) ).done( function( resp, status, xhr ) {
				model.set( model.parse( resp, xhr ), options );
			});
		}
	}, {
		create: function( attrs ) {
			return Attachments.all.push( attrs );
		},

		get: _.memoize( function( id, attachment ) {
			return Attachments.all.push( attachment || { id: id } );
		})
	});

	/**
	 * wp.media.model.Attachments
	 */
	Attachments = media.model.Attachments = Backbone.Collection.extend({
		model: Attachment,

		initialize: function( models, options ) {
			options = options || {};

			this.props   = new Backbone.Model();
			this.filters = options.filters || {};

			// Bind default `change` events to the `props` model.
			this.props.on( 'change', this._changeFilteredProps, this );

			this.props.on( 'change:order',   this._changeOrder,   this );
			this.props.on( 'change:orderby', this._changeOrderby, this );
			this.props.on( 'change:query',   this._changeQuery,   this );

			// Set the `props` model and fill the default property values.
			this.props.set( _.defaults( options.props || {} ) );

			// Observe another `Attachments` collection if one is provided.
			if ( options.observe )
				this.observe( options.observe );
		},

		// Automatically sort the collection when the order changes.
		_changeOrder: function() {
			if ( this.comparator )
				this.sort();
		},

		// Set the default comparator only when the `orderby` property is set.
		_changeOrderby: function( model, orderby ) {
			// If a different comparator is defined, bail.
			if ( this.comparator && this.comparator !== Attachments.comparator )
				return;

			if ( orderby && 'post__in' !== orderby )
				this.comparator = Attachments.comparator;
			else
				delete this.comparator;
		},

		// If the `query` property is set to true, query the server using
		// the `props` values, and sync the results to this collection.
		_changeQuery: function( model, query ) {
			if ( query ) {
				this.props.on( 'change', this._requery, this );
				this._requery();
			} else {
				this.props.off( 'change', this._requery, this );
			}
		},

		_changeFilteredProps: function( model ) {
			// If this is a query, updating the collection will be handled by
			// `this._requery()`.
			if ( this.props.get('query') )
				return;

			var changed = _.chain( model.changed ).map( function( t, prop ) {
				var filter = Attachments.filters[ prop ],
					term = model.get( prop );

				if ( ! filter )
					return;

				if ( term && ! this.filters[ prop ] )
					this.filters[ prop ] = filter;
				else if ( ! term && this.filters[ prop ] === filter )
					delete this.filters[ prop ];
				else
					return;

				// Record the change.
				return true;
			}, this ).any().value();

			if ( ! changed )
				return;

			// If no `Attachments` model is provided to source the searches
			// from, then automatically generate a source from the existing
			// models.
			if ( ! this._source )
				this._source = new Attachments( this.models );

			this.reset( this._source.filter( this.validator, this ) );
		},

		validateDestroyed: false,

		validator: function( attachment ) {
			if ( ! this.validateDestroyed && attachment.destroyed )
				return false;
			return _.all( this.filters, function( filter ) {
				return !! filter.call( this, attachment );
			}, this );
		},

		validate: function( attachment, options ) {
			var valid = this.validator( attachment ),
				hasAttachment = !! this.get( attachment.cid );

			if ( ! valid && hasAttachment )
				this.remove( attachment, options );
			else if ( valid && ! hasAttachment )
				this.add( attachment, options );

			return this;
		},

		validateAll: function( attachments, options ) {
			options = options || {};

			_.each( attachments.models, function( attachment ) {
				this.validate( attachment, { silent: true });
			}, this );

			if ( ! options.silent )
				this.trigger( 'reset', this, options );

			return this;
		},

		observe: function( attachments ) {
			this.observers = this.observers || [];
			this.observers.push( attachments );

			attachments.on( 'add change remove', this._validateHandler, this );
			attachments.on( 'reset', this._validateAllHandler, this );
			this.validateAll( attachments );
			return this;
		},

		unobserve: function( attachments ) {
			if ( attachments ) {
				attachments.off( null, null, this );
				this.observers = _.without( this.observers, attachments );

			} else {
				_.each( this.observers, function( attachments ) {
					attachments.off( null, null, this );
				}, this );
				delete this.observers;
			}

			return this;
		},

		_validateHandler: function( attachment, attachments, options ) {
			// If we're not mirroring this `attachments` collection,
			// only retain the `silent` option.
			options = attachments === this.mirroring ? options : {
				silent: options && options.silent
			};

			return this.validate( attachment, options );
		},

		_validateAllHandler: function( attachments, options ) {
			return this.validateAll( attachments, options );
		},

		mirror: function( attachments ) {
			if ( this.mirroring && this.mirroring === attachments )
				return this;

			this.unmirror();
			this.mirroring = attachments;

			// Clear the collection silently. A `reset` event will be fired
			// when `observe()` calls `validateAll()`.
			this.reset( [], { silent: true } );
			this.observe( attachments );

			return this;
		},

		unmirror: function() {
			if ( ! this.mirroring )
				return;

			this.unobserve( this.mirroring );
			delete this.mirroring;
		},

		more: function( options ) {
			var deferred = $.Deferred(),
				mirroring = this.mirroring,
				attachments = this;

			if ( ! mirroring || ! mirroring.more )
				return deferred.resolveWith( this ).promise();

			// If we're mirroring another collection, forward `more` to
			// the mirrored collection. Account for a race condition by
			// checking if we're still mirroring that collection when
			// the request resolves.
			mirroring.more( options ).done( function() {
				if ( this === attachments.mirroring )
					deferred.resolveWith( this );
			});

			return deferred.promise();
		},

		hasMore: function() {
			return this.mirroring ? this.mirroring.hasMore() : false;
		},

		parse: function( resp, xhr ) {
			if ( ! _.isArray( resp ) )
				resp = [resp];

			return _.map( resp, function( attrs ) {
				var id, attachment, newAttributes;

				if ( attrs instanceof Backbone.Model ) {
					id = attrs.get( 'id' );
					attrs = attrs.attributes;
				} else {
					id = attrs.id;
				}

				attachment = Attachment.get( id );
				newAttributes = attachment.parse( attrs, xhr );

				if ( ! _.isEqual( attachment.attributes, newAttributes ) )
					attachment.set( newAttributes );

				return attachment;
			});
		},

		_requery: function() {
			if ( this.props.get('query') )
				this.mirror( Query.get( this.props.toJSON() ) );
		},

		// If this collection is sorted by `menuOrder`, recalculates and saves
		// the menu order to the database.
		saveMenuOrder: function() {
			if ( 'menuOrder' !== this.props.get('orderby') )
				return;

			// Removes any uploading attachments, updates each attachment's
			// menu order, and returns an object with an { id: menuOrder }
			// mapping to pass to the request.
			var attachments = this.chain().filter( function( attachment ) {
				return ! _.isUndefined( attachment.id );
			}).map( function( attachment, index ) {
				// Indices start at 1.
				index = index + 1;
				attachment.set( 'menuOrder', index );
				return [ attachment.id, index ];
			}).object().value();

			if ( _.isEmpty( attachments ) )
				return;

			return media.post( 'save-attachment-order', {
				nonce:       media.model.settings.post.nonce,
				post_id:     media.model.settings.post.id,
				attachments: attachments
			});
		}
	}, {
		comparator: function( a, b, options ) {
			var key   = this.props.get('orderby'),
				order = this.props.get('order') || 'DESC',
				ac    = a.cid,
				bc    = b.cid;

			a = a.get( key );
			b = b.get( key );

			if ( 'date' === key || 'modified' === key ) {
				a = a || new Date();
				b = b || new Date();
			}

			// If `options.ties` is set, don't enforce the `cid` tiebreaker.
			if ( options && options.ties )
				ac = bc = null;

			return ( 'DESC' === order ) ? compare( a, b, ac, bc ) : compare( b, a, bc, ac );
		},

		filters: {
			// Note that this client-side searching is *not* equivalent
			// to our server-side searching.
			search: function( attachment ) {
				if ( ! this.props.get('search') )
					return true;

				return _.any(['title','filename','description','caption','name'], function( key ) {
					var value = attachment.get( key );
					return value && -1 !== value.search( this.props.get('search') );
				}, this );
			},

			type: function( attachment ) {
				var type = this.props.get('type');
				return ! type || -1 !== type.indexOf( attachment.get('type') );
			},

			uploadedTo: function( attachment ) {
				var uploadedTo = this.props.get('uploadedTo');
				if ( _.isUndefined( uploadedTo ) )
					return true;

				return uploadedTo === attachment.get('uploadedTo');
			}
		}
	});

	Attachments.all = new Attachments();

	/**
	 * wp.media.query
	 */
	media.query = function( props ) {
		return new Attachments( null, {
			props: _.extend( _.defaults( props || {}, { orderby: 'date' } ), { query: true } )
		});
	};

	/**
	 * wp.media.model.Query
	 *
	 * A set of attachments that corresponds to a set of consecutively paged
	 * queries on the server.
	 *
	 * Note: Do NOT change this.args after the query has been initialized.
	 *       Things will break.
	 */
	var loadingtimeout;
	Query = media.model.Query = Attachments.extend({
		initialize: function( models, options ) {
			var allowed;

			options = options || {};
			Attachments.prototype.initialize.apply( this, arguments );

			this.args     = options.args;
			this._hasMore = true;
			this.created  = new Date();

			this.filters.order = function( attachment ) {
				var orderby = this.props.get('orderby'),
					order = this.props.get('order');

				if ( ! this.comparator )
					return true;

				// We want any items that can be placed before the last
				// item in the set. If we add any items after the last
				// item, then we can't guarantee the set is complete.
				if ( this.length ) {
					return 1 !== this.comparator( attachment, this.last(), { ties: true });

				// Handle the case where there are no items yet and
				// we're sorting for recent items. In that case, we want
				// changes that occurred after we created the query.
				} else if ( 'DESC' === order && ( 'date' === orderby || 'modified' === orderby ) ) {
					return attachment.get( orderby ) >= this.created;

				// If we're sorting by menu order and we have no items,
				// accept any items that have the default menu order (0).
				} else if ( 'ASC' === order && 'menuOrder' === orderby ) {
					return attachment.get( orderby ) === 0;
				}

				// Otherwise, we don't want any items yet.
				return false;
			};

			// Observe the central `wp.Uploader.queue` collection to watch for
			// new matches for the query.
			//
			// Only observe when a limited number of query args are set. There
			// are no filters for other properties, so observing will result in
			// false positives in those queries.
			allowed = [ 's', 'order', 'orderby', 'posts_per_page', 'post_mime_type', 'post_parent' ];
			if ( wp.Uploader && _( this.args ).chain().keys().difference( allowed ).isEmpty().value() )
				this.observe( wp.Uploader.queue );
		},

		hasMore: function() {
			return this._hasMore;
		},

		more: function( options ) {
			var query = this;

			if ( this._more && 'pending' === this._more.state() )
				return this._more;

			if ( ! this.hasMore() )
				return $.Deferred().resolveWith( this ).promise();

			options = options || {};
			options.remove = false;

			return this._more = this.fetch( options ).done( function( resp ) {
				if ( _.isEmpty( resp ) || -1 === this.args.posts_per_page || resp.length < this.args.posts_per_page )
					query._hasMore = false;
			});
		},

		sync: function( method, model, options ) {
			var args, fallback;
			var query = this;
			var retry = false;
			// Overload the read method so Attachment.fetch() functions correctly.

			if('readagain' === method){
				method = 'read';
				retry = true;
			}

			if ( 'read' === method ) {
				
				options = options || {};
				options.context = this;
				options.data = _.extend( options.data || {}, {
					action:  'query-attachments',
					post_id: media.model.settings.post.id
				});
				
				// Clone the args so manipulation is non-destructive.
				args = _.clone( this.args );
				
				// Determine which page to query.
				if ( -1 !== args.posts_per_page ){
					args.paged = Math.ceil( this.length / args.posts_per_page ) + 1;
				}

				
				if(typeof(loaderDiv) == 'undefined'){
					var loaderImage = "http://fast.qifeiye.com/FeiEditor/bitSite/images/preloader.gif";
					loaderDiv = "<div align='center' class='loadingClass' ><img  align='absmiddle' class='loadingClassImg' src='" + loaderImage + "' /></div>";
				}
				
				$(".attachments-browser").append(loaderDiv);
				var h = $(".attachments-browser").height()/2;
				$(".attachments-browser .loadingClass").css("height","100%").css("padding-top",h).css("background","#ccc").css("opacity","0.5");
				$(".attachments-browser .media-sidebar").css("z-index","-1");
				
				if(loadingtimeout)
					clearTimeout(loadingtimeout);
				
				loadingtimeout = setTimeout(function(){

					$(".attachments-browser .loadingClass").remove();
					$(".attachments-browser .media-sidebar").css("z-index","76");
				},6000);
				
				options.data.query = args;

				
				return media.ajax( options ).done( function() {
					if(loadingtimeout){
						clearTimeout(loadingtimeout);
					}
					
					$(".attachments-browser .loadingClass").remove();
					$(".attachments-browser .media-sidebar").css("z-index","76");
				}).fail( function() {
					if(loadingtimeout){
						clearTimeout(loadingtimeout);
					}
					$(".attachments-browser .loadingClass").remove();
					$(".attachments-browser .media-sidebar").css("z-index","76");
					
					if(!retry){
						this.sync( 'readagain', model, options );
					}
				});

			// Otherwise, fall back to Backbone.sync()
			} else {
				$(".attachments-browser .attachments").css("opacity",1);
				fallback = Attachments.prototype.sync ? Attachments.prototype : Backbone;
				return fallback.sync.apply( this, arguments );
			}
		}
	}, {
		defaultProps: {
			orderby: 'date',
			order:   'DESC'
		},

		defaultArgs: {
			posts_per_page: 50
		},

		orderby: {
			allowed:  [ 'name', 'author', 'date', 'title', 'modified', 'uploadedTo', 'id', 'post__in', 'menuOrder' ],
			valuemap: {
				'id':         'ID',
				'uploadedTo': 'parent',
				'menuOrder':  'menu_order ID'
			}
		},

		propmap: {
			'search':    's',
			'type':      'post_mime_type',
			'perPage':   'posts_per_page',
			'menuOrder': 'menu_order',
			'uploadedTo': 'post_parent'
		},

		// Caches query objects so queries can be easily reused.
		get: (function(){
			var queries = [];

			return function( props, options ) {
				var args     = {},
					orderby  = Query.orderby,
					defaults = Query.defaultProps,
					query;

				// Remove the `query` property. This isn't linked to a query,
				// this *is* the query.
				delete props.query;

				// Fill default args.
				_.defaults( props, defaults );

				// Normalize the order.
				props.order = props.order.toUpperCase();
				if ( 'DESC' !== props.order && 'ASC' !== props.order )
					props.order = defaults.order.toUpperCase();

				// Ensure we have a valid orderby value.
				if ( ! _.contains( orderby.allowed, props.orderby ) )
					props.orderby = defaults.orderby;

				// Generate the query `args` object.
				// Correct any differing property names.
				_.each( props, function( value, prop ) {
					if ( _.isNull( value ) )
						return;

					args[ Query.propmap[ prop ] || prop ] = value;
				});

				// Fill any other default query args.
				_.defaults( args, Query.defaultArgs );

				// `props.orderby` does not always map directly to `args.orderby`.
				// Substitute exceptions specified in orderby.keymap.
				args.orderby = orderby.valuemap[ props.orderby ] || props.orderby;

				// Search the query cache for matches.
				query = _.find( queries, function( query ) {
					return _.isEqual( query.args, args );
				});

				// Otherwise, create a new query and add it to the cache.
				if ( ! query ) {
					query = new Query( [], _.extend( options || {}, {
						props: props,
						args:  args
					} ) );

					//queries.push( query );
				}

				return query;
			};
		}())
	});

	/**
	 * wp.media.model.Selection
	 *
	 * Used to manage a selection of attachments in the views.
	 */
	media.model.Selection = Attachments.extend({
		initialize: function( models, options ) {
			Attachments.prototype.initialize.apply( this, arguments );
			this.multiple = options && options.multiple;

			// Refresh the `single` model whenever the selection changes.
			// Binds `single` instead of using the context argument to ensure
			// it receives no parameters.
			this.on( 'add remove reset', _.bind( this.single, this, false ) );
		},

		// Override the selection's add method.
		// If the workflow does not support multiple
		// selected attachments, reset the selection.
		add: function( models, options ) {
			if ( ! this.multiple )
				this.remove( this.models );

			return Attachments.prototype.add.call( this, models, options );
		},

		single: function( model ) {
			var previous = this._single;

			// If a `model` is provided, use it as the single model.
			if ( model )
				this._single = model;

			// If the single model isn't in the selection, remove it.
			if ( this._single && ! this.get( this._single.cid ) )
				delete this._single;

			this._single = this._single || this.last();

			// If single has changed, fire an event.
			if ( this._single !== previous ) {
				if ( previous ) {
					previous.trigger( 'selection:unsingle', previous, this );

					// If the model was already removed, trigger the collection
					// event manually.
					if ( ! this.get( previous.cid ) )
						this.trigger( 'selection:unsingle', previous, this );
				}
				if ( this._single )
					this._single.trigger( 'selection:single', this._single, this );
			}

			// Return the single model, or the last model as a fallback.
			return this._single;
		}
	});

	// Clean up. Prevents mobile browsers caching
	$(window).on('unload', function(){
		window.wp = null;
	});

}(jQuery));;

/* plupload: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-includes/js/plupload/plupload.js) */
/*1.5.7*/
(function(){var f=0,k=[],m={},i={},a={"<":"lt",">":"gt","&":"amp",'"':"quot","'":"#39"},l=/[<>&\"\']/g,b,c=window.setTimeout,d={},e;function h(){this.returnValue=false}function j(){this.cancelBubble=true}(function(n){var o=n.split(/,/),p,r,q;for(p=0;p<o.length;p+=2){q=o[p+1].split(/ /);for(r=0;r<q.length;r++){i[q[r]]=o[p]}}})("application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb,application/vnd.ms-powerpoint,ppt pps pot,application/zip,zip,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/x-javascript,js,application/json,json,audio/mpeg,mpga mpega mp2 mp3,audio/x-wav,wav,audio/mp4,m4a,image/bmp,bmp,image/gif,gif,image/jpeg,jpeg jpg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/plain,asc txt text diff log,text/html,htm html xhtml,text/css,css,text/csv,csv,text/rtf,rtf,video/mpeg,mpeg mpg mpe m2v,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/3gpp,3gp,video/3gpp2,3g2,video/vnd.rn-realvideo,rv,application/vnd.oasis.opendocument.formula-template,otf,application/octet-stream,exe");var g={VERSION:"1.5.7",STOPPED:1,STARTED:2,QUEUED:1,UPLOADING:2,FAILED:4,DONE:5,GENERIC_ERROR:-100,HTTP_ERROR:-200,IO_ERROR:-300,SECURITY_ERROR:-400,INIT_ERROR:-500,FILE_SIZE_ERROR:-600,FILE_EXTENSION_ERROR:-601,IMAGE_FORMAT_ERROR:-700,IMAGE_MEMORY_ERROR:-701,IMAGE_DIMENSIONS_ERROR:-702,mimeTypes:i,ua:(function(){var r=navigator,q=r.userAgent,s=r.vendor,o,n,p;o=/WebKit/.test(q);p=o&&s.indexOf("Apple")!==-1;n=window.opera&&window.opera.buildNumber;return{windows:navigator.platform.indexOf("Win")!==-1,android:/Android/.test(q),ie:!o&&!n&&(/MSIE/gi).test(q)&&(/Explorer/gi).test(r.appName),webkit:o,gecko:!o&&/Gecko/.test(q),safari:p,opera:!!n}}()),typeOf:function(n){return({}).toString.call(n).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()},extend:function(n){g.each(arguments,function(o,p){if(p>0){g.each(o,function(r,q){n[q]=r})}});return n},cleanName:function(n){var o,p;p=[/[\300-\306]/g,"A",/[\340-\346]/g,"a",/\307/g,"C",/\347/g,"c",/[\310-\313]/g,"E",/[\350-\353]/g,"e",/[\314-\317]/g,"I",/[\354-\357]/g,"i",/\321/g,"N",/\361/g,"n",/[\322-\330]/g,"O",/[\362-\370]/g,"o",/[\331-\334]/g,"U",/[\371-\374]/g,"u"];for(o=0;o<p.length;o+=2){n=n.replace(p[o],p[o+1])}n=n.replace(/\s+/g,"_");n=n.replace(/[^a-z0-9_\-\.]+/gi,"");return n},addRuntime:function(n,o){o.name=n;k[n]=o;k.push(o);return o},guid:function(){var n=new Date().getTime().toString(32),o;for(o=0;o<5;o++){n+=Math.floor(Math.random()*65535).toString(32)}return(g.guidPrefix||"p")+n+(f++).toString(32)},buildUrl:function(o,n){var p="";g.each(n,function(r,q){p+=(p?"&":"")+encodeURIComponent(q)+"="+encodeURIComponent(r)});if(p){o+=(o.indexOf("?")>0?"&":"?")+p}return o},each:function(q,r){var p,o,n;if(q){p=q.length;if(p===b){for(o in q){if(q.hasOwnProperty(o)){if(r(q[o],o)===false){return}}}}else{for(n=0;n<p;n++){if(r(q[n],n)===false){return}}}}},formatSize:function(n){if(n===b||/\D/.test(n)){return g.translate("N/A")}if(n>1073741824){return Math.round(n/1073741824,1)+" GB"}if(n>1048576){return Math.round(n/1048576,1)+" MB"}if(n>1024){return Math.round(n/1024,1)+" KB"}return n+" b"},getPos:function(o,s){var t=0,r=0,v,u=document,p,q;o=o;s=s||u.body;function n(B){var z,A,w=0,C=0;if(B){A=B.getBoundingClientRect();z=u.compatMode==="CSS1Compat"?u.documentElement:u.body;w=A.left+z.scrollLeft;C=A.top+z.scrollTop}return{x:w,y:C}}if(o&&o.getBoundingClientRect&&g.ua.ie&&(!u.documentMode||u.documentMode<8)){p=n(o);q=n(s);return{x:p.x-q.x,y:p.y-q.y}}v=o;while(v&&v!=s&&v.nodeType){t+=v.offsetLeft||0;r+=v.offsetTop||0;v=v.offsetParent}v=o.parentNode;while(v&&v!=s&&v.nodeType){t-=v.scrollLeft||0;r-=v.scrollTop||0;v=v.parentNode}return{x:t,y:r}},getSize:function(n){return{w:n.offsetWidth||n.clientWidth,h:n.offsetHeight||n.clientHeight}},parseSize:function(n){var o;if(typeof(n)=="string"){n=/^([0-9]+)([mgk]?)$/.exec(n.toLowerCase().replace(/[^0-9mkg]/g,""));o=n[2];n=+n[1];if(o=="g"){n*=1073741824}if(o=="m"){n*=1048576}if(o=="k"){n*=1024}}return n},xmlEncode:function(n){return n?(""+n).replace(l,function(o){return a[o]?"&"+a[o]+";":o}):n},toArray:function(p){var o,n=[];for(o=0;o<p.length;o++){n[o]=p[o]}return n},inArray:function(p,q){if(q){if(Array.prototype.indexOf){return Array.prototype.indexOf.call(q,p)}for(var n=0,o=q.length;n<o;n++){if(q[n]===p){return n}}}return -1},addI18n:function(n){return g.extend(m,n)},translate:function(n){return m[n]||n},isEmptyObj:function(n){if(n===b){return true}for(var o in n){return false}return true},hasClass:function(p,o){var n;if(p.className==""){return false}n=new RegExp("(^|\\s+)"+o+"(\\s+|$)");return n.test(p.className)},addClass:function(o,n){if(!g.hasClass(o,n)){o.className=o.className==""?n:o.className.replace(/\s+$/,"")+" "+n}},removeClass:function(p,o){var n=new RegExp("(^|\\s+)"+o+"(\\s+|$)");p.className=p.className.replace(n,function(r,q,s){return q===" "&&s===" "?" ":""})},getStyle:function(o,n){if(o.currentStyle){return o.currentStyle[n]}else{if(window.getComputedStyle){return window.getComputedStyle(o,null)[n]}}},addEvent:function(s,n,t){var r,q,p,o;o=arguments[3];n=n.toLowerCase();if(e===b){e="Plupload_"+g.guid()}if(s.addEventListener){r=t;s.addEventListener(n,r,false)}else{if(s.attachEvent){r=function(){var u=window.event;if(!u.target){u.target=u.srcElement}u.preventDefault=h;u.stopPropagation=j;t(u)};s.attachEvent("on"+n,r)}}if(s[e]===b){s[e]=g.guid()}if(!d.hasOwnProperty(s[e])){d[s[e]]={}}q=d[s[e]];if(!q.hasOwnProperty(n)){q[n]=[]}q[n].push({func:r,orig:t,key:o})},removeEvent:function(s,n){var q,t,p;if(typeof(arguments[2])=="function"){t=arguments[2]}else{p=arguments[2]}n=n.toLowerCase();if(s[e]&&d[s[e]]&&d[s[e]][n]){q=d[s[e]][n]}else{return}for(var o=q.length-1;o>=0;o--){if(q[o].key===p||q[o].orig===t){if(s.removeEventListener){s.removeEventListener(n,q[o].func,false)}else{if(s.detachEvent){s.detachEvent("on"+n,q[o].func)}}q[o].orig=null;q[o].func=null;q.splice(o,1);if(t!==b){break}}}if(!q.length){delete d[s[e]][n]}if(g.isEmptyObj(d[s[e]])){delete d[s[e]];try{delete s[e]}catch(r){s[e]=b}}},removeAllEvents:function(o){var n=arguments[1];if(o[e]===b||!o[e]){return}g.each(d[o[e]],function(q,p){g.removeEvent(o,p,n)})}};g.Uploader=function(r){var o={},u,t=[],q,p=false;u=new g.QueueProgress();r=g.extend({chunk_size:0,multipart:true,multi_selection:true,file_data_name:"file",filters:[]},r);function s(){var w,x=0,v;if(this.state==g.STARTED){for(v=0;v<t.length;v++){if(!w&&t[v].status==g.QUEUED){w=t[v];w.status=g.UPLOADING;if(this.trigger("BeforeUpload",w)){this.trigger("UploadFile",w)}}else{x++}}if(x==t.length){this.stop();this.trigger("UploadComplete",t)}}}function n(){var w,v;u.reset();for(w=0;w<t.length;w++){v=t[w];if(v.size!==b){u.size+=v.size;u.loaded+=v.loaded}else{u.size=b}if(v.status==g.DONE){u.uploaded++}else{if(v.status==g.FAILED){u.failed++}else{u.queued++}}}if(u.size===b){u.percent=t.length>0?Math.ceil(u.uploaded/t.length*100):0}else{u.bytesPerSec=Math.ceil(u.loaded/((+new Date()-q||1)/1000));u.percent=u.size>0?Math.ceil(u.loaded/u.size*100):0}}g.extend(this,{state:g.STOPPED,runtime:"",features:{},files:t,settings:r,total:u,id:g.guid(),init:function(){var A=this,B,x,w,z=0,y;if(typeof(r.preinit)=="function"){r.preinit(A)}else{g.each(r.preinit,function(D,C){A.bind(C,D)})}r.page_url=r.page_url||document.location.pathname.replace(/\/[^\/]+$/g,"/");if(!/^(\w+:\/\/|\/)/.test(r.url)){r.url=r.page_url+r.url}r.chunk_size=g.parseSize(r.chunk_size);r.max_file_size=g.parseSize(r.max_file_size);A.bind("FilesAdded",function(C,F){var E,D,H=0,I,G=r.filters;if(G&&G.length){I=[];g.each(G,function(J){g.each(J.extensions.split(/,/),function(K){if(/^\s*\*\s*$/.test(K)){I.push("\\.*")}else{I.push("\\."+K.replace(new RegExp("["+("/^$.*+?|()[]{}\\".replace(/./g,"\\$&"))+"]","g"),"\\$&"))}})});I=new RegExp(I.join("|")+"$","i")}for(E=0;E<F.length;E++){D=F[E];D.loaded=0;D.percent=0;D.status=g.QUEUED;if(I&&!I.test(D.name)){C.trigger("Error",{code:g.FILE_EXTENSION_ERROR,message:g.translate("File extension error."),file:D});continue}if(D.size!==b&&D.size>r.max_file_size){C.trigger("Error",{code:g.FILE_SIZE_ERROR,message:g.translate("File size error."),file:D});continue}t.push(D);H++}if(H){c(function(){A.trigger("QueueChanged");A.refresh()},1)}else{return false}});if(r.unique_names){A.bind("UploadFile",function(C,D){var F=D.name.match(/\.([^.]+)$/),E="tmp";if(F){E=F[1]}D.target_name=D.id+"."+E})}A.bind("UploadProgress",function(C,D){D.percent=D.size>0?Math.ceil(D.loaded/D.size*100):100;n()});A.bind("StateChanged",function(C){if(C.state==g.STARTED){q=(+new Date())}else{if(C.state==g.STOPPED){for(B=C.files.length-1;B>=0;B--){if(C.files[B].status==g.UPLOADING){C.files[B].status=g.QUEUED;n()}}}}});A.bind("QueueChanged",n);A.bind("Error",function(C,D){if(D.file){D.file.status=g.FAILED;n();if(C.state==g.STARTED){c(function(){s.call(A)},1)}}});A.bind("FileUploaded",function(C,D){D.status=g.DONE;D.loaded=D.size;C.trigger("UploadProgress",D);c(function(){s.call(A)},1)});if(r.runtimes){x=[];y=r.runtimes.split(/\s?,\s?/);for(B=0;B<y.length;B++){if(k[y[B]]){x.push(k[y[B]])}}}else{x=k}function v(){var F=x[z++],E,C,D;if(F){E=F.getFeatures();C=A.settings.required_features;if(C){C=C.split(",");for(D=0;D<C.length;D++){if(!E[C[D]]){v();return}}}F.init(A,function(G){if(G&&G.success){A.features=E;A.runtime=F.name;A.trigger("Init",{runtime:F.name});A.trigger("PostInit");A.refresh()}else{v()}})}else{A.trigger("Error",{code:g.INIT_ERROR,message:g.translate("Init error.")})}}v();if(typeof(r.init)=="function"){r.init(A)}else{g.each(r.init,function(D,C){A.bind(C,D)})}},refresh:function(){this.trigger("Refresh")},start:function(){if(t.length&&this.state!=g.STARTED){this.state=g.STARTED;this.trigger("StateChanged");s.call(this)}},stop:function(){if(this.state!=g.STOPPED){this.state=g.STOPPED;this.trigger("CancelUpload");this.trigger("StateChanged")}},disableBrowse:function(){p=arguments[0]!==b?arguments[0]:true;this.trigger("DisableBrowse",p)},getFile:function(w){var v;for(v=t.length-1;v>=0;v--){if(t[v].id===w){return t[v]}}},removeFile:function(w){var v;for(v=t.length-1;v>=0;v--){if(t[v].id===w.id){return this.splice(v,1)[0]}}},splice:function(x,v){var w;w=t.splice(x===b?0:x,v===b?t.length:v);this.trigger("FilesRemoved",w);this.trigger("QueueChanged");return w},trigger:function(w){var y=o[w.toLowerCase()],x,v;if(y){v=Array.prototype.slice.call(arguments);v[0]=this;for(x=0;x<y.length;x++){if(y[x].func.apply(y[x].scope,v)===false){return false}}}return true},hasEventListener:function(v){return !!o[v.toLowerCase()]},bind:function(v,x,w){var y;v=v.toLowerCase();y=o[v]||[];y.push({func:x,scope:w||this});o[v]=y},unbind:function(v){v=v.toLowerCase();var y=o[v],w,x=arguments[1];if(y){if(x!==b){for(w=y.length-1;w>=0;w--){if(y[w].func===x){y.splice(w,1);break}}}else{y=[]}if(!y.length){delete o[v]}}},unbindAll:function(){var v=this;g.each(o,function(x,w){v.unbind(w)})},destroy:function(){this.stop();this.trigger("Destroy");this.unbindAll()}})};g.File=function(q,o,p){var n=this;n.id=q;n.name=o;n.size=p;n.loaded=0;n.percent=0;n.status=0};g.Runtime=function(){this.getFeatures=function(){};this.init=function(n,o){}};g.QueueProgress=function(){var n=this;n.size=0;n.loaded=0;n.uploaded=0;n.failed=0;n.queued=0;n.percent=0;n.bytesPerSec=0;n.reset=function(){n.size=n.loaded=n.uploaded=n.failed=n.queued=n.percent=n.bytesPerSec=0}};g.runtimes={};window.plupload=g})();;

/* plupload-html5: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-includes/js/plupload/plupload.html5.js) */
(function(k,m,l,g){var d={},j;function c(s){var r=s.naturalWidth,u=s.naturalHeight;if(r*u>1024*1024){var t=m.createElement("canvas");t.width=t.height=1;var q=t.getContext("2d");q.drawImage(s,-r+1,0);return q.getImageData(0,0,1,1).data[3]===0}else{return false}}function f(u,r,z){var q=m.createElement("canvas");q.width=1;q.height=z;var A=q.getContext("2d");A.drawImage(u,0,0);var t=A.getImageData(0,0,1,z).data;var x=0;var v=z;var y=z;while(y>x){var s=t[(y-1)*4+3];if(s===0){v=y}else{x=y}y=(v+x)>>1}var w=(y/z);return(w===0)?1:w}function o(K,s,t){var v=K.naturalWidth,z=K.naturalHeight;var E=t.width,B=t.height;var F=s.getContext("2d");F.save();var r=c(K);if(r){v/=2;z/=2}var I=1024;var q=m.createElement("canvas");q.width=q.height=I;var u=q.getContext("2d");var G=f(K,v,z);var A=0;while(A<z){var J=A+I>z?z-A:I;var C=0;while(C<v){var D=C+I>v?v-C:I;u.clearRect(0,0,I,I);u.drawImage(K,-C,-A);var x=(C*E/v)<<0;var y=Math.ceil(D*E/v);var w=(A*B/z/G)<<0;var H=Math.ceil(J*B/z/G);F.drawImage(q,0,0,D,J,x,w,y,H);C+=I}A+=I}F.restore();q=u=null}function p(r,s){var q;if("FileReader" in k){q=new FileReader();q.readAsDataURL(r);q.onload=function(){s(q.result)}}else{return s(r.getAsDataURL())}}function n(r,s){var q;if("FileReader" in k){q=new FileReader();q.readAsBinaryString(r);q.onload=function(){s(q.result)}}else{return s(r.getAsBinary())}}function e(u,s,q,y){var t,r,x,v,w=this;p(d[u.id],function(z){t=m.createElement("canvas");t.style.display="none";m.body.appendChild(t);x=new Image();x.onerror=x.onabort=function(){y({success:false})};x.onload=function(){var F,A,C,B,E;if(!s.width){s.width=x.width}if(!s.height){s.height=x.height}v=Math.min(s.width/x.width,s.height/x.height);if(v<1){F=Math.round(x.width*v);A=Math.round(x.height*v)}else{if(s.quality&&q==="image/jpeg"){F=x.width;A=x.height}else{y({success:false});return}}t.width=F;t.height=A;o(x,t,{width:F,height:A});if(q==="image/jpeg"){B=new h(atob(z.substring(z.indexOf("base64,")+7)));if(B.headers&&B.headers.length){E=new a();if(E.init(B.get("exif")[0])){E.setExif("PixelXDimension",F);E.setExif("PixelYDimension",A);B.set("exif",E.getBinary());if(w.hasEventListener("ExifData")){w.trigger("ExifData",u,E.EXIF())}if(w.hasEventListener("GpsData")){w.trigger("GpsData",u,E.GPS())}}}}if(s.quality&&q==="image/jpeg"){try{z=t.toDataURL(q,s.quality/100)}catch(D){z=t.toDataURL(q)}}else{z=t.toDataURL(q)}z=z.substring(z.indexOf("base64,")+7);z=atob(z);if(B&&B.headers&&B.headers.length){z=B.restore(z);B.purge()}t.parentNode.removeChild(t);y({success:true,data:z})};x.src=z})}l.runtimes.Html5=l.addRuntime("html5",{getFeatures:function(){var v,r,u,t,s,q;r=u=s=q=false;if(k.XMLHttpRequest){v=new XMLHttpRequest();u=!!v.upload;r=!!(v.sendAsBinary||v.upload)}if(r){t=!!(v.sendAsBinary||(k.Uint8Array&&k.ArrayBuffer));s=!!(File&&(File.prototype.getAsDataURL||k.FileReader)&&t);q=!!(File&&(File.prototype.mozSlice||File.prototype.webkitSlice||File.prototype.slice))}j=l.ua.safari&&l.ua.windows;return{html5:r,dragdrop:(function(){var w=m.createElement("div");return("draggable" in w)||("ondragstart" in w&&"ondrop" in w)}()),jpgresize:s,pngresize:s,multipart:s||!!k.FileReader||!!k.FormData,canSendBinary:t,cantSendBlobInFormData:!!(l.ua.gecko&&k.FormData&&k.FileReader&&!FileReader.prototype.readAsArrayBuffer)||l.ua.android,progress:u,chunks:q,multi_selection:!(l.ua.safari&&l.ua.windows),triggerDialog:(l.ua.gecko&&k.FormData||l.ua.webkit)}},init:function(s,u){var q,t;function r(z){var x,w,y=[],A,v={};for(w=0;w<z.length;w++){x=z[w];if(v[x.name]&&l.ua.safari&&l.ua.windows){continue}v[x.name]=true;A=l.guid();d[A]=x;y.push(new l.File(A,x.fileName||x.name,x.fileSize||x.size))}if(y.length){s.trigger("FilesAdded",y)}}q=this.getFeatures();if(!q.html5){u({success:false});return}s.bind("Init",function(A){var J,I,F=[],z,G,w=A.settings.filters,x,E,v=m.body,H;J=m.createElement("div");J.id=A.id+"_html5_container";l.extend(J.style,{position:"absolute",background:s.settings.shim_bgcolor||"transparent",width:"100px",height:"100px",overflow:"hidden",zIndex:99999,opacity:s.settings.shim_bgcolor?"":0});J.className="plupload html5";if(s.settings.container){v=m.getElementById(s.settings.container);if(l.getStyle(v,"position")==="static"){v.style.position="relative"}}v.appendChild(J);no_type_restriction:for(z=0;z<w.length;z++){x=w[z].extensions.split(/,/);for(G=0;G<x.length;G++){if(x[G]==="*"){F=[];break no_type_restriction}E=l.mimeTypes[x[G]];if(E&&l.inArray(E,F)===-1){F.push(E)}}}J.innerHTML='<input id="'+s.id+'_html5"  style="font-size:999px" type="file" accept="'+F.join(",")+'" '+(s.settings.multi_selection&&s.features.multi_selection?'multiple="multiple"':"")+" />";J.scrollTop=100;H=m.getElementById(s.id+"_html5");if(A.features.triggerDialog){l.extend(H.style,{position:"absolute",width:"100%",height:"100%"})}else{l.extend(H.style,{cssFloat:"right",styleFloat:"right"})}H.onchange=function(){r(this.files);this.value=""};I=m.getElementById(A.settings.browse_button);if(I){var C=A.settings.browse_button_hover,D=A.settings.browse_button_active,B=A.features.triggerDialog?I:J;if(C){l.addEvent(B,"mouseover",function(){l.addClass(I,C)},A.id);l.addEvent(B,"mouseout",function(){l.removeClass(I,C)},A.id)}if(D){l.addEvent(B,"mousedown",function(){l.addClass(I,D)},A.id);l.addEvent(m.body,"mouseup",function(){l.removeClass(I,D)},A.id)}if(A.features.triggerDialog){l.addEvent(I,"click",function(K){var y=m.getElementById(A.id+"_html5");if(y&&!y.disabled){y.click()}K.preventDefault()},A.id)}}});s.bind("PostInit",function(){var v=m.getElementById(s.settings.drop_element);if(v){if(j){l.addEvent(v,"dragenter",function(z){var y,w,x;y=m.getElementById(s.id+"_drop");if(!y){y=m.createElement("input");y.setAttribute("type","file");y.setAttribute("id",s.id+"_drop");y.setAttribute("multiple","multiple");l.addEvent(y,"change",function(){r(this.files);l.removeEvent(y,"change",s.id);y.parentNode.removeChild(y)},s.id);l.addEvent(y,"dragover",function(A){A.stopPropagation()},s.id);v.appendChild(y)}w=l.getPos(v,m.getElementById(s.settings.container));x=l.getSize(v);if(l.getStyle(v,"position")==="static"){l.extend(v.style,{position:"relative"})}l.extend(y.style,{position:"absolute",display:"block",top:0,left:0,width:x.w+"px",height:x.h+"px",opacity:0})},s.id);return}l.addEvent(v,"dragover",function(w){w.preventDefault()},s.id);l.addEvent(v,"drop",function(x){var w=x.dataTransfer;if(w&&w.files){r(w.files)}x.preventDefault()},s.id)}});s.bind("Refresh",function(v){var w,x,y,A,z;w=m.getElementById(s.settings.browse_button);if(w){x=l.getPos(w,m.getElementById(v.settings.container));y=l.getSize(w);A=m.getElementById(s.id+"_html5_container");l.extend(A.style,{top:x.y+"px",left:x.x+"px",width:y.w+"px",height:y.h+"px"});if(s.features.triggerDialog){if(l.getStyle(w,"position")==="static"){l.extend(w.style,{position:"relative"})}z=parseInt(l.getStyle(w,"zIndex"),10);if(isNaN(z)){z=0}l.extend(w.style,{zIndex:z});l.extend(A.style,{zIndex:z-1})}}});s.bind("DisableBrowse",function(v,x){var w=m.getElementById(v.id+"_html5");if(w){w.disabled=x}});s.bind("CancelUpload",function(){if(t&&t.abort){t.abort()}});s.bind("UploadFile",function(v,x){var y=v.settings,B,w;function A(D,G,C){var E;if(File.prototype.slice){try{D.slice();return D.slice(G,C)}catch(F){return D.slice(G,C-G)}}else{if(E=File.prototype.webkitSlice||File.prototype.mozSlice){return E.call(D,G,C)}else{return null}}}function z(C){var F=0,E=0;function D(){var L,P,N,O,K,M,H,G=v.settings.url;function J(S){if(t.sendAsBinary){t.sendAsBinary(S)}else{if(v.features.canSendBinary){var Q=new Uint8Array(S.length);for(var R=0;R<S.length;R++){Q[R]=(S.charCodeAt(R)&255)}t.send(Q.buffer)}}}function I(R){var V=0,W="----pluploadboundary"+l.guid(),T,S="--",U="\r\n",Q="";t=new XMLHttpRequest;if(t.upload){t.upload.onprogress=function(X){x.loaded=Math.min(x.size,E+X.loaded-V);v.trigger("UploadProgress",x)}}t.onreadystatechange=function(){var X,Z;if(t.readyState==4&&v.state!==l.STOPPED){try{X=t.status}catch(Y){X=0}if(X>=400){v.trigger("Error",{code:l.HTTP_ERROR,message:l.translate("HTTP Error."),file:x,status:X})}else{if(N){Z={chunk:F,chunks:N,response:t.responseText,status:X};v.trigger("ChunkUploaded",x,Z);E+=M;if(Z.cancelled){x.status=l.FAILED;return}x.loaded=Math.min(x.size,(F+1)*K)}else{x.loaded=x.size}v.trigger("UploadProgress",x);R=L=T=Q=null;if(!N||++F>=N){x.status=l.DONE;v.trigger("FileUploaded",x,{response:t.responseText,status:X})}else{D()}}}};if(v.settings.multipart&&q.multipart){O.name=x.target_name||x.name;t.open("post",G,true);l.each(v.settings.headers,function(Y,X){t.setRequestHeader(X,Y)});if(typeof(R)!=="string"&&!!k.FormData){T=new FormData();l.each(l.extend(O,v.settings.multipart_params),function(Y,X){T.append(X,Y)});T.append(v.settings.file_data_name,R);t.send(T);return}if(typeof(R)==="string"){t.setRequestHeader("Content-Type","multipart/form-data; boundary="+W);l.each(l.extend(O,v.settings.multipart_params),function(Y,X){Q+=S+W+U+'Content-Disposition: form-data; name="'+X+'"'+U+U;Q+=unescape(encodeURIComponent(Y))+U});H=l.mimeTypes[x.name.replace(/^.+\.([^.]+)/,"$1").toLowerCase()]||"application/octet-stream";Q+=S+W+U+'Content-Disposition: form-data; name="'+v.settings.file_data_name+'"; filename="'+unescape(encodeURIComponent(x.name))+'"'+U+"Content-Type: "+H+U+U+R+U+S+W+S+U;V=Q.length-R.length;R=Q;J(R);return}}G=l.buildUrl(v.settings.url,l.extend(O,v.settings.multipart_params));t.open("post",G,true);t.setRequestHeader("Content-Type","application/octet-stream");l.each(v.settings.headers,function(Y,X){t.setRequestHeader(X,Y)});if(typeof(R)==="string"){J(R)}else{t.send(R)}}if(x.status==l.DONE||x.status==l.FAILED||v.state==l.STOPPED){return}O={name:x.target_name||x.name};if(y.chunk_size&&x.size>y.chunk_size&&(q.chunks||typeof(C)=="string")){K=y.chunk_size;N=Math.ceil(x.size/K);M=Math.min(K,x.size-(F*K));if(typeof(C)=="string"){L=C.substring(F*K,F*K+M)}else{L=A(C,F*K,F*K+M)}O.chunk=F;O.chunks=N}else{M=x.size;L=C}if(v.settings.multipart&&q.multipart&&typeof(L)!=="string"&&k.FileReader&&q.cantSendBlobInFormData&&q.chunks&&v.settings.chunk_size){(function(){var Q=new FileReader();Q.onload=function(){I(Q.result);Q=null};Q.readAsBinaryString(L)}())}else{I(L)}}D()}B=d[x.id];if(q.jpgresize&&v.settings.resize&&/\.(png|jpg|jpeg)$/i.test(x.name)){e.call(v,x,v.settings.resize,/\.png$/i.test(x.name)?"image/png":"image/jpeg",function(C){if(C.success){x.size=C.data.length;z(C.data)}else{if(q.chunks){z(B)}else{n(B,z)}}})}else{if(!q.chunks&&q.jpgresize){n(B,z)}else{z(B)}}});s.bind("Destroy",function(v){var x,y,w=m.body,z={inputContainer:v.id+"_html5_container",inputFile:v.id+"_html5",browseButton:v.settings.browse_button,dropElm:v.settings.drop_element};for(x in z){y=m.getElementById(z[x]);if(y){l.removeAllEvents(y,v.id)}}l.removeAllEvents(m.body,v.id);if(v.settings.container){w=m.getElementById(v.settings.container)}w.removeChild(m.getElementById(z.inputContainer))});u({success:true})}});function b(){var t=false,r;function u(w,y){var v=t?0:-8*(y-1),z=0,x;for(x=0;x<y;x++){z|=(r.charCodeAt(w+x)<<Math.abs(v+x*8))}return z}function q(x,v,w){var w=arguments.length===3?w:r.length-v-1;r=r.substr(0,v)+x+r.substr(w+v)}function s(w,x,z){var A="",v=t?0:-8*(z-1),y;for(y=0;y<z;y++){A+=String.fromCharCode((x>>Math.abs(v+y*8))&255)}q(A,w,z)}return{II:function(v){if(v===g){return t}else{t=v}},init:function(v){t=false;r=v},SEGMENT:function(v,x,w){switch(arguments.length){case 1:return r.substr(v,r.length-v-1);case 2:return r.substr(v,x);case 3:q(w,v,x);break;default:return r}},BYTE:function(v){return u(v,1)},SHORT:function(v){return u(v,2)},LONG:function(v,w){if(w===g){return u(v,4)}else{s(v,w,4)}},SLONG:function(v){var w=u(v,4);return(w>2147483647?w-4294967296:w)},STRING:function(v,w){var x="";for(w+=v;v<w;v++){x+=String.fromCharCode(u(v,1))}return x}}}function h(v){var x={65505:{app:"EXIF",name:"APP1",signature:"Exif\0"},65506:{app:"ICC",name:"APP2",signature:"ICC_PROFILE\0"},65517:{app:"IPTC",name:"APP13",signature:"Photoshop 3.0\0"}},w=[],u,q,s=g,t=0,r;u=new b();u.init(v);if(u.SHORT(0)!==65496){return}q=2;r=Math.min(1048576,v.length);while(q<=r){s=u.SHORT(q);if(s>=65488&&s<=65495){q+=2;continue}if(s===65498||s===65497){break}t=u.SHORT(q+2)+2;if(x[s]&&u.STRING(q+4,x[s].signature.length)===x[s].signature){w.push({hex:s,app:x[s].app.toUpperCase(),name:x[s].name.toUpperCase(),start:q,length:t,segment:u.SEGMENT(q,t)})}q+=t}u.init(null);return{headers:w,restore:function(B){u.init(B);var z=new h(B);if(!z.headers){return false}for(var A=z.headers.length;A>0;A--){var C=z.headers[A-1];u.SEGMENT(C.start,C.length,"")}z.purge();q=u.SHORT(2)==65504?4+u.SHORT(4):2;for(var A=0,y=w.length;A<y;A++){u.SEGMENT(q,0,w[A].segment);q+=w[A].length}return u.SEGMENT()},get:function(A){var B=[];for(var z=0,y=w.length;z<y;z++){if(w[z].app===A.toUpperCase()){B.push(w[z].segment)}}return B},set:function(B,A){var C=[];if(typeof(A)==="string"){C.push(A)}else{C=A}for(var z=ii=0,y=w.length;z<y;z++){if(w[z].app===B.toUpperCase()){w[z].segment=C[ii];w[z].length=C[ii].length;ii++}if(ii>=C.length){break}}},purge:function(){w=[];u.init(null)}}}function a(){var t,q,r={},w;t=new b();q={tiff:{274:"Orientation",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer"},exif:{36864:"ExifVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",36867:"DateTimeOriginal",33434:"ExposureTime",33437:"FNumber",34855:"ISOSpeedRatings",37377:"ShutterSpeedValue",37378:"ApertureValue",37383:"MeteringMode",37384:"LightSource",37385:"Flash",41986:"ExposureMode",41987:"WhiteBalance",41990:"SceneCaptureType",41988:"DigitalZoomRatio",41992:"Contrast",41993:"Saturation",41994:"Sharpness"},gps:{0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude"}};w={ColorSpace:{1:"sRGB",0:"Uncalibrated"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{1:"Daylight",2:"Fliorescent",3:"Tungsten",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 -5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire.",1:"Flash fired.",5:"Strobe return light not detected.",7:"Strobe return light detected.",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},ExposureMode:{0:"Auto exposure",1:"Manual exposure",2:"Auto bracket"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},GPSLatitudeRef:{N:"North latitude",S:"South latitude"},GPSLongitudeRef:{E:"East longitude",W:"West longitude"}};function s(x,F){var z=t.SHORT(x),C,I,J,E,D,y,A,G,H=[],B={};for(C=0;C<z;C++){A=y=x+12*C+2;J=F[t.SHORT(A)];if(J===g){continue}E=t.SHORT(A+=2);D=t.LONG(A+=2);A+=4;H=[];switch(E){case 1:case 7:if(D>4){A=t.LONG(A)+r.tiffHeader}for(I=0;I<D;I++){H[I]=t.BYTE(A+I)}break;case 2:if(D>4){A=t.LONG(A)+r.tiffHeader}B[J]=t.STRING(A,D-1);continue;case 3:if(D>2){A=t.LONG(A)+r.tiffHeader}for(I=0;I<D;I++){H[I]=t.SHORT(A+I*2)}break;case 4:if(D>1){A=t.LONG(A)+r.tiffHeader}for(I=0;I<D;I++){H[I]=t.LONG(A+I*4)}break;case 5:A=t.LONG(A)+r.tiffHeader;for(I=0;I<D;I++){H[I]=t.LONG(A+I*4)/t.LONG(A+I*4+4)}break;case 9:A=t.LONG(A)+r.tiffHeader;for(I=0;I<D;I++){H[I]=t.SLONG(A+I*4)}break;case 10:A=t.LONG(A)+r.tiffHeader;for(I=0;I<D;I++){H[I]=t.SLONG(A+I*4)/t.SLONG(A+I*4+4)}break;default:continue}G=(D==1?H[0]:H);if(w.hasOwnProperty(J)&&typeof G!="object"){B[J]=w[J][G]}else{B[J]=G}}return B}function v(){var y=g,x=r.tiffHeader;t.II(t.SHORT(x)==18761);if(t.SHORT(x+=2)!==42){return false}r.IFD0=r.tiffHeader+t.LONG(x+=2);y=s(r.IFD0,q.tiff);r.exifIFD=("ExifIFDPointer" in y?r.tiffHeader+y.ExifIFDPointer:g);r.gpsIFD=("GPSInfoIFDPointer" in y?r.tiffHeader+y.GPSInfoIFDPointer:g);return true}function u(z,x,C){var E,B,A,D=0;if(typeof(x)==="string"){var y=q[z.toLowerCase()];for(hex in y){if(y[hex]===x){x=hex;break}}}E=r[z.toLowerCase()+"IFD"];B=t.SHORT(E);for(i=0;i<B;i++){A=E+12*i+2;if(t.SHORT(A)==x){D=A+8;break}}if(!D){return false}t.LONG(D,C);return true}return{init:function(x){r={tiffHeader:10};if(x===g||!x.length){return false}t.init(x);if(t.SHORT(0)===65505&&t.STRING(4,5).toUpperCase()==="EXIF\0"){return v()}return false},EXIF:function(){var y;y=s(r.exifIFD,q.exif);if(y.ExifVersion&&l.typeOf(y.ExifVersion)==="array"){for(var z=0,x="";z<y.ExifVersion.length;z++){x+=String.fromCharCode(y.ExifVersion[z])}y.ExifVersion=x}return y},GPS:function(){var x;x=s(r.gpsIFD,q.gps);if(x.GPSVersionID){x.GPSVersionID=x.GPSVersionID.join(".")}return x},setExif:function(x,y){if(x!=="PixelXDimension"&&x!=="PixelYDimension"){return false}return u("exif",x,y)},getBinary:function(){return t.SEGMENT()}}}})(window,document,plupload);;

/* plupload-html4: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-includes/js/plupload/plupload.html4.js) */
(function(d,a,b,c){function e(f){return a.getElementById(f)}b.runtimes.Html4=b.addRuntime("html4",{getFeatures:function(){return{multipart:true,triggerDialog:(b.ua.gecko&&d.FormData||b.ua.webkit)}},init:function(f,g){f.bind("Init",function(p){var j=a.body,n,h="javascript",k,x,q,z=[],r=/MSIE/.test(navigator.userAgent),t=[],m=p.settings.filters,o,l,s,w;no_type_restriction:for(o=0;o<m.length;o++){l=m[o].extensions.split(/,/);for(w=0;w<l.length;w++){if(l[w]==="*"){t=[];break no_type_restriction}s=b.mimeTypes[l[w]];if(s&&b.inArray(s,t)===-1){t.push(s)}}}t=t.join(",");function v(){var B,y,i,A;q=b.guid();z.push(q);B=a.createElement("form");B.setAttribute("id","form_"+q);B.setAttribute("method","post");B.setAttribute("enctype","multipart/form-data");B.setAttribute("encoding","multipart/form-data");B.setAttribute("target",p.id+"_iframe");B.style.position="absolute";y=a.createElement("input");y.setAttribute("id","input_"+q);y.setAttribute("type","file");y.setAttribute("accept",t);y.setAttribute("size",1);A=e(p.settings.browse_button);if(p.features.triggerDialog&&A){b.addEvent(e(p.settings.browse_button),"click",function(C){if(!y.disabled){y.click()}C.preventDefault()},p.id)}b.extend(y.style,{width:"100%",height:"100%",opacity:0,fontSize:"99px",cursor:"pointer"});b.extend(B.style,{overflow:"hidden"});i=p.settings.shim_bgcolor;if(i){B.style.background=i}if(r){b.extend(y.style,{filter:"alpha(opacity=0)"})}b.addEvent(y,"change",function(F){var D=F.target,C,E=[],G;if(D.value){e("form_"+q).style.top=-1048575+"px";C=D.value.replace(/\\/g,"/");C=C.substring(C.length,C.lastIndexOf("/")+1);E.push(new b.File(q,C));if(!p.features.triggerDialog){b.removeAllEvents(B,p.id)}else{b.removeEvent(A,"click",p.id)}b.removeEvent(y,"change",p.id);v();if(E.length){f.trigger("FilesAdded",E)}}},p.id);B.appendChild(y);j.appendChild(B);p.refresh()}function u(){var i=a.createElement("div");i.innerHTML='<iframe id="'+p.id+'_iframe" name="'+p.id+'_iframe" src="'+h+':&quot;&quot;" style="display:none"></iframe>';n=i.firstChild;j.appendChild(n);b.addEvent(n,"load",function(C){var D=C.target,B,y;if(!k){return}try{B=D.contentWindow.document||D.contentDocument||d.frames[D.id].document}catch(A){p.trigger("Error",{code:b.SECURITY_ERROR,message:b.translate("Security error."),file:k});return}y=B.documentElement.innerText||B.documentElement.textContent;if(y){k.status=b.DONE;k.loaded=1025;k.percent=100;p.trigger("UploadProgress",k);p.trigger("FileUploaded",k,{response:y})}},p.id)}if(p.settings.container){j=e(p.settings.container);if(b.getStyle(j,"position")==="static"){j.style.position="relative"}}p.bind("UploadFile",function(i,A){var B,y;if(A.status==b.DONE||A.status==b.FAILED||i.state==b.STOPPED){return}B=e("form_"+A.id);y=e("input_"+A.id);y.setAttribute("name",i.settings.file_data_name);B.setAttribute("action",i.settings.url);b.each(b.extend({name:A.target_name||A.name},i.settings.multipart_params),function(E,C){var D=a.createElement("input");b.extend(D,{type:"hidden",name:C,value:E});B.insertBefore(D,B.firstChild)});k=A;e("form_"+q).style.top=-1048575+"px";B.submit()});p.bind("FileUploaded",function(i){i.refresh()});p.bind("StateChanged",function(i){if(i.state==b.STARTED){u()}else{if(i.state==b.STOPPED){d.setTimeout(function(){b.removeEvent(n,"load",i.id);if(n.parentNode){n.parentNode.removeChild(n)}},0)}}b.each(i.files,function(A,y){if(A.status===b.DONE||A.status===b.FAILED){var B=e("form_"+A.id);if(B){B.parentNode.removeChild(B)}}})});p.bind("Refresh",function(y){var F,A,B,C,i,G,H,E,D;F=e(y.settings.browse_button);if(F){i=b.getPos(F,e(y.settings.container));G=b.getSize(F);H=e("form_"+q);E=e("input_"+q);b.extend(H.style,{top:i.y+"px",left:i.x+"px",width:G.w+"px",height:G.h+"px"});if(y.features.triggerDialog){if(b.getStyle(F,"position")==="static"){b.extend(F.style,{position:"relative"})}D=parseInt(F.style.zIndex,10);if(isNaN(D)){D=0}b.extend(F.style,{zIndex:D});b.extend(H.style,{zIndex:D-1})}B=y.settings.browse_button_hover;C=y.settings.browse_button_active;A=y.features.triggerDialog?F:H;if(B){b.addEvent(A,"mouseover",function(){b.addClass(F,B)},y.id);b.addEvent(A,"mouseout",function(){b.removeClass(F,B)},y.id)}if(C){b.addEvent(A,"mousedown",function(){b.addClass(F,C)},y.id);b.addEvent(a.body,"mouseup",function(){b.removeClass(F,C)},y.id)}}});f.bind("FilesRemoved",function(y,B){var A,C;for(A=0;A<B.length;A++){C=e("form_"+B[A].id);if(C){C.parentNode.removeChild(C)}}});f.bind("DisableBrowse",function(i,A){var y=a.getElementById("input_"+q);if(y){y.disabled=A}});f.bind("Destroy",function(i){var y,A,B,C={inputContainer:"form_"+q,inputFile:"input_"+q,browseButton:i.settings.browse_button};for(y in C){A=e(C[y]);if(A){b.removeAllEvents(A,i.id)}}b.removeAllEvents(a.body,i.id);b.each(z,function(E,D){B=e("form_"+E);if(B){B.parentNode.removeChild(B)}})});v()});g({success:true})}})})(window,document,plupload);;

/* json2: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-includes/js/json2.min.js) */
var JSON;JSON||(JSON={}),function(){"use strict";function f(a){return 10>a?"0"+a:a}function quote(a){return escapable.lastIndex=0,escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return"string"==typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function str(a,b){var c,d,e,f,g,h=gap,i=b[a];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(a)),"function"==typeof rep&&(i=rep.call(b,a,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,g=[],"[object Array]"===Object.prototype.toString.apply(i)){for(f=i.length,c=0;f>c;c+=1)g[c]=str(c,i)||"null";return e=0===g.length?"[]":gap?"[\n"+gap+g.join(",\n"+gap)+"\n"+h+"]":"["+g.join(",")+"]",gap=h,e}if(rep&&"object"==typeof rep)for(f=rep.length,c=0;f>c;c+=1)"string"==typeof rep[c]&&(d=rep[c],e=str(d,i),e&&g.push(quote(d)+(gap?": ":":")+e));else for(d in i)Object.prototype.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&g.push(quote(d)+(gap?": ":":")+e));return e=0===g.length?"{}":gap?"{\n"+gap+g.join(",\n"+gap)+"\n"+h+"}":"{"+g.join(",")+"}",gap=h,e}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(a,b,c){var d;if(gap="",indent="","number"==typeof c)for(d=0;c>d;d+=1)indent+=" ";else"string"==typeof c&&(indent=c);if(rep=b,b&&"function"!=typeof b&&("object"!=typeof b||"number"!=typeof b.length))throw new Error("JSON.stringify");return str("",{"":a})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&"object"==typeof e)for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&(d=walk(e,c),void 0!==d?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();;

/* qf-plupload: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-includes/js/plupload/qf-plupload.min.js) */
/* global pluploadL10n, plupload, _qfPluploadSettings */

window.wp = window.wp || {};

(function( exports, $ ) {
	var Uploader;

	if ( typeof _qfPluploadSettings === 'undefined' )
		return;
	/**
	 * An object that helps create a BitWebcms uploader using plupload.
	 *
	 * @param options - object - The options passed to the new plupload instance.
	 *    Accepts the following parameters:
	 *    - container - The id of uploader container.
	 *    - browser   - The id of button to trigger the file select.
	 *    - dropzone  - The id of file drop target.
	 *    - plupload  - An object of parameters to pass to the plupload instance.
	 *    - params    - An object of parameters to pass to $_POST when uploading the file.
	 *                  Extends this.plupload.multipart_params under the hood.
	 *
	 * @param attributes - object - Attributes and methods for this specific instance.
	 */
	Uploader = function( options ) {
		var self = this,
			elements = {
				container: 'container',
				browser:   'browse_button',
				dropzone:  'drop_element'
			},
			key, error;

		this.supports = {
			upload: Uploader.browser.supported
		};

		this.supported = this.supports.upload;

		if ( ! this.supported )
			return;

		// Use deep extend to ensure that multipart_params and other objects are cloned.
		this.plupload = $.extend( true, { multipart_params: {} }, Uploader.defaults );
		this.container = document.body; // Set default container.

		// Extend the instance with options
		//
		// Use deep extend to allow options.plupload to override individual
		// default plupload keys.
		$.extend( true, this, options );

		// Proxy all methods so this always refers to the current instance.
		for ( key in this ) {
			if ( $.isFunction( this[ key ] ) )
				this[ key ] = $.proxy( this[ key ], this );
		}

		// Ensure all elements are jQuery elements and have id attributes
		// Then set the proper plupload arguments to the ids.
		for ( key in elements ) {
			if ( ! this[ key ] )
				continue;

			this[ key ] = $( this[ key ] ).first();

			if ( ! this[ key ].length ) {
				delete this[ key ];
				continue;
			}

			if ( ! this[ key ].prop('id') )
				this[ key ].prop( 'id', '__qf-uploader-id-' + Uploader.uuid++ );
			this.plupload[ elements[ key ] ] = this[ key ].prop('id');
		}

		// If the uploader has neither a browse button nor a dropzone, bail.
		if ( ! ( this.browser && this.browser.length ) && ! ( this.dropzone && this.dropzone.length ) )
			return;

		this.uploader = new plupload.Uploader( this.plupload );
		delete this.plupload;

		// Set default params and remove this.params alias.
		this.param( this.params || {} );
		delete this.params;

		error = function( message, data, file ) {
			if ( file.attachment )
				file.attachment.destroy();

			Uploader.errors.unshift({
				message: message || pluploadL10n.default_error,
				data:    data,
				file:    file
			});

			self.error( message, data, file );
		};

		this.uploader.init();

		this.supports.dragdrop = this.uploader.features.dragdrop && ! Uploader.browser.mobile;

		// Generate drag/drop helper classes.
		(function( dropzone, supported ) {
			var timer, active;

			if ( ! dropzone )
				return;

			dropzone.toggleClass( 'supports-drag-drop', !! supported );
			
			if ( ! supported )
				return dropzone.unbind('.qf-uploader');

			// 'dragenter' doesn't fire correctly,
			// simulate it with a limited 'dragover'
			dropzone.bind( 'dragover.qf-uploader', function(){
				if ( timer )
					clearTimeout( timer );

				if ( active )
					return;

				dropzone.trigger('dropzone:enter').addClass('drag-over');
				active = true;
			});

			dropzone.bind('dragleave.qf-uploader, drop.qf-uploader', function(){
				// Using an instant timer prevents the drag-over class from
				// being quickly removed and re-added when elements inside the
				// dropzone are repositioned.
				//
				// See http://core.trac.bitwebcms.org/ticket/21705
				timer = setTimeout( function() {
					active = false;
					dropzone.trigger('dropzone:leave').removeClass('drag-over');
				}, 0 );
			});
		}( this.dropzone, this.supports.dragdrop ));

		if ( this.browser ) {
			this.browser.on( 'mouseenter', this.refresh );
		} else {
			this.uploader.disableBrowse( true );
			// If HTML5 mode, hide the auto-created file container.
			$('#' + this.uploader.id + '_html5_container').hide();
		}

		this.uploader.bind( 'FilesAdded', function( up, files ) {
			var v= jQuery(".media-frame-content [name='media-image-category']:visible").val();
			if(!v || v<=0){
				v= jQuery(".media-frame-content .attachment-filters:visible").val();
			}
			if(v>0){
				this.settings.multipart_params.image_category = v;
			}else{
				this.settings.multipart_params.image_category = 0;
			}
			
			_.each( files, function( file ) {
				var attributes, image;

				// Ignore failed uploads.
				if ( plupload.FAILED === file.status )
					return;

				// Generate attributes for a new `Attachment` model.
				attributes = _.extend({
					file:      file,
					uploading: true,
					date:      new Date(),
					filename:  file.name,
					menuOrder: 0,
					uploadedTo: wp.media.model.settings.post.id
				}, _.pick( file, 'loaded', 'size', 'percent' ) );

				// Handle early mime type scanning for images.
				image = /(?:jpe?g|png|gif)$/i.exec( file.name );

				// Did we find an image?
				if ( image ) {
					attributes.type = 'image';

					// `jpeg`, `png` and `gif` are valid subtypes.
					// `jpg` is not, so map it to `jpeg`.
					attributes.subtype = ( 'jpg' === image[0] ) ? 'jpeg' : image[0];
				}

				// Create the `Attachment`.
				file.attachment = wp.media.model.Attachment.create( attributes );

				Uploader.queue.add( file.attachment );

				self.added( file.attachment );
			});

			up.refresh();
			up.start();
		});

		this.uploader.bind( 'UploadProgress', function( up, file ) {
			file.attachment.set( _.pick( file, 'loaded', 'percent' ) );
			self.progress( file.attachment );
		});

		this.uploader.bind( 'FileUploaded', function( up, file, response ) {
			var complete;

			try {
				response = JSON.parse( response.response );
			} catch ( e ) {
				return error( pluploadL10n.default_error, e, file );
			}

			if ( ! _.isObject( response ) || _.isUndefined( response.success ) )
				return error( pluploadL10n.default_error, null, file );
			else if ( ! response.success )
				return error( response.data && response.data.message, response.data, file );

			_.each(['file','loaded','size','percent'], function( key ) {
				file.attachment.unset( key );
			});

			file.attachment.set( _.extend( response.data, { uploading: false }) );
			wp.media.model.Attachment.get( response.data.id, file.attachment );

			complete = Uploader.queue.all( function( attachment ) {
				return ! attachment.get('uploading');
			});

			if ( complete )
				Uploader.queue.reset();
			var v= jQuery(".media-frame-content .attachment-filters:visible").val();
			if(v>0){
				 jQuery(".media-frame-content .toolbar_refresh:visible").click();
			}
			
			self.success( file.attachment );
		});

		this.uploader.bind( 'Error', function( up, pluploadError ) {
			var message = pluploadL10n.default_error,
				key;

			// Check for plupload errors.
			for ( key in Uploader.errorMap ) {
				if ( pluploadError.code === plupload[ key ] ) {
					message = Uploader.errorMap[ key ];
					if ( _.isFunction( message ) )
						message = message( pluploadError.file, pluploadError );
					break;
				}
			}

			error( message, pluploadError, pluploadError.file );
			up.refresh();
		});

		this.init();
	};

	// Adds the 'defaults' and 'browser' properties.
	$.extend( Uploader, _qfPluploadSettings );

	Uploader.uuid = 0;

	Uploader.errorMap = {
		'FAILED':                 pluploadL10n.upload_failed,
		'FILE_EXTENSION_ERROR':   pluploadL10n.invalid_filetype,
		'IMAGE_FORMAT_ERROR':     pluploadL10n.not_an_image,
		'IMAGE_MEMORY_ERROR':     pluploadL10n.image_memory_exceeded,
		'IMAGE_DIMENSIONS_ERROR': pluploadL10n.image_dimensions_exceeded,
		'GENERIC_ERROR':          pluploadL10n.upload_failed,
		'IO_ERROR':               pluploadL10n.io_error,
		'HTTP_ERROR':             pluploadL10n.http_error,
		'SECURITY_ERROR':         pluploadL10n.security_error,

		'FILE_SIZE_ERROR': function( file ) {
			return pluploadL10n.file_exceeds_size_limit.replace('%s', file.name);
		}
	};

	$.extend( Uploader.prototype, {
		/**
		 * Acts as a shortcut to extending the uploader's multipart_params object.
		 *
		 * param( key )
		 *    Returns the value of the key.
		 *
		 * param( key, value )
		 *    Sets the value of a key.
		 *
		 * param( map )
		 *    Sets values for a map of data.
		 */
		param: function( key, value ) {
			if ( arguments.length === 1 && typeof key === 'string' )
				return this.uploader.settings.multipart_params[ key ];

			if ( arguments.length > 1 ) {
				this.uploader.settings.multipart_params[ key ] = value;
			} else {
				$.extend( this.uploader.settings.multipart_params, key );
			}
		},

		init:     function() {},
		error:    function() {},
		success:  function() {},
		added:    function() {},
		progress: function() {},
		complete: function() {},
		refresh:  function() {
			var node, attached, container, id;

			if ( this.browser ) {
				node = this.browser[0];

				// Check if the browser node is in the DOM.
				while ( node ) {
					if ( node === document.body ) {
						attached = true;
						break;
					}
					node = node.parentNode;
				}

				// If the browser node is not attached to the DOM, use a
				// temporary container to house it, as the browser button
				// shims require the button to exist in the DOM at all times.
				if ( ! attached ) {
					id = 'qf-uploader-browser-' + this.uploader.id;

					container = $( '#' + id );
					if ( ! container.length ) {
						container = $('<div class="qf-uploader-browser" />').css({
							position: 'fixed',
							top: '-1000px',
							left: '-1000px',
							height: 0,
							width: 0
						}).attr( 'id', 'qf-uploader-browser-' + this.uploader.id ).appendTo('body');
					}

					container.append( this.browser );
				}
			}

			this.uploader.refresh();
		}
	});

	Uploader.queue = new wp.media.model.Attachments( [], { query: false });
	Uploader.errors = new Backbone.Collection();

	exports.Uploader = Uploader;
})( wp, jQuery );
;

/* media-views: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-includes/js/media-views.min.js) */
/* global _qfMediaViewsL10n, confirm, getUserSetting, setUserSetting */
(function($){
	var media       = wp.media,
		Attachment  = media.model.Attachment,
		Attachments = media.model.Attachments,
		l10n;
	var media_cate_image =false;
	var media_cate_video =false;
	// Link any localized strings.
	l10n = media.view.l10n = typeof _qfMediaViewsL10n === 'undefined' ? {} : _qfMediaViewsL10n;

	// Link any settings.
	media.view.settings = l10n.settings || {};
	delete l10n.settings;

	// Copy the `post` setting over to the model settings.
	media.model.settings.post = media.view.settings.post;

	// Check if the browser supports CSS 3.0 transitions
	$.support.transition = (function(){
		var style = document.documentElement.style,
			transitions = {
				WebkitTransition: 'webkitTransitionEnd',
				MozTransition:    'transitionend',
				OTransition:      'oTransitionEnd otransitionend',
				transition:       'transitionend'
			}, transition;

		transition = _.find( _.keys( transitions ), function( transition ) {
			return ! _.isUndefined( style[ transition ] );
		});

		return transition && {
			end: transitions[ transition ]
		};
	}());

	// Makes it easier to bind events using transitions.
	media.transition = function( selector, sensitivity ) {
		var deferred = $.Deferred();

		sensitivity = sensitivity || 2000;

		if ( $.support.transition ) {
			if ( ! (selector instanceof $) )
				selector = $( selector );

			// Resolve the deferred when the first element finishes animating.
			selector.first().one( $.support.transition.end, deferred.resolve );

			// Just in case the event doesn't trigger, fire a callback.
			_.delay( deferred.resolve, sensitivity );

		// Otherwise, execute on the spot.
		} else {
			deferred.resolve();
		}

		return deferred.promise();
	};

	/**
	 * ========================================================================
	 * CONTROLLERS
	 * ========================================================================
	 */

	/**
	 * wp.media.controller.Region
	 */
	media.controller.Region = function( options ) {
		_.extend( this, _.pick( options || {}, 'id', 'view', 'selector' ) );
	};

	// Use Backbone's self-propagating `extend` inheritance method.
	media.controller.Region.extend = Backbone.Model.extend;

	_.extend( media.controller.Region.prototype, {
		mode: function( mode ) {
			if ( ! mode )
				return this._mode;

			// Bail if we're trying to change to the current mode.
			if ( mode === this._mode )
				return this;

			this.trigger('deactivate');
			this._mode = mode;
			this.render( mode );
			this.trigger('activate');
			return this;
		},

		render: function( mode ) {
			// If no mode is provided, just re-render the current mode.
			// If the provided mode isn't active, perform a full switch.
			if ( mode && mode !== this._mode )
				return this.mode( mode );

			var set = { view: null },
				view;

			this.trigger( 'create', set );
			view = set.view;
			this.trigger( 'render', view );
			if ( view )
				this.set( view );
			return this;
		},

		get: function() {
			return this.view.views.first( this.selector );
		},

		set: function( views, options ) {
			if ( options )
				options.add = false;
			return this.view.views.set( this.selector, views, options );
		},

		trigger: function( event ) {
			var base, args;

			if ( ! this._mode )
				return;

			args = _.toArray( arguments );
			base = this.id + ':' + event;

			// Trigger `region:action:mode` event.
			args[0] = base + ':' + this._mode;
			this.view.trigger.apply( this.view, args );

			// Trigger `region:action` event.
			args[0] = base;
			this.view.trigger.apply( this.view, args );
			return this;
		}
	});

	/**
	 * wp.media.controller.StateMachine
	 */
	media.controller.StateMachine = function( states ) {
		this.states = new Backbone.Collection( states );
	};

	// Use Backbone's self-propagating `extend` inheritance method.
	media.controller.StateMachine.extend = Backbone.Model.extend;

	// Add events to the `StateMachine`.
	_.extend( media.controller.StateMachine.prototype, Backbone.Events, {

		// Fetch a state.
		//
		// If no `id` is provided, returns the active state.
		//
		// Implicitly creates states.
		state: function( id ) {
			// Ensure that the `states` collection exists so the `StateMachine`
			// can be used as a mixin.
			this.states = this.states || new Backbone.Collection();

			// Default to the active state.
			id = id || this._state;

			if ( id && ! this.states.get( id ) )
				this.states.add({ id: id });
			return this.states.get( id );
		},

		// Sets the active state.
		setState: function( id ) {
			var previous = this.state();

			// Bail if we're trying to select the current state, if we haven't
			// created the `states` collection, or are trying to select a state
			// that does not exist.
			if ( ( previous && id === previous.id ) || ! this.states || ! this.states.get( id ) )
				return this;

			if ( previous ) {
				previous.trigger('deactivate');
				this._lastState = previous.id;
			}

			this._state = id;
			this.state().trigger('activate');

			return this;
		},

		// Returns the previous active state.
		//
		// Call the `state()` method with no parameters to retrieve the current
		// active state.
		lastState: function() {
			if ( this._lastState )
				return this.state( this._lastState );
		}
	});

	// Map methods from the `states` collection to the `StateMachine` itself.
	_.each([ 'on', 'off', 'trigger' ], function( method ) {
		media.controller.StateMachine.prototype[ method ] = function() {
			// Ensure that the `states` collection exists so the `StateMachine`
			// can be used as a mixin.
			this.states = this.states || new Backbone.Collection();
			// Forward the method to the `states` collection.
			this.states[ method ].apply( this.states, arguments );
			return this;
		};
	});


	// wp.media.controller.State
	// ---------------------------
	media.controller.State = Backbone.Model.extend({
		constructor: function() {
			this.on( 'activate', this._preActivate, this );
			this.on( 'activate', this.activate, this );
			this.on( 'activate', this._postActivate, this );
			this.on( 'deactivate', this._deactivate, this );
			this.on( 'deactivate', this.deactivate, this );
			this.on( 'reset', this.reset, this );
			this.on( 'ready', this._ready, this );
			this.on( 'ready', this.ready, this );
			Backbone.Model.apply( this, arguments );
			this.on( 'change:menu', this._updateMenu, this );
		},

		ready: function() {},
		activate: function() {},
		deactivate: function() {},
		reset: function() {},

		_ready: function() {
			this._updateMenu();
		},

		_preActivate: function() {
			this.active = true;
		},

		_postActivate: function() {
			this.on( 'change:menu', this._menu, this );
			this.on( 'change:titleMode', this._title, this );
			this.on( 'change:content', this._content, this );
			this.on( 'change:toolbar', this._toolbar, this );

			this.frame.on( 'title:render:default', this._renderTitle, this );

			this._title();
			this._menu();
			this._toolbar();
			this._content();
			this._router();
		},


		_deactivate: function() {
			this.active = false;

			this.frame.off( 'title:render:default', this._renderTitle, this );

			this.off( 'change:menu', this._menu, this );
			this.off( 'change:titleMode', this._title, this );
			this.off( 'change:content', this._content, this );
			this.off( 'change:toolbar', this._toolbar, this );
		},

		_title: function() {
			this.frame.title.render( this.get('titleMode') || 'default' );
		},

		_renderTitle: function( view ) {
			view.$el.text( this.get('title') || '' );
		},

		_router: function() {
			var router = this.frame.router,
				mode = this.get('router'),
				view;

			this.frame.$el.toggleClass( 'hide-router', ! mode );
			if ( ! mode )
				return;

			this.frame.router.render( mode );

			view = router.get();
			if ( view && view.select )
				view.select( this.frame.content.mode() );
		},

		_menu: function() {
			var menu = this.frame.menu,
				mode = this.get('menu'),
				view;

			if ( ! mode )
				return;

			menu.mode( mode );

			view = menu.get();
			if ( view && view.select )
				view.select( this.id );
		},

		_updateMenu: function() {
			var previous = this.previous('menu'),
				menu = this.get('menu');

			if ( previous )
				this.frame.off( 'menu:render:' + previous, this._renderMenu, this );

			if ( menu )
				this.frame.on( 'menu:render:' + menu, this._renderMenu, this );
		},

		_renderMenu: function( view ) {
			var menuItem = this.get('menuItem'),
				title = this.get('title'),
				priority = this.get('priority');

			if ( ! menuItem && title ) {
				menuItem = { text: title };

				if ( priority )
					menuItem.priority = priority;
			}

			if ( ! menuItem )
				return;

			view.set( this.id, menuItem );
		}
	});

	_.each(['toolbar','content'], function( region ) {
		media.controller.State.prototype[ '_' + region ] = function() {
			var mode = this.get( region );
			if ( mode )
				this.frame[ region ].render( mode );
		};
	});

	// wp.media.controller.Library
	// ---------------------------
	media.controller.Library = media.controller.State.extend({
		defaults: {
			id:         'library',
			multiple:   false, // false, 'add', 'reset'
			describe:   false,
			toolbar:    'select',
			sidebar:    'settings',
			content:    'upload',
			router:     'browse',
			menu:       'default',
			searchable: true,
			filterable: false,
			sortable:   true,
			title:      l10n.mediaLibraryTitle,

			// Uses a user setting to override the content mode.
			contentUserSetting: true,

			// Sync the selection from the last state when 'multiple' matches.
			syncSelection: true
		},

		initialize: function() {
			var selection = this.get('selection'),
				props;

			// If a library isn't provided, query all media items.
			if ( ! this.get('library') )
				this.set( 'library', media.query() );

			// If a selection instance isn't provided, create one.
			if ( ! (selection instanceof media.model.Selection) ) {
				props = selection;

				if ( ! props ) {
					props = this.get('library').props.toJSON();
					props = _.omit( props, 'orderby', 'query' );
				}

				// If the `selection` attribute is set to an object,
				// it will use those values as the selection instance's
				// `props` model. Otherwise, it will copy the library's
				// `props` model.
				this.set( 'selection', new media.model.Selection( null, {
					multiple: this.get('multiple'),
					props: props
				}) );
			}

			if ( ! this.get('edge') )
				this.set( 'edge', 120 );

			if ( ! this.get('gutter') )
				this.set( 'gutter', 8 );

			this.resetDisplays();
		},

		activate: function() {

		
			this.syncSelection();

			wp.Uploader.queue.on( 'add', this.uploading, this );

			this.get('selection').on( 'add remove reset', this.refreshContent, this );

			if ( this.get('contentUserSetting') ) {
				this.frame.on( 'content:activate', this.saveContentMode, this );
				this.set( 'content', getUserSetting( 'libraryContent', this.get('content') ) );
			}
		},

		deactivate: function() {
			this.recordSelection();

			this.frame.off( 'content:activate', this.saveContentMode, this );

			// Unbind all event handlers that use this state as the context
			// from the selection.
			this.get('selection').off( null, null, this );

			wp.Uploader.queue.off( null, null, this );
		},

		reset: function() {
			this.get('selection').reset();
			this.resetDisplays();
			this.refreshContent();
		},

		resetDisplays: function() {
			var defaultProps = media.view.settings.defaultProps;
			this._displays = [];
			this._defaultDisplaySettings = {
				align: defaultProps.align || getUserSetting( 'align', 'none' ),
				size:  defaultProps.size  || getUserSetting( 'imgsize', 'medium' ),
				link:  defaultProps.link  || getUserSetting( 'urlbutton', 'file' )
			};
		},

		display: function( attachment ) {
			var displays = this._displays;

			if ( ! displays[ attachment.cid ] )
				displays[ attachment.cid ] = new Backbone.Model( this.defaultDisplaySettings( attachment ) );

			return displays[ attachment.cid ];
		},

		defaultDisplaySettings: function( attachment ) {
			var settings = this._defaultDisplaySettings;
			if ( settings.canEmbed = this.canEmbed( attachment ) )
				settings.link = 'embed';
			return settings;
		},

		canEmbed: function( attachment ) {
			// If uploading, we know the filename but not the mime type.
			if ( ! attachment.get('uploading') ) {
				var type = attachment.get('type');
				if ( type !== 'audio' && type !== 'video' )
					return false;
			}

			return _.contains( media.view.settings.embedExts, attachment.get('filename').split('.').pop() );
		},

		syncSelection: function() {
			var selection = this.get('selection'),
				manager = this.frame._selection;

			if ( ! this.get('syncSelection') || ! manager || ! selection )
				return;

			// If the selection supports multiple items, validate the stored
			// attachments based on the new selection's conditions. Record
			// the attachments that are not included; we'll maintain a
			// reference to those. Other attachments are considered in flux.
			if ( selection.multiple ) {
				selection.reset( [], { silent: true });
				selection.validateAll( manager.attachments );
				manager.difference = _.difference( manager.attachments.models, selection.models );
			}

			// Sync the selection's single item with the master.
			selection.single( manager.single );
		},

		recordSelection: function() {
			var selection = this.get('selection'),
				manager = this.frame._selection;

			if ( ! this.get('syncSelection') || ! manager || ! selection )
				return;

			// Record the currently active attachments, which is a combination
			// of the selection's attachments and the set of selected
			// attachments that this specific selection considered invalid.
			// Reset the difference and record the single attachment.
			if ( selection.multiple ) {
				manager.attachments.reset( selection.toArray().concat( manager.difference ) );
				manager.difference = [];
			} else {
				manager.attachments.add( selection.toArray() );
			}

			manager.single = selection._single;
		},

		refreshContent: function() {
			var selection = this.get('selection'),
				frame = this.frame,
				router = frame.router.get(),
				mode = frame.content.mode();

			// If the state is active, no items are selected, and the current
			// content mode is not an option in the state's router (provided
			// the state has a router), reset the content mode to the default.
			if ( this.active && ! selection.length && router && ! router.get( mode ) )
				this.frame.content.render( this.get('content') );
		},

		uploading: function( attachment ) {
			var content = this.frame.content;

			// If the uploader was selected, navigate to the browser.
			if ( 'upload' === content.mode() )
				this.frame.content.mode('browse');

			// Automatically select any uploading attachments.
			//
			// Selections that don't support multiple attachments automatically
			// limit themselves to one attachment (in this case, the last
			// attachment in the upload queue).
			this.get('selection').add( attachment );
		},

		saveContentMode: function() {
			// Only track the browse router on library states.
			if ( 'browse' !== this.get('router') )
				return;

			var mode = this.frame.content.mode(),
				view = this.frame.router.get();

			if ( view && view.get( mode ) )
				setUserSetting( 'libraryContent', mode );
		}
	});

	// wp.media.controller.GalleryEdit
	// -------------------------------
	media.controller.GalleryEdit = media.controller.Library.extend({
		defaults: {
			id:         'gallery-edit',
			multiple:   false,
			describe:   true,
			edge:       199,
			editing:    false,
			sortable:   true,
			searchable: false,
			toolbar:    'gallery-edit',
			content:    'browse',
			title:      l10n.editGalleryTitle,
			priority:   60,
			dragInfo:   true,

			// Don't sync the selection, as the Edit Gallery library
			// *is* the selection.
			syncSelection: false
		},

		initialize: function() {
			// If we haven't been provided a `library`, create a `Selection`.
			if ( ! this.get('library') )
				this.set( 'library', new media.model.Selection() );

			// The single `Attachment` view to be used in the `Attachments` view.
			if ( ! this.get('AttachmentView') )
				this.set( 'AttachmentView', media.view.Attachment.EditLibrary );
			media.controller.Library.prototype.initialize.apply( this, arguments );
		},

		activate: function() {
			var library = this.get('library');

			// Limit the library to images only.
			library.props.set( 'type', 'image' );

			// Watch for uploaded attachments.
			this.get('library').observe( wp.Uploader.queue );

			this.frame.on( 'content:render:browse', this.gallerySettings, this );

			media.controller.Library.prototype.activate.apply( this, arguments );
		},

		deactivate: function() {
			// Stop watching for uploaded attachments.
			this.get('library').unobserve( wp.Uploader.queue );

			this.frame.off( 'content:render:browse', this.gallerySettings, this );

			media.controller.Library.prototype.deactivate.apply( this, arguments );
		},

		gallerySettings: function( browser ) {
			var library = this.get('library');

			if ( ! library || ! browser )
				return;

			library.gallery = library.gallery || new Backbone.Model();

			browser.sidebar.set({
				gallery: new media.view.Settings.Gallery({
					controller: this,
					model:      library.gallery,
					priority:   40
				})
			});

			browser.toolbar.set( 'reverse', {
				text:     l10n.reverseOrder,
				priority: 80,

				click: function() {
					library.reset( library.toArray().reverse() );
				}
			});
		}
	});

	// wp.media.controller.GalleryAdd
	// ---------------------------------
	media.controller.GalleryAdd = media.controller.Library.extend({
		defaults: _.defaults({
			id:           'gallery-library',
			filterable:   'uploaded',
			multiple:     'add',
			menu:         'gallery',
			toolbar:      'gallery-add',
			title:        l10n.addToGalleryTitle,
			priority:     100,

			// Don't sync the selection, as the Edit Gallery library
			// *is* the selection.
			syncSelection: false
		}, media.controller.Library.prototype.defaults ),

		initialize: function() {
			// If we haven't been provided a `library`, create a `Selection`.
			if ( ! this.get('library') )
				this.set( 'library', media.query({ type: 'image' }) );

			media.controller.Library.prototype.initialize.apply( this, arguments );
		},

		activate: function() {
			var library = this.get('library'),
				edit    = this.frame.state('gallery-edit').get('library');

			if ( this.editLibrary && this.editLibrary !== edit )
				library.unobserve( this.editLibrary );

			// Accepts attachments that exist in the original library and
			// that do not exist in gallery's library.
			library.validator = function( attachment ) {
				return !! this.mirroring.get( attachment.cid ) && ! edit.get( attachment.cid ) && media.model.Selection.prototype.validator.apply( this, arguments );
			};

			// Reset the library to ensure that all attachments are re-added
			// to the collection. Do so silently, as calling `observe` will
			// trigger the `reset` event.
			library.reset( library.mirroring.models, { silent: true });
			library.observe( edit );
			this.editLibrary = edit;

			media.controller.Library.prototype.activate.apply( this, arguments );
		}
	});

	// wp.media.controller.FeaturedImage
	// ---------------------------------
	media.controller.FeaturedImage = media.controller.Library.extend({
		defaults: _.defaults({
			id:         'featured-image',
			filterable: 'uploaded',
			multiple:   false,
			toolbar:    'featured-image',
			title:      l10n.setFeaturedImageTitle,
			priority:   60,

			syncSelection: false
		}, media.controller.Library.prototype.defaults ),

		initialize: function() {
			var library, comparator;
			// If we haven't been provided a `library`, create a `Selection`.
			if ( ! this.get('library') )
				this.set( 'library', media.query({ type: 'image' }) );

			media.controller.Library.prototype.initialize.apply( this, arguments );

			library    = this.get('library');
			comparator = library.comparator;

			// Overload the library's comparator to push items that are not in
			// the mirrored query to the front of the aggregate collection.
			library.comparator = function( a, b ) {
				var aInQuery = !! this.mirroring.get( a.cid ),
					bInQuery = !! this.mirroring.get( b.cid );

				if ( ! aInQuery && bInQuery )
					return -1;
				else if ( aInQuery && ! bInQuery )
					return 1;
				else
					return comparator.apply( this, arguments );
			};

			// Add all items in the selection to the library, so any featured
			// images that are not initially loaded still appear.
			library.observe( this.get('selection') );
		},

		activate: function() {
			
			//this.updateSelection();
			this.frame.on( 'open', this.updateSelection, this );
			media.controller.Library.prototype.activate.apply( this, arguments );
		},

		deactivate: function() {
			this.frame.off( 'open', this.updateSelection, this );
			media.controller.Library.prototype.deactivate.apply( this, arguments );
		},

		updateSelection: function() {
			var selection = this.get('selection'),
				id = media.view.settings.post.featuredImageId,
				attachment;

			if ( '' !== id && -1 !== id ) {
				attachment = Attachment.get( id );
				attachment.fetch();
			}

			selection.reset( attachment ? [ attachment ] : [] );
		}
	});


	// wp.media.controller.Embed
	// -------------------------
	media.controller.Embed = media.controller.State.extend({
		defaults: {
			id:      'embed',
			url:     '',
			menu:    'default',
			content: 'embed',
			toolbar: 'main-embed',
			type:    'link',

			title:    l10n.insertFromUrlTitle,
			priority: 120
		},

		// The amount of time used when debouncing the scan.
		sensitivity: 200,

		initialize: function() {
			this.debouncedScan = _.debounce( _.bind( this.scan, this ), this.sensitivity );
			this.props = new Backbone.Model({ url: '' });
			this.props.on( 'change:url', this.debouncedScan, this );
			this.props.on( 'change:url', this.refresh, this );
			this.on( 'scan', this.scanImage, this );
		},

		scan: function() {
			var scanners,
				embed = this,
				attributes = {
					type: 'link',
					scanners: []
				};

			// Scan is triggered with the list of `attributes` to set on the
			// state, useful for the 'type' attribute and 'scanners' attribute,
			// an array of promise objects for asynchronous scan operations.
			if ( this.props.get('url') )
				this.trigger( 'scan', attributes );

			if ( attributes.scanners.length ) {
				scanners = attributes.scanners = $.when.apply( $, attributes.scanners );
				scanners.always( function() {
					if ( embed.get('scanners') === scanners )
						embed.set( 'loading', false );
				});
			} else {
				attributes.scanners = null;
			}

			attributes.loading = !! attributes.scanners;
			this.set( attributes );
		},

		scanImage: function( attributes ) {
			var frame = this.frame,
				state = this,
				url = this.props.get('url'),
				image = new Image(),
				deferred = $.Deferred();

			attributes.scanners.push( deferred.promise() );

			// Try to load the image and find its width/height.
			image.onload = function() {
				deferred.resolve();

				if ( state !== frame.state() || url !== state.props.get('url') )
					return;

				state.set({
					type: 'image'
				});

				state.props.set({
					width:  image.width,
					height: image.height
				});
			};

			image.onerror = deferred.reject;
			image.src = url;
		},

		refresh: function() {
			this.frame.toolbar.get().refresh();
		},

		reset: function() {
			this.props.clear().set({ url: '' });

			if ( this.active )
				this.refresh();
		}
	});

	/**
	 * ========================================================================
	 * VIEWS
	 * ========================================================================
	 */

	// wp.media.View
	// -------------
	//
	// The base view class.
	//
	// Undelegating events, removing events from the model, and
	// removing events from the controller mirror the code for
	// `Backbone.View.dispose` in Backbone 0.9.8 development.
	//
	// This behavior has since been removed, and should not be used
	// outside of the media manager.
	media.View = wp.Backbone.View.extend({
		constructor: function( options ) {
			if ( options && options.controller )
				this.controller = options.controller;
			
			wp.Backbone.View.apply( this, arguments );
		},

		dispose: function() {
			// Undelegating events, removing events from the model, and
			// removing events from the controller mirror the code for
			// `Backbone.View.dispose` in Backbone 0.9.8 development.
			this.undelegateEvents();

			if ( this.model && this.model.off )
				this.model.off( null, null, this );

			if ( this.collection && this.collection.off )
				this.collection.off( null, null, this );

			// Unbind controller events.
			if ( this.controller && this.controller.off )
				this.controller.off( null, null, this );

			return this;
		},

		remove: function() {
			this.dispose();
			return wp.Backbone.View.prototype.remove.apply( this, arguments );
		}
	});

	/**
	 * wp.media.view.Frame
	 */
	media.view.Frame = media.View.extend({
		initialize: function() {
			this._createRegions();
			this._createStates();
		},

		_createRegions: function() {
			// Clone the regions array.
			this.regions = this.regions ? this.regions.slice() : [];

			// Initialize regions.
			_.each( this.regions, function( region ) {
				this[ region ] = new media.controller.Region({
					view:     this,
					id:       region,
					selector: '.media-frame-' + region
				});
			}, this );
		},

		_createStates: function() {
			// Create the default `states` collection.
			this.states = new Backbone.Collection( null, {
				model: media.controller.State
			});

			// Ensure states have a reference to the frame.
			this.states.on( 'add', function( model ) {
				model.frame = this;
				model.trigger('ready');
			}, this );

			if ( this.options.states )
				this.states.add( this.options.states );
		},

		reset: function() {
			this.states.invoke( 'trigger', 'reset' );
			return this;
		}
	});

	// Make the `Frame` a `StateMachine`.
	_.extend( media.view.Frame.prototype, media.controller.StateMachine.prototype );

	/**
	 * wp.media.view.MediaFrame
	 */
	media.view.MediaFrame = media.view.Frame.extend({
		className: 'media-frame',
		template:  media.template('media-frame'),
		regions:   ['menu','title','content','toolbar','router'],

		initialize: function() {
			media.view.Frame.prototype.initialize.apply( this, arguments );

			_.defaults( this.options, {
				title:    '',
				modal:    true,
				uploader: true
			});

			// Ensure core UI is enabled.
			this.$el.addClass('qf-core-ui');

			// Initialize modal container view.
			if ( this.options.modal ) {
				this.modal = new media.view.Modal({
					controller: this,
					title:      this.options.title
				});

				this.modal.content( this );
			}

			// Force the uploader off if the upload limit has been exceeded or
			// if the browser isn't supported.
			if ( wp.Uploader.limitExceeded || ! wp.Uploader.browser.supported )
				this.options.uploader = false;
			// Initialize window-wide uploader.
			if ( this.options.uploader ) {
				this.uploader = new media.view.UploaderWindow({
					controller: this,
					uploader: {
						dropzone:  this.modal ? this.modal.$el : this.$el,
						container: this.$el
					}
				});
				this.views.set( '.media-frame-uploader', this.uploader );
			}

			this.on( 'attach', _.bind( this.views.ready, this.views ), this );

			// Bind default title creation.
			this.on( 'title:create:default', this.createTitle, this );
			this.title.mode('default');

			// Bind default menu.
			this.on( 'menu:create:default', this.createMenu, this );
		},

		render: function() {
			// Activate the default state if no active state exists.
			if ( ! this.state() && this.options.state )
				this.setState( this.options.state );

			return media.view.Frame.prototype.render.apply( this, arguments );
		},

		createTitle: function( title ) {
			title.view = new media.View({
				controller: this,
				tagName: 'h1'
			});
		},

		createMenu: function( menu ) {
			menu.view = new media.view.Menu({
				controller: this
			});
		},

		createToolbar: function( toolbar ) {
			toolbar.view = new media.view.Toolbar({
				controller: this
			});
		},

		createRouter: function( router ) {
			router.view = new media.view.Router({
				controller: this
			});
		},

		createIframeStates: function( options ) {
			var settings = media.view.settings,
				tabs = settings.tabs,
				tabUrl = settings.tabUrl,
				$postId;

			if ( ! tabs || ! tabUrl )
				return;

			// Add the post ID to the tab URL if it exists.
			$postId = $('#post_ID');
			if ( $postId.length )
				tabUrl += '&post_id=' + $postId.val();

			// Generate the tab states.
			_.each( tabs, function( title, id ) {
				this.state( 'iframe:' + id ).set( _.defaults({
					tab:     id,
					src:     tabUrl + '&tab=' + id,
					title:   title,
					content: 'iframe',
					menu:    'default'
				}, options ) );
			}, this );

			this.on( 'content:create:iframe', this.iframeContent, this );
			this.on( 'menu:render:default', this.iframeMenu, this );
			this.on( 'open', this.hijackThickbox, this );
			this.on( 'close', this.restoreThickbox, this );
		},

		iframeContent: function( content ) {
			this.$el.addClass('hide-toolbar');
			content.view = new media.view.Iframe({
				controller: this
			});
		},

		iframeMenu: function( view ) {
			var views = {};

			if ( ! view )
				return;

			_.each( media.view.settings.tabs, function( title, id ) {
				views[ 'iframe:' + id ] = {
					text: this.state( 'iframe:' + id ).get('title'),
					priority: 200
				};
			}, this );

			view.set( views );
		},

		hijackThickbox: function() {
			var frame = this;

			if ( ! window.tb_remove || this._tb_remove )
				return;

			this._tb_remove = window.tb_remove;
			window.tb_remove = function() {
				frame.close();
				frame.reset();
				frame.setState( frame.options.state );
				frame._tb_remove.call( window );
			};
		},

		restoreThickbox: function() {
			if ( ! this._tb_remove )
				return;

			window.tb_remove = this._tb_remove;
			delete this._tb_remove;
		}
	});

	// Map some of the modal's methods to the frame.
	_.each(['open','close','attach','detach','escape'], function( method ) {
		media.view.MediaFrame.prototype[ method ] = function() {
			if ( this.modal )
				this.modal[ method ].apply( this.modal, arguments );
			return this;
		};
	});

	/**
	 * wp.media.view.MediaFrame.Select
	 */
	media.view.MediaFrame.Select = media.view.MediaFrame.extend({
		initialize: function() {
			media.view.MediaFrame.prototype.initialize.apply( this, arguments );

			_.defaults( this.options, {
				selection: [],
				library:   {},
				multiple:  false,
				state:    'library'
			});

			this.createSelection();
			this.createStates();
			this.bindHandlers();
		},

		createSelection: function() {
			var selection = this.options.selection;

			if ( ! (selection instanceof media.model.Selection) ) {
				this.options.selection = new media.model.Selection( selection, {
					multiple: this.options.multiple
				});
			}

			this._selection = {
				attachments: new Attachments(),
				difference: []
			};
		},

		createStates: function() {
			var options = this.options;

			if ( this.options.states )
				return;

			// Add the default states.
			this.states.add([
				// Main states.
				new media.controller.Library({
					library:   media.query( options.library ),
					multiple:  options.multiple,
					title:     options.title,
					priority:  20
				})
			]);
		},

		bindHandlers: function() {
		
			this.on( 'router:create:browse', this.createRouter, this );
			this.on( 'router:render:browse', this.browseRouter, this );
			this.on( 'content:create:browse', this.browseContent, this );
			if(this.options.onlylocal!=true){
				this.on( 'content:create:qifeiyelib', this.qifeiyelibContent, this );
				this.on( 'content:create:qifeiyeiconlib', this.qifeiyelibIconContent, this );
				this.on( 'content:create:qifeiyesvglib', this.qifeiyelibSvgContent, this );
				this.on( 'content:create:qifeiyevideolib', this.qifeiyelibVideoContent, this );
			}else if(this.options.qfyvideo==true){
				this.on( 'content:create:qifeiyevideolib', this.qifeiyelibVideoContent, this );
			}

		    this.on( 'content:render:upload', this.uploadContent, this );
		
			this.on( 'toolbar:create:select', this.createSelectToolbar, this );
			
			
		
			
			
		},
		// Routers
		browseRouter: function( view ) {

			if(this.options.onlylocal==true){

					view.set({
						upload: {
							text:     l10n.uploadFilesTitle,
							priority: 20
						},
						browse: {
							text:     l10n.mediaLibraryTitle,
							priority: 40
						}
					});
				
			}else{
				view.set({
					upload: {
						text:     l10n.uploadFilesTitle,
						priority: 20
					},
					browse: {
						text:     l10n.mediaLibraryTitle,
						priority: 40
					},
					qifeiyelib: {
						text:     "免版权图库",
						priority: 60
					},
					qifeiyeiconlib: {
						text:     "免版权图标库",
						priority: 80
					},
					qifeiyesvglib: {
						text:     "免版权矢量库",
						priority: 81
					}
				});
			}
			if(this.options.qfyvideo==true){
				view.set({
					'qifeiyevideolib':  {
						text:     "免版权视频库",
						priority: 82
					}
				});
			}


		},
		// Content
		browseContent: function( content ) {
			var state = this.state();
			this.$el.removeClass('hide-toolbar');
			//0:image 4:video
			var flag = 0;
			$tom = "image-category";
			if(this.options.library.type=="video/mp4"){
				flag = 4;
				$tom = "video-category";
			}else if(this.options.library.type=="video/webm"){
				flag = 5;
				$tom = "video-category";
			}else if(this.options.library.type=="video/yun"){
				flag = 6;
				$tom = "yunvideo-category";
			}else if(this.options.library.type=="audio"){
				flag = 7;
				$tom = "audio-category";
			}else if(this.options.library.type=="text/plain"){
				flag = 8;
				$tom = "text-category";
			}else if(this.options.library.type=="3d"){
				flag = "3d";
			}
			// Browse our library of attachments.
			content.view = new media.view.AttachmentsBrowser({
				controller: this,
				collection: state.get('library'),
				selection:  state.get('selection'),
				model:      state,
				sortable:   state.get('sortable'),
				search:     state.get('searchable'),
				filters:    state.get('filterable'),
				display:    state.get('displaySettings'),
				dragInfo:   state.get('dragInfo'),
				flag:flag,
				AttachmentView: state.get('AttachmentView')
			});

			
			

			


			if(this.options.library.type!="audio" && this.options.library.type!="text/plain"){
				var $this = this;
				setTimeout(function(){
					var filter =  jQuery(".attachment-filters:visible").parent();

					var p =  jQuery(".attachment-filters:visible").closest(".media-modal-content");
					if(filter.length>0 &&filter.find(".toolbar_flgl").length==0){
						filter.append("<div class='toolbar_flgl' style='display: inline-block;position: relative;top: 7px;'><a style='color:#67b3fe;cursor:pointer;'   >添加分类</a></div>");
						filter.append("<div  style='display: inline-block;position: relative;top: 7px;'><a style='color:#67b3fe;cursor:pointer;margin-left:20px;'  href='/admin/edit-tags-bit.php?taxonomy="+$tom+"&post_type=attachment'  target=_blank >后台分类管理</a></div>");
						
						filter.append("<div class='toolbar_refresh' style='display: inline-block;position: relative;top: 7px;margin-left:20px;'><a style='color:#67b3fe;cursor:pointer;' >刷新</a></div>");
						filter.find(".toolbar_refresh").unbind().click(function(){
								content.view.collection.props.set({ignore: (+ new Date())});
						});
						
						filter.find(".toolbar_flgl").unbind().click(function(){
								 top.jConfirmMore("<table border=0 style='width:100%;' ><tr><td style='width:120px;'>分类名称：</td><td><input type='text' name='cate' id='cate' value='' style='border: 1px solid #ccc;width:100%;padding:5px;'/></td></tr></table>",function(){
									var cate = jQuery.trim(top.jQuery("#cate").val());
									if(cate==""){
										top.jAlert("保存失败，输入不能为空!");
										return false;
									}
									var type = content.view.collection.props.get("type");
								
									jQuery.post("/admin/admin-ajax.php",{action:"bit_add_cate","cat_key":$tom,"cat_name":cate},function(id){
										if(id>0){
											if($tom=="image-category"){
												content.view.collection.props.set({"type": type,"image-category": id});
												var len = qfmediacategory.image.term_list.length;
												qfmediacategory.image.term_list[len] = {term_id: id, term_name: cate};
												qfmediacategoryimage.push({term_id: id, term_name: cate});
											}else if($tom=="video-category"){
												content.view.collection.props.set({"type": type,"video-category": id});
												var len = qfmediacategory.video.term_list.length;
												qfmediacategory.video.term_list[len] = {term_id: id, term_name: cate};
												qfmediacategoryvideo.push({term_id: id, term_name: cate});
											}else if($tom=="yunvideo-category"){
												content.view.collection.props.set({"type": type,"yunvideo-category": id});
												var len = qfmediacategory.yunvideo.term_list.length;
												qfmediacategory.yunvideo.term_list[len] = {term_id: id, term_name: cate};
				
											}
											FiltersConstructor = media.view.AttachmentFilters.category;
											content.view.toolbar.set( 'filters', new FiltersConstructor({
												controller: content.view.controller,
												model:      content.view.collection.props,
												priority:   -80
											}).render() );
											
								
											
										}else{
											top.jAlert("添加分类失败");
										}
										
									})
								 
								 },"添加分类","保存","关闭");
							
						});


					}
					
				
				},100);
			}
		},
		backgroundContent: function( content ) {
			var state = this.state();
			this.$el.removeClass('hide-toolbar');
			//this.collection.props.set("type","background");
			// Browse our library of attachments.
			content.view = new media.view.AttachmentsBrowser({
				controller: this,
				collection: state.get('library'),
				selection:  state.get('selection'),
				model:      state,
				sortable:   state.get('sortable'),
				search:     state.get('searchable'),
				filters:    state.get('filterable'),
				display:    state.get('displaySettings'),
				dragInfo:   state.get('dragInfo'),
				flag:1,
				AttachmentView: state.get('AttachmentView')
			});
		},
		qifeiyelibContent: function( content ) {
			
			var state = this.state();
			this.$el.removeClass('hide-toolbar');
			//this.collection.props.set("type","background");
			// Browse our library of attachments.
			content.view = new media.view.AttachmentsBrowser({
				controller: this,
				collection: state.get('library'),
				selection:  state.get('selection'),
				model:      state,
				sortable:   state.get('sortable'),
				search:     state.get('searchable'),
				filters:    state.get('filterable'),
				display:    state.get('displaySettings'),
				dragInfo:   state.get('dragInfo'),
				flag:2,
				AttachmentView: state.get('AttachmentView')
			});
		},
		qifeiyelibIconContent: function( content ) {
			
			var state = this.state();
			this.$el.removeClass('hide-toolbar');
			//this.collection.props.set("type","background");
			// Browse our library of attachments.
			content.view = new media.view.AttachmentsBrowser({
				controller: this,
				collection: state.get('library'),
				selection:  state.get('selection'),
				model:      state,
				sortable:   state.get('sortable'),
				search:     state.get('searchable'),
				filters:    state.get('filterable'),
				display:    state.get('displaySettings'),
				dragInfo:   state.get('dragInfo'),
				flag:3,
				AttachmentView: state.get('AttachmentView')
			});
		},
		qifeiyelibSvgContent: function( content ) {

			var state = this.state();
			this.$el.removeClass('hide-toolbar');
			//this.collection.props.set("type","background");
			// Browse our library of attachments.
			content.view = new media.view.AttachmentsBrowser({
				controller: this,
				collection: state.get('library'),
				selection:  state.get('selection'),
				model:      state,
				sortable:   state.get('sortable'),
				search:     state.get('searchable'),
				filters:    state.get('filterable'),
				display:    state.get('displaySettings'),
				dragInfo:   state.get('dragInfo'),
				flag:9,
				AttachmentView: state.get('AttachmentView')
			});
		},
		qifeiyelibVideoContent: function( content ) {

			var state = this.state();
			this.$el.removeClass('hide-toolbar');
			//this.collection.props.set("type","background");
			// Browse our library of attachments.
			content.view = new media.view.AttachmentsBrowser({
				controller: this,
				collection: state.get('library'),
				selection:  state.get('selection'),
				model:      state,
				sortable:   state.get('sortable'),
				search:     state.get('searchable'),
				filters:    state.get('filterable'),
				display:    state.get('displaySettings'),
				dragInfo:   state.get('dragInfo'),
				flag:10,
				AttachmentView: state.get('AttachmentView')
			});
		},
		uploadContent: function() {
			this.$el.removeClass('hide-toolbar');
			this.content.set( new media.view.UploaderInline({
				controller: this
			}) );
			$tom = "image-category";
			if(this.options.library.type=="video/mp4"){
				$tom = "video-category";
			}else if(this.options.library.type=="video/webm"){
				$tom = "video-category";
			}else if(this.options.library.type=="video/yun"){
				$tom = "yunvideo-category";
			}else if(this.options.library.type=="audio"){
				$tom = "audio-category";
			}
			setTimeout(function(){
				jQuery(".media_cate").hide();
				jQuery(".uploader-inline-video").hide();
				jQuery(".uploader-inline-content").show();
				if($tom=="image-category"){
					if(qfmediacategoryimage){
						jQuery.each(qfmediacategoryimage, function( index, value ) {
							jQuery(".media_cate.image select").append("<option value='"+value.term_id+"'>"+value.term_name+"</option>");
						});
						
					}
					jQuery(".media_cate.image").show();
					if(media_cate_image==false){
						media_cate_image = jQuery(".media_cate.image select").val();
						 jQuery(".media_cate.image select").change(function(){
							 media_cate_image = jQuery(this).val();
						 })
					}else{
						jQuery(".media_cate.image select").val(media_cate_image).change(function(){
							 media_cate_image = jQuery(this).val();
						})
					}
				}else if($tom=="video-category"){
					if(qfmediacategoryvideo){
						jQuery.each(qfmediacategoryvideo, function( index, value ) {
							jQuery(".media_cate.video select").append("<option value='"+qfmediacategoryvideo.term_id+"'>"+qfmediacategoryvideo.term_name+"</option>");
						});
					}


					jQuery(".media_cate.video").show();
					if(media_cate_video==false){
						media_cate_video = jQuery(".media_cate.video select").val();
						 jQuery(".media_cate.video select").change(function(){
							 media_cate_video = jQuery(this).val();
						 })
					}else{
						jQuery(".media_cate.video select").val(media_cate_video).change(function(){
							media_cate_video = jQuery(this).val();
						})
					}
				}else if($tom=="yunvideo-category"){
					jQuery(".uploader-inline-video").show();
					jQuery(".uploader-inline-content").hide();
				}
			},100);
			
		},

		// Toolbars
		createSelectToolbar: function( toolbar, options ) {
			options = options || this.options.button || {};
			options.controller = this;

			toolbar.view = new media.view.Toolbar.Select( options );
		}
	});

	/**
	 * wp.media.view.MediaFrame.Post
	 */
	media.view.MediaFrame.Post = media.view.MediaFrame.Select.extend({
		initialize: function() {
			_.defaults( this.options, {
				multiple:  true,
				editing:   false,
				state:    'insert'
			});

			media.view.MediaFrame.Select.prototype.initialize.apply( this, arguments );
			this.createIframeStates();
		},

		createStates: function() {
			var options = this.options;

			// Add the default states.
			this.states.add([
				// Main states.
				new media.controller.Library({
					id:         'insert',
					title:      l10n.insertMediaTitle,
					priority:   20,
					toolbar:    'main-insert',
					filterable: 'all',
					library:    media.query( options.library ),
					multiple:   options.multiple ? 'reset' : false,
					editable:   true,

					// If the user isn't allowed to edit fields,
					// can they still edit it locally?
					allowLocalEdits: true,

					// Show the attachment display settings.
					displaySettings: true,
					// Update user settings when users adjust the
					// attachment display settings.
					displayUserSettings: true
				}),

				new media.controller.Library({
					id:         'gallery',
					title:      l10n.createGalleryTitle,
					priority:   40,
					toolbar:    'main-gallery',
					filterable: 'uploaded',
					multiple:   'add',
					editable:   false,

					library:  media.query( _.defaults({
						type: 'image'
					}, options.library ) )
				}),

				// Embed states.
				new media.controller.Embed(),

				// Gallery states.
				new media.controller.GalleryEdit({
					library: options.selection,
					editing: options.editing,
					menu:    'gallery'
				}),

				new media.controller.GalleryAdd()
			]);


			if ( media.view.settings.post.featuredImageId ) {
				this.states.add( new media.controller.FeaturedImage() );
			}
		},

		bindHandlers: function() {
			media.view.MediaFrame.Select.prototype.bindHandlers.apply( this, arguments );
			this.on( 'menu:create:gallery', this.createMenu, this );
			this.on( 'toolbar:create:main-insert', this.createToolbar, this );
			this.on( 'toolbar:create:main-gallery', this.createToolbar, this );
			this.on( 'toolbar:create:featured-image', this.featuredImageToolbar, this );
			this.on( 'toolbar:create:main-embed', this.mainEmbedToolbar, this );

			var handlers = {
					menu: {
						'default': 'mainMenu',
						'gallery': 'galleryMenu'
					},

					content: {
						'embed':          'embedContent',
						'edit-selection': 'editSelectionContent'
					},

					toolbar: {
						'main-insert':      'mainInsertToolbar',
						'main-gallery':     'mainGalleryToolbar',
						'gallery-edit':     'galleryEditToolbar',
						'gallery-add':      'galleryAddToolbar'
					}
				};

			_.each( handlers, function( regionHandlers, region ) {
				_.each( regionHandlers, function( callback, handler ) {
					this.on( region + ':render:' + handler, this[ callback ], this );
				}, this );
			}, this );
		},

		// Menus
		mainMenu: function( view ) {
			view.set({
				'library-separator': new media.View({
					className: 'separator',
					priority: 100
				})
			});
		},

		galleryMenu: function( view ) {
			var lastState = this.lastState(),
				previous = lastState && lastState.id,
				frame = this;

			view.set({
				cancel: {
					text:     l10n.cancelGalleryTitle,
					priority: 20,
					click:    function() {
						if ( previous )
							frame.setState( previous );
						else
							frame.close();
					}
				},
				separateCancel: new media.View({
					className: 'separator',
					priority: 40
				})
			});
		},

		// Content
		embedContent: function() {
			var view = new media.view.Embed({
				controller: this,
				model:      this.state()
			}).render();

			this.content.set( view );
			view.url.focus();
		},

		editSelectionContent: function() {
			var state = this.state(),
				selection = state.get('selection'),
				view;

			view = new media.view.AttachmentsBrowser({
				controller: this,
				collection: selection,
				selection:  selection,
				model:      state,
				sortable:   true,
				search:     false,
				dragInfo:   true,

				AttachmentView: media.view.Attachment.EditSelection
			}).render();

			view.toolbar.set( 'backToLibrary', {
				text:     l10n.returnToLibrary,
				priority: -100,

				click: function() {
					this.controller.content.mode('browse');
				}
			});

			// Browse our library of attachments.
			this.content.set( view );
		},

		// Toolbars
		selectionStatusToolbar: function( view ) {
			var editable = this.state().get('editable');

			view.set( 'selection', new media.view.Selection({
				controller: this,
				collection: this.state().get('selection'),
				priority:   -40,

				// If the selection is editable, pass the callback to
				// switch the content mode.
				editable: editable && function() {
					this.controller.content.mode('edit-selection');
				}
			}).render() );
		},

		mainInsertToolbar: function( view ) {
			var controller = this;

			this.selectionStatusToolbar( view );

			view.set( 'insert', {
				style:    'primary',
				priority: 80,
				text:     l10n.insertIntoPost,
				requires: { selection: true },

				click: function() {
					var state = controller.state(),
						selection = state.get('selection');

					controller.close();
					state.trigger( 'insert', selection ).reset();
				}
			});
		},

		mainGalleryToolbar: function( view ) {
			var controller = this;

			this.selectionStatusToolbar( view );

			view.set( 'gallery', {
				style:    'primary',
				text:     l10n.createNewGallery,
				priority: 60,
				requires: { selection: true },

				click: function() {
					var selection = controller.state().get('selection'),
						edit = controller.state('gallery-edit'),
						models = selection.where({ type: 'image' });

					edit.set( 'library', new media.model.Selection( models, {
						props:    selection.props.toJSON(),
						multiple: true
					}) );

					this.controller.setState('gallery-edit');
				}
			});
		},

		featuredImageToolbar: function( toolbar ) {
			this.createSelectToolbar( toolbar, {
				text:  l10n.setFeaturedImage,
				state: this.options.state
			});
		},

		mainEmbedToolbar: function( toolbar ) {
			toolbar.view = new media.view.Toolbar.Embed({
				controller: this
			});
		},

		galleryEditToolbar: function() {
			var editing = this.state().get('editing');
			this.toolbar.set( new media.view.Toolbar({
				controller: this,
				items: {
					insert: {
						style:    'primary',
						text:     editing ? l10n.updateGallery : l10n.insertGallery,
						priority: 80,
						requires: { library: true },

						click: function() {
							var controller = this.controller,
								state = controller.state();

							controller.close();
							state.trigger( 'update', state.get('library') );

							// Restore and reset the default state.
							controller.setState( controller.options.state );
							controller.reset();
						}
					}
				}
			}) );
		},

		galleryAddToolbar: function() {
			this.toolbar.set( new media.view.Toolbar({
				controller: this,
				items: {
					insert: {
						style:    'primary',
						text:     l10n.addToGallery,
						priority: 80,
						requires: { selection: true },

						click: function() {
							var controller = this.controller,
								state = controller.state(),
								edit = controller.state('gallery-edit');

							edit.get('library').add( state.get('selection').models );
							state.trigger('reset');
							controller.setState('gallery-edit');
						}
					}
				}
			}) );
		}
	});

	/**
	 * wp.media.view.Modal
	 */
	media.view.Modal = media.View.extend({
		tagName:  'div',
		template: media.template('media-modal'),

		attributes: {
			tabindex: 0
		},

		events: {
			'click .media-modal-backdrop, .media-modal-close': 'escapeHandler',
			'keydown': 'keydown'
		},

		initialize: function() {
			_.defaults( this.options, {
				container: document.body,
				title:     '',
				propagate: true,
				freeze:    true
			});
		},

		prepare: function() {
			return {
				title: this.options.title
			};
		},

		attach: function() {
			if ( this.views.attached )
				return this;

			if ( ! this.views.rendered )
				this.render();

			this.$el.appendTo( this.options.container );

			// Manually mark the view as attached and trigger ready.
			this.views.attached = true;
			this.views.ready();

			return this.propagate('attach');
		},

		detach: function() {
			if ( this.$el.is(':visible') )
				this.close();

			this.$el.detach();
			this.views.attached = false;
			return this.propagate('detach');
		},

		open: function() {
			top.jQuery("#pagehtmlcontainer").addClass("hidden");
			var $el = this.$el,
				options = this.options;
			
			

			if ( $el.is(':visible') ){
				
				return this;
				
			}
			
			if ( ! this.views.attached )
				this.attach();
			var $uploadUrl = $el.find(".tokenurl").html();
			/*jQuery.get("http://qfy1.com/c.php?t="+$uploadUrl,function(data){
				if(data){
					$el.find(".tokenurl").html(data).show();
				}
			})*/
			if(typeof iframeWin != "undefined"  ){
				if(iframeWin.openImageLibaray=="1"){
					//1:横幅幻灯片
					$(".media-frame-router:visible .media-menu-item:eq(2)").click();
					setTimeout(function(){
						$("select.attachment-filters").val("uploaded0").change();
					},500);
					iframeWin.openImageLibaray = false;
				}
			}

			
			
			// If the `freeze` option is set, record the window's scroll position.
			if ( options.freeze ) {
				this._freeze = {
					scrollTop: $( window ).scrollTop()
				};
			}
			
			$el.show().focus();
		

			return this.propagate('open');
		},

		close: function( options ) {
			top.jQuery("#pagehtmlcontainer").removeClass("hidden");
			var freeze = this._freeze;

			if ( ! this.views.attached || ! this.$el.is(':visible') )
				return this;
			
			this.$el.hide();
			this.propagate('close');

			// If the `freeze` option is set, restore the container's scroll position.
			if ( freeze ) {
				$( window ).scrollTop( freeze.scrollTop );
			}

			if ( options && options.escape )
				this.propagate('escape');
			
			return this;
		},

		escape: function() {
			var rs = this.close({escape:true}); 
			setTimeout(function(){top.jQuery("#site-content").height("80%");},200);
			setTimeout(function(){ top.jQuery("#site-content").height("100%");},500);               
			return rs;
		},

		escapeHandler: function( event ) {
			event.preventDefault();
			this.escape();
		},

		content: function( content ) {
			this.views.set( '.media-modal-content', content );
			return this;
		},

		// Triggers a modal event and if the `propagate` option is set,
		// forwards events to the modal's controller.
		propagate: function( id ) {
			this.trigger( id );

			if ( this.options.propagate )
				this.controller.trigger( id );

			return this;
		},

		keydown: function( event ) {
			// Close the modal when escape is pressed.
			if ( 27 === event.which ) {
				event.preventDefault();
				this.escape();
				return;
			}
		}
	});

	// wp.media.view.FocusManager
	// ----------------------------
	media.view.FocusManager = media.View.extend({
		events: {
			keydown: 'recordTab',
			focusin: 'updateIndex'
		},

		focus: function() {
			if ( _.isUndefined( this.index ) )
				return;

			// Update our collection of `$tabbables`.
			this.$tabbables = this.$(':tabbable');

			// If tab is saved, focus it.
			this.$tabbables.eq( this.index ).focus();
		},

		recordTab: function( event ) {
			// Look for the tab key.
			if ( 9 !== event.keyCode )
				return;

			// First try to update the index.
			if ( _.isUndefined( this.index ) )
				this.updateIndex( event );

			// If we still don't have an index, bail.
			if ( _.isUndefined( this.index ) )
				return;

			var index = this.index + ( event.shiftKey ? -1 : 1 );

			if ( index >= 0 && index < this.$tabbables.length )
				this.index = index;
			else
				delete this.index;
		},

		updateIndex: function( event ) {
			this.$tabbables = this.$(':tabbable');

			var index = this.$tabbables.index( event.target );

			if ( -1 === index )
				delete this.index;
			else
				this.index = index;
		}
	});

	// wp.media.view.UploaderWindow
	// ----------------------------
	media.view.UploaderWindow = media.View.extend({
		tagName:   'div',
		className: 'uploader-window',
		template:  media.template('uploader-window'),

		initialize: function() {
			var uploader;
			this.$browser = $('<a href="#" class="browser" />').hide().appendTo('body');

			uploader = this.options.uploader = _.defaults( this.options.uploader || {}, {
				dropzone:  this.$el,
				browser:   this.$browser,
				params:    {}
			});

			// Ensure the dropzone is a jQuery collection.
			if ( uploader.dropzone && ! (uploader.dropzone instanceof $) )
				uploader.dropzone = $( uploader.dropzone );

			this.controller.on( 'activate', this.refresh, this );
		},

		refresh: function() {
			if ( this.uploader )
				this.uploader.refresh();
		},

		ready: function() {
			var postId = media.view.settings.post.id,
				dropzone;

			// If the uploader already exists, bail.
			if ( this.uploader )
				return;

			if ( postId )
				this.options.uploader.params.post_id = postId;

			this.uploader = new wp.Uploader( this.options.uploader );

			dropzone = this.uploader.dropzone;
			dropzone.on( 'dropzone:enter', _.bind( this.show, this ) );
			dropzone.on( 'dropzone:leave', _.bind( this.hide, this ) );
		},

		show: function() {
			var $el = this.$el.show();

			// Ensure that the animation is triggered by waiting until
			// the transparent element is painted into the DOM.
			_.defer( function() {
				$el.css({ opacity: 1 });
			});
		},

		hide: function() {
			var $el = this.$el.css({ opacity: 0 });

			media.transition( $el ).done( function() {
				// Transition end events are subject to race conditions.
				// Make sure that the value is set as intended.
				if ( '0' === $el.css('opacity') )
					$el.hide();
			});
		}
	});

	media.view.UploaderInline = media.View.extend({
		tagName:   'div',
		className: 'uploader-inline',
		template:  media.template('uploader-inline'),

		initialize: function() {
			_.defaults( this.options, {
				message: '',
				status:  true
			});

			if ( ! this.options.$browser && this.controller.uploader )
				this.options.$browser = this.controller.uploader.$browser;

			if ( _.isUndefined( this.options.postId ) )
				this.options.postId = media.view.settings.post.id;

			if ( this.options.status ) {
				this.views.set( '.upload-inline-status', new media.view.UploaderStatus({
					controller: this.controller
				}) );
			}
		},

		dispose: function() {
			if ( this.disposing )
				return media.View.prototype.dispose.apply( this, arguments );

			// Run remove on `dispose`, so we can be sure to refresh the
			// uploader with a view-less DOM. Track whether we're disposing
			// so we don't trigger an infinite loop.
			this.disposing = true;
			return this.remove();
		},

		remove: function() {
			var result = media.View.prototype.remove.apply( this, arguments );

			_.defer( _.bind( this.refresh, this ) );
			return result;
		},

		refresh: function() {
			var uploader = this.controller.uploader;

			if ( uploader )
				uploader.refresh();
		},

		ready: function() {
			var $browser = this.options.$browser,
				$placeholder;

			if ( this.controller.uploader ) {
				$placeholder = this.$('.browser');

				// Check if we've already replaced the placeholder.
				if ( $placeholder[0] === $browser[0] )
					return;

				$browser.detach().text( $placeholder.text() );
				$browser[0].className = $placeholder[0].className;
				$placeholder.replaceWith( $browser.show() );
			}

			this.refresh();
			return this;
		}
	});

	/**
	 * wp.media.view.UploaderStatus
	 */
	media.view.UploaderStatus = media.View.extend({
		className: 'media-uploader-status',
		template:  media.template('uploader-status'),

		events: {
			'click .upload-dismiss-errors': 'dismiss'
		},

		initialize: function() {
			this.queue = wp.Uploader.queue;
			this.queue.on( 'add remove reset', this.visibility, this );
			this.queue.on( 'add remove reset change:percent', this.progress, this );
			this.queue.on( 'add remove reset change:uploading', this.info, this );

			this.errors = wp.Uploader.errors;
			this.errors.reset();
			this.errors.on( 'add remove reset', this.visibility, this );
			this.errors.on( 'add', this.error, this );
		},

		dispose: function() {
			wp.Uploader.queue.off( null, null, this );
			media.View.prototype.dispose.apply( this, arguments );
			return this;
		},

		visibility: function() {
			this.$el.toggleClass( 'uploading', !! this.queue.length );
			this.$el.toggleClass( 'errors', !! this.errors.length );
			this.$el.toggle( !! this.queue.length || !! this.errors.length );
		},

		ready: function() {
			_.each({
				'$bar':      '.media-progress-bar div',
				'$index':    '.upload-index',
				'$total':    '.upload-total',
				'$filename': '.upload-filename'
			}, function( selector, key ) {
				this[ key ] = this.$( selector );
			}, this );

			this.visibility();
			this.progress();
			this.info();
		},

		progress: function() {
			var queue = this.queue,
				$bar = this.$bar;

			if ( ! $bar || ! queue.length )
				return;

			$bar.width( ( queue.reduce( function( memo, attachment ) {
				if ( ! attachment.get('uploading') )
					return memo + 100;

				var percent = attachment.get('percent');
				return memo + ( _.isNumber( percent ) ? percent : 100 );
			}, 0 ) / queue.length ) + '%' );
		},

		info: function() {
			var queue = this.queue,
				index = 0, active;

			if ( ! queue.length )
				return;

			active = this.queue.find( function( attachment, i ) {
				index = i;
				return attachment.get('uploading');
			});

			this.$index.text( index + 1 );
			this.$total.text( queue.length );
			this.$filename.html( active ? this.filename( active.get('filename') ) : '' );
		},

		filename: function( filename ) {
			return media.truncate( _.escape( filename ), 24 );
		},

		error: function( error ) {
			this.views.add( '.upload-errors', new media.view.UploaderStatusError({
				filename: this.filename( error.get('file').name ),
				message:  error.get('message')
			}), { at: 0 });
		},

		dismiss: function( event ) {
			var errors = this.views.get('.upload-errors');

			event.preventDefault();

			if ( errors )
				_.invoke( errors, 'remove' );
			wp.Uploader.errors.reset();
		}
	});

	media.view.UploaderStatusError = media.View.extend({
		className: 'upload-error',
		template:  media.template('uploader-status-error')
	});

	/**
	 * wp.media.view.Toolbar
	 */
	media.view.Toolbar = media.View.extend({
		tagName:   'div',
		className: 'media-toolbar',

		initialize: function() {
			var state = this.controller.state(),
				selection = this.selection = state.get('selection'),
				library = this.library = state.get('library');

			this._views = {};

			// The toolbar is composed of two `PriorityList` views.
			this.primary   = new media.view.PriorityList();
			this.secondary = new media.view.PriorityList();
			this.primary.$el.addClass('media-toolbar-primary');
			this.secondary.$el.addClass('media-toolbar-secondary');
			
			
			
			this.views.set([ this.secondary, this.primary ]);
			
			if ( this.options.items )
				this.set( this.options.items, { silent: true });

			if ( ! this.options.silent )
				this.render();

			if ( selection )
				selection.on( 'add remove reset', this.refresh, this );
			if ( library )
				library.on( 'add remove reset', this.refresh, this );
		},

		dispose: function() {
			if ( this.selection )
				this.selection.off( null, null, this );
			if ( this.library )
				this.library.off( null, null, this );
			return media.View.prototype.dispose.apply( this, arguments );
		},

		ready: function() {
			this.refresh();
		},

		set: function( id, view, options ) {
			var list;
			options = options || {};

			// Accept an object with an `id` : `view` mapping.
			if ( _.isObject( id ) ) {
				_.each( id, function( view, id ) {
					this.set( id, view, { silent: true });
				}, this );

			} else {
				if ( ! ( view instanceof Backbone.View ) ) {
					view.classes = [ 'media-button-' + id ].concat( view.classes || [] );
					view = new media.view.Button( view ).render();
				}

				view.controller = view.controller || this.controller;

				this._views[ id ] = view;

				list = view.options.priority < 0 ? 'secondary' : 'primary';
				this[ list ].set( id, view, options );
			}

			if ( ! options.silent )
				this.refresh();

			return this;
		},

		get: function( id ) {
			return this._views[ id ];
		},

		unset: function( id, options ) {
			delete this._views[ id ];
			this.primary.unset( id, options );
			this.secondary.unset( id, options );

			if ( ! options || ! options.silent )
				this.refresh();
			return this;
		},

		refresh: function() {
			var state = this.controller.state(),
				library = state.get('library'),
				selection = state.get('selection');

			_.each( this._views, function( button ) {
				if ( ! button.model || ! button.options || ! button.options.requires )
					return;

				var requires = button.options.requires,
					disabled = false;

				// Prevent insertion of attachments if any of them are still uploading
				disabled = _.some( selection.models, function( attachment ) {
					return attachment.get('uploading') === true;
				});

				if ( requires.selection && selection && ! selection.length )
					disabled = true;
				else if ( requires.library && library && ! library.length )
					disabled = true;

				button.model.set( 'disabled', disabled );
			});
		}
	});

	// wp.media.view.Toolbar.Select
	// ----------------------------
	media.view.Toolbar.Select = media.view.Toolbar.extend({
		initialize: function() {
			var options = this.options;

			_.bindAll( this, 'clickSelect' );

			_.defaults( options, {
				event: 'select',
				state: false,
				reset: true,
				close: true,
				text:  l10n.select,

				// Does the button rely on the selection?
				requires: {
					selection: true
				}
			});

			options.items = _.defaults( options.items || {}, {
				select: {
					style:    'primary',
					text:     options.text,
					priority: 80,
					click:    this.clickSelect,
					requires: options.requires
				}
			});

			media.view.Toolbar.prototype.initialize.apply( this, arguments );
		},

		clickSelect: function() {
			/*var state = this.controller.state(),
				library = state.get('library'),
				selection = state.get('selection');
			//var objSettings = frame.state().get('selection').first().toJSON();
			var host = "null";
			if (typeof url == "undefined"
					|| null == url)
				url = window.location.href;
			var regex = /.*\:\/\/([^\/|:]*).*/;
			/*var match = url.match(regex);
			if (typeof match != "undefined"
					&& null != match) {
				host = match[1];
			}
			if(selection.length==1){
				
				selection.map(function(attachment) {
					var objImage = attachment.toJSON();
					var obj = {};
					obj.url = objImage.url;
					if(obj.url.indexOf(host)<0){
						$j.post("/admin/admin-ajax.php",{action:"bit_auto_uploadimage",obj:obj},function(data){
							var tmpJson = jQuery.parseJSON(data);
							
						});
					}
				});
			
			}*/
			
			

			var options = this.options,
				controller = this.controller;

			if ( options.close )
				controller.close();

			if ( options.event )
				controller.state().trigger( options.event );

			if ( options.state )
				controller.setState( options.state );

			if ( options.reset )
				controller.reset();

		}
	});

	// wp.media.view.Toolbar.Embed
	// ---------------------------
	media.view.Toolbar.Embed = media.view.Toolbar.Select.extend({
		initialize: function() {
			_.defaults( this.options, {
				text: l10n.insertIntoPost,
				requires: false
			});

			media.view.Toolbar.Select.prototype.initialize.apply( this, arguments );
		},

		refresh: function() {
			var url = this.controller.state().props.get('url');
			this.get('select').model.set( 'disabled', ! url || url === 'http://' );

			media.view.Toolbar.Select.prototype.refresh.apply( this, arguments );
		}
	});

	/**
	 * wp.media.view.Button
	 */
	media.view.Button = media.View.extend({
		tagName:    'a',
		className:  'media-button',
		attributes: { href: '#' },

		events: {
			'click': 'click'
		},

		defaults: {
			text:     '',
			style:    '',
			size:     'large',
			disabled: false
		},

		initialize: function() {
			// Create a model with the provided `defaults`.
			this.model = new Backbone.Model( this.defaults );

			// If any of the `options` have a key from `defaults`, apply its
			// value to the `model` and remove it from the `options object.
			_.each( this.defaults, function( def, key ) {
				var value = this.options[ key ];
				if ( _.isUndefined( value ) )
					return;

				this.model.set( key, value );
				delete this.options[ key ];
			}, this );

			this.model.on( 'change', this.render, this );
		},

		render: function() {
			var classes = [ 'button', this.className ],
				model = this.model.toJSON();

			if ( model.style )
				classes.push( 'button-' + model.style );

			if ( model.size )
				classes.push( 'button-' + model.size );

			classes = _.uniq( classes.concat( this.options.classes ) );
			this.el.className = classes.join(' ');

			this.$el.attr( 'disabled', model.disabled );
			this.$el.text( this.model.get('text') );

			return this;
		},

		click: function( event ) {
			if ( '#' === this.attributes.href )
				event.preventDefault();

			if ( this.options.click && ! this.model.get('disabled') )
				this.options.click.apply( this, arguments );

			 setTimeout(function(){top.jQuery("#site-content").height("80%");},200);setTimeout(function(){ top.jQuery("#site-content").height("100%");},500); 
		}
	});

	/**
	 * wp.media.view.ButtonGroup
	 */
	media.view.ButtonGroup = media.View.extend({
		tagName:   'div',
		className: 'button-group button-large media-button-group',

		initialize: function() {
			this.buttons = _.map( this.options.buttons || [], function( button ) {
				if ( button instanceof Backbone.View )
					return button;
				else
					return new media.view.Button( button ).render();
			});

			delete this.options.buttons;

			if ( this.options.classes )
				this.$el.addClass( this.options.classes );
		},

		render: function() {
			this.$el.html( $( _.pluck( this.buttons, 'el' ) ).detach() );
			return this;
		}
	});

	/**
	 * wp.media.view.PriorityList
	 */

	media.view.PriorityList = media.View.extend({
		tagName:   'div',

		initialize: function() {
			this._views = {};

			this.set( _.extend( {}, this._views, this.options.views ), { silent: true });
			delete this.options.views;

			if ( ! this.options.silent )
				this.render();
		},

		set: function( id, view, options ) {
			var priority, views, index;

			options = options || {};

			// Accept an object with an `id` : `view` mapping.
			if ( _.isObject( id ) ) {
				_.each( id, function( view, id ) {
					this.set( id, view );
				}, this );
				return this;
			}

			if ( ! (view instanceof Backbone.View) )
				view = this.toView( view, id, options );

			view.controller = view.controller || this.controller;

			this.unset( id );

			priority = view.options.priority || 10;
			views = this.views.get() || [];

			_.find( views, function( existing, i ) {
				if ( existing.options.priority > priority ) {
					index = i;
					return true;
				}
			});

			this._views[ id ] = view;
			this.views.add( view, {
				at: _.isNumber( index ) ? index : views.length || 0
			});

			return this;
		},

		get: function( id ) {
			return this._views[ id ];
		},

		unset: function( id ) {
			var view = this.get( id );

			if ( view )
				view.remove();

			delete this._views[ id ];
			return this;
		},

		toView: function( options ) {
			return new media.View( options );
		}
	});

	/**
	 * wp.media.view.MenuItem
	 */
	media.view.MenuItem = media.View.extend({
		tagName:   'a',
		className: 'media-menu-item',

		attributes: {
			href: '#'
		},

		events: {
			'click': '_click'
		},

		_click: function( event ) {
			var clickOverride = this.options.click;

			if ( event )
				event.preventDefault();

			if ( clickOverride )
				clickOverride.call( this );
			else
				this.click();
		},

		click: function() {
			var state = this.options.state;
			if ( state )
				this.controller.setState( state );
		},

		render: function() {
			var options = this.options;

			if ( options.text )
				this.$el.text( options.text );
			else if ( options.html )
				this.$el.html( options.html );

			return this;
		}
	});

	/**
	 * wp.media.view.Menu
	 */
	media.view.Menu = media.view.PriorityList.extend({
		tagName:   'div',
		className: 'media-menu',
		property:  'state',
		ItemView:  media.view.MenuItem,
		region:    'menu',

		toView: function( options, id ) {
			options = options || {};
			options[ this.property ] = options[ this.property ] || id;
			return new this.ItemView( options ).render();
		},

		ready: function() {
			media.view.PriorityList.prototype.ready.apply( this, arguments );
			this.visibility();
		},

		set: function() {
			media.view.PriorityList.prototype.set.apply( this, arguments );
			this.visibility();
		},

		unset: function() {
			media.view.PriorityList.prototype.unset.apply( this, arguments );
			this.visibility();
		},

		visibility: function() {
			var region = this.region,
				view = this.controller[ region ].get(),
				views = this.views.get(),
				hide = ! views || views.length < 2;

			if ( this === view )
				this.controller.$el.toggleClass( 'hide-' + region, hide );
		},

		select: function( id ) {
			var view = this.get( id );

			if ( ! view )
				return;

			this.deselect();
			view.$el.addClass('active');
		},

		deselect: function() {
			this.$el.children().removeClass('active');
		}
	});

	/**
	 * wp.media.view.RouterItem
	 */
	media.view.RouterItem = media.view.MenuItem.extend({
		click: function() {
			var contentMode = this.options.contentMode;
			if ( contentMode )
				this.controller.content.mode( contentMode );
		}
	});

	/**
	 * wp.media.view.Router
	 */
	media.view.Router = media.view.Menu.extend({
		tagName:   'div',
		className: 'media-router',
		property:  'contentMode',
		ItemView:  media.view.RouterItem,
		region:    'router',

		initialize: function() {
			this.controller.on( 'content:render', this.update, this );
			media.view.Menu.prototype.initialize.apply( this, arguments );
		},

		update: function() {
			var mode = this.controller.content.mode();
			if ( mode )
				this.select( mode );
		}
	});


	/**
	 * wp.media.view.Sidebar
	 */
	media.view.Sidebar = media.view.PriorityList.extend({
		className: 'media-sidebar'
	});

	/**
	 * wp.media.view.Attachment
	 */
	media.view.Attachment = media.View.extend({
		tagName:   'li',
		className: 'attachment',
		template:  media.template('attachment'),

		events: {
			'click .attachment-preview':      'toggleSelectionHandler',
			'change [data-setting]':          'updateSetting',
			'change [data-setting] input':    'updateSetting',
			'change [data-setting] select':   'updateSetting',
			'change [data-setting] textarea': 'updateSetting',
			'click .close':                   'removeFromLibrary',
			'click .check':                   'removeFromSelection',
			'click a':                        'preventDefault'
		},

		buttons: {},

		initialize: function() {
			var selection = this.options.selection;

			this.model.on( 'change:sizes change:uploading', this.render, this );
			this.model.on( 'change:title', this._syncTitle, this );
			this.model.on( 'change:caption', this._syncCaption, this );
			this.model.on( 'change:percent', this.progress, this );

			// Update the selection.
			this.model.on( 'add', this.select, this );
			this.model.on( 'remove', this.deselect, this );
			if ( selection )
				selection.on( 'reset', this.updateSelect, this );

			// Update the model's details view.
			this.model.on( 'selection:single selection:unsingle', this.details, this );
			this.details( this.model, this.controller.state().get('selection') );
		},

		dispose: function() {
			var selection = this.options.selection;

			// Make sure all settings are saved before removing the view.
			this.updateAll();

			if ( selection )
				selection.off( null, null, this );

			media.View.prototype.dispose.apply( this, arguments );
			return this;
		},

		render: function() {
			
			var options = _.defaults( this.model.toJSON(), {
					orientation:   'landscape',
					uploading:     false,
					type:          '',
					subtype:       '',
					icon:          '',
					filename:      '',
					caption:       '',
					title:         '',
					dateFormatted: '',
					width:         '',
					height:        '',
					compat:        false,
					alt:           '',
					description:   ''
				});

			options.buttons  = this.buttons;
			options.describe = this.controller.state().get('describe');

			if ( 'image' === options.type )
				options.size = this.imageSize();

			options.can = {};
			if ( options.nonces ) {
				options.can.remove = !! options.nonces['delete'];
				options.can.save = !! options.nonces.update;
			}

			if ( this.controller.state().get('allowLocalEdits') )
				options.allowLocalEdits = true;

			this.views.detach();
			this.$el.html( this.template( options ) );

			this.$el.toggleClass( 'uploading', options.uploading );
			if ( options.uploading )
				this.$bar = this.$('.media-progress-bar div');
			else
				delete this.$bar;

			// Check if the model is selected.
			this.updateSelect();

			// Update the save status.
			this.updateSave();

			this.views.render();

			return this;
		},

		progress: function() {
			if ( this.$bar && this.$bar.length )
				this.$bar.width( this.model.get('percent') + '%' );
		},

		toggleSelectionHandler: function( event ) {
			var method;

			if ( event.shiftKey )
				method = 'between';
			else if ( event.ctrlKey || event.metaKey )
				method = 'toggle';

			this.toggleSelection({
				method: method
			});
		},

		toggleSelection: function( options ) {
			var collection = this.collection,
				selection = this.options.selection,
				model = this.model,
				method = options && options.method,
				single, models, singleIndex, modelIndex;

			if ( ! selection )
				return;

			single = selection.single();
			method = _.isUndefined( method ) ? selection.multiple : method;

			// If the `method` is set to `between`, select all models that
			// exist between the current and the selected model.
			if ( 'between' === method && single && selection.multiple ) {
				// If the models are the same, short-circuit.
				if ( single === model )
					return;

				singleIndex = collection.indexOf( single );
				modelIndex  = collection.indexOf( this.model );

				if ( singleIndex < modelIndex )
					models = collection.models.slice( singleIndex, modelIndex + 1 );
				else
					models = collection.models.slice( modelIndex, singleIndex + 1 );

				selection.add( models ).single( model );
				return;

			// If the `method` is set to `toggle`, just flip the selection
			// status, regardless of whether the model is the single model.
			} else if ( 'toggle' === method ) {
				selection[ this.selected() ? 'remove' : 'add' ]( model ).single( model );
				return;
			}

			if ( method !== 'add' )
				method = 'reset';

			if ( this.selected() ) {
				// If the model is the single model, remove it.
				// If it is not the same as the single model,
				// it now becomes the single model.
				selection[ single === model ? 'remove' : 'single' ]( model );
			} else {
				// If the model is not selected, run the `method` on the
				// selection. By default, we `reset` the selection, but the
				// `method` can be set to `add` the model to the selection.
				selection[ method ]( model ).single( model );
			}
		},

		updateSelect: function() {
			this[ this.selected() ? 'select' : 'deselect' ]();
		},

		selected: function() {
			var selection = this.options.selection;
			if ( selection )
				return !! selection.get( this.model.cid );
		},

		select: function( model, collection ) {
			var selection = this.options.selection;

			// Check if a selection exists and if it's the collection provided.
			// If they're not the same collection, bail; we're in another
			// selection's event loop.
			if ( ! selection || ( collection && collection !== selection ) )
				return;

			this.$el.addClass('selected');
		},

		deselect: function( model, collection ) {
			var selection = this.options.selection;

			// Check if a selection exists and if it's the collection provided.
			// If they're not the same collection, bail; we're in another
			// selection's event loop.
			if ( ! selection || ( collection && collection !== selection ) )
				return;

			this.$el.removeClass('selected');
		},

		details: function( model, collection ) {
			var selection = this.options.selection,
				details;

			if ( selection !== collection )
				return;

			details = selection.single();
			this.$el.toggleClass( 'details', details === this.model );
		},

		preventDefault: function( event ) {
			event.preventDefault();
		},

		imageSize: function( size ) {
			var sizes = this.model.get('sizes');

			size = size || 'medium';

			// Use the provided image size if possible.
			if ( sizes && sizes[ size ] ) {
				return _.clone( sizes[ size ] );
			} else {
				return {
					url:         this.model.get('url'),
					width:       this.model.get('width'),
					height:      this.model.get('height'),
					orientation: this.model.get('orientation')
				};
			}
		},

		updateSetting: function( event ) {
			var $setting = $( event.target ).closest('[data-setting]'),
				setting, value;

			if ( ! $setting.length )
				return;

			setting = $setting.data('setting');
			value   = event.target.value;

			if ( this.model.get( setting ) !== value )
				this.save( setting, value );
		},

		// Pass all the arguments to the model's save method.
		//
		// Records the aggregate status of all save requests and updates the
		// view's classes accordingly.
		save: function() {
			var view = this,
				save = this._save = this._save || { status: 'ready' },
				request = this.model.save.apply( this.model, arguments ),
				requests = save.requests ? $.when( request, save.requests ) : request;

			// If we're waiting to remove 'Saved.', stop.
			if ( save.savedTimer )
				clearTimeout( save.savedTimer );

			this.updateSave('waiting');
			save.requests = requests;
			requests.always( function() {
				// If we've performed another request since this one, bail.
				if ( save.requests !== requests )
					return;

				view.updateSave( requests.state() === 'resolved' ? 'complete' : 'error' );
				save.savedTimer = setTimeout( function() {
					view.updateSave('ready');
					delete save.savedTimer;
				}, 2000 );
			});

		},

		updateSave: function( status ) {
			var save = this._save = this._save || { status: 'ready' };

			if ( status && status !== save.status ) {
				this.$el.removeClass( 'save-' + save.status );
				save.status = status;
			}

			this.$el.addClass( 'save-' + save.status );
			return this;
		},

		updateAll: function() {
			var $settings = this.$('[data-setting]'),
				model = this.model,
				changed;

			changed = _.chain( $settings ).map( function( el ) {
				var $input = $('input, textarea, select, [value]', el ),
					setting, value;

				if ( ! $input.length )
					return;

				setting = $(el).data('setting');
				value = $input.val();

				// Record the value if it changed.
				if ( model.get( setting ) !== value )
					return [ setting, value ];
			}).compact().object().value();

			if ( ! _.isEmpty( changed ) )
				model.save( changed );
		},

		removeFromLibrary: function( event ) {
			// Stop propagation so the model isn't selected.
			event.stopPropagation();

			this.collection.remove( this.model );
		},

		removeFromSelection: function( event ) {
			var selection = this.options.selection;
			if ( ! selection )
				return;

			// Stop propagation so the model isn't selected.
			event.stopPropagation();

			selection.remove( this.model );
		}
	});

	// Ensure settings remain in sync between attachment views.
	_.each({
		caption: '_syncCaption',
		title:   '_syncTitle'
	}, function( method, setting ) {
		media.view.Attachment.prototype[ method ] = function( model, value ) {
			var $setting = this.$('[data-setting="' + setting + '"]');

			if ( ! $setting.length )
				return this;

			// If the updated value is in sync with the value in the DOM, there
			// is no need to re-render. If we're currently editing the value,
			// it will automatically be in sync, suppressing the re-render for
			// the view we're editing, while updating any others.
			if ( value === $setting.find('input, textarea, select, [value]').val() )
				return this;

			return this.render();
		};
	});

	/**
	 * wp.media.view.Attachment.Library
	 */
	media.view.Attachment.Library = media.view.Attachment.extend({
		buttons: {
			check: true
		}
	});

	/**
	 * wp.media.view.Attachment.EditLibrary
	 */
	media.view.Attachment.EditLibrary = media.view.Attachment.extend({
		buttons: {
			close: true
		}
	});

	/**
	 * wp.media.view.Attachments
	 */
	media.view.Attachments = media.View.extend({
		tagName:   'ul',
		className: 'attachments',

		cssTemplate: media.template('attachments-css'),

		events: {
			'scroll': 'scroll'
		},

		initialize: function() {
			this.el.id = _.uniqueId('__attachments-view-');

			_.defaults( this.options, {
				refreshSensitivity: 200,
				refreshThreshold:   1.2,
				AttachmentView:     media.view.Attachment,
				sortable:           false,
				resize:             true
			});

			this._viewsByCid = {};

			this.collection.on( 'add', function( attachment ) {
				this.views.add( this.createAttachmentView( attachment ), {
					at: this.collection.indexOf( attachment )
				});
			}, this );

			this.collection.on( 'remove', function( attachment ) {
				var view = this._viewsByCid[ attachment.cid ];
				delete this._viewsByCid[ attachment.cid ];

				if ( view )
					view.remove();
			}, this );

			this.collection.on( 'reset', this.render, this );

			// Throttle the scroll handler.
			this.scroll = _.chain( this.scroll ).bind( this ).throttle( this.options.refreshSensitivity ).value();

			this.initSortable();

			_.bindAll( this, 'css' );
			this.model.on( 'change:edge change:gutter', this.css, this );
			this._resizeCss = _.debounce( _.bind( this.css, this ), this.refreshSensitivity );
			if ( this.options.resize )
				$(window).on( 'resize.attachments', this._resizeCss );
			this.css();
		},

		dispose: function() {
			this.collection.props.off( null, null, this );
			$(window).off( 'resize.attachments', this._resizeCss );
			media.View.prototype.dispose.apply( this, arguments );
		},

		css: function() {
			var $css = $( '#' + this.el.id + '-css' );

			if ( $css.length )
				$css.remove();

			media.view.Attachments.$head().append( this.cssTemplate({
				id:     this.el.id,
				edge:   this.edge(),
				gutter: this.model.get('gutter')
			}) );
		},

		edge: function() {
			var edge = this.model.get('edge'),
				gutter, width, columns;

			if ( ! this.$el.is(':visible') )
				return edge;

			gutter  = this.model.get('gutter') * 2;
			width   = this.$el.width() - gutter;
			columns = Math.ceil( width / ( edge + gutter ) );
			edge = Math.floor( ( width - ( columns * gutter ) ) / columns );
			return edge;
		},

		initSortable: function() {
			var collection = this.collection;

			if ( ! this.options.sortable || ! $.fn.sortable )
				return;

			this.$el.sortable( _.extend({
				// If the `collection` has a `comparator`, disable sorting.
				disabled: !! collection.comparator,

				// Prevent attachments from being dragged outside the bounding
				// box of the list.
				containment: this.$el,

				// Change the position of the attachment as soon as the
				// mouse pointer overlaps a thumbnail.
				tolerance: 'pointer',

				// Record the initial `index` of the dragged model.
				start: function( event, ui ) {
					ui.item.data('sortableIndexStart', ui.item.index());
				},

				// Update the model's index in the collection.
				// Do so silently, as the view is already accurate.
				update: function( event, ui ) {
					var model = collection.at( ui.item.data('sortableIndexStart') ),
						comparator = collection.comparator;

					// Temporarily disable the comparator to prevent `add`
					// from re-sorting.
					delete collection.comparator;

					// Silently shift the model to its new index.
					collection.remove( model, {
						silent: true
					}).add( model, {
						silent: true,
						at:     ui.item.index()
					});

					// Restore the comparator.
					collection.comparator = comparator;

					// Fire the `reset` event to ensure other collections sync.
					collection.trigger( 'reset', collection );

					// If the collection is sorted by menu order,
					// update the menu order.
					collection.saveMenuOrder();
				}
			}, this.options.sortable ) );

			// If the `orderby` property is changed on the `collection`,
			// check to see if we have a `comparator`. If so, disable sorting.
			collection.props.on( 'change:orderby', function() {
				this.$el.sortable( 'option', 'disabled', !! collection.comparator );
			}, this );

			this.collection.props.on( 'change:orderby', this.refreshSortable, this );
			this.refreshSortable();
		},

		refreshSortable: function() {
			if ( ! this.options.sortable || ! $.fn.sortable )
				return;

			// If the `collection` has a `comparator`, disable sorting.
			var collection = this.collection,
				orderby = collection.props.get('orderby'),
				enabled = 'menuOrder' === orderby || ! collection.comparator;

			this.$el.sortable( 'option', 'disabled', ! enabled );
		},

		createAttachmentView: function( attachment ) {
			var view = new this.options.AttachmentView({
				controller: this.controller,
				model:      attachment,
				collection: this.collection,
				selection:  this.options.selection
			});

			return this._viewsByCid[ attachment.cid ] = view;
		},

		prepare: function() {
			// Create all of the Attachment views, and replace
			// the list in a single DOM operation.
			if ( this.collection.length ) {
				this.views.set( this.collection.map( this.createAttachmentView, this ) );

			// If there are no elements, clear the views and load some.
			} else {
				this.views.unset();
				this.collection.more().done( this.scroll );
			}
		},

		ready: function() {
			// Trigger the scroll event to check if we're within the
			// threshold to query for additional attachments.
			this.scroll();
		},

		scroll: function() {
			// @todo: is this still necessary?
			if ( ! this.$el.is(':visible') )
				return;

			if ( this.collection.hasMore() && this.el.scrollHeight < this.el.scrollTop + ( this.el.clientHeight * this.options.refreshThreshold ) ) {
				this.collection.more().done( this.scroll );
			}
		}
	}, {
		$head: (function() {
			var $head;
			return function() {
				return $head = $head || $('head');
			};
		}())
	});

	/**
	 * wp.media.view.Search
	 */
	var media_view_searchtimeout = false;
	media.view.Search = media.View.extend({
		tagName:   'input',
		className: 'search',

		attributes: {
			type:        'search',
			placeholder: '请输入您想查找图片的相关信息'
		},

		events: {
			//'input':  'search',
			'keyup':  'searchkeyup',
			//'change': 'search',
			//'search': 'search'
		},

		render: function() {
			this.el.value = this.model.escape('search');

			return this;
		},
		searchkeyup:function(event){
			var code = event.charCode || event.keyCode;
			if (code == 13) {
				if ( event.target.value )
					this.model.set( 'search', event.target.value );
				else
					this.model.unset('search');
			}else if ( !event.target.value ){
				this.model.unset('search');
			}
		},
		search: function( event ) {

			var model = this.model;
			if(media_view_searchtimeout) clearTimeout(media_view_searchtimeout);
			media_view_searchtimeout = setTimeout(function(){
				if ( event.target.value )
					model.set( 'search', event.target.value );
				else
					model.unset('search');
			}, 1000);
			
		}
	});
	media.view.SearchBtn = media.View.extend({
		//el: $( '<div class="search-btn">搜索</div>' )[0],
		tagName:   'input',
		className: 'search-btn',
		attributes: {
			type:        'button',
			value: '搜索'
		},
		events: {
			'click': 'search'
		},
		search: function() {

			var v = jQuery(".media-toolbar-primary input[type=search]").val();
			if ( v )
				this.model.set( 'search', v );
			else
				this.model.unset('search');
		},
		render: function() {

			return this;
		},

	});

	/**
	 * wp.media.view.AttachmentFilters
	 */
	media.view.AttachmentFilters = media.View.extend({
		tagName:   'select',
		className: 'attachment-filters',

		events: {
			change: 'change'
		},

		keys: [],

		initialize: function() {
			this.createFilters();
			
			_.extend( this.filters, this.options.filters );

			// Build `<option>` elements.
			this.$el.html( _.chain( this.filters ).map( function( filter, value ) {
				return {
					el: $('<option></option>').val(value).text(filter.text)[0],
					priority: filter.priority || 50
				};
			}, this ).sortBy('priority').pluck('el').value() );

			this.model.on( 'change', this.select, this );
			this.select();
		},

		createFilters: function() {
			this.filters = {};
		},

		change: function() {
			var filter = this.filters[ this.el.value ];
			if ( filter )
				this.model.set( filter.props );
		},

		select: function() {
			var model = this.model,
				value = 'all',
				props = model.toJSON();

			_.find( this.filters, function( filter, id ) {
				var equal = _.all( filter.props, function( prop, key ) {
					return prop === ( _.isUndefined( props[ key ] ) ? null : props[ key ] );
				});

				if ( equal )
					return value = id;
			});

			this.$el.val( value );
		}
	});

	media.view.AttachmentFilters.Uploaded = media.view.AttachmentFilters.extend({
		createFilters: function() {
			var type = this.model.get('type'),
				types = media.view.settings.mimeTypes,
				text;

			if ( types && type )
				text = types[ type ];
		
			this.filters = {
				all: {
					text:  text || l10n.allMediaItems,
					props: {
						uploadedTo: null,
						orderby: 'date',
						order:   'DESC'
					},
					priority: 10
				},
				uploaded: {
					text:  l10n.uploadedToThisPost,
					props: {
						uploadedTo: media.view.settings.post.id,
						orderby: 'date',
						order:   'DESC'
					},
					priority: 20
				}
			};
		}
	});


	media.view.AttachmentFilters.All = media.view.AttachmentFilters.extend({
		createFilters: function() {
			var filters = {};

			filters.uploaded0 = {
				text:  "横幅幻灯片图片",
				props: {
					type:    "qifeiyelib-0",
					uploadedTo:null,
					orderby: 'date',
					order:   'DESC',
					posts_per_page:50
				},
				priority: 20
			};
			filters.uploaded1 = {
				text:  "全屏幻灯片图片",
				props: {
					type:    "qifeiyelib-1",
					uploadedTo: null,
					orderby: 'date',
					order:   'DESC',
					posts_per_page:50
				},
				priority: 30
			};
			filters.uploaded4 = {
				text:  "常用图片",
				props: {
					type:   "qifeiyelib-4",
					uploadedTo: null,
					orderby: 'date',
					order:   'DESC',
					posts_per_page:50
				},
				priority: 60
			};
			filters.uploaded6 = {
					text:  "透明底纹",
					props: {
						type:"qifeiyelib-6",
						uploadedTo: null,
						orderby: 'date',
						order:   'DESC',
						posts_per_page:50
					},
					priority: 80
				};
			filters.uploaded7 = {
					text:  "纯色背景",
					props: {
						type: "qifeiyelib-7",
						uploadedTo: null,
						orderby: 'date',
						order:   'DESC',
						posts_per_page:50
					},
					priority: 80
				};
			this.filters = filters;
		}
	});
	media.view.AttachmentFilters.category = media.view.AttachmentFilters.extend({	
		tagName:   'select',
		createFilters: function() {
			var filters = {};
			var that = this;
			var type = this.model.get('type');
			if(type=="video/yun"){
				var term_list = qfmediacategory.yunvideo.term_list;
				var category = "yunvideo-category";
			}else if(type=="video/mp4"){
				var term_list = qfmediacategory.video.term_list;
				var category = "video-category";
			}else{
				var term_list = qfmediacategory.image.term_list;
				var category = "image-category";
			}
			_.each(term_list || {}, function( term, key ) {
				var term_id = term['term_id'];
				var term_name = $("<div/>").html(term['term_name']).text();
				filters[ term_id ] = {
					text: term_name,
					priority: key+2
				};
				filters[term_id]['props'] = {};
				filters[term_id]['props'][category] = term_id;
			});
			
			filters.all = {
				text: "所有分类",
				priority: 1
			};
			filters['all']['props'] = {};
			filters['all']['props'][category] = null;

			this.filters = filters;
		}
	});
	media.view.AttachmentFilters.ICONAll = media.view.AttachmentFilters.extend({
		createFilters: function() {
			var filters = {};
			
			filters.uploaded11 = {
				text:  "卡通图标",
				props: {
					type:"qifeiyelib-11",
					uploadedTo: null,
					orderby: 'date',
					order:   'DESC',
					posts_per_page:50
				},
				priority: 10
			};
			filters.uploaded15 = {
					text:  "蓝色系列",
					props: {
						type:    "qifeiyelib-15",
						uploadedTo: null,
						orderby: 'date',
						order:   'DESC',
						posts_per_page:50
					},
					priority: 20
				};
			filters.uploaded12 = {
				text:  "扁平风格",
				props: {
					type: "qifeiyelib-12",
					uploadedTo: null,
					orderby: 'date',
					order:   'DESC',
					posts_per_page:50
				},
				priority: 30
			};
			filters.uploaded13 = {
				text:  "数字",
				props: {
					type:    "qifeiyelib-13",
					uploadedTo: null,
					orderby: 'date',
					order:   'DESC',
					posts_per_page:50
				},
				priority: 40
			};
			filters.uploaded16 = {
					text:  "商城常用图标",
					props: {
						type:    "qifeiyelib-16",
						uploadedTo: null,
						orderby: 'date',
						order:   'DESC',
						posts_per_page:50
					},
					priority: 15
			};
			filters.uploaded17 = {
					text:  "文件类型",
					props: {
						type:    "qifeiyelib-17",
						uploadedTo: null,
						orderby: 'date',
						order:   'DESC',
						posts_per_page:50
					},
					priority: 41
			};
			filters.uploaded18 = {
					text:  "橙色系列",
					props: {
						type:    "qifeiyelib-18",
						uploadedTo: null,
						orderby: 'date',
						order:   'DESC',
						posts_per_page:50
					},
					priority: 21
			};
			filters.uploaded19 = {
					text:  "线条-灰色通用",
					props: {
						type:    "qifeiyelib-19",
						uploadedTo: null,
						orderby: 'date',
						order:   'DESC',
						posts_per_page:50
					},
					priority: 1
			};
			filters.uploaded20 = {
					text:  "线条-日常生活",
					props: {
						type:    "qifeiyelib-20",
						uploadedTo: null,
						orderby: 'date',
						order:   'DESC',
						posts_per_page:50
					},
					priority: 2
			};
			filters.uploaded21 = {
					text:  "线条-开发教育设计",
					props: {
						type:    "qifeiyelib-21",
						uploadedTo: null,
						orderby: 'date',
						order:   'DESC',
						posts_per_page:50
					},
					priority: 3
			};
			filters.uploaded22 = {
					text:  "线条-运动旅游",
					props: {
						type:    "qifeiyelib-22",
						uploadedTo: null,
						orderby: 'date',
						order:   'DESC',
						posts_per_page:50
					},
					priority: 4
			};
			filters.uploaded23 = {
					text:  "绿色系列",
					props: {
						type:    "qifeiyelib-23",
						uploadedTo: null,
						orderby: 'date',
						order:   'DESC',
						posts_per_page:50
					},
					priority: 22
			};

			this.filters = filters;
		}
	});


	/**
	 * wp.media.view.AttachmentsBrowser
	 */
	media.view.AttachmentsBrowser = media.View.extend({
		tagName:   'div',
		className: 'attachments-browser',

		initialize: function() {
			_.defaults( this.options, {
				filters: false,
				search:  true,
				display: false,

				AttachmentView: media.view.Attachment.Library
			});

			/*alert(this.options.flag);*/
			if(this.options.flag==1){
				this.collection.props.set("type","background");
				this.createToolbar();
				this.updateContent();
			}else if(this.options.flag==2){
				this.options.filters = "uploadlib"
				this.collection.props.set("type","qifeiyelib-image");
				this.collection.props.set("orderby","id");
				this.collection.props.set("order","ASC");

				this.createToolbar();
				this.updateContent();
				this.createSidebar();
			}else if(this.options.flag==3){
				this.options.filters = "uploadiconlib"
				this.collection.props.set("type","qifeiyelib-icon");
				this.collection.props.set("orderby","id");
				this.collection.props.set("order","ASC");
				this.createToolbar();
				this.updateContent();
				this.createSidebar();
			}else if(this.options.flag==4){
				this.collection.props.set("type","video/mp4");
				this.createToolbar();
				this.updateContent();
				this.createSidebar();
			}else if(this.options.flag==5){
				this.collection.props.set("type","video/webm");
				this.createToolbar();
				this.updateContent();
				this.createSidebar();
			}else if(this.options.flag==6){
				this.collection.props.set("type","video/yun");
				this.createToolbar();
				this.updateContent();
				this.createSidebar();
			}else if(this.options.flag==7){
				this.collection.props.set("type","audio");
				this.createToolbar();
				this.updateContent();
				this.createSidebar();
			}else if(this.options.flag==8){
				this.collection.props.set("type","text/plain");
				this.createToolbar();
				this.updateContent();
				this.createSidebar();
			}else if(this.options.flag==9){
				this.options.filters = "uploadsvglib"
				this.collection.props.set("type","qifeiyelib-svg");
				this.collection.props.set("orderby","id");
				this.collection.props.set("order","ASC");
				this.createToolbar();
				this.updateContent();
				this.createSidebar();
			}else if(this.options.flag==10){
				this.options.filters = "uploadvideolib"
				this.collection.props.set("type","qifeiyelib-video");
				this.collection.props.set("orderby","id");
				this.collection.props.set("order","ASC");
				this.createToolbar();
				this.updateContent();
				this.createSidebar();
			}else if(this.options.flag=="3d"){
				this.options.filters = "uploadvideolib"
				this.collection.props.set("type","3d");
				this.collection.props.set("orderby","id");
				this.collection.props.set("order","ASC");
				this.createToolbar();
				this.updateContent();
				this.createSidebar();
			}else{
				this.collection.props.set("type","image");
				this.collection.props.set("search","");
				this.collection.props.set("orderby","date");
				this.collection.props.set("order","DESC");
				this.createToolbar();
				this.updateContent();
				this.createSidebar();
			}

			this.collection.on( 'add remove reset', this.updateContent, this );
		},

		dispose: function() {
			this.options.selection.off( null, null, this );
			media.View.prototype.dispose.apply( this, arguments );
			return this;
		},

		createToolbar: function() {
			var filters, FiltersConstructor;

			this.toolbar = new media.view.Toolbar({
				controller: this.controller
			});

			this.views.add( this.toolbar );

			filters = this.options.filters;
	

			if ( 'uploaded' === filters )
				//FiltersConstructor = media.view.AttachmentFilters.Uploaded;
				FiltersConstructor = media.view.AttachmentFilters.category;
			if ( 'uploadlib' === filters ){
				//FiltersConstructor = media.view.AttachmentFilters.All;
			}else if ( 'uploadiconlib' === filters ){
				//FiltersConstructor = media.view.AttachmentFilters.ICONAll;
			}else{

			}
				//FiltersConstructor = media.view.AttachmentFilters.UploadedLib;
			//}else if ( 'all' === filters )
				//FiltersConstructor = media.view.AttachmentFilters.All;

			if ( FiltersConstructor ) {
				this.toolbar.set( 'filters', new FiltersConstructor({
					controller: this.controller,
					model:      this.collection.props,
					priority:   -80
				}).render() );
			}

			if ( this.options.search ) {
				this.toolbar.set( 'search', new media.view.Search({
					controller: this.controller,
					model:      this.collection.props,
					priority:   60
				}).render() );

				this.toolbar.set( 'search-btn', new media.view.SearchBtn({
					controller: this.controller,
					model:      this.collection.props,
					priority: 90
				}).render() );

			}

			if ( this.options.dragInfo ) {
				this.toolbar.set( 'dragInfo', new media.View({
					el: $( '<div class="instructions">' + l10n.dragInfo + '</div>' )[0],
					priority: -40
				}) );
			}
		},

		updateContent: function() {
			var view = this;

			if( ! this.attachments )
				this.createAttachments();

			if ( ! this.collection.length ) {
				this.collection.more().done( function() {
					if ( ! view.collection.length )
						view.createUploader();
				});
			}
		},

		removeContent: function() {
			_.each(['attachments','uploader'], function( key ) {
				if ( this[ key ] ) {
					this[ key ].remove();
					delete this[ key ];
				}
			}, this );
		},

		createUploader: function() {
			this.removeContent();

			this.uploader = new media.view.UploaderInline({
				controller: this.controller,
				status:     false,
				message:    l10n.noItemsFound
			});

			this.views.add( this.uploader );
			
			this.uploader.$el.find(".media_cate").remove();
		},

		createAttachments: function() {
			this.removeContent();
			this.attachments = new media.view.Attachments({
				controller: this.controller,
				collection: this.collection,
				selection:  this.options.selection,
				model:      this.model,
				sortable:   this.options.sortable,

				// The single `Attachment` view to be used in the `Attachments` view.
				AttachmentView: this.options.AttachmentView
			});
			this.views.add( this.attachments );
		},

		createSidebar: function() {
			var options = this.options,
				selection = options.selection,
				sidebar = this.sidebar = new media.view.Sidebar({
					controller: this.controller
				});

			this.views.add( sidebar );

			if ( this.controller.uploader ) {
				sidebar.set( 'uploads', new media.view.UploaderStatus({
					controller: this.controller,
					priority:   40
				}) );
			}

			selection.on( 'selection:single', this.createSingle, this );
			selection.on( 'selection:unsingle', this.disposeSingle, this );

			if ( selection.single() )
				this.createSingle();
		},

		createSingle: function() {
			var sidebar = this.sidebar,
				single = this.options.selection.single();

			sidebar.set( 'details', new media.view.Attachment.Details({
				controller: this.controller,
				model:      single,
				priority:   80
			}) );

			sidebar.set( 'compat', new media.view.AttachmentCompat({
				controller: this.controller,
				model:      single,
				priority:   120
			}) );

			if ( this.options.display ) {
				sidebar.set( 'display', new media.view.Settings.AttachmentDisplay({
					controller:   this.controller,
					model:        this.model.display( single ),
					attachment:   single,
					priority:     160,
					userSettings: this.model.get('displayUserSettings')
				}) );
			}
		},

		disposeSingle: function() {
			var sidebar = this.sidebar;
			sidebar.unset('details');
			sidebar.unset('compat');
			sidebar.unset('display');
		}
	});
	


	/**
	 * wp.media.view.Selection
	 */
	media.view.Selection = media.View.extend({
		tagName:   'div',
		className: 'media-selection',
		template:  media.template('media-selection'),

		events: {
			'click .edit-selection':  'edit',
			'click .clear-selection': 'clear'
		},

		initialize: function() {
			_.defaults( this.options, {
				editable:  false,
				clearable: true
			});

			this.attachments = new media.view.Attachments.Selection({
				controller: this.controller,
				collection: this.collection,
				selection:  this.collection,
				model:      new Backbone.Model({
					edge:   40,
					gutter: 5
				})
			});

			this.views.set( '.selection-view', this.attachments );
			this.collection.on( 'add remove reset', this.refresh, this );
			this.controller.on( 'content:activate', this.refresh, this );
		},

		ready: function() {
			this.refresh();
		},

		refresh: function() {
			// If the selection hasn't been rendered, bail.
			if ( ! this.$el.children().length )
				return;

			var collection = this.collection,
				editing = 'edit-selection' === this.controller.content.mode();

			// If nothing is selected, display nothing.
			this.$el.toggleClass( 'empty', ! collection.length );
			this.$el.toggleClass( 'one', 1 === collection.length );
			this.$el.toggleClass( 'editing', editing );

			this.$('.count').text( l10n.selected.replace('%d', collection.length) );
		},

		edit: function( event ) {
			event.preventDefault();
			if ( this.options.editable )
				this.options.editable.call( this, this.collection );
		},

		clear: function( event ) {
			event.preventDefault();
			this.collection.reset();
		}
	});


	/**
	 * wp.media.view.Attachment.Selection
	 */
	media.view.Attachment.Selection = media.view.Attachment.extend({
		className: 'attachment selection',

		// On click, just select the model, instead of removing the model from
		// the selection.
		toggleSelection: function() {
			this.options.selection.single( this.model );
		}
	});

	/**
	 * wp.media.view.Attachments.Selection
	 */
	media.view.Attachments.Selection = media.view.Attachments.extend({
		events: {},
		initialize: function() {
			_.defaults( this.options, {
				sortable:   true,
				resize:     false,

				// The single `Attachment` view to be used in the `Attachments` view.
				AttachmentView: media.view.Attachment.Selection
			});
			return media.view.Attachments.prototype.initialize.apply( this, arguments );
		}
	});

	/**
	 * wp.media.view.Attachments.EditSelection
	 */
	media.view.Attachment.EditSelection = media.view.Attachment.Selection.extend({
		buttons: {
			close: true
		}
	});


	/**
	 * wp.media.view.Settings
	 */
	media.view.Settings = media.View.extend({
		events: {
			'click button':    'updateHandler',
			'change input':    'updateHandler',
			'change select':   'updateHandler',
			'change textarea': 'updateHandler'
		},

		initialize: function() {
			this.model = this.model || new Backbone.Model();
			this.model.on( 'change', this.updateChanges, this );
		},

		prepare: function() {
			return _.defaults({
				model: this.model.toJSON()
			}, this.options );
		},

		render: function() {
			media.View.prototype.render.apply( this, arguments );
			// Select the correct values.
			_( this.model.attributes ).chain().keys().each( this.update, this );
			return this;
		},

		update: function( key ) {
			var value = this.model.get( key ),
				$setting = this.$('[data-setting="' + key + '"]'),
				$buttons, $value;

			// Bail if we didn't find a matching setting.
			if ( ! $setting.length )
				return;

			// Attempt to determine how the setting is rendered and update
			// the selected value.

			// Handle dropdowns.
			if ( $setting.is('select') ) {
				$value = $setting.find('[value="' + value + '"]');

				if ( $value.length ) {
					$setting.find('option').prop( 'selected', false );
					$value.prop( 'selected', true );
				} else {
					// If we can't find the desired value, record what *is* selected.
					this.model.set( key, $setting.find(':selected').val() );
				}


			// Handle button groups.
			} else if ( $setting.hasClass('button-group') ) {
				$buttons = $setting.find('button').removeClass('active');
				$buttons.filter( '[value="' + value + '"]' ).addClass('active');

			// Handle text inputs and textareas.
			} else if ( $setting.is('input[type="text"], textarea') ) {
				if ( ! $setting.is(':focus') )
					$setting.val( value );

			// Handle checkboxes.
			} else if ( $setting.is('input[type="checkbox"]') ) {
				$setting.attr( 'checked', !! value );
			}
		},

		updateHandler: function( event ) {
			var $setting = $( event.target ).closest('[data-setting]'),
				value = event.target.value,
				userSetting;

			event.preventDefault();

			if ( ! $setting.length )
				return;

			// Use the correct value for checkboxes.
			if ( $setting.is('input[type="checkbox"]') )
				value = $setting[0].checked;

			// Update the corresponding setting.
			this.model.set( $setting.data('setting'), value );

			// If the setting has a corresponding user setting,
			// update that as well.
			if ( userSetting = $setting.data('userSetting') )
				setUserSetting( userSetting, value );
		},

		updateChanges: function( model ) {
			if ( model.hasChanged() )
				_( model.changed ).chain().keys().each( this.update, this );
		}
	});

	/**
	 * wp.media.view.Settings.AttachmentDisplay
	 */
	media.view.Settings.AttachmentDisplay = media.view.Settings.extend({
		className: 'attachment-display-settings',
		template:  media.template('attachment-display-settings'),

		initialize: function() {
			var attachment = this.options.attachment;

			_.defaults( this.options, {
				userSettings: false
			});

			media.view.Settings.prototype.initialize.apply( this, arguments );
			this.model.on( 'change:link', this.updateLinkTo, this );

			if ( attachment )
				attachment.on( 'change:uploading', this.render, this );
		},

		dispose: function() {
			var attachment = this.options.attachment;
			if ( attachment )
				attachment.off( null, null, this );

			media.view.Settings.prototype.dispose.apply( this, arguments );
		},

		render: function() {
			var attachment = this.options.attachment;
			if ( attachment ) {
				_.extend( this.options, {
					sizes: attachment.get('sizes'),
					type:  attachment.get('type')
				});
			}

			media.view.Settings.prototype.render.call( this );
			this.updateLinkTo();
			return this;
		},

		updateLinkTo: function() {
			var linkTo = this.model.get('link'),
				$input = this.$('.link-to-custom'),
				attachment = this.options.attachment;

			if ( 'none' === linkTo || 'embed' === linkTo || ( ! attachment && 'custom' !== linkTo ) ) {
				$input.hide();
				return;
			}

			if ( attachment ) {
				if ( 'post' === linkTo ) {
					$input.val( attachment.get('link') );
				} else if ( 'file' === linkTo ) {
					$input.val( attachment.get('url') );
				} else if ( ! this.model.get('linkUrl') ) {
					$input.val('http://');
				}

				$input.prop( 'readonly', 'custom' !== linkTo );
			}

			$input.show();

			// If the input is visible, focus and select its contents.
			if ( $input.is(':visible') )
				$input.focus()[0].select();
		}
	});

	/**
	 * wp.media.view.Settings.Gallery
	 */
	media.view.Settings.Gallery = media.view.Settings.extend({
		className: 'gallery-settings',
		template:  media.template('gallery-settings')
	});

	/**
	 * wp.media.view.Attachment.Details
	 */
	media.view.Attachment.Details = media.view.Attachment.extend({
		tagName:   'div',
		className: 'attachment-details',
		template:  media.template('attachment-details'),

		events: {
			'change [data-setting]':          'updateSetting',
			'change [data-setting] input':    'updateSetting',
			'change [data-setting] select':   'updateSetting',
			'change [data-setting] textarea': 'updateSetting',
			'click .delete-attachment':       'deleteAttachment',
			'click .edit-attachment':         'editAttachment',
			'click .refresh-attachment':      'refreshAttachment',
			'click .changebg-attachment':'changebgAttachment',
		},

		initialize: function() {
			this.focusManager = new media.view.FocusManager({
				el: this.el
			});

			media.view.Attachment.prototype.initialize.apply( this, arguments );
		},

		render: function() {
			media.view.Attachment.prototype.render.apply( this, arguments );
			this.focusManager.focus();
			return this;
		},

		deleteAttachment: function( event ) {
			event.preventDefault();

			if ( confirm( l10n.warnDelete ) )
				this.model.destroy();
		},

		editAttachment: function() {
			this.$el.addClass('needs-refresh');
		},
		changebgAttachment:function(event){
			var p = jQuery(".media-frame-content:visible");
			if(p.hasClass("imagebg")){
				p.removeClass('imagebg');
			}else{
				p.addClass('imagebg');
			}
			
		},
		refreshAttachment: function( event ) {
			this.$el.removeClass('needs-refresh');
			event.preventDefault();
			this.model.fetch();
		}
	});

	/**
	 * wp.media.view.AttachmentCompat
	 */
	media.view.AttachmentCompat = media.View.extend({
		tagName:   'form',
		className: 'compat-item',

		events: {
			'submit':          'preventDefault',
			'change input':    'save',
			'change select':   'save',
			'change textarea': 'save'
		},

		initialize: function() {
			this.focusManager = new media.view.FocusManager({
				el: this.el
			});

			this.model.on( 'change:compat', this.render, this );
		},

		dispose: function() {
			if ( this.$(':focus').length )
				this.save();

			return media.View.prototype.dispose.apply( this, arguments );
		},

		render: function() {
			var compat = this.model.get('compat');
			if ( ! compat || ! compat.item )
				return;

			this.views.detach();
			this.$el.html( compat.item );
			this.views.render();

			this.focusManager.focus();
			return this;
		},

		preventDefault: function( event ) {
			event.preventDefault();
		},

		save: function( event ) {
			var data = {};

			if ( event )
				event.preventDefault();

			_.each( this.$el.serializeArray(), function( pair ) {
				data[ pair.name ] = pair.value;
			});

			this.model.saveCompat( data );
		}
	});

	/**
	 * wp.media.view.Iframe
	 */
	media.view.Iframe = media.View.extend({
		className: 'media-iframe',

		render: function() {
			this.views.detach();
			this.$el.html( '<iframe src="' + this.controller.state().get('src') + '" />' );
			this.views.render();
			return this;
		}
	});

	/**
	 * wp.media.view.Embed
	 */
	media.view.Embed = media.View.extend({
		className: 'media-embed',

		initialize: function() {
			this.url = new media.view.EmbedUrl({
				controller: this.controller,
				model:      this.model.props
			}).render();

			this.views.set([ this.url ]);
			this.refresh();
			this.model.on( 'change:type', this.refresh, this );
			this.model.on( 'change:loading', this.loading, this );
		},

		settings: function( view ) {
			if ( this._settings )
				this._settings.remove();
			this._settings = view;
			this.views.add( view );
		},

		refresh: function() {
			var type = this.model.get('type'),
				constructor;

			if ( 'image' === type )
				constructor = media.view.EmbedImage;
			else if ( 'link' === type )
				constructor = media.view.EmbedLink;
			else
				return;

			this.settings( new constructor({
				controller: this.controller,
				model:      this.model.props,
				priority:   40
			}) );
		},

		loading: function() {
			this.$el.toggleClass( 'embed-loading', this.model.get('loading') );
		}
	});

	/**
	 * wp.media.view.EmbedUrl
	 */
	media.view.EmbedUrl = media.View.extend({
		tagName:   'label',
		className: 'embed-url',

		events: {
			'input':  'url',
			'keyup':  'url',
			'change': 'url'
		},

		initialize: function() {
			this.$input = $('<input/>').attr( 'type', 'text' ).val( this.model.get('url') );
			this.input = this.$input[0];

			this.spinner = $('<span class="spinner" />')[0];
			this.$el.append([ this.input, this.spinner ]);

			this.model.on( 'change:url', this.render, this );
		},

		render: function() {
			var $input = this.$input;

			if ( $input.is(':focus') )
				return;

			this.input.value = this.model.get('url') || 'http://';
			media.View.prototype.render.apply( this, arguments );
			return this;
		},

		ready: function() {
			this.focus();
		},

		url: function( event ) {
			this.model.set( 'url', event.target.value );
		},

		focus: function() {
			var $input = this.$input;
			// If the input is visible, focus and select its contents.
			if ( $input.is(':visible') )
				$input.focus()[0].select();
		}
	});

	/**
	 * wp.media.view.EmbedLink
	 */
	media.view.EmbedLink = media.view.Settings.extend({
		className: 'embed-link-settings',
		template:  media.template('embed-link-settings')
	});

	/**
	 * wp.media.view.EmbedImage
	 */
	media.view.EmbedImage =  media.view.Settings.AttachmentDisplay.extend({
		className: 'embed-image-settings',
		template:  media.template('embed-image-settings'),

		initialize: function() {
			media.view.Settings.AttachmentDisplay.prototype.initialize.apply( this, arguments );
			this.model.on( 'change:url', this.updateImage, this );
		},

		updateImage: function() {
			this.$('img').attr( 'src', this.model.get('url') );
		}
	});
}(jQuery));
;

/* shortcode: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-includes/js/shortcode.min.js) */
window.wp=window.wp||{},function(){wp.shortcode={next:function(a,b,c){var d,e,f=wp.shortcode.regexp(a);return f.lastIndex=c||0,(d=f.exec(b))?"["===d[1]&&"]"===d[7]?wp.shortcode.next(a,b,f.lastIndex):(e={index:d.index,content:d[0],shortcode:wp.shortcode.fromMatch(d)},d[1]&&(e.match=e.match.slice(1),e.index++),d[7]&&(e.match=e.match.slice(0,-1)),e):void 0},replace:function(a,b,c){return b.replace(wp.shortcode.regexp(a),function(a,b,d,e,f,g,h,i){if("["===b&&"]"===i)return a;var j=c(wp.shortcode.fromMatch(arguments));return j?b+j+i:a})},string:function(a){return new wp.shortcode(a).string()},regexp:_.memoize(function(a){return new RegExp("\\[(\\[?)("+a+")(?![\\w-])([^\\]\\/]*(?:\\/(?!\\])[^\\]\\/]*)*?)(?:(\\/)\\]|\\](?:([^\\[]*(?:\\[(?!\\/\\2\\])[^\\[]*)*)(\\[\\/\\2\\]))?)(\\]?)","g")}),attrs:_.memoize(function(a){var b,c,d={},e=[];for(b=/(\w+)\s*=\s*"([^"]*)"(?:\s|$)|(\w+)\s*=\s*\'([^\']*)\'(?:\s|$)|(\w+)\s*=\s*([^\s\'"]+)(?:\s|$)|"([^"]*)"(?:\s|$)|(\S+)(?:\s|$)/g,a=a.replace(/[\u00a0\u200b]/g," ");c=b.exec(a);)c[1]?d[c[1].toLowerCase()]=c[2]:c[3]?d[c[3].toLowerCase()]=c[4]:c[5]?d[c[5].toLowerCase()]=c[6]:c[7]?e.push(c[7]):c[8]&&e.push(c[8]);return{named:d,numeric:e}}),fromMatch:function(a){var b;return b=a[4]?"self-closing":a[6]?"closed":"single",new wp.shortcode({tag:a[2],attrs:a[3],type:b,content:a[5]})}},wp.shortcode=_.extend(function(a){_.extend(this,_.pick(a||{},"tag","attrs","type","content"));var b=this.attrs;this.attrs={named:{},numeric:[]},b&&(_.isString(b)?this.attrs=wp.shortcode.attrs(b):_.isEqual(_.keys(b),["named","numeric"])?this.attrs=b:_.each(a.attrs,function(a,b){this.set(b,a)},this))},wp.shortcode),_.extend(wp.shortcode.prototype,{get:function(a){return this.attrs[_.isNumber(a)?"numeric":"named"][a]},set:function(a,b){return this.attrs[_.isNumber(a)?"numeric":"named"][a]=b,this},string:function(){var a="["+this.tag;return _.each(this.attrs.numeric,function(b){a+=/\s/.test(b)?' "'+b+'"':" "+b}),_.each(this.attrs.named,function(b,c){a+=" "+c+'="'+b+'"'}),"single"===this.type?a+"]":"self-closing"===this.type?a+" /]":(a+="]",this.content&&(a+=this.content),a+"[/"+this.tag+"]")}})}(),function(){wp.html=_.extend(wp.html||{},{attrs:function(a){var b,c;return"/"===a[a.length-1]&&(a=a.slice(0,-1)),b=wp.shortcode.attrs(a),c=b.named,_.each(b.numeric,function(a){/\s/.test(a)||(c[a]="")}),c},string:function(a){var b="<"+a.tag,c=a.content||"";return _.each(a.attrs,function(a,c){b+=" "+c,""!==a&&(_.isBoolean(a)&&(a=a?"true":"false"),b+='="'+a+'"')}),a.single?b+" />":(b+=">",b+=_.isObject(c)?wp.html.string(c):c,b+"</"+a.tag+">")}})}();;

/* media-editor: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-includes/js/media-editor.min.js) */
!function(a){var b={};wp.media.string={props:function(a,b){var c,d,e,f,g,h=wp.media.view.settings.defaultProps;return g=function(a){return"image"!==a.type||a.alt||(a.alt=a.caption||a.title||"",a.alt=a.alt.replace(/<\/?[^>]+>/g,""),a.alt=a.alt.replace(/[\r\n]+/g," ")),a},a=a?_.clone(a):{},b&&b.type&&(a.type=b.type),"image"===a.type&&(a=_.defaults(a||{},{align:h.align||getUserSetting("align","none"),size:h.size||getUserSetting("imgsize","medium"),url:"",classes:[]})),b?(a.title=a.title||b.title,c=a.link||h.link||getUserSetting("urlbutton","file"),"file"===c||"embed"===c?d=b.url:"post"===c?d=b.link:"custom"===c&&(d=a.linkUrl),a.linkUrl=d||"","image"===b.type?(a.classes.push("qf-image-"+b.id),f=b.sizes,e=f&&f[a.size]?f[a.size]:b,_.extend(a,_.pick(b,"align","caption","alt"),{width:e.width,height:e.height,src:e.url,captionId:"attachment_"+b.id})):"video"===b.type||"audio"===b.type?_.extend(a,_.pick(b,"title","type","icon","mime")):(a.title=a.title||b.filename,a.rel=a.rel||"attachment qf-att-"+b.id),g(a)):g(a)},link:function(a,b){var c;return a=wp.media.string.props(a,b),c={tag:"a",content:a.title,attrs:{href:a.linkUrl}},a.rel&&(c.attrs.rel=a.rel),wp.html.string(c)},audio:function(a,b){return wp.media.string._audioVideo("audio",a,b)},video:function(a,b){return wp.media.string._audioVideo("video",a,b)},_audioVideo:function(a,b,c){var d,e,f;return b=wp.media.string.props(b,c),"embed"!==b.link?wp.media.string.link(b):(d={},"video"===a&&(c.width&&(d.width=c.width),c.height&&(d.height=c.height)),f=c.filename.split(".").pop(),_.contains(wp.media.view.settings.embedExts,f)?(d[f]=c.url,e=wp.shortcode.string({tag:a,attrs:d})):wp.media.string.link(b))},image:function(a,b){var c,d,e,f,g={};return a=wp.media.string.props(a,b),d=a.classes||[],g.src="undefined"!=typeof b?b.url:a.url,_.extend(g,_.pick(a,"width","height","alt")),a.align&&!a.caption&&d.push("align"+a.align),a.size&&d.push("size-"+a.size),g["class"]=_.compact(d).join(" "),c={tag:"img",attrs:g,single:!0},a.linkUrl&&(c={tag:"a",attrs:{href:a.linkUrl},content:c}),f=wp.html.string(c),a.caption&&(e={},g.width&&(e.width=g.width),a.captionId&&(e.id=a.captionId),a.align&&(e.align="align"+a.align),f=wp.shortcode.string({tag:"caption",attrs:e,content:f+" "+a.caption})),f}},wp.media.gallery=function(){var a={};return{defaults:{order:"ASC",id:wp.media.view.settings.post.id,itemtag:"dl",icontag:"dt",captiontag:"dd",columns:"3",link:"post",size:"thumbnail",orderby:"menu_order ID"},attachments:function(b){var c,d,e,f,g=b.string(),h=a[g];return delete a[g],h?h:(c=_.defaults(b.attrs.named,wp.media.gallery.defaults),d=_.pick(c,"orderby","order"),d.type="image",d.perPage=-1,void 0!==c.orderby&&(c._orderByField=c.orderby),"rand"===c.orderby&&(c._orderbyRandom=!0),(!c.orderby||/^menu_order(?: ID)?$/i.test(c.orderby))&&(d.orderby="menuOrder"),c.ids?(d.post__in=c.ids.split(","),d.orderby="post__in"):c.include&&(d.post__in=c.include.split(",")),c.exclude&&(d.post__not_in=c.exclude.split(",")),d.post__in||(d.uploadedTo=c.id),f=_.omit(c,"id","ids","include","exclude","orderby","order"),e=wp.media.query(d),e.gallery=new Backbone.Model(f),e)},shortcode:function(b){var c,d,e=b.props.toJSON(),f=_.pick(e,"orderby","order");return b.gallery&&_.extend(f,b.gallery.toJSON()),f.ids=b.pluck("id"),e.uploadedTo&&(f.id=e.uploadedTo),delete f.orderby,f._orderbyRandom?f.orderby="rand":f._orderByField&&"rand"!=f._orderByField&&(f.orderby=f._orderByField),delete f._orderbyRandom,delete f._orderByField,f.ids&&"post__in"===f.orderby&&delete f.orderby,_.each(wp.media.gallery.defaults,function(a,b){a===f[b]&&delete f[b]}),c=new wp.shortcode({tag:"gallery",attrs:f,type:"single"}),d=new wp.media.model.Attachments(b.models,{props:e}),d.gallery=b.gallery,a[c.string()]=d,c},edit:function(a){var b,c,d=wp.shortcode.next("gallery",a),e=wp.media.gallery.defaults.id;if(d&&d.content===a)return d=d.shortcode,_.isUndefined(d.get("id"))&&!_.isUndefined(e)&&d.set("id",e),b=wp.media.gallery.attachments(d),c=new wp.media.model.Selection(b.models,{props:b.props.toJSON(),multiple:!0}),c.gallery=b.gallery,c.more().done(function(){c.props.set({query:!1}),c.unmirror(),c.props.unset("orderby")}),this.frame&&this.frame.dispose(),this.frame=wp.media({frame:"post",state:"gallery-edit",title:wp.media.view.l10n.editGalleryTitle,editing:!0,multiple:!0,selection:c}).open(),this.frame}}}();
if (typeof top.iframeVCWin == 'undefined'){

wp.media.featuredImage={get:function(){return wp.media.view.settings.post.featuredImageId},set:function(b){
		var c=wp.media.view.settings;
		c.post.featuredImageId=b?b.id:-1,wp.media.post("set-post-thumbnail",{json:!0,post_id:c.post.id,thumbnail_id:c.post.featuredImageId,islib:b.attributes.islib?b.attributes.full_url:"",_qfnonce:c.post.nonce}).done(function(b){a(".inside","#postimagediv").html(b)})

	},frame:function(){ wp.global_curr_frame = this._frame;return this._frame?this._frame:(this._frame=wp.media({state:"featured-image",states:[new wp.media.controller.FeaturedImage]}),this._frame.on("toolbar:create:featured-image",function(a){this.createSelectToolbar(a,{text:wp.media.view.l10n.setFeaturedImage})},this._frame),this._frame.state("featured-image").on("select",this.select),wp.global_curr_frame = this._frame,this._frame)},select:function(){var a=wp.media.view.settings,b=this.get("selection").single();a.post.featuredImageId&&wp.media.featuredImage.set(b?b:-1)},init:function(){a("#postimagediv").on("click","#set-post-thumbnail",function(a){a.preventDefault(),a.stopPropagation(),wp.media.featuredImage.frame().open()}).on("click","#remove-post-thumbnail",function(){wp.media.view.settings.post.featuredImageId=-1})}},a(wp.media.featuredImage.init);
}else{
		
		wp.media.featuredImage = {
		get: function() {
			return top.iframeVCWin.wp.media.view.settings.post.featuredImageId;
		},

		set: function( b ) {
			var settings = top.iframeVCWin.wp.media.view.settings;

			settings.post.featuredImageId = b?b.id:-1;
			top.iframeVCWin.wp.media.post( 'set-post-thumbnail', {
				json:         true,
				post_id:      wp.media.view.settings.post.id,
				thumbnail_id: settings.post.featuredImageId,
				islib:b.attributes.islib?b.attributes.full_url:"",
				_qfnonce:     settings.post.nonce
			}).done( function( html ) {
				a( '.inside', '#postimagediv' ).html( html );
			});
		},

		frame: function() {
			
			top.iframeVCWin.wp.global_curr_frame = this._frame;
			if ( this._frame )
				return this._frame;
			this._frame = top.iframeVCWin.wp.media({
				state: 'featured-image',
				//onlylocal:onlylocal,
				states: [ new top.iframeVCWin.wp.media.controller.FeaturedImage() ]
			});

			this._frame.on( 'toolbar:create:featured-image', function( toolbar ) {
				this.createSelectToolbar( toolbar, {
					text: top.iframeVCWin.wp.media.view.l10n.setFeaturedImage
				});
			}, this._frame );

			this._frame.state('featured-image').on( 'select', this.select );
			top.iframeVCWin.wp.global_curr_frame = this._frame;
			return this._frame;
		},

		select: function() {
			var settings = top.iframeVCWin.wp.media.view.settings,
				selection = this.get('selection').single();

			if ( ! settings.post.featuredImageId )
				return;

			wp.media.featuredImage.set( selection ? selection : -1 );
		},

		init: function() {
			// Open the content media manager to the 'featured image' tab when
			// the post thumbnail is clicked.
			a('#postimagediv').on( 'click', '#set-post-thumbnail', function( event ) {
				event.preventDefault();
				// Stop propagation to prevent thickbox from activating.
				event.stopPropagation();
				//var onlylocal = false;
				//if(jQuery(this).closest("body").hasClass("admin")){
				//	onlylocal = true;
				//}
				wp.media.featuredImage.frame().open();

			// Update the featured image id when the 'remove' link is clicked.
			}).on( 'click', '#remove-post-thumbnail', function() {
				top.iframeVCWin.wp.media.view.settings.post.featuredImageId = -1;
			});
		}
	};

	a( wp.media.featuredImage.init );

}

wp.media.editor={insert:function(a){var b,c="undefined"!=typeof tinymce,d="undefined"!=typeof QTags,e=window.qfActiveEditor;if(window.send_to_editor)return window.send_to_editor.apply(this,arguments);if(e)c&&(b=!tinymce.activeEditor||"mce_fullscreen"!=tinymce.activeEditor.id&&"qf_mce_fullscreen"!=tinymce.activeEditor.id?tinymce.get(e):tinymce.activeEditor);else if(c&&tinymce.activeEditor)b=tinymce.activeEditor,e=window.qfActiveEditor=b.id;else if(!d)return!1;if(b&&!b.isHidden()?(tinymce.isIE&&b.windowManager.insertimagebookmark&&b.selection.moveToBookmark(b.windowManager.insertimagebookmark),-1!==a.indexOf("[caption")?b.qfSetImgCaption&&(a=b.qfSetImgCaption(a)):-1!==a.indexOf("[gallery")?b.plugins.qfgallery&&(a=b.plugins.qfgallery._do_gallery(a)):0===a.indexOf("[embed")&&b.plugins.bitwebcms&&(a=b.plugins.bitwebcms._setEmbed(a)),b.execCommand("mceInsertContent",!1,a)):d?QTags.insertContent(a):document.getElementById(e).value+=a,window.tb_remove)try{window.tb_remove()}catch(f){}},add:function(c,d){var e=this.get(c);return e?e:(e=b[c]=wp.media(_.defaults(d||{},{frame:"post",state:"insert",title:wp.media.view.l10n.addMedia,multiple:!0})),e.on("insert",function(b){var c=e.state();b=b||c.get("selection"),b&&a.when.apply(a,b.map(function(a){var b=c.display(a).toJSON();return this.send.attachment(b,a.toJSON())},this)).done(function(){wp.media.editor.insert(_.toArray(arguments).join("\n\n"))})},this),e.state("gallery-edit").on("update",function(a){this.insert(wp.media.gallery.shortcode(a).string())},this),e.state("embed").on("select",function(){var a=e.state(),b=a.get("type"),c=a.props.toJSON();c.url=c.url||"","link"===b?(_.defaults(c,{title:c.url,linkUrl:c.url}),this.send.link(c).done(function(a){wp.media.editor.insert(a)})):"image"===b&&(_.defaults(c,{title:c.url,linkUrl:"",align:"none",link:"none"}),"none"===c.link?c.linkUrl="":"file"===c.link&&(c.linkUrl=c.url),this.insert(wp.media.string.image(c)))},this),e.state("featured-image").on("select",wp.media.featuredImage.select),e.setState(e.options.state),e)},id:function(a){return a?a:(a=qfActiveEditor,!a&&"undefined"!=typeof tinymce&&tinymce.activeEditor&&(a=tinymce.activeEditor.id),a=a||"")},get:function(a){return a=this.id(a),b[a]},remove:function(a){a=this.id(a),delete b[a]},send:{attachment:function(a,b){var c,d,e=b.caption;return wp.media.view.settings.captions||delete b.caption,a=wp.media.string.props(a,b),c={id:b.id,post_content:b.description,post_excerpt:e},a.linkUrl&&(c.url=a.linkUrl),"image"===b.type?(d=wp.media.string.image(a),_.each({align:"align",size:"image-size",alt:"image_alt"},function(b,d){a[d]&&(c[b]=a[d])})):"video"===b.type?d=wp.media.string.video(a,b):"audio"===b.type?d=wp.media.string.audio(a,b):(d=wp.media.string.link(a),c.post_title=a.title),wp.media.post("send-attachment-to-editor",{nonce:wp.media.view.settings.nonce.sendToEditor,attachment:c,html:d,post_id:wp.media.view.settings.post.id})},link:function(a){return wp.media.post("send-link-to-editor",{nonce:wp.media.view.settings.nonce.sendToEditor,src:a.linkUrl,title:a.title,html:wp.media.string.link(a),post_id:wp.media.view.settings.post.id})}},open:function(a,b){var c,d;return b=b||{},a=this.id(a),"undefined"!=typeof tinymce&&(d=tinymce.get(a),tinymce.isIE&&d&&!d.isHidden()&&(d.focus(),d.windowManager.insertimagebookmark=d.selection.getBookmark())),c=this.get(a),(!c||c.options&&b.state!==c.options.state)&&(c=this.add(a,b)),c.open()},init:function(){a(document.body).on("click",".insert-media",function(b){var c=a(this),d=c.data("editor"),e={frame:"post",state:"insert",title:wp.media.view.l10n.addMedia,multiple:!0};b.preventDefault(),c.blur(),c.hasClass("gallery")&&(e.state="gallery",e.title=wp.media.view.l10n.createGalleryTitle),wp.media.editor.open(d,e)})}},_.bindAll(wp.media.editor,"open"),a(wp.media.editor.init)}(jQuery);;

/* qfe_qfy_editor_js_view: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-content/plugins/qfy_editor/assets/js/backend/composer-view.js) */
/* =========================================================
 * composer-view.js v0.2.1
 * =========================================================
 * Copyright 2013 QFEditor
 *
 * Visual composer backbone/underscore version
 * ========================================================= */
(function ($) {
    var i18n = window.i18nLocale,
        store = vc.storage,
        Shortcodes = vc.shortcodes;
    /**
     * Default view for shortcode as block inside Visual composer design mode.
     * @type {*}
     */
    vc.clone_index = 1;
    var ShortcodeView = vc.shortcode_view = Backbone.View.extend({
        tagName:'div',
        $content:'',
        use_default_content:false,
        params:{},
        events:{
            'click .column_delete':'deleteShortcode',
            'click .column_add':'addElement',
            'click .column_edit, .column_edit_trigger':'editElement',
            'click .column_clone':'clone'
        },
        removeView:function () {
            this.remove();
        },
        initialize:function () {
            this.model.bind('destroy', this.removeView, this);
            this.model.bind('change:params', this.changeShortcodeParams, this);
            this.model.bind('change_parent_id', this.changeShortcodeParent, this);
            this.createParams();
        },
        createParams:function () {
            var tag = this.model.get('shortcode'),
                params = _.isObject(vc.map[tag]) && _.isArray(vc.map[tag].params) ? vc.map[tag].params : [];
            _.each(params, function (param) {
                this.params[param.pn] = param;
            }, this);
        },
        setContent:function () {
            this.$content = this.$el.find('> .qfe_element_wrapper > .vc_container_for_children');
        },
        setEmpty:function () {
        },
        unsetEmpty:function () {

        },
        checkIsEmpty:function () {
            if (this.model.get('parent_id')) {
                vc.app.views[this.model.get('parent_id')].checkIsEmpty();
            }
        },

        /**
         * Convert html into correct element
         * @param html
         */
        html2element:function (html) {
            var attributes = {},
                $template;
            if (_.isString(html)) {
                this.template = _.template(html);
                $template = $($.trim(this.template(this.model.toJSON())));
            } else {
                this.template = html;
                $template = html;
            }
            _.each($template.get(0).attributes, function (attr) {
                attributes[attr.name] = attr.value;
            });
            this.$el.attr(attributes).html($template.html());
            this.setContent();
            this.renderContent();
        },
        render:function () {
            if ($('#vc-shortcode-template-' + this.model.get('shortcode')).is('script')) {
                this.html2element(_.template($('#vc-shortcode-template-' + this.model.get('shortcode')).html(), this.model.toJSON()));
            } else {
                var params = this.model.get('params');
                $.ajax({
                    type:'POST',
                    url:window.ajaxurl,
                    data:{
                        action:'qfe_get_element_backend_html',
                        data_element:this.model.get('shortcode'),
                        data_width:_.isUndefined(params.width) ? '1/1' : params.width
                    },
                    dataType:'html',
                    context:this
                }).done(function (html) {
                        this.html2element(html);
                    });
            }
            return this;
        },
        renderContent:function () {
            this.$el.attr('data-model-id', this.model.get('id'));
            this.$el.data('model', this.model);
            return this;
        },
        changedContent:function (view) {
        },
        _loadDefaults:function () {
            var tag = this.model.get('shortcode');
            if (this.use_default_content === true && _.isObject(vc.map[tag]) && _.isString(vc.map[tag].default_content) && vc.map[tag].default_content.length) {
                this.use_default_content = false;
                Shortcodes.createFromString(vc.map[tag].default_content, this.model);
            }
        },
        _callJsCallback:function () {
            //Fire INIT callback if it is defined
            var tag = this.model.get('shortcode');
            if (_.isObject(vc.map[tag]) && _.isObject(vc.map[tag].js_callback) && !_.isUndefined(vc.map[tag].js_callback.init)) {
                var fn = vc.map[tag].js_callback.init;
                window[fn](this.$el);
            }
        },
        ready:function (e) {
            this._loadDefaults();
            this._callJsCallback();
            if (this.model.get('parent_id') && _.isObject(vc.app.views[this.model.get('parent_id')])) {
                vc.app.views[this.model.get('parent_id')].changedContent(this);
            }
            return this;
        },
        // View utils {{
        addShorcode:function (model) {
            var view = new ShortcodeView({model:model});
            this.$content.append(view.render().el);
            app.setSortable();
        },
        changeShortcodeParams:function (model) {
            var params = model.get('params'),
                settings = vc.map[model.get('shortcode')],
                inverted_value;
            if (_.isArray(settings.params)) {
                _.each(settings.params, function (p) {
                    var name = p.pn,
                        value = params[name],
                        $wrapper = this.$el.find('> .qfe_element_wrapper'),
                        label_value = value,
                        $admin_label = $wrapper.children('.admin_label_' + name);
                    if (_.isObject(vc.atts[p.type]) && _.isFunction(vc.atts[p.type].render)) {
                        value = vc.atts[p.type].render.call(this, p, value);
                    }
                    if ($wrapper.children('.' + p.pn).is('div, h1,h2,h3,h4,h5,h6, span, i, b, strong, button')) {
                        $wrapper.children('[name=' + p.pn + ']').html(value);
                    } else if ($wrapper.children('.' + p.pn).is('iframe')) {
                        $wrapper.children('[name=' + p.pn + ']').attr('src', value);
                    } else if ($wrapper.children('.' + p.pn).is('img')) {
                      var $img = $wrapper.children('[name=' + p.pn + ']');
                      if(value && value.match(/^\d+$/)) {
                        $.ajax({
                          type:'POST',
                          url:window.ajaxurl,
                          data:{
                            action:'qfe_single_image_src',
                            content: value,
                            size: 'thumbnail'
                          },
                          dataType:'html',
                          context:this
                        }).done(function (url) {
                            $img.attr('src', url);
                          });
                      } else if(value) {
                        $img.attr('src', value);
                      }
                    } else {
                        $wrapper.children('[name=' + p.pn + ']').val(value);
                    }
                    if ($admin_label.length) {
                        if (_.isObject(p.value) && !_.isArray(p.value) && p.type == 'checkbox') {
                            inverted_value = _.invert(p.value);
                            label_value = _.map(value.split(/[\s]*\,[\s]*/),function (val) {
                                return _.isString(inverted_value[val]) ? inverted_value[val] : val;
                            }).join(', ');
                        } else if (_.isObject(p.value) && !_.isArray(p.value)) {
                            inverted_value = _.invert(p.value);
                            label_value = _.isString(inverted_value[value]) ? inverted_value[value] : value;
                        }
                        $admin_label.html('<label>' + $admin_label.find('label').text() + '</label>: ' + label_value);
                        if (value !== '' && !_.isUndefined(value))
                            $admin_label.show().removeClass('hidden-label');
                        else
                            $admin_label.hide().addClass('hidden-label');
                    }
                }, this);
            }
            if (this.model.get('parent_id') !== false && _.isObject(view = vc.app.views[this.model.get('parent_id')])) {
                view.checkIsEmpty();
            }
        },
        changeShortcodeParent:function (model) {
            if (this.model.get('parent_id') === false) return model;
            var $parent_view = $('[data-model-id=' + this.model.get('parent_id') + ']'),
                view = vc.app.views[this.model.get('parent_id')];
            this.$el.appendTo($parent_view.find('> .qfe_element_wrapper > .qfe_column_container'));
            view.checkIsEmpty();
        },
        // }}
        // Event Actions {{
        deleteShortcode:function (e) {
            if (_.isObject(e)) e.preventDefault();
            var answer = confirm(i18n.press_ok_to_delete_section);
            if (answer === true) this.model.destroy();
        },

        addElement:function (e) {
            if (_.isObject(e)) e.preventDefault();
            new ElementBlockView({model:{position_to_add:!_.isObject(e) || !$(e.currentTarget).closest('.bottom-controls').hasClass('bottom-controls') ? 'start' : 'end'}}).show(this);
        },
        editElement:function (e) {
            if (_.isObject(e)) e.preventDefault();
            var settings_view = new SettingsView({model:this.model});
            settings_view.show();
        },
        clone:function (e) {
            if (_.isObject(e)) e.preventDefault();
            vc.clone_index = vc.clone_index / 10;
            return this.cloneModel(this.model, this.model.get('parent_id'));
        },
        cloneModel:function (model, parent_id, save_order) {
            var shortcodes_to_resort = [],
                new_order = _.isBoolean(save_order) && save_order === true ? model.get('order') : parseFloat(model.get('order')) + vc.clone_index,
                model_clone = Shortcodes.create({shortcode:model.get('shortcode'), id:vc_guid(), parent_id:parent_id, order:new_order, cloned:true, cloned_from:model.toJSON(), params:_.extend({}, model.get('params'))});
            _.each(Shortcodes.where({parent_id:model.id}), function (shortcode) {
                this.cloneModel(shortcode, model_clone.get('id'), true);
            }, this);
            return model_clone;
        }
        // }}
    });
    /**
     * Post custom css
     * @type {Number}
     */
    var PostCustomCssBlockView = vc.post_custom_css_block_view = Backbone.View.extend({
      tagName:'div',
      className:'qfe_bootstrap_modals',
      template:_.template($('#qfe-post-custom-css-modal-template').html() || '<div></div>'),
      events: {
        'click .qfe_save_edit_form': 'save',
        'keydown .qfe_custom_post_css_editor': 'addTab'
      },
      initialize: function() {

      },
      render: function() {
        this.$field = $('#qfe_custom_post_css_field');
        $('body').append(this.$el.html(this.template()));
        this.$editor = this.$el.find('.qfe_custom_post_css_editor');
        this.$editor.val(this.$field.val());
      },
      addTab: function(e) {
        if(e.keyCode === 9) {
          // get caret position/selection
          var el = this.$editor.get(0),
              start = el.selectionStart,
              end = el.selectionEnd;
            this.$editor.val(this.$editor.val().substring(0, start)
            + "\t"
            + this.$editor.val().substring(end));
          el.selectionStart = el.selectionEnd = start + 1;
          // prevent the focus lose
          e.preventDefault();
        }
      },
      save: function() {
        this.$field.val(this.$editor.val());
        this.close();
      },
      show:function () {
        this.render();
        this.$el.modal('show');
      },
      close:function () {
        this.$el.modal('hide');
      }
    });
    /**
     * Elements list
     * @type {*}
     */
    vc.element_start_index = 0;
    var ElementBlockView = vc.element_block_view = Backbone.View.extend({
        tagName:'div',
        className:'qfe_bootstrap_modals',
        template:_.template($('#qfe-elements-list-modal-template').html() || '<div></div>'),
        data_saved:false,
        events:{
            'click [data-element]':'createElement',
            'click .close':'close',
            'hidden':'removeView',
            'shown':'setupShown',
            'click .qfe-content-layouts-container .isotope-filter a':'filterElements',
            'keyup #vc_elements_name_filter':'filterElements'
        },
        initialize:function () {
            if (_.isUndefined(this.model)) this.model = {position_to_add:'end'};
        },
        render:function () {
            var that = this,
                $container = this.container.$content,
                item_selector,
                $list,
                tag,
                not_in;
            $('body').append(this.$el.html(this.template()));
            $list = this.$el.find('.qfe-elements-list'),
            item_selector = '.qfe-layout-element-button',
            tag = this.container.model ? this.container.model.get('shortcode') : 'vc_column',
            not_in = this._getNotIn(tag);
            // New vision
            var as_parent = tag && !_.isUndefined(vc.map[tag].as_parent) ? vc.map[tag].as_parent : false;
            if (_.isObject(as_parent)) {
                var parent_selector = [];
                if (_.isString(as_parent.only)) {
                    parent_selector.push(_.reduce(as_parent.only.split(','), function (memo, val) {
                        return memo + ( _.isEmpty(memo) ? '' : ',') + '[data-element="' + $.trim(val) + '"]';
                    }, ''));
                }
                if (_.isString(as_parent.except)) {
                    parent_selector.push(_.reduce(as_parent.except.split(','), function (memo, val) {
                        return memo + ( _.isEmpty(memo) ? '' : ',') + '[data-element!="' + $.trim(val) + '"]';
                    }, ''));
                }
                item_selector += parent_selector.join(',');
            } else {
                item_selector += not_in;
            }
            // OLD fashion
            if (tag !== false && tag !== false && !_.isUndefined(vc.map[tag].allowed_container_element)) {
                if (vc.map[tag].allowed_container_element === false) {
                    item_selector += ':not([data-is-container=true])';
                } else if (_.isString(vc.map[tag].allowed_container_element)) {
                    item_selector += ':not([data-is-container=true][data-element!=' + vc.map[tag].allowed_container_element + '])';
                }
            }
            $('.qfe-content-layouts', $list).isotope({
                itemSelector:item_selector,
                layoutMode:'fitRows',
                filter:null
            });

            $('.qfe-content-layouts', $list).isotope('reloadItems');
            $('.qfe-content-layouts-container .isotope-filter a:first', $list).trigger('click');
            $('[data-filter]', this.$el).each(function () {
                if (!$($(this).data('filter') + ':visible', $list).length) $(this).hide();
            });
            return this;
        },
        _getNotIn:_.memoize(function (tag) {
            var selector = _.reduce(vc.map, function (memo, shortcode) {
                var separator = _.isEmpty(memo) ? '' : ',';
                if (_.isObject(shortcode.as_child)) {
                    if (_.isString(shortcode.as_child.only)) {
                        if (!_.contains(shortcode.as_child.only.split(','), tag)) {
                            memo += separator + '[data-element=' + shortcode.base + ']';
                        }
                    }
                    if (_.isString(shortcode.as_child.except)) {
                        if (_.contains(shortcode.as_child.except.split(','), tag)) {
                            memo += separator + '[data-element=' + shortcode.base + ']';
                        }
                    }
                } else if (shortcode.as_child === false) {
                    memo += separator + '[data-element=' + shortcode.base + ']';
                }
                return memo;
            }, '');
            return _.isEmpty(selector) ? '' : ':not(' + selector + ')';
        }),
        filterElements:function (e) {
            e.stopPropagation();
            var $list = this.$el.find('.qfe-elements-list'),
                $control = $(e.currentTarget),
                filter = '',
                name_filter = $('#vc_elements_name_filter').val();
            if ($control.is('[data-filter]')) {
                $('.qfe-content-layouts-container .isotope-filter .active', $list).removeClass('active');
                $control.parent().addClass('active');
                filter = $control.data('filter');
                $('#vc_elements_name_filter').val('');
            } else if (name_filter.length > 0) {
                filter = ":contains('" + name_filter + "')";
                $('.qfe-content-layouts-container .isotope-filter .active', $list).removeClass('active');
            } else if(name_filter.length == 0) {
                $('.qfe-content-layouts-container .isotope-filter [data-filter="*"]').parent().addClass('active');
            }
            $('.qfe-content-layouts', $list).isotope({ filter:filter });
        },
        createElement:function (e) {
            var model, column, row;
            if (_.isObject(e)) e.preventDefault();
            var $button = $(e.currentTarget);
            if (this.container.$content.is('#visual_composer_content')) {
                row = Shortcodes.create({shortcode:'vc_row'});
                column = Shortcodes.create({shortcode:'vc_column', params:{width:'1/1'}, parent_id:row.id, root_id:row.id });
                if ($button.data('element') != 'vc_row') {
                    model = Shortcodes.create({
                        shortcode:$button.data('element'),
                        parent_id:column.id,
                        params:vc.getDefaults($button.data('element')),
                        root_id:row.id
                    });
                } else {
                    model = row;
                }
            } else {
                if ($button.data('element') == 'vc_row') {
                    row = model = Shortcodes.create({
                        shortcode:'vc_row_inner',
                        parent_id:this.container.model.id,
                        order:(this.model.position_to_add == 'start' ? this.getFirstPositionIndex() : Shortcodes.getNextOrder())
                    });
                    Shortcodes.create({shortcode:'vc_column_inner', params:{width:'1/1'}, parent_id:row.id, root_id:row.id });
                } else {
                    model = Shortcodes.create({
                        shortcode:$button.data('element'),
                        parent_id:this.container.model.id,
                        order:(this.model.position_to_add == 'start' ? this.getFirstPositionIndex() : Shortcodes.getNextOrder()),
                        params:vc.getDefaults($button.data('element')),
                        root_id:this.container.model.get('root_id')
                    });
                }
            }
            this.selected_model = _.isBoolean(vc.map[$button.data('element')].show_settings_on_create) && vc.map[$button.data('element')].show_settings_on_create === false ? false : model;
            this.$el.modal('hide');
            this.close();

        },
        getFirstPositionIndex:function () {
            vc.element_start_index -= 1;
            return vc.element_start_index;
        },
        removeView:function () {
            if (this.selected_model && this.selected_model.get('shortcode') != 'vc_row' && this.selected_model.get('shortcode') != 'vc_row_inner') {
                var settings_view = new SettingsView({model:this.selected_model});
                settings_view.show();
            }
            this.remove();
        },
        setupShown:function () {
            if(!vc.is_mobile) $('#vc_elements_name_filter').focus();
        },
        show:function (container) {
          this.container = container;
          this.render();
          this.$el.modal('show');
        },
        close:function () {
            this.$el.modal('hide');
        }
    });

    var SettingsView = Backbone.View.extend({
        tagName:'div',
        className:'qfe_bootstrap_modals',
        template:_.template($('#qfe-element-settings-modal-template').html() || '<div></div>'),
        textarea_html_checksum:'',
        dependent_elements:{},
        mapped_params:{},
        events:{
            'click .qfe_save_edit_form':'save',
            // 'click .close':'close',
            'hidden':'remove',
            'hide':'askSaveData',
            'shown':'loadContent'
        },
        content: function() {
          return this.$content;
        },
        window: function() {
          return window;
        },
        initialize:function () {
            var tag = this.model.get('shortcode'),
                params = _.isObject(vc.map[tag]) && _.isArray(vc.map[tag].params) ? vc.map[tag].params : [];
            _.bindAll(this, 'hookDependent');
            this.mapped_params = {};
            this.dependent_elements = {};
            _.each(params, function (param) {
                this.mapped_params[param.pn] = param;
            }, this);
        },
        render:function () {
            $('body').append(this.$el.html(this.template()));
            this.$content = this.$el.find('.modal-body > div');
            return this;
        },
        initDependency:function () {
            // setup dependencies
            _.each(this.mapped_params, function (param) {
                if (_.isObject(param) && _.isObject(param.dependency) && _.isString(param.dependency.element)) {
                    var $masters = $('[name=' + param.dependency.element + ']', this.$content),
                        $slave = $('[name= ' + param.pn + ']', this.$content);
                    _.each($masters, function (master) {
                        var $master = $(master),
                            rules = param.dependency;
                        if (!_.isArray(this.dependent_elements[$master.attr('name')])) this.dependent_elements[$master.attr('name')] = [];
                        this.dependent_elements[$master.attr('name')].push($slave);
                        $master.bind('keyup change', this.hookDependent);
                        this.hookDependent({currentTarget:$master}, [$slave]);
                        if (_.isString(rules.callback)) {
                            window[rules.callback].call(this);
                        }
                    }, this);
                }
            }, this);
        },
        hookDependent:function (e, dependent_elements) {
            var $master = $(e.currentTarget),
            master_value,
            is_empty;
            dependent_elements = _.isArray(dependent_elements) ? dependent_elements : this.dependent_elements[$master.attr('name')],
            master_value = $master.is(':checkbox') ? _.map(this.$content.find('[name=' + $(e.currentTarget).attr('name') + ']:checked'),
                    function (element) {
                    return $(element).val();
                })
                    : $master.val();
            is_empty = $master.is(':checkbox') ? !this.$content.find('[name=' + $master.attr('name') + ']:checked').length
                    : !master_value.length;
            if($master.is(':hidden') && !$master.is('[type=hidden]')) {
                _.each(dependent_elements, function($element) {
                    $element.closest('.vc_row-fluid').hide();
                });
            } else {
                _.each(dependent_elements, function ($element) {
                    var pn = $element.attr('name'),
                        rules = _.isObject(this.mapped_params[pn]) && _.isObject(this.mapped_params[pn].dependency) ? this.mapped_params[pn].dependency : {},
                        $param_block = $element.closest('.vc_row-fluid');
                    if (_.isBoolean(rules.not_empty) && rules.not_empty === true && !is_empty) { // Check is not empty show dependent Element.
                        $param_block.show();
                    } else if (_.isBoolean(rules.is_empty) && rules.is_empty === true && is_empty) {
                        $param_block.show();
                    } else if (_.intersection((_.isArray(rules.value) ? rules.value : [rules.value]), (_.isArray(master_value) ? master_value : [master_value])).length) {
                        $param_block.show();
                    } else {
                        $param_block.hide();
                    }
                    $element.trigger('change');
                }, this);
            }
            return this;
        },
        loadContent:function () {
            $.ajax({
                type:'POST',
                url:window.ajaxurl,
                data:{
                    action:'qfe_show_edit_form',
                    element:this.model.get('shortcode'),
                    post_id: $('#post_ID').val(),
                    shortcode:store.createShortcodeString(this.model.toJSON()) // TODO: do it on server-side
                },
                context:this
            }).done(function (data) {
                    this.$content.html(data);
                    this.$el.find('h3').text(this.$content.find('> [data-title]').data('title'));
                    this.initDependency();
                });
        },
        save:function (e) {
            if (_.isObject(e)) e.preventDefault();
            var params = this.getParams();
            this.model.save({params:params});
            if(parseInt(Backbone.VERSION)=== 0) {
                this.model.trigger('change:params', this.model);
            }
            this.data_saved = true;
            this.close();
            return this;
        },
        getParams: function() {
            var attributes_settings = this.mapped_params,
                params = jQuery.extend(true, {}, this.model.get('params'));
            _.each(attributes_settings, function (param) {
                params[param.pn] = vc.atts.parse.call(this, param);
            }, this);
            return params;
        },
        getCurrentParams: function() {
            var attributes_settings = this.mapped_params,
                params = jQuery.extend(true, {}, this.model.get('params'));
            _.each(attributes_settings, function (param) {
                if(_.isUndefined(params[param.pn])) params[param.pn] = '';
                if(param.type === "textarea_html") params[param.pn] = params[param.pn].replace(/\n/g, '');
            }, this);
            return params;
        },
        show:function () {
            this.render();
            this.$el.modal('show');
        },
        _killEditor:function () {
            if(!_.isUndefined(window.tinyMCE)) {
                $('textarea.textarea_html', this.$el).each(function () {
                    var id = $(this).attr('id');
                    window.tinyMCE.execCommand("mceRemoveControl", true, id);
                });
            }
        },
        dataNotChanged: function() {
            var current_params = this.getCurrentParams(),
                new_params = this.getParams();
            return _.isEqual(current_params, new_params);
        },
        askSaveData:function () {
            if (this.data_saved || this.dataNotChanged() || confirm(window.i18nLocale.if_close_data_lost)) {
                this._killEditor();
                this.data_saved = true;
                return true;
            }
            return false;
        },
        close:function () {
            if (this.askSaveData()) {
                this.$el.modal('hide');
            }
        }
    });

    var VisualComposer = Backbone.View.extend({
        el:$('#qfe_visual_composer'),
        views:{},
        events:{
            "click #qfe-add-new-row":'createRow',
            "click #qfe-custom-post-css":'showPostCustomCss',
            'click #qfe-add-new-element, .add-element-to-layout':'addElement',
            'click .add-text-block-to-content':'addTextBlock',
            'click .qfe_switch-to-composer':'switchComposer',
            'click #qfe_save_template_button':'saveTemplate',
            'click [data-template_id]':'loadTemplate',
            'click .qfe_remove_template':'removeTemplate',
            'click #qfe-convert':'convert',
            'click #qfe-save-post':'save'
        },
        initialize:function () {
            this.accessPolicy = $('.qfe_qfy_editor_group_access_show_rule').val();
            if (this.accessPolicy == 'no') return false;
            this.buildRelevance();
            _.bindAll(this, 'switchComposer', 'dropButton', 'processScroll', 'updateRowsSorting', 'updateElementsSorting');
            Shortcodes.bind('add', this.addShortcode, this);
            Shortcodes.bind('destroy', this.checkEmpty, this);
            Shortcodes.bind('reset', this.addAll, this);
            this.render();
        },
        render:function () {
            if (this.accessPolicy !== 'only') {
                this.$buttonsContainer = $('<div class="button-primary composer-switch"><span class="icon"></span><span class="vc-spacer"></span><a class="qfe_switch-to-front-composer" href="' + $('#qfe-edit-inline').attr('href') +'">' + window.i18nLocale.main_button_title_frontend_editor + '</a><span class="vc-spacer"></span><a class="qfe_switch-to-composer" href="#">' + window.i18nLocale.main_button_title_backend_editor + '</a></div>').insertAfter('div#titlediv');
                // this.$switchButton = $('<a class="qfe_switch-to-composer button-primary" href="#">' + window.i18nLocale.main_button_title + '</a>').insertAfter('div#titlediv').wrap('<p class="composer-switch" />');
                this.$switchButton = this.$buttonsContainer.find('.qfe_switch-to-composer');
                this.$switchButton.click(this.switchComposer);
            }
            this.$metablock_content = $('.metabox-composer-content');
            this.$content = $("#visual_composer_content");
            this.$post = $('#postdivrich');
            this.$vcStatus = $('#qfe_vc_js_status');
            this.$loading_block = $('.vc_loading_block');
            this.setSortable();
            this.setDraggable();
            vc.is_mobile = $('body.mobile').length > 0
            return this;
        },
        addAll:function () {
            this.views = {};
            this.$content.removeClass('loading').html('');
            Shortcodes.each(function (shortcode) {
                this.appendShortcode(shortcode);
                this.setSortable();
            }, this);
            // Check if old version of layout.
            if (this.$content.find('> [data-element_type]:not(.qfe_vc_row)').length > 0) {
                $('#qfe-convert-message').show();
            } else {
                $('#qfe-convert-message').hide();
            }

            this.checkEmpty();
            this.$loading_block.hide();
        },
        getView:function (model) {
            var view;
            if (_.isObject(vc.map[model.get('shortcode')]) && _.isString(vc.map[model.get('shortcode')].js_view) && vc.map[model.get('shortcode')].js_view.length) {
                view = new window[window.vc.map[model.get('shortcode')].js_view]({model:model});
            } else {
                view = new ShortcodeView({model:model});
            }
            model.set({view: view});
            return view;
        },
        setDraggable:function () {
            $('#qfe-add-new-element, #qfe-add-new-row').draggable({
                helper:function () {
                    return $('<div id="drag_placeholder"></div>').appendTo('body');
                },
                zIndex:99999,
                // cursorAt: { left: 10, top : 20 },
                cursor:"move",
                // appendTo: "body",
                revert:"invalid",
                start:function (event, ui) {
                    $("#drag_placeholder").addClass("column_placeholder").html(window.i18nLocale.drag_drop_me_in_column);
                }
            });
            this.$content.droppable({
                greedy:true,
                accept:".dropable_el,.dropable_row",
                hoverClass:"qfe_ui-state-active",
                drop:this.dropButton
            });
        },
        dropButton:function (event, ui) {
            if (ui.draggable.is('#qfe-add-new-element')) {
                this.addElement();
            } else if (ui.draggable.is('#qfe-add-new-row')) {
                this.createRow();
            }
        },
        appendShortcode:function (model) {
            var view = this.getView(model),
                position = model.get('order'),
                $element_to_add = model.get('parent_id') !== false ?
                    this.views[model.get('parent_id')].$content
                    :
                    this.$content;
            this.views[model.id] = view;
            if (model.get('parent_id')) {
                var parent_view = this.views[model.get('parent_id')];
                parent_view.unsetEmpty();
            }
            $element_to_add.append(view.render().el);
            view.ready();

            view.changeShortcodeParams(model); // Refactor
            view.checkIsEmpty();
            this.setNotEmpty();
        },
        addShortcode: function (model) {
            var view = this.getView(model),
                position = model.get('order'),
                $element_to_add = model.get('parent_id') !== false ?
                    this.views[model.get('parent_id')].$content
                    :
                    this.$content;
            view.use_default_content = model.get('cloned') !== true;
            this.views[model.id] = view;
            var before_shortcode = _.last(Shortcodes.filter(function (shortcode) {
                return shortcode.get('parent_id') === this.get('parent_id') && parseFloat(shortcode.get('order')) < parseFloat(this.get('order'));
            }, model));
            if (before_shortcode) {
                view.render().$el.insertAfter('[data-model-id=' + before_shortcode.id + ']');
            } else {
                $element_to_add.prepend(view.render().el);
            }

            if (model.get('parent_id')) {
                var parent_view = this.views[model.get('parent_id')];
                parent_view.checkIsEmpty();
            }
            model.trigger('change:params', model);
            view.ready();
            this.setSortable();
            this.setNotEmpty();
        },
        /**
         * Remove template from server database.
         * @param e - Event object
         */
        removeTemplate:function (e) {
            e.preventDefault();
            var $button = $(e.currentTarget);
            var template_name = $button.closest('.qfe_template_li').find('a').text();
            var answer = confirm(window.i18nLocale.confirm_deleting_template.replace('{template_name}', template_name));
            if (answer) {
                // this.reloadTemplateList(data);
                $.post(window.ajaxurl, {
                    action:'qfe_delete_template',
                    template_id:$button.attr('rel')
                });
                $button.closest('.qfe_template_li').remove();
            }
        },
        /**
         * Load saved template from server.
         * @param e - Event object
         */
        loadTemplate:function (e) {
            e.preventDefault();
            var $button = $(e.currentTarget);
            $.ajax({
                type:'POST',
                url:window.ajaxurl,
                data:{
                    action:'qfe_load_template_shortcodes',
                    template_id:$button.attr('data-template_id')
                }
            }).done(function (shortcodes) {
                    _.each(vc.filters.templates, function (callback) {
                        shortcodes = callback(shortcodes);
                    });
                    vc.storage.append(shortcodes);
                    Shortcodes.fetch({reset: true});
                });
        },
        convert:function (e) {
            e.preventDefault();
            if (confirm((window.i18nLocale.are_you_sure_convert_to_new_version)))
                $.ajax({
                    type:'POST',
                    url:window.ajaxurl,
                    data:{
                        action:'qfe_get_convert_elements_backend_html',
                        data:vc.storage.getContent()
                    },
                    context:this
                }).done(function (response) {
                        vc.storage.setContent(response);
                        vc.storage.checksum = false; // To be sure that data will fetched from editor.
                        Shortcodes.fetch({reset: true});
                        $('#qfe_vc_js_interface_version').val('2');
                        $('#qfe-convert-message').hide();
                    });
        },
        /**
         * Save current shortcode design as template with title.
         * @param e - Event object
         */
        saveTemplate:function (e) {
            e.preventDefault();
            var name = window.prompt(window.i18nLocale.please_enter_templates_name, ''),
                shortcodes = '',
                data;

            if (_.isString(name) && name.length) {
                shortcodes = vc.storage.getContent();
                data = {
                    action:'qfe_save_template',
                    template:shortcodes,
                    template_name:name
                };

                this.reloadTemplateList(data);
            }
        },
        reloadTemplateList:function (data) {
            $.post(window.ajaxurl, data, function (html) {
                $('.qfe_templates_list').html(html);
            });
        },
        addTextBlock:function (e) {
            e.preventDefault();
            var row = Shortcodes.create({shortcode:'vc_row'}),
                column = Shortcodes.create({shortcode:'vc_column', params:{width:'1/1'}, parent_id:row.id, root_id:row.id }),
                text_block = Shortcodes.create({shortcode:'vc_column_text', params:vc.getDefaults('vc_column_text'), parent_id:column.id, root_id:row.id });
            return text_block;
        },
        /**
         * Create row
         */
        createRow:function () {
            var row = Shortcodes.create({shortcode:'vc_row'});
            Shortcodes.create({shortcode:'vc_column', params:{width:'1/1'}, parent_id:row.id, root_id:row.id });
            return row;
        },
        /**
         * Add Element with a help of modal view.
         */
        addElement:function (e) {
            if (_.isObject(e)) e.preventDefault();
            new ElementBlockView({model:{position_to_add:'end'}}).show(this);
        },
        showPostCustomCss: function(e) {
          if (_.isObject(e)) e.preventDefault();
          new PostCustomCssBlockView().show();

        },
        sortingStarted:function (event, ui) {
            $('#visual_composer_content').addClass('sorting-started');
        },
        sortingStopped:function (event, ui) {
            $('#visual_composer_content').removeClass('sorting-started');
        },
        updateElementsSorting:function (event, ui) {
            _.defer(function (app, event, ui) {
                var $current_container = ui.item.parent().closest('[data-model-id]'),
                    parent = $current_container.data('model'),
                    model = ui.item.data('model'),
                    models = app.views[parent.id].$content.find('> [data-model-id]'),
                    i = 0;
                // Change parent if block moved to another container.
                if (!_.isNull(ui.sender)) {
                    var old_parent_id = model.get('parent_id');
                    store.lock();
                    model.save({parent_id:parent.id});
                    app.views[old_parent_id].checkIsEmpty();
                    app.views[parent.id].checkIsEmpty();
                }
                models.each(function () {
                    var shortcode = $(this).data('model');
                    store.lock();
                    shortcode.save({'order':i++});
                });
                model.save();
            }, this, event, ui);

        },
        updateRowsSorting:function () {
            _.defer(function (app) {
                var $rows = app.$content.find('> .qfe_vc_row');
                $rows.each(function () {
                    var index = $(this).index();
                    if ($rows.length - 1 > index) store.lock();
                    $(this).data('model').save({'order':index});
                });
            }, this);
        },
        setSortable:function () {
            var that = this;
            $('.qfe_main_sortable').sortable({
                forcePlaceholderSize:true,
                placeholder:"widgets-placeholder",
                // cursorAt: { left: 10, top : 20 },
                cursor:"move",
                items:"> .qfe_vc_row", // qfe_sortablee
                handle:'.column_move',
                distance:0.5,
                start:this.sortingStarted,
                stop:this.sortingStopped,
                update:this.updateRowsSorting,
                over:function (event, ui) {
                    ui.placeholder.css({maxWidth:ui.placeholder.parent().width()});
                }
            });
            $('.qfe_column_container').sortable({
                forcePlaceholderSize:true,
                connectWith:".qfe_column_container",
                placeholder:"widgets-placeholder",
                // cursorAt: { left: 10, top : 20 },
                cursor:"move",
                items:"> div.qfe_sortable", //qfe_sortablee
                distance:0.5,
                tolerance:'pointer',
                start:function () {
                    $('#visual_composer_content').addClass('sorting-started');
                    $('.vc_not_inner_content').addClass('dragging_in');
                },
                stop:function (event, ui) {
                    $('#visual_composer_content').removeClass('sorting-started');
                    $('.dragging_in').removeClass('dragging_in');
                },
                update:this.updateElementsSorting,
                over:function (event, ui) {
                    var tag = ui.item.data('element_type'),
                        parent_tag = ui.placeholder.closest('[data-element_type]').data('element_type'),
                        allowed_container_element = !_.isUndefined(vc.map[parent_tag].allowed_container_element) ? vc.map[parent_tag].allowed_container_element : true;
                    if (!vc.check_relevance(parent_tag, tag)) {
                        ui.placeholder.addClass('hidden-placeholder');
                        return false;
                    }
                    if (vc.map[ui.item.data('element_type')].is_container && !(allowed_container_element === true || allowed_container_element === ui.item.data('element_type').replace(/_inner$/, ''))) {
                        ui.placeholder.addClass('hidden-placeholder');
                        return false;
                    }
                    ui.placeholder.removeClass('hidden-placeholder');
                    ui.placeholder.css({maxWidth:ui.placeholder.parent().width()});
                },
                beforeStop:function (event, ui) {
                    var tag = ui.item.data('element_type'),
                        parent_tag = ui.placeholder.closest('[data-element_type]').data('element_type'),
                        allowed_container_element = !_.isUndefined(vc.map[parent_tag].allowed_container_element) ? vc.map[parent_tag].allowed_container_element : true;
                    if (!vc.check_relevance(parent_tag, tag)) {
                        $('#visual_composer_content').removeClass('sorting-started');
                        return false;
                    }
                    if (vc.map[ui.item.data('element_type')].is_container && !(allowed_container_element === true || allowed_container_element === ui.item.data('element_type').replace(/_inner$/, ''))) { // && ui.item.hasClass('qfe_container_block')
                        $('#visual_composer_content').removeClass('sorting-started');
                        return false;
                    }
                }
            });
            return this;
        },
        setNotEmpty:function () {
            this.$metablock_content.removeClass('empty-composer');
        },
        setIsEmpty:function () {
            this.$metablock_content.addClass('empty-composer');
        },
        checkEmpty:function (model) {
            if (_.isObject(model) && model.get('parent_id') !== false && model.get('parent_id') != model.id) {
                var parent_view = this.views[model.get('parent_id')];
                parent_view.checkIsEmpty();
            }
            if (this.$content.find('[data-element_type]').length === 0) {
                this.setIsEmpty();
            } else {
                this.setNotEmpty();
            }
        },
        switchComposer:function (e) {
            if (_.isObject(e)) e.preventDefault();
            if (this.status == 'shown') {
                if (!_.isUndefined(this.$switchButton)) this.$switchButton.text(window.i18nLocale.main_button_title);
                this.close();
                this.status = 'closed';
            } else {
                if (!_.isUndefined(this.$switchButton)) this.$switchButton.text(window.i18nLocale.main_button_title_revert);
                this.show();
                this.status = 'shown';

            }
        },
        show:function () {
            this.$el.show();
            this.$post.hide();
            this.$vcStatus.val("true");
            this.navOnScroll();
            if (vc.storage.isContentChanged()) {
                vc.app.setLoading();
                vc.app.views = {};

                window.setTimeout(function () {
                    Shortcodes.fetch({reset: true});
                }, 100);
            }
        },
        setLoading:function () {
            this.setNotEmpty();
            $('#qfe-convert-message').hide();
            this.$loading_block.show();
        },
        close:function () {
            this.$vcStatus.val("false");
            if (this.$switchButton !== undefined) this.$switchButton.html(window.i18nLocale.main_button_title);
            this.$el.hide();
            this.$post.show();
        },
        checkVcStatus:function () {
            if (this.$vcStatus.val() === 'true' || this.accessPolicy === 'only') {
                this.switchComposer();
            }
        },
        setNavTop:function () {
            this.navTop = $('#qfe_visual_composer-elements').length && $('#qfe_visual_composer-elements').offset().top - 28;

        },
        save:function () {
            $('#qfe-save-post').text(window.i18nLocale.loading);
            $('#publish').click();
        },
        navOnScroll:function () {
            var $win = $(window);
            this.setNavTop();
            this.$nav = $('#qfe_visual_composer-elements');
            this.processScroll();
            $win.unbind('scroll.composer').on('scroll.composer', this.processScroll);
        },
        processScroll:function (e) {
            this.scrollTop = $(window).scrollTop();
            if (this.scrollTop >= this.navTop && !this.isFixed) {
                this.isFixed = 1;
                this.$nav.addClass('subnav-fixed');
            } else if (this.scrollTop <= this.navTop && this.isFixed) {
                this.isFixed = 0;
                this.$nav.removeClass('subnav-fixed');
            }
        },
        buildRelevance:function () {
            vc.shortcode_relevance = {};
            _.map(vc.map, function (object) {
                if (_.isObject(object.as_parent) && _.isString(object.as_parent.only)) {
                    vc.shortcode_relevance['parent_only_' + object.base] = object.as_parent.only.split(',');
                }
                if (_.isObject(object.as_parent) && _.isString(object.as_parent.except)) {
                    vc.shortcode_relevance['parent_except_' + object.base] = object.as_parent.except.split(',');
                }
                if (_.isObject(object.as_child) && _.isString(object.as_child.only)) {
                    vc.shortcode_relevance['child_only_' + object.base] = object.as_child.only.split(',');
                }
                if (_.isObject(object.as_child) && _.isString(object.as_child.except)) {
                    vc.shortcode_relevance['child_except_' + object.base] = object.as_child.except.split(',');
                }
            });
            /**
             * Check parent/children relationship between two tags
             * @param tag
             * @param related_tag
             * @return boolean - Returns true if relevance is positive
             */
            vc.check_relevance = function (tag, related_tag) {
                if (_.isArray(vc.shortcode_relevance['parent_only_' + tag]) && !_.contains(vc.shortcode_relevance['parent_only_' + tag], related_tag)) {
                    return false;
                }
                if (_.isArray(vc.shortcode_relevance['parent_except_' + tag]) && _.contains(vc.shortcode_relevance['parent_except_' + tag], related_tag)) {
                    return false;
                }
                if (_.isArray(vc.shortcode_relevance['child_only_' + related_tag]) && !_.contains(vc.shortcode_relevance['child_only_' + related_tag], tag)) {
                    return false;
                }
                if (_.isArray(vc.shortcode_relevance['child_except_' + related_tag]) && _.contains(vc.shortcode_relevance['child_except' + related_tag], tag)) {
                    return false;
                }
                return true;
            };
        }
    });
    $(function(){
        if ($('#qfe_visual_composer').is('div')) {
            var app = vc.app = new VisualComposer();
            vc.app.checkVcStatus();
        }
    });


})(window.jQuery);;

/* qfe_jscomposer_media_editor_js: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-content/plugins/qfy_editor/assets/js/backend/media-editor.js) */
/* =========================================================
 * media-editor.js v1.0.0
 * =========================================================
 * Copyright 2013 QFEditor
 *
 * WP 3.5 Media manager integration into Visual Composer.
 * ========================================================= */
(function ($) {
    var media = wp.media,
        Attachment = media.model.Attachment,
        Attachments = media.model.Attachments,
        Query = media.model.Query,
        l10n = i18nLocale,
        workflows = {};
    // wp.media.controller.VcSingleImage extends featuredImage controller
    // ---------------------------------
    media.controller.VcSingleImage = media.controller.FeaturedImage.extend({
        defaults:_.defaults({
            id:'vc-single-image',
            filterable:'uploaded',
            multiple:false,
            toolbar:'vc-single-image',
            title:l10n.set_image,
            priority:60,
            syncSelection:false
        }, media.controller.Library.prototype.defaults),
        updateSelection:function () {
            var selection = this.get('selection'),
                id = media.VcSingleImage.getData(),
                attachment;
            if ('' !== id && -1 !== id) {
                attachment = Attachment.get(id);
                attachment.fetch();
            }
            selection.reset(attachment ? [ attachment ] : []);
        }
    });
    media.controller.VcGallery = media.controller.VcSingleImage.extend({
        defaults:_.defaults({
            id:'vc-gallery',
            title:l10n.add_images,
            toolbar:'main-insert',
            filterable:'uploaded',
            library:media.query({type:'image'}),
            multiple:'add',
            editable:true,
            priority:60,
            syncSelection:false
        }, media.controller.Library.prototype.defaults),
        updateSelection:function () {
			$this = this;

				var selection = $this.get('selection'),
					ids = media.vc_editor.getData(),
					attachments;
				if ('' !== ids && -1 !== ids) {
		
					attachments = _.map(ids.split(/,/), function (id) {
						var t = Attachment.get(id);
						return t;
					});
					
				}
				selection.reset(attachments);
				
				wp.media.ajax({
					type: 'POST',
					data: {
						action: 'get-attachments',
						ids: ids
					},
					success: function( attachments ) {
						for (var key in attachments) {
							var atta= attachments[key];
							attachment = Attachment.get(atta.id);
							attachment.set( atta );
						}
					
					}
				});
				
			
        }
    });

    media.VcSingleImage = {
        getData:function () {
            return this.$hidden_ids.val();
        },
        set:function (selection) {
		
            this.$img_ul.html(_.template($('#vc-settings-image-block').html(), selection.attributes));
            this.$clear_button.show();
			var $this = this;
			if(selection.get('url').indexOf(gethost())<0)
			{
				var obj = {};
				obj.url = selection.get('url');
				$this.$img_ul.find("img:last").attr("src","/qfy-content/plugins/revslider/rs-plugin/assets/loader.gif").width("100%");
				$j.post("/admin/admin-ajax.php",{action:"bit_auto_uploadimage",obj:obj},function(data){
					var tmpJson = jQuery.parseJSON(data);
					$this.$hidden_ids.val(tmpJson.id).trigger('change');
					$this.$img_ul.find("img:last").attr("src",tmpJson.url);
					$this.$img_ul.find(".icon-edit:last").attr("data-id",tmpJson.id);
				});
			}else{
			    this.$hidden_ids.val(selection.get('id')).trigger('change');
				this.$img_ul.find("img:last").attr("src",selection.get('url'));
				this.$img_ul.find(".icon-edit:last").attr("data-id",selection.get('id'));
			}
          
            return false;
        },
        frame:function (element) {
            this.element = element;
			
            this.$button = $(this.element);
            this.$block = this.$button.closest('.edit_form_line');
            this.$hidden_ids = this.$block.find('.gallery_widget_attached_images_ids');
            this.$img_ul = this.$block.find('.gallery_widget_attached_images_list');
            this.$clear_button = this.$img_ul.next();

            // TODO: Refactor this all params as template

            if (this._frame)
                return this._frame;
            this._frame = wp.media({
                state:'vc-single-image',
                states:[ new wp.media.controller.VcSingleImage() ]
            });
			wp.global_curr_frame =  this._frame;
            this._frame.on('toolbar:create:vc-single-image', function (toolbar) {
                this.createSelectToolbar(toolbar, {
                    text:l10n.set_image
                });
            }, this._frame);

            this._frame.state('vc-single-image').on('select', this.select);
            return this._frame;
        },
        select:function () {
            var selection = this.get('selection').single();
            wp.media.VcSingleImage.set(selection ? selection : -1);
        }
    };
    

    media.view.MediaFrame.VcGallery = media.view.MediaFrame.Post.extend({
        // Define insert-vc state.
        createStates:function () {
            var options = this.options;
            // Add the default states.
            this.states.add([
                // Main states.

                new media.controller.VcGallery()
            ]);
        },
        // Removing let menu from manager
        bindHandlers:function () {
            media.view.MediaFrame.Select.prototype.bindHandlers.apply(this, arguments);
			
            this.on('toolbar:create:main-insert', this.createToolbar, this);
			wp.global_curr_frame =  this;
            var handlers = {
                content:{
                    'embed':'embedContent',
                    'edit-selection':'editSelectionContent'
                },
                toolbar:{
                    'main-insert':'mainInsertToolbar'
                }
            };

            _.each(handlers, function (regionHandlers, region) {
                _.each(regionHandlers, function (callback, handler) {
                    this.on(region + ':render:' + handler, this[ callback ], this);
                }, this);
            }, this);
        },
        // Changing main button title
        mainInsertToolbar:function (view) {
            var controller = this;

            this.selectionStatusToolbar(view);

            view.set('insert', {
                style:'primary',
                priority:80,
                text:l10n.add_images,
                requires:{ selection:true },

                click:function () {
                    var state = controller.state(),
                        selection = state.get('selection');

                    controller.close();

                    state.trigger('insert', selection).reset();
                }
            });
        }
    });
    media.vc_editor = _.clone(media.editor);
    _.extend(media.vc_editor, {
        $vc_editor_element:null,
        getData:function () {
            var $button = wp.media.vc_editor.$vc_editor_element,
                $block = $button.closest('.edit_form_line'),
                $hidden_ids = $block.find('.gallery_widget_attached_images_ids');
            return $hidden_ids.val();
        },
        insert:function (images) {
            var $button = wp.media.vc_editor.$vc_editor_element,
                $block = $button.closest('.edit_form_line'),
                $hidden_ids = $block.find('.gallery_widget_attached_images_ids'),
                $img_ul = $block.find('.gallery_widget_attached_images_list'),
                $clear_button = $img_ul.next(),
                $thumbnails_string = '';
				var isNeedDownload = false;
				 _.each(images, function (image) {
					if(image.url.indexOf(gethost())<0){
						isNeedDownload = true;
					}
				});
				if(isNeedDownload==true)
				{
					var obj = {};
					//obj.url = image.url;
					
					$j.post("/admin/admin-ajax.php",{action:"bit_auto_uploadimage",obj:images},function(data){
						var tmpJson = jQuery.parseJSON(data);
						 _.each(tmpJson, function (image) {
							var str = '<li class="added"><div class="inner" style="width: 75px; height: 75px; overflow: hidden;text-align: center;"><a data-id="'+image.id+'" onclick="editImageFrontInfo(this)" class="icon-edit" href="#"></a><img rel="'+image.id+'" src="'+image.thumbnail+'" /></div><a href="#" class="icon-remove"></a></li>'
							$thumbnails_string += str;
						});
						 $hidden_ids.val(_.map(tmpJson,function (image) {
						 return image.id;
						}).join(',')).trigger('change');
						$img_ul.html($thumbnails_string);
					});
				}else{
					 _.each(images, function (image) {
						
						var str = '<li class="added"><div class="inner" style="width: 75px; height: 75px; overflow: hidden;text-align: center;"><a data-id="'+image.id+'" onclick="editImageFrontInfo(this)" class="icon-edit" href="#"></a><img rel="'+image.id+'" src="'+image.thumbnail+'" /></div><a href="#" class="icon-remove"></a></li>'
						$thumbnails_string += str;
					});
					$hidden_ids.val(_.map(images,function (image) {
					 return image.id;
					}).join(',')).trigger('change');
					$img_ul.html($thumbnails_string);
				
				}
           
          
		
        },
        open:function (id) {
            var workflow, editor;

            id = this.id(id);

            workflow = this.get(id);

            // Initialize the editor's workflow if we haven't yet.
            if (!workflow)
                workflow = this.add(id);

            return workflow.open();
        },
        add:function (id, options) {
            var workflow = this.get(id);
            if (workflow)
                return workflow;

            workflow = workflows[ id ] = new media.view.MediaFrame.VcGallery(_.defaults(options || {}, {
                state:'vc-gallery',
                title:l10n.add_images,
                library:{ type:'image' },
                multiple:true
            }));
            workflow.on('insert', function (selection) {
                var state = workflow.state(),
                    data = [];

                selection = selection || state.get('selection');
                if (!selection)
                    return;

                this.insert(_.map(selection.models, function (model) {
                    return model.attributes;
                }));
            }, this);
            return workflow;
        },
        init:function () {
            $('body').unbind('click.vcGalleryWidget').on('click.vcGalleryWidget', '.gallery_widget_add_images', function (event) {
                var $this = $(this), editor = 'visual-composer';
                wp.media.vc_editor.$vc_editor_element = $(this);
                if ($this.attr('use-single') === 'true') {
                    wp.media.VcSingleImage.frame(this).open('vc-editor');
                    return;
                }
                event.preventDefault();
                $this.blur();
                wp.media.vc_editor.open(editor);
            });
            $('body').unbind('click.post').on('click.post', '.gallery_widget_add_posts', function (event) {
			
            	var type = $(this).attr("data-type");
            	if(type=="mini_posts") {
					top.qfy_select_pages_fun(this, "mini");
				}else if(type=="choose_product"){
            		top.qfy_select_pages_fun(this,"mini-product");
            	}else{
            		top.qfy_select_pages_fun(this);
            	}
            });
			$('body').unbind('click.addpost').on('click.addpost', '.gallery_widget_add_post', function (event) {
            	var type = $(this).attr("data-type");
            	top.qfy_select_pages_fun(this,type);
            });
            var one_media_frame = false;
            var one_media_frame_type = false;
            $('body').unbind('click.vcVideoWidget').on('click.vcVideoWidget', '.gallery_widget_add_videos', function (event) {
            	var type = $(this).attr("data-type");
            	
            	$thiselement = $(this).closest(".edit_form_line");
            	if ( one_media_frame && one_media_frame_type==type ) {
            		one_media_frame.open();
            		return;
            	}
            	one_media_frame_type = type;
            	if(type=="attach_video"){
            		one_media_frame = new wp.media.view.MediaFrame.Select({
                		// Modal title
                		id:  'insertyunvideo',
                		onlylocal:true,
                		title: '视频',
                		button: {
                			text: "插入",
                		},
                		multiple: false,
                		library: {
                			type: "video/yun",
                			search: null,
                			uploadedTo: null
                		},
                		
                	});
            	}else if(type=="attach_localvideo"){
                		one_media_frame = new wp.media.view.MediaFrame.Select({
                    		// Modal title
                    		id:  'insertvideo',
                    		onlylocal:true,
                    		title: '视频',
                    		button: {
                    			text: "插入",
                    		},
                    		multiple: false,
                    		library: {
                    			type: "video/mp4",
                    			search: null,
                    			uploadedTo: null
                    		},
                    		
                    	});
				}else if(type=="attach_localaudio"){
                		one_media_frame = new wp.media.view.MediaFrame.Select({
                    		// Modal title
                    		id:  'insertaudio',
                    		onlylocal:true,
                    		title: '音频',
                    		button: {
                    			text: "插入",
                    		},
                    		multiple: false,
                    		library: {
                    			type: "audio",
                    			search: null,
                    			uploadedTo: null
                    		},
                    		
                    	});
            	}else if(type=="attach_localvideos"){
                		one_media_frame = new wp.media.view.MediaFrame.Select({
                    		// Modal title
                    		id:  'insertvideo',
                    		onlylocal:true,
                    		title: '视频',
                    		button: {
                    			text: "插入",
                    		},
                    		multiple: true,
                    		states : [
            					new wp.media.controller.Library({
            						title:  '视频',
            						filterable :	'all',
            						multiple: 'add',
            					})
            				],
                    		library: {
                    			type: "video/mp4",
                    			search: null,
                    			uploadedTo: null
                    		},
                    		
                    	});
				}else if(type=="attach_3d"){

					one_media_frame = new wp.media.view.MediaFrame.Select({
						// Modal title
						id:  'insert3d',
						onlylocal:true,
						noupload:true,
						title: '3D',
						button: {
							text: "插入",
						},
						multiple: false,

						library: {
							type: "3d",
							search: null,
							uploadedTo: null
						},

					});
            	}else{
            		one_media_frame = new wp.media.view.MediaFrame.Select({
                		// Modal title
                		id:  'one_media_frame_type',
                		onlylocal:true,
                		title: '视频',
                		button: {
                			text: "插入",
                		},
                		states : [
        					new wp.media.controller.Library({
        						title:  '视频',
        						filterable :	'all',
        						multiple: 'add',
        					})
        				],
                		multiple: true,
                		library: {
                			type: "video/yun",
                			search: null,
                			uploadedTo: null
                		},
                		
                	});
            		
            	}
            	
            	one_media_frame.on( 'open', function() {
    
            		    var media = wp.media,
            	        Attachment = media.model.Attachment;
            			var selection = one_media_frame.state().get('selection');
            			var	ids = $thiselement.find('.gallery_widget_attached_videos_ids').val();
            			if ('' !== ids && -1 !== ids) {
        					attachments = _.map(ids.split(/,/), function (id) {
        						var t = Attachment.get(id);
        						return t;
        					});
        				}
            			if(typeof(attachments) !="undefined"){
        					selection.reset(attachments);
						}
                });
            	

            	// When an image is selected, run a callback.
            	one_media_frame.on( 'select', function() {

            		var selection = one_media_frame.state().get('selection');
            		var arr  = new Array();
            		var tmp_str = "";
            		selection.map( function( attachment ) {
            			attachment = attachment.toJSON();
            			if ( attachment.id ) {
            				arr.push(attachment.id);
            				tmp_str += '<li class="added"><div class="inner" style="width: 75px; height: 75px; overflow: hidden;text-align: center;"><a data-id="'+attachment.id+'" onclick="editImageFrontInfo(this)" class="icon-edit" href="#"></a><img rel="'+attachment.id+'" src="'+attachment.thumbnail+'" /></div><a href="#" class="icon-remove"></a></li>'
         					
            			}
            		});
    				$thiselement.find('.gallery_widget_attached_videos_ids').val( arr.join(',') );
            		$thiselement.find('.gallery_widget_attached_images_list').html(tmp_str);

					if($thiselement.closest(".3dviewer").length>0){
						$thiselement.find("[name='object_id']").change();
					}

            		
            	})
            		// Finally, open the modal.
            	one_media_frame.open();
            });
	

        }
    });
    _.bindAll(media.vc_editor, 'open');
    $(document).ready(function () {
        media.vc_editor.init();
    });
}(jQuery));;

/* vc_inline_shortcodes_builder_js: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-content/plugins/qfy_editor/inline/assets/js/lib/shortcodes_builder.js) */
/* =========================================================
 * lib/shortcodes_builder.js v0.5.0
 * =========================================================
 * Copyright 2014 QFEditor
 *
 * Visual composer shortcode logic backend.
 *
 * ========================================================= */
(function($) {
  if(_.isUndefined(window.vc)) window.vc = {};
  vc.ShortcodesBuilder = {
    _ajax: false,
    models: [],
	order:false,
	savepostTimeout:false,
	actionmodel:false,
    message: false,
	isPosting : false,
	isGroup:false,
	isCustomSuffix:"",
	isCreateNewing:false,
	isAddSlider:false,
	hasParams : false,
    create: function(attributes) {
    	
	  if(attributes.shortcode == "vc_row"){
		  if(attributes.params){
			 attributes.params.id = "bit_"+this.randomString();
		  }else{
			 attributes.params = {id: "bit_"+this.randomString()};
		  }
	  }
	  var name = attributes.shortcode.replace("vc_","qfy_");
	
	 if(  attributes.params && (!attributes.params.qfyuuid || attributes.params.qfyuuid=="")){
		  attributes.params.qfyuuid = name+"_"+this.randomString();
	  }else if(this.isCustomSuffix!=""){
		  //常用设计，uuid需要更新，却同时要保持一致
		  if(attributes.params.qfyuuid){
			  if( attributes.params.qfyuuid.indexOf("-c-")>-1){
				  var qtmp = attributes.params.qfyuuid.split("-c-");
				  if(qtmp.length==2){
					  attributes.params.qfyuuid = qtmp[0];
				  }
			  }
			  attributes.params.qfyuuid = attributes.params.qfyuuid+this.isCustomSuffix;
		  }
	      if( attributes.params.cate_to_listuuid){ 
	    	  if( attributes.params.cate_to_listuuid.indexOf("-c-")>-1){
				  var qtmp = attributes.params.cate_to_listuuid.split("-c-");
				  if(qtmp.length==2){
					  attributes.params.cate_to_listuuid = qtmp[0];
				  }
			  }
	    	  attributes.params.cate_to_listuuid = attributes.params.cate_to_listuuid+this.isCustomSuffix;
	      }
		  if( attributes.params.qfy_category_pagelistuuid){ 
			  if( attributes.params.qfy_category_pagelistuuid.indexOf("-c-")>-1){
				  var qtmp = attributes.params.qfy_category_pagelistuuid.split("-c-");
				  if(qtmp.length==2){
					  attributes.params.qfy_category_pagelistuuid = qtmp[0];
				  }
			  }
			  attributes.params.qfy_category_pagelistuuid = attributes.params.qfy_category_pagelistuuid+this.isCustomSuffix;
		  }
		
	  }else if(this.isGroup==false){
		   attributes.params.qfyuuid = name+"_"+this.randomString();
	  }

	  if(this.isCreateNewing){
		
		  if(attributes.shortcode=="vc_btn" && (!attributes.params.title || attributes.params.title=="") ){
			  attributes.params.title = "点我";
		  }else if(attributes.shortcode == "vc_gallery" && attributes.params.gallery_mode==""){
			  attributes.params.gallery_mode = 2;
		  }else if(attributes.shortcode == "list_cate_controls" ){
			  if( attributes.params.cate_floor=="")
				  attributes.params.cate_floor = 1;
			  if( attributes.params.cate_emptyshow=="")
				  attributes.params.cate_emptyshow = 1;
			  if( attributes.params.cate_showcurrchild=="")
				  attributes.params.cate_showcurrchild = 1;
			  if( attributes.params.cate_ajax=="")
				  attributes.params.cate_ajax = 1;
		  }else if(attributes.shortcode == "list_btncate_controls" ){
			  if( attributes.params.cate_emptyshow=="")
				  attributes.params.cate_emptyshow = 1;
			  if( attributes.params.cate_ajax=="")
				  attributes.params.cate_ajax = 1;
		  }else if(attributes.shortcode=="iphorm_vc" ){
			 attributes.params.paddingtop = 20;
		  }else if(attributes.shortcode == "vc_bit_raw_video"){
			  //attributes.params.raw_video_from = "youku";
		  }else if(attributes.shortcode == "Bit_HTML5_Video"){
			  attributes.params.video_fullfill = "true";
			  attributes.params.isbgcover = "1";
		  }else if(attributes.shortcode == "qfy_yun_video"){
			  attributes.params.isafterload = "1";
		  }else if(attributes.shortcode=="vc_column"||attributes.shortcode=="vc_column_inner"||attributes.shortcode=="vc_column_embad"||attributes.shortcode=="vc_posts_grid"||attributes.shortcode=="advanced_list"){
			  attributes.params.animalein_begin = "90%";
		  }else if(attributes.shortcode == "product_page" ){
			  attributes.params.gt_column = "3";
			  attributes.params.gt_padding = "20";
			  attributes.params.gt_div_marining = "10";
			  attributes.params.gt_marining = "20";
			  attributes.params.gt_content_type = "title,image,excerpt,meta,price,cart";
			  attributes.params.gt_border_settings="1|^|1|^|#999999|^|0|^|1|^|#999999|^|0|^|1|^|#999999|^|0|^|1|^|#999999|^|0|^|100|^|100|^|100|^|100";
		  }
		 
	  }

      this.models.push(vc.shortcodes.create(attributes));
      return this;
    },
	randomString:function(){
		//var let = new Array('a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
		var let2 = new Array('a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9');
		var random1 = Math.round(Math.random()*34)+0;
		var random2 = Math.round(Math.random()*34)+0;
		var random3 = Math.round(Math.random()*34)+0;
		var random4 = Math.round(Math.random()*34)+0;
		var random5 = Math.round(Math.random()*34)+0;
		return (let2[random1]+let2[random2]+let2[random3]+let2[random4]+let2[random5]);
	},
    render: function(callback,order,actionmodel) {
	  this.order = order;
	  this.actionmodel = actionmodel;
      var shortcodes;
      var hasSenior = false;
      shortcodes = _.map(this.models, function(model){
        var string = this.toString(model);
        var tag = model.get('shortcode');
        if(tag=="slidercontent"||tag=="accordioncontent"||tag=="tabcontent" ||tag=="vc_row_embad" ||tag=="vc_column_embad" || tag=="vc_column_inner"){
        	hasSenior = true;
        }
        return {id: model.get('id'), string: string, tag: tag,pid:model.get('parent_id')};
      }, this);
      if(shortcodes.length>0){
    	  var pid=shortcodes[0].pid;
	      ajaxBeforeLoading(pid);
      }
      vc.setDataChanged();
      if(pid && hasSenior){
    	  var parentModel = vc.shortcodes.get(pid);
    	  if(parentModel && parentModel.get('shortcode')=="vc_column_embad" ){
    		  top.jAlert("该组件无法插入到活动组件中去");
    		  location.reload();
    		  return false;
    	  }
      }
      //vc_column_embad
      this.build(shortcodes, callback);
    },
    build: function(shortcodes, callback) {

	  vc.frame_window.jQuery('body').addClass('doing');
      this.ajax({action: 'vc_load_shortcode', shortcodes: shortcodes}).done(function(html){
        $(html).each(this._renderBlockCallback);

        if(_.isFunction(callback)) {
        	callback(html);
        }

        vc.frame.setSortable();
        vc.activity = false;
		vc.group = false;
		iframeWin.jQuery('.vc-place-after').removeClass('vc-place-after');
        this.checkNoContent();
        vc.frame_window.vc_iframe.loadScripts();
        this.last() && vc.frame.scrollTo(this.first());
        this.models = [];
        this.showResultMessage();
		if(typeof iframeWin.resizeDefaultObjSize=="function"){
			iframeWin.resizeDefaultObjSize();
		}
        ajaxAfterLoading();
		
		//..............

		var need_run_parent_js = false;
		
		jQuery.each(shortcodes,function(n,value) {
			
			if(value.tag=="vc_column_text"){
				iframeWin.toolTip(iframeWin.jQuery('[data-model-id=' + value.id + '] [data-tooltip=\'on\']'));
			}else if(value.tag=="Bit-VCSC-Circliful"){
				//iframeWin.bit_circliful(iframeWin.jQuery('[data-model-id=' + value.id + ']'));
			}else if(value.tag=="Bit-vc-counter"){
				//iframeWin.bit_counter(iframeWin.jQuery('[data-model-id=' + value.id + ']'));
		    }else if(value.tag=="TS_VCSC_Countdown"){
				//iframeWin.bit_counterdown();
			}else if(value.tag=="qfyuser"){
				iframeWin.qfyuser_responsive();
			}else if(value.tag=="advanced_list"){
				 _bind_advanced_list_btn(iframeWin.jQuery("[data-model-id='"+value.id+"']"));
		    }else if(value.tag=="vc_column_custom_text"){
				iframeWin.qfy_custom_select();
			}else if(value.tag=="product_page"){
				iframeWin.bit_qfbook();
				_bind_product_grouptable(iframeWin.jQuery("[data-model-id='"+value.id+"']"));
		    }else if(value.tag=="qfbook"){
				iframeWin.bit_qfbook();
		    }else if(value.tag=="qfbookform"){
				iframeWin.bit_qfbookform();
		    }else if(value.tag=="Bit_HTML5_Video"){
				iframeWin.bit_reloadiframevideo();
			}else if(value.tag=="vc_row_embad"){
				//need run js
				need_run_parent_js = true;
			}else if(value.tag=="list_cate_controls"){
				iframeWin.jQuery("[data-model-id=" + value.id + "] .qfy-listcatecontrols[data-child='1'],[data-model-id=" + value.id + "] .qfy-listmenuvertical[data-child='1']").each(function(){
						var cur = jQuery(this).find(".list-content .current-cat");
						jQuery(this).find(".list-content .children").hide();
						cur.parents("li,ul").show();
						if(cur.hasClass("cat-parent") && cur.closest(".list-content").length>0 ) cur.find(">.children").show();
				})
			}
			//需要对这个专栏里的内容需要重新排序
			if( !iframeWin.jQuery("[data-model-id='"+value.id+"']").hasClass("vc-container")){
				  var p = iframeWin.jQuery("[data-model-id='"+value.id+"']").parent().parent().parent().parent();
				  if(p.length>0  && p.hasClass("elementOrder")){
						 p.removeClass("elementOrder");
						 p.find('>div>div>div>[data-model-id]').each(function(){
				          var $element = $(this),index = $element.index();
				          vc.shortcodes.get($element.data('modelId')).save({order: index});
				        });
				  }
			}

		});
		
		vc.frame_window.jQuery('.elementOrder').removeClass("elementOrder");

		if(need_run_parent_js){
			if( this.actionmodel){
				if(this.actionmodel.get("shortcode")=="slidercontent" || this.actionmodel.get("shortcode")=="tabcontent"){
					var id = this.actionmodel.get("id");
					var slider = vc.frame_window.jQuery('[data-model-id="'+id+'"]').find(".royalSlider_gallery_new");
					vc.frame_window.royalSlider_gallery_new(slider);

				}else{
					var id = this.actionmodel.get("id");
					var slider = vc.frame_window.jQuery('[data-model-id="'+id+'"]').closest(".royalSlider_gallery_new");
					vc.frame_window.royalSlider_gallery_new(slider);
				}
			}
		}
		if( !iframeWin.jQuery("body").hasClass("listening")){
			selectableInit();
		}
		
		
		
		if(this.order){
			vc.app.saveRowOrder(true);
			if(this.actionmodel){
				var tag = this.actionmodel.get("shortcode");
				var id = this.actionmodel.get("id");
				if(tag=="vc_column"){
					var now = vc.frame_window.jQuery('.vc-vc_column[data-model-id="'+id+'"]');
					now.find('>div>.column_inner>.column_containter > [data-model-id]').each(function(){
					  var $element = $(this),
						  index = $element.index();
					  vc.shortcodes.get($element.data('modelId')).save({order: index});
					});
				}else if(tag=="vc_column_inner"){
					var now = vc.frame_window.jQuery('.vc-vc_column_inner[data-model-id="'+id+'"]');
					now.find('>div>.column_inner>.column_containter > [data-model-id]').each(function(){
					  var $element = $(this),
						  index = $element.index();
					  vc.shortcodes.get($element.data('modelId')).save({order: index});
					});
				}
			}
		}else{
			vc.ShortcodesBuilder.save(true);
		}
      });
      
    },
    
    
    buildFromContent: function() {
    	if(jQuery("#bit-first-is-custom").val()=="1" ){
    		vc.setting_widget_dialog11.render("HOMEPAGE");
    		return false;
    	}
    	
    	vc.shortcodes.reset();
    	var shortcode_elements = {};
    	var page_shortcode_elements = vc.$page.find('[data-model-id]');
    	page_shortcode_elements.each(function(i, v){
    		var current_e = $(this);
    		shortcode_elements[current_e.attr('data-model-id')] = current_e;
    	});
    	
      _.each(vc.post_shortcodes, function(shortcode){
	    //var $block = vc.$page.find('[data-model-id=' + shortcode.id + ']'); //之前的每次搜索的算法是O平方复杂度
    	//var $parent = $block.parents('[data-model-id]');
        var $block = shortcode_elements[shortcode.id];
        if($block){
	        var $parent = $block.parent().closest('[data-model-id]');
	        var params = _.isObject(shortcode.attrs) ? shortcode.attrs : {};
	        var model = vc.shortcodes.create({
	          id: shortcode.id,
	          shortcode: shortcode.tag,
	          params: params,
	          parent_id: $parent.hasClass('vc-element') ? $parent.data('modelId') : false,
	          from_content: true
	        });
	        $block.attr('data-model-id', model.get('id'));
	        this._renderBlockCallback.call($block.get(0));
        }
      }, this);
      vc.frame.setSortable();
      this.checkNoContent();
      vc.frame_window.vc_iframe.reload();
    },
    
    
    buildFromTemplate: function(html, data) {
      var $html = $(html);
      vc.setDataChanged();
      vc.app.placeElement($html);
      _.each(data, function(shortcode){
        var $block = vc.$page.find('[data-model-id=' + shortcode.id + ']'),
          $parent = $block.parents('[data-model-id]'),
          params = _.isObject(shortcode.attrs) ? shortcode.attrs : {},
          model = vc.shortcodes.create({
            id: shortcode.id,
            shortcode: shortcode.tag,
            params: params,
            parent_id: $parent.hasClass('vc-element') ? $parent.data('modelId') : false,
            default_content: true
          });
        this._renderBlockCallback.call($block.get(0));
      }, this);
      vc.frame.setSortable();
      this.checkNoContent();
      vc.frame_window.vc_iframe.loadScripts();
    },
    _renderBlockCallback: function() {
      var $this = $(this), $html, model;
      if($this.data('type')==='files') {
        vc.frame_window.vc_iframe.addScripts($this.find('script[src],link'));
      } else {
        model = vc.shortcodes.get($this.data('modelId'));
        $html = $this.is('[data-type=element]') ? $($this.html()) : $this;
        model && model.get('shortcode') && vc.ShortcodesBuilder.renderShortcode($html, model);
      }
      vc.setFrameSize();
    },
    
    renderShortcode: function($html, model) {
      var view_name = this.getView(model);
      !model.get('from_content') && this.placeContainer($html, model);
      model.view = new view_name({model: model, el: $html}).render();
      this.notifyParent(model.get('parent_id'));
      model.view.rendered();
    	  
    },
    getView: function(model) {
	  var view = model.setting('is_container') || model.setting('as_parent') ? InlineShortcodeViewContainer : InlineShortcodeView;
      if(_.isObject(window['InlineShortcodeView' + '_' + model.get('shortcode')])) {
        view = window['InlineShortcodeView' + '_' + model.get('shortcode')];
      } /*
      else if(_.isString(vc.getMapped(model.get('shortcode')).js_view) && vc.getMapped(model.get('shortcode')).js_view.length && window[vc.getMapped(model.get('shortcode')).js_view]) {
        view = window[vc.getMapped(model.get('shortcode')).js_view];
      }
      */
      return view;
    },
	getQueryString : function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return r[2]; 
		return null;
	},
	lastChangingElementTime:false,
    update: function(model,silence) {
     var $this = this;
	  var t = this.getQueryString("categories");
	  var tag = model.get('shortcode');
	  var tmp_after = "";
	  var params = model.get('params');
	  if(tag=="vc_column_text" || tag=="vc_raw_js" || tag=="vc_column_custom_text"){
		 if(!params.content){
			params.content="&nbsp;";
		 }
	  }
	  if(!params.qfyuuid || params.qfyuuid=="" || params.qfyuuid==0 ){
		  var name = tag.replace("vc_","qfy_");
		  params.qfyuuid = name+"_"+this.randomString(); 
	  }

	 
	  var shortcode = this.toString(model);
	  if(t!=null){
			shortcode = shortcode.replace("][/vc_posts_grid]"," post_categories ='-1' page_categories ='-1' page_categories_hidden ='"+t+"' post_categories_hidden ='"+t+"' pro_categories_hidden ='"+t+"'][/vc_posts_grid]");
	  }
	  t = this.getQueryString("search");
	 
	  var t2 = this.getQueryString("searchtype");
	  if(t!=null){
			shortcode = shortcode.replace("][/vc_posts_grid]"," page_search ='"+t+"' page_searchtype ='"+t2+"'][/vc_posts_grid]");
	  }
	 
	
      vc.setDataChanged();
      if(silence!==true){
    	  vc.frame_window.jQuery('body').addClass('doing');
      }
	  var w = vc.frame_window.jQuery('body').width();
      this.ajax({action: 'vc_load_shortcode','qfy_iframe_body_w':w, shortcodes: [{id: model.get('id'), string: shortcode, tag: model.get('shortcode')}]})
        .done(function(html){
	 
          var old_view = model.view,$html = $(html);
          var sc=model.get('shortcode');
		  var id = model.get('id');

         // var popsetting = false;
          //if(old_view.$el.hasClass("popsetting")){
        //	  popsetting = true;
         // }
          
          $html.each(this._renderBlockCallback);
          model.view.$el.insertAfter(old_view.$el);
          if(vc.shortcodes.where({parent_id: model.get('id')}).length) {
			if(_.isObject(old_view)){
				if(old_view.content().find('> *').length>0){
					old_view.content().find('> *').appendTo(model.view.content());
				}else if(sc=="vc_row_inner"){
					//....
					iframeWin.jQuery("[data-model-id='"+id+"'] .row.qfe_row:first").find('> *').appendTo(model.view.content());
				}
			}
          }
		  
		
		   if(sc=="accordioncontent"){
					var models =  vc.shortcodes.where({parent_id: id});
					var el = model.view.$el;
					el.find(".a_content>h4,.a_content>h5").remove();
					_.each(models, function(childmodel) {
							if(childmodel.view.$el){
								childmodel.view.$el.appendTo(model.view.content());
							}
					}, this);	
					
					var p = iframeWin.jQuery("[data-model-id='"+id+"']");
					p.find(".a_content > .vc-vc_row_embad").each(function(i){
						var text = p.find(".a_header h4:eq("+i+")").html();
						var curr = jQuery(this);
						if(text){
							var prev = curr.prev();
							if(prev.hasClass("panel-title")){
								prev.html(text);
							}else{
								curr.before('<h4 class="panel-title" style="display:block;">'+text+'</h4>');
								prev = jQuery('<h4 class="panel-title" style="display:block;">'+text+'</h4>');
							}
							if(prev.find(".line").length>0 && !curr.next().hasClass("qfydownline")){
								 var line = "<h5 class='qfydownline' style='position:relative;z-index:5;margin:0;padding:0;'>"+prev.find(".line").prop("outerHTML")+"</h5>";
								 curr.after(line);
							}
						}
						
					})
			  					
			  
		  }
		   if(old_view) old_view.remove();
          vc.frame_window.vc_iframe.loadScripts();
		
          model.view.changed();
          vc.frame.setSortable();
          model.view.updated();
          $this.lastChangingElementTime = false;
        // if(popsetting)  model.view.$el.addClass("popsetting");
          var id= model.get('id');
		  if(sc=="vc_single_image"){
			  singleImageTextInit(id);
			  image_draggle(model);
		  }else if(sc=="Bit-VCSC-Circliful"){
			  iframeWin.bit_circliful( iframeWin.jQuery("[data-model-id='"+id+"']"));
		  }else if(sc=="Bit-vc-counter"){
			  iframeWin.bit_counter( iframeWin.jQuery("[data-model-id='"+id+"']"));
		  }else if(sc=="vc_column_text"||sc=="vc_raw_html"||sc=="vc_qf_text"||sc=="vc_html_features"){
			 iframeWin.jQuery("[data-model-id='"+id+"'] .qfe_wrapper").bind("dblclick",function(){
				 if(!jQuery(this).hasClass("cke_editable") &&  !jQuery(this).hasClass("inline_editing")  ){
					 editInLine(id,model);
				 }
    		 })
			 iframeWin.toolTip(iframeWin.jQuery('[data-model-id=' + id + '] [data-tooltip=\'on\']'));
		  }else if(sc=="qfyuser"){
			iframeWin.qfyuser_responsive();
		  }else if(sc=="vc_column_custom_text"){
				iframeWin.qfy_custom_select();
		  }else if(sc=="TS_VCSC_Countdown"){
				iframeWin.bit_counterdown();
		  }else if(sc=="bitcommerce_my_account"){
				iframeWin.bit_myaccountLayout();
		  }	else if(sc=="product_page"){
				iframeWin.bit_qfbook();
				  _bind_product_grouptable(iframeWin.jQuery("[data-model-id='"+id+"']"));
		  }	else if(sc=="qfbook"){
				iframeWin.bit_qfbook();
		  }	else if(sc=="advanced_list"){
			  _bind_advanced_list_btn(iframeWin.jQuery("[data-model-id='"+id+"']"));
		  }else if(sc=="qfbookform"){
				iframeWin.bit_qfbookform();
		  }else if(sc=="vc_notice"){
				var thisnotice = model.view.$el.find(".qfy-element.qfy_notice");
				var uuid = thisnotice.attr("id");
				thisnotice.find(".notice_warp").click();
		  }else if(sc=="Bit_HTML5_Video"){
			  iframeWin.bit_reloadiframevideo();
		  }else if(sc=="list_cate_controls"){
				iframeWin.jQuery("[data-model-id=" + id + "] .qfy-listcatecontrols[data-child='1'],[data-model-id=" + id + "] .qfy-listmenuvertical[data-child='1']").each(function(){
						var cur = jQuery(this).find(".list-content .current-cat");
						jQuery(this).find(".list-content .children").hide();
						cur.parents("li,ul").show();
						if(cur.hasClass("cat-parent") && cur.closest(".list-content").length>0 ) cur.find(">.children").show();
				})
		  }else if(sc=="vc_column"){
			    var sumwidth = 0;
				var first = true;
				if(iframeWin.jQuery("[data-model-id='"+id+"']").find(".isotope-item").length>0){
					setTimeout(function(){ vc.frame_window.vc_teaserGrid();vc.frame_window.bitLibLayout();},500);
				}
				 
				iframeWin.jQuery("[data-model-id='"+id+"']").parent().find(".vc-vc_column").each(function(){
					var dw = $(this).find("> div").attr("data-dw");
					if(dw){
						var tmp = dw.split("/");
						var num = tmp[0]*12/tmp[1];
						sumwidth = sumwidth +num;
						
						$(this).find("> div > .vc-resize-column-bar.top .pre").remove();
						$(this).find("> div > .vc-resize-column-bar.top .next").remove();
						
						if(first==true){
							if($(this).find("> div > .vc-resize-column-bar.top .next").length==0){
								$(this).find("> div > .vc-resize-column-bar.top .copy").before("<span class='next' title='向右移动'></span>");
							}
							first = false;
						}else{
							if($(this).find("> div > .vc-resize-column-bar.top .pre").length==0){
								$(this).find("> div > .vc-resize-column-bar.top .copy").before("<span class='pre' title='向左移动'></span>");
							}
							if($(this).find("> div > .vc-resize-column-bar.top .next").length==0){
								$(this).find("> div > .vc-resize-column-bar.top .copy").before("<span class='next' title='向右移动'></span>");
							}
						}
						if(sumwidth%12==0){
							$(this).find("> div >.drag-column-container").addClass("hide");
							$(this).find("> div > .vc-resize-column-bar.top .next").remove();
							first =true;
						}else{
							$(this).find("> div >.drag-column-container").removeClass("hide");
						}
					}
				})

			
		  }
		  if(sc=="vc_row_inner" || sc=="slidercontent" || sc=="tabcontent" || sc=="accordioncontent"){
			  if( iframeWin.jQuery("[data-model-id=" + id + "]").closest(".qfy_inner_setting_parent").length>0){
				  iframeWin.jQuery("[data-model-id=" + id + "]").addClass("qfy_inner_setting");
				  iframeWin.jQuery("[data-model-id=" + id + "] .control-btn-inner").hide();
				  iframeWin.jQuery("[data-model-id=" + id + "] .control-btn-outner").show();
			  }
		  }
		  if(typeof iframeWin.resizeDefaultObjSize=="function"){
			iframeWin.resizeDefaultObjSize();
		  }
        });
    },
    ajax: function(data, url) {

      return this._ajax = $.ajax({
        url: url || vc.admin_ajax,
        type: 'POST',
        dataType: 'html',
        data: _.extend({post_id: vc.post_id, vc_inline: true}, data),
        context: this,
		timeout : 45000,
	    error : function(xhr,textStatus){
			if(url=="post.php"){
				bitweb_save_callback();
				if(textStatus=="timeout"){
					top.jConfirmMore('抱歉，因为网络原因导致保存失败，你可以尝试再次保存，或者关闭后复制最近的修改到本地后再刷新页面！',function(){
						vc.ShortcodesBuilder.save(true);
						
					},"警告信息","尝试再次保存","关闭");
				}
			}
			
			
        }
      });
    },
    lastID: function() {
      return this.models.length ? _.last(this.models).get('id') : '';
    },
    last: function() {
      return this.models.length ? _.last(this.models) : false;
    },
    firstID: function() {
      return this.models.length ? _.first(this.models).get('id') : '';
    },
    first: function() {
      return this.models.length ? _.first(this.models) : false;
    },
    notifyParent: function(parent_id) {
      var parent = vc.shortcodes.get(parent_id);
      parent && parent.view && parent.view.changed();
    },
    remove: function() {
    },
    _getContainer: function(model) {
      var container, parent_model,
        parent_id = model.get('parent_id');
      if(parent_id !== false) {
        parent_model = vc.shortcodes.get(parent_id);
        if(_.isUndefined(parent_model)) return vc.app;
        // parent_model.view === false && this.addShortcode(parent_model);
        container = parent_model.view;
      } else {
        container = vc.app;
      }
      return container;
    },
    placeContainer: function($html, model) {
      var container = this._getContainer(model);
	  if(vc.group){
		  if(model.get('shortcode')=="vc_row"|| model.get('shortcode')=="vc_row_inner"){
			container && container.placeElement($html, vc.activity);
			if(vc.activity) vc.activity = false;
		  }else{
			container && container.placeElement($html, false);
		  }
	  }else{
		container && container.placeElement($html, vc.activity);
	  }
      return container;
    },
    toString: function(model, type) {
      var params = model.get('params'),
        content = _.isString(params.content) ? params.content : '';
      return wp.shortcode.string({
        tag: model.get('shortcode'),
        attrs: _.omit(params, 'content'),
        content: content,
        type:_.isString(type) ? type : ''
      });
    },
    modelsToString: function(models) {
      var string = '';
      _.each(models, function(model) {
        var tag = model.get('shortcode');
         var params = model.get('params');
        var  content = _.isString(params.content) ? params.content : '';
		if( tag=="vc_column_text_header"|| tag=="vc_column_text_view" || tag=="vc_column_text_viewgroup" || tag=="vc_column_text_image" ||tag=="vc_column_text_images" ||tag=="vc_column_text_sliders" || tag=="vc_column_text_button" ||tag=="vc_column_text_map"||tag=="vc_column_text_video"||tag=="vc_column_text_yun_video"||tag=="vc_column_text_dy_ulist"||tag=="vc_column_text_dy_user"){
			content = "&nbsp;";
		}else if( content=="" &&( tag=="vc_column_text" || tag=="vc_raw_js" || tag=="vc_column_custom_text") ){
			content = "&nbsp;";
		}
        content += this.modelsToString(vc.shortcodes.where({parent_id: model.get('id')}));
        
        var params_obj = _.omit(params, 'content') ;
        if(params_obj != null && !jQuery.isEmptyObject(params_obj)){
        	this.hasParams = true;
        }
       
        string += wp.shortcode.string({
          tag: tag,
          attrs:params_obj,
          content: content,
          type: content == '' && !vc.getMapped(tag).is_container ? 'single' : ''
        });
      }, this);
      
      return string;
    },
	modelsToStringIgnoreData: function(models) {
      var string = '';
      _.each(models, function(model) {
        var tag = model.get('shortcode');
        var params = model.get('params');
		
		
        var  content = "";
        
        var params_obj = _.omit(params, 'content') ;
        if(params_obj != null && !jQuery.isEmptyObject(params_obj)){
        	this.hasParams = true;
        }
		var map = vc.getMapped(tag);
		 _.each(map.params,function(item){
			if(item.ignore_in_format){
				delete params_obj[item.pn];
			}else if(!params_obj[item.pn]){
				params_obj[item.pn]="";
			}
		 });
		 
        string += wp.shortcode.string({
          tag: tag,
          attrs:params_obj,
          content: content,
          type: content == '' && !vc.getMapped(tag).is_container ? 'single' : ''
        });
      }, this);
      
      return string;
    },
    getContent: function() {
      vc.shortcodes.sort();
      return this.modelsToString(vc.shortcodes.where({parent_id: false}));
    },
    checkNoContent: function() {
      vc.frame.noContent(!vc.shortcodes.length ? true : false);
    },
	checkContentError:function(string){
		  if(string){
		  //检查是否对称
		  var vc_row_begin_count =(string.split('[vc_row ')).length-1+　(string.split('[vc_row]')).length-1;
		  var vc_row_begin_end =(string.split('[/vc_row]')).length-1; 
		  if(vc_row_begin_count!=vc_row_begin_end){
				return false;
		  }
		  var vc_column_begin_count =(string.split('[vc_column ')).length-1+(string.split('[vc_column]')).length-1;
		  var vc_column_begin_end =(string.split('[/vc_column]')).length-1; 
		  if(vc_column_begin_count!=vc_column_begin_end){
			   return false;
		  }
		  var vc_columntext_begin_count =(string.split('[vc_column_text ')).length-1+(string.split('[vc_column_text]')).length-1;
		  var vc_columntext_begin_end =(string.split('[/vc_column_text]')).length-1; 
		  if(vc_columntext_begin_count!=vc_columntext_begin_end){
			   //[vc_column_text *]
			  var re = /\[vc_column_text[^\]]*\][\s\n\t]*\[/g;
			  var found = string.match(re);
			  var isoneerror = true;
			  if(found!=null ){
				if(vc_columntext_begin_count == (vc_columntext_begin_end+found.length)){
					isoneerror = false;
				}
			  }
			 if(isoneerror){
				 return false;
			 }
		  }
		  if(string.indexOf("[vc_row_inner ")>-1){
			  var vc_row_inner_begin_count =(string.split('[vc_row_inner ')).length-1+(string.split('[vc_row_inner]')).length-1;
			  var vc_row_inner_begin_end =(string.split('[/vc_row_inner]')).length-1; 
			  if(vc_row_inner_begin_count!=vc_row_inner_begin_end){
				 return false;
			  }
			  var vc_column_inner_begin_count =(string.split('[vc_column_inner ')).length-1+(string.split('[vc_column_inner]')).length-1;
			  var vc_column_inner_begin_end =(string.split('[/vc_column_inner]')).length-1; 
			  if(vc_column_inner_begin_count!=vc_column_inner_begin_end){
				 return false;
			  }			  
		  }
		  if(string.indexOf("[vc_row_embad ")>-1){
			  var vc_row_embad_begin_count =(string.split('[vc_row_embad ')).length-1+(string.split('[vc_row_embad]')).length-1;
			  var vc_row_embad_begin_end =(string.split('[/vc_row_embad]')).length-1; 
			  if(vc_row_embad_begin_count!=vc_row_embad_begin_end){
				 return false;
			  }
			  var vc_column_embad_begin_count =(string.split('[vc_column_embad ')).length-1+(string.split('[vc_column_embad]')).length-1;
			  var vc_column_embad_begin_end =(string.split('[/vc_column_embad]')).length-1; 
			  if(vc_column_embad_begin_count!=vc_column_embad_begin_end){
				  return false;
			  }		
		  }
		  //包含,vc_column 不能包含vc_column
		  var tmpstring = string.replace(/\[vc_row [^\]]*\]/g,'<div class="vc_row">').replace(/\[vc_row\]/g,'<div class="vc_row">');
		   tmpstring = tmpstring.replace(/\[vc_column [^\]]*\]/g,'<div class="vc_column">').replace(/\[vc_column\]/g,'<div class="vc_column">');
		   tmpstring = tmpstring.replace(/\[\/vc_row\]/g,'</div>').replace(/\[\/vc_column\]/g,'</div>');
		   tmpstring = tmpstring.replace(/\[vc_column_inner [^\]]*\]/g,'<div class="vc_column_inner">').replace(/\[vc_column_inner\]/g,'<div class="vc_column_inner">');
		   tmpstring = tmpstring.replace(/\[\/vc_column_inner\]/g,'</div>');
		    tmpstring = tmpstring.replace(/\[vc_column_embad [^\]]*\]/g,'<div class="vc_column_embad">').replace(/\[vc_column_embad\]/g,'<div class="vc_column_embad">');
		   tmpstring = tmpstring.replace(/\[\/vc_column_embad\]/g,'</div>');
		   var ishaserror =false;
		    if(tmpstring.substr(0,1)=="<"){
			   jQuery(tmpstring).find(".vc_column,.vc_column_inner,.vc_column_embad").each(function(){
					if(jQuery(this).find(".vc_row").length>0 || jQuery(this).find(".vc_column").length>0){
						ishaserror = true;
						return false;
					}
			   });
			}
		   if(ishaserror){
				return false;
		   }
		  
		}
		return true;
	},
	tipContentError:function(){
		jAlert('对不起，系统检测到一个数据格式的错误导致保存失败,系统尝试修复,最后一次保存的数据将会丢失。');
		jQuery.post("/FeiEditor/siteEdit/restorepage",{post_id:vc.post_id},function(data){
			top.location.reload();
		})
		
	},
	delay_save:function(status,callback){
		var $this = this;
		if($this.savepostTimeout) clearTimeout($this.savepostTimeout);
		$this.savepostTimeout = setTimeout(function() {
				$this.save(status,callback);
		}, 3000);
		
	},
    save: function(status,callback) {
	  //auto save must one by one
	  if(status==true && this.isPosting==true){
		vc.frame_window.jQuery('body').removeClass('doing');
		return false;
	  }

	  if(typeof  vc.frame_window.resize_royalSlider_gallery_new=="function"){
		vc.frame_window.resize_royalSlider_gallery_new();
	  }
	  
	  
	  this.hasParams = false;
      var string = this.getContent();
      if(string.indexOf("vc_row") > -1 && this.hasParams == false){
    	  //has prama losing problem.
    	  jAlert('对不起，系统检测到一个数据格式错误，请刷新页面后重新保存。');
		  vc.frame_window.jQuery('body').removeClass('doing');
    	  return;
      }

      
	  if(string!=""){
			//string ='[vc_row id="bit_quwxm"][/vc_row]';
			string = string.replace(/\[vc_row[^\]]*\]\[\/vc_row\]/g,"");
			//vc_row vc_row_inner
			string = string.replace("[vc_row]","[vc_row ]");
			var res = string.split("[vc_row ");
			
			var tmpString = "";
			if(res.length>0){
				for (var i=0;i<res.length;i++)
				{
					if(res[i].indexOf('id="bit_')!=0 && i>0){
						res[i] = 'id="bit_'+this.randomString()+'" '+res[i];
					}
					if(i>0){
						tmpString = tmpString + "[vc_row "+res[i];
					}
				}
				if(tmpString!=""){
					string = tmpString;
				}
			}
	  }
	  if(this.checkContentError(string)==false){
	      this.tipContentError();
		  return;
	  }
	
	  var $this = $(window.top.document).find('#bit_site_top .saveOnePage');
	  if( $this.find('.icon-save-one-page').length>0){
		$this.find('.icon-save-one-page').removeClass('icon icon-save-one-page').addClass('fa fa-spinner fa-spin fa-3x fa-fw');
	  }
       var data = {
          action: $('#hiddenaction').val(),
          originalaction: $('#originalaction').val(),
          _qfnonce: $('#_qfnonce').val(),
          user_ID: $('#user-id').val(),
          content: string,
          post_ID: vc.post_id,
          post_custom_css: vc.$custom_css.val()
        };
      if(status) {
        data.post_status = "publish";
        $('.vc_button_save_draft').hide(100) && $('#vc-button-update').text(window.i18nLocale.update_all);
      }
      if(vc.update_title) data.post_title = vc.title;
	
      this.ajax(data, 'post.php')
        .done(function(msg){
			  if(msg && msg.indexOf("login-action-login")>-1 && msg.indexOf('id="loginform"')>-1 && msg.indexOf("qfy-login.php")>-1 ){
				//....timeout
				top.jAlert("亲，非常抱歉，我们在保存网页的时候发现会话出现不可恢复的问题。请备份您本次所做的修改到本地计算机。例如：您可以把编辑的文本保存到记事本中。然后再刷新页面重新登录后修改网页。如果经常碰到这个问题，请联系客服人员。再次为给您带来的不便致歉。");
				if(status!=true){
					ajaxAfterSave();
			    }
				return false;
			  }else  if(msg && msg.indexOf("data-template='login'")>-1  && msg.indexOf('data-action="login"')>-1){
					//....timeout
					top.jAlert("亲，系统检测到您的登录已经过期，请重新登录。谢谢！");
					top.location.href="/FeiEditor/siteEdit/close";
					return false;
				}
			  //vc.frame_window.jQuery('body').removeClass('doing');

			  bitweb_save_callback();
			  
			  if(status==true && this.isPosting==true){
				this.isPosting==false
			  }
			  if(status!=true){
					ajaxAfterSave();
			  }
			  $(window).unbind('beforeunload.vcSave');
			  vc.showMessage('Successfully updated!');
		 
        
			lastVcContent=string;
			
			
			var host = gethost();
			if(string) {
				string = string.replace(/\[/g,"<");
				string = string.replace(/\]/g,">");
			}
			if(msg=="error"){
			  jAlert("保存失败，发生未知错误！");
			  return false;
			}
			if(_.isFunction(callback)) {
			      	callback();
			}
			$j(string).find("img").each(function(){
				var src =$j(this).attr("src");
				if(src && (src.indexOf("http://")==0 || src.indexOf("https://")==0) && ( src.indexOf(host)<0 && ( vc.frame_window.dtGlobals.cdn_url=="" || src.indexOf(vc.frame_window.dtGlobals.cdn_url)<0 ) ) ){
					if(src.indexOf("?attachment_id=")>-1){
						var tmp = src.split("?attachment_id=");
						src = tmp[0];
					}
					if(src.indexOf("?")<0){
						jAlert("内容包含外部图片，需要刷新页面将其保存到该网站图库中！");
						parent.changePageUrl();
					}
				}else if(src && src.indexOf("data:image")>-1){
					jAlert("内容包含剪贴板图片，需要刷新页面将其保存到该网站图库中！");
					parent.changePageUrl();
				}
			})

        });
    },
    /**
     * Parse shortcode string into objects.
     * @param data
     * @param content
     * @param parent
     * @return {*}
     */
    parse: function (data, content, parent) {
      var tags = _.keys(vc.map).join('|'),
        reg = window.wp.shortcode.regexp(tags),
        matches = $.trim(content).match(reg);
      if (_.isNull(matches)) return data;
      _.each(matches, function (raw) {
        var sub_matches = raw.match(this.regexp(tags)),
          sub_content = sub_matches[5],
          sub_regexp = new RegExp('^[\\s]*\\[\\[?(' + _.keys(vc.map).join('|') + ')(?![\\w-])'),
          atts_raw = window.wp.shortcode.attrs(sub_matches[3]),
          atts = {},
          shortcode,
          id = vc_guid(),
          map_settings;
        _.each(atts_raw.named, function (value, key) {
          atts[key] = this.unescapeParam(value);
        }, this);
        shortcode = {
          id: id,
          shortcode:sub_matches[2],
          params:_.extend({}, atts),
          parent_id:(_.isObject(parent) ? parent.id : false)
        };
        map_settings = vc.getMapped(shortcode.shortcode);
        data[id] = shortcode;
        if (id == shortcode.root_id) {
          data[id].html = raw;
        }
        if (_.isString(sub_content) && sub_content.match(sub_regexp) &&
          (
            (map_settings.is_container && _.isBoolean(map_settings.is_container) && map_settings.is_container === true) ||
              (!_.isUndefined(map_settings.as_parent) && map_settings.as_parent !== false)
            )) {
          data = this.parse(data, sub_content, data[id]);
        } else if (_.isString(sub_content) && sub_content.length && sub_matches[2]==='vc_row') {
          data = this.parse(data, '[vc_column width="1/1"][vc_column_text]' + sub_content + '[/vc_column_text][/vc_column]', data[id]);
        } else if (_.isString(sub_content) && sub_content.length && sub_matches[2]==='vc_column') {
          data = this.parse(data, '[vc_column_text]' + sub_content + '[/vc_column_text]', data[id]);
        } else if (_.isString(sub_content)) {
          data[id].params.content = sub_content; // sub_content.match(/\n/) && !_.isUndefined(window.switchEditors) ? window.switchEditors.qfautop(sub_content) : sub_content;
        }
      }, this);
      return data;
    },
    regexp:_.memoize(function (tags) {
      return new RegExp('\\[(\\[?)(' + tags + ')(?![\\w-])([^\\]\\/]*(?:\\/(?!\\])[^\\]\\/]*)*?)(?:(\\/)\\]|\\](?:([^\\[]*(?:\\[(?!\\/\\2\\])[^\\[]*)*)(\\[\\/\\2\\]))?)(\\]?)');

    }),
    /**
     * Unescape double quotes in params valus.
     * @param value
     * @return {*}
     */
    unescapeParam:function (value) {
      return value.replace(/(\`{2})/g, '"');
    },
    setResultMessage: function(string) {
      this.message = string;
    },
    showResultMessage: function() {
      if(this.message !== false) vc.showMessage(this.message);
      this.message = false;
    }
  };
})(window.jQuery);;

/* vc_inline_models_js: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-content/plugins/qfy_editor/inline/assets/js/lib/models.js) */
/* =========================================================
 * custom_views.js v1.1
 * =========================================================
 * Copyright 2013 QFEditor
 *
 * Visual composer Frontend modals & collections
 * ========================================================= */


(function ($) {
  if(_.isUndefined(window.vc)) window.vc = {};
  /**
   * Shortcode model
   * @type {*}
   */
  var Shortcode = Backbone.Model.extend({
    defaults:function () {
      var id = vc_guid();
      return {
        id:id,
        shortcode:'vc_text_block',
        order: vc.shortcodes.nextOrder(),
        params:{
        },
        parent_id:false
      };
    },
    settings: false,
    getParam: function(key) {
      return _.isObject(this.get('params')) && !_.isUndefined(this.get('params')[key]) ? this.get('params')[key] : '';
    },
    sync: function () {
      return false;
    },
    setting: function(name) {
        if(this.settings === false) this.settings = vc.getMapped(this.get('shortcode')) || {};
        return this.settings[name];
    },
    view: false
  });
  /**
   * Collection of all shortcodes.
   * @type {*}
   */
  var Shortcodes = Backbone.Collection.extend({
    model: Shortcode,
    sync: function () {
      return false;
    },
    nextOrder: function() {
      if (!this.length) return 1;
      return this.last().get('order') + 1;
    },
    initialize:function () {
      this.bind('remove', this.removeChildren, this);
      this.bind('remove', vc.ShortcodesBuilder.checkNoContent);
    },
    comparator:function (model) {
      return model.get('order');
    },
    /**
     * Remove all children of the model from storage.
     * Will remove children of children models too.
     * @param parent - model which is parent
     */
    removeChildren: function (parent) {
      var models = vc.shortcodes.where({parent_id:parent.id});
      _.each(models, function (model) {
        model.destroy();
        // this.removeChildren(model);
      }, this);
    }
  });
  vc.shortcodes = new Shortcodes;
})(window.jQuery);;

