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

// ruleset: nld-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".hz-Listing--list-item\",\"tasks\":[[\"has\",{\"selector\":\".hz-Listing-priority\",\"tasks\":[[\"has-text\",\"Topadvertentie\"]]}]]}"],["{\"selector\":\"div[class^=\\\"Flex-styled__StyledFlex-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Gesponsorde producten\"]]}]]}"],["{\"selector\":\"[data-index-number]\",\"tasks\":[[\"has-text\",\"Gesponsord\"]]}"],["{\"selector\":\".grid-item.grid-item-pebble\",\"tasks\":[[\"has\",{\"selector\":\"#pebble-label\",\"tasks\":[[\"has-text\",\"Advertentie\"]]}]]}"],["{\"selector\":\".o-hpgrid__row-tijdconnect\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Gesponsorde inhoud\"]]}]]}"],["{\"selector\":\".widebnr > *\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".pd-results-container > .results-inner > .pd-advisor-offer-container:first-child\",\"tasks\":[[\"has\",{\"selector\":\"> .pd-advisor-offer > .result-badge\",\"tasks\":[[\"has-text\",\"Adv.\"]]}]]}"],["{\"selector\":\".theiaStickySidebar > aside.penci_latest_news_widget > h4.widget-title\",\"tasks\":[[\"has-text\",\"Advertentie\"]]}"],["{\"selector\":\".ct-sidebar > div.widget\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Partners\"]]}]]}"],["{\"selector\":\".content-start > * > div[style]\",\"tasks\":[[\"has-text\",\"/Externe links|Externe websites/i\"]]}"],["{\"selector\":\"div[id^=\\\"ster-ad-bnnvara-\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".linklist\",\"tasks\":[[\"has\",{\"selector\":\"h1\",\"tasks\":[[\"has-text\",\"Lekker Dichtbij Deals\"]]}]]}"],["{\"selector\":\".widget_custom_html\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Beter Beleggen\"]]}]]}"],["{\"selector\":\".ad--billboardrectangle\",\"tasks\":[[\"upward\",3]]}","{\"selector\":\"aside div[id^=\\\"ad_\\\"]\",\"tasks\":[[\"upward\",2]]}","{\"selector\":\"div[id*=\\\"leaderboardwallpaper-\\\"]\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\"[data-cy=\\\"plp-tile-container\\\"]\",\"tasks\":[[\"has-text\",\"Gesponsord\"]]}","{\"selector\":\"li\",\"tasks\":[[\"has-text\",\"Gesponsord\"]]}"],["{\"selector\":\".article.row.no-image\",\"tasks\":[[\"has\",{\"selector\":\".row.compost-warn\",\"tasks\":[[\"has-text\",\"- ingezonden mededeling -\"]]}]]}"],["{\"selector\":\".article-column_article\",\"tasks\":[[\"has\",{\"selector\":\".category-label_label\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}]]}","{\"selector\":\".article-row_article\",\"tasks\":[[\"has\",{\"selector\":\".article-row_category.category-label_label\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}]]}"],["{\"selector\":\"ul.mp-Listings > li.mp-Listing\",\"tasks\":[[\"has\",{\"selector\":\"> .mp-Listing-coverLink > .mp-Listing-group > .mp-Listing-group--price-date-feature > span.mp-Listing-priority > span\",\"tasks\":[[\"has-text\",\"/^Topadvertentie$/\"]]}]]}"],["{\"selector\":\".td_module_wrap\",\"tasks\":[[\"has\",{\"selector\":\".td-post-category\",\"tasks\":[[\"has-text\",\"Gesponsord\"]]}]]}"],["{\"selector\":\".autoscalable-block-wrapper\",\"tasks\":[[\"has\",{\"selector\":\".entity-block-title\",\"tasks\":[[\"has-text\",\"Van onze partners\"]]}]]}"],["{\"selector\":\"section.network\",\"tasks\":[[\"has\",{\"selector\":\".contentheader.contentheader--network\",\"tasks\":[[\"has-text\",\"Gesponsorde links\"]]}]]}"],["{\"selector\":\"div[class=\\\"sidebar_item\\\"][style=\\\"padding-bottom: 16px;\\\"]:has(> a > img[width=\\\"276\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".c-articles-list__item.c-articles-list__item--highlight\",\"tasks\":[[\"has\",{\"selector\":\".c-tag.c-articles-list__label\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}]]}"],["{\"selector\":\".blok\",\"tasks\":[[\"has\",{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Partners\"]]}]]}"],["{\"selector\":\".widget-container\",\"tasks\":[[\"has\",{\"selector\":\".h3.mb-4\",\"tasks\":[[\"has-text\",\"Wielerdeals\"]]}]]}","{\"selector\":\"li.list-item.list-item-aside\",\"tasks\":[[\"has\",{\"selector\":\".badge\",\"tasks\":[[\"has-text\",\"Ad\"]]}]]}","{\"selector\":\"li.list-item.list-item-default\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Ad\"]]}]]}"],["{\"selector\":\".wpb_wrapper\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"#advertentie\"]]}]]}"]];

const hostnamesMap = new Map([["2dehands.be",0],["krefel.be",1],["mediamarkt.be",2],["mediamarkt.nl",2],["mnm.be",3],["tijd.be",4],["tweakers.net",5],["androidplanet.nl",6],["ans-online.nl",7],["apparata.nl",8],["arenalokaal.nl",9],["bnnvara.nl",10],["buienradar.nl",11],["businessinsider.nl",12],["dumpert.nl",13],["fonq.nl",14],["geenstijl.nl",15],["linda.nl",16],["marktplaats.nl",17],["nieuwsopbeeld.nl",18],["rtlnieuws.nl",19],["tostrams.nl",20],["turksemedia.nl",21],["vi.nl",22],["voetbalcentraal.nl",23],["wielerflits.nl",24],["wkdarts.nl",25]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
