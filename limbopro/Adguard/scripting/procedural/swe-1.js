/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

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

// ruleset: swe-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\":is(.sjofa-top-takeover, .sjofa-artikel-pano)\",\"tasks\":[[\"upward\",\"section\"]]}"],["{\"selector\":\".slide-entry-excerpt\",\"tasks\":[[\"has-text\",\"/annons:/i\"],[\"upward\",\".avia-content-slider\"]]}"],["{\"selector\":\".label\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\".highlighted-article-block\"]]}"],["{\"selector\":\".slick-slide\",\"tasks\":[[\"has-text\",\"/casino/i\"]]}"],["{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"spath\",\" + .textwidget\"]]}","{\"selector\":\"body\",\"action\":[\"remove-class\",\"unselectable\"]}"],["{\"selector\":\":is(div[id^=\\\"everysport_pano\\\"], div[id^=\\\"everysport_mobil\\\"], div[id^=\\\"everysport_rektangel\\\"])\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Spel och dobbel\"],[\"spath\",\" ~ p\"]]}"],["{\"selector\":\".smallNewsCategory\",\"tasks\":[[\"has-text\",\"/sponsr/i\"],[\"upward\",\".smallNewsLink\"]]}","{\"selector\":\"img[src*=\\\"/images/annonser/\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\":is(div[class^=\\\"u-text\\\"], h2)\",\"tasks\":[[\"has-text\",\"/^Reklam$/\"],[\"upward\",\"section\"]]}"],["{\"selector\":\"body\",\"action\":[\"remove-class\",\"modal-open\"]}"],["{\"selector\":\"article.grid\",\"tasks\":[[\"has-text\",\"/annonssamarbete/i\"]]}"],["{\"selector\":\"a.js_commercial-text--link-text\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"upward\",\".jwplayer_video-videoArea\"]]}","{\"selector\":\"div.wings-gray-200\",\"tasks\":[[\"has-text\",\"Annons\"]]}","{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"ANNONS:\"]]}"],["{\"selector\":\".badge\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\"li\"]]}"],["{\"selector\":\".container\",\"tasks\":[[\"has-text\",\"Senaste nyheterna om spelbolag:\"]]}","{\"selector\":\"div.section-body-plus\",\"tasks\":[[\"has-text\",\"/bonus|casino/i\"]]}"],["{\"selector\":\".label-sponsor\",\"tasks\":[[\"upward\",\".panel\"]]}"],["{\"selector\":\".bbSize\",\"tasks\":[[\"has-text\",\"Sponsormeddelande\"],[\"upward\",\".bbRelatedBox\"]]}","{\"selector\":\"div[class^=\\\"card-info\\\"]\",\"tasks\":[[\"has-text\",\"/spons/i\"],[\"upward\",\".card\"]]}"],["{\"selector\":\"a[target]\",\"tasks\":[[\"upward\",\".frontlinks tr\"]]}"],["{\"selector\":\".sponsored-notification\",\"tasks\":[[\"upward\",\"[id^=\\\"post-\\\"]\"]]}"],["{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/^i samarbete med/i\"],[\"upward\",2]]}"],["{\"selector\":\"div[class*=\\\"section-preview\\\"]\",\"tasks\":[[\"has-text\",\"/betalt samarbete/i\"],[\"upward\",4]]}"],["{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"/poker|casino|kasino|betting/i\"],[\"upward\",\"li\"]]}"],["{\"selector\":\".vc_row_inner\",\"tasks\":[[\"has-text\",\"casino\"]]}"],["{\"selector\":\".nyhetsochreseartiklar .views-row\",\"tasks\":[[\"has-text\",\"/casino/i\"]]}"],["{\"selector\":\".et_pb_module\",\"tasks\":[[\"matches-css\",{\"name\":\"content\",\"pseudo\":\"before\",\"value\":\"^\\\"Annons:\\\"$\"}]]}"],["{\"selector\":\"#root > div:first-child\",\"tasks\":[[\"matches-css\",{\"name\":\"position\",\"value\":\"^fixed$\"}]]}","{\"selector\":\":is([id*=\\\"_panorama\\\"], [id*=\\\"_mobil\\\"])\",\"tasks\":[[\"upward\",\"div[display=\\\"block\\\"]\"]]}","{\"selector\":\":is([id*=\\\"_panorama\\\"], [id*=\\\"_outsider\\\"], [id*=\\\"_insider\\\"], [id*=\\\"_mobil\\\"])\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"/^Annons/\"],[\"upward\",\"a\"]]}","{\"selector\":\"div[class*=\\\"AdWrapper\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"legend\",\"tasks\":[[\"has-text\",\"Annons\"]]}"],["{\"selector\":\".holidAds\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/^Annons$/\"],[\"upward\",1],[\"spath\",\" + .textwidget\"]]}"],["{\"selector\":\"#tv-schedule section\",\"tasks\":[[\"has-text\",\"ANNONS\"]]}","{\"selector\":\"body\",\"action\":[\"remove-class\",\"takeover-loading\"]}"],["{\"selector\":\".card-header\",\"tasks\":[[\"has-text\",\"Annons\"],[\"upward\",\".card\"]]}"],["{\"selector\":\".article-tag-header\",\"tasks\":[[\"has-text\",\"/Annons/i\"],[\"upward\",\"article\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/^/$/\"],[\"spath\",\" p\"],[\"has-text\",\"Artikeln innehåller annonslänkar\"],[\"upward\",\"a\"]]}","{\"selector\":\"#main > div > div > div\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"/^annons/i\"]]}]]}","{\"selector\":\"[data-ad-subtype]\",\"tasks\":[[\"upward\",1],[\"matches-css\",{\"name\":\"min-height\",\"value\":\"[0-9]+\"}]]}","{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Kommersiell text, innehåller annonslänkar\"]]}","{\"selector\":\"a[href^=\\\"https://kampanj.\\\"]\",\"tasks\":[[\"upward\",1],[\"spath\",\":not(section):not(div[class^=\\\"article-wrapper\\\"])\"]]}","{\"selector\":\"article[class^=\\\"article-wrapper\\\"] ~ div\",\"tasks\":[[\"has-text\",\"ANNONS\"]]}","{\"selector\":\"aside > div\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"/^annons/i\"]]}]]}","{\"selector\":\"div[class^=\\\"hyperion-css\\\"]\",\"tasks\":[[\"matches-css\",{\"name\":\"margin\",\"value\":\"32px\"}],[\"spath\",\":has(iframe[src*=\\\"tize.no\\\"])\"]]}","{\"selector\":\"main > section > div:first-child\",\"tasks\":[[\"matches-css\",{\"name\":\"box-shadow\",\"value\":\"^rgba\\\\(0, 0, 0, 0\\\\.2\\\\) 0px 0px 24px 0px$\"}]]}","{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"/^PRESENTERAS AV$/\"],[\"upward\",1]]}","{\"selector\":\"section > div\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"/^annons/i\"]]}]]}","{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/^annons/i\"],[\"upward\",\"a\"]]}","{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"/ANNONS/i\"],[\"upward\",\"p\"]]}"],["{\"selector\":\"section.elementor-section\",\"tasks\":[[\"has-text\",\"Huvudsponsorer & partners\"]]}"],["{\"selector\":\"article\",\"tasks\":[[\"matches-css\",{\"name\":\"content\",\"pseudo\":\"after\",\"value\":[\"Annonssamarbete\",\"i\"]}]]}","{\"selector\":\"div[class^=\\\"css-\\\"]\",\"tasks\":[[\"matches-css\",{\"name\":\"content\",\"value\":[\"Annons\",\"i\"]}],[\"upward\",\"article\"]]}","{\"selector\":\"div[class^=\\\"css-\\\"]\",\"tasks\":[[\"matches-css\",{\"name\":\"min-height\",\"value\":\"420px|400px|320px|312px\"}]]}"],["{\"selector\":\".block-title\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"Reklamsamarbete\"],[\"upward\",\".td_block_wrap\"],[\"spath\",\" + rs-module-wrap\"]]}","{\"selector\":\".block-title\",\"tasks\":[[\"has-text\",\"Reklamsamarbete\"],[\"upward\",\".td_block_wrap\"]]}","{\"selector\":\".td-adspot-title-span\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"a[href*=\\\"reklamsamarbete\\\"]\",\"tasks\":[[\"upward\",\".td_block_wrap\"]]}"],["{\"selector\":\".strossle-widget\",\"tasks\":[[\"upward\",\"div[style^=\\\"min-height\\\"]\"]]}"],["{\"selector\":\".unslider-wrap.unslider-carousel > li\",\"tasks\":[[\"has\",{\"selector\":\".preamble-category\",\"tasks\":[[\"has-text\",\"/^annons/i\"]]}]]}"],["{\"selector\":\"a\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"/betting|utan registrering|casino/i\"],[\"upward\",\"article, .slide-item\"]]}"],["{\"selector\":\".text-sm\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\".border-b, a[target]\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"ANNONS\"],[\"upward\",\".et_pb_text\"]]}"],["{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Annons\"],[\"upward\",2]]}"],["{\"selector\":\".label\",\"tasks\":[[\"has-text\",\"/sponsrad/i\"],[\"upward\",\"a\"]]}"],["{\"selector\":\".post-item__tag\",\"tasks\":[[\"has-text\",\"/spons/i\"],[\"upward\",\"li.post-item\"]]}"],["{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"/spons/i\"],[\"upward\",\".widget_text\"]]}"],["{\"selector\":\"article\",\"action\":[\"remove-class\",\"closed\"]}"],["{\"selector\":\".slick-slide\",\"tasks\":[[\"has-text\",\"/sponsra/i\"]]}"],["{\"selector\":\".adlabel\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".colorized\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\"a\"]]}","{\"selector\":\".elevated-button\",\"tasks\":[[\"has-text\",\"/^Cookie/\"],[\"upward\",\".container\"]]}","{\"selector\":\".label\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",1]]}","{\"selector\":\".sponsored-chip\",\"tasks\":[[\"matches-css\",{\"name\":\"display\",\"value\":\"^block$\"}],[\"upward\",\"a\"]]}","{\"selector\":\"img[src*=\\\"/borskollen_newsletter\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Sponsrad\"],[\"upward\",\".article\"]]}"],["{\"selector\":\"body > .elementor > .elementor-section:first-child\",\"tasks\":[[\"has-text\",\"Annons\"]]}"],["{\"selector\":\"a.click-track, img.click-track\",\"action\":[\"remove-class\",\"click-track\"]}","{\"selector\":\"a.click-track-attachment-preview, img.click-track-attachment-preview\",\"action\":[\"remove-class\",\"click-track-attachment-preview\"]}","{\"selector\":\"img[data-click-track]\",\"action\":[\"remove-attr\",\"data-click-track\"]}"],["{\"selector\":\"aside .textwidget\",\"tasks\":[[\"has-text\",\"/sponsr|samarbetspartners/i\"]]}"],["{\"selector\":\".post_sponsrad_label\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"ANNONS\"],[\"upward\",\"article:not([id])\"]]}"],["{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"/samarbete/i\"],[\"upward\",\".post-wrap\"]]}"],["{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"/^senaste nytt från våra partners/i\"],[\"upward\",\".card--muted\"]]}"],["{\"selector\":\"small\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\".elementor-column\"]]}"],["{\"selector\":\":is(.text-text-secondary, span.font-bold)\",\"tasks\":[[\"has-text\",\"ANNONS\"],[\"upward\",2]]}","{\"selector\":\"a[href*=\\\"/ps-partner\\\"]\",\"tasks\":[[\"upward\",\"section.cat-post-widget\"]]}"],["{\"selector\":\".text-right\",\"tasks\":[[\"has-text\",\"ANNONS\"]]}","{\"selector\":\"a[href^=\\\"https://dagenstech.se/articles/\\\"]\",\"tasks\":[[\"upward\",1],[\"has-text\",\"SPONSRAT\"]]}"],["{\"selector\":\".list-article__item-inscription\",\"tasks\":[[\"has-text\",\"/sponsrat innehåll/i\"],[\"upward\",\".list-article__item\"]]}"],["{\"selector\":\".heading\",\"tasks\":[[\"has-text\",\"/samarbete/i\"],[\"upward\",\".elementor-widget-smartmag-featgrid\"]]}","{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"/^annons/i\"]]}"],["{\"selector\":\"div[data-advadstrackid]\",\"tasks\":[[\"upward\",\".x-bar-footer\"]]}","{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Advertorial\"],[\"upward\",1]]}"],["{\"selector\":\"div[data-losjs^=\\\"borka\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"video\",\"action\":[\"remove-attr\",\"data-auto-play\"]}"],["{\"selector\":\".rightdiv p\",\"tasks\":[[\"has-text\",\"/casino|kasino|lån|betting|odds|lotto/i\"]]}"],["{\"selector\":\"li\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\".content-label\",\"tasks\":[[\"has-text\",\"/annons/i\"]]}]]}"],["{\"selector\":\".label-sponsored\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"upward\",\"#latest-slider a\"]]}","{\"selector\":\"strong\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"/samarbete|sponsrat/i\"],[\"upward\",\"li\"]]}"],["{\"selector\":\"html[data-impression-tracking-endpoint]\",\"action\":[\"remove-attr\",\"data-impression-tracking-endpoint\"]}"],["{\"selector\":\".aside-list--heading\",\"tasks\":[[\"has-text\",\"/^sponsra/i\"],[\"upward\",\".aside-list\"]]}","{\"selector\":\".code-block\",\"tasks\":[[\"has-text\",\"/annons/i\"]]}"],["{\"selector\":\"section.c-native_banner\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"em\",\"tasks\":[[\"has-text\",\"Annonser\"],[\"upward\",2]]}"],["{\"selector\":\".adaptive\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has-text\",\"ANNONS\"]]}"],["{\"selector\":\"article.elementor-grid-item\",\"tasks\":[[\"has-text\",\"reklamsamarbete\"]]}"],["{\"selector\":\"div.flowy-wp-protected-content\",\"action\":[\"remove-class\",\"flowy-wp-protected-content\"]}","{\"selector\":\"p.has-text-align-center\",\"tasks\":[[\"has-text\",\"Annons:\"]]}"],["{\"selector\":\"a\",\"action\":[\"remove-attr\",\"data-t-label\"]}","{\"selector\":\"a\",\"action\":[\"remove-attr\",\"data-t-type\"]}","{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"/annons:/i\"],[\"upward\",\"p\"]]}"],["{\"selector\":\".video-player\",\"action\":[\"remove-attr\",\"data-ad-config\"]}","{\"selector\":\"video[autoplay]\",\"action\":[\"remove-attr\",\"autoplay\"]}"],["{\"selector\":\"article\",\"tasks\":[[\"has-text\",\"/annons:/i\"]]}"],["{\"selector\":\"f-internallinks-new\",\"tasks\":[[\"has-text\",\"Annons\"]]}"],["{\"selector\":\":is(a[target=\\\"_blank\\\"]:not([href^=\\\"/\\\"], [href*=\\\"filatelisten.se\\\"]))\",\"tasks\":[[\"upward\",\"section\"]]}"],["{\"selector\":\".news\",\"tasks\":[[\"has-text\",\"casino\"]]}","{\"selector\":\"em\",\"tasks\":[[\"has-text\",\"/sponsrad/i\"],[\"upward\",\".row.news\"]]}"],["{\"selector\":\".tdm-descr\",\"tasks\":[[\"has-text\",\"/casino/i\"]]}"],["{\"selector\":\".feat-cat\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\"a\"]]}"],["{\"selector\":\"article.status-publish\",\"tasks\":[[\"has-text\",\"/annonssamarbete/i\"]]}"],["{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"/lån|casino|kasino/i\"],[\"upward\",\"p\"]]}"],["{\"selector\":\":is(div[class*=\\\"vicky-whitebox\\\"], .vicky-category-label, .vicky-video-infobox-label, .vicky-post-headline-container__category__inner)\",\"tasks\":[[\"has-text\",\"/spons/i\"],[\"upward\",\"a, .carousel-caption, .featurette, article\"]]}"],["{\"selector\":\"body.tingle-enabled\",\"action\":[\"remove-class\",\"tingle-enabled\"]}"],["{\"selector\":\".ticker-title\",\"tasks\":[[\"has-text\",\"/partner/i\"],[\"spath\",\" + .mh-section\"]]}","{\"selector\":\".ticker-title\",\"tasks\":[[\"has-text\",\"/partner/i\"]]}"],["{\"selector\":\".c-announcement\",\"tasks\":[[\"has-text\",\"/annons/i\"]]}"],["{\"selector\":\":is(.notice__tag_sponsored, .notice__tag)\",\"tasks\":[[\"has-text\",\"/sponsrat/i\"],[\"upward\",1]]}"],["{\"selector\":\"button\",\"tasks\":[[\"has-text\",\"Besök annonsör\"]]}"],["{\"selector\":\"article\",\"tasks\":[[\"has-text\",\"/är en annons/i\"]]}"],["{\"selector\":\".category\",\"tasks\":[[\"has-text\",\"/spons/i\"],[\"upward\",\"article\"]]}"],["{\"selector\":\".mark\",\"tasks\":[[\"has-text\",\"/spons/i\"],[\"upward\",\".post\"]]}"],["{\"selector\":\".td-block-title-wrap\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",1]]}"],["{\"selector\":\".wp-block-column > h2\",\"tasks\":[[\"has-text\",\"/annonser/i\"],[\"spath\",\" ~ p\"]]}","{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/annonserat innehåll/i\"],[\"upward\",\".td_block_wrap\"]]}"],["{\"selector\":\".fp-carousel .fpci-kicker\",\"tasks\":[[\"has-text\",\"/^sponsr/i\"],[\"upward\",\".fpc-item\"]]}"],["{\"selector\":\"h4\",\"tasks\":[[\"has-text\",\"/sponsrade länkar/i\"],[\"upward\",\".link-list\"]]}"],["{\"selector\":\"#grtvbelt_Sponsored\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".ad_interscroller\",\"tasks\":[[\"upward\",\".wrapper\"]]}","{\"selector\":\".colHomePlayer:has([data-slotads=\\\"videoad\\\"])\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"video\",\"action\":[\"remove-attr\",\"data-autoplay\"]}"],["{\"selector\":\"a p[class^=\\\"hyperion-css\\\"]\",\"tasks\":[[\"has-text\",\"INNEHÅLLER ANNONSLÄNKAR\"],[\"upward\",\"li, a.internal-link\"]]}","{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Annons\"],[\"upward\",1]]}"],["{\"selector\":\"[id^=\\\"adPlacement\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"div.g:has(a[href*=\\\".com.se/\\\"])\",\"tasks\":[[\"has-text\",\"/återförsäljare|rea|garanti|lågt pris|nöjd|priser|shop|bra pris|kläder|skor|outlet|frakt|butik|betala|kundkorg|varukorg/i\"]]}","{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Annons\"],[\"upward\",\"#topstuff\"]]}"],["{\"selector\":\"a[href*=\\\"casino\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"p[style^=\\\"text-transform\\\"]\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"spath\",\" + .wp-block-kadence-posts\"]]}","{\"selector\":\"p[style^=\\\"text-transform\\\"]\",\"tasks\":[[\"has-text\",\"/annons/i\"]]}"],["{\"selector\":\":is(small, span)\",\"tasks\":[[\"has-text\",\"/sponsrad/i\"],[\"upward\",\"article, li, a\"]]}","{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/annons från/i\"],[\"upward\",\"div[class^=\\\"ArticleContent_articlePage\\\"]\"]]}"],["{\"selector\":\":is(.main-article-container, section > div.flex.items-center.gap-4)\",\"tasks\":[[\"has-text\",\"/Sponsrad Artikel/i\"]]}"],["{\"selector\":\"div[id^=\\\"hitta_mobile_\\\"].placeholder\",\"tasks\":[[\"upward\",\"div[class^=\\\"height\\\"], div[class^=\\\"style_breakout\\\"]\"]]}"],["{\"selector\":\"small\",\"tasks\":[[\"has-text\",\"/annons/i\"]]}"],["{\"selector\":\".mini-title-link:not(.w-condition-invisible)\",\"tasks\":[[\"has-text\",\"/sponsra/i\"],[\"upward\",1]]}"],["{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"/samarbete/i\"],[\"upward\",\"li.item\"]]}"],["{\"selector\":\":is(a[href*=\\\"casino\\\"], a[href*=\\\"speltips\\\"])\",\"tasks\":[[\"upward\",\".widget\"]]}","{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Speltips\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\".code-block-label\",\"tasks\":[[\"has-text\",\"Annons:\"]]}","{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"Annons:\"],[\"upward\",\".code-block\"]]}"],["{\"selector\":\"body\",\"action\":[\"remove-class\",\"advert-take-over-active\"]}"],["{\"selector\":\".article\",\"tasks\":[[\"has-text\",\"/sponsrad artikel/i\"]]}"],["{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\"aside\"]]}"],["{\"selector\":\"div[id^=\\\"ad-panorama\\\"]\",\"tasks\":[[\"upward\",\".elementor-section\"]]}"],["{\"selector\":\".elementor-heading-title\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\".elementor-column\"]]}"],["{\"selector\":\".sidebar-block\",\"tasks\":[[\"has-text\",\"/annons|sponsor/i\"]]}"],["{\"selector\":\".card-partner\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"body\",\"action\":[\"remove-class\",\"mega-loading\"]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"/annonser:/i\"],[\"upward\",\".widget_block\"]]}"],["{\"selector\":\".cookieBarWrapper\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"[class*=\\\"carousel_sponsored\\\"]\",\"tasks\":[[\"upward\",\"[class*=\\\"carousel_item\\\"]\"]]}","{\"selector\":\"[class*=\\\"sponsorLabel\\\"]\",\"tasks\":[[\"upward\",\"[class*=\\\"mosaic_item_wrapper\\\"]\"]]}"],["{\"selector\":\"iframe[allow]\",\"action\":[\"remove-attr\",\"allow\"]}"],["{\"selector\":\".postCard\",\"tasks\":[[\"has-text\",\"/bonusar|casino|betting|spelbranschen/i\"]]}"],["{\"selector\":\":is(a[href*=\\\"casino\\\"], a[href*=\\\"betting\\\"], a[href*=\\\"poker\\\"])\",\"tasks\":[[\"upward\",\".elementor-widget\"]]}","{\"selector\":\"article.feed-item\",\"tasks\":[[\"has-text\",\"/låna pengar|casino|betting/i\"]]}"],["{\"selector\":\".fusion-post-content-container\",\"tasks\":[[\"has-text\",\"/^annons/i\"],[\"upward\",\"article\"]]}"],["{\"selector\":\"div[data-variants*=\\\"article-panorama\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"/^Annons$/\"],[\"upward\",1]]}","{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"/^kommersiellt innehåll/i\"],[\"upward\",\"article\"]]}","{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"/^kommersiellt innehåll|^annons$/i\"],[\"upward\",\"a\"]]}"],["{\"selector\":\"body.private\",\"action\":[\"remove-class\",\"private\"]}"],["{\"selector\":\":is(img[src$=\\\"a_top.png.webp\\\"], a[href*=\\\"casino\\\"])\",\"tasks\":[[\"upward\",\"section.elementor-section\"]]}"],["{\"selector\":\"a[href=\\\"https://loppi.se/promotion\\\"]\",\"tasks\":[[\"upward\",\".page__section\"]]}"],["{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"Detta är en annons\"],[\"upward\",\".inner\"]]}"],["{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/sponsr/i\"],[\"upward\",\"article\"]]}"],["{\"selector\":\".td-post-category\",\"tasks\":[[\"has-text\",\"/spons/i\"],[\"upward\",2]]}","{\"selector\":\".td-pulldown-size\",\"tasks\":[[\"has-text\",\"/spons/i\"],[\"upward\",3]]}"],["{\"selector\":\".widget_media_image\",\"tasks\":[[\"has-text\",\"/annons/i\"]]}"],["{\"selector\":\".elementor-widget-heading\",\"tasks\":[[\"has-text\",\"/Sponsra|annons/i\"],[\"spath\",\" + .elementor-widget-post-block\"]]}","{\"selector\":\".elementor-widget-heading\",\"tasks\":[[\"has-text\",\"/Sponsra|annons/i\"]]}"],["{\"selector\":\"div\",\"action\":[\"remove-class\",\"with-ads\"]}"],["{\"selector\":\"#ad-panorama-category\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"noscript\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"mdp-deblocker-js-disabled\"]]}","{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"body * :not\"]]}"],["{\"selector\":\".advert\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"upward\",\".slick-item\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"/i samarbete med/i\"],[\"upward\",\".post\"]]}"],["{\"selector\":\"#cruncho_now_iframe\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\".image-component-unprocessed\"]]}"],["{\"selector\":\".excerpt\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\"article\"]]}","{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\".sidebar-widget\"]]}"],["{\"selector\":\".inner_article\",\"tasks\":[[\"has-text\",\"/sponsrat|annons/i\"]]}","{\"selector\":\"div[itemprop=\\\"articleBody\\\"] div\",\"tasks\":[[\"has-text\",\"ANNONS:\"]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has-text\",\"Annons\"]]}"],["{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"spath\",\" + .textwidget\"]]}"],["{\"selector\":\"#nativendo-mainfeed\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"span:not(.post-content)\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\".post\"]]}"],["{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/sponsrat/i\"],[\"upward\",\".td_block_wrap\"]]}"],["{\"selector\":\".jet-listing-grid__item[data-post-id]\",\"tasks\":[[\"has-text\",\"/sponsrad artikel/i\"]]}"],["{\"selector\":\"article.post\",\"tasks\":[[\"has-text\",\"/annons från/i\"]]}"],["{\"selector\":\"article\",\"tasks\":[[\"has-text\",\"/sponsrat innehåll/i\"]]}","{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"/samarbetslänkar/i\"],[\"upward\",\".article-inner\"]]}"],["{\"selector\":\":is(.adsbygoogle, a[href*=\\\"casino\\\"])\",\"tasks\":[[\"upward\",\".elementor-section\"]]}"],["{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"/^annons/i\"],[\"upward\",\".section\"]]}"],["{\"selector\":\".item-list__item\",\"tasks\":[[\"has-text\",\"/annons från/i\"]]}"],["{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/sponsra/i\"],[\"upward\",\"div[class$=\\\"Container-root\\\"]\"]]}"],["{\"selector\":\".td_block_wrap\",\"tasks\":[[\"has-text\",\"Annons\"]]}","{\"selector\":\".tds-locked-content[hidden]\",\"action\":[\"remove-attr\",\"hidden\"]}"],["{\"selector\":\"aside\",\"tasks\":[[\"has-text\",\"Annonser:\"]]}"],["{\"selector\":\".category-tag\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\".ArticleListItem\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"SPONSR\"],[\"upward\",\".elementor-widget-jet-listing-grid\"]]}"],["{\"selector\":\"a[target=\\\"_blank\\\"]\",\"tasks\":[[\"upward\",2]]}","{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"/Annons/i\"],[\"spath\",\" + div\"]]}"],["{\"selector\":\"a[target=\\\"_blank\\\"][rel=\\\"nofollow\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"casino\"],[\"upward\",\"li.sidebar-widget\"]]}"],["{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"/annonser/i\"],[\"upward\",\".view-nya-lankar-front\"]]}"],["{\"selector\":\"a[href*=\\\"casino\\\"]\",\"tasks\":[[\"upward\",\".mh-posts-stacked-wrap\"]]}","{\"selector\":\"li.mh-slider-item:has(a[href*=\\\"casino\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"h4\",\"tasks\":[[\"has-text\",\"veckans produkt\"],[\"upward\",3]]}"],["{\"selector\":\"body.freeze-scroll\",\"action\":[\"remove-class\",\"freeze-scroll\"]}"],["{\"selector\":\".cd-card-bar\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\".cd-sidebar-item, .cd-news-card\"]]}"],["{\"selector\":\".mostReadMobile\",\"tasks\":[[\"has-text\",\"/annons/i\"]]}","{\"selector\":\"a[target=\\\"_blank\\\"]\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"upward\",\"li.Notice\"]]}","{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/sponsr/i\"],[\"upward\",\".article\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"ANNONS\"]]}"],["{\"selector\":\".label\",\"tasks\":[[\"has-text\",\"/samarbete|annons|reklam|presenteras av/i\"],[\"upward\",\"a\"]]}","{\"selector\":\"[onclick^=\\\"ga(\\\"]\",\"action\":[\"remove-attr\",\"onclick\"]}"],["{\"selector\":\"center\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",1]]}"],["{\"selector\":\".pill\",\"tasks\":[[\"has-text\",\"/spons/i\"],[\"upward\",\".grid-item, .pinned, .articleFlow-item\"]]}"],["{\"selector\":\".carousel-item-link\",\"tasks\":[[\"has-text\",\"Annons:\"]]}"],["{\"selector\":\"h4\",\"tasks\":[[\"has-text\",\"/spons/i\"],[\"upward\",\".td-pb-row [class*=\\\"td-pb-span\\\"]\"]]}"],["{\"selector\":\".ra-widget-article-tag\",\"tasks\":[[\"has-text\",\"/partner/i\"],[\"upward\",\".ra-widget-panel\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"/i annonssamarbete med/i\"],[\"upward\",\".flex.overflow-hidden\"]]}"],["{\"selector\":\"body\",\"action\":[\"remove-class\",\"cli-barmodal-open\"]}"],["{\"selector\":\".fakta-list\",\"tasks\":[[\"has-text\",\"/annons/i\"]]}"],["{\"selector\":\"[class*=\\\"tot-content-preview-container\\\"]:has(a[href*=\\\"casino\\\"], a[href*=\\\"kasino\\\"], a[href*=\\\"betting\\\"], a[href*=\\\"spel\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div\",\"tasks\":[[\"matches-css\",{\"name\":\"visibility\",\"value\":\"^hidden$\"}],[\"has-text\",\"ANNONS\"]]}"],["{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"/reklam/i\"],[\"upward\",\".post_feed_post\"]]}"],["{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"/Sponsrat av|i samarbete med/i\"]]}"],["{\"selector\":\".jet-listing-dynamic-field__content\",\"tasks\":[[\"has-text\",\"/annonssamarbete|reklamsamarbete/i\"],[\"upward\",\".jet-listing-grid__item\"]]}"],["{\"selector\":\"aside .textwidget\",\"tasks\":[[\"has-text\",\"ANNONS\"]]}"],["{\"selector\":\".front-cta\",\"tasks\":[[\"has-text\",\"/sponsrat innehåll/i\"]]}"],["{\"selector\":\".betart-marker\",\"tasks\":[[\"matches-css\",{\"name\":\"content\",\"pseudo\":\"after\",\"value\":[\"Annons\",\"i\"]}],[\"upward\",\".documentpush-group\"]]}"],["{\"selector\":\"html.has-intro-popup\",\"action\":[\"remove-class\",\"has-intro-popup\"]}","{\"selector\":\"html.show-intro-popup\",\"action\":[\"remove-class\",\"show-intro-popup\"]}"],["{\"selector\":\":is(h2, h5, .kicker)\",\"tasks\":[[\"has-text\",\"ANNONS\"],[\"upward\",\"article, div.row\"]]}"],["{\"selector\":\".g-single\",\"tasks\":[[\"upward\",\"section[data-settings*=\\\"background_background\\\"]\"]]}"],["{\"selector\":\":is(a, span)\",\"tasks\":[[\"has-text\",\"/sponsr/i\"],[\"upward\",3]]}"],["{\"selector\":\"button\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\".owl-item\"]]}"],["{\"selector\":\".leftinfo\",\"tasks\":[[\"has-text\",\"/Externa artiklar:|Länktips:/\"]]}"],["{\"selector\":\".fusion-text\",\"tasks\":[[\"has-text\",\"Online casino\"]]}"],["{\"selector\":\".sidebox\",\"tasks\":[[\"has-text\",\"/Externa länkar|Artiklar/\"]]}"]];

const hostnamesMap = new Map([["sjofart.ax",0],["bandyfeber.com",1],["borsvarlden.com",2],["dagenstv.com",3],["discoveringtheplanet.com",4],["everysport.com",5],["fotbollsresultat.com",6],["fotbolltransfers.com",7],["hejauppsala.com",8],["hockeymagasinet.com",9],["mabra.com",[10,11]],["allas.se",[10,11]],["elle.se",[10,11,68]],["femina.se",[10,11]],["hant.se",[10,11]],["motherhood.se",[10,11]],["residencemagazine.se",[10,11]],["svenskdam.se",[10,11]],["nouw.com",12],["sportbloggare.com",13],["svampguiden.com",14],["sweclockers.com",15],["varmepumpsforum.com",16],["gynning.net",17],["vovve.net",18],["bulletin.nu",19],["byggkontakt.nu",20],["hockeybladet.nu",21],["indien.nu",22],["jarnvagar.nu",23],["klt.nu",24],["barometern.se",24],["blt.se",24],["bt.se",24],["kristianstadsbladet.se",24],["nsk.se",24],["olandsbladet.se",24],["smp.se",24],["sydostran.se",24],["trelleborgsallehanda.se",24],["ut.se",24],["vaxjobladet.se",24],["vxonews.se",24],["ystadsallehanda.se",24],["svenskamagasinet.nu",25],["temperatur.nu",26],["tidningen.nu",27],["tv.nu",28],["voodoofilm.org",29],["affarsvarlden.se",30],["aftonbladet.se",31],["aktieskolan.se",32],["aktuellhallbarhet.se",33],["byggindustrin.se",33],["dagensmedia.se",33],["dagensmedicin.se",33],["dagenssamhalle.se",33],["dagligvarunytt.se",33],["fastighetsnytt.se",33],["market.se",33],["privataaffarer.se",33],["resume.se",33],["aktuellsakerhet.se",34],["allabolag.se",35],["alltforforaldrar.se",36],["alltomhif.se",37],["arbetaren.se",38],["arjeplognytt.se",39],["aurumforum.se",40],["autonytt.se",41],["baraenkakatill.se",42],["bilresaieuropa.se",43],["bioenergitidningen.se",44],["kvalitetsmagasinet.se",44],["miljo-utveckling.se",44],["telekomidag.se",44],["vdtidningen.se",44],["boneo.se",45],["borskollen.se",46],["branschaktuellt.se",47],["butikstrender.se",48],["byggahus.se",49],["byggipedia.se",50],["campingsverige.se",51],["conpot.se",52],["cyclingplus.se",53],["yogaworld.se",53],["dagensjuridik.se",54],["dagenslogistik.se",55],["dagensps.se",56],["dagenstech.se",57],["dalarnasaffarer.se",58],["hallandsnaringsliv.se",58],["jamtlandsaffarer.se",58],["naringslivetvgl.se",58],["sjuharadsnaringsliv.se",58],["stockholmsaffarer.se",58],["datormagazin.se",59],["densistavilan.se",60],["devote.se",61],["di.se",62],["dn.se",62],["digitalavykort.se",63],["digitalfotoforalla.se",64],["iform.se",64],["pctidningen.se",64],["varldenshistoria.se",64],["djungeltrumman.se",65],["dust2.se",66],["ehandel.se",67],["esportare.se",69],["etc.se",70],["etunanytt.se",71],["evergreengarden.se",72],["expo.se",73],["expressen.se",74],["www.expressen.se",75],["familjeliv.se",76],["feber.se",77],["tjock.se",77],["filatelisten.se",78],["filmtipset.se",79],["finanstid.se",80],["firstclassmagazine.se",81],["firstfoto.se",82],["fl-net.se",83],["folkhalsasverige.se",84],["foretagsverige.se",84],["forskningsverige.se",84],["grillbibeln.se",84],["hallbarhetsverige.se",84],["kampenmotcancer.se",84],["motorbibeln.se",84],["tillvaxtsverige.se",84],["forstasidorna.se",85],["forvaltarforum.se",86],["fotbolldirekt.se",87],["hockeysverige.se",87],["innebandymagazinet.se",87],["fotbollskanalen.se",[88,89]],["koket.se",[89,121]],["tv4.se",89],["tv4play.se",89],["fotbollsthlm.se",90],["gasetten.se",90],["fragbite.se",91],["freeride.se",92],["frihetsnytt.se",93],["futsalmagasinet.se",94],["fz.se",95],["gaffa.se",96],["gamereactor.se",97],["godare.se",[98,99]],["livsstil.se",[99,126]],["google.se",100],["happypancake.se",101],["hejaolika.se",102],["hemnet.se",103],["hippson.se",104],["hitta.se",105],["horisontmagasin.se",106],["hrsvepet.se",107],["husbil.se",108],["husvagn.se",108],["ibnytt.se",109],["influens.se",110],["ingenjorsjobb.se",111],["inredningsarkitektur.se",112],["it-finans.se",113],["it-hallbarhet.se",113],["it-halsa.se",113],["it-kanalen.se",113],["it-pedagogen.se",113],["it-retail.se",113],["javligtgott.se",114],["karlskogavaxer.se",115],["kiacarclub.se",116],["kingmagazine.se",117],["klart.se",118],["kobe.se",119],["kokaihop.se",120],["kritiker.se",122],["lajvo.se",123],["listor.se",124],["livinguppsala.se",125],["ljuskultur.se",127],["lokalti.se",128],["loppi.se",129],["lundgiants.se",130],["m3.se",131],["macworld.se",131],["pcforalla.se",131],["maklarvarlden.se",132],["maltermagasin.se",133],["nyadagbladet.se",133],["marknadschefer.se",134],["matinspo.se",135],["matspar.se",136],["medibok.se",137],["metromode.se",138],["minimalisterna.se",139],["mitti.se",140],["modernalivet.se",141],["moviezine.se",142],["mygatemagazine.se",143],["newsvoice.se",144],["ng.se",145],["nordfront.se",146],["nordichardware.se",147],["nyemissioner.se",148],["nyfiknainvesterare.se",149],["nyheteridag.se",150],["oskarshamns-nytt.se",151],["placera.se",152],["podtail.se",153],["pricerunner.se",154],["samfalligheterna.se",155],["senses.se",156],["shortcut.se",157],["signprint.se",158],["siljannews.se",159],["siljanskok.se",160],["sillyseason.se",161],["so-rummet.se",162],["spelochfilm.se",163],["sporthalsa.se",164],["storyhouseegmont.se",165],["sverigespringer.se",166],["swedroid.se",167],["tabyallehanda.se",168],["tekniknytt.se",169],["tekniksmart.se",170],["teknikveckan.se",171],["99.teknikveckan.se",172],["tennisportalen.se",173],["thelocal.se",174],["tidningenbalans.se",175],["tidningenridsport.se",176],["tlnt.se",177],["totallyorebro.se",178],["totallystockholm.se",178],["travronden.se",179],["trendenser.se",180],["tripadvisor.se",181],["underbaraclaras.se",182],["upphandling24.se",183],["upptack-sverige.se",184],["utsidan.se",185],["vadvivet.se",186],["vasterastidning.se",187],["vildmarken.se",188],["villalivet.se",189],["vimedbarn.se",190],["viseniorer.se",191],["vm-fotboll.se",192],["vmj.se",193]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
