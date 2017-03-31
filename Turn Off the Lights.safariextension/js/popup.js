//================================================
/*

Turn Off the Lights
The entire page will be fading to dark, so you can watch the videos as if you were in the cinema.
Copyright (C) 2016 Stefan vd
www.stefanvd.net
www.turnoffthelights.com

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.


To view a copy of this license, visit http://creativecommons.org/licenses/GPL/2.0/

*/
//================================================

function $(id) { return document.getElementById(id); }

document.addEventListener('DOMContentLoaded', function () {
$("opendonate").addEventListener('click', function() {safari.application.activeBrowserWindow.openTab().url = donatewebsite;});
$("openrate").addEventListener('click', function() {safari.application.activeBrowserWindow.openTab().url = writereview;});
$("openoptions").addEventListener('click', function() {safari.application.activeBrowserWindow.openTab().url = safari.extension.baseURI + "options.html";});

$("opensupport").addEventListener('click', function() {safari.application.activeBrowserWindow.openTab().url = linksupport;});
$("openwelcomeguide").addEventListener('click', function() {safari.application.activeBrowserWindow.openTab().url = linkguide;});
$("openyoutube").addEventListener('click', function() {safari.application.activeBrowserWindow.openTab().url = linkyoutube;});

$("opengoogleplus").addEventListener('click', function() {safari.application.activeBrowserWindow.openTab().url = "https://plus.google.com/share?url="+turnoffthelightsproduct;});
$("openfacebook").addEventListener('click', function() {safari.application.activeBrowserWindow.openTab().url = "https://www.facebook.com/sharer/sharer.php?u="+turnoffthelightsproduct;});
$("opentwitter").addEventListener('click', function() {var sturnoffthelightsproductcodeurl = encodeURIComponent(chrome.i18n.getMessage("sharetextc")+" "+turnoffthelightsproduct);safari.application.activeBrowserWindow.openTab().url = "https://twitter.com/home?status="+sturnoffthelightsproductcodeurl;});
});