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

// show welcome page
function welcomepage(){
	if ((safari.extension.settings["firstRun"]!="false") && (safari.extension.settings["firstRun"]!=false)) {
	safari.application.activeBrowserWindow.openTab().url = linkguide;
	safari.application.activeBrowserWindow.openTab().url = linkwelcomepage;
	safari.extension.settings["firstRun"] = false;
	safari.extension.settings["version"]  = "2.4.1";
	}
}
welcomepage();

// context menu
// Register for the contextmenu event in the application layer.
safari.application.addEventListener("contextmenu", handleContextMenu, false);

function handleContextMenu(event) {
if (safari.extension.settings.getItem("contextmenus") == true){
    if (event.userInfo && event.userInfo.tagName === "VIDEO") // if video then
	event.contextMenu.appendContextMenuItem("focusvideo", "Focus this video");
	
	if (event.userInfo && event.userInfo.tagName !== "VIDEO") // if NOT video then
	event.contextMenu.appendContextMenuItem("darkerpage", "Darker this page");
}
}

var popover = null;
function performCommand(event) {
    if (event.command === "Lights") {
		if ((safari.extension.settings.getItem("alllightsoff")!="true") && (safari.extension.settings.getItem("alllightsoff")!=true)){
			for(var i = 0; i < safari.extension.toolbarItems.length; i++){
        		if(safari.extension.toolbarItems[i].identifier == "Lights"){browseraction = safari.extension.toolbarItems[i];}
    		}
			var currentUrl = safari.application.activeBrowserWindow.activeTab.url;
			if(currentUrl.substring(0, 19) == "safari-extension://"){
				if(browseraction.popover){
				event.target.showPopover();
				}else{
				popover = safari.extension.createPopover("sharepopover", safari.extension.baseURI + "popup.html",295,305);
 				event.target.popover = popover;
				event.target.showPopover();
				}
			}
			else{
				// regular web page
				safari.application.activeBrowserWindow.activeTab.page.dispatchMessage("lightsoff", "there");
				if(browseraction.popover) {
 				popover.hide();
 				event.target.popover = null;
 				popover = null;
 				safari.extension.removePopover("sharepopover");
				initbutton();
 				}
			}
		} else {
			// all tabs
			for (var i = 0; i < safari.application.browserWindows.length; i++)
			{
				var browserWindow = safari.application.browserWindows[i];
				for (var j = 0; j < browserWindow.tabs.length; j++)
				{
					var tab = browserWindow.tabs[j];
					tab.page.dispatchMessage("lightsoff", "there");
				}
			}
		}
	}
	else if(event.command === "darkerpage") {safari.application.activeBrowserWindow.activeTab.page.dispatchMessage("lightsoff", "there");}
    else if(event.command === "focusvideo") {safari.application.activeBrowserWindow.activeTab.page.dispatchMessage("lightsoff", "there");}
	else if(event.command === "totl") {safari.application.activeBrowserWindow.openTab().url = "https://www.turnoffthelights.com";}
	else if(event.command === "welcomeguide") {safari.application.activeBrowserWindow.openTab().url = linkguide;}
	else if(event.command === "supportdev") {safari.application.activeBrowserWindow.openTab().url = donatewebsite;}
	else if(event.command === "ratethis") {safari.application.activeBrowserWindow.openTab().url = writereview;}
	else if(event.command === "shareemail") {safari.application.activeBrowserWindow.openTab().url = "mailto:youremail?subject="+"Get this Cool Turn Off the Lights Browser Extension"+"&body="+"Hey, This is amazing. I just tried today this Turn Off the Lights Browser extension "+" "+turnoffthelightsproduct;}
	else if(event.command === "sharegoogle") {safari.application.activeBrowserWindow.openTab().url = "https://plus.google.com/share?url="+turnoffthelightsproduct;}
	else if(event.command === "sharefacebook") {safari.application.activeBrowserWindow.openTab().url = "https://www.facebook.com/sharer/sharer.php?u="+turnoffthelightsproduct;}
	else if(event.command === "sharetwitter") {var sturnoffthelightsproductcodeurl = encodeURIComponent("The Best and Amazing Turn Off the Lights Browser extension"+" "+turnoffthelightsproduct);safari.application.activeBrowserWindow.openTab().url = "https://twitter.com/home?status="+sturnoffthelightsproductcodeurl;}
	else if(event.command === "optionspage") {safari.application.activeBrowserWindow.openTab().url = safari.extension.baseURI + "options.html";}
}

function validateCommand(event) {
    if (event.command === "Lights") {
        // Disable the button if there is no URL loaded in the tab.
        event.target.disabled = !event.target.browserWindow.activeTab.url;
    }
}

function settingsChanged(event) {
if (event.key == "optionpage" && event.newValue === true) {
	safari.extension.settings.optionpage = false;
	safari.application.activeBrowserWindow.openTab().url = safari.extension.baseURI + ("options.html");
	}
}

function waitForMessage(e) {
    if (e.target !== safari.application.activeBrowserWindow.activeTab)
	return;
	if(e.name === "getSettings" && e.message === "now") {
        e.target.page.dispatchMessage("setSettings", {manifestversion:safari.extension.displayVersion, lightcolor:safari.extension.settings.getItem("lightcolor"), interval:safari.extension.settings.getItem("interval"), fadein:safari.extension.settings.getItem("fadein"), fadeout:safari.extension.settings.getItem("fadeout"), autoplay:safari.extension.settings.getItem("autoplay"), eastereggs:safari.extension.settings.getItem("eastereggs"), suggestions:safari.extension.settings.getItem("suggestions"), playlist:safari.extension.settings.getItem("playlist"), sharebutton:safari.extension.settings.getItem("sharebutton"), videoheadline:safari.extension.settings.getItem("videoheadline"), flash:safari.extension.settings.getItem("flash"), head:safari.extension.settings.getItem("head"), infobar:safari.extension.settings.getItem("infobar"), likebutton:safari.extension.settings.getItem("likebutton"), shortcutlight:safari.extension.settings.getItem("shortcutlight"), readera:safari.extension.settings.getItem("readera"), readern:safari.extension.settings.getItem("readern"), eyea:safari.extension.settings.getItem("eyea"), eyen:safari.extension.settings.getItem("eyen"), readerlargestyle:safari.extension.settings.getItem("readerlargestyle"), viewcount:safari.extension.settings.getItem("viewcount"), lightimage:safari.extension.settings.getItem("lightimage"), lightimagea:safari.extension.settings.getItem("lightimagea"), lightimagen:safari.extension.settings.getItem("lightimagen"), eyealist:safari.extension.settings.getItem("eyealist"), excludedDomains:safari.extension.settings.excludedDomains, mousespotlighto:safari.extension.settings.getItem("mousespotlighto"), mousespotlighta:safari.extension.settings.getItem("mousespotlighta"), mousespotlightc:safari.extension.settings.getItem("mousespotlightc"), nighttime:safari.extension.settings.getItem("nighttime"), begintime:safari.extension.settings.getItem("begintime"), endtime:safari.extension.settings.getItem("endtime"), addvideobutton:safari.extension.settings.getItem("addvideobutton"), likebar:safari.extension.settings.getItem("likebar"), ambilight:safari.extension.settings.getItem("ambilight"), ambilightrangeblurradius:safari.extension.settings.getItem("ambilightrangeblurradius"), ambilightrangespreadradius:safari.extension.settings.getItem("ambilightrangespreadradius"), mousespotlightt:safari.extension.settings.getItem("mousespotlightt"), ambilightfixcolor:safari.extension.settings.getItem("ambilightfixcolor"), ambilightvarcolor:safari.extension.settings.getItem("ambilightvarcolor"), ambilightcolorhex:safari.extension.settings.getItem("ambilightcolorhex"), ambilight4color:safari.extension.settings.getItem("ambilight4color"), ambilight1colorhex:safari.extension.settings.getItem("ambilight1colorhex"), ambilight2colorhex:safari.extension.settings.getItem("ambilight2colorhex"), ambilight3colorhex:safari.extension.settings.getItem("ambilight3colorhex"), ambilight4colorhex:safari.extension.settings.getItem("ambilight4colorhex"), password:safari.extension.settings.getItem("password"), enterpassword:safari.extension.settings.getItem("enterpassword"), noflash:safari.extension.settings.getItem("noflash"), hardflash:safari.extension.settings.getItem("hardflash"), ecosaver:safari.extension.settings.getItem("ecosaver"), ecosavertime:safari.extension.settings.getItem("ecosavertime"), dynamic:safari.extension.settings.getItem("dynamic"), dynamic1:safari.extension.settings.getItem("dynamic1"), dynamic2:safari.extension.settings.getItem("dynamic2"), dynamic3:safari.extension.settings.getItem("dynamic3"), dynamic4:safari.extension.settings.getItem("dynamic4"), dynamic5:safari.extension.settings.getItem("dynamic5"), dynamic6:safari.extension.settings.getItem("dynamic6"), dynamic7:safari.extension.settings.getItem("dynamic7"), dynamic8:safari.extension.settings.getItem("dynamic8"), dynamic9:safari.extension.settings.getItem("dynamic9"), dynamic10:safari.extension.settings.getItem("dynamic10"), hoveroptiondyn5:safari.extension.settings.getItem("hoveroptiondyn5"), autoplayonly:safari.extension.settings.getItem("autoplayonly"), autoplayDomains:safari.extension.settings.autoplayDomains, blur:safari.extension.settings.getItem("blur"), youtubequality:safari.extension.settings.getItem("youtubequality"), maxquality:safari.extension.settings.getItem("maxquality"), autowidthyoutube:safari.extension.settings.getItem("autowidthyoutube"), customqualityyoutube:safari.extension.settings.getItem("customqualityyoutube"), cinemaontop:safari.extension.settings.getItem("cinemaontop"), alllightsoff:safari.extension.settings.getItem("alllightsoff"), spotlightradius:safari.extension.settings.getItem("spotlightradius"), atmosphereonly:safari.extension.settings.getItem("atmosphereonly"), atmosphereDomains:safari.extension.settings.atmosphereDomains, optionskipremember:safari.extension.settings.getItem("optionskipremember"), countremember:safari.extension.settings.getItem("countremember"), nighttheme:safari.extension.settings.getItem("nighttheme"), nightonly:safari.extension.settings.getItem("nightonly"), nightenabletheme:safari.extension.settings.getItem("nightenabletheme"), nightDomains:safari.extension.settings.nightDomains, autoplaydelay:safari.extension.settings.getItem("autoplaydelay"), autoplaydelaytime:safari.extension.settings.getItem("autoplaydelaytime"), motion:safari.extension.settings.getItem("motion"), lightimagelin:safari.extension.settings.getItem("lightimagelin"), linearsq:safari.extension.settings.getItem("linearsq"), colora:safari.extension.settings.getItem("colora"), intervallina:safari.extension.settings.getItem("intervallina"), colorb:safari.extension.settings.getItem("colorb"), intervallinb:safari.extension.settings.getItem("intervallinb"), speech:safari.extension.settings.getItem("speech"), speechlang:safari.extension.settings.getItem("speechlang"), speechcountry:safari.extension.settings.getItem("speechcountry"), atmosvivid:safari.extension.settings.getItem("atmosvivid"), cammotiononly:safari.extension.settings.getItem("cammotiononly"), speechonly:safari.extension.settings.getItem("speechonly"), autoplaychecklistwhite:safari.extension.settings.getItem("autoplaychecklistwhite"), autoplaychecklistblack:safari.extension.settings.getItem("autoplaychecklistblack"), cammotionDomains:safari.extension.settings.cammotionDomains, speechDomains:safari.extension.settings.speechDomains, reviewedlastonversion:safari.extension.settings.getItem("reviewedlastonversion"), applastonversion:safari.extension.settings.getItem("applastonversion"), mobilelastonversion:safari.extension.settings.getItem("mobilelastonversion"), autostop:safari.extension.settings.getItem("autostop"), autostoponly:safari.extension.settings.getItem("autostoponly"), autostopchecklistwhite:safari.extension.settings.getItem("autostopchecklistwhite"), autostopchecklistblack:safari.extension.settings.getItem("autostopchecklistblack"), nighthover:safari.extension.settings.getItem("nighthover"), nightmodechecklistwhite:safari.extension.settings.getItem("nightmodechecklistwhite"), nightmodechecklistblack:safari.extension.settings.getItem("nightmodechecklistblack"), nmtopleft:safari.extension.settings.getItem("nmtopleft"), nmtopright:safari.extension.settings.getItem("nmtopright"), nmbottomright:safari.extension.settings.getItem("nmbottomright"), nmbottomleft:safari.extension.settings.getItem("nmbottomleft"), nmcustom:safari.extension.settings.getItem("nmcustom"), nmcustomx: safari.extension.settings.getItem("nmcustomx"), nmcustomy: safari.extension.settings.getItem("nmcustomy"), nightactivetime:safari.extension.settings.getItem("nightactivetime"), nmbegintime:safari.extension.settings.getItem("nmbegintime"), nmendtime:safari.extension.settings.getItem("nmendtime"), lampandnightmode:safari.extension.settings.getItem("lampandnightmode"), eyechecklistwhite:safari.extension.settings.getItem("eyechecklistwhite"), eyechecklistblack:safari.extension.settings.getItem("eyechecklistblack"), autostopDomains:safari.extension.settings.autostopDomains, nightmodebck:safari.extension.settings.getItem("nightmodebck"), nightmodetxt:safari.extension.settings.getItem("nightmodetxt"), no360youtube:safari.extension.settings.getItem("no360youtube"), videotool:safari.extension.settings.getItem("videotool"), reflection:safari.extension.settings.getItem("reflection"), reflectionamount:safari.extension.settings.getItem("reflectionamount"), videotoolonly:safari.extension.settings.getItem("videotoolonly"), videotoolchecklistwhite:safari.extension.settings.getItem("videotoolchecklistwhite"), videotoolchecklistblack:safari.extension.settings.getItem("videotoolchecklistblack"), videotoolDomains:safari.extension.settings.videotoolDomains, nightmodehyperlink:safari.extension.settings.getItem("nightmodehyperlink"), block60fps:safari.extension.settings.getItem("block60fps"), videovolume:safari.extension.settings.getItem("videovolume"), videovolumecolor:safari.extension.settings.getItem("videovolumecolor"), videovolumesteps:safari.extension.settings.getItem("videovolumesteps"), videovolumelabel:safari.extension.settings.getItem("videovolumelabel"), icon:safari.extension.settings.getItem("icon"), visopacity:safari.extension.settings.getItem("visopacity")
		});
	}
	else if (e.name === "update_setting") {
		// save it
		safari.extension.settings.manifestversion = safari.extension.displayVersion;
		safari.extension.settings.lightcolor = e.message.lightcolor;
		safari.extension.settings.interval = e.message.interval;
		safari.extension.settings.fadein = e.message.fadein;
		safari.extension.settings.fadeout = e.message.fadeout;
		safari.extension.settings.autoplay = e.message.autoplay;
		safari.extension.settings.eastereggs = e.message.eastereggs;
		safari.extension.settings.suggestions = e.message.suggestions;
		safari.extension.settings.playlist = e.message.playlist;
		safari.extension.settings.sharebutton = e.message.sharebutton;
		safari.extension.settings.videoheadline = e.message.videoheadline;
		safari.extension.settings.flash = e.message.flash;
		safari.extension.settings.head = e.message.head;
		safari.extension.settings.infobar = e.message.infobar;
		safari.extension.settings.likebutton = e.message.likebutton;
		safari.extension.settings.shortcutlight = e.message.shortcutlight;
		safari.extension.settings.readera = e.message.readera;
		safari.extension.settings.readern = e.message.readern;
		safari.extension.settings.eyea = e.message.eyea;
		safari.extension.settings.eyen = e.message.eyen;
		safari.extension.settings.readerlargestyle = e.message.readerlargestyle;		
		safari.extension.settings.viewcount = e.message.viewcount;		
		safari.extension.settings.lightimage = e.message.lightimage;
		safari.extension.settings.lightimagea = e.message.lightimagea;
		safari.extension.settings.lightimagen = e.message.lightimagen;		
		safari.extension.settings.eyealist = e.message.eyealist;
		safari.extension.settings.excludedDomains = e.message.excludedDomains;
		safari.extension.settings.mousespotlighto = e.message.mousespotlighto;
		safari.extension.settings.mousespotlighta = e.message.mousespotlighta;
		safari.extension.settings.mousespotlightc = e.message.mousespotlightc;
		safari.extension.settings.nighttime = e.message.nighttime;
		safari.extension.settings.begintime = e.message.begintime;
		safari.extension.settings.endtime = e.message.endtime;
		safari.extension.settings.addvideobutton = e.message.addvideobutton;
		safari.extension.settings.likebar = e.message.likebar;
		safari.extension.settings.ambilight = e.message.ambilight;
		safari.extension.settings.ambilightrangeblurradius = e.message.ambilightrangeblurradius;
		safari.extension.settings.ambilightrangespreadradius = e.message.ambilightrangespreadradius; 
		safari.extension.settings.mousespotlightt = e.message.mousespotlightt;
		safari.extension.settings.ambilightfixcolor = e.message.ambilightfixcolor;
		safari.extension.settings.ambilightvarcolor = e.message.ambilightvarcolor;
		safari.extension.settings.ambilightcolorhex = e.message.ambilightcolorhex;
		safari.extension.settings.ambilight4color = e.message.ambilight4color;
		safari.extension.settings.ambilight1colorhex = e.message.ambilight1colorhex;
		safari.extension.settings.ambilight2colorhex = e.message.ambilight2colorhex;
		safari.extension.settings.ambilight3colorhex = e.message.ambilight3colorhex;
		safari.extension.settings.ambilight4colorhex = e.message.ambilight4colorhex;
		safari.extension.settings.password = e.message.password;
		safari.extension.settings.enterpassword = e.message.enterpassword;
		safari.extension.settings.noflash = e.message.noflash;
		safari.extension.settings.hardflash = e.message.hardflash;
		safari.extension.settings.ecosaver = e.message.ecosaver;
		safari.extension.settings.ecosavertime = e.message.ecosavertime;
		safari.extension.settings.dynamic = e.message.dynamic;
		safari.extension.settings.dynamic1 = e.message.dynamic1;
		safari.extension.settings.dynamic2 = e.message.dynamic2;
		safari.extension.settings.dynamic3 = e.message.dynamic3;
		safari.extension.settings.dynamic4 = e.message.dynamic4;
		safari.extension.settings.dynamic5 = e.message.dynamic5;
        safari.extension.settings.dynamic6 = e.message.dynamic6;
		safari.extension.settings.dynamic7 = e.message.dynamic7;
		safari.extension.settings.dynamic8 = e.message.dynamic8;
		safari.extension.settings.dynamic9 = e.message.dynamic9;
		safari.extension.settings.dynamic10 = e.message.dynamic10;
		safari.extension.settings.hoveroptiondyn5 = e.message.hoveroptiondyn5;
		safari.extension.settings.autoplayonly = e.message.autoplayonly;
		safari.extension.settings.autoplayDomains = e.message.autoplayDomains;
		safari.extension.settings.blur = e.message.blur;
		safari.extension.settings.youtubequality = e.message.youtubequality;
		safari.extension.settings.maxquality = e.message.maxquality;
		safari.extension.settings.autowidthyoutube = e.message.autowidthyoutube;
		safari.extension.settings.customqualityyoutube = e.message.customqualityyoutube;
		safari.extension.settings.cinemaontop = e.message.cinemaontop;
		safari.extension.settings.alllightsoff = e.message.alllightsoff;
		safari.extension.settings.spotlightradius = e.message.spotlightradius;
		safari.extension.settings.atmosphereonly = e.message.atmosphereonly;
		safari.extension.settings.atmosphereDomains = e.message.atmosphereDomains;
		safari.extension.settings.optionskipremember = e.message.optionskipremember;
		safari.extension.settings.countremember = e.message.countremember;
		safari.extension.settings.nighttheme = e.message.nighttheme;
		safari.extension.settings.nightonly = e.message.nightonly;
		safari.extension.settings.nightenabletheme = e.message.nightenabletheme;
		safari.extension.settings.nightDomains = e.message.nightDomains;
		safari.extension.settings.autoplaydelay = e.message.autoplaydelay;
		safari.extension.settings.autoplaydelaytime = e.message.autoplaydelaytime;
		safari.extension.settings.motion = e.message.motion;
		safari.extension.settings.lightimagelin = e.message.lightimagelin;
		safari.extension.settings.linearsq = e.message.linearsq;
		safari.extension.settings.colora = e.message.colora;
		safari.extension.settings.intervallina = e.message.intervallina;
		safari.extension.settings.colorb = e.message.colorb;
		safari.extension.settings.intervallinb = e.message.intervallinb;
		safari.extension.settings.speech = e.message.speech;
		safari.extension.settings.speechlang = e.message.speechlang;
		safari.extension.settings.speechcountry = e.message.speechcountry;
		safari.extension.settings.atmosvivid = e.message.atmosvivid;
		safari.extension.settings.cammotiononly = e.message.cammotiononly;
		safari.extension.settings.speechonly = e.message.speechonly;
		safari.extension.settings.autoplaychecklistwhite = e.message.autoplaychecklistwhite;
		safari.extension.settings.autoplaychecklistblack = e.message.autoplaychecklistblack;
		safari.extension.settings.cammotionDomains = e.message.cammotionDomains;
		safari.extension.settings.speechDomains = e.message.speechDomains;
        safari.extension.settings.reviewedlastonversion = e.message.reviewedlastonversion;
        safari.extension.settings.applastonversion = e.message.applastonversion;
        safari.extension.settings.mobilelastonversion = e.message.mobilelastonversion;
        safari.extension.settings.autostop = e.message.autostop;
        safari.extension.settings.autostoponly = e.message.autostoponly;
        safari.extension.settings.autostopchecklistwhite = e.message.autostopchecklistwhite;
        safari.extension.settings.autostopchecklistblack = e.message.autostopchecklistblack;
        safari.extension.settings.nighthover = e.message.nighthover;
        safari.extension.settings.nightmodechecklistwhite = e.message.nightmodechecklistwhite;
        safari.extension.settings.nightmodechecklistblack = e.message.nightmodechecklistblack;
        safari.extension.settings.nmtopleft = e.message.nmtopleft;
        safari.extension.settings.nmtopright = e.message.nmtopright;
        safari.extension.settings.nmbottomright = e.message.nmbottomright;
        safari.extension.settings.nmbottomleft = e.message.nmbottomleft;
        safari.extension.settings.nmcustom = e.message.nmcustom;
        safari.extension.settings.nmcustomx = e.message.nmcustomx;
        safari.extension.settings.nmcustomy = e.message.nmcustomy;
        safari.extension.settings.nightactivetime = e.message.nightactivetime;
        safari.extension.settings.nmbegintime = e.message.nmbegintime;
        safari.extension.settings.nmendtime = e.message.nmendtime;
        safari.extension.settings.lampandnightmode = e.message.lampandnightmode;
        safari.extension.settings.eyechecklistwhite = e.message.eyechecklistwhite;
        safari.extension.settings.eyechecklistblack = e.message.eyechecklistblack;
        safari.extension.settings.autostopDomains = e.message.autostopDomains;
		safari.extension.settings.nightmodebck = e.message.nightmodebck;
        safari.extension.settings.nightmodetxt = e.message.nightmodetxt;
        safari.extension.settings.no360youtube = e.message.no360youtube;
        safari.extension.settings.videotool = e.message.videotool;
        safari.extension.settings.reflection = e.message.reflection;
        safari.extension.settings.reflectionamount = e.message.reflectionamount;
        safari.extension.settings.videotoolonly = e.message.videotoolonly;
        safari.extension.settings.videotoolchecklistwhite = e.message.videotoolchecklistwhite;
        safari.extension.settings.videotoolchecklistblack = e.message.videotoolchecklistblack;
        safari.extension.settings.videotoolDomains = e.message.videotoolDomains;   
		safari.extension.settings.nightmodehyperlink = e.message.nightmodehyperlink;
		safari.extension.settings.block60fps = e.message.block60fps;
		safari.extension.settings.videovolume = e.message.videovolume;
		safari.extension.settings.videovolumecolor = e.message.videovolumecolor;
		safari.extension.settings.videovolumesteps = e.message.videovolumesteps;
		safari.extension.settings.videovolumelabel = e.message.videovolumelabel;
		safari.extension.settings.icon = e.message.icon;
		safari.extension.settings.visopacity = e.message.visopacity;

		// update lamp icon
		var filePath = safari.extension.settings.icon;
		var fileName = filePath.match(/[^\/]*$/);
		var fileResult = safari.extension.baseURI + "icons/" + fileName
		safari.extension.toolbarItems[0].image = fileResult;

        // send to all tabs
        for (var i = 0; i < safari.application.browserWindows.length; i++)
        {
            var browserWindow = safari.application.browserWindows[i];
            for (var j = 0; j < browserWindow.tabs.length; j++)
            {
                var tab = browserWindow.tabs[j];
				var mytab = safari.application.activeBrowserWindow.activeTab;
				// and send not to the current Options.html tab
				if (tab != mytab) {
					tab.page.dispatchMessage("setSettings", {manifestversion:safari.extension.displayVersion, lightcolor:safari.extension.settings.getItem("lightcolor"), interval:safari.extension.settings.getItem("interval"), fadein:safari.extension.settings.getItem("fadein"), fadeout:safari.extension.settings.getItem("fadeout"), autoplay:safari.extension.settings.getItem("autoplay"), eastereggs:safari.extension.settings.getItem("eastereggs"), suggestions:safari.extension.settings.getItem("suggestions"), playlist:safari.extension.settings.getItem("playlist"), sharebutton:safari.extension.settings.getItem("sharebutton"), videoheadline:safari.extension.settings.getItem("videoheadline"), flash:safari.extension.settings.getItem("flash"), head:safari.extension.settings.getItem("head"), infobar:safari.extension.settings.getItem("infobar"), likebutton:safari.extension.settings.getItem("likebutton"), shortcutlight:safari.extension.settings.getItem("shortcutlight"), readera:safari.extension.settings.getItem("readera"), readern:safari.extension.settings.getItem("readern"), eyea:safari.extension.settings.getItem("eyea"), eyen:safari.extension.settings.getItem("eyen"), readerlargestyle:safari.extension.settings.getItem("readerlargestyle"), viewcount:safari.extension.settings.getItem("viewcount"), lightimage:safari.extension.settings.getItem("lightimage"), lightimagea:safari.extension.settings.getItem("lightimagea"), lightimagen:safari.extension.settings.getItem("lightimagen"), eyealist:safari.extension.settings.getItem("eyealist"), excludedDomains:safari.extension.settings.excludedDomains, mousespotlighto:safari.extension.settings.getItem("mousespotlighto"), mousespotlighta:safari.extension.settings.getItem("mousespotlighta"), mousespotlightc:safari.extension.settings.getItem("mousespotlightc"), nighttime:safari.extension.settings.getItem("nighttime"), begintime:safari.extension.settings.getItem("begintime"), endtime:safari.extension.settings.getItem("endtime"), addvideobutton:safari.extension.settings.getItem("addvideobutton"), likebar:safari.extension.settings.getItem("likebar"), ambilight:safari.extension.settings.getItem("ambilight"), ambilightrangeblurradius:safari.extension.settings.getItem("ambilightrangeblurradius"), ambilightrangespreadradius:safari.extension.settings.getItem("ambilightrangespreadradius"), mousespotlightt:safari.extension.settings.getItem("mousespotlightt"), ambilightfixcolor:safari.extension.settings.getItem("ambilightfixcolor"), ambilightvarcolor:safari.extension.settings.getItem("ambilightvarcolor"), ambilightcolorhex:safari.extension.settings.getItem("ambilightcolorhex"), ambilight4color:safari.extension.settings.getItem("ambilight4color"), ambilight1colorhex:safari.extension.settings.getItem("ambilight1colorhex"), ambilight2colorhex:safari.extension.settings.getItem("ambilight2colorhex"), ambilight3colorhex:safari.extension.settings.getItem("ambilight3colorhex"), ambilight4colorhex:safari.extension.settings.getItem("ambilight4colorhex"), password:safari.extension.settings.getItem("password"), enterpassword:safari.extension.settings.getItem("enterpassword"), noflash:safari.extension.settings.getItem("noflash"), hardflash:safari.extension.settings.getItem("hardflash"), ecosaver:safari.extension.settings.getItem("ecosaver"), ecosavertime:safari.extension.settings.getItem("ecosavertime"), dynamic:safari.extension.settings.getItem("dynamic"), dynamic1:safari.extension.settings.getItem("dynamic1"), dynamic2:safari.extension.settings.getItem("dynamic2"), dynamic3:safari.extension.settings.getItem("dynamic3"), dynamic4:safari.extension.settings.getItem("dynamic4"), dynamic5:safari.extension.settings.getItem("dynamic5"), dynamic6:safari.extension.settings.getItem("dynamic6"), dynamic7:safari.extension.settings.getItem("dynamic7"), dynamic8:safari.extension.settings.getItem("dynamic8"), dynamic9:safari.extension.settings.getItem("dynamic9"), dynamic10:safari.extension.settings.getItem("dynamic10"), hoveroptiondyn5:safari.extension.settings.getItem("hoveroptiondyn5"), autoplayonly:safari.extension.settings.getItem("autoplayonly"), autoplayDomains:safari.extension.settings.autoplayDomains, blur:safari.extension.settings.getItem("blur"), youtubequality:safari.extension.settings.getItem("youtubequality"), maxquality:safari.extension.settings.getItem("maxquality"), autowidthyoutube:safari.extension.settings.getItem("autowidthyoutube"), customqualityyoutube:safari.extension.settings.getItem("customqualityyoutube"), cinemaontop:safari.extension.settings.getItem("cinemaontop"), alllightsoff:safari.extension.settings.getItem("alllightsoff"), spotlightradius:safari.extension.settings.getItem("spotlightradius"), atmosphereonly:safari.extension.settings.getItem("atmosphereonly"), atmosphereDomains:safari.extension.settings.atmosphereDomains, optionskipremember:safari.extension.settings.getItem("optionskipremember"), countremember:safari.extension.settings.getItem("countremember"), nighttheme:safari.extension.settings.getItem("nighttheme"), nightonly:safari.extension.settings.getItem("nightonly"), nightenabletheme:safari.extension.settings.getItem("nightenabletheme"), nightDomains:safari.extension.settings.nightDomains, autoplaydelay:safari.extension.settings.getItem("autoplaydelay"), autoplaydelaytime:safari.extension.settings.getItem("autoplaydelaytime"), motion:safari.extension.settings.getItem("motion"), lightimagelin:safari.extension.settings.getItem("lightimagelin"), linearsq:safari.extension.settings.getItem("linearsq"), colora:safari.extension.settings.getItem("colora"), intervallina:safari.extension.settings.getItem("intervallina"), colorb:safari.extension.settings.getItem("colorb"), intervallinb:safari.extension.settings.getItem("intervallinb"), speech:safari.extension.settings.getItem("speech"), speechlang:safari.extension.settings.getItem("speechlang"), speechcountry:safari.extension.settings.getItem("speechcountry"), atmosvivid:safari.extension.settings.getItem("atmosvivid"), cammotiononly:safari.extension.settings.getItem("cammotiononly"), speechonly:safari.extension.settings.getItem("speechonly"), autoplaychecklistwhite:safari.extension.settings.getItem("autoplaychecklistwhite"), autoplaychecklistblack:safari.extension.settings.getItem("autoplaychecklistblack"), cammotionDomains:safari.extension.settings.cammotionDomains, speechDomains:safari.extension.settings.speechDomains, reviewedlastonversion:safari.extension.settings.getItem("reviewedlastonversion"), applastonversion:safari.extension.settings.getItem("applastonversion"), mobilelastonversion:safari.extension.settings.getItem("mobilelastonversion"), autostop:safari.extension.settings.getItem("autostop"), autostoponly:safari.extension.settings.getItem("autostoponly"), autostopchecklistwhite:safari.extension.settings.getItem("autostopchecklistwhite"), autostopchecklistblack:safari.extension.settings.getItem("autostopchecklistblack"), nighthover:safari.extension.settings.getItem("nighthover"), nightmodechecklistwhite:safari.extension.settings.getItem("nightmodechecklistwhite"), nightmodechecklistblack:safari.extension.settings.getItem("nightmodechecklistblack"), nmtopleft:safari.extension.settings.getItem("nmtopleft"), nmtopright:safari.extension.settings.getItem("nmtopright"), nmbottomright:safari.extension.settings.getItem("nmbottomright"), nmbottomleft:safari.extension.settings.getItem("nmbottomleft"), nmcustom:safari.extension.settings.getItem("nmcustom"), nmcustomx: safari.extension.settings.getItem("nmcustomx"), nmcustomy: safari.extension.settings.getItem("nmcustomy"), nightactivetime:safari.extension.settings.getItem("nightactivetime"), nmbegintime:safari.extension.settings.getItem("nmbegintime"), nmendtime:safari.extension.settings.getItem("nmendtime"), lampandnightmode:safari.extension.settings.getItem("lampandnightmode"), eyechecklistwhite:safari.extension.settings.getItem("eyechecklistwhite"), eyechecklistblack:safari.extension.settings.getItem("eyechecklistblack"), autostopDomains:safari.extension.settings.autostopDomains, nightmodebck:safari.extension.settings.getItem("nightmodebck"), nightmodetxt:safari.extension.settings.getItem("nightmodetxt"), no360youtube:safari.extension.settings.getItem("no360youtube"), videotool:safari.extension.settings.getItem("videotool"), reflection:safari.extension.settings.getItem("reflection"), reflectionamount:safari.extension.settings.getItem("reflectionamount"), videotoolonly:safari.extension.settings.getItem("videotoolonly"), videotoolchecklistwhite:safari.extension.settings.getItem("videotoolchecklistwhite"), videotoolchecklistblack:safari.extension.settings.getItem("videotoolchecklistblack"), videotoolDomains:safari.extension.settings.videotoolDomains, nightmodehyperlink:safari.extension.settings.getItem("nightmodehyperlink"), block60fps:safari.extension.settings.getItem("block60fps"), videovolume:safari.extension.settings.getItem("videovolume"), videovolumecolor:safari.extension.settings.getItem("videovolumecolor"), videovolumesteps:safari.extension.settings.getItem("videovolumesteps"), videovolumelabel:safari.extension.settings.getItem("videovolumelabel"), icon:safari.extension.settings.getItem("icon"), visopacity:safari.extension.settings.getItem("visopacity")});
				}
            }
        }
    }
	else if (e.name === "readersaveme") {
		safari.extension.settings.interval = e.message;
		// send back all settings
		e.target.page.dispatchMessage("setSettings", {manifestversion:safari.extension.displayVersion, lightcolor:safari.extension.settings.getItem("lightcolor"), interval:safari.extension.settings.getItem("interval"), fadein:safari.extension.settings.getItem("fadein"), fadeout:safari.extension.settings.getItem("fadeout"), autoplay:safari.extension.settings.getItem("autoplay"), eastereggs:safari.extension.settings.getItem("eastereggs"), suggestions:safari.extension.settings.getItem("suggestions"), playlist:safari.extension.settings.getItem("playlist"), sharebutton:safari.extension.settings.getItem("sharebutton"), videoheadline:safari.extension.settings.getItem("videoheadline"), flash:safari.extension.settings.getItem("flash"), head:safari.extension.settings.getItem("head"), infobar:safari.extension.settings.getItem("infobar"), likebutton:safari.extension.settings.getItem("likebutton"), shortcutlight:safari.extension.settings.getItem("shortcutlight"), readera:safari.extension.settings.getItem("readera"), readern:safari.extension.settings.getItem("readern"), eyea:safari.extension.settings.getItem("eyea"), eyen:safari.extension.settings.getItem("eyen"), readerlargestyle:safari.extension.settings.getItem("readerlargestyle"), viewcount:safari.extension.settings.getItem("viewcount"), lightimage:safari.extension.settings.getItem("lightimage"), lightimagea:safari.extension.settings.getItem("lightimagea"), lightimagen:safari.extension.settings.getItem("lightimagen"), eyealist:safari.extension.settings.getItem("eyealist"), excludedDomains:safari.extension.settings.excludedDomains, mousespotlighto:safari.extension.settings.getItem("mousespotlighto"), mousespotlighta:safari.extension.settings.getItem("mousespotlighta"), mousespotlightc:safari.extension.settings.getItem("mousespotlightc"), nighttime:safari.extension.settings.getItem("nighttime"), begintime:safari.extension.settings.getItem("begintime"), endtime:safari.extension.settings.getItem("endtime"), addvideobutton:safari.extension.settings.getItem("addvideobutton"), likebar:safari.extension.settings.getItem("likebar"), ambilight:safari.extension.settings.getItem("ambilight"), ambilightrangeblurradius:safari.extension.settings.getItem("ambilightrangeblurradius"), ambilightrangespreadradius:safari.extension.settings.getItem("ambilightrangespreadradius"), mousespotlightt:safari.extension.settings.getItem("mousespotlightt"), ambilightfixcolor:safari.extension.settings.getItem("ambilightfixcolor"), ambilightvarcolor:safari.extension.settings.getItem("ambilightvarcolor"), ambilightcolorhex:safari.extension.settings.getItem("ambilightcolorhex"), ambilight4color:safari.extension.settings.getItem("ambilight4color"), ambilight1colorhex:safari.extension.settings.getItem("ambilight1colorhex"), ambilight2colorhex:safari.extension.settings.getItem("ambilight2colorhex"), ambilight3colorhex:safari.extension.settings.getItem("ambilight3colorhex"), ambilight4colorhex:safari.extension.settings.getItem("ambilight4colorhex"), password:safari.extension.settings.getItem("password"), enterpassword:safari.extension.settings.getItem("enterpassword"), noflash:safari.extension.settings.getItem("noflash"), hardflash:safari.extension.settings.getItem("hardflash"), ecosaver:safari.extension.settings.getItem("ecosaver"), ecosavertime:safari.extension.settings.getItem("ecosavertime"), dynamic:safari.extension.settings.getItem("dynamic"), dynamic1:safari.extension.settings.getItem("dynamic1"), dynamic2:safari.extension.settings.getItem("dynamic2"), dynamic3:safari.extension.settings.getItem("dynamic3"), dynamic4:safari.extension.settings.getItem("dynamic4"), dynamic5:safari.extension.settings.getItem("dynamic5"), dynamic6:safari.extension.settings.getItem("dynamic6"), dynamic7:safari.extension.settings.getItem("dynamic7"), dynamic8:safari.extension.settings.getItem("dynamic8"), dynamic9:safari.extension.settings.getItem("dynamic9"), dynamic10:safari.extension.settings.getItem("dynamic10"), hoveroptiondyn5:safari.extension.settings.getItem("hoveroptiondyn5"), autoplayonly:safari.extension.settings.getItem("autoplayonly"), autoplayDomains:safari.extension.settings.autoplayDomains, blur:safari.extension.settings.getItem("blur"), youtubequality:safari.extension.settings.getItem("youtubequality"), maxquality:safari.extension.settings.getItem("maxquality"), autowidthyoutube:safari.extension.settings.getItem("autowidthyoutube"), customqualityyoutube:safari.extension.settings.getItem("customqualityyoutube"), cinemaontop:safari.extension.settings.getItem("cinemaontop"), alllightsoff:safari.extension.settings.getItem("alllightsoff"), spotlightradius:safari.extension.settings.getItem("spotlightradius"), atmosphereonly:safari.extension.settings.getItem("atmosphereonly"), atmosphereDomains:safari.extension.settings.atmosphereDomains, optionskipremember:safari.extension.settings.getItem("optionskipremember"), countremember:safari.extension.settings.getItem("countremember"), nighttheme:safari.extension.settings.getItem("nighttheme"), nightonly:safari.extension.settings.getItem("nightonly"), nightenabletheme:safari.extension.settings.getItem("nightenabletheme"), nightDomains:safari.extension.settings.nightDomains, autoplaydelay:safari.extension.settings.getItem("autoplaydelay"), autoplaydelaytime:safari.extension.settings.getItem("autoplaydelaytime"), motion:safari.extension.settings.getItem("motion"), lightimagelin:safari.extension.settings.getItem("lightimagelin"), linearsq:safari.extension.settings.getItem("linearsq"), colora:safari.extension.settings.getItem("colora"), intervallina:safari.extension.settings.getItem("intervallina"), colorb:safari.extension.settings.getItem("colorb"), intervallinb:safari.extension.settings.getItem("intervallinb"), speech:safari.extension.settings.getItem("speech"), speechlang:safari.extension.settings.getItem("speechlang"), speechcountry:safari.extension.settings.getItem("speechcountry"), atmosvivid:safari.extension.settings.getItem("atmosvivid"), cammotiononly:safari.extension.settings.getItem("cammotiononly"), speechonly:safari.extension.settings.getItem("speechonly"), autoplaychecklistwhite:safari.extension.settings.getItem("autoplaychecklistwhite"), autoplaychecklistblack:safari.extension.settings.getItem("autoplaychecklistblack"), cammotionDomains:safari.extension.settings.cammotionDomains, speechDomains:safari.extension.settings.speechDomains, reviewedlastonversion:safari.extension.settings.getItem("reviewedlastonversion"), applastonversion:safari.extension.settings.getItem("applastonversion"), mobilelastonversion:safari.extension.settings.getItem("mobilelastonversion"), autostop:safari.extension.settings.getItem("autostop"), autostoponly:safari.extension.settings.getItem("autostoponly"), autostopchecklistwhite:safari.extension.settings.getItem("autostopchecklistwhite"), autostopchecklistblack:safari.extension.settings.getItem("autostopchecklistblack"), nighthover:safari.extension.settings.getItem("nighthover"), nightmodechecklistwhite:safari.extension.settings.getItem("nightmodechecklistwhite"), nightmodechecklistblack:safari.extension.settings.getItem("nightmodechecklistblack"), nmtopleft:safari.extension.settings.getItem("nmtopleft"), nmtopright:safari.extension.settings.getItem("nmtopright"), nmbottomright:safari.extension.settings.getItem("nmbottomright"), nmbottomleft:safari.extension.settings.getItem("nmbottomleft"), nmcustom:safari.extension.settings.getItem("nmcustom"), nmcustomx: safari.extension.settings.getItem("nmcustomx"), nmcustomy: safari.extension.settings.getItem("nmcustomy"), nightactivetime:safari.extension.settings.getItem("nightactivetime"), nmbegintime:safari.extension.settings.getItem("nmbegintime"), nmendtime:safari.extension.settings.getItem("nmendtime"), lampandnightmode:safari.extension.settings.getItem("lampandnightmode"), eyechecklistwhite:safari.extension.settings.getItem("eyechecklistwhite"), eyechecklistblack:safari.extension.settings.getItem("eyechecklistblack"), autostopDomains:safari.extension.settings.autostopDomains, nightmodebck:safari.extension.settings.getItem("nightmodebck"), nightmodetxt:safari.extension.settings.getItem("nightmodetxt"), no360youtube:safari.extension.settings.getItem("no360youtube"), videotool:safari.extension.settings.getItem("videotool"), reflection:safari.extension.settings.getItem("reflection"), reflectionamount:safari.extension.settings.getItem("reflectionamount"), videotoolonly:safari.extension.settings.getItem("videotoolonly"), videotoolchecklistwhite:safari.extension.settings.getItem("videotoolchecklistwhite"), videotoolchecklistblack:safari.extension.settings.getItem("videotoolchecklistblack"), videotoolDomains:safari.extension.settings.videotoolDomains, nightmodehyperlink:safari.extension.settings.getItem("nightmodehyperlink"), block60fps:safari.extension.settings.getItem("block60fps"), videovolume:safari.extension.settings.getItem("videovolume"), videovolumecolor:safari.extension.settings.getItem("videovolumecolor"), videovolumesteps:safari.extension.settings.getItem("videovolumesteps"), videovolumelabel:safari.extension.settings.getItem("videovolumelabel"), icon:safari.extension.settings.getItem("icon"), visopacity:safari.extension.settings.getItem("visopacity")});
	}
	else if (e.name === "readerlargestyle") {
		safari.extension.settings.readerlargestyle = e.message;
		// send back all settings
		e.target.page.dispatchMessage("setSettings", {manifestversion:safari.extension.displayVersion, lightcolor:safari.extension.settings.getItem("lightcolor"), interval:safari.extension.settings.getItem("interval"), fadein:safari.extension.settings.getItem("fadein"), fadeout:safari.extension.settings.getItem("fadeout"), autoplay:safari.extension.settings.getItem("autoplay"), eastereggs:safari.extension.settings.getItem("eastereggs"), suggestions:safari.extension.settings.getItem("suggestions"), playlist:safari.extension.settings.getItem("playlist"), sharebutton:safari.extension.settings.getItem("sharebutton"), videoheadline:safari.extension.settings.getItem("videoheadline"), flash:safari.extension.settings.getItem("flash"), head:safari.extension.settings.getItem("head"), infobar:safari.extension.settings.getItem("infobar"), likebutton:safari.extension.settings.getItem("likebutton"), shortcutlight:safari.extension.settings.getItem("shortcutlight"), readera:safari.extension.settings.getItem("readera"), readern:safari.extension.settings.getItem("readern"), eyea:safari.extension.settings.getItem("eyea"), eyen:safari.extension.settings.getItem("eyen"), readerlargestyle:safari.extension.settings.getItem("readerlargestyle"), viewcount:safari.extension.settings.getItem("viewcount"), lightimage:safari.extension.settings.getItem("lightimage"), lightimagea:safari.extension.settings.getItem("lightimagea"), lightimagen:safari.extension.settings.getItem("lightimagen"), eyealist:safari.extension.settings.getItem("eyealist"), excludedDomains:safari.extension.settings.excludedDomains, mousespotlighto:safari.extension.settings.getItem("mousespotlighto"), mousespotlighta:safari.extension.settings.getItem("mousespotlighta"), mousespotlightc:safari.extension.settings.getItem("mousespotlightc"), nighttime:safari.extension.settings.getItem("nighttime"), begintime:safari.extension.settings.getItem("begintime"), endtime:safari.extension.settings.getItem("endtime"), addvideobutton:safari.extension.settings.getItem("addvideobutton"), likebar:safari.extension.settings.getItem("likebar"), ambilight:safari.extension.settings.getItem("ambilight"), ambilightrangeblurradius:safari.extension.settings.getItem("ambilightrangeblurradius"), ambilightrangespreadradius:safari.extension.settings.getItem("ambilightrangespreadradius"), mousespotlightt:safari.extension.settings.getItem("mousespotlightt"), ambilightfixcolor:safari.extension.settings.getItem("ambilightfixcolor"), ambilightvarcolor:safari.extension.settings.getItem("ambilightvarcolor"), ambilightcolorhex:safari.extension.settings.getItem("ambilightcolorhex"), ambilight4color:safari.extension.settings.getItem("ambilight4color"), ambilight1colorhex:safari.extension.settings.getItem("ambilight1colorhex"), ambilight2colorhex:safari.extension.settings.getItem("ambilight2colorhex"), ambilight3colorhex:safari.extension.settings.getItem("ambilight3colorhex"), ambilight4colorhex:safari.extension.settings.getItem("ambilight4colorhex"), password:safari.extension.settings.getItem("password"), enterpassword:safari.extension.settings.getItem("enterpassword"), noflash:safari.extension.settings.getItem("noflash"), hardflash:safari.extension.settings.getItem("hardflash"), ecosaver:safari.extension.settings.getItem("ecosaver"), ecosavertime:safari.extension.settings.getItem("ecosavertime"), dynamic:safari.extension.settings.getItem("dynamic"), dynamic1:safari.extension.settings.getItem("dynamic1"), dynamic2:safari.extension.settings.getItem("dynamic2"), dynamic3:safari.extension.settings.getItem("dynamic3"), dynamic4:safari.extension.settings.getItem("dynamic4"), dynamic5:safari.extension.settings.getItem("dynamic5"), dynamic6:safari.extension.settings.getItem("dynamic6"), dynamic7:safari.extension.settings.getItem("dynamic7"), dynamic8:safari.extension.settings.getItem("dynamic8"), dynamic9:safari.extension.settings.getItem("dynamic9"), dynamic10:safari.extension.settings.getItem("dynamic10"), hoveroptiondyn5:safari.extension.settings.getItem("hoveroptiondyn5"), autoplayonly:safari.extension.settings.getItem("autoplayonly"), autoplayDomains:safari.extension.settings.autoplayDomains, blur:safari.extension.settings.getItem("blur"), youtubequality:safari.extension.settings.getItem("youtubequality"), maxquality:safari.extension.settings.getItem("maxquality"), autowidthyoutube:safari.extension.settings.getItem("autowidthyoutube"), customqualityyoutube:safari.extension.settings.getItem("customqualityyoutube"), cinemaontop:safari.extension.settings.getItem("cinemaontop"), alllightsoff:safari.extension.settings.getItem("alllightsoff"), spotlightradius:safari.extension.settings.getItem("spotlightradius"), atmosphereonly:safari.extension.settings.getItem("atmosphereonly"), atmosphereDomains:safari.extension.settings.atmosphereDomains, optionskipremember:safari.extension.settings.getItem("optionskipremember"), countremember:safari.extension.settings.getItem("countremember"), nighttheme:safari.extension.settings.getItem("nighttheme"), nightonly:safari.extension.settings.getItem("nightonly"), nightenabletheme:safari.extension.settings.getItem("nightenabletheme"), nightDomains:safari.extension.settings.nightDomains, autoplaydelay:safari.extension.settings.getItem("autoplaydelay"), autoplaydelaytime:safari.extension.settings.getItem("autoplaydelaytime"), motion:safari.extension.settings.getItem("motion"), lightimagelin:safari.extension.settings.getItem("lightimagelin"), linearsq:safari.extension.settings.getItem("linearsq"), colora:safari.extension.settings.getItem("colora"), intervallina:safari.extension.settings.getItem("intervallina"), colorb:safari.extension.settings.getItem("colorb"), intervallinb:safari.extension.settings.getItem("intervallinb"), speech:safari.extension.settings.getItem("speech"), speechlang:safari.extension.settings.getItem("speechlang"), speechcountry:safari.extension.settings.getItem("speechcountry"), atmosvivid:safari.extension.settings.getItem("atmosvivid"), cammotiononly:safari.extension.settings.getItem("cammotiononly"), speechonly:safari.extension.settings.getItem("speechonly"), autoplaychecklistwhite:safari.extension.settings.getItem("autoplaychecklistwhite"), autoplaychecklistblack:safari.extension.settings.getItem("autoplaychecklistblack"), cammotionDomains:safari.extension.settings.cammotionDomains, speechDomains:safari.extension.settings.speechDomains, reviewedlastonversion:safari.extension.settings.getItem("reviewedlastonversion"), applastonversion:safari.extension.settings.getItem("applastonversion"), mobilelastonversion:safari.extension.settings.getItem("mobilelastonversion"), autostop:safari.extension.settings.getItem("autostop"), autostoponly:safari.extension.settings.getItem("autostoponly"), autostopchecklistwhite:safari.extension.settings.getItem("autostopchecklistwhite"), autostopchecklistblack:safari.extension.settings.getItem("autostopchecklistblack"), nighthover:safari.extension.settings.getItem("nighthover"), nightmodechecklistwhite:safari.extension.settings.getItem("nightmodechecklistwhite"), nightmodechecklistblack:safari.extension.settings.getItem("nightmodechecklistblack"), nmtopleft:safari.extension.settings.getItem("nmtopleft"), nmtopright:safari.extension.settings.getItem("nmtopright"), nmbottomright:safari.extension.settings.getItem("nmbottomright"), nmbottomleft:safari.extension.settings.getItem("nmbottomleft"), nmcustom:safari.extension.settings.getItem("nmcustom"), nmcustomx: safari.extension.settings.getItem("nmcustomx"), nmcustomy: safari.extension.settings.getItem("nmcustomy"), nightactivetime:safari.extension.settings.getItem("nightactivetime"), nmbegintime:safari.extension.settings.getItem("nmbegintime"), nmendtime:safari.extension.settings.getItem("nmendtime"), lampandnightmode:safari.extension.settings.getItem("lampandnightmode"), eyechecklistwhite:safari.extension.settings.getItem("eyechecklistwhite"), eyechecklistblack:safari.extension.settings.getItem("eyechecklistblack"), autostopDomains:safari.extension.settings.autostopDomains, nightmodebck:safari.extension.settings.getItem("nightmodebck"), nightmodetxt:safari.extension.settings.getItem("nightmodetxt"), no360youtube:safari.extension.settings.getItem("no360youtube"), videotool:safari.extension.settings.getItem("videotool"), reflection:safari.extension.settings.getItem("reflection"), reflectionamount:safari.extension.settings.getItem("reflectionamount"), videotoolonly:safari.extension.settings.getItem("videotoolonly"), videotoolchecklistwhite:safari.extension.settings.getItem("videotoolchecklistwhite"), videotoolchecklistblack:safari.extension.settings.getItem("videotoolchecklistblack"), videotoolDomains:safari.extension.settings.videotoolDomains, nightmodehyperlink:safari.extension.settings.getItem("nightmodehyperlink"), block60fps:safari.extension.settings.getItem("block60fps"), videovolume:safari.extension.settings.getItem("videovolume"), videovolumecolor:safari.extension.settings.getItem("videovolumecolor"), videovolumesteps:safari.extension.settings.getItem("videovolumesteps"), videovolumelabel:safari.extension.settings.getItem("videovolumelabel"), icon:safari.extension.settings.getItem("icon"), visopacity:safari.extension.settings.getItem("visopacity")});
	}
	else if ((e.name === "lightshortcut") && (safari.extension.settings.getItem("shortcutlight"))) {safari.application.activeBrowserWindow.activeTab.page.dispatchMessage("lightsoff", "there");}
	else if (e.name === "automatic") {safari.application.activeBrowserWindow.activeTab.page.dispatchMessage("lightsoff", "there");}
	else if (e.name == "emergencyalf") {
	// all tabs
	for (var i = 0; i < safari.application.browserWindows.length; i++)
	{
		var browserWindow = safari.application.browserWindows[i];
		for (var j = 0; j < browserWindow.tabs.length; j++)
		{
			var tab = browserWindow.tabs[j];
			tab.page.dispatchMessage("lightsoff", "there");
		}
	}
	} else if (e.name == "eyesaveme") {
		if(e.message == true){safari.extension.settings.eyea = true;safari.extension.settings.eyen = false;}
		else{safari.extension.settings.eyea = false;safari.extension.settings.eyen = true;}
	} else if (e.name === "adddarkyoutube") {
		safari.application.activeBrowserWindow.activeTab.page.dispatchMessage("darkyt", "there");
	} else if (e.name === "addnormalyoutube") {
		safari.application.activeBrowserWindow.activeTab.page.dispatchMessage("normalyt", "there");
	} else if (e.name === "nmcustomx") {
		localStorage.setItem("nmcustomx", e.message);safari.extension.settings.nmcustomx = e.message;
	} else if (e.name === "nmcustomy") {
		localStorage.setItem("nmcustomy", e.message);safari.extension.settings.nmcustomy = e.message;
	} else if (e.name === "updatecountremember") {
		safari.extension.settings.countremember = e.message;
	} else if (e.name === "getClear") {
		safari.extension.settings.clear();
		// send to all tabs
        for (var i = 0; i < safari.application.browserWindows.length; i++)
        {
            var browserWindow = safari.application.browserWindows[i];
            for (var j = 0; j < browserWindow.tabs.length; j++)
            {
                var tab = browserWindow.tabs[j];
				var mytab = safari.application.activeBrowserWindow.activeTab;
				// and send not to the current Options.html tab
				if (tab != mytab) {
					tab.page.dispatchMessage("setSettings", {manifestversion:safari.extension.displayVersion, lightcolor:safari.extension.settings.getItem("lightcolor"), interval:safari.extension.settings.getItem("interval"), fadein:safari.extension.settings.getItem("fadein"), fadeout:safari.extension.settings.getItem("fadeout"), autoplay:safari.extension.settings.getItem("autoplay"), eastereggs:safari.extension.settings.getItem("eastereggs"), suggestions:safari.extension.settings.getItem("suggestions"), playlist:safari.extension.settings.getItem("playlist"), sharebutton:safari.extension.settings.getItem("sharebutton"), videoheadline:safari.extension.settings.getItem("videoheadline"), flash:safari.extension.settings.getItem("flash"), head:safari.extension.settings.getItem("head"), infobar:safari.extension.settings.getItem("infobar"), likebutton:safari.extension.settings.getItem("likebutton"), shortcutlight:safari.extension.settings.getItem("shortcutlight"), readera:safari.extension.settings.getItem("readera"), readern:safari.extension.settings.getItem("readern"), eyea:safari.extension.settings.getItem("eyea"), eyen:safari.extension.settings.getItem("eyen"), readerlargestyle:safari.extension.settings.getItem("readerlargestyle"), viewcount:safari.extension.settings.getItem("viewcount"), lightimage:safari.extension.settings.getItem("lightimage"), lightimagea:safari.extension.settings.getItem("lightimagea"), lightimagen:safari.extension.settings.getItem("lightimagen"), eyealist:safari.extension.settings.getItem("eyealist"), excludedDomains:safari.extension.settings.excludedDomains, mousespotlighto:safari.extension.settings.getItem("mousespotlighto"), mousespotlighta:safari.extension.settings.getItem("mousespotlighta"), mousespotlightc:safari.extension.settings.getItem("mousespotlightc"), nighttime:safari.extension.settings.getItem("nighttime"), begintime:safari.extension.settings.getItem("begintime"), endtime:safari.extension.settings.getItem("endtime"), addvideobutton:safari.extension.settings.getItem("addvideobutton"), likebar:safari.extension.settings.getItem("likebar"), ambilight:safari.extension.settings.getItem("ambilight"), ambilightrangeblurradius:safari.extension.settings.getItem("ambilightrangeblurradius"), ambilightrangespreadradius:safari.extension.settings.getItem("ambilightrangespreadradius"), mousespotlightt:safari.extension.settings.getItem("mousespotlightt"), ambilightfixcolor:safari.extension.settings.getItem("ambilightfixcolor"), ambilightvarcolor:safari.extension.settings.getItem("ambilightvarcolor"), ambilightcolorhex:safari.extension.settings.getItem("ambilightcolorhex"), ambilight4color:safari.extension.settings.getItem("ambilight4color"), ambilight1colorhex:safari.extension.settings.getItem("ambilight1colorhex"), ambilight2colorhex:safari.extension.settings.getItem("ambilight2colorhex"), ambilight3colorhex:safari.extension.settings.getItem("ambilight3colorhex"), ambilight4colorhex:safari.extension.settings.getItem("ambilight4colorhex"), password:safari.extension.settings.getItem("password"), enterpassword:safari.extension.settings.getItem("enterpassword"), noflash:safari.extension.settings.getItem("noflash"), hardflash:safari.extension.settings.getItem("hardflash"), ecosaver:safari.extension.settings.getItem("ecosaver"), ecosavertime:safari.extension.settings.getItem("ecosavertime"), dynamic:safari.extension.settings.getItem("dynamic"), dynamic1:safari.extension.settings.getItem("dynamic1"), dynamic2:safari.extension.settings.getItem("dynamic2"), dynamic3:safari.extension.settings.getItem("dynamic3"), dynamic4:safari.extension.settings.getItem("dynamic4"), dynamic5:safari.extension.settings.getItem("dynamic5"), dynamic6:safari.extension.settings.getItem("dynamic6"), dynamic7:safari.extension.settings.getItem("dynamic7"), dynamic8:safari.extension.settings.getItem("dynamic8"), dynamic9:safari.extension.settings.getItem("dynamic9"), dynamic10:safari.extension.settings.getItem("dynamic10"), hoveroptiondyn5:safari.extension.settings.getItem("hoveroptiondyn5"), autoplayonly:safari.extension.settings.getItem("autoplayonly"), autoplayDomains:safari.extension.settings.autoplayDomains, blur:safari.extension.settings.getItem("blur"), youtubequality:safari.extension.settings.getItem("youtubequality"), maxquality:safari.extension.settings.getItem("maxquality"), autowidthyoutube:safari.extension.settings.getItem("autowidthyoutube"), customqualityyoutube:safari.extension.settings.getItem("customqualityyoutube"), cinemaontop:safari.extension.settings.getItem("cinemaontop"), alllightsoff:safari.extension.settings.getItem("alllightsoff"), spotlightradius:safari.extension.settings.getItem("spotlightradius"), atmosphereonly:safari.extension.settings.getItem("atmosphereonly"), atmosphereDomains:safari.extension.settings.atmosphereDomains, optionskipremember:safari.extension.settings.getItem("optionskipremember"), countremember:safari.extension.settings.getItem("countremember"), nighttheme:safari.extension.settings.getItem("nighttheme"), nightonly:safari.extension.settings.getItem("nightonly"), nightenabletheme:safari.extension.settings.getItem("nightenabletheme"), nightDomains:safari.extension.settings.nightDomains, autoplaydelay:safari.extension.settings.getItem("autoplaydelay"), autoplaydelaytime:safari.extension.settings.getItem("autoplaydelaytime"), motion:safari.extension.settings.getItem("motion"), lightimagelin:safari.extension.settings.getItem("lightimagelin"), linearsq:safari.extension.settings.getItem("linearsq"), colora:safari.extension.settings.getItem("colora"), intervallina:safari.extension.settings.getItem("intervallina"), colorb:safari.extension.settings.getItem("colorb"), intervallinb:safari.extension.settings.getItem("intervallinb"), speech:safari.extension.settings.getItem("speech"), speechlang:safari.extension.settings.getItem("speechlang"), speechcountry:safari.extension.settings.getItem("speechcountry"), atmosvivid:safari.extension.settings.getItem("atmosvivid"), cammotiononly:safari.extension.settings.getItem("cammotiononly"), speechonly:safari.extension.settings.getItem("speechonly"), autoplaychecklistwhite:safari.extension.settings.getItem("autoplaychecklistwhite"), autoplaychecklistblack:safari.extension.settings.getItem("autoplaychecklistblack"), cammotionDomains:safari.extension.settings.cammotionDomains, speechDomains:safari.extension.settings.speechDomains, reviewedlastonversion:safari.extension.settings.getItem("reviewedlastonversion"), applastonversion:safari.extension.settings.getItem("applastonversion"), mobilelastonversion:safari.extension.settings.getItem("mobilelastonversion"), autostop:safari.extension.settings.getItem("autostop"), autostoponly:safari.extension.settings.getItem("autostoponly"), autostopchecklistwhite:safari.extension.settings.getItem("autostopchecklistwhite"), autostopchecklistblack:safari.extension.settings.getItem("autostopchecklistblack"), nighthover:safari.extension.settings.getItem("nighthover"), nightmodechecklistwhite:safari.extension.settings.getItem("nightmodechecklistwhite"), nightmodechecklistblack:safari.extension.settings.getItem("nightmodechecklistblack"), nmtopleft:safari.extension.settings.getItem("nmtopleft"), nmtopright:safari.extension.settings.getItem("nmtopright"), nmbottomright:safari.extension.settings.getItem("nmbottomright"), nmbottomleft:safari.extension.settings.getItem("nmbottomleft"), nmcustom:safari.extension.settings.getItem("nmcustom"), nmcustomx: safari.extension.settings.getItem("nmcustomx"), nmcustomy: safari.extension.settings.getItem("nmcustomy"), nightactivetime:safari.extension.settings.getItem("nightactivetime"), nmbegintime:safari.extension.settings.getItem("nmbegintime"), nmendtime:safari.extension.settings.getItem("nmendtime"), lampandnightmode:safari.extension.settings.getItem("lampandnightmode"), eyechecklistwhite:safari.extension.settings.getItem("eyechecklistwhite"), eyechecklistblack:safari.extension.settings.getItem("eyechecklistblack"), autostopDomains:safari.extension.settings.autostopDomains, nightmodebck:safari.extension.settings.getItem("nightmodebck"), nightmodetxt:safari.extension.settings.getItem("nightmodetxt"), no360youtube:safari.extension.settings.getItem("no360youtube"), videotool:safari.extension.settings.getItem("videotool"), reflection:safari.extension.settings.getItem("reflection"), reflectionamount:safari.extension.settings.getItem("reflectionamount"), videotoolonly:safari.extension.settings.getItem("videotoolonly"), videotoolchecklistwhite:safari.extension.settings.getItem("videotoolchecklistwhite"), videotoolchecklistblack:safari.extension.settings.getItem("videotoolchecklistblack"), videotoolDomains:safari.extension.settings.videotoolDomains, nightmodehyperlink:safari.extension.settings.getItem("nightmodehyperlink"), block60fps:safari.extension.settings.getItem("block60fps"), videovolume:safari.extension.settings.getItem("videovolume"), videovolumecolor:safari.extension.settings.getItem("videovolumecolor"), videovolumesteps:safari.extension.settings.getItem("videovolumesteps"), videovolumelabel:safari.extension.settings.getItem("videovolumelabel"), icon:safari.extension.settings.getItem("icon"), visopacity:safari.extension.settings.getItem("visopacity")});
				}
            }
        }
		welcomepage();
	} else if (e.name === "updatereviewedlastonversion") {
		safari.extension.settings.reviewedlastonversion = safari.extension.displayVersion;
	} else if (e.name === "updateapplastonversion") {
		safari.extension.settings.applastonversion = safari.extension.displayVersion;
	} else if (e.name === "updatemobilelastversion") {
		safari.extension.settings.mobilelastonversion = safari.extension.displayVersion;
	} else if (e.name === "getSpeechsettings") {
		e.target.page.dispatchMessage("setSpeech", safari.extension.settings.speechcountry);
	}	
}

var browseraction = null;
var lampmenu = null;
var sharemenu = null;
function removemenu(menu){safari.extension.removeMenu(menu.identifier);}
function initbutton(){
		var menus = safari.extension.menus;
        for (var i = 0; i < menus.length; i++) {removemenu(menus[i]);}
        // get the button assigned
		for(var i = 0; i < safari.extension.toolbarItems.length; i++){
			if(safari.extension.toolbarItems[i].identifier == "Lights"){browseraction = safari.extension.toolbarItems[i];}
		}
        browseraction.menu = null;
		lampmenu = null;
		sharemenu = null;

		lampmenu = safari.extension.createMenu("lampmenu");
		sharemenu = safari.extension.createMenu("sharemenu");
		lampmenu.appendMenuItem("totl", "Turn Off the Lights");
		lampmenu.appendSeparator();
		lampmenu.appendMenuItem("welcomeguide", "Welcome Guide");
		lampmenu.appendMenuItem("supportdev", "Support Development");
		var itemrate = lampmenu.appendMenuItem("ratethis", "Rate this extension");
        itemrate.image = safari.extension.baseURI + "images/browser_star@2x.png";
        lampmenu.appendSeparator();

		var itememail = sharemenu.appendMenuItem("shareemail", "Tell a Friend");
		var itemgoogle = sharemenu.appendMenuItem("sharegoogle", "Post on Google+");
        itemgoogle.image = safari.extension.baseURI + "images/IconGoogle@2x.png";
		var itemfacebook = sharemenu.appendMenuItem("sharefacebook", "Post on Facebook");
        itemfacebook.image = safari.extension.baseURI + "images/IconFacebook@2x.png";
		var itemtwitter = sharemenu.appendMenuItem("sharetwitter", "Send a Tweet");
        itemtwitter.image = safari.extension.baseURI + "images/IconTwitter@2x.png";

		var itemshare = lampmenu.appendMenuItem("share", "Share this");
        itemshare.submenu = sharemenu;

		lampmenu.appendSeparator();
		lampmenu.appendMenuItem("optionspage", "Options");
        browseraction.menu = lampmenu;
}
initbutton();

function onWindowOrTabSwitched(event) {
	for(var i = 0; i < safari.extension.toolbarItems.length; i++){
        if(safari.extension.toolbarItems[i].identifier == "Lights"){browseraction = safari.extension.toolbarItems[i];}
    }
		var currentUrl = safari.application.activeBrowserWindow.activeTab.url;
		if(currentUrl.substring(0, 19) == "safari-extension://"){
			if(browseraction.popover){}else{
			popover = safari.extension.createPopover("sharepopover", safari.extension.baseURI + "popup.html",295,305);
			browseraction.popover = popover;
			}
		}
		else{
			if(browseraction.popover) {
			popover.hide();
			browseraction.popover = null;
			popover = null;
			safari.extension.removePopover("sharepopover");
			initbutton();
			}
		}
}

// update lamp icon
if(safari.extension.settings.getItem("icon") != null){
var filePath = safari.extension.settings.icon;
var fileName = filePath.match(/[^\/]*$/);
var fileResult = safari.extension.baseURI + "icons/" + fileName
safari.extension.toolbarItems[0].image = fileResult;
}

// if event handlers are in the global HTML page,
// register with application:
safari.application.addEventListener("command", performCommand, false);
safari.application.addEventListener("validate", validateCommand, false);
safari.extension.settings.addEventListener("change", settingsChanged, false);
safari.application.addEventListener("message", waitForMessage, false);
safari.application.addEventListener("activate", onWindowOrTabSwitched, true); // switch tab detection

/*
TODO Safari v3.3
1. bug visualization doesn't work on youtube AND audio volume (lager/hoger) stop niet
2. publish en blog
*/