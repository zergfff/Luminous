/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2019-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: vie-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = [".qc",".banner-bottom","#qc_clgt",".advertisement","#ads-1xbet-catfish,\n#popup-1720497466,\n.banner728,\n.container > div[style^=\"height: 228px\"]",".float-ck-center-lt","#custom_html-42",".banner_site,\n.notify_auto,\n.sidebar_box_gray",".banner_top",".mp-adz","#catfish","#overlay","#banner","#pm_quangcao",".sda-catfish","#adspm4u",".ads-gg-top,\n.container + .col-xs-12.content_wrap,\n.content > .content > .content,\n.wrap-single > .pagination.text-center",".w1e48c4420b7073bc11916c6c1de226bb","#f186fb23a33995d91ce3c2212189178c8","#mp-preload-popup-overlay","#preload","#haun-player > div[style],\n#primary-nav > div[style],\n.separator","#xs-addd0","#popup-giua-man-hinh",".ad-container","#quangcaopc","#wap_bottombanner",".c-ad,\n.container.mt-1.d-none.d-lg-block,\n.menu-item-object-custom",".align-items-center.justify-content-between.d-flex.col-12 > .d-lg-none.d-block",".sub-menu.d-none.d-lg-flex",".marquee-container",".company","div[id^=\"dnn_\"]",".footer-banner","html > div[style]","a[rel=\"nofollow\"]","#match-child-1,\n.banner-link,\n.block-catfish.text-center.d-lg-none.d-block,\n.container > ul,\n.container.mt-1,\n.logo-cnt > .d-lg-none.d-block,\n.menu-cuoc-one88,\n.mt-5.d-lg-none.d-block.pb-2.text-center,\n.offer,\n.pl-lg-0.col-xl-4,\n.row.d-none,\n.widget-offers__list,\ndiv.d-lg-none.d-block:nth-of-type(3)",".match-detail__offer",".sk_balloon",".offer__btn",".menu-top-nha-cai",".menu-cuoc-8xbet","#bar_float_r,\n.quangcaomb",".toogle-ads",".box-ads,\n.linkBanner","#floating_ads_bottom_textcss_container,\n.module_home_ads,\n.module_single_ads",".adsMobile,\n.col-chat,\n.offer-rating.widget-offers__list",".dcmm-button-player.row",".adLogoPlayer",".sda-preload-popup,\n.sda-preload-popup-overlay",".banner-top","#bottomFixedDiv,\n#js_pup_navigation,\n#wAdList,\ntr[id^=\"word_\"]",".no-auto-popup","#player + div[id],\n.playover",".jw-logo","#fbox-background",".gnarty-offads","#sn-AnchorAd,\n.pAd,\n.relatedPostsAd,\ndiv.pAdin",".adNative",".ads","a[href^=\"/cgi-bin/to.cgi\"]",".block:has([data-adaptive])",".monkey-content-duoicanbiet,\n.monkey-section-tinnoibat,\ndiv.monkey-qc",".list-dat-cuoc",".widget.widget_text","div[id^=\"float\"],\ndiv[id^=\"hide_float\"]",".bannerBox,\n.footerBanner,\ncenter > [href*=\"tlink.vn\"]",".mb-4 > [style=\"min-height: 350px;\"]",".fixed","a[rel=\"noopener noreferrer\"]",".widget-wrap.widget_text",".div_box_adv",".alldiv ~ div[class]",".chapter-content .min-h-\\[275px\\]","[id$=\"bnr\"]",".top-right",".line-ads",".popup",".banner-ads,\ndiv#recent-content:nth-of-type(1)",".adsbygoogle","#bannerContainer1,\n#bannerContainer2,\n#sp-wrapper-hovering-format,\n.wam-banner,\ncenter:has(.adsbygoogle)","div.ad",".ad-manager-forum-list-bottom,\n.ad-manager-forum-list-top,\n.ad-manager-header,\n.ad-manager-thread-view-bottom,\n.ad-manager-thread-view-top,\na[rel=\"noopener noreferrer nofollow\"],\ndiv[style=\"margin:6px 0px 6px 0px\"]","#antiblocker,\n#antiblocker_underplayer","#footer_fixed_ads","#top_addd","#topbanner",".btn_small_fix_container",".ads-home-feed",".banner-bot-mobile,\n.banner-top-mobile",".preload","[href^=\"https://shope.ee\"]","#latest-censored-videos > .row > div.pb-3.col:nth-of-type(1),\n.v3sb-box",".cat-fish.a-play,\n.overlay",".ezo_ad",".ezoic-ad",".advbox","div[style=\"padding: 0px; margin: 10px 0 0 0 ; width: 100%;text-align: center;min-height: 280px;\"],\ndiv[style=\"width: 100%; min-height: 240px; text-align: center;\"],\ndiv[style=\"width: 100%; min-height: 90px; text-align: center;\"],\ndiv[style=\"width: 100%;text-align: center;min-height: 280px;\"]",".info-footer:nth-child(4)","#countdown,\n.section-gqc1,\ndiv[style=\"margin: 10px 0 5px 0; min-height: 250px;\"]","[href$=\"/goout/lazada\"],\nsection.nh-section:nth-of-type(5)","div[class*=\"ads\"]",".ads-embed","#mp-adx-b32","[class^=\"box_adv_ele\"]","#_pop-nettruyenww-15,\n#catfish-content,\n#pop_nettruyenww",".banner","#_pop-nettruyenx-13","#banner-qc_outstream,\n.adv_home_300_250,\n.nqc-zone","#itro_opaco","#mobile_content_bottom,\n.BanerTop100,\n.adv-300-right",".popUpBannerBox","#mobile_content_top",".i9bet",".code-block-1.code-block,\n.navbar-container + .container","#p-GMH","#fakeDown","#anchor-ad",".aSlP,\n.bef,\n.hmvD",".shadow-card + .mt-2","#adsposttop","#adrighttop",".adbox","#scriptDiv",".stream-item","#footer-widget-area",".google-auto-placed",".box,\n.pum","div#adsChapterTop","#ad_info_top,\n#catfishAd,\n#floating-banner-left,\n#floating-banner-right,\n#popup-truyenqq,\n#popup-truyenqq-home,\n.ads-banner,\ndiv#ad_info",".sticky-footer",".footer-info",".ai-viewport-1","#ads_preload1,\n#ads_preload2,\n#catfish-adv,\n.widget_text.text-center + .text-center","[class*=\"_banner\"]",".ads-menu-item,\n.dcmm-button-player-item,\n.divdatcuoc",".show-ads-banner,\n.widget",".item-qc",".Header_topBanner__1xD-2,\n.styles_bannerInArticleWrapper__rPPJH,\n.styles_topBanner__NL_gW","#BigBanner,\n.ads_position",".ads_txt,\n[href=\"https://tailieugiaovien.com.vn/\"]","#download_appnew,\n.box-most-viewed.box-course.box-slide,\ndiv.ads_ads,\nh3.sub-title,\nul.list:nth-of-type(2)","div[class^=\"adbox\"]","a.news__item--action:nth-of-type(2)","#article > .pt-3.text-centers,\n.text-muted","#balloon,\n.affiliate,\n.player-midpoint-progress",".banner-masthead","#link-view > center:nth-of-type(1)",".button-action-float-banner",".wtt-ads","#ouibounce-modal","#container-ads","a#banner",".pum-overlay","#adstop2,\n.ads-item,\n.col-lg-4.hidden-xs.d-flex.flex-column.address-wrap,\n.float-right",".adv-side-bar,\n.banner-adv-wrapper,\n.banner-adv-wrapper2,\n.item-qc1",".g-imgbot,\n.g-imgtop,\n.link2.group-link,\n.top-main > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)",".btn-bet",".active.bg-overlay","#catfish-ads",".banner-ads-cs",".td-container > div.td-pb-row > .td-pb-span12,\n.td-container-wrap.td-logo-wrap-full.td-banner-wrap-full,\n.td-crumb-container,\n.td_block_template_1.tdi_11.td-g-rec-id-sidebar,\n.td_block_template_1.tdi_28.td-g-rec-id-custom_ad_1.td-g-rec,\n.td_block_template_1.tdi_30.td-g-rec-id-sidebar.td-g-rec,\n.td_block_template_1.tdi_4.td-g-rec-id-custom_ad_1.td-g-rec,\n.td_block_template_1.tdi_6.td-g-rec-id-sidebar.td-g-rec,\n.td_block_template_1.tdi_9.td-g-rec-id-custom_ad_1.td-g-rec",".Float_ads,\n[id^=\"zone-ads\"]",".code-block-8.code-block,\n.ez-video-wrap",".bbMediaWrapper-inner > .samCodeUnit,\n.js-replyNewMessageContainer.block-body > div.samCodeUnit > .samItem,\n.p-footer,\n.samVideoOverlay","#hide_float_right",".a-header,\n.apu,\n.header","#myModal,\ndiv[id^=\"adsphim-\"]",".v4j-watch-1.v4j-content,\nbody > div[class]","#top_oddd",".underplayer_btn","a[rel=\"nofollow sponsored\"]",".-translate-x-1\\/2.transform.left-1\\/2.bottom-0.fixed",".ff-banner","div.py-2.md\\:py-6.mx-auto.w-full.max-w-screen-3xl > div.relative","#backgroundPopupp,\n#popupContact","#ds_top,\n.hidden-md.right.col-3,\nbody > .container > div","div[class*=\"size-\"]","#m-bet",".fade.show,\n.ibs-bet",".btn-betnow",".box-host,\n.btn-bet-top,\n.item-betnow",".topbanner",".btn-fanpage.btn-default.btn-block.btn","[onclick^=\"__a.hide\"],\ndiv:has([class$=\"-modal\"])",".hd-tube-desktop,\n.hd-tube-mobile","#hide_catfish","#menubentrai,\n.gnartyx-offads","#invideo_wrapper,\n.Ads,\n.mobile-catfixx",".pc-catfixx",".bnqcclm",".adsphim-mobile-popup",".ad-pin-right-bottom",".adv","[href*=\"hnmac.vn\"],\n[href*=\"laptopvang.com\"],\n[href*=\"macbookgiasi.vn\"],\n[href*=\"macone.vn\"],\n[href*=\"minhtuanmobile.com\"],\n[href*=\"vender.vn\"],\ndiv.\\35 fb1ed6025b0b.widget:nth-of-type(3)",".header-fix-ads,\n.lepopup-popup-container,\n.lepopup-popup-overlay","#header-ads-full,\n#shoppe_ads_fly,\n.ads-responsive,\n[id^=\"ads-\"]","#mp-preload-pp-overlay,\n.adpl",".btn-betting,\n.datCuocBTN,\n.modelAds,\n.nhacaiuytin,\n.text-running",".sticky",".container-banner,\n.modal-ads,\ndiv[class^=\"slide-bar\"]",".container > .row > center","[id^=\"Balloon_\"]","#menu-main-menu > .menu-nha-cai-uy-tin.menu-item.nav-item.style-2 > .nav-link,\n.bookmaker-selector-container,\n.c-int.d-lg-none.d-block,\n.container > .row > .col-12,\n.d-lg-none.d-block.p-1.text-center,\n.gmd-match-footer__odds,\n.justify-content-center.d-flex > .btn-primary.btn,\n.mt-1.d-lg-flex.d-none.sub-menu,\n.nav-wrap > a[rel=\"nofollow\"],\na.d-lg-none.d-block:nth-of-type(2)",".cashfish",".btn-bottom-right-append-player,\n.images-bnr-bellow-append-custom,\n.images-top-pl",".btn-odds",".btn-od",".d-lg-flex.d-none.p-0.company.flex-1.table",".classvi,\n.elementor-section-height-default.elementor-section-boxed.elementor-element-e601265.elementor-element.elementor-top-section.elementor-section",".adspopupgiua,\n.adspopupleft,\n.adspopupright,\n.float-ckgiua",".grid-match__footer,\n.odds-comp,\n.w-100.justify-content-center.align-items-center.d-flex,\na.d-lg-none.d-block:nth-of-type(1)",".black-layout > div:nth-child(2),\n.popup_u,\ndiv[style^=\"position: absolute;top: 0;\"]","div#bnads",".wppopups-whole","#iklan-atas-wrapper","#top-banner-pc","#sponsor-balloon",".banner_list,\n.item-more,\n.nc_sidebar_home,\n.widget-sidebar-block",".body_wrapper1","#ads_location,\n.block.ad",".truct-catfish,\n.truct-widget",".chat-header,\n[href=\"https://8xbe52.com\"]","#pc-preload-modal,\n.quang-cao","#popup",".in.fade.modal-backdrop",".top-float-ck",".a--d-wrapper",".btm_bar",".footer-fixed-br-container",".catfish-bottom","#adx,\n.banner-preload,\n.catfish-top,\ndiv.banner-catfish-bottom","[href*=\"cellphones.com.vn\"]",".textwidget","#right_float,\n[id$=\"float_banner\"]",".link-gold,\n[id^=\"banner\"]","iframe[src*=\"ads\"]",".banner-shopee,\na[href^=\"https://shope.ee\"]",".MuiDialog-container,\n.MuiDialog-root,\n.MuiModal-backdrop,\n.css-ylxsn9.MuiStack-root,\n.vjs-banner-btn,\ndiv.css-m49bkq.MuiStack-root > a","#ad_global_below_navbar",".b-player",".baloon,\n.col-sm-10.kqcenter,\n.kqbackground.vien ~ a[target=\"_blank\"]","#qc-kpgame","#left_ads_float,\n#right_ads_float","#IMAGE635 > .ladi-transition.ladi-image,\n#IMAGE639 > .ladi-transition.ladi-image,\n#POPUP648,\n.backdrop-popup","#pc-catfix,\n.lightbox-player-pc,\n.mobile-catfix,\ndiv[id^=\"preload-\"]","#pc-top-banner,\n#quang-cao",".pc-catfix,\nmobile-catfix","#catfish-banner,\n#dl-banner-728x90,\n.center-screen.backdrop,\n.topless",".code-block",".ads-pc,\n.ads-sp","#popup_banner_beta",".boxzilla-bottom-right-container,\n[href^=\"https://gotrackecom.info\"]",".catfix",".xx-ads","#wap_bottombannerr,\n.grid-match[style]",".ads-floatingads,\n.banner-item,\n.top-nha-cai","#ad_balloon",".adpia_banner",".modal",".grid-match__footer > a.btn:nth-child(3),\n.mct_-bet-bot,\n.mmo-inner,\n.show.fade,\na[href^=\"/go\"]",".mmo",".btnz",".modal-backdrop.show",".fixed-bottom,\n.popup-banners",".pc_catfix_adv",".sbAdv","#adsTopInPageBanner,\n.adsContainer,\n.header__auth > .details__devices-list",".elementor-widget-image",".box-rating",".catfish-ck",".adx1","#ab_ctl,\n.bannerads","#ads_large_detail,\n#banner_top,\n#box_qua_tang_vne,\n#raovat,\n#rich-media-banner-ads,\n#sis_popup,\n#supper_masthead,\n.article_ads,\n.article_ads_300x250,\n.banner_mobile_300x250,\n.section_ads_300x250",".Notices.PanelScroller","div[class*=\"qca\"]",".content_middle_rightbar","winbox-1",".banners","._9xtpcl.c4je67d.c1qs0lzc.c1hrlkpu.cc2icwl.c1i0iccj.cfd18df,\n._9xtpcl.e1e6v8dt,\n.blbew80,\n.llnefd1,\n.lpp0nsn,\n.luq51lg.a13wihj,\n.pointer-events-auto.block,\n.zbgpvb19.zbgpvb16.zbgpvbj.zbgpvbh.zbgpvbg.zbgpvbf.zbgpvbe.zbgpvb1","#popup_fi","a[target=\"_blank\"][rel=\"nofollow noopener\"]","#idAdLink","#closeAds",".qc-inner,\ndiv[id^=\"qc_M_\"]",".sticky_bottom,\n.t_logo","p[style=\"color: rgb(174, 174, 174); margin-top: 10px; margin-bottom: 20px;\"]",".adv_phim,\n.fixed_bottom",".banner-sticky-footer-wrapper",".js-editors-choice-slider.editors-choice-slider > .adsbygoogle","[src^=\"https://ads.starzd.com/\"]",".btn-action,\n.btno-group.d-none.d-lg-flex,\n.container > .mt-1,\n.container > .mt-3,\n.d-lg-block,\n.justify-content-between.d-lg-none.d-flex.btno-group,\n.menu-item:has(a[rel=\"nofollow\"]),\n.topButton,\n.widget_offer,\nheader > .container",".ft-box,\n.vb-button > .mct_-bet,\ndiv.vebo-sp.container:nth-of-type(7)",".expand-static-banner,\n.preload-banner,\n.static-banner","#hots-btn,\n.bn-popup-bottom-sdwdwxw,\n[href=\"/top-nha-cai.html\"],\ndiv.row-nhacai,\nli.for-desktop-2 > [href^=\"https://debet.fun/\"],\nli.for-desktop-2 > [href^=\"https://net88.run/\"]",".show.modal",".v4j-header > a[target=\"_blank\"]",".quangcaomobile","#tut4ktream_idAdLink",".banner-catfish-bottom","#divExoLayerWrapper","#video_player ~ div[id]","div[style^=\"position:fixed;inset:0px;z-index:100000;\"]",".popup-overlay",".cash-fish,\n.cash-fish-pc,\n.preload-pc,\n.top-mobile-banner,\n.under-player-pc-banner",".v4j-header > center",".ads-wrapper",".v4j-header.v4j-content","body > [style*=\"position: fixed;\"]","#AgeModal",".sdzhead","#horizontal-ad",".banner-play",".ads-container",".ads_below_player",".qx_135","div[data-value=\"1\"]","[data-clm=\"ccccc2\"],\n[data-id=\"ap3poapup\"]",".footer-button-sign-in.hide-desk,\n.hide-desk.wrap-content > .wrap-btn-action,\n.menu-right-slide",".navbar-ex8-collapse","#bnc1","#bnc0","#sticky","#header-ads,\n#header-ads + center",".no-ads,\n.parent.special,\n.partner-me",".ad-floater,\n.popunder-link,\n.promotion-popup,\n.video-ad-layer","#ad-container,\n.uniad-player + div[style]","#sticky_ad,\ndiv.text-center:nth-of-type(2)","#adsbottom,\n.happy-under-player,\n.vailo-sticky,\n.vailo-under-navbar,\n.vailo-under-navbar-mobile","#position_full_top_banner_pc",".gc-header__wrapper + div[style]",".button-dangkyngay",".afw-topbanner","#banner3double","div[id^=\"adsWeb\"]","#pos-25,\n#pos-26","div[style=\"text-align:center;margin-top:0px;margin-bottom:0px;\"]","[class^=\"sticky-top\"],\n[href*=\"vietcombank.com.vn\"]",".bgadmtoptotal",".bannertop",".my_responsive_add,\n.titleBar + *,\n[class1=\"my_responsive_add\"]","#background_bg_link,\n#subRightAboveHome,\n.adv-24h-mid,\n.col:has(a[rel=\"nofollow\"]),\n.col:has(a[rel=\"sponsored\"]),\n.fixad300x600,\n.module3,\n[id^=\"ADS_\"]",".admicro",".top-header","#subiz_wrapper,\n.ad-embed",".features-r","#bannerMasthead,\n#desktop-home-top-page,\n#mobile-home-middle-1,\n#mobile-home-middle-2,\n#mobile-home-top-page,\n.ads-masthead",".sys-ads","#\\37 290,\n#\\38 893,\n#ke0v7etz,\n#kizq4u4r,\n#kjb6n9uy,\n#lnm1eu57,\n#lpr54voy,\n.ads-top,\n.top-advertisment","#topbn","#Adsv,\n.right-banner > a[title]",".__ads_click","#neo-right-ads","#BannerAdv","#gallery-2,\n.hd-cate-wrap,\n.home-qc-wrap,\n.home-sec-right .widget_media_image,\n.noname-left",".Advs_adv-components__1nBNS.Advs_adv-300x250__2eyhC.Advs_no-content__RWwW2,\n.HotTagGlobal_fixed-height__1f50i",".exp_qc_share",".c-banner",".bg-gray,\n.sidebar > div[style]","div[id^=\"adsbg\"]",".banrpstn","#myElementz,\n.bannerinfooter,\n.quang-cao-ben-phai","#vi-smartbanner,\n.LRBanner,\n.running.adsbyvli",".bg_allpopupss,\n.bgal_popndungalal,\n.bn1,\n.bn2,\n.box_quangcao_mobile_320x50,\n.box_text_qc,\ndiv.news-left-related:nth-of-type(2)","#tubia","[id^=\"admzone\"]",".khw-ads-wrapper.clearfix",".banner-bottom-menu,\n.popup-bg,\n.showpop,\n[href*=\"bit.ly\"]","#adrightsecondx,\n#adrightspecial,\n#adrightspeciallinks,\n#adsuggestion",".advertTop,\n.hsdn > li:has(.adsbygoogle),\n.module_plugins",".ads-sponsor,\n.khw-adk14-wrapper",".top-banner-mobile","[id^=\"adv\"]",".quang_cao_pc_right_hoc_tap",".ads_shortcode",".admicro_top","#adop_bfd,\nins[class*=\"adsby\"]",".sponsor-zone","div[id^=\"ads_\"]","#top-adv","#popup_center",".box-banner","div[class^=\"adv-\"]",".ads-970x280",".align-items-center.justify-content-between.d-flex.text-center.bg-grey-6.w-100,\n.d-flex.justify-content-between > div > div.d-flex.justify-content-around.mt-4,\n.pc-top,\n.top-ads-16x9","#myCarousel,\n.banner-boder-zoom",".block:has(.block-container > .block-body > a[href]),\n.block:has(.block-container > .block-body > ins)",".asd-headt,\n.detail__foru,\n.mb-40.section__qadd,\n.super-masthead,\n.top-banner,\n[class*=\"box-home\"],\n[data-marked-zoneid=\"tn_detail_danhchoban\"],\n[data-marked-zoneid=\"tn_detail_quantam\"],\n[id^=\"dablewidget_\"],\nzone","div[class$=\"_ads\"]",".zone-top,\n[id^=\"pos-\"]",".c-banner-item","div[id^=\"adsMobile\"]",".fyi",".ads-common-box",".p-body-pageContent > table[style=\"width:100%;display:inline-block;background: #fff;\"]",".jsx-3569995709,\n.micro,\n.middle-comment-promotion,\n.pro-container,\ndiv[style=\"width:300px;height:250px\"],\ndiv[style=\"width:300px;height:600px\"],\ndiv[style=\"width:320px;height:100px\"]","#main-videoplayer,\n#pc-top,\n.ads-position",".container .desktopjszone,\n.mobilejszone","#LeaderBoardTop,\n#admbackground,\n#adsMainFooter,\n.Mobile_Masthead_TTO_Wrapper,\n.adm-bot,\n.box-qad,\n.content-amuasam,\n.detail__qc,\n.section__r-vietlot,\n.wrapper-ads-mb",".clearfix.adregion,\n.visible-md.header-banners",".Flagrow-Ads-under-header",".vfs_banner","#vmcad_sponsor_middle_content,\n.box-adv,\n.mb-20.col-right-ads,\n.vmcadszone","section.mar20:nth-of-type(2),\nsection.mar20:nth-of-type(4)","#banner-dai-bottom,\n#banner-dai-top",".adsbypubpower,\n.v-element > .v-responsive,\ndiv.message--post,\ndiv[style]:has(.adsbypubpower)",".adContainer",".bf-3-primary-column-size.bs-vc-sidebar-column.vc_col-sm-3.vc_column_container.bs-vc-column.wpb_column > .wpb_wrapper.bs-vc-wrapper",".wrapper-adv","#banner1ab",".ad_by_yellowpages,\n.banner_add","#Zingnews_SiteHeader,\n.znews-banner",".block.translate-x-\\[-50\\%\\].left-2\\/4.z-\\[1\\].bottom-\\[-6px\\].fixed.mx-auto.md\\:container.md\\:px-0.px-4.w-screen",".group-link:has(a[href*=\"&utm_\"]),\n.topnhacai",".jw-button-image",".bet-btn-8423,\n.btn_betnow_632132,\n.highlight,\n.images-bnr,\n.images_fixed,\na.btn_fb:nth-of-type(2)",".odds-button,\n.odds-button2",".banner-bottom-append-custom,\n.button-in-player-box,\n.logo-top-right-append-custom","#banner_preload,\n.doc-truyen-ads-d1,\n.doc-truyen-ads-d2",".v4j-watch-1.v4j-content > center","li.special.parent"];

const hostnamesMap = new Map([["*",[0,1]],["anime47.app",[2,3]],["doctruyen3qw.pro",3],["www.toptruyenww.pro",3],["bluphim.art",4],["cliphot69.art",[5,6]],["phevkl.blog",[5,19,20,21]],["cliphotvn69.com",5],["xem15.com",[5,150]],["hh3dhay.life",5],["phim24h.mobi",[5,227]],["www.gvnvh.net",5],["mobiblog123.net",5],["phim18han.net",[5,54,84,246]],["tram3d.net",5],["sayhentai.one",5],["phimvuihd.org",5],["viet69.sale",[5,19,20,21,303]],["vutruphim.tv",[5,322]],["topviet69.vip",5],["vnesports.art",[7,8]],["mythethao.net",[8,243]],["motchilltvzz.biz",[9,10]],["motphimtvv.com",9],["www.mp.com",[9,103]],["phimnhanhvl.com",9],["movies.vkoolz.com",[9,23]],["subnhanh1.org",[9,55,285]],["ophimhd.vip",[9,24,326]],["motphimtv.ch",10],["hhtrungquoc6.com",[10,86]],["hhvsub.com",10],["phimbocn.com",10],["phimhoathinh3d.com",10],["wibu47.com",10],["yanhh3d.com",[10,23,159,160]],["hhhay.ink",[10,190]],["hentaivn.love",[10,214]],["hhtqvietsub.me",[10,216,217]],["hhtq3d.net",[10,86]],["hoathinh4k3.net",10],["motchilllb.net",10],["phimmoi2024.net",[10,24]],["hoathinh3dtq.site",10],["hoathinhtq.site",10],["dragonphim.tv",10],["hhh3d.tv",10],["hhninja12.tv",10],["hhtutien.tv",10],["hhchina.us",[10,217,323]],["animeweb.vip",[10,86]],["hhtq5.vip",10],["hhtq8.vip",[10,86]],["hh3d1.xyz",10],["xemphimchill.xyz",[10,23,24,111]],["phimbet.biz",[11,12]],["motchill.casa",[11,22]],["tructiepdabong5.co",[11,39,46,47,48]],["hhanime3d.com",[11,84,85]],["biphim.id",[11,35,169,170]],["dongphim.id",[11,84,171]],["subnhanh.id",[11,22,170]],["hhpanda.info",[11,84,85,170,183]],["phim.vkool8.net",[11,269,270]],["subnhanhvl.online",[11,22,84,85,170]],["dongchill.pro",[11,84]],["protruyen4.xyz",[11,251]],["phimmoichill.biz",13],["phimmoisz.biz",[14,15]],["tvzinghd.co",[14,49]],["phimmoinay.vip",[14,251]],["tamlinh247.biz",16],["khosex.blog",[17,18]],["sexheovl.com",[17,18]],["sexvip.lol",[17,18]],["trangsexdam.net",[17,18,185]],["sexviettop.blog",18],["sexsoc.info",[18,185]],["vlxxai.net",[18,185]],["javhd.social",[18,185]],["javhd.tech",[18,309]],["phimhay123.me",19],["viet69.town",[19,312]],["phimmoichillz.cc",[20,33,34]],["247phim.cc",[23,24]],["hayhaytv.cc",[23,24]],["boctem.com",23],["tvhay26.com",23],["web.vuaphimmoi.com",23],["bimmup.tv",[23,314]],["www.ssphim.us",[23,24]],["vungtv.us",[23,151]],["www.phimmoichilla.xyz",[23,24]],["ephoto360.com",[24,76]],["thiepmung.com",24],["phimmoi.ing",[24,84,151,186]],["cakhiai.cc",[25,26,27,28,29,30,31,32]],["xoilacxj.cc",[25,26,29,30,31,32,35,36,37,38,39,40,41]],["90phutz46.live",[25,26,30,31,37,41,203]],["unmanned-ship.org",[25,26,28,30,31,32,33,206,291]],["avvietsub.info",[26,175,176]],["rakhoiz31.live",[26,33,38,206]],["xoilaczz63.live",[26,37,40,41,206,208,211]],["phym18.lol",[26,175,212]],["nhentaivn.online",[26,175,280]],["xemtv.tvhayhd.tv",[26,319]],["phimsexsub.xyz",26],["mitomz21.live",[32,33,206,207,208]],["tructiep.caheo7.link",[33,198,199,200]],["bongda.rakhooi.tv",[33,198,199,318]],["abtruyenmoi.com",[35,52]],["doctruyenln.com",[35,73]],["xemtivi4k.com",[35,154]],["xem.tructiepnba.me",[35,221]],["ketqua04.net",[35,241]],["live2.thapcam120.net",[35,158,259]],["live3.thapcam27.net",[35,158,259]],["live2.thapcam29.net",[35,158,178,259,262]],["live4.thapcam29.net",[35,158,178,259]],["vidian.online",[35,283]],["damconuong.top",[35,189]],["bongdainfox.tv",35],["nghean24h.vn",35],["live4.thapcamm.xyz",[35,158,178,259,261,262]],["tuoi69.cfd",42],["heovktgame.club",43],["ketqua247vn.club",44],["phimmoi.club",45],["tvphim.id",45],["motphimww.net",45],["xoivo2.online",[47,48,136]],["123nhadatviet.com",50],["123nhadatviet.net",50],["tuoitre.vn",[50,398]],["tuoitrenews.vn",50],["live.7mvn4.com",51],["abysscdn.com",[53,54]],["freeplayervideo.com",[53,54]],["player-cdn.com",[53,54]],["geoip.redirect-ads.com",[53,54]],["animet3.ink",[54,55,187]],["phimss.net",[54,250]],["live4.xoilac34.org",[54,177,178,179,180,181,292]],["fdcdn.xyz",[54,414]],["watch.rkplayer.xyz",[54,417]],["animetvn4.com",[55,56]],["apkmoddone.com",[57,58]],["apkmoddone.phongroblox.com",[58,117,118]],["appvn.com",59],["javtopxx.com",[59,93]],["mod.lnpchannel.com",59],["vivuphim.info",[59,84,111]],["vlxx.mx",[59,173,230,231]],["soikeo365.net",[59,256]],["cungthi.online",[59,79]],["ghienphim.vip",[59,106,324,325]],["antt.vn",59],["bongda24h.vn",59],["kienthuc.net.vn",[59,377]],["nghenhinvietnam.vn",59],["saostar.vn",59],["v.xemphimviet.xyz",[59,106,325,420]],["asianbookie.com",60],["baomoi.com",61],["baonga.com",62],["bongda12h365.com",63],["canhrau.com",64],["topthuthuat.com",64],["chotlo3s.com",65],["www.clbgamesvn.com",66],["congthucvatly.com",[67,68]],["phuongtrinhhoahoc.com",[68,119]],["contuhoc.com",69],["www5.cbox.ws",69],["cryptoviet.com",70],["diadiem.com",71],["mobi.ditnhauvietnam.com",72],["javhdvip.net",72],["dualeotruyenbbq.com",74],["ebookbkmt.com",75],["fullcliphot.com",[77,78]],["fulllivehot.live",[77,204]],["live10.mannhan79.xyz",[77,199,415]],["gamehayvl.com",79],["giavang.net",79],["romgoc.net",79],["gocmod.com",80],["file.gocmod.com",81],["forum.gocmod.com",82],["hayghechill.com",83],["bichill.site",84],["truyensieuhay.com",[86,131]],["hoahoc247.com",87],["hoidap247.com",88],["huphimtv.com",[89,90]],["sexviet4.top",90],["www.iosviet.com",91],["javtiful.com",92],["laptrinhcanban.com",[94,95]],["yhocdata.com",[95,163]],["lichngaytot.com",96],["lichvannien365.com",97],["linkneverdie2.com",98],["linkneverdie.net",98],["linkneverdie.top",98],["loigiaihay.com",99],["metruyencv.com",100],["metruyencv.info",100],["metruyencv.net",100],["mmo4me.com",101],["baodauthau.vn",[101,334]],["motchillio.com",102],["muabanraovat.com",104],["nettruyenww.com",[105,106]],["truyengihotnay.com",[106,128]],["truyengihotnha.com",[106,128]],["truyengihotqua.com",[106,128]],["tenmientruyengi.net",[106,128]],["thichxemphim1.net",[106,264]],["tiemsachhay.net",[106,189,265]],["truyengihotdo.net",[106,128]],["truyengihotnha.net",[106,128]],["truyengihotqua.net",[106,128]],["truyengihotzay.net",[106,128]],["baoxaydung.com.vn",106],["taichinhdoanhnghiep.net.vn",[106,193]],["tienphong.vn",[106,334,391,392]],["toquoc.vn",106],["nettruyenx.com",107],["nhaccuatui.com",108],["phim202.com",109],["www.phimdinhcaoz.com",[110,111,112,113]],["phimlongtieng.com",[110,111,112,113,115]],["phimdinhcao.net",[110,111,113]],["phimlongtieng.net",[110,111,112,113,115]],["phimhaya.com",114],["phongroblox.com",116],["www.vip1s.top",[117,311]],["quantrimang.com",[120,121,122]],["hoatieu.vn",[120,142,199,368]],["vndoc.com",[122,142]],["khoahoc.tv",122],["download.com.vn",122],["download.vn",[122,150,359]],["gamevui.vn",122],["sieutamphim.com",123],["thuthuatjb.com",124],["thuthuattienich.com",125],["www.tiengnhatdongian.com",126],["ycongnghe.com",[126,161]],["toithuthuat.com",127],["truyenqqto.com",129],["truyensextv.com",130],["lxmanga.site",[130,306]],["tvhaiss.com",132],["tvhayd.com",133],["tvso1.com",134],["bongdaso66.net",[134,234]],["blog.abit.vn",[134,331]],["vaoroi365.com",[135,136]],["vesotantai.com",137],["vietcetera.com",138],["vietgiaitri.com",139],["vietjack.com",140],["www.vietjack.com",141],["vsc59.com",143],["vtruyen.com",144],["vuighe4.com",[145,146]],["xem1080.com",146],["web1s.com",147],["webhoctienganh.com",148],["webtretho.com",149],["ww1.xemphimhdc.com",[151,152]],["xemphimjav.com",153],["xosodaiphat.com",155],["xxoilac.com",[156,157,158]],["goal.90phut24.xyz",[157,158,413]],["live3.thapcam26.net",[158,177,178,206,259,260,261,262,263]],["hhtm.pro",159],["yeah1.com",162],["rphang.dog",164],["tuoinung.fan",165],["truyen18.fun",166],["cdnwp.icu",167],["mephim.ink",[167,191]],["jav.sexsub.icu",168],["motchilltv.id",172],["phim1080.in",173],["animew.info",174],["socolivebongda.net",[175,255]],["xem.banhkhuc120.info",[177,178,179,180,181]],["xem.vebo31.net",[177,178,179,181]],["vebo4.net",[177,178,179,181]],["doctruyenchu.info",182],["xem.javkche.info",184],["javhd.shop",185],["animevietsub.ink",[188,189]],["dubaotiente.io",[192,193]],["giadinhonline.vn",[193,356]],["nongnghiep.vn",[193,356]],["vietnamnet.vn",[193,402]],["maclife.io",194],["tapchibitcoin.io",195],["truyenfull.io",196],["cliphot69.lat",197],["keonhacai55.link",[201,202]],["xemtivingon.org",202],["mn.mediastation.live",205],["sexhd88.live",209],["sieukhung.live",210],["vn.phym18.lol",213],["www.gaingon18.me",215],["keoso.me",218],["ngaytho.me",219],["phimno1.me",220],["chat.vebotv.me",222],["chichnhau.mobi",[223,224,225,226]],["pheclip.one",[223,225]],["sieudamtv.run",[223,224]],["phim18vip.vip",[223,224,225]],["play.anh.moe",228],["viet69.moi",229],["haysex3xyz.net",230],["tvhayw.org",[230,290]],["phimtuoitho.site",230],["bantincongnghe.net",232],["blogkiienthuc.net",233],["chodansinh.net",235],["domdomcomics.net",236],["fastscans3.net",237],["xem19.gavang1.net",238],["xem20.gavang1.net",238],["gockhuat.net",239],["vn.javbabe.net",240],["khiphach.net",242],["www.o-study.net",244],["ophimhdvn3.net",245],["phimgichill.net",[245,247]],["phimnhua.net",248],["phimsexgaito.net",249],["phimtho.net",251],["soikeoz.vip",[251,278]],["sachmoi.net",252],["sexhdpro.net",[253,254]],["jav.vc",253],["vlxyz.tube",254],["tenovi.net",[257,258]],["truyentuan.xyz",[258,418]],["noitu.pro",[263,295]],["tracnghiem.net",266],["phimmoi.tuphim.net",267],["vietmoz.net",268],["vphims.net",270],["www.vlxxhot.net",[271,272]],["vailonxx.vip",[272,328]],["vnexpress.net",273],["vozer.net",274],["vtipster.net",275],["vuonhoalan.net",276],["zcine.net",277],["bongda365.news",278],["www.buomtv.one",279],["phimhaymoi.online",281],["tut4ktream.online",282],["blogtruyenvn.org",284],["hayhaytv.org",285],["lmssplus.org",286],["mphim14.org",287],["phimreview.org",288],["truyenaudiocv.org",289],["chillphimmoi.pro",293],["home2.mannhan9.pro",294],["phimsexhay669.pro",296],["phimsexmoi5s.pro",297],["phim.sexdb.pro",297],["sexgaidep69.pro",297],["sexvn2024.pro",298],["phim.sexxsub.pro",[299,300]],["vl.phe.to",[300,310]],["youtubeporn.pro",[301,302]],["vectorx.top",301],["hls.playerfb.xyz",301],["phim18hd.sex",304],["hd.javhay.site",305],["sex.tuoi69.store",307],["filemoon.sx",308],["the.tube",313],["hentaihvn.tv",315],["phim33.tv",316],["phimdacap.tv",317],["vieclam.tv",[320,321]],["xskt.com.vn",321],["tram3d.vip",327],["2banh.vn",329],["2game.vn",330],["afamily.vn",332],["sport5.vn",332],["autodaily.vn",333],["xehay.vn",[333,409]],["www.baogiaothong.vn",335],["phapluatplus.baophapluat.vn",336],["videophapluat.baophapluat.vn",337],["cafebiz.vn",338],["cafef.vn",339],["ttvn.toquoc.vn",339],["chap.vn",340],["24h.com.vn",341],["autopro.com.vn",342],["baohaugiang.com.vn",343],["congan.com.vn",344],["daklak24h.com.vn",345],["dantri.com.vn",346],["doisongphapluat.com.vn",347],["vtcnews.vn",347],["nld.com.vn",348],["tapchikientruc.com.vn",349],["thanhtra.com.vn",350],["thoidai.com.vn",351],["petrotimes.vn",351],["www.thuocbietduoc.com.vn",352],["thuongtruong.com.vn",353],["thuysanvietnam.com.vn",354],["voh.com.vn",355],["congluan.vn",356],["congly.vn",357],["thitruongtaichinhtiente.vn",[357,390]],["danviet.vn",358],["eva.vn",360],["fshare.vn",361],["game24h.vn",362],["game8.vn",363],["gameio.vn",364],["gamek.vn",365],["soha.vn",365],["genk.vn",366],["vnews.gov.vn",367],["hosocongty.vn",369],["kenh14.vn",370],["kinhtedothi.vn",[371,372]],["minhngoc.net.vn",372],["vn-z.vn",372],["lazi.vn",373],["lucloi.vn",374],["muare.vn",375],["myeva.vn",376],["phunumoi.net.vn",378],["nhipcaudautu.vn",378],["nhacdj.vn",379],["olug.vn",380],["qdnd.vn",381],["reatimes.vn",382],["rung.vn",383],["www.saostar.vn",384],["sharecode.vn",385],["techrum.vn",386],["thanhnien.vn",387],["thethao247.vn",388],["thethaovanhoa.vn",389],["tinnhanhchungkhoan.vn",392],["tiin.vn",393],["timdaily.vn",394],["tinhte.vn",395],["tinmoi.vn",396],["tintucvietnam.vn",397],["tuyengiao.vn",399],["v4u.vn",400],["vietfones.vn",401],["vietq.vn",403],["viettelstore.vn",404],["voz.vn",405],["vtvgo.vn",406],["vungoctuan.vn",407],["webthethao.vn",408],["yellowpages.vn",410],["znews.vn",411],["www.vipphim.wiki",412],["plcdn.xyz",416],["vietxxx.xyz",419]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["livescore.com",[0]],["msn.com",[0]],["dm.de",[0]],["medium.com",[0]],["vnexpress.net",[1]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
