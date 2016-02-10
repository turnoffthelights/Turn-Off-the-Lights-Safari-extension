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
if ((safari.extension.settings["firstRun"]!="false") && (safari.extension.settings["firstRun"]!=false)) {
  safari.application.activeBrowserWindow.openTab().url = "https://www.turnoffthelights.com/extension/safariguide.html";
  safari.application.activeBrowserWindow.openTab().url = "https://www.turnoffthelights.com/extension/safariwelcome.html";
  safari.extension.settings["firstRun"] = false;
  safari.extension.settings["version"]  = "2.4.1";
}

// reset the color input, because hex value now
if ((safari.extension.settings["version"]=="2.0.0.81") || (safari.extension.settings["version"]=="2.1") || (safari.extension.settings["version"]=="2.3")) {
  safari.application.activeBrowserWindow.openTab().url = "https://www.turnoffthelights.com/extension/safariupgrade.html";
  safari.extension.settings["version"]  = "2.4.1";
}

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

function performCommand(event) {
    if (event.command === "Lights") {
		if ((safari.extension.settings.getItem("alllightsoff")!="true") && (safari.extension.settings.getItem("alllightsoff")!=true)){
			safari.application.activeBrowserWindow.activeTab.page.dispatchMessage("lightsoff", "there");
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
        e.target.page.dispatchMessage("setSettings", {lightcolor:safari.extension.settings.getItem("lightcolor"), interval:safari.extension.settings.getItem("interval"), fadein:safari.extension.settings.getItem("fadein"), fadeout:safari.extension.settings.getItem("fadeout"), autoplay:safari.extension.settings.getItem("autoplay"), eastereggs:safari.extension.settings.getItem("eastereggs"), suggestions:safari.extension.settings.getItem("suggestions"), playlist:safari.extension.settings.getItem("playlist"), sharebutton:safari.extension.settings.getItem("sharebutton"), videoheadline:safari.extension.settings.getItem("videoheadline"), flash:safari.extension.settings.getItem("flash"), head:safari.extension.settings.getItem("head"), infobar:safari.extension.settings.getItem("infobar"), likebutton:safari.extension.settings.getItem("likebutton"), shortcutlight:safari.extension.settings.getItem("shortcutlight"), readera:safari.extension.settings.getItem("readera"), readern:safari.extension.settings.getItem("readern"), eyea:safari.extension.settings.getItem("eyea"), eyen:safari.extension.settings.getItem("eyen"), readerlargestyle:safari.extension.settings.getItem("readerlargestyle"), viewcount:safari.extension.settings.getItem("viewcount"), lightimage:safari.extension.settings.getItem("lightimage"), lightimagea:safari.extension.settings.getItem("lightimagea"), lightimagen:safari.extension.settings.getItem("lightimagen"), eyealist:safari.extension.settings.getItem("eyealist"), excludedDomains:safari.extension.settings.getItem("excludedDomains"), mousespotlighto:safari.extension.settings.getItem("mousespotlighto"), mousespotlighta:safari.extension.settings.getItem("mousespotlighta"), mousespotlightc:safari.extension.settings.getItem("mousespotlightc"), nighttime:safari.extension.settings.getItem("nighttime"), begintime:safari.extension.settings.getItem("begintime"), endtime:safari.extension.settings.getItem("endtime"), addvideobutton:safari.extension.settings.getItem("addvideobutton"), likebar:safari.extension.settings.getItem("likebar"), ambilight:safari.extension.settings.getItem("ambilight"), ambilightrangeblurradius:safari.extension.settings.getItem("ambilightrangeblurradius"), ambilightrangespreadradius:safari.extension.settings.getItem("ambilightrangespreadradius"), mousespotlightt:safari.extension.settings.getItem("mousespotlightt"), ambilightfixcolor:safari.extension.settings.getItem("ambilightfixcolor"), ambilightvarcolor:safari.extension.settings.getItem("ambilightvarcolor"), ambilightcolorhex:safari.extension.settings.getItem("ambilightcolorhex"), ambilight4color:safari.extension.settings.getItem("ambilight4color"), ambilight1colorhex:safari.extension.settings.getItem("ambilight1colorhex"), ambilight2colorhex:safari.extension.settings.getItem("ambilight2colorhex"), ambilight3colorhex:safari.extension.settings.getItem("ambilight3colorhex"), ambilight4colorhex:safari.extension.settings.getItem("ambilight4colorhex"), password:safari.extension.settings.getItem("password"), enterpassword:safari.extension.settings.getItem("enterpassword"), noflash:safari.extension.settings.getItem("noflash"), hardflash:safari.extension.settings.getItem("hardflash"), ecosaver:safari.extension.settings.getItem("ecosaver"), ecosavertime:safari.extension.settings.getItem("ecosavertime"), dynamic:safari.extension.settings.getItem("dynamic"), dynamic1:safari.extension.settings.getItem("dynamic1"), dynamic2:safari.extension.settings.getItem("dynamic2"), dynamic3:safari.extension.settings.getItem("dynamic3"), dynamic4:safari.extension.settings.getItem("dynamic4"), dynamic5:safari.extension.settings.getItem("dynamic5"), dynamic6:safari.extension.settings.getItem("dynamic6"), dynamic7:safari.extension.settings.getItem("dynamic7"), dynamic8:safari.extension.settings.getItem("dynamic8"), dynamic9:safari.extension.settings.getItem("dynamic9"), dynamic10:safari.extension.settings.getItem("dynamic10"), hoveroptiondyn5:safari.extension.settings.getItem("hoveroptiondyn5"), autoplayonly:safari.extension.settings.getItem("autoplayonly"), autoplayDomains:safari.extension.settings.getItem("autoplayDomains"), blur:safari.extension.settings.getItem("blur"), youtubequality:safari.extension.settings.getItem("youtubequality"), maxquality:safari.extension.settings.getItem("maxquality"), autowidthyoutube:safari.extension.settings.getItem("autowidthyoutube"), customqualityyoutube:safari.extension.settings.getItem("customqualityyoutube"), cinemaontop:safari.extension.settings.getItem("cinemaontop"), alllightsoff:safari.extension.settings.getItem("alllightsoff"), spotlightradius:safari.extension.settings.getItem("spotlightradius"), atmosphereonly:safari.extension.settings.getItem("atmosphereonly"), atmosphereDomains:safari.extension.settings.getItem("atmosphereDomains"), optionskipremember:safari.extension.settings.getItem("optionskipremember"), countremember:safari.extension.settings.getItem("countremember"), nighttheme:safari.extension.settings.getItem("nighttheme"), nightonly:safari.extension.settings.getItem("nightonly"), nightenabletheme:safari.extension.settings.getItem("nightenabletheme"), nightDomains:safari.extension.settings.getItem("nightDomains"), autoplaydelay:safari.extension.settings.getItem("autoplaydelay"), autoplaydelaytime:safari.extension.settings.getItem("autoplaydelaytime"), motion:safari.extension.settings.getItem("motion"), lightimagelin:safari.extension.settings.getItem("lightimagelin"), linearsq:safari.extension.settings.getItem("linearsq"), colora:safari.extension.settings.getItem("colora"), intervallina:safari.extension.settings.getItem("intervallina"), colorb:safari.extension.settings.getItem("colorb"), intervallinb:safari.extension.settings.getItem("intervallinb"), speech:safari.extension.settings.getItem("speech"), speechlang:safari.extension.settings.getItem("speechlang"), speechcountry:safari.extension.settings.getItem("speechcountry"), atmosvivid:safari.extension.settings.getItem("atmosvivid"), cammotiononly:safari.extension.settings.getItem("cammotiononly"), speechonly:safari.extension.settings.getItem("speechonly"), autoplaychecklistwhite:safari.extension.settings.getItem("autoplaychecklistwhite"), autoplaychecklistblack:safari.extension.settings.getItem("autoplaychecklistblack"), cammotionDomains:safari.extension.settings.getItem("cammotionDomains"), speechDomains:safari.extension.settings.getItem("speechDomains"), reviewedlastonversion:safari.extension.settings.getItem("reviewedlastonversion"), applastonversion:safari.extension.settings.getItem("applastonversion"), mobilelastonversion:safari.extension.settings.getItem("mobilelastonversion"), autostop:safari.extension.settings.getItem("autostop"), autostoponly:safari.extension.settings.getItem("autostoponly"), autostopchecklistwhite:safari.extension.settings.getItem("autostopchecklistwhite"), autostopchecklistblack:safari.extension.settings.getItem("autostopchecklistblack"), nighthover:safari.extension.settings.getItem("nighthover"), nightmodechecklistwhite:safari.extension.settings.getItem("nightmodechecklistwhite"), nightmodechecklistblack:safari.extension.settings.getItem("nightmodechecklistblack"), nmtopleft:safari.extension.settings.getItem("nmtopleft"), nmtopright:safari.extension.settings.getItem("nmtopright"), nmbottomright:safari.extension.settings.getItem("nmbottomright"), nmbottomleft:safari.extension.settings.getItem("nmbottomleft"), nmcustom:safari.extension.settings.getItem("nmcustom"), nmcustomx: safari.extension.settings.getItem("nmcustomx"), nmcustomy: safari.extension.settings.getItem("nmcustomy"), nightactivetime:safari.extension.settings.getItem("nightactivetime"), nmbegintime:safari.extension.settings.getItem("nmbegintime"), nmendtime:safari.extension.settings.getItem("nmendtime"), lampandnightmode:safari.extension.settings.getItem("lampandnightmode"), eyechecklistwhite:safari.extension.settings.getItem("eyechecklistwhite"), eyechecklistblack:safari.extension.settings.getItem("eyechecklistblack"), autostopDomains:safari.extension.settings.getItem("autostopDomains"), nightmodebck:safari.extension.settings.getItem("nightmodebck"), nightmodetxt:safari.extension.settings.getItem("nightmodetxt"), no360youtube:safari.extension.settings.getItem("no360youtube"), videotool:safari.extension.settings.getItem("videotool"), reflection:safari.extension.settings.getItem("reflection"), reflectionamount:safari.extension.settings.getItem("reflectionamount"), videotoolonly:safari.extension.settings.getItem("videotoolonly"), videotoolchecklistwhite:safari.extension.settings.getItem("videotoolchecklistwhite"), videotoolchecklistblack:safari.extension.settings.getItem("videotoolchecklistblack"), videotoolDomains:safari.extension.settings.getItem("videotoolDomains")
		});
	}
	else if (e.name === "update_setting") {
		var lightcolor = e.message.lightcolor;
        var interval = e.message.interval;
		var fadein = e.message.fadein;
		var fadeout = e.message.fadeout;
		var autoplay = e.message.autoplay;
		var eastereggs = e.message.eastereggs;
		var suggestions = e.message.suggestions;
		var playlist = e.message.playlist;
		var sharebutton = e.message.sharebutton;
		var videoheadline = e.message.videoheadline;  
		var flash = e.message.flash;
		var head = e.message.head;
		var infobar = e.message.infobar;
		var likebutton = e.message.likebutton;
		var shortcutlight = e.message.shortcutlight;
		var readera = e.message.readera;	  
		var readern = e.message.readern;
		var eyea = e.message.eyea;	  
		var eyen = e.message.eyen;
		var readerlargestyle = e.message.readerlargestyle;
		var viewcount = e.message.viewcount;
		var lightimage = e.message.lightimage;	
		var lightimagea = e.message.lightimagea;	
		var lightimagen = e.message.lightimagen;	
		var eyealist = e.message.eyealist;			
		var excludedDomains = e.message.excludedDomains;	
		var mousespotlighto = e.message.mousespotlighto;	
		var mousespotlighta = e.message.mousespotlighta;	
		var mousespotlightc = e.message.mousespotlightc;	
		var nighttime = e.message.nighttime;
		var begintime = e.message.begintime;
		var endtime = e.message.endtime;
		var addvideobutton = e.message.addvideobutton;
		var likebar = e.message.likebar;
		var ambilight = e.message.ambilight;
		var ambilightrangeblurradius = e.message.ambilightrangeblurradius;
		var ambilightrangespreadradius = e.message.ambilightrangespreadradius; 
		var mousespotlightt = e.message.mousespotlightt;
		var ambilightfixcolor = e.message.ambilightfixcolor;
		var ambilightvarcolor = e.message.ambilightvarcolor;
		var ambilightcolorhex = e.message.ambilightcolorhex;
		var ambilight4color = e.message.ambilight4color;
		var ambilight1colorhex = e.message.ambilight1colorhex;
		var ambilight2colorhex = e.message.ambilight2colorhex;
		var ambilight3colorhex = e.message.ambilight3colorhex;
		var ambilight4colorhex = e.message.ambilight4colorhex;
		var password = e.message.password;
		var enterpassword = e.message.enterpassword;
		var noflash = e.message.noflash;
		var hardflash = e.message.hardflash;
		var ecosaver = e.message.ecosaver;
		var ecosavertime = e.message.ecosavertime;
		var dynamic = e.message.dynamic;
		var dynamic1 = e.message.dynamic1;
		var dynamic2 = e.message.dynamic2;
		var dynamic3 = e.message.dynamic3;
		var dynamic4 = e.message.dynamic4;
		var dynamic5 = e.message.dynamic5;
        var dynamic6 = e.message.dynamic6;
		var dynamic7 = e.message.dynamic7;
		var dynamic8 = e.message.dynamic8;
		var dynamic9 = e.message.dynamic9;
		var dynamic10 = e.message.dynamic10;
		var hoveroptiondyn5 = e.message.hoveroptiondyn5;
		var autoplayonly = e.message.autoplayonly;
		var autoplayDomains = e.message.autoplayDomains;
		var blur = e.message.blur;
		var youtubequality = e.message.youtubequality;
		var maxquality = e.message.maxquality;
		var autowidthyoutube = e.message.autowidthyoutube;
		var customqualityyoutube = e.message.customqualityyoutube;
		var cinemaontop = e.message.cinemaontop;
		var alllightsoff = e.message.alllightsoff;
		var spotlightradius = e.message.spotlightradius;
		var atmosphereonly = e.message.atmosphereonly;
		var atmosphereDomains = e.message.atmosphereDomains;
		var optionskipremember = e.message.optionskipremember;
		var countremember = e.message.countremember;
		var nighttheme = e.message.nighttheme;
		var nightonly = e.message.nightonly;
		var nightenabletheme = e.message.nightenabletheme;
		var nightDomains = e.message.nightDomains;
		var autoplaydelay = e.message.autoplaydelay;
		var autoplaydelaytime = e.message.autoplaydelaytime;
		var motion = e.message.motion;
		var lightimagelin = e.message.lightimagelin;
		var linearsq = e.message.linearsq;
		var colora = e.message.colora;
		var intervallina = e.message.intervallina;
		var colorb = e.message.colorb;
		var intervallinb = e.message.intervallinb;
		var speech = e.message.speech;
		var speechlang = e.message.speechlang;
		var speechcountry = e.message.speechcountry;
		var atmosvivid = e.message.atmosvivid;
		var cammotiononly = e.message.cammotiononly;
		var speechonly = e.message.speechonly;
		var autoplaychecklistwhite = e.message.autoplaychecklistwhite;
		var autoplaychecklistblack = e.message.autoplaychecklistblack;
		var cammotionDomains = e.message.cammotionDomains;
		var speechDomains = e.message.speechDomains;
        var reviewedlastonversion = e.message.reviewedlastonversion;
        var applastonversion = e.message.applastonversion;
        var mobilelastonversion = e.message.mobilelastonversion;
        var autostop = e.message.autostop;
        var autostoponly = e.message.autostoponly;
        var autostopchecklistwhite = e.message.autostopchecklistwhite;
        var autostopchecklistblack = e.message.autostopchecklistblack;
        var nighthover = e.message.nighthover;
        var nightmodechecklistwhite = e.message.nightmodechecklistwhite;
        var nightmodechecklistblack = e.message.nightmodechecklistblack;
        var nmtopleft = e.message.nmtopleft;
        var nmtopright = e.message.nmtopright;
        var nmbottomright = e.message.nmbottomright;
        var nmbottomleft = e.message.nmbottomleft;
        var nmcustom = e.message.nmcustom;
        var nmcustomx = e.message.nmcustomx;
        var nmcustomy = e.message.nmcustomy;
        var nightactivetime = e.message.nightactivetime;
        var nmbegintime = e.message.nmbegintime;
        var nmendtime = e.message.nmendtime;
        var lampandnightmode = e.message.lampandnightmode;
        var eyechecklistwhite = e.message.eyechecklistwhite;
        var eyechecklistblack = e.message.eyechecklistblack;
        var autostopDomains = e.message.autostopDomains;
        var nightmodebck = e.message.nightmodebck;
        var nightmodetxt = e.message.nightmodetxt;
        var no360youtube = e.message.no360youtube;
        var videotool = e.message.videotool;
        var reflection = e.message.reflection;
        var reflectionamount = e.message.reflectionamount;
        var videotoolonly = e.message.videotoolonly;
        var videotoolchecklistwhite = e.message.videotoolchecklistwhite;
        var videotoolchecklistblack = e.message.videotoolchecklistblack;
        var videotoolDomains = e.message.videotoolDomains;

		// save it
		safari.extension.settings.lightcolor = lightcolor;
		safari.extension.settings.interval = interval;
		safari.extension.settings.fadein = fadein;
		safari.extension.settings.fadeout = fadeout;
		safari.extension.settings.autoplay = autoplay;
		safari.extension.settings.eastereggs = eastereggs;
		safari.extension.settings.suggestions = suggestions;
		safari.extension.settings.playlist = playlist;
		safari.extension.settings.sharebutton = sharebutton;
		safari.extension.settings.videoheadline = videoheadline;
		safari.extension.settings.flash = flash;
		safari.extension.settings.head = head;
		safari.extension.settings.infobar = infobar;
		safari.extension.settings.likebutton = likebutton;
		safari.extension.settings.shortcutlight = shortcutlight;
		safari.extension.settings.readera = readera;
		safari.extension.settings.readern = readern;
		safari.extension.settings.eyea = eyea;
		safari.extension.settings.eyen = eyen;
		safari.extension.settings.readerlargestyle = readerlargestyle;		
		safari.extension.settings.viewcount = viewcount;		
		safari.extension.settings.lightimage = lightimage;
		safari.extension.settings.lightimagea = lightimagea;
		safari.extension.settings.lightimagen = lightimagen;		
		safari.extension.settings.eyealist = eyealist;
		safari.extension.settings.excludedDomains = excludedDomains;
		safari.extension.settings.mousespotlighto = mousespotlighto;
		safari.extension.settings.mousespotlighta = mousespotlighta;
		safari.extension.settings.mousespotlightc = mousespotlightc;
		safari.extension.settings.nighttime = nighttime;
		safari.extension.settings.begintime = begintime;
		safari.extension.settings.endtime = endtime;
		safari.extension.settings.addvideobutton = addvideobutton;
		safari.extension.settings.likebar = likebar;
		safari.extension.settings.ambilight = ambilight;
		safari.extension.settings.ambilightrangeblurradius = ambilightrangeblurradius;
		safari.extension.settings.ambilightrangespreadradius = ambilightrangespreadradius; 
		safari.extension.settings.mousespotlightt = mousespotlightt;
		safari.extension.settings.ambilightfixcolor = ambilightfixcolor;
		safari.extension.settings.ambilightvarcolor = ambilightvarcolor;
		safari.extension.settings.ambilightcolorhex = ambilightcolorhex;
		safari.extension.settings.ambilight4color = ambilight4color;
		safari.extension.settings.ambilight1colorhex = ambilight1colorhex;
		safari.extension.settings.ambilight2colorhex = ambilight2colorhex;
		safari.extension.settings.ambilight3colorhex = ambilight3colorhex;
		safari.extension.settings.ambilight4colorhex = ambilight4colorhex;
		safari.extension.settings.password = password;
		safari.extension.settings.enterpassword = enterpassword;
		safari.extension.settings.noflash = noflash;
		safari.extension.settings.hardflash = hardflash;
		safari.extension.settings.ecosaver = ecosaver;
		safari.extension.settings.ecosavertime = ecosavertime;
		safari.extension.settings.dynamic = dynamic;
		safari.extension.settings.dynamic1 = dynamic1;
		safari.extension.settings.dynamic2 = dynamic2;
		safari.extension.settings.dynamic3 = dynamic3;
		safari.extension.settings.dynamic4 = dynamic4;
		safari.extension.settings.dynamic5 = dynamic5;
        safari.extension.settings.dynamic6 = dynamic6;
		safari.extension.settings.dynamic7 = dynamic7;
		safari.extension.settings.dynamic8 = dynamic8;
		safari.extension.settings.dynamic9 = dynamic9;
		safari.extension.settings.dynamic10 = dynamic10;
		safari.extension.settings.hoveroptiondyn5 = hoveroptiondyn5;
		safari.extension.settings.autoplayonly = autoplayonly;
		safari.extension.settings.autoplayDomains = autoplayDomains;
		safari.extension.settings.blur = blur;
		safari.extension.settings.youtubequality = youtubequality;
		safari.extension.settings.maxquality = maxquality;
		safari.extension.settings.autowidthyoutube = autowidthyoutube;
		safari.extension.settings.customqualityyoutube = customqualityyoutube;
		safari.extension.settings.cinemaontop = cinemaontop;
		safari.extension.settings.alllightsoff = alllightsoff;
		safari.extension.settings.spotlightradius = spotlightradius;
		safari.extension.settings.atmosphereonly = atmosphereonly;
		safari.extension.settings.atmosphereDomains = atmosphereDomains;
		safari.extension.settings.optionskipremember = optionskipremember;
		safari.extension.settings.countremember = countremember;
		safari.extension.settings.nighttheme = nighttheme;
		safari.extension.settings.nightonly = nightonly;
		safari.extension.settings.nightenabletheme = nightenabletheme;
		safari.extension.settings.nightDomains = nightDomains;
		safari.extension.settings.autoplaydelay = autoplaydelay;
		safari.extension.settings.autoplaydelaytime = autoplaydelaytime;
		safari.extension.settings.motion = motion;
		safari.extension.settings.lightimagelin = lightimagelin;
		safari.extension.settings.linearsq = linearsq;
		safari.extension.settings.colora = colora;
		safari.extension.settings.intervallina = intervallina;
		safari.extension.settings.colorb = colorb;
		safari.extension.settings.intervallinb = intervallinb;
		safari.extension.settings.speech = speech;
		safari.extension.settings.speechlang = speechlang;
		safari.extension.settings.speechcountry = speechcountry;
		safari.extension.settings.atmosvivid = atmosvivid;
		safari.extension.settings.cammotiononly = cammotiononly;
		safari.extension.settings.speechonly = speechonly;
		safari.extension.settings.autoplaychecklistwhite = autoplaychecklistwhite;
		safari.extension.settings.autoplaychecklistblack = autoplaychecklistblack;
		safari.extension.settings.cammotionDomains = cammotionDomains;
		safari.extension.settings.speechDomains = speechDomains;
        safari.extension.settings.reviewedlastonversion = reviewedlastonversion;
        safari.extension.settings.applastonversion = applastonversion;
        safari.extension.settings.mobilelastonversion = mobilelastonversion;
        safari.extension.settings.autostop = autostop;
        safari.extension.settings.autostoponly = autostoponly;
        safari.extension.settings.autostopchecklistwhite = autostopchecklistwhite;
        safari.extension.settings.autostopchecklistblack = autostopchecklistblack;
        safari.extension.settings.nighthover = nighthover;
        safari.extension.settings.nightmodechecklistwhite = nightmodechecklistwhite;
        safari.extension.settings.nightmodechecklistblack = nightmodechecklistblack;
        safari.extension.settings.nmtopleft = nmtopleft;
        safari.extension.settings.nmtopright = nmtopright;
        safari.extension.settings.nmbottomright = nmbottomright;
        safari.extension.settings.nmbottomleft = nmbottomleft;
        safari.extension.settings.nmcustom = nmcustom;
        safari.extension.settings.nmcustomx = nmcustomx;
        safari.extension.settings.nmcustomy = nmcustomy;
        safari.extension.settings.nightactivetime = nightactivetime;
        safari.extension.settings.nmbegintime = nmbegintime;
        safari.extension.settings.nmendtime = nmendtime;
        safari.extension.settings.lampandnightmode = lampandnightmode;
        safari.extension.settings.eyechecklistwhite = eyechecklistwhite;
        safari.extension.settings.eyechecklistblack = eyechecklistblack;
        safari.extension.settings.autostopDomains = autostopDomains;
		safari.extension.settings.nightmodebck = nightmodebck;
        safari.extension.settings.nightmodetxt = nightmodetxt;
        safari.extension.settings.no360youtube = no360youtube;
        safari.extension.settings.videotool = videotool;
        safari.extension.settings.reflection = reflection;
        safari.extension.settings.reflectionamount = reflectionamount;
        safari.extension.settings.videotoolonly = videotoolonly;
        safari.extension.settings.videotoolchecklistwhite = videotoolchecklistwhite;
        safari.extension.settings.videotoolchecklistblack = videotoolchecklistblack;
        safari.extension.settings.videotoolDomains = videotoolDomains;
        
        // all tabs
        for (var i = 0; i < safari.application.browserWindows.length; i++)
        {
            var browserWindow = safari.application.browserWindows[i];
            for (var j = 0; j < browserWindow.tabs.length; j++)
            {
                var tab = browserWindow.tabs[j];
                tab.page.dispatchMessage("setSettings", {lightcolor:safari.extension.settings.getItem("lightcolor"), interval:safari.extension.settings.getItem("interval"), fadein:safari.extension.settings.getItem("fadein"), fadeout:safari.extension.settings.getItem("fadeout"), autoplay:safari.extension.settings.getItem("autoplay"), eastereggs:safari.extension.settings.getItem("eastereggs"), suggestions:safari.extension.settings.getItem("suggestions"), playlist:safari.extension.settings.getItem("playlist"), sharebutton:safari.extension.settings.getItem("sharebutton"), videoheadline:safari.extension.settings.getItem("videoheadline"), flash:safari.extension.settings.getItem("flash"), head:safari.extension.settings.getItem("head"), infobar:safari.extension.settings.getItem("infobar"), likebutton:safari.extension.settings.getItem("likebutton"), shortcutlight:safari.extension.settings.getItem("shortcutlight"), readera:safari.extension.settings.getItem("readera"), readern:safari.extension.settings.getItem("readern"), eyea:safari.extension.settings.getItem("eyea"), eyen:safari.extension.settings.getItem("eyen"), readerlargestyle:safari.extension.settings.getItem("readerlargestyle"), viewcount:safari.extension.settings.getItem("viewcount"), lightimage:safari.extension.settings.getItem("lightimage"), lightimagea:safari.extension.settings.getItem("lightimagea"), lightimagen:safari.extension.settings.getItem("lightimagen"), eyealist:safari.extension.settings.getItem("eyealist"), excludedDomains:safari.extension.settings.getItem("excludedDomains"), mousespotlighto:safari.extension.settings.getItem("mousespotlighto"), mousespotlighta:safari.extension.settings.getItem("mousespotlighta"), mousespotlightc:safari.extension.settings.getItem("mousespotlightc"), nighttime:safari.extension.settings.getItem("nighttime"), begintime:safari.extension.settings.getItem("begintime"), endtime:safari.extension.settings.getItem("endtime"), addvideobutton:safari.extension.settings.getItem("addvideobutton"), likebar:safari.extension.settings.getItem("likebar"), ambilight:safari.extension.settings.getItem("ambilight"), ambilightrangeblurradius:safari.extension.settings.getItem("ambilightrangeblurradius"), ambilightrangespreadradius:safari.extension.settings.getItem("ambilightrangespreadradius"), mousespotlightt:safari.extension.settings.getItem("mousespotlightt"), ambilightfixcolor:safari.extension.settings.getItem("ambilightfixcolor"), ambilightvarcolor:safari.extension.settings.getItem("ambilightvarcolor"), ambilightcolorhex:safari.extension.settings.getItem("ambilightcolorhex"), ambilight4color:safari.extension.settings.getItem("ambilight4color"), ambilight1colorhex:safari.extension.settings.getItem("ambilight1colorhex"), ambilight2colorhex:safari.extension.settings.getItem("ambilight2colorhex"), ambilight3colorhex:safari.extension.settings.getItem("ambilight3colorhex"), ambilight4colorhex:safari.extension.settings.getItem("ambilight4colorhex"), password:safari.extension.settings.getItem("password"), enterpassword:safari.extension.settings.getItem("enterpassword"), noflash:safari.extension.settings.getItem("noflash"), hardflash:safari.extension.settings.getItem("hardflash"), ecosaver:safari.extension.settings.getItem("ecosaver"), ecosavertime:safari.extension.settings.getItem("ecosavertime"), dynamic:safari.extension.settings.getItem("dynamic"), dynamic1:safari.extension.settings.getItem("dynamic1"), dynamic2:safari.extension.settings.getItem("dynamic2"), dynamic3:safari.extension.settings.getItem("dynamic3"), dynamic4:safari.extension.settings.getItem("dynamic4"), dynamic5:safari.extension.settings.getItem("dynamic5"), dynamic6:safari.extension.settings.getItem("dynamic6"), dynamic7:safari.extension.settings.getItem("dynamic7"), dynamic8:safari.extension.settings.getItem("dynamic8"), dynamic9:safari.extension.settings.getItem("dynamic9"), dynamic10:safari.extension.settings.getItem("dynamic10"), hoveroptiondyn5:safari.extension.settings.getItem("hoveroptiondyn5"), autoplayonly:safari.extension.settings.getItem("autoplayonly"), autoplayDomains:safari.extension.settings.getItem("autoplayDomains"), blur:safari.extension.settings.getItem("blur"), youtubequality:safari.extension.settings.getItem("youtubequality"), maxquality:safari.extension.settings.getItem("maxquality"), autowidthyoutube:safari.extension.settings.getItem("autowidthyoutube"), customqualityyoutube:safari.extension.settings.getItem("customqualityyoutube"), cinemaontop:safari.extension.settings.getItem("cinemaontop"), alllightsoff:safari.extension.settings.getItem("alllightsoff"), spotlightradius:safari.extension.settings.getItem("spotlightradius"), atmosphereonly:safari.extension.settings.getItem("atmosphereonly"), atmosphereDomains:safari.extension.settings.getItem("atmosphereDomains"), optionskipremember:safari.extension.settings.getItem("optionskipremember"), countremember:safari.extension.settings.getItem("countremember"), nighttheme:safari.extension.settings.getItem("nighttheme"), nightonly:safari.extension.settings.getItem("nightonly"), nightenabletheme:safari.extension.settings.getItem("nightenabletheme"), nightDomains:safari.extension.settings.getItem("nightDomains"), autoplaydelay:safari.extension.settings.getItem("autoplaydelay"), autoplaydelaytime:safari.extension.settings.getItem("autoplaydelaytime"), motion:safari.extension.settings.getItem("motion"), lightimagelin:safari.extension.settings.getItem("lightimagelin"), linearsq:safari.extension.settings.getItem("linearsq"), colora:safari.extension.settings.getItem("colora"), intervallina:safari.extension.settings.getItem("intervallina"), colorb:safari.extension.settings.getItem("colorb"), intervallinb:safari.extension.settings.getItem("intervallinb"), speech:safari.extension.settings.getItem("speech"), speechlang:safari.extension.settings.getItem("speechlang"), speechcountry:safari.extension.settings.getItem("speechcountry"), atmosvivid:safari.extension.settings.getItem("atmosvivid"), cammotiononly:safari.extension.settings.getItem("cammotiononly"), speechonly:safari.extension.settings.getItem("speechonly"), autoplaychecklistwhite:safari.extension.settings.getItem("autoplaychecklistwhite"), autoplaychecklistblack:safari.extension.settings.getItem("autoplaychecklistblack"), cammotionDomains:safari.extension.settings.getItem("cammotionDomains"), speechDomains:safari.extension.settings.getItem("speechDomains"), reviewedlastonversion:safari.extension.settings.getItem("reviewedlastonversion"), applastonversion:safari.extension.settings.getItem("applastonversion"), mobilelastonversion:safari.extension.settings.getItem("mobilelastonversion"), autostop:safari.extension.settings.getItem("autostop"), autostoponly:safari.extension.settings.getItem("autostoponly"), autostopchecklistwhite:safari.extension.settings.getItem("autostopchecklistwhite"), autostopchecklistblack:safari.extension.settings.getItem("autostopchecklistblack"), nighthover:safari.extension.settings.getItem("nighthover"), nightmodechecklistwhite:safari.extension.settings.getItem("nightmodechecklistwhite"), nightmodechecklistblack:safari.extension.settings.getItem("nightmodechecklistblack"), nmtopleft:safari.extension.settings.getItem("nmtopleft"), nmtopright:safari.extension.settings.getItem("nmtopright"), nmbottomright:safari.extension.settings.getItem("nmbottomright"), nmbottomleft:safari.extension.settings.getItem("nmbottomleft"), nmcustom:safari.extension.settings.getItem("nmcustom"), nmcustomx: safari.extension.settings.getItem("nmcustomx"), nmcustomy: safari.extension.settings.getItem("nmcustomy"), nightactivetime:safari.extension.settings.getItem("nightactivetime"), nmbegintime:safari.extension.settings.getItem("nmbegintime"), nmendtime:safari.extension.settings.getItem("nmendtime"), lampandnightmode:safari.extension.settings.getItem("lampandnightmode"), eyechecklistwhite:safari.extension.settings.getItem("eyechecklistwhite"), eyechecklistblack:safari.extension.settings.getItem("eyechecklistblack"), autostopDomains:safari.extension.settings.getItem("autostopDomains"), nightmodebck:safari.extension.settings.getItem("nightmodebck"), nightmodetxt:safari.extension.settings.getItem("nightmodetxt"), no360youtube:safari.extension.settings.getItem("no360youtube"), videotool:safari.extension.settings.getItem("videotool"), reflection:safari.extension.settings.getItem("reflection"), reflectionamount:safari.extension.settings.getItem("reflectionamount"), videotoolonly:safari.extension.settings.getItem("videotoolonly"), videotoolchecklistwhite:safari.extension.settings.getItem("videotoolchecklistwhite"), videotoolchecklistblack:safari.extension.settings.getItem("videotoolchecklistblack"), videotoolDomains:safari.extension.settings.getItem("videotoolDomains")});
            }
        }
    }
	else if (e.name === "readersaveme") {interval = localStorage.setItem("interval", e.message);
		// send back all settings
		e.target.page.dispatchMessage("setSettings", {lightcolor:safari.extension.settings.getItem("lightcolor"), interval:safari.extension.settings.getItem("interval"), fadein:safari.extension.settings.getItem("fadein"), fadeout:safari.extension.settings.getItem("fadeout"), autoplay:safari.extension.settings.getItem("autoplay"), eastereggs:safari.extension.settings.getItem("eastereggs"), suggestions:safari.extension.settings.getItem("suggestions"), playlist:safari.extension.settings.getItem("playlist"), sharebutton:safari.extension.settings.getItem("sharebutton"), videoheadline:safari.extension.settings.getItem("videoheadline"), flash:safari.extension.settings.getItem("flash"), head:safari.extension.settings.getItem("head"), infobar:safari.extension.settings.getItem("infobar"), likebutton:safari.extension.settings.getItem("likebutton"), shortcutlight:safari.extension.settings.getItem("shortcutlight"), readera:safari.extension.settings.getItem("readera"), readern:safari.extension.settings.getItem("readern"), eyea:safari.extension.settings.getItem("eyea"), eyen:safari.extension.settings.getItem("eyen"), readerlargestyle:safari.extension.settings.getItem("readerlargestyle"), viewcount:safari.extension.settings.getItem("viewcount"), lightimage:safari.extension.settings.getItem("lightimage"), lightimagea:safari.extension.settings.getItem("lightimagea"), lightimagen:safari.extension.settings.getItem("lightimagen"), eyealist:safari.extension.settings.getItem("eyealist"), excludedDomains:safari.extension.settings.getItem("excludedDomains"), mousespotlighto:safari.extension.settings.getItem("mousespotlighto"), mousespotlighta:safari.extension.settings.getItem("mousespotlighta"), mousespotlightc:safari.extension.settings.getItem("mousespotlightc"), nighttime:safari.extension.settings.getItem("nighttime"), begintime:safari.extension.settings.getItem("begintime"), endtime:safari.extension.settings.getItem("endtime"), addvideobutton:safari.extension.settings.getItem("addvideobutton"), likebar:safari.extension.settings.getItem("likebar"), ambilight:safari.extension.settings.getItem("ambilight"), ambilightrangeblurradius:safari.extension.settings.getItem("ambilightrangeblurradius"), ambilightrangespreadradius:safari.extension.settings.getItem("ambilightrangespreadradius"), mousespotlightt:safari.extension.settings.getItem("mousespotlightt"), ambilightfixcolor:safari.extension.settings.getItem("ambilightfixcolor"), ambilightvarcolor:safari.extension.settings.getItem("ambilightvarcolor"), ambilightcolorhex:safari.extension.settings.getItem("ambilightcolorhex"), ambilight4color:safari.extension.settings.getItem("ambilight4color"), ambilight1colorhex:safari.extension.settings.getItem("ambilight1colorhex"), ambilight2colorhex:safari.extension.settings.getItem("ambilight2colorhex"), ambilight3colorhex:safari.extension.settings.getItem("ambilight3colorhex"), ambilight4colorhex:safari.extension.settings.getItem("ambilight4colorhex"), password:safari.extension.settings.getItem("password"), enterpassword:safari.extension.settings.getItem("enterpassword"), noflash:safari.extension.settings.getItem("noflash"), hardflash:safari.extension.settings.getItem("hardflash"), ecosaver:safari.extension.settings.getItem("ecosaver"), ecosavertime:safari.extension.settings.getItem("ecosavertime"), dynamic:safari.extension.settings.getItem("dynamic"), dynamic1:safari.extension.settings.getItem("dynamic1"), dynamic2:safari.extension.settings.getItem("dynamic2"), dynamic3:safari.extension.settings.getItem("dynamic3"), dynamic4:safari.extension.settings.getItem("dynamic4"), dynamic5:safari.extension.settings.getItem("dynamic5"), dynamic6:safari.extension.settings.getItem("dynamic6"), dynamic7:safari.extension.settings.getItem("dynamic7"), dynamic8:safari.extension.settings.getItem("dynamic8"), dynamic9:safari.extension.settings.getItem("dynamic9"), dynamic10:safari.extension.settings.getItem("dynamic10"), hoveroptiondyn5:safari.extension.settings.getItem("hoveroptiondyn5"), autoplayonly:safari.extension.settings.getItem("autoplayonly"), autoplayDomains:safari.extension.settings.getItem("autoplayDomains"), blur:safari.extension.settings.getItem("blur"), youtubequality:safari.extension.settings.getItem("youtubequality"), maxquality:safari.extension.settings.getItem("maxquality"), autowidthyoutube:safari.extension.settings.getItem("autowidthyoutube"), customqualityyoutube:safari.extension.settings.getItem("customqualityyoutube"), cinemaontop:safari.extension.settings.getItem("cinemaontop"), alllightsoff:safari.extension.settings.getItem("alllightsoff"), spotlightradius:safari.extension.settings.getItem("spotlightradius"), atmosphereonly:safari.extension.settings.getItem("atmosphereonly"), atmosphereDomains:safari.extension.settings.getItem("atmosphereDomains"), optionskipremember:safari.extension.settings.getItem("optionskipremember"), countremember:safari.extension.settings.getItem("countremember"), nighttheme:safari.extension.settings.getItem("nighttheme"), nightonly:safari.extension.settings.getItem("nightonly"), nightenabletheme:safari.extension.settings.getItem("nightenabletheme"), nightDomains:safari.extension.settings.getItem("nightDomains"), autoplaydelay:safari.extension.settings.getItem("autoplaydelay"), autoplaydelaytime:safari.extension.settings.getItem("autoplaydelaytime"), motion:safari.extension.settings.getItem("motion"), lightimagelin:safari.extension.settings.getItem("lightimagelin"), linearsq:safari.extension.settings.getItem("linearsq"), colora:safari.extension.settings.getItem("colora"), intervallina:safari.extension.settings.getItem("intervallina"), colorb:safari.extension.settings.getItem("colorb"), intervallinb:safari.extension.settings.getItem("intervallinb"), speech:safari.extension.settings.getItem("speech"), speechlang:safari.extension.settings.getItem("speechlang"), speechcountry:safari.extension.settings.getItem("speechcountry"), atmosvivid:safari.extension.settings.getItem("atmosvivid"), cammotiononly:safari.extension.settings.getItem("cammotiononly"), speechonly:safari.extension.settings.getItem("speechonly"), autoplaychecklistwhite:safari.extension.settings.getItem("autoplaychecklistwhite"), autoplaychecklistblack:safari.extension.settings.getItem("autoplaychecklistblack"), cammotionDomains:safari.extension.settings.getItem("cammotionDomains"), speechDomains:safari.extension.settings.getItem("speechDomains"), reviewedlastonversion:safari.extension.settings.getItem("reviewedlastonversion"), applastonversion:safari.extension.settings.getItem("applastonversion"), mobilelastonversion:safari.extension.settings.getItem("mobilelastonversion"), autostop:safari.extension.settings.getItem("autostop"), autostoponly:safari.extension.settings.getItem("autostoponly"), autostopchecklistwhite:safari.extension.settings.getItem("autostopchecklistwhite"), autostopchecklistblack:safari.extension.settings.getItem("autostopchecklistblack"), nighthover:safari.extension.settings.getItem("nighthover"), nightmodechecklistwhite:safari.extension.settings.getItem("nightmodechecklistwhite"), nightmodechecklistblack:safari.extension.settings.getItem("nightmodechecklistblack"), nmtopleft:safari.extension.settings.getItem("nmtopleft"), nmtopright:safari.extension.settings.getItem("nmtopright"), nmbottomright:safari.extension.settings.getItem("nmbottomright"), nmbottomleft:safari.extension.settings.getItem("nmbottomleft"), nmcustom:safari.extension.settings.getItem("nmcustom"), nmcustomx: safari.extension.settings.getItem("nmcustomx"), nmcustomy: safari.extension.settings.getItem("nmcustomy"), nightactivetime:safari.extension.settings.getItem("nightactivetime"), nmbegintime:safari.extension.settings.getItem("nmbegintime"), nmendtime:safari.extension.settings.getItem("nmendtime"), lampandnightmode:safari.extension.settings.getItem("lampandnightmode"), eyechecklistwhite:safari.extension.settings.getItem("eyechecklistwhite"), eyechecklistblack:safari.extension.settings.getItem("eyechecklistblack"), autostopDomains:safari.extension.settings.getItem("autostopDomains"), nightmodebck:safari.extension.settings.getItem("nightmodebck"), nightmodetxt:safari.extension.settings.getItem("nightmodetxt"), no360youtube:safari.extension.settings.getItem("no360youtube"), videotool:safari.extension.settings.getItem("videotool"), reflection:safari.extension.settings.getItem("reflection"), reflectionamount:safari.extension.settings.getItem("reflectionamount"), videotoolonly:safari.extension.settings.getItem("videotoolonly"), videotoolchecklistwhite:safari.extension.settings.getItem("videotoolchecklistwhite"), videotoolchecklistblack:safari.extension.settings.getItem("videotoolchecklistblack"), videotoolDomains:safari.extension.settings.getItem("videotoolDomains")});
	}
	else if (e.name === "readerlargestyle") {readerlargestyle = localStorage.setItem("readerlargestyle", e.message);
		// send back all settings
		e.target.page.dispatchMessage("setSettings", {lightcolor:safari.extension.settings.getItem("lightcolor"), interval:safari.extension.settings.getItem("interval"), fadein:safari.extension.settings.getItem("fadein"), fadeout:safari.extension.settings.getItem("fadeout"), autoplay:safari.extension.settings.getItem("autoplay"), eastereggs:safari.extension.settings.getItem("eastereggs"), suggestions:safari.extension.settings.getItem("suggestions"), playlist:safari.extension.settings.getItem("playlist"), sharebutton:safari.extension.settings.getItem("sharebutton"), videoheadline:safari.extension.settings.getItem("videoheadline"), flash:safari.extension.settings.getItem("flash"), head:safari.extension.settings.getItem("head"), infobar:safari.extension.settings.getItem("infobar"), likebutton:safari.extension.settings.getItem("likebutton"), shortcutlight:safari.extension.settings.getItem("shortcutlight"), readera:safari.extension.settings.getItem("readera"), readern:safari.extension.settings.getItem("readern"), eyea:safari.extension.settings.getItem("eyea"), eyen:safari.extension.settings.getItem("eyen"), readerlargestyle:safari.extension.settings.getItem("readerlargestyle"), viewcount:safari.extension.settings.getItem("viewcount"), lightimage:safari.extension.settings.getItem("lightimage"), lightimagea:safari.extension.settings.getItem("lightimagea"), lightimagen:safari.extension.settings.getItem("lightimagen"), eyealist:safari.extension.settings.getItem("eyealist"), excludedDomains:safari.extension.settings.getItem("excludedDomains"), mousespotlighto:safari.extension.settings.getItem("mousespotlighto"), mousespotlighta:safari.extension.settings.getItem("mousespotlighta"), mousespotlightc:safari.extension.settings.getItem("mousespotlightc"), nighttime:safari.extension.settings.getItem("nighttime"), begintime:safari.extension.settings.getItem("begintime"), endtime:safari.extension.settings.getItem("endtime"), addvideobutton:safari.extension.settings.getItem("addvideobutton"), likebar:safari.extension.settings.getItem("likebar"), ambilight:safari.extension.settings.getItem("ambilight"), ambilightrangeblurradius:safari.extension.settings.getItem("ambilightrangeblurradius"), ambilightrangespreadradius:safari.extension.settings.getItem("ambilightrangespreadradius"), mousespotlightt:safari.extension.settings.getItem("mousespotlightt"), ambilightfixcolor:safari.extension.settings.getItem("ambilightfixcolor"), ambilightvarcolor:safari.extension.settings.getItem("ambilightvarcolor"), ambilightcolorhex:safari.extension.settings.getItem("ambilightcolorhex"), ambilight4color:safari.extension.settings.getItem("ambilight4color"), ambilight1colorhex:safari.extension.settings.getItem("ambilight1colorhex"), ambilight2colorhex:safari.extension.settings.getItem("ambilight2colorhex"), ambilight3colorhex:safari.extension.settings.getItem("ambilight3colorhex"), ambilight4colorhex:safari.extension.settings.getItem("ambilight4colorhex"), password:safari.extension.settings.getItem("password"), enterpassword:safari.extension.settings.getItem("enterpassword"), noflash:safari.extension.settings.getItem("noflash"), hardflash:safari.extension.settings.getItem("hardflash"), ecosaver:safari.extension.settings.getItem("ecosaver"), ecosavertime:safari.extension.settings.getItem("ecosavertime"), dynamic:safari.extension.settings.getItem("dynamic"), dynamic1:safari.extension.settings.getItem("dynamic1"), dynamic2:safari.extension.settings.getItem("dynamic2"), dynamic3:safari.extension.settings.getItem("dynamic3"), dynamic4:safari.extension.settings.getItem("dynamic4"), dynamic5:safari.extension.settings.getItem("dynamic5"), dynamic6:safari.extension.settings.getItem("dynamic6"), dynamic7:safari.extension.settings.getItem("dynamic7"), dynamic8:safari.extension.settings.getItem("dynamic8"), dynamic9:safari.extension.settings.getItem("dynamic9"), dynamic10:safari.extension.settings.getItem("dynamic10"),hoveroptiondyn5:safari.extension.settings.getItem("hoveroptiondyn5"), autoplayonly:safari.extension.settings.getItem("autoplayonly"), autoplayDomains:safari.extension.settings.getItem("autoplayDomains"), blur:safari.extension.settings.getItem("blur"), youtubequality:safari.extension.settings.getItem("youtubequality"), maxquality:safari.extension.settings.getItem("maxquality"), autowidthyoutube:safari.extension.settings.getItem("autowidthyoutube"), customqualityyoutube:safari.extension.settings.getItem("customqualityyoutube"), cinemaontop:safari.extension.settings.getItem("cinemaontop"), alllightsoff:safari.extension.settings.getItem("alllightsoff"), spotlightradius:safari.extension.settings.getItem("spotlightradius"), atmosphereonly:safari.extension.settings.getItem("atmosphereonly"), atmosphereDomains:safari.extension.settings.getItem("atmosphereDomains"), optionskipremember:safari.extension.settings.getItem("optionskipremember"), countremember:safari.extension.settings.getItem("countremember"), nighttheme:safari.extension.settings.getItem("nighttheme"), nightonly:safari.extension.settings.getItem("nightonly"), nightenabletheme:safari.extension.settings.getItem("nightenabletheme"), nightDomains:safari.extension.settings.getItem("nightDomains"), autoplaydelay:safari.extension.settings.getItem("autoplaydelay"), autoplaydelaytime:safari.extension.settings.getItem("autoplaydelaytime"), motion:safari.extension.settings.getItem("motion"), lightimagelin:safari.extension.settings.getItem("lightimagelin"), linearsq:safari.extension.settings.getItem("linearsq"), colora:safari.extension.settings.getItem("colora"), intervallina:safari.extension.settings.getItem("intervallina"), colorb:safari.extension.settings.getItem("colorb"), intervallinb:safari.extension.settings.getItem("intervallinb"), speech:safari.extension.settings.getItem("speech"), speechlang:safari.extension.settings.getItem("speechlang"), speechcountry:safari.extension.settings.getItem("speechcountry"), atmosvivid:safari.extension.settings.getItem("atmosvivid"), cammotiononly:safari.extension.settings.getItem("cammotiononly"), speechonly:safari.extension.settings.getItem("speechonly"), autoplaychecklistwhite:safari.extension.settings.getItem("autoplaychecklistwhite"), autoplaychecklistblack:safari.extension.settings.getItem("autoplaychecklistblack"), cammotionDomains:safari.extension.settings.getItem("cammotionDomains"), speechDomains:safari.extension.settings.getItem("speechDomains"), reviewedlastonversion:safari.extension.settings.getItem("reviewedlastonversion"), applastonversion:safari.extension.settings.getItem("applastonversion"), mobilelastonversion:safari.extension.settings.getItem("mobilelastonversion"), autostop:safari.extension.settings.getItem("autostop"), autostoponly:safari.extension.settings.getItem("autostoponly"), autostopchecklistwhite:safari.extension.settings.getItem("autostopchecklistwhite"), autostopchecklistblack:safari.extension.settings.getItem("autostopchecklistblack"), nighthover:safari.extension.settings.getItem("nighthover"), nightmodechecklistwhite:safari.extension.settings.getItem("nightmodechecklistwhite"), nightmodechecklistblack:safari.extension.settings.getItem("nightmodechecklistblack"), nmtopleft:safari.extension.settings.getItem("nmtopleft"), nmtopright:safari.extension.settings.getItem("nmtopright"), nmbottomright:safari.extension.settings.getItem("nmbottomright"), nmbottomleft:safari.extension.settings.getItem("nmbottomleft"), nmcustom:safari.extension.settings.getItem("nmcustom"), nmcustomx: safari.extension.settings.getItem("nmcustomx"), nmcustomy: safari.extension.settings.getItem("nmcustomy"), nightactivetime:safari.extension.settings.getItem("nightactivetime"), nmbegintime:safari.extension.settings.getItem("nmbegintime"), nmendtime:safari.extension.settings.getItem("nmendtime"), lampandnightmode:safari.extension.settings.getItem("lampandnightmode"), eyechecklistwhite:safari.extension.settings.getItem("eyechecklistwhite"), eyechecklistblack:safari.extension.settings.getItem("eyechecklistblack"), autostopDomains:safari.extension.settings.getItem("autostopDomains"), nightmodebck:safari.extension.settings.getItem("nightmodebck"), nightmodetxt:safari.extension.settings.getItem("nightmodetxt"), no360youtube:safari.extension.settings.getItem("no360youtube"), videotool:safari.extension.settings.getItem("videotool"), reflection:safari.extension.settings.getItem("reflection"), reflectionamount:safari.extension.settings.getItem("reflectionamount"), videotoolonly:safari.extension.settings.getItem("videotoolonly"), videotoolchecklistwhite:safari.extension.settings.getItem("videotoolchecklistwhite"), videotoolchecklistblack:safari.extension.settings.getItem("videotoolchecklistblack"), videotoolDomains:safari.extension.settings.getItem("videotoolDomains")});
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
	}
	else if (e.name == "eyesaveme") {
		if(e.message == 'true'){localStorage.setItem("eyea", 'true');localStorage.setItem("eyen", 'false');safari.extension.settings.eyea = 'true';safari.extension.settings.eyen = 'false';}
		else{localStorage.setItem("eyea", 'false');localStorage.setItem("eyen", 'true');safari.extension.settings.eyea = 'false';safari.extension.settings.eyen = 'true';}
	}
	else if (e.name === "adddarkyoutube") {
		safari.application.activeBrowserWindow.activeTab.page.dispatchMessage("darkyt", "there");
	}
	else if (e.name === "addnormalyoutube") {
		safari.application.activeBrowserWindow.activeTab.page.dispatchMessage("normalyt", "there");
	}
	else if (e.name === "nmcustomx") {
		localStorage.setItem("nmcustomx", e.message);safari.extension.settings.nmcustomx = e.message;
	}
	else if (e.name === "nmcustomy") {
		localStorage.setItem("nmcustomy", e.message);safari.extension.settings.nmcustomy = e.message;
	}
}

// if event handlers are in the global HTML page,
// register with application:
safari.application.addEventListener("command", performCommand, false);
safari.application.addEventListener("validate", validateCommand, false);
safari.extension.settings.addEventListener("change", settingsChanged, false);
safari.application.addEventListener("message", waitForMessage, false);