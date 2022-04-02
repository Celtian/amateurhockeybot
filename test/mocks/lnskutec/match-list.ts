import { AmateurHockeyBotMatchListResponse } from '../../../src/types';

export const MATCH_LIST_HTML = `
<!DOCTYPE html>
<html lang="cs-CZ">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="http://www.lnskutec.cz/xmlrpc.php">
<title>Výsledky 2019-2020 &#8211; Liga neregistrovaných Skuteč</title>
<meta name='robots' content='noindex,follow' />
<link rel='dns-prefetch' href='//fonts.googleapis.com' />
<link rel='dns-prefetch' href='//s.w.org' />
<link rel="alternate" type="application/rss+xml" title="Liga neregistrovaných Skuteč &raquo; RSS zdroj" href="http://www.lnskutec.cz/?feed=rss2" />
<link rel="alternate" type="application/rss+xml" title="Liga neregistrovaných Skuteč &raquo; RSS komentářů" href="http://www.lnskutec.cz/?feed=comments-rss2" />
		<script type="text/javascript">
			window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/2.3\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/2.3\/svg\/","svgExt":".svg","source":{"concatemoji":"http:\/\/www.lnskutec.cz\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.8.18"}};
			!function(t,a,e){var r,i,n,o=a.createElement("canvas"),l=o.getContext&&o.getContext("2d");function c(t){var e=a.createElement("script");e.src=t,e.defer=e.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(e)}for(n=Array("flag","emoji4"),e.supports={everything:!0,everythingExceptFlag:!0},i=0;i<n.length;i++)e.supports[n[i]]=function(t){var e,a=String.fromCharCode;if(!l||!l.fillText)return!1;switch(l.clearRect(0,0,o.width,o.height),l.textBaseline="top",l.font="600 32px Arial",t){case"flag":return(l.fillText(a(55356,56826,55356,56819),0,0),e=o.toDataURL(),l.clearRect(0,0,o.width,o.height),l.fillText(a(55356,56826,8203,55356,56819),0,0),e===o.toDataURL())?!1:(l.clearRect(0,0,o.width,o.height),l.fillText(a(55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447),0,0),e=o.toDataURL(),l.clearRect(0,0,o.width,o.height),l.fillText(a(55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447),0,0),e!==o.toDataURL());case"emoji4":return l.fillText(a(55358,56794,8205,9794,65039),0,0),e=o.toDataURL(),l.clearRect(0,0,o.width,o.height),l.fillText(a(55358,56794,8203,9794,65039),0,0),e!==o.toDataURL()}return!1}(n[i]),e.supports.everything=e.supports.everything&&e.supports[n[i]],"flag"!==n[i]&&(e.supports.everythingExceptFlag=e.supports.everythingExceptFlag&&e.supports[n[i]]);e.supports.everythingExceptFlag=e.supports.everythingExceptFlag&&!e.supports.flag,e.DOMReady=!1,e.readyCallback=function(){e.DOMReady=!0},e.supports.everything||(r=function(){e.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLoaded",r,!1),t.addEventListener("load",r,!1)):(t.attachEvent("onload",r),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&e.readyCallback()})),(r=e.source||{}).concatemoji?c(r.concatemoji):r.wpemoji&&r.twemoji&&(c(r.twemoji),c(r.wpemoji)))}(window,document,window._wpemojiSettings);
		</script>
		<style type="text/css">
img.wp-smiley,
img.emoji {
	display: inline !important;
	border: none !important;
	box-shadow: none !important;
	height: 1em !important;
	width: 1em !important;
	margin: 0 .07em !important;
	vertical-align: -0.1em !important;
	background: none !important;
	padding: 0 !important;
}
</style>
<link rel='stylesheet' id='dashicons-css'  href='http://www.lnskutec.cz/wp-includes/css/dashicons.min.css?ver=4.8.18' type='text/css' media='all' />
<link rel='stylesheet' id='sportspress-general-css'  href='//www.lnskutec.cz/wp-content/plugins/sportspress-pro.club_.1.9.14/includes/sportspress/assets/css/sportspress.css?ver=1.9.14' type='text/css' media='all' />
<link rel='stylesheet' id='sportspress-icons-css'  href='//www.lnskutec.cz/wp-content/plugins/sportspress-pro.club_.1.9.14/includes/sportspress/assets/css/icons.css?ver=1.9' type='text/css' media='all' />
<link rel='stylesheet' id='sportspress-league-menu-css'  href='//www.lnskutec.cz/wp-content/plugins/sportspress-pro.club_.1.9.14/includes/sportspress-league-menu/css/sportspress-league-menu.css?ver=1.6' type='text/css' media='all' />
<link rel='stylesheet' id='sportspress-event-statistics-css'  href='//www.lnskutec.cz/wp-content/plugins/sportspress-pro.club_.1.9.14/includes/sportspress-match-stats/css/sportspress-match-stats.css?ver=1.6' type='text/css' media='all' />
<link rel='stylesheet' id='sportspress-tournaments-css'  href='//www.lnskutec.cz/wp-content/plugins/sportspress-pro.club_.1.9.14/includes/sportspress-tournaments/css/sportspress-tournaments.css?ver=1.7.4' type='text/css' media='all' />
<link rel='stylesheet' id='sportspress-tournaments-ltr-css'  href='//www.lnskutec.cz/wp-content/plugins/sportspress-pro.club_.1.9.14/includes/sportspress-tournaments/css/sportspress-tournaments-ltr.css?ver=1.7.4' type='text/css' media='all' />
<link rel='stylesheet' id='rookie-lato-css'  href='//fonts.googleapis.com/css?family=Lato%3A400%2C700%2C400italic%2C700italic&#038;subset=latin-ext&#038;ver=4.8.18' type='text/css' media='all' />
<link rel='stylesheet' id='rookie-oswald-css'  href='//fonts.googleapis.com/css?family=Oswald%3A400%2C700&#038;subset=latin-ext&#038;ver=4.8.18' type='text/css' media='all' />
<link rel='stylesheet' id='rookie-framework-style-css'  href='http://www.lnskutec.cz/wp-content/themes/rookie/framework.css?ver=4.8.18' type='text/css' media='all' />
<link rel='stylesheet' id='rookie-style-css'  href='http://www.lnskutec.cz/wp-content/themes/rookie/style.css?ver=4.8.18' type='text/css' media='all' />
<style type="text/css"></style>	<style type="text/css"> /* Rookie Custom Layout */
	@media screen and (min-width: 1025px) {
		.site-header, .site-content, .site-footer, .site-info {
			width: 1000px; }
	}
	</style>
		<style type="text/css"> /* Rookie Custom Colors */
	.site-content,
	.main-navigation .nav-menu > .menu-item-has-children:hover > a,
	.main-navigation li.menu-item-has-children:hover a,
	.main-navigation ul ul { background: #ffffff; }
	pre,
	code,
	kbd,
	tt,
	var,
	table,
	.main-navigation li.menu-item-has-children:hover a:hover,
	.main-navigation ul ul li.page_item_has_children:hover > a,
	.entry-footer-links,
	.comment-content,
	.sp-table-wrapper .dataTables_paginate,
	.sp-event-staff,
	.sp-template-countdown .event-name,
	.sp-template-countdown .event-venue,
	.sp-template-countdown .event-league,
	.sp-template-countdown time span,
	.sp-template-details dl,
	.mega-slider__row,
	.woocommerce .woocommerce-breadcrumb,
	.woocommerce-page .woocommerce-breadcrumb,
	.opta-widget-container form {
		background: #f4f4f4; }
	.comment-content:after {
		border-right-color: #f4f4f4; }
	.widget_calendar #today,
	.sp-highlight,
	.sp-template-event-calendar #today,
	.sp-template-event-blocks .event-title,
	.mega-slider__row:hover {
		background: #ffffff; }
	.sp-tournament-bracket .sp-team .sp-team-name:before {
		border-left-color: #ffffff;
		border-right-color: #ffffff; }
	.sp-tournament-bracket .sp-event {
		border-color: #ffffff !important; }
	caption,
	.main-navigation,
	.site-footer,
	.sp-heading,
	.sp-table-caption,
	.sp-template-gallery .gallery-caption,
	.sp-template-event-logos .sp-team-result,
	.sp-statistic-bar,
	.opta-widget-container h2 {
		background: #2b353e; }
	pre,
	code,
	kbd,
	tt,
	var,
	table,
	th,
	td,
	tbody td,
	th:first-child, td:first-child,
	th:last-child, td:last-child,
	input[type="text"],
	input[type="email"],
	input[type="url"],
	input[type="password"],
	input[type="search"],
	textarea,
	.entry-footer-links,
	.comment-metadata .edit-link,
	.comment-content,
	.sp-table-wrapper .dataTables_paginate,
	.sp-event-staff,
	.sp-template-countdown .event-name,
	.sp-template-countdown .event-venue,
	.sp-template-countdown .event-league,
	.sp-template-countdown time span,
	.sp-template-countdown time span:first-child,
	.sp-template-event-blocks .event-title,
	.sp-template-details dl,
	.sp-template-tournament-bracket table,
	.sp-template-tournament-bracket thead th,
	.mega-slider_row,
	.woocommerce .woocommerce-breadcrumb,
	.woocommerce-page .woocommerce-breadcrumb,
	.opta-widget-container form {
		border-color: #e0e0e0; }
	.comment-content:before {
		border-right-color: #e0e0e0; }
	.sp-tab-menu {
		border-bottom-color: #e0e0e0; }
	body,
	button,
	input,
	select,
	textarea,
	.main-navigation .nav-menu > .menu-item-has-children:hover > a,
	.main-navigation ul ul a,
	.widget_recent_entries ul li:before,
	.widget_pages ul li:before,
	.widget_categories ul li:before,
	.widget_archive ul li:before,
	.widget_recent_comments ul li:before,
	.widget_nav_menu ul li:before,
	.widget_links ul li:before,
	.widget_meta ul li:before,
	.entry-title a,
	a .entry-title,
	.page-title a,
	a .page-title,
	.entry-title a:hover,
	a:hover .entry-title,
	.page-title a:hover,
	a:hover .page-title:hover,
	.woocommerce ul.products li.product h3,
	.woocommerce-page ul.products li.product h3 {
		color: #222222; }
	pre,
	code,
	kbd,
	tt,
	var,
	table,
	.main-navigation li.menu-item-has-children:hover a:hover,
	.main-navigation ul ul li.page_item_has_children:hover > a,
	.entry-meta,
	.entry-footer-links,
	.comment-content,
	.sp-data-table,
	.site-footer .sp-data-table,
	.sp-table-wrapper .dataTables_paginate,
	.sp-template,
	.sp-template-countdown .event-venue,
	.sp-template-countdown .event-league,
	.sp-template-countdown .event-name a,
	.sp-template-countdown time span,
	.sp-template-details dl,
	.sp-template-event-blocks .event-title,
	.sp-template-event-blocks .event-title a,
	.sp-tournament-bracket .sp-event .sp-event-date,
	.mega-slider,
	.woocommerce .woocommerce-breadcrumb,
	.woocommerce-page .woocommerce-breadcrumb {
		color: #222222; }
	.widget_recent_entries ul li a,
	.widget_pages ul li a,
	.widget_categories ul li a,
	.widget_archive ul li a,
	.widget_recent_comments ul li a,
	.widget_nav_menu ul li a,
	.widget_links ul li a,
	.widget_meta ul li a,
	.widget_calendar #prev a,
	.widget_calendar #next a,
	.nav-links a,
	.comment-metadata a,
	.comment-body .reply a,
	.wp-caption-text,
	.sp-view-all-link,
	.sp-template-event-calendar #prev a,
	.sp-template-event-calendar #next a,
	.sp-template-tournament-bracket .sp-event-venue,
	.woocommerce .woocommerce-breadcrumb,
	.woocommerce-page .woocommerce-breadcrumb,
	.woocommerce .woocommerce-breadcrumb a,
	.woocommerce-page .woocommerce-breadcrumb a {
		color: #8b8b8b; }
	caption,
	button,
	input[type="button"],
	input[type="reset"],
	input[type="submit"],
	.main-navigation .nav-menu > li:hover > a,
	.main-navigation.toggled .menu-toggle,
	.site-footer,
	.sp-template .gallery-caption,
	.sp-template .gallery-caption a,
	.sp-heading,
	.sp-heading:hover,
	.sp-heading a:hover,
	.sp-table-caption,
	.sp-template-event-logos .sp-team-result,
	.sp-template-tournament-bracket .sp-result,
	.single-sp_player .entry-header .entry-title strong {
		color: #ffffff; }
	.main-navigation a,
	.main-navigation .menu-toggle {
		color: rgba(255, 255, 255, 0.7); }
	a,
	blockquote:before,
	q:before,
	.main-navigation ul ul .current-menu-item > a,
	.main-navigation ul ul .current-menu-parent > a,
	.main-navigation ul ul .current-menu-ancestor > a,
	.main-navigation ul ul .current_page_item > a,
	.main-navigation ul ul .current_page_parent > a,
	.main-navigation ul ul .current_page_ancestor > a,
	.main-navigation li.menu-item-has-children:hover ul .current-menu-item > a:hover,
	.main-navigation li.menu-item-has-children:hover ul .current-menu-parent > a:hover,
	.main-navigation li.menu-item-has-children:hover ul .current-menu-ancestor > a:hover,
	.main-navigation li.menu-item-has-children:hover ul .current_page_item > a:hover,
	.main-navigation li.menu-item-has-children:hover ul .current_page_parent > a:hover,
	.main-navigation li.menu-item-has-children:hover ul .current_page_ancestor > a:hover,
	.widget_recent_entries ul li a:hover,
	.widget_pages ul li a:hover,
	.widget_categories ul li a:hover,
	.widget_archive ul li a:hover,
	.widget_recent_comments ul li a:hover,
	.widget_nav_menu ul li a:hover,
	.widget_links ul li a:hover,
	.widget_meta ul li a:hover,
	.widget_calendar #prev a:hover,
	.widget_calendar #next a:hover,
	.nav-links a:hover,
	.sticky .entry-title:before,
	.comment-metadata a:hover,
	.comment-body .reply a:hover,
	.sp-view-all-link:hover,
	.sp-template-event-calendar #prev a:hover,
	.sp-template-event-calendar #next a:hover,
	.single-sp_staff .entry-header .entry-title strong {
		color: #00a69c; }
	cite:before,
	button,
	input[type="button"],
	input[type="reset"],
	input[type="submit"],
	.main-navigation .nav-menu > li:hover > a,
	.main-navigation .search-form .search-submit:hover,
	.nav-links .meta-nav,
	.entry-footer a,
	.sp-template-player-gallery .gallery-item strong,
	.sp-template-tournament-bracket .sp-result,
	.single-sp_player .entry-header .entry-title strong,
	.sp-statistic-bar-fill,
	.mega-slider__row--active,
	.mega-slider__row--active:hover {
		background: #00a69c; }
	caption,
	.sp-table-caption,
	.opta-widget-container h2 {
		border-top-color: #00a69c; }
	.sp-tab-menu-item-active a {
		border-bottom-color: #00a69c; }
	button:hover,
	input[type="button"]:hover,
	input[type="reset"]:hover,
	input[type="submit"]:hover,
	button:focus,
	input[type="button"]:focus,
	input[type="reset"]:focus,
	input[type="submit"]:focus,
	button:active,
	input[type="button"]:active,
	input[type="reset"]:active,
	input[type="submit"]:active,
	.entry-footer a:hover,
	.nav-links a:hover .meta-nav,
	.sp-template-tournament-bracket .sp-event-title:hover .sp-result {
		background: #00887e; }
	.widget_search .search-submit {
		border-color: #00887e; }
	a:hover {
		color: #00887e; }
	.sp-template-event-logos {
		color: inherit; }
	.sp-footer-sponsors .sp-sponsors {
		border-color: #e0e0e0; }
	@media screen and (max-width: 600px) {
		.main-navigation .nav-menu > li:hover > a,
		.main-navigation ul ul li.page_item_has_children:hover > a {
			color: #ffffff;
			background: transparent; }
		.main-navigation .nav-menu li a:hover,
		.main-navigation .search-form .search-submit {
			color: #ffffff;
			background: #00a69c; }
		.main-navigation .nav-menu > .menu-item-has-children:hover > a,
		.main-navigation li.menu-item-has-children:hover a {
			background: transparent; }
		.main-navigation ul ul {
			background: rgba(0, 0, 0, 0.1); }
		.main-navigation .nav-menu > .menu-item-has-children:hover > a:hover,
		.main-navigation li.menu-item-has-children:hover a:hover {
			background: #00a69c;
			color: #fff;
		}
		.main-navigation ul ul a,
		.main-navigation .nav-menu > .menu-item-has-children:hover > a {
			color: rgba(255, 255, 255, 0.7); }
		.main-navigation .nav-menu > .current-menu-item > a,
		.main-navigation .nav-menu > .current-menu-parent > a,
		.main-navigation .nav-menu > .current-menu-ancestor > a,
		.main-navigation .nav-menu > .current_page_item > a,
		.main-navigation .nav-menu > .current_page_parent > a,
		.main-navigation .nav-menu > .current_page_ancestor > a,
		.main-navigation .nav-menu > .current-menu-item:hover > a,
		.main-navigation .nav-menu > .current-menu-parent:hover > a,
		.main-navigation .nav-menu > .current-menu-ancestor:hover > a,
		.main-navigation .nav-menu > .current_page_item:hover > a,
		.main-navigation .nav-menu > .current_page_parent:hover > a,
		.main-navigation .nav-menu > .current_page_ancestor:hover > a,
		.main-navigation ul ul .current-menu-parent > a,
		.main-navigation ul ul .current-menu-ancestor > a,
		.main-navigation ul ul .current_page_parent > a,
		.main-navigation ul ul .current_page_ancestor > a,
		.main-navigation li.menu-item-has-children:hover ul .current-menu-item > a:hover,
		.main-navigation li.menu-item-has-children:hover ul .current-menu-parent > a:hover,
		.main-navigation li.menu-item-has-children:hover ul .current-menu-ancestor > a:hover,
		.main-navigation li.menu-item-has-children:hover ul .current_page_item > a:hover,
		.main-navigation li.menu-item-has-children:hover ul .current_page_parent > a:hover,
		.main-navigation li.menu-item-has-children:hover ul .current_page_ancestor > a:hover {
			color: #fff;
		}
	}
	@media screen and (min-width: 601px) {
		.content-area,
		.widecolumn {
			box-shadow: 1px 0 0 #e0e0e0;
		}
		.widget-area {
			box-shadow: inset 1px 0 0 #e0e0e0; }
		.widget-area-left {
			box-shadow: inset -1px 0 0 #e0e0e0; }
		.rtl .content-area,
		.rtl .widecolumn {
			box-shadow: -1px 0 0 #e0e0e0;
		}

		.rtl .widget-area,
		.rtl .widget-area-left {
			box-shadow: inset -1px 0 0 #e0e0e0; }
		.rtl .widget-area-right {
			box-shadow: inset 1px 0 0 #e0e0e0; }
	}
	@media screen and (max-width: 1199px) {
		.social-sidebar {
			box-shadow: inset 0 1px 0 #e0e0e0; }
	}

	.sp-statistic-bar{background:#2b353e}.sp-statistic-bar-fill{background:#00a69c}
	</style>
	<script type='text/javascript' src='http://www.lnskutec.cz/wp-includes/js/jquery/jquery.js?ver=1.12.4'></script>
<script type='text/javascript' src='http://www.lnskutec.cz/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.4.1'></script>
<link rel='https://api.w.org/' href='http://www.lnskutec.cz/index.php?rest_route=/' />
<link rel="EditURI" type="application/rsd+xml" title="RSD" href="http://www.lnskutec.cz/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="http://www.lnskutec.cz/wp-includes/wlwmanifest.xml" />
<meta name="generator" content="WordPress 4.8.18" />
<meta name="generator" content="SportsPress 1.9.14" />
<meta name="generator" content="SportsPress Pro 1.9.13" />
<link rel="canonical" href="http://www.lnskutec.cz/?page_id=2925" />
<link rel='shortlink' href='http://www.lnskutec.cz/?p=2925' />
<link rel="alternate" type="application/json+oembed" href="http://www.lnskutec.cz/index.php?rest_route=%2Foembed%2F1.0%2Fembed&#038;url=http%3A%2F%2Fwww.lnskutec.cz%2F%3Fpage_id%3D2925" />
<link rel="alternate" type="text/xml+oembed" href="http://www.lnskutec.cz/index.php?rest_route=%2Foembed%2F1.0%2Fembed&#038;url=http%3A%2F%2Fwww.lnskutec.cz%2F%3Fpage_id%3D2925&#038;format=xml" />
		<style type="text/css">.recentcomments a{display:inline !important;padding:0 !important;margin:0 !important;}</style>
		</head>

<body class="page-template-default page page-id-2925">
<div class="sp-header">			<style type="text/css">
			.sp-league-menu {
				background: #000000;
				color: #ffffff;
			}
			.sp-league-menu .sp-league-menu-title {
				color: #ffffff;
			}
			.sp-league-menu .sp-team-logo {
				max-height: 32px;
				max-width: 32px;
			}
			.sp-league-menu .sp-league-menu-logo {
				max-height: 32px;
				max-width: 64px;
				margin-bottom: 0px;
				margin-left: 0px;
			}
			</style>
			<div class="sp-league-menu sp-align-center">
				<div class="sp-inner">
										<span class="sp-league-menu-title">
						Ligové menu					</span>
																<a class="sp-team-link" href="http://www.hc-chlumetin.estranky.cz/">
							<img width="32" height="28" src="http://www.lnskutec.cz/wp-content/uploads/2015/10/chlumetin-32x28.png" class="sp-team-logo wp-post-image" alt="" title="HC Chlumětín" srcset="http://www.lnskutec.cz/wp-content/uploads/2015/10/chlumetin-32x28.png 32w, http://www.lnskutec.cz/wp-content/uploads/2015/10/chlumetin.png 125w" sizes="(max-width: 32px) 100vw, 32px" />						</a>
											<a class="sp-team-link" href="https://cs-cz.facebook.com/HC.Dynamo.Rosice">
							<img width="22" height="32" src="http://www.lnskutec.cz/wp-content/uploads/2015/10/Logo-HC-Dynamo-Rosice-22x32.jpg" class="sp-team-logo wp-post-image" alt="" title="HC Dynamo Rosice" srcset="http://www.lnskutec.cz/wp-content/uploads/2015/10/Logo-HC-Dynamo-Rosice-22x32.jpg 22w, http://www.lnskutec.cz/wp-content/uploads/2015/10/Logo-HC-Dynamo-Rosice-204x300.jpg 204w, http://www.lnskutec.cz/wp-content/uploads/2015/10/Logo-HC-Dynamo-Rosice-698x1024.jpg 698w, http://www.lnskutec.cz/wp-content/uploads/2015/10/Logo-HC-Dynamo-Rosice-87x128.jpg 87w, http://www.lnskutec.cz/wp-content/uploads/2015/10/Logo-HC-Dynamo-Rosice.jpg 1509w" sizes="(max-width: 22px) 100vw, 22px" />						</a>
											<a class="sp-team-link" href="https://cs-cz.facebook.com/pages/HC-ICE-Horses/408723099271401">
							<img width="32" height="32" src="http://www.lnskutec.cz/wp-content/uploads/2015/10/ice_horses-32x32.png" class="sp-team-logo wp-post-image" alt="" title="HC Ice Horses Pardubice" srcset="http://www.lnskutec.cz/wp-content/uploads/2015/10/ice_horses-32x32.png 32w, http://www.lnskutec.cz/wp-content/uploads/2015/10/ice_horses.png 87w" sizes="(max-width: 32px) 100vw, 32px" />						</a>
											<a class="sp-team-link" href="http://www.hc-ostrov.estranky.cz/">
							<img width="27" height="32" src="http://www.lnskutec.cz/wp-content/uploads/2015/10/ostrov-27x32.png" class="sp-team-logo wp-post-image" alt="" title="HC Ostrov" srcset="http://www.lnskutec.cz/wp-content/uploads/2015/10/ostrov-27x32.png 27w, http://www.lnskutec.cz/wp-content/uploads/2015/10/ostrov.png 125w, http://www.lnskutec.cz/wp-content/uploads/2015/10/ostrov-107x128.png 107w" sizes="(max-width: 27px) 100vw, 27px" />						</a>
											<a class="sp-team-link" href="https://cs-cz.facebook.com/hcpata/">
							<img width="27" height="32" src="http://www.lnskutec.cz/wp-content/uploads/2015/10/patapuf-27x32.png" class="sp-team-logo wp-post-image" alt="" title="HC Patapuf" srcset="http://www.lnskutec.cz/wp-content/uploads/2015/10/patapuf-27x32.png 27w, http://www.lnskutec.cz/wp-content/uploads/2015/10/patapuf.png 129w, http://www.lnskutec.cz/wp-content/uploads/2015/10/patapuf-107x128.png 107w" sizes="(max-width: 27px) 100vw, 27px" />						</a>
											<a class="sp-team-link" href="http://hcotradov.wz.cz/">
							<img width="30" height="32" src="http://www.lnskutec.cz/wp-content/uploads/2017/12/Logo-pstruh-Otradov-TEXT0-30x32.jpg" class="sp-team-logo wp-post-image" alt="" title="HC Pstruzi Otradov" srcset="http://www.lnskutec.cz/wp-content/uploads/2017/12/Logo-pstruh-Otradov-TEXT0-30x32.jpg 30w, http://www.lnskutec.cz/wp-content/uploads/2017/12/Logo-pstruh-Otradov-TEXT0-283x300.jpg 283w, http://www.lnskutec.cz/wp-content/uploads/2017/12/Logo-pstruh-Otradov-TEXT0-768x815.jpg 768w, http://www.lnskutec.cz/wp-content/uploads/2017/12/Logo-pstruh-Otradov-TEXT0-964x1024.jpg 964w, http://www.lnskutec.cz/wp-content/uploads/2017/12/Logo-pstruh-Otradov-TEXT0-121x128.jpg 121w, http://www.lnskutec.cz/wp-content/uploads/2017/12/Logo-pstruh-Otradov-TEXT0.jpg 1507w" sizes="(max-width: 30px) 100vw, 30px" />						</a>
											<a class="sp-team-link" href="https://cs-cz.facebook.com/HC-Radioaktivita-Hostovice-333080940334/">
							<img width="32" height="32" src="http://www.lnskutec.cz/wp-content/uploads/2015/10/hostovice-32x32.png" class="sp-team-logo wp-post-image" alt="" title="HC Radioaktivita Hostovice" srcset="http://www.lnskutec.cz/wp-content/uploads/2015/10/hostovice-32x32.png 32w, http://www.lnskutec.cz/wp-content/uploads/2015/10/hostovice-150x150.png 150w, http://www.lnskutec.cz/wp-content/uploads/2015/10/hostovice-300x300.png 300w, http://www.lnskutec.cz/wp-content/uploads/2015/10/hostovice-128x128.png 128w, http://www.lnskutec.cz/wp-content/uploads/2015/10/hostovice.png 521w" sizes="(max-width: 32px) 100vw, 32px" />						</a>
											<a class="sp-team-link" href="http://www.hcrepniky.wz.cz">
							<img width="32" height="32" src="http://www.lnskutec.cz/wp-content/uploads/2015/10/repniky-32x32.png" class="sp-team-logo wp-post-image" alt="" title="HC Řepníky" srcset="http://www.lnskutec.cz/wp-content/uploads/2015/10/repniky-32x32.png 32w, http://www.lnskutec.cz/wp-content/uploads/2015/10/repniky-150x150.png 150w, http://www.lnskutec.cz/wp-content/uploads/2015/10/repniky-300x300.png 300w, http://www.lnskutec.cz/wp-content/uploads/2015/10/repniky-128x128.png 128w, http://www.lnskutec.cz/wp-content/uploads/2015/10/repniky.png 350w" sizes="(max-width: 32px) 100vw, 32px" />						</a>
											<a class="sp-team-link" href="http://www.hcskulls.estranky.cz/">
							<img width="32" height="26" src="http://www.lnskutec.cz/wp-content/uploads/2015/10/skulls-32x26.png" class="sp-team-logo wp-post-image" alt="" title="HC Skulls Hlinsko" srcset="http://www.lnskutec.cz/wp-content/uploads/2015/10/skulls-32x26.png 32w, http://www.lnskutec.cz/wp-content/uploads/2015/10/skulls.png 300w, http://www.lnskutec.cz/wp-content/uploads/2015/10/skulls-128x105.png 128w" sizes="(max-width: 32px) 100vw, 32px" />						</a>
											<a class="sp-team-link" href="http://www.hcjenisovice.estranky.cz/">
							<img width="32" height="24" src="http://www.lnskutec.cz/wp-content/uploads/2015/10/jenisovice-32x24.png" class="sp-team-logo wp-post-image" alt="" title="HC Sokol Jenišovice" srcset="http://www.lnskutec.cz/wp-content/uploads/2015/10/jenisovice-32x24.png 32w, http://www.lnskutec.cz/wp-content/uploads/2015/10/jenisovice.png 123w" sizes="(max-width: 32px) 100vw, 32px" />						</a>
											<a class="sp-team-link" href="http://www.hcsokolteleci.websnadno.cz/">
							<img width="32" height="32" src="http://www.lnskutec.cz/wp-content/uploads/2016/01/Logo-Hc-Telecí-velké-32x32.png" class="sp-team-logo wp-post-image" alt="" title="HC Sokol Telecí" srcset="http://www.lnskutec.cz/wp-content/uploads/2016/01/Logo-Hc-Telecí-velké-32x32.png 32w, http://www.lnskutec.cz/wp-content/uploads/2016/01/Logo-Hc-Telecí-velké-150x150.png 150w, http://www.lnskutec.cz/wp-content/uploads/2016/01/Logo-Hc-Telecí-velké-300x300.png 300w, http://www.lnskutec.cz/wp-content/uploads/2016/01/Logo-Hc-Telecí-velké-128x128.png 128w, http://www.lnskutec.cz/wp-content/uploads/2016/01/Logo-Hc-Telecí-velké.png 331w" sizes="(max-width: 32px) 100vw, 32px" />						</a>
											<a class="sp-team-link" href="http://www.lnskutec.cz/?sp_team=hc-stepanov">
													</a>
											<a class="sp-team-link" href="http://www.lnskutec.cz/?sp_team=hc-men-in-black">
													</a>
											<a class="sp-team-link" href="http://www.hczajecice.cmelik.cz">
							<img width="23" height="32" src="http://www.lnskutec.cz/wp-content/uploads/2015/10/HC-Zaječice-logo2_malé-23x32.jpg" class="sp-team-logo wp-post-image" alt="" title="HC Zaječice" srcset="http://www.lnskutec.cz/wp-content/uploads/2015/10/HC-Zaječice-logo2_malé-23x32.jpg 23w, http://www.lnskutec.cz/wp-content/uploads/2015/10/HC-Zaječice-logo2_malé-94x128.jpg 94w, http://www.lnskutec.cz/wp-content/uploads/2015/10/HC-Zaječice-logo2_malé.jpg 118w" sizes="(max-width: 23px) 100vw, 23px" />						</a>
											<a class="sp-team-link" href="https://cs-cz.facebook.com/pages/Jokerit-Skute%C4%8D/118988064798052">
							<img width="32" height="30" src="http://www.lnskutec.cz/wp-content/uploads/2015/10/jokerit_skutec-32x30.png" class="sp-team-logo wp-post-image" alt="" title="SK Jokerit Skuteč" srcset="http://www.lnskutec.cz/wp-content/uploads/2015/10/jokerit_skutec-32x30.png 32w, http://www.lnskutec.cz/wp-content/uploads/2015/10/jokerit_skutec.png 300w, http://www.lnskutec.cz/wp-content/uploads/2015/10/jokerit_skutec-128x120.png 128w" sizes="(max-width: 32px) 100vw, 32px" />						</a>
														</div>
			</div>
			</div>
<div id="page" class="hfeed site">
	<a class="skip-link screen-reader-text" href="#content">Skip to content</a>

	<header id="masthead" class="site-header" role="banner">
				<div class="header-area header-area-has-logo header-area-has-search">
																						<div class="site-branding">
					<div class="site-identity">
												<a class="site-logo" href="http://www.lnskutec.cz/" rel="home"><img src="http://www.lnskutec.cz/wp-content/uploads/2015/10/ln_skutec.png" alt="Liga neregistrovaných Skuteč"></a>
																		<hgroup style="color: #222222">
							<h1 class="site-title"><a href="http://www.lnskutec.cz/" rel="home">Liga neregistrovaných Skuteč</a></h1>
							<h2 class="site-description"></h2>
						</hgroup>
											</div>
				</div><!-- .site-branding -->
																								<div class="site-menu">
					<nav id="site-navigation" class="main-navigation" role="navigation">
						<button class="menu-toggle" aria-controls="menu" aria-expanded="false"><span class="dashicons dashicons-menu"></span></button>
						<div class="menu-menu-container"><ul id="menu-menu" class="menu"><li id="menu-item-1513" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1513"><a href="http://www.lnskutec.cz/?cat=21">Aktuality</a></li>
<li id="menu-item-1437" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1437"><a href="http://www.lnskutec.cz/?page_id=36">Aktuální sezóna</a>
<ul  class="sub-menu">
	<li id="menu-item-1438" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1438"><a href="http://www.lnskutec.cz/?page_id=20">Rozpis zápasů</a></li>
	<li id="menu-item-3714" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3714"><a href="http://www.lnskutec.cz/?page_id=3712">Výsledky 2021-2022</a></li>
	<li id="menu-item-3689" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3689"><a href="http://www.lnskutec.cz/?page_id=1496">Tabulka základní části</a></li>
	<li id="menu-item-3815" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3815"><a href="http://www.lnskutec.cz/?page_id=3810">Play-off 2021-2022</a></li>
</ul>
</li>
<li id="menu-item-1451" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1451"><a href="http://www.lnskutec.cz/?page_id=26">Mužstva</a>
<ul  class="sub-menu">
	<li id="menu-item-1452" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1452"><a href="http://www.lnskutec.cz/?page_id=23">Soupisky</a>
	<ul  class="sub-menu">
		<li id="menu-item-1453" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1453"><a href="http://www.lnskutec.cz/?page_id=282">HC Chlumětín</a></li>
		<li id="menu-item-1456" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1456"><a href="http://www.lnskutec.cz/?page_id=286">HC Jokerit Skuteč</a></li>
		<li id="menu-item-1459" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1459"><a href="http://www.lnskutec.cz/?page_id=1052">HC Pstruzi Otradov</a></li>
		<li id="menu-item-1461" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1461"><a href="http://www.lnskutec.cz/?page_id=276">HC Radioaktivita Hostovice</a></li>
		<li id="menu-item-1463" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1463"><a href="http://www.lnskutec.cz/?page_id=292">HC Řepníky</a></li>
		<li id="menu-item-1464" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1464"><a href="http://www.lnskutec.cz/?page_id=278">HC Skulls Hlinsko</a></li>
		<li id="menu-item-1465" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1465"><a href="http://www.lnskutec.cz/?page_id=294">HC Sokol Telecí</a></li>
		<li id="menu-item-1466" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1466"><a href="http://www.lnskutec.cz/?page_id=296">HC Štěpánov</a></li>
		<li id="menu-item-3093" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3093"><a href="http://www.lnskutec.cz/?page_id=288">HC Tigers Pardubice</a></li>
	</ul>
</li>
	<li id="menu-item-1468" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1468"><a href="http://www.lnskutec.cz/?page_id=317">Kontakty na mužstva</a></li>
</ul>
</li>
<li id="menu-item-1469" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1469"><a href="http://www.lnskutec.cz/?page_id=44">Vedení LNS a komise</a>
<ul  class="sub-menu">
	<li id="menu-item-1470" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1470"><a href="http://www.lnskutec.cz/?page_id=270">VV a komise LNS</a></li>
	<li id="menu-item-1471" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1471"><a href="http://www.lnskutec.cz/?page_id=272">Seznam rozhodčích</a></li>
	<li id="menu-item-1472" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1472"><a href="http://www.lnskutec.cz/?page_id=274">Herní systém</a></li>
</ul>
</li>
<li id="menu-item-2922" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2922"><a href="http://www.lnskutec.cz/?page_id=2917">Pravidla a ustanovení</a></li>
<li id="menu-item-1473" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current_page_ancestor menu-item-has-children menu-item-1473"><a href="http://www.lnskutec.cz/?page_id=268">Archiv</a>
<ul  class="sub-menu">
	<li id="menu-item-3395" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-3395"><a href="http://www.lnskutec.cz/?page_id=3393">Archiv 2019-2020</a>
	<ul  class="sub-menu">
		<li id="menu-item-2936" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-2925 current_page_item menu-item-2936"><a href="http://www.lnskutec.cz/?page_id=2925">Výsledky 2019-2020</a></li>
		<li id="menu-item-2935" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2935"><a href="http://www.lnskutec.cz/?page_id=2927">Kanadské bodování 2019-2020</a></li>
		<li id="menu-item-2934" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2934"><a href="http://www.lnskutec.cz/?page_id=2929">Tresty 2019-2020</a></li>
	</ul>
</li>
	<li id="menu-item-2933" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2933"><a href="http://www.lnskutec.cz/?page_id=2931">Archiv 2018-2019</a>
	<ul  class="sub-menu">
		<li id="menu-item-2334" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2334"><a href="http://www.lnskutec.cz/?page_id=2031">Výsledky</a></li>
		<li id="menu-item-2500" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2500"><a href="http://www.lnskutec.cz/?page_id=2494">Kanadské bodování 2018-2019</a></li>
		<li id="menu-item-2499" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2499"><a href="http://www.lnskutec.cz/?page_id=2497">Tresty 2018-2019</a></li>
	</ul>
</li>
	<li id="menu-item-2307" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-2307"><a href="http://www.lnskutec.cz/?cat=41">Archiv 2017_2018</a>
	<ul  class="sub-menu">
		<li id="menu-item-2033" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2033"><a href="http://www.lnskutec.cz/?page_id=2031">Výsledky 2017_2018</a></li>
		<li id="menu-item-2000" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2000"><a href="http://www.lnskutec.cz/?page_id=1998">Základní část LNS 2017-2018</a></li>
		<li id="menu-item-2149" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2149"><a href="http://www.lnskutec.cz/?page_id=2146">Kanadské bodování sezóny 2017-2018</a></li>
		<li id="menu-item-2159" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2159"><a href="http://www.lnskutec.cz/?page_id=2157">Tresty hráčů 2017-2018</a></li>
		<li id="menu-item-1921" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1921"><a href="http://www.lnskutec.cz/?page_id=1907">Diskuse</a></li>
	</ul>
</li>
	<li id="menu-item-1911" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-1911"><a href="http://www.lnskutec.cz/?cat=35">Archiv 2016_2017</a>
	<ul  class="sub-menu">
		<li id="menu-item-1490" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1490"><a href="http://www.lnskutec.cz/?page_id=1486">Výsledky 2016_2017</a></li>
		<li id="menu-item-1501" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1501"><a href="http://www.lnskutec.cz/?page_id=1493">Tabulky 2016_2017</a>
		<ul  class="sub-menu">
			<li id="menu-item-1811" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1811"><a href="http://www.lnskutec.cz/?page_id=1809">Play-off LNS 2016/2017</a></li>
			<li id="menu-item-1837" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1837"><a href="http://www.lnskutec.cz/?page_id=1834">O pohár starosty města Skutče (2016/17)</a></li>
			<li id="menu-item-1500" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1500"><a href="http://www.lnskutec.cz/?page_id=1496">Tabulka základní části</a></li>
			<li id="menu-item-1745" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1745"><a href="http://www.lnskutec.cz/?page_id=1742">Kanadské bodování</a></li>
			<li id="menu-item-1888" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1888"><a href="http://www.lnskutec.cz/?page_id=1884">Kanadské bodování základní části</a></li>
		</ul>
</li>
		<li id="menu-item-1510" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1510"><a href="http://www.lnskutec.cz/?page_id=1505">Tresty STK_2016_2017</a>
		<ul  class="sub-menu">
			<li id="menu-item-1744" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1744"><a href="http://www.lnskutec.cz/?page_id=1507">Tabulka trestů 2016_2017</a></li>
		</ul>
</li>
		<li id="menu-item-1914" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1914"><a href="http://www.lnskutec.cz/?cat=36">Aktuality 2016_2017</a></li>
	</ul>
</li>
	<li id="menu-item-1419" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-1419"><a href="http://www.lnskutec.cz/?cat=28">Archiv 2015_2016</a>
	<ul  class="sub-menu">
		<li id="menu-item-1440" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1440"><a href="http://www.lnskutec.cz/?page_id=314">Výsledky_2015_2016</a></li>
		<li id="menu-item-1441" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1441"><a href="http://www.lnskutec.cz/?page_id=1223">Tabulky 2015_2016</a>
		<ul  class="sub-menu">
			<li id="menu-item-1442" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1442"><a href="http://www.lnskutec.cz/?page_id=310">Tabulka základní části 2015_2016</a></li>
			<li id="menu-item-1445" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1445"><a href="http://www.lnskutec.cz/?page_id=1231">Předkolo LNS (9.-11. místo)</a></li>
			<li id="menu-item-1446" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1446"><a href="http://www.lnskutec.cz/?page_id=1264">Tabulka o konečné pořadí (13.-15.místo)</a></li>
			<li id="menu-item-1424" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1424"><a href="http://www.lnskutec.cz/?page_id=1231">Předkolo LNS (9.-11. místo)</a></li>
			<li id="menu-item-1444" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1444"><a href="http://www.lnskutec.cz/?page_id=1228">O pohár starosty Skutče</a></li>
			<li id="menu-item-1443" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1443"><a href="http://www.lnskutec.cz/?page_id=1225">Play-off o vítěze LNS</a></li>
		</ul>
</li>
		<li id="menu-item-1447" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1447"><a href="http://www.lnskutec.cz/?page_id=304">Tresty STK 2015_2016</a>
		<ul  class="sub-menu">
			<li id="menu-item-1448" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1448"><a href="http://www.lnskutec.cz/?page_id=430">Tabulka trestů 2015_2016</a></li>
		</ul>
</li>
		<li id="menu-item-1484" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1484"><a href="http://www.lnskutec.cz/?cat=28">Archiv 2015_2016</a></li>
		<li id="menu-item-1450" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1450"><a href="http://www.lnskutec.cz/?page_id=930">Příspěvky návštěv</a></li>
	</ul>
</li>
</ul>
</li>
<li id="menu-item-1476" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1476"><a href="http://www.lnskutec.cz/?page_id=985">Reklamní sdělení</a></li>
<li id="menu-item-2921" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2921"><a href="http://www.lnskutec.cz/?page_id=2919">Dokumenty</a></li>
</ul></div>						<form role="search" method="get" class="search-form" action="http://www.lnskutec.cz/">
				<label>
					<span class="screen-reader-text">Vyhledávání</span>
					<input type="search" class="search-field" placeholder="Hledat &hellip;" value="" name="s" />
				</label>
				<input type="submit" class="search-submit" value="&#61817;" title="Hledat" />
			</form>					</nav><!-- #site-navigation -->
				</div>
						</div>
		</header><!-- #masthead -->

	<div id="content" class="site-content">

	<div id="primary" class="content-area content-area-right-sidebar">
		<main id="main" class="site-main" role="main">






<article id="post-2925" class="post-2925 page type-page status-publish hentry">
	<!-- If it is not a page - use get_post_permalink with sample option set to true -->

	<header class="entry-header">

		<h1 class="entry-title">Výsledky 2019-2020</h1>	</header><!– .entry-header –>


	<div class="entry-content">
		<div class="sportspress"><div class="sp-template sp-template-event-list">
			<h4 class="sp-table-caption">Výsledky 2019-2020</h4>
		<div class="sp-table-wrapper">
		<table class="sp-event-list sp-data-table sp-paginated-table sp-sortable-table sp-scrollable-table" data-sp-rows="25">
			<thead>
				<tr>
					<th class="data-date">Datum</th><th class="data-home">Domácí</th><th class="data-results">Výsledky</th><th class="data-away">Hosté</th><th class="data-time">Čas</th><th class="data-league">Soutěž</th>				</tr>
			</thead>
			<tbody>
				<tr class="sp-row sp-post alternate sp-row-no-0"><td class="data-date"><a href="?sp_event=3297"><date>2020-03-18 19:45:10</date>18.3.2020</a></td><td class="data-home">HC Řepníky</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3297">-</a></td><td class="data-away">HC Tigers Pardubice</td><td class="data-time"><a href="?sp_event=3297"><date>&nbsp;19:45:10</date>19:45</a></td><td class="data-league">O pohár starosty města Skuteč (2019-2020)</td></tr><tr class="sp-row sp-post sp-row-no-1"><td class="data-date"><a href="?sp_event=3296"><date>2020-03-15 19:00:16</date>15.3.2020</a></td><td class="data-home">HC Ostrov</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3296">-</a></td><td class="data-away">HC Pstruzi Otradov</td><td class="data-time"><a href="?sp_event=3296"><date>&nbsp;19:00:16</date>19:00</a></td><td class="data-league">O pohár starosty města Skuteč (2019-2020)</td></tr><tr class="sp-row sp-post alternate sp-row-no-2"><td class="data-date"><a href="?sp_event=3290"><date>2020-03-15 16:30:12</date>15.3.2020</a></td><td class="data-home">SK Jokerit Skuteč</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3290">-</a></td><td class="data-away">HC Radioaktivita Hostovice</td><td class="data-time"><a href="?sp_event=3290"><date>&nbsp;16:30:12</date>16:30</a></td><td class="data-league">Play-off LNS (2019-2020)</td></tr><tr class="sp-row sp-post sp-row-no-3"><td class="data-date"><a href="?sp_event=3293"><date>2020-03-14 15:30:05</date>14.3.2020</a></td><td class="data-home">HC Tigers Pardubice</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3293">-</a></td><td class="data-away">HC Řepníky</td><td class="data-time"><a href="?sp_event=3293"><date>&nbsp;15:30:05</date>15:30</a></td><td class="data-league">O pohár starosty města Skuteč (2019-2020)</td></tr><tr class="sp-row sp-post alternate sp-row-no-4"><td class="data-date"><a href="?sp_event=3289"><date>2020-03-14 13:00:23</date>14.3.2020</a></td><td class="data-home">HC Chlumětín</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3289">-</a></td><td class="data-away">HC Skulls Hlinsko</td><td class="data-time"><a href="?sp_event=3289"><date>&nbsp;13:00:23</date>13:00</a></td><td class="data-league">Play-off LNS (2019-2020)</td></tr><tr class="sp-row sp-post sp-row-no-5"><td class="data-date"><a href="?sp_event=3292"><date>2020-03-13 19:45:17</date>13.3.2020</a></td><td class="data-home">HC Pstruzi Otradov</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3292">-</a></td><td class="data-away">HC Ostrov</td><td class="data-time"><a href="?sp_event=3292"><date>&nbsp;19:45:17</date>19:45</a></td><td class="data-league">O pohár starosty města Skuteč (2019-2020)</td></tr><tr class="sp-row sp-post alternate sp-row-no-6"><td class="data-date"><a href="?sp_event=3286"><date>2020-03-11 19:45:34</date>11.3.2020</a></td><td class="data-home">HC Radioaktivita Hostovice</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3286">5 - 6</a></td><td class="data-away">SK Jokerit Skuteč</td><td class="data-time"><a href="?sp_event=3286"><date>&nbsp;19:45:34</date>19:45</a></td><td class="data-league">Play-off LNS (2019-2020)</td></tr><tr class="sp-row sp-post sp-row-no-7"><td class="data-date"><a href="?sp_event=3285"><date>2020-03-08 19:00:44</date>8.3.2020</a></td><td class="data-home">HC Skulls Hlinsko</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3285">4 - 5</a></td><td class="data-away">HC Chlumětín</td><td class="data-time"><a href="?sp_event=3285"><date>&nbsp;19:00:44</date>19:00</a></td><td class="data-league">Play-off LNS (2019-2020)</td></tr><tr class="sp-row sp-post alternate sp-row-no-8"><td class="data-date"><a href="?sp_event=3283"><date>2020-03-08 11:15:25</date>8.3.2020</a></td><td class="data-home">HC Ostrov</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3283">5 - 0</a></td><td class="data-away">HC Rosice &#038; Zaječice</td><td class="data-time"><a href="?sp_event=3283"><date>&nbsp;11:15:25</date>11:15</a></td><td class="data-league">O pohár starosty města Skuteč (2019-2020)</td></tr><tr class="sp-row sp-post sp-row-no-9"><td class="data-date"><a href="?sp_event=3282"><date>2020-03-06 19:45:21</date>6.3.2020</a></td><td class="data-home">HC Pstruzi Otradov</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3282">12 - 6</a></td><td class="data-away">HC Štěpánov</td><td class="data-time"><a href="?sp_event=3282"><date>&nbsp;19:45:21</date>19:45</a></td><td class="data-league">O pohár starosty města Skuteč (2019-2020)</td></tr><tr class="sp-row sp-post alternate sp-row-no-10"><td class="data-date"><a href="?sp_event=3274"><date>2020-03-01 19:00:21</date>1.3.2020</a></td><td class="data-home">HC Radioaktivita Hostovice</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3274">10 - 4</a></td><td class="data-away">HC Řepníky</td><td class="data-time"><a href="?sp_event=3274"><date>&nbsp;19:00:21</date>19:00</a></td><td class="data-league">Play-off LNS (2019-2020)</td></tr><tr class="sp-row sp-post sp-row-no-11"><td class="data-date"><a href="?sp_event=3277"><date>2020-03-01 11:15:03</date>1.3.2020</a></td><td class="data-home">HC Sokol Telecí</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3277">4 - 9</a></td><td class="data-away">HC Tigers Pardubice</td><td class="data-time"><a href="?sp_event=3277"><date>&nbsp;11:15:03</date>11:15</a></td><td class="data-league">O pohár starosty města Skuteč (2019-2020)</td></tr><tr class="sp-row sp-post alternate sp-row-no-12"><td class="data-date"><a href="?sp_event=3273"><date>2020-02-29 08:45:31</date>29.2.2020</a></td><td class="data-home">HC Ostrov</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3273">3 - 1</a></td><td class="data-away">HC Skulls Hlinsko</td><td class="data-time"><a href="?sp_event=3273"><date>&nbsp;08:45:31</date>8:45</a></td><td class="data-league">Play-off LNS (2019-2020)</td></tr><tr class="sp-row sp-post sp-row-no-13"><td class="data-date"><a href="?sp_event=3272"><date>2020-02-28 19:45:48</date>28.2.2020</a></td><td class="data-home">HC Pstruzi Otradov</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3272">1 - 6</a></td><td class="data-away">HC Chlumětín</td><td class="data-time"><a href="?sp_event=3272"><date>&nbsp;19:45:48</date>19:45</a></td><td class="data-league">Play-off LNS (2019-2020)</td></tr><tr class="sp-row sp-post alternate sp-row-no-14"><td class="data-date"><a href="?sp_event=3271"><date>2020-02-26 19:45:47</date>26.2.2020</a></td><td class="data-home">HC Tigers Pardubice</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3271">6 - 8</a></td><td class="data-away">SK Jokerit Skuteč</td><td class="data-time"><a href="?sp_event=3271"><date>&nbsp;19:45:47</date>19:45</a></td><td class="data-league">Play-off LNS (2019-2020)</td></tr><tr class="sp-row sp-post sp-row-no-15"><td class="data-date"><a href="?sp_event=3264"><date>2020-02-23 18:45:49</date>23.2.2020</a></td><td class="data-home">HC Chlumětín</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3264">4 - 8</a></td><td class="data-away">HC Pstruzi Otradov</td><td class="data-time"><a href="?sp_event=3264"><date>&nbsp;18:45:49</date>18:45</a></td><td class="data-league">Play-off LNS (2019-2020)</td></tr><tr class="sp-row sp-post alternate sp-row-no-16"><td class="data-date"><a href="?sp_event=3263"><date>2020-02-23 16:30:43</date>23.2.2020</a></td><td class="data-home">HC Skulls Hlinsko</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3263">12 - 4</a></td><td class="data-away">HC Ostrov</td><td class="data-time"><a href="?sp_event=3263"><date>&nbsp;16:30:43</date>16:30</a></td><td class="data-league">Play-off LNS (2019-2020)</td></tr><tr class="sp-row sp-post sp-row-no-17"><td class="data-date"><a href="?sp_event=3262"><date>2020-02-23 11:30:43</date>23.2.2020</a></td><td class="data-home">SK Jokerit Skuteč</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3262">8 - 2</a></td><td class="data-away">HC Tigers Pardubice</td><td class="data-time"><a href="?sp_event=3262"><date>&nbsp;11:30:43</date>11:30</a></td><td class="data-league">Play-off LNS (2019-2020)</td></tr><tr class="sp-row sp-post alternate sp-row-no-18"><td class="data-date"><a href="?sp_event=3261"><date>2020-02-21 19:45:21</date>21.2.2020</a></td><td class="data-home">HC Řepníky</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3261">4 - 6</a></td><td class="data-away">HC Radioaktivita Hostovice</td><td class="data-time"><a href="?sp_event=3261"><date>&nbsp;19:45:21</date>19:45</a></td><td class="data-league">Play-off LNS (2019-2020)</td></tr><tr class="sp-row sp-post sp-row-no-19"><td class="data-date"><a href="?sp_event=3249"><date>2020-02-19 20:00:38</date>19.2.2020</a></td><td class="data-home">HC Řepníky</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3249">4 - 1</a></td><td class="data-away">HC Rosice &#038; Zaječice</td><td class="data-time"><a href="?sp_event=3249"><date>&nbsp;20:00:38</date>20:00</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post alternate sp-row-no-20"><td class="data-date"><a href="?sp_event=3248"><date>2020-02-16 19:00:58</date>16.2.2020</a></td><td class="data-home">HC Sokol Telecí</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3248">2 - 5</a></td><td class="data-away">HC Tigers Pardubice</td><td class="data-time"><a href="?sp_event=3248"><date>&nbsp;19:00:58</date>19:00</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post sp-row-no-21"><td class="data-date"><a href="?sp_event=3247"><date>2020-02-16 10:45:19</date>16.2.2020</a></td><td class="data-home">HC Řepníky</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3247">8 - 3</a></td><td class="data-away">HC Štěpánov</td><td class="data-time"><a href="?sp_event=3247"><date>&nbsp;10:45:19</date>10:45</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post alternate sp-row-no-22"><td class="data-date"><a href="?sp_event=3246"><date>2020-02-16 08:55:50</date>16.2.2020</a></td><td class="data-home">HC Rosice &#038; Zaječice</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3246">3 - 8</a></td><td class="data-away">HC Chlumětín</td><td class="data-time"><a href="?sp_event=3246"><date>&nbsp;08:55:50</date>8:55</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post sp-row-no-23"><td class="data-date"><a href="?sp_event=3245"><date>2020-02-15 10:45:16</date>15.2.2020</a></td><td class="data-home">SK Jokerit Skuteč</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3245">2 - 5</a></td><td class="data-away">HC Skulls Hlinsko</td><td class="data-time"><a href="?sp_event=3245"><date>&nbsp;10:45:16</date>10:45</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post alternate sp-row-no-24"><td class="data-date"><a href="?sp_event=3244"><date>2020-02-15 08:55:45</date>15.2.2020</a></td><td class="data-home">HC Pstruzi Otradov</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3244">8 - 9</a></td><td class="data-away">HC Radioaktivita Hostovice</td><td class="data-time"><a href="?sp_event=3244"><date>&nbsp;08:55:45</date>8:55</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post sp-row-no-25"><td class="data-date"><a href="?sp_event=3243"><date>2020-02-14 20:00:09</date>14.2.2020</a></td><td class="data-home">HC Tigers Pardubice</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3243">1 - 9</a></td><td class="data-away">HC Ostrov</td><td class="data-time"><a href="?sp_event=3243"><date>&nbsp;20:00:09</date>20:00</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post alternate sp-row-no-26"><td class="data-date"><a href="?sp_event=3242"><date>2020-02-12 20:00:54</date>12.2.2020</a></td><td class="data-home">HC Pstruzi Otradov</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3242">6 - 3</a></td><td class="data-away">HC Sokol Telecí</td><td class="data-time"><a href="?sp_event=3242"><date>&nbsp;20:00:54</date>20:00</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post sp-row-no-27"><td class="data-date"><a href="?sp_event=3228"><date>2020-02-09 18:15:54</date>9.2.2020</a></td><td class="data-home">HC Sokol Telecí</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3228">1 - 8</a></td><td class="data-away">HC Radioaktivita Hostovice</td><td class="data-time"><a href="?sp_event=3228"><date>&nbsp;18:15:54</date>18:15</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post alternate sp-row-no-28"><td class="data-date"><a href="?sp_event=3226"><date>2020-02-09 16:30:58</date>9.2.2020</a></td><td class="data-home">HC Rosice &#038; Zaječice</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3226">3 - 10</a></td><td class="data-away">SK Jokerit Skuteč</td><td class="data-time"><a href="?sp_event=3226"><date>&nbsp;16:30:58</date>16:30</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post sp-row-no-29"><td class="data-date"><a href="?sp_event=3230"><date>2020-02-09 10:50:23</date>9.2.2020</a></td><td class="data-home">HC Skulls Hlinsko</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3230">9 - 0</a></td><td class="data-away">HC Ostrov</td><td class="data-time"><a href="?sp_event=3230"><date>&nbsp;10:50:23</date>10:50</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post alternate sp-row-no-30"><td class="data-date"><a href="?sp_event=3224"><date>2020-02-09 08:55:57</date>9.2.2020</a></td><td class="data-home">HC Tigers Pardubice</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3224">2 - 6</a></td><td class="data-away">HC Řepníky</td><td class="data-time"><a href="?sp_event=3224"><date>&nbsp;08:55:57</date>8:55</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post sp-row-no-31"><td class="data-date"><a href="?sp_event=3223"><date>2020-02-08 16:00:33</date>8.2.2020</a></td><td class="data-home">HC Štěpánov</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3223">2 - 5</a></td><td class="data-away">HC Pstruzi Otradov</td><td class="data-time"><a href="?sp_event=3223"><date>&nbsp;16:00:33</date>16:00</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post alternate sp-row-no-32"><td class="data-date"><a href="?sp_event=3218"><date>2020-02-07 20:00:26</date>7.2.2020</a></td><td class="data-home">HC Ostrov</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3218">5 - 2</a></td><td class="data-away">HC Rosice &#038; Zaječice</td><td class="data-time"><a href="?sp_event=3218"><date>&nbsp;20:00:26</date>20:00</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post sp-row-no-33"><td class="data-date"><a href="?sp_event=3219"><date>2020-02-05 20:00:12</date>5.2.2020</a></td><td class="data-home">HC Chlumětín</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3219">7 - 1</a></td><td class="data-away">HC Štěpánov</td><td class="data-time"><a href="?sp_event=3219"><date>&nbsp;20:00:12</date>20:00</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post alternate sp-row-no-34"><td class="data-date"><a href="?sp_event=3217"><date>2020-02-02 10:50:05</date>2.2.2020</a></td><td class="data-home">SK Jokerit Skuteč</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3217">9 - 0</a></td><td class="data-away">HC Štěpánov</td><td class="data-time"><a href="?sp_event=3217"><date>&nbsp;10:50:05</date>10:50</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post sp-row-no-35"><td class="data-date"><a href="?sp_event=3216"><date>2020-02-02 08:55:11</date>2.2.2020</a></td><td class="data-home">HC Pstruzi Otradov</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3216">2 - 4</a></td><td class="data-away">HC Řepníky</td><td class="data-time"><a href="?sp_event=3216"><date>&nbsp;08:55:11</date>8:55</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post alternate sp-row-no-36"><td class="data-date"><a href="?sp_event=3215"><date>2020-02-01 16:00:44</date>1.2.2020</a></td><td class="data-home">HC Rosice &#038; Zaječice</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3215">3 - 6</a></td><td class="data-away">HC Radioaktivita Hostovice</td><td class="data-time"><a href="?sp_event=3215"><date>&nbsp;16:00:44</date>16:00</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post sp-row-no-37"><td class="data-date"><a href="?sp_event=3214"><date>2020-02-01 14:15:57</date>1.2.2020</a></td><td class="data-home">HC Skulls Hlinsko</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3214">2 - 8</a></td><td class="data-away">HC Chlumětín</td><td class="data-time"><a href="?sp_event=3214"><date>&nbsp;14:15:57</date>14:15</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post alternate sp-row-no-38"><td class="data-date"><a href="?sp_event=3213"><date>2020-02-01 12:30:05</date>1.2.2020</a></td><td class="data-home">HC Tigers Pardubice</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3213">3 - 8</a></td><td class="data-away">SK Jokerit Skuteč</td><td class="data-time"><a href="?sp_event=3213"><date>&nbsp;12:30:05</date>12:30</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post sp-row-no-39"><td class="data-date"><a href="?sp_event=3212"><date>2020-01-31 20:00:22</date>31.1.2020</a></td><td class="data-home">HC Ostrov</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3212">3 - 4</a></td><td class="data-away">HC Řepníky</td><td class="data-time"><a href="?sp_event=3212"><date>&nbsp;20:00:22</date>20:00</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post alternate sp-row-no-40"><td class="data-date"><a href="?sp_event=3190"><date>2020-01-29 19:45:54</date>29.1.2020</a></td><td class="data-home">HC Chlumětín</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3190">8 - 1</a></td><td class="data-away">HC Sokol Telecí</td><td class="data-time"><a href="?sp_event=3190"><date>&nbsp;19:45:54</date>19:45</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post sp-row-no-41"><td class="data-date"><a href="?sp_event=3206"><date>2020-01-26 16:30:03</date>26.1.2020</a></td><td class="data-home">HC Řepníky</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3206">2 - 4</a></td><td class="data-away">SK Jokerit Skuteč</td><td class="data-time"><a href="?sp_event=3206"><date>&nbsp;16:30:03</date>16:30</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post alternate sp-row-no-42"><td class="data-date"><a href="?sp_event=3189"><date>2020-01-26 10:50:30</date>26.1.2020</a></td><td class="data-home">HC Skulls Hlinsko</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3189">2 - 4</a></td><td class="data-away">HC Pstruzi Otradov</td><td class="data-time"><a href="?sp_event=3189"><date>&nbsp;10:50:30</date>10:50</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post sp-row-no-43"><td class="data-date"><a href="?sp_event=3186"><date>2020-01-25 16:00:47</date>25.1.2020</a></td><td class="data-home">HC Ostrov</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3186">3 - 6</a></td><td class="data-away">HC Chlumětín</td><td class="data-time"><a href="?sp_event=3186"><date>&nbsp;16:00:47</date>16:00</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post alternate sp-row-no-44"><td class="data-date"><a href="?sp_event=3187"><date>2020-01-25 14:15:43</date>25.1.2020</a></td><td class="data-home">HC Tigers Pardubice</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3187">3 - 20</a></td><td class="data-away">HC Radioaktivita Hostovice</td><td class="data-time"><a href="?sp_event=3187"><date>&nbsp;14:15:43</date>14:15</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post sp-row-no-45"><td class="data-date"><a href="?sp_event=3188"><date>2020-01-25 12:30:42</date>25.1.2020</a></td><td class="data-home">HC Rosice &#038; Zaječice</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3188">1 - 2</a></td><td class="data-away">HC Štěpánov</td><td class="data-time"><a href="?sp_event=3188"><date>&nbsp;12:30:42</date>12:30</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post alternate sp-row-no-46"><td class="data-date"><a href="?sp_event=3185"><date>2020-01-24 20:00:50</date>24.1.2020</a></td><td class="data-home">SK Jokerit Skuteč</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3185">13 - 1</a></td><td class="data-away">HC Sokol Telecí</td><td class="data-time"><a href="?sp_event=3185"><date>&nbsp;20:00:50</date>20:00</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post sp-row-no-47"><td class="data-date"><a href="?sp_event=3075"><date>2020-01-22 20:00:21</date>22.1.2020</a></td><td class="data-home">HC Radioaktivita Hostovice</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3075">10 - 2</a></td><td class="data-away">HC Řepníky</td><td class="data-time"><a href="?sp_event=3075"><date>&nbsp;20:00:21</date>20:00</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post alternate sp-row-no-48"><td class="data-date"><a href="?sp_event=3179"><date>2020-01-19 20:00:58</date>19.1.2020</a></td><td class="data-home">HC Chlumětín</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3179">15 - 0</a></td><td class="data-away">HC Tigers Pardubice</td><td class="data-time"><a href="?sp_event=3179"><date>&nbsp;20:00:58</date>20:00</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post sp-row-no-49"><td class="data-date"><a href="?sp_event=3178"><date>2020-01-19 18:15:13</date>19.1.2020</a></td><td class="data-home">HC Radioaktivita Hostovice</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3178">2 - 4</a></td><td class="data-away">HC Skulls Hlinsko</td><td class="data-time"><a href="?sp_event=3178"><date>&nbsp;18:15:13</date>18:15</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post alternate sp-row-no-50"><td class="data-date"><a href="?sp_event=3177"><date>2020-01-19 16:30:19</date>19.1.2020</a></td><td class="data-home">HC Pstruzi Otradov</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3177">7 - 8</a></td><td class="data-away">HC Rosice &#038; Zaječice</td><td class="data-time"><a href="?sp_event=3177"><date>&nbsp;16:30:19</date>16:30</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post sp-row-no-51"><td class="data-date"><a href="?sp_event=3175"><date>2020-01-19 08:50:00</date>19.1.2020</a></td><td class="data-home">SK Jokerit Skuteč</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3175">5 - 2</a></td><td class="data-away">HC Ostrov</td><td class="data-time"><a href="?sp_event=3175"><date>&nbsp;08:50:00</date>8:50</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post alternate sp-row-no-52"><td class="data-date"><a href="?sp_event=3176"><date>2020-01-17 20:00:56</date>17.1.2020</a></td><td class="data-home">HC Řepníky</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3176">1 - 2</a></td><td class="data-away">HC Sokol Telecí</td><td class="data-time"><a href="?sp_event=3176"><date>&nbsp;20:00:56</date>20:00</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post sp-row-no-53"><td class="data-date"><a href="?sp_event=3092"><date>2020-01-15 20:00:20</date>15.1.2020</a></td><td class="data-home">HC Radioaktivita Hostovice</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3092">14 - 0</a></td><td class="data-away">HC Štěpánov</td><td class="data-time"><a href="?sp_event=3092"><date>&nbsp;20:00:20</date>20:00</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post alternate sp-row-no-54"><td class="data-date"><a href="?sp_event=3091"><date>2020-01-12 20:30:47</date>12.1.2020</a></td><td class="data-home">HC Chlumětín</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3091">5 - 6</a></td><td class="data-away">SK Jokerit Skuteč</td><td class="data-time"><a href="?sp_event=3091"><date>&nbsp;20:30:47</date>20:30</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post sp-row-no-55"><td class="data-date"><a href="?sp_event=3090"><date>2020-01-12 18:45:56</date>12.1.2020</a></td><td class="data-home">HC Pstruzi Otradov</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3090">9 - 3</a></td><td class="data-away">HC Tigers Pardubice</td><td class="data-time"><a href="?sp_event=3090"><date>&nbsp;18:45:56</date>18:45</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post alternate sp-row-no-56"><td class="data-date"><a href="?sp_event=3089"><date>2020-01-11 16:00:22</date>11.1.2020</a></td><td class="data-home">HC Radioaktivita Hostovice</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3089">9 - 3</a></td><td class="data-away">HC Ostrov</td><td class="data-time"><a href="?sp_event=3089"><date>&nbsp;16:00:22</date>16:00</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post sp-row-no-57"><td class="data-date"><a href="?sp_event=3088"><date>2020-01-11 14:15:48</date>11.1.2020</a></td><td class="data-home">HC Štěpánov</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3088">3 - 12</a></td><td class="data-away">HC Skulls Hlinsko</td><td class="data-time"><a href="?sp_event=3088"><date>&nbsp;14:15:48</date>14:15</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post alternate sp-row-no-58"><td class="data-date"><a href="?sp_event=3087"><date>2020-01-10 20:00:07</date>10.1.2020</a></td><td class="data-home">HC Sokol Telecí</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3087">6 - 7</a></td><td class="data-away">HC Rosice &#038; Zaječice</td><td class="data-time"><a href="?sp_event=3087"><date>&nbsp;20:00:07</date>20:00</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post sp-row-no-59"><td class="data-date"><a href="?sp_event=3086"><date>2020-01-08 20:00:14</date>8.1.2020</a></td><td class="data-home">HC Řepníky</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3086">4 - 13</a></td><td class="data-away">HC Skulls Hlinsko</td><td class="data-time"><a href="?sp_event=3086"><date>&nbsp;20:00:14</date>20:00</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post alternate sp-row-no-60"><td class="data-date"><a href="?sp_event=3084"><date>2020-01-05 10:50:21</date>5.1.2020</a></td><td class="data-home">HC Sokol Telecí</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3084">-</a></td><td class="data-away">HC Tigers Pardubice</td><td class="data-time"><a href="?sp_event=3084"><date>&nbsp;10:50:21</date>10:50</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post sp-row-no-61"><td class="data-date"><a href="?sp_event=3085"><date>2020-01-05 08:55:36</date>5.1.2020</a></td><td class="data-home">HC Řepníky</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3085">-</a></td><td class="data-away">HC Rosice &#038; Zaječice</td><td class="data-time"><a href="?sp_event=3085"><date>&nbsp;08:55:36</date>8:55</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post alternate sp-row-no-62"><td class="data-date"><a href="?sp_event=3083"><date>2020-01-04 16:00:38</date>4.1.2020</a></td><td class="data-home">HC Radioaktivita Hostovice</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3083">10 - 0</a></td><td class="data-away">HC Chlumětín</td><td class="data-time"><a href="?sp_event=3083"><date>&nbsp;16:00:38</date>16:00</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post sp-row-no-63"><td class="data-date"><a href="?sp_event=3082"><date>2020-01-04 14:15:52</date>4.1.2020</a></td><td class="data-home">HC Štěpánov</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3082">2 - 3</a></td><td class="data-away">HC Ostrov</td><td class="data-time"><a href="?sp_event=3082"><date>&nbsp;14:15:52</date>14:15</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post alternate sp-row-no-64"><td class="data-date"><a href="?sp_event=3081"><date>2020-01-04 12:20:11</date>4.1.2020</a></td><td class="data-home">HC Pstruzi Otradov</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3081">2 - 4</a></td><td class="data-away">SK Jokerit Skuteč</td><td class="data-time"><a href="?sp_event=3081"><date>&nbsp;12:20:11</date>12:20</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post sp-row-no-65"><td class="data-date"><a href="?sp_event=3080"><date>2020-01-03 20:00:17</date>3.1.2020</a></td><td class="data-home">HC Tigers Pardubice</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3080">1 - 8</a></td><td class="data-away">HC Skulls Hlinsko</td><td class="data-time"><a href="?sp_event=3080"><date>&nbsp;20:00:17</date>20:00</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post alternate sp-row-no-66"><td class="data-date"><a href="?sp_event=3077"><date>2019-12-27 20:00:36</date>27.12.2019</a></td><td class="data-home">HC Ostrov</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3077">7 - 1</a></td><td class="data-away">HC Sokol Telecí</td><td class="data-time"><a href="?sp_event=3077"><date>&nbsp;20:00:36</date>20:00</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post sp-row-no-67"><td class="data-date"><a href="?sp_event=3076"><date>2019-12-27 18:15:56</date>27.12.2019</a></td><td class="data-home">HC Chlumětín</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3076">4 - 3</a></td><td class="data-away">HC Pstruzi Otradov</td><td class="data-time"><a href="?sp_event=3076"><date>&nbsp;18:15:56</date>18:15</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post alternate sp-row-no-68"><td class="data-date"><a href="?sp_event=3074"><date>2019-12-27 16:30:16</date>27.12.2019</a></td><td class="data-home">HC Skulls Hlinsko</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3074">4 - 1</a></td><td class="data-away">HC Rosice &#038; Zaječice</td><td class="data-time"><a href="?sp_event=3074"><date>&nbsp;16:30:16</date>16:30</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post sp-row-no-69"><td class="data-date"><a href="?sp_event=3073"><date>2019-12-23 20:45:32</date>23.12.2019</a></td><td class="data-home">HC Sokol Telecí</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3073">5 - 3</a></td><td class="data-away">HC Štěpánov</td><td class="data-time"><a href="?sp_event=3073"><date>&nbsp;20:45:32</date>20:45</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post alternate sp-row-no-70"><td class="data-date"><a href="?sp_event=3072"><date>2019-12-23 19:00:41</date>23.12.2019</a></td><td class="data-home">HC Rosice &#038; Zaječice</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3072">1 - 3</a></td><td class="data-away">HC Tigers Pardubice</td><td class="data-time"><a href="?sp_event=3072"><date>&nbsp;19:00:41</date>19:00</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post sp-row-no-71"><td class="data-date"><a href="?sp_event=3071"><date>2019-12-22 20:15:21</date>22.12.2019</a></td><td class="data-home">HC Ostrov</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3071">5 - 3</a></td><td class="data-away">HC Pstruzi Otradov</td><td class="data-time"><a href="?sp_event=3071"><date>&nbsp;20:15:21</date>20:15</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post alternate sp-row-no-72"><td class="data-date"><a href="?sp_event=3070"><date>2019-12-22 18:30:36</date>22.12.2019</a></td><td class="data-home">SK Jokerit Skuteč</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3070">4 - 1</a></td><td class="data-away">HC Radioaktivita Hostovice</td><td class="data-time"><a href="?sp_event=3070"><date>&nbsp;18:30:36</date>18:30</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post sp-row-no-73"><td class="data-date"><a href="?sp_event=3069"><date>2019-12-22 10:50:59</date>22.12.2019</a></td><td class="data-home">HC Chlumětín</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3069">6 - 2</a></td><td class="data-away">HC Řepníky</td><td class="data-time"><a href="?sp_event=3069"><date>&nbsp;10:50:59</date>10:50</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post alternate sp-row-no-74"><td class="data-date"><a href="?sp_event=3068"><date>2019-12-21 16:00:58</date>21.12.2019</a></td><td class="data-home">HC Tigers Pardubice</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3068">3 - 2</a></td><td class="data-away">HC Štěpánov</td><td class="data-time"><a href="?sp_event=3068"><date>&nbsp;16:00:58</date>16:00</a></td><td class="data-league">Základní část LNS</td></tr><tr class="sp-row sp-post sp-row-no-75"><td class="data-date"><a href="?sp_event=3067"><date>2019-12-21 14:00:59</date>21.12.2019</a></td><td class="data-home">HC Skulls Hlinsko</td><td class="data-results"><a href="http://www.lnskutec.cz/?sp_event=3067">10 - 4</a></td><td class="data-away">HC Sokol Telecí</td><td class="data-time"><a href="?sp_event=3067"><date>&nbsp;14:00:59</date>14:00</a></td><td class="data-league">Základní část LNS</td></tr>			</tbody>
		</table>
	</div>
	</div>
</div>
			</div><!– .entry-content –>
</article><!– #post-## –>



		</main><!-- #main -->
	</div><!-- #primary -->

<div id="secondary" class="widget-area widget-area-right" role="complementary">
    <aside id="text-2" class="widget widget_text"><h1 class="widget-title">Upozornění</h1>			<div class="textwidget"><p>Na základě současné situace je nutné dodržování veškerých platných nařízení Ministerstva zdravotnictví ČR ohledně onemocnění COVID 19.</p>
<p>Každý z účastníků jednotlivých utkání zodpovídá za to, že se nebude účastnit v případě podezření nebo klinických příznaků nemoci COVID-19.</p>
<p>Vedení LNS</p>
<p>&nbsp;</p>
</div>
		</aside><div class="sp-widget-align-none"><aside id="sportspress-countdown-2" class="widget widget_sportspress widget_countdown widget_sp_countdown"><div class="sp-template sp-template-countdown">
	<div class="sp-countdown-wrapper">
		<h3 class="event-name">
			<img width="128" height="128" src="http://www.lnskutec.cz/wp-content/uploads/2016/01/Logo-Hc-Telecí-velké-128x128.png" class="team-logo logo-odd wp-post-image" alt="" srcset="http://www.lnskutec.cz/wp-content/uploads/2016/01/Logo-Hc-Telecí-velké-128x128.png 128w, http://www.lnskutec.cz/wp-content/uploads/2016/01/Logo-Hc-Telecí-velké-150x150.png 150w, http://www.lnskutec.cz/wp-content/uploads/2016/01/Logo-Hc-Telecí-velké-300x300.png 300w, http://www.lnskutec.cz/wp-content/uploads/2016/01/Logo-Hc-Telecí-velké-32x32.png 32w, http://www.lnskutec.cz/wp-content/uploads/2016/01/Logo-Hc-Telecí-velké.png 331w" sizes="(max-width: 128px) 100vw, 128px" />			<a href="http://www.lnskutec.cz/?post_type=sp_event&p=3798">HC Sokol Telecí — HC Štěpánov</a>		</h3>
				<p class="countdown sp-countdown">
			<time datetime="2022-02-13 10:45:30" data-countdown="2022/02/13 10:45:30">
				<span>00 <small>dny</small></span>
				<span>00 <small>hodiny</small></span>
				<span>06 <small>minuty</small></span>
				<span>33 <small>sekundy</small></span>
			</time>
		</p>
	</div>
</div></aside></div><aside id="search-2" class="widget widget_search"><form role="search" method="get" class="search-form" action="http://www.lnskutec.cz/">
				<label>
					<span class="screen-reader-text">Vyhledávání</span>
					<input type="search" class="search-field" placeholder="Hledat &hellip;" value="" name="s" />
				</label>
				<input type="submit" class="search-submit" value="&#61817;" title="Hledat" />
			</form></aside><div class="sp-widget-align-none"><aside id="sportspress-event-calendar-2" class="widget widget_sportspress widget_calendar widget_sp_event_calendar"><h1 class="widget-title">Kalendář zápasů</h1><div class="sp-template sp-template-event-calendar">

<div class="sp-calendar-wrapper">
<table id="wp-calendar" class="sp-calendar sp-event-calendar">
<caption class="sp-table-caption">Únor 2022</caption>
<thead>
<tr>
		<th scope="col" title="Pondělí">Po</th>
		<th scope="col" title="Úterý">Út</th>
		<th scope="col" title="Středa">St</th>
		<th scope="col" title="Čtvrtek">Čt</th>
		<th scope="col" title="Pátek">Pá</th>
		<th scope="col" title="Sobota">So</th>
		<th scope="col" title="Neděle">Ne</th>
</tr>
</thead>

<tfoot>
<tr>
		<td colspan="3" id="prev" class="pad">&nbsp;</td>
		<td class="pad">&nbsp;</td>
		<td colspan="3" id="next" class="pad">&nbsp;</td>
</tr>
</tfoot>

<tbody>
<tr>
		<td colspan="1" class="pad">&nbsp;</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td>
	</tr>
	<tr>
		<td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td id="today"><a data-tooltip data-options="disable_for_touch:true" class="has-tip" href="http://www.lnskutec.cz/?m=20220213&post_type=sp_event" title="2 events">13</a></td>
	</tr>
	<tr>
		<td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td>
	</tr>
	<tr>
		<td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td><a data-tooltip data-options="disable_for_touch:true" class="has-tip" href="http://www.lnskutec.cz/?post_type=sp_event&p=3818" title="HC Skulls Hlinsko — HC Chlumětín @ 15:30">26</a></td><td><a data-tooltip data-options="disable_for_touch:true" class="has-tip" href="http://www.lnskutec.cz/?post_type=sp_event&p=3819" title="HC Radioaktivita Hostovice — HC Pstruzi Otradov @ 16:30">27</a></td>
	</tr>
	<tr>
		<td>28</td>
		<td class="pad" colspan="6">&nbsp;</td>
	</tr>
	</tbody>
	</table>
	</div><div class="sp-calendar-link sp-view-all-link"><a href="http://www.lnskutec.cz/?sp_calendar=rozpis-vysledky">Zobrazit všechny události</a></div></div>
</aside></div>		<aside id="recent-posts-2" class="widget widget_recent_entries">		<h1 class="widget-title">Nejnovější příspěvky</h1>		<ul>
					<li>
				<a href="http://www.lnskutec.cz/?p=3805">Play-off</a>
						</li>
					<li>
				<a href="http://www.lnskutec.cz/?p=3802">Zpráva DK č.3 ze dne 4.2.2022</a>
						</li>
					<li>
				<a href="http://www.lnskutec.cz/?p=3793">Změna č.2</a>
						</li>
					<li>
				<a href="http://www.lnskutec.cz/?p=3790">Změny</a>
						</li>
					<li>
				<a href="http://www.lnskutec.cz/?p=3778">Zpráva DK č.2 ze dne 11.1.2022</a>
						</li>
				</ul>
		</aside>		<aside id="recent-comments-2" class="widget widget_recent_comments"><h1 class="widget-title">Nejnovější komentáře</h1><ul id="recentcomments"><li class="recentcomments"><span class="comment-author-link"><a href='https://clck.ru/asnA8' rel='external nofollow' class='url'>Best Dating Site 2022</a></span>: <a href="http://www.lnskutec.cz/?page_id=1907#comment-160">Diskuse</a></li><li class="recentcomments"><span class="comment-author-link"><a href='http://inx.lv/DbOC?h=58b12bf00f715909dfc70dcd1798e899-' rel='external nofollow' class='url'>Best Dating App 2022</a></span>: <a href="http://www.lnskutec.cz/?page_id=1907#comment-159">Diskuse</a></li><li class="recentcomments"><span class="comment-author-link"><a href='http://NQyvxtPj' rel='external nofollow' class='url'>MySagVhWbR</a></span>: <a href="http://www.lnskutec.cz/?page_id=1907#comment-158">Diskuse</a></li><li class="recentcomments"><span class="comment-author-link"><a href='http://SAErfCMvt' rel='external nofollow' class='url'>hNLSnsBdyWQ</a></span>: <a href="http://www.lnskutec.cz/?page_id=1907#comment-157">Diskuse</a></li><li class="recentcomments"><span class="comment-author-link"><a href='http://qQbgknPHaxd' rel='external nofollow' class='url'>nvkdajmpTPfE</a></span>: <a href="http://www.lnskutec.cz/?page_id=1907#comment-156">Diskuse</a></li></ul></aside><div class="sp-widget-align-none"><aside id="sportspress-league-table-2" class="widget widget_sportspress widget_league_table widget_sp_league_table"><h1 class="widget-title">Tabulka</h1><div class="sp-template sp-template-league-table">
	<div class="sp-table-wrapper"><table class="sp-league-table sp-data-table sp-sortable-table sp-scrollable-table sp-paginated-table" data-sp-rows="15"><thead><tr><th class="data-rank">Pos</th><th class="data-name">Tým</th><th class="data-z">Z</th><th class="data-b">B</th></tr></thead><tbody><tr class="odd sp-row-no-0"><td class="data-rank">1</td><td class="data-name">HC Pstruzi Otradov</td><td class="data-z">14</td><td class="data-b">32</td></tr><tr class="even sp-row-no-1"><td class="data-rank">2</td><td class="data-name">HC Chlumětín</td><td class="data-z">14</td><td class="data-b">30</td></tr><tr class="odd sp-row-no-2"><td class="data-rank">3</td><td class="data-name">HC Skulls Hlinsko</td><td class="data-z">14</td><td class="data-b">29</td></tr><tr class="even sp-row-no-3"><td class="data-rank">4</td><td class="data-name">HC Radioaktivita Hostovice</td><td class="data-z">14</td><td class="data-b">28</td></tr><tr class="odd sp-row-no-4"><td class="data-rank">5</td><td class="data-name">HC Řepníky</td><td class="data-z">14</td><td class="data-b">24</td></tr><tr class="even sp-row-no-5"><td class="data-rank">6</td><td class="data-name">SK Jokerit Skuteč</td><td class="data-z">14</td><td class="data-b">9</td></tr><tr class="odd sp-row-no-6"><td class="data-rank">7</td><td class="data-name">HC Štěpánov</td><td class="data-z">13</td><td class="data-b">7</td></tr><tr class="even sp-row-no-7"><td class="data-rank">8</td><td class="data-name">HC Sokol Telecí</td><td class="data-z">13</td><td class="data-b">6</td></tr></tbody></table></div><div class="sp-league-table-link sp-view-all-link"><a href="http://www.lnskutec.cz/?sp_table=342-2-2-2-2-2">Zobrazit celou tabulku</a></div></div>
</aside></div></div><!-- #secondary -->

	</div><!-- #content -->

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="footer-area">
			<div id="quaternary" class="footer-widgets" role="complementary">
									<div class="footer-widget-region"></div>
									<div class="footer-widget-region"></div>
									<div class="footer-widget-region"></div>
							</div>
		</div><!-- .footer-area -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<div class="site-info">
	<div class="info-area">
			<div class="site-copyright">
		&copy; 2022 Liga neregistrovaných Skuteč	</div><!-- .site-copyright -->
		<div class="site-credit">
		<a href="http://themeboy.com/">Designed by ThemeBoy</a>	</div><!-- .site-info -->
		</div><!-- .info-area -->
</div><!-- .site-info -->

<script type='text/javascript' src='http://www.lnskutec.cz/wp-content/plugins/sportspress-pro.club_.1.9.14/includes/sportspress/assets/js/jquery.dataTables.min.js?ver=1.10.4'></script>
<script type='text/javascript' src='http://www.lnskutec.cz/wp-content/plugins/sportspress-pro.club_.1.9.14/includes/sportspress/assets/js/jquery.countdown.min.js?ver=2.0.2'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var localized_strings = {"days":"dny","hrs":"hodiny","mins":"minuty","secs":"sekundy","previous":"P\u0159edchoz\u00ed","next":"Pokra\u010dovat"};
/* ]]> */
</script>
<script type='text/javascript' src='http://www.lnskutec.cz/wp-content/plugins/sportspress-pro.club_.1.9.14/includes/sportspress/assets/js/sportspress.js?ver=1.9.14'></script>
<script type='text/javascript' src='http://www.lnskutec.cz/wp-content/plugins/sportspress-pro.club_.1.9.14/includes/sportspress-tournaments/js/sportspress-tournaments.js?ver=1644745137'></script>
<script type='text/javascript' src='http://www.lnskutec.cz/wp-content/themes/rookie/js/navigation.js?ver=20120206'></script>
<script type='text/javascript' src='http://www.lnskutec.cz/wp-content/themes/rookie/js/skip-link-focus-fix.js?ver=20130115'></script>
<script type='text/javascript' src='http://www.lnskutec.cz/wp-content/themes/rookie/js/jquery.timeago.js?ver=1.4.1'></script>
<script type='text/javascript' src='http://www.lnskutec.cz/wp-content/themes/rookie/js/locales/jquery.timeago.cs.js?ver=1.4.1'></script>
<script type='text/javascript' src='http://www.lnskutec.cz/wp-content/themes/rookie/js/scripts.js?ver=0.9'></script>
<script type='text/javascript' src='http://www.lnskutec.cz/wp-includes/js/wp-embed.min.js?ver=4.8.18'></script>

</body>
</html>
`;

export const MATCH_LIST_DATA: AmateurHockeyBotMatchListResponse = {
  ok: true,
  data: [
    {
      id: '3297',
      teamHome: 'HC Řepníky',
      teamAway: 'HC Tigers Pardubice',
      datetime: '2020-03-18T18:45:00.000Z'
    },
    {
      id: '3296',
      teamHome: 'HC Ostrov',
      teamAway: 'HC Pstruzi Otradov',
      datetime: '2020-03-15T18:00:00.000Z'
    },
    {
      id: '3290',
      teamHome: 'SK Jokerit Skuteč',
      teamAway: 'HC Radioaktivita Hostovice',
      datetime: '2020-03-15T15:30:00.000Z'
    },
    {
      id: '3293',
      teamHome: 'HC Tigers Pardubice',
      teamAway: 'HC Řepníky',
      datetime: '2020-03-14T14:30:00.000Z'
    },
    {
      id: '3289',
      teamHome: 'HC Chlumětín',
      teamAway: 'HC Skulls Hlinsko',
      datetime: '2020-03-14T12:00:00.000Z'
    },
    {
      id: '3292',
      teamHome: 'HC Pstruzi Otradov',
      teamAway: 'HC Ostrov',
      datetime: '2020-03-13T18:45:00.000Z'
    },
    {
      id: '3286',
      teamHome: 'HC Radioaktivita Hostovice',
      teamAway: 'SK Jokerit Skuteč',
      datetime: '2020-03-11T18:45:00.000Z'
    },
    {
      id: '3285',
      teamHome: 'HC Skulls Hlinsko',
      teamAway: 'HC Chlumětín',
      datetime: '2020-03-08T18:00:00.000Z'
    },
    {
      id: '3283',
      teamHome: 'HC Ostrov',
      teamAway: 'HC Rosice & Zaječice',
      datetime: '2020-03-08T10:15:00.000Z'
    },
    {
      id: '3282',
      teamHome: 'HC Pstruzi Otradov',
      teamAway: 'HC Štěpánov',
      datetime: '2020-03-06T18:45:00.000Z'
    },
    {
      id: '3274',
      teamHome: 'HC Radioaktivita Hostovice',
      teamAway: 'HC Řepníky',
      datetime: '2020-03-01T18:00:00.000Z'
    },
    {
      id: '3277',
      teamHome: 'HC Sokol Telecí',
      teamAway: 'HC Tigers Pardubice',
      datetime: '2020-03-01T10:15:00.000Z'
    },
    {
      id: '3273',
      teamHome: 'HC Ostrov',
      teamAway: 'HC Skulls Hlinsko',
      datetime: '2020-02-29T07:45:00.000Z'
    },
    {
      id: '3272',
      teamHome: 'HC Pstruzi Otradov',
      teamAway: 'HC Chlumětín',
      datetime: '2020-02-28T18:45:00.000Z'
    },
    {
      id: '3271',
      teamHome: 'HC Tigers Pardubice',
      teamAway: 'SK Jokerit Skuteč',
      datetime: '2020-02-26T18:45:00.000Z'
    },
    {
      id: '3264',
      teamHome: 'HC Chlumětín',
      teamAway: 'HC Pstruzi Otradov',
      datetime: '2020-02-23T17:45:00.000Z'
    },
    {
      id: '3263',
      teamHome: 'HC Skulls Hlinsko',
      teamAway: 'HC Ostrov',
      datetime: '2020-02-23T15:30:00.000Z'
    },
    {
      id: '3262',
      teamHome: 'SK Jokerit Skuteč',
      teamAway: 'HC Tigers Pardubice',
      datetime: '2020-02-23T10:30:00.000Z'
    },
    {
      id: '3261',
      teamHome: 'HC Řepníky',
      teamAway: 'HC Radioaktivita Hostovice',
      datetime: '2020-02-21T18:45:00.000Z'
    },
    {
      id: '3249',
      teamHome: 'HC Řepníky',
      teamAway: 'HC Rosice & Zaječice',
      datetime: '2020-02-19T19:00:00.000Z'
    },
    {
      id: '3248',
      teamHome: 'HC Sokol Telecí',
      teamAway: 'HC Tigers Pardubice',
      datetime: '2020-02-16T18:00:00.000Z'
    },
    {
      id: '3247',
      teamHome: 'HC Řepníky',
      teamAway: 'HC Štěpánov',
      datetime: '2020-02-16T09:45:00.000Z'
    },
    {
      id: '3246',
      teamHome: 'HC Rosice & Zaječice',
      teamAway: 'HC Chlumětín',
      datetime: '2020-02-16T07:55:00.000Z'
    },
    {
      id: '3245',
      teamHome: 'SK Jokerit Skuteč',
      teamAway: 'HC Skulls Hlinsko',
      datetime: '2020-02-15T09:45:00.000Z'
    },
    {
      id: '3244',
      teamHome: 'HC Pstruzi Otradov',
      teamAway: 'HC Radioaktivita Hostovice',
      datetime: '2020-02-15T07:55:00.000Z'
    },
    {
      id: '3243',
      teamHome: 'HC Tigers Pardubice',
      teamAway: 'HC Ostrov',
      datetime: '2020-02-14T19:00:00.000Z'
    },
    {
      id: '3242',
      teamHome: 'HC Pstruzi Otradov',
      teamAway: 'HC Sokol Telecí',
      datetime: '2020-02-12T19:00:00.000Z'
    },
    {
      id: '3228',
      teamHome: 'HC Sokol Telecí',
      teamAway: 'HC Radioaktivita Hostovice',
      datetime: '2020-02-09T17:15:00.000Z'
    },
    {
      id: '3226',
      teamHome: 'HC Rosice & Zaječice',
      teamAway: 'SK Jokerit Skuteč',
      datetime: '2020-02-09T15:30:00.000Z'
    },
    {
      id: '3230',
      teamHome: 'HC Skulls Hlinsko',
      teamAway: 'HC Ostrov',
      datetime: '2020-02-09T09:50:00.000Z'
    },
    {
      id: '3224',
      teamHome: 'HC Tigers Pardubice',
      teamAway: 'HC Řepníky',
      datetime: '2020-02-09T07:55:00.000Z'
    },
    {
      id: '3223',
      teamHome: 'HC Štěpánov',
      teamAway: 'HC Pstruzi Otradov',
      datetime: '2020-02-08T15:00:00.000Z'
    },
    {
      id: '3218',
      teamHome: 'HC Ostrov',
      teamAway: 'HC Rosice & Zaječice',
      datetime: '2020-02-07T19:00:00.000Z'
    },
    {
      id: '3219',
      teamHome: 'HC Chlumětín',
      teamAway: 'HC Štěpánov',
      datetime: '2020-02-05T19:00:00.000Z'
    },
    {
      id: '3217',
      teamHome: 'SK Jokerit Skuteč',
      teamAway: 'HC Štěpánov',
      datetime: '2020-02-02T09:50:00.000Z'
    },
    {
      id: '3216',
      teamHome: 'HC Pstruzi Otradov',
      teamAway: 'HC Řepníky',
      datetime: '2020-02-02T07:55:00.000Z'
    },
    {
      id: '3215',
      teamHome: 'HC Rosice & Zaječice',
      teamAway: 'HC Radioaktivita Hostovice',
      datetime: '2020-02-01T15:00:00.000Z'
    },
    {
      id: '3214',
      teamHome: 'HC Skulls Hlinsko',
      teamAway: 'HC Chlumětín',
      datetime: '2020-02-01T13:15:00.000Z'
    },
    {
      id: '3213',
      teamHome: 'HC Tigers Pardubice',
      teamAway: 'SK Jokerit Skuteč',
      datetime: '2020-02-01T11:30:00.000Z'
    },
    {
      id: '3212',
      teamHome: 'HC Ostrov',
      teamAway: 'HC Řepníky',
      datetime: '2020-01-31T19:00:00.000Z'
    },
    {
      id: '3190',
      teamHome: 'HC Chlumětín',
      teamAway: 'HC Sokol Telecí',
      datetime: '2020-01-29T18:45:00.000Z'
    },
    {
      id: '3206',
      teamHome: 'HC Řepníky',
      teamAway: 'SK Jokerit Skuteč',
      datetime: '2020-01-26T15:30:00.000Z'
    },
    {
      id: '3189',
      teamHome: 'HC Skulls Hlinsko',
      teamAway: 'HC Pstruzi Otradov',
      datetime: '2020-01-26T09:50:00.000Z'
    },
    {
      id: '3186',
      teamHome: 'HC Ostrov',
      teamAway: 'HC Chlumětín',
      datetime: '2020-01-25T15:00:00.000Z'
    },
    {
      id: '3187',
      teamHome: 'HC Tigers Pardubice',
      teamAway: 'HC Radioaktivita Hostovice',
      datetime: '2020-01-25T13:15:00.000Z'
    },
    {
      id: '3188',
      teamHome: 'HC Rosice & Zaječice',
      teamAway: 'HC Štěpánov',
      datetime: '2020-01-25T11:30:00.000Z'
    },
    {
      id: '3185',
      teamHome: 'SK Jokerit Skuteč',
      teamAway: 'HC Sokol Telecí',
      datetime: '2020-01-24T19:00:00.000Z'
    },
    {
      id: '3075',
      teamHome: 'HC Radioaktivita Hostovice',
      teamAway: 'HC Řepníky',
      datetime: '2020-01-22T19:00:00.000Z'
    },
    {
      id: '3179',
      teamHome: 'HC Chlumětín',
      teamAway: 'HC Tigers Pardubice',
      datetime: '2020-01-19T19:00:00.000Z'
    },
    {
      id: '3178',
      teamHome: 'HC Radioaktivita Hostovice',
      teamAway: 'HC Skulls Hlinsko',
      datetime: '2020-01-19T17:15:00.000Z'
    },
    {
      id: '3177',
      teamHome: 'HC Pstruzi Otradov',
      teamAway: 'HC Rosice & Zaječice',
      datetime: '2020-01-19T15:30:00.000Z'
    },
    {
      id: '3175',
      teamHome: 'SK Jokerit Skuteč',
      teamAway: 'HC Ostrov',
      datetime: '2020-01-19T07:50:00.000Z'
    },
    {
      id: '3176',
      teamHome: 'HC Řepníky',
      teamAway: 'HC Sokol Telecí',
      datetime: '2020-01-17T19:00:00.000Z'
    },
    {
      id: '3092',
      teamHome: 'HC Radioaktivita Hostovice',
      teamAway: 'HC Štěpánov',
      datetime: '2020-01-15T19:00:00.000Z'
    },
    {
      id: '3091',
      teamHome: 'HC Chlumětín',
      teamAway: 'SK Jokerit Skuteč',
      datetime: '2020-01-12T19:30:00.000Z'
    },
    {
      id: '3090',
      teamHome: 'HC Pstruzi Otradov',
      teamAway: 'HC Tigers Pardubice',
      datetime: '2020-01-12T17:45:00.000Z'
    },
    {
      id: '3089',
      teamHome: 'HC Radioaktivita Hostovice',
      teamAway: 'HC Ostrov',
      datetime: '2020-01-11T15:00:00.000Z'
    },
    {
      id: '3088',
      teamHome: 'HC Štěpánov',
      teamAway: 'HC Skulls Hlinsko',
      datetime: '2020-01-11T13:15:00.000Z'
    },
    {
      id: '3087',
      teamHome: 'HC Sokol Telecí',
      teamAway: 'HC Rosice & Zaječice',
      datetime: '2020-01-10T19:00:00.000Z'
    },
    {
      id: '3086',
      teamHome: 'HC Řepníky',
      teamAway: 'HC Skulls Hlinsko',
      datetime: '2020-01-08T19:00:00.000Z'
    },
    {
      id: '3084',
      teamHome: 'HC Sokol Telecí',
      teamAway: 'HC Tigers Pardubice',
      datetime: '2020-01-05T09:50:00.000Z'
    },
    {
      id: '3085',
      teamHome: 'HC Řepníky',
      teamAway: 'HC Rosice & Zaječice',
      datetime: '2020-01-05T07:55:00.000Z'
    },
    {
      id: '3083',
      teamHome: 'HC Radioaktivita Hostovice',
      teamAway: 'HC Chlumětín',
      datetime: '2020-01-04T15:00:00.000Z'
    },
    {
      id: '3082',
      teamHome: 'HC Štěpánov',
      teamAway: 'HC Ostrov',
      datetime: '2020-01-04T13:15:00.000Z'
    },
    {
      id: '3081',
      teamHome: 'HC Pstruzi Otradov',
      teamAway: 'SK Jokerit Skuteč',
      datetime: '2020-01-04T11:20:00.000Z'
    },
    {
      id: '3080',
      teamHome: 'HC Tigers Pardubice',
      teamAway: 'HC Skulls Hlinsko',
      datetime: '2020-01-03T19:00:00.000Z'
    },
    {
      id: '3077',
      teamHome: 'HC Ostrov',
      teamAway: 'HC Sokol Telecí',
      datetime: '2019-12-27T19:00:00.000Z'
    },
    {
      id: '3076',
      teamHome: 'HC Chlumětín',
      teamAway: 'HC Pstruzi Otradov',
      datetime: '2019-12-27T17:15:00.000Z'
    },
    {
      id: '3074',
      teamHome: 'HC Skulls Hlinsko',
      teamAway: 'HC Rosice & Zaječice',
      datetime: '2019-12-27T15:30:00.000Z'
    },
    {
      id: '3073',
      teamHome: 'HC Sokol Telecí',
      teamAway: 'HC Štěpánov',
      datetime: '2019-12-23T19:45:00.000Z'
    },
    {
      id: '3072',
      teamHome: 'HC Rosice & Zaječice',
      teamAway: 'HC Tigers Pardubice',
      datetime: '2019-12-23T18:00:00.000Z'
    },
    {
      id: '3071',
      teamHome: 'HC Ostrov',
      teamAway: 'HC Pstruzi Otradov',
      datetime: '2019-12-22T19:15:00.000Z'
    },
    {
      id: '3070',
      teamHome: 'SK Jokerit Skuteč',
      teamAway: 'HC Radioaktivita Hostovice',
      datetime: '2019-12-22T17:30:00.000Z'
    },
    {
      id: '3069',
      teamHome: 'HC Chlumětín',
      teamAway: 'HC Řepníky',
      datetime: '2019-12-22T09:50:00.000Z'
    },
    {
      id: '3068',
      teamHome: 'HC Tigers Pardubice',
      teamAway: 'HC Štěpánov',
      datetime: '2019-12-21T15:00:00.000Z'
    },
    {
      id: '3067',
      teamHome: 'HC Skulls Hlinsko',
      teamAway: 'HC Sokol Telecí',
      datetime: '2019-12-21T13:00:00.000Z'
    }
  ]
}
