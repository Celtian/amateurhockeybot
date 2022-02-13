import { LNSkutecMatch } from '../../../lib/clients/lnskutec';
import { AmateurHockeyBotResponse } from '../../../lib/shared/interfaces';

export const MATCH_HTML = `
<!DOCTYPE html>
<html lang="cs-CZ">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="http://www.lnskutec.cz/xmlrpc.php">
<title>HC Rosice &#038; Zaječice — HC Chlumětín &#8211; Liga neregistrovaných Skuteč</title>
<meta name='robots' content='noindex,follow' />
<link rel='dns-prefetch' href='//maps.googleapis.com' />
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
<link rel='prev' title='SK Jokerit Skuteč — HC Skulls Hlinsko' href='http://www.lnskutec.cz/?sp_event=3245' />
<link rel='next' title='HC Řepníky — HC Štěpánov' href='http://www.lnskutec.cz/?sp_event=3247' />
<meta name="generator" content="WordPress 4.8.18" />
<meta name="generator" content="SportsPress 1.9.14" />
<meta name="generator" content="SportsPress Pro 1.9.13" />
<link rel="canonical" href="http://www.lnskutec.cz/?sp_event=3246" />
<link rel='shortlink' href='http://www.lnskutec.cz/?p=3246' />
<link rel="alternate" type="application/json+oembed" href="http://www.lnskutec.cz/index.php?rest_route=%2Foembed%2F1.0%2Fembed&#038;url=http%3A%2F%2Fwww.lnskutec.cz%2F%3Fsp_event%3D3246" />
<link rel="alternate" type="text/xml+oembed" href="http://www.lnskutec.cz/index.php?rest_route=%2Foembed%2F1.0%2Fembed&#038;url=http%3A%2F%2Fwww.lnskutec.cz%2F%3Fsp_event%3D3246&#038;format=xml" />
		<style type="text/css">.recentcomments a{display:inline !important;padding:0 !important;margin:0 !important;}</style>
		</head>

<body class="sp_event-template-default single single-sp_event postid-3246 sportspress sportspress-page sp-has-results">
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
<li id="menu-item-1473" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1473"><a href="http://www.lnskutec.cz/?page_id=268">Archiv</a>
<ul  class="sub-menu">
	<li id="menu-item-3395" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3395"><a href="http://www.lnskutec.cz/?page_id=3393">Archiv 2019-2020</a>
	<ul  class="sub-menu">
		<li id="menu-item-2936" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2936"><a href="http://www.lnskutec.cz/?page_id=2925">Výsledky 2019-2020</a></li>
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







<article id="post-3246" class="post-3246 sp_event type-sp_event status-publish hentry sp_league-liga-neregistrovanych-skutec sp_season-sezona-2019-2020">
	<!-- If it is not a page - use get_post_permalink with sample option set to true -->

	<header class="entry-header">

		<h1 class="entry-title">HC Rosice &#038; Zaječice — HC Chlumětín</h1>	</header><!– .entry-header –>


	<div class="entry-content">
		<div class="sp-template sp-template-event-logos"><div class="sp-event-logos sp-event-logos-2"><span class="sp-team-logo"> <strong class="sp-team-result">3</strong></span> — <span class="sp-team-logo"><strong class="sp-team-result">8</strong> <img width="125" height="109" src="http://www.lnskutec.cz/wp-content/uploads/2015/10/chlumetin.png" class="attachment-sportspress-fit-icon size-sportspress-fit-icon wp-post-image" alt="" srcset="http://www.lnskutec.cz/wp-content/uploads/2015/10/chlumetin.png 125w, http://www.lnskutec.cz/wp-content/uploads/2015/10/chlumetin-32x28.png 32w" sizes="(max-width: 125px) 100vw, 125px" /></span></div></div><div class="sp-event-overview">
	<div class="sp-template sp-template-event-details">
	<h4 class="sp-table-caption">Podrobnosti</h4>
	<div class="sp-table-wrapper">
		<table class="sp-event-details sp-data-table sp-scrollable-table">
			<thead>
				<tr>
											<th>Datum</th>
											<th>Čas</th>
											<th>Soutěž</th>
											<th>Sezóna</th>
									</tr>
			</thead>
			<tbody>
				<tr class="odd">
											<td>16.2.2020</td>
											<td>8:55</td>
											<td>Základní část LNS</td>
											<td>Sezona 2019-2020</td>
									</tr>
			</tbody>
		</table>
	</div>
</div><div class="sp-template sp-template-event-results">
	<h4 class="sp-table-caption">Výsledky</h4><div class="sp-table-wrapper"><table class="sp-event-results sp-data-table sp-scrollable-table"><thead><th class="data-name">Tým</th><th class="data-first">1.třetina</th><th class="data-second">2.třetina</th><th class="data-third">3.třetina</th><th class="data-goals">G</th><th class="data-outcome">Výsledek</th></tr></thead><tbody><tr class="odd"><td class="data-name">HC Rosice &#038; Zaječice</td><td class="data-first">1</td><td class="data-second">2</td><td class="data-third">0</td><td class="data-goals">3</td><td class="data-outcome">Prohra</td></tr><tr class="even"><td class="data-name">HC Chlumětín</td><td class="data-first">1</td><td class="data-second">3</td><td class="data-third">4</td><td class="data-goals">8</td><td class="data-outcome">Výhra</td></tr></tbody></table></div></div></div>	<div class="sp-event-performance-tables sp-event-performance-teams">
	<div class="sp-template sp-template-event-performance sp-template-event-performance-values">
			<h4 class="sp-table-caption">HC Rosice &#038; Zaječice</h4>
		<div class="sp-table-wrapper">
		<table class="sp-event-performance sp-data-table sp-scrollable-table sp-sortable-table">
			<thead>
				<tr>
																		<th class="data-number">#</th>
												<th class="data-name">
															Hráč													</th>
																						<th class="data-g">Gól</th>
																	<th class="data-a">Asistence</th>
																	<th class="data-tm">2</th>
																	<th class="data-dm">2+2</th>
																	<th class="data-fiveok">5+OK</th>
																	<th class="data-osobnitrest">10</th>
																	<th class="data-ok">OK</th>
																	<th class="data-inkasovanygol">Obdržený gól</th>
									</tr>
			</thead>
							<tbody>
					<tr class="lineup odd"><td class="data-number">15</td><td class="data-name">Petr Zahálka</td><td class="data-g">0</td><td class="data-a">0</td><td class="data-tm">4</td><td class="data-dm">0</td><td class="data-fiveok">0</td><td class="data-osobnitrest">0</td><td class="data-ok">0</td><td class="data-inkasovanygol">0</td></tr><tr class="lineup even"><td class="data-number">10</td><td class="data-name">Ladislav Zahálka</td><td class="data-g">2</td><td class="data-a">0</td><td class="data-tm">0</td><td class="data-dm">0</td><td class="data-fiveok">0</td><td class="data-osobnitrest">0</td><td class="data-ok">0</td><td class="data-inkasovanygol">0</td></tr><tr class="lineup odd"><td class="data-number">3</td><td class="data-name">Aleš Pýcha</td><td class="data-g">0</td><td class="data-a">0</td><td class="data-tm">0</td><td class="data-dm">0</td><td class="data-fiveok">0</td><td class="data-osobnitrest">0</td><td class="data-ok">0</td><td class="data-inkasovanygol">0</td></tr><tr class="lineup even"><td class="data-number">20</td><td class="data-name">Michal Bačkovský</td><td class="data-g">0</td><td class="data-a">0</td><td class="data-tm">0</td><td class="data-dm">0</td><td class="data-fiveok">0</td><td class="data-osobnitrest">0</td><td class="data-ok">0</td><td class="data-inkasovanygol">0</td></tr><tr class="lineup odd"><td class="data-number">13</td><td class="data-name">Zbyněk Pejcha</td><td class="data-g">0</td><td class="data-a">0</td><td class="data-tm">0</td><td class="data-dm">0</td><td class="data-fiveok">0</td><td class="data-osobnitrest">0</td><td class="data-ok">0</td><td class="data-inkasovanygol">0</td></tr><tr class="lineup even"><td class="data-number">61</td><td class="data-name">Tomáš Kulhánek</td><td class="data-g">0</td><td class="data-a">0</td><td class="data-tm">0</td><td class="data-dm">0</td><td class="data-fiveok">0</td><td class="data-osobnitrest">0</td><td class="data-ok">0</td><td class="data-inkasovanygol">0</td></tr><tr class="lineup odd"><td class="data-number">2</td><td class="data-name">Tomáš Dvořák</td><td class="data-g">1</td><td class="data-a">1</td><td class="data-tm">0</td><td class="data-dm">0</td><td class="data-fiveok">0</td><td class="data-osobnitrest">0</td><td class="data-ok">0</td><td class="data-inkasovanygol">0</td></tr><tr class="lineup even"><td class="data-number">37</td><td class="data-name">Aleš Malinský ml.</td><td class="data-g">0</td><td class="data-a">1</td><td class="data-tm">0</td><td class="data-dm">0</td><td class="data-fiveok">0</td><td class="data-osobnitrest">0</td><td class="data-ok">0</td><td class="data-inkasovanygol">0</td></tr><tr class="lineup odd"><td class="data-number">21</td><td class="data-name">Martin Opavský</td><td class="data-g">0</td><td class="data-a">0</td><td class="data-tm">0</td><td class="data-dm">0</td><td class="data-fiveok">0</td><td class="data-osobnitrest">0</td><td class="data-ok">0</td><td class="data-inkasovanygol">0</td></tr>				</tbody>
										<tfoot>
											<tr class="sp-total-row even">
							<td class="data-number">&nbsp;</td><td class="data-name">Celkem</td><td class="data-g">3</td><td class="data-a">&nbsp;</td><td class="data-tm">&nbsp;</td><td class="data-dm">&nbsp;</td><td class="data-fiveok">&nbsp;</td><td class="data-osobnitrest">&nbsp;</td><td class="data-ok">&nbsp;</td><td class="data-inkasovanygol">&nbsp;</td>						</tr>
									</tfoot>
					</table>
	</div>
</div>

			<div class="sp-template sp-template-event-performance sp-template-event-performance-values">
			<h4 class="sp-table-caption">HC Chlumětín</h4>
		<div class="sp-table-wrapper">
		<table class="sp-event-performance sp-data-table sp-scrollable-table sp-sortable-table">
			<thead>
				<tr>
																		<th class="data-number">#</th>
												<th class="data-name">
															Hráč													</th>
																						<th class="data-g">Gól</th>
																	<th class="data-a">Asistence</th>
																	<th class="data-tm">2</th>
																	<th class="data-dm">2+2</th>
																	<th class="data-fiveok">5+OK</th>
																	<th class="data-osobnitrest">10</th>
																	<th class="data-ok">OK</th>
																	<th class="data-inkasovanygol">Obdržený gól</th>
									</tr>
			</thead>
							<tbody>
					<tr class="lineup odd"><td class="data-number">65</td><td class="data-name">Tomáš Vincenc</td><td class="data-g">1</td><td class="data-a">0</td><td class="data-tm">2</td><td class="data-dm">0</td><td class="data-fiveok">0</td><td class="data-osobnitrest">0</td><td class="data-ok">0</td><td class="data-inkasovanygol">0</td></tr><tr class="lineup even"><td class="data-number">19</td><td class="data-name">Pavel Kavalír</td><td class="data-g">1</td><td class="data-a">2</td><td class="data-tm">0</td><td class="data-dm">0</td><td class="data-fiveok">0</td><td class="data-osobnitrest">0</td><td class="data-ok">0</td><td class="data-inkasovanygol">0</td></tr><tr class="lineup odd"><td class="data-number">40</td><td class="data-name">Aleš Picek</td><td class="data-g">2</td><td class="data-a">1</td><td class="data-tm">0</td><td class="data-dm">0</td><td class="data-fiveok">0</td><td class="data-osobnitrest">0</td><td class="data-ok">0</td><td class="data-inkasovanygol">0</td></tr><tr class="lineup even"><td class="data-number">G</td><td class="data-name">Miroslav Beránek</td><td class="data-g">0</td><td class="data-a">0</td><td class="data-tm">0</td><td class="data-dm">0</td><td class="data-fiveok">0</td><td class="data-osobnitrest">0</td><td class="data-ok">0</td><td class="data-inkasovanygol">0</td></tr><tr class="lineup odd"><td class="data-number">2</td><td class="data-name">Ondřej Zárybnický</td><td class="data-g">0</td><td class="data-a">0</td><td class="data-tm">2</td><td class="data-dm">0</td><td class="data-fiveok">0</td><td class="data-osobnitrest">0</td><td class="data-ok">0</td><td class="data-inkasovanygol">0</td></tr><tr class="lineup even"><td class="data-number">3</td><td class="data-name">Dalibor Váško</td><td class="data-g">0</td><td class="data-a">0</td><td class="data-tm">0</td><td class="data-dm">0</td><td class="data-fiveok">0</td><td class="data-osobnitrest">0</td><td class="data-ok">0</td><td class="data-inkasovanygol">0</td></tr><tr class="lineup odd"><td class="data-number">10</td><td class="data-name">Ondřej Pavlík</td><td class="data-g">0</td><td class="data-a">0</td><td class="data-tm">0</td><td class="data-dm">0</td><td class="data-fiveok">0</td><td class="data-osobnitrest">0</td><td class="data-ok">0</td><td class="data-inkasovanygol">0</td></tr><tr class="lineup even"><td class="data-number">11</td><td class="data-name">Jan Horák</td><td class="data-g">0</td><td class="data-a">0</td><td class="data-tm">0</td><td class="data-dm">0</td><td class="data-fiveok">0</td><td class="data-osobnitrest">0</td><td class="data-ok">0</td><td class="data-inkasovanygol">0</td></tr><tr class="lineup odd"><td class="data-number">12</td><td class="data-name">Ondřej Beneš</td><td class="data-g">0</td><td class="data-a">0</td><td class="data-tm">0</td><td class="data-dm">0</td><td class="data-fiveok">0</td><td class="data-osobnitrest">0</td><td class="data-ok">0</td><td class="data-inkasovanygol">0</td></tr><tr class="lineup even"><td class="data-number">15</td><td class="data-name">Martin Brokl</td><td class="data-g">0</td><td class="data-a">0</td><td class="data-tm">2</td><td class="data-dm">0</td><td class="data-fiveok">0</td><td class="data-osobnitrest">0</td><td class="data-ok">0</td><td class="data-inkasovanygol">0</td></tr><tr class="lineup odd"><td class="data-number">16</td><td class="data-name">Lukáš Jehlička</td><td class="data-g">0</td><td class="data-a">0</td><td class="data-tm">0</td><td class="data-dm">0</td><td class="data-fiveok">0</td><td class="data-osobnitrest">0</td><td class="data-ok">0</td><td class="data-inkasovanygol">0</td></tr><tr class="lineup even"><td class="data-number">21</td><td class="data-name">Martin Hromádko</td><td class="data-g">0</td><td class="data-a">0</td><td class="data-tm">0</td><td class="data-dm">0</td><td class="data-fiveok">0</td><td class="data-osobnitrest">0</td><td class="data-ok">0</td><td class="data-inkasovanygol">0</td></tr><tr class="lineup odd"><td class="data-number">22</td><td class="data-name">Michal Král</td><td class="data-g">2</td><td class="data-a">3</td><td class="data-tm">0</td><td class="data-dm">0</td><td class="data-fiveok">0</td><td class="data-osobnitrest">0</td><td class="data-ok">0</td><td class="data-inkasovanygol">0</td></tr><tr class="lineup even"><td class="data-number">44</td><td class="data-name">Miroslav  Kyncl</td><td class="data-g">0</td><td class="data-a">0</td><td class="data-tm">0</td><td class="data-dm">0</td><td class="data-fiveok">0</td><td class="data-osobnitrest">0</td><td class="data-ok">0</td><td class="data-inkasovanygol">0</td></tr><tr class="lineup odd"><td class="data-number">57</td><td class="data-name">Marek Havlíček</td><td class="data-g">0</td><td class="data-a">0</td><td class="data-tm">0</td><td class="data-dm">0</td><td class="data-fiveok">0</td><td class="data-osobnitrest">0</td><td class="data-ok">0</td><td class="data-inkasovanygol">0</td></tr><tr class="lineup even"><td class="data-number">81</td><td class="data-name">Robin Kopřiva</td><td class="data-g">1</td><td class="data-a">0</td><td class="data-tm">0</td><td class="data-dm">0</td><td class="data-fiveok">0</td><td class="data-osobnitrest">0</td><td class="data-ok">0</td><td class="data-inkasovanygol">0</td></tr><tr class="lineup odd"><td class="data-number">87</td><td class="data-name">Vojtěch Vondráček</td><td class="data-g">1</td><td class="data-a">1</td><td class="data-tm">0</td><td class="data-dm">0</td><td class="data-fiveok">0</td><td class="data-osobnitrest">0</td><td class="data-ok">0</td><td class="data-inkasovanygol">0</td></tr><tr class="lineup even"><td class="data-number">88G</td><td class="data-name">Jan Vaníček</td><td class="data-g">0</td><td class="data-a">0</td><td class="data-tm">0</td><td class="data-dm">0</td><td class="data-fiveok">0</td><td class="data-osobnitrest">0</td><td class="data-ok">0</td><td class="data-inkasovanygol">0</td></tr><tr class="lineup odd"><td class="data-number">95</td><td class="data-name">Josef Veselý</td><td class="data-g">0</td><td class="data-a">0</td><td class="data-tm">0</td><td class="data-dm">0</td><td class="data-fiveok">0</td><td class="data-osobnitrest">0</td><td class="data-ok">0</td><td class="data-inkasovanygol">0</td></tr>				</tbody>
										<tfoot>
											<tr class="sp-total-row even">
							<td class="data-number">&nbsp;</td><td class="data-name">Celkem</td><td class="data-g">8</td><td class="data-a">&nbsp;</td><td class="data-tm">&nbsp;</td><td class="data-dm">&nbsp;</td><td class="data-fiveok">&nbsp;</td><td class="data-osobnitrest">&nbsp;</td><td class="data-ok">&nbsp;</td><td class="data-inkasovanygol">&nbsp;</td>						</tr>
									</tfoot>
					</table>
	</div>
</div>

			<div class="sp-template sp-template-event-statistics">
			<strong class="sp-statistic-label">Gól</strong>
		<table class="sp-event-statistics sp-data-table">
			<tbody>
				<tr>
					<td class="sp-statistic-value">3</td>
					<td class="sp-statistic-ratio">
						<div class="sp-statistic-bar" title="73%">
							<div class="sp-statistic-bar-fill sp-smoothbar" title="27%" data-sp-percentage="27" style="width: 27%;"></div>
						</div>
					</td>
					<td class="sp-statistic-value">8</td>
				</tr>
			</tbody>
		</table>
					<strong class="sp-statistic-label">Asistence</strong>
		<table class="sp-event-statistics sp-data-table">
			<tbody>
				<tr>
					<td class="sp-statistic-value">2</td>
					<td class="sp-statistic-ratio">
						<div class="sp-statistic-bar" title="78%">
							<div class="sp-statistic-bar-fill sp-smoothbar" title="22%" data-sp-percentage="22" style="width: 22%;"></div>
						</div>
					</td>
					<td class="sp-statistic-value">7</td>
				</tr>
			</tbody>
		</table>
					<strong class="sp-statistic-label">2</strong>
		<table class="sp-event-statistics sp-data-table">
			<tbody>
				<tr>
					<td class="sp-statistic-value">4</td>
					<td class="sp-statistic-ratio">
						<div class="sp-statistic-bar" title="60%">
							<div class="sp-statistic-bar-fill sp-smoothbar" title="40%" data-sp-percentage="40" style="width: 40%;"></div>
						</div>
					</td>
					<td class="sp-statistic-value">6</td>
				</tr>
			</tbody>
		</table>
					<strong class="sp-statistic-label">2+2</strong>
		<table class="sp-event-statistics sp-data-table">
			<tbody>
				<tr>
					<td class="sp-statistic-value">0</td>
					<td class="sp-statistic-ratio">
						<div class="sp-statistic-bar" title="50%">
							<div class="sp-statistic-bar-fill sp-smoothbar" title="50%" data-sp-percentage="50" style="width: 50%;"></div>
						</div>
					</td>
					<td class="sp-statistic-value">0</td>
				</tr>
			</tbody>
		</table>
					<strong class="sp-statistic-label">5+OK</strong>
		<table class="sp-event-statistics sp-data-table">
			<tbody>
				<tr>
					<td class="sp-statistic-value">0</td>
					<td class="sp-statistic-ratio">
						<div class="sp-statistic-bar" title="50%">
							<div class="sp-statistic-bar-fill sp-smoothbar" title="50%" data-sp-percentage="50" style="width: 50%;"></div>
						</div>
					</td>
					<td class="sp-statistic-value">0</td>
				</tr>
			</tbody>
		</table>
					<strong class="sp-statistic-label">10</strong>
		<table class="sp-event-statistics sp-data-table">
			<tbody>
				<tr>
					<td class="sp-statistic-value">0</td>
					<td class="sp-statistic-ratio">
						<div class="sp-statistic-bar" title="50%">
							<div class="sp-statistic-bar-fill sp-smoothbar" title="50%" data-sp-percentage="50" style="width: 50%;"></div>
						</div>
					</td>
					<td class="sp-statistic-value">0</td>
				</tr>
			</tbody>
		</table>
					<strong class="sp-statistic-label">OK</strong>
		<table class="sp-event-statistics sp-data-table">
			<tbody>
				<tr>
					<td class="sp-statistic-value">0</td>
					<td class="sp-statistic-ratio">
						<div class="sp-statistic-bar" title="50%">
							<div class="sp-statistic-bar-fill sp-smoothbar" title="50%" data-sp-percentage="50" style="width: 50%;"></div>
						</div>
					</td>
					<td class="sp-statistic-value">0</td>
				</tr>
			</tbody>
		</table>
					<strong class="sp-statistic-label">Obdržený gól</strong>
		<table class="sp-event-statistics sp-data-table">
			<tbody>
				<tr>
					<td class="sp-statistic-value">0</td>
					<td class="sp-statistic-ratio">
						<div class="sp-statistic-bar" title="50%">
							<div class="sp-statistic-bar-fill sp-smoothbar" title="50%" data-sp-percentage="50" style="width: 50%;"></div>
						</div>
					</td>
					<td class="sp-statistic-value">0</td>
				</tr>
			</tbody>
		</table>
			</div>
	</div><!-- .sp-event-performance-tables -->
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
				<span>07 <small>sekundy</small></span>
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
<script type='text/javascript' src='https://maps.googleapis.com/maps/api/js?v=3.exp&#038;sensor=false&#038;ver=3.exp'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var vars = {"map_type":"ROADMAP","zoom":"20"};
/* ]]> */
</script>
<script type='text/javascript' src='http://www.lnskutec.cz/wp-content/plugins/sportspress-pro.club_.1.9.14/includes/sportspress/assets/js/sp-maps.js?ver=1644745162'></script>
<script type='text/javascript' src='http://www.lnskutec.cz/wp-content/plugins/sportspress-pro.club_.1.9.14/includes/sportspress-tournaments/js/sportspress-tournaments.js?ver=1644745162'></script>
<script type='text/javascript' src='http://www.lnskutec.cz/wp-content/themes/rookie/js/navigation.js?ver=20120206'></script>
<script type='text/javascript' src='http://www.lnskutec.cz/wp-content/themes/rookie/js/skip-link-focus-fix.js?ver=20130115'></script>
<script type='text/javascript' src='http://www.lnskutec.cz/wp-content/themes/rookie/js/jquery.timeago.js?ver=1.4.1'></script>
<script type='text/javascript' src='http://www.lnskutec.cz/wp-content/themes/rookie/js/locales/jquery.timeago.cs.js?ver=1.4.1'></script>
<script type='text/javascript' src='http://www.lnskutec.cz/wp-content/themes/rookie/js/scripts.js?ver=0.9'></script>
<script type='text/javascript' src='http://www.lnskutec.cz/wp-includes/js/wp-embed.min.js?ver=4.8.18'></script>

</body>
</html>
`;

export const MATCH_DATA: AmateurHockeyBotResponse<LNSkutecMatch> = {
  ok: true,
  data: {
    info: {
      teamHome: 'HC Rosice & Zaječice',
      teamAway: 'HC Chlumětín',
      datetime: '2020-02-16T07:55:00.000Z',
      competition: 'Základní část LNS',
      season: 'Sezona 2019-2020'
    },
    results: {
      scoreTotalHome: 3,
      scoreTotalAway: 8,
      scorePeriodFirstAway: 1,
      scorePeriodFirstHome: 1,
      scorePeriodSecondAway: 3,
      scorePeriodSecondHome: 3,
      scorePeriodThirdHome: 4,
      scorePeriodThirdAway: 4,
      scoreResultHome: 'Prohra',
      scoreResultAway: 'Výhra'
    },
    homePlayers: [
      {
        name: 'Petr Zahálka',
        jerseyNumber: 15,
        goals: 0,
        assists: 0,
        penalty2: 4,
        penalty4: 0,
        penalty5ok: 0,
        penalty10: 0,
        penaltyok: 0
      },
      {
        name: 'Ladislav Zahálka',
        jerseyNumber: 10,
        goals: 2,
        assists: 0,
        penalty2: 0,
        penalty4: 0,
        penalty5ok: 0,
        penalty10: 0,
        penaltyok: 0
      },
      {
        name: 'Aleš Pýcha',
        jerseyNumber: 3,
        goals: 0,
        assists: 0,
        penalty2: 0,
        penalty4: 0,
        penalty5ok: 0,
        penalty10: 0,
        penaltyok: 0
      },
      {
        name: 'Michal Bačkovský',
        jerseyNumber: 20,
        goals: 0,
        assists: 0,
        penalty2: 0,
        penalty4: 0,
        penalty5ok: 0,
        penalty10: 0,
        penaltyok: 0
      },
      {
        name: 'Zbyněk Pejcha',
        jerseyNumber: 13,
        goals: 0,
        assists: 0,
        penalty2: 0,
        penalty4: 0,
        penalty5ok: 0,
        penalty10: 0,
        penaltyok: 0
      },
      {
        name: 'Tomáš Kulhánek',
        jerseyNumber: 61,
        goals: 0,
        assists: 0,
        penalty2: 0,
        penalty4: 0,
        penalty5ok: 0,
        penalty10: 0,
        penaltyok: 0
      },
      {
        name: 'Tomáš Dvořák',
        jerseyNumber: 2,
        goals: 1,
        assists: 1,
        penalty2: 0,
        penalty4: 0,
        penalty5ok: 0,
        penalty10: 0,
        penaltyok: 0
      },
      {
        name: 'Aleš Malinský ml.',
        jerseyNumber: 37,
        goals: 0,
        assists: 1,
        penalty2: 0,
        penalty4: 0,
        penalty5ok: 0,
        penalty10: 0,
        penaltyok: 0
      },
      {
        name: 'Martin Opavský',
        jerseyNumber: 21,
        goals: 0,
        assists: 0,
        penalty2: 0,
        penalty4: 0,
        penalty5ok: 0,
        penalty10: 0,
        penaltyok: 0
      }
    ],
    awayPlayers: [
      {
        name: 'Tomáš Vincenc',
        jerseyNumber: 65,
        goals: 1,
        assists: 0,
        penalty2: 2,
        penalty4: 0,
        penalty5ok: 0,
        penalty10: 0,
        penaltyok: 0
      },
      {
        name: 'Pavel Kavalír',
        jerseyNumber: 19,
        goals: 1,
        assists: 2,
        penalty2: 0,
        penalty4: 0,
        penalty5ok: 0,
        penalty10: 0,
        penaltyok: 0
      },
      {
        name: 'Aleš Picek',
        jerseyNumber: 40,
        goals: 2,
        assists: 1,
        penalty2: 0,
        penalty4: 0,
        penalty5ok: 0,
        penalty10: 0,
        penaltyok: 0
      },
      {
        name: 'Miroslav Beránek',
        goals: 0,
        assists: 0,
        penalty2: 0,
        penalty4: 0,
        penalty5ok: 0,
        penalty10: 0,
        penaltyok: 0
      },
      {
        name: 'Ondřej Zárybnický',
        jerseyNumber: 2,
        goals: 0,
        assists: 0,
        penalty2: 2,
        penalty4: 0,
        penalty5ok: 0,
        penalty10: 0,
        penaltyok: 0
      },
      {
        name: 'Dalibor Váško',
        jerseyNumber: 3,
        goals: 0,
        assists: 0,
        penalty2: 0,
        penalty4: 0,
        penalty5ok: 0,
        penalty10: 0,
        penaltyok: 0
      },
      {
        name: 'Ondřej Pavlík',
        jerseyNumber: 10,
        goals: 0,
        assists: 0,
        penalty2: 0,
        penalty4: 0,
        penalty5ok: 0,
        penalty10: 0,
        penaltyok: 0
      },
      {
        name: 'Jan Horák',
        jerseyNumber: 11,
        goals: 0,
        assists: 0,
        penalty2: 0,
        penalty4: 0,
        penalty5ok: 0,
        penalty10: 0,
        penaltyok: 0
      },
      {
        name: 'Ondřej Beneš',
        jerseyNumber: 12,
        goals: 0,
        assists: 0,
        penalty2: 0,
        penalty4: 0,
        penalty5ok: 0,
        penalty10: 0,
        penaltyok: 0
      },
      {
        name: 'Martin Brokl',
        jerseyNumber: 15,
        goals: 0,
        assists: 0,
        penalty2: 2,
        penalty4: 0,
        penalty5ok: 0,
        penalty10: 0,
        penaltyok: 0
      },
      {
        name: 'Lukáš Jehlička',
        jerseyNumber: 16,
        goals: 0,
        assists: 0,
        penalty2: 0,
        penalty4: 0,
        penalty5ok: 0,
        penalty10: 0,
        penaltyok: 0
      },
      {
        name: 'Martin Hromádko',
        jerseyNumber: 21,
        goals: 0,
        assists: 0,
        penalty2: 0,
        penalty4: 0,
        penalty5ok: 0,
        penalty10: 0,
        penaltyok: 0
      },
      {
        name: 'Michal Král',
        jerseyNumber: 22,
        goals: 2,
        assists: 3,
        penalty2: 0,
        penalty4: 0,
        penalty5ok: 0,
        penalty10: 0,
        penaltyok: 0
      },
      {
        name: 'Miroslav  Kyncl',
        jerseyNumber: 44,
        goals: 0,
        assists: 0,
        penalty2: 0,
        penalty4: 0,
        penalty5ok: 0,
        penalty10: 0,
        penaltyok: 0
      },
      {
        name: 'Marek Havlíček',
        jerseyNumber: 57,
        goals: 0,
        assists: 0,
        penalty2: 0,
        penalty4: 0,
        penalty5ok: 0,
        penalty10: 0,
        penaltyok: 0
      },
      {
        name: 'Robin Kopřiva',
        jerseyNumber: 81,
        goals: 1,
        assists: 0,
        penalty2: 0,
        penalty4: 0,
        penalty5ok: 0,
        penalty10: 0,
        penaltyok: 0
      },
      {
        name: 'Vojtěch Vondráček',
        jerseyNumber: 87,
        goals: 1,
        assists: 1,
        penalty2: 0,
        penalty4: 0,
        penalty5ok: 0,
        penalty10: 0,
        penaltyok: 0
      },
      {
        name: 'Jan Vaníček',
        jerseyNumber: 88,
        goals: 0,
        assists: 0,
        penalty2: 0,
        penalty4: 0,
        penalty5ok: 0,
        penalty10: 0,
        penaltyok: 0
      },
      {
        name: 'Josef Veselý',
        jerseyNumber: 95,
        goals: 0,
        assists: 0,
        penalty2: 0,
        penalty4: 0,
        penalty5ok: 0,
        penalty10: 0,
        penaltyok: 0
      }
    ]
  }
};
