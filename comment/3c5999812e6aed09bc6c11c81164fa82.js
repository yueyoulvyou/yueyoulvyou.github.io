/*
Cache: thickbox, jquery_data_zn, bootstrap_iconpicker_js, bootstrap_js, vc_inline_build_js, vc_inline_custom_view_js, vc_inline_js
*/
/* vc_inline_js: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-content/plugins/qfy_editor/inline/assets/js/lib/vc.js) */
/* =========================================================
 * vc.js v1.0.1
 * =========================================================
 * Copyright 2013 QFEditor
 *
 * Visual composer Frontend backbone/underscore version
 * ========================================================= */
/**
 * Create Unique id for records in storage.
 * Generate a pseudo-GUID by concatenating random hexadecimal.
 * @return {String}
 */
function vc_guid() {
    return (VCS4() + VCS4() + "-" + VCS4());
}

// Generate four random hex digits.
function VCS4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

if (_.isUndefined(vc)) var vc = {};

_.extend(vc, {
    template_options: {
        evaluate: /<#([\s\S]+?)#>/g,
        interpolate: /\{\{\{([\s\S]+?)\}\}\}/g,
        escape: /\{\{([^\}]+?)\}\}(?!\})/g
    },
    post_id: '',
    activity: false,
    group: false,
    clone_index: 1,
    loaded: false,
    path: '',
    active_panel: false,
    admin_ajax: window.ajaxurl,
    filters: {templates: []},
    title: '',
    $title: false,
    update_title: false,
    $hold_active: false,
    data_changed: false,
    setDataChanged: function () {
        window.jQuery(window).bind('beforeunload.vcSave', function (e) {
            //wyuan
            //return window.i18nLocale.confirm_to_leave;
        });
        this.data_changed = true;
    },
    addTemplateFilter: function (callback) {
        if (_.isFunction(callback)) this.filters.templates.push(callback);
    },
    closeActivePanel: function () {
        this.active_panel && this.active_panel.hide();
        this.actice_panel = false;
    },
    unsetHoldActive: function () {
        if (this.$hold_active) {
            this.$hold_active.removeClass('vc-hold-active');
            this.$hold_active = false;
        }
    }
});
var oldiframeSize = false;
(function ($) {
    "use strict";
    $(document).ajaxSend(function (e, xhr, req) {
        //req && req.data && req.data.match(/vc_inline=true/) && $('#vc-logo').addClass('vc-ajax-loading');
        //$('#vc-logo').addClass('vc-ajax-loading');
    }).ajaxStop(function () {
        ajaxAfterLoading()
        //$('#vc-logo').removeClass('vc-ajax-loading');
    });
    vc.map = {};
    vc.getMapped = function (tag) {
        return vc.map[tag] || {};
    }
    vc.setFrameReloadCSS = function () {
        if (iframeWin) {
            iframeWin.jQuery("#header .wf-table,#header.headerPM,#header.headerInnerPM > .wf-wrap,#footer,#footer > .wf-wrap,#bottom-bar,#bottom-bar> .wf-wrap,#header .top-bar-right,#branding .bitem.logo img").removeAttr("style");

            var text_style = iframeWin.jQuery("#header .assistive-info").attr("style");
            if (text_style) {
                text_style = text_style.replace(/width[^p]*px;/g, '');
                text_style = text_style.replace(/padding[^p]*px;/g, '');
                text_style = text_style.replace(/padding-left[^p]*px;/g, '');
                text_style = text_style.replace(/padding-top[^p]*px;/g, '');
                text_style = text_style.replace(/padding-bottom[^p]*px;/g, '');
                text_style = text_style.replace(/padding-right[^p]*px;/g, '');
                iframeWin.jQuery("#header .assistive-info").attr("style", text_style);
            }
            text_style = iframeWin.jQuery("#header #branding .bitem.text").attr("style");
            if (text_style) {
                text_style = text_style.replace(/left[^p]*px;/g, '');
                text_style = text_style.replace(/top[^p]*px;/g, '');
                iframeWin.jQuery("#header  #branding .bitem.text").attr("style", text_style);
            }
            text_style = iframeWin.jQuery("#header #branding .bitem.logo").attr("style");
            if (text_style) {
                text_style = text_style.replace(/left[^p]*px;/g, '');
                text_style = text_style.replace(/top[^p]*px;/g, '');
                iframeWin.jQuery("#header  #branding .bitem.logo").attr("style", text_style);
            }
            iframeWin.jQuery(".site_tooler,div.qfyuser").each(function () {
                var widget_style = jQuery(this).attr("style");
                if (widget_style && widget_style.indexOf("padding") > -1) {
                    widget_style = widget_style.replace(/padding[^p]*px;/g, '');
                    widget_style = widget_style.replace(/padding-left[^p]*px;/g, '');
                    widget_style = widget_style.replace(/padding-top[^p]*px;/g, '');
                    widget_style = widget_style.replace(/padding-bottom[^p]*px;/g, '');
                    widget_style = widget_style.replace(/padding-right[^p]*px;/g, '');
                    jQuery(this).attr("style", widget_style);
                }
            })
            iframeWin.jQuery(".qfy-element").each(function () {
                var m_padding = jQuery(this).attr("m-padding");
                var p_padding = jQuery(this).attr("p-padding");
                if (m_padding && p_padding) {
                    if (iframeWin.jQuery("body").width() > 768) {
                        jQuery(this).css("padding", p_padding);
                    } else {
                        jQuery(this).css("padding", m_padding);
                    }
                }

            })


            iframeWin.jQuery(".qfy_resizing .resizecontrol").hide();
            iframeWin.jQuery(".qfy_resizing").removeClass("qfy_resizing");
            iframeWin.jQuery("body").removeClass("resizing");

            var href = iframeWin.jQuery("#qfy_dynamic_css-css").attr("href");
            if (href.indexOf("&qfytmp_") > -1) {
                href = href.split("&qfytmp_")[0];
            }
            iframeWin.jQuery("#qfy_dynamic_css-css").attr("href", href + "&qfytmp_" + time());

        }
    }
    vc.setFrameSize = function (size, refresh) {
        if (!size) {
            return;
        }
        if (typeof top.jQuery === "undefined") {
            setTimeout(function () {
                vc.setFrameSize(size);
            }, 500);
        }
        var height = $(window).height();
        if (top.jQuery("#site-content-iframe").length == 1) {
            height = top.jQuery("#site-content-iframe").height();
        }
        var vcdocument = vc.$frame.get(0).contentWindow;
        if (!iframeWin) iframeWin = vcdocument;
        if (size == '320px') {
            vc.$frame.addClass('vc-inline-frame320');
            vc.$frame_wrapper.addClass('vc-inline-frame-wrapper320');
            if (top != self) top.setCookie("frame-width", "320px", 1);
            jQuery(".mobile_setting_bar .slider").hide();
            jQuery(".mobile_setting_bar .sliderimage").hide();

            if (iframeWin.jQuery("#bitBanner .widget_revslider").length > 0) {
                jQuery(".mobile_setting_bar .slider").show();
            } else if (iframeWin.jQuery("#bitBanner .bit_banner_image_parent").length > 0) {
                jQuery(".mobile_setting_bar .sliderimage").show();
            }
            if (iframeWin.jQuery("#page.fullscreenpage").length > 0) {
                jQuery(".mobile_setting_bar .bar.cart").hide();
            }

        } else {
            if (size == '768px') {
                if (top != self) top.setCookie("frame-width", "768px", 1);
            }
            vc.$frame.removeClass('vc-inline-frame320');
            vc.$frame_wrapper.removeClass('vc-inline-frame-wrapper320');
            if (top != self) top.setCookie("frame-width", "", -1);
        }

        vc.$frame.width(size);

        vc.$frame_wrapper.css({top: $('#vc-navbar:visible').height() * 1});
        vc.$frame.height(height);

        if (iframeWin && refresh !== true) {
            iframeWin.jQuery(".qfe_single_image .ui-resizable-handle").hide();
            iframeWin.jQuery(".qfe_single_image .ui-wrapper img").css("width", "auto").css("height", "auto");
            iframeWin.jQuery(".qfe_single_image .ui-wrapper").css("width", "auto").css("height", "auto");
            if (iframeWin.jQuery(".rev_slider_wrapper").length > 0 && oldiframeSize != false && oldiframeSize != size && iframeWin.jQuery(".rev_slider_wrapper .rev_slider>ul").attr("data-mobileheight") > 0 && iframeWin.jQuery(".rev_slider_wrapper .rev_slider>ul").attr("data-height") != iframeWin.jQuery(".rev_slider_wrapper .rev_slider>ul").attr("data-mobileheight")) {
                refreshREvSlider(iframeWin.jQuery(".rev_slider_wrapper"), 0, 'resize');
            }
            if (size == '320px' || size == '768px') {
                iframeWin.bitLibLayout();
            }
            iframeWin.image_lazy_event();
            if (iframeWin.jQuery('.inline_editing').length > 0) {
                iframeWin.jQuery('.inline_editing').parents("section").find(".vc-controls").show();
                iframeWin.jQuery('.inline_editing').parent().find(".vc-controls").removeClass("displaynone");
                iframeWin.jQuery('.inline_editing').removeClass('inline_editing').froalaEditor('destroy');
                iframeWin.jQuery("body").removeClass('doing');
            }
        }
        oldiframeSize = size;


        // vc.$frame.height(vc.$frame.contents() ? vc.$frame.contents().height() : 1000);
    };
    vc.getDefaults = function (tag) {
        var defaults = {},
            params = _.isArray(vc.getMapped(tag).params) ? vc.getMapped(tag).params : [];
        _.each(params, function (param) {
            if (!_.isUndefined(param.std)) {
                defaults[param.pn] = param.std;
            } else if (!_.isUndefined(param.value)) {
                if (_.isObject(param.value) && param.type != 'checkbox') {
                    defaults[param.pn] = _.values(param.value)[0];
                } else if (_.isArray(param.value)) {
                    defaults[param.pn] = param.value[0];
                } else if (!_.isObject(param.value)) {
                    defaults[param.pn] = param.value;
                } else {
                    defaults[param.pn] = '';
                }
            }
        });
        return defaults;
    };
    vc.buildRelevance = function () {
        vc.shortcode_relevance = {};
        _.each(vc.map, function (object) {

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
        vc.checkRelevance = function (tag, related_tag) {
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
    };

    vc.CloneModel = function (model, parent_id, child_of_clone) {
        var newtag = model.get('shortcode');
        var params = _.extend({}, model.get('params'));
        if (newtag == "iphorm_vc") {
            var old_id = params.id;
            jQuery.ajax({
                type: 'POST',
                url: "/FeiEditor/siteEdit/ajax_copy_form/" + old_id,
                success: function (newid) {
                    if (newid > 0) {
                        params.id = newid;
                    }
                },
                async: false
            });
        }
        if (iframeWin.jQuery("[data-model-id='" + parent_id + "']").closest("section.section-special").length > 0) {

            params._left = (params._left ? params._left : 0) * 1 + 10;
            params._top = (params._top ? params._top : 0) * 1 + 10;
            params.__left = (params.__left ? params.__left : 0) * 1 + 10;
            params.__top = (params.__top ? params.__top : 0) * 1 + 10;
        }

        var new_order = _.isBoolean(child_of_clone) && child_of_clone === true ? model.get('order') : parseFloat(model.get('order')) + vc.clone_index,

            tag = model.get('shortcode'),
            data = {
                shortcode: tag,
                parent_id: parent_id,
                order: new_order,
                cloned: true,
                cloned_from: model.toJSON(),
                params: params
            };
        if (vc['cloneMethod_' + tag]) data = vc['cloneMethod_' + tag](data, model);
        vc.ShortcodesBuilder.create(data);
        var new_model = vc.ShortcodesBuilder.last();
        var new_model_id = vc.ShortcodesBuilder.lastID();
        if (!_.isBoolean(child_of_clone) || child_of_clone !== true) model.view.$el.addClass('vc-place-after');
        _.each(vc.shortcodes.where({parent_id: model.get('id')}), function (shortcode) {
            vc.CloneModel(shortcode, new_model_id, true);
        }, this);
        return new_model;
    };
    vc.getColumnSize = function (column) {
        var mod = 12 % column,
            is_odd = function (n) {
                return _.isNumber(n) && (n % 2 == 1);
            };
        if (mod > 0 && is_odd(column) && column % 3) {
            return column + '/' + 12;
        }
        if (mod == 0) mod = column;
        return column / mod + '/' + (12 / mod);
    };
    vc.showMessage = function (message) {
        /*if(vc.message_timeout) {
      $('.vc-message').remove();
      window.clearTimeout(vc.message_timeout);
    }
    var $message = $('<div class="vc-message success" style="z-index: 999;">' + message + '</div>').prependTo($('body'));
    $message.fadeIn(500);
    vc.message_timeout = window.setTimeout(function(){
      $message.slideUp(500, function(){$(this).remove();});
      vc.message_timeout = false;
    }, 5500);*/
    };
    window.InlineShortcodeView = vc.shortcode_view = Backbone.View.extend({
        hold_hover_on: false,
        events: {
            'click > .vc-controls .control-btn-delete': 'destroy',
            'click > .vc-controls .control-btn-edit-inline': 'editInLine',
            'click > .vc-controls .control-btn-go-edit': 'btn_go_edit',
            'click > .vc-controls .control-btn-edit-link': 'edittolink',
            'click > .vc-controls .control-btn-edit-alignleft': 'edit_align_left',
            'click > .vc-controls .control-btn-edit-aligncenter': 'edit_align_center',
            'click > .vc-controls .control-btn-edit-alignright': 'edit_align_right',
            'mousedown > .vc-controls .control-btn-stylecopy': 'stylecopy_mousedown',
            'mouseup > .vc-controls .control-btn-stylecopy': 'stylecopy_mouseup',
            'click > .vc-controls .control-btn-padding': 'editpadding',
            'click > .vc-controls .control-btn-previvew': 'previvew',
            'click > .vc-controls .control-btn-edit-inline-fontsizeM': 'editFontSizeM',
            'click > .vc-controls .control-btn-edit-inline-fontsizeP': 'editFontSizeP',
            'click > .vc-controls .control-btn-edit-addText': 'imageAndText',
            'click > .vc-controls .control-btn-edit': 'edit',
            'click > .vc-controls .bit_column_button': 'editParent',
            'click > .vc-controls .bit_column_button_add': 'appendElement',
            'click > .vc-controls .control-btn-clone': 'clone',
            'click > .vc-controls .pre-add-element-btn': 'pre_add_element',
            'click > .vc-controls .next-add-element-btn': 'next_add_element',
            'click > .vc-controls .inner_button_container .setinner': 'on_inner_element',
            'click > .vc-controls .inner_button_container .cancel_setinner': 'off_inner_element',
            'mousemove': 'checkControlsPosition',
            //'mousemove': 'setMove',
            'mouseenter': 'resetButtonItem',
            'mouseenter >.vc-controls > .controls-cc': 'enter_control',
            'mouseleave >.vc-controls > .controls-cc': 'leave_control',
            //'mouseleave': 'mouseLeave'
            // 'mouseover .control-btn': 'holdHover',
            // 'mouseout .controls-cc': 'releaseHover'
            'click > .qfy-element>.vc-controls .control-btn-edit': 'edit',
            'click > .qfy-element>.vc-controls .control-btn-edit-inline': 'editInLine',
            'click > .qfy-element>.vc-controls .control-btn-delete': 'destroy',
            'mousedown > .qfy-element> .vc-controls .control-btn-stylecopy': 'stylecopy_mousedown',
            'mouseup > .qfy-element> .vc-controls .control-btn-stylecopy': 'stylecopy_mouseup',
            'click > .qfy-element> .vc-controls .control-btn-clone': 'clone',
            'click > .qfy-element> .vc-controls .control-btn-bigger': 'bigger',
            'click > .qfy-element> .vc-controls .control-btn-smaller': 'smaller',
            'click > .qfy-element>.vc-controls .control-btn-go-edit': 'btn_go_edit',
            'click > .qfy-element>.vc-controls .control-btn-edit-link': 'edittolink',
            'click > .qfy-element>.vc-controls .control-btn-previvew': 'previvew',
            'click > .qfy-element>.vc-controls .zindexUp': 'zindexUp',
            'click > .qfy-element>.vc-controls .zindexDown': 'zindexDown',
        },
        zindexUp: function (e) {
            _.isObject(e) && e.preventDefault() && e.stopPropagation();
            var tag = this.model.get('shortcode');
            var params = this.model.get('params');
            var z_index = 0;
            if (params.z_index) {
                z_index = params.z_index;
            }
            params.z_index = z_index * 1 + 1;
            var view = this.model.view.$el.find(">.qfy-element");
            view.css("z-index", params.z_index);
            view.find(">.special-control-element .zindex-value").html(params.z_index);


            this.model.save({params: params}, {silent: true});
            vc.ShortcodesBuilder.delay_save();

        },
        zindexDown: function (e) {
            _.isObject(e) && e.preventDefault() && e.stopPropagation();
            var tag = this.model.get('shortcode');
            var params = this.model.get('params');
            var z_index = 0;
            if (params.z_index) {
                z_index = params.z_index;
            }
            params.z_index = z_index - 1;
            var view = this.model.view.$el.find(">.qfy-element");
            view.css("z-index", params.z_index);
            view.find(">.special-control-element .zindex-value").html(params.z_index);


            this.model.save({params: params}, {silent: true});
            vc.ShortcodesBuilder.delay_save();
        },
        bigger: function (e) {
            _.isObject(e) && e.preventDefault() && e.stopPropagation();
            var tag = this.model.get('shortcode');
            var params = this.model.get('params');

            if (tag == "vc_btn") {
                var btn = this.model.view.$el.find("button");

                if (btn.hasClass("vc_btn3-size-xxs")) {
                    params.size = "xs";
                    btn.removeClass("vc_btn3-size-xxs").addClass("vc_btn3-size-xs");
                } else if (btn.hasClass("vc_btn3-size-xs")) {
                    params.size = "sm";
                    btn.removeClass("vc_btn3-size-xs").addClass("vc_btn3-size-sm");
                } else if (btn.hasClass("vc_btn3-size-sm")) {
                    params.size = "md";
                    btn.removeClass("vc_btn3-size-sm").addClass("vc_btn3-size-md");
                } else if (btn.hasClass("vc_btn3-size-md")) {
                    params.size = "lg";
                    btn.removeClass("vc_btn3-size-md").addClass("vc_btn3-size-lg");
                } else if (btn.hasClass("vc_btn3-size-lg")) {
                    params.size = "xl";
                    btn.removeClass("vc_btn3-size-lg").addClass("vc_btn3-size-xl");
                } else if (btn.hasClass("vc_btn3-size-xl")) {
                    params.size = "xxl";
                    btn.removeClass("vc_btn3-size-xl").addClass("vc_btn3-size-xxl");
                } else if (btn.hasClass("vc_btn3-size-xxl")) {
                    params.size = "xxxl";
                    btn.removeClass("vc_btn3-size-xxl").addClass("vc_btn3-size-xxxl");
                } else if (btn.hasClass("vc_btn3-size-xxxl")) {
                    params.size = "xxxxl";
                    btn.removeClass("vc_btn3-size-xxxl").addClass("vc_btn3-size-xxxxl");
                }
                this.model.save({params: params}, {silent: true});
                vc.ShortcodesBuilder.delay_save();

            } else if (tag == "vc_icon") {
                var btn = this.model.view.$el.find(".vc_icon_element-inner");

                if (btn.hasClass("vc_icon_element-size-xxs")) {
                    params.size = "xs";
                    btn.removeClass("vc_icon_element-size-xxs").addClass("vc_icon_element-size-xs");
                } else if (btn.hasClass("vc_icon_element-size-xs")) {
                    params.size = "sm";
                    btn.removeClass("vc_icon_element-size-xs").addClass("vc_icon_element-size-sm");
                } else if (btn.hasClass("vc_icon_element-size-sm")) {
                    params.size = "md";
                    btn.removeClass("vc_icon_element-size-sm").addClass("vc_icon_element-size-md");
                } else if (btn.hasClass("vc_icon_element-size-md")) {
                    params.size = "lg";
                    btn.removeClass("vc_icon_element-size-md").addClass("vc_icon_element-size-lg");
                } else if (btn.hasClass("vc_icon_element-size-lg")) {
                    params.size = "xl";
                    btn.removeClass("vc_icon_element-size-lg").addClass("vc_icon_element-size-xl");
                } else if (btn.hasClass("vc_icon_element-size-xl")) {
                    params.size = "xxl";
                    btn.removeClass("vc_icon_element-size-xl").addClass("vc_icon_element-size-xxl");
                } else if (btn.hasClass("vc_icon_element-size-xxl")) {
                    params.size = "xxxl";
                    btn.removeClass("vc_icon_element-size-xxl").addClass("vc_icon_element-size-xxxl");
                } else if (btn.hasClass("vc_icon_element-size-xxxl")) {
                    params.size = "xxxxl";
                    btn.removeClass("vc_icon_element-size-xxxl").addClass("vc_icon_element-size-xxxxl");
                } else if (btn.hasClass("vc_icon_element-size-xxxxl")) {
                    params.size = "xxxxxl";
                    btn.removeClass("vc_icon_element-size-xxxxl").addClass("vc_icon_element-size-xxxxxl");
                }
                this.model.save({params: params}, {silent: true});
                vc.ShortcodesBuilder.delay_save();


            }
        },
        smaller: function (e) {
            _.isObject(e) && e.preventDefault() && e.stopPropagation();
            var tag = this.model.get('shortcode');
            var params = this.model.get('params');

            if (tag == "vc_btn") {
                var btn = this.model.view.$el.find("button");
                if (btn.hasClass("vc_btn3-size-xs")) {
                    params.size = "xxs";
                    btn.removeClass("vc_btn3-size-xs").addClass("vc_btn3-size-xxs");
                } else if (btn.hasClass("vc_btn3-size-sm")) {
                    params.size = "xs";
                    btn.removeClass("vc_btn3-size-sm").addClass("vc_btn3-size-xs");
                } else if (btn.hasClass("vc_btn3-size-md")) {
                    params.size = "sm";
                    btn.removeClass("vc_btn3-size-md").addClass("vc_btn3-size-sm");
                } else if (btn.hasClass("vc_btn3-size-lg")) {
                    params.size = "md";
                    btn.removeClass("vc_btn3-size-lg").addClass("vc_btn3-size-md");
                } else if (btn.hasClass("vc_btn3-size-xl")) {
                    params.size = "lg";
                    btn.removeClass("vc_btn3-size-xl").addClass("vc_btn3-size-lg");
                } else if (btn.hasClass("vc_btn3-size-xxl")) {
                    params.size = "xl";
                    btn.removeClass("vc_btn3-size-xxl").addClass("vc_btn3-size-xl");
                } else if (btn.hasClass("vc_btn3-size-xxxl")) {
                    params.size = "xxl";
                    btn.removeClass("vc_btn3-size-xxxl").addClass("vc_btn3-size-xxl");
                } else if (btn.hasClass("vc_btn3-size-xxxxl")) {
                    params.size = "xxxl";
                    btn.removeClass("vc_btn3-size-xxxxl").addClass("vc_btn3-size-xxxl");
                }
                this.model.save({params: params}, {silent: true});
                vc.ShortcodesBuilder.delay_save();

            } else if (tag == "vc_icon") {
                var btn = this.model.view.$el.find(".vc_icon_element-inner");
                if (btn.hasClass("vc_icon_element-size-xs")) {
                    params.size = "xxs";
                    btn.removeClass("vc_icon_element-size-xs").addClass("vc_icon_element-size-xxs");
                } else if (btn.hasClass("vc_icon_element-size-sm")) {
                    params.size = "xs";
                    btn.removeClass("vc_icon_element-size-sm").addClass("vc_icon_element-size-xs");
                } else if (btn.hasClass("vc_icon_element-size-md")) {
                    params.size = "sm";
                    btn.removeClass("vc_icon_element-size-md").addClass("vc_icon_element-size-sm");
                } else if (btn.hasClass("vc_icon_element-size-lg")) {
                    params.size = "md";
                    btn.removeClass("vc_icon_element-size-lg").addClass("vc_icon_element-size-md");
                } else if (btn.hasClass("vc_icon_element-size-xl")) {
                    params.size = "lg";
                    btn.removeClass("vc_icon_element-size-xl").addClass("vc_icon_element-size-lg");
                } else if (btn.hasClass("vc_icon_element-size-xxl")) {
                    params.size = "xl";
                    btn.removeClass("vc_icon_element-size-xxl").addClass("vc_icon_element-size-xl");
                } else if (btn.hasClass("vc_icon_element-size-xxxl")) {
                    params.size = "xxl";
                    btn.removeClass("vc_icon_element-size-xxxl").addClass("vc_icon_element-size-xxl");
                } else if (btn.hasClass("vc_icon_element-size-xxxxl")) {
                    params.size = "xxxl";
                    btn.removeClass("vc_icon_element-size-xxxxl").addClass("vc_icon_element-size-xxxl");
                } else if (btn.hasClass("vc_icon_element-size-xxxxxl")) {
                    params.size = "xxxxl";
                    btn.removeClass("vc_icon_element-size-xxxxxl").addClass("vc_icon_element-size-xxxxl");
                }
                this.model.save({params: params}, {silent: true});
                vc.ShortcodesBuilder.delay_save();

            }
        },
        edit_align_left: function (e) {
            _.isObject(e) && e.preventDefault() && e.stopPropagation();
            var tag = this.model.get('shortcode');
            var params = this.model.get('params');
            var $control = $(e.currentTarget);
            $control.closest(".controls-cc").find(".control-btn").removeClass("active");
            $control.closest(".control-btn").addClass("active");
            var ismobile = vc.frame_window.jQuery("body").width() > 768 ? 0 : 1;
            if (tag == "vc_single_image") {
                params.alignment = "";
                this.model.view.$el.find(".bitImageParentDiv").removeClass("vc_align_ vc_align_center vc_align_right vc_align_inline");
                this.model.save({params: params}, {silent: true});
                vc.ShortcodesBuilder.save();
            } else if (tag == "vc_header") {
                if (ismobile) {
                    params.title_mobilealign = "mobileleft";
                } else {
                    params.title_align = "left";
                }
                this.model.save({params: params}, {silent: true});
                vc.ShortcodesBuilder.update(this.model);
                vc.ShortcodesBuilder.save();
            } else if (tag == "vc_icon") {
                params.align = "left";
                this.model.view.$el.find(">.vc_icon_element").removeClass("vc_icon_element-align-center vc_icon_element-align-left vc_icon_element-align-right vc_icon_element-align-inline").addClass("vc_icon_element-align-left");
                this.model.save({params: params}, {silent: true});
                vc.ShortcodesBuilder.save();
            } else if (tag == "vc_btn") {
                if (ismobile) {
                    params.mobilealign = "left";
                    this.model.view.$el.find(">.vc_btn3-container").removeClass("vc_btn-mobile-inline vc_btn-mobile-left vc_btn-mobile-right vc_btn-mobile-center").addClass("vc_btn-mobile-left");
                } else {
                    params.align = "left";
                    this.model.view.$el.find(">.vc_btn3-container").removeClass("vc_btn3-left vc_btn3-right vc_btn3-center vc_btn3-inline").addClass("vc_btn3-left");
                }
                if (params.button_block == 'true') {
                    this.model.view.$el.find(">.vc_icon_element").addClass("vc_btn3-block");
                }
                this.model.save({params: params}, {silent: true});
                vc.ShortcodesBuilder.save();
            } else if (tag == "vc_socail_icons_list") {
                if (ismobile) {
                    params.icon_align_sm = "1";
                } else {
                    params.icon_align = "0";
                }
                this.model.save({params: params}, {silent: true});
                vc.ShortcodesBuilder.update(this.model);
                vc.ShortcodesBuilder.save();
            }


        },
        edit_align_center: function (e) {
            _.isObject(e) && e.preventDefault() && e.stopPropagation();
            var tag = this.model.get('shortcode');
            var params = this.model.get('params');
            var ismobile = vc.frame_window.jQuery("body").width() > 768 ? 0 : 1;
            var $control = $(e.currentTarget);
            $control.closest(".controls-cc").find(".control-btn").removeClass("active");
            $control.closest(".control-btn").addClass("active");
            if (tag == "vc_single_image") {
                params.alignment = "center";
                this.model.view.$el.find(".bitImageParentDiv").removeClass("vc_align_ vc_align_center vc_align_right vc_align_inline").addClass("vc_align_center");
                this.model.save({params: params}, {silent: true});
                vc.ShortcodesBuilder.save();
            } else if (tag == "vc_header") {
                if (ismobile) {
                    params.title_mobilealign = "mobilecenter";
                } else {
                    params.title_align = "center";
                }
                this.model.save({params: params}, {silent: true});
                vc.ShortcodesBuilder.update(this.model);
                vc.ShortcodesBuilder.save();
            } else if (tag == "vc_icon") {
                params.align = "center";
                this.model.view.$el.find(">.vc_icon_element").removeClass("vc_icon_element-align-center vc_icon_element-align-left vc_icon_element-align-right vc_icon_element-align-inline").addClass("vc_icon_element-align-center");
                this.model.save({params: params}, {silent: true});
            } else if (tag == "vc_btn") {
                if (ismobile) {
                    params.mobilealign = "center";
                    this.model.view.$el.find(">.vc_btn3-container").removeClass("vc_btn-mobile-inline vc_btn-mobile-left vc_btn-mobile-right vc_btn-mobile-center").addClass("vc_btn-mobile-center");
                } else {
                    params.align = "center";
                    this.model.view.$el.find(">.vc_btn3-container").removeClass("vc_btn3-left vc_btn3-right vc_btn3-center vc_btn3-inline").addClass("vc_btn3-center");
                }
                if (params.button_block == 'true') {
                    this.model.view.$el.find(">.vc_icon_element").addClass("vc_btn3-block");
                }
                this.model.save({params: params}, {silent: true});
                vc.ShortcodesBuilder.save();
            } else if (tag == "vc_socail_icons_list") {
                if (ismobile) {
                    params.icon_align_sm = "3";
                } else {
                    params.icon_align = "2";
                }
                this.model.save({params: params}, {silent: true});
                vc.ShortcodesBuilder.update(this.model);
                vc.ShortcodesBuilder.save();
            }
        },
        edit_align_right: function (e) {
            _.isObject(e) && e.preventDefault() && e.stopPropagation();
            var tag = this.model.get('shortcode');
            var params = this.model.get('params');
            var ismobile = vc.frame_window.jQuery("body").width() > 768 ? 0 : 1;
            var $control = $(e.currentTarget);
            $control.closest(".controls-cc").find(".control-btn").removeClass("active");
            $control.closest(".control-btn").addClass("active");
            if (tag == "vc_single_image") {
                params.alignment = "right";
                this.model.view.$el.find(".bitImageParentDiv").removeClass("vc_align_ vc_align_center vc_align_right vc_align_inline").addClass("vc_align_right");
                this.model.save({params: params}, {silent: true});
                vc.ShortcodesBuilder.save();
            } else if (tag == "vc_header") {
                if (ismobile) {
                    params.title_mobilealign = "mobileright";
                } else {
                    params.title_align = "right";
                }
                this.model.save({params: params}, {silent: true});
                vc.ShortcodesBuilder.update(this.model);
                vc.ShortcodesBuilder.save();
            } else if (tag == "vc_icon") {
                params.align = "right";
                this.model.view.$el.find(">.vc_icon_element").removeClass("vc_icon_element-align-center vc_icon_element-align-left vc_icon_element-align-right vc_icon_element-align-inline").addClass("vc_icon_element-align-right");
                this.model.save({params: params}, {silent: true});
            } else if (tag == "vc_btn") {
                if (ismobile) {
                    params.mobilealign = "right";
                    this.model.view.$el.find(">.vc_btn3-container").removeClass("vc_btn-mobile-inline vc_btn-mobile-left vc_btn-mobile-right vc_btn-mobile-center").addClass("vc_btn-mobile-right");
                } else {
                    params.align = "right";
                    this.model.view.$el.find(">.vc_btn3-container").removeClass("vc_btn3-left vc_btn3-right vc_btn3-center vc_btn3-inline").addClass("vc_btn3-right");
                }
                if (params.button_block == 'true') {
                    this.model.view.$el.find(">.vc_icon_element").addClass("vc_btn3-block");
                }
                this.model.save({params: params}, {silent: true});
                vc.ShortcodesBuilder.save();
            } else if (tag == "vc_socail_icons_list") {
                if (ismobile) {
                    params.icon_align_sm = "2";
                } else {
                    params.icon_align = "1";
                }
                this.model.save({params: params}, {silent: true});
                vc.ShortcodesBuilder.update(this.model);
                vc.ShortcodesBuilder.save();
            }
        },
        enter_control: function (e) {
            this.model.view.$el.find(">.vc-controls>.vc-element-warp").fadeIn();
        },
        leave_control: function (e) {
            this.model.view.$el.find(">.vc-controls>.vc-element-warp").fadeOut("fast");
        },
        starttime: false,
        pre_add_element: function (e) {
            var tag = this.model.get('shortcode');
            var parent_id = this.model.get('parent_id');
            if (this.model.view.$el.prev().hasClass("vc-element")) {
                this.model.view.$el.prev().addClass('vc-place-after');
                var p_model = vc.shortcodes.get(parent_id);
                p_model.view.$el.addClass("elementOrder");
                vc.add_element_block_view.render(p_model, null, "single");
            }
        },
        next_add_element: function (e) {
            var tag = this.model.get('shortcode');
            var parent_id = this.model.get('parent_id');

            this.model.view.$el.addClass('vc-place-after');
            var p_model = vc.shortcodes.get(parent_id);
            p_model.view.$el.addClass("elementOrder");
            vc.add_element_block_view.render(p_model, null, "single");

        },
        stylecopy_mouseover: function (e) {
            var tag = this.model.get('shortcode');
            var id = this.model.get('id');
            var stag_tmp = top.getCookie("shortcode_tmpstyle");
            if (stag_tmp) {
                var stag = stag_tmp.split("|^|")[0];
                var sid = stag_tmp.split("|^|")[1];
            }

            if (!stag || (stag && (!this.isliketag(tag, stag) || sid == id))) {
                iframeWin.jQuery("[data-model-id='" + id + "'] .control-btn-stylecopy:first").removeClass("hascopy");
            } else {
                iframeWin.jQuery("[data-model-id='" + id + "'] .control-btn-stylecopy:first").addClass("hascopy");
            }
        },
        isliketag: function (tag, stag) {
            if (tag == "vc_column" || tag == "vc_column_inner" || tag == "vc_column_embad" || tag == "vc_row" || tag == "vc_row_inner" || tag == "vc_row_embad") {
                tag = tag.replace("_inner", "");
                tag = tag.replace("_embad", "");
            }
            if (stag == "vc_column" || stag == "vc_column_inner" || stag == "vc_column_embad" || stag == "vc_row" || stag == "vc_row_inner" || stag == "vc_row_embad") {
                stag = stag.replace("_inner", "");
                stag = stag.replace("_embad", "");
            }
            if ((stag == "vc_column_text_image" || stag == "vc_single_image") && (tag == "vc_column_text_image" || tag == "vc_single_image")) {
                return true;
            }
            if (tag == stag) {
                return true;
            } else {
                return false;
            }
        },
        stylecopy_updateform: function (model, res) {
            var id = model.get('id');
            ajaxBeforeLoading(id);
            var old_form_id = 0;
            var model_params = model.get('params');
            var tag = model.get('shortcode');
            var new_data = vc.ShortcodesBuilder.parse({}, res);
            _.each(new_data, function (object) {
                var params = object.params;
                for (var p in params) {
                    if (p == "qfyuuid") continue;
                    if (p == "fromviewtemplate") continue;
                    if (p == "content") continue;
                    if (p == "customprecontent_slug") continue;
                    if (p == "customprecontent_slugtype") continue;
                    if (p == "customprecontent_default") continue;
                    if (tag == "vc_row" || tag == "vc_row_inner" || tag == "vc_row_embad") {
                        if (p == "id") continue;
                    }
                    if (tag == "tabcontent" || tag == "slidercontent" || tag == "accordioncontent") {
                        if (p == "buttons") continue;
                    }
                    if (tag == "vc_column" || tag == "vc_column_inner" || tag == "vc_column_embad") {
                        if (p == "width") continue;
                        if (p == "mobilepaddingright") continue;
                        if (p == "mobilepaddingleft") continue;
                        if (p == "mobilewidth") continue;
                        if (p == "perwidth") continue;
                        if (p == "layout") continue;
                    } else if (tag == "iphorm_vc" && p == "id") {
                        old_form_id = params[p];
                        continue;
                    }
                    model_params[p] = params[p];
                }

            });

            model.save({params: model_params});
            //update
            if (tag == "iphorm_vc" && old_form_id > 0) {
                jQuery.post("/FeiEditor/siteEdit/ajax_copystyle_form/", {
                    now_form_id: model_params.id,
                    old_form_id: old_form_id
                }, function (newid) {
                    vc.ShortcodesBuilder.update(model);
                    vc.ShortcodesBuilder.save(true, function () {
                        iframeWin.jQuery("[data-model-id='" + id + "'] .control-btn-stylecopy:first").append('<span class="copymsg qfyfadeOutUp" style="position:absolute; width: 70px;right:0px;top:-20px;color:green;font-size:12px !important;">应用成功</span>');
                        setTimeout(function () {
                            iframeWin.jQuery(".copymsg").remove();
                        }, 2200);
                    });

                });
            } else {
                vc.ShortcodesBuilder.update(model);
                vc.ShortcodesBuilder.save(true, function () {

                    iframeWin.jQuery("[data-model-id='" + id + "'] .control-btn-stylecopy:first").append('<span class="copymsg qfyfadeOutUp" style="position:absolute; width: 70px;right:0px;top:-20px;color:green;font-size:12px !important;">应用成功</span>');
                    setTimeout(function () {
                        iframeWin.jQuery(".copymsg").remove();
                    }, 2200);
                });
            }

        },
        stylecopy_session: function (e) {

            var shortcode = vc.shortcodes.where({id: this.model.get('id')});
            var tag = this.model.get('shortcode');
            var id = this.model.get('id');
            var model = this.model;
            var $this = this;
            var host = "";
            var url = window.location.href;
            var regex = /.*\:\/\/([^\/|:]*).*/;
            var match = url.match(regex);
            if (typeof match != "undefined" && null != match) {
                host = match[1];
            }
            var string = vc.ShortcodesBuilder.modelsToStringIgnoreData(shortcode);

            var data = base64_encode(tag + '|^^|' + id + '|^^|' + host + '|^^|' + string);
            var obj = $(e.currentTarget);
            var stag_tmp = top.getCookie("shortcode_tmpstyle");
            if (stag_tmp) {
                var stag = stag_tmp.split("|^|")[0];
                var sid = stag_tmp.split("|^|")[1];
            }

            if (!stag || (stag && (!this.isliketag(tag, stag) || sid == id))) {
                //不同标签，相同ID
                if (stag && (tag != stag)) {
                    iframeWin.jQuery("[data-model-id='" + id + "'] .copytxt:first").append('<span class="warninfo qfyfadeOutUp" style="position:absolute; width: 120px;right:0px;top:-35px;color:#f1a10e;font-size:12px !important;animation-duration:5s;background:none;">非同类型，覆盖失败！</span>');
                    setTimeout(function () {
                        iframeWin.jQuery(".copytxt .warninfo").remove();
                    }, 2200);
                }
                obj.attr("data-clipboard-text", data);
                iframeWin.clipboard_fun(".copytxt");
            }
            jQuery.post("/admin/admin-ajax.php", {
                "action": "qfy_updatesession",
                "name": "shortcode_tmpstyle",
                "tag": tag,
                "id": id,
                "content": data
            }, function (res) {
                if (res == "new") {
                    obj.removeClass("downing").closest(".control-btn").find(".fa").attr("class", "icon");

                    top.setCookie("shortcode_tmpstyle", tag + "|^|" + id, 1);
                } else if (res == "error") {
                    top.setCookie("shortcode_tmpstyle", "", -1);
                    obj.removeClass("downing").closest(".control-btn").find(".fa").attr("class", "icon");

                } else {
                    top.setCookie("shortcode_tmpstyle", "", -1);
                    $this.stylecopy_updateform(model, res);
                }

            })

        },

        stylecopy_input: function (e) {
            _.isObject(e) && e.preventDefault() && e.stopPropagation();
            var shortcode = vc.shortcodes.where({id: this.model.get('id')});
            var shortcode_tag = this.model.get('shortcode');
            var host = "";
            var url = window.location.href;
            var regex = /.*\:\/\/([^\/|:]*).*/;
            var match = url.match(regex);
            if (typeof match != "undefined" && null != match) {
                host = match[1];
            }
            var model = this.model;
            var $this = this;
            var model_params = model.get('params');
            $(e.currentTarget).closest(".control-btn").find(".fa").attr("class", "icon");
            if ($(e.currentTarget).hasClass("downing")) {
                $(e.currentTarget).removeClass("downing").html("");
            }
            top.jConfirmMore("<span class='copytitle'>请拷贝你的内容到下面输入框中。</span><div class='tocopy0_div'><textarea id='copyText' style='width:100%;height:200px;padding:5px;'></textarea></div>", function () {
                top.setCookie("shortcode_tmpstyle", "1", -1);
                var v = jQuery.trim(top.jQuery("#copyText").val());
                var tmp = v == "" ? "" : base64_decode(v);
                var tmparray = tmp.split("|^^|");
                if (tmparray.length != 4) {
                    jAlert("对不起，您复制的内容系统无法解析，请重试。");
                    return false;
                } else {
                    var real_tag = tmparray[0];
                    if (real_tag !== shortcode_tag) {
                        jAlert("对不起，您复制的内容与当前标签不匹配，请重试。");
                        return false;
                    }
                    var real_v = tmparray[3];
                    var real_host = tmparray[2];
                    if (host != real_host) {
                        jQuery.post("/FeiEditor/siteEdit/change_vc_custom", {
                            url: real_host,
                            content: real_v
                        }, function (data) {
                            if (data.indexOf("success|^^|") == 0) {
                                var tmpdata = data.split("|^^|");
                                tmpdata.splice(0, 1);
                                real_v = tmpdata.join("|^^|");
                                $this.stylecopy_updateform(model, real_v);
                            }
                        })
                    } else {
                        $this.stylecopy_updateform(model, real_v);
                    }


                }

            }, "确认信息", "确认", "取消")


        },
        stylecopy_mousedown: function (e) {
            var curr = $(e.currentTarget);
            if (curr.hasClass("row_span") || curr.hasClass("column_span")) {
                if (!curr.hasClass("downing")) {
                    curr.addClass("downing");
                    this.starttime = new Date().getTime();
                } else {
                    this.starttime = 0;
                }

            } else {
                var btn = $(e.currentTarget).closest(".control-btn");
                if (btn.find(".fa").length == 0) {
                    btn.find(".icon").attr("class", "fa fa-spinner fa-spin fa-3x fa-fw");
                    this.starttime = new Date().getTime();
                } else {
                    this.starttime = 0;
                }
            }
            return;
        },
        stylecopy_mouseup: function (e) {
            if (this.starttime > 0) {
                var now = new Date().getTime();
                if (now - this.starttime > 1500) {
                    this.stylecopy_input(e);
                } else {
                    this.stylecopy_session(e);
                }
            }
            return;
        },
        previvew: function (e) {
            this.model.view.$el.find(".notice_warp").click();
        },
        btn_go_edit: function (e) {
            _.isObject(e) && e.preventDefault() && e.stopPropagation();
            var params = this.model.get('params');
            var model = this.model
            var width = this.model.view.$el.find(".qfy_notice .notice_warp").attr("data-width");
            var wid = this.model.view.$el.find(".qfy_notice").attr("id");
            if (!params.post_id) params.post_id = 0;

            top.jConfirm("是否前往组件页面，编辑通知内容", function () {
                var pid = top.jQuery('#pageUrl').val();
                ajaxBeforeLoading(model.get('id'));
                jQuery.post("/FeiEditor/siteEdit/ajax_setandaddpostmeta", {
                    post_id: pid,
                    to_post_id: params.post_id,
                    "meta_key": "_last_div_width",
                    "meta_value": width,
                    "meta_key2": "_last_div_id",
                    "meta_value2": wid
                }, function (post_id) {
                    if (post_id > 0 && params.post_id == 0) {
                        params.post_id = post_id;
                        if (jQuery("#vc-properties-panel .contenttype.dropdown:visible").length > 0) {
                            params.contenttype = jQuery("#vc-properties-panel .contenttype.dropdown:visible").val();
                        }
                        model.save({params: params}, {silent: true});
                        vc.ShortcodesBuilder.save(true, function () {
                            //...pageurl
                            top.changePageUrl(post_id);
                        });

                    } else {
                        top.jQuery('#pageUrl').val(params.post_id);
                        top.jQuery('#pageUrl').change();
                    }
                });
            })
        },
        contentarea_add: function (e) {
            _.isObject(e) && e.preventDefault() && e.stopPropagation();
            vc.add_element_block_view.render(this.model, true, "", "first");

        },
        controls_set: false,
        $content: false,
        move_timeout: false,
        out_timeout: false,
        hold_active: true,
        initialize: function () {
            // _.bindAll(this, 'setControlPosition', 'unsetControlPosition');
            this.listenTo(this.model, 'destroy', this.removeView);
            this.listenTo(this.model, 'change:params', this.update);
            this.listenTo(this.model, 'change:parent_id', this.changeParentId);
        },
        editFontSizeM: function (e) {
            e && e.preventDefault && e.preventDefault();
            ajaxBeforeLoading(this.model.get('id'));
            var params = this.model.get('params');
            if (!params.mobilefontsize) params.mobilefontsize = 16;
            if (params.mobilefontsize > 8) params.mobilefontsize = params.mobilefontsize * 1 - 1;
            else if (params.mobilefontsize >= 30) params.mobilefontsize = 30;
            this.model.save({params: params});

            vc.ShortcodesBuilder.update(this.model);
            vc.ShortcodesBuilder.save();
        },
        editFontSizeP: function (e) {
            e && e.preventDefault && e.preventDefault();
            ajaxBeforeLoading(this.model.get('id'));
            var params = this.model.get('params');
            if (!params.mobilefontsize) params.mobilefontsize = 16;
            if (params.mobilefontsize < 30) params.mobilefontsize = params.mobilefontsize * 1 + 1;
            else if (params.mobilefontsize >= 30) params.mobilefontsize = 30;
            this.model.save({params: params});

            vc.ShortcodesBuilder.update(this.model);
            vc.ShortcodesBuilder.save();
        },
        reload_relative_js: function (e) {
            var id = this.model.get("id");
            if (this.model.view.$el.find(".qfe_images_lib_isotope").length > 0) {
                iframeWin.bitLibLayout(iframeWin.jQuery("[data-model-id='" + id + "'] .qfe_images_lib_isotope"));
            } else if (this.model.view.$el.find('.isotope-item').length > 0) {
                setTimeout(function () {
                    vc.frame_window.vc_teaserGrid();
                }, 500);
            } else if (this.model.view.$el.find('.vc-carousel').length > 0) {
                this.model.view.$el.find('[data-ride="vc-carousel"]').each(function () {
                    var $carousel = $(this).attr("id");
                    vc.frame_window.jQuery('#' + $carousel).carousel($(this).data())
                })
            }


        },
        editpadding: function (e) {
            e && e.preventDefault && e.preventDefault();
            var this$ = this;
            var $this = this.$el;
            var model = this.model;
            var id = model.get("id");
            var tag = model.get("shortcode");
            var params = model.get('params');

            if (tag == "qfyuser" && params.max_width.indexOf("%") < 0) {
                top.jAlert("用户组件使用边距拖拽功能，最好先点击设置，把最大宽度设置成100%");
                return false;
            }
            var element = ">.qfy-element";
            if (tag == "TS_VCSC_Countdown") {
                element = ">div>.qfy-element";
            }

            if ($this.find(element + " >.resizecontrol").length == 0) {
                $this.addClass("qfy_resizing");
                var t = "";
                if (tag == "vc_column_blank") {
                    t = "onlyheight";
                    var h = vc.frame_window.jQuery("[data-model-id='" + id + "']").height();
                    vc.frame_window.jQuery("[data-model-id='" + id + "'] .value").html(h + "px");
                    vc.frame_window.jQuery("[data-model-id='" + id + "'] .qfy-blank").addClass("hover");
                }
                $('<div class="resizecontrol ' + t + '" style="position: absolute;  padding-left: inherit;padding-right: inherit;padding-top: inherit;height: 100%; width: 100%; top: 0px; left: 0px;"><div style="position:relative;height:100%;width:100%;"><div class="resize_confirm">确认</div><div class="resize_cancel">取消</div><div class="resizeL "></div><div class="resizeR "></div><div class="resizeT "></div><div class="resizeB "></div><div class="resizeLT"></div><div class="resizeTR "></div><div class="resizeBR "></div><div class="resizeLB "></div></div></div>').appendTo($this.find(element));
                vc.frame_window.jQuery("body").addClass("resizing");
                var old_l_padding = 0;
                var old_l = 0;
                var old_r_padding = 0;
                var old_r = 0;
                var old_t_padding = 0;
                var old_t = 0;
                var old_b_padding = 0;
                var old_b = 0;
                var old_padding = 0;
                var old_b_height = 0;
                vc.frame_window.jQuery("[data-model-id='" + id + "'] .resize_confirm").click(function () {
                    params = model.get('params');
                    $this.find(element + " >.resizecontrol").hide();
                    $this.removeClass("qfy_resizing");
                    vc.frame_window.jQuery("body").removeClass("resizing");

                    var ismobile = vc.frame_window.jQuery("body").width() > 768 ? 0 : 1;
                    var val = $this.find(element).css("padding-right").replace("px", "");
                    var t = $this.find(element).css("padding-top");
                    var r = $this.find(element).css("padding-right");
                    var b = $this.find(element).css("padding-bottom");
                    var l = $this.find(element).css("padding-left");
                    var padding = t + " " + r + " " + " " + b + " " + l;

                    if (tag == "vc_column_blank") {
                        var height = $this.find(element).css("height").replace("px", "");
                        if (ismobile == 1) {
                            if (params.height_type == "1") {
                                params.mobileperheight = (height * (100 / document.documentElement.clientHeight)).toFixed(2);
                            } else {
                                params.mobileheight = height;
                            }
                        } else {
                            if (params.height_type == "1") {
                                params.perheight = (height * (100 / document.documentElement.clientHeight)).toFixed(2);
                            } else {
                                params.height = height;
                            }
                        }
                    } else {
                        if (ismobile == 1) {
                            params.mobile_paddingright = val;
                            params.mobile_paddingleft = l.replace("px", "");
                            params.mobile_paddingtop = t.replace("px", "");
                            params.mobile_paddingbottom = b.replace("px", "");
                            $this.find(element).attr("m-padding", padding);
                        } else {
                            params.paddingright = val;
                            params.paddingleft = l.replace("px", "");
                            params.paddingtop = t.replace("px", "");
                            params.paddingbottom = b.replace("px", "");
                            $this.find(element).attr("p-padding", padding);
                        }
                    }

                    model.save({params: params}, {silent: true});
                    vc.ShortcodesBuilder.save();
                    this$.reload_relative_js();

                    vc.frame_window.jQuery("[data-model-id='" + id + "'] .qfy-blank").removeClass("hover");
                })
                vc.frame_window.jQuery("[data-model-id='" + id + "'] .resize_cancel").click(function () {
                    params = model.get('params');
                    $this.find(element + " >.resizecontrol").hide();
                    $this.removeClass("qfy_resizing");
                    vc.frame_window.jQuery("body").removeClass("resizing");
                    var ismobile = vc.frame_window.jQuery("body").width() > 768 ? 0 : 1;
                    if (tag == "vc_column_blank") {
                        var height = $this.find(element).css("height").replace("px", "");
                        if (ismobile == 1) {
                            if (params.height_type == "1") {
                                height = params.mobileperheight * document.documentElement.clientHeight / 100;
                            } else {
                                height = params.mobileheight;
                            }
                            $this.find(element).css("height", height + "px");
                        } else {
                            if (params.height_type == "1") {
                                height = params.perheight * document.documentElement.clientHeight / 100;
                            } else {
                                height = params.height;
                            }
                            $this.find(element).css("height", height + "px");
                        }
                    } else {
                        if (ismobile == 1) {
                            $this.find(element).css("padding-left", params.mobile_paddingleft + "px");
                            $this.find(element).css("padding-right", params.mobile_paddingright + "px");
                            $this.find(element).css("padding-top", params.mobile_paddingtop + "px");
                            $this.find(element).css("padding-bottom", params.mobile_paddingbottom + "px");
                        } else {
                            $this.find(element).css("padding-left", params.paddingleft + "px");
                            $this.find(element).css("padding-right", params.paddingright + "px");
                            $this.find(element).css("padding-top", params.paddingtop + "px");
                            $this.find(element).css("padding-bottom", params.paddingbottom + "px");
                        }
                    }
                    vc.frame_window.jQuery("[data-model-id='" + id + "'] .qfy-blank").removeClass("hover");
                })
                vc.frame_window.jQuery("[data-model-id='" + id + "'] .resizeL").draggable({
                    axis: "x",
                    helper: function () {
                        return $j("<div class='value'></div>");
                    },
                    start: function (event, ui) {
                        old_l = ui.position.left;
                        old_l_padding = $this.find(element).css("padding-left").replace("px", "");
                        guideline_start(event, jQuery(this).closest(".qfy-element"), "content");
                    },
                    stop: function (event, ui) {
                        guideline_end();
                    },
                    drag: function (event, ui) {
                        var now = old_l_padding * 1 + (ui.position.left * 1 - old_l) * 1;
                        $this.find(element).css("padding-left", now + "px");
                        guideline_draw(event, jQuery(this), null);
                    }
                })
                vc.frame_window.jQuery("[data-model-id='" + id + "']  .resizeR").draggable({
                    axis: "x",
                    helper: function () {
                        return $j("<div></div>");
                    },
                    start: function (event, ui) {
                        old_r = ui.position.left;
                        old_r_padding = $this.find(element).css("padding-right").replace("px", "");
                        guideline_start(event, jQuery(this).closest(".qfy-element"), "content");
                    },
                    stop: function (event, ui) {
                        guideline_end();
                    },
                    drag: function (event, ui) {
                        var now = old_r_padding * 1 + (old_r * 1 - ui.position.left) * 1;
                        $this.find(element).css("padding-right", now + "px");
                        guideline_draw(event, jQuery(this), null);
                    }
                })
                vc.frame_window.jQuery("[data-model-id='" + id + "']  .resizeT").draggable({
                    axis: "y",
                    helper: function () {
                        return $j("<div></div>");
                    },
                    start: function (event, ui) {
                        old_t = ui.position.top;
                        old_t_padding = $this.find(element).css("padding-top").replace("px", "");
                        guideline_start(event, jQuery(this).closest(".qfy-element"), "content");
                    },
                    stop: function (event, ui) {
                        guideline_end();
                    },
                    drag: function (event, ui) {
                        var now = old_t_padding * 1 + (ui.position.top - old_t * 1) * 1;
                        $this.find(element).css("padding-top", now + "px");
                        guideline_draw(event, jQuery(this), null);
                    }
                })
                vc.frame_window.jQuery("[data-model-id='" + id + "']  .resizeB").draggable({
                    axis: "y",
                    helper: function () {
                        return $j("<div></div>");
                    },
                    start: function (event, ui) {
                        if (tag == "vc_column_blank") {
                            old_b = ui.position.top;
                            old_b_height = $this.find(element).css("height").replace("px", "");
                        } else {
                            old_b = ui.position.top;
                            old_b_padding = $this.find(element).css("padding-bottom").replace("px", "");
                        }
                        guideline_start(event, jQuery(this).closest(".qfy-element"), "content");
                    },
                    stop: function (event, ui) {
                        guideline_end();
                    },
                    drag: function (event, ui) {
                        if (tag == "vc_column_blank") {
                            var now = old_b_height * 1 + (ui.position.top - old_b * 1) * 1;
                            $this.find(element).css("height", now + "px");
                            $this.find(element).find(".value").html(now + "px");
                        } else {
                            var now = old_b_padding * 1 + (ui.position.top - old_b * 1) * 1;
                            $this.find(element).css("padding-bottom", now + "px");
                        }
                        guideline_draw(event, jQuery(this), null);
                    }
                })
                vc.frame_window.jQuery("[data-model-id='" + id + "']  .resizeLT").draggable({
                    helper: function () {
                        return $j("<div></div>");
                    },
                    start: function (event, ui) {
                        old_l = ui.position.left;
                        old_l_padding = $this.find(element).css("padding-left").replace("px", "");
                        old_t = ui.position.top;
                        old_t_padding = $this.find(element).css("padding-top").replace("px", "");
                        guideline_start(event, jQuery(this).closest(".qfy-element"), "content");
                    },
                    stop: function (event, ui) {
                        guideline_end();
                    },
                    drag: function (event, ui) {
                        var now = old_l_padding * 1 + (ui.position.left * 1 - old_l) * 1;
                        $this.find(element).css("padding-left", now + "px");
                        now = old_t_padding * 1 + (ui.position.top - old_t * 1) * 1;
                        $this.find(element).css("padding-top", now + "px");
                        guideline_draw(event, jQuery(this), null);
                    }
                })
                vc.frame_window.jQuery("[data-model-id='" + id + "']  .resizeLB").draggable({
                    helper: function () {
                        return $j("<div></div>");
                    },
                    start: function (event, ui) {
                        old_l = ui.position.left;
                        old_l_padding = $this.find(element).css("padding-left").replace("px", "");
                        old_b = ui.position.top;
                        old_b_padding = $this.find(element).css("padding-bottom").replace("px", "");
                        guideline_start(event, jQuery(this).closest(".qfy-element"), "content");
                    },
                    stop: function (event, ui) {
                        guideline_end();
                    },
                    drag: function (event, ui) {
                        var now = old_l_padding * 1 + (ui.position.left * 1 - old_l) * 1;
                        $this.find(element).css("padding-left", now + "px");
                        now = old_b_padding * 1 + (ui.position.top - old_b * 1) * 1;
                        $this.find(element).css("padding-bottom", now + "px");
                        guideline_draw(event, jQuery(this), null);
                    }
                })
                vc.frame_window.jQuery("[data-model-id='" + id + "']  .resizeBR").draggable({
                    helper: function () {
                        return $j("<div></div>");
                    },
                    start: function (event, ui) {
                        old_r = ui.position.left;
                        old_r_padding = $this.find(element).css("padding-right").replace("px", "");
                        old_b = ui.position.top;
                        old_b_padding = $this.find(element).css("padding-bottom").replace("px", "");
                        guideline_start(event, jQuery(this).closest(".qfy-element"), "content");
                    },
                    stop: function (event, ui) {
                        guideline_end();
                    },
                    drag: function (event, ui) {
                        var now = old_r_padding * 1 + (old_r * 1 - ui.position.left) * 1;
                        $this.find(element).css("padding-right", now + "px");
                        now = old_b_padding * 1 + (ui.position.top - old_b * 1) * 1;
                        $this.find(element).css("padding-bottom", now + "px");
                        guideline_draw(event, jQuery(this), null);
                    }
                })
                vc.frame_window.jQuery("[data-model-id='" + id + "']  .resizeTR").draggable({
                    helper: function () {
                        return $j("<div></div>");
                    },
                    start: function (event, ui) {
                        old_r = ui.position.left;
                        old_r_padding = $this.find(element).css("padding-right").replace("px", "");
                        old_t = ui.position.top;
                        old_t_padding = $this.find(element).css("padding-top").replace("px", "");
                        guideline_start(event, jQuery(this).closest(".qfy-element"), "content");
                    },
                    stop: function (event, ui) {
                        guideline_end();
                    },
                    drag: function (event, ui) {
                        var now = old_r_padding * 1 + (old_r * 1 - ui.position.left) * 1;
                        $this.find(element).css("padding-right", now + "px");
                        now = old_t_padding * 1 + (ui.position.top - old_t * 1) * 1;
                        $this.find(element).css("padding-top", now + "px");
                        guideline_draw(event, jQuery(this), null);
                    }
                })

            } else if ($this.find(element + " >.resizecontrol:visible").length == 0) {
                $this.closest("body").find(".qfy-element >.resizecontrol").hide();
                $this.find(element + " >.resizecontrol").show();
                vc.frame_window.jQuery("body").addClass("resizing");
                $this.addClass("qfy_resizing");
            } else {
                $this.closest("body").find(".qfy-element >.resizecontrol").hide();
                $this.find(element + " >.resizecontrol").hide();
                vc.frame_window.jQuery("body").removeClass("resizing");
                $this.removeClass("qfy_resizing");
            }

        },
        imageAndText: function (e) {
            e && e.preventDefault && e.preventDefault();
            var id = this.model.get('id');
            var control = iframeWin.jQuery("[data-model-id='" + id + "']");
            vc.edit_slide_block_view.render(null, null, null, control, "singleImageText");
        },
        resetButtonItem: function (e) {
            this.stylecopy_mouseover(e);
            var sc = this.model.get('shortcode');
            if (sc == "vc_column_text" || sc == "vc_raw_html" || sc == "vc_qf_text" || sc == "vc_html_features" || sc == "vc_canvas") {
                this.$el.find(".control-btn-edit-inline:first").show();
                if (sc == "mini_text") {
                    this.$el.find(".control-btn-edit-inline-fontsizeM:first").remove();
                    this.$el.find(".control-btn-edit-inline-fontsizeP:first").remove();
                }
                this.$el.find(".control-btn-edit-inline-fontsizeM:first").show();
                this.$el.find(".control-btn-edit-inline-fontsizeP:first").show();

                var id = this.model.get('id');
                var model = this.model;
                iframeWin.jQuery("[data-model-id='" + id + "'] .qfe_wrapper").unbind("dblclick").bind("dblclick", function () {
                    if (!jQuery(this).hasClass("cke_editable") && !jQuery(this).hasClass("inline_editing")) {
                        editInLine(id, model);
                    }
                })
            } else if (sc == "vc_single_image" ) {
                 this.$el.find(".control-btn-edit-inline:first").show();
            } else if (sc == "list_cate_controls" || sc == "list_btncate_controls") {
                this.$el.find(".control-btn-edit-inline:first").show();
                this.$el.find(".control-btn-edit-inline-fontsizeM:first").remove();
                this.$el.find(".control-btn-edit-inline-fontsizeP:first").remove();
            } else {
                this.$el.find(".control-btn-edit-inline:first").hide();
                this.$el.find(".control-btn-edit-inline-fontsizeM:first").remove();
                this.$el.find(".control-btn-edit-inline-fontsizeP:first").remove();
            }
            if (sc == "vc_notice") {
                this.$el.find(".control-btn-go-edit:first").show();
            } else {
                this.$el.find(".control-btn-go-edit:first").hide();
            }
            if (sc == "vc_btn" || sc == "vc_icon") {
                this.$el.find(".control-btn-bigger,.control-btn-smaller").show();
            } else {
                this.$el.find(".control-btn-bigger,.control-btn-smaller").hide();
            }

            if (sc == "product" || sc == "product_page" || sc == "products_list" || sc == "add_to_cart" || sc == "product_categories" || sc == "bitcommerce_order_tracking" || sc == "bitcommerce_cart" || sc == "bitcommerce_checkout" || sc == "bitcommerce_my_account") {
                this.$el.find(".control-btn-product-color:first").show();
            } else {
                this.$el.find(".control-btn-product-color:first").hide();
            }
            //|| sc=="iphorm_vc"
            if (sc == "product_page") {
                this.$el.find(".control-btn-clone:first").hide();
            }
            if (sc == "qfyuser") {
                this.$el.find(".control-btn-editmore:first").show();
            }
            if (sc == "vc_gallery" || sc == "qfbook" || sc == "qfbookform" || sc == "vc_notice") {
                this.$el.find(".control-btn-padding:first").hide();
            } else {
                this.$el.find(".control-btn-padding:first").show();
            }
            if (sc == "vc_single_image" || sc == "vc_btn" || sc == "vc_icon") {
                this.$el.find(".control-btn-edit-link:first").show();
            } else {
                this.$el.find(".control-btn-edit-link:first").hide();
            }
            if (sc == "vc_single_image" || sc == "vc_header" || sc == "vc_icon" || sc == "vc_btn" || sc == "vc_socail_icons_list") {
                var ismobile = vc.frame_window.jQuery("body").width() > 768 ? 0 : 1;
                var alignbtn = this.$el.find(".control-btn-edit-alignleft:first,.control-btn-edit-aligncenter:first,.control-btn-edit-alignright:first");
                alignbtn.removeClass("active").show();
                var params = this.model.get('params');
                if (sc == "vc_single_image") {
                    if (params.alignment == "") {
                        alignbtn.closest(".control-btn-edit-alignleft").addClass("active");
                    } else if (params.alignment == "center") {
                        alignbtn.closest(".control-btn-edit-aligncenter").addClass("active");
                    } else if (params.alignment == "right") {
                        alignbtn.closest(".control-btn-edit-alignright").addClass("active");
                    }
                } else if (sc == "vc_header") {
                    if (ismobile) {
                        if (params.title_mobilealign == "mobileleft") {
                            alignbtn.closest(".control-btn-edit-alignleft").addClass("active");
                        } else if (params.title_mobilealign == "mobilecenter") {
                            alignbtn.closest(".control-btn-edit-aligncenter").addClass("active");
                        } else if (params.title_mobilealign == "mobileright") {
                            alignbtn.closest(".control-btn-edit-alignright").addClass("active");
                        }
                    } else {
                        if (params.title_align == "left") {
                            alignbtn.closest(".control-btn-edit-alignleft").addClass("active");
                        } else if (params.title_align == "center") {
                            alignbtn.closest(".control-btn-edit-aligncenter").addClass("active");
                        } else if (params.title_align == "right") {
                            alignbtn.closest(".control-btn-edit-alignright").addClass("active");
                        }
                    }
                } else if (sc == "vc_icon") {
                    if (params.align == "left") {
                        alignbtn.closest(".control-btn-edit-alignleft").addClass("active");
                    } else if (params.align == "center") {
                        alignbtn.closest(".control-btn-edit-aligncenter").addClass("active");
                    } else if (params.align == "right") {
                        alignbtn.closest(".control-btn-edit-alignright").addClass("active");
                    }
                } else if (sc == "vc_btn") {
                    if (ismobile) {
                        if (params.mobilealign == "left") {
                            alignbtn.closest(".control-btn-edit-alignleft").addClass("active");
                        } else if (params.mobilealign == "center") {
                            alignbtn.closest(".control-btn-edit-aligncenter").addClass("active");
                        } else if (params.mobilealign == "right") {
                            alignbtn.closest(".control-btn-edit-alignright").addClass("active");
                        }
                    } else {
                        if (params.align == "left") {
                            alignbtn.closest(".control-btn-edit-alignleft").addClass("active");
                        } else if (params.align == "center") {
                            alignbtn.closest(".control-btn-edit-aligncenter").addClass("active");
                        } else if (params.align == "right") {
                            alignbtn.closest(".control-btn-edit-alignright").addClass("active");
                        }
                    }
                } else if (sc == "vc_socail_icons_list") {
                    if (ismobile) {
                        if (params.icon_align_sm == "1") {
                            alignbtn.closest(".control-btn-edit-alignleft").addClass("active");
                        } else if (params.icon_align_sm == "2") {
                            alignbtn.closest(".control-btn-edit-aligncenter").addClass("active");
                        } else if (params.icon_align_sm == "3") {
                            alignbtn.closest(".control-btn-edit-alignright").addClass("active");
                        }
                    } else {
                        if (params.icon_align == "0") {
                            alignbtn.closest(".control-btn-edit-alignleft").addClass("active");
                        } else if (params.icon_align == "1") {
                            alignbtn.closest(".control-btn-edit-aligncenter").addClass("active");
                        } else if (params.icon_align == "2") {
                            alignbtn.closest(".control-btn-edit-alignright").addClass("active");
                        }
                    }
                }
            }

            if (sc == "vc_notice") {
                this.$el.find(".control-btn-previvew:first").show();
            } else {
                this.$el.find(".control-btn-previvew:first").hide();
            }
            //
            if (this.$el.find(">div.qfe_teaser_grid_attachment").length > 0) {
                this.$el.find(".list_button_inner .wf-mobile-hidden").hide();
            } else if (this.$el.find(">div.qfe_teaser_grid[data-post=\'somepost\']").length > 0) {
                this.$el.find(".list_button_inner .add,.list_button_inner .cate").hide();
            }


        },
        render: function () {

            if (!iframeWin) {
                iframeWin = vc.$frame.get(0).contentWindow;
            }

            this.$el.attr('data-model-id', this.model.get('id'));
            var sc = this.model.get('shortcode');
            this.$el.attr('data-tag', sc);
            this.$el.addClass('vc-' + sc);

            this.addControls();

            var $this = this;
            $this.$el.on("mouseenter",function(){
                image_draggle($this.model, $this.$el);
            });

            //vc_column_text,vc_raw_html,vc_qf_text
            /* */
            var $isContainer = vc.getMapped(this.model.get('shortcode')).is_container;
            if (_.isBoolean($isContainer) && $isContainer) {
                this.$el.addClass('vc-container');
                this.changed();
            }
            return this;
        },
        checkControlsPosition: function () {

            var window_top, control_top, element_position_top, new_position,
                element_height = this.$el.height(),
                frame_height = vc.$frame.height();
            if (element_height > frame_height) {
                window_top = $(vc.frame_window).scrollTop();
                if (this.$controls_buttons) {
                    control_top = this.$controls_buttons.offset().top;
                    element_position_top = this.$el.offset().top;
                    new_position = (window_top - element_position_top) + vc.$frame.height() / 2;
                    if (new_position > 40 && new_position < element_height) {
                        this.$controls_buttons.css('top', new_position);
                    } else if (new_position > element_height) {
                        this.$controls_buttons.css('top', element_height - 40);

                    } else {
                        this.$controls_buttons.css('top', 40);
                    }
                }
            }
        },

        beforeUpdate: function () {
        },
        updated: function () {
            _.each(vc.shortcodes.where({parent_id: this.model.get('id')}), function (model) {
                if (_.isObject(model)) {
                    if (!_.isObject(model.view)) {
                        //console.log(model);
                    } else {
                        model.view.parent_view = this;
                        model.view.parentChanged();
                    }
                }
            }, this);
        },
        parentChanged: function () {
            this.checkControlsPosition();
        },
        rendered: function () {
        },
        addControls: function () {
            var $this = this;
            // var $el = iframeWin.jQuery('[data-model-id=' + this.model.get('id') + ']');
            // if (!$el) $el = this.$el;
            var $el = this.$el;
            $el.on("mouseenter",function(){
                if($this.$el.hasClass("controll-inited")){return;}
                var template = $('#vc-controls-template-' + $this.model.get('shortcode')).length ? $('#vc-controls-template-' + $this.model.get('shortcode')).html() : $this._getDefaultTemplate(),
                    parent = vc.shortcodes.get($this.model.get('parent_id')),
                    data = {
                        name: vc.getMapped($this.model.get('shortcode')).name,
                        tag: $this.model.get('shortcode'),
                        parent_name: parent ? vc.getMapped(parent.get('shortcode')).name : '',
                        parent_tag: parent ? parent.get('shortcode') : ''
                    };


                $this.$controls = $($.trim(_.template(template, data, vc.template_options))).addClass('vc-controls');

                if ($el.closest(".section-special").length > 0) {
                    $this.$controls.addClass("special-control").appendTo($this.$el.find(">.qfy-element"));
                } else {
                    $this.$controls.addClass("normal-control").appendTo($this.$el);
                }

                $this.$controls_buttons = $this.$controls.find('> :first');
                $this.$el.addClass("controll-inited");
                $this.resetButtonItem();
            });

            // setTimeout(function () {
            //     var template = $('#vc-controls-template-' + $this.model.get('shortcode')).length ? $('#vc-controls-template-' + $this.model.get('shortcode')).html() : $this._getDefaultTemplate(),
            //         parent = vc.shortcodes.get($this.model.get('parent_id')),
            //         data = {
            //             name: vc.getMapped($this.model.get('shortcode')).name,
            //             tag: $this.model.get('shortcode'),
            //             parent_name: parent ? vc.getMapped(parent.get('shortcode')).name : '',
            //             parent_tag: parent ? parent.get('shortcode') : ''
            //         };
            //
            //
            //     $this.$controls = $($.trim(_.template(template, data, vc.template_options))).addClass('vc-controls');
            //
            //
            //     if ($el.closest(".section-special").length > 0) {
            //         $this.$controls.addClass("special-control").appendTo($this.$el.find(">.qfy-element"));
            //     } else {
            //         $this.$controls.addClass("normal-control").appendTo($this.$el);
            //     }
            //     $this.$controls_buttons = $this.$controls.find('> :first');
            // }, 500);

        },
        content: function () {
            if (this.$content === false) this.$content = this.$el.find('> :first');
            return this.$content;
        },
        changeParentId: function () {
            var parent_id = this.model.get('parent_id'), parent;
            vc.ShortcodesBuilder.notifyParent(this.model.get('parent_id'));
            if (parent_id === false) {
                app.placeElement(this.$el);
            } else {
                parent = vc.shortcodes.get(parent_id);
                parent && parent.view && parent.view.placeElement(this.$el);
            }
            this.parentChanged();
        },
        _getDefaultTemplate: function () {
            if (_.isUndefined(vc.default_controls_template)) vc.default_controls_template = $('#vc-controls-template-default').html();
            return vc.default_controls_template;
        },
        changed: function () {
        },
        edit: function (e) {
            _.isObject(e) && e.preventDefault() && e.stopPropagation();
            vc.closeActivePanel();
            if (this.$el.find('.group_table.new_table').length > 0 && this.model.get('shortcode') == "product_page") {
                toeditlistmore($(e.currentTarget), e, "group_table_setting");
            } else {
                vc.edit_element_block_view.render(this.model);
            }


        },
        editParent: function (e) {
            _.isObject(e) && e.preventDefault() && e.stopPropagation();
            vc.closeActivePanel();
            var pid = this.model.get('parent_id');
            if (pid != false) {
                var column = vc.shortcodes.get(pid);
                vc.edit_element_block_view.render(column);
            }
        },
        appendElement: function (e) {
            _.isObject(e) && e.preventDefault() && e.stopPropagation();

            var pid = this.model.get('parent_id');
            if (pid != false) {
                var column = vc.shortcodes.get(pid);
                vc.add_element_block_view.render(column, null, "show");
            }

        },
        edittolink: function (e) {
            _.isObject(e) && e.preventDefault() && e.stopPropagation();
            vc.closeActivePanel();
            var sc = this.model.get('shortcode');
            var linktab = 4;
            if (sc == "vc_btn") {
                linktab = 5;
            } else if (sc == "vc_icon") {
                linktab = 2;
            }
            vc.edit_element_block_view.render(this.model, false, false, linktab);


        },
        editInLine: function (e) {
            _.isObject(e) && e.preventDefault() && e.stopPropagation();
            var id = this.model.get('id');
            if (this.model.get('shortcode') == "list_cate_controls" || this.model.get('shortcode') == "list_btncate_controls") {
                toAddcatepage(id, this.model);
            } else if (this.model.get('shortcode') == "vc_canvas") {
                //var params =  this.model.get('params');
                //params.canvas_source
                top.jQuery("body").append('<div class="vc_canvas_inner"  data-mode1-id="' + this.model.get('id') + '" style="height:0;background:#999;position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; z-index: 20000;"><iframe style="width:100%;height:100%;overflow:hidden;border:0"  src="/FeiEditor/picturish#/editor/3"></div>');
                top.jQuery(".vc_canvas_inner").animate({height: "100%"}, "slow");
            } else if (this.model.get('shortcode') == "vc_single_image") {
                this.editImage(id, this.model);
            } else {
                editInLine(id, this.model);
            }

            //vc.edit_element_block_view.render(this.model);
        },
        editImage: function (id, model) {
            var postid = model.attributes.params.image;

            if(!postid){
                top.jAlert("请先选择一张图片");
                return;
            }
            var imageData = null;
            jQuery.ajax({
                url : "/admin/admin-ajax.php",
                async : false,
                type: "post",
                dataType: "json",
                data : {
                    action: "getAttachmentUrlById",
                    id: postid,
                },
                success : function (data) {
                    imageData = data;
                }
            });

            if(!imageData){
                console.log("error");
                return;
            }

            this.editImageCB(id, model, imageData.image_url, imageData.source_url, postid);
        },
        editImageCB : function (id, model, image_url, source_url, postid) {
            console.log(geURL);
            var url = geURL;
            var source = window;
            var image_src = image_url;
            var src_file = source_url;

            if (source.drawIoWindow == null || source.drawIoWindow.closed) {
                if(window.receive != null){
                    window.removeEventListener('message', window.receive);
                }

                if(source.drawIoWindow != null){
                    source.drawIoWindow.close();
                    source.drawIoWindow = null;
                }

                // Implements protocol for loading and exporting with embedded XML
                var receive = function (evt) {
                    if (evt.data.length > 0 && evt.source == source.drawIoWindow) {
                        var msg = JSON.parse(evt.data);
                        // console.log(msg);
                        // Received if the editor is ready
                        if (msg.event == 'init') {
                            if (!src_file) {
                                // Sends the data URI with embedded XML to editor
                                source.drawIoWindow.postMessage(JSON.stringify({
                                    action: 'load',
                                    resource_url: image_src
                                }), '*');
                            } else {
                                source.drawIoWindow.postMessage(JSON.stringify({
                                    action: 'load',
                                    xml_url: src_file
                                }), '*');
                            }
                        }
                        // Received if the user clicks save
                        else if (msg.event == 'save') {
                            // Sends a request to export the diagram as XML with embedded PNG
                            var format = "xmlpng";
                            if (msg.format) {
                                format = msg.format;
                            }

                            jQuery.post("/admin/admin-ajax.php", {
                                action: "bit_save_design_xml",
                                "postid": postid,
                                "data": msg.xml
                            }, function (data) {
                                if (data == "error") {
                                    top.jAlert("保存图片出错，请稍候重试。");
                                } else {
                                    source.drawIoWindow.postMessage(JSON.stringify({
                                        action: 'export',
                                        format: format,
                                        spinKey: 'saving'
                                    }), '*');
                                }
                            });
                        }
                        // Received if the export request was processed
                        else if (msg.event == 'export') {
                            // Updates the data URI of the image
                            jQuery.post("/admin/admin-ajax.php", {
                                action: "bit_save_design_image",
                                "postid": postid,
                                "data": msg.data
                            }, function (data) {
                                if (data == "error") {
                                    top.jAlert("保存图片出错，请稍候重试。");
                                } else {
                                    //location.reload();
                                    vc.ShortcodesBuilder.update(model);
                                    vc.ShortcodesBuilder.save();
                                }
                            });
                        }

                        // Received if the user clicks exit or after export
                        if (msg.event == 'exit' || msg.event == 'export') {
                            // Closes the editor
                            window.removeEventListener('message', receive);
                            source.drawIoWindow.close();
                            source.drawIoWindow = null;
                        }
                    }
                };

                // Opens the editor
                window.addEventListener('message', receive);
                source.drawIoWindow = window.open(url);
                window.receive = receive;
            } else {
                jAlert("亲，同时只能编辑一张图片哦。请先关闭之前的图片编辑窗口。");
            }
        },
        resizeImage: function (e) {
            _.isObject(e) && e.preventDefault() && e.stopPropagation();
            var id = this.model.get('id');
            iframeWin.jQuery(".ui-resizable-handle").hide();
            iframeWin.jQuery(".qfe_single_image .ui-wrapper img").css("width", "auto").css("height", "auto");
            iframeWin.jQuery(".qfe_single_image .ui-wrapper").css("width", "auto").css("height", "auto");
            var obj = iframeWin.jQuery('[data-model-id="' + id + '"]');
            obj.find('.ui-resizable-handle').show();
            var img_w = obj.find(".ui-wrapper img").css("width");
            var img_h = obj.find(".ui-wrapper img").css("height");
            obj.find(".ui-wrapper").css("width", img_w).css("height", img_h);
        },
        destroy: function (e) {
            var jThis = this;
            if (vc.frame_window.jQuery("body").hasClass("single-product") && vc.frame_window.jQuery(".qfy-single-product").length == 1) {
                var sc = jThis.model.get('shortcode');
                if (sc == "product_page") {
                    jAlert("商品页面，不允许删除商品零件");
                    return false;
                } else if (sc == "vc_row") {
                    if (jThis.$el.find('.qfy-single-product').length > 0) {
                        jAlert("商品页面，不允许删除商品零件");
                        return false;
                    }
                }
            }

            var sc = jThis.model.get('shortcode');
            var msg = "确认是否删除？";
            if (sc == "vc_notice") {
                var to_post_id = jThis.$el.find('.notice_warp').attr('data-post_id');
                if (to_post_id && to_post_id > 0) {
                    msg = "确认是否删除该组件，同时会删除对应的组件页面？";
                }
            }

            jConfirm(msg, function () {
                _.isObject(e) && e.preventDefault() && e.stopPropagation();
                vc.showMessage(window.sprintf(window.i18nLocale.inline_element_deleted, jThis.model.setting('name')));

                if (sc == "vc_row") {
                    //for form delete
                    var tag = jThis.$el.find('.qfe_content_element').data('tag');
                    if (tag) {
                        var $formId = jThis.$el.find('.qfe_content_element').data('id');
                        ajax_delete_form($formId);
                    }
                    var to_post_id = jThis.$el.find('.notice_warp').attr('data-post_id');
                    if (to_post_id && to_post_id > 0) {
                        jQuery.post("/FeiEditor/siteEdit/ajax_deletepage/" + to_post_id);
                    }
                    jThis.model.destroy();
                    vc.ShortcodesBuilder.save(true);
                } else {
                    if (sc == "vc_row_inner" || sc == "vc_row_embad") {
                        jThis.$el.removeClass("qfy_inner_setting");
                        jThis.$el.closest(".qfy_inner_setting").removeClass("qfy_inner_setting");
                        jThis.$el.closest("body").removeClass("qfyinnersetting");
                        jThis.$el.closest(".qfy_inner_setting_parent").removeClass("qfy_inner_setting_parent");
                    }


                    var vc_column_id = jThis.model.get('parent_id');
                    var vc_column = vc.shortcodes.get(vc_column_id);
                    var vc_row_id = vc_column.get('parent_id');
                    var vc_row = vc.shortcodes.get(vc_row_id);

                    var vc_column_models = vc.shortcodes.where({parent_id: vc_row_id});
                    var i = 0;
                    _.each(vc_column_models, function (col_model) {
                        var el_models = vc.shortcodes.where({parent_id: col_model.id});
                        _.each(el_models, function (el_model) {
                            i++;
                        }, this);
                    }, this);
                    var updated = false;
                    var need_update = false;
                    if (vc_column.get('shortcode') == "vc_column_inner") {
                        var params = vc_column.get('params');
                        if (params.width == "1/1") {
                            var c = 0;
                            var n = 0;
                            var el_models = vc.shortcodes.where({parent_id: vc_column_id});
                            _.each(el_models, function (el_model) {
                                c++;
                            }, this);
                            var el_models = vc.shortcodes.where({parent_id: vc_row_id});
                            _.each(el_models, function (el_model) {
                                n++;
                            }, this);
                            if (c <= 1 && n > 1) {
                                need_update = true;
                                vc_column.destroy();
                            }

                        }
                    }
                    //for iphorm
                    if (jThis.model.get('shortcode') == "iphorm_vc") {
                        var $formId = jThis.$el.find('.qfe_content_element').data('id');
                        ajax_delete_form($formId);
                    }
                    if (jThis.model.get('shortcode') == "vc_notice") {
                        var to_post_id = jThis.$el.find('.notice_warp').attr('data-post_id');
                        if (to_post_id && to_post_id > 0) {
                            jQuery.post("/FeiEditor/siteEdit/ajax_deletepage/" + to_post_id);
                        }
                    }
                    if (i <= 1) {
                        //jConfirm("区块已无内容确定删除吗？",function(){
                        //if(vc_row.get('parent_id')==false){
                        //vc_row.destroy();
                        //}else{
                        //vc.shortcodes.get(vc_row.get('parent_id')).destroy();
                        //}
                        //updated = true;
                        //vc.ShortcodesBuilder.save(true);
                        //},function(){
                        jThis.model.destroy();
                        updated = true;
                        vc.ShortcodesBuilder.save(true);
                        //},"再次确认");
                    } else {
                        jThis.model.destroy();
                        updated = true;
                        vc.ShortcodesBuilder.save(true);
                    }
                    if (need_update && !updated) {
                        vc.ShortcodesBuilder.save(true);
                    }

                }


            }, function () {
                return false;
            })
            top.jQuery(".boxy-wrapper:first").addClass("deletePanel");
            var params = jThis.model.get('params');
            if (iframeWin.jQuery("body").width() > 992) {
                if (params.display_device != 2) {
                    top.jQuery(".boxy-wrapper.deletePanel .answers").prepend('<input type="button" class="buttonPCHide" style="background-color: #fff;border: 1px solid #58ACFE;border-radius: 4px;padding: 6px 12px;color: #58ACFE;float:LEFT;cursor:pointer;" value="仅在PC端隐藏它">');
                    top.jQuery(".boxy-wrapper.deletePanel .answers .buttonPCHide").click(function () {
                        params.display_device = 2;
                        jThis.model.save({params: params}, {silent: true});
                        vc.ShortcodesBuilder.update(jThis.model);
                        updatePage(jThis.model, null);
                        top.jQuery(".buttonPCHide").closest(".boxy-wrapper").find(".buttonClass1").click();

                    })
                }
            } else {
                if (params.display_device != 1) {
                    top.jQuery(".boxy-wrapper.deletePanel .answers").prepend('<input type="button" class="buttonMobileHide" style="background-color: #fff;border: 1px solid #58ACFE;border-radius: 4px;padding: 6px 12px;color: #58ACFE;float:LEFT;cursor:pointer;" value="仅在手机端隐藏它">');
                    top.jQuery(".boxy-wrapper.deletePanel .answers .buttonMobileHide").click(function () {
                        params.display_device = 1;
                        jThis.model.save({params: params}, {silent: true});
                        vc.ShortcodesBuilder.update(jThis.model);
                        updatePage(jThis.model, null);
                        top.jQuery(".buttonMobileHide").closest(".boxy-wrapper").find(".buttonClass1").click();
                    });
                }
            }


        },
        removeView: function (model) {
            this.remove();
            vc.setDataChanged();
            vc.ShortcodesBuilder.notifyParent(this.model.get('parent_id'));
            if (vc.active_panel.model && vc.active_panel.model.get('id') === model.get('id')) {
                vc.closeActivePanel();
            }
            vc.setFrameSize();
        },
        update: function () {
            this.beforeUpdate();
            vc.ShortcodesBuilder.update(this.model);
        },

        clone: function (e) {
            _.isObject(e) && e.preventDefault() && e.stopPropagation();
            var shortcode = vc.shortcodes.where({id: this.model.get('id')});
            var tag = this.model.get('shortcode');
            var model = this.model;
            var string = vc.ShortcodesBuilder.modelsToString(shortcode);
            var jthis = this;
            var host = "";
            var url = window.location.href;
            var regex = /.*\:\/\/([^\/|:]*).*/;
            var match = url.match(regex);
            if (typeof match != "undefined" && null != match) {
                host = match[1];
            }
            var helperinfo = '';
            if (top.jQuery("#qiyukf").length > 0) {
                helperinfo = '<a href="http://www.qifeiye.com/%e5%a6%82%e4%bd%95%e5%a4%8d%e5%88%b6%e8%b7%a8%e9%a1%b5%e9%9d%a2%e5%a4%8d%e5%88%b6%e8%b7%a8%e7%bd%91%e7%ab%99%e5%a4%8d%e5%88%b6%e5%86%85%e5%ae%b9%ef%bc%9f/" style="color:#67b3ff" target=_blank  >详细帮助</a>';
            }
            top.jConfirmMore('<div><div><div style="text-align:center;margin-top:10px;"><a class="qfy_second_btn" style="font-size: 18px; cursor: pointer; border: 1px solid rgb(103, 179, 255); color: rgb(103, 179, 255); padding: 8px 39px;" onclick="quickcopy(this)">快速复制到当前页</a></div><div style="text-align:center;margin-top:30px;"><a class="copy_btn qfy_primiry_btn" style="font-size: 18px; cursor: pointer; background: rgb(103, 179, 255) none repeat scroll 0% 0%; color: rgb(255, 255, 255); border: 1px solid rgb(103, 179, 255); padding: 6px 57px;" onclick="clipboard_fun(this)" data-clipboard-text=' + base64_encode(host + '|^^|' + string) + '>复制到剪贴板</a></div><div><div style="width: 260px; margin: 25px auto 10px; font-size: 12px;">说明：复制到剪贴板之后可以粘贴到其它页面，甚至其它网站。但图片和表单等复杂对象不支持跨站复制。' + helperinfo + '</div></div></div></div>', function () {
                vc.ShortcodesBuilder.isCustomSuffix = "-c-" + vc.ShortcodesBuilder.randomString().substr(0, 2);
                if (tag == "vc_column" || tag == "vc_column_inner") {
                    _.each(vc.shortcodes.where({parent_id: model.get('id')}), function (shortcode) {
                        vc.CloneModel(shortcode, model.get('id'), true);
                    }, this);
                    vc.ShortcodesBuilder.setResultMessage(window.sprintf(window.i18nLocale.inline_element_cloned, model.setting('name'), model.get('id')));
                    vc.ShortcodesBuilder.render(null, true, model);
                } else {
                    var new_model;
                    vc.clone_index = vc.clone_index / 10;
                    new_model = vc.CloneModel(jthis.model, jthis.model.get('parent_id'));
                    var newtag = new_model.get('shortcode');
                    vc.ShortcodesBuilder.setResultMessage(window.sprintf(window.i18nLocale.inline_element_cloned, new_model.setting('name'), new_model.get('id')));
                    vc.ShortcodesBuilder.render();


                }
                vc.ShortcodesBuilder.isCustomSuffix = "";

            }, "确认信息", "快速复制", "关闭")
            /*top.jConfirmMore("请选中内容，然后按ctrl+c键,可在添加区块功能中进行粘帖。<br>请注意：表单和图片，以及一些数据源是不能跨站复制的。<br>如果需要快速复制到本页面请点<a onclick='quickcopy(this)' href='#' style='color:#e65d15'>这里</a><div class='tocopy0_div'><textarea style='width:100%;height:200px;' id='tmp_copy_c'>"+base64_encode(host+"|^^|"+string)+"</textarea></div>",function(){



	  },"确认信息","快速复制","关闭")*/
            top.jQuery(".boxy-wrapper .buttonClass0:visible").hide();
            top.jQuery(".boxy-wrapper #tmp_copy_c:visible").focus();

            return false;

        },
        getParam: function (pn) {
            return _.isObject(this.model.get('params')) && !_.isUndefined(this.model.get('params')[pn]) ? this.model.get('params')[pn] : null;
        },
        placeElement: function ($view, activity) {
            var $place_after = this.content().find('.vc-place-after');
            if ($place_after.is('.vc-element')) {
                $view.insertAfter($place_after.removeClass('vc-place-after'));
            } else if (_.isString(activity) && activity === 'prepend') {
                $view.prependTo(this.content());
            } else {
                $view.appendTo(this.content());
            }
            this.changed();
        }
    });

    vc.BitModel = Backbone.Model.extend({
        initialize: function () {
        },
        defaults: {
            post_id: 0,
            wid: 0,
            sid: 0,
            name: "",
            msg: "",
        }
    });

    vc.FrameView = Backbone.View.extend({
        events: {
            // 'keypress .entry-title': 'updateKeyPress',
            'click .vc-add-widget-action': 'addWidget',
            'click .vc-setting-widget-not-empty-button': 'editWholeWidget',
            'click .vc-setting-widget-mobilehide-button': 'mobilehideWholeWidget',

            'click .bit_edit_widget': 'editWidgetInLine',
            'click .bit_edit_widget_menu': 'editWidgetMenu',
            'click .bit_edit_widget_form': 'editWidgetForm',
            'click .bit_setting_widget': 'editWidget',
            'click .bit_gotoedit_widget': 'gotoWidgetPage',
            'click .bit_setting_widget_menu': 'editWidget',
            'click .bit_setting_widget_form': 'editWidget',
            'click .bit_edit_menu': 'editMenu',
            'click .bit_setting_menu': 'setMenu',
            'click .bit_setting_images': 'insertImage',
            'click .bit_setting_font': 'setMenuFont',
            'click .bit_setting_menu_style': 'setMenuStyle',
            'click .bit_setting_header_style': 'setHeaderStyle',
            'click .bit_edit_slider': 'editSliderText',
            'click .bit_setting_slider': 'setSliderText',
            'click .bit_anim_slider': 'setSliderText2',
            'click .site_tooler .control-btn-padding': 'editpadding',
            'click .bit_copy_slider': 'bitCopySlider',
            'click .sliderTextElementDiv': 'sliderTextElementDiv',
            'click .bit_textSet_widget': 'textSetDiv',
            'click .bit_edit_postlist': 'editPostlist',
            'click .bit-btn-clone': 'bitClone',
            'click .bit-btn-clone-to-page': 'bitCloneToPage',
            'click .control-btn-editmore': 'bitEditmore',
            'click .bit_button_helper': 'bitHelper',
            'click .control-btn-qfy-edit': 'bitPopup',
            'click .control-btn-qfy-edit-style': 'bitPopupstyle',
            'click .control-btn-qfy-edit-logo': 'bitPopuplogo',
            'click .control-btn-product-color': 'bitPopupColor',
            'click .control-btn-editto': 'edittoproduct',

            'click .control-btn-qfy-prepend': 'bitPrepend',
            'click .control-btn-qfy-hidden': 'bitPopHidden',
            'click .bit_edit_imageText': 'editImageText',
            'click .bit_setting_imageText': 'settingImageText',
            'click .bit_delete_imageText': 'deleteImageText',
            'click .bit_hidden_menu': 'bit_hidden_menu',
            'click .bit_hidden_header': 'bit_hidden_header',
            'click .hidden_bottombar': 'hidden_bottombar',
            'click .bit_delete_slider': 'deleteSlider',
            'click .bit_delete_widget': 'deleteWidget',
            'click .bit_delete_widget_menu': 'deleteWidget',
            'click .bit_delete_widget_form': 'deleteWidget',
            'click .vc-add-element-action': 'addElement',
            'click #vc-no-content-add-text-block': 'addTextBlock'
        },
        updateKeyPress: function (e) {
            if (e.which === 13) {
                e.preventDefault();
                vc.$title.attr('contenteditable', false);
                $('.entry-content').trigger('click');
                return false;
            }
        },
        reload_relative_js: function (obj) {
            if (obj.find(".qfe_images_lib_isotope").length > 0) {
                iframeWin.bitLibLayout();
            } else if (obj.find('.isotope-item').length > 0) {
                setTimeout(function () {
                    vc.frame_window.vc_teaserGrid();
                }, 500);
            } else if (obj.find('.vc-carousel').length > 0) {
                obj.find('[data-ride="vc-carousel"]').each(function () {
                    var $carousel = $(this).attr("id");
                    vc.frame_window.jQuery('#' + $carousel).carousel($(this).data())
                })
            }
        },
        editpadding: function (e) {
            e && e.preventDefault && e.preventDefault();
            var this$ = this;
            var $this = $(e.target).closest('.site_tooler');
            var id = $this.attr("id");
            if (vc.frame_window.jQuery("body").hasClass("resizing") && !$this.hasClass("qfy_resizing")) {
                vc.frame_window.jQuery(".qfy_resizing >.resizecontrol").hide();
                vc.frame_window.jQuery(".qfy_resizing").removeClass("qfy_resizing");
            }


            if ($this.find(">.resizecontrol").length == 0) {
                $this.addClass("qfy_resizing");
                $('<div class="resizecontrol" style="position: absolute;padding-left: inherit;padding-right: inherit;padding-top: inherit;height: 100%; width: 100%; top: 0px; left: 0px;"><div style="position:relative;height:100%;width:100%;"><div class="resize_confirm">确认</div><div class="resize_cancel">取消</div><div class="resizeL "></div><div class="resizeR "></div><div class="resizeT "></div><div class="resizeB "></div><div class="resizeLT"></div><div class="resizeTR "></div><div class="resizeBR "></div><div class="resizeLB "></div></div></div>').appendTo($this);
                vc.frame_window.jQuery("body").addClass("resizing");
                var old_l_padding = 0;
                var old_l = 0;
                var old_r_padding = 0;
                var old_r = 0;
                var old_t_padding = 0;
                var old_t = 0;
                var old_b_padding = 0;
                var old_b = 0;
                vc.frame_window.jQuery("#" + id + " .resize_confirm").click(function () {
                    $this.find(">.resizecontrol").hide();
                    $this.removeClass("qfy_resizing");
                    vc.frame_window.jQuery("body").removeClass("resizing");
                    var ismobile = vc.frame_window.jQuery("body").width() > 768 ? 0 : 1;
                    var paddingleft = $this.css("padding-left").replace("px", "");
                    var paddingright = $this.css("padding-right").replace("px", "");
                    var paddingtop = $this.css("padding-top").replace("px", "");
                    var paddingbottom = $this.css("padding-bottom").replace("px", "");

                    $this.attr("data-padding", $this.css("padding-top") + " " + $this.css("padding-right") + " " + $this.css("padding-bottom") + " " + $this.css("padding-left"));

                    $j.post("/FeiEditor/siteEdit/ajax_updatewidgetpadding/" + id, {
                        paddingleft: paddingleft,
                        paddingright: paddingright,
                        paddingtop: paddingtop,
                        paddingbottom: paddingbottom,
                        ismobile: ismobile
                    });

                });

                vc.frame_window.jQuery("#" + id + " .resize_cancel").click(function () {
                    $this.find(">.resizecontrol").hide();
                    $this.removeClass("qfy_resizing");
                    vc.frame_window.jQuery("body").removeClass("resizing");
                    var padding = $this.attr("data-padding");
                    if (padding) {
                        var t = padding.split(" ");
                        $this.css("padding-left", t[3]);
                        $this.css("padding-right", t[1]);
                        $this.css("padding-top", t[0]);
                        $this.css("padding-bottom", t[2]);
                    }
                })
                vc.frame_window.jQuery("#" + id + " .resizeL").draggable({
                    axis: "x",
                    helper: function () {
                        return $j("<div></div>");
                    },
                    start: function (event, ui) {
                        old_l = ui.position.left;

                        old_l_padding = $this.css("padding-left").replace("px", "");
                        if (!$this.attr("data-padding")) {
                            $this.attr("data-padding", $this.css("padding-top") + " " + $this.css("padding-right") + " " + $this.css("padding-bottom") + " " + $this.css("padding-left"));
                        }
                    },
                    stop: function (event, ui) {
                        this$.reload_relative_js($this);
                    },
                    drag: function (event, ui) {
                        var now = old_l_padding * 1 + (ui.position.left * 1 - old_l) * 1;
                        $this.css("padding-left", now + "px");
                    }
                })
                vc.frame_window.jQuery("#" + id + "  .resizeR").draggable({
                    axis: "x",
                    helper: function () {
                        return $j("<div></div>");
                    },
                    start: function (event, ui) {
                        old_r = ui.position.left;
                        old_r_padding = $this.css("padding-right").replace("px", "");
                        if (!$this.attr("data-padding")) {
                            $this.attr("data-padding", $this.css("padding-top") + " " + $this.css("padding-right") + " " + $this.css("padding-bottom") + " " + $this.css("padding-left"));
                        }
                    },
                    stop: function (event, ui) {
                        this$.reload_relative_js($this);
                    },
                    drag: function (event, ui) {
                        var now = old_r_padding * 1 + (old_r * 1 - ui.position.left) * 1;
                        $this.css("padding-right", now + "px");
                    }
                })
                vc.frame_window.jQuery("#" + id + " .resizeT").draggable({
                    axis: "y",
                    helper: function () {
                        return $j("<div></div>");
                    },
                    start: function (event, ui) {
                        old_t = ui.position.top;
                        old_t_padding = $this.css("padding-top").replace("px", "");
                        if (!$this.attr("data-padding")) {
                            $this.attr("data-padding", $this.css("padding-top") + " " + $this.css("padding-right") + " " + $this.css("padding-bottom") + " " + $this.css("padding-left"));
                        }
                    },
                    stop: function (event, ui) {
                        this$.reload_relative_js($this);
                    },
                    drag: function (event, ui) {
                        var now = old_t_padding * 1 + (ui.position.top - old_t * 1) * 1;
                        $this.css("padding-top", now + "px");
                    }
                })
                vc.frame_window.jQuery("#" + id + " .resizeB").draggable({
                    axis: "y",
                    helper: function () {
                        return $j("<div></div>");
                    },
                    start: function (event, ui) {
                        old_b = ui.position.top;
                        old_b_padding = $this.css("padding-bottom").replace("px", "");
                        if (!$this.attr("data-padding")) {
                            $this.attr("data-padding", $this.css("padding-top") + " " + $this.css("padding-right") + " " + $this.css("padding-bottom") + " " + $this.css("padding-left"));
                        }
                    },
                    stop: function (event, ui) {
                        this$.reload_relative_js($this);
                    },
                    drag: function (event, ui) {
                        var now = old_b_padding * 1 + (ui.position.top - old_b * 1) * 1;
                        $this.css("padding-bottom", now + "px");
                    }
                })
                vc.frame_window.jQuery("#" + id + " .resizeLT").draggable({
                    helper: function () {
                        return $j("<div></div>");
                    },
                    start: function (event, ui) {
                        old_l = ui.position.left;
                        old_l_padding = $this.css("padding-left").replace("px", "");
                        old_t = ui.position.top;
                        old_t_padding = $this.css("padding-top").replace("px", "");
                        if (!$this.attr("data-padding")) {
                            $this.attr("data-padding", $this.css("padding-top") + " " + $this.css("padding-right") + " " + $this.css("padding-bottom") + " " + $this.css("padding-left"));
                        }
                    },
                    stop: function (event, ui) {
                        this$.reload_relative_js($this);
                    },
                    drag: function (event, ui) {
                        var now = old_l_padding * 1 + (ui.position.left * 1 - old_l) * 1;
                        $this.css("padding-left", now + "px");
                        now = old_t_padding * 1 + (ui.position.top - old_t * 1) * 1;
                        $this.css("padding-top", now + "px");
                    }
                })
                vc.frame_window.jQuery("#" + id + " .resizeLB").draggable({
                    helper: function () {
                        return $j("<div></div>");
                    },
                    start: function (event, ui) {
                        old_l = ui.position.left;
                        old_l_padding = $this.css("padding-left").replace("px", "");
                        old_b = ui.position.top;
                        old_b_padding = $this.css("padding-bottom").replace("px", "");
                        if (!$this.attr("data-padding")) {
                            $this.attr("data-padding", $this.css("padding-top") + " " + $this.css("padding-right") + " " + $this.css("padding-bottom") + " " + $this.css("padding-left"));
                        }
                    },
                    stop: function (event, ui) {
                        this$.reload_relative_js($this);
                    },
                    drag: function (event, ui) {
                        var now = old_l_padding * 1 + (ui.position.left * 1 - old_l) * 1;
                        $this.css("padding-left", now + "px");
                        now = old_b_padding * 1 + (ui.position.top - old_b * 1) * 1;
                        $this.css("padding-bottom", now + "px");
                    }
                })
                vc.frame_window.jQuery("#" + id + " .resizeBR").draggable({
                    helper: function () {
                        return $j("<div></div>");
                    },
                    start: function (event, ui) {
                        old_r = ui.position.left;
                        old_r_padding = $this.css("padding-right").replace("px", "");
                        old_b = ui.position.top;
                        old_b_padding = $this.css("padding-bottom").replace("px", "");
                        if (!$this.attr("data-padding")) {
                            $this.attr("data-padding", $this.css("padding-top") + " " + $this.css("padding-right") + " " + $this.css("padding-bottom") + " " + $this.css("padding-left"));
                        }
                    },
                    stop: function (event, ui) {
                        this$.reload_relative_js($this);
                    },
                    drag: function (event, ui) {
                        var now = old_r_padding * 1 + (old_r * 1 - ui.position.left) * 1;
                        $this.css("padding-right", now + "px");
                        now = old_b_padding * 1 + (ui.position.top - old_b * 1) * 1;
                        $this.css("padding-bottom", now + "px");
                    }
                })
                vc.frame_window.jQuery("#" + id + " .resizeTR").draggable({
                    helper: function () {
                        return $j("<div></div>");
                    },
                    start: function (event, ui) {
                        old_r = ui.position.left;
                        old_r_padding = $this.css("padding-right").replace("px", "");
                        old_t = ui.position.top;
                        old_t_padding = $this.css("padding-top").replace("px", "");
                        if (!$this.attr("data-padding")) {
                            $this.attr("data-padding", $this.css("padding-top") + " " + $this.css("padding-right") + " " + $this.css("padding-bottom") + " " + $this.css("padding-left"));
                        }
                    },
                    stop: function (event, ui) {
                        this$.reload_relative_js($this);
                    },
                    drag: function (event, ui) {
                        var now = old_r_padding * 1 + (old_r * 1 - ui.position.left) * 1;
                        $this.css("padding-right", now + "px");
                        now = old_t_padding * 1 + (ui.position.top - old_t * 1) * 1;
                        $this.css("padding-top", now + "px");
                    }
                })

            } else if ($this.find(">.resizecontrol:visible").length == 0) {
                $this.closest("body").find(".resizecontrol").hide();
                $this.find(">.resizecontrol").show();
                vc.frame_window.jQuery("body").addClass("resizing");
                $this.addClass("qfy_resizing");
            } else {
                $this.closest("body").find(".resizecontrol").hide();
                $this.find(">.resizecontrol").hide();
                vc.frame_window.jQuery("body").removeClass("resizing");
                $this.removeClass("qfy_resizing");
            }

        },
        bitPopuplogo: function (e) {
            e && e.preventDefault && e.preventDefault();
            var isfullpage = 0;
            var str = "";
            if (iframeWin.jQuery("body").hasClass("page-template-template-fullscreen-php")) {
                isfullpage = 1;
                str = "?isfullsliderpage=1";
            }
            if (iframeWin.jQuery("#branding .logotext_inner").length == 0 && iframeWin.jQuery("#branding .logospan img:visible").length == 0) {
                top.logobarSetting();
            } else {
                top.jConfirm('确认是否重置头部各位移参数,恢复默认状态？', function () {
                    var pageid = top.jQuery("#pageUrl").val();
                    $j.post("/FeiEditor/siteEdit/cleanheaderpositionoption/" + isfullpage + str, {qfy_pageid: pageid}, function (data) {
                        if (data.indexOf("|<result>|") > -1) {
                            reloadheaderevents(data);
                        } else {
                            location.reload();
                        }
                    });
                }, function () {
                }, "重置参数")

            }
        },
        mobilehideWholeWidget: function (e) {
            e && e.preventDefault && e.preventDefault();

            var obj = $(e.target).parents('.vc-not-empty:first').parent();
            var rlt = obj.attr("bitdatamarker");
            var data = {"silder_device": 1};
            if (rlt == "bitLeftSider") {
                ajaxBeforeLoading(0, obj);
                jQuery.post("/FeiEditor/siteEdit/ajax_updateSlider", data, function (msg) {
                    obj.addClass("wf-mobile-hidden");
                    jQuery("#vc-setting-widget-dialog [name='silder_device']").val(1);
                });
            } else if (rlt == "bitRightSider") {
                ajaxBeforeLoading(0, obj);
                jQuery.post("/FeiEditor/siteEdit/ajax_updateSlider/1", data, function (msg) {
                    obj.addClass("wf-mobile-hidden");
                    jQuery("#vc-setting-widget-dialog2 [name='silder_device']").val(1);
                });
            }

        },
        editWholeWidget: function (e) {
            e && e.preventDefault && e.preventDefault();
            var obj = $(e.target).parents('.vc-not-empty:first').parent();
            var rlt = obj.attr("bitdatamarker");
            if (rlt == "bitLeftSider") {
                vc.setting_widget_dialog.render(rlt);
            } else if (rlt == "bitRightSider") {
                vc.setting_widget_dialog2.render(rlt);
            } else if (rlt == "bitMainTopSider") {
                vc.setting_widget_dialog3.render(rlt);
            } else if (rlt == "bitMainBottomSider") {
                vc.setting_widget_dialog4.render(rlt);
            } else if (rlt == "bitHeader-6") {
                vc.setting_widget_dialog7.render(rlt);
            } else if (rlt == "bitHeader-7") {
                vc.setting_widget_dialog8.render(rlt);
            } else if (rlt == "bitHeader-8") {
                vc.setting_widget_dialog12.render(rlt);
            } else if (rlt == "bitHeader-9") {
                vc.setting_widget_dialog13.render(rlt);
            }

        },
        setTitle: function (title) {
            if (vc.$title.length) {
                vc.$title.text(title);
                vc.title = title;
                vc.update_title = true;
            }
        },
        initialize: function () {
            vc.frame_window = vc.$frame.get(0).contentWindow;
        },
        setActiveHover: function (e) {
            if (this.$hover_element) this.$hover_element.removeClass('vc-hover');
            this.$hover_element = $(e.currentTarget).addClass('vc-hover');
            e.stopPropagation();
        },
        setMenuStyle: function (e) {
            parent.qfMenuSetting();
        },
        bitClone: function (e) {
            var obj = $(e.target).parents('.vc-controls').parent();
            var wid = obj.attr("id");
            var sid = obj.parent().attr("bitdatamarker");
            if (!sid) {
                sid = obj.closest(".bitSider").attr("bitdatamarker");
            }

            if (!wid) return false;
            var nextobj = null;
            if (iframeWin.jQuery("#" + wid + ".site_tooler").next().prop("tagName") == "BR") {
                nextobj = iframeWin.jQuery("#" + wid + ".site_tooler").next();
            } else {
                nextobj = iframeWin.jQuery("#" + wid + ".site_tooler")

            }
            nextobj.after("<div class='" + wid + "_replace' style='width:100%;text-align:center;padding:10px 0;margin-bottom:20px;border:1px solid #bababa;'><img  align='absmiddle' class='loadingClassImg' src='" + loaderImage + "' /></div>");
            var w = iframeWin.jQuery("." + wid + "_replace");
            $.post("/FeiEditor/siteEdit/widgetClone", {sid: sid, wid: wid}, function (id) {
                updateWidgetViewEvent(id, w);
            });
        },
        bitEditmore: function (e) {
            e && e.preventDefault && e.preventDefault();
            top.topPopUserWarning();
        },
        bitCloneToPage: function (e) {
            e && e.preventDefault && e.preventDefault();
            var wid = $(e.target).parents('.vc-controls').parent().attr("id");
            if (!wid) return false;
            vc.edit_widget_block_view.render(false);
            ajaxGetWidgetCloneToForm(wid);
        },
        bitPopup: function (e) {
            var p = $(e.target).parents('.vc-controls');
            if (p.hasClass("header_control")) {
                parent.qfHeaderSetting();
                return false;
            } else if (p.hasClass("footer_control")) {
                parent.footerSlidersSetting();
                return false;
            } else if (p.hasClass("product_control")) {
                top.jQuery('#bit_site_top .editOnePage').click();
                return false;
            }

        },
        bitPopupstyle: function (e) {
            parent.qfHeaderSetting("", "#section-header-layout");
        },
        bitPopupColor: function (e) {
            var tag = $(e.target).parents('.vc-controls').parent().attr("data-tag");
            vc.vc_edit_productcolor_dialog.render(tag, ".wc-qtmsg");
        },
        edittoproduct: function (e) {
            var current_pid = $(e.target).parents('.vc-controls').prev().attr("data-proid");
            bitSettingsEdit(current_pid, "设置当前商品", 'product');
        },
        bitPrepend: function (e) {
            vc.add_pop_block_view.render("prepend");
        },
        bitPopHidden: function (e) {

            $(e.target).parents('.vc-controls').hide();
            setTimeout(function () {
                $(e.target).parents('.vc-controls').show();
            }, 10000);

        },
        bitHelper: function (e) {
            var curr = $(e.currentTarget);
            var data = curr.attr("data-for");
            if (data == "零件") {
                var find = curr.parent().find(".vc-element-name");
                if (find.length > 0) {
                    data = jQuery.trim(find.attr("data-name"));
                }
            } else if (data == "插件") {
                var p = curr.parents(".site_tooler");
                if (p.length > 0) {
                    var id = p.attr("id");
                    if (id.indexOf("text-") > -1) {
                        data = "文本";
                    } else if (id.indexOf("nav_menu-") > -1 || id.indexOf("nav_menuhorizontal-") > -1) {
                        data = "菜单";
                    } else if (id.indexOf("nav_widget-") > -1) {
                        data = "跑马灯";
                    } else if (id.indexOf("iphorm-widget-") > -1) {
                        data = "表单";
                    } else if (id.indexOf("search-") > -1) {
                        data = "搜索";
                    } else if (id.indexOf("bit_postlist-") > -1) {
                        if (p.find(".bitImageControlDiv").length > 0) {
                            data = "图片";
                        } else if (p.find(".qfe_images_lib").length > 0) {
                            data = "图库";
                        } else if (p.find(".ts_video_container").length > 0) {
                            data = "视频";
                        } else if (p.find(".vc_bit_raw_video").length > 0) {
                            data = "视频";
                        } else if (p.find(".qfe_raw_js").length > 0) {
                            data = "js";
                        } else if (p.find(".qfe_gmaps_widget").length > 0) {
                            data = "地图";
                        } else if (p.find(".qfe_gallery_slides").length > 0) {
                            data = "小型幻灯片";
                        } else if (p.find(".qfe_teaser_grid_post").length > 0) {
                            data = "列表";
                        }
                    }
                }
            }
            var page_id = jQuery("#bit-search-pageid").val();
            //vendor not help
            var url = "http://www.qifeiye.com/?page_id=3566&searchtype=post&search=" + data;
            window.open(url, '_blank');
        },
        editPostlist: function (e) {
            var type = "vc_posts_grid";


            var obj = $(e.target).parents('.vc-controls').parent();
            var wid = obj.attr("id");
            if (!wid) return false;

            var hiddenText = jQuery.trim(obj.find(".hiddenText").html());
            if (hiddenText.indexOf("[vc_gallery") > -1) {
                type = "vc_gallery";
            } else if (hiddenText.indexOf("[vc_raw_js") > -1) {
                type = "vc_raw_js";
            } else if (hiddenText.indexOf("[vc_bit_qqmaps") > -1) {
                type = "vc_bit_qqmaps";
            } else if (hiddenText.indexOf("[TS_VCSC_Countdown") > -1) {
                type = "TS_VCSC_Countdown";
            } else if (hiddenText.indexOf("[vc_header") > -1) {
                type = "vc_header";
            } else if (hiddenText.indexOf("[vc_bit_raw_video") > -1) {
                type = "vc_bit_raw_video";
            } else if (hiddenText.indexOf("[Bit_HTML5_Video") > -1) {
                type = "Bit_HTML5_Video";
            } else if (hiddenText.indexOf("[vc_jplayer") > -1) {
                type = "vc_jplayer";
            }else if(hiddenText.indexOf("[vc_translate")==0){
                type = "vc_translate";
            } else if (hiddenText.indexOf("[vc_socail_icons_list") > -1) {
                type = "vc_socail_icons_list";
            } else if (hiddenText.indexOf("[vc_flag_list") > -1) {
                type = "vc_flag_list";
            } else if (hiddenText.indexOf("[comment") == 0) {
                type = "comment";
            } else if (hiddenText.indexOf("[qfyshare") == 0) {
                type = "qfyshare";
            } else if (hiddenText.indexOf("[qfyatt") == 0) {
                type = "qfyatt";
            } else if (hiddenText.indexOf("[disqus_comment") == 0) {
                type = "disqus_comment";
            } else if (hiddenText.indexOf("[ds_comment") == 0) {
                type = "ds_comment";
            } else if (hiddenText.indexOf("[uyan_comment") == 0) {
                type = "uyan_comment";
            } else if (hiddenText.indexOf("[vc_images_carousel") > -1) {
                type = "vc_images_carousel";
            } else if (hiddenText.indexOf("[vc_images_list") > -1) {
                type = "vc_images_list";
            } else if (hiddenText.indexOf("[vc_single_image") > -1) {
                type = "vc_single_image";
            } else if (hiddenText.indexOf("[qfyuser") > -1) {
                type = "qfyuser";
            } else if (hiddenText.indexOf("[vc_column_custom_text") > -1) {
                type = "vc_column_custom_text";
            } else if (hiddenText.indexOf("[vc_jsscroll_text") > -1) {
                type = "vc_jsscroll_text";
            } else if (hiddenText.indexOf("[products_list") > -1) {
                type = "products_list";
            } else if (hiddenText.indexOf("[vc_btn ") > -1) {
                type = "vc_btn";
            } else if (hiddenText.indexOf("[vc_column_search ") > -1) {
                type = "vc_column_search";
            } else if (hiddenText.indexOf("[vc_notice ") > -1) {
                type = "vc_notice";
            } else if (hiddenText.indexOf("[vc_prenext ") > -1) {
                type = "vc_prenext";
            } else if (hiddenText.indexOf("[list_cate_controls ") > -1) {
                type = "list_cate_controls";
            } else if (hiddenText.indexOf("[vc_icon ") > -1) {
                type = "vc_icon";
            }

            var data = {"action": "qfe_show_edit_form", "element": type, "vc_inline": true, "shortcode": hiddenText};
            vc.edit_bit_settings_view.render("createPostList");
            $j("#vc-bit_settings-panel .panel-title").html("编辑");
            $j("#vc-bit_settings-panel").css("position", "relative");
            loadingAjax($j("#vc-bit_settings-panel .panel-body"));
            $j("#vc-bit_settings-panel .waitingToPanel").css("height", "auto");
            $.post("/admin/admin-ajax.php", data, function (html) {
                $j("#vc-bit_settings-panel .panel-footer").show();

                vc.edit_bit_settings_view.render("createPostList");
                $j("#vc-bit_settings-panel .panel-body").html("<form action='/FeiEditor/siteEdit/updatePostlist' method='post' ><input type='hidden' name='wid' value='" + wid + "' /><input type='hidden' name='bit_type' value='" + type + "' />" + html + "</form>");
                vc.edit_element_block_view2 = new vc.EditElementPanelView({el: '#vc-bit_settings-panel'});
                vc.edit_element_block_view2.render2(type, false, wid);
                vc.edit_element_block_view2.init("change");
                vc.edit_element_block_view2.changeXYZ2();

                var isgotopage = false;
                $j("#vc-bit_settings-panel .set_updatenoticepage").unbind("click").bind("click", function () {
                    var width = obj.find(".qfy_notice .notice_warp").attr("data-width");
                    var wid = obj.find(".qfy_notice").attr("id");
                    var to_post_id = obj.find(".qfy_notice .notice_warp").attr("data-post_id");
                    if (!to_post_id) to_post_id = 0;
                    top.jConfirm("是否前往组件页面，编辑通知内容", function () {
                        var pid = top.jQuery('#pageUrl').val();

                        jQuery.post("/FeiEditor/siteEdit/ajax_setandaddpostmeta", {
                            post_id: pid,
                            to_post_id: to_post_id,
                            "meta_key": "_last_div_width",
                            "meta_value": width,
                            "meta_key2": "_last_div_id",
                            "meta_value2": wid
                        }, function (post_id) {
                            if (post_id > 0 && to_post_id == 0) {
                                $j("#vc-bit_settings-panel [name='post_id']").val(post_id);
                                isgotopage = true;
                                $j("#vc-bit_settings-panel .btn.btn-primary").click();
                            } else {
                                top.jQuery('#pageUrl').val(to_post_id);
                                top.jQuery('#pageUrl').change();
                            }
                        });
                    })

                });


                $j("#vc-bit_settings-panel .btn-primary").unbind("click").bind("click", function () {
                    //jQuery("#vc-bit_settings-panel").hide();
                    obj = iframeWin.jQuery("#" + wid);
                    /*if(type=="qfyuser"){
					top.jQuery("#vc-preloader").show();
				}else{
					loaderDivUI(obj);
				}*/
                    if ($j("#vc-bit_settings-panel .qfe_vc_param_value.iconslist").length > 0) {
                        var $field = $j('#vc-bit_settings-panel .gallery_icons_list_container.iconslist li');
                        var values = [];
                        $field.each(function () {
                            values.push(jQuery(this).find("input").val());
                        });
                        var value = values.join("|^^|");
                        $j('#vc-bit_settings-panel [name="iconslist"]').val(value);
                    }

                    $j("#vc-bit_settings-panel [name='frame_set']").val(vc.edit_element_block_view2.getFrameSet());
                    //$j("#vc-bit_settings-panel [name='box_border_settings']").val(vc.edit_element_block_view2.getBorderSet($j("#vc-bit_settings-panel")));

                    $j("#vc-bit_settings-panel .set_border_table_contrainer").each(function () {
                        if (jQuery(this).closest(".widgetFrameDiv").length == 0) {
                            var name = jQuery(this).prev().attr("name");
                            jQuery(this).prev().val(vc.edit_element_block_view2.getBorderSet(jQuery(this)));
                        }
                    })
                    if ($j("#vc-bit_settings-panel .fonts_container").length > 0) {
                        $j("#vc-bit_settings-panel .fonts_container").each(function () {
                            var $_fontfamily = jQuery(this).find("[name='_fontfamily']").val();
                            var $_fontsize = jQuery(this).find("[name='_fontsize']").val();
                            var $_lineheight = jQuery(this).find("[name='_lineheight']").val();
                            var $_fontbold = jQuery(this).find("[name='_fontbold']").prop("checked") == true ? "bold" : "normal";
                            var $_fontstyle = jQuery(this).find("[name='_fontstyle']").prop("checked") == true ? "italic" : "normal";
                            var $_line = jQuery(this).find("[name='_line']").val();
                            // font:italic bold 12px/20px arial,sans-serif;
                            if ($_fontsize.indexOf("px") < 0 && $_fontsize.indexOf("PX") < 0) {
                                $_fontsize = $_fontsize + "px";
                            }
                            if ($_lineheight.indexOf("px") < 0 && $_lineheight.indexOf("PX") < 0) {
                                $_lineheight = $_lineheight + "px";
                            }
                            var font = $_fontstyle + " " + $_fontbold + " " + $_fontsize + "/" + $_lineheight + " " + $_fontfamily;
                            jQuery(this).prev().val(font + "|" + $_line);
                        })
                    }

                    if ($j("#vc-bit_settings-panel .qfe_el_type_checkbox_js").length > 0) {
                        var $field = $j("#vc-bit_settings-panel .qfe_el_type_checkbox_js").each(function () {
                            var name = jQuery(this).find("input").attr("name");
                            var $field = jQuery(this).find('input:checked');
                            var values = [];
                            $field.each(function () {
                                values.push(jQuery(this).val());
                            });
                            var value = values.join(",");
                            jQuery("#vc-bit_settings-panel input[name='" + name + "_qfytmpchecked']").remove();
                            jQuery("#vc-bit_settings-panel form").append("<input type='hidden' name='" + name + "_qfytmpchecked' value='" + value + "' />");

                        })

                    }


                    if (type == "vc_bit_qqmaps") {
                        var bit_qqmaps_frame = jQuery("#vc-bit_settings-panel #bit_qqmaps").contents();
                        var vc_bit_qqmaps_str = "address:" + bit_qqmaps_frame.find('#address').val()
                            + "||zoom:" + bit_qqmaps_frame.find('#zoom').val()
                            + "||lat:" + bit_qqmaps_frame.find('#lat').val()
                            + "||lng:" + bit_qqmaps_frame.find('#lng').val();
                        var moreinfo = new Array();
                        var n = 0;
                        jQuery('#vc-bit_settings-panel .mapobjects_inner .mapitem').each(function () {
                            var t1 = jQuery(this).find("[name='m_t1']").val();
                            var t2 = jQuery(this).find("[name='m_t2']").val();
                            var t3 = jQuery(this).find("[name='m_t3']").val();
                            if (t2 != "" && t3 != "") {
                                moreinfo[n] = t1 + "||" + t2 + "||" + t3;
                                n++;
                            }
                        })
                        if (n > 0) {
                            jQuery("#vc-bit_settings-panel input[name='moreaddress']").val(moreinfo.join("|^|"));
                        } else {
                            jQuery("#vc-bit_settings-panel input[name='moreaddress']").val("");
                        }
                        jQuery("#vc-bit_settings-panel input[name='bit_qqmaps']").remove();
                        jQuery("#vc-bit_settings-panel form").append("<input type='hidden' name='bit_qqmaps' />");
                        jQuery("#vc-bit_settings-panel input[name='bit_qqmaps']").val(vc_bit_qqmaps_str);
                    }
                    var $savebtn = $j("#vc-bit_settings-panel .btn-primary");

                    $savebtn.addClass('btn_data_onsaving').attr("data-old-btnname", $savebtn.html()).prop('disabled', true).prop('btn_data_onsaving', true).html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
                    ajaxBeforeLoading("0", obj);
                    $j("#vc-bit_settings-panel form").ajaxSubmit({
                        success: function (htm) {
                            $savebtn.removeClass('btn_data_onsaving').removeAttr('btn_data_onsaving').removeAttr('disabled').html($savebtn.attr("data-old-btnname"));
                            var $message_box = $j('<div class="vc-panel-message type-success"></div>').appendTo($j("#vc-bit_settings-panel .panel-body"));
                            $message_box.text('操作成功').fadeIn();
                            window.setTimeout(function () {
                                $message_box.remove();
                            }, 6000);
                            if (type == "qfyuser") {
                                location.reload();
                                return;
                            }
                            if (isgotopage && $j("#vc-bit_settings-panel [name='post_id']").val() > 0) {
                                isgotopage = false;
                                var post_id = $j("#vc-bit_settings-panel [name='post_id']").val();
                                top.jQuery('#pageUrl').val(post_id).change();
                            } else {
                                updateWidgetViewEvent(wid, obj);
                            }
                        }
                    });
                })
            })

        },
        insertImage: function (e) {

            OpenImageLibToBanner();
        },
        setHeaderStyle: function (e) {
            parent.qfHeaderSetting();
        },
        unsetActiveHover: function (e) {
            if (this.$hover_element) this.$hover_element.removeClass('vc-hover');
        },
        setSortable: function () {
            vc.frame_window.vc_iframe.setSortable(vc.app);
        },
        render: function () {
            //vc.$title = $(vc.$frame.get(0).contentWindow.document).find('h1:contains(' + vc.title + ')');
            //vc.$title.click(function(e){
            //e.preventDefault();
            //vc.post_settings_view.render().show();
            //});
            return this;
        },
        noContent: function (no) {
            vc.frame_window.vc_iframe.showNoContent(no);
        },
        addElement: function (e) {
            e && e.preventDefault && e.preventDefault();
            jQuery(".qfe-content-layouts .parentElement").addClass("vc-visible");
            jQuery(".qfe-content-layouts .childElement").removeClass("vc-visible");
            vc.add_element_block_view.render(false);

        },
        addWidget: function (e) {
            e && e.preventDefault && e.preventDefault();
            // console.log($(e.target));
            var obj = $(e.target).parents('.vc-not-empty:first').parent();
            var rlt = obj.attr("bitdatamarker");
            var portal = new vc.BitModel({sid: rlt});

            if (obj.hasClass("bitMainTopSider")) {
                vc.add_maintop_widget_dialog.render(portal);
            } else if (obj.hasClass("bitHeader-8") || obj.hasClass("bitHeader-9")) {
                vc.add_header2_block_view.render(portal);
            } else {
                vc.add_widget_block_view.render(portal);
            }

            if (rlt == "bitRightSider" || rlt == "bitLeftSider") {
                jQuery(".qfe-content-layouts .nav_menuhorizontal").hide();
            } else {
                jQuery(".qfe-content-layouts .nav_menuhorizontal").removeAttr("style");
            }

            if (rlt == "sidebar_2" || rlt == "bitFooter" || rlt == "bitFooter-1") {
                var p = jQuery("#vc-add-widget-dialog .qfe-content-layouts .simplepage");
                if (p.index() != 0) {
                    p.parent().prepend(p);
                }
            } else {
                var p = jQuery("#vc-add-widget-dialog .qfe-content-layouts .simplepage");

                if (p.index() == 0) {
                    p.parent().append(p);
                }


            }
        },
        gotoWidgetPage: function (e) {
            var wid = $(e.target).closest('.vc-controls').parent().attr("id");
            if (!wid) return false;
            if (wid.indexOf("simplepage") > -1) {
                top.jConfirm("你正在编辑底部的页面插件，需要跳转到插件对应的页面去编辑内容", function () {
                    var post_id = iframeWin.jQuery('#' + wid).find(">.simplepage_container").attr("data-post_id");
                    var width = iframeWin.jQuery('#' + wid).find(">.simplepage_container").width();
                    if (width > 0) {
                        $.post("/FeiEditor/siteEdit/ajax_setupdatepostmeta", {
                            post_id: post_id,
                            "meta_key": "_last_div_width",
                            "meta_value": width,
                            "meta_key2": "_last_div_id",
                            "meta_value2": wid
                        }, function (msg) {
                            parent.$('#pageUrl').val(post_id);
                            parent.$('#pageUrl').change();
                        });
                    } else {
                        parent.$('#pageUrl').val(post_id).change();
                    }
                })
            }

        },
        editWidget: function (e) {
            e && e.preventDefault && e.preventDefault();
            var wid = $(e.target).parents('.vc-controls').parent().attr("id");
            if (!wid) return false;
            vc.edit_widget_block_view.render(false);
            ajaxGetWidgetForm(wid);

        },

        editWidgetForm: function (e) {
            e && e.preventDefault && e.preventDefault();
            var wid = $(e.target).parents('.vc-controls').parent().attr("id");
            var fid = $(e.target).parents('.vc-controls').parent().find('input[name="iphorm_id"]').val();
            if (!fid) return false;
            vc.edit_widget_block_view.render(false);
            ajaxGetWidgetIphorm(wid, fid);
        },

        setSliderText: function (e) {
            e && e.preventDefault && e.preventDefault();
            var p1 = $(e.target).parents('.vc-controls').parent();
            var p = p1.parent();
            var slideId = p.attr("data-slideid");
            if (!slideId) return false;
            var sliderId = p.parent().parent().parent().attr("bitdatalocation");
            var sliderObj = eval("iframeWin.revapi" + sliderId);
            sliderObj.revpause();
            vc.edit_slide_block_view.render(sliderId, slideId, sliderObj, p1, "text");
        },
        setSliderText2: function (e) {
            e && e.preventDefault && e.preventDefault();
            var p1 = $(e.target).parents('.vc-controls').parent();
            var p = p1.parent();
            var slideId = p.attr("data-slideid");
            if (!slideId) return false;
            var sliderId = p.parent().parent().parent().attr("bitdatalocation");
            var sliderObj = eval("iframeWin.revapi" + sliderId);
            sliderObj.revpause();
            vc.edit_slide_block_view.render(sliderId, slideId, sliderObj, p1, "text2");
        },
        bitCopySlider: function (e) {
            e && e.preventDefault && e.preventDefault();
            var p1 = $(e.target).parents('.vc-controls').parent();
            var p = p1.parent();
            var slideId = p.attr("data-slideid");
            if (!slideId) return false;
            var sliderId = p.parent().parent().parent().attr("bitdatalocation");
            var sliderObj = eval("iframeWin.revapi" + sliderId);
            sliderObj.revpause();
            var textIndex = p1.attr("bitslidetextindex") * 1;
            var r_x = Math.round(Math.random() * 100) + 200;
            var r_y = Math.round(Math.random() * 100) + 100;
            var height = p.height();
            if (r_y > height - 50) {
                r_y = height - 50;
            }
            var data = {
                slideid: slideId,
                sliderID: sliderId,
                bitAction: "copy",
                textIndex: textIndex,
                r_x: r_x,
                r_y: r_y
            };
            ajaxBeforeLoading(0, p.parent());
            revAjaxRequest("update_slide_sample", data, function () {
                refreshREvSlider(iframeWin.jQuery("[bitdatalocation=" + sliderId + "]"), slideId);
            });
        },
        sliderTextElementDiv: function (e) {
            e && e.preventDefault && e.preventDefault();
            var ele = $(e.target);
            if (!ele.hasClass("sliderTextElement")) {
                ele = ele.parent();
            }

        },
        textSetDiv: function (e) {
            e && e.preventDefault && e.preventDefault();
            var control = $(e.target).parent().parent().parent().parent().parent();
            //......
            vc.edit_slide_block_view.render(null, null, null, control, "imageText");
        },
        editImageText: function (e) {
            e && e.preventDefault && e.preventDefault();
            var tpCaption = $(e.target).parents('.vc-controls').parent();
            var slideText = tpCaption.find(".slideText");
            if (tpCaption.parent().hasClass("singleImageText")) {
                var id = tpCaption.parent().parent().parent().attr("data-model-id");
                bitSiteSlideTextInline(tpCaption, slideText, id, 'singleImageText');
            } else {
                var id = tpCaption.parent().attr("id");
                bitSiteSlideTextInline(tpCaption, slideText, id, 'imageText');
            }
        },
        deleteImageText: function (e) {
            e && e.preventDefault && e.preventDefault();
            var tpCaption = $(e.target).parents('.vc-controls').parent();
            if (!tpCaption.hasClass("tp-caption")) {
                return false;
            }
            var jThis = this;
            jConfirm("确认删除这段文字？", function () {
                if (tpCaption.parent().hasClass("singleImageText")) {
                    var imageid = tpCaption.parent().parent().parent().attr("data-model-id");
                    var textIndex = tpCaption.attr("bitslidetextindex");
                    var model = vc.shortcodes.get(imageid);
                    var params = model.get('params');
                    var data = {textIndex: textIndex, action: 'delete', hidetextval: params["hidetextval"]};
                    $j.post("/FeiEditor/siteEdit/setPara", data, function (rs) {
                        params["hidetextval"] = rs;
                        model.save({
                            params: params
                        });
                        updatePage(model, null);
                        tpCaption.parent().find(".tp-caption").each(function () {
                            var index = $j(jThis).attr("bitslidetextindex");
                            if (index > textIndex) {
                                $j(jThis).attr("bitslidetextindex", index - 1).css("z-index", index - 1);
                            }
                        });
                        tpCaption.remove();
                        ajaxAfterSave();
                    });

                } else {
                    var slideText = tpCaption.find(".slideText");
                    var id = tpCaption.parent().parent().attr("id");
                    var textIndex = tpCaption.attr("bitslidetextindex");
                    ajaxBeforeLoading(0, tpCaption.parent());
                    var data = {imageid: id, bitAction: "delete", textIndex: textIndex};
                    $j.post("/FeiEditor/siteEdit/updateText/update_image_text", data, function () {

                        ajaxAfterSave();
                        tpCaption.remove();
                    });
                }

            })

        },
        settingImageText: function (e) {
            e && e.preventDefault && e.preventDefault();
            var tpCaption = $(e.target).parents('.vc-controls').parent();
            vc.edit_slide_block_view.render(null, null, null, tpCaption, "textEdit");
        },
        deleteSlider: function (e) {
            e && e.preventDefault && e.preventDefault();

            var p1 = $(e.target).parents('.vc-controls').parent();
            var p = p1.parent();
            var slideId = p.attr("data-slideid");
            if (!slideId) {
                return false;
            }
            jConfirm("确认是否删除!", function () {
                var sliderId = p.parent().parent().parent().attr("bitdatalocation");
                var sliderObj = eval("iframeWin.revapi" + sliderId);
                sliderObj.revpause();
                //text id
                var textIndex = p1.attr("bitslidetextindex") * 1;
                var data = {slideid: slideId, sliderID: sliderId, bitAction: "delete", textIndex: textIndex};
                var load = p.parent().parent().parent().find(".tp-loader");
                ajaxBeforeLoading(0, iframeWin.jQuery('.rev_slider_wrapper'));
                revAjaxRequest("update_slide_sample", data, function () {
                    p1.remove();
                    ajaxAfterLoading();
                });

            })

        },

        editWidgetMenu: function (e) {
            e && e.preventDefault && e.preventDefault();
            var mid = $(e.target).parents('.vc-controls').parent().attr("id");
            if (!mid) return false;
            vc.edit_menu_block_view.render(false);
            vc.edit_menu_block_view.setTitle("设置菜单");
            ajaxGetWidgetMenu(mid);
        },

        editWidgetInLine: function (e) {
            e && e.preventDefault && e.preventDefault();
            var cont = $(e.target).parents('.vc-controls');
            var obj = cont.parent().find(".ckeditorInLine");
            cont.hide();
            var wid = obj.attr("wid");
            if (!wid) return false;
            if (cont.parent().find(".qfy_no_editor.pname,.qfy_no_editor.pdate").length > 0) {
                top.jQuery(".editOnePage").click();
                return;
            }
            if (cont.parent().find(".qfy_no_editor").length > 0) {
                jAlert("对不起，此文本区域中含有动态参数，不支持所见即所得的编辑方式。如果需要更改内容，请点击设置 > HTML修改代码。");
                return;
            }
            editWidgetInLine(obj, wid);
        },
        deleteWidget: function (e) {
            e && e.preventDefault && e.preventDefault();
            var p = $(e.target).parents('.vc-controls').parent();
            var id = p.attr("id");
            if (!id) return false;

            ajaxDeleteWidget(id);
        },
        bit_hidden_menu: function (e) {
            e && e.preventDefault && e.preventDefault();
            var obj = $(e.target).parents('.vc-controls').parent().parent().parent().parent();
            obj.hide();
            setTimeout(function () {
                obj.show()
            }, 10000);

        },
        bit_hidden_header: function (e) {
            e && e.preventDefault && e.preventDefault();
            var obj = $(e.target).parents('header#header');
            obj.hide();
            setTimeout(function () {
                obj.show()
            }, 10000);

        },
        hidden_bottombar: function (e) {
            e && e.preventDefault && e.preventDefault();
            var obj = $(e.target).closest('#bottom-bar');
            obj.hide();
            setTimeout(function () {
                obj.show()
            }, 10000);
        },
        editMenu: function (e) {
            e && e.preventDefault && e.preventDefault();
            var id = $(e.target).parents('.vc-controls').parent().attr("bitDataLocation");
            if (!id) return false;
            vc.edit_menu_block_view.render(false);
            vc.edit_menu_block_view.setTitle("编辑菜单");
            loadingAjax($j("#vc-menu-panel .panel-body"));
            $j("[data-action='pre']").hide();
            $j("[data-action='next']").hide();
            $j(".stepButton").hide();
            $j(".nomarlButton").show();
            menuEdit(id, "edit");
        },
        setMenu: function (e) {
            e && e.preventDefault && e.preventDefault();
            var id = $(e.target).parents('.vc-controls').parent().attr("bitDataLocation");
            if (!id) return false;
            vc.edit_menu_block_view.render(false);
            vc.edit_menu_block_view.setTitle("新增菜单");
            loadingAjax($j("#vc-menu-panel .panel-body"));
            $j("[data-action='pre']").hide();
            $j("[data-action='next']").hide();
            $j(".stepButton").hide();
            $j(".nomarlButton").show();
            menuEdit(id, "add");
        },
        //add by yliu for set menu font
        setMenuFont: function (e) {
            e && e.preventDefault && e.preventDefault();
            var id = $(e.target).parents('.vc-controls').parent().attr("id");
            if (!id) return false;
            vc.set_menu_font_block_view.render(false);
            loadingAjax($j("#vc-menu-panel .panel-body"));
            setMenuFont(id);
        },
        //add by yliu
        editSlider: function (e) {
            e && e.preventDefault && e.preventDefault();
            var id = $(e.target).parent().parent().parent().parent().parent().attr("bitDataLocation");
            if (!id) return false;
            vc.edit_slider_block_view.render(false);
            //FIXME test code
            $("#vc-slider-panel .panel-body").html('<span class="vc-spinner"></span>');
            var $url = window.location.href.split('?')[0].replace('edit.php', 'admin.php') + '?page=revslider&view=edit_slides&id=' + id + '&noheader&nofooter';
            $("#vc-slider-panel .panel-body").append('<iframe name="slider_iframe" src="' + $url + '" frameborder="no" border="0" marginwidth="0" marginheight="0"  width="100%" height="350" allowtransparency="yes" ></iframe>');

        },
        editSliderText: function (e) {
            e && e.preventDefault && e.preventDefault();
            var p1 = $(e.target).closest(".tp-caption");
            var p = p1.parent();
            var id = p.attr("data-slideid");
            var s = p1.find(".slideText:first");
            if (!id) return false;
            var hiddentext = p1.attr("hiddentext");
            s.html(base64_decode(hiddentext));
            bitSiteSlideTextInline(p, s, id);

        },
        addTextBlock: function (e) {
            e && e.preventDefault && e.preventDefault();
            vc.ShortcodesBuilder
                .create({shortcode: 'vc_row'})
                .create({shortcode: 'vc_column', parent_id: vc.ShortcodesBuilder.lastID(), params: {width: '1/1'}})
                .create({
                    shortcode: 'vc_column_text',
                    parent_id: vc.ShortcodesBuilder.lastID(),
                    params: vc.getDefaults('vc_column_text')
                })
                .render();
            vc.edit_element_block_view.render(vc.ShortcodesBuilder.last());
        },
        scrollTo: function (model) {
            vc.frame_window.vc_iframe.scrollTo(model.get('id'));
        }
    });
    vc.View = Backbone.View.extend({
        el: $('body'),
        mode: 'view',
        current_size: '100%',
        events: {
            'click #vc-add-new-row': 'createRow',
            'click #vc-add-new-element': 'addElement',
            'click #vc-post-settings-button': 'editSettings',
            // 'click .vc-mode-control': 'switchMode',
            'click #vc-templates-editor-button': 'openTemplatesEditor',
            'click #vc-guides-toggle-button': 'toggleMode',
            'click #vc-button-cancel': 'cancel',
            'click #vc-button-edit-admin': 'cancel',
            'click #vc-button-update': 'save',
            'click #vc-button-save-draft, #vc-button-save-as-pending': 'save',
            'click .vc-screen-width': 'resizeFrame',
            'click [data-template_id]': 'loadTemplate',
            'click .vc-edit-cloned': 'editCloned'
        },
        cancelDrag: function (e) {

        },
        initialize: function () {
            _.bindAll(this, 'saveRowOrder', 'saveElementOrder', 'saveColumnOrder', 'resizeWindow');
            // vc.shortcodes.bind('add', this.addShortcode, this);
            // vc.shortcodes.bind('reset', this.addAll, this);
        },
        render: function () {
            vc.$page = $(vc.$frame.get(0).contentWindow.document).find('#vc-inline-anchor').parent();
            vc.$frame_body = $(vc.$frame.get(0).contentWindow.document).find('body').addClass('vc-editor');
            vc.title = $('#vc-title-saved').val();

            this.setMode('compose');
            this.$size_control = $('#vc-screen-size-control');
            $(".vc-element-container", vc.frame_window.document).droppable({accept: ".vc_element_button"});
            $(window).resize(this.resizeWindow);
            /*
      $('.vc_element_button').draggable({
        // iframeFix: true,
        helper: 'clone',
        revert: true,
        cursor:"move",
        start: function(event, ui) {
          vc.frame_window.vc_iframe.initDroppable();
        },
        stop: function(event, ui) {
          vc.frame_window.vc_iframe.killDroppable();
        }
        // connectToSortable: vc.frame_window.jQuery('.vc-element-container')
      });
      */
            // vc.shortcodes.fetch({reset: true});
            /*
      if(getCookie('vc_inline_mode')) {
        var mode = getCookie('vc_inline_mode');
        this.$el.find('.vc-mode-control').removeClass('active');
        this.$el.find('.vc-mode-control[data-mode=' + mode +']').addClass('active');
        this.setMode(mode);
      } else {
        this.$el.find('.vc-mode-control[data-mode=' + this.mode +']').addClass('active');
      }
      */
            return this;
        },
        cancel: function (e) {
            _.isObject(e) && e.preventDefault();
            window.location.href = $(e.currentTarget).data('url');
        },
        save: function (e) {
            _.isObject(e) && e.preventDefault();
            vc.ShortcodesBuilder.save($(e.currentTarget).data('changeStatus'));
        },
        resizeFrame: function (e) {
            var $control = $(e.currentTarget), current;
            e.preventDefault();
            if ($control.hasClass('active')) return false;
            this.$size_control.find('.active').removeClass('active');
            $('#vc-screen-size-current').attr('class', 'icon ' + $control.attr('class'));
            this.current_size = $control.data('size');
            $control.addClass('active');
            vc.setFrameSize(this.current_size);
        },
        editCloned: function (e) {
            e && e.preventDefault();
            var $control = $(e.currentTarget),
                model_id = $control.data('modelId'),
                model = vc.shortcodes.get(model_id);

            vc.edit_element_block_view.render(model);
        },
        resizeWindow: function () {
            //vc.setFrameSize(this.current_size);
            var height = $(window).height();
            if (top.jQuery("#site-content-iframe").length == 1) {
                height = top.jQuery("#site-content-iframe").height();
            }
            vc.$frame.height(height);
        },
        switchMode: function (e) {
            var $control = $(e.currentTarget);
            e && e.preventDefault();
            this.setMode($control.data('mode'));
            // setCookie('vc_inline_mode', this.mode);
            $control.siblings('.active').removeClass('active');
            $control.addClass('active');
        },
        toggleMode: function (e) {
            var $control = $(e.currentTarget);
            e && e.preventDefault();
            if (this.mode === 'compose') {
                $control.addClass('vc-off').text(window.i18nLocale.guides_off);
                this.setMode('view');
            } else {
                $control.removeClass('vc-off').text(window.i18nLocale.guides_on);
                this.setMode('compose');
            }
        },
        setMode: function (mode) {
            var $body = $('body').removeClass(this.mode + '-mode');
            vc.$frame_body.removeClass(this.mode + '-mode');
            this.mode = mode;
            $body.addClass(this.mode + '-mode');
            vc.$frame_body.addClass(this.mode + '-mode');
        },
        placeElement: function ($view, activity) {

            var $place_after = vc.$page.find('> .vc-place-after');
            if (vc.$page.find('> .vc-place-after').length) {
                $view.insertAfter(vc.$page.find('> .vc-place-after').removeClass('vc-place-after'));
                if (vc.group)
                    $view.addClass("vc-place-after");
            } else if (_.isString(activity) && activity === 'prepend') {
                $view.prependTo(vc.$page);
                if (vc.group)
                    $view.addClass("vc-place-after");
            } else {
                $view.insertBefore(vc.$page.find('#vc-no-content-helper'));
            }
        },
        addShortcodes: function (models) {
            _.each(models, function (model) {
                this.addShortcode(model);
                this.addShortcodes(vc.shortcodes.where({parent_id: model.get('id')}));
            }, this);
        },
        createShortcodeHtml: function (model) {
            var $template = $('#vc-template-' + model.get('shortcode')),
                template = $template.length ? $template.html() : '<div class="vc-block"></div>';
            return $($.trim(_.template(template, model.toJSON(), vc.template_options)));
        },
        addAll: function (models) {
            this.addShortcodes(models.where({parent_id: false}));
        },
        createRow: function (e) {
            _.isObject(e) && e.preventDefault();
            // e.stopPropagation();
            vc.ShortcodesBuilder
                .create({shortcode: 'vc_row'})
                .create({shortcode: 'vc_column', parent_id: vc.ShortcodesBuilder.lastID(), params: {width: '1/1'}})
                .render();
        },
        addElement: function (e) {
            e && e.preventDefault();
            vc.add_element_block_view.render(false);
        },
        editSettings: function (e) {
            e && e.preventDefault();
            vc.post_settings_view.render().show();
        },
        openTemplatesEditor: function (e) {
            e && e.preventDefault && e.preventDefault();
            vc.templates_editor_view.render().show();
        },
        setFrameSize: function () {
            vc.setFrameSize();
        },
        dropButton: function () {
        },
        saveRowOrder: function (save) {
            _.defer(function (app) {

                var $rows = vc.$page.find('> [data-tag=vc_row]');
                $rows.each(function (key, value) {
                    var $this = $(this);
                    if ($this.is('.droppable')) {
                        $this.remove();
                        if (key === 0) {
                            vc.activity = 'prepend';
                        } else if (key + 1 != $rows.length) {
                            vc.$page.find('> [data-tag=vc_row]:eq(' + (key - 1) + ')').addClass('vc-place-after')
                        }
                        vc.ShortcodesBuilder
                            .create({shortcode: 'vc_row', order: key})
                            .create({
                                shortcode: 'vc_column',
                                parent_id: vc.ShortcodesBuilder.lastID(),
                                params: {width: '1/1'}
                            })
                            .render();
                    } else {
                        vc.shortcodes.get($this.data('modelId')).save({'order': key}, {silent: true});
                    }

                });


                if (save == true) {
                    setTimeout(function () {
                        vc.ShortcodesBuilder.save(true);
                    }, 200);
                }


            }, this);
        },
        saveElementOrder: function (event, ui) {
            _.defer(function (app, e, ui) {
                if (_.isNull(ui.sender)) {
                    var $column = ui.item.parent(),
                        $elements = $column.find('> [data-model-id]');
                    $column.find('> [data-model-id]').each(function (key, value) {
                        var $element = $(this),
                            model, prev_parent, current_parent;
                        if ($element.is('.droppable')) {
                            current_parent = vc.shortcodes.get($column.parents('.vc-element:first').data('modelId'));
                            $element.remove();
                            if (key === 0) {
                                vc.activity = 'prepend';
                            } else if (key + 1 != $elements.length) {
                                $column.find('> [data-tag]:eq(' + (key - 1) + ')').addClass('vc-place-after');
                            }
                            if (current_parent) vc.add_element_block_view.render(current_parent);
                        } else {
                            model = vc.shortcodes.get($element.data('modelId'));
                            prev_parent = model.get('parent_id');
                            current_parent = $column.parents('.vc-element:first').data('modelId');
                            model.save({order: key, parent_id: current_parent}, {silent: true});

                            if (prev_parent !== current_parent) {
                                vc.ShortcodesBuilder.notifyParent(current_parent);
                                vc.ShortcodesBuilder.notifyParent(prev_parent);
                            }
                        }

                    });
                }
            }, this, event, ui);
        },
        saveColumnOrder: function (event, ui) {
            _.defer(function (app, e, ui) {
                var row = ui.item.parent();
                row.find('> [data-model-id]').each(function () {
                    var $element = $(this),
                        index = $element.index();
                    vc.shortcodes.get($element.data('modelId')).save({order: index});
                });
            }, this, event, ui);
        },

    });
})(window.jQuery);;

/* vc_inline_custom_view_js: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-content/plugins/qfy_editor/inline/assets/js/lib/custom_views.js) */
/* =========================================================
 * custom_views.js v1.1
 * =========================================================
 * Copyright 2013 QFEditor
 *
 * Visual composer ViewModel objects for shortcodes with custom
 * functionality.
 * ========================================================= */

  if (!Math.floor10) {
	  
  function decimalAdjust(type, value, exp) {
	    // If the exp is undefined or zero...
	    if (typeof exp === 'undefined' || +exp === 0) {
	      return Math[type](value);
	    }
	    value = +value;
	    exp = +exp;
	    // If the value is not a number or the exp is not an integer...
	    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
	      return NaN;
	    }
	    // Shift
	    value = value.toString().split('e');
	    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
	    // Shift back
	    value = value.toString().split('e');
	    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
   }
	  
    Math.floor10 = function(value, exp) {
      return decimalAdjust('floor', value, exp);
    };
}
  
(function ($) {
  if(_.isUndefined(window.vc)) window.vc = {};
  // Custom vc_column shortcode
  window.InlineShortcodeViewContainer = window.InlineShortcodeView.extend({
    controls_selector: '#vc-controls-template-container',
    events: {
      'click > .vc-controls .element .control-btn-delete': 'destroy',
      'click > .vc-controls .element .control-btn-edit': 'edit',
      'click > .vc-controls .element .control-btn-clone': 'clone',
      'click > .vc-controls .element .control-btn-prepend': 'prependElement_slider',
	  'click .btnContinsetting.vc-controls': 'btnContinsetting',
	  'click .btnsetting.vc-controls': 'btnsetting',
	
	  'click > .vc-controls .element .control-btn-inner': 'on_inner_element',
	  'click > .vc-controls .element .control-btn-outner': 'off_inner_element',
	  'mousedown > .vc-controls .element .control-btn-stylecopy': 'stylecopy_mousedown',
	  'mouseup > .vc-controls .element .control-btn-stylecopy': 'stylecopy_mouseup',
		   
      'click > .vc-controls .control-btn-append': 'appendElement',
      'click > .vc-empty-element >.column_inner .column_containter': 'appendElement',
	  
	   'click > .vc-empty-element.vc-contentarea': 'prependElement_slider_add',

      'mouseenter': 'resetActive',
      'mouseleave': 'holdActive',
    },
	stylecopy_mouseover:function(e){
		var tag =  this.model.get('shortcode');
		var id =  this.model.get('id');
		var stag_tmp = top.getCookie("shortcode_tmpstyle");
		if(stag_tmp){
			var stag = stag_tmp.split("|^|")[0];
			var sid = stag_tmp.split("|^|")[1];
		}
		if(!stag || (stag && ( !this.isliketag(tag,stag) || sid==id)) ){
			iframeWin.jQuery("[data-model-id='"+id+"']>.vc-controls .stylecopy:first").removeClass("hascopy");
		}else{
			iframeWin.jQuery("[data-model-id='"+id+"']>.vc-controls .stylecopy:first").addClass("hascopy");
			
		}
		
	},
    hold_active: false,
	first:true,
    initialize: function(params) {
	
      _.bindAll(this, 'holdActive');
      window.InlineShortcodeViewContainer.__super__.initialize.call(this, params);
	  
	 
	  var pid=this.model.get('parent_id');
	  if(pid!=false){
			this.parent_model = vc.shortcodes.get(pid);
			this.parent_view = this.parent_model.view;
	  }
	  this.$el.find(".bitPcontrolsChild").hide();


    },
	btnsetting:function(e){
		_.isObject(e) && e.preventDefault() && e.stopPropagation();
	    vc.closeActivePanel();
		vc.edit_element_block_view.render(this.model,false,false,3);
		
	},
	btnContinsetting:function(e){
		_.isObject(e) && e.preventDefault() && e.stopPropagation();
	    vc.closeActivePanel();
		vc.edit_element_block_view.render(this.model,false,false,2);
	},
	off_inner_element:function(e){
		_.isObject(e) && e.preventDefault() && e.stopPropagation();
		this.$el.closest(".vc-slidercontent,.vc-tabcontent,.vc-accordioncontent").removeClass("qfy_inner_setting");
		this.$el.closest(".vc-vc_row").removeClass("qfy_inner_setting_parent");
		this.$el.closest("body").removeClass("qfyinnersetting");
		$(e.currentTarget).closest(".element").find(".control-btn-inner").show();
		$(e.currentTarget).closest(".element").find(".control-btn-outner").hide();
	},
	on_inner_element:function(e){
		 _.isObject(e) && e.preventDefault() && e.stopPropagation();
		var tag = this.model.get('shortcode');
		$(e.currentTarget).closest(".element").find(".control-btn-inner").hide();
		$(e.currentTarget).closest(".element").find(".control-btn-outner").show();
		
	
		if(tag=="slidercontent"){
			if(!this.$el.closest(".vc-slidercontent").hasClass("qfy_inner_setting")){
				this.$el.closest(".vc-slidercontent").addClass("qfy_inner_setting");
				this.$el.closest("body").addClass("qfyinnersetting");
				this.$el.closest(".vc-vc_row").addClass("qfy_inner_setting_parent");
				this.$el.closest(".vc-slidercontent").find(".vc-vc_row_embad:visible").mouseenter();
			}else{
				this.$el.closest(".vc-slidercontent").removeClass("qfy_inner_setting");
				this.$el.closest("body").removeClass("qfyinnersetting");
				this.$el.closest(".vc-vc_row").removeClass("qfy_inner_setting_parent");
				this.$el.closest(".vc-slidercontent").find(".vc-vc_row_embad:visible").mouseout();
			}
		}else if(tag=="tabcontent"){
			if(!this.$el.closest(".vc-tabcontent").hasClass("qfy_inner_setting")){
				this.$el.closest(".vc-tabcontent").addClass("qfy_inner_setting");
				this.$el.closest("body").addClass("qfyinnersetting");
				this.$el.closest(".vc-vc_row").addClass("qfy_inner_setting_parent");
				this.$el.closest(".vc-tabcontent").find(".vc-vc_row_embad:visible").mouseenter();
			}else{
				this.$el.closest(".vc-tabcontent").removeClass("qfy_inner_setting");
				this.$el.closest("body").removeClass("qfyinnersetting");
				this.$el.closest(".vc-vc_row").removeClass("qfy_inner_setting_parent");
				this.$el.closest(".vc-tabcontent").find(".vc-vc_row_embad:visible").mouseout();
			}
		}else if(tag=="accordioncontent"){
			if(!this.$el.closest(".vc-accordioncontent").hasClass("qfy_inner_setting")){
				this.$el.closest(".vc-accordioncontent").addClass("qfy_inner_setting");
				this.$el.closest("body").addClass("qfyinnersetting");
				this.$el.closest(".vc-vc_row").addClass("qfy_inner_setting_parent");
				this.$el.closest(".vc-accordioncontent").find(".vc-vc_row_embad:visible").mouseenter();
			}else{
				this.$el.closest(".vc-accordioncontent").removeClass("qfy_inner_setting");
				this.$el.closest("body").removeClass("qfyinnersetting");
				this.$el.closest(".vc-vc_row").removeClass("qfy_inner_setting_parent");
				this.$el.closest(".vc-accordioncontent").find(".vc-vc_row_embad:visible").mouseout();
			}
		}
		return false;
	},
    resetActive: function(e) {
		this.addControls_onhover();
		this.stylecopy_mouseover(e);
      	var tag = this.model.get('shortcode');
		if(this.$el.closest('.section-special').length>0){
			return;
		}
      	if(tag=="vc_column" || ((tag=="vc_column_inner" || tag=="vc_column_embad") && vc.frame_window.jQuery('body').hasClass('qfyinnersetting')) ){
      		
			if(!vc.frame_window.jQuery('body').hasClass('vc-column-dragging') && !vc.frame_window.jQuery('body').hasClass('doing') ){
				var obj= this.$el;
				var pthis = this;
				var column_inner = this.$el.find('.column_inner:first');
				var pid=this.model.get('parent_id');
				var parent_row = vc.shortcodes.get(pid);
				

				var paddingleft = column_inner.css("padding-left");
				var paddingright = column_inner.css("padding-right");
				var paddingtop = column_inner.css("padding-top").replace("px","");
				var w = column_inner.css("width").replace("px","");
				var h =  column_inner.css("height").replace("px","");
				var control = column_inner.parent().find(">.vc-resize-controls_container");
				var control_top = column_inner.parent().find(">.vc-resize-controls_container.top");
				var control_bottom = column_inner.parent().find(">.vc-resize-controls_container.bottom");
				if(parent_row){
					var p = parent_row.view.$el.find(">section:first");
					if(p){
						var p_p = p.css("padding-top").replace("px","");
						var p_h = p.css("height").replace("px","");
					}
				}
				
				/*var old_h =  column_inner.parent().css("height").replace("px","");
				
				if(p_h-old_h>20){
					control_bottom.find(".vc-resize-controls_inner").css("top","0px");
				}
				var t = 20-p_p>0?20-p_p:0;
				if(t==0 && column_inner.parent().hasClass("fixheight")){
					t=10;
				}
				
				control_top.find(".vc-resize-controls_inner").css("top",(t+paddingtop*1)+"px");
				if(tag=="vc_column_embad"){
					control_top.find(".vc-resize-controls_inner").css("top",(t+paddingtop*1+10)+"px");	
				}*/
				if(w<20){
					control.addClass("displaynone");
				}else if(w<200 || h<60){
					control.removeClass("displaynone");
					control.addClass("small");
				}else{
					control.removeClass("displaynone");
					control.removeClass("small");
				}
				column_inner.find(".vc-controls").each(function(){
					var p  = $(this).closest(".column_inner");
					var ww = p.css("width").replace("px","");
					if(ww<100){
						$(this).addClass("small");
					}else{
						$(this).removeClass("small");
					}
					
				})
				
				control.css("padding-left",paddingleft).css("padding-right",paddingright);
				//control.show();
			}
			
			/*if(column_inner){
				if(vc.frame_window.jQuery('body').hasClass('qfyinnersetting')){
					if(tag!="vc_column"){
						column_inner.find(">.qfy-tooler.columnleftline,>.qfy-tooler.columnrightline").css("display","block");
					}else{
						column_inner.find(">.qfy-tooler.columnleftline,>.qfy-tooler.columnrightline").hide();
					}
				}else{
					if(tag=="vc_column"){
						column_inner.find(">.qfy-tooler.columnleftline,>.qfy-tooler.columnrightline").css("display","block");
					}else{
						column_inner.find(">.qfy-tooler.columnleftline,>.qfy-tooler.columnrightline").hide();
					}
				}
			}*/
      	}
    	/*var isHasModel=$("body").hasClass("compose-mode");
	    if( this.$el.find(".cke_editable_inline").length==0&&isHasModel)
	    {
	    	this.$el.find('.vc-element').css("outline","1px dashed rgba(125, 125, 125, 0.4)");
	
	    }*/
		
		this.$el.find('.vc-controls .controls-cc').removeAttr("style");
		

		qfy_product_style_set(this.$el);

		if(tag=="slidercontent" ){
			//if(this.$el.find('.rsSlide').length==0){
			//	this.$el.append('<div class="rswarntext" style="position: absolute;  width:100%; top: 20px; z-index: 4; margin:0 auto; text-align: center; padding: 2px;color:#666;">可以通过左上角控制条来管理你的轮播内容，也可以直接点击下方新增按钮</div>');
			//}else{
			//	this.$el.find(".rswarntext").remove();
			//}
		}else if(tag=="tabcontent"){
			
			if(this.$el.find('.tabcontent-outner .btnsetting').length==0){
				this.$el.find('.tabcontent-outner li.item:first').append('<div class="btnsetting vc-controls" style="position: absolute; font-size: 12px ! important; left:50%;top:50%;margin-top:-9px;cursor:pointer;background: #84c137; color:#fff; opacity: 1; visibility: visible;padding:2px 0px;">设置按钮</div>');
				
			}
			if(this.$el.find('.tabcontent-inner .btnContinsetting').length==0){
				this.$el.find('.tabcontent-inner').append('<div class="btnContinsetting vc-controls" style="position: absolute; font-size: 12px ! important; left:50%;margin-left:-30px; bottom:0px;cursor:pointer;background: #84c137; color:#fff; opacity: 1; visibility: visible;padding:2px 4px;">设置按钮栏</div>');
			}
			this.$el.find(".btnsetting.vc-controls").show();
			this.$el.find(".btnContinsetting.vc-controls").show();
		}
		if( (tag=="slidercontent"  ) && this.$el.find('.vc-element-height').length==0){

			this.$el.append('<div class="vc-element-height vc-controls" style="position: absolute; font-size: 12px ! important; left: 10px; bottom: 20px; z-index: 4; cursor: s-resize; background: rgb(241, 161, 14) none repeat scroll 0% 0%; color: rgb(255, 255, 255);  text-align: center; padding: 2px; height: 20px; width: 80px;">拖动调整高度</div>');
			var id=this.model.get('id');
			var old_r = 0;
			var old_height = 0;
			var $this = this.$el;
			var model = this.model;
			var params = this.model.get('params');
			vc.frame_window.jQuery("[data-model-id='"+id+"'] .vc-element-height").draggable({axis: "y",
						helper: function() {
						return $j("<div></div>");
					},
					start: function( event, ui ) { 
						old_height = $this.find(".vc-contentarea").css("height").replace("px","");
						old_r = ui.position.top;
					},
					stop: function( event, ui ) {
						var height = $this.find(".vc-contentarea").css("min-height").replace("px","");
						params.height = height;
						ajaxBeforeLoading(model.get('parent_id'));	
						model.save({params: params});
						vc.ShortcodesBuilder.update(model);
						vc.ShortcodesBuilder.save();
					},
					drag: function( event, ui ) {
						var now = old_height*1 + (   ui.position.top - old_r*1 )*1 ;
						$this.find(".vc-contentarea").css("min-height",now+"px").css("height",now+"px");
						$this.find(".vc-contentarea section.section").css("min-height",now+"px").css("height",now+"px");
					}
				})
		}


        //this.hold_active && window.clearTimeout(this.hold_active);

    },
    holdActive: function(e) {
		this.stylecopy_mouseover(e);
    	//this.$el.find('.vc-element').css("outline","0");
		if(!vc.frame_window.jQuery('body').hasClass('vc-column-dragging') && !vc.frame_window.jQuery('body').hasClass('doing')  ){
				//this.$el.find("> div >.vc-resize-controls_container").hide();
				//this.$el.find(".column_inner:first>.qfy-tooler.columnleftline,.column_inner:first>.qfy-tooler.columnrightline").hide();
		}			
		this.$el.find(".btnsetting.vc-controls").hide();
		this.$el.find(".btnContinsetting.vc-controls").hide();
    },

    content: function() {
      if(this.$content === false) {
        this.$content = this.$el.find('.vc-container-anchor:first').parent();
        this.$el.find('.vc-container-anchor:first').remove();
      }
      return this.$content;
    },
    render: function() {
      window.InlineShortcodeViewContainer.__super__.render.call(this);
      this.content().addClass('vc-element-container');
      this.$el.addClass('vc-container');
      return this;
    },
    changed: function() {
    	if(this.$el.find('div.vc-element').length == 0){
			this.$el.addClass('vc-empty').find('> :first').addClass('vc-empty-element');
		}else{
			this.$el.removeClass('vc-empty').find('> div.vc-empty-element').removeClass('vc-empty-element');
		}
    },
	prependElement_slider_add: function(e) {
      _.isObject(e) && e.preventDefault() && e.stopPropagation();
	  if(this.model.view.$el.find("section").length==0){
		vc.add_element_block_view1.render(this.model, false);
	  }

    },
	prependElement_slider: function(e) {
      _.isObject(e) && e.preventDefault() && e.stopPropagation();
		vc.add_element_block_view1.render(this.model, false);
    },
    prependElement: function(e) {
      _.isObject(e) && e.preventDefault();
      this.prepend = true;
	
      var tag = this.model.get('shortcode');
	  if(tag=="slidercontent"||tag=="tabcontent"||tag=="accordioncontent"){
		  var id = this.model.get("id");
		 vc.ShortcodesBuilder.create({shortcode: 'vc_row_embad',parent_id:id}).create({shortcode: 'vc_column_embad', parent_id: vc.ShortcodesBuilder.lastID(), params: {width: '1/1'}});
	
		 id = vc.ShortcodesBuilder.lastID();
		 var model = vc.shortcodes.get(id);
		 vc.add_element_block_view.after = true;
		 vc.add_element_block_view.render(model, false,"single","first");
		return false;
	  }
	  vc.add_element_block_view.after = true;
	  if(tag=="vc_column_inner" || tag=="vc_column_embad"){
		vc.add_element_block_view.render(this.model, true,"single","first");
	  }else{
	    vc.add_element_block_view.render(this.model, true,"show","first");
	  }
    },
    appendElement: function(e) {
      _.isObject(e) && e.preventDefault();
	 
	  var tag = this.model.get('shortcode');
	  if(this.$el.closest(".section-special").length>0){
		vc.add_element_block_view.render(this.model,null,"special");
		return;
	  }

	  if(tag=="vc_column_inner"|| tag=="vc_column_embad"){
		vc.add_element_block_view.render(this.model,null,"hide");
	  }else{
	  	vc.add_element_block_view.render(this.model,null,"show");
	  }
    },
	appendSingleElement:function(e){
		_.isObject(e) && e.preventDefault();
	   var tag = this.model.get('shortcode');
	   var ct = $(e.currentTarget).closest(".vc-element");
	   var id = ct.attr("data-model-id");
	   var tag = ct.attr("data-tag");
	  if(tag!="vc_column_embad"){
		 vc.ShortcodesBuilder
        .create({shortcode: 'vc_row_embad',parent_id:id})
        .create({shortcode: 'vc_column_embad', parent_id: vc.ShortcodesBuilder.lastID(), params: {width: '1/1'}});
		 id = vc.ShortcodesBuilder.lastID();
		
	  }
	  var model = vc.shortcodes.get(id);
	  vc.add_element_block_view.render(model,null,"single");
	
	},
	addControls_changeposition:function(){
		var now = this.$el;
		var p = now.parent();
		if(p.find(">.vc-element").length>1 ){
			var sumwidth = 0;
			var first = true;
			p.find(">.vc-element").each(function(i){
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
		
	},
	addControls_onhover:function(){
		if(this.$el.find('> div >.qfy-tooler.vc-resize-controls_container').length>0){
			return this;
		}
		$this = this;
		var tag = this.model.get('shortcode');
		var model_id = this.model.get('id');
		var model = this.model;
		if(tag=="vc_column" || tag=="vc_column_inner" || tag=="vc_column_embad"){
			

			this.column_inner = this.$el.find('> div >.column_inner');
			this.column_inner_parent = this.column_inner.parent();
			var paddingleft = this.column_inner.css("padding-left");
			var paddingright = this.column_inner.css("padding-right");
			this.$controls = $('<div class="vc-resize-linebar"><div class="line"></div><div class="drag-element" title="上下拖动" ></div><div class="drag-element-value"></div><div class="add-element"></div><div class="set" title="设置"></div><div class="drag-element-right" title="上下拖动" ></div><div class="drag-element-right-value"></div></div>');
			this.$controls_x_left = $('<div class="vc-resize-x-left-bar" title="左右拖动" ></div><div class="vc-resize-x-v"></div>');
			this.$controls_x_right = $('<div class="vc-resize-x-right-bar" title="左右拖动" ></div><div class="vc-resize-x-r-v"></div>');
			this.$controls_container = $('<div class="qfy-tooler vc-resize-controls_container vc-resize-column-bar bottom" style="padding-left:'+paddingleft+';padding-right:'+paddingright+';" ><div class="vc-resize-controls_inner" ></div></div>');
			this.$controls_container.appendTo(this.column_inner_parent);
			this.$controls_container_inner = this.$controls_container.find(".vc-resize-controls_inner");
			this.$controls.appendTo(this.$controls_container_inner);
			this.$controls_x_left.appendTo(this.$controls_container_inner);
			this.$controls_x_right.appendTo(this.$controls_container_inner);

			//this.$controls.find(".drag-element,.drag-element-right").unbind().mousedown(this.startChangePBottom);
			
			 var startPBottom = 0;
			   var startPBottomposition = 0;
			   iframeWin.jQuery("[data-model-id='"+model_id+"'] >div>.vc-resize-controls_container.bottom").unbind().draggable({
					axis: "y",
					handle: ".drag-element,.drag-element-right",
					helper: function() {
						return jQuery("<div></div>");
					},
					start: function(event, ui) {
						 startPBottom = jQuery(this).prev(".column_inner").css("padding-bottom").replace("px","");
						  if(isNaN(startPBottom)) startPBottom = 0;
						  startPBottomposition = ui.position.top;
						
						  jQuery(this).find(".drag-element-value,.drag-element-right-value").show();
						  vc.frame_window.jQuery('body').addClass('vc-column-dragging').disableSelection();
						  guideline_start(event,jQuery(this).closest(".qfy-element"),"content");
					},
					drag: function( event, ui ) {
						var v= ui.position.top*1 -startPBottomposition+startPBottom*1;
						if(v<0) v =0;
						jQuery(this).prev(".column_inner").css("padding-bottom",v+"px");
						jQuery(this).find(".drag-element-value,.drag-element-right-value").html("内下:"+v+"px");
						 guideline_draw(event,jQuery(this),null); 
					},
					stop: function(event, ui) {
							vc.frame_window.jQuery('body').removeClass('vc-column-dragging').enableSelection();
							jQuery(this).find(".drag-element-value,.drag-element-right-value").html("").hide();
							var value = jQuery(this).prev(".column_inner").css("padding-bottom");
							if(value) value = value.replace("px","");
							if(isNaN(value))value = 0;
							ajaxBeforeLoading(model_id);
							var params = model.get('params');
							if(  vc.frame_window.jQuery('body').width()>768 ){
								  params.paddingbottom = value;
							}else{
							      params.mobilepaddingbottom = value;
							}
							model.save({params: params});
							vc.ShortcodesBuilder.update(model);
							vc.ShortcodesBuilder.save();
							guideline_end();
					} 
				});
			
			
			//this.$controls_x_left.unbind().mousedown(this.startChangeLX);
			   var startleft_x = 0;
			   var startleftposition = 0;
			   iframeWin.jQuery("[data-model-id='"+model_id+"'] >div>.vc-resize-controls_container.bottom .vc-resize-x-left-bar").draggable({
					axis: "x",
					helper: function() {
						return jQuery("<div></div>");
					},
					start: function(event, ui) {
						startleft_x = jQuery(this).closest(".vc-resize-controls_container").prev(".column_inner").css("padding-left").replace("px","");
						  if(isNaN(startleft_x)) startleft_x = 0;
						  startleftposition = ui.position.left;
						  jQuery(this).next(".vc-resize-x-v").show();
						  vc.frame_window.jQuery('body').addClass('vc-column-dragging').disableSelection();
						  guideline_start(event,jQuery(this).closest(".qfy-element"));
					},
					drag: function( event, ui ) {
						var v = (ui.position.left*1 -startleftposition+startleft_x*1);
						if(v<0) v =0;
						jQuery(this).closest(".vc-resize-controls_container").siblings().css("padding-left",v+"px");
						jQuery(this).next(".vc-resize-x-v").html("左内:"+v+"px");
						jQuery(this).closest(".vc-resize-controls_container").css("padding-left",v+"px");
						guideline_draw(event,jQuery(this),null);
					},
					stop: function(event, ui) {
							vc.frame_window.jQuery('body').removeClass('vc-column-dragging').enableSelection();
							 jQuery(this).next(".vc-resize-x-v").html("").hide();
							var value = jQuery(this).closest(".vc-resize-controls_container").prev(".column_inner").css("padding-left");
							if(value) value = value.replace("px","");
							if(isNaN(value)) value = 0;
							ajaxBeforeLoading(model_id);
							var params = model.get('params');
							if(  vc.frame_window.jQuery('body').width()>768 ){
								  params.paddingleft = value;
							}else{
							      params.mobilepaddingleft = value;
							}
							model.save({params: params});
							vc.ShortcodesBuilder.update(model);
							vc.ShortcodesBuilder.save();
							guideline_end();
					} 
				});
			//this.$controls_x_right.unbind().mousedown(this.startChangeX);
			   var startright_x = 0;
			   var startrightposition = 0;
			   iframeWin.jQuery("[data-model-id='"+model_id+"'] >div>.vc-resize-controls_container.bottom .vc-resize-x-right-bar").draggable({
					axis: "x",
					helper: function() {
						return jQuery("<div></div>");
					},
					start: function(event, ui) {
						startright_x = jQuery(this).closest(".vc-resize-controls_container").prev(".column_inner").css("padding-right").replace("px","");
						  if(isNaN(startright_x)) startright_x = 0;
						  startrightposition = ui.position.left;
						  jQuery(this).next(".vc-resize-x-r-v").show();
						  vc.frame_window.jQuery('body').addClass('vc-column-dragging').disableSelection();
						  guideline_start(event,jQuery(this).closest(".qfy-element"));
					},
					drag: function( event, ui ) {
						var v = (startrightposition-ui.position.left*1 +startright_x*1);
						if(v<0) v =0;
						jQuery(this).closest(".vc-resize-controls_container").siblings().css("padding-right",v+"px");
						jQuery(this).next(".vc-resize-x-r-v").html("左内:"+v+"px");
						jQuery(this).closest(".vc-resize-controls_container").css("padding-right",v+"px");
						guideline_draw(event,jQuery(this),null);
					},
					stop: function(event, ui) {
							vc.frame_window.jQuery('body').removeClass('vc-column-dragging').enableSelection();
							 jQuery(this).next(".vc-resize-x-v").html("").hide();
							var value = jQuery(this).closest(".vc-resize-controls_container").prev(".column_inner").css("padding-right");
							if(value) value = value.replace("px","");
							if(isNaN(value)) value = 0;
							ajaxBeforeLoading(model_id);
							var params = model.get('params');
							if(  vc.frame_window.jQuery('body').width()>768 ){
								  params.paddingright = value;
							}else{
							      params.mobilepaddingright = value;
							}
							model.save({params: params});
							vc.ShortcodesBuilder.update(model);
							vc.ShortcodesBuilder.save();
							guideline_end();
					} 
				});
			
			
			
			var model = this.model;
			this.$controls.find(".add-element").unbind().click(function(){
				if(tag=="vc_column"){
					 vc.add_element_block_view.after = true;
					 vc.add_element_block_view.render(model,false,"show");
			   }else if(tag=="vc_column_inner"){
					vc.add_element_block_view.after = true;
					vc.add_element_block_view.render(model,false,"single");
			   }else if(tag=="vc_column_embad"){
					vc.add_element_block_view.after = true;
					vc.add_element_block_view.render(model,false,"single");
			   }	   
			});
			//<span class="setbg" title="设置背景"></span>
			this.preview_container =  $('<div class="qfy-tooler vc-resize-controls_container vc-resize-column-bar top" style="padding-left:'+paddingleft+';padding-right:'+paddingright+';"><div class="vc-resize-controls_inner"  ><span class="drag col" title="内上间距"></span><span class="col drag-value"></span><span class="add col" title="新增"></span><div class="btnright_icon"><span class="set" title="设置"></span><span class="stylecopy column_span copytxt" title="提取或应用样式"></span><span class="copy" title="复制"></span><span class="clean" title="清空" ></span><span class="hidetoolbar" title="隐藏工具条10秒" style="margin-right:0;"></span></div><div class="vc-resize-controls vc-resize-linebar"><div class="line"></div></div></div></div>');
			this.preview_container.prependTo(this.column_inner_parent);
			///this.preview_container.find(".drag").unbind().mousedown(this.startChangePaddingTop);
			 var startPTop = 0;
			   var startPTopposition = 0;
			   iframeWin.jQuery("[data-model-id='"+model_id+"'] >div>.vc-resize-controls_container.top").draggable({
					axis: "y",
					handle: ".drag",
					helper: function() {
						return jQuery("<div></div>");
					},
					start: function(event, ui) {
						startPTop = jQuery(this).next(".column_inner").css("padding-top").replace("px","");
						  if(isNaN(startPTop)) startPTop = 0;
						  startPTopposition = ui.position.top;
						
						  jQuery(this).find(".drag-element-value,.drag-element-right-value").show();
						  vc.frame_window.jQuery('body').addClass('vc-column-dragging').disableSelection();
						  guideline_start(event,jQuery(this).closest(".qfy-element"),"content");
					},
					drag: function( event, ui ) {
						var v= ui.position.top*1 -startPTopposition+startPTop*1;
						if(v-ui.position.top<0) v = ui.position.top;
						if(v>=0){
							jQuery(this).next(".column_inner").css("padding-top",v+"px");
							jQuery(this).find(".vc-resize-controls_inner").css("top",ui.position.top+"px"); 
							jQuery(this).find(".drag-value").html("内上:"+v+"px");
							guideline_draw(event,jQuery(this),null); 
						}
					},
					stop: function(event, ui) {
							vc.frame_window.jQuery('body').removeClass('vc-column-dragging').enableSelection();
							jQuery(this).find(".drag-value").html("").hide();
							var value = jQuery(this).next(".column_inner").css("padding-top");
							if(value) value = value.replace("px","");
							if(isNaN(value))value = 0;
							ajaxBeforeLoading(model_id);
							var params = model.get('params');
							if(  vc.frame_window.jQuery('body').width()>768 ){
								  params.paddingtop = value;
							}else{
							      params.mobilepaddingtop = value;
							}
							model.save({params: params});
							vc.ShortcodesBuilder.update(model);
							vc.ShortcodesBuilder.save();
							guideline_end();
					} 
				});
			
			
			var now = this.$el;
			this.column_inner.prepend('<div class="qfy-tooler columnleftline wf-mobile-hidden" title="调整最大宽度" style="border-right: 1px dotted #f1a10e;height: 40px;width:1px;position: absolute;z-index: 5;left:0;top:50%;margin-top:-20px;display:none;"><div class="columnleftlinedrag" style="position: absolute;z-index: 5;top:50%;left:-4px;margin-top:-5px;cursor:w-resize;width:10px;height:10px;background:#f1a10e;"></div><div class="columnleftlinedrag_value" style="position: absolute; z-index: 5; top: 50%; margin-top: -6px; left: 8px; height: 12px; font-size: 12px; line-height: 12px;color:#333;"></div></div><div class="qfy-tooler columnrightline wf-mobile-hidden" title="调整最大宽度" style="border-right: 1px dotted #f1a10e;height: 40px;width:1px;position: absolute;z-index: 5;right:0;top:50%;margin-top:-20px;display:none;"><div class="columnrightlinedrag" style="position: absolute;z-index: 5;top:50%;right:-5px;margin-top:-5px;cursor:w-resize;width:10px;height:10px;background:#f1a10e;"></div><div class="columnrightlinedrag_value" style="position: absolute; z-index: 5; top: 50%; margin-top: -6px; right: 8px; height: 12px; font-size: 12px; line-height: 12px;color:#333;"></div></div>');
			
			this.leftlinedrag =    this.column_inner.find('>.qfy-tooler>.columnleftlinedrag');
			this.rightlinedrag =    this.column_inner.find('>.qfy-tooler>.columnrightlinedrag');
			this.rightlinedrag.unbind().mousedown(this.startChangeX1);
			this.leftlinedrag.unbind().mousedown(this.startChangeX2);

			this.column_inner_parent.prepend('<div class="drag-column-container wf-mobile-hidden qfy-tooler" ><div class="drag-column-layout-warp centerline"><div title="创建新专栏" class="drag-column-layout "></div></div><div class="drag-column-element-left"><div class="drag-column-element-left-value"></div></div></div>');
			this.$controls_c_right = this.column_inner_parent.find(">div>.drag-column-element-left");
			this.$controls_c_right.unbind().mousedown(this.startChangeCX);
			

			this.column_inner_parent.find(">.drag-column-container>.centerline>.drag-column-layout").unbind().click(function(){
				 var p_id = model.get('parent_id');
				 var p_model = vc.shortcodes.get(p_id);
				  var children = vc.shortcodes.where({parent_id: p_id});
				  var length = children.length;
				  if(length==10) length=11;
				  if(length<10){
					  var layout = "";
					  for(var i=0;i<=length;i++){
						  if(i==length){
							  layout +="1"+(length*1+1);
						  }else{
							  layout +="1"+(length*1+1)+"_";
						  }
					  }
					  model.view.$el.addClass("inserthere");
					  columns = p_model.view.convertRowColumns(layout);
				  }else{
					  top.jAlert("最大只支持12分隔布局");
				  }
				
			})
			
			//添加背景设置快捷按钮
		
				var bgimage = this.column_inner.find(">.background-media").css("background-image");
				if(bgimage){
					bgimage = bgimage.replace('url("','');
					bgimage = bgimage.replace('")','');
					if(bgimage.indexOf("http")>-1){
						this.$controls_container.find(">.vc-resize-controls_inner").append('<div class="quick_bg" title="点击快速设置背景" style="background-image:url('+bgimage+')"><span class="title">背景图</span></div>');
						vc.frame_window.jQuery(".quick_bg").draggable();
						this.$controls_container.find(">.vc-resize-controls_inner>.quick_bg").click(function(e){
							_.isObject(e) && e.preventDefault() && e.stopPropagation();
							vc.edit_element_block_view.render(model,false,false,2);
						})
					}
				}
			
			
			this.addControls_changeposition();
			
	}
		
	
	},
    addControls: function() {
    	var $this = this;
		this.$el.on("mouseenter",function(){

			if($this.$el.hasClass("controll-inited")){return;}
			var template = $($this.controls_selector).html();
			var pid=$this.model.get('parent_id');
			if(pid!=false){
				var parent = vc.shortcodes.get(pid);
				data = {
					name: vc.getMapped($this.model.get('shortcode')).name,
					tag: $this.model.get('shortcode'),
					parent_name: vc.getMapped(parent.get('shortcode')).name,
					parent_tag: parent.get('shortcode')
				};
			}else{
				data = {
					name: vc.getMapped($this.model.get('shortcode')).name,
					tag: $this.model.get('shortcode'),
					parent_name: "",
					parent_tag: ""
				};

			}
			$this.$controls = $($.trim(_.template(template, data, vc.template_options))).addClass('vc-controls');
			$this.$controls.appendTo($this.$el);

			$this.$el.addClass("controll-inited");
		});
    },

    multi_edit: function(e) {
      var models = [], parent, children;
      _.isObject(e) && e.preventDefault();
      if(this.model.get('parent_id')) parent = vc.shortcodes.get(this.model.get('parent_id'));
      if(parent) {
        models.push(parent);
        children = vc.shortcodes.where({parent_id: parent.get('id')});
        vc.multi_edit_element_block_view.render(models.concat(children), this.model.get('id'));
      } else {
        vc.edit_element_block_view.render(this.model);
      }
    }
  });
  window.InlineShortcodeViewContainerWithParent = window.InlineShortcodeViewContainer.extend({
    controls_selector: '#vc-controls-template-container-with-parent',
    events: {
      'click > .vc-controls .element .control-btn-delete': 'destroy',
      'click > .vc-controls .element .control-btn-edit': 'edit',
      'click > .vc-controls .element .control-btn-clone': 'clone',
      'click > .vc-controls .parent .control-btn-save': 'saveAsTempate',
	  'click > .vc-controls .parent .control-btn-prepend-1': 'parentElement1',
	  'click > .vc-controls .parent .control-btn-prepend-2': 'parentElement2',
      'click > .vc-controls .parent .control-btn-prepend-3': 'parentElement3',
      'click > .vc-controls .parent .control-btn-prepend-4': 'parentElement4',
      'click > .vc-controls .parent .control-btn-prepend-5': 'parentElement5',
	  'click > .vc-controls .parent .control-btn-prepend-6': 'parentElement6',
	  'click > .vc-controls .parent .control-btn-prepend-7': 'parentElement7',
	  'click > .vc-controls .parent .control-btn-mobile-hidden': 'mobileHidden',

	  'click > .vc-controls .parent .control-btn-getlink': 'getselflink', 
	  'click > .vc-controls .parent .control-btn-hidden': 'hideSetting',

      'click > .vc-controls .element .control-btn-prepend': 'prependElement',
      'click > .vc-controls .control-btn-append': 'appendElement',
      'click > .vc-controls .parent .control-btn-delete': 'destroyParent',
      'click > .vc-controls .parent .control-btn-edit': 'editParent',
      'click > .vc-controls .parent .control-btn-clone': 'cloneParent',
      'click > .vc-controls .parent .control-btn-prepend': 'addSibling',
	  'click > div > .qfy-tooler.vc-resize-controls_container.top .add': 'prependElement',
	  'click > div > .qfy-tooler.vc-resize-controls_container.top .copy': 'copyElement',
	  'click > div > .qfy-tooler.vc-resize-controls_container.top .clean': 'cleanElement',
	  'click > div > .qfy-tooler.vc-resize-controls_container.top .setbg': 'setbgElement',
	  'mousedown > div > .qfy-tooler.vc-resize-controls_container.top .stylecopy': 'stylecopy_mousedown',
	  'mouseup > div > .qfy-tooler.vc-resize-controls_container.top .stylecopy': 'stylecopy_mouseup',
	  'click > div > .qfy-tooler.vc-resize-controls_container.top .hidetoolbar': 'hidetoolbarElement',

	  'click > div > .qfy-tooler.vc-resize-controls_container.top .pre': 'preElement',
	  'click > div > .qfy-tooler.vc-resize-controls_container.top .next': 'nextElement',

	  'click > div > .qfy-tooler.vc-resize-controls_container.top .set': 'edit',
	  'click > div > .qfy-tooler.vc-resize-controls_container.bottom .set': 'edit',
      'click > .vc-empty-element >.column_inner .column_containter': 'appendElement',
      'click > .vc-controls .control-btn-switcher': 'switchControls',
      'mouseenter': 'resetActive',
      'mouseleave': 'holdActive'
    },
	stylecopy_mouseover:function(e){
		var tag =  this.model.get('shortcode');
		var id =  this.model.get('id');
		var stag_tmp = top.getCookie("shortcode_tmpstyle");
		if(stag_tmp){
			var stag = stag_tmp.split("|^|")[0];
			var sid = stag_tmp.split("|^|")[1];
		}
		
		if(!stag || (stag && ( !this.isliketag(tag,stag) || sid==id)) ){
			iframeWin.jQuery("[data-model-id='"+id+"'] .stylecopy:first").removeClass("hascopy");
		}else{
			iframeWin.jQuery("[data-model-id='"+id+"'] .stylecopy:first").addClass("hascopy");
			
		}
		
	},
    destroyParent: function(e) {
      e && e.preventDefault();
      this.parent_view.destroy(e);
    },
	setbgElement:function(e){
		_.isObject(e) && e.preventDefault() && e.stopPropagation();
		vc.closeActivePanel();
		vc.edit_element_block_view.render(this.model,false,false,2);
			/*
		var $now = $(e.currentTarget);
		var vcelement = $now.closest(".vc-element");
		var id =vcelement.attr("data-model-id");
		var model = vc.shortcodes.get(id);
		if(model){
			vc.closeActivePanel();
			vc.edit_element_block_view.render(model,false,false,2);
		}*/
	},
	copyElement:function(e){
	  e && e.preventDefault();
	  //var shortcode = this.model.get('shortcode');

	  
	  _.each(vc.shortcodes.where({parent_id: this.model.get('id')}), function(model){
        model.set('active_before_cloned', this.active_model_id === model.get('id'));
      }, this);
      window.InlineShortcodeView_vc_tabs.__super__.clone.call(this, e);

	},
	cleanElement:function(e){
		e && e.preventDefault();
		var id = this.model.get('id');
		var model = this.model;
		var sub_models = vc.shortcodes.where({parent_id: model.get('parent_id')});
	
		if(sub_models.length>1){
			top.jConfirm("确认你的操作，清空专栏里的内容还是删除专栏重新布局？");
			top.jQuery(".boxy-wrapper:visible .answers .buttonClass0").remove();
			top.jQuery(".boxy-wrapper:visible .answers").prepend('<input type="button" class="buttonClass0 clear" value="清空内容" style="margin-right:10px;"><input type="button" class="buttonClass0 delete" value="删除专栏">');
			top.jQuery(".boxy-wrapper:visible .delete").click(function(){
				model.destroy();
				var sub_models = vc.shortcodes.where({parent_id: model.get('parent_id')});
				 var length = sub_models.length-1;
				  if(length==11) length=10;
				  if(length<12){
					  var layout = "";
					  for(var i=0;i<=length;i++){
						  if(i==length){
							  layout +="1"+(length*1+1);
						  }else{
							  layout +="1"+(length*1+1)+"_";
						  }
					  }
					  var pp_model = vc.shortcodes.get( model.get('parent_id') );
					  pp_model.view.convertRowColumns(layout);
				  }
				  top.jQuery(".boxy-wrapper:visible .answers .buttonClass1").click();
			})
		}else{
			top.jConfirm("确认你的操作，是否清空专栏里的内容？");
			top.jQuery(".boxy-wrapper:visible .answers .buttonClass0").remove();
			top.jQuery(".boxy-wrapper:visible .answers").prepend('<input type="button" class="buttonClass0 clear" value="清空内容" style="margin-right:10px;">');
		}
		top.jQuery(".boxy-wrapper:visible .clear").click(function(){
			var vc_models = vc.shortcodes.where({parent_id: id});
			_.each(vc_models, function (col_model) {
				col_model.destroy();
			});
			if(model.get('parent_id')===false){
				model.destroy();
			}
			vc.ShortcodesBuilder.save(true);
			top.jQuery(".boxy-wrapper:visible .answers .buttonClass1").click();
		})
		
		
		
	
	},
	hidetoolbarElement:function(e){
		e && e.preventDefault();

		var $control = $(e.currentTarget);
		$control.closest(".qfy-column-inner").find(">.qfy-tooler .vc-resize-controls_inner").hide();
		setTimeout(function(){
			$control.closest(".qfy-column-inner").find(">.qfy-tooler .vc-resize-controls_inner").show();
		},10000);
	},
	preElement:function(e){
		e && e.preventDefault();
		var id = this.model.get('id');
		var now = vc.frame_window.jQuery('.vc-element[data-model-id="'+id+'"]');
		var pre = vc.frame_window.jQuery('.vc-element[data-model-id="'+id+'"]').prev(".vc-element");
		if(pre.length==0) return;
		if(now.find(".qfy-clumn-clear").length>0){
			pre.append(pre.find(".qfy-clumn-clear"));
			now.find(".qfy-clumn-clear").remove();
		}
		now.after(pre);
		
		var row = pre.parent();

		row.find('> [data-model-id]').each(function(){
          var $element = $(this),
              index = $element.index();
          vc.shortcodes.get($element.data('modelId')).save({order: index});
        });
		this.change_column_btn(row);
		vc.ShortcodesBuilder.save();
	},
	nextElement:function(e){
		e && e.preventDefault();
		var id = this.model.get('id');
		var now = vc.frame_window.jQuery('.vc-element[data-model-id="'+id+'"]');
		var pre = vc.frame_window.jQuery('.vc-element[data-model-id="'+id+'"]').next(".vc-element");
		if(pre.length==0) return;
		if(pre.find(".qfy-clumn-clear").length>0){
			now.append(pre.find(".qfy-clumn-clear"));
			pre.find(".qfy-clumn-clear").remove();
		}
		
		now.before(pre);
		
		var row = pre.parent();

		row.find('> [data-model-id]').each(function(){
          var $element = $(this),
              index = $element.index();
          vc.shortcodes.get($element.data('modelId')).save({order: index});
        });
		this.change_column_btn(row);
		vc.ShortcodesBuilder.save();

	
	},
	change_column_btn:function(p){
		var sumwidth = 0;
		var first = true;
		p.find(">.vc-element").each(function(i){
			var dw = $(this).find("> div").attr("data-dw");
			if(dw){
				var tmp = dw.split("/");
				var num = tmp[0]*12/tmp[1];
				sumwidth = sumwidth +num;
				$(this).find("> div > .vc-resize-column-bar.top .pre").remove();
				$(this).find("> div > .vc-resize-column-bar.top .next").remove();
				if(first==true){
					$(this).find("> div > .vc-resize-column-bar.top .copy").before("<span class='next' title='向右移动'></span>");
					first = false;
				}else{
					$(this).find("> div > .vc-resize-column-bar.top .copy").before("<span class='pre' title='向左移动'></span>");
					$(this).find("> div > .vc-resize-column-bar.top .copy").before("<span class='next' title='向右移动'></span>");
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
	
	},
    cloneParent: function(e) {
      e && e.preventDefault();
      this.parent_view.clone(e);
    },
	parentElementAction:function(layout){
		var parent_model = vc.shortcodes.get(this.model.get('parent_id'));
		if(iframeWin.jQuery('.loadingClass').length==0){
			parent_model.view.convertRowColumns(layout);
		}
	},
	parentElement1:function(e){
		e && e.preventDefault();
		var layout="11";
		this.parentElementAction(layout);
	},
	parentElement2:function(e){
		e && e.preventDefault();
		var layout="12_12";
		this.parentElementAction(layout);
	},
	parentElement3:function(e){
		e && e.preventDefault();
		var layout="23_13";
		this.parentElementAction(layout);
	},
	parentElement4:function(e){
		e && e.preventDefault();
		var layout="13_13_13";
		this.parentElementAction(layout);
	},
	parentElement5:function(e){
		e && e.preventDefault();
		var layout="14_14_14_14";
		this.parentElementAction(layout);
	},
	parentElement6:function(e){
		e && e.preventDefault();
		var layout="14_34";
		this.parentElementAction(layout);
	},
	parentElement7:function(e){
		e && e.preventDefault();
		var layout="14_12_14";
		this.parentElementAction(layout);
	},
	mobileHidden:function(e){
	  e && e.preventDefault();
	  var parent_model = vc.shortcodes.get(this.model.get('parent_id'));
	  var params = parent_model.get('params');
      params.display_device = 1;
	  ajaxBeforeLoading(this.model.get('id'));
      parent_model.save({params: params}, {silent: true});
	  vc.ShortcodesBuilder.update(parent_model);
	  vc.ShortcodesBuilder.save();
	  if(parent_model.get("shortcode")=="vc_row_inner" || parent_model.get("shortcode")=="vc_row_embad" ){
		    parent_model.view.$el.removeClass("qfy_inner_setting");
		    parent_model.view.$el.closest("body").removeClass("qfyinnersetting");
		    parent_model.view.$el.closest(".qfy_inner_setting_parent").removeClass("qfy_inner_setting_parent");
	  }
	
	},
	getselflink:function(e){
		var jThis=this;
		var model_id = jThis.model.get('parent_id');
		var obj = iframeWin.jQuery("[data-model-id='"+model_id+"']");
		if(obj.length>0){
			var id = obj.find("> section").attr("id");
			var str= iframeWin.location.href;
			str = str.replace('&vceditor=true', '');
			str = str.replace('?vceditor=true', '');
			str = str.replace('?vceditor=true', '');
			if(str.indexOf("&qfy_time=")>-1){
				str = str.split("&qfy_time=")[0];
			}
			if(id){
				jAlert("<div style='-moz-user-select: text;user-select: text;'><srong>这个区块的锚点链接是：</strong><br/><br/>"+str+"#"+id+"<br/><br/>您可以将这个链接复制到剪贴板然后粘贴其它页面</div>");
			}else{
				jAlert("无描点设置");
			}
		}
		return false;
	},
    editParent: function(e) {
      e && e.preventDefault();
      this.parent_view.edit(e);
    },
    addSibling: function(e) {
      e && e.preventDefault();
      this.parent_view.addElement(e);
    },
	hideSetting:function(e){
		e && e.preventDefault();
		var $control = $(e.currentTarget),
        $parent = $control.parent().parent();
		$parent.hide();
		setTimeout(function(){$parent.show();},10000);
	},
	saveAsTempate :function(e){
		e && e.preventDefault();
		var jThis=this;
		jConfirm("保存区块为模板之后，您可以在任何页面使用这个模板。确认需要保存吗？",function(){
			var shortcode = vc.shortcodes.where({id: jThis.model.get('parent_id')});
			var string = vc.ShortcodesBuilder.modelsToString(shortcode);
			top.jQuery("#vc-preloader").show();
			jQuery.post("/FeiEditor/siteEdit/saveAsTemplate",{string:string},function(data){
				location.reload();
			})
		})
	},
    switchControls: function(e) {
  	
      e && e.preventDefault();
       //vc.unsetHoldActive();
      var $control = $(e.currentTarget),
        $parent = $control.parent().parent(),
        $current;
	  if($parent.find(".bitPcontrolsChild:visible").length==0){
		 $parent.find(".bitPcontrolsChild").show();
		 this.holdActive=true;
	  }else{
		 $parent.find(".bitPcontrolsChild").hide();
		 this.holdActive=false;
	  }
	;
        //$parent.addClass('active');
        //$current = $parent.siblings('.active').removeClass('active');
     // window.setTimeout(this.holdActive, 500);
     
      //!$current.hasClass('element') && window.setTimeout(this.holdActive, 500);*/
    }
  });
  window.InlineShortcodeView_vc_column_text = window.InlineShortcodeView.extend({
    initialize: function(options) {
      window.InlineShortcodeView_vc_column_text.__super__.initialize.call(this, options);
      _.bindAll(this, 'setupEditor', 'updateContent');
    },
    render: function() {
      window.InlineShortcodeView_vc_column_text.__super__.render.call(this);
      // Here
      return this;
    },
    setupEditor: function(ed) {
      ed.on('keyup', this.updateContent)
    },
    updateContent: function() {
      var params = this.model.get('params');
      params.content = tinyMCE.activeEditor.getContent();
      this.model.save({params: params}, {silent: true});
    }
  });
  window.InlineShortcodeView_vc_row = window.InlineShortcodeView.extend({
    column_tag: 'vc_column',
    events: {
		'click > .qfy-tooler .add': 'add_Element',
		'click > .qfy-tooler .lan': 'layout_Element',
		'click > .qfy-tooler .set': 'set_Element',
		'click > .qfy-tooler .copy': 'copy_Element',
		'click > .qfy-tooler .save': 'save_Element',
		'click > .qfy-tooler .delete': 'delete_Element',
		'click > .qfy-tooler .setbg': 'setbg_Element',

		'mousedown > .qfy-tooler .stylecopy': 'stylecopy_mousedown',
		'mouseup > .qfy-tooler .stylecopy': 'stylecopy_mouseup',
		'click > .qfy-tooler .hidebtn': 'hidebtn_btn_Element',			
		'click > .qfy-tooler .row-tagmodel .row-tagmodel-ul li': 'changemodel',
		'click > .qfy-tooler .inner_button_container .setinner': 'on_inner_element',
		'click > .qfy-tooler .inner_button_container .cancel_setinner': 'off_inner_element',
		'click > .qfy-tooler .inner_button_container .hideicon': 'hidebutton',
        'mouseenter': 'HoldActive',
	    'mouseleave': 'removeControls'
    },
	stylecopy_mouseover:function(e){
		var tag =  this.model.get('shortcode');
		var id =  this.model.get('id');
		var stag_tmp = top.getCookie("shortcode_tmpstyle");
		if(stag_tmp){
			var stag = stag_tmp.split("|^|")[0];
			var sid = stag_tmp.split("|^|")[1];
		}
		
		if(!stag || (stag && ( !this.isliketag(tag,stag) || sid==id)) ){
			iframeWin.jQuery("[data-model-id='"+id+"'] .stylecopy:first").removeClass("hascopy");
		}else{
			iframeWin.jQuery("[data-model-id='"+id+"'] .stylecopy:first").addClass("hascopy");
			
		}
		
	},
	changemodel:function(e){
		_.isObject(e) && e.preventDefault() && e.stopPropagation();
		
		var $now = $(e.currentTarget);
		var v = $now.attr("data-val");
		var vcelement = $now.closest(".vc-element");
		var id =vcelement.attr("data-model-id");
		var model = vc.shortcodes.get(id);
		if(model){
			var params = model.get('params');
			params.tagmodel = v;		
			model.save({params: params});
			vc.ShortcodesBuilder.update(model);
		}
	},
    layout: 1,
	column_inner:false,
	initialize: function(params) {
      window.InlineShortcodeView_vc_row.__super__.initialize.call(this, params);
      

      
      _.bindAll(this, 'startChangeX1', 'stopChangeX1', 'resizeX1','startChangeX2', 'stopChangeX2', 'resizeX2');
      /* if(this.model){
		  var $this = this;
		  var model_id = this.model.get("id");
		  //区块
		  setTimeout(function(){
			  vc.frame_window.jQuery("[data-model-id='"+model_id+"']").waypoint({
					handler: function(direction) {
						$this.addControls_onhover();
					},
					triggerOnce: true,
					offset: "100%",
				})
			  
		  },500);
	  }*/
	

      
    },
	setbg_Element:function(e){
		_.isObject(e) && e.preventDefault() && e.stopPropagation();

		var $now = $(e.currentTarget);
		var vcelement = $now.closest(".vc-element");
		var id =vcelement.attr("data-model-id");
		var model = vc.shortcodes.get(id);
		if(model){
			vc.closeActivePanel();
			vc.edit_element_block_view.render(model,false,false,2);
		}
	},
	add_Element:function(e){
		var  id =  this.model.get('id');
		var  tag =  this.model.get('shortcode');
		if(tag=="vc_row"){
			var pre = vc.frame_window.jQuery('.vc-vc_row[data-model-id="'+id+'"]').prev(".vc-vc_row");
			if(pre.length==0){
				vc.add_element_block_view.after = true;		
				vc.add_element_block_view.render(null, true,"","first");
			}else{
				var pre_id = pre.attr("data-model-id");
				pre.addClass('vc-place-after');
				vc.add_element_block_view.after = true;
				vc.add_element_block_view.render(false);
			}
			
		}else if(tag=="vc_row_inner"){

			 vc.add_element_block_view.after = true;
			 vc.add_element_block_view.render(this.model,true,"single","vc_row_inner_first");
			
		}
		
	
	},
	layout_Element:function(e){
		
		this.$el.find('.vc-element.vc-container:first > .vc-controls .parent .control-btn-prepend').click();
	},
	set_Element:function(e){

		this.$el.find('.vc-element.vc-container:first > .vc-controls .parent .control-btn-edit').click();
	},
	copy_Element:function(e){
		 _.isObject(e) && e.preventDefault() && e.stopPropagation();
		var $tab = $(e.currentTarget);
		if($tab.closest(".vc-resize-controls_inner.slider-content").length==0){
			
			this.$el.find('.vc-element.vc-container:first > .vc-controls .parent .control-btn-clone').click();
		}else{
	
				var slider = $tab.closest(".vc-vc_row_embad");
				var copy_id = slider.attr("data-model-id");
				if(copy_id)
				{
					var copy_model = vc.shortcodes.get(copy_id);
					var new_model;
					vc.clone_index = vc.clone_index / 10;
					new_model = vc.CloneModel(copy_model, copy_model.get('parent_id'));
					vc.ShortcodesBuilder.render(null,true,copy_model);

					var parentmodel =  vc.shortcodes.get( copy_model.get('parent_id'));
					var params = parentmodel.get('params');
					var buttons = params.buttons;
					if(buttons=="" || buttons.substr(buttons.length-1,1)==";"){
						params.buttons = buttons+"复制";
					}else{
						params.buttons = buttons+";复制";
					}
	
					parentmodel.save({params: params});
					if(parentmodel.get("shortcode")=="tabcontent" || parentmodel.get("shortcode")=="accordioncontent" ){
        				vc.ShortcodesBuilder.update(parentmodel);
					}
				}
		
		}
	},
	save_Element:function(e){
		this.$el.find('.vc-element.vc-container:first > .vc-controls .parent .control-btn-save').click();
	},
	delete_Element:function(e){
		var $tab = $(e.currentTarget);
		
		
		if($tab.closest(".vc-resize-controls_inner.slider-content").length>0){
			jConfirm("确认是否删除改区域内的一页内容!",function(){
			
				var slider = $tab.closest(".royalSlider_gallery_new");
				var curr_row = $tab.closest(".vc-vc_row_embad");
				var pview = curr_row.closest(".vc-element-container");
				var delete_id = curr_row.attr("data-model-id");
				//var index = pview.find(".vc-vc_row_embad").index(curr_row);

				if(delete_id)
				{
					var delete_model = vc.shortcodes.get(delete_id);
					var p_id = delete_model.get('parent_id');
					var prev = curr_row.prev();
					var next = curr_row.next();
					if(prev.hasClass("panel-title")){
						prev.remove();
					}
					if(next.hasClass("qfydownline")){
						next.remove();
					}
					var index = -1;
					var count = 0;
					var models =  vc.shortcodes.where({parent_id: p_id});
					_.each(models, function(childmodel) {
						if(childmodel==delete_model){
							index = count;
						}
						count++;
					  }, this);	

					delete_model.destroy();

					var parentmodel =  vc.shortcodes.get(p_id);
					var params = parentmodel.get('params');
					var buttons = params.buttons;
					if(index!="-1"){
						if(buttons){
							var items = params.buttons.split(";");
							items.splice(index,1);
							params.buttons = items.join(";");
						}
						parentmodel.save({params: params});
						if(parentmodel.get("shortcode")=="tabcontent" || parentmodel.get("shortcode")=="accordioncontent" ){
							vc.ShortcodesBuilder.update(parentmodel);
						}
					}
					vc.ShortcodesBuilder.save(true);
					if(slider.length>0){
						vc.frame_window.royalSlider_gallery_new(slider);
					}
				}

			});
		}else{
			this.$el.find('.vc-element.vc-container:first > .vc-controls .parent .control-btn-delete').click();
		}
	},
	on_inner_element:function(e){
		 _.isObject(e) && e.preventDefault() && e.stopPropagation();
		this.$el.addClass("qfy_inner_setting");
		this.$el.closest(".vc-vc_row").addClass("qfy_inner_setting_parent");
		this.$el.closest("body").addClass("qfyinnersetting");
		this.$el.mouseenter();
		return false;
		
	},
	hidebutton:function(e){
		var $tab = $(e.currentTarget);
		$tab.closest(".qfy-tooler").hide();
		setTimeout(function(){$tab.closest(".qfy-tooler").show();},10000);
	},
	off_inner_element:function(e){
		 _.isObject(e) && e.preventDefault() && e.stopPropagation();
		this.$el.removeClass("qfy_inner_setting");
		this.$el.closest(".vc-vc_row").removeClass("qfy_inner_setting_parent");
		this.$el.closest("body").removeClass("qfyinnersetting");
		this.$el.mouseleave();
		this.$el.closest(".vc-vc_row").mouseenter();
		$(e.currentTarget).mouseenter();
	},
	hidebtn_btn_Element:function(e){
		$this = this;
		jConfirm("亲，在切换回PC模式后，您可以在显示设置中将它恢复哦。点击确认或者取消。",function(){
			$this.$el.find('.vc-element.vc-container:first > .vc-controls .parent .control-btn-mobile-hidden').click();
		});
	},
	addControls:function(){
		 $this = this;
		  var  tag =  this.model.get('shortcode');
		  if(tag=="vc_row_embad"){
			   var pid=this.model.get('parent_id');
			   var parent_model = vc.shortcodes.get(pid);
			   if(parent_model && parent_model.get("shortcode")=="accordioncontent"){
					var pview = this.$el.closest(".qfy-accordioncontent");
					var index = pview.find(".a_content > .vc-vc_row_embad").index(this.$el);
					var curr = pview.find(".a_header h4:eq("+index+")");
					var text = curr.html();
					if(text){
						this.$el.before('<h4 class="panel-title" style="display:block;">'+text+'</h4>');
					}
					this.$el.prev().find(".line").remove();
					if(curr.find(".line").length>0 && !this.$el.next().hasClass("qfydownline")){
						 var line = "<h5 class='qfydownline' style='position:relative;z-index:5;margin:0;padding:0;'>"+curr.find(".line").clone().prop("outerHTML")+"</h5>";
						 this.$el.after(line);
					}
						
			   }
		  }
		return this;
	},
	addControls_onhover: function() {

      if( this.$el.find('.vc-element.vc-container:first > .vc-controls .parent .control-btn-edit').length ==0){
		  this.$el.find('.vc-element.vc-container:first').mouseenter();
	  }

	  if(this.$el.find(">.qfy-tooler").length>0){
			return;
	  }
	  if(this.$el.closest('.section-special').length>0){
			return;
		}
	  $this = this;
	   var  tag =  this.model.get('shortcode');
	  if(tag=="vc_row" || tag=="vc_row_inner" || tag=="vc_row_embad"){
		  this.column_inner = this.$el.find('>section.section');
		  var paddingleft = this.column_inner.css("padding-left");
		  var paddingright = this.column_inner.css("padding-right");
		  var marginbottom = this.column_inner.css("margin-bottom");
		  var model =  this.model;
		  var model_id =  this.model.get('id');
		
		  if(tag=="vc_row_embad"){
			 this.$controls = $('<div class="vc-resize-controls vc-resize-linebar"><div class="line"></div><div class="drag-element" title="上下拖动,调整内间距" ></div><div class="drag-element-value"></div><div class="drag-element-right" title="上下拖动,调整内间距" ></div><div class="drag-element-right-value"></div></div>');
		  }else{
		     this.$controls = $('<div class="vc-resize-controls vc-resize-linebar"><div class="line"></div><div class="drag-element" title="上下拖动,调整内间距" ></div><div class="drag-element-value"></div><div class="add-innner-element" title="内部插入内容"></div><div class="add-element"></div><div class="set" title="设置"></div><div class="drag-element-right" title="上下拖动,调整内间距" ></div><div class="drag-element-right-value"></div></div>');
		  }
		  this.$controls_x_left = $('<div class="vc-resize-x-left-bar" title="左右拖动" ></div><div class="vc-resize-x-v"></div>');
		  this.$controls_x_right = $('<div class="vc-resize-x-right-bar" title="左右拖动" ></div><div class="vc-resize-x-r-v"></div>');
		  	
		  this.$controls_container = $('<div class="qfy-tooler vc-resize-controls_container bottomrow" style="padding-left:'+paddingleft+';padding-right:'+paddingright+';"><div class="vc-resize-controls_inner" style="top:-'+marginbottom+';"></div></div>');
		  this.$controls_container.appendTo(this.$el);

		  this.$controls_container_inner = this.$controls_container.find(".vc-resize-controls_inner");
		  this.$controls.appendTo(this.$controls_container_inner);
		  this.$controls_x_left.appendTo(this.$controls_container_inner);
		  this.$controls_x_right.appendTo(this.$controls_container_inner);
		
		  if(tag=="vc_row_embad"){
			this.$el.prepend('<div class="qfy-tooler vc-resize-controls_container top" style="padding-left:'+paddingleft+';padding-right:'+paddingright+';"><div class="vc-resize-controls_inner slider-content"><div class="btnleft"><span class="hidebtn wf-mobile-visible-inline" title="手机下隐藏"></span></div><span class="drag" title="调整上间距"></span><span class="drag-value"></span><div class="btnright"><span class="addone" title="新增"></span><span class="lan" title="布局"></span><span class="set" title="设置" ></span><span class="stylecopy row_span copytxt" title="提取或应用样式" ></span><span class="copy" title="复制"></span><span class="delete" style="margin-right:0;" title="删除"></span></div><div class="vc-resize-controls vc-resize-linebar"><div class="line"></div></div></div></div>');
		  }else{
			//var tagmodel='<span class="row-tagmodel" >显示模式<ul class="row-tagmodel-ul" ><li class="selected" data-val="" >普通</li><li data-val="float" >浮动模式</li><li data-val="fix" >跟随模式</li></ul></span>';
			var tagmodel = '';
			this.$el.prepend('<div class="qfy-tooler vc-resize-controls_container top" style="padding-left:'+paddingleft+';padding-right:'+paddingright+';"><div class="vc-resize-controls_inner"><div class="btnleft"><span class="move '+( tag=="vc_row"?"move_row":"vc-element-move")+'" title="拖拽"></span><span class="hidebtn wf-mobile-visible-inline" title="手机下隐藏"></span>'+tagmodel+'</div><span class="drag" title="调整上间距"></span><span class="drag-value"></span><div class="add-innner-element" title="内部插入内容"></div><span class="add" title="新增"></span><div class="btnright"><span class="lan" title="布局"></span><span class="setbg" title="设置背景"></span><span class="set" title="设置" ></span><span class="stylecopy row_span copytxt" title="提取或应用样式" ></span><span class="copy" title="复制"></span><span class="delete" style="margin-right:0;" title="删除"></span></div><div class="vc-resize-controls vc-resize-linebar"><div class="line"></div></div></div></div>');
		  }
		 // this.$el.prepend('<div class="qfy-tooler leftline " style="border-right: 1px solid #285a85;height: 100%;width:1px;position: absolute;z-index: 5;left:'+paddingleft+';"></div><div class="qfy-tooler rightline" style="border-right: 1px solid #285a85;height: 100%;width:1px;position: absolute;z-index: 5;right:'+paddingright+';"></div>');
		  var onhovertimeout =false;
		  this.$el.find(">.vc-resize-controls_container.top").mouseenter(function(){
			  var t= jQuery(this);
			  onhovertimeout = setTimeout(function(){
				   t.parent().find(">section").addClass("onHover");   
			  },500);
			  
	     }).mouseleave(function(){
	    	   if(onhovertimeout) clearTimeout(onhovertimeout);
	     });
		  this.column_inner.find(">.container").prepend('<div class="qfy-tooler drag-column-layout-warp leftline wf-mobile-hidden"><div title="创建新专栏"  class="drag-column-layout" style="position: absolute;z-index: 6;"></div></div><div class="qfy-tooler drag-column-layout-warp rightline wf-mobile-hidden"><div title="创建新专栏" class="drag-column-layout" style="position: absolute;z-index: 6;"></div></div><div class="qfy-tooler leftline wf-mobile-hidden" title="调整最大宽度" style="border-right: 1px dotted #3e3e3e;height: 40px;width:1px;position: absolute;z-index: 5;left:0;top:50%;margin-top:-20px;"><div class="leftlinedrag" style="position: absolute;z-index: 5;top:50%;left:-4px;margin-top:-5px;cursor:w-resize;width:10px;height:10px;background:#3e3e3e;"></div><div class="leftlinedrag_value" style="position: absolute; z-index: 5; top: 50%; margin-top: -6px; left: 8px; height: 12px; font-size: 12px; line-height: 12px;color:#333;"></div></div><div class="qfy-tooler rightline wf-mobile-hidden" title="调整最大宽度" style="border-right: 1px dotted #3e3e3e;height: 40px;width:1px;position: absolute;z-index: 5;right:0;top:50%;margin-top:-20px;"><div class="rightlinedrag" style="position: absolute;z-index: 5;top:50%;right:-5px;margin-top:-5px;cursor:w-resize;width:10px;height:10px;background:#3e3e3e;"></div><div class="rightlinedrag_value" style="position: absolute; z-index: 5; top: 50%; margin-top: -6px; right: 8px; height: 12px; font-size: 12px; line-height: 12px;color:#333;"></div></div>');

		  this.preview_container =   this.$el.find('>.vc-resize-controls_container.top');
		  this.leftlinedrag =    this.column_inner.find('>.container>.qfy-tooler>.leftlinedrag');
		  this.rightlinedrag =    this.column_inner.find('>.container>.qfy-tooler>.rightlinedrag');
		  
		  var model = this.model;
		  var params = model.get('params');
		  if(params.special=="1"){
			this.$el.addClass("vc-section-special");
		  }
		  this.column_inner.find('>.container>.qfy-tooler>.drag-column-layout').unbind().click(function(){
			  	
			  	  var p_id = model.get('id');
				  var children = vc.shortcodes.where({parent_id: p_id});
				  var length = children.length;
				  if(length==10) length=11;
				  if(length<12){
					  var layout = "";
					  for(var i=0;i<=length;i++){
						  if(i==length){
							  layout +="1"+(length*1+1);
						  }else{
							  layout +="1"+(length*1+1)+"_";
						  }
					  }
					  if(jQuery(this).parent().hasClass("leftline")){
						  columns = model.view.convertRowColumns(layout,"","","","first");
					  }else{
						  columns = model.view.convertRowColumns(layout,"","","","last");
					  }
				  }else{
					  top.jAlert("最大只支持12分隔布局");
				  }
		  });




		  	
			//this.$controls.find(".drag-element,.drag-element-right").unbind().mousedown(this.startChangePBottom);
		   var startheight = 0;
		   var startheightposition = 0;
		   iframeWin.jQuery("[data-model-id='"+model_id+"'] >.vc-resize-controls_container.bottomrow").draggable({
				axis: "y",
				handle: ".drag-element,.drag-element-right",
				helper: function() {
					return jQuery("<div></div>");
				},
				start: function(event, ui) {
					  startheight = jQuery(this).prev("section").css("height").replace("px","");
					  startheightposition = ui.position.top;
					  if(isNaN(startheight)) startheight = 0;
					  jQuery(this).find(".drag-element-value,.drag-element-right-value").show();
					  vc.frame_window.jQuery('body').addClass('vc-column-dragging').disableSelection();
					  jQuery(this).addClass("qfy-dragging");
				},
				drag: function( event, ui ) {
					var v = ui.position.top*1 -startheightposition+startheight*1;
					if(v<0){
						v = 0;
					}
					jQuery(this).prev("section").css("min-height",v+"px");
					jQuery(this).find(".drag-element-value,.drag-element-right-value").html("最小高度:"+v+"px");
				
				},
				stop: function(event, ui) {
						jQuery(this).removeClass("qfy-dragging");
					    vc.frame_window.jQuery('body').removeClass('vc-column-dragging').enableSelection();
						jQuery(this).find(".drag-element-value,.drag-element-right-value").html("").hide();
						var value = jQuery(this).prev("section").css("height");
						if(value) value = value.replace("px","");
						if(isNaN(value))value = 0;
						ajaxBeforeLoading(model_id);
						var params = model.get('params');
						if(  vc.frame_window.jQuery('body').width()>768 ){
							  params.minheight = value;
						}else{
						      params.mobile_minheight = value;
						}
						model.save({params: params});
						vc.ShortcodesBuilder.update(model);
						vc.ShortcodesBuilder.save();
				} 
			});
			//this.preview_container.find(".drag").unbind().mousedown(this.startChangeMarginTop);
			var startChangeMarginTop = 0;
			iframeWin.jQuery("[data-model-id='"+model_id+"'] >.vc-resize-controls_container.top").draggable({
				axis: "y",
				handle: ".drag",
				helper: function() {
					return jQuery("<div></div>");
				},
				start: function(event, ui) {
					startChangeMarginTop = jQuery(this).next("section").css("margin-top").replace("px","");
					jQuery(this).find(".drag-value").show();
					vc.frame_window.jQuery('body').addClass('vc-column-dragging').disableSelection();
				},
				drag: function( event, ui ) {
					var v = ui.position.top*1+startChangeMarginTop*1;
					if(v<0){
						v = 0;
					}
					jQuery(this).next("section").css("margin-top",v +"px");
					jQuery(this).find(".drag-value").html("外上:"+v +"px");
					
				},
				stop: function(event, ui) {
						vc.frame_window.jQuery('body').removeClass('vc-column-dragging').enableSelection();
						jQuery(this).find(".drag-value").html("").hide();
						var value = jQuery(this).next("section").css("margin-top");
						if(value) value = value.replace("px","");
						if(isNaN(value))value = 0;
						ajaxBeforeLoading(model_id);
						var params = model.get('params');
						if(  vc.frame_window.jQuery('body').width()>768 ){
							  params.margintop = value;
						}else{
						      params.mobilemargintop = value;
						}
						model.save({params: params});
						vc.ShortcodesBuilder.update(model);
						vc.ShortcodesBuilder.save();
					
				} 
			});

				
			
			//this.$controls_x_left.unbind().mousedown(this.startChangeLX);
			 var startleft_x = 0;
			   var startleftposition = 0;
			   iframeWin.jQuery("[data-model-id='"+model_id+"']  >.vc-resize-controls_container.bottomrow .vc-resize-x-left-bar").draggable({
					axis: "x",
					helper: function() {
						return jQuery("<div></div>");
					},
					start: function(event, ui) {
						startleft_x = jQuery(this).closest(".vc-resize-controls_container").prev("section").css("padding-left").replace("px","");
						  if(isNaN(startleft_x)) startleft_x = 0;
						  startleftposition = ui.position.left;
						  jQuery(this).next(".vc-resize-x-v").show();
						  vc.frame_window.jQuery('body').addClass('vc-column-dragging').disableSelection();
						  guideline_start(event,jQuery(this).closest(".qfy-element"));
					},
					drag: function( event, ui ) {
						var v = (ui.position.left*1 -startleftposition+startleft_x*1);
						if(v<0){
							v = 0;
						}
						jQuery(this).closest(".vc-resize-controls_container").siblings().css("padding-left",v+"px");
						jQuery(this).next(".vc-resize-x-v").html("左内:"+v+"px");
						jQuery(this).closest(".vc-resize-controls_container").css("padding-left",v+"px");
						guideline_draw(event,jQuery(this),null);
					},
					stop: function(event, ui) {
							vc.frame_window.jQuery('body').removeClass('vc-column-dragging').enableSelection();
							 jQuery(this).next(".vc-resize-x-v").html("").hide();
							var value = jQuery(this).closest(".vc-resize-controls_container").prev("section").css("padding-left");
							if(value) value = value.replace("px","");
							if(isNaN(value)) value = 0;
							ajaxBeforeLoading(model_id);
							var params = model.get('params');
							if(  vc.frame_window.jQuery('body').width()>768 ){
								  params.paddingleft = value;
							}else{
							      params.mobilepaddingleft = value;
							}
							model.save({params: params});
							vc.ShortcodesBuilder.update(model);
							vc.ShortcodesBuilder.save();
							guideline_end();
					} 
				});
			
			
			//this.$controls_x_right.unbind().mousedown(this.startChangeX);
		 var startright_x = 0;
		   var startrightposition = 0;
		   iframeWin.jQuery("[data-model-id='"+model_id+"'] >.vc-resize-controls_container.bottomrow .vc-resize-x-right-bar").draggable({
				axis: "x",
				helper: function() {
					return jQuery("<div></div>");
				},
				start: function(event, ui) {
					startright_x = jQuery(this).closest(".vc-resize-controls_container").prev("section").css("padding-right").replace("px","");
					  if(isNaN(startright_x)) startright_x = 0;
					  startrightposition = ui.position.left;
					  jQuery(this).next(".vc-resize-x-r-v").show();
					  vc.frame_window.jQuery('body').addClass('vc-column-dragging').disableSelection();
					  guideline_start(event,jQuery(this).closest(".qfy-element"));
				},
				drag: function( event, ui ) {
					var v = (startrightposition - ui.position.left*1 +startright_x*1);
					if(v<0){
						v = 0;
					}
					jQuery(this).closest(".vc-resize-controls_container").siblings().css("padding-right",v+"px");
					jQuery(this).next(".vc-resize-x-r-v").html("右内:"+v+"px");
					jQuery(this).closest(".vc-resize-controls_container").css("padding-right",v+"px");
					guideline_draw(event,jQuery(this),null);
				},
				stop: function(event, ui) {
						vc.frame_window.jQuery('body').removeClass('vc-column-dragging').enableSelection();
						 jQuery(this).next(".vc-resize-x-v").html("").hide();
						var value = jQuery(this).closest(".vc-resize-controls_container").prev("section").css("padding-right");
						if(value) value = value.replace("px","");
						if(isNaN(value)) value = 0;
						ajaxBeforeLoading(model_id);
						var params = model.get('params');
						if(  vc.frame_window.jQuery('body').width()>768 ){
							  params.paddingright = value;
						}else{
						      params.mobilepaddingright = value;
						}
						model.save({params: params});
						vc.ShortcodesBuilder.update(model);
						vc.ShortcodesBuilder.save();
						guideline_end();
				} 
			});
			this.rightlinedrag.unbind().mousedown(this.startChangeX1);
			this.leftlinedrag.unbind().mousedown(this.startChangeX2);


			this.$controls.find(".add-element").unbind().click(function(){
			   if(tag=="vc_row"){
					model.view.$el.addClass('vc-place-after');
					vc.add_element_block_view.after = true;
					vc.add_element_block_view.render(false);
			   }else if(tag=="vc_row_inner"){
					vc.add_element_block_view.after = true;
					vc.add_element_block_view.render(model,false,"single","vc_row_inner");
			   }else if(tag=="vc_row_embad"){
					vc.add_element_block_view.after = true;
					vc.add_element_block_view.render(model,false,"single","vc_row_inner");
			   }
			});

			this.$el.find(".add-innner-element").unbind().click(function(){
				 var p_id = model.get('id');
				 var children = vc.shortcodes.where({parent_id: p_id});
				 if(children.length>0){
					vc.add_element_block_view.render(children[0],null,"special");
					}
			  
			});
		
		  if(tag=="vc_row_inner" ){
				 this.$el.prepend('<div class="inner_button qfy-tooler" ><div class="inner_button_container"><span class="setinner_div"><span class="setinner">设置子区块</span><span class="hideicon"  title="隐藏该按钮10秒"></span></span><span class="cancel_setinner_div"><span class="cancel_setinner">退出设置模式</span><span class="hideicon" title="隐藏该按钮10秒"></span></span></div></div>');
				 this.preview_container =   this.$el.find('.inner_button');
		  }
			//添加背景设置快捷按钮
			//if(this.column_inner.width()>350 && this.column_inner.height()>400){
				var bgimage = this.column_inner.find(">.background-media").css("background-image");
				var tab =2;
				if(!bgimage || bgimage=="none"){
					bgimage = this.column_inner.find(">.background-media video").attr("poster");
					tab =3;
				}
				if(bgimage && bgimage!="none"){
					bgimage = bgimage.replace('url("','');
					bgimage = bgimage.replace('")','');
					if(bgimage.indexOf("http")>-1){
						this.$controls_container.find(">.vc-resize-controls_inner").append('<div class="quick_bg vcrow" title="点击快速设置背景"  style="background-image:url('+bgimage+')"><span class="title">背景图</span></div>');
						vc.frame_window.jQuery(".quick_bg").draggable();
						this.$controls_container.find(">.vc-resize-controls_inner>.quick_bg").click(function(e){
							_.isObject(e) && e.preventDefault() && e.stopPropagation();
							vc.edit_element_block_view.render(model,false,false,tab);
						})
					}
				}
			//}


	 }
      return this;
    },
	removeControls: function() {
		 var  tag =  this.model.get('shortcode');
	     if(!vc.frame_window.jQuery('body').hasClass('vc-column-dragging') && !vc.frame_window.jQuery('body').hasClass('doing')   ){
			//this.$el.find(">.vc-resize-controls_container").hide();
			var column_inner =this.$el.find('section.section:first');
			//column_inner.css("overflow","hidden");
			//this.$el.find(">.rightline,>.leftline").hide();
			//column_inner.find(">.container>.qfy-tooler.leftline,>.container>.qfy-tooler.rightline").hide();
			/*if((tag=="vc_row_inner") && this.$el.hasClass('qfy_inner_setting')  && !vc.frame_window.jQuery('body').hasClass('vc-sorting')){
					this.$el.removeClass("qfy_inner_setting");
					vc.frame_window.jQuery('body').removeClass("qfyinnersetting");
			}*/

			this.$el.find('section.section:first').removeClass("onHover");
			
		 }
		
    },
    HoldActive: function(e) {
	  //添加工具条
	  this.addControls_onhover();
	  this.stylecopy_mouseover(e);
	  var  tag =  this.model.get('shortcode');
	  if(!vc.frame_window.jQuery('body').hasClass('vc-column-dragging') && !vc.frame_window.jQuery('body').hasClass('doing')   ){
		  vc.unsetHoldActive();


		  if(tag=="vc_row" || ((tag=="vc_row_inner"||tag=="vc_row_embad") && vc.frame_window.jQuery('body').hasClass('qfyinnersetting') )){
      		var obj= this.$el;
      		var pthis = this;
      		var model_id = this.model.get('id');
			var column_inner = iframeWin.jQuery("[data-model-id='"+model_id+"'] >section.section");

			//column_inner.css("overflow","visible");
      		var paddingleft = column_inner.css("padding-left");
      		
			var paddingright = column_inner.css("padding-right");
			var marginbottom = column_inner.css("margin-bottom");
			var w = column_inner.width();
			//show();
			var control = column_inner.parent().find(">.vc-resize-controls_container");
			column_inner.parent().find(">.leftline").show().css("left",paddingleft);
			column_inner.parent().find(">.rightline").show().css("right",paddingright);

			if(w<200){
				control.addClass("little");
				control.removeClass("small");
			}else if(w<750){
				control.removeClass("little");
				control.addClass("small");
			}else{
				control.removeClass("little");
				control.removeClass("small");
			}
			if(this.$el.closest('.section-special').length>0 || this.$el.hasClass("vc-section-special")){
				return;
			}
			control.css("padding-left",paddingleft).css("padding-right",paddingright);
			column_inner.parent().find(">.vc-resize-controls_container.bottomrow .vc-resize-controls_inner").css("top","-"+marginbottom);
			var pp = column_inner.css("padding-top");
			if(pp){
				var pp_v= pp.replace("px","")*1;
				if(pp_v<20){
					column_inner.addClass("paddingtop20");
				}else{
					column_inner.removeClass("paddingtop20");
				}
			}

      	}

	  }else{
		 $this = this;
		 setTimeout(function(){
			if(typeof $this.HoldActive == "function"){
				$this.HoldActive();
			}
		 },800);
	  
	  }		
    },


	startChangeX1: function(e) {
      vc.frame_window.jQuery('body').addClass('vc-column-dragging dx').disableSelection();
      this._x = parseInt(e.pageX);
      vc.$page.bind('mousemove.columnSize', this.resizeX1);
      $(vc.frame_window.document).unbind().mouseup(this.stopChangeX1);
	  this.old_padding = this.column_inner.find(">.container").width();
	  guideline_start(e,this.column_inner.closest(".container"));
	  this.rightlinedrag.next().html("").css("min-width","0");
	  this.column_inner.find(">.container").css("margin","0 auto");
    },
	stopChangeX1: function(e) {
      vc.frame_window.jQuery('body').removeClass('vc-column-dragging dx').enableSelection();
	  this.removeControls();
      vc.$page.unbind('mousemove.columnSize');
	  var current_padding = this.column_inner.find(">.container").width();
	  if(this.column_inner.find(">.container").offset().left+current_padding <e.pageX){
		current_padding = "";
	  }
	  if(this.old_padding!=current_padding){
		  ajaxBeforeLoading(this.model.get('id'));
		  var params = this.model.get('params');
		  params.rowmaxwidth = current_padding;
		  this.model.save({params: params});
		  vc.ShortcodesBuilder.update(this.model);
		  vc.ShortcodesBuilder.save();
	  }
	   $(vc.frame_window.document).unbind();
	   guideline_end();
	   
    },
	resizeX1: function(e) {
		
      var height, old_height, diff;
      diff = e.pageX - this._x;
	  if(diff<0 &&  this.column_inner.find(">.container").offset().left+this.column_inner.find(">.container").width()< e.pageX){
		this.column_inner.find(">.container").css("max-width","100%")
	  }

	  var current_padding = this.column_inner.find(">.container").width();
	  current_padding = current_padding*1 + diff*2;
	  this._x = parseInt(e.pageX);
	  this.column_inner.find(">.container").css("max-width",current_padding+"px")
	  guideline_draw(e,this.rightlinedrag,null);
	  this.rightlinedrag.next().html("最大宽度:"+current_padding+"px").css("min-width","120px");
    },
	startChangeX2: function(e) {
      vc.frame_window.jQuery('body').addClass('vc-column-dragging dx').disableSelection();
      this._x = parseInt(e.pageX);
      vc.$page.bind('mousemove.columnSize', this.resizeX2);
      $(vc.frame_window.document).unbind().mouseup(this.stopChangeX2);
	  this.old_padding = this.column_inner.find(">.container").width();
	  guideline_start(e,this.column_inner.closest(".container"));
	  this.leftlinedrag.next().html("").css("min-width","0");
	  this.column_inner.find(">.container").css("margin","0 auto");
    },
	stopChangeX2: function(e) {
      vc.frame_window.jQuery('body').removeClass('vc-column-dragging dx').enableSelection();
	  this.removeControls();
      vc.$page.unbind('mousemove.columnSize');
	  if(this.column_inner.find(">.container").offset().left > e.pageX){
		var current_padding = "";
	  }else{
		var current_padding = this.column_inner.find(">.container").width();
	  }
	  if(this.old_padding!=current_padding){
		  ajaxBeforeLoading(this.model.get('id'));
		  var params = this.model.get('params');
		  params.rowmaxwidth = current_padding;
		  this.model.save({params: params});
		  vc.ShortcodesBuilder.update(this.model);
		  vc.ShortcodesBuilder.save();
	  }
	   $(vc.frame_window.document).unbind();
	   guideline_end();

    },
	resizeX2: function(e) {
		
      var height, old_height, diff;
      diff = e.pageX - this._x;
	  if(diff>0 &&  this.column_inner.find(">.container").offset().left > e.pageX){
		this.column_inner.find(">.container").css("max-width","100%")
	  }
	  var current_padding = this.column_inner.find(">.container").width();
	  current_padding = current_padding*1 - diff*2;
	 
	  this._x = parseInt(e.pageX);
	  this.column_inner.find(">.container").css("max-width",current_padding+"px")
	  guideline_draw(e,this.leftlinedrag,null,"left");
	  this.leftlinedrag.next().html("最大宽度:"+current_padding+"px").css("min-width","120px");
    },


    addColumn: function(e) {
      _.isObject(e) && e.preventDefault();
      vc.shortcodes.create({shortcode: 'vc_column', parent_id: this.model.get('id'), params: {width: 12}});
    },
    addElement: function(e) {
      e && e.preventDefault();
      this.layoutEditor().render(this.model).show();
    },
    layoutEditor: function() {
      if(_.isUndefined(vc.row_layout_editor)) vc.row_layout_editor = new vc.RowLayoutEditorPanelView({el: $('#vc-row-layout-panel')});
      return vc.row_layout_editor;
    },
    convertToWidthsArray: function(string) {
      return _.map(string.split(/_/), function(c){
        var w = c.split('');
        w.splice(Math.floor(c.length/2), 0, '/');
        return w.join('');
      });
    },
    changed: function() {
      this.addLayoutClass();
    },
    content: function() {
      if(this.$content === false) this.$content = this.$el.find('.vc-container-anchor:first').parent();
      this.$el.find('.vc-container-anchor:first').remove();
      return this.$content;
    },
    addLayoutClass: function() {
      this.$el.removeClass('vc_layout_' + this.layout);
      this.layout = _.reject(vc.shortcodes.where({parent_id: this.model.get('id')}), function(model){return model.get('deleted')}).length;
      this.$el.addClass('vc_layout_' + this.layout);
    },
    convertRowColumns: function(layout,mobilelayout,padding,layout2,flag) {
      if(!layout) return false;
      var view = this, columns_contents = [], new_model,columns = this.convertToWidthsArray(layout);
	  if(layout2){
		var mobilecolumns = this.convertToWidthsArray(layout2);
	  }
	  var $num = 0,$i=0;
      vc.layout_change_shortcodes = [];
      vc.layout_old_columns = vc.shortcodes.where({parent_id: this.model.get('id')});
      _.each(vc.layout_old_columns, function(column){
        column.set('deleted' , true);
        $i++;
        if(column.view.$el.hasClass("inserthere")){
        	$num  = $i;
        }
        columns_contents.push({shortcodes: vc.shortcodes.where({parent_id: column.get('id')}), params: column.get('params')});
       
        
      });
      $i =0;
      var column_length = columns.length;
      _.each(columns, function(column){
		  if(mobilecolumns){
			 var c_p =  {width: column,layout: mobilelayout,mobilepaddingright:padding/2,mobilepaddingleft:padding/2,mobilewidth: mobilecolumns[$i],perwidth:''};
		  }else{
			 if(mobilelayout=="1" || mobilelayout=="2"){
				var c_p =  {width: column,layout: mobilelayout,perwidth:'',mobilepaddingright:padding/2,mobilepaddingleft:padding/2};
			 }else{
				var c_p =  {width: column,layout: mobilelayout,perwidth:''};
			 }
		  }
		  $i++;
		  if($num>0){
			  if($i==$num+1){
				  //空的插入在这里
				  var prev_settings = "";
			  }else{
				  var prev_settings = columns_contents.shift();
			  }
		  }else{
			  if(flag=="first" && $i=="1"){
				  //空的插入在这里
				  var  prev_settings = "";
			  }else if(flag=="last" && $i==column_length){
				   var  prev_settings = "";
			  }else{
				  var prev_settings = columns_contents.shift();
			  }
		  }
		 
        if(_.isObject(prev_settings)) {
          new_model = vc.ShortcodesBuilder.create({shortcode: this.column_tag, parent_id: this.model.get('id'), order: vc.shortcodes.nextOrder(), params: _.extend({}, prev_settings.params, c_p)}).last();
          _.each(prev_settings.shortcodes, function(shortcode){
            shortcode.save({parent_id: new_model.get('id'), order: vc.shortcodes.nextOrder()}, {silent: true});
            vc.layout_change_shortcodes.push(shortcode);
          }, this);
        } else {
          new_model = vc.ShortcodesBuilder.create({shortcode: this.column_tag, parent_id: this.model.get('id'), order: vc.shortcodes.nextOrder(), params: c_p}).last();
        }
      }, this);
      _.each(columns_contents, function(column) {
        _.each(column.shortcodes, function(shortcode){
          shortcode.save({parent_id: new_model.get('id'), order: vc.shortcodes.nextOrder()}, {silent: true});
          vc.layout_change_shortcodes.push(shortcode);
        }, this);
      },this);
      vc.ShortcodesBuilder.render(function(){
        _.each(vc.layout_change_shortcodes, function(shortcode){
          shortcode.trigger('change:parent_id');
        });
        _.each(vc.layout_old_columns, function(column){
          column.destroy();
        });
        vc.layout_old_columns = [];
        vc.layout_change_shortcodes = [];
      });
      return columns;
    }
  });
  window.InlineShortcodeView_vc_column = window.InlineShortcodeViewContainerWithParent.extend({
    controls_selector: '#vc-controls-template-vc_column',
    resizeDomainName: 'columnSize',
    _y: 0,
    css_width: 12,
	old_height:false,
    column_inner:false,
    prepend: false,
    initialize: function(params) {
      window.InlineShortcodeView_vc_column.__super__.initialize.call(this, params);
       _.bindAll(this,'startChangeCX', 'stopChangeCX', 'resizeCX','startChangeX1', 'stopChangeX1', 'resizeX1','startChangeX2', 'stopChangeX2', 'resizeX2');
       /* if(this.model){
	 		  var $this = this;
	 		  var model_id = this.model.get("id");
	 		  //专栏
			  setTimeout(function(){
			     	  vc.frame_window.jQuery("[data-model-id='"+model_id+"']").waypoint({
			 				handler: function(direction) {
			 					$this.addControls_onhover();
			 				},
			 				triggerOnce: true,
			 				offset: "100%",
			 			})
			  },500);
	 	  }*/
    },
    render: function() {
      var width;
      window.InlineShortcodeView_vc_column.__super__.render.call(this);
      this.prepend = false;
      // Here goes width logic

      width = this.getParam('width') || '1/1';
      this.css_class_width = this.convertSize(width).replace(/[^\d]/g, '');

      this.$el.find('.vc-vc_column.vc-container').removeClass('vc_span' + this.css_class_width);
      this.$el.addClass('vc_span' + this.css_class_width);
      this.$el.removeClass('vc_span' + this.css_class_width);

      return this;
    },
	startChangeCX: function(e) {
	 
      vc.frame_window.jQuery('body').addClass('vc-column-dragging dx').disableSelection();
      this._x = parseInt(e.pageX);
	  var now = this.column_inner_parent.parent();
	  this.column_next = now.next().find(">div");
	  var row_section_width = this.column_inner_parent.closest("section").find("> .container >.qfe_row").width();
      vc.$page.bind('mousemove.columnSize', this.resizeCX);
      $(vc.frame_window.document).unbind().mouseup(this.stopChangeCX);
	  
	  var iscontainer = false;
	  var sumwidth =0;
	  var tmp_width = 0;
	  var parent_width = 0;
	  now.parent().find(">.vc-element").each(function(){
		var dw = $(this).find("> div").attr("data-dw");
		
		if(dw){
			var tmp = dw.split("/");
			var num = tmp[0]*12/tmp[1];
			sumwidth = sumwidth +num;
			if ($(this).is(now)) {
				iscontainer = true;
			}
			var width = $(this).find("> div").css("width");
			if(width) width = width.replace("px","");
			tmp_width += width*1;
			if(iscontainer && sumwidth%12==0){
				parent_width = tmp_width;
				iscontainer = false;
			}else if(sumwidth%12==0){
				tmp_width = 0;
			}
			
		}
	})
	


	  this.old_width= this.column_inner_parent.css("width").replace("px","");
	  this.old_parent_width = this.column_next.css("width").replace("px","")*1 + this.column_inner_parent.css("width").replace("px","")*1;
	  this.old_parent_perwidth = (this.column_next.css("width").replace("px","")*1 + this.column_inner_parent.css("width").replace("px","")*1)/ row_section_width;
	  if(parent_width >= row_section_width){
		  this.old_parent_perwidth = this.old_parent_perwidth - 0.001;
	  }
	  
	  this.drag_column_value = this.column_inner.find(".drag-column-element-left-value").show().html("");

	  guideline_start(e,this.column_inner.closest(".qfy-element"),"content");
    },
	stopChangeCX: function() {
	  
	  
		
		
      vc.frame_window.jQuery('body').removeClass('vc-column-dragging dx').enableSelection();
      vc.$page.unbind('mousemove.columnSize');
	  $(vc.frame_window.document).unbind();
	  this.drag_column_value.hide().html("");

	  var pwidth = this.column_inner_parent.css("width").replace("px","")*1;
	  var per = ((pwidth*this.old_parent_perwidth/this.old_parent_width)*100);
	  this.column_inner_parent.css("width",per+"%");
	  
	  var p_id = this.model.get('parent_id');
	  var tag = this.model.get('shortcode');
	  if(tag=="vc_column"){
		ajaxBeforeLoading(p_id);
	  }else{
		ajaxBeforeLoading(0,this.column_inner_parent.closest(".vc-element.vc-vc_row"));
	  }
	
	  var params = this.model.get('params');
	  params.perwidth = per;
	  this.model.save({params: params});
	  vc.ShortcodesBuilder.update(this.model);
	  var needreloadjs = false;
	  if(this.model.view.$el.find('.qfe_gallery_slides,.qfe_images_lib_isotope,.vc-carousel,.isotope-item').length>0){
		  needreloadjs = true;
	  }
	 

	  
	  var iscontainer = false;
	  var sumwidth =0;
	  var tmp_width = 0;
	  //var parent_width = 0;
	  var next_tmp_width = 0;
	  var next_width = 0;
	  var next = this.column_next.parent();
	   var row_section_width = this.column_inner_parent.closest("section").find("> .container >.qfe_row").width();
	  this.column_inner_parent.parent().parent().find(">.vc-element").each(function(){
		 var dw = $(this).find("> div").attr("data-dw");
		
		if(dw){
			
			var tmp = dw.split("/");
			var num = tmp[0]*12/tmp[1];
			sumwidth = sumwidth +num;
			var width = $(this).find("> div").css("width");
			if(width) width = width.replace("px","");
			var model = vc.shortcodes.get($(this).attr('data-model-id'));
			var params = model.get('params');
			if(!params.perwidth){
				params.perwidth = Math.floor10(width*100/row_section_width, -1);
				model.save({params: params});
				vc.ShortcodesBuilder.update(model);
			}
			if ($(this).is(next)) {
				iscontainer = true;
			}else{
				next_tmp_width +=params.perwidth*1;
			}
			
			
			if(iscontainer && sumwidth%12==0){
				//parent_width = tmp_width;
				next_width = next_tmp_width;
				iscontainer = false;
			}else if(sumwidth%12==0){
				tmp_width = 0;
				next_tmp_width = 0;
			}
			
		}
	})
	
	  var per_1 = Math.floor10(100 - next_width, -1);
	  this.column_next.css("width",per_1+"%");
	  var nextmodel = vc.shortcodes.get(this.column_next.parent().attr('data-model-id'));
	  var nextparams = nextmodel.get('params');
	  nextparams.perwidth = per_1;  
	  nextmodel.save({params: nextparams});
	  vc.ShortcodesBuilder.update(nextmodel);
	  if(nextmodel.view.$el.find('.qfe_gallery_slides,.qfe_images_lib_isotope,.vc-carousel,.isotope-item').length>0){
		  needreloadjs = true; 
	  }
	  
	  if(needreloadjs){
		  $this = this;
		  vc.ShortcodesBuilder.save(false,function(){
			  vc.frame_window.vc_slidersBehaviour();
			  vc.frame_window.vc_carouselBehaviour();
			  vc.frame_window.bitLibLayout();
			  setTimeout(function(){ vc.frame_window.vc_teaserGrid();},500);
			 
			  nextmodel.view.$el.find('[data-ride="vc-carousel"]').each(function () {
			      var $carousel = $(this).attr("id");
			      vc.frame_window.jQuery('#'+$carousel).carousel($(this).data())
			  })
			   
			  $this.model.view.$el.find('[data-ride="vc-carousel"]').each(function () {
				  var $carousel = $(this).attr("id");
			      vc.frame_window.jQuery('#'+$carousel).carousel($(this).data())
			  })
		  });
	  }else{
		  vc.ShortcodesBuilder.save();
	  }
	  guideline_end();
    },
	resizeCX: function(e) {
		
     var height, old_height, diff;
     diff = e.pageX - this._x;
	 var old_width = this.old_width*1 + diff ;
	 var per= ((old_width*this.old_parent_perwidth/this.old_parent_width)*100);
	 var per_1 =  Math.floor(this.old_parent_perwidth*100-per, -1);
	 	 
	  if(old_width>0 && per_1>0){
	    this.column_inner_parent.css("width",per+"%");
	    this.column_next.css("width",per_1+"%");
	    this.drag_column_value.html("左："+per+"% 右："+per_1+"%");
	  }
	  guideline_draw(e,this.$controls_c_right,null,'left');
    },
	
	startChangeX1: function(e) {
      vc.frame_window.jQuery('body').addClass('vc-column-dragging dx').disableSelection();
      this._x = parseInt(e.pageX);
      vc.$page.bind('mousemove.columnSize', this.resizeX1);
      $(vc.frame_window.document).unbind().mouseup(this.stopChangeX1);
	  this.old_padding = this.column_inner.css("width").replace("px","");
	  guideline_start(e,this.column_inner,"content");
	  this.rightlinedrag.next().html("").css("min-width","0");
	
	  if( this.column_inner.css("margin-left")=="0px" && this.column_inner.css("margin-right")=="0px"){
		 this.column_inner.css("margin","0 auto");
	  }
    },
	stopChangeX1: function(e) {
      vc.frame_window.jQuery('body').removeClass('vc-column-dragging dx').enableSelection();
	
      vc.$page.unbind('mousemove.columnSize');
	  var current_padding = this.column_inner.css("width").replace("px","");
	 if(this.column_inner.parent().css("width").replace("px","")+this.column_inner.parent().offset().left < e.pageX){
		 current_padding = "";
	  }
	  if(this.old_padding!=current_padding){
		  ajaxBeforeLoading(this.model.get('id'));
		  var params = this.model.get('params');
		  params.maxwidth = current_padding;
		  this.model.save({params: params});
		  vc.ShortcodesBuilder.update(this.model);
		  vc.ShortcodesBuilder.save();
	  }
	   $(vc.frame_window.document).unbind();
	   guideline_end();
    },
	resizeX1: function(e) {
		
      var height, old_height, diff;
	  if(this.column_inner.parent().css("width").replace("px","")+this.column_inner.parent().offset().left >= e.pageX){
		var height, old_height, diff;
		diff = e.pageX - this._x;
		var current_padding = this.column_inner.css("width").replace("px","");
		current_padding = current_padding*1 + diff*2;
	  }else{
		var current_padding = this.column_inner.parent().css("width").replace("px","");
	  }
	 
	  this._x = parseInt(e.pageX);
	  this.column_inner.css("max-width",current_padding+"px").width(current_padding);
	  guideline_draw(e,this.rightlinedrag,null);
	  this.rightlinedrag.next().html("最大宽度:"+current_padding+"px").css("min-width","120px");
    },
	startChangeX2: function(e) {
      vc.frame_window.jQuery('body').addClass('vc-column-dragging dx').disableSelection();
      this._x = parseInt(e.pageX);
      vc.$page.bind('mousemove.columnSize', this.resizeX2);
      $(vc.frame_window.document).unbind().mouseup(this.stopChangeX2);
	  this.old_padding = this.column_inner.css("width").replace("px","");
	
	  guideline_start(e,this.column_inner,"content");
	  this.leftlinedrag.next().html("").css("min-width","0");
	  if( this.column_inner.css("margin-left")=="0px" && this.column_inner.css("margin-right")=="0px"){
		 this.column_inner.css("margin","0 auto");
	  }
    },
	stopChangeX2: function(e) {
      vc.frame_window.jQuery('body').removeClass('vc-column-dragging dx').enableSelection();

      vc.$page.unbind('mousemove.columnSize');
	  var current_padding = this.column_inner.css("width").replace("px","");
	  if(this.column_inner.parent().offset().left > e.pageX){
	     current_padding ="";
	  }
	 
	  if(this.old_padding!=current_padding){
		  ajaxBeforeLoading(this.model.get('id'));
		  var params = this.model.get('params');
		  params.maxwidth = current_padding;
		  this.model.save({params: params});
		  vc.ShortcodesBuilder.update(this.model);
		  vc.ShortcodesBuilder.save();
	  }
	   $(vc.frame_window.document).unbind();
	   guideline_end();
    },
	resizeX2: function(e) {
	 
	
	if(this.column_inner.parent().offset().left <= e.pageX){
		var height, old_height, diff;
		diff = e.pageX - this._x;
		var current_padding = this.column_inner.css("width").replace("px","");
		current_padding = current_padding*1 - diff*2;
	  }else{
		current_padding = this.column_inner.parent().css("width").replace("px","");
	  }
	  this._x = parseInt(e.pageX);
	  this.column_inner.css("max-width",current_padding+"px");

	  guideline_draw(e,this.leftlinedrag,null);
	  this.leftlinedrag.next().html("最大宽度:"+current_padding+"px").css("min-width","120px");
	
    },


    convertSize: function(width) {
      var prefix = 'vc_span',
        numbers = width ? width.split('/') : [1,1],
        range = _.range(1,13),
        num = !_.isUndefined(numbers[0]) && _.indexOf(range, parseInt(numbers[0], 10)) >=0 ? parseInt(numbers[0], 10) : false,
        dev = !_.isUndefined(numbers[1]) && _.indexOf(range, parseInt(numbers[1], 10)) >=0 ? parseInt(numbers[1], 10) : false;
      if(num!==false && dev!==false) {
        return prefix + (12*num/dev);
      }
      return prefix + '12';
    }
  });
  window.InlineShortcodeView_vc_row_inner = window.InlineShortcodeView_vc_row.extend({
    column_tag: 'vc_column_inner'
  });
    window.InlineShortcodeView_vc_row_embad = window.InlineShortcodeView_vc_row.extend({
    column_tag: 'vc_column_embad'
  });

  window.InlineShortcodeView_vc_column_inner = window.InlineShortcodeView_vc_column.extend({
  });
  window.InlineShortcodeView_vc_column_embad = window.InlineShortcodeView_vc_column.extend({
  });
  window.InlineShortcodeView_vc_tabs = window.InlineShortcodeView_vc_row.extend({
    events: {
      'click > :first > .vc-empty-element': 'addElement',
      'click > :first > .qfe_wrapper > .ui-tabs-nav > li': 'setActiveTab'
    },
    already_build: false,
    active_model_id: false,
    render: function() {
      _.bindAll(this, 'stopSorting');
      this.$tabs = this.$el.find('> .qfe_tabs');
      window.InlineShortcodeView_vc_tabs.__super__.render.call(this);
      return this;
    },
    changed: function() {
      if(this.$el.find('.vc-element').length == 0) {
        this.$el.addClass('vc-empty').find('> :first > div').addClass('vc-empty-element');
      } else {
        this.$el.removeClass('vc-empty').find('> :first > div').removeClass('vc-empty-element');
      }
      this.setSorting();
    },
    setActiveTab: function(e) {
      var $tab = $(e.currentTarget);
      this.active_model_id = $tab.data('modelId');
    },
    tabsControls: function() {
      return this.$el.find('.qfe_tabs_nav');
    },
    buildTabs: function(active_model) {
      var active = false;
      if(active_model) {
        this.active_model_id = active_model.get('id');
        active = this.tabsControls().find('[data-model-id=' + this.active_model_id +']').index();
      }
      if(this.active_model_id === false) {
        this.active_model_id = this.tabsControls().find('li:first').data('modelId');
      }
      vc.frame_window.vc_iframe.buildTabs(this.$tabs, active);
    },
    beforeUpdate: function() {
      this.$tabs.find('.qfe_tabs_heading').remove();
      vc.frame_window.vc_iframe.destroyTabs(this.$tabs);
    },
    updated: function() {
      window.InlineShortcodeView_vc_tabs.__super__.updated.call(this);
      this.$tabs.find('.qfe_tabs_nav:first').remove();
      vc.frame_window.vc_iframe.buildTabs(this.$tabs);
      this.setSorting();
    },
    addTab: function(model) {
      if(this.updateIfExistTab(model)) return false;
      var $control = this.buildControlHtml(model),
          $cloned_tab;
      if(model.get('cloned') && ($cloned_tab = this.tabsControls().find('[data-model-id=' + model.get('cloned_from').id + ']')).length) {
        $control.insertAfter($cloned_tab);
      } else {
        $control.appendTo(this.tabsControls());
      }
      this.changed();
      return true;
    },
    updateIfExistTab: function(model) {
      var $tab = this.tabsControls().find('[data-model-id=' + model.get('id') + ']');
      if($tab.length) {
        $tab.find('a').text(model.getParam('title'));
        return true;
      }
      return false;
    },
    buildControlHtml: function(model) {
      var params = model.get('params'),
          $tab =$('<li data-model-id="' + model.get('id') +'"><a href="#tab-' + model.getParam('tab_id') + '"></a></li>');
      $tab.data('model', model);
      $tab.find('> a').text(model.getParam('title'));
      return $tab;
    },
    addElement: function(e) {
      e && e.preventDefault();
      vc.ShortcodesBuilder.create({shortcode: 'vc_tab', params: {tab_id: vc_guid() + '-' + this.tabsControls().find('li').length, title: window.i18nLocale.tab}, parent_id: this.model.get('id')});
      vc.ShortcodesBuilder.render();
    },
    setSorting: function() {
      vc.frame_window.vc_iframe.setTabsSorting(this);
    },
    stopSorting: function(event, ui) {
      this.tabsControls().find('> li').each(function(key, value){
        var model = $(this).data('model');
        model.save({order: key}, {silent: true});
      });
    },
    placeElement: function($view, activity) {
      var $place_after = this.content().find('.vc-place-after');
      if($place_after.is('.vc-element')) {
        $view.insertAfter($place_after.removeClass('vc-place-after'));
      } else {
        $view.insertAfter(this.tabsControls());
      }
      this.changed();
    },
    removeTab: function(model) {
      if(vc.shortcodes.where({parent_id: this.model.get('id')}).length == 1) return this.model.destroy();
      var $tab = this.tabsControls().find('[data-model-id=' + model.get('id') + ']'),
          index = $tab.index();
      if( this.tabsControls().find('[data-model-id]:eq(' + (index+1) + ')').length) {
        vc.frame_window.vc_iframe.setActiveTab(this.$tabs, (index+1));
      } else if(this.tabsControls().find('[data-model-id]:eq(' + (index-1) + ')').length) {
        vc.frame_window.vc_iframe.setActiveTab(this.$tabs, (index-1));
      } else {
        vc.frame_window.vc_iframe.setActiveTab(this.$tabs, 0);
      }
      $tab.remove();
    },
    clone: function(e) {
      _.each(vc.shortcodes.where({parent_id: this.model.get('id')}), function(model){
        model.set('active_before_cloned', this.active_model_id === model.get('id'));
      }, this);
      window.InlineShortcodeView_vc_tabs.__super__.clone.call(this, e);
    }
  });
  window.InlineShortcodeView_vc_tour = window.InlineShortcodeView_vc_tabs.extend({
    render: function() {
      _.bindAll(this, 'stopSorting');
      this.$tabs = this.$el.find('> .qfe_tour');
      window.InlineShortcodeView_vc_tabs.__super__.render.call(this);
      return this;
    },
    beforeUpdate: function() {
      this.$tabs.find('.qfe_tour_heading,.qfe_tour_next_prev_nav').remove();
      vc.frame_window.vc_iframe.destroyTabs(this.$tabs);
    },
    updated: function() {
      this.$tabs.find('.qfe_tour_next_prev_nav').appendTo(this.$tabs);
      window.InlineShortcodeView_vc_tour.__super__.updated.call(this);
    }
  });
  window.InlineShortcodeView_vc_tab = window.InlineShortcodeViewContainerWithParent.extend({
    controls_selector: '#vc-controls-template-vc_tab',
    render: function() {
      var tab_id, result, active;
      window.InlineShortcodeView_vc_tab.__super__.render.call(this);
      this.$tab = this.$el.find('> :first');
      tab_id = this.$tab.attr('id');
      this.$el.attr('id', tab_id);
      this.$tab.attr('id', tab_id + '-real');
      if(!this.$tab.find('.vc-element').length) this.$tab.html('');
      this.$el.addClass('ui-tabs-panel qfe_ui-tabs-hide');
      this.$tab.removeClass('ui-tabs-panel qfe_ui-tabs-hide');
      if(this.parent_view && this.parent_view.addTab) {
        if(!this.parent_view.addTab(this.model))  this.$el.removeClass('qfe_ui-tabs-hide');
      }
      active = this.doSetAsActive();
      this.parent_view.buildTabs(active);
      return this;
    },
    doSetAsActive: function() {
      var active_before_cloned = this.model.get('active_before_cloned');
      if(!this.model.get('from_content') && !this.model.get('default_content') && _.isUndefined(active_before_cloned)){
        return this.model;
      } else if(!_.isUndefined(active_before_cloned)) {
        this.model.unset('active_before_cloned');
        if(active_before_cloned === true) return this.model;
      }
      return false;
     },
    removeView: function(model) {
      window.InlineShortcodeView_vc_tab.__super__.removeView.call(this, model);
      if(this.parent_view && this.parent_view.addTab) {
        this.parent_view.removeTab(model);
      }
    },
    clone: function(e) {
      _.isObject(e) && e.preventDefault()  && e.stopPropagation();
      vc.clone_index = vc.clone_index / 10;
      var clone = this.model.clone(),
          params = clone.get('params');
      vc.CloneModel(this.model, this.model.get('parent_id'));
      vc.ShortcodesBuilder.render();
    }
  });
  window.InlineShortcodeView_vc_accordion = window.InlineShortcodeView_vc_row.extend({
    events: {
      'click > .qfe_accordion > .vc-empty-element': 'addElement'
    },
    render: function() {
      _.bindAll(this, 'stopSorting');
      this.$accordion = this.$el.find('> .qfe_accordion');
      window.InlineShortcodeView_vc_accordion.__super__.render.call(this);
      return this;
    },
    changed: function() {
      if(this.$el.find('.vc-element').length == 0) {
        this.$el.addClass('vc-empty').find('> :first').addClass('vc-empty-element');
      } else {
        this.$el.removeClass('vc-empty').find('> .vc-empty-element').removeClass('vc-empty-element');
        this.setSorting();
      }
    },
    buildAccordion: function(active_model) {
      var active = false;
      if(active_model) {
        active = this.$accordion.find('[data-model-id=' + active_model.get('id') +']').index();
      }
      vc.frame_window.vc_iframe.buildAccordion(this.$accordion, active);
    },
    setSorting: function() {
      vc.frame_window.vc_iframe.setAccordionSorting(this);
    },
    stopSorting: function() {
      this.$accordion.find('> .qfe_accordion_wrapper > .vc-element').each(function(){
        var model = vc.shortcodes.get($(this).data('modelId'));
        model.save({order: $(this).index()}, {silent: true});
      });
    },
    addElement: function(e) {
      e && e.preventDefault();
      vc.ShortcodesBuilder.create({shortcode: 'vc_accordion_tab', params: {title: window.i18nLocale.section}, parent_id: this.model.get('id')});
      vc.ShortcodesBuilder.render();
    }
  });
  window.InlineShortcodeView_vc_accordion_tab = window.InlineShortcodeView_vc_tab.extend({
    events: {
      'click > .vc-controls .element .control-btn-delete': 'destroy',
      'click > .vc-controls .element .control-btn-edit': 'edit',
      'click > .vc-controls .element .control-btn-clone': 'clone',
      'click > .vc-controls .element .control-btn-prepend': 'prependElement',
      'click > .vc-controls .control-btn-append': 'appendElement',
      'click > .vc-controls .parent .control-btn-delete': 'destroyParent',
      'click > .vc-controls .parent .control-btn-edit': 'editParent',
      'click > .vc-controls .parent .control-btn-clone': 'cloneParent',
      'click > .vc-controls .parent .control-btn-prepend': 'addSibling',
      'click > .qfe_accordion_section > .vc-empty-element': 'appendElement',
      'click > .vc-controls .control-btn-switcher': 'switchControls',
      //'mouseenter': 'resetActive',
      //'mouseleave': 'holdActive'
    },
    changed: function() {
      if(this.$el.find('.vc-element').length == 0) {
        this.$el.addClass('vc-empty');
        this.content().addClass('vc-empty-element');
      } else {
        this.$el.removeClass('vc-empty');
        this.content().removeClass('vc-empty-element');
      }
    },
    render: function() {
      window.InlineShortcodeView_vc_tab.__super__.render.call(this);
      if(!this.content().find('.vc-element').length) this.content().html('');
      this.parent_view.buildAccordion(!this.model.get('from_content') && !this.model.get('default_content') ? this.model : false);
      return this;
    }
  });
  vc.cloneMethod_vc_tab = function(data, model) {
    data.params = _.extend({}, data.params);
    data.params.tab_id = vc_guid() + '-cl';
    if(!_.isUndefined(model.get('active_before_cloned'))) data.active_before_cloned = model.get('active_before_cloned');
    return data;
  };
  window.InlineShortcodeView_vc_pie = window.InlineShortcodeView.extend({
    render: function() {
      window.InlineShortcodeView_vc_pie.__super__.render.call(this);
      vc.frame_window.vc_iframe.addActivity(function(){
        this.vc_pieChart();
      });
      return this;
    },
    parentChanged: function() {
      vc.frame_window.vc_pieChart();
    }
  });
  window.InlineShortcodeView_vc_images_carousel = window.InlineShortcodeView.extend({
    render: function() {
	 
      var model_id = this.model.get('id');
	 
      window.InlineShortcodeView_vc_images_carousel.__super__.render.call(this);
	   
      vc.frame_window.vc_iframe.addActivity(function(){
		
        this.vc_iframe.vc_imageCarousel(model_id);
      });
      return this;
    }
  });
  window.InlineShortcodeView_vc_carousel =  window.InlineShortcodeView_vc_images_carousel.extend({});
  window.InlineShortcodeView_advanced_list =  window.InlineShortcodeView_vc_images_carousel.extend({});
  window.InlineShortcodeView_vc_gallery = window.InlineShortcodeView.extend({
    render: function() {
      var model_id = this.model.get('id');
      window.InlineShortcodeView_vc_gallery.__super__.render.call(this);
      vc.frame_window.vc_iframe.addActivity(function(){
        this.vc_iframe.vc_gallery(model_id);
      });
      return this;
    }
  });
   window.InlineShortcodeView_vc_column_text_sliders = window.InlineShortcodeView_vc_gallery.extend({});

  window.InlineShortcodeView_vc_posts_slider = window.InlineShortcodeView.extend({
    render: function() {
      var model_id = this.model.get('id');
      window.InlineShortcodeView_vc_posts_slider.__super__.render.call(this);
      vc.frame_window.vc_iframe.addActivity(function(){
        this.vc_iframe.vc_postsSlider(model_id);
      });
      return this;
    }
  });
  window.InlineShortcodeView_vc_toggle = window.InlineShortcodeView.extend({
    render: function() {
      var model_id = this.model.get('id');
      window.InlineShortcodeView_vc_posts_slider.__super__.render.call(this);
      vc.frame_window.vc_iframe.addActivity(function(){
        this.vc_iframe.vc_toggle(model_id);
      });
      return this;
    }
  });
  window.InlineShortcodeView_vc_flickr = window.InlineShortcodeView.extend({
    render: function() {
      window.InlineShortcodeView_vc_flickr.__super__.render.call(this);
      var $placeholder = this.$el.find('.vc-flickr-inline-placeholder');
      vc.frame_window.vc_iframe.addActivity(function(){
        this.vc_iframe.vc_Flickr($placeholder);
      });
      return this;
    }
  });
  vc.addTemplateFilter(function (string) {
    var random_id = VCS4() + '-' + VCS4();
    return string.replace(/tab\_id\=\"([^\"]+)\"/g, 'tab_id="$1' + random_id + '"');
  });
})(window.jQuery);;

/* vc_inline_build_js: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-content/plugins/qfy_editor/inline/assets/js/build.js) */
/* =========================================================
 * build.js v1.0.1
 * =========================================================
 * Copyright 2013 QFEditor
 *
 * Visual composer builder backbone/underscore version
 * ========================================================= */

if(_.isUndefined(vc)) var vc = {};
var vc_ready = false;
var vc_load_timeout;
(function ($) {
  "use strict";
  vc.createPreLoader = function() {
    vc.$preloader = $('#vc-preloader');

	if (typeof vc_load_timeout!="undefined"){
		clearTimeout(vc_load_timeout);
	}
    vc.$preloader.show();
	function vcReloadSelf(){
			if($('#vc-preloader:visible').length>0){
				 top.jConfirmMore("糟糕！似乎网络出现了问题。",function(){
					top.window.location.href=top.window.location.href
				},"警告","重新加载","继续等待",function(){
					vc_load_timeout = setTimeout(function(){vcReloadSelf()},15000);
				})
			}
		
	}
	vc_load_timeout = setTimeout(function(){vcReloadSelf();},30000);

  };
  vc.removePreLoader = function() {
    vc.$preloader && vc.$preloader.hide();
	if (typeof vc_load_timeout!="undefined"){
		clearTimeout(vc_load_timeout);
	}
  };
$(function(){
  vc.createPreLoader();
  vc.reload = false;
  vc.reloadAjax = false;
  vc.reloadIframeContent = '';
  vc.reload_post_shortcodes = '';
  vc_ready = true;
});
  vc.build = function() {
	 vc.loaded = true;
    // Get current content data
	 if (vc.reload == false) {
		 vc.post_shortcodes = window.vc_post_shortcodes;
	 } else {
		 //waiting for ajax
		 if (vc.reloadAjax == false) {
			 setTimeout(vc.build, 1000);
			 return;
		 }
		 vc.post_shortcodes = vc.reload_post_shortcodes;
	 }
    vc.map = window.vc_user_mapper;


    $('#qfadminbar').remove();
    $('body').attr('data-vc', true);
    vc.post_id = $('#vc-post-id').val();
    vc.is_mobile = $('body.mobile').length > 0;
    // Create Modals & panels
    vc.add_element_block_view = new vc.AddElementBlockView({el: '#vc-add-element-dialog'});
	vc.add_element_block_view1 = new vc.AddElementBlockView1({el: '#vc-add-element-dialog1'});
	vc.add_element_block_view2 = new vc.AddElementBlockView2({el: '#vc-add-element-dialog2'});
	
	vc.add_widget_block_view = new vc.AddWidgetBlockView({el: '#vc-add-widget-dialog'});
	vc.add_header_widget_block_view = new vc.AddWidgetBlockView({el: '#vc-add-header-widget-dialog'});
	vc.add_maintop_widget_dialog = new vc.AddWidgetBlockView({el: '#vc-add-maintop-widget-dialog'});

	vc.setting_widget_dialog = new vc.setWidgetBlockView({el: '#vc-setting-widget-dialog'});
	vc.setting_widget_dialog2 = new vc.setWidgetBlockView({el: '#vc-setting-widget-dialog2'});
	vc.setting_widget_dialog3 = new vc.setWidgetBlockView({el: '#vc-setting-widget-dialog3'});
	vc.setting_widget_dialog4 = new vc.setWidgetBlockView({el: '#vc-setting-widget-dialog4'});
	vc.setting_widget_dialog5 = new vc.setWidgetBlockView({el: '#vc-setting-widget-dialog5'});
	vc.setting_widget_dialog6 = new vc.setWidgetBlockView({el: '#vc-setting-widget-dialog6'});
	vc.setting_widget_dialog7 = new vc.setWidgetBlockView({el: '#vc-setting-widget-dialog7'});
	vc.setting_widget_dialog8 = new vc.setWidgetBlockView({el: '#vc-setting-widget-dialog8'});
	vc.setting_widget_dialog9 = new vc.setWidgetBlockView({el: '#vc-setting-widget-dialog9'});
	vc.setting_widget_dialog10 = new vc.setWidgetBlockView({el: '#vc-setting-widget-dialog10'});
	vc.setting_widget_dialog11 = new vc.setWidgetBlockView({el: '#vc-setting-widget-dialog11'});
	vc.setting_widget_dialog12 = new vc.setWidgetBlockView({el: '#vc-setting-widget-dialog12'});
	vc.setting_widget_dialog13 = new vc.setWidgetBlockView({el: '#vc-setting-widget-dialog13'});
	vc.add_banner_block_view = new vc.AddWidgetBlockView({el: '#vc-add-banner-dialog'});
	vc.add_header2_block_view = new vc.AddWidgetBlockView({el: '#vc-add-header2-dialog'});

	vc.edit_widget_block_view = new vc.EditWidgetBlockView({el: '#vc-edit-widget-dialog'});
	vc.edit_revison_block_view = new vc.EditRevisonBlockView({el: '#vc-edit-revison-dialog'});

	vc.vc_edit_productcolor_dialog = new vc.EditProductcolorBlockView({el: '#vc-edit-productcolor-dialog'});
	vc.edit_slide_block_view = new vc.EditSlideBlockView({el: '#vc-edit-slide-dialog'});
	vc.vc_edit_icon_dialog = new vc.EditIconBlockView({el: '#vc-edit-icon-dialog'});
	vc.edit_menu_block_view = new vc.EditMenuPanelView({el: '#vc-menu-panel'});
	vc.edit_slider_block_view = new vc.EditSliderPanelView({el: '#vc-slider-panel'});
	//menu font setting
	vc.set_menu_font_block_view = new vc.SetMenuFontPanelView({el: '#vc-set-menu-font-panel'});
	vc.add_pop_block_view = new vc.addPopBlockView({el: '#vc-pop-dialog'});
	
	vc.edit_bit_settings_view = new vc.EditBitSettingsPanelView({el: '#vc-bit_settings-panel'});
	vc.edit_bit_style_view = new vc.EditBitStylePanelView({el: '#vc-bit_style-panel'});

    vc.edit_element_block_view = new vc.EditElementPanelView({el: '#vc-properties-panel'});
    vc.post_settings_view = new vc.PostSettingsPanelView({el: '#vc-post-settings-panel'});
    vc.templates_editor_view = new vc.TemplatesEditorPanelView({el: '#vc-templates-editor'});
    vc.app = new vc.View();
    vc.buildRelevance();
    // Build Frame {{
    vc.$frame_wrapper = $('#vc-inline-frame-wrapper');
    vc.$frame = $('#vc-inline-frame');
	
    
	vc.frame = new vc.FrameView({el: $(vc.$frame.get(0).contentWindow.document).find('body').get(0)});
	vc.app.render();
	//for no content help
	var extra = $($('#vc-template-post-content').html()).find('#vc-no-content-add-element').parents('.vc-no-content-helper').clone().wrap('<p>').parent().html();
	var postHtml = vc.reload ? vc.reloadIframeContent+extra : $('#vc-template-post-content').html();
	vc.$page.html(postHtml);
	vc.frame.render();
	// }}
	// Build content of the page
	vc.ShortcodesBuilder.buildFromContent();
	vc.removePreLoader();
	
	if( top!=self && (top.getCookie('frame-width')=="320px") ){
		 vc.setFrameSize('320px');
		 if(top.jQuery("#pagehtmlcontainer").height()==0){
			 top.showpagehtml_fun("nocookie");
		 }
		 top.jQuery(".site_tabs_other span").removeClass("selected");
		 top.jQuery(".mobileStyle span").addClass("selected");
		 vc.$frame.get(0).contentWindow.vc_element_init();
	}else if( top!=self && top.getCookie('frame-width')=="768px"){
		 vc.setFrameSize('768px');
	}else{
		 vc.setFrameSize('100%');
	}
	
  };
  //add by yliu for refresh content
  vc.reloadIframe = function(){

	  var src =  top.jQuery("#site-content-iframe").attr('src');
	  if(src.indexOf("&qfy_time=")>-1){
		src = src.split("&qfy_time=")[0];
	  }
	  top.jQuery("#site-content-iframe").attr('src',src+'&qfy_time='+time());
	  /*vc.loaded = false;
	  vc.reload = true;
	  vc.createPreLoader();
	  var src = $('#vc-inline-frame').attr('src');
	  if(src.indexOf("&qfy_time=")>-1){
		src = src.split("&qfy_time=")[0];
	  }
	  $('#vc-inline-frame').attr('src', src+'&qfy_time='+time());
	  vc.ShortcodesBuilder.ajax({action: 'vc_get_pageshortcode', post: 'post'}).done(function(html){
		  if (html != '') {
		  	var data = $.parseJSON(html);
		  	vc.reloadIframeContent = data.html;
		  	vc.reload_post_shortcodes = data.post_shortcodes;
		  	
	  	  }else{
			var extra = $($('#vc-template-post-content').html()).find('#vc-no-content-add-element').parents('.vc-no-content-helper').clone().wrap('<p>').parent().html();
			var postHtml = vc.reload ? vc.reloadIframeContent+extra : $('#vc-template-post-content').html();
			vc.$page.html(postHtml);
			vc.frame.render();

		  }
		  vc.reloadAjax = true;
	  });*/
  };
  $(window).load(function(){
    if(!vc.loaded) vc.build();
  });
})(window.jQuery);


var qfy_vc_loaded_js = true;;

/* bootstrap_js: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/FeiEditor/bitSite/wp/bootstrap/js/bootstrap.min.js) */
/**
* bootstrap.js v3.0.0 by @fat and @mdo
* Copyright 2013 Twitter Inc.
* http://www.apache.org/licenses/LICENSE-2.0
*/
if(!jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(window.jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]');if(a.length){var b=this.$element.find("input").prop("checked",!this.$element.hasClass("active")).trigger("change");"radio"===b.prop("type")&&a.find(".active").removeClass("active")}this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(!e.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?(this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350),void 0):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(window.jQuery),+function(a){"use strict";function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown")),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown"))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){if("ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown"),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",f);if(h.length){var i=h.index(h.filter(":focus"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("dropdown");d||c.data("dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu]",f.prototype.keydown)}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach()}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(window.jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.attr("data-target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top()),"function"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;this.affixed!==i&&(this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin="bottom"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),"bottom"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(window.jQuery);;

/* bootstrap_iconpicker_js: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/FeiEditor/bitSite/wp/bootstrap/js/bootstrap-iconpicker.min.js) */
/* ========================================================================
 * Bootstrap: bootstrap-iconpicker.js v1.0.0 by @recktoner
 * https://victor-valencia.github.com/bootstrap-iconpicker
 * ========================================================================
 * Copyright 2013 Victor Valencia Rico.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */
/*
****
**
**
**
**
备注，这边没有压缩的文件的icon比压缩的少很多
**
**
**
*/

+function ($) { "use strict";


    // ICONPICKER PUBLIC CLASS DEFINITION
    // ==============================
    var Iconpicker = function (element, options) {
      this.$element = $(element);
      this.options  = $.extend({}, Iconpicker.DEFAULTS, this.$element.data());      
      this.options  = $.extend({}, this.options, options);    
    };

    Iconpicker.ICONSET = {
		glyphicon:[
			'icon-home',"star",'icon-phone','icon-envelope','icon-picture','icon-map-marker','icon-search','icon-play-circle',"phone","phone-alt","qrcode",'icon-ok','icon-remove','icon-trash','icon-camera','icon-comment-alt','icon-comments','icon-user','icon-folder-open','icon-thumbs-up','icon-thumbs-down','icon-weixin','icon-qq','icon-weibo','icon-skype','icon-foursquare','icon-trello','icon-female','icon-weixin-round','icon-tencent-weibo-round','icon-sina-weibo-round','icon-renren','icon-renren-round','icon-qq-round','icon-douban-round','icon-suitcase','icon-apple','icon-windows','icon-android','icon-linux','icon-dribbble','icon-mobile','icon-douban','icon-renren-2','icon-sina-weibo','icon-tencent-weibo','icon-twitter','icon-facebook','icon-pinterest','icon-pinterest-sign','icon-google-plus-sign','icon-google-plus','icon-twitter-sign','icon-facebook-sign','icon-frown','icon-meh','icon-envelope-alt','icon-linkedin','icon-glass','icon-music','icon-heart','icon-star-empty','icon-film','icon-inbox','icon-repeat','icon-refresh','icon-list-alt','icon-lock','icon-flag','icon-headphones','icon-volume-off','icon-align-justify','icon-list','icon-indent-left','icon-indent-right','icon-facetime-video','icon-pencil','icon-adjust','icon-minus-sign','icon-remove-sign','icon-ok-sign','icon-question-sign','icon-info-sign','icon-screenshot','icon-remove-circle','icon-ok-circle','icon-ban-circle','icon-calendar','icon-random','icon-comment','icon-magnet','icon-chevron-up','icon-chevron-down','icon-retweet','icon-shopping-cart','icon-folder-close','icon-signin','icon-trophy','icon-github-sign','icon-upload-alt','icon-lemon','icon-check-empty','icon-bookmark-empty','icon-phone-sign','icon-globe','icon-wrench','icon-tasks','icon-filter','icon-briefcase','icon-fullscreen','icon-group','icon-link','icon-cloud','icon-money','icon-caret-down','icon-caret-up','icon-caret-left','icon-caret-right','icon-columns','icon-sort','icon-sort-down','icon-sort-up','icon-bell-alt','icon-coffee','icon-food','icon-file-alt','icon-building','icon-hospital','icon-ambulance','icon-medkit','icon-fighter-jet','icon-spinner','icon-circle','icon-reply','icon-github-alt','icon-folder-close-alt','icon-folder-open-alt','icon-expand-alt','icon-collapse-alt','icon-smile','icon-subscript','icon-eraser','icon-puzzle','icon-microphone','icon-microphone-off','icon-shield','icon-calendar-empty','icon-fire-extinguisher','icon-rocket','icon-level-down','icon-check-sign','icon-edit-sign','icon-external-link-sign','icon-share-sign','icon-compass','icon-collapse','icon-collapse-top','icon-expand','icon-youtube-sign','icon-youtube','icon-xing','icon-xing-sign','icon-youtube-play','icon-dropbox','icon-stackexchange','icon-instagram','icon-flickr','icon-male','icon-gittip','icon-sun','icon-moon','icon-archive','icon-bug','icon-vk','icon-th-large','icon-th','icon-th-list','icon-ok','icon-remove','icon-zoom-in','icon-zoom-out','icon-off','icon-signal','icon-cog','icon-trash','icon-file','icon-time','icon-road','icon-download-alt','icon-download','icon-upload','icon-volume-down','icon-volume-up','icon-qrcode','icon-barcode','icon-tag','icon-tags','icon-book','icon-bookmark','icon-print','icon-font','icon-bold','icon-italic','icon-text-height','icon-text-width','icon-align-left','icon-align-center','icon-align-right','icon-tint','icon-edit','icon-share','icon-check','icon-move','icon-step-backward','icon-fast-backward','icon-backward','icon-play','icon-pause','icon-stop','icon-forward','icon-fast-forward','icon-step-forward','icon-eject','icon-chevron-left','icon-chevron-right','icon-plus-sign','icon-arrow-left','icon-arrow-right','icon-arrow-up','icon-arrow-down','icon-share-alt','icon-resize-full','icon-resize-small','icon-plus','icon-minus','icon-asterisk','icon-exclamation-sign','icon-gift','icon-leaf','icon-fire','icon-eye-open','icon-eye-close','icon-warning-sign','icon-plane','icon-resize-vertical','icon-resize-horizontal','icon-bar-chart','icon-camera-retro','icon-key','icon-cogs','icon-star-half','icon-heart-empty','icon-signout','icon-linkedin-sign','icon-pushpin','icon-external-link','icon-github','icon-unlock','icon-credit','icon-rss','icon-hdd','icon-bullhorn','icon-bell','icon-certificate','icon-hand-right','icon-hand-left','icon-hand-up','icon-hand-down','icon-circle-arrow-left','icon-circle-arrow-right','icon-circle-arrow-up','icon-circle-arrow-down','icon-beaker','icon-cut','icon-copy','icon-paper-clip','icon-save','icon-sign-blank','icon-reorder','icon-list-ul','icon-list-ol','icon-strikethrough','icon-underline','icon-table','icon-magic','icon-truck','icon-undo','icon-legal','icon-dashboard','icon-comment-alt','icon-comments-alt','icon-bolt','icon-sitemap','icon-umbrella','icon-paste','icon-lightbulb','icon-exchange','icon-cloud-download','icon-cloud-upload','icon-user-md','icon-stethoscope','icon-beer','icon-h-sign','icon-plus-sign-2','icon-double-angle-left','icon-double-angle-right','icon-double-angle-up','icon-double-angle-down','icon-angle-left','icon-angle-right','icon-angle-up','icon-angle-down','icon-desktop','icon-laptop','icon-tablet','icon-circle-blank','icon-quote-left','icon-quote-right','icon-gamepad','icon-keyboard','icon-flag-alt','icon-flag-checkered','icon-terminal','icon-code','icon-reply-all','icon-star-half-full','icon-location-arrow','icon-crop','icon-code-fork','icon-unlink','icon-question','icon-info','icon-exclamation','icon-superscript','icon-maxcdn','icon-chevron-sign-left','icon-chevron-sign-right','icon-chevron-sign-up','icon-chevron-sign-down','icon-html5','icon-css3','icon-anchor','icon-unlock-alt','icon-bullseye','icon-ellipsis-horizontal','icon-ellipsis-vertical','icon-rss-sign','icon-play-sign','icon-ticket','icon-minus-sign-alt','icon-check-minus','icon-level-up','icon-euro','icon-gbp','icon-dollar','icon-rupee','icon-yen','icon-renminbi','icon-won','icon-bitcoin','icon-file-2','icon-file-text','icon-sort-by-alphabet','icon-sort-by-alphabet-alt','icon-sort-by-attributes','icon-sort-by-attributes-alt','icon-sort-by-order','icon-sort-by-order-alt','icon-thumbs-up-2','icon-thumbs-down-2','icon-adn','icon-bitbucket','icon-bitbucket-sign','icon-tumblr','icon-tumblr-sign','icon-long-arrow-down','icon-long-arrow-up','icon-long-arrow-left','icon-long-arrow-right',"align-center","align-justify","align-left","align-right","arrow-down","arrow-left","arrow-right","arrow-up","asterisk","backward","ban-circle","barcode","bell","bold","book","bookmark","briefcase","bullhorn","calendar","camera","certificate","check","chevron-down","chevron-left","chevron-right","chevron-up",
			"circle-arrow-down","circle-arrow-left","circle-arrow-right","circle-arrow-up","cloud","cloud-download","cloud-upload","cog","collapse-down","collapse-up","comment","compressed","copyright-mark","credit-card","cutlery","dashboard","download","download-alt","earphone","edit","eject","envelope","euro","exclamation-sign","expand","export","eye-close","eye-open","facetime-video","fast-backward","fast-forward","file","film","filter","fire","flag","flash","floppy-disk","floppy-open","floppy-remove","floppy-save","floppy-saved","folder-close","folder-open","font","forward","fullscreen","gbp","gift","glass","globe","hand-down","hand-left","hand-right","hand-up","hd-video","hdd","header","headphones","heart","heart-empty","home","import","inbox","indent-left","indent-right","info-sign","italic","leaf","link","list","list-alt","lock","log-in","log-out","magnet","map-marker","minus","minus-sign","move","music","new-window","off","ok","ok-circle","ok-sign","open","paperclip","pause","pencil","phone","phone-alt","picture","plane","play","play-circle","plus","plus-sign","print","pushpin","qrcode","question-sign","random","record","refresh","registration-mark","remove","remove-circle","remove-sign","repeat","resize-full","resize-horizontal","resize-small","resize-vertical","retweet","road","save","saved","screenshot","sd-video","search","send","share","share-alt","shopping-cart","signal","sort","sort-by-alphabet","sort-by-alphabet-alt","sort-by-attributes","sort-by-attributes-alt","sort-by-order","sort-by-order-alt","sound-5-1","sound-6-1","sound-7-1","sound-dolby","sound-stereo","adjust","star-empty","stats","step-backward","step-forward","stop","subtitles","tag","tags","tasks","text-height","text-width","th","th-large","th-list","thumbs-down","thumbs-up","time","tint","tower","transfer","trash","tree-conifer","tree-deciduous","unchecked","upload","usd","user","volume-down","volume-off","volume-up","warning-sign","wrench","zoom-in","zoom-out"
		],
		fa:[
		    "adjust","anchor","archive","asterisk","ban","bar-chart-o","barcode","beer","bell","bell-o","bolt","book","bookmark","bookmark-o","briefcase","bug","bullhorn","bullseye","calendar","calendar-o","camera","camera-retro","caret-square-o-down","caret-square-o-left","caret-square-o-right","caret-square-o-up","certificate","check","check-circle","check-circle-o","check-square","check-square-o","circle","circle-o","clock-o","cloud","cloud-download","cloud-upload","code","code-fork","coffee","cog","cogs","comment","comment-o","comments","comments-o","compass","credit-card","crop","crosshairs","cutlery","dashboard","desktop","dot-circle-o","download","edit","envelope","envelope-o","eraser","exchange","exclamation","exclamation-circle","exclamation-triangle","external-link","external-link-square","eye","eye-slash","female","fighter-jet","film","filter","fire","fire-extinguisher","flag","flag-checkered","flag-o","flash","flask","folder","folder-o","folder-open","folder-open-o","frown-o","gamepad","gavel","gear","gears","gift","glass","globe","group","headphones","heart","heart-o","home","inbox","info","info-circle","key","keyboard-o","laptop","leaf","legal","lemon-o","level-down","level-up","lightbulb-o","location-arrow","lock","magic","magnet","mail-forward","mail-reply","mail-reply-all","male","map-marker","meh-o","microphone","microphone-slash","minus","minus-circle","minus-square","minus-square-o","mobile","mobile-phone","money","moon-o","music","pencil","pencil-square","pencil-square-o","phone","phone-square","picture-o","plane","plus","plus-circle","plus-square","power-off","print","puzzle-piece","qrcode","question","question-circle","quote-left","quote-right","random","refresh","reply","reply-all","retweet","road","rocket","rss","rss-square","search","search-minus","search-plus","share","share-square","share-square-o","shield","shopping-cart","sign-in","sign-out","signal","sitemap","smile-o","sort","sort-alpha-asc","sort-alpha-desc","sort-amount-asc","sort-amount-desc","sort-asc","sort-desc","sort-down","sort-numeric-asc","sort-numeric-desc","sort-up","spinner","square","square-o","star","star-half","star-half-empty","star-half-full","star-half-o","star-o","subscript","suitcase","sun-o","superscript","tablet","tachometer","tag","tags","tasks","terminal","thumb-tack","thumbs-down","thumbs-o-down","thumbs-o-up","thumbs-up","ticket","times","times-circle","times-circle-o","tint","toggle-down","toggle-left","toggle-right","toggle-up","trash-o","trophy","truck","umbrella","unlock","unsorted","upload","user","video-camera","volume-down","volume-off","volume-up","warning","wheelchair","wrench","check-square","check-square-o","circle","circle-o","dot-circle-o","minus-square","minus-square-o","plus-square","square","square-o","bitcoin","btc","cny","dollar","eur","euro","gbp","inr","jpy","krw","money","rmb","rouble","rub","ruble","rupee","try","turkish-lira","usd","won","yen","align-center","align-justify","align-left","align-right","bold","chain","chain-broken","clipboard","columns","copy","cut","dedent","eraser","file","file-o","file-text","file-text-o","files-o","floppy-o","font","indent","italic","link","list","list-alt","list-ol","list-ul","outdent","paperclip","paste","repeat","rotate-left","rotate-right","save","scissors","strikethrough","table","text-height","text-width","th","th-large","th-list","underline","undo","unlink","angle-double-down","angle-double-left","angle-double-right","angle-double-up","angle-down","angle-left","angle-right","angle-up","arrow-circle-down","arrow-circle-left","arrow-circle-o-down","arrow-circle-o-left","arrow-circle-o-right","arrow-circle-o-up","arrow-circle-right","arrow-circle-up","arrow-down","arrow-left","arrow-right","arrow-up","caret-down","caret-left","caret-right","caret-square-o-down","caret-square-o-left","caret-square-o-right","caret-square-o-up","caret-up","chevron-circle-down","chevron-circle-left","chevron-circle-right","chevron-circle-up","chevron-down","chevron-left","chevron-right","chevron-up","hand-o-down","hand-o-left","hand-o-right","hand-o-up","long-arrow-down","long-arrow-left","long-arrow-right","long-arrow-up","toggle-down","toggle-left","toggle-right","toggle-up","backward","eject","fast-backward","fast-forward","forward","pause","play","play-circle","play-circle-o","step-backward","step-forward","stop","youtube-play","adn","android","apple","bitbucket","bitbucket-square","bitcoin","btc","css3","dribbble","dropbox","facebook","facebook-square","flickr","foursquare","github","github-alt","github-square","gittip","google-plus","google-plus-square","html5","instagram","linkedin","linkedin-square","linux","maxcdn","pagelines","pinterest","pinterest-square","renren","skype","stack-exchange","stack-overflow","trello","tumblr","tumblr-square","twitter","twitter-square","vimeo-square","vk","weibo","windows","xing","xing-square","youtube","youtube-play","youtube-square","ambulance","h-square","medkit","plus-square","stethoscope","user-md","wheelchair"
		]
    };  

    Iconpicker.DEFAULTS = {
        iconset: 'glyphicon',
        icon: 'star',
        rows: 4,
        cols: 4,
        placement: 'right',
    };   
    
    Iconpicker.prototype.createButtonBar = function(){    
        var op = this.options;
        var tr = $('<tr></tr>');
        for(var i = 0; i < op.cols; i++){
            var btn = $('<button class="btn btn-primary"><span class="glyphicon"></span></button>');        
            var td = $('<td class="text-center"></td>');
            if(i == 0 || i == op.cols - 1){            
                btn.val((i==0) ? -1: 1);
                btn.addClass((i==0) ? 'btn-previous': 'btn-next');
                btn.find('span').addClass( (i == 0) ? 'glyphicon-arrow-left': 'glyphicon-arrow-right');            
                td.append(btn);
                tr.append(td);
            }
            else if(tr.find('.page-count').length == 0){
                td.attr('colspan', op.cols - 2).append('<span style="float:left;margin:0 10px;"><input  type="text" style="height:26px;line-height:26px; padding: 3px 12px;" class="form-control" name="search" id="search" /></span><span  style="float:right;margin-right:10px;" class="page-count"></span>');
                tr.append(td);            
            }            
        }
        op.table.find('thead').append(tr); 
    };
  
    Iconpicker.prototype.updateButtonBar = function(page){
        var op = this.options;
        var total_pages = Math.ceil( op.icons.length / (op.cols * op.rows) );
        op.table.find('.page-count').html(page + ' / ' + total_pages);
        var btn_prev = op.table.find('.btn-previous');
        var btn_next = op.table.find('.btn-next');
        (page == 1) ? btn_prev.addClass('disabled'): btn_prev.removeClass('disabled');
        (page == total_pages) ? btn_next.addClass('disabled'): btn_next.removeClass('disabled');
    };
  
    Iconpicker.prototype.bindEvents = function(){
        var op = this.options;
        var el = this;
        op.table.find('.btn-previous, .btn-next').off('click').on('click', function(){        
            var inc = parseInt($(this).val());
            el.changeList(op.page + inc);
        });
        op.table.find('.btn-icon').off('click').on('click', function(){          
            el.select($(this).val());
			op.table.find('#search').val("");
            el.$element.popover('destroy');
        }); 
		op.table.find('#search').unbind('keyup').bind('keyup', function(){          
            var inc = $(this).val();
            el.search(inc);
        });  
    };
	 Iconpicker.prototype.search = function(icon){    
			var bitcions = [
							"glyphicon-icon-home:房子,首页,主页",
							"glyphicon-star:星星,五角星",
							"glyphicon-icon-phone:电话,听筒",
							"glyphicon-icon-envelope:信息,邮件",
							"glyphicon-icon-picture:图片,幻灯片",
							"glyphicon-icon-map-marker:出发点,目的地,地图上的标记",
							"glyphicon-icon-search:查找,搜索",
							"glyphicon-icon-play-circle:播放",
							"glyphicon-phone:移动电话,手机",
							"glyphicon-phone-alt:电话",
							"glyphicon-qrcode:二维码",
							"glyphicon-icon-ok:勾,正确的",
							"glyphicon-icon-remove:叉,错误的",
							"glyphicon-icon-trash:垃圾桶,回收站,删除",
							"glyphicon-icon-camera:照相机,摄影机,照相",
							"glyphicon-icon-comment-alt:圆圈,评论框,意见框,注释,发表看法",
							"glyphicon-icon-comments:圆圈,评论,意见,看法",
							"glyphicon-icon-user:用户,人",
							"glyphicon-icon-folder-open:打开文件",
							"glyphicon-icon-thumbs-up:大拇指,夸奖,第一",
							"glyphicon-icon-thumbs-down:向下的大拇指,不好",
							"glyphicon-icon-weixin:微信",
							"glyphicon-icon-qq:QQ,腾讯",
							"glyphicon-icon-weibo:微博",
							"glyphicon-icon-skype:Skype",
							"glyphicon-icon-foursquare:勾,正确的",
							"glyphicon-icon-trello:柱状图",
							"glyphicon-icon-female:女性,女人",
							"glyphicon-icon-weixin-round:微信",
							"glyphicon-icon-tencent-weibo-round:腾讯微博",
							"glyphicon-icon-sina-weibo-round:新浪微博",
							"glyphicon-icon-renren:人人网",
							"glyphicon-icon-renren-round:人人网",
							"glyphicon-icon-qq-round:QQ,腾讯",
							"glyphicon-icon-douban-round:土豆网",
							"glyphicon-icon-suitcase:手提箱,衣箱",
							"glyphicon-icon-apple:苹果",
							"glyphicon-icon-windows:窗户,Windows操作系统",
							"glyphicon-icon-android:小机器人,安卓,anroid",
							"glyphicon-icon-linux:linux操作系统",
							"glyphicon-icon-dribbble:篮球",
							"glyphicon-icon-mobile:移动电话,手机",
							"glyphicon-icon-douban:豆瓣网",
							"glyphicon-icon-renren-2:人人网",
							"glyphicon-icon-sina-weibo:新浪微博",
							"glyphicon-icon-tencent-weibo:腾讯微博",
							"glyphicon-icon-twitter:Twitter",
							"glyphicon-icon-facebook:脸谱网,facebook",
							"glyphicon-icon-pinterest:品脱",
							"glyphicon-icon-pinterest-sign:品脱网",
							"glyphicon-icon-google-plus-sign:google+",
							"glyphicon-icon-google-plus:google+",
							"glyphicon-icon-twitter-sign:Twitter",
							"glyphicon-icon-facebook-sign:脸谱网",
							"glyphicon-icon-frown:伤心,皱眉,表情",
							"glyphicon-icon-meh:平静,表情",
							"glyphicon-icon-envelope-alt:未读信息,未读邮件",
							"glyphicon-icon-linkedin:linkedin",
							"glyphicon-icon-glass:玻璃杯,高脚杯",
							"glyphicon-icon-music:音乐,音符",
							"glyphicon-icon-heart:心,爱心",
							"glyphicon-icon-star-empty:空心五角星,空心星星",
							"glyphicon-icon-film:电影,电视,视频",
							"glyphicon-icon-inbox:收件箱,收信箱",
							"glyphicon-icon-repeat:重播,重新开始",
							"glyphicon-icon-refresh:刷新",
							"glyphicon-icon-list-alt:列表,清单",
							"glyphicon-icon-lock:锁,锁住的锁",
							"glyphicon-icon-flag:旗子,标记",
							"glyphicon-icon-headphones:耳机,听筒",
							"glyphicon-icon-volume-off:声音开关,喇叭",
							"glyphicon-icon-align-justify:居中对齐",
							"glyphicon-icon-list:清单,列表",
							"glyphicon-icon-indent-left:左缩进",
							"glyphicon-icon-indent-right:右缩进",
							"glyphicon-icon-facetime-video:摄像器,摄像,录制视频",
							"glyphicon-icon-pencil:铅笔,修改",
							"glyphicon-icon-adjust:调整,校正",
							"glyphicon-icon-minus-sign:负号,减号,停止,最小化",
							"glyphicon-icon-remove-sign:迁移,删除,叉",
							"glyphicon-icon-ok-sign:对的,好的,勾",
							"glyphicon-icon-question-sign:问号",
							"glyphicon-icon-info-sign:信息",
							"glyphicon-icon-screenshot:屏幕调整",
							"glyphicon-icon-remove-circle:迁移,删除,叉",
							"glyphicon-icon-ok-circle:对的,好的,勾",
							"glyphicon-icon-ban-circle:禁止标志",
							"glyphicon-icon-calendar:日历,日程表",
							"glyphicon-icon-random:随机的,任意的",
							"glyphicon-icon-comment:圆圈,评论框,意见框,注释,发表看法",
							"glyphicon-icon-magnet:磁铁,磁体,磁石",
							"glyphicon-icon-chevron-up:向上",
							"glyphicon-icon-chevron-down:向下",
							"glyphicon-icon-shopping-cart:购物车",
							"glyphicon-icon-folder-close:关闭的文件夹",
							"glyphicon-icon-signin:登陆",
							"glyphicon-icon-trophy:奖杯,冠军",
							"glyphicon-icon-github-sign:github",
							"glyphicon-icon-upload-alt:导出",
							"glyphicon-icon-lemon:柠檬,柠檬色",
							"glyphicon-icon-check-empty:方块",
							"glyphicon-icon-bookmark-empty:书签",
							"glyphicon-icon-phone-sign:传统电话",
							"glyphicon-icon-globe:地球,地球仪,全球",
							"glyphicon-icon-wrench:扳手,设置",
							"glyphicon-icon-tasks:任务,工作",
							"glyphicon-icon-filter:过滤,删选",
							"glyphicon-icon-briefcase:公文包,工具包",
							"glyphicon-icon-fullscreen:全屏",
							"glyphicon-icon-group:人群,工作组",
							"glyphicon-icon-link:链接",
							"glyphicon-icon-cloud:云,云层",
							"glyphicon-icon-money:钱,货币",
							"glyphicon-icon-caret-down:向下,下一行",
							"glyphicon-icon-caret-up:向上,上一行",
							"glyphicon-icon-caret-left:向前",
							"glyphicon-icon-caret-right:向后",
							"glyphicon-icon-sort:缩小",
							"glyphicon-icon-sort-down:最下面",
							"glyphicon-icon-sort-up:最上面",
							"glyphicon-icon-bell-alt:钟,铃铛,提醒",
							"glyphicon-icon-coffee:咖啡,休息",
							"glyphicon-icon-food:餐具,用餐",
							"glyphicon-icon-file-alt:文件,档案",
							"glyphicon-icon-building:建筑",
							"glyphicon-icon-hospital:医院",
							"glyphicon-icon-ambulance:救护车",
							"glyphicon-icon-medkit:急救包",
							"glyphicon-icon-fighter-jet:飞机",
							"glyphicon-icon-spinner:旋转,纺织",
							"glyphicon-icon-circle:圆,圆形物",
							"glyphicon-icon-reply:回复,回答",
							"glyphicon-icon-github-alt:github",
							"glyphicon-icon-folder-close-alt:文件夹",
							"glyphicon-icon-folder-open-alt:文件夹",
							"glyphicon-icon-expand-alt:张开,展开",
							"glyphicon-icon-collapse-alt:缩展,最小化,负号,减号",
							"glyphicon-icon-smile:开心,表情",
							"glyphicon-icon-subscript:下标,脚注",
							"glyphicon-icon-eraser:橡皮,擦除器",
							"glyphicon-icon-puzzle:积木",
							"glyphicon-icon-microphone:麦克风,扩音器",
							"glyphicon-icon-microphone-off:静音",
							"glyphicon-icon-shield:盾牌,防御",
							"glyphicon-icon-calendar-empty:日历,日程表",
							"glyphicon-icon-fire-extinguisher:灭火器",
							"glyphicon-icon-rocket:导弹,火箭",
							"glyphicon-icon-level-down:水平向下",
							"glyphicon-icon-check-sign:勾,正确的",
							"glyphicon-icon-edit-sign:铅笔,修改",
							"glyphicon-icon-external-link-sign:外部链接",
							"glyphicon-icon-share-sign:共享",
							"glyphicon-icon-compass:指南针,罗盘",
							"glyphicon-icon-collapse:到底部",
							"glyphicon-icon-collapse-top:到顶部",
							"glyphicon-icon-youtube-sign:youtube",
							"glyphicon-icon-youtube:youtube",
							"glyphicon-icon-xing:xing",
							"glyphicon-icon-xing-sign:xing",
							"glyphicon-icon-youtube-play:播放",
							"glyphicon-icon-dropbox:dropbox",
							"glyphicon-icon-stackexchange:stackechange",
							"glyphicon-icon-instagram:instagram",
							"glyphicon-icon-flickr:网络相簿",
							"glyphicon-icon-male:男人,男性",
							"glyphicon-icon-gittip:心,爱心",
							"glyphicon-icon-sun:太阳,白天",
							"glyphicon-icon-moon:月亮,晚上",
							"glyphicon-icon-archive:档案文件,档案",
							"glyphicon-icon-bug:甲虫,漏洞",
							"glyphicon-icon-vk:vk",
							"glyphicon-icon-th-large:大图标",
							"glyphicon-icon-th:小图标",
							"glyphicon-icon-th-list:列表",
							"glyphicon-icon-ok:勾,正确的",
							"glyphicon-icon-remove:叉,错误的",
							"glyphicon-icon-zoom-in:放大",
							"glyphicon-icon-zoom-out:缩小",
							"glyphicon-icon-off:电源开关,开机,关机",
							"glyphicon-icon-signal:信号",
							"glyphicon-icon-cog:设置",
							"glyphicon-icon-trash:垃圾桶,回收站,删除",
							"glyphicon-icon-file:文本,文件",
							"glyphicon-icon-time:时钟,时间",
							"glyphicon-icon-road:公路",
							"glyphicon-icon-download-alt:下载",
							"glyphicon-icon-download:下载",
							"glyphicon-icon-upload:上传",
							"glyphicon-icon-volume-down:音量最小",
							"glyphicon-icon-volume-up:音量最大",
							"glyphicon-icon-qrcode:二维码",
							"glyphicon-icon-barcode:条形码",
							"glyphicon-icon-tag:标签,名称",
							"glyphicon-icon-tags:标签,名称",
							"glyphicon-icon-book:书本,书籍",
							"glyphicon-icon-bookmark:书签",
							"glyphicon-icon-print:打印",
							"glyphicon-icon-font:字形",
							"glyphicon-icon-bold:加粗",
							"glyphicon-icon-italic:斜体,斜体字",
							"glyphicon-icon-text-height:高度",
							"glyphicon-icon-text-width:宽度",
							"glyphicon-icon-align-left:左对齐",
							"glyphicon-icon-align-center:居中",
							"glyphicon-icon-align-right:右对齐",
							"glyphicon-icon-tint:水滴,着色",
							"glyphicon-icon-edit:修改文本",
							"glyphicon-icon-share:共享",
							"glyphicon-icon-check:勾,正确的",
							"glyphicon-icon-move:移动",
							"glyphicon-icon-step-backward:前一页,向前",
							"glyphicon-icon-fast-backward:首页,最前面",
							"glyphicon-icon-backward:后退",
							"glyphicon-icon-play:开始,播放",
							"glyphicon-icon-pause:暂停",
							"glyphicon-icon-stop:停止",
							"glyphicon-icon-forward:快进",
							"glyphicon-icon-fast-forward:最后页,最后面",
							"glyphicon-icon-step-forward:后一页,向后",
							"glyphicon-icon-eject:弹出",
							"glyphicon-icon-chevron-left:向前,小于号",
							"glyphicon-icon-chevron-right:向后,大于号",
							"glyphicon-icon-plus-sign:正号,加号,添加",
							"glyphicon-icon-arrow-left:向前",
							"glyphicon-icon-arrow-right:向后",
							"glyphicon-icon-arrow-up:向上",
							"glyphicon-icon-arrow-down:向下",
							"glyphicon-icon-share-alt:共享",
							"glyphicon-icon-resize-full:拉伸,增大",
							"glyphicon-icon-resize-small:缩小",
							"glyphicon-icon-plus:正号,加号,添加",
							"glyphicon-icon-minus:最小化,减号,缩展",
							"glyphicon-icon-asterisk:星号",
							"glyphicon-icon-exclamation-sign:感叹号,警告",
							"glyphicon-icon-gift:礼物,赠品",
							"glyphicon-icon-leaf:叶子",
							"glyphicon-icon-fire:火,火苗",
							"glyphicon-icon-eye-open:眼睛",
							"glyphicon-icon-eye-close:闭眼",
							"glyphicon-icon-warning-sign:感叹号,警告",
							"glyphicon-icon-plane:飞机",
							"glyphicon-icon-resize-vertical:上下拉伸",
							"glyphicon-icon-resize-horizontal:左右拉伸",
							"glyphicon-icon-bar-chart:条状图",
							"glyphicon-icon-camera-retro:照相机,摄影机,照相",
							"glyphicon-icon-key:钥匙,密码",
							"glyphicon-icon-cogs:齿轮",
							"glyphicon-icon-star-half:一半的五角星,一半的星星’",
							"glyphicon-icon-heart-empty:心,爱心",
							"glyphicon-icon-signout:退出",
							"glyphicon-icon-linkedin-sign:linkedin",
							"glyphicon-icon-pushpin:大头针",
							"glyphicon-icon-external-link:外部链接",
							"glyphicon-icon-github:github",
							"glyphicon-icon-unlock:锁,没上锁的锁",
							"glyphicon-icon-credit:信用,信用卡",
							"glyphicon-icon-rss:信号",
							"glyphicon-icon-hdd:硬盘驱动器",
							"glyphicon-icon-bullhorn:喇叭,扬声器",
							"glyphicon-icon-bell:钟,铃铛",
							"glyphicon-icon-certificate:证明,授权",
							"glyphicon-icon-hand-right:向右",
							"glyphicon-icon-hand-left:向左",
							"glyphicon-icon-hand-up:向上",
							"glyphicon-icon-hand-down:向下",
							"glyphicon-icon-circle-arrow-left:向左",
							"glyphicon-icon-circle-arrow-right:向右",
							"glyphicon-icon-circle-arrow-up:向上",
							"glyphicon-icon-circle-arrow-down:向下",
							"glyphicon-icon-beaker:烧杯,大口杯",
							"glyphicon-icon-cut:剪刀,剪切",
							"glyphicon-icon-copy:复制",
							"glyphicon-icon-paper-clip:添加文件",
							"glyphicon-icon-save:保存",
							"glyphicon-icon-sign-blank:停止",
							"glyphicon-icon-reorder:重新整理",
							"glyphicon-icon-list-ul:列表,清单",
							"glyphicon-icon-list-ol:列表,清单",
							"glyphicon-icon-strikethrough:中划线",
							"glyphicon-icon-underline:下划线",
							"glyphicon-icon-table:表格",
							"glyphicon-icon-magic:魔术棒",
							"glyphicon-icon-truck:卡车",
							"glyphicon-icon-undo:取消,撤销",
							"glyphicon-icon-legal:锤子,合法的",
							"glyphicon-icon-dashboard:仪表盘",
							"glyphicon-icon-comment-alt:圆圈,评论框,意见框,注释,发表看法",
							"glyphicon-icon-comments-alt:多个圆圈,多人发表评论,意见,看法",
							"glyphicon-icon-bolt:闪电",
							"glyphicon-icon-sitemap:组织结构",
							"glyphicon-icon-umbrella:雨伞,保护伞",
							"glyphicon-icon-paste:粘贴",
							"glyphicon-icon-lightbulb:电灯,灯泡",
							"glyphicon-icon-exchange:双箭头",
							"glyphicon-icon-cloud-download:云下载",
							"glyphicon-icon-cloud-upload:云上传",
							"glyphicon-icon-user-md:用户",
							"glyphicon-icon-stethoscope:听诊器,诊断",
							"glyphicon-icon-beer:啤酒",
							"glyphicon-icon-h-sign:h",
							"glyphicon-icon-plus-sign-2:张开,展开",
							"glyphicon-icon-double-angle-left:向前",
							"glyphicon-icon-double-angle-right:向后",
							"glyphicon-icon-double-angle-up:向上",
							"glyphicon-icon-double-angle-down:向下",
							"glyphicon-icon-angle-left:向前",
							"glyphicon-icon-angle-right:向后",
							"glyphicon-icon-angle-up:向上",
							"glyphicon-icon-angle-down:向下",
							"glyphicon-icon-desktop:显示器,电脑,计算机",
							"glyphicon-icon-laptop:笔记本电脑,计算机",
							"glyphicon-icon-tablet:写字板",
							"glyphicon-icon-circle-blank:圆圈",
							"glyphicon-icon-quote-left:引号",
							"glyphicon-icon-quote-right:引号",
							"glyphicon-icon-gamepad:游戏手柄",
							"glyphicon-icon-keyboard:键盘",
							"glyphicon-icon-flag-alt:旗子,标记",
							"glyphicon-icon-flag-checkered:旗子,标记",
							"glyphicon-icon-terminal:终点,末端",
							"glyphicon-icon-code:代码,编码",
							"glyphicon-icon-reply-all:重播,重新开始",
							"glyphicon-icon-star-half-full:五角星,星星",
							"glyphicon-icon-location-arrow:箭头",
							"glyphicon-icon-crop:产量",
							"glyphicon-icon-code-fork:代码",
							"glyphicon-icon-unlink:取消链接",
							"glyphicon-icon-question:问号",
							"glyphicon-icon-info:信息",
							"glyphicon-icon-exclamation:感叹号,警告",
							"glyphicon-icon-superscript:上标",
							"glyphicon-icon-maxcdn:maxcdn",
							"glyphicon-icon-chevron-sign-left:向前",
							"glyphicon-icon-chevron-sign-right:向后",
							"glyphicon-icon-chevron-sign-up:向上",
							"glyphicon-icon-chevron-sign-down:向下",
							"glyphicon-icon-html5:超文本标记语言5",
							"glyphicon-icon-css3:css3",
							"glyphicon-icon-anchor:抛锚,锚",
							"glyphicon-icon-unlock-alt:锁",
							"glyphicon-icon-bullseye:圆心,靶子",
							"glyphicon-icon-ellipsis-horizontal:水平的,地平线",
							"glyphicon-icon-ellipsis-vertical:垂直的省略号",
							"glyphicon-icon-rss-sign:信号",
							"glyphicon-icon-play-sign:开始,播放",
							"glyphicon-icon-ticket:门票,入场券",
							"glyphicon-icon-minus-sign-alt:负号,减号,停止,最小化",
							"glyphicon-icon-check-minus:负号,减号,停止",
							"glyphicon-icon-level-up:水平向上",
							"glyphicon-icon-euro:欧元",
							"glyphicon-icon-gbp:英镑",
							"glyphicon-icon-dollar:美元",
							"glyphicon-icon-rupee:卢比",
							"glyphicon-icon-yen:人民币",
							"glyphicon-icon-renminbi:元,人民币",
							"glyphicon-icon-won:货币",
							"glyphicon-icon-bitcoin:货币",
							"glyphicon-icon-file-2:文件",
							"glyphicon-icon-file-text:文本,文件",
							"glyphicon-icon-sort-by-alphabet:按字母顺序排列",
							"glyphicon-icon-sort-by-alphabet-alt:按字母顺序排列",
							"glyphicon-icon-sort-by-attributes:按属性排列",
							"glyphicon-icon-sort-by-attributes-alt:按属性排列",
							"glyphicon-icon-sort-by-order:按顺序排列",
							"glyphicon-icon-sort-by-order-alt:按顺序排列",
							"glyphicon-icon-thumbs-up-2:大拇指,夸奖,第一",
							"glyphicon-icon-thumbs-down-2:向下的大拇指,做事做得不好",
							"glyphicon-icon-adn:向上",
							"glyphicon-icon-bitbucket:手电筒",
							"glyphicon-icon-bitbucket-sign:手电筒",
							"glyphicon-icon-tumblr:tumblr",
							"glyphicon-icon-tumblr-sign:tumblr",
							"glyphicon-icon-long-arrow-down:垂直向下",
							"glyphicon-icon-long-arrow-up:垂直向上",
							"glyphicon-icon-long-arrow-left:水平向左",
							"glyphicon-icon-long-arrow-right:水平向右",
							"glyphicon-align-center:居中",
							"glyphicon-align-justify:居中对齐",
							"glyphicon-align-left:左对齐",
							"glyphicon-align-right:右对齐",
							"glyphicon-arrow-down:向下",
							"glyphicon-arrow-left:向左",
							"glyphicon-arrow-right:向右",
							"glyphicon-arrow-up:向上",
							"glyphicon-asterisk:雪花,星号",
							"glyphicon-backward:后退",
							"glyphicon-ban-circle:禁止标志",
							"glyphicon-barcode:条形码",
							"glyphicon-bell:钟,铃铛",
							"glyphicon-bold:字体加粗",
							"glyphicon-book:书本,书籍",
							"glyphicon-bookmark:书签",
							"glyphicon-briefcase:公文包,工具包",
							"glyphicon-bullhorn:喇叭,扬声器",
							"glyphicon-calendar:日历,日程表",
							"glyphicon-camera:照相机,摄像机,拍照",
							"glyphicon-certificate:证明,授权",
							"glyphicon-check:勾,对的,正确的",
							"glyphicon-chevron-down:向下",
							"glyphicon-chevron-left:向左",
							"glyphicon-chevron-right:向右",
							"glyphicon-chevron-up:向上",
							"glyphicon-circle-arrow-down:向下",
							"glyphicon-circle-arrow-left:向左",
							"glyphicon-circle-arrow-right:向右",
							"glyphicon-circle-arrow-up:向上",
							"glyphicon-cloud:云,云计算",
							"glyphicon-cloud-download:云下载",
							"glyphicon-cloud-upload:云上传",
							"glyphicon-cog:齿轮,设置",
							"glyphicon-collapse-down:向下",
							"glyphicon-collapse-up:向上",
							"glyphicon-comment:评论框,意见框,注释,发表看法",
							"glyphicon-compressed:压缩,精简",
							"glyphicon-copyright-mark:版权",
							"glyphicon-credit-card:信用卡",
							"glyphicon-cutlery:餐具,用餐",
							"glyphicon-dashboard:仪表盘",
							"glyphicon-download:下载",
							"glyphicon-download-alt:下载",
							"glyphicon-earphone:耳机,听筒",
							"glyphicon-edit:修改",
							"glyphicon-eject:弹出",
							"glyphicon-envelope:未读邮件,未读信息",
							"glyphicon-euro:欧元",
							"glyphicon-exclamation-sign:感叹号",
							"glyphicon-expand:张开,发展",
							"glyphicon-export:输出,导出",
							"glyphicon-eye-close:眼睛,视野",
							"glyphicon-eye-open:眼睛,视野",
							"glyphicon-facetime-video:摄像器,摄像,录制视频",
							"glyphicon-fast-backward:退到最后",
							"glyphicon-fast-forward:进到最前",
							"glyphicon-file:文件",
							"glyphicon-film:电影",
							"glyphicon-filter:过滤,滤除",
							"glyphicon-fire:火,火苗",
							"glyphicon-flag:标志,旗子",
							"glyphicon-flash:闪电",
							"glyphicon-floppy-disk:磁盘",
							"glyphicon-floppy-open:磁盘",
							"glyphicon-floppy-remove:磁盘",
							"glyphicon-floppy-save:磁盘",
							"glyphicon-floppy-saved:磁盘",
							"glyphicon-folder-close:文件夹",
							"glyphicon-folder-open:文件夹",
							"glyphicon-font:字体",
							"glyphicon-forward:前进",
							"glyphicon-fullscreen:全屏",
							"glyphicon-gbp:英镑",
							"glyphicon-gift:礼物,礼品",
							"glyphicon-glass:玻璃杯,高脚杯",
							"glyphicon-globe:地球,地球仪,全球",
							"glyphicon-hand-down:向下",
							"glyphicon-hand-left:向左",
							"glyphicon-hand-right:向右",
							"glyphicon-hand-up:向上",
							"glyphicon-hd-video:视频,录像",
							"glyphicon-hdd:驱动器",
							"glyphicon-header:标题",
							"glyphicon-headphones:耳机,听筒",
							"glyphicon-heart:心,爱心",
							"glyphicon-heart-empty:心,爱心",
							"glyphicon-home:房屋,首页",
							"glyphicon-import:导入",
							"glyphicon-inbox:收件箱,收信箱",
							"glyphicon-indent-left:左缩进",
							"glyphicon-indent-right:右缩进",
							"glyphicon-info-sign:信息",
							"glyphicon-italic:斜体,斜体字",
							"glyphicon-leaf:树叶,叶子",
							"glyphicon-link:链接",
							"glyphicon-list:列表,表单",
							"glyphicon-list-alt:列表,表单",
							"glyphicon-lock:锁",
							"glyphicon-log-in:登录",
							"glyphicon-log-out:退出",
							"glyphicon-magnet:磁铁,磁石",
							"glyphicon-map-marker:目标,标记",
							"glyphicon-minus:缩展,最小化,负号,减号",
							"glyphicon-minus-sign:缩展,最小化,负号,减号,停止",
							"glyphicon-move:移动",
							"glyphicon-music:音符,音乐",
							"glyphicon-new-window:外链",
							"glyphicon-off:电源,开关",
							"glyphicon-ok:勾,对的,正确的",
							"glyphicon-ok-circle:勾,对的,正确的",
							"glyphicon-ok-sign:勾,对的,正确的",
							"glyphicon-open:导出",
							"glyphicon-paperclip:回形针,附件",
							"glyphicon-pause:暂停",
							"glyphicon-pencil:铅笔,修改",
							"glyphicon-phone:手机,移动电话",
							"glyphicon-phone-alt:固定电话",
							"glyphicon-picture:图画,图片,幻灯片",
							"glyphicon-plane:飞机,飞行",
							"glyphicon-play:开始,播放",
							"glyphicon-play-circle:开始,播放",
							"glyphicon-plus:张开,展开,加号",
							"glyphicon-plus-sign:张开,展开,加号,添加",
							"glyphicon-print:打印",
							"glyphicon-pushpin:大头针",
							"glyphicon-qrcode:二维码",
							"glyphicon-question-sign:问号",
							"glyphicon-random:随机的,任意的",
							"glyphicon-record:记录,标明",
							"glyphicon-refresh:刷新",
							"glyphicon-registration-mark:登记标记,注册标记",
							"glyphicon-remove:乘号,停止,删除",
							"glyphicon-remove-circle:乘号,停止,删除",
							"glyphicon-remove-sign:乘号,停止,删除",
							"glyphicon-repeat:重播,重新开始",
							"glyphicon-resize-full:调大",
							"glyphicon-resize-horizontal:左右拉伸",
							"glyphicon-resize-small:缩小",
							"glyphicon-resize-vertical:上下拉伸",
							"glyphicon-retweet:循环",
							"glyphicon-road:公路",
							"glyphicon-save:保存",
							"glyphicon-saved:保存",
							"glyphicon-screenshot:靶子",
							"glyphicon-sd-video:视屏,录像",
							"glyphicon-search:搜索",
							"glyphicon-send:纸飞机",
							"glyphicon-share:共享",
							"glyphicon-share-alt:共享",
							"glyphicon-shopping-cart:购物车",
							"glyphicon-signal:信号",
							"glyphicon-sort:分类",
							"glyphicon-sort-by-alphabet:按字母顺序排列",
							"glyphicon-sort-by-alphabet-alt:按字母顺序排列",
							"glyphicon-sort-by-attributes:按属性排列",
							"glyphicon-sort-by-attributes-alt:按属性排列",
							"glyphicon-sort-by-order:按顺序排列",
							"glyphicon-sort-by-order-alt:按顺序排列",
							"glyphicon-sound-5-1:sound 5.1",
							"glyphicon-sound-6-1:sound 6.1",
							"glyphicon-sound-7-1:sound 7.1",
							"glyphicon-sound-dolby: sound dolby",
							"glyphicon-sound-stereo:立体声",
							"glyphicon-adjust:调整,校准",
							"glyphicon-star-empty:星星,五角星",
							"glyphicon-stats:柱状图",
							"glyphicon-step-backward:转到最前面",
							"glyphicon-step-forward:转到最后面",
							"glyphicon-stop:停止",
							"glyphicon-subtitles:副标题,字幕",
							"glyphicon-tag:书签",
							"glyphicon-tags:书签",
							"glyphicon-tasks:任务,工作",
							"glyphicon-text-height:高度",
							"glyphicon-text-width:宽度",
							"glyphicon-th:小图标",
							"glyphicon-th-large:大图标",
							"glyphicon-th-list:列表",
							"glyphicon-thumbs-down:向下的大拇指,不好",
							"glyphicon-thumbs-up:大拇指,很好",
							"glyphicon-time:时间,时钟",
							"glyphicon-tint:水滴",
							"glyphicon-tower:塔,高楼",
							"glyphicon-transfer:转让,转移",
							"glyphicon-trash:垃圾桶,回收站,删除",
							"glyphicon-tree-conifer:树",
							"glyphicon-tree-deciduous:树",
							"glyphicon-unchecked:方块",
							"glyphicon-upload:上传",
							"glyphicon-usd:美元",
							"glyphicon-user:用户",
							"glyphicon-volume-down:音量",
							"glyphicon-volume-off:静音",
							"glyphicon-volume-up:音量",
							"glyphicon-warning-sign:警告",
							"glyphicon-wrench:扳手,设置",
							"glyphicon-zoom-in:放大",
							"glyphicon-zoom-out:缩小"
				];
			
			var v=icon;
			var nextDisable=false;
			var preDisable=false;
			var count=$.trim($(".popover-content .table-icons .page-count").text());
			var t1=count.split("/");
			if($.trim(t1[0])==$.trim(t1[1])){
				nextDisable=true;
			}else if(t1[0]==0){
				preDisable=true;
			}
			if(v==""){
				$(".popover-content .table-icons tbody").show();
				$(".popover-content .table-icons tbody.searchResult").remove();
				$(".popover-content .table-icons .page-count").css("visibility","visible");
				if(!nextDisable){
					$(".popover-content .table-icons .btn.btn-next").removeClass("disabled");
				}
				if(!preDisable){
					$(".popover-content .table-icons .btn.btn-previous").removeClass("disabled");
				}
			}else{
				$(".popover-content .table-icons tbody").hide();
				$(".popover-content .table-icons tbody.searchResult").remove();
				$(".popover-content .table-icons .page-count").css("visibility","hidden");
				$(".popover-content .table-icons .btn.btn-next").addClass("disabled");
				$(".popover-content .table-icons .btn.btn-previous").addClass("disabled");
				
				var result=new Array();
				var n=0;
				for(var key in bitcions){
					if(bitcions[key].indexOf(v)>-1){
						var tmp=bitcions[key];
						tmp=tmp.split(":");
						result[n]=tmp[0];
						n++;
					}
				}
				if(result.length==0){
					$(".popover-content .table-icons").append("<tbody class='searchResult' style='display: table-row-group;'><tr ><td colspan=12 width='370'></br>没有查询到相关图标</br></br></td></tr></tbody>")
				}else{
					var html="<tbody class='searchResult' style='display: table-row-group;'><tr>";
					var i=0;
					for(var key in result){
						html+='<td><button title="'+result[key]+'" value="'+result[key]+'" class="btn btn-default btn-icon"><i class="glyphicon '+result[key]+'"></i></button></td>';
						i++;
						if(i%10==0){
							html+='</tr><tr>';
						}
					}
					var left=i%10;
					
					if(left!=0){
						for(var nn=0;nn<(10-left);nn++){
							html+='<td style="min-width:36px;"></td>';
						}
						html+="</tr>";
					}
					html+="</tr></tbody>";
					$(".popover-content .table-icons").append(html);
					this.bindEvents(); 
				}
			}
    };
    Iconpicker.prototype.select = function(icon){    
        var op = this.options;
        var el = this.$element;
        op.selected = $.inArray(icon.replace(op.iconClassFix, ''), op.icons);
        if(op.selected == -1){
            op.selected = 0;
            icon = op.iconClassFix + op.icons[op.selected];
        }
        if(icon != '' && op.selected >= 0){
            op.icon = icon;
            el.find('input').val(icon);
            el.find('i').attr('class', '').addClass(op.iconClass).addClass(icon);
            el.trigger({ type: "change", icon: icon });
            op.table.find('button.btn-warning').removeClass('btn-warning');
        }    
    };
  
    Iconpicker.prototype.switchPage = function(icon){
        var op = this.options;        
        op.selected = $.inArray(icon.replace(op.iconClassFix, ''), op.icons);
        if(icon != '' && op.selected >= 0){
            var page = Math.ceil( (op.selected + 1) / (op.cols * op.rows) );
            this.changeList(page);
        }    
        op.table.find('.'+icon).parent().addClass('btn-warning');
    };
          
    Iconpicker.prototype.changeList = function(page){
        var op = this.options;
        this.updateButtonBar(page);
        var tbody = op.table.find('tbody').empty();
        var offset = (page - 1) * op.rows * op.cols;
        for(var i = 0; i < op.rows; i++){
            var tr = $('<tr></tr>');            
            for(var j = 0; j < op.cols; j++){
                var pos = offset + (i * op.cols) + j;
                var btn = $('<button class="btn btn-default btn-icon"></button>').hide();
                if(pos < op.icons.length){
                    var v = op.iconClassFix + op.icons[pos];
                    btn = $('<button class="btn btn-default btn-icon" value="' + v + '" title="' + v + '"><i class="' + op.iconClass + ' ' + v + '"></i></button>');                            
                }                
                var td = $('<td></td>').append(btn);
                tr.append(td);
            }
            tbody.append(tr);
        }
        op.page = page;
        this.bindEvents();
    }  
  
    Iconpicker.prototype.setIcon = function (icon) {        
        this.select(icon);
    }
    // ICONPICKER PLUGIN DEFINITION
    // ========================
    var old = $.fn.iconpicker;
    $.fn.iconpicker = function (option, params) {
        return this.each(function () {
            var $this   = $(this);
			
            var data    = $this.data('bs.iconpicker');
            var options = typeof option == 'object' && option;
            if (!data) $this.data('bs.iconpicker', (data = new Iconpicker(this, options)));
            if (typeof option == 'string') data[option](params)
            else{
                var op = data.options;
                var ic = (op.iconset == 'fontawesome') ? 'fa' : 'glyphicon';
                op = $.extend(op, {
                    icons: Iconpicker.ICONSET[ic],
                    iconClass: ic,
                    iconClassFix: ic + '-',
                    page: 1,
                    selected: -1,
                    table: $('<table class="table-icons"><thead></thead><tbody></tbody></table>')
                });
                var name = ( typeof $this.attr('name') != 'undefined' ) ? 'name="' + $this.attr('name') + '"' : '';
                $this.empty()
                    .append('<i></i>')
                    .append('<input type="hidden" ' + name + '></input>')
                    .append('<span class="caret"></span>');
                $this.addClass('iconpicker');
                data.createButtonBar();
                data.changeList(1);
                $this.on('click', function(e){
                    e.preventDefault();
                    $this.popover({
                        animation: false,
                        trigger: 'manual',
                        html: true,
                        content: data.options.table,
                        container: 'body',
                        placement: data.options.placement
                    }).on('shown.bs.popover', function () {
                        data.switchPage(op.icon);
                        data.bindEvents();
                    });  
                    $this.popover('show');
                });
                data.select(op.icon);      
            }
        });
    };

    $.fn.iconpicker.Constructor = Iconpicker;


    // ICONPICKER NO CONFLICT
    // ==================
    $.fn.iconpicker.noConflict = function () {
        $.fn.iconpicker = old;
        return this;
    };


    // ICONPICKER DATA-API
    // ===============
    $('body').on('click', function (e) {
        $('.iconpicker').each(function () {
			
            //the 'is' for buttons that trigger popups
            //the 'has' for icons within a button that triggers a popup
            if ( ! $(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
				$(".popover-content #search").val("");
                $(this).popover('destroy');
            }
        });
    });
  
    $('button[role="iconpicker"]').iconpicker();
    
  
}(window.jQuery);

function showiconbtn(obj){
	var p = jQuery(obj).closest(".icon");
	var $this = p.find(".btn-icon");
	if(jQuery(obj).prop("checked")==true){
		$this.show();
		p.find(".iconsize").show();
		if($this.find("input").length==0){
			var v = $this.attr("value");
			$this.iconpicker({
				rows: 5,
				cols: 10,
				icon: v,
				placement: 'right',
			});
		}
	}else{
	    p.find(".iconsize").hide();
		$this.hide();
	}
}


jQuery(function($){
	$('.btn-icon').each(function(){
		var v = $(this).attr("value");
		var iconset = $(this).attr("iconset");
		if(!iconset){
			iconset = "glyphicon";
		}
		$(this).iconpicker({
	        rows: 5,
	        cols: 10,
	        icon: v,
			placement: 'right',
			iconset: iconset,
	    });
		
	})
});;

/* jquery_data_zn: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/FeiEditor/bitSite/js/jquery.ui.datepicker-zh-CN.js) */
/* Chinese initialisation for the jQuery UI date picker plugin. */
/* Written by Cloudream (cloudream@gmail.com). */
jQuery(function($){
	$.datepicker.regional['zh-CN'] = {
		closeText: '关闭',
		prevText: '&#x3C;上月',
		nextText: '下月&#x3E;',
		currentText: '今天',
		monthNames: ['一月','二月','三月','四月','五月','六月',
		'七月','八月','九月','十月','十一月','十二月'],
		monthNamesShort: ['一月','二月','三月','四月','五月','六月',
		'七月','八月','九月','十月','十一月','十二月'],
		dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
		dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
		dayNamesMin: ['日','一','二','三','四','五','六'],
		weekHeader: '周',
		dateFormat: 'yy-mm-dd',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: '年'};
	$.datepicker.setDefaults($.datepicker.regional['zh-CN']);
});
;

/* thickbox: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-includes/js/thickbox/thickbox.js) */
/*
 * Thickbox 3.1 - One Box To Rule Them All.
 * By Cody Lindley (http://www.codylindley.com)
 * Copyright (c) 2007 cody lindley
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
*/

if ( typeof tb_pathToImage != 'string' ) {
	var tb_pathToImage = thickboxL10n.loadingAnimation;
}

/*!!!!!!!!!!!!!!!!! edit below this line at your own risk !!!!!!!!!!!!!!!!!!!!!!!*/

//on page load call tb_init
jQuery(document).ready(function(){
	tb_init('a.thickbox, area.thickbox, input.thickbox');//pass where to apply thickbox
	
});

//add thickbox to href & area elements that have a class of .thickbox
function tb_init(domChunk){
	jQuery('body').on('click', domChunk, tb_click);
}

function tb_click(){
	var t = this.title || this.name || null;
	var a = this.href || this.alt;
	var g = this.rel || false;
	tb_show(t,a,g);
	this.blur();
	return false;
}

function tb_show(caption, url, imageGroup) {//function called when the user clicks on a thickbox link

	imgLoader = new Image();// preload image
	imgLoader.src = tb_pathToImage;
	try {
		if (typeof document.body.style.maxHeight === "undefined") {//if IE 6
			jQuery("body","html").css({height: "100%", width: "100%"});
			jQuery("html").css("overflow","hidden");
			if (document.getElementById("TB_HideSelect") === null) {//iframe to hide select elements in ie6
				jQuery("body").append("<iframe id='TB_HideSelect'>"+thickboxL10n.noiframes+"</iframe><div id='TB_overlay'></div><div id='TB_window'></div>");
				jQuery("#TB_overlay").click(tb_remove);
			}
		}else{//all others
			if(document.getElementById("TB_overlay") === null){
				jQuery("body").append("<div id='TB_overlay'></div><div id='TB_window'></div>");
				jQuery("#TB_overlay").click(tb_remove);
			}
		}

		if(tb_detectMacXFF()){
			jQuery("#TB_overlay").addClass("TB_overlayMacFFBGHack");//use png overlay so hide flash
		}else{
			jQuery("#TB_overlay").addClass("TB_overlayBG");//use background and opacity
		}

		if(caption===null){caption="";}
		jQuery("body").append("<div id='TB_load'><img src='"+imgLoader.src+"' width='60' /></div>");//add loader to the page

		jQuery('#TB_load').show();//show loader

		var baseURL;
	   if(url.indexOf("?")!==-1){ //ff there is a query string involved
			baseURL = url.substr(0, url.indexOf("?"));
	   }else{
	   		baseURL = url;
	   }

	   var urlString = /\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$/;
	   var urlType = baseURL.toLowerCase().match(urlString);

		if(urlType == '.jpg' || urlType == '.jpeg' || urlType == '.png' || urlType == '.gif' || urlType == '.bmp'){//code to show images

			TB_PrevCaption = "";
			TB_PrevURL = "";
			TB_PrevHTML = "";
			TB_NextCaption = "";
			TB_NextURL = "";
			TB_NextHTML = "";
			TB_imageCount = "";
			TB_FoundURL = false;
			if(imageGroup){
				TB_TempArray = jQuery("a[rel="+imageGroup+"]").get();
				for (TB_Counter = 0; ((TB_Counter < TB_TempArray.length) && (TB_NextHTML === "")); TB_Counter++) {
					var urlTypeTemp = TB_TempArray[TB_Counter].href.toLowerCase().match(urlString);
						if (!(TB_TempArray[TB_Counter].href == url)) {
							if (TB_FoundURL) {
								TB_NextCaption = TB_TempArray[TB_Counter].title;
								TB_NextURL = TB_TempArray[TB_Counter].href;
								TB_NextHTML = "<span id='TB_next'>&nbsp;&nbsp;<a href='#'>"+thickboxL10n.next+"</a></span>";
							} else {
								TB_PrevCaption = TB_TempArray[TB_Counter].title;
								TB_PrevURL = TB_TempArray[TB_Counter].href;
								TB_PrevHTML = "<span id='TB_prev'>&nbsp;&nbsp;<a href='#'>"+thickboxL10n.prev+"</a></span>";
							}
						} else {
							TB_FoundURL = true;
							TB_imageCount = thickboxL10n.image + ' ' + (TB_Counter + 1) + ' ' + thickboxL10n.of + ' ' + (TB_TempArray.length);
						}
				}
			}

			imgPreloader = new Image();
			imgPreloader.onload = function(){
			imgPreloader.onload = null;

			// Resizing large images - orginal by Christian Montoya edited by me.
			var pagesize = tb_getPageSize();
			var x = pagesize[0] - 50;
			var y = pagesize[1] - 20;
			var imageWidth = imgPreloader.width;
			var imageHeight = imgPreloader.height;
			if (imageWidth > x) {
				imageHeight = imageHeight * (x / imageWidth);
				imageWidth = x;
				if (imageHeight > y) {
					imageWidth = imageWidth * (y / imageHeight);
					imageHeight = y;
				}
			} else if (imageHeight > y) {
				imageWidth = imageWidth * (y / imageHeight);
				imageHeight = y;
				if (imageWidth > x) {
					imageHeight = imageHeight * (x / imageWidth);
					imageWidth = x;
				}
			}
			// End Resizing

			TB_WIDTH = imageWidth + 30;
			TB_HEIGHT = imageHeight + 60;
			jQuery("#TB_window").append("<a href='' id='TB_ImageOff' title='"+thickboxL10n.close+"'><img id='TB_Image' src='"+url+"' width='"+imageWidth+"' height='"+imageHeight+"' alt='"+caption+"'/></a>" + "<div id='TB_caption'>"+caption+"<div id='TB_secondLine'>" + TB_imageCount + TB_PrevHTML + TB_NextHTML + "</div></div><div id='TB_closeWindow'><a href='#' id='TB_closeWindowButton' title='"+thickboxL10n.close+"'><div class='tb-close-icon'></div></a></div>");

			jQuery("#TB_closeWindowButton").click(tb_remove);

			if (!(TB_PrevHTML === "")) {
				function goPrev(){
					if(jQuery(document).unbind("click",goPrev)){jQuery(document).unbind("click",goPrev);}
					jQuery("#TB_window").remove();
					jQuery("body").append("<div id='TB_window'></div>");
					tb_show(TB_PrevCaption, TB_PrevURL, imageGroup);
					return false;
				}
				jQuery("#TB_prev").click(goPrev);
			}

			if (!(TB_NextHTML === "")) {
				function goNext(){
					jQuery("#TB_window").remove();
					jQuery("body").append("<div id='TB_window'></div>");
					tb_show(TB_NextCaption, TB_NextURL, imageGroup);
					return false;
				}
				jQuery("#TB_next").click(goNext);

			}

			jQuery(document).bind('keydown.thickbox', function(e){
				e.stopImmediatePropagation();

				if ( e.which == 27 ){ // close
					if ( ! jQuery(document).triggerHandler( 'qf_CloseOnEscape', [{ event: e, what: 'thickbox', cb: tb_remove }] ) )
						tb_remove();

				} else if ( e.which == 190 ){ // display previous image
					if(!(TB_NextHTML == "")){
						jQuery(document).unbind('thickbox');
						goNext();
					}
				} else if ( e.which == 188 ){ // display next image
					if(!(TB_PrevHTML == "")){
						jQuery(document).unbind('thickbox');
						goPrev();
					}
				}
				return false;
			});

			tb_position();
			jQuery("#TB_load").remove();
			jQuery("#TB_ImageOff").click(tb_remove);
			jQuery("#TB_window").css({'visibility':'visible'}); //for safari using css instead of show
			};

			imgPreloader.src = url;
		}else{//code to show html

			var queryString = url.replace(/^[^\?]+\??/,'');
			var params = tb_parseQuery( queryString );

			TB_WIDTH = (params['width']*1) + 30 || 630; //defaults to 630 if no paramaters were added to URL
			TB_HEIGHT = (params['height']*1) + 40 || 440; //defaults to 440 if no paramaters were added to URL
			ajaxContentW = TB_WIDTH - 30;
			ajaxContentH = TB_HEIGHT - 45;

			if(url.indexOf('TB_iframe') != -1){// either iframe or ajax window
					urlNoQuery = url.split('TB_');
					jQuery("#TB_iframeContent").remove();
					if(params['modal'] != "true"){//iframe no modal
						jQuery("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton' title='"+thickboxL10n.close+"'><div class='tb-close-icon'></div></a></div></div><iframe allowFullScreen=true allowFullScreen  frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 17)+"px;' >"+thickboxL10n.noiframes+"</iframe>");
					}else{//iframe modal
					jQuery("#TB_overlay").unbind();
						jQuery("#TB_window").append("<iframe frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 17)+"px;'>"+thickboxL10n.noiframes+"</iframe>");
					}
			}else{// not an iframe, ajax
					if(jQuery("#TB_window").css("visibility") != "visible"){
						if(params['modal'] != "true"){//ajax no modal
						jQuery("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton'><div class='tb-close-icon'></div></a></div></div><div id='TB_ajaxContent' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px'></div>");
						}else{//ajax modal
						jQuery("#TB_overlay").unbind();
						jQuery("#TB_window").append("<div id='TB_ajaxContent' class='TB_modal' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px;'></div>");
						}
					}else{//this means the window is already up, we are just loading new content via ajax
						jQuery("#TB_ajaxContent")[0].style.width = ajaxContentW +"px";
						jQuery("#TB_ajaxContent")[0].style.height = ajaxContentH +"px";
						jQuery("#TB_ajaxContent")[0].scrollTop = 0;
						jQuery("#TB_ajaxWindowTitle").html(caption);
					}
			}

			jQuery("#TB_closeWindowButton").click(tb_remove);

				if(url.indexOf('TB_inline') != -1){
					jQuery("#TB_ajaxContent").append(jQuery('#' + params['inlineId']).children());
					jQuery("#TB_window").bind('tb_unload', function () {
						jQuery('#' + params['inlineId']).append( jQuery("#TB_ajaxContent").children() ); // move elements back when you're finished
					});
					tb_position();
					jQuery("#TB_load").remove();
					jQuery("#TB_window").css({'visibility':'visible'});
				}else if(url.indexOf('TB_iframe') != -1){
					tb_position();
					jQuery("#TB_load").remove();
					jQuery("#TB_window").css({'visibility':'visible'});
				}else{
					jQuery("#TB_ajaxContent").load(url += "&random=" + (new Date().getTime()),function(){//to do a post change this load method
						tb_position();
						jQuery("#TB_load").remove();
						tb_init("#TB_ajaxContent a.thickbox");
						jQuery("#TB_window").css({'visibility':'visible'});
					});
				}

		}

		if(!params['modal']){
			jQuery(document).bind('keyup.thickbox', function(e){

				if ( e.which == 27 ){ // close
					e.stopImmediatePropagation();
					if ( ! jQuery(document).triggerHandler( 'qf_CloseOnEscape', [{ event: e, what: 'thickbox', cb: tb_remove }] ) )
						tb_remove();

					return false;
				}
			});
		}

	} catch(e) {
		//nothing here
	}
}

//helper functions below
function tb_showIframe(){
	jQuery("#TB_load").remove();
	jQuery("#TB_window").css({'visibility':'visible'});
}

function tb_remove() {
 	jQuery("#TB_imageOff").unbind("click");
	jQuery("#TB_closeWindowButton").unbind("click");
	jQuery("#TB_window").fadeOut("fast",function(){jQuery('#TB_window,#TB_overlay,#TB_HideSelect').trigger("tb_unload").unbind().remove();});
	jQuery("#TB_load").remove();
	if (typeof document.body.style.maxHeight == "undefined") {//if IE 6
		jQuery("body","html").css({height: "auto", width: "auto"});
		jQuery("html").css("overflow","");
	}
	jQuery(document).unbind('.thickbox');
	return false;
}

function tb_position() {
	
var isIE6 = typeof document.body.style.maxHeight === "undefined";
jQuery("#TB_window").css({marginLeft: '-' + parseInt((TB_WIDTH / 2),10) + 'px', width: TB_WIDTH + 'px'});
	if ( ! isIE6 ) { // take away IE6
		jQuery("#TB_window").css({marginTop: '-' + parseInt((TB_HEIGHT / 2),10) + 'px'});
	}
}

function tb_parseQuery ( query ) {
   var Params = {};
   if ( ! query ) {return Params;}// return empty object
   var Pairs = query.split(/[;&]/);
   for ( var i = 0; i < Pairs.length; i++ ) {
      var KeyVal = Pairs[i].split('=');
      if ( ! KeyVal || KeyVal.length != 2 ) {continue;}
      var key = unescape( KeyVal[0] );
      var val = unescape( KeyVal[1] );
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
   }
   return Params;
}

function tb_getPageSize(){
	var de = document.documentElement;
	var w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
	var h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
	arrayPageSize = [w,h];
	return arrayPageSize;
}

function tb_detectMacXFF() {
  var userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('mac') != -1 && userAgent.indexOf('firefox')!=-1) {
    return true;
  }
}
;

