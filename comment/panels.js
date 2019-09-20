/* =========================================================
 * lib/panels.js v0.5.0
 * =========================================================
 * Copyright 2014 QFEditor
 *
 * Visual composer panels & modals for frontend editor
 *
 * ========================================================= */
(function ($) {
    if (_.isUndefined(window.vc)) window.vc = {};
    /**
     * Modal prototype
     * @type {*}
     */
    vc.ModalView = Backbone.View.extend({
        events: {
            'hidden.bs.modal': 'hide'
        },
        initialize: function () {
            _.bindAll(this, 'setSize');
        },
        setSize: function () {
            var height = $(window).height() - 250;
            this.$content.css('maxHeight', height);
        },
        render: function () {
            $(window).bind('resize.ModalView', this.setSize);
            this.setSize();
            vc.closeActivePanel();
            this.$el.modal('show');


            return this;
        },
        hide: function () {
            $(window).unbind('resize.ModalView');
        }
    });
    /**
     * Add element block to page or shortcodes container.
     * @type {*}
     */
    vc.AddElementBlockView = vc.ModalView.extend({
        el: $('#vc-add-element-dialog'),
        prepend: false,
        isSaved: false,
        flag: false,
        action: false,
        closeAndRunAjax: true,
        after: false,
        control: false,
        do_render_speic: false,
        events: {
            'click .vc-shortcode-link': 'createElement',
            'keyup #vc_elements_name_filter': 'filterElements',
            'hidden.bs.modal': 'hide',
            'shown.bs.modal': 'buildFiltering',
            'click .vc-back-biz-customer-elements': 'backElement',
            'click .qfe-content-layouts-container .isotope-filter a': 'filterElements',
            'click .bit-insert-html': 'hideAndInsert',
        },
        buildFiltering: function () {
            //temp solution
            if (this.cid != vc.add_element_block_view.cid) {
                return;
            }
            this.do_render = false;
            if (!vc.is_mobile) $('#vc_elements_name_filter').focus();
            var item_selector, tag, not_in;
            item_selector = '.qfe-layout-element-button';
            tag = this.model ? this.model.get('shortcode') : 'vc_column';
            not_in = this._getNotIn(tag);
            // New vision
            var as_parent = tag && !_.isUndefined(vc.getMapped(tag).as_parent) ? vc.getMapped(tag).as_parent : false;
            if (_.isObject(as_parent)) {
                var parent_selector = [];
                if (_.isString(as_parent.only)) {
                    parent_selector.push(_.reduce(as_parent.only.split(','), function (memo, val) {
                        return memo + (_.isEmpty(memo) ? '' : ',') + '[data-element="' + $.trim(val) + '"]';
                    }, ''));
                }
                if (_.isString(as_parent.except)) {
                    parent_selector.push(_.reduce(as_parent.except.split(','), function (memo, val) {
                        return memo + (_.isEmpty(memo) ? '' : ',') + '[data-element!="' + $.trim(val) + '"]';
                    }, ''));
                }
                item_selector += parent_selector.join(',');
            } else {
                item_selector += not_in;
            }
            // OLD fashion
            if (tag !== false && tag !== false && !_.isUndefined(vc.getMapped(tag).allowed_container_element)) {
                if (vc.getMapped(tag).allowed_container_element === false) {
                    item_selector += ':not([data-is-container=true])';
                } else if (_.isString(vc.getMapped(tag).allowed_container_element)) {
                    item_selector += ':not([data-is-container=true][data-element!=' + vc.getMapped(tag).allowed_container_element + '])';
                }
            }

            this.$buttons.addClass('vc-inappropriate');
            $(item_selector, this.$content).removeClass('vc-inappropriate');
            var $this = this;
            $(item_selector, this.$content).each(function () {

                if ($this.model) {

                    if ($(this).hasClass("parentElement") && !$(this).hasClass("group")) {
                        $(this).addClass('vc-visible');
                    } else {
                        $(this).removeClass('vc-visible');
                    }
                } else {
                    if ($(this).hasClass("parentElement") && !$(this).hasClass("single")) {
                        $(this).addClass('vc-visible');
                    } else {
                        $(this).removeClass('vc-visible');
                    }
                }

            })


            this.hideEmptyFilters();
        },
        hideEmptyFilters: function () {
            //temp solution
            if (this.cid != vc.add_element_block_view.cid) {
                return;
            }
            this.$el.find('.vc-filter-content-elements .all').show();
            this.$el.find(".vc-filter-content-elements .childall").hide();
            this.$el.find('[data-filter]').each(function () {
                if (!$($(this).data('filter') + '.vc-visible', this.$content).length) $(this).parent().hide();
                else $(this).parent().show();
            });
        },
        childFilters: function () {
            //temp solution
            if (this.cid != vc.add_element_block_view.cid) {
                return;
            }
            this.$el.find(".vc-filter-content-elements > li").removeClass("active");
            if (this.$el.find(".vc-filter-content-elements .childall").length == 0) {
                this.$el.find(".vc-filter-content-elements").prepend('<li class="active childall"><a data-filter=".child_category" href="#">全部常用设计</a></li>');
            } else {
                this.$el.find(".vc-filter-content-elements .childall").addClass("active");
            }
            this.$el.find('[data-filter]').each(function () {
                if (!$($(this).data('filter') + '.vc-visible', this.$content).length) $(this).parent().hide();
                else $(this).parent().show();
            });
            this.$el.find('.vc-filter-content-elements .all').hide();

        },
        hideAndInsert: function (e) {
            e.preventDefault();
            this.$el.find('[data-dismiss="modal"]').click();
            var host = "";
            var url = window.location.href;
            var regex = /.*\:\/\/([^\/|:]*).*/;
            var match = url.match(regex);
            if (typeof match != "undefined" && null != match) {
                host = match[1];
            }

            var jthis = this;
            var model = _.isObject(this.model) ? this.model : false;
            if (top.jQuery("table.boxy-wrapper:visible").length == 1) {
                return false;
            }
            top.jConfirmMore("<span class='copytitle'>请拷贝你的内容到下面输入框中<br/>请注意：表单和图片，以及一些数据源跨站复制无法得到部分数据。</span><div class='tocopy0_div'><textarea id='copyText' style='width:100%;height:200px;padding:5px;'></textarea></div>", function () {
                var v = jQuery.trim(top.jQuery("#copyText").val());
                var tmp = v == "" ? "" : base64_decode(v);

                if (tmp == "" || tmp.indexOf("|^^|") < 0) {
                    jAlert("对不起，您复制的内容系统无法解析。请重试。");
                    return false;
                } else {
                    var tmparray = tmp.split("|^^|");
                    if (tmparray.length == 2) {
                        real_url = tmparray[0];
                        real_v = tmparray[1];
                    } else {
                        real_url = tmparray[0];
                        tmparray.splice(0, 1);
                        real_v = tmparray.join("|^^|");
                    }
                }
                if (real_v.indexOf("[vc_single_image") > -1) {
                    if (real_url != host) {
                        real_v = real_v.replace(/\ image=\"[\d]*\" /g, ' image="" ');
                    }
                }
                if (real_v.indexOf("[vc_gallery") > -1) {
                    if (real_url != host) {
                        real_v = real_v.replace(/\ images=\"[\d,]*\" /g, ' images="" ');
                    }
                }
                if (real_v.indexOf("[iphorm_vc") > -1) {
                    //跨站删除
                    if (real_url == host) {
                        $j.post("/FeiEditor/siteEdit/ajax_reset_form", {content: real_v}, function (data) {
                            if (data) {
                                vc.ShortcodesBuilder.isCustomSuffix = "-c-" + vc.ShortcodesBuilder.randomString().substr(0, 2);
                                jthis.copyAndCreateShortCode(data, model);
                                vc.ShortcodesBuilder.isCustomSuffix = "";
                            }
                        });
                        return false;
                    } else {
                        real_v = real_v.replace(/\[iphorm_vc[^\]]*\]/g, "");
                    }
                }
                vc.ShortcodesBuilder.isCustomSuffix = "-c-" + vc.ShortcodesBuilder.randomString().substr(0, 2);
                jthis.copyAndCreateShortCode(real_v, model);
                vc.ShortcodesBuilder.isCustomSuffix = "";

            }, "确认信息", "确认", "取消")


            return false;

        },
        copyAndCreateShortCode: function (real_v, model) {
            var isvcembad = false;
            if (model != false) {
                if (model.get("shortcode") == "vc_column_embad") {
                    if ((real_v.indexOf("[vc_row") == 0 || real_v.indexOf("[vc_column ") == 0 || real_v.indexOf("[vc_column_inner ") == 0 || real_v.indexOf("[vc_column_embad ") == 0)) {
                        jAlert("对不起，活动组件内不能复制带有区块的内容。不过您可以复制单个元素，例如文本等。");
                        return false;
                    } else {
                        isvcembad = true;
                    }
                }
            }
            if (real_v.indexOf("[vc_column_embad ") == 0) {
                real_v = real_v.replace("[vc_column_embad", "[vc_column").replace("vc_column_embad]", "vc_column]");
            }

            if (this.flag == "first") {
                vc.activity = 'prepend';
                vc.group = true;
            }
            if (real_v == "" || real_v.indexOf("[") < 0 || real_v.charAt(real_v.length - 1) != "]") {
                jAlert("对不起，您复制的内容系统无法解析。请重试。");
                return false;
            } else if (real_v.indexOf("[vc_row ") == 0 && real_v.indexOf("[vc_row_inner ") != 0) {
                if (model != false) {
                    var vc_parent = vc.shortcodes.get(model.get("parent_id"));
                    vc_parent.view.$el.addClass('vc-place-after');
                }

                var new_data = vc.ShortcodesBuilder.parse({}, real_v);
                _.each(new_data, function (object) {
                    vc.ShortcodesBuilder.create(object);
                });

                vc.ShortcodesBuilder.render(null, true);

            } else if (real_v.indexOf("[vc_column ") == 0 || real_v.indexOf("[vc_column_inner ") == 0) {
                if (real_v.indexOf("[vc_column_inner") == 0) {
                    real_v = real_v.replace("[vc_column_inner", "[vc_column").replace("vc_column_inner]", "vc_column]");
                }
                if (model != false) {
                    var tag = model.get("shortcode");
                }
                if (tag == "vc_column_inner" && (real_v.indexOf("[vc_column_inner") > -1 || real_v.indexOf("[vc_row_inner") > -1)) {
                    jAlert("对不起，您复制的内容无法在这里添加。请插入其他区域。");
                    return false;
                } else if (tag == "vc_row_inner" && real_v.indexOf("[vc_row_inner") > -1) {
                    jAlert("对不起，您复制的内容无法在这里添加。请插入其他区域。");
                    return false;
                }
                var order = 0;
                $this = this;
                if (model != false) {
                    var params = model.get('params');
                    var width = params.width;
                    var perwidth = params.perwidth;
                    if (typeof perwidth == "undefined") {
                        perwidth = "";
                    }
                    var vc_parent = model.toJSON();
                    var parent_id = model.get("id");
                    if (tag == "vc_row_inner") {
                        real_v = real_v.replace("[vc_column", "[vc_column_inner").replace("vc_column]", "vc_column_inner]");
                        var shortcode_first = vc.shortcodes.findWhere({parent_id: this.model.get('id')});
                        if (shortcode_first) order = shortcode_first.get('order') - 1;

                    }
                } else {
                    var tag = "vc_row";
                    real_v = '[vc_row id="bit_' + vc.ShortcodesBuilder.randomString() + '" ]' + real_v + '[/vc_row]';
                    var params = {};
                    var width = "1/1";
                    var perwidth = "";
                    var parent_id = false;
                }


                var column = false;
                var column_id = false;
                var new_data = vc.ShortcodesBuilder.parse({}, real_v, vc_parent);
                _.each(new_data, function (object) {
                    if (object.shortcode != "vc_column") {
                        if (tag == "vc_row_inner" && object.shortcode == "vc_column_inner") {
                            object.parent_id = parent_id;
                            object.params.width = "1/1";
                            object.params.perwidth = "";
                            if ($this.flag == "vc_row_inner_first") {
                                object.order = order;
                                vc.activity = 'prepend';
                            }
                        } else {
                            if (column_id && object.parent_id == column_id) {
                                object.parent_id = parent_id;
                            }
                        }
                        vc.ShortcodesBuilder.create(object);
                    } else if (model != false) {
                        column_id = object.id;
                        params = object.params;
                        params.width = width;
                        params.perwidth = perwidth;
                        ajaxBeforeLoading(model.get('id'));
                        model.save({params: params}, {silent: true});
                        vc.ShortcodesBuilder.update(model);
                    } else {
                        object.params.width = width;
                        object.params.perwidth = perwidth;
                        vc.ShortcodesBuilder.create(object);
                    }
                });
                vc.ShortcodesBuilder.render(null, true);
            } else if (real_v.indexOf("[") == 0) {
                var vc_parent = false;
                if (model != false) {
                    vc_parent = model.toJSON();
                    if ((model.get("shortcode") == "vc_column_inner" || model.get("shortcode") == "vc_row_inner") && real_v.indexOf("[vc_row_inner") == 0) {
                        jAlert("对不起，您复制的内容无法在这里添加。请插入其他区域。");
                        return false;
                    }
                    var is_special = false;
                    if (iframeWin.jQuery("[data-model-id='" + model.get('id') + "']").closest("section.section-special").length > 0) {
                        is_special = true;
                    }
                    var new_data = vc.ShortcodesBuilder.parse({}, real_v, vc_parent);
                    _.each(new_data, function (object) {
                        if (is_special) {
                            var defaultparam = get_default_whlr(0, object.shortcode);
                            object.params._left = (object.params._left ? object.params._left : 0) * 1 + 10;
                            object.params._top = (object.params._top ? object.params._top : 0) * 1 + 10;
                            object.params.__left = (object.params.__left ? object.params.__left : 0) * 1 + 10;
                            object.params.__top = (object.params.__top ? object.params.__top : 0) * 1 + 10;
                            object.params._width = object.params._width ? object.params._width : defaultparam._width;
                            object.params._height = object.params._height ? object.params._height : defaultparam._height;
                            object.params.__width = object.params.__width ? object.params.__width : defaultparam.__width;
                            object.params.__height = object.params.__height ? object.params.__height : defaultparam.__height;
                        } else {
                            if (object.params._left) delete object.params["_left"];
                            if (object.params._top) delete object.params["_top"];
                            if (object.params.__left) delete object.params["__left"];
                            if (object.params.__top) delete object.params["__top"];
                            if (object.params._width) delete object.params["_width"];
                            if (object.params._height) delete object.params["_height"];
                            if (object.params.__width) delete object.params["__width"];
                            if (object.params.__height) delete object.params["__height"];
                        }
                        vc.ShortcodesBuilder.create(object);
                    });
                    vc.ShortcodesBuilder.render(null, true);
                } else {
                    real_v = '[vc_row id="bit_' + vc.ShortcodesBuilder.randomString() + '" ][vc_column width="1/1"]' + real_v + '[/vc_column][/vc_row]';
                    var new_data = vc.ShortcodesBuilder.parse({}, real_v, vc_parent);
                    _.each(new_data, function (object) {
                        vc.ShortcodesBuilder.create(object);
                    });
                    vc.ShortcodesBuilder.render(null, true);
                }

            }
            if (isvcembad) {
                var id = model.get('id');
                var slider = vc.frame_window.jQuery('[data-model-id="' + id + '"]').closest(".royalSlider_gallery_new");
                vc.frame_window.royalSlider_gallery_new(slider);
            }
        },
        render: function (model, prepend, action, flag) {

            //temp solution
            if (this.cid != vc.add_element_block_view.cid) {
                return;
            }
            var $list, item_selector, tag, not_in;
            this.prepend = _.isBoolean(prepend) ? prepend : false;
            this.model = _.isObject(model) ? model : false;
            this.flag = flag ? flag : false;


            this.$content = this.$el.find('.qfe-elements-list');
            this.$buttons = $('.qfe-layout-element-button', this.$content);


            if (vc.frame_window.jQuery("body").hasClass("single-product") && vc.frame_window.jQuery(".qfy-single-product").length > 0) {
                this.$el.find('.product_page').hide();
            }
            this.$el.find('.group.vc_column_text_block').removeClass("vc-hide");
            this.$el.find('.all.vc_column_text_contentarea').removeClass("vc-hide");
            this.$el.find('.group.catetitle').show();
            this.$el.find('li.slidercontent,li.tabcontent,li.accordioncontent').removeClass("vc-hide");
            this.$el.find('.vc_column_blank,.vc_column_text_notice3,.vc_prenext').removeClass("vc-hide");
            this.$el.find('li.slidercontent').prev().removeClass("vc-hide");
            if (action == "show") {
                this.$el.find('.vc_column_text_column_inner_blank,.vc_column_text_column_inner_blank_1-2_1-2,.vc_column_text_column_inner_blank_1-3_1-3_1-3,.vc_column_text_column_inner_blank_1-4_1-4_1-4_1-4').removeAttr("style");
                this.$el.find('.vc_column_text_column_inner_blank,.vc_column_text_column_inner_blank_1-2_1-2,.vc_column_text_column_inner_blank_1-3_1-3_1-3,.vc_column_text_column_inner_blank_1-4_1-4_1-4_1-4').addClass("vc-visible");
            } else if (action == "single" || action == "hide" || action == "special") {
                //this.$el.find('.group.vc_column_text_block').addClass("vc-hide");
                this.$el.find('.group.catetitle').hide();
                this.$el.find('li.slidercontent,li.tabcontent,li.accordioncontent').addClass("vc-hide");
                this.$el.find('li.slidercontent').prev().addClass("vc-hide");
                this.$el.find('.vc_column_text_column_inner_blank,.vc_column_text_column_inner_blank_1-2_1-2,.vc_column_text_column_inner_blank_1-3_1-3_1-3,.vc_column_text_column_inner_blank_1-4_1-4_1-4_1-4').hide();
                this.$el.find('.vc_column_text_column_inner_blank,.vc_column_text_column_inner_blank_1-2_1-2,.vc_column_text_column_inner_blank_1-3_1-3_1-3,.vc_column_text_column_inner_blank_1-4_1-4_1-4_1-4').removeClass("vc-visible");
                if (action == "special") {
                    this.$el.find('.vc_column_blank,.vc_column_text_notice3,.vc_prenext').addClass("vc-hide");
                }
            } else {
                this.$el.find('.vc_column_text_column_inner_blank,.vc_column_text_column_inner_blank_1-2_1-2,.vc_column_text_column_inner_blank_1-3_1-3_1-3,.vc_column_text_column_inner_blank_1-4_1-4_1-4_1-4').hide();
                this.$el.find('.vc_column_text_column_inner_blank,.vc_column_text_column_inner_blank_1-2_1-2,.vc_column_text_column_inner_blank_1-3_1-3_1-3,.vc_column_text_column_inner_blank_1-4_1-4_1-4_1-4').removeClass("vc-visible");
            }
            this.action = action;


            if (this.model && (this.model.get("shortcode") == "vc_column_embad" || this.model.get("shortcode") == "vc_column_inner")) {
                this.$el.find('.all.vc_column_text_contentarea').addClass("vc-hide");
            }

            var posttype = top.jQuery("#pageUrl_posttype").val();
            if (posttype == "viewtemplate") {
                this.$el.find('.vc_column_text_viewtemplate.parentElement').removeClass("vc-hide");
            } else {
                this.$el.find('.vc_column_text_viewtemplate.parentElement').addClass("vc-hide");
            }
            if (posttype == "post" || posttype == "products" || posttype == "product") {
                this.$el.find('.vc_column_text_viewtemplate0.parentElement').removeClass("vc-hide");
            } else {
                this.$el.find('.vc_column_text_viewtemplate0.parentElement').addClass("vc-hide");
            }


            return vc.AddElementBlockView.__super__.render.call(this);
        },
        hide: function () {
            //temp solution
            if (this.cid != vc.add_element_block_view.cid) {
                return;
            }

            $(window).unbind('resize.vcAddElementModal');

            if (iframeWin.jQuery('[data-tag=vc_row] .section').length > 1 && this.closeAndRunAjax && this.isSaved && this.model === false && this.after === false) {
                this.isSaved = false;
                var jthis = this;
                jConfirmOneButton("<div class='addtocontentpositionHtml'><span class='warnradio'><input type='radio' name='addtocontentposition' onclick='addtocontentpositionFun(this,0)' checked value='0'><label for='addtocontentposition0'>页面的最后</label> &nbsp;&nbsp;&nbsp;&nbsp;<input  type='radio' name='addtocontentposition' id='addtocontentposition1' value='1'><label  for='addtocontentposition1'>页面中的某个位置</label></span></div>", function () {
                    var check = top.jQuery(".addtocontentpositionHtml [name='addtocontentposition']:checked").val();
                    if (check == 1) {
                        jConfirmOneButton("请在页面的正文区域单击您需要插入区块的地方。(您也可以在页面最后创建这个区块，然后将新创建的区块拖动到想要的位置。)", function () {
                            iframeWin.jQuery("body").addClass("clicktoaddmodel");
                            iframeWin.jQuery('[data-tag=vc_row] .section').unbind("click").bind("click", function () {
                                var jjthis = this;
                                jConfirm("您确认需要将新的区块插入到这个区块之后吗？", function () {
                                    iframeWin.jQuery('[data-tag=vc_row] .section').unbind("click");
                                    iframeWin.jQuery("body").removeClass("clicktoaddmodel");
                                    var model_id = iframeWin.jQuery(jjthis).parent().attr("data-model-id");
                                    var findmodel = vc.shortcodes.findWhere({id: model_id});
                                    findmodel.view.$el.addClass('vc-place-after');
                                    ajaxBeforeLoading(model_id);
                                    if (jthis.do_render) {
                                        if ($.inArray(jthis.shortcode, ['iphorm_vc', 'vc_qf_custommenu', 'vc_bit_qqmaps', 'vc_bit_raw_video']) !== -1 && jthis.show_settings) {
                                            vc.edit_element_block_view.render(vc.ShortcodesBuilder.last());
                                        }
                                        var lastmodel = vc.ShortcodesBuilder.last();
                                        if (jthis.closeAndRunAjax) {
                                            //update order
                                            vc.ShortcodesBuilder.render(null, true);
                                            openVCQuickSet(lastmodel.get('shortcode'), lastmodel);
                                        }
                                        if (jthis.do_render_speic) {
                                            if (lastmodel.get("shortcode") == 'vc_single_image') {
                                                vc.edit_element_block_view.render(lastmodel, false, true);
                                            }
                                        }
                                    }

                                });

                            });
                        });
                    } else {
                        ajaxBeforeLoading("0", iframeWin.jQuery("section.content-wrapper"));
                        var lastmodel = vc.ShortcodesBuilder.last();
                        vc.ShortcodesBuilder.render();
                        openVCQuickSet(lastmodel.get('shortcode'), lastmodel);
                        if (jthis.do_render_speic) {
                            if (lastmodel.get("shortcode") == 'vc_single_image') {
                                vc.edit_element_block_view.render(lastmodel, false, true);
                            }
                        }
                    }
                });
            } else {
                this.isSaved = false;
                if (this.do_render) {
                    if ($.inArray(this.shortcode, ['iphorm_vc', 'vc_qf_custommenu', 'vc_bit_qqmaps', 'vc_bit_raw_video']) !== -1 && this.show_settings) {
                        vc.edit_element_block_view.render(vc.ShortcodesBuilder.last());
                    }

                    if (this.prepend) {
                        vc.activity = 'prepend';
                    }

                    if (this.after) {
                        vc.ShortcodesBuilder.render(null, true, this.model);
                    } else if (this.closeAndRunAjax) {
                        vc.ShortcodesBuilder.render();
                    }
                    var lastmodel = vc.ShortcodesBuilder.last();
                    if (lastmodel) {
                        openVCQuickSet(lastmodel.get('shortcode'), lastmodel);
                        if (this.do_render_speic) {
                            if (lastmodel.get("shortcode") == 'vc_single_image') {
                                vc.edit_element_block_view.render(lastmodel, false, true);
                            }
                        }
                    }

                }

            }

            this.after = false;

        },
        backElement: function (e) {
            this.$el.find('.childElement').removeClass("vc-visible");
            this.$el.find('.parentElement').addClass("vc-visible");
            if (this.model) {
                this.$el.find('li.group.parentElement').removeClass("vc-visible");
                this.$el.find('li.single.parentElement').addClass("vc-visible");
            } else {
                this.$el.find('li.group.parentElement').addClass("vc-visible");
                this.$el.find('li.single.parentElement').removeClass("vc-visible");
            }
            this.hideEmptyFilters();
        },
        createElement: function (e) {
            //temp solution
            if (this.cid != vc.add_element_block_view.cid) {
                return;
            }
            this.isSaved = false;
            this.do_render = true;

            e.preventDefault();
            var $control = $(e.currentTarget),
                tag = $control.data('tag'),
                model;
            this.control = $control;
            this.closeAndRunAjax = true;
            //图片自动打开，并打开图片管理器
            if (tag.indexOf("vc_column_text_image_") > -1) {
                this.do_render_speic = true;
            } else {
                this.do_render_speic = false;
            }
            if (tag == 'vc_column_text_column_vc') {


                this.$el.find('.vc_column_text_column_vc.childElement').addClass("vc-visible");
                if (this.model === false) {
                    this.$el.find('.vc_column_text_column_vc.single.childElement').removeClass("vc-visible");
                } else {
                    this.$el.find('.vc_column_text_column_vc.group.childElement').removeClass("vc-visible");
                }
                this.$el.find('.parentElement').removeClass("vc-visible");
                var obj = this.$el.find('.vc_column_text_column_vc.childElement');
                obj.each(function (i) {
                    jQuery(this).mouseenter(function () {
                        var X = jQuery(this).offset().top;
                        var Y = jQuery(this).offset().left;
                        var imgurl = jQuery(this).css("background-image");
                        imgurl = imgurl.replace('url("', "").replace('")', "");
                        imgurl = imgurl.replace('url(', "").replace(')', "");
                        if (jQuery("body > .body_vc_info" + i).length == 0) {
                            jQuery("body").append('<div class="body_vc_info' + i + '" style="position:absolute;top:' + X + 'px;left:' + (Y + 210) + 'px;z-index:1111; width:380px;height:238px;"><img style="width:100%;height:100%;box-shadow: 1px 1px 5px #093459;" src="' + imgurl + '" /><span style="font-size: 40px; position: absolute; top: 20px; background: white none repeat scroll 0% 0%; z-index: 2; height: 20px; left: -14px; color: rgb(199, 208, 215);"><i style="position:relative;top:-20px;" class="fa fa-angle-left"></i></span></div>');
                        }
                    }).mouseleave(function () {
                        jQuery("body > .body_vc_info" + i).remove();
                    })


                })
                this.childFilters(e);
                return false;
            } else if (tag == 'vc_column_text_viewtemplate' || tag == 'vc_column_text_viewtemplate0') {
                this.$el.find('.vc_column_text_viewtemplate.childElement').addClass("vc-visible");

                this.$el.find('.parentElement').removeClass("vc-visible");
                if (tag == 'vc_column_text_viewtemplate') {
                    var pre_v = $("#viewtemplate_categoryname").val();
                } else {
                    var posttype = jQuery("#pageUrl_posttype").val();
                    if (posttype == "post") pre_v = "资讯";
                    if (posttype == "products") pre_v = "产品";
                    if (posttype == "product") pre_v = "商品";
                }
                if (pre_v == "产品") {
                    this.$el.find('.vc_column_text_viewtemplate.childElement.onlyproducts').show();
                } else {
                    this.$el.find('.vc_column_text_viewtemplate.childElement.onlyproducts').hide();
                }
                if (pre_v == "资讯") {
                    this.$el.find('.vc_column_text_viewtemplate.childElement.onlypost').show();
                } else {
                    this.$el.find('.vc_column_text_viewtemplate.childElement.onlypost').hide();
                }
                if (pre_v == "商品") {
                    this.$el.find('.vc_column_text_viewtemplate.childElement.onlyproduct,.vc_column_text_viewtemplate.childElement.onlyproduct1').show();
                } else {
                    this.$el.find('.vc_column_text_viewtemplate.childElement.onlyproduct,.vc_column_text_viewtemplate.childElement.onlyproduct1').hide();
                }
                this.$el.find('.vc_column_text_viewtemplate.childElement .overlay_name').each(function () {
                    var v = jQuery(this).text();
                    if (jQuery(this).find("b").length > 0) {
                        v = v.replace("资讯", "").replace("产品", "").replace("商品", "").replace("动态参数", "");
                    }
                    if (jQuery(this).closest(".onlyproducts").length > 0 || jQuery(this).closest(".onlypost").length > 0 || (jQuery(this).closest(".onlyproduct").length > 0)) {
                        jQuery(this).html("<b>动态参数</b><span style='font-weight: 400; font-size: 14px; display: block; line-height: 18px; margin-top: 10px;'>" + v + "</span>");
                    } else {
                        jQuery(this).html("<b>" + pre_v + "</b><span style='font-weight: 400; font-size: 14px; display: block; line-height: 18px; margin-top: 10px;'>" + v + "</span>");
                    }
                })
                return false;
            } else if (tag == 'vc_column_text_custom') {

                this.$el.find('.vc_column_text_custom.childElement').addClass("vc-visible");
                if (this.model === false) {
                    this.$el.find('.vc_column_text_custom.single.childElement').removeClass("vc-visible");
                } else {
                    this.$el.find('.vc_column_text_custom.group.childElement').removeClass("vc-visible");
                }
                this.$el.find('.parentElement').removeClass("vc-visible");
                if (this.$el.find('.vc_column_text_custom.vc-visible .customSetting').length == 0) {
                    this.$el.find('.vc_column_text_custom.vc-visible').prepend("<span class='customSetting customSettingSelect' onclick='selectCustom(this)'>选择</span><span class='customSetting customSettingSet' onclick='setCustom(this)'>设置</span><span class='customSetting customSettingDelete' onclick='deleteCustom(this)'>删除</span>");
                }
                return false;
            }


            //....
            this.isSaved = true;
            if (tag.indexOf("vc_column_text_") > -1) {

                vc.ShortcodesBuilder.isCreateNewing = true;
                //create default model
                if (tag.indexOf("vc_column_text_postlist_") > -1 || tag.indexOf("vc_column_text_postsliderlist_") > -1 || tag.indexOf("vc_column_text_advancedlist_") > -1 || tag.indexOf("vc_column_text_custom_") > -1) {
                    this.closeAndRunAjax = false;
                }

                if (tag.indexOf("vc_column_text_column_inner_blank") > -1) {
                    createInnerContentFromVC(tag, vc, this);
                } else {
                    createDefaultContentFromVC(tag, vc, this);
                }
                vc.ShortcodesBuilder.isCreateNewing = false;

                return false;
            }
            //isnew
            vc.ShortcodesBuilder.isCreateNewing = true;
            if (this.model && this.model.get("shortcode") == "vc_row_inner" && (this.flag == "vc_row_inner_first" || this.flag == "vc_row_inner")) {
                vc.ShortcodesBuilder.create({
                    shortcode: 'vc_column_inner',
                    parent_id: this.model.get("id"),
                    params: {width: '1/1'}
                });
                this.model = vc.ShortcodesBuilder.last();
                if (this.flag == "vc_row_inner_first") {
                    var order = 0;
                    var shortcode_first = vc.shortcodes.findWhere({parent_id: this.model.get('parent_id')});
                    if (shortcode_first) order = shortcode_first.get('order') - 1;
                    this.model.save({'order': order}, {silent: true});
                }
            }

            if (this.model === false && tag !== 'vc_row') {
                if (tag == "slidercontent" || tag == "tabcontent" || tag == "accordioncontent" || tag == "vc_bit_raw_video" || tag == "Bit_HTML5_Video" || tag == "iphorm_vc" || tag == "TS_VCSC_Countdown" || tag == "vc_jsscroll_text" || tag == "comment" || tag == "qfyshare" || tag == "qfyatt" || tag == "disqus_comment" || tag == "ds_comment" || tag == "uyan_comment" || tag == "vc_images_carousel" || tag == "vc_images_list") {
                    vc.ShortcodesBuilder.create({
                        shortcode: 'vc_row',
                        params: {rowmaxwidth: "1280"}
                    }).create({
                        shortcode: 'vc_column',
                        parent_id: vc.ShortcodesBuilder.lastID(),
                        params: {width: '1/1'}
                    });
                } else {
                    vc.ShortcodesBuilder.create({shortcode: 'vc_row'}).create({
                        shortcode: 'vc_column',
                        parent_id: vc.ShortcodesBuilder.lastID(),
                        params: {width: '1/1'}
                    });
                }

                this.model = vc.ShortcodesBuilder.last();
            } else if (this.model !== false && tag === 'vc_row') {
                tag += '_inner';
            }

            var params = {
                shortcode: tag,
                parent_id: (this.model ? this.model.get('id') : false),
                params: vc.getDefaults(tag)
            };

            if (this.action == "special") {
                var defaultparam = get_default_whlr(this.model.get('id'), tag);
                if (defaultparam) {
                    for (var key in defaultparam) {
                        params.params[key] = defaultparam[key];
                    }
                }
            }
            if (this.prepend) {
                var shortcode_first = vc.shortcodes.findWhere({parent_id: this.model.get('id')});
                if (shortcode_first) params.order = shortcode_first.get('order') - 1;
                vc.activity = 'prepend';
            }
            vc.ShortcodesBuilder.create(params);
            if (tag === 'vc_row') {
                vc.ShortcodesBuilder.create({
                    shortcode: 'vc_column',
                    parent_id: vc.ShortcodesBuilder.lastID(),
                    params: {width: '1/1'}
                });

            } else if (tag === 'vc_row_inner') {
                vc.ShortcodesBuilder.create({
                    shortcode: 'vc_column_inner',
                    parent_id: vc.ShortcodesBuilder.lastID(),
                    params: {width: '1/1'}
                });
            }
            if (_.isString(vc.getMapped(tag).default_content) && vc.getMapped(tag).default_content.length) {
                var new_data = vc.ShortcodesBuilder.parse({}, vc.getMapped(tag).default_content, vc.ShortcodesBuilder.last().toJSON());
                _.each(new_data, function (object) {
                    object.default_content = true;
                    vc.ShortcodesBuilder.create(object);
                });
            }
            //isnew
            vc.ShortcodesBuilder.isCreateNewing = false;
            //add by valley
            this.shortcode = tag;

            this.show_settings = _.isBoolean(vc.getMapped(tag).show_settings_on_create) && vc.getMapped(tag).show_settings_on_create === false ? false : true;
            this.$el.modal('hide');
            if (tag === 'vc_single_image' || tag === 'disqus_comment' || tag === 'ds_comment' || tag === 'uyan_comment') {
                //自动打开
                var model = vc.ShortcodesBuilder.last();
                vc.edit_element_block_view.render(model, false, true);
            } else if (tag === 'vc_row') {
                //自动打开
                var model = vc.ShortcodesBuilder.last();
                var pid = model.get('parent_id');
                if (pid != false) {
                    var parentModel = vc.shortcodes.get(pid);
                    if (_.isUndefined(vc.row_layout_editor)) {
                        vc.row_layout_editor = new vc.RowLayoutEditorPanelView({el: $('#vc-row-layout-panel')});
                        vc.row_layout_editor.render(parentModel).show();
                    } else {
                        vc.row_layout_editor.render(parentModel).show();
                    }
                }
            }
        },
        getDefaultParams: function (tag) {
            var params = {};
            _.each(vc.getMapped(tag).params, function (param) {
                if (!_.isUndefined(param.value)) params[param.pn] = param.value;
            });
            return params;
        },
        _getNotIn: _.memoize(function (tag) {
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
        filterElements: function (e) {
            if (e.keyCode == 27) {
                this.$el.modal('hide');
            }
            //temp solution
            if (this.cid != vc.add_element_block_view.cid) {
                return;
            }
            e.stopPropagation();
            e.preventDefault();
            var $control = $(e.currentTarget),
                filter = '.qfe-layout-element-button',
                name_filter = $('#vc_elements_name_filter').val();
            if ($control.is('[data-filter]')) {
                $('.qfe-content-layouts-container .isotope-filter .active', this.$content).removeClass('active');
                $control.parent().addClass('active');
                filter += $control.data('filter');
                $('#vc_elements_name_filter').val('');
            } else if (name_filter.length > 0) {
                filter += ":contains('" + name_filter + "')";
                $('.qfe-content-layouts-container .isotope-filter .active', this.$content).removeClass('active');
            } else if (name_filter.length == 0) {
                $('.qfe-content-layouts-container .isotope-filter [data-filter="*"]').parent().addClass('active');
            }
            $('.vc-visible', this.$content).removeClass('vc-visible');
            var $this = this;
            if ($('.qfe-content-layouts-container .childall:visible', this.$content).length > 0) {
                //在VC child里
                $(filter, this.$content).each(function () {
                    if ($this.model) {
                        if ($(this).hasClass("childElement") && !$(this).hasClass("group")) {
                            $(this).addClass('vc-visible');
                        } else {
                            $(this).removeClass('vc-visible');
                        }
                    } else {
                        if ($(this).hasClass("childElement") && !$(this).hasClass("single")) {
                            $(this).addClass('vc-visible');
                        } else {
                            $(this).removeClass('vc-visible');
                        }
                    }
                })
            } else {
                $(filter, this.$content).each(function () {
                    if ($this.model) {
                        if ($(this).hasClass("parentElement") && !$(this).hasClass("group")) {
                            $(this).addClass('vc-visible');
                        } else {
                            $(this).removeClass('vc-visible');
                        }
                    } else {
                        if ($(this).hasClass("parentElement") && !$(this).hasClass("single")) {
                            $(this).addClass('vc-visible');
                        } else {
                            $(this).removeClass('vc-visible');
                        }
                    }
                })
            }


        }
    });

    //...new begin


    vc.AddElementBlockView1 = vc.ModalView.extend({
        el: $('#vc-add-element-dialog1'),
        prepend: false,
        after: false,
        events: {
            'click .vc-custom-link': 'createElement',
        },


        render: function (model, prepend) {
            //temp solution
            if (this.cid != vc.add_element_block_view1.cid) {
                return;
            }

            this.prepend = _.isBoolean(prepend) ? prepend : false;
            this.model = _.isObject(model) ? model : false;
            this.$content = this.$el.find('.qfe-elements-list');
            this.$buttons = $('.qfe-layout-element-button', this.$content);
            this.$el.find('.qfe-content-layouts > li').addClass("vc-visible");
            return vc.AddElementBlockView.__super__.render.call(this);
        },
        createElement: function (e) {
            e.preventDefault();
            if (this.cid != vc.add_element_block_view1.cid) {
                return;
            }
            this.isSaved = false;
            var count = 0;
            var models = vc.shortcodes.where({parent_id: this.model.get('id')});
            _.each(models, function (childmodel) {
                count++;
            }, this);
            if (count > 15) {
                alert("超过个数限制，无法再新增区域！");
                return;
            }


            var $control = $(e.currentTarget), tag = $control.data('tag');
            var vc_row = "vc_row_embad";
            var vc_column = "vc_column_embad";
            if (tag == "vc_column_text_block_1") {
                var text = '[' + vc_row + ' rowmaxwidth="1280"][' + vc_column + ' width="1/1" align_sm="undefined"][vc_column_text d_t="1" css_animation="" css_animation_delay="0" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_fontcolor="" hover_linkcolor="" hover_iconcolor="" css_hoveranimation="" hover_anim="0" hover_time="0.5s" maxwidth="0" minheight="0" mobilefontsize=""]<div style="position: relative;"><div><span style="color:#666666;">您可以双击这里或者点击编辑按钮来修改内容。<br/><br/>您还可以添加图标，按钮，图片等常用元素。<br/><br/></span></div></div>[/vc_column_text][/' + vc_column + '][/' + vc_row + ']';
                create_VC_fromString(text, this.model);
            } else if (tag == "vc_column_text_block_new1") {
                var text = '[' + vc_row + ' rowmaxwidth="1280" background_is_extend="0" color="#000000" overlay_colour="#ffffff" overlay_opacity="0.5" overlay_grid="0" full="no" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" display_entire="0" minheight="0" height="normal" margintop="0" marginbottom="0" paddingleft="0" paddingright="0" paddingtop="20" paddingbottom="0" display_device="0" z_index="0" updateparamtime="" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][' + vc_column + ' width="1/1" align_sm="" minheight="0" d_t="4" align="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="0" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="0" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0" updateparamtime="1454558210031"][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="full" img_size_fun="0" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_bigimage.jpg" link_html_type="0" updateparamtime="1454567963397" paddingtop="5" paddingbottom="5"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" bg_color="transparent" paddingbottom="5" updateparamtime="1454556733333" paddingtop="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="color:#696969;"><strong><span style="font-family: 微软雅黑;"><span style="font-size: 18px;">点击修改标题</span></span></strong></span></div></div>[/vc_column_text][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454556741453" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:14px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容，您可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。</span></span></span></div></div>[/vc_column_text][/' + vc_column + '][/' + vc_row + ']';
                create_VC_fromString(text, this.model);
            } else if (tag == "vc_column_text_block_new2") {
                var text = '[' + vc_row + ' rowmaxwidth="1280" d_t="4" background_is_extend="0" color="#000000" overlay_colour="#ffffff" overlay_opacity="0.5" overlay_grid="0" full="no" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" display_entire="0" minheight="0" height="normal" margintop="0" marginbottom="0" paddingleft="0" paddingright="0" paddingtop="20" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454557779761" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][' + vc_column + ' width="1/2" align_sm="undefined" minheight="0" d_t="4" align="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="550" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="5" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558126364" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="400x300" img_size_fun="1" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_middle.jpg" link_html_type="0" updateparamtime="1454568125456" paddingtop="5" paddingbottom="5"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454556741453" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:14px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容，您可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。</span></span></span></div></div>[/vc_column_text][/' + vc_column + '][' + vc_column + ' width="1/2" minheight="0" d_t="4" align="Default" align_sm="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="550" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="5" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558067193" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="400x300" img_size_fun="1" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_middle.jpg" link_html_type="0" updateparamtime="1454568131289" paddingtop="5" paddingbottom="5"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454556741453" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:14px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容，您可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。</span></span></span></div></div>[/vc_column_text][/' + vc_column + '][/' + vc_row + ']';
                create_VC_fromString(text, this.model);
            } else if (tag == "vc_column_text_block_new3") {
                var text = '[' + vc_row + ' rowmaxwidth="1280" d_t="4" background_is_extend="0" color="#000000" overlay_colour="#ffffff" overlay_opacity="0.5" overlay_grid="0" full="no" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" display_entire="0" minheight="0" height="normal" margintop="0" marginbottom="0" paddingleft="0" paddingright="0" paddingtop="20" paddingbottom="0" display_device="0" z_index="0" updateparamtime="" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][' + vc_column + ' width="1/2" align_sm="" minheight="0" d_t="4" align="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="550" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="5" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" bg_color="transparent" paddingbottom="5" updateparamtime="1454556733333" paddingtop="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="color:#696969;"><strong><span style="font-family: 微软雅黑;"><span style="font-size: 18px;">点击修改标题</span></span></strong></span></div></div>[/vc_column_text][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="400x300" img_size_fun="1" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_middle.jpg" link_html_type="0" updateparamtime="1454568005235" paddingtop="5" paddingbottom="5"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454556741453" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:14px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容，您可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。</span></span></span></div></div>[/vc_column_text][/' + vc_column + '][' + vc_column + ' width="1/2" minheight="0" d_t="4" align="Default" align_sm="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="550" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="5" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558067193" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" bg_color="transparent" paddingbottom="5" updateparamtime="1454556733333" paddingtop="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="color:#696969;"><strong><span style="font-family: 微软雅黑;"><span style="font-size: 18px;">点击修改标题</span></span></strong></span></div></div>[/vc_column_text][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="400x300" img_size_fun="1" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_middle.jpg" link_html_type="0" updateparamtime="1454568005235" paddingtop="5" paddingbottom="5"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454556741453" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:14px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容，您可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。</span></span></span></div></div>[/vc_column_text][/' + vc_column + '][/' + vc_row + ']';
                create_VC_fromString(text, this.model);
            } else if (tag == "vc_column_text_block_new4") {
                var text = '[' + vc_row + ' rowmaxwidth="1280" d_t="4" background_is_extend="0" color="#000000" overlay_colour="#ffffff" overlay_opacity="0.5" overlay_grid="0" full="no" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" display_entire="0" minheight="0" height="normal" marginbottom="0" paddingleft="0" paddingright="0" paddingtop="20" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558417081" margintop="0" box_border_settings="0|^|0|^|#c1c1c1|^|0|^|0|^|#ffffff|^|0|^|0|^|#ffffff|^|0|^|0|^|#ffffff|^|0"][' + vc_column + ' width="1/3" align_sm="undefined" d_t="4" align="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="350" minheight="0" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="0" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558642649" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="400x300" img_size_fun="1" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_middle2.jpg" link_html_type="0" updateparamtime="1454568109432" paddingtop="5" paddingbottom="5"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454556741453" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:12px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标按钮图片等常用元素。</span></span></span></div></div>[/vc_column_text][/' + vc_column + '][' + vc_column + ' width="1/3" d_t="4" align="Default" align_sm="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="350" minheight="0" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="0" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558635836" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="400x300" img_size_fun="1" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_middle2.jpg" link_html_type="0" updateparamtime="1454568090366" paddingtop="5" paddingbottom="5"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454556741453" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:12px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标按钮图片等常用元素。</span></span></span></div></div>[/vc_column_text][/' + vc_column + '][' + vc_column + ' width="1/3" d_t="4" align="Default" align_sm="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="350" minheight="0" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="0" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558589979" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="400x300" img_size_fun="1" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_middle2.jpg" link_html_type="0" updateparamtime="1454568101302" paddingtop="5" paddingbottom="5"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454556741453" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:12px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标按钮图片等常用元素。</span></span></span></div></div>[/vc_column_text][/' + vc_column + '][/' + vc_row + ']';
                create_VC_fromString(text, this.model);
            } else if (tag == "vc_column_text_block_new5") {
                var text = '[' + vc_row + ' rowmaxwidth="1280" d_t="4" background_is_extend="0" color="#000000" overlay_colour="#ffffff" overlay_opacity="0.5" overlay_grid="0" full="no" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" display_entire="0" minheight="0" height="normal" marginbottom="0" paddingleft="0" paddingright="0" paddingtop="20" paddingbottom="0" display_device="0" z_index="0" updateparamtime="" margintop="0" box_border_settings="0|^|0|^|#c1c1c1|^|0|^|0|^|#ffffff|^|0|^|0|^|#ffffff|^|0|^|0|^|#ffffff|^|0"][' + vc_column + ' width="1/3" align_sm="" d_t="4" align="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="350" minheight="0" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="0" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" bg_color="transparent" paddingbottom="5" updateparamtime="1454556733333" paddingtop="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div style="text-align: center;"><span style="font-size:16px;"><span style="color: rgb(105, 105, 105);"><strong><span style="font-family: 微软雅黑;">点击修改标题</span></strong></span></span></div></div>[/vc_column_text][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="400x300" img_size_fun="1" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_middle2.jpg" link_html_type="0" updateparamtime="1454568046186" paddingtop="5" paddingbottom="5"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454556741453" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:12px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标按钮图片等常用元素。</span></span></span></div></div>[/vc_column_text][/' + vc_column + '][' + vc_column + ' width="1/3" d_t="4" align="Default" align_sm="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="350" minheight="0" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="0" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558635836" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" bg_color="transparent" paddingbottom="5" updateparamtime="1454556733333" paddingtop="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div style="text-align: center;"><span style="font-size:16px;"><span style="color: rgb(105, 105, 105);"><strong><span style="font-family: 微软雅黑;">点击修改标题</span></strong></span></span></div></div>[/vc_column_text][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="400x300" img_size_fun="1" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_middle2.jpg" link_html_type="0" updateparamtime="1454568046186" paddingtop="5" paddingbottom="5"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454556741453" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:12px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标按钮图片等常用元素。</span></span></span></div></div>[/vc_column_text][/' + vc_column + '][' + vc_column + ' width="1/3" d_t="4" align="Default" align_sm="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="350" minheight="0" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="0" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558589979" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" bg_color="transparent" paddingbottom="5" updateparamtime="1454556733333" paddingtop="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div style="text-align: center;"><span style="font-size:16px;"><span style="color: rgb(105, 105, 105);"><strong><span style="font-family: 微软雅黑;">点击修改标题</span></strong></span></span></div></div>[/vc_column_text][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="400x300" img_size_fun="1" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_middle2.jpg" link_html_type="0" updateparamtime="1454568046186" paddingtop="5" paddingbottom="5"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454556741453" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:12px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标按钮图片等常用元素。</span></span></span></div></div>[/vc_column_text][/' + vc_column + '][/' + vc_row + ']';
                create_VC_fromString(text, this.model);
            } else if (tag == "vc_column_text_block_new6") {
                var text = '[' + vc_row + ' rowmaxwidth="1280" d_t="4" background_is_extend="0" color="#000000" overlay_colour="#ffffff" overlay_opacity="0.5" overlay_grid="0" full="no" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" display_entire="0" minheight="0" height="normal" marginbottom="0" paddingleft="0" paddingright="0" paddingtop="20" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558417081" margintop="0" box_border_settings="0|^|0|^|#c1c1c1|^|0|^|0|^|#ffffff|^|0|^|0|^|#ffffff|^|0|^|0|^|#ffffff|^|0"][' + vc_column + ' width="1/4" align_sm="undefined" d_t="4" align="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="280" minheight="0" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="0" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558642649" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="400x300" img_size_fun="1" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_thumb.jpg" link_html_type="0" paddingtop="5" paddingbottom="5" updateparamtime="1454568286446"][/' + vc_column + '][' + vc_column + ' width="1/4" d_t="4" align="Default" align_sm="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="280" minheight="0" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="0" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558635836" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="400x300" img_size_fun="1" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_thumb.jpg" link_html_type="0" paddingtop="5" paddingbottom="5" updateparamtime="1454568278201"][/' + vc_column + '][' + vc_column + ' width="1/4" maxwidth="280"][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="400x300" img_size_fun="1" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_thumb.jpg" link_html_type="0" paddingtop="5" paddingbottom="5" updateparamtime="1454568269968"][/' + vc_column + '][' + vc_column + ' width="1/4" maxwidth="280"][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="400x300" img_size_fun="1" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_thumb.jpg" link_html_type="0" paddingtop="5" paddingbottom="5" updateparamtime="1454568261305"][/' + vc_column + '][/' + vc_row + ']';
                create_VC_fromString(text, this.model);
            } else if (tag == "vc_column_text_block_new7") {
                var text = '[' + vc_row + ' rowmaxwidth="1280" d_t="4" background_is_extend="0" color="#000000" overlay_colour="#ffffff" overlay_opacity="0.5" overlay_grid="0" full="no" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" display_entire="0" minheight="0" height="normal" marginbottom="0" paddingleft="0" paddingright="0" paddingtop="20" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558417081" margintop="0" box_border_settings="0|^|0|^|#c1c1c1|^|0|^|0|^|#ffffff|^|0|^|0|^|#ffffff|^|0|^|0|^|#ffffff|^|0"][' + vc_column + ' width="1/4" align_sm="undefined" d_t="4" align="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="280" minheight="0" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="0" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558642649" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="400x300" img_size_fun="1" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_thumb.jpg" link_html_type="0" paddingtop="5" paddingbottom="5" updateparamtime="1454568213289"][vc_column_text d_t="6" line_height="1.3" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454559299867" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:12px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span></span></span></div></div>[/vc_column_text][/' + vc_column + '][' + vc_column + ' width="1/4" d_t="4" align="Default" align_sm="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="280" minheight="0" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="0" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558635836" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="400x300" img_size_fun="1" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_thumb.jpg" link_html_type="0" paddingtop="5" paddingbottom="5" updateparamtime="1454568221812"][vc_column_text d_t="6" line_height="1.3" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454559309094" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:12px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span></span></span></div></div>[/vc_column_text][/' + vc_column + '][' + vc_column + ' width="1/4" maxwidth="280"][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="400x300" img_size_fun="1" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_thumb.jpg" link_html_type="0" paddingtop="5" paddingbottom="5" updateparamtime="1454568230388"][vc_column_text d_t="7" line_height="1.3" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454559317783" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:12px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span></span></span></div></div>[/vc_column_text][/' + vc_column + '][' + vc_column + ' width="1/4" maxwidth="280"][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="400x300" img_size_fun="1" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_thumb.jpg" link_html_type="0" paddingtop="5" paddingbottom="5" updateparamtime="1454568238893"][vc_column_text d_t="6" line_height="1.3" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454559325797" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:12px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span></span></span></div></div>[/vc_column_text][/' + vc_column + '][/' + vc_row + ']';
                create_VC_fromString(text, this.model);
            } else if (tag == "vc_column_text_block_new8") {
                var text = '[' + vc_row + ' rowmaxwidth="1280" d_t="4" background_is_extend="0" color="#000000" overlay_colour="#ffffff" overlay_opacity="0.5" overlay_grid="0" full="no" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" display_entire="0" minheight="0" height="normal" marginbottom="0" paddingleft="0" paddingright="0" paddingtop="20" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558417081" margintop="0" box_border_settings="0|^|0|^|#c1c1c1|^|0|^|0|^|#ffffff|^|0|^|0|^|#ffffff|^|0|^|0|^|#ffffff|^|0"][' + vc_column + ' width="1/4" align_sm="undefined" d_t="4" align="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="280" minheight="0" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="0" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558642649" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" bg_color="transparent" paddingbottom="5" updateparamtime="1454556733333" paddingtop="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div style="text-align: center;"><span style="font-size:16px;"><span style="color: rgb(105, 105, 105);"><strong><span style="font-family: 微软雅黑;">点击修改标题</span></strong></span></span></div></div>[/vc_column_text][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="400x300" img_size_fun="1" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_thumb.jpg" link_html_type="0" paddingtop="5" paddingbottom="5" updateparamtime="1454568164598"][vc_column_text d_t="6" line_height="1.3" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454559299867" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:12px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span></span></span></div></div>[/vc_column_text][/' + vc_column + '][' + vc_column + ' width="1/4" d_t="4" align="Default" align_sm="Default" overlay_opacity="0" overlay_grid="0" background_image_size="cover" background_position_vertical="0" background_image_repeat="no-repeat" background_image_attachment="scroll" bordercorner="0" box_border="0" maxwidth="280" minheight="0" margintop="0" marginbottom="0" marginleft="0" marginright="0" paddingleft="0" paddingright="0" paddingtop="0" paddingbottom="0" display_device="0" z_index="0" updateparamtime="1454558635836" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" bg_color="transparent" paddingbottom="5" updateparamtime="1454556733333" paddingtop="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div style="text-align: center;"><span style="font-size:16px;"><span style="color: rgb(105, 105, 105);"><strong><span style="font-family: 微软雅黑;">点击修改标题</span></strong></span></span></div></div>[/vc_column_text][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="400x300" img_size_fun="1" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_thumb.jpg" link_html_type="0" paddingtop="5" paddingbottom="5" updateparamtime="1454568174474"][vc_column_text d_t="6" line_height="1.3" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454559309094" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:12px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span></span></span></div></div>[/vc_column_text][/' + vc_column + '][' + vc_column + ' width="1/4" maxwidth="280"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" bg_color="transparent" paddingbottom="5" updateparamtime="1454556733333" paddingtop="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div style="text-align: center;"><span style="font-size:16px;"><span style="color: rgb(105, 105, 105);"><strong><span style="font-family: 微软雅黑;">点击修改标题</span></strong></span></span></div></div>[/vc_column_text][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="400x300" img_size_fun="1" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_thumb.jpg" link_html_type="0" paddingtop="5" paddingbottom="5" updateparamtime="1454568181319"][vc_column_text d_t="7" line_height="1.3" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454559317783" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:12px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span></span></span></div></div>[/vc_column_text][/' + vc_column + '][' + vc_column + ' width="1/4" maxwidth="280"][vc_column_text d_t="7" line_height="1.5" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" bg_color="transparent" paddingbottom="5" updateparamtime="1454556733333" paddingtop="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div style="text-align: center;"><span style="font-size:16px;"><span style="color: rgb(105, 105, 105);"><strong><span style="font-family: 微软雅黑;">点击修改标题</span></strong></span></span></div></div>[/vc_column_text][vc_single_image d_t="1" bg_image_repeat="no-repeat" image="" img_size="400x300" img_size_fun="1" alignment="center" border_color="#cccccc" shadow_color="#cccccc" rounded_size="4" shadow_style="0" shadow_size="1" img_link_target="_self" image_textbg_show="0" image_textbg_content="0" image_textbg_bgcolor="#000" image_textbg_bgop="0.8" image_textbg_padding="10px 10px 10px 10px" image_textbg_textcolor="#fff" image_textbg_textfont="16" image_textbg_textcontentfont="16" image_textbg_mobiletextfont="16" image_textbg_mobilecontentfont="16" default_image="http://fast.qifeiye.com/qfy-content/plugins/qfy_editor/assets/vc/faces/demo_thumb.jpg" link_html_type="0" paddingtop="5" paddingbottom="5" updateparamtime="1454568188795"][vc_column_text d_t="6" line_height="1.3" text_shadowsize="0" text_shadowstyle="0" bg_image_repeat="no-repeat" box_border="0" box_shadow="0" box_shadowstyle="0" box_shadowsize="1" hover_setting="0" hover_anim="0" hover_time="500ms" maxwidth="0" minheight="0" updateparamtime="1454559325797" paddingtop="5" paddingbottom="5" box_border_settings="1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0"]<div style="position: relative;"><div><span style="font-size:12px;"><span style="color: rgb(105, 105, 105);"><span style="font-family: 微软雅黑;">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span></span></span></div></div>[/vc_column_text][/' + vc_column + '][/' + vc_row + ']'
                create_VC_fromString(text, this.model);
            }


            var params = this.model.get('params');
            var buttons = params.buttons;
            if (typeof buttons == "undefined" && !buttons) {
                buttons = "";
            }
            if (buttons == "" || buttons.substr(buttons.length - 1, 1) == ";") {
                params.buttons = buttons + "内页" + (count + 1);
            } else {
                params.buttons = buttons + ";内页" + (count + 1);
            }
            this.model.save({params: params});
            if (this.model.get("shortcode") == "tabcontent" || this.model.get("shortcode") == "accordioncontent") {
                vc.ShortcodesBuilder.update(this.model);
            }
            vc.ShortcodesBuilder.isAddSlider = true;
            vc.ShortcodesBuilder.render(false, false, this.model);
            this.$el.modal('hide');

            return;
        },

    });

    //...new end


//...new begin


    vc.AddElementBlockView2 = vc.ModalView.extend({
        el: $('#vc-add-element-dialog2'),
        model: false,
        events: {
            'click .vc-shortcode-link': 'createElement',
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
            if (tag == "list_mobile_element" && (stag == "vc_posts_grid" || stag == "advanced_list" || stag == "products_list")) {
                return true;
            }
            if (tag == stag) {
                return true;
            } else {
                return false;
            }
        },

        render: function (model, flag) {

            this.model = _.isObject(model) ? model : false;
            var tag = this.model.get("shortcode");
            this.$content = this.$el.find('.qfe-elements-list');
            this.$el.find('.qfe-content-layouts > li').removeClass("vc-visible");

            if (flag == "list_mobile_element") {
                tag = "list_mobile_element";
            }
            var obj = this.$el.find('.qfe-content-layouts > li[data-element="' + tag + '"]');
            obj.addClass("vc-visible");
            if (tag == "vc_row" || tag == "vc_row_inner" || tag == "vc_row_embad") {
                obj = this.$el.find('.qfe-content-layouts > li[data-element="vc_row"],.qfe-content-layouts > li[data-element="vc_row_inner"],.qfe-content-layouts > li[data-element="vc_row_embad"]');
                obj.addClass("vc-visible");
            } else if (tag == "vc_column" || tag == "vc_column_inner" || tag == "vc_column_embad") {
                obj = this.$el.find('.qfe-content-layouts > li[data-element="vc_column"],.qfe-content-layouts > li[data-element="vc_column_inner"],.qfe-content-layouts > li[data-element="vc_column_embad"]');
                obj.addClass("vc-visible");
            }


            var len = obj.length;
            if (len == 0) {
                this.$el.find('.noresult').show();
            } else {
                this.$el.find('.noresult').hide();
            }
            return vc.AddElementBlockView.__super__.render.call(this);
        },
        createElement: function (e) {
            e.preventDefault();
            var $this = this;
            var host = "";
            var url = window.location.href;
            var regex = /.*\:\/\/([^\/|:]*).*/;
            var match = url.match(regex);
            if (typeof match != "undefined" && null != match) {
                host = match[1];
            }
            var tag = this.model.get("shortcode");
            var $control = $(e.currentTarget);
            var real_tag = $control.attr("data-tag");
            var real_id = $control.attr("data-id");
            var real_host = $control.attr("data-host");
            var real_v = "";
            jQuery.each(custom_format_js, function (n, value) {
                if (value.id == real_id) {
                    real_v = value.content;

                    if (real_v && $this.isliketag(real_tag, tag)) {
                        if (host != real_host) {
                            jQuery.post("/FeiEditor/siteEdit/change_vc_custom", {
                                url: real_host,
                                content: real_v
                            }, function (data) {
                                if (data.indexOf("success|^^|") == 0) {
                                    var tmpdata = data.split("|^^|");
                                    tmpdata.splice(0, 1);
                                    real_v = tmpdata.join("|^^|");
                                    $this.stylecopy_updateform($this.model, real_v);
                                }
                            })
                        } else {
                            $this.stylecopy_updateform($this.model, real_v);
                        }
                    }
                    $this.$el.modal('hide');
                    return;
                }
            });


            return;
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
                        //vc.edit_element_block_view.render(model,false,false,tag);
                    });

                });
            } else {
                vc.ShortcodesBuilder.update(model);
                vc.ShortcodesBuilder.save(true, function () {

                    iframeWin.jQuery("[data-model-id='" + id + "'] .control-btn-stylecopy:first").append('<span class="copymsg qfyfadeOutUp" style="position:absolute; width: 70px;right:0px;top:-20px;color:green;font-size:12px !important;">应用成功</span>');
                    setTimeout(function () {
                        iframeWin.jQuery(".copymsg").remove();
                    }, 2200);
                    //vc.edit_element_block_view.render(model,false,false,tag);
                });
            }

        },
    });

    //...new end


    /**
     * Add element block to page or shortcodes container.
     * @type {*}
     */
    vc.AddWidgetBlockView = vc.ModalView.extend({
        el: $('#vc-add-widget-dialog'),
        prepend: false,
        draggable: false,
        events: {
            'click .vc-widget-link': 'createWidget',
            'keyup #vc_widget_name_filter': 'filterElements',
            'hidden.bs.modal': 'hide',
            'shown.bs.modal': 'buildFiltering',
            'click .qfe-content-layouts-container .isotope-filter a': 'filterElements',
            'click .vc-back-biz-customer-elements': 'backElement',
        },
        backElement: function () {
            this.$el.find('.childElement').removeClass("vc-visible");
            this.$el.find('.parentElement').addClass("vc-visible");
        },
        buildFiltering: function () {
            //temp solution
            /*var instances = [vc.add_widget_block_view.cid, vc.add_header_widget_block_view.cid, vc.add_maintop_widget_dialog.cid, vc.add_banner_block_view.cid, vc.add_header2_block_view.cid];
    	if ($.inArray(this.cid, instances) == -1) {
	  	  return;
	    }
      this.do_render = false;
      if(!vc.is_mobile) $('#vc_widget_name_filter').focus();
      var item_selector, tag, not_in;
      item_selector = '.qfe-layout-element-button';
      tag = this.model ? this.model.get('shortcode') : 'vc_column';

      not_in = this._getNotIn(tag);
      // New vision
      var as_parent = tag && !_.isUndefined(vc.getMapped(tag).as_parent) ? vc.getMapped(tag).as_parent : false;
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
      if (tag !== false && tag !== false && !_.isUndefined(vc.getMapped(tag).allowed_container_element)) {
        if (vc.getMapped(tag).allowed_container_element === false) {
          item_selector += ':not([data-is-container=true])';
        } else if (_.isString(vc.getMapped(tag).allowed_container_element)) {
          item_selector += ':not([data-is-container=true][data-element!=' + vc.getMapped(tag).allowed_container_element + '])';
        }
      }
      this.$buttons.addClass('vc-inappropriate');
      $(item_selector, this.$content).removeClass('vc-inappropriate').addClass('vc-visible');

      this.hideEmptyFilters();*/
        },
        hideEmptyFilters: function () {
            //temp solution
            var instances = [vc.add_widget_block_view.cid, vc.add_header_widget_block_view.cid, vc.add_maintop_widget_dialog.cid, vc.add_banner_block_view.cid, vc.add_header2_block_view.cid];
            if ($.inArray(this.cid, instances) == -1) {
                return;
            }
            this.$el.find('[data-filter]').each(function () {
                if (!$($(this).data('filter') + '.vc-visible', this.$content).length) $(this).hide();
            });
        },
        render: function (model, prepend) {

            //temp solution
            var instances = [vc.add_widget_block_view.cid, vc.add_header_widget_block_view.cid, vc.add_maintop_widget_dialog.cid, vc.add_banner_block_view.cid, vc.add_header2_block_view.cid];
            if ($.inArray(this.cid, instances) == -1) {
                return;
            }
            var $list, item_selector, tag, not_in;
            this.prepend = _.isBoolean(prepend) ? prepend : false;
            this.model = _.isObject(model) ? model : false;
            this.$content = this.$el.find('.qfe-elements-list');
            this.$buttons = $('.qfe-layout-element-button', this.$content);
            if (!this.draggable) {
                this.$el.draggable({iframeFix: true, handle: '.panel-heading'});
                this.draggable = true;
            }
            if (top.jQuery(".qfy_simple_fields_menu").length == 0) {
                this.$el.find('li.bit_customtext').remove();
            }
            jQuery(".qfe-content-layouts .parentElement").addClass("vc-visible");
            jQuery(".qfe-content-layouts .childElement").removeClass("vc-visible");


            return vc.AddElementBlockView.__super__.render.call(this);
        },
        hide: function () {
            //temp solution
            var instances = [vc.add_widget_block_view.cid, vc.add_header_widget_block_view.cid, vc.add_maintop_widget_dialog.cid, vc.add_banner_block_view.cid, vc.add_header2_block_view.cid];
            if ($.inArray(this.cid, instances) == -1) {
                return;
            }


            $(window).unbind('resize.vcAddElementModal');
            if (this.do_render) {
                if (this.show_settings) {
                    vc.edit_element_block_view.render(vc.ShortcodesBuilder.last());
                }
                vc.ShortcodesBuilder.render();
            }
        },
        createWidget: function (e) {
            //temp solution
            var instances = [vc.add_widget_block_view.cid, vc.add_header_widget_block_view.cid, vc.add_maintop_widget_dialog.cid, vc.add_banner_block_view.cid, vc.add_header2_block_view.cid];
            if ($.inArray(this.cid, instances) == -1) {
                return;
            }
            this.do_render = true;
            e.preventDefault();
            var $control = $(e.currentTarget), tag = $control.data('tag');
            var sid = this.model.get("sid");
            var id = $control.attr('id');
            var obj = jQuery($control).parent().parent().parent();

            if (tag == "rev-slider-widget") {
                this.$el.find('.rev-slider-widget.childElement').addClass("vc-visible");
                this.$el.find('.parentElement').removeClass("vc-visible");
                return false;
            } else if (tag == "bit_postlist") {
                this.$el.find('.bit_postlist.childElement').addClass("vc-visible");
                this.$el.find('.parentElement').removeClass("vc-visible");
                return false;
            } else if (tag == "bit_single_image") {
                this.$el.find('.bit_single_image.childElement').addClass("vc-visible");
                this.$el.find('.parentElement').removeClass("vc-visible");
                return false;
            } else if (tag == "vc_notice") {
                this.$el.find('.vc_notice.childElement').addClass("vc-visible");
                this.$el.find('.parentElement').removeClass("vc-visible");
                return false;
            } else if (tag == "bit_title") {
                this.$el.find('.bit_title.childElement').addClass("vc-visible");
                this.$el.find('.parentElement').removeClass("vc-visible");
                return false;
            } else if (tag == "bitcommerce_widget_cart") {
                this.$el.find('.bitcommerce_widget_cart.childElement').addClass("vc-visible");
                this.$el.find('.parentElement').removeClass("vc-visible");
                return false;
            } else if (tag == "vc_column_text_comment") {
                this.$el.find('.vc_column_text_comment.childElement').addClass("vc-visible");
                this.$el.find('.parentElement').removeClass("vc-visible");
                return false;
            } else if (tag == "bit_user") {
                this.$el.find('.bit_user.childElement').addClass("vc-visible");
                this.$el.find('.parentElement').removeClass("vc-visible");
                return false;
            } else if (tag == "vc_images_lib") {
                this.$el.find('.vc_images_lib.childElement').addClass("vc-visible");
                this.$el.find('.parentElement').removeClass("vc-visible");
                return false;
            } else if (tag == "bit_postlist_control") {
                this.$el.find('.bit_postlist_control.childElement').addClass("vc-visible");
                this.$el.find('.parentElement').removeClass("vc-visible");
                return false;
            } else if (tag == "vc_column_text_vc_icon") {
                this.$el.find('.vc_column_text_vc_icon.childElement').addClass("vc-visible");
                this.$el.find('.parentElement').removeClass("vc-visible");
                return false;
            } else if (tag.indexOf("bit_postlist") > -1) {

                postListToEditor2(sid, tag, vc.AddWidgetBlockView);
                this.$el.modal('hide');

            } else {
                ajaxAddWidget(sid, tag, vc.AddWidgetBlockView);
                this.$el.modal('hide');
            }

        },
        closeWidget: function () {

            //temp solution
            var instances = [vc.add_widget_block_view.cid, vc.add_header_widget_block_view.cid, vc.add_maintop_widget_dialog.cid, vc.add_banner_block_view.cid, vc.add_header2_block_view.cid];
            if ($.inArray(this.cid, instances) == -1) {
                return;
            }

            this.$el.modal('hide');
        },
        getDefaultParams: function (tag) {
            //temp solution
            var instances = [vc.add_widget_block_view.cid, vc.add_header_widget_block_view.cid, vc.add_maintop_widget_dialog.cid, vc.add_banner_block_view.cid, vc.add_header2_block_view.cid];
            if ($.inArray(this.cid, instances) == -1) {
                return;
            }
            var params = {};
            _.each(vc.getMapped(tag).params, function (param) {
                if (!_.isUndefined(param.value)) params[param.pn] = param.value;
            });
            return params;
        },
        _getNotIn: _.memoize(function (tag) {
            //temp solution
            var instances = [vc.add_widget_block_view.cid, vc.add_header_widget_block_view.cid, vc.add_maintop_widget_dialog.cid, vc.add_banner_block_view.cid, vc.add_header2_block_view.cid];
            if ($.inArray(this.cid, instances) == -1) {
                return;
            }
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
        filterElements: function (e) {
            //temp solution

        }
    });
    /**
     * Add element block to page or shortcodes container.
     * @type {*}
     */
    vc.setWidgetBlockView = vc.ModalView.extend({
        el: $('#vc-setting-widget-dialog'),
        $content: false,
        prepend: false,
        draggable: false,
        sid: false,
        events: {
            'hidden.bs.modal': 'hide',
            'click .slider-save': 'saveit',
            'click .saveit_topbar': 'saveit_topbar',
        },
        saveit: function () {
            var isfullpage = 0;
            if (iframeWin.jQuery("page-template-template-fullscreen-php").length > 0) {
                isfullpage = 1;
            }
            var ispc = 0;
            if (iframeWin.jQuery("body").width() > 768) {
                ispc = 1;
            }
            var silder_size = this.$el.find('[name="silder_size"]').val();
            var silder_maxwidth = this.$el.find('[name="silder_maxwidth"]').val();
            var silder_bgcolor = this.$el.find('[name="silder_bgcolor"]').val();
            var silder_background_image = this.$el.find('[name="silder_background_image"]').val();
            var background_image_repeat = this.$el.find('[name="background_image_repeat"]').val();
            var background_image_attachment = this.$el.find('[name="background_image_attachment"]').val();
            var silder_border = this.$el.find('[name="silder_border"]').val();
            var silder_top = this.$el.find('[name="silder_top"]').val();
            var silder_posiition_top = this.$el.find('[name="silder_posiition_top"]').val();
            var silder_bottom = this.$el.find('[name="silder_bottom"]').val();
            var silder_left = this.$el.find('[name="silder_left"]').val();
            var silder_right = this.$el.find('[name="silder_right"]').val();
            var silder_device = this.$el.find('[name="silder_device"]').val();
            var borders = getBorderSet(this.$el.find(".set_border_table"));
            var silder_bgcolor_opt = this.$el.find('[name="silder_bgcolor_opt"]').val();

            var data = {
                "silder_size": silder_size,
                "silder_maxwidth": silder_maxwidth,
                "silder_bgcolor": silder_bgcolor,
                "silder_background_image": silder_background_image,
                "background_image_repeat": background_image_repeat,
                "background_image_attachment": background_image_attachment,
                "silder_border": silder_border,
                "silder_posiition_top": silder_posiition_top,
                "silder_top": silder_top,
                "silder_bottom": silder_bottom,
                "silder_left": silder_left,
                "silder_right": silder_right,
                "silder_device": silder_device,
                "borders": borders,
                "silder_bgcolor_opt": silder_bgcolor_opt
            };
            $savebtn = this.$el.find(".slider-save");
            $savebtn.addClass('btn_data_onsaving').attr("data-old-btnname", $savebtn.html()).prop('disabled', true).prop('btn_data_onsaving', true).html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
            if (this.sid == "bitLeftSider") {
                jQuery.post("/FeiEditor/siteEdit/ajax_updateSlider", data, function (msg) {
                    location.reload();
                });
            } else if (this.sid == "bitRightSider") {
                jQuery.post("/FeiEditor/siteEdit/ajax_updateSlider/1", data, function (msg) {
                    location.reload();
                });
            } else if (this.sid == "bitMainTopSider") {
                jQuery.post("/FeiEditor/siteEdit/ajax_updateSlider/2", data, function (msg) {
                    location.reload();
                });
            } else if (this.sid == "bitMainBottomSider") {
                jQuery.post("/FeiEditor/siteEdit/ajax_updateSlider/3", data, function (msg) {
                    location.reload();
                });
            } else if (this.sid == "bitHeader-6") {
                jQuery.post("/FeiEditor/siteEdit/ajax_updateSlider/4", data, function (msg) {
                    location.reload();
                });
            } else if (this.sid == "bitHeader-7") {
                jQuery.post("/FeiEditor/siteEdit/ajax_updateSlider/5", data, function (msg) {
                    location.reload();
                });
            } else if (this.sid == "bitHeader-8") {
                var data = {
                    "silder_top": silder_top,
                    "silder_bottom": silder_bottom,
                    "silder_left": silder_left,
                    "silder_right": silder_right
                };
                jQuery.post("/FeiEditor/siteEdit/ajax_updateSlider/8", data, function (msg) {
                    location.reload();
                });
            } else if (this.sid == "bitHeader-9") {
                var data = {
                    "silder_top": silder_top,
                    "silder_bottom": silder_bottom,
                    "silder_left": silder_left,
                    "silder_right": silder_right
                };
                jQuery.post("/FeiEditor/siteEdit/ajax_updateSlider/9", data, function (msg) {
                    location.reload();
                });
            } else if (this.sid == "bitHeader-2") {
                var topbarright = iframeWin.jQuery(".top-bar-right");
                var width = this.$el.find("[name='bit-slider-maxwidth']").val();
                var mobile_width = this.$el.find("[name='bit-slider-mobile-maxwidth']").val();
                var align = this.$el.find("[name='bit-slider-align']").val();
                var mobile_align = this.$el.find("[name='bit-slider-mobile-align']").val();
                var valign = this.$el.find("[name='bit-slider-valign']").val();
                var mobile_valign = this.$el.find("[name='bit-slider-mobile-valign']").val();
                var paddingtop = this.$el.find("[name='bit-headertopright-padding-top']").val();
                var mpaddingtop = this.$el.find("[name='mobilebit-headertopright-padding-top']").val();
                var paddingbottom = this.$el.find("[name='bit-headertopright-padding-bottom']").val();
                var mpaddingbottom = this.$el.find("[name='mobilebit-headertopright-padding-bottom']").val();

                jQuery.post("/FeiEditor/siteEdit/updateOneOption/" + isfullpage, {
                    "bit-headertopright-width": width,
                    "mobilebit-headertopright-width": mobile_width,
                    "bit-headertopright-align": align,
                    "mobilebit-headertopright-align": mobile_align,
                    "bit-headertopright-valign": valign,
                    "mobilebit-headertopright-valign": mobile_valign,
                    "bit-headertopright-padding-top": paddingtop,
                    "mobilebit-headertopright-padding-top": mpaddingtop,
                    "bit-headertopright-padding-bottom": paddingbottom,
                    "mobilebit-headertopright-padding-bottom": mpaddingbottom,
                }, function () {
                    //location.reload();
                    if (align == "align_left") {
                        topbarright.parent().addClass("align_left").removeClass("align_right align_center");
                    } else if (align == "align_right") {
                        topbarright.parent().addClass("align_right").removeClass("align_left align_center");
                    } else if (align == "align_center") {
                        topbarright.parent().addClass("align_center").removeClass("align_left align_right");
                    }
                    if (valign == "align") {
                        topbarright.parent().addClass("align").removeClass("valign");
                    } else if (valign == "valign") {
                        topbarright.parent().addClass("valign").removeClass("align");
                    }
                    if (mobile_align == "mobilealign_left") {
                        topbarright.parent().addClass("mobilealign_left").removeClass("mobilealign_right mobilealign_center");
                    } else if (mobile_align == "mobilealign_right") {
                        topbarright.parent().addClass("mobilealign_right").removeClass("mobilealign_left mobilealign_center");
                    } else if (mobile_align == "mobilealign_center") {
                        topbarright.parent().addClass("mobilealign_center").removeClass("mobilealign_left mobilealign_right");
                    }
                    if (mobile_valign == "mobilealign") {
                        topbarright.parent().addClass("mobilealign").removeClass("mobilevalign");
                    } else if (mobile_valign == "mobilevalign") {
                        topbarright.parent().addClass("mobilevalign").removeClass("mobilealign");
                    }
                    if (ispc == "1") {
                        topbarright.css("width", width + "px").css("padding-bottom", paddingbottom + "px").css("padding-top", paddingtop + "px");
                        topbarright.parent().css("width", width + "px");

                    } else {
                        topbarright.css("width", mobile_width + "px").css("padding-bottom", mpaddingbottom + "px").css("padding-top", mpaddingtop + "px");
                        topbarright.parent().css("width", mobile_width + "px");
                    }


                });
            } else if (this.sid == "bitHeader-3") {
                var width = this.$el.find("[name='bit-slider-maxwidth']").val();
                var rightalign = this.$el.find("[name='bit-slider-align']").val();
                var menu_info_box = iframeWin.jQuery(".menu-info-box");
                jQuery.post("/FeiEditor/siteEdit/updateOneOption", {
                    "header-floating_menu_rightwidth": width,
                    "header-floating_menu_rightalign": rightalign
                }, function () {
                    menu_info_box.width(width);
                    if (rightalign == "align_left") {
                        menu_info_box.addClass("align_left").removeClass("align_right align_center");
                    } else if (rightalign == "align_center") {
                        menu_info_box.addClass("align_center").removeClass("align_right align_left");
                    } else if (rightalign == "align_right") {
                        menu_info_box.addClass("align_right").removeClass("align_left align_center");
                    }

                });
            } else if (this.sid == "HOMEPAGE") {
                var homeid = this.$el.find("#homepage_select").val();
                if (homeid == "") {
                    top.jAlert("请选择一个页面作为首页");
                    var buttonHtml = $savebtn.attr("data-old-btnname");
                    $savebtn.removeClass('btn_data_onsaving').removeAttr('btn_data_onsaving').removeAttr('disabled').html(buttonHtml);
                    return;
                }
                jQuery.post("/FeiEditor/siteEdit/ajax_updateHomepage", {"homepage_select": homeid}, function (msg) {
                    top.jQuery('#pageUrl').val(homeid);
                    top.jQuery('#pageUrl').change();
                });
            }
        },
        render_topbar: function (sid) {
            this.sid = sid;
            var $this = this;

            jQuery.ajax({
                url: '/admin/panels.php?panel_type='+this.sid,
                success: function (result) {
                    if(result){
                        $this.$el.html(result);
                    }
                },
                async: false
            });

            if (!this.draggable) {
                this.$el.draggable({iframeFix: true, handle: '.modal-header'});
                this.draggable = true;
            }
            this.$content = this.$el.find('.qfe-elements-list');
            this.$el.find(".modal-dialog").width("600");
            return vc.AddElementBlockView.__super__.render.call(this);
        },
        saveit_topbar: function () {
            var isfullpage = 0;
            if (iframeWin.jQuery("page-template-template-fullscreen-php").length > 0) {
                isfullpage = 1;
            }

            if (this.sid == "topbar_1") {
                var width = this.$el.find('[name="bit-topbar_1-width"]').val();
                var align = this.$el.find('[name="bit-topbar_1-align"]').val();
                var top = this.$el.find('[name="bit-topbar_1-padding-top"]').val();
                var bottom = this.$el.find('[name="bit-topbar_1-padding-bottom"]').val();
                var left = this.$el.find('[name="bit-topbar_1-padding-left"]').val();
                var right = this.$el.find('[name="bit-topbar_1-padding-right"]').val();
                jQuery.post("/FeiEditor/siteEdit/updateOneOption/" + isfullpage, {
                    "bit-topbar_1-width": width,
                    "bit-topbar_1-align": align,
                    "bit-topbar_1-padding-top": top,
                    "bit-topbar_1-padding-bottom": bottom,
                    "bit-topbar_1-padding-left": left,
                    "bit-topbar_1-padding-right": right
                }, function () {
                    location.reload();
                });
            } else if (this.sid == "topbar_2") {

                var width = this.$el.find('[name="bit-topbar_2-width"]').val();
                var align = this.$el.find('[name="bit-topbar_2-align"]').val();
                var top = this.$el.find('[name="bit-topbar_2-padding-top"]').val();
                var bottom = this.$el.find('[name="bit-topbar_2-padding-bottom"]').val();
                var left = this.$el.find('[name="bit-topbar_2-padding-left"]').val();
                var right = this.$el.find('[name="bit-topbar_2-padding-right"]').val();
                jQuery.post("/FeiEditor/siteEdit/updateOneOption/" + isfullpage, {
                    "bit-topbar_2-width": width,
                    "bit-topbar_2-align": align,
                    "bit-topbar_2-padding-top": top,
                    "bit-topbar_2-padding-bottom": bottom,
                    "bit-topbar_2-padding-left": left,
                    "bit-topbar_2-padding-right": right
                }, function () {
                    location.reload();
                });
            }
        },
        render: function (sid, prepend) {
            this.sid = sid;
            var $this = this;

            jQuery.ajax({
                url: '/admin/panels.php?panel_type='+this.sid,
                success: function (result) {
                    if(result){
                        $this.$el.html(result);
                    }
                },
                async: false
            });



            if (!this.draggable) {
                this.$el.draggable({iframeFix: true, handle: '.modal-header'});
                this.draggable = true;
            }
            this.$content = this.$el.find('.qfe-elements-list');

            if (this.sid == "bitHeader-2") {
                var w = iframeWin.jQuery("[bitdatamarker='bitHeader-2']").width();
                if (iframeWin.jQuery("body").width() > 768) {
                    this.$el.find("[name='bit-slider-maxwidth']").val(w);
                } else {
                    this.$el.find("[name='bit-slider-mobile-maxwidth']").val(w);
                }
            } else if (this.sid == "bitHeader-3") {
                var w = iframeWin.jQuery("[bitdatamarker='bitHeader-3']").width();
                this.$el.find("[name='bit-slider-maxwidth']").val(w);
            }
            this.$el.find('.vc-color-control').qfColorPicker();
            $thisel = this.$el;
            this.$el.find("[name='silder_border']").change(function () {
                if (jQuery(this).val() == "") {
                    $thisel.find(".slider_borders_div").hide();
                } else {
                    $thisel.find(".slider_borders_div").show();
                }
            })
            this.$el.find(".vc_tab").click(function () {
                $thisel.find(".tab_field").hide();
                $thisel.find(".vc_tab").removeClass("on");
                if (jQuery(this).hasClass("tab1")) {
                    $thisel.find(".tab_field.tab1").show();
                    $thisel.find(".vc_tab.tab1").addClass("on");
                } else if (jQuery(this).hasClass("tab2")) {
                    $thisel.find(".tab_field.tab2").show();
                    $thisel.find(".vc_tab.tab2").addClass("on");
                } else {
                    $thisel.find(".tab_field.tab3").show();
                    $thisel.find(".vc_tab.tab3").addClass("on");
                    $thisel.find("[name='silder_border']").change();
                }
            })


            $('.gallery_widget_attached_images_list', this.$view).unbind('click.removeImage').on('click.removeImage', 'a.icon-remove', function (e) {
                e.preventDefault();
                var $block = $(this).closest('.edit_form_line');
                $(this).parent().remove();
                var img_ids = [];
                $block.find('.added img').each(function () {
                    img_ids.push($(this).attr("rel"));
                });
                $block.find('.gallery_widget_attached_images_ids').val(img_ids.join(',')).trigger('change');
            });

            $thisel.find('.vc-color-control-special').qfColorPicker({
                change: function (event, ui) {
                    if (jQuery(this).hasClass("useSameColor")) {
                        var color = ui.color.toString();
                        $this = this;
                        var p = $thisel.find(".set_border_table");
                        if (p.find("[name='useSameSetting']").attr("checked") == "checked") {
                            p.find(".useSameColor").each(function () {
                                if ($this != this) {
                                    jQuery(this).val(color).change();
                                }
                            })
                        }
                    }
                },
                clear: function (event) {
                    var p = jQuery(this).parent().find(".useSameColor");
                    if (p.length == 1) {
                        var pdiv = $thisel.find(".set_border_table");
                        if (pdiv.find("[name='useSameSetting']").attr("checked") == "checked") {
                            pdiv.find(".set_border_table .qf-color-result").attr("style", "");
                            pdiv.find(".set_border_table .useSameColor ").val("");
                        }
                    }
                },
            });
            $thisel.find(".useSameSetting,.useSameSettingchange").change(function () {
                changeBorderSetting($thisel.find(".set_border_table"), jQuery(this));
            });
            this.$el.find(".modal-dialog").width("600");
            return vc.AddElementBlockView.__super__.render.call(this);
        },
        closeWidget: function () {
            this.$el.modal('hide');
        },

    });


    /**
     * Panel prototype
     */
    vc.PanelView = Backbone.View.extend({
        draggable: false,
        events: {
            'click [data-dismiss=panel]': 'hide',
            'mouseover [data-transparent=panel]': 'addOpacity',
            'mouseout [data-transparent=panel]': 'removeOpacity',
        },
        initialize: function () {
            _.bindAll(this, 'setSize');
        },
        changetype: function () {

            var $this = this;
            if (!$this.model) return;
            if ($this.model.get("shortcode") != "vc_row") {
                return;
            }
            if ($this.model.view.$el.find("vc-vc_row_embad").length > 0) {
                top.jAlert("区块里面包含了复杂的组件，无法复制成自由区块！");
                return;
            }
            if (iframeWin.jQuery("body").width() < 992) {
                top.jAlert("目前只支持PC下操作！");
                return;
            }
            var params = $this.model.get('params');
            if (params.special == "1") {
                return;
            }
            jConfirm("请确认你的操作，复制出来的自由区块专栏设置会丢失，还需要在手机端重新调整位置。", function () {
                var new_model;
                new_model = vc.CloneModel($this.model, false);
                params = new_model.get('params');
                vc.ShortcodesBuilder.render(function () {
                    var $all = [];
                    var row_left = 0;
                    var row_top = 0;
                    var t = new_model.view.$el.find(">section>.container");
                    var paddingleft = t.find(">.qfe_row").css("padding-left").replace("px", "");
                    if (paddingleft > 0) {
                        row_left = t.offset().left * 1 + paddingleft * 1;
                    } else {
                        row_left = t.offset().left;
                    }
                    row_top = t.offset().top;
                    params.rowmaxwidth = t.outerWidth();
                    params.minheight = t.outerHeight();
                    params.mobile_minheight = "600";
                    params.special = "1"
                    new_model.save({params: params}, {silent: true});
                    var vc_columns = vc.shortcodes.where({parent_id: new_model.get('id')});

                    $.each(vc_columns, function ($i, column) {
                        var p = column.get('params');
                        var newp = {};
                        newp.width = p.width;
                        newp.align = "Default";
                        column.save({params: newp}, {silent: true});
                        var elements = vc.shortcodes.where({parent_id: column.get('id')});
                        var column_id = column.get('id');
                        $.each(elements, function ($j, element) {
                            if (element.get("shortcode") == "vc_row_inner") {
                                var inner_columns = vc.shortcodes.where({parent_id: element.get('id')});
                                $.each(inner_columns, function ($i, inner_column) {
                                    var inner_elements = vc.shortcodes.where({parent_id: inner_column.get('id')});
                                    $.each(inner_elements, function ($i, inner_element) {
                                        var elemenobj = inner_element.view.$el.find(".qfy-element");
                                        params = inner_element.get('params');
                                        var defaultparam = get_default_whlr(0, inner_element.get("shortcode"));
                                        params._left = elemenobj.offset().left - row_left;
                                        params._top = elemenobj.offset().top - row_top;
                                        params._width = elemenobj.outerWidth();
                                        params._height = elemenobj.outerHeight();
                                        params.__left = 0;
                                        params.__top = $i * 60;
                                        params.__width = defaultparam.__width;
                                        params.__height = defaultparam.__height;
                                        inner_element.save({parent_id: column_id, params: params}, {silent: true});
                                    })
                                })
                                element.destroy();
                            } else {
                                var elemenobj = element.view.$el.find(".qfy-element");
                                params = element.get('params');
                                var defaultparam = get_default_whlr(0, element.get("shortcode"));
                                params._left = elemenobj.offset().left - row_left;
                                params._top = elemenobj.offset().top - row_top;
                                params._width = elemenobj.outerWidth();
                                params._height = elemenobj.outerHeight();
                                params.__left = 0;
                                params.__top = $i * 60;
                                params.__width = defaultparam.__width;
                                params.__height = defaultparam.__height;
                                element.save({params: params}, {silent: true});
                            }
                        })
                    });

                    top.jQuery("#vc-preloader").show();
                    new_model.view.convertRowColumns("11");
                    vc.ShortcodesBuilder.save(true, function () {
                        location.reload();
                    });

                });


            });

        },
        bit_video_helper: function (shortcode) {
            if (this.model) {
                var shortcode = this.model.get('shortcode');
            } else {
                var shortcode = this.$el.find(".bithelper").attr("data-type");
            }
            if (this.$el.attr("id") == "vc-row-layout-panel") {
                shortcode = "vc_row_layout";
            }
            if (!shortcode) {
                return;
            }
            var searchname = "";
            if (shortcode == "vc_row") {
                var media_id = "a08fd2d9640e4227a4bfd0a6997cd134";
                searchname = "区块";
            } else if (shortcode == "vc_row_layout") {
                var media_id = "512416bb59d04a3cb98c4b474c08182d";
                searchname = "分栏";
            } else if (shortcode == "vc_header") {
                var media_id = "4eaeeb3224364aa2a7ab11234fd2caa8";
                searchname = "标题";
            } else if (shortcode == "vc_column_text") {
                var media_id = "96f463b6f1944488887e638825d45bd2";
                searchname = "文本";
            } else if (shortcode == "vc_btn") {
                var media_id = "ea58bf2a6d9342499a7afa023fd01036";
                searchname = "按钮";
            } else if (shortcode == "vc_bit_qqmaps") {
                var media_id = "ecaaf5b4cd2d4efdb472a3421a72d059";
                searchname = "地图";
            } else if (shortcode == "vc_socail_icons_list") {
                var media_id = "495f3325e45743cd8da746e9e4c5eeb2";
                searchname = "社交";
            } else if (shortcode == "vc_single_image") {
                var media_id = "fd93f26981424e7d9784ea2af68d6213";
                searchname = "图片";
            } else if (shortcode == "vc_bit_raw_video") {
                var media_id = "ceca993222bb40ccaa5a27c5b40bf727";
                searchname = "远程视频";
            } else if (shortcode == "Bit_HTML5_Video") {
                var media_id = "40044c45dd5b4607b22227d1a0eb6557";
                searchname = "本地视频";
            } else if (shortcode == "vc_images_carousel") {
                var media_id = "64f86593b2394dacbdf00e918923b55c";
                searchname = "图库";
            } else if (shortcode == "vc_icon") {
                var media_id = "e8f14825d0a64f638ccf8c966f600f0b";
                searchname = "图标";
            } else if (shortcode == "qfy_yun_video") {
                var media_id = "124dc984025f405bbb28ac92029d6d72";
                searchname = "云视频";
            } else if (shortcode == "iphorm_vc") {
                var media_id = "acb9b43e9a40464ca81aa13d3fb825e4";
                searchname = "表单";
            } else if (shortcode == "vc_column") {
                var media_id = "8d6c041fb0e64b978ad619adcdf3acea";
                searchname = "专栏";
            } else if (shortcode == "vc_column_search") {
                var media_id = "2e760f3f51b14abab6014ac6a60909e8";
                searchname = "搜索";
            } else {
                searchname = vc.getMapped(shortcode).name;
                if (searchname.indexOf(" ") > -1) {
                    searchname = searchname.split(" ")[0];
                }
            }
            if (media_id) {
                var urlparam = '&autoplay=1&play_height=510&height=510&width=910&KeepThis=true&TB_iframe=true';
                var url = 'http://www.qifeiye.com/api/video-server/play.php?se=0&media_id=' + media_id + '&callback=区块' + urlparam;
                top.jQuery("#TB_title").remove();
                top.tb_show("-", url);
            } else {
                window.open("http://www.qifeiye.com/%E6%90%9C%E7%B4%A2%E7%BB%93%E6%9E%9C%E9%A1%B5%E9%9D%A2/?searchtype=post&search=" + searchname);
            }
        },
        addOpacity: function () {
            this.$el.addClass('vc-panel-opacity');
        },
        removeOpacity: function () {
            this.$el.removeClass('vc-panel-opacity');
        },
        message_box_timeout: false,
        init: function () {
        },
        show: function () {
            vc.closeActivePanel();
            this.init();
            vc.active_panel = this;
            $(window).bind('resize.vcPropertyPanel', this.setSize);
            this.setSize();
            this.$el.show();
            if (!this.draggable) {
                this.$el.draggable({iframeFix: true, handle: '.panel-heading'});
                this.draggable = true;
            }
        },
        hide: function (e) {
            e && e.preventDefault();
            $(window).unbind('resize.vcPropertyPanel');
            vc.active_panel = false;
            this.$el.hide();
        },
        content: function () {
            return this.$el.find('.panel-body');
        },
        setSize: function () {
            var height = $(window).height() - 200;
            this.content().css('maxHeight', height);
        },
        showMessage: function (text, type) {
            this.message_box_timeout && this.$el.find('.vc-panel-message').remove() && window.clearTimeout(this.message_box_timeout);
            this.message_box_timeout = false;
            var $message_box = $('<div class="vc-panel-message type-' + type + '"></div>').appendTo(this.$el.find('.panel-body'));
            $message_box.text(text).fadeIn();
            this.message_box_timeout = window.setTimeout(function () {
                $message_box.remove();
            }, 6000);
        },
        minimizeBody: function (e) {
            e && e.preventDefault && e.preventDefault();
            this.$el.find('.panel-body,.panel-footer').slideToggle();
        },
        isVisible: function () {
            return this.$el.is(':visible');
        }
    });

    /**
     * Shortcode settings panel
     * ******************************************************************************************************
     */

    /**
     * Shortcode settings panel
     * @type {*}
     */
    vc.EditMenuPanelView = vc.PanelView.extend({
        el: $('#vc-menu-panel'),
        $content: false,
        draggable: false,
        $max_height: 0,
        events: {
            'click [data-dismiss=panel]': 'hide',
            'click [data-save=true]': 'save',
            'mouseover [data-transparent=panel]': 'addOpacity',
            'mouseout [data-transparent=panel]': 'removeOpacity'
        },
        initialize: function () {
            _.bindAll(this, 'setSize');
        },
        setSize: function () {
            var height = $(window).height() - 150;
            if (this.$max_height > 0) {
                if (height > this.$max_height) {
                    height = this.$max_height;
                }
            }

            if (this.$content) {
                this.$content.css('height', height).css("min-height", height);
                this.$content.find(".waitingToPanel").css('margin-top', height / 2 - 20);
                if (this.$content.find("table.welcomeToAdd").length > 0) {
                    var h = this.$content.height() - 348;
                    if (h > 0) {
                        this.$content.find("table.welcomeToAdd").css('margin-top', h / 2);
                    }
                }
            }

        },
        render: function () {
            this.$content = this.$el.find('.vc-properties-list');
            this.show();
            this.$content.scrollTop(0);

            return this;
        },
        setTitle: function (title) {
            this.$el.find('.panel-title').text(title);
            this.$max_height = false;
            return this;
        },
        show: function () {
            if (this.$el.is(':hidden')) vc.closeActivePanel();
            vc.active_panel = this;
            $(window).bind('resize.vcPropertyPanel', this.setSize);
            this.setSize();
            this.$el.show();
            if (!this.draggable) {
                this.$el.draggable({iframeFix: true, handle: '.panel-heading'});
                this.draggable = true;
            }
        },
        save: function (e) {

            if( this.$el.find('.welcomeToAdd').length>0){
                addOnePage();
            }else{
                var val = this.$el.find('[name="newPageType"]:checked').val();
                if (val == 0) {
                    addOnePage();
                } else {
                    addOneUrl();
                }

            }

        },
        hide: function (e) {
            e && e.preventDefault();
            vc.active_panel = false;
            $(window).unbind('resize.vcPropertyPanel');
            this._killEditor();
            this.$el.hide().css("left", 0).css("top", 0);
            if (this.$content) this.$content.html('');
        },
        _killEditor: function () {
            if (!_.isUndefined(window.tinyMCE)) {
                $('textarea.textarea_html', this.$el).each(function () {
                    var id = $(this).attr('id');
                    window.tinyMCE.execCommand("mceRemoveControl", true, id);
                });
            }
        }
    });

    vc.SetMenuFontPanelView = vc.PanelView.extend({
        el: $('#vc-set-menu-font-panel'),
        $content: false,
        draggable: false,
        events: {
            'click [data-dismiss=panel]': 'hide',
            'mouseover [data-transparent=panel]': 'addOpacity',
            'mouseout [data-transparent=panel]': 'removeOpacity'
        },
        initialize: function () {
            _.bindAll(this, 'setSize');
        },
        setSize: function () {
            //var height = $(window).height() - 190;
            this.$el.css('margin', '0 auto').css('height', 'auto').css('width', '600px');
        },
        render: function () {
            this.$el.addClass("animated_new");
            this.$content = this.$el.find('.vc-properties-list');
            this.show();
            this.$content.scrollTop(0);
            this.$el.find('.panel-footer').show();
            return this;
        },
        setTitle: function (title) {
            this.$el.find('.panel-title').text(title);
            return this;
        },
        show: function () {
            if (this.$el.is(':hidden')) vc.closeActivePanel();
            vc.active_panel = this;
            $(window).bind('resize.vcPropertyPanel', this.setSize);
            this.setSize();
            this.$el.show();
            if (!this.draggable) {
                this.$el.draggable({iframeFix: true, handle: '.panel-heading'});
                this.draggable = true;
            }
        },
        hide: function (e) {
            e && e.preventDefault();
            vc.active_panel = false;
            $(window).unbind('resize.vcPropertyPanel');
            this._killEditor();
            this.$el.hide().css("left", 0).css("top", 0);
            this.$el.find('#font-family').val('');
            this.$el.find('#font-weight').prop('checked', false);
            this.$el.find('#font-size').val('');
            this.$el.find('#fontDemo').removeAttr('style');
        },
        _killEditor: function () {
            if (!_.isUndefined(window.tinyMCE)) {
                $('textarea.textarea_html', this.$el).each(function () {
                    var id = $(this).attr('id');
                    window.tinyMCE.execCommand("mceRemoveControl", true, id);
                });
            }
        }
    });


    vc.addPopBlockView = vc.PanelView.extend({
        el: $('#vc-pop-dialog'),
        $content: false,
        draggable: false,
        events: {
            'click .vc-close': 'hide',
            'click [data-dismiss=modal]': 'hide',
            'click .btn.btn-primary': 'save',
            'change #footer_wiget_num': 'changefooterwidget',

        },
        initialize: function () {
            _.bindAll(this, 'setSize');
        },
        setSize: function () {
            var height = $(window).height() - 190;
            this.$el.css('margin', '0 auto').css('height', 'auto').css('width', '600px');
            this.$el.find(".modal-dialog").css('width', '600px');
            this.$el.find(".modal-body").css('max-height', height + "px");
        },
        render: function (flag) {
            if (flag == "prepend") {
                this.$el.find('.element_div').hide();
                this.$content = this.$el.find('.prepend_div');
                this.$content.show();
            }

            this.show();
            this.$content.scrollTop(0);
            this.$el.find('.panel-footer').show();
            return this;
        },
        setTitle: function (title) {
            this.$el.find('.panel-title').text(title);
            return this;
        },
        changefooterwidget: function () {
            var v = this.$el.find("#footer_wiget_num").val();
            if (v == 1) {
                this.$el.find(".prepend_div_1").show();
                this.$el.find(".prepend_div_2").hide();
                this.$el.find(".prepend_div_3").hide();
            } else if (v == 2) {
                this.$el.find(".prepend_div_1").show();
                this.$el.find(".prepend_div_2").show();
                this.$el.find(".prepend_div_3").hide();
            } else if (v == 3) {
                this.$el.find(".prepend_div_1").show();
                this.$el.find(".prepend_div_2").show();
                this.$el.find(".prepend_div_3").show();
            }

        },
        save: function () {

            var footer_wiget_num = this.$el.find("#footer_wiget_num").val();
            var defaultBottomlayout = this.$el.find("#defaultBottomlayout").val();
            var defaultBottomlayout2 = this.$el.find("#defaultBottomlayout2").val();
            var defaultBottomlayout3 = this.$el.find("#defaultBottomlayout3").val();
            ajaxBeforeSave($j("#vc-pop-dialog"));


            var pageid = top.jQuery("#pageUrl").val();
            $.post("/FeiEditor/siteEdit/ajax_updateFooter", {
                qfy_pageid: pageid,
                footerlayout: footer_wiget_num,
                defaultBottomlayout: defaultBottomlayout,
                defaultBottomlayout2: defaultBottomlayout2,
                defaultBottomlayout3: defaultBottomlayout3
            }, function (msg) {
                if (msg.indexOf("|<result>|") > -1) {
                    reloadFooterEvents(msg, "footer");
                    ajaxAfterSave();
                } else {
                    location.reload();
                }

            });
        },
        show: function () {
            if (this.$el.is(':hidden')) vc.closeActivePanel();
            vc.active_panel = this;
            $(window).bind('resize.vcPropertyPanel', this.setSize);
            this.setSize();
            this.$el.show();
            if (!this.draggable) {
                this.$el.draggable({iframeFix: true, handle: '.modal-header'});
                this.draggable = true;
            }
        },
        hide: function (e) {
            e && e.preventDefault();
            vc.active_panel = false;
            this.$el.hide();
            $(window).unbind('resize.vcPropertyPanel');
        },
    });

    /**
     * Shortcode settings panel
     * @type {*}
     */
    vc.EditBitSettingsPanelView = vc.PanelView.extend({
        el: $('#vc-bit_settings-panel'),
        $content: false,
        shortcodename: false,
        draggable: false,
        action: false,
        post_id: false,
        model: false,
        orgobj: false,
        events: {
            'click [data-dismiss=panel]': 'hide',
            'click [data-save=true]': 'save',
            'click .btn_onylsave': 'onlysave',
            'click .btn-img-upload': 'file_upload',
            'click .btn-img-clear': 'file_upload_clear',
            'click [name=sc_chat_on_off]': 'change_sc_chat_on_off',
            'click .livechat-isotope-filter li a': 'filterElements',
            'click [name=pop_logo_img]': 'update_pop',
            'keyup [name=pop_title]': 'update_pop',
            'keyup [name=pop_msg]': 'update_pop',
            'keyup [name=siteurl]': 'validate_siteurl',
            'click [trigger_for]': 'trigger_for',
            'blur [name=mail_from]': 'mail_regular_settings',
            'click .bit_test_smtp_email': 'bit_test_smtp_email',
            'click .bit_test_smtp_email2': 'bit_test_smtp_email2',
            'click .bit_smtp_email_set': 'bit_smtp_email_set',
        },
        initialize: function () {
            _.bindAll(this, 'setSize');
        },
        setSize: function () {
            var height = $(window).height() - 190;
            if (this.action == "saveCustom" || this.action == "createPostList" || this.action == "updatePostList" || this.action == "postlistlayout") {
                this.$content.css('max-height', height);
            } else if (this.action == "saveadvertising") {
                this.$content.css('height', "200px").css('min-height', "200px");
            } else if (this.action == "viewtemplate") {
                this.$content.css('height', "300px").css('min-height', "300px");
            } else if (this.action == "savePost") {
                this.$content.css('min-height', "200px");
            } else {
                this.$content.css('height', height);
            }
            this.$content.css('overflowY', 'auto');
            this.$content.css('overflowX', 'hidden');
        },
        render: function (action, post_id, model, orgobj) {
            this.$el.addClass("animated_new");
            this.$el.find('.btn-primary').show();
            this.post_id = post_id;
            this.model = model;
            this.$el.find(".bithelper").hide();
            this.orgobj = orgobj;
            if (action == "savePost" || action == "createPostList" || action == "saveCustom" || action == "updatePostList" || action == "custombutton" || action == "topostListToOpen") {
                this.$el.width("600");
            } else if (action == "saveadvertising") {
                this.$el.width("600");
                this.$el.find('.btn-primary').hide();
            } else if (action == "viewtemplate") {
                this.$el.width("940");
            } else if (action == "product" || this.action == "postlistlayout") {
                this.$el.width("940");
            } else {
                this.$el.width("940");
            }
            this.$el.css("position", "relative");
            this.$content = this.$el.find('.vc-properties-list');
            if (action == "custombutton" || action == "createPostList") {
                this.$el.find(".btn-primary").html("保存");
            } else if (action == "viewtemplate") {
                this.$el.find(".btn-primary").html("创建");
            } else {
                this.$el.find(".btn-primary").html("保存并关闭");
            }
            this.action = action;
            this.show();
            this.$content.scrollTop(0);
            return this;
        },
        show: function () {
            if (this.$el.is(':hidden')) vc.closeActivePanel();
            vc.active_panel = this;
            $(window).bind('resize.vcPropertyPanel', this.setSize);
            this.setSize();
            this.$el.show();
            if (!this.draggable) {
                this.$el.draggable({iframeFix: false, handle: '.panel-heading'});
                this.draggable = true;
            }

        },
        gettabcontentParams: function () {
            var attributes_settings = vc.map.tabcontent.params;

            var params = _.extend({}, this.model.get('params'));

            _.each(attributes_settings, function (param) {
                var value = vc.atts.parseFrame.call(this, param);
                if (_.isNull(value) || value === '') {
                    delete params[param.pn];
                } else {
                    params[param.pn] = value;
                }
            }, this);
            return params;
        },
        onylsave: function () {
            var params = this.gettabcontentParams();
            this.model.save({
                params: params
            });
            vc.ShortcodesBuilder.update(this.model);
            updatePage(this.model, null);

        },
        save: function (e) {
            e.stopPropagation();
            e.preventDefault();
            if (this.action == "COPY") {
                bitCopyPage();
            } else if (this.action == "createPostList" || this.action == "saveadvertising") {
            } else if (this.action == "viewtemplate") {
                var category = this.$el.find("#category").val();
                var demo = this.$el.find("#defaultdemo").val();
                ajaxBeforeSave($j("#vc-bit_settings-panel .panel-body"));
                $.post("/FeiEditor/siteEdit/ajax_simplesavepage", {"category": category, "demo": demo}, function (id) {
                    top.page_html_reload();
                    if (top.$('#pageUrl').length > 0) {
                        top.$('#pageUrl').val(id).change();
                    } else {
                        top.reloadPage();
                    }
                });
            } else if (this.action == "custombutton") {
                var params = this.gettabcontentParams();
                this.model.save({
                    params: params
                });
                vc.ShortcodesBuilder.update(this.model);
                updatePage(this.model, null);
                //this.hide(e);
            } else if (this.action == "product") {
                var iframeobj = this.$el.find("iframe")[0].contentWindow;
                var iform = iframeobj.jQuery("form#post");
                if (iform.find("[name='post_title']").length > 0) {
                    var menuTitle = iform.find("[name='post_title']").val();
                    if (menuTitle == "") {
                        jAlert("标题不能为空");
                        return;
                    } else if (menuTitle.toLowerCase() == "products") {
                        jAlert("标题" + menuTitle + "为保留字符，请重新填写");
                        return;
                    }
                }
                if (iform.find("[name='post_status']").length == 0) {
                    iform.append("<input type='hidden' value='publish' name='post_status' />");
                }
                if (iform.find("[name='isqfyajax']").length == 0) {
                    iform.append("<input type='hidden' value='1' name='isqfyajax' />");
                }
                var title = iform.find("[name='post_title']").val();
                iframeobj.setCktoContentdata();

                ajaxBeforeSave($j("#vc-bit_settings-panel .panel-body"));
                iform.ajaxSubmit(function (data) {
                    if (!isNaN(data)) {
                        top.page_html_reload();
                        top.$('#pageUrl').val(data).change();
                    } else {
                        top.location.reload();
                    }
                });
            } else if (this.action == "saveCustom") {
                this.$el.find("form").ajaxSubmit(function (data) {
                    location.reload();
                });
            } else if (this.action == "postlistlayout") {
                var params = this.model.get('params');
                var id = this.model.get("id");
                params.post_style_category = this.$el.find("[name=postListStyle]:checked").val();
                if (params.post_style_category == "post_grid") {
                    params.grid_columns_count = 3;
                } else if (params.post_style_category == "post_image") {
                    params.grid_columns_count = 2;
                } else {
                    params.grid_columns_count = 1;
                }
                var p = iframeWin.jQuery("[data-model-id='" + id + "']").closest(".column_inner").parent();
                ajaxBeforeLoading(0, p);
                this.model.save({
                    params: params
                });
                vc.ShortcodesBuilder.update(this.model);
                updatePage(this.model, null);
                this.hide(e);
            } else if (this.action == "savePost") {

                saveEditorPost(this.$el, this.post_id, this.model, this.orgobj);
            } else if (this.action == "updatePostList") {
                var params = this.model.get('params');
                var id = this.model.get("id");
                params.post_type = this.$el.find("[name=post_type]").val();
                params.post_categories = this.$el.find("[name=post_categories]").val();
                params.pro_categories = this.$el.find("[name=pro_categories]").val();
                params.product_categories = this.$el.find("[name=product_categories]").val();
                params.size = this.$el.find("[name=size]").val();
                var p = iframeWin.jQuery("[data-model-id='" + id + "']").closest(".column_inner").parent();
                ajaxBeforeLoading(0, p);
                this.model.save({
                    params: params
                });
                vc.ShortcodesBuilder.update(this.model);
                updatePage(this.model, null);
                this.hide(e);
            } else {
                bitSettingsSave();
            }
            return false;
        },
        file_upload: function (e) {
            var target = $(e.currentTarget);

            var frame = openNewImageDialog('选择图标', function (img, id) {
                $(target).parent().find('img').attr('src', img);
                $(target).parent().find('.bit_web_icon_input').val(img);
                $(target).parent().find('#thumbnailId').val(id);
            }, false)
            frame.$el.find('.media-frame-router .media-router .media-menu-item:first').click();
        },
        file_upload_clear: function (e) {
            var target = $(e.currentTarget);
            var favicon_none = '/bitSite/images/favicon_none.png';
            $(target).parent().find('img').attr('src', favicon_none);
            $(target).parent().find('.bit_web_icon_input').val('');
        },
        update_pop: function (e) {
            var target = $(e.currentTarget);
            var name = $(target).attr('name');
            var value = $(target).val();
            if (name == 'pop_logo_img') {
                var base_src = this.$el.find('.sc_chat_opts_' + name).attr('base_src');
                this.$el.find('.sc_chat_opts_' + name).attr('src', base_src + '/' + value + '.png');
            } else {
                this.$el.find('.sc_chat_opts_' + name).html(value)
            }
        },
        validate_siteurl: function (e) {
            //ajaxValidateSiteurl();
        },
        change_sc_chat_on_off: function (e) {
            var target = $(e.currentTarget);
            var input_status = !$(target).is(':checked');
            if (input_status) {
                this.$el.find(".chatform > .chatformdiv").hide();
            } else {
                this.$el.find(".chatform > .chatformdiv").show();
            }
            this.$el.find('input').prop('disabled', input_status);
            this.$el.find('select').prop('disabled', input_status);
            this.$el.find('textarea').prop('disabled', input_status);
            $(target).prop('disabled', false);
        },
        filterElements: function (e) {
            var $list = this.$el.find('.livechat-isotope-filter'),
                $control = $(e.currentTarget);
            if ($control.is('[data-filter]')) {
                $('.active', $list).removeClass('active');
                $control.parent().addClass('active');
                this.$el.find('.livechat-content').hide();
                this.$el.find('.' + $control.attr('data-filter')).show();
            }
        },
        trigger_for: function (e) {
            $(e.currentTarget).prev().trigger("click");
        },
        mail_regular_settings: function (e) {
            var email = $(e.currentTarget).val();
            var strs = email.split("@");
            var name = strs[0];
            var suffix = strs[1];
            var set_types = new Array();
            var current_type = null;
            set_types["qq"] = {smtp_host: "smtp.qq.com", smtp_port: "465", smtp_ssl: "ssl", smtp_auth: true};
            set_types["163"] = {smtp_host: "smtp.163.com", smtp_port: "465", smtp_ssl: "ssl", smtp_auth: true};
            set_types["gmail"] = {smtp_host: "smtp.gmail.com", smtp_port: "587", smtp_ssl: "tls", smtp_auth: true};
            if (suffix.toLowerCase().indexOf("qq.com") >= 0) {
                current_type = set_types["qq"];
            } else if (suffix.toLowerCase().indexOf("163.com") >= 0) {
                current_type = set_types["163"];
            } else if (suffix.toLowerCase().indexOf("gmail.com") >= 0) {
                current_type = set_types["gmail"];
            }
            if (current_type) {
                this.$el.find('[name=smtp_user]').val(email);
                this.$el.find('[name=mail_from_name]').val(name);
                this.$el.find('[name=smtp_host]').val(current_type.smtp_host);
                this.$el.find('[name=smtp_port]').val(current_type.smtp_port);
                this.$el.find('[name=smtp_ssl]').val(current_type.smtp_ssl);
                this.$el.find('[name=smtp_auth]').attr('checked', current_type.smtp_auth);
            }
        },
        bit_test_smtp_email: function (e) {
            var name = $(e.currentTarget).attr('send_for');
            var to_email = this.$el.find('[name=' + name + ']').val();
            bitSettingsSave('no', 'yes');
        },
        bit_test_smtp_email2: function (e) {
            var name = $(e.currentTarget).attr('send_for');
            var to_email = this.$el.find('[name=' + name + ']').val();
            TestSmtpEmail(to_email);
        },
        bit_smtp_email_set: function (e) {
            var current_pid = top.$('#pageUrl').val();
            bitSettingsEdit(current_pid, '网站设置', 'website', null, 'show');
        },
        hide: function (e) {
            e && e.preventDefault();
            vc.active_panel = false;
            $(window).unbind('resize.vcPropertyPanel');
            this._killEditor();

            this.$el.css("top", 0).css("left", 0).hide();
            if (this.$content) {
                this.$content.html('');
            }
        },
        _killEditor: function () {
            if (!_.isUndefined(window.tinyMCE)) {
                $('textarea.textarea_html', this.$el).each(function () {
                    var id = $(this).attr('id');
                    window.tinyMCE.execCommand("mceRemoveControl", true, id);
                });
            }
        }
    });

    vc.EditBitStylePanelView = vc.PanelView.extend({
        el: $('#vc-bit_style-panel'),
        $content: false,
        draggable: false,
        isSaved: false,
        action: false,
        events: {
            'click [data-dismiss=panel]': 'hide',
            'click [data-save=true]': 'save',

        },
        initialize: function () {

        },

        render: function (action) {
            this.$content = this.$el.find('.vc-properties-list');
            this.action = action;
            this.isSaved = false;
            this.show();
            this.$content.scrollTop(0);
            return this;
        },
        show: function () {
            if (this.$el.is(':hidden')) vc.closeActivePanel();
            vc.active_panel = this;
            $(window).bind('resize.vcPropertyPanel', this.setSize);
            this.setSize();
            this.$el.show();
            if (!this.draggable) {
                this.$el.draggable({iframeFix: false, handle: '.panel-heading'});
                this.draggable = true;
            }
        },
        save: function (e) {
            var iv = this.$el.find("iframe")[0].contentWindow;
            ajaxBeforeSave($j("#vc-bit_style-panel"));
            iv.jQuery("#optionsframework form").ajaxSubmit({
                dataType: "text",
                success: function (data) {

                    parent.parent.location.reload();

                }
            });
            this.isSaved = true;
        },
        setSize: function () {
            var height = $(window).height() - 190;
            if (this.$content) {
                this.$content.css('height', height);
            }
        },
        hide: function (e) {
            e && e.preventDefault();
            vc.active_panel = false;
            if (this.isSaved) {
                //parent.parent.location.reload();
            }
            $(window).unbind('resize.vcPropertyPanel');
            this._killEditor();
            this.$el.hide();
            this.$content.html('');
        },
        _killEditor: function () {
            if (!_.isUndefined(window.tinyMCE)) {
                $('textarea.textarea_html', this.$el).each(function () {
                    var id = $(this).attr('id');
                    window.tinyMCE.execCommand("mceRemoveControl", true, id);
                });
            }
        }
    });

    vc.EditSliderPanelView = vc.PanelView.extend({
        el: $('#vc-slider-panel'),
        $content: false,
        draggable: false,
        events: {
            'click [data-dismiss=panel]': 'hide'
        },
        initialize: function () {
            _.bindAll(this, 'setSize');
        },
        setSize: function () {
            var height = $(window).height() - 190;
            this.$content.css('maxHeight', height);

        },
        render: function () {
            this.$content = this.$el.find('.vc-properties-list');
            this.show();
            this.$content.scrollTop(0);

            return this;
        },
        show: function () {
            if (this.$el.is(':hidden')) vc.closeActivePanel();
            vc.active_panel = this;
            $(window).bind('resize.vcPropertyPanel', this.setSize);
            this.setSize();
            this.$el.show();
            if (!this.draggable) {
                this.$el.draggable({iframeFix: true, handle: '.panel-heading'});
                this.draggable = true;
            }
        },
        save: function (e) {
            this.$el.find('.button-controls:visible .submit-add-to-menu').click();

        },
        hide: function (e) {
            e && e.preventDefault();
            vc.active_panel = false;
            $(window).unbind('resize.vcPropertyPanel');
            this._killEditor();
            this.$el.hide();
            this.$content.html('');
        },
        _killEditor: function () {
            if (!_.isUndefined(window.tinyMCE)) {
                $('textarea.textarea_html', this.$el).each(function () {
                    var id = $(this).attr('id');
                    window.tinyMCE.execCommand("mceRemoveControl", true, id);
                });
            }
        }
    });

    vc.EditWidgetBlockView = vc.PanelView.extend({
        el: $('#vc-edit-widget-dialog'),
        $content: false,
        draggable: false,
        events: {
            'click [data-dismiss=panel]': 'hide',
            'click .btn-img-upload': 'file_upload',
            'click .linkalign': 'changeXYZ',
            'click .btn-img-clear': 'file_upload_clear',
            'change .imagetype': 'imagetype_change',
            'change .changeposition': 'changeposition_change',
            'change .change_background_type': 'change_background_type'
        },
        initialize: function () {
            _.bindAll(this, 'setSize');
        },
        changeXYZ: function (e) {
            var id = 0;
            if (e) {
                this.$el.find(".selected").removeClass("selected");
                $(e.currentTarget).addClass("selected");
                id = $(e.currentTarget).attr("id");
                var tmp = id.replace("linkalign_", "");
                var tmparr = tmp.split("_");
                var h = tmparr[0];
                var v = tmparr[1];
                var p = $(e.currentTarget).closest(".edit_form_line");
                p.find("input").val(h + " " + v);
            }
        },
        setSize: function () {
            var height = $(window).height() - 190;
            this.$content.css('maxHeight', height);
            var iphorm = this.$el.find('#iphorm_iframe');
            if (iphorm.length == 0) {
                this.$el.css('width', '600px');
                this.$content.css('width', 'auto');
            } else {
                //....
                this.$el.css('width', '880px');
                this.$content.css('width', '850px');
            }

        },
        render: function () {
            this.$el.addClass("animated_new");
            this.$content = this.$el.find('.vc-properties-list');
            this.show();
            this.$content.scrollTop(0);
            this.$content.find('.bit-color-control.new').qfColorPicker();
            this.imagetype_change();
            this.changeposition_change();
            this.change_background_type();
            return this;
        },
        changeposition_change: function () {
            if (this.$content.find(".changeposition").val() == "1") {
                this.$content.find("div.position_custom").hide();
                this.$content.find("div.position_vertical").show();
            } else {
                this.$content.find("div.position_custom").show();
                this.$content.find("div.position_vertical").hide();
            }

        },
        imagetype_change: function () {
            if (this.$content.find(".imagetype").val() == "1") {
                this.$content.find(".img_background").show();
            } else {
                this.$content.find(".img_background").hide();
            }
        },
        change_background_type: function () {
            if (this.$content.find(".change_background_type").val() == "1") {
                this.$content.find(".change_background_type_div").show();
            } else {
                this.$content.find(".change_background_type_div").hide();
            }
        },
        show: function () {
            if (this.$el.is(':hidden')) vc.closeActivePanel();
            vc.active_panel = this;
            $(window).bind('resize.vcPropertyPanel', this.setSize);
            this.setSize();
            this.$el.show();
            if (!this.draggable) {
                this.$el.draggable({iframeFix: true, handle: '.panel-heading'});
                this.draggable = true;
            }
        },
        file_upload: function (e) {
            var target = $(e.currentTarget);
            var media_title = $(target).attr('media_title');
            var media_id = $(target).attr('media_id');
            var $this = this;
            var frame = openNewImageDialog(media_title, function (img) {
                $(target).parent().find('#' + media_id).val(img);
                $(target).parent().find('#img_' + media_id).attr('src', img);
                if (img != "") {
                    $(target).parent().find(".btn-img-clear").show();
                    $this.$el.find('[data-save=true]').click();
                }
            }, false)
            frame.$el.find('.media-frame-router .media-router .media-menu-item:first').click();
        },
        file_upload_clear: function (e) {
            var target = $(e.currentTarget);
            var media_id = $(target).attr('media_id');
            $(target).parent().find('#' + media_id).val("");
            $(target).parent().find('#img_' + media_id).attr('src', "");
            $(target).parent().find(".btn-img-clear").hide();
        },
        hide: function (e) {
            e && e.preventDefault();
            vc.active_panel = false;
            $(window).unbind('resize.vcPropertyPanel');
            this._killEditor();
            this.$el.hide();
            this.$el.css("top", 0).css("left", 0);
            if (this.$content) this.$content.html('');
        },
        _killEditor: function () {
            if (!_.isUndefined(window.tinyMCE)) {
                $('textarea.textarea_html', this.$el).each(function () {
                    var id = $(this).attr('id');
                    window.tinyMCE.execCommand("mceRemoveControl", true, id);
                });
            }
        }
    });


    vc.EditRevisonBlockView = vc.PanelView.extend({
        el: $('#vc-edit-revision-dialog'),
        $content: false,
        draggable: false,
        events: {
            'click [data-dismiss=panel]': 'hide',
            'click [name=bitPageRevision]': 'save',
            'click [data-save=true]': 'save',
        },
        initialize: function () {
            _.bindAll(this, 'setSize');
        },
        setSize: function () {
            var height = $(window).height() - 190;
            this.$content.css('height', height);
            this.$content.parent().css('width', "480px").css("margin", "0 auto");
        },
        render: function () {
            //top.jQuery("#pagehtmlcontainer").animate({height:"0"});
            //top.jQuery("#pagehtmlshowtext > div").css("border-bottom","0");
            this.$content = this.$el.find('.vc-properties-list');
            this.$content.html('');
            this.show();
            this.$el.addClass("animated_new");
            getAllrevisions(this.$content);
            this.$content.scrollTop(0);
            this.$el.find('.panel-footer').show();
            return this;
        },
        save: function () {
            var id = this.$content.find("[name='bitPageRevision']:checked").val();
            if (!this.$content.find("[name='bitPageRevision']:checked").hasClass("lastest")) {
                var wp = $('#_qfnonce').val();
                ajaxBeforeSave($("#vc-edit-revison-dialog"));
                $.post("/admin/revision.php?revision=" + id + "&action=restore&_qfnonce=d8e86d25f5&actiontype=ajax", function (msg) {
                    top.changePageUrl();
                    top.inittoopenpage = "revison";
                });
            }
        },
        show: function () {
            if (this.$el.is(':hidden')) vc.closeActivePanel();
            vc.active_panel = this;
            $(window).bind('resize.vcPropertyPanel', this.setSize);
            this.setSize();
            this.$el.show();
            if (!this.draggable) {
                this.$el.draggable({iframeFix: true, handle: '.panel-heading'});
                this.draggable = true;
            }
        },
        hide: function (e) {
            e && e.preventDefault();
            vc.active_panel = false;
            $(window).unbind('resize.vcPropertyPanel');
            this._killEditor();
            this.$el.hide().css("left", 0).css("top", 0);
            //this.$content.html('');
        },
        _killEditor: function () {
            if (!_.isUndefined(window.tinyMCE)) {
                $('textarea.textarea_html', this.$el).each(function () {
                    var id = $(this).attr('id');
                    window.tinyMCE.execCommand("mceRemoveControl", true, id);
                });
            }
        }
    });


    vc.EditProductcolorBlockView = vc.PanelView.extend({
        el: $('#vc-edit-productcolor-dialog'),
        $content: false,
        draggable: false,
        events: {
            'click [data-dismiss=panel]': 'hide',
            'click [data-save=true]': 'save',
            'click [data-save=only]': 'saveonly',
        },
        initialize: function () {
            _.bindAll(this, 'setSize');
        },
        setSize: function () {
            var height = $(window).height() - 190;
            this.$content.css('max-height', height);
            this.$content.css('min-height', "50px");
            this.$content.css("padding-bottom", "100px");
            this.$content.parent().css('width', "650px").css("margin", "0 auto");
        },
        render: function (tag, classname) {
            var cbthis = this;
            jQuery.ajax({
                url: '/admin/panels.php?panel_type=shop_design',
                success: function (result) {
                    cbthis.$el.html(result);
                    cbthis.render_cb(tag, classname);
                },
                async: false
            });
        },
        render_cb: function (tag, classname) {

            var content = this.$content = this.$el.find('.vc-properties-list');
            this.$content.find('.vc_tab').click(function () {
                content.find('.vc_tab').removeClass("on");
                jQuery(this).addClass("on");
                var tab_id = jQuery(this).attr("data-tab");
                content.find('.vc_tab_div').hide();
                content.find('.vc_tab_div' + tab_id).show();
            })
            this.$content.find(".designtable").hide();
            this.show();
            if (classname) {
                this.$content.find(classname).show();
            }
            this.$content.find('.vc_tab_div >div>table:visible .bit-color-control').qfColorPicker();
            this.$content.find(".image_style_class:visible").each(function () {
                image_style_change(this);
            })
            var $thisel = content;
            content.find('.shop_table_border:visible .vc-color-control-special').qfColorPicker({
                change: function (event, ui) {
                    if (jQuery(this).hasClass("useSameColor")) {
                        var color = ui.color.toString();
                        $this = this;
                        var p = jQuery(this).closest(".set_border_table");
                        if (p.find("[name='useSameSetting']").attr("checked") == "checked") {
                            p.find(".useSameColor").each(function () {
                                if ($this != this) {
                                    jQuery(this).val(color).change();
                                }
                            })
                        }
                    }
                },
                clear: function (event) {
                    var p = jQuery(this).parent().find(".useSameColor");
                    if (p.length == 1) {
                        var pdiv = jQuery(this).closest(".set_border_table");
                        if (pdiv.find("[name='useSameSetting']").attr("checked") == "checked") {
                            pdiv.find(".set_border_table .qf-color-result").attr("style", "");
                            pdiv.find(".set_border_table .useSameColor ").val("");
                        }
                    }
                },
            });
            content.find(".shop_table_border:visible .useSameSetting,.shop_table_border:visible .useSameSettingchange").change(function () {
                changeBorderSetting(jQuery(this).closest(".set_border_table"), jQuery(this));
            });
            this.$content.scrollTop(0);
            this.$el.find('.panel-footer').show();
            return this;
        },
        saveonly: function (e) {
            var $savebtn = $(e.currentTarget);
            var $this = this;
            this.$el.find('.vc-panel-message').remove();
            var buttonHtml = $savebtn.text();
            $savebtn.addClass('btn_data_onsaving').prop('disabled', true).prop('btn_data_onsaving', true).html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
            var form = this.$el.find('#productStyle');
            if (form.find(".shop_table_border:visible").length > 0) {
                form.find("#shop_table_border1").val(getBorderSet(form.find(".shop_table_border1")));
                form.find("#shop_table_border2").val(getBorderSet(form.find(".shop_table_border2")));
                form.find("#shop_table_border3").val(getBorderSet(form.find(".shop_table_border3")));
                form.find("#shop_table_border4").val(getBorderSet(form.find(".shop_table_border4")));
                form.find("#shop_table_border5").val(getBorderSet(form.find(".shop_table_border5")));
            }


            this.$el.find('#productStyle').ajaxSubmit(function (data) {
                if (data == "success") {
                    if (jQuery(".list_single_image.designtable:visible").length > 0) {
                        location.reload();
                    }
                    var obj = iframeWin.jQuery("#bitcommerce-custom-css");
                    var href = obj.attr("href");
                    href = explode("&time", href);
                    href = href[0] + "&time=" + Math.random();
                    iframeWin.jQuery("head").append("<link rel='stylesheet' id='bitcommerce-custom-css'  href='" + href + "' type='text/css' media='all' />");
                    setTimeout(function () {
                        obj.remove();
                    }, 2000);
                    //更新几个文字
                    if ($this.$el.find(".shopping_cart_inner:visible").length > 0) {
                        var t1 = $this.$el.find(".shopping_cart_inner:visible [name='tj[mini-cart-text-gwc]']").val();
                        var t2 = $this.$el.find(".shopping_cart_inner:visible [name='tj[mini-cart-text-xj]']").val();
                        var t3 = $this.$el.find(".shopping_cart_inner:visible [name='bitcommerce_text_viewcart']").val();
                        var t4 = $this.$el.find(".shopping_cart_inner:visible [name='bitcommerce_text_tocheckout']").val();
                        if (t1) iframeWin.jQuery(".shopping-cart .minicart_title").html(t1);
                        if (t2) iframeWin.jQuery(".shopping-cart .minicart_total_checkout .xj").html(t2);
                        if (t3) iframeWin.jQuery(".shopping-cart .viewcart").html(t3);
                        if (t4) iframeWin.jQuery(".shopping-cart .tocheckout").html(t4);

                    }

                    $savebtn.removeClass('btn_data_onsaving').removeAttr('btn_data_onsaving').removeAttr('disabled').html(buttonHtml);

                }
            });

        },
        save: function (e) {
            var $savebtn = $(e.currentTarget);
            var $this = this;
            this.$el.find('.vc-panel-message').remove();
            var buttonHtml = $savebtn.text();
            $savebtn.addClass('btn_data_onsaving').prop('disabled', true).prop('btn_data_onsaving', true).html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');

            this.$el.find('#productStyle').ajaxSubmit(function (data) {
                if (data == "success") {
                    if (jQuery(".list_single_image.designtable:visible").length > 0) {
                        location.reload();
                    }
                    var obj = iframeWin.jQuery("#bitcommerce-custom-css");
                    var href = obj.attr("href");
                    href = explode("&time", href);
                    href = href[0] + "&time=" + Math.random();
                    iframeWin.jQuery("head").append("<link rel='stylesheet' id='bitcommerce-custom-css'  href='" + href + "' type='text/css' media='all' />");
                    setTimeout(function () {
                        obj.remove();
                    }, 2000);
                    $savebtn.removeClass('btn_data_onsaving').removeAttr('btn_data_onsaving').removeAttr('disabled').html(buttonHtml);
                    $this.hide(e);
                }
            });
        },
        show: function () {
            if (this.$el.is(':hidden')) vc.closeActivePanel();
            vc.active_panel = this;
            $(window).bind('resize.vcPropertyPanel', this.setSize);
            this.setSize();
            this.$el.show();
            if (!this.draggable) {
                this.$el.draggable({iframeFix: true, handle: '.panel-heading'});
                this.draggable = true;
            }
        },
        hide: function (e) {
            e && e.preventDefault();
            vc.active_panel = false;
            $(window).unbind('resize.vcPropertyPanel');
            this._killEditor();
            this.$el.hide().css("left", 0).css("top", 0);
            //this.$content.html('');
        },
        _killEditor: function () {
            if (!_.isUndefined(window.tinyMCE)) {
                $('textarea.textarea_html', this.$el).each(function () {
                    var id = $(this).attr('id');
                    window.tinyMCE.execCommand("mceRemoveControl", true, id);
                });
            }
        }
    });


    vc.EditSlideBlockView = vc.PanelView.extend({
        el: $('#vc-edit-slide-dialog'),
        $content: false,
        draggable: false,
        sliderId: false,
        slideId: false,
        sliderObj: false,
        slideDom: false,
        nowObj: false,
        slider_type: 0,
        slider_type_step: 0,
        flag: "text",
        events: {
            'click [data-dismiss=panel]': 'hide',
            'click [data-save=true]': 'save',
            'click .panel-footer .btn.next': 'slider_step',
            'click .panel-footer .btn.prev': 'slider_step_prev',
            'click .linkalign': 'changeXY',
            'click .btn-img-upload': 'file_upload',
            'click .btn-img-clear': 'file_upload_clear',
            'change [name="html5_url_mp4_from"] ': 'changeVideoType',
            'change [name="html5_url_webm_from"] ': 'changeVideoType',
            'click .vc_tab.slideText': 'showTab0',
            'click .vc_tab.anim': 'showTab1',
            'click .vc_tab.video': 'showTabVideo',
            'click .vc_tab.borders': 'showTab2',
            'change #type': 'layer_video',
            'click .vc_tab.showcontrol': 'showTab3',
            'change .borders_div_containter_change': 'hideOrShowborders',
            'mouseenter': 'stopSlider',
        },
        file_upload: function (e) {
            var target = $(e.currentTarget);
            var p = target.closest(".uploaddiv");
            var frame = openNewImageDialog('选择图片', function (img, id) {
                if (img != "") {
                    p.find('img').attr('src', img).show();
                    p.find('input').val(img);
                    p.find(".btn-img-clear").show();
                }
            }, false)
        },
        file_upload_clear: function (e) {
            var target = $(e.currentTarget);
            var p = target.closest(".uploaddiv");
            p.find('img').attr('src', "").hide();
            p.find('input').val('');
            p.find(".btn-img-clear").hide();
        },
        initialize: function () {
            _.bindAll(this, 'setSize');
        },
        setSize: function () {
            var height = $(window).height() - 190;
            this.$content.css('maxHeight', height);

        },
        showTabVideo: function () {
            this.$el.find(".video_div").show();
            this.$el.find(".borders_div").hide();
            this.$el.find(".anim_div").hide();
            this.$el.find(".slideText_div").hide();
            this.$el.find(".showcontrol_div").hide();
            this.$el.find(".qfe_el_type_tab .vc_tab").removeClass("on");
            this.$el.find(".qfe_el_type_tab .video").addClass("on");
        },
        showTab0: function () {
            this.$el.find(".video_div").hide();
            this.$el.find(".borders_div").hide();
            this.$el.find(".anim_div").hide();
            this.$el.find(".slideText_div").show();
            this.$el.find(".showcontrol_div").hide();
            this.$el.find(".qfe_el_type_tab .vc_tab").removeClass("on");
            this.$el.find(".qfe_el_type_tab .slideText").addClass("on");
        },
        showTab1: function () {
            this.$el.find(".video_div").hide();
            this.$el.find(".borders_div").hide();
            this.$el.find(".anim_div").show();
            this.$el.find(".slideText_div").hide();
            this.$el.find(".showcontrol_div").hide();
            this.$el.find(".qfe_el_type_tab .vc_tab").removeClass("on");
            this.$el.find(".qfe_el_type_tab .anim").addClass("on");
        },
        showTab2: function () {
            this.$el.find(".video_div").hide();
            this.$el.find(".borders_div").show();
            this.$el.find(".anim_div").hide();
            this.$el.find(".slideText_div").hide();
            this.$el.find(".showcontrol_div").hide();
            this.$el.find(".qfe_el_type_tab .vc_tab").removeClass("on");
            this.$el.find(".qfe_el_type_tab .borders").addClass("on");
        },
        showTab3: function () {
            this.$el.find(".video_div").hide();
            this.$el.find(".borders_div").hide();
            this.$el.find(".anim_div").hide();
            this.$el.find(".slideText_div").hide();
            this.$el.find(".showcontrol_div").show();
            this.$el.find(".qfe_el_type_tab .vc_tab").removeClass("on");
            this.$el.find(".qfe_el_type_tab .showcontrol").addClass("on");
        },
        hideOrShowborders: function () {
            var dataBordersShow = this.$el.find("[name='box_border']").val();
            if (dataBordersShow == 1) {
                this.$el.find(".set_border_table").show();
            } else {
                this.$el.find(".set_border_table").hide();
            }
        },
        changeVideoType: function () {
            var p = this.$el;
            var mp4 = p.find("[name='html5_url_mp4_from']").val();
            if (mp4 == "1") {
                p.find(".mp4url").show();
                p.find(".mp4local").hide();
            } else {
                p.find(".mp4url").hide();
                p.find(".mp4local").show();
            }
            var webm = p.find("[name='html5_url_webm_from']").val();
            if (webm == "1") {
                p.find(".webmurl").show();
                p.find(".webmlocal").hide();
            } else {
                p.find(".webmurl").hide();
                p.find(".webmlocal").show();
            }
        },
        layer_video: function () {
            var obj = this.$el.find("#type");
            var p = jQuery(obj).closest(".video_div");
            var v = jQuery(obj).val();
            if (v == "text") {
                p.find(">.row").hide();
            } else {
                p.find(">.row").show();
                var mp4 = p.find("[name='html5_url_mp4_from']").val();
                if (mp4 == "1") {
                    p.find(".mp4url").show();
                    p.find(".mp4local").hide();
                } else {
                    p.find(".mp4url").hide();
                    p.find(".mp4local").show();
                }
                var webm = p.find("[name='html5_url_webm_from']").val();
                if (webm == "1") {
                    p.find(".webmurl").show();
                    p.find(".webmlocal").hide();
                } else {
                    p.find(".webmurl").hide();
                    p.find(".webmlocal").show();
                }
            }

            p.find(">.row:first").show();
        },
        render: function (sliderId, slideId, sliderObj, dom, flag, nowObj) {
            var $this = this;
            jQuery.ajax({
                url: '/admin/panels.php?panel_type=slide',
                success: function (result) {
                    $this.$el.html(result);
                    $this.render_cb(sliderId, slideId, sliderObj, dom, flag, nowObj);
                },
                async: false
            });
        },
        render_cb: function (sliderId, slideId, sliderObj, dom, flag, nowObj) {
            $this = this;
            this.$el.addClass("animated_new");
            this.sliderId = sliderId;
            this.slideId = slideId;
            this.sliderObj = sliderObj;
            this.nowObj = nowObj;
            this.$content = this.$el.find('.vc-properties-list');
            this.$el.find('.bitChlidDiv').hide();

            this.slideDom = dom;
            if (sliderObj) {
                sliderObj.revpause();
            }
            this.$el.find(".panel-footer .next,.panel-footer .prev").hide();
            this.$el.find(".panel-footer .save").show();

            if (flag == "text" || flag == "text2") {
                //幻灯片设置 文字
                this.showSlideText();
                this.$el.find(".textShadow").hide();

                this.$el.find(".slideTextDiv >div").hide();
                this.$el.find(".slideTextDiv >div:first").show();
                this.$el.find(".slideTextDiv >div:first .vc_tab").removeClass("on");
                if (flag == "text") {
                    this.$el.find(".slideTextDiv >div:first .vc_tab.slideText").addClass("on");
                    this.$el.find(".slideTextDiv .slideText_div").show();
                } else if (flag == "text2") {
                    this.$el.find(".slideTextDiv >div:first .vc_tab.anim").addClass("on");
                    this.$el.find(".slideTextDiv .anim_div").show();
                }
                this.$el.find(".panel-footer .next,.panel-footer .prev").hide();
                this.$el.find(".panel-footer .save").show();


                var t = base64_decode(this.slideDom.attr("hiddentext"));
                this.$el.find('#slideTextContent').val(t);
                var bgcolor = this.slideDom.attr("bgcolor");
                var bgcolor_opt = this.slideDom.attr("bgcolor_opt");
                if (bgcolor == "transparent") {
                    this.$el.find('#textBgColor').val("").change();
                    this.$el.find('#textBgColor').val("transparent");
                    this.$el.find('#bgcolor_opt').val("1");
                } else {
                    this.$el.find('#textBgColor').val(bgcolor).change();
                    this.$el.find('#bgcolor_opt').val(bgcolor_opt);
                }
                this.$el.find("[name='slidetext_paddingtop']").val(this.slideDom.attr("data-pt"));
                this.$el.find("[name='slidetext_paddingbottom']").val(this.slideDom.attr("data-pb"));
                this.$el.find("[name='slidetext_paddingleft']").val(this.slideDom.attr("data-pl"));
                this.$el.find("[name='slidetext_paddingright']").val(this.slideDom.attr("data-pr"));

                this.$el.find('.slideTextDiv').show();
                var x = this.slideDom.attr("dataTop");
                var y = this.slideDom.attr("dataLeft");
                var dataAlignVert = this.slideDom.attr("dataAlignVert");
                var dataAlignHor = this.slideDom.attr("dataAlignHor");
                var e = this.slideDom.attr("data-endspeed");
                var s = this.slideDom.attr("data-speed");
                var index = this.slideDom.attr("bitslidetextindex");
                var sa = this.slideDom.attr("dataAnimation");
                var ea = this.slideDom.attr("dataEndAnimation");
                var style = this.slideDom.attr("dataStyle");
                var timeO = this.slideDom.attr("data-start");
                var dataBordersShow = this.slideDom.attr("dataBordersShow");
                var dataBorders = this.slideDom.attr("dataBorders");

                changeStyleText(style);
                this.$el.find(".selected").removeClass("selected");
                if (this.slideDom.hasClass("tp-resizeme")) {
                    this.$el.find("#layer_resizeme").val("");
                } else {
                    this.$el.find("#layer_resizeme").val("1");
                }
                this.$el.find("#layer_left").val(y);
                this.$el.find("#layer_top").val(x);
                this.$el.find("#layer_animation").val(sa);
                this.$el.find("#layer_endanimation").val(ea);
                this.$el.find("#startSpeed").val(s);
                this.$el.find("#time").val(timeO);
                this.$el.find("#endSpeed").val(e);
                this.$el.find("#endTime").val(this.slideDom.attr("data-end"));
                this.$el.find("#lay_index").val(index);
                this.$el.find("#lay_type").val("edit");
                this.$el.find("#textStyle").val(style);
                this.$el.find("#linkalign_" + dataAlignHor + "_" + dataAlignVert).addClass("selected");
                this.$el.find("#align_hor").val(dataAlignHor);
                this.$el.find("#align_vert").val(dataAlignVert);
                this.$el.find("[name='box_border']").val(dataBordersShow);
                this.$el.find("#showcontrol_device").val(this.slideDom.attr("data-device"))
                if (dataBordersShow == 1) {
                    this.$el.find(".set_border_table").show();
                } else {
                    this.$el.find(".set_border_table").hide();
                }

                if (dataBorders == "") {
                    //default value
                    dataBorders = "1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0";
                }
                var arrayObj = dataBorders.split("|^|");
                if (arrayObj[0] == 1) {
                    this.$el.find("[name='useSameSetting']").attr("checked", "checked");
                } else {
                    this.$el.find("[name='useSameSetting']").removeAttr("checked", "");
                }
                this.$el.find("[name='set_border_top_size']").val(arrayObj[1]);
                this.$el.find("[name='set_border_top_color']").val(arrayObj[2]).change();
                this.$el.find("[name='set_border_top_line']").val(arrayObj[3]);
                this.$el.find("[name='set_border_bottom_size']").val(arrayObj[4]);
                this.$el.find("[name='set_border_bottom_color']").val(arrayObj[5]).change();
                this.$el.find("[name='set_border_bottom_line']").val(arrayObj[6]);
                this.$el.find("[name='set_border_left_size']").val(arrayObj[7]);
                this.$el.find("[name='set_border_left_color']").val(arrayObj[8]).change();
                this.$el.find("[name='set_border_left_line']").val(arrayObj[9]);
                this.$el.find("[name='set_border_right_size']").val(arrayObj[10]);
                this.$el.find("[name='set_border_right_color']").val(arrayObj[11]).change();
                this.$el.find("[name='set_border_right_line']").val(arrayObj[12]);
                if (!arrayObj[13]) {
                    arrayObj[13] = 100;
                }
                this.$el.find("[name='set_border_top_coloropt']").val(arrayObj[13]);
                if (!arrayObj[14]) {
                    arrayObj[14] = 100;
                }
                this.$el.find("[name='set_border_bottom_coloropt']").val(arrayObj[14]);
                if (!arrayObj[15]) {
                    arrayObj[15] = 100;
                }
                this.$el.find("[name='set_border_left_coloropt']").val(arrayObj[15]);
                if (!arrayObj[16]) {
                    arrayObj[16] = 100;
                }
                this.$el.find("[name='set_border_right_coloropt']").val(arrayObj[16]);

                var data = {slideid: this.slideId, sliderID: this.sliderId};
                var objData = {
                    action: "revslider_ajax_action",
                    client_action: "get_slide_data_layers",
                    nonce: slider_nonce,
                    data: data
                }
                var $el = this.$el;
                jQuery.post(ajaxurl, objData, function (rs) {
                    var response = jQuery.parseJSON(rs);
                    response = response[index - 1];
                    if (response.type == "video") {
                        $el.find("[name='type']").val("video");
                    } else {
                        $el.find("[name='type']").val("text");
                    }
                    if (response.html5_url_mp4_from) {
                        $el.find("[name='html5_url_mp4_from']").val(response.html5_url_mp4_from);
                    }
                    if (response.html5_url_webm_from) {
                        $el.find("[name='html5_url_webm_from']").val(response.html5_url_webm_from);
                    }
                    $this.layer_video();
                    /*jQuery.post("/FeiEditor/siteEdit/getVideoList", function (data) {
                        var optionstring = data;
                        var t = optionstring.split("|^~^|");
                        if (t.length > 1) {
                            $el.find("[name='html5_url_mp4_local']").html(t[0]).val(response.html5_url_mp4_local);
                            $el.find("[name='html5_url_webm_local']").html(t[1]).val(response.html5_url_webm_local);
                        }
                    })*/
                    $el.find("[name='html5_url_mp4_local']").val(response.html5_url_mp4_local);
                    $el.find("[name='html5_url_webm_local']").val(response.html5_url_webm_local);


                    if (response.video_data) {
                        var video_data = response.video_data;

                        if (video_data.urlPoster) {
                            $el.find("[name='html5_url_poster']").val(video_data.urlPoster);
                            $el.find("[name='html5_url_poster']").closest(".uploaddiv").find("img").attr("src", video_data.urlPoster).show();
                            $el.find("[name='html5_url_poster']").closest(".uploaddiv").find(".btn-img-clear").show();
                        }
                        if (video_data.urlMp4) {
                            $el.find("[name='html5_url_mp4']").val(video_data.urlMp4);
                        }
                        if (video_data.urlWebm) {
                            $el.find("[name='html5_url_webm']").val(video_data.urlWebm);
                        }
                        if (video_data.width) {
                            $el.find("#input_video_width").val(video_data.width);
                        }
                        if (video_data.height) {
                            $el.find("#input_video_height").val(video_data.height);
                        }
                        if (video_data.autoplay === "true") {
                            $el.find("#input_video_autoplay").attr("checked", "checked");
                        } else {
                            $el.find("#input_video_autoplay").removeAttr("checked");
                        }
                        if (video_data.autoplayonlyfirsttime === "true") {
                            $el.find("#input_video_autoplay_first_time").attr("checked", "checked");
                        } else {
                            $el.find("#input_video_autoplay_first_time").removeAttr("checked");
                        }
                        if (video_data.nextslide === "true") {
                            $el.find("#input_video_nextslide").attr("checked", "checked");
                        } else {
                            $el.find("#input_video_nextslide").removeAttr("checked");
                        }
                        if (video_data.forcerewind === "true") {
                            $el.find("#input_video_force_rewind").attr("checked", "checked");
                        } else {
                            $el.find("#input_video_force_rewind").removeAttr("checked");
                        }
                        if (video_data.fullwidth === "true") {
                            $el.find("[name='input_video_fullwidth']").attr("checked", "checked");
                        } else {
                            $el.find("[name='input_video_fullwidth']").removeAttr("checked");
                        }
                        if (video_data.videoloop === "true") {
                            $el.find("#input_video_loop").attr("checked", "checked");
                        } else {
                            $el.find("#input_video_loop").removeAttr("checked");
                        }
                        if (video_data.controls === "true") {
                            $el.find("#input_video_control").attr("checked", "checked");
                        } else {
                            $el.find("#input_video_control").removeAttr("checked");
                        }
                        if (video_data.mute === "true") {
                            $el.find("#input_video_mute").attr("checked", "checked");
                        } else {
                            $el.find("#input_video_mute").removeAttr("checked");
                        }
                        if (video_data.cover === "true") {
                            $el.find("#input_video_cover").attr("checked", "checked");
                        } else {
                            $el.find("#input_video_cover").removeAttr("checked");
                        }
                        if (video_data.dotted) {
                            $el.find("#input_video_dotted_overlay").val(video_data.dotted);
                        }
                        if (video_data.ratio) {
                            $el.find("#input_video_ratio").val(video_data.ratio);
                        }

                    } else {
                        $el.find("#input_video_control").attr("checked", "checked");
                        $el.find("#input_video_autoplay").attr("checked", "checked");
                        $el.find("#input_video_nextslide").attr("checked", "checked");
                        $el.find("#input_video_mute").attr("checked", "checked");
                        $el.find("#input_video_force_rewind").attr("checked", "checked");
                        $el.find("#input_video_loop").attr("checked", "checked");
                    }
                });


                if (dataAlignHor == "left") {
                    this.$el.find("#layer_left_text").html("X");
                } else {
                    this.$el.find("#layer_left_text").html("OffsetX");
                }
                if (dataAlignVert == "top") {
                    this.$el.find("#layer_top_text").html("Y");
                } else {
                    this.$el.find("#layer_top_text").html("OffsetY");
                }
                var shadow = dom.find(".slideText").css("text-shadow");
                if (shadow == "none") {
                    this.$el.find('#slideTextShadow').val(0);
                    this.$el.find('#slideTextShadowColor').val("#fff");
                } else {
                    if (shadow.indexOf("1px") > -1) {
                        this.$el.find('#slideTextShadow').val(1);
                    } else if (shadow.indexOf("2px") > -1) {
                        this.$el.find('#slideTextShadow').val(2);
                    } else if (shadow.indexOf("4px") > -1) {
                        this.$el.find('#slideTextShadow').val(4);
                    }
                    var tmp = shadow.split(")");
                    tmp = tmp[0] + ")";
                    this.$el.find('#slideTextShadowColor').val(tmp).change();
                }
            } else if (flag == "slide_set") {

                if (!this.slideId) return;
                this.showSlideSetting();
                var data = {slideid: this.slideId, sliderID: this.sliderId};
                var jthis = this;

                jQuery("#vc-edit-slide-dialog .panel-body").prepend('<img class="waitingToPanel" style="padding:0;margin: 0 auto;position:absolute;top:40%;left:42%" src="' + jQuery("#loading").val() + '" />');

                var objData = {
                    action: "revslider_ajax_action",
                    client_action: "get_slide_data",
                    nonce: slider_nonce,
                    data: data
                }
                jQuery.post(ajaxurl, objData, function (response) {

                    jQuery("#vc-edit-slide-dialog .panel-body .waitingToPanel").remove();
                    var rs = jQuery.parseJSON(response);
                    if (rs.html) {
                        jthis.$el.find('.slideSettingDiv .linkajaxhtml').html(rs.html);

                        if (rs.param.enable_link == "true") {
                            jthis.$el.find('#slide_link').val("true");
                        } else {
                            jthis.$el.find('#slide_link').val("false");
                        }

                        if (rs.param.link_open_in == "new") {
                            jthis.$el.find('#slide_link_open').val("new");
                        } else {
                            jthis.$el.find('#slide_link_open').val("same");
                        }
                        if (rs.param.bg_position) {
                            jthis.$el.find('#bg_position').val(rs.param.bg_position);
                        }

                        if (rs.param.kenburn_effect) {
                            jthis.$el.find('#kenburn_effect').val(rs.param.kenburn_effect);
                        } else {
                            jthis.$el.find('#kenburn_effect').val("off");
                        }

                        if (rs.param.zoom_end) {
                            jthis.$el.find('#zoom_end').val(rs.param.zoom_end);
                        } else {
                            jthis.$el.find('#zoom_end').val(110);
                        }

                        if (rs.param.link_pos == "front") {
                            jthis.$el.find('#slide_link_front').val("front");
                        } else {
                            jthis.$el.find('#slide_link_front').val("back");
                        }
                        if (!rs.param.pageUrlType) rs.param.pageUrlType = 1;
                        jthis.$el.find('#pageUrlType').val(rs.param.pageUrlType);
                        if (rs.param.pageUrlSelect)
                            jthis.$el.find('#pageUrlSelect').val(rs.param.pageUrlSelect);
                        if (rs.param.pageFileSelect)
                            jthis.$el.find('#pageFileSelect').val(rs.param.pageFileSelect);
                        if (rs.param.link)
                            jthis.$el.find('#pageUrlInput').val(rs.param.link);
                        if (rs.param.link)
                            jthis.$el.find('#btn-url').val(rs.param.link);
                        if (rs.param.btn_linkto)
                            jthis.$el.find('#btn-linkto').val(rs.param.btn_linkto);
                        bitLinkChange('no');
                        jthis.$el.find('#pageUrlType [value="4"]').remove();
                        jthis.$el.find('.slideSettingDiv').show();
                        var title = jthis.$el.find('.linkajaxhtml .title.form-control:visible');
                        if (title.length > 0) {
                            var url_id = title.next().val();
                            if (rs.param.pageUrlType == 0) {
                                if (url_id > 0) {
                                    title.val("获取中,请稍等...");
                                    jQuery.post("/admin/admin-ajax.php", {
                                        "action": "bit_get_post_title",
                                        "id": url_id
                                    }, function (msg) {
                                        if (msg) {
                                            title.val(msg);
                                        }
                                    });
                                }
                            } else if (rs.param.pageUrlType == 2) {
                                var url = title.next().val();
                                title.val("获取中,请稍等...");
                                jQuery.post("/admin/admin-ajax.php", {
                                    "action": "bit_get_post_title",
                                    "id": 0,
                                    "url": url
                                }, function (msg) {
                                    if (msg) {
                                        title.val(msg);
                                    }
                                });

                            }
                        }

                    }

                });


            } else if (flag == "set") {
                this.showSliderSet();

                var height = nowObj.css("height");
                if (height) height = (height + "").replace("px", "");
                else height = 0;
                var transition = nowObj.find("li.bitSliderLi").attr("data-transition");
                if (!transition) transition = "random";
                var transitionSpeed = nowObj.find("li.bitSliderLi").attr("data-masterspeed");
                if (!transitionSpeed) transitionSpeed = "300";

                var data = {sliderID: this.sliderId};
                var jthis = this;

                jQuery("#vc-edit-slide-dialog .panel-body").prepend('<img class="waitingToPanel" style="padding:0;margin: 0 auto;position:absolute;top:40%;left:42%" src="' + jQuery("#loading").val() + '" />');

                revAjaxRequest("get_slider_data", data, function (response) {

                    jQuery("#vc-edit-slide-dialog .panel-body .waitingToPanel").remove();

                    jthis.$el.find("#background_color").val(response.background_color).change();
                    jthis.$el.find("#background_dotted_overlay").val(response.background_dotted_overlay);
                    jthis.$el.find("#navigaion_type").val(response.navigaion_type).change();

                    jthis.$el.find("[name='slider_type']").val(response.slider_type);
                    jthis.$el.find("[name='slide_width']").val(response.width);
                    jthis.$el.find("#slide_height").val(response.height);
                    jthis.$el.find("#slide_mobileheight").val(response.mobileheight);

                    jthis.$el.find("#thumb_width").val(response.thumb_width);
                    jthis.$el.find("#thumb_height").val(response.thumb_height);
                    jthis.$el.find("#thumb_amount").val(response.thumb_amount);
                    jthis.$el.find("#slide_delay").val(response.delay);
                    jthis.$el.find("#lazy_load").val(response.lazy_load);

                    jthis.$el.find("#navigation_arrows").val(response.navigation_arrows);
                    if (response.navigation_arrows_style) {
                        jthis.$el.find("#navigation_arrows_style").val(response.navigation_arrows_style);
                    }
                    if (response.navigation_icon_color) {
                        jthis.$el.find("#navigation_icon_color").val(response.navigation_icon_color).change();
                    }
                    if (response.navigation_icon_hovercolor) {
                        jthis.$el.find("#navigation_icon_hovercolor").val(response.navigation_icon_hovercolor).change();
                    }
                    if (response.navigation_icon_opt) {
                        jthis.$el.find("#navigation_icon_opt").val(response.navigation_icon_opt);
                    }
                    if (response.navigation_bg_color) {
                        jthis.$el.find("#navigation_bg_color").val(response.navigation_bg_color).change();
                    }
                    if (response.navigation_bg_hovercolor) {
                        jthis.$el.find("#navigation_bg_hovercolor").val(response.navigation_bg_hovercolor).change();
                    }
                    if (response.navigation_arrows_size) {
                        jthis.$el.find("#navigation_arrows_size").val(response.navigation_arrows_size);
                    }
                    if (response.navigation_arrows_mobile_show) {
                        jthis.$el.find("#navigation_arrows_mobile_show").val(response.navigation_arrows_mobile_show);
                    }
                    if (response.navigaion_always_on) {
                        jthis.$el.find("#navigaion_always_on").val(response.navigaion_always_on);
                    }
                    if (response.background_loading) {
                        jthis.$el.find("#background_loading").val(response.background_loading);
                    }
                    if (response.background_loading_bg) {
                        jthis.$el.find("#background_loading_bg").val(response.background_loading_bg);
                    }


                    if (response.navigation_mobile_show) {
                        jthis.$el.find("#navigation_mobile_show").val(response.navigation_mobile_show);
                    }

                    jthis.$el.find("#navigaion_align_hor").val(response.navigaion_align_hor);
                    jthis.$el.find("#hide_slider_under").val(response.hide_slider_under);
                    if (response.touchenabled == null) response.touchenabled == "on";
                    jthis.$el.find("#touchenabled").val(response.touchenabled);
                    // round

                    jthis.$el.find("#navigation_style").val(response.navigation_style);
                    if (response.navigation_style_bordercolor) {
                        jthis.$el.find("#navigation_style_bordercolor").val(response.navigation_style_bordercolor).change();
                    }
                    if (response.navigation_style_innercolor) {
                        jthis.$el.find("#navigation_style_innercolor").val(response.navigation_style_innercolor).change();
                    }
                    if (response.navigation_style_hoverbordercolor) {
                        jthis.$el.find("#navigation_style_hoverbordercolor").val(response.navigation_style_hoverbordercolor).change();
                    }
                    if (response.navigation_style_hoverinnercolor) {
                        jthis.$el.find("#navigation_style_hoverinnercolor").val(response.navigation_style_hoverinnercolor).change();
                    }
                    if (response.navigation_style_size) {
                        jthis.$el.find("#navigation_style_size").val(response.navigation_style_size);
                    }
                    if (response.navigation_style_marginleft) {
                        jthis.$el.find("#navigation_style_marginleft").val(response.navigation_style_marginleft);
                    }


                    if (response.bit_margintop)
                        jthis.$el.find("[name='bit_margintop']").val(response.bit_margintop);
                    if (response.bit_marginbottom)
                        jthis.$el.find("[name='bit_marginbottom']").val(response.bit_marginbottom);
                    if (response.bit_paddingleft)
                        jthis.$el.find("[name='bit_paddingleft']").val(response.bit_paddingleft);
                    if (response.bit_paddingright)
                        jthis.$el.find("[name='bit_paddingright']").val(response.bit_paddingright);
                    if (response.bit_paddingtop)
                        jthis.$el.find("[name='bit_paddingtop']").val(response.bit_paddingtop);
                    if (response.bit_paddingbottom)
                        jthis.$el.find("[name='bit_paddingbottom']").val(response.bit_paddingbottom);

                    if (response.bit_m_setting)
                        jthis.$el.find("[name='bit_m_setting']").val(response.bit_m_setting);
                    if(response.bit_m_setting=="1"){
                        jthis.$el.find(".mobile_padding_setting").show();
                    }else{
                        jthis.$el.find(".mobile_padding_setting").hide();
                    }
                    if (response.bit_margintop_m)
                        jthis.$el.find("[name='bit_margintop_m']").val(response.bit_margintop_m);
                    if (response.bit_marginbottom_m)
                        jthis.$el.find("[name='bit_marginbottom_m']").val(response.bit_marginbottom_m);
                    if (response.bit_paddingleft_m)
                        jthis.$el.find("[name='bit_paddingleft_m']").val(response.bit_paddingleft_m);
                    if (response.bit_paddingright_m)
                        jthis.$el.find("[name='bit_paddingright_m']").val(response.bit_paddingright_m);
                    if (response.bit_paddingtop_m)
                        jthis.$el.find("[name='bit_paddingtop_m']").val(response.bit_paddingtop_m);
                    if (response.bit_paddingbottom_m)
                        jthis.$el.find("[name='bit_paddingbottom_m']").val(response.bit_paddingbottom_m);





                    jthis.$el.find('.slideSetDiv').show();
                    jthis.$el.find('.slideSetDiv .qfe_el_type_tab .vc_tab').click(function () {
                        jQuery(this).parent().find(".vc_tab").removeClass("on");
                        jQuery(this).addClass("on");
                        var tab = jQuery(this).attr("data-tab");
                        jthis.$el.find('.slideSetDiv .s_tab_div').hide();
                        jthis.$el.find('.slideSetDiv .s_tab_div' + tab).show();
                    });
                    slider_type_fun();

                });

                this.$el.find("#slide_anima").val(transition);
                this.$el.find("#slide_speed").val(transitionSpeed);
            } else if (flag == "add text") {
                //幻灯片新增文字
                this.cancetohome();
                this.showSlideText();
                this.$el.find(".selected").removeClass("selected");
                this.$el.find("#layer_left").val(0);
                this.$el.find("#layer_top").val(0);
                this.$el.find("#layer_animation").val("tp-fade");
                this.$el.find("#layer_endanimation").val("tp-fade");
                this.$el.find("#startSpeed").val("300");
                this.$el.find("#time").val("");
                this.$el.find("#layer_resizeme").val("");
                this.$el.find("#endSpeed").val("300");
                this.$el.find("#endTime").val("");
                this.$el.find("#lay_type").val("add");
                this.$el.find("#linkalign_left_top").addClass("selected");
                this.$el.find("#align_hor").val("left");
                this.$el.find("#align_vert").val("top");

                this.$el.find("#textBgColor").val("").change();
                this.$el.find('#bgcolor_opt').val("1");
                this.$el.find('#textBgColor').val("transparent");
                this.$el.find('[name="slidetext_paddingtop"]').val(0);
                this.$el.find('[name="slidetext_paddingbottom"]').val(0);
                this.$el.find('[name="slidetext_paddingleft"]').val(0);
                this.$el.find('[name="slidetext_paddingright"]').val(0);


                var left = rand(50, 100);
                var top = rand(50, 100);
                if (iframeWin.jQuery(".rev_slider_wrapper.fullscreen-container").length > 0) {
                    left = left + 100;
                    top = top + 150;
                }
                var dataBorders = "1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0";

                var arrayObj = dataBorders.split("|^|");
                if (arrayObj[0] == 1) {
                    this.$el.find("[name='useSameSetting']").attr("checked", "checked");
                } else {
                    this.$el.find("[name='useSameSetting']").removeAttr("checked", "");
                }
                this.$el.find("[name='box_border']").val(0);
                this.$el.find(".set_border_table").hide();

                this.$el.find("[name='set_border_top_size']").val(arrayObj[1]);
                this.$el.find("[name='set_border_top_color']").val(arrayObj[2]).change();
                this.$el.find("[name='set_border_top_line']").val(arrayObj[3]);
                this.$el.find("[name='set_border_bottom_size']").val(arrayObj[4]);
                this.$el.find("[name='set_border_bottom_color']").val(arrayObj[5]).change();
                this.$el.find("[name='set_border_bottom_line']").val(arrayObj[6]);
                this.$el.find("[name='set_border_left_size']").val(arrayObj[7]);
                this.$el.find("[name='set_border_left_color']").val(arrayObj[8]).change();
                this.$el.find("[name='set_border_left_line']").val(arrayObj[9]);
                this.$el.find("[name='set_border_right_size']").val(arrayObj[10]);
                this.$el.find("[name='set_border_right_color']").val(arrayObj[11]).change();
                this.$el.find("[name='set_border_right_line']").val(arrayObj[12]);
                if (!arrayObj[13]) {
                    arrayObj[13] = 100;
                }
                this.$el.find("[name='set_border_top_coloropt']").val(arrayObj[13]);
                if (!arrayObj[14]) {
                    arrayObj[14] = 100;
                }
                this.$el.find("[name='set_border_bottom_coloropt']").val(arrayObj[14]);
                if (!arrayObj[15]) {
                    arrayObj[15] = 100;
                }
                this.$el.find("[name='set_border_left_coloropt']").val(arrayObj[15]);
                if (!arrayObj[16]) {
                    arrayObj[16] = 100;
                }
                this.$el.find("[name='set_border_right_coloropt']").val(arrayObj[16]);
                this.$el.find("#layer_left").val(left);
                this.$el.find("#layer_top").val(top);

                this.$el.find("#layer_left_text").html("水平微调");
                this.$el.find("#layer_top_text").html("垂直微调");
                this.$el.find('#bgcolor_opt').val("1");

                if (vc.frame_window.jQuery("body").width() < 760) {
                    this.$el.find("#showcontrol_device").val(2)
                    this.$el.find("#layer_resizeme").val(1);
                } else {
                    this.$el.find("#showcontrol_device").val(1)
                    this.$el.find("#layer_resizeme").val("");
                }

                this.$el.find('.sliderTextElement').show();
                $this = this;
                this.slider_type = 0;
                this.slider_type_step = 0;
                this.$el.find('.selfDefined').click(function () {
                    $this.$el.find('.sliderTextElement').hide();
                    $this.$el.find('.slideTextDiv').show();
                    $this.$el.find('.slideText').click();
                    $this.$el.find(".panel-footer .save,.panel-footer .prev").show();
                    $this.$el.find(".panel-footer .next").hide();
                    $this.slider_type = 6;
                    $this.slider_type_step = 1;
                    return;
                });
                $this.$el.find('.panel-footer').show();

                $this.$el.find('.sliderTextElementPre').unbind("click").click(function () {
                    var json = $(this).attr("data-json");
                    var id = $(this).attr("data-id");
                    json = jQuery.parseJSON(json);
                    var content = json.content;
                    if (json.content == 'button_demo_qifeiye') {
                        content = jQuery(".button_demo_qifeiye").html();
                    } else if (json.content == 'image_demo_qifeiye') {
                        content = '<div class="image_demo_qifeiye"><img src="http://fast.qifeiye.com/FeiEditor/images/bitcms/Bird-With-Egg-Hat.png" /></div>';
                    } else {
                        if (vc.frame_window.jQuery("body").width() < 760) {
                            content = '<span style="color:#FFFFFF;font-size: 16px;font-family: 黑体;">' + content + '</span>';
                        } else {
                            content = '<span style="color:#FFFFFF;font-size: 40px;font-family: 黑体;">' + content + '</span>';
                        }
                    }

                    $this.$el.find("#slideTextContent").val(content);
                    $this.slider_type = id;
                    $this.slider_step();
                    $(this).parent().find('.sliderTextElementPre').removeClass("hover");
                    $(this).addClass("hover");
                    $this.$el.find(".sliderAniElementDiv:eq(0)").click();
                    return false;
                });
                this.$el.find('#slideTextContent').val("双击可以修改");

            } else if (flag == "imageText" || flag == "singleImageText") {
                //横幅文字新增
                this.$el.find(".slideTextDiv >div:first").show();
                this.showImageText();
                this.$el.find('#slideTextContent').val("双击可以修改");
                this.$el.find("#layer_left").val(0);
                this.$el.find("#layer_top").val(0);
                this.$el.find('.slideTextDiv').show();
                this.$el.find("[name='box_border']").val(0);
                this.$el.find(".set_border_table").hide();

                this.$el.find('#textBgColor').val("").change();
                this.$el.find('#textBgColor').val("transparent");
                this.$el.find('#bgcolor_opt').val("1");
                this.$el.find('[name="slidetext_paddingtop"]').val(0);
                this.$el.find('[name="slidetext_paddingbottom"]').val(0);
                this.$el.find('[name="slidetext_paddingleft"]').val(0);
                this.$el.find('[name="slidetext_paddingright"]').val(0);

                //default value
                var dataBorders = "1|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0";

                var arrayObj = dataBorders.split("|^|");
                if (arrayObj[0] == 1) {
                    this.$el.find("[name='useSameSetting']").attr("checked", "checked");
                } else {
                    this.$el.find("[name='useSameSetting']").removeAttr("checked", "");
                }
                this.$el.find("[name='set_border_top_size']").val(arrayObj[1]);
                this.$el.find("[name='set_border_top_color']").val(arrayObj[2]).change();
                this.$el.find("[name='set_border_top_line']").val(arrayObj[3]);
                this.$el.find("[name='set_border_bottom_size']").val(arrayObj[4]);
                this.$el.find("[name='set_border_bottom_color']").val(arrayObj[5]).change();
                this.$el.find("[name='set_border_bottom_line']").val(arrayObj[6]);
                this.$el.find("[name='set_border_left_size']").val(arrayObj[7]);
                this.$el.find("[name='set_border_left_color']").val(arrayObj[8]).change();
                this.$el.find("[name='set_border_left_line']").val(arrayObj[9]);
                this.$el.find("[name='set_border_right_size']").val(arrayObj[10]);
                this.$el.find("[name='set_border_right_color']").val(arrayObj[11]).change();
                this.$el.find("[name='set_border_right_line']").val(arrayObj[12]);
                if (!arrayObj[13]) {
                    arrayObj[13] = 100;
                }
                this.$el.find("[name='set_border_top_coloropt']").val(arrayObj[13]);
                if (!arrayObj[14]) {
                    arrayObj[14] = 100;
                }
                this.$el.find("[name='set_border_bottom_coloropt']").val(arrayObj[14]);
                if (!arrayObj[15]) {
                    arrayObj[15] = 100;
                }
                this.$el.find("[name='set_border_left_coloropt']").val(arrayObj[15]);
                if (!arrayObj[16]) {
                    arrayObj[16] = 100;
                }
                this.$el.find("[name='set_border_right_coloropt']").val(arrayObj[16]);

            } else if (flag == "textEdit") {
                //横幅文字修改
                this.showImageText();
                this.$el.find(".textShadow").show();
                var t = dom.find(".slideText").html();
                var shadow = dom.find(".slideText").css("text-shadow");
                if (shadow == "none") {
                    this.$el.find('#slideTextShadow').val(0);
                    this.$el.find('#slideTextShadowColor').val("#fff");
                } else {
                    if (shadow.indexOf("1px") > -1) {
                        this.$el.find('#slideTextShadow').val(1);
                    } else if (shadow.indexOf("2px") > -1) {
                        this.$el.find('#slideTextShadow').val(2);
                    } else if (shadow.indexOf("4px") > -1) {
                        this.$el.find('#slideTextShadow').val(4);
                    }
                    var tmp = shadow.split(")");
                    tmp = tmp[0] + ")";
                    this.$el.find('#slideTextShadowColor').val(tmp).change();
                }

                this.$el.find('#slideTextContent').val(t);
                var bgcolor = this.slideDom.attr("bgcolor");

                if (bgcolor == "transparent") {
                    this.$el.find('#textBgColor').val("").change();
                    this.$el.find('#textBgColor').val("transparent");
                } else {
                    this.$el.find('#textBgColor').val(bgcolor).change();
                }

                this.$el.find('#bgcolor_opt').val(this.slideDom.attr("bgcolor_opt"));

                this.$el.find('[name="slidetext_paddingtop"]').val(this.slideDom.attr("data-st"));
                this.$el.find('[name="slidetext_paddingbottom"]').val(this.slideDom.attr("data-sb"));
                this.$el.find('[name="slidetext_paddingleft"]').val(this.slideDom.attr("data-sl"));
                this.$el.find('[name="slidetext_paddingright"]').val(this.slideDom.attr("data-sr"));

                var style = this.slideDom.attr("dataStyle");
                var textImageStyle = this.slideDom.parent().attr("textImageStyle");
                this.$el.find("#textStyle").val(style);
                this.$el.find("#textImageStyle").val(textImageStyle);
                this.$el.find('.slideTextDiv').show();
                changeStyleText(style);
                var dataBordersShow = dom.attr("dataBordersShow");
                var dataBorders = dom.attr("dataBorders");
                this.$el.find("[name='box_border']").val(dataBordersShow);
                if (dataBordersShow == 0) {
                    this.$el.find(".set_border_table").hide();
                } else {
                    this.$el.find(".set_border_table").show();
                }
                if (dataBorders == "") {
                    //default value
                    dataBorders = "0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0|^|1|^|#ffffff|^|0";
                }
                var arrayObj = dataBorders.split("|^|");
                if (arrayObj[0] == 1) {
                    this.$el.find("[name='useSameSetting']").attr("checked", "checked");
                } else {
                    this.$el.find("[name='useSameSetting']").removeAttr("checked", "");
                }
                this.$el.find("[name='set_border_top_size']").val(arrayObj[1]);
                this.$el.find("[name='set_border_top_color']").val(arrayObj[2]).change();
                this.$el.find("[name='set_border_top_line']").val(arrayObj[3]);
                this.$el.find("[name='set_border_bottom_size']").val(arrayObj[4]);
                this.$el.find("[name='set_border_bottom_color']").val(arrayObj[5]).change();
                this.$el.find("[name='set_border_bottom_line']").val(arrayObj[6]);
                this.$el.find("[name='set_border_left_size']").val(arrayObj[7]);
                this.$el.find("[name='set_border_left_color']").val(arrayObj[8]).change();
                this.$el.find("[name='set_border_left_line']").val(arrayObj[9]);
                this.$el.find("[name='set_border_right_size']").val(arrayObj[10]);
                this.$el.find("[name='set_border_right_color']").val(arrayObj[11]).change();
                this.$el.find("[name='set_border_right_line']").val(arrayObj[12]);
                if (!arrayObj[13]) {
                    arrayObj[13] = 100;
                }
                this.$el.find("[name='set_border_top_coloropt']").val(arrayObj[13]);
                if (!arrayObj[14]) {
                    arrayObj[14] = 100;
                }
                this.$el.find("[name='set_border_bottom_coloropt']").val(arrayObj[14]);
                if (!arrayObj[15]) {
                    arrayObj[15] = 100;
                }
                this.$el.find("[name='set_border_left_coloropt']").val(arrayObj[15]);
                if (!arrayObj[16]) {
                    arrayObj[16] = 100;
                }
                this.$el.find("[name='set_border_right_coloropt']").val(arrayObj[16]);


            }

            this.show();
            this.flag = flag;

            this.$content.scrollTop(0);

            var $thisel = this.$el;
            //init set
            $thisel.find('.bit-color-control').qfColorPicker();
            $thisel.find("#navigaion_type").change(function () {
                $thisel.find(".navigation_style_custom").hide();
                var val = jQuery(this).val();
                if (val == "none") {
                    $thisel.find(".navigaion_type").hide();
                } else if (val == "bullet") {
                    $thisel.find(".navigaion_type").show();
                    $thisel.find(".navigaion_type2").hide();
                    var v1 = $thisel.find(".slideSetDiv #navigation_style").val();
                    if (v1 == "new1" || v1 == "new2" || v1 == "new3") {
                        $thisel.find(".navigation_style_custom").show();
                    }
                } else if (val == "thumb") {
                    $thisel.find(".navigaion_type").show();
                    $thisel.find(".navigaion_type1").hide();
                }
            })
            // init ...
            $thisel.find('.vc-color-control-special').qfColorPicker({
                change: function (event, ui) {
                    if (jQuery(this).hasClass("useSameColor")) {
                        var color = ui.color.toString();
                        $this = this;
                        var p = $thisel.find(".set_border_table");
                        if (p.find("[name='useSameSetting']").attr("checked") == "checked") {
                            p.find(".useSameColor").each(function () {
                                if ($this != this) {
                                    jQuery(this).val(color).change();
                                }
                            })
                        }
                    }
                },
                clear: function (event) {
                    var p = jQuery(this).parent().find(".useSameColor");
                    if (p.length == 1) {
                        var pdiv = $thisel.find(".set_border_table");
                        if (pdiv.find("[name='useSameSetting']").attr("checked") == "checked") {
                            pdiv.find(".set_border_table .qf-color-result").attr("style", "");
                            pdiv.find(".set_border_table .useSameColor ").val("");
                        }
                    }
                },
            });
            $thisel.find(".useSameSetting,.useSameSettingchange").change(function () {
                changeBorderSetting($thisel.find(".set_border_table"), jQuery(this));
            });

            this.$el.find('.panel-footer').show();
            return this;
        },
        slider_step: function () {

            if (this.slider_type == 1) {
                //文字
                if (this.slider_type_step == 0) {
                    this.$el.find(".panel-footer .next,.panel-footer .prev").show();
                    this.onlyshowanimdiv();
                    this.slider_type_step = 1;
                } else if (this.slider_type_step == 1) {
                    this.$el.find(".panel-footer .prev,.panel-footer .save").show();
                    this.$el.find(".panel-footer .next").hide();
                    this.onlyshowbordersdiv();
                    this.slider_type_step = 2;
                }
            } else if (this.slider_type == 2) {
                //图片
                if (this.slider_type_step == 0) {
                    this.$el.find(".panel-footer .save,.panel-footer .prev").show();
                    this.$el.find(".panel-footer .next").hide();
                    this.onlyshowanimdiv();
                    this.slider_type_step = 1;
                }
            } else if (this.slider_type == 5) {
                //按钮
                if (this.slider_type_step == 0) {
                    $this = this;
                    $this.$el.find(".bitChlidDiv").hide();
                    $this.$el.find(".slideText5Div").show();
                    this.$el.find(".panel-footer .next,.panel-footer .prev").show();
                    this.$el.find(".panel-footer .save").hide();
                    this.slider_type_step = 1;
                    $this.$el.find("a.bitButton").unbind().bind("click", function () {
                        $this.onlyshowanimdiv();
                        $this.$el.find("#slideTextContent").val(jQuery(this).prop("outerHTML"));
                        $this.$el.find(".panel-footer .save,.panel-footer .prev").show();
                        $this.$el.find(".panel-footer .next").hide();
                    }).live({
                        mouseenter: function () {
                            var delay = jQuery(this).attr("delay");
                            var str = "";
                            if (delay && delay != "0") {
                                str = "all " + delay + " linear";
                            }
                            var texthovercolor = jQuery(this).attr("texthovercolor");
                            if (texthovercolor) {
                                jQuery(this).find(".iconText").css("color", texthovercolor);
                                jQuery(this).find(".iconText").css("transition", str);
                            }
                            var iconhovercolor = jQuery(this).attr("iconhovercolor");
                            if (iconhovercolor) {
                                jQuery(this).find("i.glyphicon").css("color", iconhovercolor);
                                jQuery(this).find("i.glyphicon").css("transition", str);
                            }
                            var backgroundhovercolor = jQuery(this).attr("backgroundhovercolor");
                            if (backgroundhovercolor) {
                                jQuery(this).css("background", backgroundhovercolor);
                                jQuery(this).css("transition", str);
                                jQuery(this).removeAttr('onmouseover');
                                jQuery(this).removeAttr('onmouseout');
                            }
                            var borderhovercolor = jQuery(this).attr("borderhovercolor");
                            if (borderhovercolor) {
                                jQuery(this).css("border", "1px solid " + borderhovercolor);
                                jQuery(this).css("transition", str);
                            }
                        },
                        mouseleave: function () {
                            jQuery(this).css("transition", "");
                            var textcolor = jQuery(this).attr("textcolor");
                            if (textcolor) {
                                jQuery(this).find(".iconText").css("color", textcolor);
                            }
                            var iconcolor = jQuery(this).attr("iconcolor");
                            if (iconcolor) {
                                jQuery(this).find("i.glyphicon").css("color", iconcolor);
                            }
                            var backgroundcolor = jQuery(this).attr("backgroundcolor");
                            if (backgroundcolor) {
                                jQuery(this).css("background", backgroundcolor);
                            }
                            var bordercolor = jQuery(this).attr("bordercolor");
                            if (bordercolor) {
                                jQuery(this).css("border-color", bordercolor);
                            }
                        }
                    });
                } else if (this.slider_type_step == 1) {
                    this.onlyshowanimdiv();
                    this.slider_type_step = 2;
                    this.$el.find(".panel-footer .prev,.panel-footer .save").show();
                    this.$el.find(".panel-footer .next").hide();
                }


            } else {
                $this.$el.find('.sliderTextElementPre:eq(0)').click();

            }
        },
        slider_step_prev: function () {
            if (this.slider_type == 1) {
                //文字
                if (this.slider_type_step == 2) {
                    this.$el.find(".panel-footer .next,.panel-footer .prev").show();
                    this.$el.find(".panel-footer .save").hide();
                    this.onlyshowanimdiv();
                    this.slider_type_step = 1;
                } else if (this.slider_type_step == 1) {
                    this.cancetohome();

                }
            } else if (this.slider_type == 2) {
                //图片
                if (this.slider_type_step == 1) {
                    this.cancetohome();
                }
            } else if (this.slider_type == 6) {
                //自定义
                this.cancetohome();
            } else if (this.slider_type == 5) {
                //按钮
                if (this.slider_type_step == 1) {
                    this.cancetohome();
                } else if (this.slider_type_step == 2) {
                    this.$el.find(".bitChlidDiv").hide();
                    this.$el.find(".slideText5Div").show();
                    this.slider_type_step = 1;
                    this.$el.find(".panel-footer .next").show();
                    this.$el.find(".panel-footer .save").hide();
                }
            } else if (this.slider_type == 5) {
                this.$el.find(".panel-footer .next").hide();
                this.$el.find(".panel-footer .save,.panel-footer .prev").show();
            }
        },
        cancetohome: function () {
            this.$el.find(".panel-body >div").hide();
            this.$el.find(".panel-body >div:first").show();
            this.$el.find(".panel-body >div.sliderTextElement").show();
            this.slider_type_step = 0;
            this.$el.find(".panel-footer .save,.panel-footer .prev").hide();
            this.$el.find(".panel-footer .next").show();
        },
        onlyshowanimdiv: function () {
            this.$el.find(".bitChlidDiv").hide();
            this.$el.find(".slideText6Div").show();
        },
        onlyshowbordersdiv: function () {
            this.$el.find(".bitChlidDiv").hide();
            this.$el.find(".slideTextDiv").show();
            this.$el.find(".slideTextDiv >div").hide();
            this.$el.find(".borders_div").show();
        },
        showImageText: function () {
            this.$el.find('.vc_tab.borders').show();
            this.$el.find('.bitFontPosition').hide();
            this.$el.find('.bitFontAnimation').hide();
            this.$el.find('.bitFontImageStyle').show();
            this.$el.find('.vc_tab.anim').hide();
            this.$el.find('.vc_tab.showcontrol').hide();
            this.$el.find('.vc_tab.video').hide();
            this.$el.find('.slideText').click();
            this.$el.find('.panel-title').html("添加内容");
        },
        showSlideText: function () {
            this.$el.find('.bitFontPosition').show();
            this.$el.find('.bitFontAnimation').show();
            this.$el.find('.bitFontImageStyle').hide();
            this.$el.find('.vc_tab.anim').show();
            this.$el.find('.vc_tab.showcontrol').show();
            this.$el.find('.vc_tab.video').show();
            this.$el.find('.panel-title').html("添加内容");
        },
        showSliderSet: function () {
            this.$el.find('.panel-title').html("幻灯片设置");
        },
        showSlideSetting: function () {
            this.$el.find('.panel-title').html("幻灯片设置");
        },
        show: function () {
            if (this.$el.is(':hidden')) vc.closeActivePanel();
            vc.active_panel = this;
            $(window).bind('resize.vcPropertyPanel', this.setSize);
            this.setSize();
            this.$el.show();
            if (!this.draggable) {
                this.$el.draggable({iframeFix: true, handle: '.panel-heading'});
                this.draggable = true;
            }

        },
        stopSlider: function (e) {
            if (this.sliderObj)
                this.sliderObj.revpause();
        },
        changeXY: function (e) {
            var id = 0;
            if (e) {
                this.$el.find(".selected").removeClass("selected");
                $(e.currentTarget).addClass("selected");
                id = $(e.currentTarget).attr("id");
            } else {

                id = this.$el.find(".selected").attr("id");
            }
            var tmp = id.replace("linkalign_", "");
            var tmparr = tmp.split("_");
            var h = tmparr[0];
            var v = tmparr[1];
            if (h == "left") {
                this.$el.find("#layer_left_text").html("水平微调");
            } else {
                this.$el.find("#layer_left_text").html("水平微调");
            }
            if (h == "top") {
                this.$el.find("#layer_top_text").html("垂直微调");
            } else {
                this.$el.find("#layer_top_text").html("垂直微调");
            }
            if (h == "left" && v == "top") {
                this.$el.find("#align_hor").val("left");
                this.$el.find("#align_vert").val("top");
                this.$el.find('#layer_left').val("10");
                this.$el.find('#layer_top').val("10");
            } else if (h == "center" && v == "top") {
                this.$el.find("#align_hor").val("center");
                this.$el.find("#align_vert").val("top");
                this.$el.find('#layer_left').val("0");
                this.$el.find('#layer_top').val("10");
            } else if (h == "right" && v == "top") {
                this.$el.find("#align_hor").val("right");
                this.$el.find("#align_vert").val("top");
                this.$el.find('#layer_left').val("10");
                this.$el.find('#layer_top').val("10");
            } else if (h == "left" && v == "middle") {
                this.$el.find("#align_hor").val("left");
                this.$el.find("#align_vert").val("middle");
                this.$el.find('#layer_left').val("10");
                this.$el.find('#layer_top').val("0");
            } else if (h == "center" && v == "middle") {
                this.$el.find("#align_hor").val("center");
                this.$el.find("#align_vert").val("middle");
                this.$el.find('#layer_left').val("0");
                this.$el.find('#layer_top').val("0");
            } else if (h == "right" && v == "middle") {
                this.$el.find("#align_hor").val("right");
                this.$el.find("#align_vert").val("middle");
                this.$el.find('#layer_left').val("10");
                this.$el.find('#layer_top').val("0");
            } else if (h == "left" && v == "bottom") {
                this.$el.find("#align_hor").val("left");
                this.$el.find("#align_vert").val("bottom");
                this.$el.find('#layer_left').val("10");
                this.$el.find('#layer_top').val("10");
            } else if (h == "center" && v == "bottom") {
                this.$el.find("#align_hor").val("center");
                this.$el.find("#align_vert").val("bottom");
                this.$el.find('#layer_left').val("0");
                this.$el.find('#layer_top').val("10");
            } else if (h == "right" && v == "bottom") {
                this.$el.find("#align_hor").val("right");
                this.$el.find("#align_vert").val("bottom");
                this.$el.find('#layer_left').val("10");
                this.$el.find('#layer_top').val("10");
            }
        },

        save: function (e) {
            //this.sliderId
            ajaxBeforeSave($("#vc-edit-slide-dialog"));

            if (this.flag == "set") {
                var data = {main: {}};
                data.sliderid = this.sliderId;
                data.main.width = iframeWin.jQuery("#bitBanner .rev_slider_wrapper").width();
                data.main.height = this.$el.find("#slide_height").val();
                data.main.mobileheight = this.$el.find("#slide_mobileheight").val();
                data.main.width = this.$el.find("#slide_width").val();
                data.main.slider_type = this.$el.find("#slider_type").val();

                data.main.delay = this.$el.find("#slide_delay").val();
                data.main.lazy_load = this.$el.find("#lazy_load").val();

                data.main.transition_duration = this.$el.find("#slide_speed").val();
                data.main.slide_anima = this.$el.find("#slide_anima").val();

                data.main.background_color = this.$el.find("#background_color").val();
                data.main.background_dotted_overlay = this.$el.find("#background_dotted_overlay").val();
                data.main.navigaion_type = this.$el.find("#navigaion_type").val();
                data.main.thumb_width = this.$el.find("#thumb_width").val();
                data.main.thumb_height = this.$el.find("#thumb_height").val();
                data.main.thumb_amount = this.$el.find("#thumb_amount").val();
                data.main.navigation_arrows = this.$el.find("#navigation_arrows").val();
                data.main.navigation_arrows_style = this.$el.find("#navigation_arrows_style").val();
                data.main.navigation_icon_color = this.$el.find("#navigation_icon_color").val();
                data.main.navigation_icon_hovercolor = this.$el.find("#navigation_icon_hovercolor").val();
                data.main.navigation_icon_opt = this.$el.find("#navigation_icon_opt").val();
                data.main.navigation_bg_color = this.$el.find("#navigation_bg_color").val();
                data.main.navigation_bg_hovercolor = this.$el.find("#navigation_bg_hovercolor").val();
                data.main.navigation_arrows_size = this.$el.find("#navigation_arrows_size").val();

                data.main.navigaion_always_on = this.$el.find("#navigaion_always_on").val();
                data.main.background_loading = this.$el.find("#background_loading").val();
                data.main.background_loading_bg = this.$el.find("#background_loading_bg").val();

                data.main.navigation_arrows_mobile_show = this.$el.find("#navigation_arrows_mobile_show").val();
                data.main.navigation_mobile_show = this.$el.find("#navigation_mobile_show").val();


                data.main.navigaion_align_hor = this.$el.find("#navigaion_align_hor").val();
                data.main.touchenabled = this.$el.find("#touchenabled").val();
                data.main.hide_slider_under = this.$el.find("#hide_slider_under").val();
                data.main.navigation_style = this.$el.find("#navigation_style").val();
                data.main.navigation_style_bordercolor = this.$el.find("#navigation_style_bordercolor").val();
                data.main.navigation_style_innercolor = this.$el.find("#navigation_style_innercolor").val();
                data.main.navigation_style_hoverbordercolor = this.$el.find("#navigation_style_hoverbordercolor").val();
                data.main.navigation_style_hoverinnercolor = this.$el.find("#navigation_style_hoverinnercolor").val();
                data.main.navigation_style_size = this.$el.find("#navigation_style_size").val();
                data.main.navigation_style_marginleft = this.$el.find("#navigation_style_marginleft").val();

                data.main.bit_margintop = this.$el.find("[name='bit_margintop']").val();
                data.main.bit_marginbottom = this.$el.find("[name='bit_marginbottom']").val();
                data.main.bit_paddingleft = this.$el.find("[name='bit_paddingleft']").val();
                data.main.bit_paddingright = this.$el.find("[name='bit_paddingright']").val();
                data.main.bit_paddingtop = this.$el.find("[name='bit_paddingtop']").val();
                data.main.bit_paddingbottom = this.$el.find("[name='bit_paddingbottom']").val();

                data.main.bit_m_setting = this.$el.find("[name='bit_m_setting']").val();
                data.main.bit_margintop_m = this.$el.find("[name='bit_margintop_m']").val();
                data.main.bit_marginbottom_m = this.$el.find("[name='bit_marginbottom_m']").val();
                data.main.bit_paddingleft_m = this.$el.find("[name='bit_paddingleft_m']").val();
                data.main.bit_paddingright_m = this.$el.find("[name='bit_paddingright_m']").val();
                data.main.bit_paddingtop_m = this.$el.find("[name='bit_paddingtop_m']").val();
                data.main.bit_paddingbottom_m = this.$el.find("[name='bit_paddingbottom_m']").val();

                revAjaxRequest("update_slider_sample", data, function () {
                    refreshREvSlider(iframeWin.jQuery("[bitdatalocation=" + data.sliderid + "]"), 0, "set");
                });
                return false;
            } else if (this.flag == "slide_set") {
                var data = {main: {}};
                var sliderid = this.sliderId;
                data.sliderid = this.sliderId;
                data.slideid = this.slideId;
                data.enable_link = this.$el.find("#slide_link").val();
                data.bg_position = this.$el.find("#bg_position").val();
                data.link_type = "regular";
                data.link_open_in = this.$el.find("#slide_link_open").val();
                data.link_pos = this.$el.find("#slide_link_front").val();
                data.pageUrlType = this.$el.find("#pageUrlType").val();
                data.pageUrlSelect = this.$el.find("#pageUrlSelect").val();
                data.pageFileSelect = this.$el.find("#pageFileSelect").val();
                data.pageUrlInput = this.$el.find("#pageUrlInput").val();
                data.link = this.$el.find("#btn-url").val();
                data.btn_linkto = this.$el.find("#btn-linkto").val();
                data.btn_linkto = this.$el.find("#btn-linkto").val();
                data.kenburn_effect = this.$el.find("#kenburn_effect").val();
                data.zoom_end = this.$el.find("#zoom_end").val();

                revAjaxRequest("update_slide_data", data, function () {
                    refreshREvSlider(iframeWin.jQuery("[bitdatalocation=" + sliderid + "]"), 0);
                });
                return false;
            } else if (this.flag == "imageText") {
                //横幅图片新增保存
                ajaxAfterSave();
                //add image text
                var id = this.slideDom.attr("id");

                if (!id) {
                    return false;
                }
                var content = this.$el.find("#slideTextContent").val();
                if (content == "") {
                    jAlert("文字内容不能为空！");
                    return false;
                }
                var textStyle = "";
                var len = iframeWin.jQuery("#" + id + " .bitBanerImageText .tp-caption").length;
                var height = iframeWin.jQuery("#" + id).height();
                var r_x = Math.round(Math.random() * 100);
                var r_y = Math.round(Math.random() * 100);

                if (r_y > height - 80) {
                    r_y = height - 80;
                }
                var maxIndex = len + 2;
                iframeWin.jQuery("#" + id + " .bitBanerImageText .tp-caption").each(function () {
                    if (jQuery(this).attr("bitslidetextindex") >= maxIndex) {
                        maxIndex = jQuery(this).attr("bitslidetextindex");
                        maxIndex = maxIndex * 1 + 1;
                    }

                })
                var border_show = this.$el.find("[name='box_border']").val();
                var borders = getBorderSet(this.$el.find(".set_border_table"));
                var borderCss = "";
                if (border_show == 1) {
                    borderCss = borders_convert(borders);
                } else {
                    borderCss = "border-width: 0;";
                }
                if (vc.frame_window.jQuery("body").width() < 760) {
                    content = '<span style="color:#FFFFFF;font-size: 16px;font-family: 黑体;">' + content + '</span>';
                } else {
                    content = '<span style="color:#FFFFFF;font-size: 40px;font-family: 黑体;">' + content + '</span>';
                }
                if (len == 0) {
                    iframeWin.jQuery("#" + id + " .bitBanerImageText").append('<div dataBordersShow="' + border_show + '" dataBorders="' + borders + '" style="' + borderCss + 'text-decoration: none; z-index: 2;  position: absolute; min-height: 0px; min-width: 0px; white-space: nowrap;  margin: 0px; padding: 5px;  visibility: visible; opacity: 1; top: ' + r_y + 'px; left: ' + r_x + 'px; transform: none; outline: 0px none;" data-endspeed="300"  data-start="500" data-speed="300" data-voffset="0" data-y="center" data-hoffset="0" data-x="center" class="on bit-tp-caption tp-caption ' + textStyle + '" bitslidetextindex="2" dataendanimation="auto" dataanimation="tp-fade" datastyle="' + textStyle + '" dataalignhor="center" dataalignvert="middle" dataleft="10" datatop="10"><div class="slideText" style="min-height: 0px; min-width: 0px; white-space: nowrap; border-width: 0px; margin: 0px; padding: 0px; ">' + content + '</div></div>');
                } else {
                    iframeWin.jQuery("#" + id + " .bitBanerImageText").append('<div dataBordersShow="' + border_show + '" dataBorders="' + borders + '"style="' + borderCss + 'text-decoration: none; z-index: ' + (maxIndex) + ';  position: absolute; min-height: 0px; min-width: 0px; white-space: nowrap; margin: 0px; padding: 5px; visibility: visible; opacity: 1; top: ' + r_y + 'px; left: ' + r_x + 'px; transform: none; outline: 0px none;" data-endspeed="300"  data-start="500" data-speed="300" data-voffset="0" data-y="center" data-hoffset="0" data-x="center" class="on bit-tp-caption tp-caption ' + textStyle + '" bitslidetextindex="' + maxIndex + '" dataendanimation="auto" dataanimation="tp-fade" datastyle="' + textStyle + '" dataalignhor="center" dataalignvert="middle" dataleft="0" datatop="0"><div class="slideText" style="min-height: 0px; min-width: 0px; white-space: nowrap; border-width: 0px; margin: 0px; padding: 0px; ">' + content + '</div></div>');
                }

                var slideTextShadowColor = this.$el.find("#slideTextShadowColor").val();
                if (this.$el.find("#slideTextShadow").val() == 1) {
                    iframeWin.jQuery("#" + id + " .bitBanerImageText .slideText:last").css("text-shadow", "1px 1px 1px " + slideTextShadowColor);
                } else if (this.$el.find("#slideTextShadow").val() == 2) {
                    iframeWin.jQuery("#" + id + " .bitBanerImageText .slideText:last").css("text-shadow", "2px 2px 2px " + slideTextShadowColor);
                } else if (this.$el.find("#slideTextShadow").val() == 4) {
                    iframeWin.jQuery("#" + id + " .bitBanerImageText .slideText:last").css("text-shadow", "4px 4px 4px " + slideTextShadowColor);
                } else {
                    iframeWin.jQuery("#" + id + " .bitBanerImageText .slideText:last").css("text-shadow", "none");
                }
                var bg = this.$el.find("#textBgColor").val();
                var pt = this.$el.find("[name='slidetext_paddingtop']").val();
                var pb = this.$el.find("[name='slidetext_paddingbottom']").val();
                var pl = this.$el.find("[name='slidetext_paddingleft']").val();
                var pr = this.$el.find("[name='slidetext_paddingright']").val();
                iframeWin.jQuery("#" + id + " .bitBanerImageText .slideText:last").parent().css({
                    "background-color": bg,
                    "padding-top": pt + "px",
                    "padding-bottom": pb + "px",
                    "padding-left": pl + "px",
                    "padding-right": pr + "px"
                }).attr("bgcolor", bg).attr("bgcolor_opt", this.$el.find("#bgcolor_opt").val()).attr("data-st", this.$el.find("[name='slidetext_paddingtop']").val()).attr("data-sb", this.$el.find("[name='slidetext_paddingbottom']").val()).attr("data-sl", this.$el.find("[name='slidetext_paddingleft']").val()).attr("data-sr", this.$el.find("[name='slidetext_paddingright']").val());
                if (this.$el.find("#bgcolor_opt").val() < 1) {
                    $this = this;
                    var newtap = iframeWin.jQuery("#" + id + " .bitBanerImageText .slideText:last").parent();
                    setTimeout(function () {
                        var c = newtap.css("background-color");
                        var newcolor = c.replace(')', ', ' + $this.$el.find("#bgcolor_opt").val() + ')');
                        newtap.css("background-color", newcolor);
                    }, 300);

                }
                imageTextInit(id);
                updateImageText(iframeWin.jQuery("#" + id + " .bitBanerImageText .slideText:last"), "imageText", true);
                this.hide(e);
            } else if (this.flag == "singleImageText") {
                //add image text  ====================delete
                var id = this.slideDom.attr("data-model-id");
                if (!id) {
                    return false;
                }
                var content = this.$el.find("#slideTextContent").val();
                if (content == "") {
                    jAlert("文字内容不能为空！");
                    return false;
                }

                var r_x = Math.round(Math.random() * 50) + 50;
                var r_y = Math.round(Math.random() * 100) + 50;


                var textStyle = this.$el.find("#textStyle").val();
                var len = iframeWin.jQuery("[data-model-id='" + id + "'] .singleImageText .tp-caption").length;
                if (len == 0) {
                    iframeWin.jQuery("[data-model-id='" + id + "'] .singleImageText").append('<div style="text-decoration: none; z-index: 2;  position: absolute; min-height: 0px; min-width: 0px; white-space: nowrap; border-width: 0px; margin: 0px; padding: 5px;  visibility: visible; opacity: 1; top: ' + r_x + 'px; left: ' + r_y + 'px; transform: none; outline: 0px none;" data-endspeed="300"  data-start="500" data-speed="300" data-voffset="0" data-y="center" data-hoffset="0" data-x="center" class="bit-tp-caption tp-caption ' + textStyle + '" bitslidetextindex="2" dataendanimation="auto" dataanimation="tp-fade" datastyle="' + textStyle + '" dataalignhor="center" dataalignvert="middle" dataleft="' + r_x + '" datatop="' + r_y + '"><div class="slideText" style="min-height: 0px; min-width: 0px; white-space: nowrap; border-width: 0px; margin: 0px; padding: 0px; ">' + content + '</div></div>');
                } else {
                    var maxIndex = len + 2;
                    iframeWin.jQuery("[data-model-id='" + id + "'] .singleImageText .tp-caption").each(function () {
                        if (jQuery(this).attr("bitslidetextindex") >= maxIndex) {
                            maxIndex = jQuery(this).attr("bitslidetextindex");
                            maxIndex = maxIndex * 1 + 1;
                        }

                    })
                    iframeWin.jQuery("[data-model-id='" + id + "'] .singleImageText").append('<div style="text-decoration: none; z-index: ' + maxIndex + ';  position: absolute; min-height: 0px; min-width: 0px; white-space: nowrap; border-width: 0px; margin: 0px; padding: 5px; visibility: visible; opacity: 1; top:  ' + r_x + 'px; left: ' + r_y + 'px; transform: none; outline: 0px none;" data-endspeed="300"  data-start="500" data-speed="300" data-voffset="0" data-y="center" data-hoffset="0" data-x="center" class="bit-tp-caption tp-caption ' + textStyle + '" bitslidetextindex="' + maxIndex + '" dataendanimation="auto" dataanimation="tp-fade" datastyle="' + textStyle + '" dataalignhor="center" dataalignvert="middle" dataleft="' + r_x + '" datatop="' + r_y + '"><div class="slideText" style="min-height: 0px; min-width: 0px; white-space: nowrap; border-width: 0px; margin: 0px; padding: 0px; ">' + content + '</div></div>');
                }

                singleImageTextInit(id);
                updateImageText(iframeWin.jQuery("[data-model-id='" + id + "'] .singleImageText .slideText:last"), "singleImageText", false);
                this.hide(e);
            } else if (this.flag == "textEdit") {
                //横幅图片修改保存
                ajaxAfterSave();
                //edit image text
                var content = this.$el.find("#slideTextContent").val();
                var textStyle = this.$el.find("#textStyle").val();
                this.slideDom.removeClass("white black small_light_white small_thin_grey boxshadow noshadow excerpt largeblackbg medium_bg_orange modern_big_bluebg large_bg_black large_bold_darkblue largegreenbg");
                this.slideDom.attr("datastyle", textStyle).addClass(textStyle);
                this.slideDom.find(".slideText").html(content);
                var slideTextShadowColor = this.$el.find("#slideTextShadowColor").val();
                if (this.$el.find("#slideTextShadow").val() == 1) {
                    this.slideDom.find('.slideText').css("text-shadow", "1px 1px 1px " + slideTextShadowColor);
                } else if (this.$el.find("#slideTextShadow").val() == 2) {
                    this.slideDom.find('.slideText').css("text-shadow", "2px 2px 2px " + slideTextShadowColor);
                } else if (this.$el.find("#slideTextShadow").val() == 4) {
                    this.slideDom.find('.slideText').css("text-shadow", "4px 4px 4px " + slideTextShadowColor);
                } else {
                    this.slideDom.find('.slideText').css("text-shadow", "none");
                }
                var border_show = this.$el.find("[name='box_border']").val();
                var borders = getBorderSet(this.$el.find(".set_border_table"));
                this.slideDom.attr("dataBordersShow", border_show);
                this.slideDom.attr("dataBorders", borders);
                var borderCss = "";
                if (border_show == 1) {
                    borders_convert(borders, this.slideDom);
                } else {
                    this.slideDom.css("border", "none");
                }
                var bg = this.$el.find("#textBgColor").val();
                var pt = this.$el.find("[name='slidetext_paddingtop']").val();
                var pb = this.$el.find("[name='slidetext_paddingbottom']").val();
                var pl = this.$el.find("[name='slidetext_paddingleft']").val();
                var pr = this.$el.find("[name='slidetext_paddingright']").val();
                this.slideDom.css({
                    "background-color": bg,
                    "padding-top": pt + "px",
                    "padding-bottom": pb + "px",
                    "padding-left": pl + "px",
                    "padding-right": pr + "px"
                }).attr("bgcolor", bg).attr("bgcolor_opt", this.$el.find("#bgcolor_opt").val()).attr("data-st", this.$el.find("[name='slidetext_paddingtop']").val()).attr("data-sb", this.$el.find("[name='slidetext_paddingbottom']").val()).attr("data-sl", this.$el.find("[name='slidetext_paddingleft']").val()).attr("data-sr", this.$el.find("[name='slidetext_paddingright']").val());

                if (this.$el.find("#bgcolor_opt").val() < 1) {
                    $this = this;
                    setTimeout(function () {
                        var c = $this.slideDom.css("background-color");
                        var newcolor = c.replace(')', ', ' + $this.$el.find("#bgcolor_opt").val() + ')');
                        $this.slideDom.css("background-color", newcolor);
                    }, 300);

                }
                updateImageText(this.slideDom.find(".slideText"), "imageText", false);
                this.hide(e);
                //...
            } else if (this.flag == "add text") {
                //幻灯片 文本新增

                var content = $.trim(this.$el.find('#slideTextContent').val());
                var slideTextShadow = this.$el.find('#slideTextShadow').val();
                var slideTextShadowColor = this.$el.find('#slideTextShadowColor').val();

                var left = this.$el.find('#layer_left').val();
                var top = this.$el.find('#layer_top').val();
                if (left < 100 && top < 30 && this.$el.find("#align_hor").val() == "left" && this.$el.find("#align_vert").val() == "top") {
                    top = 30;
                }
                var layer_endanimation = this.$el.find("#layer_endanimation").val();
                if (layer_endanimation == "") {
                    var endTime = 0;
                } else {
                    var endTime = this.$el.find("#endTime").val();
                }
                var border_show = this.$el.find("[name='box_border']").val();
                var borders = getBorderSet(this.$el.find(".set_border_table"));
                var textBgColor = this.$el.find('#textBgColor').val();
                if (textBgColor == "") textBgColor = "transparent";

                var type = this.$el.find("[name='type']").val();
                var video_data = {};
                video_data.urlPoster = this.$el.find("[name='html5_url_poster']").val();
                video_data.urlMp4 = this.$el.find("[name='html5_url_mp4']").val();
                video_data.urlWebm = this.$el.find("[name='html5_url_webm']").val();
                video_data.width = this.$el.find("#input_video_width").val();
                video_data.height = this.$el.find("#input_video_height").val();
                video_data.autoplay = this.$el.find("#input_video_autoplay").prop("checked");
                video_data.autoplayonlyfirsttime = this.$el.find("#input_video_autoplay_first_time").prop("checked");
                video_data.nextslide = this.$el.find("#input_video_nextslide").prop("checked");
                video_data.forcerewind = this.$el.find("#input_video_force_rewind").prop("checked");
                video_data.fullwidth = this.$el.find("[name='input_video_fullwidth']").prop("checked");
                video_data.videoloop = this.$el.find("#input_video_loop").prop("checked");
                video_data.controls = this.$el.find("#input_video_control").prop("checked");
                video_data.mute = this.$el.find("#input_video_mute").prop("checked");
                video_data.cover = this.$el.find("#input_video_cover").prop("checked");
                video_data.dotted = this.$el.find("#input_video_dotted_overlay").val();
                video_data.ratio = this.$el.find("#input_video_ratio").val();


                var layers = {
                    "text": content,
                    "slideTextShadow": slideTextShadow,
                    "slideTextShadowColor": slideTextShadowColor,
                    "type": type,
                    "video_type": "html5",
                    "video_data": video_data,
                    "html5_url_mp4_from": this.$el.find("[name='html5_url_mp4_from']").val(),
                    "html5_url_mp4_local": this.$el.find("[name='html5_url_mp4_local']").val(),
                    "html5_url_webm_from": this.$el.find("[name='html5_url_webm_from']").val(),
                    "html5_url_webm_local": this.$el.find("[name='html5_url_webm_local']").val(),
                    "textBgColor": textBgColor,
                    "bgcolor_opt": this.$el.find('#bgcolor_opt').val(),
                    "left": left,
                    "top": top,
                    "animation": this.$el.find("#layer_animation").val(),
                    "easing": "Power3.easeInOut",
                    "speed": this.$el.find("#startSpeed").val(),
                    "time": this.$el.find("#time").val(),
                    "endanimation": layer_endanimation,
                    "endeasing": "nothing",
                    "endspeed": this.$el.find("#endSpeed").val(),
                    "endtime": endTime,
                    "align_hor": this.$el.find("#align_hor").val(),
                    "align_vert": this.$el.find("#align_vert").val(),
                    "hiddenunder": "",
                    "resizeme": this.$el.find("#layer_resizeme").val() == "" ? true : false,
                    "link": "",
                    "link_open_in": "same",
                    "link_slide": "nothing",
                    "scrollunder_offset": "",
                    "style": '',
                    "endeasing": "nothing",
                    "corner_left": "nothing",
                    "corner_right": "nothing",
                    "width": -1,
                    "height": -1,
                    "serial": "0",
                    "order": 0,
                    "borders": borders,
                    "border_show": border_show,
                    "slidetext_paddingtop": this.$el.find("[name='slidetext_paddingtop']").val(),
                    "slidetext_paddingbottom": this.$el.find("[name='slidetext_paddingbottom']").val(),
                    "slidetext_paddingleft": this.$el.find("[name='slidetext_paddingleft']").val(),
                    "slidetext_paddingright": this.$el.find("[name='slidetext_paddingright']").val(),
                    "device_show": this.$el.find("#showcontrol_device").val()
                };
                var data = {slideid: this.slideId, sliderID: this.sliderId, bitAction: "add", layers: layers};

                revAjaxRequest("update_slide_sample", data, function () {
                    refreshREvSlider(iframeWin.jQuery("[bitdatalocation=" + data.sliderID + "]"), data.slideid);
                });
            } else if (this.flag == "text" || this.flag == "text2") {
                //幻灯片的文字保存
                if (!this.slideDom) return false;
                var textIndex = this.slideDom.attr("bitslidetextindex") * 1;
                var content = $.trim(this.$el.find('#slideTextContent').val());
                var slideTextShadow = this.$el.find('#slideTextShadow').val();
                var slideTextShadowColor = this.$el.find('#slideTextShadowColor').val();
                var left = this.$el.find('#layer_left').val();
                var top = this.$el.find('#layer_top').val();
                if (left < 100 && top < 30 && this.$el.find("#align_hor").val() == "left" && this.$el.find("#align_vert").val() == "top") {
                    top = 30;
                }
                var layer_endanimation = this.$el.find("#layer_endanimation").val();
                if (layer_endanimation == "") {
                    var endTime = 0;
                } else {
                    var endTime = this.$el.find("#endTime").val();
                }
                var border_show = this.$el.find("[name='box_border']").val();
                var borders = getBorderSet(this.$el.find(".set_border_table"));

                this.$el.find("[name='slidetext_paddingtop']").val();
                this.$el.find("[name='slidetext_paddingbottom']").val();
                this.$el.find("[name='slidetext_paddingleft']").val();
                this.$el.find("[name='slidetext_paddingright']").val();

                var type = this.$el.find("[name='type']").val();
                var video_data = {};
                video_data.urlPoster = this.$el.find("[name='html5_url_poster']").val();
                video_data.urlMp4 = this.$el.find("[name='html5_url_mp4']").val();
                video_data.urlWebm = this.$el.find("[name='html5_url_webm']").val();
                video_data.width = this.$el.find("#input_video_width").val();
                video_data.height = this.$el.find("#input_video_height").val();
                video_data.autoplay = this.$el.find("#input_video_autoplay").prop("checked");
                video_data.autoplayonlyfirsttime = this.$el.find("#input_video_autoplay_first_time").prop("checked");
                video_data.nextslide = this.$el.find("#input_video_nextslide").prop("checked");
                video_data.forcerewind = this.$el.find("#input_video_force_rewind").prop("checked");
                video_data.fullwidth = this.$el.find("[name='input_video_fullwidth']").prop("checked");
                video_data.videoloop = this.$el.find("#input_video_loop").prop("checked");
                video_data.controls = this.$el.find("#input_video_control").prop("checked");
                video_data.mute = this.$el.find("#input_video_mute").prop("checked");
                video_data.cover = this.$el.find("#input_video_cover").prop("checked");
                video_data.dotted = this.$el.find("#input_video_dotted_overlay").val();
                video_data.ratio = this.$el.find("#input_video_ratio").val();

                var layers = {
                    "text": content,
                    "slideTextShadow": slideTextShadow,
                    "slideTextShadowColor": slideTextShadowColor,
                    "textBgColor": this.$el.find("#textBgColor").val(),
                    "bgcolor_opt": this.$el.find('#bgcolor_opt').val(),
                    "type": type,
                    "video_type": "html5",
                    "video_data": video_data,
                    "html5_url_mp4_from": this.$el.find("[name='html5_url_mp4_from']").val(),
                    "html5_url_mp4_local": this.$el.find("[name='html5_url_mp4_local']").val(),
                    "html5_url_webm_from": this.$el.find("[name='html5_url_webm_from']").val(),
                    "html5_url_webm_local": this.$el.find("[name='html5_url_webm_local']").val(),
                    "left": left,
                    "top": top,
                    "animation": this.$el.find("#layer_animation").val(),
                    "easing": "Power3.easeInOut",
                    "speed": this.$el.find("#startSpeed").val(),
                    "align_hor": this.$el.find("#align_hor").val(),
                    "align_vert": this.$el.find("#align_vert").val(),
                    "hiddenunder": "",
                    "resizeme": this.$el.find("#layer_resizeme").val() == "" ? true : false,
                    "link": "",
                    "link_open_in": "same",
                    "link_slide": "nothing",
                    "scrollunder_offset": "",
                    "style": this.$el.find("#textStyle").val(),
                    "time": this.$el.find("#time").val(),
                    "endspeed": this.$el.find("#endSpeed").val(),
                    "endtime": endTime,
                    "endanimation": layer_endanimation,
                    "endeasing": "nothing",
                    "corner_left": "nothing",
                    "corner_right": "nothing",
                    "width": -1,
                    "height": -1,
                    "serial": "0",
                    "order": 0,
                    "borders": borders,
                    "border_show": border_show,
                    "slidetext_paddingtop": this.$el.find("[name='slidetext_paddingtop']").val(),
                    "slidetext_paddingbottom": this.$el.find("[name='slidetext_paddingbottom']").val(),
                    "slidetext_paddingleft": this.$el.find("[name='slidetext_paddingleft']").val(),
                    "slidetext_paddingright": this.$el.find("[name='slidetext_paddingright']").val(),
                    "device_show": this.$el.find("#showcontrol_device").val()
                };
                var data = {
                    slideid: this.slideId,
                    sliderID: this.sliderId,
                    bitAction: "edit",
                    textIndex: textIndex,
                    layers: layers
                };
                revAjaxRequest("update_slide_sample", data, function () {
                    refreshREvSlider(iframeWin.jQuery("[bitdatalocation=" + data.sliderID + "]"), data.slideid);
                });
            }
        },
        hide: function (e) {
            e && e.preventDefault();
            vc.active_panel = false;
            $(window).unbind('resize.vcPropertyPanel');
            this.$el.hide();
            if (this.sliderObj)
                this.sliderObj.revresume();
        },
        _killEditor: function () {
            if (!_.isUndefined(window.tinyMCE)) {
                $('textarea.textarea_html', this.$el).each(function () {
                    var id = $(this).attr('id');
                    window.tinyMCE.execCommand("mceRemoveControl", true, id);
                });
            }
        }
    });
    vc.EditIconBlockView = vc.PanelView.extend({
        el: $('#vc-edit-icon-dialog'),
        $content: false,
        draggable: false,
        events: {
            'click [data-save=true]': 'save',
            'click [data-dismiss=panel]': 'hide',
        },
        initialize: function () {
            _.bindAll(this, 'setSize');
        },
        setSize: function () {
            var height = $(window).height() - 190;
            this.$content.css('maxHeight', height);

        },
        render: function () {
            this.$el.find('.vc-color-control').qfColorPicker();
            this.$content = this.$el.find('.vc-properties-list');
            this.show();
            this.$content.scrollTop(0);

            return this;
        },
        save: function () {
            //
        },
        show: function () {
            if (this.$el.is(':hidden')) vc.closeActivePanel();
            vc.active_panel = this;
            $(window).bind('resize.vcPropertyPanel', this.setSize);
            this.setSize();
            this.$el.show();
            if (!this.draggable) {
                this.$el.draggable({iframeFix: true, handle: '.panel-heading'});
                this.draggable = true;
            }
        },
        hide: function (e) {
            e && e.preventDefault();
            vc.active_panel = false;
            $(window).unbind('resize.vcPropertyPanel');
            this.$el.hide();
        }
    });
    /*
**********************************************************
/
  /**
   * Shortcode settings panel
   * @type {*}
   */

    vc.EditElementPanelView = vc.PanelView.extend({
        el: $('#vc-properties-panel'),
        $content: false,
        shortcodename: false,
        dependent_elements: {},
        mapped_params: {},
        isfirst: true,
        draggable: false,
        ischangeselect: false,
        events: {
            'click .bithelper': 'bit_video_helper',
            'click .icon_list_add': 'icon_list_add',
            'click .iconlist-icon-remove': 'iconlist_icon_remove',
            'click .iconlist-icon-set': 'iconlist_icon_set',
            'change .qfy_vc_row  [name="overlay_opacity"],.qfy_vc_row_inner  [name="overlay_opacity"],.qfy_vc_row_embad  [name="overlay_opacity"]': 'extend_change',
            'change .qfy_vc_row  [name="background_is_extend"],.qfy_vc_row_inner  [name="background_is_extend"],.qfy_vc_row_embad  [name="background_is_extend"]': 'extend_change_select',
            'click [data-save=true]': 'savePage',
            'click [data-save=preview]': 'previewElement',
            'click .linkalign': 'changeXYZ',
            'click .linkalign2': 'changeXYZ2',
            'click [data-save=copyparam]': 'copyparamtosub',
            'click [data-copystyle=true]': 'copystyle',
            'click .icon-remove-map': 'removemapitem',
            'click .getCurrentPerheight': 'getCurrentPerheight',
            'click .set_defaultcolor': 'set_defaultcolor',
            'click .set_updatenoticepage': 'set_updatenoticepage',
            'click .checkget_kbg': 'checkget_kbg',
            'click .getCurrentimagePerheight': 'getCurrentimagePerheight',
            // 'click .add_mapobjects': 'add_mapobjects',
            'click .mapitem': 'mapitem',
            'click .checkthistheme': 'checkthistheme',
            'click .gallery_widget_add_objects': 'add_slidercontent_object',
            'click .gallery_widget_attached_images_list .toiconleft': 'toiconleft',
            'click .gallery_widget_attached_images_list .toiconcopy': 'toiconcopy',
            'click .gallery_widget_attached_images_list .toiconright': 'toiconright',
            'click .gallery_widget_attached_images_list li.added': 'toiconview',
            'click [data-save=trueAndClose]': 'savePageAndClose',
            'change [name=background_image]': 'change_background_image',
            'click [data-dismiss=panel]': 'hide',
            'click .getDemoHtml': 'getDemoHtml',
            'change .useSameSettingchange': 'changeBorderSetting',
            'change .useSameSetting': 'changeBorderSetting',
            'mouseover [data-transparent=panel]': 'addOpacity',
            'mouseout [data-transparent=panel]': 'removeOpacity',
            /*'change .qfe-select':'changeItem',
      'blur .qfe-textinput':'changeItem',*/
            'click .bit-change-type': 'changetype',
        },

        copystyle: function (e) {
            var tag = this.model.get('shortcode');
            if (this.$content.find("[name='mobile_layout']").length > 0 && (tag == "vc_posts_grid" || tag == "advanced_list" || tag == "products_list")) {
                vc.add_element_block_view2.render(this.model, "list_mobile_element");
            } else {
                vc.add_element_block_view2.render(this.model);
            }

        },
        checkget_kbg:function(e){
            var host = document.location.host;
            var $this = this;
            jQuery.post("http://sys.fastmyna.com/PublicAPI/checkwebsite", {
                domain:host
            }, function (result) {
                var rlt = $.parseJSON(result);
                if(rlt){
                    if(rlt.code=="0"){
                        $this.$el.find('[name="code"]').val(rlt.msg);
                    }else{
                        top.jAlert(rlt.msg);
                    }
                }
            });
        },
        extend_change_select: function (e) {
            var v = $(e.currentTarget).val();
            if (v == 0) {
                top.ischangeselecting = true;
                var next = $(e.currentTarget).next(".background_extends");
                this.$el.find('[name="color"]').val(next.attr("data-color")).change();
                this.$el.find('[name="overlay_colour"]').val(next.attr("data-bgcolor")).change();
                this.$el.find('[name="overlay_opacity"]').parent().find(".ui-slider-handle").css("left", next.attr("data-bgopacity") + "%");
                this.$el.find('[name="overlay_opacity"]').val(next.attr("data-bgopacity") / 100);
                setTimeout(function () {
                    top.ischangeselecting = false;
                }, 1000);
            }
        },
        extend_change: function (e) {
            if (!top.ischangeselecting) {
                this.$el.find('[name="background_is_extend"]').val(1);
            }
        },
        set_defaultcolor: function (e) {
            top.jQuery(".content_settings").click();
        },
        set_updatenoticepage: function (e) {
            e.stopPropagation();
            e.preventDefault();
            if (this.model ){
                this.model.view.$el.mouseenter();
                if(this.model.view.$el.find(".control-btn-go-edit").length > 0){
                    this.model.view.$el.find(".control-btn-go-edit").click();
                }
            }
        },
        changeXYZ: function (e) {
            var id = 0;
            if (e) {
                this.$el.find(".selected").removeClass("selected");
                $(e.currentTarget).addClass("selected");
                id = $(e.currentTarget).attr("id");
                var tmp = id.replace("linkalign_", "");
                var tmparr = tmp.split("_");
                var h = tmparr[0];
                var v = tmparr[1];
                var p = $(e.currentTarget).closest(".edit_form_line");
                p.find("input").val(h + " " + v);
                top.vc_element_loading_preview();
            }
        },
        changeXYZ2: function (e) {
            var id = 0;
            var p = this.$el.find(".qfe_el_type_position2");
            if (p.length > 0) {
                var panel = p.parent();
                if (e) {
                    p.find(".selected").removeClass("selected");
                    var id = $(e.currentTarget).attr("data-val");
                    $(e.currentTarget).addClass("selected");
                } else {
                    var id = p.find(".selected").attr("data-val");
                }

                p.find("input").val(id);
                var p1 = panel.find("[name='screenpadding']").closest(".vc-column");

                var p2 = panel.find("[name='screenx']").closest(".vc-column");
                var p3 = panel.find("[name='screeny']").closest(".vc-column");
                if (id > 0 && id < 5) {
                    p1.show();
                    p2.hide();
                    p3.hide();
                } else if (id >= 5) {
                    p1.hide();
                    p2.show();
                    p3.show();
                } else {
                    p1.hide();
                    p2.hide();
                    p3.hide()
                }
                //预览变化
                top.vc_element_loading_preview();
            }
        },
        iconlist_icon_remove: function (e) {
            var target = $(e.currentTarget);
            var li = target.closest("li");
            var p = li.closest(".edit_form_line");
            li.remove();
            if (p.find('.icons_list').length > 0) {
                var $field = p.find('.gallery_icons_list_container li');
                var values = [];
                $field.each(function () {
                    values.push(jQuery(this).find("input").val());
                });
                value = values.join("|^^|");
                p.find('.icons_list').val(value).trigger('change');
            }
        },
        iconlist_icon_set: function (e) {
            var target = $(e.currentTarget);
            var curr = target.closest("li");
            var p = target.closest(".edit_form_line");
            var orgvalue = curr.find("input").val();
            if (top.jQuery(".boxy-wrapper:visible [name='icon_link']").length > 0) return;
            var str = "<div style='height:180px;' ><table border='0' cellspacing='5' cellpadding='5' ><tr><td><label>链接地址：</label></td><td><input type='text' name='icon_link'  placeholder='http://' style='border:1px solid #ccc;width:300px;' /></td></tr><tr><td><label>悬浮文字：</label></td><td><input type='text' name='icon_hovertext' style='border:1px solid #ccc;width:300px;' /></td></tr><tr><td><label>悬浮图片：</label></td><td><input type='hidden' name='icon_hoverimg' class='upload' /></div><input type='hidden' name='icon_hoverimgid' class='upload-id' /><ul style='list-style: outside none none;float:left;padding:0;margin:0;'><li class='screenshot iconlist-icon-remove' style='position:relative;float:left;'></li><li style='float:left;'><a class='gallery_widget_add_image' style='cursor:pointer;position: relative; background: rgb(245, 245, 245) url(//fast.qifeiye.com/qfy-content/plugins/qfy_editor/inline/assets/vc/add.png) no-repeat scroll center center; top: 28px; padding: 27px 36px;'></a></li></ul></td></tr></div>";
            top.jConfirmOneButton2(str, function () {
                var top_p = top.jQuery(".boxy-wrapper");
                var v1 = top_p.find("[name='icon_link']").val();
                var v2 = top_p.find(".upload-id").val();
                var v3 = top_p.find(".upload").val();
                var v4 = top_p.find("[name='icon_hovertext']").val();
                if (v4) v4 = base64_encode(v4);
                curr.find("input").val(curr.attr("data-icon") + "|~|" + v1 + "|~|" + v2 + "|~|" + v3 + "|~|" + v4);
                var values = [];
                p.find("li").each(function () {
                    values.push(jQuery(this).find("input").val());
                });
                value = values.join("|^^|");
                p.find("input.icons_list").val(value).trigger('change');
            }, "设置你的ICON");
            if (orgvalue) {
                var tmp = orgvalue.split('|~|');
                top.jQuery(".boxy-wrapper:visible [name='icon_link']").val(tmp[1] ? tmp[1] : "");
                top.jQuery(".boxy-wrapper:visible .upload-id").val(tmp[2] ? tmp[2] : "");
                top.jQuery(".boxy-wrapper:visible .upload").val(tmp[3] ? tmp[3] : "");
                if (tmp[2] && tmp[3] && tmp[2] > 0) {
                    top.jQuery('.boxy-wrapper:visible .screenshot').empty().hide().append('<img src="' + tmp[3] + '" style="width:72px;height:72px;"><a class="icon_image_remove" style="cursor:pointer;background: #f5f5f5 url(//fast.qifeiye.com/qfy-content/plugins/qfy_editor/inline/assets/vc/remove.png) no-repeat scroll center center;display: block;height: 13px;position: absolute; right: 10px;top: 0;width: 13px;"></a><span style="margin-right:10px;"></span>').slideDown('fast');
                    top.jQuery(".boxy-wrapper .icon_image_remove").click(function () {
                        var selector = $(this).closest('td');
                        selector.find('.upload').val('');
                        selector.find('.screenshot').slideUp();
                        selector.find('.icon_image_remove').unbind();
                        selector.find('.upload-id').val(0);
                    });
                }
                top.jQuery(".boxy-wrapper:visible [name='icon_hovertext']").val(tmp[4] ? base64_decode(tmp[4]) : "");
            }

            var $this = this;

            top.jQuery(".boxy-wrapper:visible .gallery_widget_add_image").click(function () {
                var obj = top.jQuery(".boxy-wrapper:visible");
                obj.hide();
                var selector = $(this).closest('td');
                openNewImageDialog('选择图片', function (url, id) {
                    obj.show();
                    if (!url) return false;

                    selector.find('.upload').val(url);
                    selector.find('.upload-id').val(id);
                    selector.find('.screenshot').empty().hide().append('<img src="' + url + '" style="width:72px;height:72px;"><a class="icon_image_remove" style="cursor:pointer;background: #f5f5f5 url(//fast.qifeiye.com/qfy-content/plugins/qfy_editor/inline/assets/vc/remove.png) no-repeat scroll center center;display: block;height: 13px;position: absolute; right: 10px;top: 0;width: 13px;"></a><span style="margin-right:10px;"></span>').slideDown('fast');

                    $('.icon_image_remove', selector).click(function () {
                        var selector = $(this).closest('td');
                        selector.find('.upload').val('');
                        selector.find('.screenshot').slideUp();
                        selector.find('.icon_image_remove').unbind();
                        selector.find('.upload-id').val(0);
                    });
                }, false)


            })


        },

        icon_list_add: function (e) {
            if (this.model) {
                var shortcode = this.model.get('shortcode');
            } else {
                var shortcode = this.shortcodename;
            }


            var target = $(e.currentTarget);
            var p = target.closest(".edit_form_line");
            if (top.jQuery(".boxy-wrapper:visible .qfy-icon_32x32").length > 0) {
                top.jQuery(".boxy-wrapper:visible .qfy-icon_32x32").closest(".boxy-wrapper").remove();
            }

            var str = '<ul style="list-style: outside none none;margin-left:-20px;height:200px;">';
            if (shortcode == "vc_socail_icons_list") {
                var iconlist = new Array("weixin", "weibo", "qq", "baidu", "facebook", "video", "linkedin", "fr", "twitter", "twitter1", "google", "webchat", "pinterest", "v", "youtube", "skype", "tudou", "renren", "q1", "q2", "email", "phone1", "phone2");
                for (var i = 0; i < iconlist.length; i++) {
                    str += '<li data-icon="' + iconlist[i] + '" style="float:left;margin-right:15px;margin-bottom:15px;cursor:pointer;" class="qfy-icon_32x32 ' + iconlist[i] + '-icon_32x32"></li>';
                }
            } else if (shortcode == "vc_flag_list") {
                var iconlist2 = new Array("china", "us", "germany", "RUS", "canada", "english", "japan", "au", "india", "brazil", "korea", "arabia", "french", "italy", "turkey", "argentina", "mexico", "southAfrica", "indonesia", "european");
                for (var i = 0; i < iconlist2.length; i++) {
                    str += '<li data-icon="' + iconlist2[i] + '" style="float:left;margin-right:15px;margin-bottom:15px;cursor:pointer;" class="qfy-icon_32x32 ' + iconlist2[i] + '-icon_32x32"></li>';
                }
            }
            str += '</ul>';
            top.jInfo(str, "选择你的ICON");

            top.jQuery(".boxy-wrapper:visible .buttonClass0").attr("value", "关闭");
            var $this = this;
            top.jQuery(".boxy-wrapper:visible .question li").click(function () {
                var icon = jQuery(this).attr("data-icon");
                if (icon) {
                    p.find('.gallery_icons_list').append('<li data-icon="' + icon + '"  style="float:left;margin-right:5px;position:relative;width: 72px;height:72px;text-align: center;background:#F5F5F5;"><input type="hidden" value="' + icon + '" /><span style="margin-top:5px;margin-bottom:5px;" class="qfy-icon_32x32 ' + icon + '-icon_32x32" ></span><br/><span class="iconlist-icon-set" style="font-size:12px;border:1px solid #3276B1;padding:2px 2px;color:#3276b1;cursor:pointer" >悬浮设置</span><a href="#" class="iconlist-icon-remove"></a></li>');
                }
                if (p.find('.icons_list').length > 0) {
                    var $field = p.find('.gallery_icons_list_container li');
                    var values = [];
                    $field.each(function () {
                        values.push(jQuery(this).find("input").val());
                    });
                    value = values.join("|^^|");
                    p.find('.icons_list').val(value).trigger('change');
                }

            });

        },
        getCurrentimagePerheight: function (e) {
            var view = this.model.view.$el;
            var $this = this;
            var backgroundimage = view.find(">.qfy-column-inner>.column_inner>.background-media,>.section>.background-media").css("background-image");
            if (backgroundimage) {
                backgroundimage = backgroundimage.replace('url("', '').replace('")', '');
                backgroundimage = backgroundimage.replace("url('", '').replace("')", '');
                backgroundimage = backgroundimage.replace('url(', '').replace(')', '');
                if (backgroundimage.indexOf("http://") > -1) {
                    var tmpImg = new Image();
                    tmpImg.src = backgroundimage; //or  document.images[i].src;
                    jQuery(tmpImg).on('load', function () {
                        $this.$el.find('[name="perheight"]').val((tmpImg.height / tmpImg.width).toFixed(2));
                    });
                }
            } else {
                jAlert("当前没有设置背景图片");
            }
        },
        getCurrentPerheight: function (e) {
            if (!this.model) {
                return false;
            }
            var v1 = this.$el.find('[name="paddingtop"]').val();
            var v2 = this.$el.find('[name="paddingbottom"]').val();
            if ((v1 && v1 > 0) || (v2 && v2 > 0)) {
                alert("区块有上下内边距，使用比例高度会变形");
            }

            var model = this.model;
            var shortcode = model.get('shortcode');
            var view = this.model.view.$el;
            if (shortcode == "vc_row") {
                var v = view.find(">.section");
            } else if (shortcode == "vc_column") {
                var v = view.find(">div");
            }
            var w = v.width();
            var h = v.height();
            if (w > 0 && h > 0) {
                this.$el.find('[name="perheight"]').val((h / w).toFixed(2));
            }
        },
        mapitem: function (e) {
            var target = $(e.currentTarget);
            var p = target.closest(".mapobjects_inner");
            p.find(".mapitem").removeClass("active");
            target.addClass("active");
        },
        removemapitem: function (e) {
            var target = $(e.currentTarget);
            var p = target.closest(".mapobjects_inner");
            var item = target.closest(".mapitem");
            if (p.find(".mapitem").length > 1) {
                item.remove();
            } else if (p.find(".mapitem").length == 1) {
                item.find("input").val("");

            }
        },
        toiconview: function (e) {
            var target = $(e.currentTarget);
            var index = target.index();
            var id = target.attr("modelid")
            var slider = vc.frame_window.jQuery('[data-model-id="' + id + '"]').closest(".royalSlider_gallery_new").data('royalSlider');
            var current = vc.frame_window.jQuery('[data-model-id="' + id + '"]').closest(".rsSlide");
            if (current.length > 0) {
                index = current.index();
            }
            if (slider) {
                slider.goTo(index);
            }
        },
        toiconleft: function (e) {
            var target = $(e.currentTarget);
            var p = target.closest("li.added");
            if (p.index() > 0) {
                var pre = p.prev();
                p.insertBefore(pre);
                top.vc_element_loading_preview();
            }
        },
        toiconright: function (e) {
            var target = $(e.currentTarget);
            var p = target.closest("li.added");
            if (p.next()) {
                var next = p.next();
                p.insertAfter(next);
                top.vc_element_loading_preview();
            }
        },
        toiconcopy: function (e) {
            var target = $(e.currentTarget);
            var p = target.closest("li.added");
            if (p.siblings().length > 14) {
                alert("超过个数限制，无法再复制区域！")
                return;
            }
            var clone = p.clone();
            if (p.attr("modelid")) {
                var cloone_modelid = p.attr("modelid");
            } else if (p.attr("clone-modelid")) {
                var cloone_modelid = p.attr("clone-modelid");
            }
            if (cloone_modelid) {
                clone.attr("modelid", "").attr("clone-modelid", cloone_modelid).find(".text input").val("复制");
                clone.insertAfter(p);
            }
            top.vc_element_loading_preview();
        },
        add_slidercontent_object: function (e) {
            this.savePage(e);
            ajaxAfterSave();
            vc.add_element_block_view1.render(this.model, false);
        },
        change_background_image: function () {
            var background_image = this.$el.find('[name=background_image]').val();
            var background_is_extend = this.$el.find('[name=background_is_extend]').val();
            if (background_image != "" && background_is_extend == 0) {
                this.$el.find('[name=background_is_extend]').val("1");
                this.$el.find('[name=overlay_opacity]').val("0").blur();
            }
        },
        change_background_video: function () {
            var background_image = this.$el.find('[name=background_video_on]').val();
            var background_is_extend = this.$el.find('[name=background_is_extend]').val();
            if (background_image == "on" && background_is_extend == 0) {
                this.$el.find('[name=background_is_extend]').val("1");
                this.$el.find('[name=overlay_opacity]').val("0").blur();
            }
        },
        checkthistheme: function (e) {
            if (!this.model) {
                return false;
            }
            var model = this.model;
            var model_params = model.get('params');
            var view = this.$el;
            var obj = $(e.currentTarget);
            var id = jQuery(obj).attr("data-key");
            var content = jQuery(obj).attr("data-content");
            var p = jQuery(obj).closest(".edit_form_line");
            p.find("input.qfe_vc_param_value").val(id);
            var real_v = base64_decode(content);
            var new_data = vc.ShortcodesBuilder.parse({}, real_v);
            var tag = 0;
            _.each(new_data, function (object) {
                var params = object.params;
                for (var p in params) {
                    if (p == "d_t" && tag == 0) {
                        tag = params[p];
                    }
                    if (p != "id" && p != "qfyuuid") {
                        model_params[p] = params[p];
                    }
                }

            });
            model.save({params: model_params});
            vc.edit_element_block_view.render(model, false, false, tag);
            //update
            vc.ShortcodesBuilder.update(model);
            vc.ShortcodesBuilder.save();

        },
        initialize: function () {
            _.bindAll(this, 'setSize');

        },
        setSize: function () {
            var height = $(window).height() - 190;
            this.$content.css('maxHeight', height);
        },
        changeItem: function (e) {
            this.save();
        },
        getQueryString: function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return encodeURIComponent(r[2]);
            return null;
        },

        changeBorderSetting: function (e) {
            //1.text ,row 2.frame
            var master = $(e.currentTarget);
            var widgetBorderDiv = master.closest(".set_border_table");
            var p1 = master.parents(".set_header_border_div");
            var p2 = master.parents(".set_content_border_div");
            if (p1.length == 1) {
                widgetBorderDiv = p1.find(".set_border_table");
            } else if (p2.length == 1) {
                widgetBorderDiv = p2.find(".set_border_table");
            }

            if (widgetBorderDiv.length == 0) return false;
            var arrayObj = new Array();
            arrayObj[0] = widgetBorderDiv.find("[name='useSameSetting']").attr("checked") == "checked" ? 1 : 0;
            if (arrayObj[0] == 0) return false;
            arrayObj[1] = widgetBorderDiv.find("[name='set_border_top_size']").val();
            arrayObj[2] = widgetBorderDiv.find("[name='set_border_top_color']").val();
            arrayObj[3] = widgetBorderDiv.find("[name='set_border_top_line']").val();
            arrayObj[4] = widgetBorderDiv.find("[name='set_border_bottom_size']").val();
            arrayObj[5] = widgetBorderDiv.find("[name='set_border_bottom_color']").val();
            arrayObj[6] = widgetBorderDiv.find("[name='set_border_bottom_line']").val();
            arrayObj[7] = widgetBorderDiv.find("[name='set_border_left_size']").val();
            arrayObj[8] = widgetBorderDiv.find("[name='set_border_left_color']").val();
            arrayObj[9] = widgetBorderDiv.find("[name='set_border_left_line']").val();
            arrayObj[10] = widgetBorderDiv.find("[name='set_border_right_size']").val();
            arrayObj[11] = widgetBorderDiv.find("[name='set_border_right_color']").val();
            arrayObj[12] = widgetBorderDiv.find("[name='set_border_right_line']").val();
            arrayObj[13] = widgetBorderDiv.find("[name='set_border_top_coloropt']").val();
            arrayObj[14] = widgetBorderDiv.find("[name='set_border_bottom_coloropt']").val();
            arrayObj[15] = widgetBorderDiv.find("[name='set_border_left_coloropt']").val();
            arrayObj[16] = widgetBorderDiv.find("[name='set_border_right_coloropt']").val();


            if (master.attr("name") == "set_border_bottom_size" || master.attr("name") == "set_border_bottom_color" || master.attr("name") == "set_border_bottom_coloropt" || master.attr("name") == "set_border_bottom_line") {
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
            } else if (master.attr("name") == "set_border_left_size" || master.attr("name") == "set_border_left_color" || master.attr("name") == "set_border_left_coloropt" || master.attr("name") == "set_border_left_line") {
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
            } else if (master.attr("name") == "set_border_right_size" || master.attr("name") == "set_border_right_color" || master.attr("name") == "set_border_right_coloropt" || master.attr("name") == "set_border_right_line") {
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
            } else {
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

        },
        changetab: function (index) {
            this.$el.find(".vc_tab:eq(" + index + ")").click();
        },
        simple_pop: function () {
            this.$content = this.$el.find('.vc-properties-list');
            this.show();
        },
        render2: function (type, model, wid) {


            if (model) this.model = model;
            _.bindAll(this, 'hookDependent'),
                _.bindAll(this, 'hookDependentTab');
            this.mapped_params = {};
            this.dependent_elements = {};
            this.shortcodename = type;
            if (type == "vc_posts_grid") {
                var params = vc.map.vc_posts_grid.params;
            } else if (type == "vc_gallery") {
                var params = vc.map.vc_gallery.params;
            } else if (type == "vc_raw_js") {
                var params = vc.map.vc_raw_js.params;
            } else if (type == "vc_bit_qqmaps") {
                var params = vc.map.vc_bit_qqmaps.params;
            } else if (type == "vc_bit_raw_video") {
                var params = vc.map.vc_bit_raw_video.params;
            } else if (type == "TS_VCSC_Countdown") {
                var params = vc.map.TS_VCSC_Countdown.params;
            } else if (type == "vc_column_custom_text") {
                var params = vc.map.vc_column_custom_text.params;
            } else if (type == "vc_jsscroll_text") {
                var params = vc.map.vc_jsscroll_text.params;
            } else if (type == "Bit_HTML5_Video") {
                var params = vc.map.Bit_HTML5_Video.params;
            } else if (type == "vc_jplayer") {
                var params = vc.map.vc_jplayer.params;
            } else if (type == "comment") {
                var params = vc.map.comment.params;
            } else if (type == "qfyshare") {
                var params = vc.map.qfyshare.params;
            } else if (type == "qfyatt") {
                var params = vc.map.qfyatt.params;
            } else if (type == "disqus_comment") {
                var params = vc.map.disqus_comment.params;
            } else if (type == "ds_comment") {
                var params = vc.map.ds_comment.params;
            } else if (type == "uyan_comment") {
                var params = vc.map.uyan_comment.params;
            } else if (type == "vc_images_carousel") {
                var params = vc.map.vc_images_carousel.params;
            } else if (type == "vc_images_list") {
                var params = vc.map.vc_images_list.params;
            } else if (type == "vc_header") {
                var params = vc.map.vc_header.params;
            } else if (type == "vc_single_image") {
                var params = vc.map.vc_single_image.params;
            } else if (type == "qfyuser") {
                var params = vc.map.qfyuser.params;
            } else if (type == "products_list") {
                var params = vc.map.products_list.params;
            } else if (type == "vc_btn") {
                var params = vc.map.vc_btn.params;
            } else if (type == "vc_column_search") {
                var params = vc.map.vc_column_search.params;
            } else if (type == "vc_btn_additional") {
                var params = vc.map.vc_btn.params;
                this.$el.find("[name='title']").closest(".vc-column").remove();
                this.$el.find(".vc_tab:eq(3)").remove();
                this.$el.find(".vc_tab:eq(3)").remove();
            } else if (type == "vc_icon") {
                var params = vc.map.vc_icon.params;
            } else if (type == "tabcontent") {
                var params = vc.map.tabcontent.params;
            } else if (type == "list_cate_controls") {
                var params = vc.map.list_cate_controls.params;
            } else if (type == "vc_page") {
                var params = vc.map.vc_page.params;
            } else if (type == "vc_btn_element") {
                var params = vc.map.vc_btn_element.params;
            } else {
                var params = vc.map[type].params;
            }
            var tag = type;
            if (tag == "vc_row" || tag == "vc_header" || tag == "vc_column_text" || tag == "vc_btn" || tag == "vc_bit_qqmaps" || tag == "vc_images_carousel" || tag == "vc_icon" || tag == "qfy_yun_video") {
                this.$el.find(".bithelper").addClass("video").html("视频教程");
            } else if (tag == "vc_socail_icons_list" || tag == "vc_single_image" || tag == "vc_bit_raw_video" || tag == "Bit_HTML5_Video" || tag == "iphorm_vc" || tag == "vc_column" || tag == "vc_column_search") {
                this.$el.find(".bithelper").addClass("video").html("视频教程");
            } else {
                this.$el.find(".bithelper").removeClass("video").html('<i class="icon"></i>');
            }
            this.$el.find(".bithelper").show().attr("data-type", type);

            this.$el.find('.panel-title').text(vc.getMapped(type).name + ' 设置');

            _.each(params, function (param) {
                this.mapped_params[param.pn] = param;
            }, this);
            this.$content = $content = this.$el.find('.vc-properties-list');

            if (jQuery('#vc-add-element-dialog2 .qfe-content-layouts>li[data-element="' + type + '"]').length == 0) {
                this.$el.find("[data-copystyle=true]").hide();
            } else {
                this.$el.find("[data-copystyle=true]").show();
            }
            this._css_animation_widget(wid);
            if (type == 'Bit_HTML5_Video' || type == 'products_list' || type == 'vc_jplayer') {
                jQuery.post("/FeiEditor/siteEdit/getVideoList", function (data) {
                    optionstring = data;
                    var t = optionstring.split("|^~^|");
                    if (t.length > 1) {
                        var val = $content.find("[name='video_mp4_local']").attr("data-val");
                        $content.find("[name='video_mp4_local']").html(t[0]).val(val);
                        var val = $content.find("[name='video_webm_local']").attr("data-val");
                        $content.find("[name='video_webm_local']").html(t[1]).val(val);
                        var val = $content.find("select[name='category']").attr("data-val");
                        $content.find("select[name='category']").html(t[2]).val(val);

                        var val = $content.find("select[name='jplayer_mp3']").attr("data-val");
                        $content.find("select[name='jplayer_mp3']").html(t[3]).val(val);
                    }
                })
            }

            if ($content.find('[name="bg_image_repeat"]').length > 0) {
                $content.find('[name="bg_image_repeat"]').change(function () {
                    var b_v = $content.find('[name="bg_image_repeat"]').val();
                    if (b_v != "background-size" && b_v != "cover") {
                        $content.find('[name="background_position_type"]').closest(".vc-column").removeClass("vc-hide");
                        $content.find('[name="background_position_vertical"]').closest(".vc-column").removeClass("vc-hide");
                        $content.find('[name="background_position_level"]').closest(".vc-column").removeClass("vc-hide");
                        $content.find('[name="background_position_more"]').closest(".vc-column").removeClass("vc-hide");
                        if ($content.find('[name="background_position_type"]:visible').length > 0) {
                            if ($content.find('[name="background_position_type"]').val() == "0") {
                                $content.find('[name="background_position_vertical"]').closest(".vc-column").show();
                                $content.find('[name="background_position_level"]').closest(".vc-column").show();
                                $content.find('[name="background_position_more"]').closest(".vc-column").hide();
                            } else {
                                $content.find('[name="background_position_vertical"]').closest(".vc-column").hide();
                                $content.find('[name="background_position_level"]').closest(".vc-column").hide();
                                $content.find('[name="background_position_more"]').closest(".vc-column").show();
                            }
                        }

                    } else {
                        $content.find('[name="background_position_type"]').closest(".vc-column").addClass("vc-hide");
                        $content.find('[name="background_position_vertical"]').closest(".vc-column").addClass("vc-hide");
                        $content.find('[name="background_position_level"]').closest(".vc-column").addClass("vc-hide");

                        $content.find('[name="background_position_more"]').closest(".vc-column").addClass("vc-hide");
                    }
                });
                $content.find('[name="bg_image_repeat"]').change();


            }
            this.changefontsname();
            this.changeXYZ2();
            this.$el.find(".panel-footer").show();
            return this;
        },
        changefontsname: function () {
            var font_names = "";
            if (typeof (top.google_names) != "undefined" && top.google_names != "") {
                font_names = top.google_names;
            }

            if (font_names) {
                this.$content.find(".dropdownfontfamily").each(function () {
                    var v = jQuery(this).attr("data-val");
                    var font_arr = font_names.split(";");
                    var htm = "";
                    for (var i = 0; i < font_arr.length; i++) {
                        if (font_arr[i]) {
                            htm += "<option value='" + font_arr[i] + "' >" + font_arr[i] + "</option>";
                        }
                    }
                    jQuery(this).html(jQuery(this).html() + htm);
                    jQuery(this).val(v);
                })
            }

        },
        getselflink: function () {
            var jThis = this;
            var model_id = jThis.model.get('id');

            var obj = iframeWin.jQuery("[data-model-id='" + model_id + "']");
            if (obj.length > 0) {
                var id = obj.find("> section").attr("id");
                var str = iframeWin.location.href;
                str = str.replace('&vceditor=true', '');
                str = str.replace('?vceditor=true', '');
                str = str.replace('?vceditor=true', '');
                if (str.indexOf("&qfy_time=") > -1) {
                    str = str.split("&qfy_time=")[0];
                }
                if (id) {
                    this.$content.find(".miaodianurl").text(str + "#" + id).attr("href", "#");
                } else {
                    this.$content.find(".miaodianurl").text("请先输入锚点ID，然后重新打开设置框就能看到地址url");
                }
                this.$content.find(".miaodian_tomenu").unbind().bind("click", function () {
                    if (jQuery(this).html() != "操作中...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;") {
                        var url = str + "#" + id;
                        jQuery(this).html("操作中...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
                        jQuery.post("/FeiEditor/siteEdit/ajax_savepage", {
                            urlTitle: "区块链接",
                            url: url,
                            flag: "custom_maodian",
                            post_parent: 0,
                            post_excerpt: ""
                        }, function (id) {
                            jConfirmOneButton("插入菜单成功，请点确认按钮刷新页面", function () {
                                top.reloadPage();
                            });

                        });
                    }

                });
                this.$content.find(".miaodian_tocopy").unbind().bind("click", function () {
                    var text = jQuery(this).closest(".description").find(".miaodianurl").text();
                    if (text) {
                        text = jQuery.trim(text);
                        jQuery(this).attr("data-clipboard-text", text);
                        clipboard_fun(".miaodian_tocopy");
                    }
                });
            }
            return false;
        },
        copyparamtosub: function (e) {
            var tag = this.model.get('shortcode');
            this.save();
            var orgid = this.model.get('id');
            var params = this.model.get('params');
            var parent_id = this.model.get('parent_id');

            if (tag == 'vc_column' || tag == 'vc_column_inner' || tag == 'vc_column_embad') {

                _.each(vc.shortcodes.where({parent_id: parent_id}), function (model) {
                    var id = model.get("id");
                    var modelparams = model.get('params');
                    jQuery.each(params, function (i, n) {
                        if (i != "qfyuuid" && i != "width" && i != "z_index" && i != "perwidth") {
                            modelparams[i] = n;
                        }
                    });
                    if (orgid != id) {
                        ajaxBeforeLoading(id);
                        model.save({params: modelparams});
                        vc.ShortcodesBuilder.update(model);
                    }
                }, this);
                vc.ShortcodesBuilder.save();
            }
        },
        _css_animation_widget: function (wid) {
            if (!wid) return;
            var $this = this;

            if (this.$el.find("[name='css_animation_c']").length > 0) {
                var p = iframeWin.jQuery("#" + wid).closest("[bitdataaction]");
                var curr_elements = "<option value=''>自己</option>";
                var n = 1;
                p.find(".site_tooler").each(function (i) {
                    if (wid != $(this).attr("id")) {
                        curr_elements += "<option value='" + $(this).attr("id") + "'>区块内零件" + n + "</option>";
                        n++;
                    }
                });
                $this.$el.find("[name='css_animation_c_element'],[name='css_animation_h_element'],[name='css_animation_l_element']").html(curr_elements);

                $this.$el.find("[name='css_animation_c_element']").val($this.$el.find("[name='css_animation_c_element']").attr("data-val"));
                $this.$el.find("[name='css_animation_h_element']").val($this.$el.find("[name='css_animation_h_element']").attr("data-val"));
                $this.$el.find("[name='css_animation_l_element']").val($this.$el.find("[name='css_animation_l_element']").attr("data-val"));
            }
        },
        _css_animation: function () {
            var $this = this;

            if (this.$el.find("[name='css_animation_c']").length > 0) {
                var p = iframeWin.jQuery("[data-model-id='" + $this.model.get('id') + "']").closest("section.section");
                var curr_elements = "<option value=''>自己</option>";
                var n = 1;
                p.find(".qfy-element").each(function (i) {
                    if ($this.model.get('id') != $(this).closest(".vc-element").attr("data-model-id")) {

                        var curr_tag = $(this).closest(".vc-element").attr("data-tag");
                        if (curr_tag) {
                            var name = vc.map[curr_tag].name;

                            curr_elements += "<option value='" + $(this).attr("qfyuuid") + "'>区块内" + name + n + "</option>";
                            n++;
                        }
                    }
                });
                $this.$el.find("[name='css_animation_c_element'],[name='css_animation_h_element'],[name='css_animation_l_element']").html(curr_elements);
                $this.$el.find("[name='css_animation_c_element']").val($this.$el.find("[name='css_animation_c_element']").attr("data-val"));
                $this.$el.find("[name='css_animation_h_element']").val($this.$el.find("[name='css_animation_h_element']").attr("data-val"));
                $this.$el.find("[name='css_animation_l_element']").val($this.$el.find("[name='css_animation_l_element']").attr("data-val"));

            }

        },
        render: function (model, not_request_template, isAutoOpenFile, defaulttab) {

            this.$el.addClass("animated_new");
            if (!model) return false;
            this.model = model;
            var $this = this;
            var tag = this.model.get('shortcode'),
                params = this.model.setting('params') || [];
            _.bindAll(this, 'hookDependent'),
                _.bindAll(this, 'hookDependentTab');
            this.mapped_params = {};
            this.$el.removeClass("section-special section-orgi");
            if (iframeWin && iframeWin.jQuery("[data-model-id='" + model.get('id') + "']").closest(".section-special").length > 0) {
                this.$el.addClass("section-special");
            } else {
                this.$el.addClass("section-orgi");
            }


            if (tag == "vc_row") {
                if (iframeWin.jQuery("[data-model-id='" + model.get('id') + "']").find(".section-special").length > 0) {
                    this.$el.find(".bit-change-type").hide();
                } else {
                    this.$el.find(".bit-change-type").show();
                }
            } else {
                this.$el.find(".bit-change-type").hide();
            }

            if (tag == "vc_row" || tag == "vc_header" || tag == "vc_column_text" || tag == "vc_btn" || tag == "vc_bit_qqmaps" || tag == "vc_images_carousel" || tag == "vc_icon" || tag == "qfy_yun_video") {
                this.$el.find(".bithelper").addClass("video").html("视频教程");
            } else if (tag == "vc_socail_icons_list" || tag == "vc_single_image" || tag == "vc_bit_raw_video" || tag == "Bit_HTML5_Video" || tag == "iphorm_vc" || tag == "vc_column" || tag == "vc_column_search") {
                this.$el.find(".bithelper").addClass("video").html("视频教程");
            } else {
                this.$el.find(".bithelper").removeClass("video").html('<i class="icon"></i>');
            }

            //init
            if (lastVcContent == "None") {
                lastVcContent = vc.ShortcodesBuilder.getContent();
            }

            if (jQuery('#vc-add-element-dialog2 .qfe-content-layouts>li[data-element="' + tag + '"]').length == 0) {
                if ((tag == "vc_row" || tag == "vc_row_inner" || tag == "vc_row_embad") && (jQuery('#vc-add-element-dialog2 .qfe-content-layouts>li[data-element="vc_row_embad"]').length > 0 || jQuery('#vc-add-element-dialog2 .qfe-content-layouts>li[data-element="vc_row_inner"]').length > 0 || jQuery('#vc-add-element-dialog2 .qfe-content-layouts>li[data-element="vc_row"]').length > 0)) {
                    this.$el.find("[data-copystyle=true]").show();
                } else if ((tag == "vc_column" || tag == "vc_column_inner" || tag == "vc_column_embad") && (jQuery('#vc-add-element-dialog2 .qfe-content-layouts>li[data-element="vc_column_embad"]').length > 0 || jQuery('#vc-add-element-dialog2 .qfe-content-layouts>li[data-element="vc_column_inner"]').length > 0 || jQuery('#vc-add-element-dialog2 .qfe-content-layouts>li[data-element="vc_column"]').length > 0)) {
                    this.$el.find("[data-copystyle=true]").show();
                } else {
                    this.$el.find("[data-copystyle=true]").hide();
                }
            } else {
                this.$el.find("[data-copystyle=true]").show();
            }

            this.dependent_elements = {};
            _.each(params, function (param) {
                this.mapped_params[param.pn] = param;
            }, this);
            this.$content = not_request_template ? this.$el : this.$el.find('.vc-properties-list');
            this.$content.html('<span class="vc-spinner"></span>');
            if (tag == 'vc_column' || tag == 'vc_column_inner' || tag == 'vc_column_embad') {
                var childs = vc.shortcodes.where({parent_id: this.model.get('parent_id')});
                if (childs.length > 1) {
                    this.$el.find('[data-save="copyparam"]').show();
                } else {
                    this.$el.find('[data-save="copyparam"]').hide();
                }
            } else {
                this.$el.find('[data-save="copyparam"]').hide();
            }


            //for iphorm
            if (tag == 'iphorm_vc') {
                this.$el.css('width', '880px');
                this.$content.css("overflow-y", "hidden");
                this.$el.find(".vc-spinner").css('position', 'absolute').css('top', '200px').css('left', '50%').css('margin-left', '-40px');
            } else {
                this.$content.css("overflow-y", "auto");
            }
            var t = this.getQueryString("categories");

            if (t != null) {
                var params = this.model.get('params');
                params["post_categories"] = "-1";
                params["post_categories_hidden"] = t;
                params["page_categories_hidden"] = t;
                params["page_categories"] = "-1";
                this.model.save({params: params});
            }
            t = this.getQueryString("search");
            if (t != null) {
                var params = this.model.get('params');
                params["page_search"] = t;
                params["page_searchtype"] = this.getQueryString("searchtype");
                this.model.save({params: params});
            }
            var optionstring = "";
            var loaded_videolist = false;
            var is_need_media = false;
            if (this.model && (this.model.get('shortcode') == 'Bit_HTML5_Video' || this.model.get('shortcode') == 'vc_row' || this.model.get('shortcode') == 'vc_row_inner' || this.model.get('shortcode') == 'vc_row_embad' || this.model.get('shortcode') == 'products_list' || this.model.get('shortcode') == 'vc_jplayer')) {
                is_need_media = true;
                jQuery.post("/FeiEditor/siteEdit/getVideoList", function (data) {
                    optionstring = data;
                    loaded_videolist = true;
                })
            }

            this.show();

            !not_request_template &&
            $.ajax({
                type: 'POST',
                url: vc.admin_ajax,
                data: {
                    action: 'qfe_show_edit_form',
                    element: this.model.get('shortcode'),
                    post_id: $('#post_ID').val(),
                    shortcode: vc.ShortcodesBuilder.toString(this.model),
                    vc_inline: true
                },
                context: this
            }).done(function (data) {
                if (!this.model) {
                    return false;
                }
                if (data == "0") {
                    top.jAlert("页面过期，正尝试自动刷新！");
                    setTimeout(function () {
                        top.location.reload();
                    }, 1000);
                    return false;
                }
                if (this.model && this.model.get('shortcode') == 'iphorm_vc') {
                    this.$content.html('<span class="vc-spinner" style="position:absolute;top:200px;left:50%;margin-left:-40px;"></span>');
                    this.$content.append(data);
                    this.$el.find('.row.vc-row').css('width', '100%');
                } else if (this.model && this.model.get('shortcode') == 'product_page') {

                    this.$content.html(data);
                    if (this.$content.find("[name='allowed']").val() == "false") {


                    }
                } else {
                    //过滤data
                    this.$content.html(data);
                }
                $content = this.$content;
                if (is_need_media) {
                    loaded_timer = setInterval(function () {
                        if (loaded_videolist) {
                            clearInterval(loaded_timer);
                            var t = optionstring.split("|^~^|");
                            if (t.length > 1) {
                                var val = $content.find("[name='video_mp4_local']").attr("data-val");
                                $content.find("[name='video_mp4_local']").html(t[0]).val(val);
                                var val = $content.find("[name='video_webm_local']").attr("data-val");
                                $content.find("[name='video_webm_local']").html(t[1]).val(val);
                                var val = $content.find("select[name='category']").attr("data-val");
                                $content.find("select[name='category']").html(t[2]).val(val);

                                var val = $content.find("select[name='jplayer_mp3']").attr("data-val");
                                $content.find("select[name='jplayer_mp3']").html(t[3]).val(val);

                                var background_video_mp4 = $content.find("[name='background_video_mp4']").closest(".qfe_el_type_select").find("select");
                                background_video_mp4.html(t[0]).val($content.find("[name='background_video_mp4']").val());
                                var background_video_webm = $content.find("[name='background_video_webm']").closest(".qfe_el_type_select").find("select");
                                background_video_webm.html(t[1]).val($content.find("[name='background_video_webm']").val());
                            }
                        }
                    }, 300);
                }


                this._css_animation();
                if (tag == 'vc_row') {
                    this.getselflink();
                } else if (tag == "list_cate_controls" || tag == "list_btncate_controls" || tag == "product_navigation" || tag == "vc_custom_search") {
                    var $this = this;
                    this.$content.find(".to_bind_list").unbind().bind("click", function () {
                        if ($this.model && $this.model.view.$el) {
                            iframeWin.bindqfylist($this.model.view.$el.find(">.qfy-element")[0], $this.$content);
                        }
                    });
                } else if (tag == 'vc_row_inner') {
                    this.$content.find(".qfe_el_type_tab label.vc_tab:eq(7)").hide();
                } else if (tag == "slidercontent" || tag == "tabcontent" || tag == "accordioncontent") {
                    var $block = this.$content.find('.qfe_el_type_objects');

                    var $img_ul = $block.find('.gallery_widget_attached_images_list');
                    var length = $img_ul.find("ul").length;
                    var str = "";

                    var image = {
                        id: length * 1 + 1,
                        url: "http://fast.qifeiye.com/qfy-content/plugins/revslider/images/transtiled.png"
                    };
                    var n = 0;
                    var params = this.model.get('params');
                    var buttons = params.buttons;
                    var tmpbuttons = new Array();
                    if (buttons) {
                        tmpbuttons = buttons.split(";");
                    }
                    _.each(vc.shortcodes.where({parent_id: this.model.get('id')}), function (model) {
                        if (tmpbuttons[n] && tmpbuttons[n] != "") {
                            var name = tmpbuttons[n];
                            if (name.indexOf('-~~-') > -1) {
                                name = name.replace('-~~-', "");
                                name = base64_decode(name);
                            }
                        } else {
                            var name = '内页' + (n + 1);
                        }
                        str = '<li class="added content" modelId="' + model.get('id') + '"><div class="inner" style="width: 75px; height: 75px; overflow: hidden;text-align: center;"><span class="text"><input style="line-height:20px;height:20px;padding:2px;" type="text" /> </span></div><a href="#" class="icon-remove"></a><span style=" position: absolute;line-height:0;height:10px;right: 20px;top: 3px;"><span class="fa fa-arrow-left toiconleft" style="cursor:pointer;"></span>&nbsp;&nbsp;<span class="fa fa-arrow-right toiconright"  style="cursor:pointer;"></span>&nbsp;&nbsp;<span class="fa fa-copy toiconcopy"  style="cursor:pointer;"></span></span></li>';
                        $img_ul.append(str);
                        jQuery('.content[modelId="' + model.get('id') + '"] input').val(name);
                        n = n + 1;
                    }, this);


                    $hidden_ids = $block.find('.gallery_widget_objects_ids');
                }
                //..........
                this.changefontsname();
                this.$content.scrollTop(0);
                this.init();
                if (defaulttab && defaulttab > 0) {
                    this.$el.find(".vc_tab:eq(" + (defaulttab - 1) + ")").click();
                }


                //open file
                if (isAutoOpenFile) {
                    $this = this;
                    setTimeout(function () {
                        $this.$el.find(".gallery_widget_add_images:first").click();
                    }, 300);

                }
                this.changeXYZ2();


                if (this.$el.find("#iphorm_iframe").length > 0) {
                    var window_height = $(window).height() - 230;
                    this.$el.find("#iphorm_iframe").css('height', window_height);
                }

            });

            this.setTitle();
            this.$el.find(".panel-footer").show();


            return this;
        },
        input_timeout_clear: false,
        onchangeItemPreviewPre: function (curr, e, timeToOut) {
            if (!jQuery(e.currentTarget).is(':visible') && !jQuery(curr).is(':visible') && !jQuery(curr).is('[type=hidden]')) {
                return;
            }
            $this = this;
            if (this.input_timeout_clear)
                clearTimeout(this.input_timeout_clear);
            this.input_timeout_clear = setTimeout(function () {
                $this.onchangeItemPreview(curr, e);
            }, timeToOut);
        },
        onchangeItemPreview: function (curr, e) {
            if (jQuery(curr).attr("name") == "d_t") {
                return;
            }
            var $master = jQuery(e.currentTarget);
            if (jQuery(curr).attr("name") == "d_t" || $master.attr("name") == "d_t") {
                return;
            }

            /* var nowtime = new Date().getTime();
    	 if(vc.ShortcodesBuilder.lastChangingElementTime&&nowtime-vc.ShortcodesBuilder.lastChangingElementTime<3000){
    		 return;
    	 }
    	 vc.ShortcodesBuilder.lastChangingElementTime = nowtime;
		  this.previewElement(e);*/
            //console.log(e);
            top.vc_element_loading_preview();
        },
        _changebackgroundimage_fun: function () {
            $content = this.$content;
            if ($content.find('[name="background_image_size"]').length > 0) {
                $content.find('[name="background_position_type"]').change(function () {
                    var p_v = $content.find('[name="background_image_size"]').val();
                    if (p_v == "cover") return;
                    var b_v = jQuery(this).val();
                    $content.find('[name="background_image_x"]').closest(".vc-column").addClass("vc-hide");
                    $content.find('[name="background_image_y"]').closest(".vc-column").addClass("vc-hide")
                    $content.find('[name="background_position_vertical"]').closest(".vc-column").addClass("vc-hide");
                    $content.find('[name="background_position_more"]').closest(".vc-column").addClass("vc-hide");

                    if (b_v == "") {
                        if (p_v == "auto") {
                            $content.find('[name="background_position_vertical"]').closest(".vc-column").removeClass("vc-hide");
                        } else if (p_v == "custom") {
                            $content.find('[name="background_image_x"]').closest(".vc-column").removeClass("vc-hide");
                            $content.find('[name="background_image_y"]').closest(".vc-column").removeClass("vc-hide");
                        } else {

                        }
                    } else {
                        $content.find('[name="background_position_more"]').closest(".vc-column").removeClass("vc-hide");
                    }

                });

                $content.find('[name="background_image_size"]').change(function () {
                    $content.find('[name="background_position_more"]').closest(".vc-column").removeClass("vc-hide");
                    var p_v = $content.find('[name="background_image_size"]').val();
                    if (p_v == "cover") {
                        $content.find('[name="background_position_type"]').val("left top");
                    }
                    $content.find('[name="background_position_type"]').change();
                });
                $content.find('[name="background_image_size"]').change();

                $content.find('[name="background_position_type1"]').change(function () {
                    var p_v = $content.find('[name="background_image_size1"]').val();
                    if (p_v == "cover") return;
                    var b_v = jQuery(this).val();
                    $content.find('[name="background_image_x1"]').closest(".vc-column").addClass("vc-hide");
                    $content.find('[name="background_image_y1"]').closest(".vc-column").addClass("vc-hide")
                    $content.find('[name="background_position_vertical1"]').closest(".vc-column").addClass("vc-hide");
                    $content.find('[name="background_position_more1"]').closest(".vc-column").addClass("vc-hide");

                    if (b_v == "") {
                        if (p_v == "auto") {
                            $content.find('[name="background_position_vertical1"]').closest(".vc-column").removeClass("vc-hide");
                        } else if (p_v == "custom") {
                            $content.find('[name="background_image_x1"]').closest(".vc-column").removeClass("vc-hide");
                            $content.find('[name="background_image_y1"]').closest(".vc-column").removeClass("vc-hide");
                        }
                    } else {
                        $content.find('[name="background_position_more1"]').closest(".vc-column").removeClass("vc-hide");
                    }

                });
                $content.find('[name="background_image_size1"]').change(function () {
                    $content.find('[name="background_image_size1"]').closest(".vc-column").removeClass("vc-hide");
                    $content.find('[name="background_position_more1"]').closest(".vc-column").removeClass("vc-hide");
                    var p_v = $content.find('[name="background_image_size1"]').val();
                    if (p_v == "cover") {
                        $content.find('[name="background_position_type1"]').val("left top");
                    } else if (p_v == "custom") {
                        $content.find('[name="background_image_w1"]').closest(".vc-column").removeClass("vc-hide");
                        $content.find('[name="background_image_h1"]').closest(".vc-column").removeClass("vc-hide");
                    }
                    if (p_v == "custom" || p_v == "auto") {
                        $content.find('[name="background_image_x1"]').closest(".vc-column").removeClass("vc-hide");
                        $content.find('[name="background_image_y1"]').closest(".vc-column").removeClass("vc-hide");
                        $content.find('[name="background_position_type1"]').closest(".vc-column").removeClass("vc-hide");
                        $content.find('[name="background_position_vertical1"]').closest(".vc-column").removeClass("vc-hide");
                        $content.find('[name="background_image_repeat1"]').closest(".vc-column").removeClass("vc-hide");
                    } else {
                        $content.find('[name="background_image_w1"]').closest(".vc-column").addClass("vc-hide");
                        $content.find('[name="background_image_h1"]').closest(".vc-column").addClass("vc-hide");
                        $content.find('[name="background_image_x1"]').closest(".vc-column").addClass("vc-hide");
                        $content.find('[name="background_image_y1"]').closest(".vc-column").addClass("vc-hide");
                        $content.find('[name="background_position_type1"]').closest(".vc-column").addClass("vc-hide");
                        $content.find('[name="background_position_vertical1"]').closest(".vc-column").addClass("vc-hide");
                        $content.find('[name="background_image_repeat1"]').closest(".vc-column").addClass("vc-hide");
                    }

                    $content.find('[name="background_position_type1"]').change();
                });
                $content.find('[name="background_mobile_on"]').change(function () {
                    var b_v = $content.find('[name="background_mobile_on"]').val();
                    if (b_v == "1") {
                        $content.find('[name="background_image_size1"]').change();
                    }

                });


                $content.find('[name="background_mobile_on"]').change();

            }
            if ($content.find('[name="bg_image_repeat"]').length > 0) {
                $content.find('[name="bg_image_repeat"]').change(function () {
                    var b_v = $content.find('[name="bg_image_repeat"]').val();
                    if (b_v != "background-size" && b_v != "cover") {
                        $content.find('[name="background_position_type"]').closest(".vc-column").removeClass("vc-hide");
                        $content.find('[name="background_position_vertical"]').closest(".vc-column").removeClass("vc-hide");
                        $content.find('[name="background_position_level"]').closest(".vc-column").removeClass("vc-hide");
                        $content.find('[name="background_position_more"]').closest(".vc-column").removeClass("vc-hide");
                        if ($content.find('[name="background_position_type"]:visible').length > 0) {
                            if ($content.find('[name="background_position_type"]').val() == "0") {
                                $content.find('[name="background_position_vertical"]').closest(".vc-column").show();
                                $content.find('[name="background_position_level"]').closest(".vc-column").show();
                                $content.find('[name="background_position_more"]').closest(".vc-column").hide();
                            } else {
                                $content.find('[name="background_position_vertical"]').closest(".vc-column").hide();
                                $content.find('[name="background_position_level"]').closest(".vc-column").hide();
                                $content.find('[name="background_position_more"]').closest(".vc-column").show();
                            }
                        }

                    } else {
                        $content.find('[name="background_position_type"]').closest(".vc-column").addClass("vc-hide");
                        $content.find('[name="background_position_vertical"]').closest(".vc-column").addClass("vc-hide");
                        $content.find('[name="background_position_level"]').closest(".vc-column").addClass("vc-hide");
                        $content.find('[name="background_position_more"]').closest(".vc-column").addClass("vc-hide");
                    }
                });
                $content.find('[name="bg_image_repeat"]').change();

            }
        },
        init: function (changed) {
            var $this = this;
            $content = this.$content;
            var isneed_initchanged = false;
            this._changebackgroundimage_fun();
            if ((this.model && this.model.get('shortcode') == 'vc_posts_grid') || (this.model && this.model.get('shortcode') == 'vc_carousel') || (this.model && this.model.get('shortcode') == 'advanced_list') || (changed == "change" && this.$content.find("[name='page_categories']").length > 0)) {
                var v1 = this.$content.find("[name='page_categories']").val();
                var v2 = this.$content.find("[name='post_categories']").val();
                var v3 = this.$content.find("[name='pro_categories']").val();
                var v4 = this.$content.find("[name='product_categories']").val();
                var v5 = this.$content.find("[name='image_categories']").val();
                var v6 = this.$content.find("[name='video_categories']").val();
                var v7 = this.$content.find("[name='yunvideo_categories']").val();
                $this.$content.find("[name='page_categories']").css("color", "#fff").after('<div style="font-size: 14px; position: absolute; padding: 8px 6px 7px; left: 15px;" class="fa fa-spinner fa-spin fa-3x fa-fw"></div>');
                $this.$content.find("[name='post_categories']").css("color", "#fff").after('<div style="font-size: 14px; position: absolute; padding: 8px 6px 7px; left: 15px;" class="fa fa-spinner fa-spin fa-3x fa-fw"></div>');
                $this.$content.find("[name='pro_categories']").css("color", "#fff").after('<div style="font-size: 14px; position: absolute; padding: 8px 6px 7px; left: 15px;" class="fa fa-spinner fa-spin fa-3x fa-fw"></div>');
                $this.$content.find("[name='product_categories']").css("color", "#fff").after('<div style="font-size: 14px; position: absolute; padding: 8px 6px 7px; left: 15px;" class="fa fa-spinner fa-spin fa-3x fa-fw"></div>');
                $this.$content.find("[name='image_categories']").css("color", "#fff").after('<div style="font-size: 14px; position: absolute; padding: 8px 6px 7px; left: 15px;" class="fa fa-spinner fa-spin fa-3x fa-fw"></div>');
                $this.$content.find("[name='video_categories']").css("color", "#fff").after('<div style="font-size: 14px; position: absolute; padding: 8px 6px 7px; left: 15px;" class="fa fa-spinner fa-spin fa-3x fa-fw"></div>');
                $this.$content.find("[name='yunvideo_categories']").css("color", "#fff").after('<div style="font-size: 14px; position: absolute; padding: 8px 6px 7px; left: 15px;" class="fa fa-spinner fa-spin fa-3x fa-fw"></div>');

                jQuery.post("/admin/admin-ajax.php", {"action": "bit_get_postListWizHtml"}, function (htm) {
                    var obj1 = jQuery(htm).find("[name='page_categories']").parent().html();
                    var obj2 = jQuery(htm).find("[name='post_categories']").parent().html();
                    var obj3 = jQuery(htm).find("[name='pro_categories']").parent().html();
                    $this.$content.find("[name='page_categories']").parent().html(obj1);
                    $this.$content.find("[name='post_categories']").parent().html(obj2);
                    $this.$content.find("[name='pro_categories']").parent().html(obj3);
                    if (jQuery.trim(v1) == "") v1 = "0";
                    if (jQuery.trim(v2) == "") v2 = "0";
                    if (jQuery.trim(v3) == "") v3 = "0";
                    $this.$content.find("[name='page_categories']").val(v1);
                    $this.$content.find("[name='post_categories']").val(v2);
                    $this.$content.find("[name='pro_categories']").val(v3);

                    if (jQuery(htm).find("[name='product_categories']").length > 0) {
                        var obj4 = jQuery(htm).find("[name='product_categories']").parent().html();
                        $this.$content.find("[name='product_categories']").parent().html(obj4);
                        if (jQuery.trim(v4) == "") v4 = "0";
                        $this.$content.find("[name='product_categories']").val(v4);
                    }
                    if (jQuery(htm).find("[name='image_categories']").length > 0) {
                        var obj5 = jQuery(htm).find("[name='image_categories']").parent().html();
                        $this.$content.find("[name='image_categories']").parent().html(obj5);
                        if (jQuery.trim(v5) == "") v5 = "0";
                        $this.$content.find("[name='image_categories']").val(v5);
                    }
                    if (jQuery(htm).find("[name='video_categories']").length > 0) {
                        var obj6 = jQuery(htm).find("[name='video_categories']").parent().html();
                        $this.$content.find("[name='video_categories']").parent().html(obj6);
                        if (jQuery.trim(v6) == "") v6 = "0";
                        $this.$content.find("[name='video_categories']").val(v6);
                    }
                    if (jQuery(htm).find("[name='yunvideo_categories']").length > 0) {
                        var obj7 = jQuery(htm).find("[name='yunvideo_categories']").parent().html();
                        $this.$content.find("[name='yunvideo_categories']").parent().html(obj7);
                        if (jQuery.trim(v7) == "") v7 = "0";
                        $this.$content.find("[name='yunvideo_categories']").val(v7);
                    }
                    $this.initDependency();
                });
            } else if (this.model && this.model.get('shortcode') == 'vc_custom_search') {
                var v1 = this.$content.find("[name='fromid']").val();
                $this.$content.find("[name='fromid']").css("color", "#fff").after('<div style="font-size: 14px; position: absolute; padding: 8px 6px 7px; left: 15px;" class="fa fa-spinner fa-spin fa-3x fa-fw"></div>');
                jQuery.post("/admin/admin-ajax.php", {"action": "bit_get_custom_search"}, function (htm) {
                    if (htm) {
                        $this.$content.find("[name='fromid']").parent().html(htm + '<span class="description clear">后台设置筛选</span>');
                        $this.$content.find("[name='fromid']").val(v1);
                    }
                    $this.initDependency();
                })
            } else if (this.model && this.model.get('shortcode') == 'product_navigation') {
                var v1 = this.$content.find("[name='fromid']").val();
                $this.$content.find("[name='fromid']").css("color", "#fff").after('<div style="font-size: 14px; position: absolute; padding: 8px 6px 7px; left: 15px;" class="fa fa-spinner fa-spin fa-3x fa-fw"></div>');
                jQuery.post("/admin/admin-ajax.php", {"action": "bit_get_custom_search2"}, function (htm) {
                    if (htm) {
                        $this.$content.find("[name='fromid']").parent().html(htm + '<br><span style="margin-top:5px;"><a style="cursor:pointer;"  href="/admin/admin.php?page=zoo-ln-settings" target=_blank>点击这里</a>进行商品高级筛选的设置,预览下查看效果</span>');
                        $this.$content.find("[name='fromid']").val(v1);
                    }
                    $this.initDependency();
                })
            } else if (this.model && this.model.get('shortcode') == 'vc_column_breadcrumbs') {
                var v1 = this.$content.find("[name='qfy_cate_source']").val();
                var obj = jQuery("#bitParentElement #qfy_cate_source").prop("outerHTML");
                this.$content.find("[name='qfy_cate_source']").parent().html(obj + '<span class="description clear">你可以在内容 =》菜单中来进行管理，点击<a href="/admin/nav-menus-main.php" target="_blank">这里</a>.</span>');
                this.$content.find("[name='qfy_cate_source']").prepend('<option value="">自动</option>');

                this.$content.find("[name='qfy_cate_source']").val(v1);

                $this.initDependency();
            } else if (this.model && this.model.get('shortcode') == 'products_list') {
                var v1 = this.$content.find("[name='roleslug']").val();
                var obj = jQuery("#bitParentElement #qfy_role").html();

                this.$content.find("[name='roleslug']").parent().html('<select name="roleslug" class="qfe_vc_param_value qfe-input qfe-select roleslug dropdown" data-val="' + v1 + '">' + "<option value=''>当前用户会员等级</option>" + obj + '</select>');
                this.$content.find("[name='roleslug']").val(v1);

                $this.initDependency();
            } else if (this.model && this.model.get('shortcode') == 'vc_row' && $this.$el.hasClass("sf") && $this.$el.hasClass("viewtemplate")) {

                var v1 = $this.$content.find("[name='background_autoimage']").val();
                var post_type = jQuery("#pageUrl_posttype").val();
                if (jQuery("#viewtemplate_categoryname").val() == "资讯") {
                    post_type = "post"
                } else if (jQuery("#viewtemplate_categoryname").val() == "产品") {
                    post_type = "products"
                } else if (jQuery("#viewtemplate_categoryname").val() == "商品") {
                    post_type = "product"
                }
                jQuery.post("/admin/admin-ajax.php", {
                    "action": "bit_get_postListImages",
                    "post_type": post_type
                }, function (htm) {
                    $this.$content.find("[name='background_autoimage']").parent().html(htm + '<span class="description clear">开启了自定义结构插件的时候，才可以有其他属性的图片选择【预览下查看】</span>');
                    $this.$content.find("[name='background_autoimage']").val(v1);
                    $this.initDependency();
                })

            } else if ((this.model && this.model.get('shortcode') == 'list_menu_vertical') || (this.model && this.model.get('shortcode') == 'list_menu_level') || (changed == "change" && this.$content.find("[name='qfy_cate_source']").length > 0)) {
                var v1 = this.$content.find("[name='qfy_cate_source']").val();
                var obj = jQuery("#bitParentElement #qfy_cate_source").prop("outerHTML");
                this.$content.find("[name='qfy_cate_source']").parent().html(obj + '<span class="description clear">你可以在内容 =》菜单中来进行管理，点击<a href="/admin/nav-menus-main.php" target="_blank">这里</a>.</span>');
                if (jQuery.trim(v1) != "") {
                    this.$content.find("[name='qfy_cate_source']").val(v1);
                }
                $content = this.$content;
                var v2 = $content.find("[name='qfy_category_info']").val();

                if ($content.find("[name='qfy_category']").length > 0) {
                    $content.find("[name='qfy_category']").change(function () {
                        var t = jQuery(this).val();
                        $content.find("[name='qfy_category_info']").css("color", "#fff").after('<div style="font-size: 14px; position: absolute; padding: 8px 6px 7px; left: 15px;" class="fa fa-spinner fa-spin fa-3x fa-fw"></div>');

                        jQuery.post("/admin/admin-ajax.php", {"action": "bit_get_postListWizHtml"}, function (htm) {
                            if (t == "") {
                                var objhtml = jQuery(htm).find("[name='post_categories']").parent().html();
                                objhtml = objhtml.replace("post_categories", "qfy_category_info").replace("post_categories", "qfy_category_info");
                            } else if (t == "1") {
                                var objhtml = jQuery(htm).find("[name='pro_categories']").parent().html();
                                objhtml = objhtml.replace("pro_categories", "qfy_category_info").replace("pro_categories", "qfy_category_info");
                            } else if (t == "2") {
                                var objhtml = jQuery(htm).find("[name='product_categories']").parent().html();
                                objhtml = objhtml.replace("product_categories", "qfy_category_info").replace("product_categories", "qfy_category_info");
                            } else if (t == "3") {
                                var objhtml = jQuery(htm).find("[name='image_categories']").parent().html();
                                objhtml = objhtml.replace("image_categories", "qfy_category_info").replace("image_categories", "qfy_category_info");
                            } else if (t == "4") {
                                var objhtml = jQuery(htm).find("[name='video_categories']").parent().html();
                                objhtml = objhtml.replace("video_categories", "qfy_category_info").replace("video_categories", "qfy_category_info");
                            } else if (t == "5") {
                                var objhtml = jQuery(htm).find("[name='yunvideo_categories']").parent().html();
                                objhtml = objhtml.replace("yunvideo_categories", "qfy_category_info").replace("yunvideo_categories", "qfy_category_info");
                            }

                            $content.find("[name='qfy_category_info']").parent().html(objhtml);
                            if (jQuery.trim(v2) == "") v2 = "0";
                            $content.find("[name='qfy_category_info']").val(v2);
                            $this.initDependency();
                        });

                    })

                    $content.find("[name='qfy_category']").change();
                } else {
                    $this.initDependency();
                }

            } else if (  this.model && this.model.get('shortcode') == 'vc_threeview'){

                $this.$content.find("[name='object_id']").change(function(){
                        var id =  jQuery(this).val();
                        if(id>0) {
                            var v1 = $this.$content.find("[name='mainpath']").val();
                            var v2 = $this.$content.find("[name='secondpath']").val();
                            $this.$content.find("[name='mainpath']").css("color", "#fff").after('<div style="font-size: 14px; position: absolute; padding: 8px 6px 7px; left: 15px;" class="fa fa-spinner fa-spin fa-3x fa-fw"></div>');
                            $this.$content.find("[name='secondpath']").css("color", "#fff").after('<div style="font-size: 14px; position: absolute; padding: 8px 6px 7px; left: 15px;" class="fa fa-spinner fa-spin fa-3x fa-fw"></div>');
                            jQuery.post("/admin/admin-ajax.php", {
                                "action": "bit_get_3dfiles",
                                "id": id
                            }, function (data) {
                                if(data=="error"){
                                    $this.$content.find(".wn_mainpath").hide();
                                    $this.$content.find(".wn_secondpath").hide();
                                }else{
                                    $this.$content.find(".wn_mainpath").show();
                                    $this.$content.find(".wn_secondpath").show();
                                    var tmp = JSON.parse(data);
                                    var str = "<select name='mainpath' class=\"qfe_vc_param_value\">";
                                    if (tmp && tmp.core) {
                                        _.each(tmp.core, function (item) {
                                            str += "<option value='" + item + "'>" + item + "</option>";
                                        });
                                    }
                                    str += "</select>";
                                    $this.$content.find("[name='mainpath']").parent().html(str);
                                    var str = "<select name='secondpath' class=\"qfe_vc_param_value\">";

                                    if (tmp.core[0].indexOf(".obj") > -1) {
                                        if (tmp && tmp.files) {
                                            _.each(tmp.files, function (item) {
                                                str += "<option value='" + item + "'>" + item + "</option>";
                                            });
                                        }
                                    } else if (tmp.core[0].indexOf(".3ds") > -1||tmp.core[0].indexOf(".gltf") > -1) {
                                        if (tmp && tmp.dirs) {
                                            _.each(tmp.dirs, function (item) {
                                                str += "<option value='" + item + "'>" + item + "</option>";
                                            });
                                        }
                                    }

                                    str += "</select>";
                                    $this.$content.find("[name='secondpath']").parent().html(str);
                                    if ($this.$content.find("[name='mainpath'] option[value='" + v1 + "']").length > 0) {
                                        $this.$content.find("[name='mainpath']").val(v1);
                                    }
                                    if ($this.$content.find("[name='secondpath'] option[value='" + v2 + "']").length > 0) {
                                        $this.$content.find("[name='secondpath']").val(v2);
                                    }
                                }
                            });
                        }
                    });
                $this.$content.find("[name='object_id']").change();

            } else if ((this.model && (this.model.get('shortcode') == 'list_cate_controls' || this.model.get('shortcode') == 'list_btncate_controls' || this.model.get('shortcode') == 'vc_prenext')) || (changed == "change" && this.$content.find("[name='cate_post_selected']").length > 0)) {


                this.$content.find("[name='cate_post_selected']").css("color", "#fff").after('<div style="font-size: 14px; position: absolute; padding: 8px 6px 7px; left: 15px;" class="fa fa-spinner fa-spin fa-3x fa-fw"></div>');
                this.$content.find("[name='cate_products_selected']").css("color", "#fff").after('<div style="font-size: 14px; position: absolute; padding: 8px 6px 7px; left: 15px;" class="fa fa-spinner fa-spin fa-3x fa-fw"></div>');
                this.$content.find("[name='cate_image_selected']").css("color", "#fff").after('<div style="font-size: 14px; position: absolute; padding: 8px 6px 7px; left: 15px;" class="fa fa-spinner fa-spin fa-3x fa-fw"></div>');
                this.$content.find("[name='cate_video_selected']").css("color", "#fff").after('<div style="font-size: 14px; position: absolute; padding: 8px 6px 7px; left: 15px;" class="fa fa-spinner fa-spin fa-3x fa-fw"></div>');
                this.$content.find("[name='cate_yunvideo_selected']").css("color", "#fff").after('<div style="font-size: 14px; position: absolute; padding: 8px 6px 7px; left: 15px;" class="fa fa-spinner fa-spin fa-3x fa-fw"></div>');
                var flag = "";
                if (this.$content.find("[name='cate_product_selected']").length > 0) {
                    this.$content.find("[name='cate_product_selected']").css("color", "#fff").after('<div style="font-size: 14px; position: absolute; padding: 8px 6px 7px; left: 15px;" class="fa fa-spinner fa-spin fa-3x fa-fw"></div>');
                    flag = "all";
                }
                jQuery.post("/admin/admin-ajax.php", {
                    "action": "bit_get_postListWizHtml3",
                    "flag": flag
                }, function (htm) {
                    var v1 = $this.$content.find("[name='cate_post_selected']").val();
                    var v2 = $this.$content.find("[name='cate_products_selected']").val();
                    var v4 = $this.$content.find("[name='cate_image_selected']").val();
                    var v5 = $this.$content.find("[name='cate_video_selected']").val();
                    var v6 = $this.$content.find("[name='cate_yunvideo_selected']").val();
                    if ($this.$content.find("[name='cate_product_selected']").length > 0) {
                        var v3 = $this.$content.find("[name='cate_product_selected']").val();
                    }
                    var obj1 = jQuery(htm).find(".cate_post_selected").html();
                    var obj2 = jQuery(htm).find(".cate_products_selected").html();

                    $this.$content.find("[name='cate_post_selected']").parent().html(obj1.replace(/post_category\[\]/g, "cate_post_selected") + '<span class="description clear">默认显示所有的分类</span>');
                    $this.$content.find("[name='cate_products_selected']").parent().html(obj2.replace(/tax_input\[products_category\]\[\]/g, "cate_products_selected") + '<span class="description clear">默认显示所有的分类</span>');

                    if (jQuery.trim(v1) == "") v1 = "";
                    if (jQuery.trim(v2) == "") v2 = "";
                    if (jQuery.trim(v1) != "") {
                        var tmp = v1.split(",");
                        for (var i = 0; i < tmp.length; i++) {
                            $this.$content.find("[name='cate_post_selected'][value='" + tmp[i] + "']").attr("checked", "checked");
                        }
                    }
                    if (jQuery.trim(v2) != "") {
                        var tmp1 = v2.split(",");
                        for (var i = 0; i < tmp1.length; i++) {
                            $this.$content.find("[name='cate_products_selected'][value='" + tmp1[i] + "']").attr("checked", "checked");
                        }
                    }
                    if ($this.$content.find("[name='cate_product_selected']").length > 0) {
                        var obj3 = jQuery(htm).find(".cate_product_selected").html();

                        $this.$content.find("[name='cate_product_selected']").parent().html(obj3.replace(/tax_input\[product_cat\]\[\]/g, "cate_product_selected") + '<span class="description clear">默认显示所有的分类</span>');
                        if (jQuery.trim(v3) == "") v3 = "";
                        if (jQuery.trim(v3) != "") {
                            var tmp2 = v3.split(",");
                            for (var i = 0; i < tmp2.length; i++) {
                                $this.$content.find("[name='cate_product_selected'][value='" + tmp2[i] + "']").attr("checked", "checked");
                            }
                        }
                    }
                    var obj4 = jQuery(htm).find(".cate_image_selected").html();
                    $this.$content.find("[name='cate_image_selected']").parent().html(obj4.replace(/tax_input\[image-category\]\[\]/g, "cate_image_selected") + '<span class="description clear">默认显示所有的分类</span>');
                    if (jQuery.trim(v4) == "") v4 = "";

                    if (jQuery.trim(v4) != "") {
                        var tmp = v4.split(",");
                        for (var i = 0; i < tmp.length; i++) {
                            $this.$content.find("[name='cate_image_selected'][value='" + tmp[i] + "']").attr("checked", "checked");
                        }
                    }
                    var obj5 = jQuery(htm).find(".cate_video_selected").html();
                    $this.$content.find("[name='cate_video_selected']").parent().html(obj5.replace(/tax_input\[video-category\]\[\]/g, "cate_video_selected") + '<span class="description clear">默认显示所有的分类</span>');
                    if (jQuery.trim(v5) == "") v5 = "";
                    if (jQuery.trim(v5) != "") {
                        var tmp = v5.split(",");
                        for (var i = 0; i < tmp.length; i++) {
                            $this.$content.find("[name='cate_video_selected'][value='" + tmp[i] + "']").attr("checked", "checked");
                        }
                    }
                    var obj6 = jQuery(htm).find(".cate_yunvideo_selected").html();
                    $this.$content.find("[name='cate_yunvideo_selected']").parent().html(obj6.replace(/tax_input\[yunvideo-category\]\[\]/g, "cate_yunvideo_selected") + '<span class="description clear">默认显示所有的分类</span>');
                    if (jQuery.trim(v6) == "") v6 = "";
                    if (jQuery.trim(v6) != "") {
                        var tmp = v6.split(",");
                        for (var i = 0; i < tmp.length; i++) {
                            $this.$content.find("[name='cate_yunvideo_selected'][value='" + tmp[i] + "']").attr("checked", "checked");
                        }
                    }


                    if ($this.$content.find("[name='cate_post_selected_exclude']").length > 0) {
                        var v11 = $this.$content.find("[name='cate_post_selected_exclude']").val();
                        var v22 = $this.$content.find("[name='cate_products_selected_exclude']").val();
                        var v33 = $this.$content.find("[name='cate_product_selected_exclude']").val();
                        var v44 = $this.$content.find("[name='cate_image_selected_exclude']").val();
                        var v55 = $this.$content.find("[name='cate_video_selected_exclude']").val();
                        var v66 = $this.$content.find("[name='cate_yunvideo_selected_exclude']").val();

                        var obj11 = obj1.replace(/post_category\[\]/g, "cate_post_selected_exclude");
                        var obj22 = obj2.replace(/tax_input\[products_category\]\[\]/g, "cate_products_selected_exclude");
                        var obj33 = obj3.replace(/tax_input\[product_cat\]\[\]/g, "cate_product_selected_exclude");
                        var obj44 = obj4.replace(/tax_input\[image-category\]\[\]/g, "cate_image_selected_exclude");
                        var obj55 = obj5.replace(/tax_input\[video-category\]\[\]/g, "cate_video_selected_exclude");
                        var obj66 = obj6.replace(/tax_input\[yunvideo-category\]\[\]/g, "cate_yunvideo_selected_exclude");

                        $this.$content.find("[name='cate_post_selected_exclude']").parent().html(obj11 + '<span class="description clear">优先级高于想显示的分类,可以直接点击列表中的删除按钮</span>');
                        $this.$content.find("[name='cate_products_selected_exclude']").parent().html(obj22 + '<span class="description clear">优先级高于想显示的分类,可以直接点击列表中的删除按钮</span>');
                        $this.$content.find("[name='cate_product_selected_exclude']").parent().html(obj33 + '<span class="description clear">优先级高于想显示的分类,可以直接点击列表中的删除按钮</span>');
                        $this.$content.find("[name='cate_image_selected_exclude']").parent().html(obj44 + '<span class="description clear">优先级高于想显示的分类,可以直接点击列表中的删除按钮</span>');
                        $this.$content.find("[name='cate_video_selected_exclude']").parent().html(obj55 + '<span class="description clear">优先级高于想显示的分类,可以直接点击列表中的删除按钮</span>');
                        $this.$content.find("[name='cate_yunvideo_selected_exclude']").parent().html(obj66 + '<span class="description clear">优先级高于想显示的分类,可以直接点击列表中的删除按钮</span>');

                        if (jQuery.trim(v11) == "") v11 = "";
                        if (jQuery.trim(v22) == "") v22 = "";
                        if (jQuery.trim(v33) == "") v33 = "";
                        if (jQuery.trim(v44) == "") v44 = "";
                        if (jQuery.trim(v55) == "") v55 = "";
                        if (jQuery.trim(v66) == "") v66 = "";
                        if (jQuery.trim(v11) != "") {
                            var tmp = v11.split(",");
                            for (var i = 0; i < tmp.length; i++) {
                                $this.$content.find("[name='cate_post_selected_exclude'][value='" + tmp[i] + "']").attr("checked", "checked");
                            }
                        }
                        if (jQuery.trim(v22) != "") {
                            var tmp1 = v22.split(",");
                            for (var i = 0; i < tmp1.length; i++) {
                                $this.$content.find("[name='cate_products_selected_exclude'][value='" + tmp1[i] + "']").attr("checked", "checked");
                            }
                        }
                        if (jQuery.trim(v33) != "") {
                            var tmp1 = v33.split(",");
                            for (var i = 0; i < tmp1.length; i++) {
                                $this.$content.find("[name='cate_product_selected_exclude'][value='" + tmp1[i] + "']").attr("checked", "checked");
                            }
                        }
                        if (jQuery.trim(v44) != "") {
                            var tmp1 = v44.split(",");
                            for (var i = 0; i < tmp1.length; i++) {
                                $this.$content.find("[name='cate_image_selected_exclude'][value='" + tmp1[i] + "']").attr("checked", "checked");
                            }
                        }
                        if (jQuery.trim(v55) != "") {
                            var tmp1 = v55.split(",");
                            for (var i = 0; i < tmp1.length; i++) {
                                $this.$content.find("[name='cate_video_selected_exclude'][value='" + tmp1[i] + "']").attr("checked", "checked");
                            }
                        }
                        if (jQuery.trim(v66) != "") {
                            var tmp1 = v66.split(",");
                            for (var i = 0; i < tmp1.length; i++) {
                                $this.$content.find("[name='cate_yunvideo_selected_exclude'][value='" + tmp1[i] + "']").attr("checked", "checked");
                            }
                        }
                    }
                    if ($this.$content.find("[name='cate_post_selected_id']").length > 0) {


                        jQuery.post("/admin/admin-ajax.php", {"action": "bit_get_postListWizHtml"}, function (htm2) {
                            var v4 = $this.$content.find("[name='cate_post_selected_id']").val();
                            var v5 = $this.$content.find("[name='cate_products_selected_id']").val();
                            var v6 = $this.$content.find("[name='cate_product_selected_id']").val();
                            var obj4 = jQuery(htm2).find("[name='post_categories']").parent().html();
                            var obj5 = jQuery(htm2).find("[name='pro_categories']").parent().html();
                            obj4 = obj4.replace("post_categories", "cate_post_selected_id").replace("post_categories", "cate_post_selected_id").replace('<option value="0">所有</option>', "<option value='0'>无</option>");
                            obj5 = obj5.replace("pro_categories", "cate_products_selected_id").replace("pro_categories", "cate_products_selected_id").replace('<option value="0">所有</option>', "<option value='0'>无</option>");
                            $this.$content.find("[name='cate_post_selected_id']").parent().html(obj4 + '<span class="description clear">最好能与对应列表内的选择的分类一致</span>');
                            $this.$content.find("[name='cate_products_selected_id']").parent().html(obj5 + '<span class="description clear">最好能与对应列表内的选择的分类一致</span>');

                            if (jQuery.trim(v4) == "") v4 = "0";
                            if (jQuery.trim(v5) == "") v5 = "0";
                            if (v4) $this.$content.find("[name='cate_post_selected_id']").val(v4);
                            if (v5) $this.$content.find("[name='cate_products_selected_id']").val(v5);
                            if (jQuery(htm2).find("[name='product_categories']").length > 0) {
                                var obj6 = jQuery(htm2).find("[name='product_categories']").parent().html();
                                obj6 = obj6.replace("product_categories", "cate_product_selected_id").replace("product_categories", "cate_product_selected_id").replace('<option value="0">所有</option>', "<option value='0'>无</option>");
                                $this.$content.find("[name='cate_product_selected_id']").parent().html(obj6 + '<span class="description clear">最好能与对应列表内的选择的分类一致</span>');
                                if (jQuery.trim(v6) == "") v6 = "0";
                                if (v6) $this.$content.find("[name='cate_product_selected_id']").val(v6);
                            }
                            var v7 = $this.$content.find("[name='cate_image_selected_id']").val();
                            var v8 = $this.$content.find("[name='cate_video_selected_id']").val();
                            var v9 = $this.$content.find("[name='cate_yunvideo_selected_id']").val();

                            var obj7 = jQuery(htm2).find("[name='image_categories']").parent().html();
                            obj7 = obj7.replace("image_categories", "cate_image_selected_id").replace("image_categories", "cate_image_selected_id").replace('<option value="0">所有</option>', "<option value='0'>无</option>");
                            $this.$content.find("[name='cate_image_selected_id']").parent().html(obj7 + '<span class="description clear">最好能与对应列表内的选择的分类一致</span>');
                            if (jQuery.trim(v7) == "") v7 = "0";
                            if (v7) $this.$content.find("[name='cate_image_selected_id']").val(v7);

                            var obj8 = jQuery(htm2).find("[name='video_categories']").parent().html();
                            obj8 = obj8.replace("video_categories", "cate_video_selected_id").replace("video_categories", "cate_video_selected_id").replace('<option value="0">所有</option>', "<option value='0'>无</option>");
                            $this.$content.find("[name='cate_video_selected_id']").parent().html(obj8 + '<span class="description clear">最好能与对应列表内的选择的分类一致</span>');
                            if (jQuery.trim(v8) == "") v8 = "0";
                            if (v8) $this.$content.find("[name='cate_video_selected_id']").val(v8);

                            var obj9 = jQuery(htm2).find("[name='yunvideo_categories']").parent().html();
                            obj9 = obj9.replace("yunvideo_categories", "cate_yunvideo_selected_id").replace("yunvideo_categories", "cate_yunvideo_selected_id").replace('<option value="0">所有</option>', "<option value='0'>无</option>");
                            $this.$content.find("[name='cate_yunvideo_selected_id']").parent().html(obj9 + '<span class="description clear">最好能与对应列表内的选择的分类一致</span>');
                            if (jQuery.trim(v9) == "") v9 = "0";
                            if (v9) $this.$content.find("[name='cate_yunvideo_selected_id']").val(v9);


                            $this.initDependency();
                        });
                    } else {
                        $this.initDependency();
                    }

                });

            } else {
                isneed_initchanged = true;
            }

            $this.initDependency("fast");
            if (isneed_initchanged) {
                $this.initchanged();
            }
        },
        initchanged: function () {
            var $this = this;
            $content = this.$content;
            $content.find("select,input[type='hidden'].val,input[type='hidden'].qfe_vc_param_value,.qfe-textarea,input[type='radio'],input[type='checkbox']").bind("change", function (e) {
                if (jQuery(this).hasClass("attach_images") || jQuery(this).hasClass("attach_localvideos") || jQuery(this).hasClass("attach_yunvideos")) {
                    //多个的不适宜快速预览
                } else {
                    $this.onchangeItemPreviewPre(this, e, 100);
                }
            });
            $content.find("input[type='text'].qfe_vc_param_value").bind("keyup", function (e) {
                $this.onchangeItemPreviewPre(this, e, 1000);
            });
        },
        initDependency: function (flag) {
            // setup dependencies
            var $dt_masters = $('[name=d_t]', this.$content);
            var binded_hookDependentTab = false;
            var need_run_dependence_elements = {};

            _.each(this.mapped_params, function (param) {
                var $slave = $('[name= ' + param.pn + ']', this.$content);
                if (_.isObject(param) && _.isObject(param.d_t) && _.isString(param.d_t.element)) {
                    //这个each每次只执行一次的
                    _.each($dt_masters, function (master) {
                        var $master = $(master), rules = param.d_t;
                        if (!_.isArray(this.dependent_elements[$master.attr('name')])) this.dependent_elements[$master.attr('name')] = [];
                        this.dependent_elements[$master.attr('name')].push($slave);
                        if (!binded_hookDependentTab) {
                            $master.unbind('keyup change').bind('keyup change', this.hookDependentTab);
                            binded_hookDependentTab = true;
                        }
                        //this.hookDependentTab({currentTarget:$master}, [$slave]);
                        if (_.isString(rules.callback)) {
                            window[rules.callback].call(this);
                        }
                    }, this);
                    //...
                }

                if (_.isObject(param) && _.isObject(param.dependency) && _.isString(param.dependency.element)) {
                    var $masters = $('[name=' + param.dependency.element + ']', this.$content);
                    _.each($masters, function (master) {
                        var $master = $(master),
                            rules = param.dependency;
                        if (!_.isArray(this.dependent_elements[$master.attr('name')])) this.dependent_elements[$master.attr('name')] = [];
                        this.dependent_elements[$master.attr('name')].push($slave);

                        $master.bind('keyup change', this.hookDependent);
                        //this.hookDependent({currentTarget:$master}, [$slave]);
                        need_run_dependence_elements[param.dependency.element] = $master;
                        if (_.isString(rules.callback)) {
                            window[rules.callback].call(this);
                        }
                    }, this);
                }
            }, this);

            _.each($dt_masters, function (master) {
                var $master = $(master);
                this.hookDependentTab({currentTarget: $master}, null);
            }, this);

            _.each(need_run_dependence_elements, function (master) {
                var $master = $(master);
                this.hookDependent({currentTarget: $master}, null);
            }, this);
            //console.log(new Date().getTime());

            if (flag != "fast") {
                this.initchanged();
            }


        },
        hookDependent: function (e, dependent_elements) {
            var $master = $(e.currentTarget);

            var master_value,
                is_empty,
                dependent_elements = _.isArray(dependent_elements) ? dependent_elements : this.dependent_elements[$master.attr('name')],
                master_value = $master.is(':checkbox') ? _.map(this.$content.find('[name=' + $(e.currentTarget).attr('name') + ']:checked'),
                    function (element) {
                        return $(element).val();
                    })
                    : $master.val();
            is_empty = $master.is(':checkbox') ? !this.$content.find('[name=' + $master.attr('name') + ']:checked').length
                : !master_value.length;

            var tab = $('[name="d_t"]', this.$content);
            if ($master.attr("name") == "template") {
                _.each(dependent_elements, function ($element) {
                    var pn = $element.attr('name'), $param_block = $element.closest('.vc-column');
                    if ($master.val() == "login" && tab.val() == 1) {
                        $param_block.show();
                    } else {
                        $param_block.hide();
                    }
                })
            }

            if ($master.is(':hidden') && !$master.is('[type=hidden]')) {
                _.each(dependent_elements, function ($element) {
                    $element.closest('.vc_row-fluid').hide();
                });
            } else {
                _.each(dependent_elements, function ($element) {
                    var pn = $element.attr('name'),
                        rules = _.isObject(this.mapped_params[pn]) && _.isObject(this.mapped_params[pn].dependency) ? this.mapped_params[pn].dependency : {},
                        $param_block = $element.closest('.vc-column');
                    //console.log('element');
                    if (_.isBoolean(rules.not_empty) && rules.not_empty === true && !is_empty) { // Check is not empty show dependent Element.
                        $param_block.show();
                    } else if (_.isBoolean(rules.is_empty) && rules.is_empty === true && is_empty) {
                        $param_block.show();
                    } else if (_.intersection((_.isArray(rules.value) ? rules.value : [rules.value]), (_.isArray(master_value) ? master_value : [master_value])).length) {
                        $param_block.show();
                    } else {
                        $param_block.hide();
                    }

                    //$element.trigger('change');
                }, this);

                called = true;
            }
            return this;
        },

        hookDependentTab: function (e, dependent_elements) {
            var $master = $(e.currentTarget);
            var p = $master.parent();
            if (this.isfirst == true) {
                p.find(".vc_tab").removeClass("on");
                p.find(".vc_tab:first").addClass("on");
                this.isfirst = false;
            }
            p.find(".vc_tab").each(function (i) {
                jQuery(this).unbind("click").bind("click", function () {
                    $master.val(i + 1).trigger('change');
                    p.find(".vc_tab").removeClass("on");
                    jQuery(this).addClass("on");
                    if (jQuery(".widgetFrameDiv:visible").length > 0) {
                        widget_from_colorpicker(jQuery(".widgetFrameDiv:visible"));
                    }
                })
            });

            var master_value,
                is_empty,
                dependent_elements = _.isArray(dependent_elements) ? dependent_elements : this.dependent_elements[$master.attr('name')],
                master_value = $master.is(':checkbox') ? _.map(this.$content.find('[name=' + $(e.currentTarget).attr('name') + ']:checked'),
                    function (element) {
                        return $(element).val();
                    })
                    : $master.val();

            is_empty = $master.is(':checkbox') ? !this.$content.find('[name=' + $master.attr('name') + ']:checked').length
                : !master_value.length;

            if ($master.is(':hidden') && !$master.is('[type=hidden]')) {
                _.each(dependent_elements, function ($element) {
                    $element.closest('.vc_row-fluid').hide();
                });
            } else {
                var masters = new Array();
                _.each(dependent_elements, function ($element) {
                    var pn = $element.attr('name');
                    var rules = _.isObject(this.mapped_params[pn]) && _.isObject(this.mapped_params[pn].d_t) ? this.mapped_params[pn].d_t : {};
                    var $param_block = $element.closest('.vc-column');
                    if (_.isBoolean(rules.not_empty) && rules.not_empty === true && !is_empty) { // Check is not empty show dependent Element.
                        $param_block.show();
                    } else if (_.isBoolean(rules.is_empty) && rules.is_empty === true && is_empty) {
                        $param_block.show();
                    } else if (_.intersection((_.isArray(rules.value) ? rules.value : [rules.value]), (_.isArray(master_value) ? master_value : [master_value])).length) {
                        $param_block.show();
                    } else {
                        $param_block.hide();
                    }
                    //console.log($element);
                    if (_.isObject(this.mapped_params[pn]) && _.isObject(this.mapped_params[pn].dependency) && _.isString(this.mapped_params[pn].dependency.element)) {
                        var d_parent = this.mapped_params[pn].dependency.element;
                        var d_master = this.$content.find('[name=' + d_parent + ']');

                        var find_flag = false;
                        for (var i = 0; i < masters.length; i++) {
                            if (masters[i] == d_parent) {
                                find_flag = true;
                                break;
                            }
                        }
                        if (!find_flag) {
                            masters[masters.length] = d_parent;
                        }
                    }
                }, this);
                for (var i = 0; i < masters.length; i++) {
                    var d_parent = masters[i];
                    ;
                    var d_master = this.$content.find('[name=' + d_parent + ']');
                    if (_.isObject(d_master)) {
                        d_master.trigger('change');
                    }
                }
            }

            return this;
        },
        setActive: function () {
            this.$el.prev().addClass('active');
        },
        window: function () {
            return window;
        },
        getParams: function () {
            var attributes_settings = this.mapped_params,
                params = _.extend({}, this.model.get('params'));
            _.each(attributes_settings, function (param) {
                var value = vc.atts.parseFrame.call(this, param);
                if (_.isNull(value) || value === '') {
                    delete params[param.pn];
                } else {
                    params[param.pn] = value;
                }
            }, this);
            return params;
        },
        getParams2: function () {
            var attributes_settings = this.mapped_params,
                params = _.extend({}, this.model.get('params'));
            _.each(attributes_settings, function (param) {
                var value = vc.atts.parseFrame.call(this, param);
                if (_.isNull(value)) {
                    delete params[param.pn];
                } else {
                    params[param.pn] = value;
                }
            }, this);
            return params;
        },
        content: function () {
            return this.$content;
        },
        getFrameSet: function () {
            var widgetFrameDiv = this.$el.find(".widgetFrameDiv");
            var bg_color = widgetFrameDiv.find("[name='widget-[][bg_color]']").val();
            var bg_titleimg = widgetFrameDiv.find("[name='widget-[][bg_titleimg]']").val();
            var bg_titleimg_repeat = widgetFrameDiv.find("[name='widget-[][bg_titleimg_repeat]']").val();
            var bg_img = widgetFrameDiv.find("[name='widget-[][bg_img]']").val();
            var bg_img_repeat = widgetFrameDiv.find("[name='widget-[][bg_img_repeat]']").val();
            var frame_style = widgetFrameDiv.find("[name='widget-[][frame_style]']:checked").val();
            var frame_type = widgetFrameDiv.find("[name='widget-[][frame_type]']:checked").val();

            //var frame_type_checkbox = "";
            var frame_select_style = widgetFrameDiv.find("[name='widget-[][frame_select_style][" + frame_style + "]']:checked").val();
            var frame_header_bg_color = widgetFrameDiv.find("[name='widget-[][frame_header_bg_color][" + frame_style + "]']").val();
            //var frame_header_bg = widgetFrameDiv.find("[name='widget-[][frame_header_bg]["+frame_style+"]']").val();
            var frame_header_height = widgetFrameDiv.find("[name='widget-[][frame_header_height][" + frame_style + "]']").val();

            var frame_header_border_color = this.getBorderSet(widgetFrameDiv.find(".set_header_border_div"));
            var frame_content_border_color = this.getBorderSet(widgetFrameDiv.find(".set_content_border_div"));

            var frame_header_color = widgetFrameDiv.find("[name='widget-[][frame_header_color][" + frame_style + "]']").val();
            var frame_border_color = widgetFrameDiv.find("[name='widget-[][frame_border_color][" + frame_style + "]']").val();
            var frame_selected = widgetFrameDiv.find("[name='widget-[][frame_selected]']").attr("checked") == "checked" ? 1 : 0;
            var frame_padding_close = widgetFrameDiv.find("[name='widget-[][frame_padding_close]']").attr("checked") == "checked" ? 1 : 0;
            var frame_padding_tb_close = widgetFrameDiv.find("[name='widget-[][frame_padding_tb_close]']").attr("checked") == "checked" ? 1 : 0;
            var frame_active = widgetFrameDiv.find("[name='widget-[][frame_active]']:checked").val();
            var widgetTitleFont = widgetFrameDiv.find("[name='widget-[][widgetTitleFont]']").val();
            var widgetTitleFontSize = widgetFrameDiv.find("[name='widget-[][widgetTitleFontSize]']").val();
            var titleFontWeight = widgetFrameDiv.find("[name='widget-[][titleFontWeight]']").attr("checked") == "checked" ? 1 : 0;
            var titleFontIn = widgetFrameDiv.find("[name='widget-[][titleFontIn]']").attr("checked") == "checked" ? 1 : 0;
            var titleFontUnderline = widgetFrameDiv.find("[name='widget-[][titleFontUnderline]']").attr("checked") == "checked" ? 1 : 0;
            var widgetShadow = widgetFrameDiv.find("[name='widget-[][widgetShadow]']").val();
            var widgetShadowStyle = widgetFrameDiv.find("[name='widget-[][widgetShadowStyle]']").val();
            var widgetShadowSize = widgetFrameDiv.find("[name='widget-[][widgetShadowSize]']").val();
            var widgetShadowColor = widgetFrameDiv.find("[name='widget-[][widgetShadowColor]']").val();
            return "bg_color=" + bg_color + "&bg_titleimg=" + bg_titleimg + "&bg_titleimg_repeat=" + bg_titleimg_repeat + "&bg_img=" + bg_img + "&bg_img_repeat=" + bg_img_repeat + "&frame_style=" + frame_style + "&frame_type=" + frame_type + "&frame_select_style=" + frame_select_style
                + "&frame_header_bg_color=" + frame_header_bg_color + "&frame_header_color=" + frame_header_color + "&frame_border_color=" + frame_border_color
                + "&frame_selected=" + frame_selected + "&frame_padding_close=" + frame_padding_close + "&frame_padding_tb_close=" + frame_padding_tb_close + "&frame_active=" + frame_active + "&widgetTitleFont=" + widgetTitleFont + "&widgetTitleFontSize=" + widgetTitleFontSize
                + "&widgetTitleFontSize=" + widgetTitleFontSize + "&titleFontWeight=" + titleFontWeight + "&titleFontIn=" + titleFontIn + "&titleFontUnderline=" + titleFontUnderline + "&widgetShadow=" + widgetShadow
                + "&widgetShadowStyle=" + widgetShadowStyle + "&widgetShadowSize=" + widgetShadowSize + "&widgetShadowColor=" + widgetShadowColor + "&frame_header_height=" + frame_header_height + "&frame_header_border_color=" + frame_header_border_color + "&frame_content_border_color=" + frame_content_border_color;

        },
        getBorderSet: function (widgetBorderDiv) {
            var arrayObj = new Array();
            arrayObj[0] = widgetBorderDiv.find("[name='useSameSetting']").attr("checked") == "checked" ? 1 : 0;
            arrayObj[1] = widgetBorderDiv.find("[name='set_border_top_size']").val();
            arrayObj[2] = widgetBorderDiv.find("[name='set_border_top_color']").val();
            arrayObj[3] = widgetBorderDiv.find("[name='set_border_top_line']").val();
            arrayObj[4] = widgetBorderDiv.find("[name='set_border_bottom_size']").val();
            arrayObj[5] = widgetBorderDiv.find("[name='set_border_bottom_color']").val();
            arrayObj[6] = widgetBorderDiv.find("[name='set_border_bottom_line']").val();
            arrayObj[7] = widgetBorderDiv.find("[name='set_border_left_size']").val();
            arrayObj[8] = widgetBorderDiv.find("[name='set_border_left_color']").val();
            arrayObj[9] = widgetBorderDiv.find("[name='set_border_left_line']").val();
            arrayObj[10] = widgetBorderDiv.find("[name='set_border_right_size']").val();
            arrayObj[11] = widgetBorderDiv.find("[name='set_border_right_color']").val();
            arrayObj[12] = widgetBorderDiv.find("[name='set_border_right_line']").val();
            arrayObj[13] = widgetBorderDiv.find("[name='set_border_top_coloropt']").val();
            arrayObj[14] = widgetBorderDiv.find("[name='set_border_bottom_coloropt']").val();
            arrayObj[15] = widgetBorderDiv.find("[name='set_border_left_coloropt']").val();
            arrayObj[16] = widgetBorderDiv.find("[name='set_border_right_coloropt']").val();
            return arrayObj.join("|^|");

        },
        getfontsvalue: function () {
            if (this.$el.find(".fonts_container").length > 0) {
                this.$el.find(".fonts_container").each(function () {
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


        },
        save: function () {

            if (!this.model) return false;
            var id = this.model.get("id");
            var tag = this.model.get("id");

            var old = this.model.get('params');
            if (tag == "vc_column" || tag == "vc_column_inner" || tag == "vc_column_embad") {
                var ne = this.getParams2();
            } else {
                var ne = this.getParams();
            }
            var widgetFrameDiv = this.$el.find(".widgetFrameDiv");
            if (widgetFrameDiv.length == 1) {
                ne.frame_set = this.getFrameSet();
            }
            var widgetBorderDiv = this.$el.find(".set_border_table");
            /* if(widgetBorderDiv.length==1){
			ne.box_border_settings = this.getBorderSet(this.$el.find(".set_border_table"));
	  }else if(widgetBorderDiv.length==2){
			ne.box_border_settings = this.getBorderSet(this.$el.find(".set_border_table:first"));
			ne.box_border_settings2 = this.getBorderSet(this.$el.find(".set_border_table:eq(1)"));
	  }*/
            $this = this;

            this.$el.find(".set_border_table_contrainer").each(function () {
                if (jQuery(this).closest(".widgetFrameDiv").length == 0) {
                    var name = jQuery(this).prev().attr("name");
                    ne[name] = $this.getBorderSet(jQuery(this));
                }
            })

            var ischanged = true;
            ne.updateparamtime = (new Date()).getTime();
            if (ischanged) {
                ajaxBeforeLoading(id);
            }
            this.model.save({params: ne});

            //this.showMessage(window.sprintf(window.i18nLocale.inline_element_saved, vc.getMapped(this.model.get('shortcode')).name), 'success');
        },
        previewElement: function (e) {
            this.savePage(e, "preview");
        },
        savePage: function (e, preview) {
            e.stopPropagation();
            e.preventDefault();
            var $this = this;

            //.....
            if (this.$el.find(".ff_kz").length > 0) {
                this.$el.find(".ff_kz").each(function () {
                    var to = $(this).attr("data-to");
                    var title = $(this).closest(".vc-row").find("[name='" + to + "']");
                    var text = title.val();
                    var v = $(this).find("input").val();
                    if (v && text) {
                        var text = title.val();
                        if(title.attr("type")!="text"){
                            text = text.replace(/<.*?>/ig,"");
                        }
                        jQuery.post("/admin/admin-ajax.php", {"action": "auto_create_fonts", "text": text, "font": v});
                    }
                })
            }

            if (top.jQuery(".boxy-wrapper:visible [name='icon_link']").length > 0 && top.jQuery(".boxy-wrapper:visible [name='icon_hovertext']").length > 0) {
                top.jQuery(".boxy-wrapper:visible .buttonClass0").click();
                setTimeout(function () {
                    $this.savePage(e)
                }, 500);
                return;
            }
            this.getfontsvalue();
            var $savebtn = $(e.currentTarget);

            this.$el.find('.vc-panel-message').remove();
            var buttonHtml = $savebtn.text();


            if (!this.model) {
                return false;
            }
            var shortcode = this.model.get('shortcode');
            if (shortcode == 'vc_row' || shortcode == 'vc_row_inner' || shortcode == 'vc_row_embad') {
                var mp4_on = this.$el.find("[name='background_video_on']").val();
                if (mp4_on == "on") {
                    var mp4_input = this.$el.find("[name='background_video_mp4']");
                    var mp4_id = mp4_input.val();
                    var mp4 = mp4_input.closest(".my_param_block").find("select option[value='" + mp4_id + "']").html();
                    if (mp4) {
                        var tmpmp4 = mp4.split("大小:");
                        tmpmp4 = tmpmp4[tmpmp4.length - 1];
                        tmpmp4 = tmpmp4.replace("M", "");
                        if (tmpmp4 * 1 > 10) {
                            top.jAlert("背景视频必须小于10M，否则打开页面速度会有影响。");
                            return false;
                        }
                    }
                }
            }
            if ($savebtn.hasClass("btn")) {
                $savebtn.addClass('btn_data_onsaving').attr("data-old-btnname", $savebtn.html()).prop('disabled', true).prop('btn_data_onsaving', true).html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
            }
            var params = this.getParams();
            if (this.model && this.model.get('shortcode') != 'vc_raw_js' && this.model.get('shortcode') != 'vc_bit_raw_video') {
                var obj = this.$el.find("textarea[name='content']");
                if (obj.length > 0) {
                    obj.before("<div style='display:none' id='hiddenContentToSave'>" + obj.val() + "</div>");
                    var tmp = this.$el.find("#hiddenContentToSave");
                    tmp.find(".vc-controls").remove();
                    tmp.find(".qfe_wrapper").removeAttr("class");
                    tmp.find(".qfe_content_element").removeAttr("class");
                    tmp.find(".column_container").removeAttr("class");
                    tmp.find(".builder-editor").removeAttr("class");
                    tmp.find(".vc-element").removeAttr("class").removeAttr("data-model-id").removeAttr("data-tag");
                    obj.val(tmp.html());
                    tmp.remove();
                }
            }

            var force_update = false;

            if (this.model && (this.model.get('shortcode') == 'slidercontent' || this.model.get('shortcode') == 'tabcontent' || this.model.get('shortcode') == 'accordioncontent')) {
                var id = this.model.get("id");
                var buttons = "";
                this.$el.find('.qfe_el_type_objects .gallery_widget_attached_images_list li.added').each(function () {
                    var $element = $(this);
                    var modelId = $element.attr('modelid');
                    var val = $element.find("input").val();
                    val = "-~~-" + base64_encode(val);
                    buttons += val + ";"
                    if (modelId == "" && $element.attr('clone-modelid')) {
                        var org_model = vc.shortcodes.get($element.attr('clone-modelid'))
                        var new_model;
                        vc.clone_index = vc.clone_index / 10;
                        new_model = vc.CloneModel(org_model, org_model.get('parent_id'));
                        modelId = new_model.get("id");
                        vc.ShortcodesBuilder.render();
                        $element.attr("modelid", modelId);
                        $element.removeAttr("clone-modelid")
                    }
                    var index = $element.index();
                    vc.shortcodes.get(modelId).save({order: index});
                });
                params.buttons = buttons;
                force_update = true;

                var widgetBorderDiv = this.$el.find(".set_border_table");
                if (widgetBorderDiv.length > 0) {
                    widgetBorderDiv.each(function () {
                        var val = jQuery(this).prev().attr("name");
                        params[val] = $this.getBorderSet(jQuery(this));
                    })

                }


            }

            if (this.model.get('shortcode') == 'vc_bit_qqmaps' || this.model.get('shortcode') == 'mini_qqmap') {
                var bit_qqmaps_frame = this.$el.find('#bit_qqmaps').contents();
                var vc_bit_qqmaps_str = "address:" + bit_qqmaps_frame.find('#address').val()
                    + "||zoom:" + bit_qqmaps_frame.find('#zoom').val()
                    + "||lat:" + bit_qqmaps_frame.find('#lat').val()
                    + "||lng:" + bit_qqmaps_frame.find('#lng').val();
                params.bit_qqmaps = vc_bit_qqmaps_str;
                var moreinfo = new Array();
                var n = 0;
                this.$el.find('.mapobjects_inner .mapitem').each(function () {
                    var t1 = jQuery(this).find("[name='m_t1']").val();
                    var t2 = jQuery(this).find("[name='m_t2']").val();
                    var t3 = jQuery(this).find("[name='m_t3']").val();
                    if (t2 != "" && t3 != "") {
                        moreinfo[n] = t1 + "||" + t2 + "||" + t3;
                        n++;
                    }
                })
                if (n > 0) {
                    params.moreaddress = moreinfo.join("|^|");
                } else {
                    params.moreaddress = "";
                }
                force_update = true;
            } else if (this.model.get('shortcode') == 'vc_gallery') {
                //无法得知图片信息的变更
                force_update = true;
            }
            if (force_update) {
                var id = this.model.get("id");
                ajaxBeforeLoading(id);
                this.model.save({params: params});
                vc.ShortcodesBuilder.update(this.model);

            } else {
                $this.save();
            }
            if (preview != "preview") {
                vc.ShortcodesBuilder.save();
            }


            if (vc.frame_window.jQuery('body').hasClass("qfyinnersetting")) {
                vc.frame_window.jQuery('.qfy_inner_setting').removeClass("qfy_inner_setting");
                vc.frame_window.jQuery('body').removeClass("qfyinnersetting");
                vc.frame_window.jQuery('.qfy_inner_setting_parent').removeClass("qfy_inner_setting_parent");
                vc.frame_window.jQuery(".control-btn-inner").show();
                vc.frame_window.jQuery(".control-btn-outner").hide();
            }


        },
        savePageAndClose: function (e) {
            e.stopPropagation();
            e.preventDefault();
            var $this = this;
            if (top.jQuery(".boxy-wrapper:visible [name='icon_link']").length > 0 && top.jQuery(".boxy-wrapper:visible [name='icon_hovertext']").length > 0) {
                top.jQuery(".boxy-wrapper:visible .buttonClass0").click();
                setTimeout(function () {
                    $this.savePage(e);
                    $this.hide(e);
                }, 500);
                return;
            } else {
                this.savePage(e);
                this.hide(e);
            }
        },
        show: function () {
            //   iframeWin.jQuery('.popsetting').removeClass("popsetting");
            // if(this.model && this.model.view.$el) this.model.view.$el.addClass("popsetting");
            if (this.$el.is(':hidden')) vc.closeActivePanel();
            vc.active_panel = this;
            $(window).bind('resize.vcPropertyPanel', this.setSize);
            this.setSize();
            this.$el.show();
            if (!this.draggable) {
                this.$el.draggable({iframeFix: true, handle: '.panel-heading'});
                this.draggable = true;
            }
        },
        hide: function (e) {
            e && e.preventDefault();
            //if(this.model) this.model.view.$el.removeClass("popsetting");
            vc.active_panel = false;
            $(window).unbind('resize.vcPropertyPanel');
            this._killEditor();
            this.$el.css('width', '600px').attr('style', '').hide();
            if (jQuery(".popover.bottom.in:visible").length > 0) {
                jQuery(".popover.bottom.in:visible").remove();
            }
            if (this.$content) {
                this.$content.html('');
            }
            var newContent = vc.ShortcodesBuilder.getContent();

            if (lastVcContent != newContent) {
                vc.ShortcodesBuilder.save(true);
            }
        },
        setTitle: function () {
            this.$el.find('.panel-title').text(vc.getMapped(this.model.get('shortcode')).name + ' 设置');
            return this;
        },
        _killEditor: function () {
            if (!_.isUndefined(window.tinyMCE)) {
                $('textarea.textarea_html', this.$el).each(function () {
                    var id = $(this).attr('id');
                    window.tinyMCE.execCommand("mceRemoveControl", true, id);
                });
            }
        }
    });
    /**
     * Post custom css
     * @type {Number}
     */
    vc.PostSettingsPanelView = vc.PanelView.extend({
        events: {
            'click [data-save=true]': 'save',
            'keydown .qfe_custom_post_css_editor': 'addTab',
            'click [data-dismiss=panel]': 'hide',
            'mouseover [data-transparent=panel]': 'addOpacity',
            'mouseout [data-transparent=panel]': 'removeOpacity'
        },
        initialize: function () {
            vc.$custom_css = $('#vc-post-custom-css');
        },
        render: function () {
            this.$title = this.$el.find('#vc-page-title-field');
            this.$title.val(vc.title);
            !vc.$title.length && $('#vc-settings-title-container').hide();
            this.$editor = this.$el.find('.qfe_custom_post_css_editor');
            this.$editor.val(vc.$custom_css.val());
            return this;
        },
        /**
         * Add /t symbol on tab key bu to next when focus on custom css textarea
         * @param e
         */
        addTab: function (e) {
            if (e.keyCode === 9) {
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
        save: function () {
            var title = this.$title.val();
            if (title != vc.title) {
                vc.frame.setTitle(title);
            }
            vc.$custom_css.val(this.$editor.val());
            vc.frame_window.vc_iframe.loadCustomCss(this.$editor.val());
            this.showMessage(window.i18nLocale.css_updated, 'success');
            // this.hide();
        }
    });
    /**
     * Templates editor
     * @type {*}
     */
    vc.TemplatesEditorPanelView = vc.PanelView.extend({
        events: {
            'click [data-dismiss=panel]': 'hide',
            'mouseover [data-transparent=panel]': 'addOpacity',
            'mouseout [data-transparent=panel]': 'removeOpacity',
            'click .qfe_remove_template': 'removeTemplate',
            'click [data-template_id]': 'loadTemplate',
            'click #vc-template-save': 'saveTemplate'
        },
        render: function () {
            this.$name = $('#vc-template-name');
            this.$list = $('#vc-template-list');
            return this;
        },
        /**
         * Remove template from server database.
         * @param e - Event object
         */
        removeTemplate: function (e) {
            e && e.preventDefault();
            var $button = $(e.currentTarget);
            var template_name = $button.closest('.qfe_template_li').find('a').text();
            var answer = confirm(window.i18nLocale.confirm_deleting_template.replace('{template_name}', template_name));
            if (answer) {
                // this.reloadTemplateList(data);
                $.post(window.ajaxurl, {
                    action: 'qfe_delete_template',
                    template_id: $button.attr('rel'),
                    vc_inline: true
                });
                $button.closest('.qfe_template_li').remove();
            }
        },
        /**
         * Load saved template from server.
         * @param e - Event object
         */
        loadTemplate: function (e) {
            e && e.preventDefault();
            var $button = $(e.currentTarget);
            $.ajax({
                type: 'POST',
                url: window.ajaxurl,
                data: {
                    action: 'vc_inline_template',
                    template_id: $button.data('template_id'),
                    vc_inline: true
                },
                context: this
            }).done(function (html) {
                var $html = $(html),
                    template = $($html.get(0)).html(),
                    data = JSON.parse($($html.get(1)).text());
                vc.ShortcodesBuilder.buildFromTemplate(template, data);
                this.showMessage(window.i18nLocale.template_added, 'success');
                /*
           _.each(vc.filters.templates, function (callback) {
           shortcodes = callback(shortcodes);
           });
           */
                //vc.storage.append(shortcodes);
                //Shortcodes.fetch({reset: true});
            });
        },
        /**
         * Save current shortcode design as template with title.
         * @param e - Event object
         */
        saveTemplate: function (e) {
            e.preventDefault();
            var name = this.$name.val(),
                data, shortcodes;
            if (_.isString(name) && name.length) {
                shortcodes = vc.ShortcodesBuilder.getContent();
                if (!$.trim(shortcodes).length) {
                    this.showMessage(window.i18nLocale.template_is_empty, 'error');
                    return false;
                }
                data = {
                    action: 'qfe_save_template',
                    template: shortcodes,
                    template_name: name
                };
                this.$name.val('');
                this.showMessage(window.i18nLocale.template_save, 'success');
                this.reloadTemplateList(data);
            } else {
                this.showMessage(window.i18nLocale.please_enter_templates_name, 'error');
            }
        },
        reloadTemplateList: function (data) {
            this.$list.html(window.i18nLocale.loading).load(window.ajaxurl, data);
        }
    });
    vc.RowLayoutEditorPanelView = vc.PanelView.extend({
        events: {
            'click [data-dismiss=panel]': 'hide',
            'click .bithelper': 'bit_video_helper',
            'mouseover [data-transparent=panel]': 'addOpacity',
            'mouseout [data-transparent=panel]': 'removeOpacity',
            'click .vc-layout-btn': 'setLayout',
            'click #vc-row-layout-update': 'updateFromInput',
            'change #vc-row-mobile-layout-select': 'layout_select',
            'click .bit-change-type': 'changetype',
        },

        layout_select: function () {
            var v = $('#vc-row-mobile-layout-select').val();
            if ($("#vc-row-mobile-layout").val() == "") {
                $("#vc-row-mobile-layout").val($("#vc-row-layout").val());
            }
            if (v == "2") {
                $('.vc-row-mobile-layout-select-div').show();
            } else {
                $('.vc-row-mobile-layout-select-div').hide();
            }
            if (v != "") {
                $('.vc-row-mobile-layout-select-div2').show();
            } else {
                $('.vc-row-mobile-layout-select-div2').hide();
            }
        },
        render: function (model) {
            this.$el.addClass("animated_new");
            this.$input = $('#vc-row-layout');
            if (model) this.model = model;
            this.addCurrentLayout();
            this.layout_select();
            vc.column_trig_changes = true;
            var tag = this.model.get("shortcode");
            if (tag == "vc_row") {
                if (iframeWin.jQuery("[data-model-id='" + model.get('id') + "']").closest(".section-special").length > 0) {
                    this.$el.find(".bit-change-type").hide();
                } else {
                    this.$el.find(".bit-change-type").show();
                }
            } else {
                this.$el.find(".bit-change-type").hide();
            }
            return this;
        },
        hide: function (e) {
            e && e.preventDefault();
            vc.active_panel = false;
            this.$el.hide();
            vc.column_trig_changes = false;
        },
        addCurrentLayout: function () {
            vc.shortcodes.sort();
            var string = _.reduce(vc.shortcodes.where({parent_id: this.model.get('id')}), function (memo, model) {
                return memo + (memo != '' ? ' + ' : '') + model.getParam('width');
            }, '', this);
            this.$input.val(string);
            var layout = 0;
            var padding = 0;
            var mobilestring = _.reduce(vc.shortcodes.where({parent_id: this.model.get('id')}), function (memo, model) {
                layout = model.getParam('layout');
                padding = model.getParam('mobilepaddingright');
                return memo + (memo != '' ? ' + ' : '') + model.getParam('mobilewidth');
            }, '', this);
            $('#vc-row-mobile-layout').val(mobilestring);
            $('#vc-row-mobile-padding').val(padding * 2);
            $('#vc-row-mobile-layout-select').val(layout).change();
            var params = this.model.get('params');
            $('#vc-row-layout-full').change(function () {
                if ($(this).val() == "no" || $(this).val() == "smfull") {
                    $('#vc-row-layout-contentspadding').closest(".vc-column").show();
                } else {
                    $('#vc-row-layout-contentspadding').closest(".vc-column").hide();
                }
            });
            if (params.full) {
                $('#vc-row-layout-full').val(params.full).change();
            }
            if (params.contentspadding)
                $('#vc-row-layout-contentspadding').val(params.contentspadding);
        },
        setLayout: function (e) {
            e && e.preventDefault();
            if (iframeWin.jQuery('.loadingClass').length == 0) {
                var $control = $(e.currentTarget),
                    layout = $control.attr('data-cells'),
                    columns = this.model.view.convertRowColumns(layout);
                this.$input.val(columns.join(' + '));
                $('#vc-row-mobile-layout').val("");
                $('#vc-row-mobile-padding').val("");
                $('#vc-row-mobile-layout-select').val("").change();
            }
        },
        updateFromInput: function (e) {
            e && e.preventDefault();
            var layout, cells = this.$input.val();
            if (iframeWin.jQuery('.loadingClass').length == 0) {
                var mobilelayout = $('#vc-row-mobile-layout-select').val();
                var padding = $('#vc-row-mobile-padding').val();
                if (mobilelayout == "2") {
                    //custom
                    var mobilecells = $('#vc-row-mobile-layout').val();
                    var split1 = cells.replace(/\s/g, '').split('+');
                    var split2 = mobilecells.replace(/\s/g, '').split('+');

                    if ((layout = this.validateCellsList(cells)) !== false && mobilecells != "" && split1.length == split2.length && (layout2 = this.validateCellsList(mobilecells)) !== false) {
                        this.model.view.convertRowColumns(layout, mobilelayout, padding, layout2);
                    } else {
                        jAlert(window.i18nLocale.wrong_mobilecells_layout);
                    }
                } else {
                    if ((layout = this.validateCellsList(cells)) !== false) {
                        this.model.view.convertRowColumns(layout, mobilelayout, padding);
                    } else {
                        jAlert(window.i18nLocale.wrong_cells_layout);
                    }
                }
                //....
                var full = $('#vc-row-layout-full').val();
                var contentspadding = $('#vc-row-layout-contentspadding').val();
                var section = this.model.view.$el.find(">section");
                section.removeClass("smfull bothfull full contentsPadding0 contentsPadding15 contentsPadding20 contentsPadding25 contentsPadding30 contentsPadding35 contentsPadding40 contentsPadding50 contentsPadding60 contentsPadding80 contentsPadding100");
                section.addClass(contentspadding);
                if (full == "yes") section.addClass("full");
                else if (full == "smfull") section.addClass("smfull");
                else if (full == "bothfull") section.addClass("bothfull");

                var params = this.model.get('params');
                params.full = full;
                params.contentspadding = contentspadding;
                this.model.save({params: params}, {silent: true});

            }
        },
        validateCellsList: function (cells) {
            var return_cells = [],
                split = cells.replace(/\s/g, '').split('+'),
                b;
            var sum = _.reduce(_.map(split, function (c) {
                if (c.match(/^[vc\_]{0,1}span\d{1,2}$/)) {
                    var converted_c = vc_convert_column_span_size(c);
                    if (converted_c === false) return 1000;
                    b = converted_c.split(/\//);
                    return_cells.push(b[0] + '' + b[1]);
                    return 12 * parseInt(b[0], 10) / parseInt(b[1], 10);
                } else if (c.match(/^[1-9]|1[0-2]\/[1-9]|1[0-2]$/)) {
                    b = c.split(/\//);
                    return_cells.push(b[0] + '' + b[1]);
                    return 12 * parseInt(b[0], 10) / parseInt(b[1], 10);
                }
                return 10000;

            }), function (num, memo) {
                memo = memo + num;
                return memo;
            }, 0);
            var $tt = sum % 12;
            //if(sum > 12) return false;
            if ($tt != 0 && 12 - $tt > 0.00001) return false;
            return return_cells.join('_');
        }
    });
})(window.jQuery);
