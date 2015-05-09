//================================================
/*

Turn Off the Lights
The entire page will be fading to dark, so you can watch the videos as if you were in the cinema.
Copyright (C) 2015 Stefan vd
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
var default_opacity = 80;
var default_arangeblur = 70;
var default_arangespread = 20;

// Option to save current value to settings
function save_options(){
	window.localStorage['interval'] = $('interval').value;	
	window.localStorage['lightcolor'] = $('lightcolor').value;
	if($('autoplay').checked)window.localStorage['autoplay'] = 'true';
	else window.localStorage['autoplay'] = 'false';
	if($('playlist').checked)window.localStorage['playlist'] = 'true';
	else window.localStorage['playlist'] = 'false';
	if($('flash').checked)window.localStorage['flash'] = 'true';
	else window.localStorage['flash'] = 'false';
	if($('head').checked)window.localStorage['head'] = 'true';
	else window.localStorage['head'] = 'false';
	if($('fadein').checked)window.localStorage['fadein'] = 'true';
	else window.localStorage['fadein'] = 'false';
	if($('fadeout').checked)window.localStorage['fadeout'] = 'true';
	else window.localStorage['fadeout'] = 'false';
	if($('infobar').checked)window.localStorage['infobar'] = 'true';
	else window.localStorage['infobar'] = 'false';
	if($('sharebutton').checked)window.localStorage['sharebutton'] = 'true';
	else window.localStorage['sharebutton'] = 'false';
	if($('likebutton').checked)window.localStorage['likebutton'] = 'true';
	else window.localStorage['likebutton'] = 'false';
	if($('readera').checked)window.localStorage['readera'] = 'true';
	else window.localStorage['readera'] = 'false';
	if($('readern').checked)window.localStorage['readern'] = 'true';
	else window.localStorage['readern'] = 'false';
	if($('shortcutlight').checked)window.localStorage['shortcutlight'] = 'true';
	else window.localStorage['shortcutlight'] = 'false';
	if($('eyea').checked)window.localStorage['eyea'] = 'true';
	else window.localStorage['eyea'] = 'false';
	if($('eyen').checked)window.localStorage['eyen'] = 'true';
	else window.localStorage['eyen'] = 'false';
	if($('suggestions').checked)window.localStorage['suggestions'] = 'true';
	else window.localStorage['suggestions'] = 'false';
	if($('videoheadline').checked)window.localStorage['videoheadline'] = 'true';
	else window.localStorage['videoheadline'] = 'false';
	if($('eastereggs').checked)window.localStorage['eastereggs'] = 'true';
	else window.localStorage['eastereggs'] = 'false';
	if($('contextmenus').checked)window.localStorage['contextmenus'] = 'true';
	else window.localStorage['contextmenus'] = 'false';
	if($('viewcount').checked)window.localStorage['viewcount'] = 'true';
	else window.localStorage['viewcount'] = 'false';
	window.localStorage['lightimage'] = $('lightimage').value;	
	if($('lightimagea').checked)window.localStorage['lightimagea'] = 'true';
	else window.localStorage['lightimagea'] = 'false';
	if($('lightimagen').checked)window.localStorage['lightimagen'] = 'true';
	else window.localStorage['lightimagen'] = 'false';
	if($('eyealist').checked)window.localStorage['eyealist'] = 'true';
	else window.localStorage['eyealist'] = 'false';
	if($('mousespotlighto').checked)window.localStorage['mousespotlighto'] = 'true';
	else window.localStorage['mousespotlighto'] = 'false';
	if($('mousespotlighta').checked)window.localStorage['mousespotlighta'] = 'true';
	else window.localStorage['mousespotlighta'] = 'false';
	if($('mousespotlightc').checked)window.localStorage['mousespotlightc'] = 'true';
	else window.localStorage['mousespotlightc'] = 'false';
	if($('nighttime').checked)window.localStorage['nighttime'] = 'true';
	else window.localStorage['nighttime'] = 'false';
	window.localStorage['begintime'] = $('begintime').value;
	window.localStorage['endtime'] = $('endtime').value;
	if($('addvideobutton').checked)window.localStorage['addvideobutton'] = 'true';
	else window.localStorage['addvideobutton'] = 'false';
	if($('likebar').checked)window.localStorage['likebar'] = 'true';
	else window.localStorage['likebar'] = 'false';
	if($('ambilight').checked)window.localStorage['ambilight'] = 'true';
	else window.localStorage['ambilight'] = 'false';
	window.localStorage['ambilightrangeblurradius'] = $('ambilightrangeblurradius').value;	
	window.localStorage['ambilightrangespreadradius'] = $('ambilightrangespreadradius').value;
	if($('mousespotlightt').checked)window.localStorage['mousespotlightt'] = 'true';
	else window.localStorage['mousespotlightt'] = 'false';
	if($('ambilightfixcolor').checked)window.localStorage['ambilightfixcolor'] = 'true';
	else window.localStorage['ambilightfixcolor'] = 'false';
	if($('ambilightvarcolor').checked)window.localStorage['ambilightvarcolor'] = 'true';
	else window.localStorage['ambilightvarcolor'] = 'false';
	window.localStorage['ambilightcolorhex'] = $('ambilightcolorhex').value;
	if($('ambilight4color').checked)window.localStorage['ambilight4color'] = 'true';
	else window.localStorage['ambilight4color'] = 'false';
	window.localStorage['ambilight1colorhex'] = $('ambilight1colorhex').value;
	window.localStorage['ambilight2colorhex'] = $('ambilight2colorhex').value;
	window.localStorage['ambilight3colorhex'] = $('ambilight3colorhex').value;
	window.localStorage['ambilight4colorhex'] = $('ambilight4colorhex').value;
	if($('password').checked)window.localStorage['password'] = 'true';
	else window.localStorage['password'] = 'false';
	window.localStorage['enterpassword'] = $('enterpassword').value;
	if($('noflash').checked)window.localStorage['noflash'] = 'true';
	else window.localStorage['noflash'] = 'false';
	if($('hardflash').checked)window.localStorage['hardflash'] = 'true';
	else window.localStorage['hardflash'] = 'false';
	if($('ecosaver').checked)window.localStorage['ecosaver'] = 'true';
	else window.localStorage['ecosaver'] = 'false';
	window.localStorage['ecosavertime'] = $('ecosavertime').value;
	if($('dynamic').checked)window.localStorage['dynamic'] = 'true';
	else window.localStorage['dynamic'] = 'false';
	if($('dynamic1').checked)window.localStorage['dynamic1'] = 'true';
	else window.localStorage['dynamic1'] = 'false';
	if($('dynamic2').checked)window.localStorage['dynamic2'] = 'true';
	else window.localStorage['dynamic2'] = 'false';
	if($('dynamic3').checked)window.localStorage['dynamic3'] = 'true';
	else window.localStorage['dynamic3'] = 'false';
	if($('dynamic4').checked)window.localStorage['dynamic4'] = 'true';
	else window.localStorage['dynamic4'] = 'false';
	if($('dynamic5').checked)window.localStorage['dynamic5'] = 'true';
	else window.localStorage['dynamic5'] = 'false';
	if($('hoveroptiondyn5').checked)window.localStorage['hoveroptiondyn5'] = 'true';
	else window.localStorage['hoveroptiondyn5'] = 'false';
	if($('autoplayonly').checked)window.localStorage['autoplayonly'] = 'true';
	else window.localStorage['autoplayonly'] = 'false';	
	if($('blur').checked)window.localStorage['blur'] = 'true';
	else window.localStorage['blur'] = 'false';
	var ytselq = document.getElementById("youtubequality");
	window.localStorage['maxquality'] = ytselq.options[ytselq.selectedIndex].value;
	if($('autowidthyoutube').checked)window.localStorage['autowidthyoutube'] = 'true';
	else window.localStorage['autowidthyoutube'] = 'false';
	if($('customqualityyoutube').checked)window.localStorage['customqualityyoutube'] = 'true';
	else window.localStorage['customqualityyoutube'] = 'false';
	if($('cinemaontop').checked)window.localStorage['cinemaontop'] = 'true';
	else window.localStorage['cinemaontop'] = 'false';
	if($('alllightsoff').checked)window.localStorage['alllightsoff'] = 'true';
	else window.localStorage['alllightsoff'] = 'false';
	window.localStorage['spotlightradius'] = $('spotlightradius').value;
	if($('atmosphereonly').checked)window.localStorage['atmosphereonly'] = 'true';
	else window.localStorage['atmosphereonly'] = 'false';
	if($('optionskipremember').checked)window.localStorage['optionskipremember'] = 'true';
	else{window.localStorage['optionskipremember'] = 'false';}
	if($('nighttheme').checked)window.localStorage['nighttheme'] = 'true';
	else window.localStorage['nighttheme'] = 'false';
	if($('nightonly').checked)window.localStorage['nightonly'] = 'true';
	else window.localStorage['nightonly'] = 'false';
	if($('nightenabletheme').checked)window.localStorage['nightenabletheme'] = 'true';
	else window.localStorage['nightenabletheme'] = 'false';	
	if($('autoplaydelay').checked)window.localStorage['autoplaydelay'] = 'true';
	else window.localStorage['autoplaydelay'] = 'false';
	window.localStorage['autoplaydelaytime'] = $('autoplaydelaytime').value;
	if($('motion').checked)window.localStorage['motion'] = 'true';
	else window.localStorage['motion'] = 'false';
	if($('lightimagelin').checked)window.localStorage['lightimagelin'] = 'true';
	else window.localStorage['lightimagelin'] = 'false';
	var linearsq = document.getElementById("linearsq");
	window.localStorage['linearsq'] = linearsq.options[linearsq.selectedIndex].value;
	window.localStorage['colora'] = $('colora').value;
	window.localStorage['intervallina'] = $('intervallina').value;
	window.localStorage['colorb'] = $('colorb').value;
	window.localStorage['intervallinb'] = $('intervallinb').value;
	if($('speech').checked)window.localStorage['speech'] = 'true';
	else window.localStorage['speech'] = 'false';
	var webspeechlang = document.getElementById("select_language");
	if (webspeechlang.selectedIndex != -1){window.localStorage['speechlang'] = webspeechlang.options[webspeechlang.selectedIndex].value;}
	var webspeechcountry = document.getElementById("select_dialect");
	if (webspeechcountry.selectedIndex != -1){window.localStorage['speechcountry'] = webspeechcountry.options[webspeechcountry.selectedIndex].value;}
	if($('atmosvivid').checked)window.localStorage['atmosvivid'] = 'true';
	else window.localStorage['atmosvivid'] = 'false';
	if($('cammotiononly').checked)window.localStorage['cammotiononly'] = 'true';
	else window.localStorage['cammotiononly'] = 'false';
	if($('speechonly').checked)window.localStorage['speechonly'] = 'true';
	else window.localStorage['speechonly'] = 'false';
	if($('autoplaychecklistwhite').checked)window.localStorage['autoplaychecklistwhite'] = 'true';
	else window.localStorage['autoplaychecklistwhite'] = 'false';
	if($('autoplaychecklistblack').checked)window.localStorage['autoplaychecklistblack'] = 'true';
	else window.localStorage['autoplaychecklistblack'] = 'false';
	if($('autostop').checked)window.localStorage['autostop'] = 'true';
	else window.localStorage['autostop'] = 'false';
	if($('autostoponly').checked)window.localStorage['autostoponly'] = 'true';
	else window.localStorage['autostoponly'] = 'false';
	if($('autostopchecklistwhite').checked)window.localStorage['autostopchecklistwhite'] = 'true';
	else window.localStorage['autostopchecklistwhite'] = 'false';
	if($('autostopchecklistblack').checked)window.localStorage['autostopchecklistblack'] = 'true';
	else window.localStorage['autostopchecklistblack'] = 'false';
	if($('nighthover').checked)window.localStorage['nighthover'] = 'true';
	else window.localStorage['nighthover'] = 'false';
	if($('nightmodechecklistwhite').checked)window.localStorage['nightmodechecklistwhite'] = 'true';
	else window.localStorage['nightmodechecklistwhite'] = 'false';
	if($('nightmodechecklistblack').checked)window.localStorage['nightmodechecklistblack'] = 'true';
	else window.localStorage['nightmodechecklistblack'] = 'false';
	if($('nmtopleft').checked)window.localStorage['nmtopleft'] = 'true';
	else window.localStorage['nmtopleft'] = 'false';
	if($('nmtopright').checked)window.localStorage['nmtopright'] = 'true';
	else window.localStorage['nmtopright'] = 'false';
	if($('nmbottomright').checked)window.localStorage['nmbottomright'] = 'true';
	else window.localStorage['nmbottomright'] = 'false';
	if($('nmbottomleft').checked)window.localStorage['nmbottomleft'] = 'true';
	else window.localStorage['nmbottomleft'] = 'false';
	if($('nmcustom').checked)window.localStorage['nmcustom'] = 'true';
	else window.localStorage['nmcustom'] = 'false';
	if($('nightactivetime').checked)window.localStorage['nightactivetime'] = 'true';
	else window.localStorage['nightactivetime'] = 'false';
	window.localStorage['nmbegintime'] = $('nmbegintime').value;
	window.localStorage['nmendtime'] = $('nmendtime').value;
	if($('lampandnightmode').checked)window.localStorage['lampandnightmode'] = 'true';
	else window.localStorage['lampandnightmode'] = 'false';	
	if($('eyechecklistwhite').checked)window.localStorage['eyechecklistwhite'] = 'true';
	else window.localStorage['eyechecklistwhite'] = 'false';
	if($('eyechecklistblack').checked)window.localStorage['eyechecklistblack'] = 'true';
	else window.localStorage['eyechecklistblack'] = 'false';	
	
// Excluded domains
var excludedDomainsBox = $("excludedDomainsBox");
var excludedDomains = {};
for (var i = 0; i < excludedDomainsBox.length; i++)
	excludedDomains[excludedDomainsBox.options[i].value] = true;
    window.localStorage["excludedDomains"] = JSON.stringify(excludedDomains);
	
// autoplay Excluded domains
var autoplayDomainsBox = $("autoplayDomainsBox");
var autoplayDomains = {};
for (var i = 0; i < autoplayDomainsBox.length; i++)
	autoplayDomains[autoplayDomainsBox.options[i].value] = true;
    window.localStorage["autoplayDomains"] = JSON.stringify(autoplayDomains);
	
// atmosphere Excluded domains
var atmosphereDomainsBox = $("atmosphereDomainsBox");
var atmosphereDomains = {};
for (var i = 0; i < atmosphereDomainsBox.length; i++)
	atmosphereDomains[atmosphereDomainsBox.options[i].value] = true;
    window.localStorage["atmosphereDomains"] = JSON.stringify(atmosphereDomains);
	
// night Excluded domains
var nightDomainsBox = $("nightDomainsBox");
var nightDomains = {};
for (var i = 0; i < nightDomainsBox.length; i++)
	nightDomains[nightDomainsBox.options[i].value] = true;
    window.localStorage["nightDomains"] = JSON.stringify(nightDomains);

// cam Excluded domains
var cammotionDomainsBox = $("cammotionDomainsBox");
var cammotionDomains = {};
for (var i = 0; i < cammotionDomainsBox.length; i++)
	cammotionDomains[cammotionDomainsBox.options[i].value] = true;
	window.localStorage["cammotionDomains"] = JSON.stringify(cammotionDomains);
	
// speech Excluded domains
var speechDomainsBox = $("speechDomainsBox");
var speechDomains = {};
for (var i = 0; i < speechDomainsBox.length; i++)
	speechDomains[speechDomainsBox.options[i].value] = true;
	window.localStorage["speechDomains"] = JSON.stringify(speechDomains);

// autostop Excluded domains
var autostopDomainsBox = $("autostopDomainsBox");
var autostopDomains = {};
for (var i = 0; i < autostopDomainsBox.length; i++)
	autostopDomains[autostopDomainsBox.options[i].value] = true;
	window.localStorage["autostopDomains"] = JSON.stringify(autostopDomains);

/*------ Safari fix html5 ------*/
var lightcolor = window.localStorage.getItem("lightcolor");
var interval = window.localStorage.getItem("interval");
var fadein = window.localStorage.getItem("fadein");
var fadeout = window.localStorage.getItem("fadeout");
var autoplay = window.localStorage.getItem("autoplay");
var eastereggs = window.localStorage.getItem("eastereggs");
var suggestions = window.localStorage.getItem("suggestions");
var playlist = window.localStorage.getItem("playlist");
var sharebutton = window.localStorage.getItem("sharebutton");
var videoheadline = window.localStorage.getItem("videoheadline");
var flash = window.localStorage.getItem("flash");
var head = window.localStorage.getItem("head");
var infobar = window.localStorage.getItem("infobar");
var likebutton = window.localStorage.getItem("likebutton");
var shortcutlight = window.localStorage.getItem("shortcutlight");
var readera = window.localStorage.getItem("readera");
var readern = window.localStorage.getItem("readern");
var eyea = window.localStorage.getItem("eyea");
var eyen = window.localStorage.getItem("eyen");
var readerlargestyle = window.localStorage.getItem("readerlargestyle");
var viewcount = window.localStorage.getItem("viewcount");
var lightimage = window.localStorage.getItem("lightimage");
var lightimagea = window.localStorage.getItem("lightimagea");
var lightimagen = window.localStorage.getItem("lightimagen");
var eyealist = window.localStorage.getItem("eyealist");
var excludedDomains = window.localStorage.getItem("excludedDomains");
var mousespotlighto = window.localStorage.getItem("mousespotlighto");
var mousespotlighta = window.localStorage.getItem("mousespotlighta");
var mousespotlightc = window.localStorage.getItem("mousespotlightc");
var nighttime = window.localStorage.getItem("nighttime");
var begintime = window.localStorage.getItem("begintime");
var endtime = window.localStorage.getItem("endtime");
var addvideobutton = window.localStorage.getItem("addvideobutton");
var likebar = window.localStorage.getItem("likebar");
var ambilight = window.localStorage.getItem("ambilight");
var ambilightrangeblurradius = window.localStorage.getItem("ambilightrangeblurradius");
var ambilightrangespreadradius = window.localStorage.getItem("ambilightrangespreadradius");
var mousespotlightt = window.localStorage.getItem("mousespotlightt");
var ambilightfixcolor = window.localStorage.getItem("ambilightfixcolor");
var ambilightvarcolor = window.localStorage.getItem("ambilightvarcolor");
var ambilightcolorhex = window.localStorage.getItem("ambilightcolorhex");
var ambilight4color = window.localStorage.getItem("ambilight4color");
var ambilight1colorhex = window.localStorage.getItem("ambilight1colorhex");
var ambilight2colorhex = window.localStorage.getItem("ambilight2colorhex");
var ambilight3colorhex = window.localStorage.getItem("ambilight3colorhex");
var ambilight4colorhex = window.localStorage.getItem("ambilight4colorhex");
var password = window.localStorage.getItem("password");
var enterpassword = window.localStorage.getItem("enterpassword");
var noflash = window.localStorage.getItem("noflash");
var hardflash = window.localStorage.getItem("hardflash");
var ecosaver = window.localStorage.getItem("ecosaver");
var ecosavertime = window.localStorage.getItem("ecosavertime");
var dynamic = window.localStorage.getItem("dynamic");
var dynamic1 = window.localStorage.getItem("dynamic1");
var dynamic2 = window.localStorage.getItem("dynamic2");
var dynamic3 = window.localStorage.getItem("dynamic3");
var dynamic4 = window.localStorage.getItem("dynamic4");
var dynamic5 = window.localStorage.getItem("dynamic5");
var hoveroptiondyn5 = window.localStorage.getItem("hoveroptiondyn5");
var autoplayonly = window.localStorage.getItem("autoplayonly");
var autoplayDomains = window.localStorage.getItem("autoplayDomains");
var blur = window.localStorage.getItem("blur");
var youtubequality = window.localStorage.getItem("youtubequality");
var maxquality = window.localStorage.getItem("maxquality");
var autowidthyoutube = window.localStorage.getItem("autowidthyoutube");
var customqualityyoutube = window.localStorage.getItem("customqualityyoutube");
var cinemaontop = window.localStorage.getItem("cinemaontop");
var alllightsoff = window.localStorage.getItem("alllightsoff");
var spotlightradius = window.localStorage.getItem("spotlightradius");
var atmosphereonly = window.localStorage.getItem("atmosphereonly");
var atmosphereDomains = window.localStorage.getItem("atmosphereDomains");
var optionskipremember = window.localStorage.getItem("optionskipremember");
var countremember = window.localStorage.getItem("countremember");
var nighttheme = window.localStorage.getItem("nighttheme");
var nightonly = window.localStorage.getItem("nightonly");
var nightenabletheme = window.localStorage.getItem("nightenabletheme");
var nightDomains = window.localStorage.getItem("nightDomains");
var autoplaydelay = window.localStorage.getItem("autoplaydelay");
var autoplaydelaytime = window.localStorage.getItem("autoplaydelaytime");
var motion = window.localStorage.getItem("motion");
var lightimagelin = window.localStorage.getItem("lightimagelin");
var linearsq = window.localStorage.getItem("linearsq");
var colora = window.localStorage.getItem("colora");
var intervallina = window.localStorage.getItem("intervallina");
var colorb = window.localStorage.getItem("colorb");
var intervallinb = window.localStorage.getItem("intervallinb");
var speech = window.localStorage.getItem("speech");
var speechlang = window.localStorage.getItem("speechlang");
var speechcountry = window.localStorage.getItem("speechcountry");
var atmosvivid = window.localStorage.getItem("atmosvivid");
var cammotiononly = window.localStorage.getItem("cammotiononly");
var speechonly = window.localStorage.getItem("speechonly");
var autoplaychecklistwhite = window.localStorage.getItem("autoplaychecklistwhite");
var autoplaychecklistblack = window.localStorage.getItem("autoplaychecklistblack");
var cammotionDomains = window.localStorage.getItem("cammotionDomains");
var speechDomains = window.localStorage.getItem("speechDomains");
var reviewedlastonversion = window.localStorage.getItem("reviewedlastonversion");
var applastonversion = window.localStorage.getItem("applastonversion");
var autostop = window.localStorage.getItem("autostop");
var autostoponly = window.localStorage.getItem("autostoponly");
var autostopchecklistwhite = window.localStorage.getItem("autostopchecklistwhite");
var autostopchecklistblack = window.localStorage.getItem("autostopchecklistblack");
var nighthover = window.localStorage.getItem("nighthover");
var nightmodechecklistwhite = window.localStorage.getItem("nightmodechecklistwhite");
var nightmodechecklistblack = window.localStorage.getItem("nightmodechecklistblack");
var nmtopleft = window.localStorage.getItem("nmtopleft");
var nmtopright = window.localStorage.getItem("nmtopright");
var nmbottomright = window.localStorage.getItem("nmbottomright");
var nmbottomleft = window.localStorage.getItem("nmbottomleft");
var nmcustom = window.localStorage.getItem("nmcustom");
var nightactivetime = window.localStorage.getItem("nightactivetime");
var nmbegintime = window.localStorage.getItem("nmbegintime");
var nmendtime = window.localStorage.getItem("nmendtime");
var lampandnightmode = window.localStorage.getItem("lampandnightmode");
var eyechecklistwhite = window.localStorage.getItem("eyechecklistwhite");
var eyechecklistblack = window.localStorage.getItem("eyechecklistblack");
var autostopDomains = window.localStorage.getItem("autostopDomains");
safari.self.tab.dispatchMessage("update_setting", {lightcolor:lightcolor, interval:interval, fadein:fadein, fadeout:fadeout, autoplay:autoplay, eastereggs:eastereggs, suggestions:suggestions, playlist:playlist, sharebutton:sharebutton, videoheadline:videoheadline, flash:flash, head:head, infobar:infobar, likebutton:likebutton, shortcutlight:shortcutlight, readera:readera, readern:readern, eyea:eyea, eyen:eyen, readerlargestyle:readerlargestyle, viewcount:viewcount, lightimage:lightimage, lightimagea:lightimagea, lightimagen:lightimagen, eyealist:eyealist, excludedDomains:excludedDomains, mousespotlighto:mousespotlighto, mousespotlighta:mousespotlighta, mousespotlightc:mousespotlightc, nighttime:nighttime, begintime:begintime, endtime:endtime, addvideobutton:addvideobutton, likebar:likebar, ambilight:ambilight, ambilightrangeblurradius:ambilightrangeblurradius, ambilightrangespreadradius:ambilightrangespreadradius, mousespotlightt:mousespotlightt, ambilightfixcolor:ambilightfixcolor, ambilightvarcolor:ambilightvarcolor, ambilightcolorhex:ambilightcolorhex, ambilight4color:ambilight4color, ambilight1colorhex:ambilight1colorhex, ambilight2colorhex:ambilight2colorhex, ambilight3colorhex:ambilight3colorhex, ambilight4colorhex:ambilight4colorhex, password:password, enterpassword:enterpassword, noflash:noflash, hardflash:hardflash, ecosaver:ecosaver, ecosavertime:ecosavertime, dynamic:dynamic, dynamic1:dynamic1, dynamic2:dynamic2, dynamic3:dynamic3, dynamic4:dynamic4, dynamic5:dynamic5, hoveroptiondyn5:hoveroptiondyn5, autoplayonly:autoplayonly, autoplayDomains:autoplayDomains, blur:blur, youtubequality:youtubequality, maxquality:maxquality, autowidthyoutube:autowidthyoutube, customqualityyoutube:customqualityyoutube, cinemaontop:cinemaontop, alllightsoff:alllightsoff, spotlightradius:spotlightradius, atmosphereonly:atmosphereonly, atmosphereDomains:atmosphereDomains, optionskipremember:optionskipremember, countremember:countremember, nighttheme:nighttheme, nightonly:nightonly, nightenabletheme:nightenabletheme, nightDomains:nightDomains, autoplaydelay:autoplaydelay, autoplaydelaytime:autoplaydelaytime, motion:motion, lightimagelin:lightimagelin, linearsq:linearsq, colora:colora, intervallina:intervallina, colorb:colorb, intervallinb:intervallinb, speech:speech, speechlang:speechlang, speechcountry:speechcountry, atmosvivid:atmosvivid, cammotiononly:cammotiononly, speechonly:speechonly, autoplaychecklistwhite:autoplaychecklistwhite, autoplaychecklistblack:autoplaychecklistblack, cammotionDomains:cammotionDomains, speechDomains:speechDomains, reviewedlastonversion:reviewedlastonversion, applastonversion:applastonversion, autostop:autostop, autostoponly:autostoponly, autostopchecklistwhite:autostopchecklistwhite, autostopchecklistblack:autostopchecklistblack, nighthover:nighthover, nightmodechecklistwhite:nightmodechecklistwhite, nightmodechecklistblack:nightmodechecklistblack, nmtopleft:nmtopleft, nmtopright:nmtopright, nmbottomright:nmbottomright, nmbottomleft:nmbottomleft, nmcustom:nmcustom, nightactivetime:nightactivetime, nmbegintime:nmbegintime, nmendtime:nmendtime, lampandnightmode:lampandnightmode, eyechecklistwhite:eyechecklistwhite, eyechecklistblack:eyechecklistblack, autostopDomains:autostopDomains});
/*------ Safari fix html5 ------*/
}

function read_options(){
safari.self.tab.dispatchMessage("getSettings"); // get safari.settings

// listen for an incoming setSettings message
safari.self.addEventListener("message", function(e) {
    if(e.name === "setSettings") {
	safari.extension.settings = e.message;

// Option to read current value from window.localStorage
if(!safari.extension.settings['fadein']) // find no localstore fadein
	safari.extension.settings['fadein'] = 'true'; // then default true

if(!safari.extension.settings['fadeout']) // find no localstore fadein
	safari.extension.settings['fadeout'] = 'true'; // then default true

if(!safari.extension.settings['readera']&&!safari.extension.settings['readern']) // find no localstore reader
{	safari.extension.settings['readern'] = 'true'; // then default true
	safari.extension.settings['readera'] = 'false'; // then default false
}

if(!safari.extension.settings['lightimagea']&&!safari.extension.settings['lightimagen']) // find no localstore reader
{	safari.extension.settings['lightimagen'] = 'true'; // then default true
	safari.extension.settings['lightimagea'] = 'false'; // then default false
}

if(!safari.extension.settings['mousespotlighta']&&!safari.extension.settings['mousespotlightc']&&!safari.extension.settings['mousespotlighto']&&!safari.extension.settings['mousespotlightt']) // find no localstore reader
{	safari.extension.settings['mousespotlighto'] = 'true'; // then default true, off
	safari.extension.settings['mousespotlightc'] = 'false'; // then default false, custom
	safari.extension.settings['mousespotlighta'] = 'false'; // then default false, auto
	safari.extension.settings['mousespotlightt'] = 'false'; // then default false, auto
}

if(!safari.extension.settings['eyea']&&!safari.extension.settings['eyen']&&!safari.extension.settings['eyealist']) // find no localstore reader
{	safari.extension.settings['eyen'] = 'true'; // then default true
	safari.extension.settings['eyea'] = 'false'; // then default false
	safari.extension.settings['eyealist'] = 'false'; // then default false
}

if(safari.extension.settings['interval'])
	default_opacity = safari.extension.settings['interval'];

if(safari.extension.settings['ambilightrangeblurradius'])
	default_arangeblur = safari.extension.settings['ambilightrangeblurradius'];
	
if(safari.extension.settings['ambilightrangespreadradius'])
	default_arangespread = safari.extension.settings['ambilightrangespreadradius'];	

if(!safari.extension.settings['ambilightvarcolor']&&!safari.extension.settings['ambilightfixcolor']&&!safari.extension.settings['ambilight4color']) // find no localstore reader
{	safari.extension.settings['ambilightfixcolor'] = 'true'; // then default true
	safari.extension.settings['ambilightvarcolor'] = 'false'; // then default false
	safari.extension.settings['ambilight4color'] = 'false'; // then default false
}

if(!safari.extension.settings['flash']&&!safari.extension.settings['noflash']&&!safari.extension.settings['hardflash']) // find no localstore reader
{	safari.extension.settings['noflash'] = 'true'; // then default true
	safari.extension.settings['flash'] = 'false'; // then default false
	safari.extension.settings['hardflash'] = 'false'; // then default false
}

if(!safari.extension.settings['dynamic1']&&!safari.extension.settings['dynamic2']&&!safari.extension.settings['dynamic3']&&!safari.extension.settings['dynamic4']&&!safari.extension.settings['dynamic5']) // find no localstore reader
{	safari.extension.settings['dynamic1'] = 'true'; // then default true
	safari.extension.settings['dynamic2'] = 'false'; // then default false
	safari.extension.settings['dynamic3'] = 'false'; // then default false
	safari.extension.settings['dynamic4'] = 'false'; // then default false
	safari.extension.settings['dynamic5'] = 'false'; // then default false
}

if(!safari.extension.settings['hoveroptiondyn5']) // find no localstore reader
{	safari.extension.settings['hoveroptiondyn5'] = 'true'; // then default true
}
	
if(!safari.extension.settings['maxquality']) // find no localstore reader
{	safari.extension.settings['maxquality'] = 'hd1080'; // then default hd1080	
}

if(!safari.extension.settings['autoplaychecklistwhite']&&!safari.extension.settings['autoplaychecklistblack']) // find no localstore autoplay whitelist
{	safari.extension.settings['autoplaychecklistwhite'] = 'true'; // then default true
	safari.extension.settings['autoplaychecklistblack'] = 'false'; // then default false
}

if(!safari.extension.settings['autostopchecklistwhite']&&!safari.extension.settings['autostopchecklistblack']) // find no localstore autostop whitelist
{	safari.extension.settings['autostopchecklistwhite'] = 'true'; // then default true
	safari.extension.settings['autostopchecklistblack'] = 'false'; // then default false
}

if(!safari.extension.settings['nightmodechecklistwhite']&&!safari.extension.settings['nightmodechecklistblack']) // find no localstore nightmode whitelist
{	safari.extension.settings['nightmodechecklistwhite'] = 'true'; // then default true
	safari.extension.settings['nightmodechecklistblack'] = 'false'; // then default false
}

if(!safari.extension.settings['nmtopleft']&&!safari.extension.settings['nmtopright']&&!safari.extension.settings['nmbottomright']&&!safari.extension.settings['nmbottomleft']&&!safari.extension.settings['nmcustom'])  // find no localstore eye
{	safari.extension.settings['nmtopleft'] = 'false'; // then default false
	safari.extension.settings['nmtopright'] = 'false'; // then default false
	safari.extension.settings['nmbottomright'] = 'false'; // then default false
	safari.extension.settings['nmbottomleft'] = 'true'; // then default true
	safari.extension.settings['nmcustom'] = 'false'; // then default false
}

if(!safari.extension.settings['eyechecklistwhite']&&!safari.extension.settings['eyechecklistblack']) // find no localstore eye whitelist
{	safari.extension.settings['eyechecklistwhite'] = 'true'; // then default true
	safari.extension.settings['eyechecklistblack'] = 'false'; // then default false
}

// speech
var langs =
[['Afrikaans',       ['af-ZA']],
 ['Bahasa Indonesia',['id-ID']],
 ['Bahasa Melayu',   ['ms-MY']],
 ['Català',          ['ca-ES']],
 ['Čeština',         ['cs-CZ']],
 ['Deutsch',         ['de-DE']],
 ['English',         ['en-AU', 'Australia'],
                     ['en-CA', 'Canada'],
                     ['en-IN', 'India'],
                     ['en-NZ', 'New Zealand'],
                     ['en-ZA', 'South Africa'],
                     ['en-GB', 'United Kingdom'],
                     ['en-US', 'United States']],
 ['Español',         ['es-AR', 'Argentina'],
                     ['es-BO', 'Bolivia'],
                     ['es-CL', 'Chile'],
                     ['es-CO', 'Colombia'],
                     ['es-CR', 'Costa Rica'],
                     ['es-EC', 'Ecuador'],
                     ['es-SV', 'El Salvador'],
                     ['es-ES', 'España'],
                     ['es-US', 'Estados Unidos'],
                     ['es-GT', 'Guatemala'],
                     ['es-HN', 'Honduras'],
                     ['es-MX', 'México'],
                     ['es-NI', 'Nicaragua'],
                     ['es-PA', 'Panamá'],
                     ['es-PY', 'Paraguay'],
                     ['es-PE', 'Perú'],
                     ['es-PR', 'Puerto Rico'],
                     ['es-DO', 'República Dominicana'],
                     ['es-UY', 'Uruguay'],
                     ['es-VE', 'Venezuela']],
 ['Euskara',         ['eu-ES']],
 ['Français',        ['fr-FR']],
 ['Galego',          ['gl-ES']],
 ['Hrvatski',        ['hr_HR']],
 ['IsiZulu',         ['zu-ZA']],
 ['Íslenska',        ['is-IS']],
 ['Italiano',        ['it-IT', 'Italia'],
                     ['it-CH', 'Svizzera']],
 ['Magyar',          ['hu-HU']],
 ['Nederlands',      ['nl-NL']],
 ['Norsk bokmål',    ['nb-NO']],
 ['Polski',          ['pl-PL']],
 ['Português',       ['pt-BR', 'Brasil'],
                     ['pt-PT', 'Portugal']],
 ['Română',          ['ro-RO']],
 ['Slovenčina',      ['sk-SK']],
 ['Suomi',           ['fi-FI']],
 ['Svenska',         ['sv-SE']],
 ['Türkçe',          ['tr-TR']],
 ['български',       ['bg-BG']],
 ['Pусский',         ['ru-RU']],
 ['Српски',          ['sr-RS']],
 ['한국어',            ['ko-KR']],
 ['中文',             ['cmn-Hans-CN', '普通话 (中国大陆)'],
                     ['cmn-Hans-HK', '普通话 (香港)'],
                     ['cmn-Hant-TW', '中文 (台灣)'],
                     ['yue-Hant-HK', '粵語 (香港)']],
 ['日本語',           ['ja-JP']],
 ['Lingua latīna',   ['la']]];

for (var i = 0; i < langs.length; i++) {
if($("select_language")){ $("select_language").options[i] = new Option(langs[i][0], i); }
}

function updateCountry() {
	for (var i = $("select_dialect").options.length - 1; i >= 0; i--) {
		$("select_dialect").remove(i);
	}
	var list = langs[select_language.selectedIndex];
	for (var i = 1; i < list.length; i++) {
		$("select_dialect").options.add(new Option(list[i][1], list[i][0]));
	}
	$("select_dialect").style.visibility = list[1].length == 1 ? 'hidden' : 'visible';
}

$("select_language").addEventListener('click', function () {updateCountry();},false);
$("select_language").addEventListener('change', function() {updateCountry();save_options();});
$("select_dialect").addEventListener('change', function() {save_options();});

// get real value
	if(safari.extension.settings['interval'])$('interval').value = safari.extension.settings['interval'];
	else $('interval').value = 80;
	if(safari.extension.settings['lightcolor']){$('lightcolor').value = safari.extension.settings['lightcolor'];}
	else {$('lightcolor').value = '#000000';}
	if(safari.extension.settings['lightimage']){$('lightimage').value = safari.extension.settings['lightimage'];}
	else {$('lightimage').value = "http://www.turnoffthelights.com/extension/images/theater.jpg";}
	if(safari.extension.settings['lightimagea'] == 'true'){$('lightimagea').checked = true;$('example1').style.background = 'url(' + $('lightimage').value + ')';$('example1').style.backgroundSize = "100% 100%";$('example2').style.background = 'url(' + $('lightimage').value + ')';$('example2').style.backgroundSize = "100% 100%";$('mousespotlighta').disabled = true;$('mousespotlightc').disabled = true;}
	if(safari.extension.settings['lightimagen'] == 'true'){$('lightimagen').checked = true;$('example1').style.background = $('lightcolor').value;$('example2').style.background = $('lightcolor').value;$('mousespotlighta').disabled = false;$('mousespotlightc').disabled = false;}
	if(safari.extension.settings['pageaction'] == 'true')$('pageaction').checked = true;
	if(safari.extension.settings['autoplay'] == 'true'){$('autoplay').checked = true;$('eyen').checked = true;$('excludedDomainsBox').disabled = true;$('websiteurl').disabled = true;}
	if(safari.extension.settings['playlist'] == 'true')$('playlist').checked = true;
	if(safari.extension.settings['flash'] == 'true')$('flash').checked = true;
	if(safari.extension.settings['head'] == 'true')$('head').checked = true;
	if(safari.extension.settings['fadein'] == 'true')$('fadein').checked = true;
	if(safari.extension.settings['fadeout'] == 'true')$('fadeout').checked = true;
	if(safari.extension.settings['infobar'] == 'true')$('infobar').checked = true;
	if(safari.extension.settings['sharebutton'] == 'true')$('sharebutton').checked = true;
	if(safari.extension.settings['likebutton'] == 'true')$('likebutton').checked = true;
	if(safari.extension.settings['readera'] == 'true')$('readera').checked = true;
	if(safari.extension.settings['readern'] == 'true')$('readern').checked = true;
	if(safari.extension.settings['shortcutlight'] == 'true')$('shortcutlight').checked = true;
	if(safari.extension.settings['eyea'] == 'true'){$('eyea').checked = true;$('excludedDomainsBox').disabled = true;$('websiteurl').disabled = true;$('autoplay').checked = false;$('autoplay').disabled = true;$('addbutton').disabled = true;$('removebutton').disabled = true;$('nighttime').disabled = false;$('begintime').disabled = false;$('endtime').disabled = false;$('confirmtime').disabled = false;$('helpautoplay').style.display = "";$('helpeyeprotection').style.display = "";$('ecosaver').disabled = false;$('ecosavertime').disabled = false;$('confirmtimesaver').disabled = false;}
	if(safari.extension.settings['eyen'] == 'true'){$('eyen').checked = true;$('excludedDomainsBox').disabled = true;$('websiteurl').disabled = true;$('autoplay').disabled = false;$('addbutton').disabled = true;$('removebutton').disabled = true;$('nighttime').disabled = true;$('begintime').disabled = true;$('endtime').disabled = true;$('confirmtime').disabled = true;$('helpautoplay').style.display = "";$('helpeyeprotection').style.display = "";$('ecosaver').disabled = true;$('ecosavertime').disabled = true;$('confirmtimesaver').disabled = true;}
	if(safari.extension.settings['suggestions'] == 'true')$('suggestions').checked = true;
	if(safari.extension.settings['videoheadline'] == 'true')$('videoheadline').checked = true;
	if(safari.extension.settings['eastereggs'] == 'true')$('eastereggs').checked = true;
	if(safari.extension.settings['contextmenus'] == 'true')$('contextmenus').checked = true;
	if(safari.extension.settings['viewcount'] == 'true')$('viewcount').checked = true;
	if(safari.extension.settings['eyealist'] == 'true'){$('eyealist').checked = true;$('excludedDomainsBox').disabled = false;$('websiteurl').disabled = false;$('autoplay').disabled = true;$('addbutton').disabled = false;$('removebutton').disabled = false;$('nighttime').disabled = false;$('begintime').disabled = false;$('endtime').disabled = false;$('confirmtime').disabled = false;$('helpautoplay').style.display = "";$('helpeyeprotection').style.display = "";$('ecosaver').disabled = false;$('ecosavertime').disabled = false;$('confirmtimesaver').disabled = false;}
	if(safari.extension.settings['mousespotlighto'] == 'true')$('mousespotlighto').checked = true;
	if(safari.extension.settings['mousespotlightc'] == 'true')$('mousespotlightc').checked = true;
	if(safari.extension.settings['mousespotlighta'] == 'true')$('mousespotlighta').checked = true;
	if(safari.extension.settings['nighttime'] == 'true')$('nighttime').checked = true;
	if(safari.extension.settings['begintime']){$('begintime').value = safari.extension.settings['begintime'];}
	else {$('begintime').value = "21:00";}
	if(safari.extension.settings['endtime']){$('endtime').value = safari.extension.settings['endtime'];}
	else {$('endtime').value = "23:45";}
	if(safari.extension.settings['addvideobutton'] == 'true')$('addvideobutton').checked = true;
	if(safari.extension.settings['likebar'] == 'true')$('likebar').checked = true;
	if(safari.extension.settings['ambilight'] == 'true'){$('ambilight').checked = true;}
	else {$('arangespread').disabled = true;$('ambilightrangespreadradius').disabled = true;$('arangeblur').disabled = true;$('ambilightrangeblurradius').disabled = true;$('ambilightfixcolor').disabled = true;$('ambilightvarcolor').disabled = true;$('ambilightcolorhex').disabled = true;$('ambilight4color').disabled = true;$('ambilight1colorhex').disabled = true;$('ambilight2colorhex').disabled = true;$('ambilight3colorhex').disabled = true;$('ambilight4colorhex').disabled = true;}
	if(safari.extension.settings['ambilightrangeblurradius'])$('ambilightrangeblurradius').value = safari.extension.settings['ambilightrangeblurradius'];
	else $('ambilightrangeblurradius').value = 70;
	if(safari.extension.settings['ambilightrangespreadradius'])$('ambilightrangespreadradius').value = safari.extension.settings['ambilightrangespreadradius'];
	else $('ambilightrangespreadradius').value = 20;
	if(safari.extension.settings['mousespotlightt'] == 'true')$('mousespotlightt').checked = true;
	if(safari.extension.settings['ambilightfixcolor'] == 'true')$('ambilightfixcolor').checked = true;
	if(safari.extension.settings['ambilightvarcolor'] == 'true'){$('ambilightvarcolor').checked = true;$('showwarningambilight').style.display = '';}
	else{$('showwarningambilight').style.display = "none";}
	if(safari.extension.settings['ambilightcolorhex'])$('ambilightcolorhex').value = safari.extension.settings['ambilightcolorhex'];
	else $('ambilightcolorhex').value = '#47C2FF';
	if(safari.extension.settings['ambilight4color'] == 'true')$('ambilight4color').checked = true;
	if(safari.extension.settings['ambilight1colorhex'])$('ambilight1colorhex').value = safari.extension.settings['ambilight1colorhex'];
	else $('ambilight1colorhex').value = '#FF0000';
	if(safari.extension.settings['ambilight2colorhex'])$('ambilight2colorhex').value = safari.extension.settings['ambilight2colorhex'];
	else $('ambilight2colorhex').value = '#FFEE00';
	if(safari.extension.settings['ambilight3colorhex'])$('ambilight3colorhex').value = safari.extension.settings['ambilight3colorhex'];
	else $('ambilight3colorhex').value = '#00FF00';
	if(safari.extension.settings['ambilight4colorhex'])$('ambilight4colorhex').value = safari.extension.settings['ambilight4colorhex'];
	else $('ambilight4colorhex').value = '#0000FF';
	if(safari.extension.settings['password'] == 'true'){$('password').checked = true;$('enterpassword').disabled = false;$('confirmpassword').disabled = false;}
	else {$('enterpassword').disabled = true;$('confirmpassword').disabled = true;}
	if(safari.extension.settings['enterpassword'])$('enterpassword').value = safari.extension.settings['enterpassword'];
	if(safari.extension.settings['noflash'] == 'true')$('noflash').checked = true;
	if(safari.extension.settings['hardflash'] == 'true')$('hardflash').checked = true;
	if(safari.extension.settings['ecosaver'] == 'true')$('ecosaver').checked = true;
	if(safari.extension.settings['ecosavertime'])$('ecosavertime').value = safari.extension.settings['ecosavertime'];
	else $('ecosavertime').value = '60';
	if(safari.extension.settings['dynamic'] == 'true')$('dynamic').checked = true;
	else $('lightdynamic').disabled = true;
	if(safari.extension.settings['dynamic1'] == 'true'){$('dynamic1').checked = true;$("lightdynamic").value = chrome.i18n.getMessage('desdynamicfishtank');}
	if(safari.extension.settings['dynamic2'] == 'true'){$('dynamic2').checked = true;$("lightdynamic").value = chrome.i18n.getMessage('desdynamicblocks');}
	if(safari.extension.settings['dynamic3'] == 'true'){$('dynamic3').checked = true;$("lightdynamic").value = chrome.i18n.getMessage('desdynamicraindrops');}
	if(safari.extension.settings['dynamic4'] == 'true'){$('dynamic4').checked = true;$("lightdynamic").value = chrome.i18n.getMessage('desdynamiccloud');}
	if(safari.extension.settings['dynamic5'] == 'true'){$('dynamic5').checked = true;$("lightdynamic").value = chrome.i18n.getMessage('desdynamicspace');}
	if(safari.extension.settings['hoveroptiondyn5'] == 'true'){$('hoveroptiondyn5').checked = true;}
	if(safari.extension.settings['autoplayonly'] == 'true'){$('autoplayonly').checked = true;$('autoplayDomainsBox').disabled = false;$('autoplaywebsiteurl').disabled = false;$('autoplayaddbutton').disabled = false;$('autoplayremovebutton').disabled = false;}
	else{$('autoplayonly').checked = false;$('autoplayDomainsBox').disabled = true;$('autoplaywebsiteurl').disabled = true;$('autoplayaddbutton').disabled = true;$('autoplayremovebutton').disabled = true;}
	if(safari.extension.settings['blur'] == 'true'){$('blur').checked = true;}
	if(safari.extension.settings['maxquality'])$('youtubequality').value = safari.extension.settings['maxquality'];
	if(safari.extension.settings['autowidthyoutube'] == 'true'){$('autowidthyoutube').checked = true;}
	if(safari.extension.settings['customqualityyoutube'] == 'true'){$('customqualityyoutube').checked = true;}
	if(safari.extension.settings['cinemaontop'] == 'true'){$('cinemaontop').checked = true;}
	if(safari.extension.settings['alllightsoff'] == 'true'){$('alllightsoff').checked = true;}
	if(safari.extension.settings['spotlightradius'])$('spotlightradius').value = safari.extension.settings['spotlightradius'];
	else $('spotlightradius').value = 50;
	if(safari.extension.settings['atmosphereonly'] == 'true'){$('atmosphereonly').checked = true;$('atmosphereDomainsBox').disabled = false;$('atmospherewebsiteurl').disabled = false;$('atmosphereaddbutton').disabled = false;$('atmosphereremovebutton').disabled = false;}
	else{$('atmosphereonly').checked = false;$('atmosphereDomainsBox').disabled = true;$('atmospherewebsiteurl').disabled = true;$('atmosphereaddbutton').disabled = true;$('atmosphereremovebutton').disabled = true;}
	if(safari.extension.settings['optionskipremember'] == 'true'){$('optionskipremember').checked = true;$('firstcheckboxskipremember').checked = true;}
	if(safari.extension.settings['nighttheme'] == 'true')$('nighttheme').checked = true;
	if(safari.extension.settings['nightonly'] == 'true'){$('nightonly').checked = true;$('nightDomainsBox').disabled = false;$('nightwebsiteurl').disabled = false;$('nightaddbutton').disabled = false;$('nightremovebutton').disabled = false;}
	else{$('nightonly').checked = false;$('nightDomainsBox').disabled = true;$('nightwebsiteurl').disabled = true;$('nightaddbutton').disabled = true;$('nightremovebutton').disabled = true;}
	if(safari.extension.settings['nightenabletheme'] == 'true')$('nightenabletheme').checked = true;
	if(safari.extension.settings['autoplaydelay'] == 'true')$('autoplaydelay').checked = true;
	if(safari.extension.settings['autoplaydelaytime'])$('autoplaydelaytime').value = safari.extension.settings['autoplaydelaytime'];
	else $('autoplaydelaytime').value = 3;
	if(safari.extension.settings['motion'] == 'true')$('motion').checked = true;
	if(safari.extension.settings['lightimagelin'] == 'true')$('lightimagelin').checked = true;
	if(safari.extension.settings['linearsq'])$('linearsq').value = safari.extension.settings['linearsq'];
	else $('linearsq').value = "top";
	if(safari.extension.settings['colora'])$('colora').value = safari.extension.settings['colora'];
	else $('colora').value = '#000000';
	if(safari.extension.settings['intervallina'])$('intervallina').value = safari.extension.settings['intervallina'];
	else $('intervallina').value = '0';
	if(safari.extension.settings['colorb'])$('colorb').value = safari.extension.settings['colorb'];
	else $('colorb').value = '#858585';
	if(safari.extension.settings['intervallinb'])$('intervallinb').value = safari.extension.settings['intervallinb'];
	else $('intervallinb').value = '100';
	if(safari.extension.settings['speech'] == 'true')$('speech').checked = true;
	if(safari.extension.settings['speechlang']){$("select_language").selectedIndex = safari.extension.settings['speechlang'];updateCountry();}
	if(safari.extension.settings['speechcountry'])$('select_dialect').value = safari.extension.settings['speechcountry'];
	if(safari.extension.settings['atmosvivid'] == 'true')$('atmosvivid').checked = true;
	if(safari.extension.settings['cammotiononly'] == 'true'){$('cammotiononly').checked = true;}
	else{$('cammotiononly').checked = false;}
	if(safari.extension.settings['speechonly'] == 'true'){$('speechonly').checked = true;}
	else{$('speechonly').checked = false;}
	if(safari.extension.settings['autoplaychecklistwhite'] == 'true')$('autoplaychecklistwhite').checked = true;
	if(safari.extension.settings['autoplaychecklistblack'] == 'true')$('autoplaychecklistblack').checked = true;
	// workaround version can't found
	if(!safari.extension.settings['reviewedlastonversion']){safari.extension.settings['reviewedlastonversion'] = '3.0';}
	if(!safari.extension.settings['applastonversion']){safari.extension.settings['applastonversion'] = '3.0';}
	var valuex = safari.extension.settings['reviewedlastonversion'];
	var valuey = safari.extension.settings['applastonversion'];
	safariexversion(valuex,valuey);
	//---
	if(safari.extension.settings['autostop'] == 'true')$('autostop').checked = true;
	if(safari.extension.settings['autostoponly'] == 'true'){$('autostoponly').checked = true;}
	else{$('autostoponly').checked = false;}
	if(safari.extension.settings['autostopchecklistwhite'] == 'true'){$('autostopchecklistwhite').checked = true;}
	if(safari.extension.settings['autostopchecklistblack'] == 'true'){$('autostopchecklistblack').checked = true;}
	if(safari.extension.settings['nighthover'] == 'true'){$('nighthover').checked = true;}
	if(safari.extension.settings['nightmodechecklistwhite'] == 'true'){$('nightmodechecklistwhite').checked = true;}
	if(safari.extension.settings['nightmodechecklistblack'] == 'true'){$('nightmodechecklistblack').checked = true;}
	if(safari.extension.settings['nmtopleft'] == 'true'){$('nmtopleft').checked = true;}
	if(safari.extension.settings['nmtopright'] == 'true'){$('nmtopright').checked = true;}
	if(safari.extension.settings['nmbottomright'] == 'true'){$('nmbottomright').checked = true;}
	if(safari.extension.settings['nmbottomleft'] == 'true'){$('nmbottomleft').checked = true;}
	if(safari.extension.settings['nmcustom'] == 'true'){$('nmcustom').checked = true;}
	if(safari.extension.settings['nightactivetime'] == 'true'){$('nightactivetime').checked = true;}
	if(safari.extension.settings['nmbegintime']){$('nmbegintime').value = safari.extension.settings['nmbegintime'];}
	else {$('nmbegintime').value = "21:00";}
	if(safari.extension.settings['nmendtime']){$('nmendtime').value = safari.extension.settings['nmendtime'];}
	else {$('nmendtime').value = "23:45";}
	if(safari.extension.settings['lampandnightmode'] == 'true'){$('lampandnightmode').checked = true;}
	else{$('lampandnightmode').checked = false;}
	if(safari.extension.settings['eyechecklistwhite'] == 'true'){$('eyechecklistwhite').checked = true;}
	if(safari.extension.settings['eyechecklistblack'] == 'true'){$('eyechecklistblack').checked = true;}	
	
// Excluded domains - sort these alphabetically
// Safari Fix
if(!safari.extension.settings['autoplayDomains']) // find no localstore
	safari.extension.settings['autoplayDomains'] = JSON.stringify({'http://www.youtube.com': true, 'https://www.youtube.com': true,  'http://www.vimeo.com': true}); // then default true

if(!safari.extension.settings['excludedDomains']) // find no localstore
	safari.extension.settings['excludedDomains'] = JSON.stringify({'http://www.youtube.com': true, 'https://www.youtube.com': true,  'http://www.vimeo.com': true}); // then default true

if(!safari.extension.settings['atmosphereDomains']) // find no localstore
	safari.extension.settings['atmosphereDomains'] = JSON.stringify({'http://www.youtube.com': true, 'https://www.youtube.com': true,  'http://www.vimeo.com': true}); // then default true
	
if(!safari.extension.settings['nightDomains']) // find no localstore
	safari.extension.settings['nightDomains'] = JSON.stringify({'http://www.youtube.com': true, 'https://www.youtube.com': true,  'http://www.nytimes.com': true}); // then default true

if(!safari.extension.settings['cammotionDomains']) // find no localstore
	safari.extension.settings['cammotionDomains'] = JSON.stringify({'http://www.youtube.com': true, 'https://www.youtube.com': true,  'http://www.vimeo.com': true}); // then default true
	
if(!safari.extension.settings['speechDomains']) // find no localstore
	safari.extension.settings['speechDomains'] = JSON.stringify({'http://www.youtube.com': true, 'https://www.youtube.com': true,  'http://www.vimeo.com': true}); // then default true

if(!safari.extension.settings['autostopDomains']) // find no localstore
	safari.extension.settings['autostopDomains'] = JSON.stringify({'http://www.youtube.com': true, 'https://www.youtube.com': true,  'http://www.vimeo.com': true}); // then default true

$('excludedDomainsBox').innerHTML = ""; // clean it Safari fix
$('autoplayDomainsBox').innerHTML = ""; // clean it Safari fix
$('atmosphereDomainsBox').innerHTML = ""; // clean it Safari fix
$('nightDomainsBox').innerHTML = ""; // clean it Safari fix
$('cammotionDomainsBox').innerHTML = ""; // clean it Safari fix
$('speechDomainsBox').innerHTML = ""; // clean it Safari fix
$('autostopDomainsBox').innerHTML = ""; // clean it Safari fix
var excludedDomains = safari.extension.settings["excludedDomains"];
var autoplayDomains = safari.extension.settings["autoplayDomains"];
var atmosphereDomains = safari.extension.settings["atmosphereDomains"];
var nightDomains = safari.extension.settings["nightDomains"];
var cammotionDomains = safari.extension.settings["cammotionDomains"];
var speechDomains = safari.extension.settings["speechDomains"];
var autostopDomains = safari.extension.settings["autostopDomains"];
//-----------------------------------------------------------------------
if(typeof excludedDomains == "string") {
	excludedDomains = JSON.parse(excludedDomains);
	var buf = [];
	for(var domain in excludedDomains)
		buf.push(domain);
        buf.sort();
	for(var i = 0; i < buf.length; i++)
		appendToListBox("excludedDomainsBox", buf[i]);
    }
		
if(typeof autoplayDomains == "string") {
	autoplayDomains = JSON.parse(autoplayDomains);
	var abuf = [];
	for(var domain in autoplayDomains)
		abuf.push(domain);
        abuf.sort();
	for(var i = 0; i < abuf.length; i++)
		appendToListBox("autoplayDomainsBox", abuf[i]);
    }
	
if(typeof atmosphereDomains == "string") {
	atmosphereDomains = JSON.parse(atmosphereDomains);
	var albuf = [];
	for(var domain in atmosphereDomains)
		albuf.push(domain);
        albuf.sort();
	for(var i = 0; i < albuf.length; i++)
		appendToListBox("atmosphereDomainsBox", albuf[i]);
    }	

if(typeof nightDomains == "string") {
	nightDomains = JSON.parse(nightDomains);
	var nbuf = [];
	for(var domain in nightDomains)
		nbuf.push(domain);
        nbuf.sort();
	for(var i = 0; i < nbuf.length; i++)
		appendToListBox("nightDomainsBox", nbuf[i]);
    }
	
if(typeof cammotionDomains == "string") {
	cammotionDomains = JSON.parse(cammotionDomains);
	var cmbuf = [];
	for(var domain in cammotionDomains)
		cmbuf.push(domain);
        cmbuf.sort();
	for(var i = 0; i < cmbuf.length; i++)
		appendToListBox("cammotionDomainsBox", cmbuf[i]);
    }

if(typeof speechDomains == "string") {
	speechDomains = JSON.parse(speechDomains);
	var srbuf = [];
	for(var domain in speechDomains)
		srbuf.push(domain);
        srbuf.sort();
	for(var i = 0; i < srbuf.length; i++)
		appendToListBox("speechDomainsBox", srbuf[i]);
    }
	
if(typeof autostopDomains == "string") {
	autostopDomains = JSON.parse(autostopDomains);
	var asbuf = [];
	for(var domain in autostopDomains)
		asbuf.push(domain);
        asbuf.sort();
	for(var i = 0; i < asbuf.length; i++)
		appendToListBox("autostopDomainsBox", asbuf[i]);
    }
		
// temp fix for range bars
var slidertemp = default_opacity;$('slider').value = slidertemp;$('example1').style.opacity = (slidertemp/100);$('example2').style.opacity = (slidertemp/100);
var arangeblurtemp = default_arangeblur;$('arangeblur').value = arangeblurtemp;
var arangespreadtemp = default_arangespread;$('arangespread').value = arangespreadtemp;
test();
dynamictest();

    } // for safari.settings
}, false); // for safari.settings

// show remember page
var countremember = window.localStorage.getItem("countremember");
if(!countremember){countremember = 0;}
countremember = parseInt(countremember) + 1;
if(window.localStorage.getItem("optionskipremember") != 'true'){
	if(countremember >= 5) {$('remembershare').style.display = "";countremember = 0;}
	else {$('remembershare').style.display = "none";}
} else {$('remembershare').style.display = "none";}
window.localStorage['countremember'] = countremember;

	// load tab div
	var tabListItems = $('navbar').childNodes;
	for ( var i = 0; i < tabListItems.length; i++ ) {
		if ( tabListItems[i].nodeName == 'LI' ) {
		var tabLink = getFirstChildWithTagName( tabListItems[i], 'A' );
		var id = getHash( tabLink.getAttribute('onclick') );
		tabLinks[id] = tabLink;
		contentDivs[id] = $( id );
        }
    }
    
    // Assign onclick events to the tab links, and
    // highlight the first tab
    var i = 0;
 
    for ( var id in tabLinks ) {
    	tabLinks[id].onclick = showTab;
		tabLinks[id].onfocus = function() { this.blur() };
		if ( i == 0 ) tabLinks[id].className = 'navbar-item-selected';
		i++;
    }
    
    // Hide all content divs except the first
    var i = 0;
 
    for ( var id in contentDivs ) {
    	if ( i != 0 ) contentDivs[id].className = 'page hidden';
        i++;
    }

    // display version number
	var tempsafariexversion = safari.extension.displayVersion; // Safari 6 or higher
function safariexversion(x,y) {
	var mygetrequest = new XMLHttpRequest();
	mygetrequest.onreadystatechange = function(){
		if (mygetrequest.readyState == 4){
			if (mygetrequest.status == 200 || window.location.href.indexOf("http") == -1){
			var output = mygetrequest.responseText;
			var myRe = /<string\b[^>]*>([\s\S]*?)<\/string>/gm, myArray, kwa = "";
			while((myArray = myRe.exec(output)) !== null)
			{
				for(var i=1;i<myArray.length;i++)
				{
					kwa += '"' + myArray[i] + '"';		
					kwa += ",";
				}
			}
			var sad = kwa.substring(0, kwa.length - 1);
			var pieces = sad.split(/,(?!(?:[^",]|[^"],[^"])+")/);
			var a;
			for(var i = 0; i < pieces.length; i++){
			a = pieces[i+5];
			a = a.substring(0, a.length - 1); // remove the end "
			a = a.substring(1); // remove the begin "
			$("version_number").innerText = a;
			if(x == a){$("sectionreviewbox").style.display = "none";}
			if(y == a){$("sectionauroraplayerappbox").style.display = "none";}
			break;
	  }
	 }else{ a = "unknow"; }
	}
	}
	try {
	mygetrequest.open("GET", ''+safari.extension.baseURI+"Info.plist"+'', true);
	mygetrequest.send(null);
	}
	catch(err){}	
    return a;
}

var mygetrequest = new XMLHttpRequest();
mygetrequest.onreadystatechange = function(){
	if (mygetrequest.readyState == 4){
		if (mygetrequest.status == 200 || window.location.href.indexOf("http") == -1){
		var output = mygetrequest.responseText;
		var myRe = /<string\b[^>]*>([\s\S]*?)<\/string>/gm, myArray, kwa = "";
		while((myArray = myRe.exec(output)) !== null)
		{
			for(var i=1;i<myArray.length;i++)
			{
				kwa += '"' + myArray[i] + '"';		
				kwa += ",";
			}
		}
		var sad = kwa.substring(0, kwa.length - 1);
		var pieces = sad.split(/,(?!(?:[^",]|[^"],[^"])+")/);
		var a;
		for(var i = 0; i < pieces.length; i++){
		a = pieces[i+5];
		a = a.substring(0, a.length - 1); // remove the end "
		a = a.substring(1); // remove the begin "
		$("version_number").innerText = a;
		break;
  }
 }else{ a = "unknow"; }
}
}
try {
mygetrequest.open("GET", ''+safari.extension.baseURI+"Info.plist"+'', true);
mygetrequest.send(null);
}
catch(err){}

// ambilight play detect
		var startambilight = setInterval(function () {
		try {
		var htmlplayer = document.getElementsByTagName("video") || null;
		var playerid = null, item = null;
		for(var j=0; j<htmlplayer.length; j++) {
			if (htmlplayer[j].play){playerid = htmlplayer[j]; item = j + 1; drawImage(playerid, item);}
		}
		}
		catch(err) {} // i see nothing, that is good
		},20); // 20 refreshing it
		
// default example2 is not display
example2.style.opacity = 0;example2.style.display = 'none';
// default hide this buttons
wallpapershow.style.display = 'none';dynamicshow.style.display = 'none';
}



// animation browser engine
window.requestAnimFrame = function(){
    return (
        window.requestAnimationFrame       || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame    || 
        window.oRequestAnimationFrame      || 
        window.msRequestAnimationFrame     || 
        function(/* function */ callback){
            window.setTimeout(callback, 1000 / 60);
        }
    );
}();

var countA = 0, countB = 0, countC = 0; // start from zero (blur spread) and size (left right top under) position

// ambilight draw code
function drawImage(){
	var v = $("beeld");
	if(v.paused || v.ended){
	// v.style.webkitBoxShadow = "";

	// animation go out
	countA=countA-1;if (countA <= 0){countA=0;}
	countB=countB-1;if (countB <= 0){countB=0;}
	countC=countC-1;if (countC <= 0){countC=0;}
	var textcountA = countA + "px";
	var textcountB = countB + "px";

var canvas = $("totlCanvas1");
if(canvas){
	var context = canvas.getContext('2d');
	var imageData = context.getImageData(0, 0, 1, 1);
	var data = imageData.data;

	function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
	}

	var p1 = context.getImageData(0 , 0, 1, 1).data;
	var p2 = context.getImageData(1 , 0, 1, 1).data;
	var p3 = context.getImageData(2 , 0, 1, 1).data;
	var p4 = context.getImageData(3 , 0, 1, 1).data;
	var hex1 = "#" + ("000000" + rgbToHex(p1[0], p1[1], p1[2])).slice(-6);
	var hex2 = "#" + ("000000" + rgbToHex(p2[0], p2[1], p2[2])).slice(-6);
	var hex3 = "#" + ("000000" + rgbToHex(p3[0], p3[1], p3[2])).slice(-6);
	var hex4 = "#" + ("000000" + rgbToHex(p4[0], p4[1], p4[2])).slice(-6);
}
var downhex1 = hex1; if(!hex1){ hex1 = "#000000"; } // previous value
var downhex2 = hex2; if(!hex2){ hex2 = "#000000"; } // previous value
var downhex3 = hex3; if(!hex3){ hex3 = "#000000"; } // previous value
var downhex4 = hex4; if(!hex4){ hex4 = "#000000"; } // previous value

	if(ambilightvarcolor.checked == true){
	v.style.webkitBoxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + downhex3 + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + downhex1 + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + downhex2 + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + downhex4 + ""; 
	}
	else if(ambilightfixcolor.checked == true){
	v.style.webkitBoxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + $("ambilightcolorhex").value + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + $("ambilightcolorhex").value + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + $("ambilightcolorhex").value + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + $("ambilightcolorhex").value + "";
	}
	else if(ambilight4color.checked == true){
	v.style.webkitBoxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + $("ambilight1colorhex").value + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + $("ambilight2colorhex").value + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + $("ambilight3colorhex").value + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + $("ambilight4colorhex").value + "";
	}
	// ----
	
	return false;
	}
	if(ambilight.checked == true){
    var showtime = $("beeld");
	var getblur = $('ambilightrangeblurradius').value + "px";
	var getspread = $('ambilightrangespreadradius').value + "px";
	
	// animate out and in
	if (countA < $('ambilightrangespreadradius').value){countA=countA+1;}
	if (countB < $('ambilightrangeblurradius').value){countB=countB+1;}
	if (countC < 20){countC=countC+.5;}
	var textcountA = countA + "px";
	var textcountB = countB + "px";
	
	if(ambilightvarcolor.checked == true){
    var sourceWidth = showtime.videoWidth;
    var sourceHeight = showtime.videoHeight;
    
var totlcheckcanvas = $("totlCanvas1");
if(totlcheckcanvas){}else{
 	var totlnewcanvas = document.createElement("canvas");
	totlnewcanvas.setAttribute('id','totlCanvas1');
	totlnewcanvas.width = "4";
	totlnewcanvas.height = "1";
	totlnewcanvas.style.display = "none";
	document.body.appendChild(totlnewcanvas);
	}

var canvas = $("totlCanvas1");
var context = canvas.getContext("2d");
var colorlamp1X = (sourceWidth * 50) /100; // up midden
var colorlamp1Y = (sourceHeight * 95) /100;
var colorlamp2X = (sourceWidth * 95) /100; // right midden
var colorlamp2Y = (sourceHeight * 50) /100;
var colorlamp3X = (sourceWidth * 50) /100; // down midden
var colorlamp3Y = (sourceHeight * 5) /100;
var colorlamp4X = (sourceWidth * 5) /100; // left midden
var colorlamp4Y = (sourceHeight * 50) /100;
	
	context.drawImage(showtime, colorlamp1X, colorlamp1Y, 1, 1, 0, 0, 1, 1);
	context.drawImage(showtime, colorlamp2X, colorlamp2Y, 1, 1, 1, 0, 1, 1);
	context.drawImage(showtime, colorlamp3X, colorlamp3Y, 1, 1, 2, 0, 1, 1);
	context.drawImage(showtime, colorlamp4X, colorlamp4Y, 1, 1, 3, 0, 1, 1);
	
    var imageData = context.getImageData(0, 0, 1, 1);
    var data = imageData.data;

function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}

    var p1 = context.getImageData(0 , 0, 1, 1).data; 
    var p2 = context.getImageData(1 , 0, 1, 1).data; 
    var p3 = context.getImageData(2 , 0, 1, 1).data; 
    var p4 = context.getImageData(3 , 0, 1, 1).data; 
    var hex1 = "#" + ("000000" + rgbToHex(p1[0], p1[1], p1[2])).slice(-6);
    var hex2 = "#" + ("000000" + rgbToHex(p2[0], p2[1], p2[2])).slice(-6);
    var hex3 = "#" + ("000000" + rgbToHex(p3[0], p3[1], p3[2])).slice(-6);
    var hex4 = "#" + ("000000" + rgbToHex(p4[0], p4[1], p4[2])).slice(-6);

	v.style.webkitBoxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + hex3 + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + hex1 + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + hex2 + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + hex4 + "";
	} else if(ambilightfixcolor.checked == true){
	var fixhex = $("ambilightcolorhex").value;
	if(fixhex)fixhex = fixhex;else fixhex = '#000000';
	v.style.webkitBoxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + fixhex + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + fixhex + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + fixhex + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + fixhex + "";
	} else if(ambilight4color.checked == true){
	var fix1hex = $("ambilight1colorhex").value;
	var fix2hex = $("ambilight2colorhex").value;
	var fix3hex = $("ambilight3colorhex").value;
	var fix4hex = $("ambilight4colorhex").value;
	if(fix1hex)fix1hex = fix1hex;else fix1hex = '#FF0000';
	if(fix2hex)fix2hex = fix2hex;else fix2hex = '#FFEE00';
	if(fix3hex)fix3hex = fix3hex;else fix3hex = '#00FF00';
	if(fix4hex)fix4hex = fix4hex;else fix4hex = '#0000FF';
	v.style.webkitBoxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + fix1hex + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + fix2hex + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + fix3hex + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + fix4hex + "";
	}
	
	window.requestAnimFrame(drawImage);	
}else{v.style.webkitBoxShadow = "";}
}

// Fade engine
//  Variable for the fade in and out effect
var opacity = 0;

var ReducingFinished = true;
var OpacityLevelIncrement = 10;   //  Percentage value: 1-100

//  Function determines whether we show or hide the item referenced by ElementID
function fader(ActionToTake)
{
  DIVElementById = $('example2');
  if (ActionToTake == 'hide')
  { opacity = default_opacity; reduceOpacity(); }
  else if (ActionToTake == 'show')
  { increaseOpacity(); }
}

//  Makes div increase
function increaseOpacity()
{
DIVElementById.style.display = '';
  //  If opacity level is less than default_opacity, we can still increase the opacity
  if ((opacity < default_opacity) && (ReducingFinished == true))
  {
	if ((opacity > (default_opacity-10)) && (ReducingFinished == true)){
    ReducingFinished = true;
    opacity  += (default_opacity - opacity);
    DIVElementById.style.opacity = opacity/100;
	window.requestAnimFrame(increaseOpacity);
	}
	else {
    ReducingFinished = true;
    opacity  += OpacityLevelIncrement;
    DIVElementById.style.opacity = opacity/100;
	window.requestAnimFrame(increaseOpacity);
	}
  }
  else
  {
    ReducingFinished = false;
  }
}

//  Makes div reduce
function reduceOpacity() 
{
  //  If opacity level is greater than 0, we can still reduce the opacity
  if ((opacity > 0) && (ReducingFinished == false))
  {
    ReducingFinished = false;
    opacity  -= OpacityLevelIncrement;
    DIVElementById.style.opacity = opacity/100;
	window.requestAnimFrame(reduceOpacity);
  }
  else
  {
    ReducingFinished = true;

    //  When finished, make sure the DIVElementById is set to remove element
    if (DIVElementById.style.opacity = '0')
    {DIVElementById.style.display = 'none';}
  }
}

// Add a filter string to the list box.
function appendToListBox(boxId, text) { var elt = document.createElement("option"); elt.text = text; elt.value = text; $(boxId).add(elt, null); }

// tabel script
    var tabLinks = new Array();
    var contentDivs = new Array();
 
    function showTab() {
      var selectedId = getHash( this.getAttribute('onclick') );
 
      // Highlight the selected tab, and dim all others.
      // Also show the selected content div, and hide all others.
      for ( var id in contentDivs ) {
        if ( id == selectedId ) {
          tabLinks[id].className = 'navbar-item-selected';
          contentDivs[id].className = 'page';
        } else {
          tabLinks[id].className = 'navbar-item';
          contentDivs[id].className = 'page hidden';
        }
      }
 
      // Stop the browser following the link
      return false;
    }
 
    function getFirstChildWithTagName( element, tagName ) {
      for ( var i = 0; i < element.childNodes.length; i++ ) {
        if ( element.childNodes[i].nodeName == tagName ) return element.childNodes[i];
      }
    }
 
    function getHash( url ) {
      var hashPos = url.lastIndexOf ( '#' );
      return url.substring( hashPos + 1 );
    }

// whitelist eye domain
function addWhitelistDomain() {
    var domain = $("websiteurl").value;
    appendToListBox("excludedDomainsBox", domain);
    save_options();
}

function removeSelectedExcludedDomain() {
    var excludedDomainsBox = $("excludedDomainsBox");
    for (var i = excludedDomainsBox.length-1; i >= 0; i--) {
        if (excludedDomainsBox.options[i].selected)
            excludedDomainsBox.remove(i);
    }
    save_options();
}

// whitelist autoplay domain
function autoplayaddWhitelistDomain() {
    var domain = $("autoplaywebsiteurl").value;
    appendToListBox("autoplayDomainsBox", domain);
    save_options();
}

function autoplayremoveSelectedExcludedDomain() {
    var autoplayDomainsBox = $("autoplayDomainsBox");
    for (var i = autoplayDomainsBox.length-1; i >= 0; i--) {
        if (autoplayDomainsBox.options[i].selected)
            autoplayDomainsBox.remove(i);
    }
    save_options();
}

// whitelist atmosphere domain
function atmosphereaddWhitelistDomain() {
    var domain = $("atmospherewebsiteurl").value;
    appendToListBox("atmosphereDomainsBox", domain);
    save_options();
}

function atmosphereremoveSelectedExcludedDomain() {
    var atmosphereDomainsBox = $("atmosphereDomainsBox");
    for (var i = atmosphereDomainsBox.length-1; i >= 0; i--) {
        if (atmosphereDomainsBox.options[i].selected)
            atmosphereDomainsBox.remove(i);
    }
    save_options();
}

// whitelist night domain
function nightaddWhitelistDomain() {
    var domain = $("nightwebsiteurl").value;
    appendToListBox("nightDomainsBox", domain);
    save_options();
}

function nightremoveSelectedExcludedDomain() {
    var nightDomainsBox = $("nightDomainsBox");
    for (var i = nightDomainsBox.length-1; i >= 0; i--) {
        if (nightDomainsBox.options[i].selected)
            nightDomainsBox.remove(i);
    }
    save_options();
}

// whitelist cam motion domain
function cammotionaddWhitelistDomain() {
    var domain = $("cammotionwebsiteurl").value;
    appendToListBox("cammotionDomainsBox", domain);
    save_options();
}

function cammotionremoveSelectedExcludedDomain() {
    var cammotionDomainsBox = $("cammotionDomainsBox");
    for (var i = cammotionDomainsBox.length-1; i >= 0; i--) {
        if (cammotionDomainsBox.options[i].selected)
            cammotionDomainsBox.remove(i);
    }
    save_options();
}

// whitelist speech domain
function speechaddWhitelistDomain() {
    var domain = $("speechwebsiteurl").value;
    appendToListBox("speechDomainsBox", domain);
    save_options();
}

function speechremoveSelectedExcludedDomain() {
    var speechDomainsBox = $("speechDomainsBox");
    for (var i = speechDomainsBox.length-1; i >= 0; i--) {
        if (speechDomainsBox.options[i].selected)
            speechDomainsBox.remove(i);
    }
    save_options();
}

// whitelist autostop domain
function autostopaddWhitelistDomain() {
    var domain = $("autostopwebsiteurl").value;
    appendToListBox("autostopDomainsBox", domain);
    save_options();
}

function autostopremoveSelectedExcludedDomain() {
    var autostopDomainsBox = $("autostopDomainsBox");
    for (var i = autostopDomainsBox.length-1; i >= 0; i--) {
        if (autostopDomainsBox.options[i].selected)
            autostopDomainsBox.remove(i);
    }
    save_options();
}

// fade effects control -> not when loaded page
function lightscontrol() {
var jump = $('interval').value;
default_opacity = jump;
if(onoffrange.value == 0)
{
if(fadeout.checked == true){ReducingFinished = false;fader('hide');}else{example2.style.opacity = 0;example2.style.display = 'none';}
}
else{
if(fadein.checked == true){ReducingFinished = true;fader('show');}else{example2.style.opacity = jump/100;example2.style.display = '';}
}
}

// remove dynamic elements
function removedynamic(){
var newdynmaster = $("stefanvddynamicbackground");
var fishtanks = $('fishtanks');
if(fishtanks) {newdynmaster.removeChild(fishtanks);}
var blocks = $('blocks');
if(blocks) {newdynmaster.removeChild(blocks);}
var raindrops = $('raindrops');
if(raindrops) {newdynmaster.removeChild(raindrops);}
var clouds = $('clouds');
if(clouds) {newdynmaster.removeChild(clouds);}
var space = $('space');
if(space) {newdynmaster.removeChild(space);}
}

// test general
function test() {
if(ambilight.checked == true){
drawImage();
}

// show alert warning
if(ambilightvarcolor.checked == true)
{$('showwarningambilight').style.display = '';}
else{$('showwarningambilight').style.display = 'none';}

// YouTube preview sample
if(head.checked == true)
{$('samplechannel').style.zIndex = 100;$('samplechannel').style.position = 'relative';$('videochannel').style.zIndex = 100;$('videochannel').style.position = 'relative';}
else{$('samplechannel').style.zIndex = 1;$('samplechannel').style.position = 'relative';$('videochannel').style.zIndex = 1;$('videochannel').style.position = 'relative';}

if(playlist.checked == true){} // not visible in the preview
else{}

if(infobar.checked == true)
{$('sampleinforbar').style.zIndex = 100;$('sampleinforbar').style.position = 'relative';}
else{$('sampleinforbar').style.zIndex = 1;$('sampleinforbar').style.position = 'relative';}

if(likebutton.checked == true)
{$('sampledislikebutton').style.zIndex = 100;$('sampledislikebutton').style.position = 'relative';}
else{$('sampledislikebutton').style.zIndex = 1;$('sampledislikebutton').style.position = 'relative';}

if(sharebutton.checked == true)
{$('samplesharebutton').style.zIndex = 100;$('samplesharebutton').style.position = 'relative';}
else{$('samplesharebutton').style.zIndex = 1;$('samplesharebutton').style.position = 'relative';}

if(suggestions.checked == true)
{$('samplesug').style.zIndex = 100;$('samplesug').style.position = 'relative';}
else {$('samplesug').style.zIndex = 1;$('samplesug').style.position = 'relative';}

if(videoheadline.checked == true){$('sampletitle').style.zIndex = 100;$('sampletitle').style.position = 'relative';$('sampletitle').style.color = '#FFFFFF';}
else {$('sampletitle').style.zIndex = 1;$('sampletitle').style.position = 'relative';$('sampletitle').style.color = '#000000';}

if(viewcount.checked == true)
{$('sampleview').style.zIndex = 100;$('sampleview').style.color = 'white';$('sampleview').style.position = 'relative';}
else{$('sampleview').style.zIndex = 1;$('sampleview').style.color = 'black';$('sampleview').style.position = 'relative';}

if(addvideobutton.checked == true)
{$('sampleaddbutton').style.zIndex = 100;$('sampleaddbutton').style.position = 'relative';}
else{$('sampleaddbutton').style.zIndex = 1;$('sampleaddbutton').style.position = 'relative';}

if(likebar.checked == true)
{$('samplelikebar').style.zIndex = 101;$('samplelikebar').style.position = 'relative';}
else{$('samplelikebar').style.zIndex = 'auto';$('samplelikebar').style.position = 'relative';}

/* --- end YouTube preview --- */
if(ambilight.checked == true)
{$('arangespread').disabled = false;$('ambilightrangespreadradius').disabled = false;$('arangeblur').disabled = false;$('ambilightrangeblurradius').disabled = false;$('ambilightfixcolor').disabled = false;$('ambilightvarcolor').disabled = false;$('ambilightcolorhex').disabled = false;$('ambilight4color').disabled = false;$('ambilight1colorhex').disabled = false;$('ambilight2colorhex').disabled = false;$('ambilight3colorhex').disabled = false;$('ambilight4colorhex').disabled = false;$('atmosvivid').disabled = false;}
else {$('arangespread').disabled = true;$('ambilightrangespreadradius').disabled = true;$('arangeblur').disabled = true;$('ambilightrangeblurradius').disabled = true;$('ambilightfixcolor').disabled = true;$('ambilightvarcolor').disabled = true;$('ambilightcolorhex').disabled = true;$('ambilight4color').disabled = true;$('ambilight1colorhex').disabled = true;$('ambilight2colorhex').disabled = true;$('ambilight3colorhex').disabled = true;$('ambilight4colorhex').disabled = true;$('atmosvivid').disabled = true;}

if(lightimagea.checked == true)
{$('lightimagen').checked = false;$('example1').style.background = 'url(' + $('lightimage').value + ')';$('example1').style.backgroundSize = "100% 100%";$('example2').style.background = 'url(' + $('lightimage').value + ')';$('example2').style.backgroundSize = "100% 100%";$('lightimage').disabled = false;$('lightcolor').disabled = true;
$('mousespotlighta').disabled = true;$('mousespotlightc').disabled = true;$('mousespotlighto').checked = true;}
else if(lightimagen.checked == true){$('lightimagen').checked = true;$('example1').style.background = $('lightcolor').value;$('example2').style.background = $('lightcolor').value;$('lightimage').disabled = true;$('lightcolor').disabled = false;
$('mousespotlighta').disabled = false;$('mousespotlightc').disabled = false;}
else if(lightimagelin.checked == true)
{var linearsq = document.getElementById("linearsq");
$('example1').style.background = 'linear-gradient(to ' + linearsq.options[linearsq.selectedIndex].value + ', ' + $('colora').value + ' ' + $('intervallina').value + '%,' + $('colorb').value + ' ' + $('intervallinb').value + '%)';
$('example2').style.background = 'linear-gradient(to ' + linearsq.options[linearsq.selectedIndex].value + ', ' + $('colora').value + ' ' + $('intervallina').value + '%,' + $('colorb').value + ' ' + $('intervallinb').value + '%)';
$('mousespotlighta').disabled = true;$('mousespotlightc').disabled = true;$('mousespotlighto').checked = true;
}

if(eyen.checked == true){$('ecosaver').disabled = false;$('ecosavertime').disabled = false;$('confirmtimesaver').disabled = false;$('helpeyeprotection').style.display = "none";$('excludedDomainsBox').disabled = true;$('websiteurl').disabled = true;$('autoplay').disabled = false;$('autoplaydelay').disabled = false;$('autoplaydelaytime').disabled = false;$('addbutton').disabled = true;$('removebutton').disabled = true;$('nighttime').disabled = false;$('begintime').disabled = false;$('endtime').disabled = false;$('confirmtime').disabled = false;$('helpautoplay').style.display = "none";$('eyechecklistwhite').disabled = true;$('eyechecklistblack').disabled = true;}
else if(eyea.checked == true){$('ecosaver').disabled = false;$('ecosavertime').disabled = false;$('confirmtimesaver').disabled = false;$('helpeyeprotection').style.display = "";$('excludedDomainsBox').disabled = true;$('websiteurl').disabled = true;$('autoplay').checked = false;$('autoplaydelay').disabled = true;$('autoplaydelaytime').disabled = true;$('addbutton').disabled = true;$('removebutton').disabled = true;$('nighttime').disabled = false;$('begintime').disabled = false;$('endtime').disabled = false;$('confirmtime').disabled = false;$('helpautoplay').style.display = "";$('eyechecklistwhite').disabled = true;$('eyechecklistblack').disabled = true;}
else if(eyealist.checked == true){$('ecosaver').disabled = false;$('ecosavertime').disabled = false;$('confirmtimesaver').disabled = false;$('helpeyeprotection').style.display = "";$('excludedDomainsBox').disabled = false;$('websiteurl').disabled = false;$('autoplay').checked = false;$('autoplaydelay').disabled = true;$('autoplaydelaytime').disabled = true;$('addbutton').disabled = false;$('removebutton').disabled = false;$('nighttime').disabled = false;$('begintime').disabled = false;$('endtime').disabled = false;$('confirmtime').disabled = false;$('helpautoplay').style.display = "";$('eyechecklistwhite').disabled = false;$('eyechecklistblack').disabled = false;}

if(mousespotlighto.checked == true)
{$('eastereggs').disabled = false;} // eastereggs OFF
else{$('eastereggs').disabled = true;$('eastereggs').checked = false;} // active box eastereggs

if(nighttime.checked == true)
{}
else{$('begintime').disabled = true;$('endtime').disabled = true;$('confirmtime').disabled = true;}

if(password.checked == true)
{$('enterpassword').disabled = false;$('confirmpassword').disabled = false;}
else{$('enterpassword').disabled = true;$('confirmpassword').disabled = true;}

if(ecosaver.checked == true)
{$('ecosavertime').disabled = false;$('confirmtimesaver').disabled = false;$('nighttime').disabled = false;
	if(eyen.checked == true){
	$('begintime').disabled = false;$('endtime').disabled = false;$('confirmtime').disabled = false;
	}
}
else{$('ecosavertime').disabled = true;$('confirmtimesaver').disabled = true;
	if(eyen.checked == true){
	$('nighttime').disabled = true;$('begintime').disabled = true;$('endtime').disabled = true;$('confirmtime').disabled = true;
	}
}

if(autoplayonly.checked == true)
{$('autoplayonly').checked = true;$('autoplayDomainsBox').disabled = false;$('autoplaywebsiteurl').disabled = false;$('autoplayaddbutton').disabled = false;$('autoplayremovebutton').disabled = false;$('autoplaychecklistwhite').disabled = false;$('autoplaychecklistblack').disabled = false;}
else{$('autoplayonly').checked = false;$('autoplayDomainsBox').disabled = true;$('autoplaywebsiteurl').disabled = true;$('autoplayaddbutton').disabled = true;$('autoplayremovebutton').disabled = true;$('autoplaychecklistwhite').disabled = true;$('autoplaychecklistblack').disabled = true;}

if(atmosphereonly.checked == true)
{$('atmosphereonly').checked = true;$('atmosphereDomainsBox').disabled = false;$('atmospherewebsiteurl').disabled = false;$('atmosphereaddbutton').disabled = false;$('atmosphereremovebutton').disabled = false;}
else{$('atmosphereonly').checked = false;$('atmosphereDomainsBox').disabled = true;$('atmospherewebsiteurl').disabled = true;$('atmosphereaddbutton').disabled = true;$('atmosphereremovebutton').disabled = true;}

if(nightonly.checked == true)
{$('nightonly').checked = true;$('nightDomainsBox').disabled = false;$('nightwebsiteurl').disabled = false;$('nightaddbutton').disabled = false;$('nightremovebutton').disabled = false;$('nightmodechecklistwhite').disabled = false;$('nightmodechecklistblack').disabled = false;}
else{$('nightonly').checked = false;$('nightDomainsBox').disabled = true;$('nightwebsiteurl').disabled = true;$('nightaddbutton').disabled = true;$('nightremovebutton').disabled = true;$('nightmodechecklistwhite').disabled = true;$('nightmodechecklistblack').disabled = true;}

if(autoplay.checked == true)
{$('eyen').checked = true;$('excludedDomainsBox').disabled = true;$('websiteurl').disabled = true;$('autoplaydelay').disabled = false;$('autoplaydelaytime').disabled = false;}
else {$('autoplaydelay').disabled = true;$('autoplaydelaytime').disabled = true;}

if(motion.checked == true)
{cameramotionlights();}
else{cameramotionlights();}

if(speech.checked == true)
{speechrecognition();}
else{speechrecognition();}

if(cammotiononly.checked == true)
{$('cammotiononly').checked = true;$('cammotionDomainsBox').disabled = false;$('cammotionwebsiteurl').disabled = false;$('cammotionaddbutton').disabled = false;$('cammotionremovebutton').disabled = false;}
else{$('cammotiononly').checked = false;$('cammotionDomainsBox').disabled = true;$('cammotionwebsiteurl').disabled = true;$('cammotionaddbutton').disabled = true;$('cammotionremovebutton').disabled = true;}

if(speechonly.checked == true)
{$('speechonly').checked = true;$('speechDomainsBox').disabled = false;$('speechwebsiteurl').disabled = false;$('speechaddbutton').disabled = false;$('speechremovebutton').disabled = false;}
else{$('speechonly').checked = false;$('speechDomainsBox').disabled = true;$('speechwebsiteurl').disabled = true;$('speechaddbutton').disabled = true;$('speechremovebutton').disabled = true;}

if(nightactivetime.checked == true){$('nmbegintime').disabled = false;$('nmendtime').disabled = false;$('nmconfirmtime').disabled = false;}
else{$('nmbegintime').disabled = true;$('nmendtime').disabled = true;$('nmconfirmtime').disabled = true;}

if(nighttheme.checked == true){$('lampandnightmode').disabled = false;}
else{$('lampandnightmode').disabled = true;}

if(autostoponly.checked == true){$('autostopDomainsBox').disabled = false;$('autostopremovebutton').disabled = false;$('autostopaddbutton').disabled = false;$('autostopwebsiteurl').disabled = false;$('autostopchecklistwhite').disabled = false;$('autostopchecklistblack').disabled = false;}
else{$('autostopDomainsBox').disabled = true;$('autostopremovebutton').disabled = true;$('autostopaddbutton').disabled = true;$('autostopwebsiteurl').disabled = true;$('autostopchecklistwhite').disabled = true;$('autostopchecklistblack').disabled = true;}
}

function dynamictest(){
var newdynmaster = $("stefanvddynamicbackground");
if(dynamic.checked == true){
if(dynamic1.checked == true){
removedynamic();
	var fishtanks = document.createElement("div");fishtanks.setAttribute('id','fishtanks');newdynmaster.appendChild(fishtanks);

	var newdynleft = document.createElement("div");newdynleft.setAttribute('class','stefanvddynamicbackgroundbubbleleft');fishtanks.appendChild(newdynleft);
	for(var i = 0; i < 5; i++ ){var newdyn = document.createElement("div");newdyn.setAttribute('class','stefanvddynamicbackgroundbubbles stefanvddynamicbubbles'+i+'');newdynleft.appendChild(newdyn);}
	var newdynmid = document.createElement("div");newdynmid.setAttribute('class','stefanvddynamicbackgroundbubblemid');fishtanks.appendChild(newdynmid);
	for(var i = 6; i < 10; i++ ){var newdyn = document.createElement("div");newdyn.setAttribute('class','stefanvddynamicbackgroundbubbles stefanvddynamicbubbles'+i+'');newdynmid.appendChild(newdyn);}			
	var newdynright = document.createElement("div");newdynright.setAttribute('class','stefanvddynamicbackgroundbubbleright');fishtanks.appendChild(newdynright);	
	for(var i = 11; i < 16; i++ ){var newdyn = document.createElement("div");newdyn.setAttribute('class','stefanvddynamicbackgroundbubbles stefanvddynamicbubbles'+i+'');newdynright.appendChild(newdyn);}					
}
else if(dynamic2.checked == true){
removedynamic();
	var blocks = document.createElement("div");blocks.setAttribute('id','blocks');newdynmaster.appendChild(blocks);

	var newdynleft = document.createElement("div");newdynleft.setAttribute('class','stefanvddynamicbackgroundblockleft');blocks.appendChild(newdynleft);
	for(var i = 1; i < 21; i++ ){var newdyn = document.createElement("div");newdyn.setAttribute('class','stefanvddynamicbackgroundblocks stefanvddynamicblocks'+i+'');newdynleft.appendChild(newdyn);}
}
else if(dynamic3.checked == true){
removedynamic();
	var raindrops = document.createElement("div");raindrops.setAttribute('id','raindrops');newdynmaster.appendChild(raindrops);

	var newdynleft = document.createElement("div");newdynleft.setAttribute('class','stefanvddynamicbackgroundblockleft');raindrops.appendChild(newdynleft);
	for(var i = 0; i < 15; i++ ){var newdyn = document.createElement("div");newdyn.setAttribute('class','stefanvddynamicbackgroundraindrups b'+i+'');newdynleft.appendChild(newdyn);}
}
else if(dynamic4.checked == true){
removedynamic();
	var clouds = document.createElement("div");clouds.setAttribute('id','clouds');newdynmaster.appendChild(clouds);
	var newdynworld = document.createElement("div");newdynworld.setAttribute('id','stefanvdworld');clouds.appendChild(newdynworld);			
(function() {
		var lastTime = 0;
		var vendors = ['ms', 'moz', 'webkit', 'o'];
		for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
			window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
			window.cancelRequestAnimationFrame = window[vendors[x]+'CancelRequestAnimationFrame'];
		}
		if (!window.requestAnimationFrame)
			window.requestAnimationFrame = function(callback, element) {
				var currTime = new Date().getTime();
				var timeToCall = Math.max(0, 16 - (currTime - lastTime));
				var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
				  timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};

		if (!window.cancelAnimationFrame)window.cancelAnimationFrame = function(id) {clearTimeout(id);};
	}())

	var layers = [],objects = [],world = document.getElementById('stefanvdworld'),viewport = document.getElementById('stefanvddynamicbackground'),	
	d = 0,p = 400,worldXAngle = 0,worldYAngle = 0;
	
	viewport.style.webkitPerspective = p;viewport.style.MozPerspective = p;viewport.style.oPerspective = p;
	generate();
	
	function createCloud() {
		var div = document.createElement( 'div'  );
		div.className = 'stefanvdcloudBase';
		var x = 256 - ( Math.random() * 512 );
		var y = 256 - ( Math.random() * 512 );
		var z = 256 - ( Math.random() * 512 );
		var t = 'translateX(' + x + 'px) translateY(' + y + 'px) translateZ(' + z + 'px)';
		div.style.webkitTransform = t;div.style.MozTransform = t;div.style.oTransform = t;
		world.appendChild(div);
		
		for( var j = 0; j < 5 + Math.round( Math.random() * 10 ); j++ ) {
			var cloud = document.createElement('div');
			cloud.style.opacity = 0;
			cloud.style.opacity = .8;
			cloud.className = 'stefanvdcloudLayer';
			var x = 256 - ( Math.random() * 512 );
			var y = 256 - ( Math.random() * 512 );
			var z = 100 - ( Math.random() * 200 );
			var a = Math.random() * 360;;
			var s = .25 + Math.random();
			x *= .2; y *= .2;
			cloud.data = {x: x,y: y,z: z,a: a,s: s,speed: .1 * Math.random()};
			var t = 'translateX(' + x + 'px) translateY(' + y + 'px) translateZ(' + z + 'px) rotateZ(' + a + 'deg) scale(' + s + ')';
			cloud.style.webkitTransform = t;cloud.style.MozTransform = t;cloud.style.oTransform = t;
			div.appendChild(cloud);
			layers.push(cloud);
		}
		return div;
	}
	
	function generate() {
		objects = [];
		if (world.hasChildNodes()) {
			while ( world.childNodes.length >= 1 ) {world.removeChild(world.firstChild);} 
		}
		for(var j = 0; j < 5; j++) {objects.push(createCloud());}
	}
	
	function updateView(){
		var t = 'translateZ( ' + d + 'px ) rotateX( ' + worldXAngle + 'deg) rotateY( ' + worldYAngle + 'deg)';
		world.style.webkitTransform = t;world.style.MozTransform = t;world.style.oTransform = t;}
	
	function update (){
		for( var j = 0; j < layers.length; j++ ) {
			var layer = layers[ j ];
			layer.data.a += layer.data.speed;
			var t = 'translateX(' + layer.data.x + 'px) translateY(' + layer.data.y + 'px) translateZ(' + layer.data.z + 'px) rotateY(' + ( - worldYAngle ) + 'deg) rotateX(' + ( - worldXAngle ) + 'deg) rotateZ(' + layer.data.a + 'deg) scale(' + layer.data.s + ')';
			layer.style.webkitTransform = t;layer.style.MozTransform = t;layer.style.oTransform = t;
		}
		requestAnimationFrame(update);
	}
	update();


}
else if(dynamic5.checked == true){

removedynamic();
if(hoveroptiondyn5.checked == true){
	var space = document.createElement("div");space.setAttribute('id','space');newdynmaster.appendChild(space);

	var newdynspaceworld = document.createElement("div");newdynspaceworld.setAttribute('id','stefanvddynamicspace');space.appendChild(newdynspaceworld);			
	for(var j = 1; j < 17; j++ ){
	if(j<=9){j="0"+j}
		var newdynpart1 = document.createElement("div");
		newdynpart1.setAttribute('id','p'+ j);newdynspaceworld.appendChild(newdynpart1);
		for(var i = 1; i < 31; i++ ){
		if(i<=9){i="0"+i}
		var newdynlow = document.createElement("b");newdynlow.setAttribute('class','s0'+i+'');newdynpart1.appendChild(newdynlow);
		}
	}
}else{
	var space = document.createElement("div");space.setAttribute('id','space');newdynmaster.appendChild(space);

	var newdynspaceworld = document.createElement("div");newdynspaceworld.setAttribute('id','stefanvddynamicspacenoflying');space.appendChild(newdynspaceworld);			
	for(var j = 1; j < 17; j++ ){
	if(j<=9){j="0"+j}
		var newdynpart1 = document.createElement("div");
		newdynpart1.setAttribute('id','np'+ j);newdynspaceworld.appendChild(newdynpart1);
		for(var i = 1; i < 31; i++ ){
		if(i<=9){i="0"+i}
		var newdynlow = document.createElement("b");newdynlow.setAttribute('class','ns0'+i+'');newdynpart1.appendChild(newdynlow);
		}
	}
}
	
}
}
}

// Cam Motion
var localMediaStream = null;

var width; var height;
var huemin; var huemax; var satmin; var satmax; var valmin; var valmax;
var last; var thresh; var down; var wasdown;
var movethresh; var brightthresh; var overthresh;
var avg;
var state;
var intervalID;
var draw;
var skin_filter;
var r; var g; var b; var a;
var hsv;
var delt;

window.URL = window.URL || window.webkitURL;
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

document.addEventListener("DOMContentLoaded", function(event) {
var video = document.getElementById('motionvideo');
var canvas = document.getElementById('motioncanvas');
var canvasgetcont = canvas.getContext('2d');
var ccanvas = document.getElementById('motioncomp');
var ccgetcont = ccanvas.getContext('2d');

// document.getElementById('motionvideo').addEventListener('timeupdate', function(){ dump(); });
document.getElementById('motionvideo').addEventListener('play', function(){ intervalID = window.setInterval(dump,1000/25); });

var compression = 5;
width = height = 0;

        function dump() {
            if (localMediaStream) {
                if (canvas.width != video.videoWidth) {
                    width = Math.floor(video.videoWidth / compression);
                    height = Math.floor(video.videoHeight / compression);
                    canvas.width = ccanvas.width = width;
                    canvas.height = ccanvas.height = height;
                }
                if (width != 0) {
                    canvasgetcont.drawImage(video, width, 0, -width, height);
                    draw = canvasgetcont.getImageData(0, 0, width, height);
                    //ccgetcont.putImageData(draw,0,0);
                    skinfilter();
                    camtest();
                }
            }
        }

huemin = 0.0; huemax = 0.10; satmin = 0.0; satmax = 1.0; valmin = 0.4; valmax = 1.0;
        function skinfilter() {
            skin_filter = canvasgetcont.getImageData(0, 0, width, height)
            var total_pixels = skin_filter.width * skin_filter.height
            var index_value = total_pixels * 4

            var count_data_big_array = 0;
            for (var y = 0 ; y < height ; y++) {
                for (var x = 0 ; x < width ; x++) {
                    index_value = x + y * width
                    r = draw.data[count_data_big_array]
                    g = draw.data[count_data_big_array + 1]
                    b = draw.data[count_data_big_array + 2]
                    a = draw.data[count_data_big_array + 3]

                    hsv = rgb2Hsv(r, g, b);
                    //When the hand is too lose (hsv[0] > 0.59 && hsv[0] < 1.0)
                    //Skin Range on HSV values
                    if (((hsv[0] > huemin && hsv[0] < huemax) || (hsv[0] > 0.59 && hsv[0] < 1.0)) && (hsv[1] > satmin && hsv[1] < satmax) && (hsv[2] > valmin && hsv[2] < valmax)) {

                        skin_filter[count_data_big_array] = r
                        skin_filter[count_data_big_array + 1] = g
                        skin_filter[count_data_big_array + 2] = b
                        skin_filter[count_data_big_array + 3] = a
                    } else {

                        skin_filter.data[count_data_big_array] =
                        skin_filter.data[count_data_big_array + 1] =
                        skin_filter.data[count_data_big_array + 2] = 0
                        skin_filter.data[count_data_big_array + 3] = 0
                    }

                    count_data_big_array = index_value * 4;
                }
            }
            draw = skin_filter
        }

        function rgb2Hsv(r, g, b) {

            r = r / 255
            g = g / 255
            b = b / 255;

            var max = Math.max(r, g, b)
            var min = Math.min(r, g, b);

            var h, s, v = max;

            var d = max - min;

            s = max == 0 ? 0 : d / max;

            if (max == min) {
                h = 0; // achromatic
            } else {

                switch (max) {
                    case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                    case g: h = (b - r) / d + 2; break;
                    case b: h = (r - g) / d + 4; break;
                }
                h /= 6;
            }

            return [h, s, v];
        }

        last = false; thresh = 150; down = false; wasdown = false;
        function camtest() {
            delt = canvasgetcont.createImageData(width, height)
            if (last !== false) {
                var totalx = 0, totaly = 0, totald = 0, totaln = delt.width * delt.height
                , dscl = 0
                , pix = totaln * 4; while (pix -= 4) {
                    var d = Math.abs(
                            draw.data[pix] - last.data[pix]
                    ) + Math.abs(
                            draw.data[pix + 1] - last.data[pix + 1]
                    ) + Math.abs(
                            draw.data[pix + 2] - last.data[pix + 2]
                    )
                    if (d > thresh) {
                        delt.data[pix] = 160
                        delt.data[pix + 1] = 255
                        delt.data[pix + 2] =
                delt.data[pix + 3] = 255
                        totald += 1
                        totalx += ((pix / 4) % width)
                        totaly += (Math.floor((pix / 4) / delt.height))
                    }
                    else {
                        delt.data[pix] =
                                delt.data[pix + 1] =
                                delt.data[pix + 2] = 0
                        delt.data[pix + 3] = 0
                    }
                }
            }
            //slide.setAttribute('style','display:initial')
            //slide.value=(totalx/totald)/width
            if (totald) {
                down = {
                    x: totalx / totald,
                    y: totaly / totald,
                    d: totald
                }
                handledown()
            }
            //console.log(totald)
            last = draw
            ccgetcont.putImageData(delt, 0, 0)
        }
        movethresh = 2; brightthresh = 300; overthresh = 1000;
        function calibrate() {
            wasdown = {
                x: down.x,
                y: down.y,
                d: down.d
            }
        }
        avg = 0;
        state = 0;//States: 0 waiting for gesture, 1 waiting for next move after gesture, 2 waiting for gesture to end
        function handledown() {
        avg = 0.9 * avg + 0.1 * down.d;
            var davg = down.d - avg, good = davg > brightthresh;
            //console.log(davg)
            switch (state) {
                case 0:
                    if (good) {//Found a gesture, waiting for next move
                        state = 1
                        calibrate()
                    }
                    break
                case 2://Wait for gesture to end
                    if (!good) {//Gesture ended
                        state = 0
                    }
                    break;
                case 1://Got next move, do something based on direction
                    var dx = down.x - wasdown.x, dy = down.y - wasdown.y
                    var dirx = Math.abs(dy) < Math.abs(dx)//(dx,dy) is on a bowtie
                    //console.log(good,davg)
                    if (dx < -movethresh && dirx) {
                        //console.log('right')
                    }
                    else if (dx > movethresh && dirx) {
                        //console.log('left')
                    }
                    if (dy > movethresh && !dirx) {
                        if (davg > overthresh) {
                            //console.log('over up');
							writeinlog("over up");
                        }
                        else{
                            //console.log('up')
							writeinlog("up");
                        }
                    }
                    else if (dy < -movethresh && !dirx) {
                        if (davg > overthresh) {
							//console.log('over down')
							//writeinlog("over down");
                        }
                        else{
							//console.log('down')
							//writeinlog("down");
                        }
                    }
                    state = 2
                    break
            }
        }

function writeinlog(text){
var currentdate = new Date();
var datetime = "Last Action: " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
document.getElementById('stefanmotion').innerHTML = datetime + " " + text +"<br>" + document.getElementById('stefanmotion').innerHTML;
}

});

function cameramotionlights(){
if(document.getElementById('motion').checked == true){
var video = document.getElementById('motionvideo');
var canvas = document.getElementById('motioncanvas');
var canvasgetcont = canvas.getContext('2d');
var ccanvas = document.getElementById('motioncomp');
var ccgetcont = ccanvas.getContext('2d');

// reset everything
if(localMediaStream){
document.getElementById('motionvideo').pause();
document.getElementById('motionvideo').src = "";
localMediaStream.stop();
localMediaStream = null;
document.getElementById('motionvideo').load();
canvas = document.getElementById('motioncanvas');
canvasgetcont = canvas.getContext('2d');
canvasgetcont.clearRect(0,0,canvas.width,canvas.height);
ccanvas = document.getElementById('motioncomp');
ccgetcont = ccanvas.getContext('2d');
ccgetcont.clearRect(0,0,ccanvas.width,ccanvas.height);
}

navigator.getUserMedia({audio:false,video:true},function(stream){
        localMediaStream = stream; // Store the video stream
        video.src = window.URL.createObjectURL(stream);
        // video.addEventListener('play', function(){ intervalID = window.setInterval(dump,1000/25); console.log("RUN A"); });
       
},function(){ console.log('Something is wrong here! Check your camera!'); })

} else {
	// remove everything
	document.getElementById('stefanmotion').innerHTML = "";

	if(localMediaStream){
		if($("motionvideo")){
			document.getElementById('motionvideo').pause();
			document.getElementById('motionvideo').src = "";
		}
		localMediaStream.stop();
		localMediaStream = null;
		document.getElementById('motionvideo').load();
		canvas = document.getElementById('motioncanvas');
		canvasgetcont = canvas.getContext('2d');
		canvasgetcont.clearRect(0,0,canvas.width,canvas.height);
		ccanvas = document.getElementById('motioncomp');
		ccgetcont = ccanvas.getContext('2d');
		ccgetcont.clearRect(0,0,ccanvas.width,ccanvas.height);
		window.clearInterval(intervalID);
	}
}
}

// Speech engine sample
// Simple function that checks existence of s in str
var userSaid = function(str, s) {
	return str.indexOf(s) > -1;
}

var final_transcript = '';
var recognizing = false;
var ignore_onend;
var start_timestamp;
if (!('webkitSpeechRecognition' in window)) {
// not supported
} else {
	var recognition = new webkitSpeechRecognition();
	recognition.continuous = true;
	recognition.interimResults = true;

	recognition.onstart = function() {
		recognizing = true;
		// console.log("speak now");
	};

	recognition.onerror = function(event) {
    if (event.error == 'no-speech') {
		// No speech was detected.
		ignore_onend = true;
    }
    if (event.error == 'audio-capture') {
		// No microphone was found.
		ignore_onend = true;
    }
    if (event.error == 'not-allowed') {
		if (event.timeStamp - start_timestamp < 100) {
			// Permission to use microphone is blocked. 
		} else {
			// Permission to use microphone was denied.
		}
		ignore_onend = true;
	}
	};

	recognition.onend = function() {
		recognizing = false;
		// think you are ending, start it back up
			//startButton();
			//location.reload(true);
			// if(document.getElementById('speech').checked == true){
			//recognition.start();
			// }
		if (ignore_onend) {
		return;
		}
		if (!final_transcript) {
		// console.log("Click on the microphone icon and begin speaking.");
		return;
		}
	};
	
var i18nldesspeech1command = chrome.i18n.getMessage("desspeech1command"); // turn off the lights
var i18nldesspeech2command = chrome.i18n.getMessage("desspeech2command"); // turn on the lights
var i18nldesspeech3command = chrome.i18n.getMessage("desspeech3command"); // play video
var i18nldesspeech4command = chrome.i18n.getMessage("desspeech4command"); // pause video

	recognition.onresult = function(event) {
    var interim_transcript = '';
    for (var i = event.resultIndex; i < event.results.length; ++i) {
		if (event.results[i].isFinal) {
			final_transcript = event.results[i][0].transcript;
			if($("stefanvdspeechsaidtext")){$("stefanvdspeechsaidtext").textContent = final_transcript;}
			//console.log(final_transcript);
				if (userSaid(final_transcript, i18nldesspeech1command)) {
				// console.log("yes: lights off");
				}
				else if (userSaid(final_transcript, i18nldesspeech2command)) {
				// console.log("yes: lights on");
				}
				// Play the video
				else if (userSaid(final_transcript, i18nldesspeech3command)) {
				}
				// Stop the video
				else if (userSaid(final_transcript, i18nldesspeech4command)) {
				}
		} else {
			interim_transcript += event.results[i][0].transcript;
		}
	}
	};
}

function startButton(event) {
	// Abort previous instances of recognition already running
    if (recognition && recognition.abort) {
        recognition.abort();
    }
	final_transcript = '';
	
//safari.self.tab.dispatchMessage("getSettings"); // get safari.settings

// listen for an incoming setSettings message
safari.self.addEventListener("message", function(e) {
    if(e.name === "setSettings") {
	safari.extension.settings = e.message;

		var speechcountry = safari.extension.settings['speechcountry'];if(!speechcountry)speechcountry = 'en-US';
		try{ recognition.lang = speechcountry; } catch(e){}
	
    } // for safari.settings
}, false); // for safari.settings	
	
	try{ recognition.start(); } catch(e){}
	ignore_onend = false;
	try{ start_timestamp = event.timeStamp; } catch(e){}
}

function speechrecognition(){
if(document.getElementById('speech').checked == true){
// show icon
$("speechicon").style.display = "";

// start automatic up
if (!recognizing) {
	startButton(event);
}
} else {
try{
	// hide icon
	$("speechicon").style.display = "none";
	if (recognizing) {recognition.stop(); recognition.abort(); recognizing = false;}
	$("stefanvdspeechsaidtext").textContent = "";
}
catch(e){}
}
}

// Current year
function yearnow() {
var today = new Date(); var y0 = today.getFullYear();$("yearnow").innerText = y0;
}

/* Option page body action */
// Read current value settings
window.addEventListener('load', function() {
read_options();
dynamictest();
yearnow();
// Add the YouTube player
$("dont-turn-off-the-lights").src = "http://www.youtube.com/embed/?listType=playlist&list=PLF155F53B3D8D07CB";
// remove loading screen
$('loading').style.display = "none";
});

document.addEventListener('DOMContentLoaded', function () {
// browser check
var nAgt = navigator.userAgent;
var browserName;
var urlbrowservendor = window.navigator.vendor;
if ((nAgt.indexOf("OPR/"))!=-1) {browserName = "Opera";}
else if (urlbrowservendor.search("Apple Computer, Inc.") >= 0) {browserName = "Safari";}
else if (urlbrowservendor.search("Yandex") >= 0) {browserName = "Yandex";}
else if (urlbrowservendor.search("Google") >= 0) {browserName = "Google Chrome";}
else if (navigator.appCodeName == "Mozilla") {browserName = "Firefox";}
else if ((nAgt.indexOf("Maxthon/"))!=-1) {browserName = "Maxthon";}

if (browserName == "Opera") {
// Opera
var stefanvdurl = "https://addons.opera.com/extensions/details/turn-off-the-lights/";
var reviewstefanvdurl = "https://addons.opera.com/extensions/details/turn-off-the-lights/?#feedback-container";
var linkfndownload = "https://addons.opera.com/extensions/details/finance-toolbar/";
var linkppdownload = "https://addons.opera.com/extensions/details/proper-menubar/";
var linkzodownload = "https://addons.opera.com/extensions/details/zoom/";
var linkaadownload = "https://addons.opera.com/extensions/details/ambient-aurea/";
var linkthemedownload = "https://addons.opera.com/themes/details/turn-off-the-lights-theme/";
} else if (browserName == "Google Chrome") {
// Google Chrome
var stefanvdurl = "https://chrome.google.com/webstore/detail/bfbmjmiodbnnpllbbbfblcplfjjepjdn";
var reviewstefanvdurl = "https://chrome.google.com/webstore/detail/turn-off-the-lights/bfbmjmiodbnnpllbbbfblcplfjjepjdn/reviews";
var linkfndownload = "https://chrome.google.com/webstore/detail/finance-toolbar/cichbngoomgnobmmjpagmbkimbamigie";
var linkppdownload = "https://chrome.google.com/webstore/detail/proper-menubar/egclcjdpndeoioimlbbbmdhcaopnedkp";
var linkzodownload = "https://chrome.google.com/webstore/detail/zoom/lajondecmobodlejlcjllhojikagldgd";
var linkaadownload = "https://chrome.google.com/webstore/detail/pkaglmndhfgdaiaccjglghcbnfinfffa";
var linkthemedownload = "https://chrome.google.com/webstore/detail/fpddgembdeaikopmbfiokjolihbamcca";
} else if (browserName == "Safari") {
// Safari
var stefanvdurl = "https://extensions.apple.com/details/?id=com.stefanvd.turnoffthelights-PRR97757HF";
var reviewstefanvdurl = "https://chrome.google.com/webstore/detail/turn-off-the-lights/bfbmjmiodbnnpllbbbfblcplfjjepjdn/reviews";
var linkfndownload = "https://extensions.apple.com/details/?id=com.stefanvd.financetoolbar-PRR97757HF";
var linkppdownload = "https://chrome.google.com/webstore/detail/proper-menubar/egclcjdpndeoioimlbbbmdhcaopnedkp";
var linkzodownload = "https://extensions.apple.com/details/?id=com.stefanvd.zoom-PRR97757HF";
var linkaadownload = "https://extensions.apple.com/details/?id=com.stefanvd.ambientaurea-PRR97757HF";
var linkthemedownload = "https://chrome.google.com/webstore/detail/fpddgembdeaikopmbfiokjolihbamcca";
} else if (browserName == "Firefox") {
// Firefox browser
var stefanvdurl = "https://addons.mozilla.org/firefox/addon/turn-off-the-lights/";
var reviewstefanvdurl = "https://addons.mozilla.org/firefox/addon/turn-off-the-lights/reviews/";
var linkfndownload = "https://addons.mozilla.org/firefox/addon/finance-toolbar/";
var linkppdownload = "https://addons.mozilla.org/firefox/addon/proper-menubar/";
var linkzodownload = "https://addons.mozilla.org/firefox/addon/zoom/";
var linkaadownload = "https://addons.mozilla.org/firefox/addon/ambient-aurea/";
var linkthemedownload = "https://addons.mozilla.org/firefox/addon/turn-off-the-lights-theme/";
} else if (browserName == "Maxthon") {
// Maxthon browser
var stefanvdurl = "http://extension.maxthon.com/detail/index.php?view_id=1813";
var reviewstefanvdurl = "http://extension.maxthon.com/detail/index.php?view_id=1813";
var linkfndownload = "https://chrome.google.com/webstore/detail/finance-toolbar/cichbngoomgnobmmjpagmbkimbamigie";
var linkppdownload = "https://chrome.google.com/webstore/detail/proper-menubar/egclcjdpndeoioimlbbbmdhcaopnedkp";
var linkzodownload = "https://chrome.google.com/webstore/detail/zoom/lajondecmobodlejlcjllhojikagldgd";
var linkaadownload = "https://chrome.google.com/webstore/detail/pkaglmndhfgdaiaccjglghcbnfinfffa";
var linkthemedownload = "http://skin.maxthon.com/detail/index.php?view_id=2015";
} else if (browserName == "Yandex") {
// Yandex browser
var stefanvdurl = "https://chrome.google.com/webstore/detail/bfbmjmiodbnnpllbbbfblcplfjjepjdn";
var reviewstefanvdurl = "https://chrome.google.com/webstore/detail/turn-off-the-lights/bfbmjmiodbnnpllbbbfblcplfjjepjdn/reviews";
var linkfndownload = "https://chrome.google.com/webstore/detail/finance-toolbar/cichbngoomgnobmmjpagmbkimbamigie";
var linkppdownload = "https://chrome.google.com/webstore/detail/proper-menubar/egclcjdpndeoioimlbbbmdhcaopnedkp";
var linkzodownload = "https://chrome.google.com/webstore/detail/zoom/lajondecmobodlejlcjllhojikagldgd";
var linkaadownload = "https://chrome.google.com/webstore/detail/pkaglmndhfgdaiaccjglghcbnfinfffa";
var linkthemedownload = "https://chrome.google.com/webstore/detail/fpddgembdeaikopmbfiokjolihbamcca";
} else {
// default for Microsoft Edge
var stefanvdurl = "https://chrome.google.com/webstore/detail/bfbmjmiodbnnpllbbbfblcplfjjepjdn";
var reviewstefanvdurl = "https://chrome.google.com/webstore/detail/turn-off-the-lights/bfbmjmiodbnnpllbbbfblcplfjjepjdn/reviews";
var linkfndownload = "https://chrome.google.com/webstore/detail/finance-toolbar/cichbngoomgnobmmjpagmbkimbamigie";
var linkppdownload = "https://chrome.google.com/webstore/detail/proper-menubar/egclcjdpndeoioimlbbbmdhcaopnedkp";
var linkzodownload = "https://chrome.google.com/webstore/detail/zoom/lajondecmobodlejlcjllhojikagldgd";
var linkaadownload = "https://chrome.google.com/webstore/detail/pkaglmndhfgdaiaccjglghcbnfinfffa";
var linkthemedownload = "https://chrome.google.com/webstore/detail/fpddgembdeaikopmbfiokjolihbamcca";
}

// Remove remember
$("skipremember").addEventListener('click', function() {$('remembershare').style.display = "none";});
$("firstcheckboxskipremember").addEventListener('click', function() {if(firstcheckboxskipremember.checked == true){$('optionskipremember').checked = true;}save_options();});
var sharetext = "I highly recommended Turn Off the Lights. Download and try it yourself! www.turnoffthelights.com ";
var stefanvdaacodeurl = encodeURIComponent(stefanvdurl);
$("rememberboxrate").addEventListener("click", function() {window.open(reviewstefanvdurl);});
$("rememberboxgoogle").addEventListener("click", function() {window.open('https://plus.google.com/share?ur\l=' + stefanvdaacodeurl + '', 'Share to Google+','width=600,height=460,menubar=no,location=no,status=no');});
$("rememberboxfacebook").addEventListener("click", function() {window.open("https://www.facebook.com/sharer.php?u="+ stefanvdurl + "[URL]&t=" + sharetext + "");});
$("rememberboxtwitter").addEventListener("click", function() {window.open("https://twitter.com/share?url=" + stefanvdaacodeurl + "&text=" + sharetext + " @turnoffthelight", 'Share to Twitter','width=600,height=460,menubar=no,location=no,status=no');});

$("shareboxrate").addEventListener("click", function() {window.open(reviewstefanvdurl);});
$("shareboxgoogle").addEventListener("click", function() {window.open('https://plus.google.com/share?ur\l=' + stefanvdaacodeurl + '', 'Share to Google+','width=600,height=460,menubar=no,location=no,status=no');});
$("shareboxfacebook").addEventListener("click", function() {window.open("https://www.facebook.com/sharer.php?u="+ stefanvdurl + "[URL]&t=" + sharetext + "");});
$("shareboxtwitter").addEventListener("click", function() {window.open("https://twitter.com/share?url=" + stefanvdaacodeurl + "&text=" + sharetext + "@turnoffthelight", 'Share to Twitter','width=600,height=460,menubar=no,location=no,status=no');});

// Detect click / change to save the page and test it.
var inputs = document.querySelectorAll('input');
for (var i = 0; i < inputs.length; i++) {inputs[i].addEventListener('change', test);inputs[i].addEventListener('change', save_options);}

// Detect lightcolor change
$("lightcolor").addEventListener('change', function() {$('lightimagen').checked = true;$('example1').style.background = this.value;$('example2').style.background = this.value;save_options();});

// Detect image change
$("lightimage").addEventListener('change', function() {
function getImage(url) {
    var bkimage = new Image();
    bkimage.onload = function() {
	$('lightimagea').checked = true;
	$('example1').style.background = 'url(' + this.value + ')';
	$('example2').style.background = 'url(' + this.value + ')';
	save_options();
	};
    bkimage.onerror = function() {
	var optionwrongimg = chrome.i18n.getMessage('optionwrongimg');window.alert(optionwrongimg);
	$('lightimagea').checked = true;
	$('lightimage').value = 'http://www.turnoffthelights.com/extension/images/theater.jpg';
	$('example1').style.background = 'url(http://www.turnoffthelights.com/extension/images/theater.jpg)';
	$('example2').style.background = 'url(http://www.turnoffthelights.com/extension/images/theater.jpg)';
	save_options();	
	};
	bkimage.src = url;
}
getImage(this.value);
});

// Close yellow bar
$("managed-prefs-text-close").addEventListener('click', function() {$("managed-prefs-banner").style.display = "none";});

// Slider
$("slider").addEventListener('change', function() {showValue(this.value);save_options();});

// Interval
$("interval").addEventListener('change', function() {showValue(this.value);save_options();});

// Light switch
$("onoffrange").addEventListener('change', function() {lightscontrol();});

// Arangeblur
$("arangeblur").addEventListener('change', function() {showambilightblurValue(this.value);save_options();});
$("ambilightrangeblurradius").addEventListener('change', function() {showambilightblurValue(this.value);save_options();});

// Arangespread
$("arangespread").addEventListener('change', function() {showambilightspreadValue(this.value);save_options();});
$("ambilightrangespreadradius").addEventListener('change', function() {showambilightspreadValue(this.value);save_options();});

// Add website
$("addbutton").addEventListener('click', function() {addWhitelistDomain();});

// Remove website
$("removebutton").addEventListener('click', function() {removeSelectedExcludedDomain();});

// Save time
$("confirmtime").addEventListener('click', function() {save_options();var optiontimetemp = chrome.i18n.getMessage('optiontimesaved');window.alert(optiontimetemp);});

// Save password
$("confirmpassword").addEventListener('click', function() {save_options();var optionpastemp = chrome.i18n.getMessage('optionpasswordsaved');window.alert(optionpastemp);});

// Save time
$("nmconfirmtime").addEventListener('click', function() {save_options();var optiontimetemp = chrome.i18n.getMessage('optiontimesaved');window.alert(optiontimetemp);});

// Save KB download
$("tabbasic").addEventListener('click', function() {OFFworkaroundbugfromsafari();$('welcomeguide').src = "";$('welcomeshare').src = "";$("managed-prefs-banner").style.display = "";});
$("tabvisual").addEventListener('click', function() {ONworkaroundbugfromsafari();$('welcomeguide').src = "";$('welcomeshare').src = "";$("managed-prefs-banner").style.display = "";});
$("tabadvan").addEventListener('click', function() {ONworkaroundbugfromsafari();$('welcomeguide').src = "";$('welcomeshare').src = "";$("managed-prefs-banner").style.display = "";});
$("tabnight").addEventListener('click', function() {ONworkaroundbugfromsafari();$('welcomeguide').src = "";$('welcomeshare').src = "";$("managed-prefs-banner").style.display = "";});
$("tabmotion").addEventListener('click', function() {ONworkaroundbugfromsafari();$('welcomeguide').src = "";$('welcomeshare').src = "";$("managed-prefs-banner").style.display = "";});
$("tabspeech").addEventListener('click', function() {ONworkaroundbugfromsafari();$('welcomeguide').src = "";$('welcomeshare').src = "";$("managed-prefs-banner").style.display = "";});
$("tabguide").addEventListener('click', function() {ONworkaroundbugfromsafari();$('welcomeguide').src = "http://www.turnoffthelights.com/extension/safariguide.html";$('welcomeshare').src = "";$("managed-prefs-banner").style.display = "none";});
$("tabshare").addEventListener('click', function() {ONworkaroundbugfromsafari();$('welcomeguide').src = "";$('welcomeshare').src = "http://www.turnoffthelights.com/extension/fan.html";$("managed-prefs-banner").style.display = "none";});

$("buttonreportissue").addEventListener('click', function() {window.open("http://www.turnoffthelights.com/support");});
$("buttonchangelog").addEventListener('click', function() {window.open("http://www.turnoffthelights.com/extension/safarichangelog.html");});
$("buttonreportlist").addEventListener('click', function() {window.open("http://www.turnoffthelights.com/extension/issueslist.html");});
$("buttontranslateme").addEventListener('click', function() {window.open("http://www.turnoffthelights.com/extension/translate.html");});

function ONworkaroundbugfromsafari(){$("dont-turn-off-the-lights").src = "";}
function OFFworkaroundbugfromsafari(){$("dont-turn-off-the-lights").src = "https://www.youtube.com/embed/?listType=playlist&list=PLF155F53B3D8D07CB";}

// Download Upgrade
$("fndownload").addEventListener('click', function() {window.open(linkfndownload);});
$("ppdownload").addEventListener('click', function() {window.open(linkppdownload);});
$("zodownload").addEventListener('click', function() {window.open(linkzodownload);});
$("aadownload").addEventListener('click', function() {window.open(linkaadownload);});

$("themedownload").addEventListener('click', function() {window.open(linkthemedownload);});

// Save password
$("confirmtimesaver").addEventListener('click', function() {save_options();var optionpastemp = chrome.i18n.getMessage('optionecosaversaved');window.alert(optionpastemp);});

// Check screenshot
$("wallpaperhide").addEventListener('click', function() {$("imagegallery").style.display = "";$("wallpapershow").style.display = "";$("wallpaperhide").style.display = "none";});
$("wallpapershow").addEventListener('click', function() {$("imagegallery").style.display = "none";$("wallpapershow").style.display = "none";$("wallpaperhide").style.display = "";});
$("totlswallpaper5").addEventListener('click', function() {$("lightimage").value = "http://www.turnoffthelights.com/extension/images/totls5.jpg";test();save_options();});
$("totlswallpaper4").addEventListener('click', function() {$("lightimage").value = "http://www.turnoffthelights.com/extension/images/totls4.jpg";test();save_options();});
$("totlswallpaper3").addEventListener('click', function() {$("lightimage").value = "http://www.turnoffthelights.com/extension/images/totls3.jpg";test();save_options();});
$("totlswallpaper2").addEventListener('click', function() {$("lightimage").value = "http://www.turnoffthelights.com/extension/images/totls2.jpg";test();save_options();});
$("totlswallpaper1").addEventListener('click', function() {$("lightimage").value = "http://www.turnoffthelights.com/extension/images/theater.jpg";test();save_options();});

// dynamic test
$("dynamic").addEventListener('click', function() {if(dynamic.checked == true){dynamictest();$('lightdynamic').disabled = false;}else{removedynamic();$('lightdynamic').disabled = true;}});

// Check dynamic
$("dynamichide").addEventListener('click', function() {$("dynamicgallery").style.display = "";$("dynamicshow").style.display = "";$("dynamichide").style.display = "none";});
$("dynamicshow").addEventListener('click', function() {$("dynamicgallery").style.display = "none";$("dynamicshow").style.display = "none";$("dynamichide").style.display = "";});
$("totldynpaper5").addEventListener('click', function() {$("lightdynamic").value = chrome.i18n.getMessage('desdynamicspace');$('dynamic5').checked = true;dynamictest();save_options();});
$("totldynpaper4").addEventListener('click', function() {$("lightdynamic").value = chrome.i18n.getMessage('desdynamiccloud');$('dynamic4').checked = true;dynamictest();save_options();});
$("totldynpaper3").addEventListener('click', function() {$("lightdynamic").value = chrome.i18n.getMessage('desdynamicraindrops');$('dynamic3').checked = true;dynamictest();save_options();});
$("totldynpaper2").addEventListener('click', function() {$("lightdynamic").value = chrome.i18n.getMessage('desdynamicblocks');$('dynamic2').checked = true;dynamictest();save_options();});
$("totldynpaper1").addEventListener('click', function() {$("lightdynamic").value = chrome.i18n.getMessage('desdynamicfishtank');$('dynamic1').checked = true;dynamictest();save_options();});
$("hoveroptiondyn5").addEventListener('click', function() {$('dynamic5').checked = true;dynamictest();save_options();});

// autoplay Add website
$("autoplayaddbutton").addEventListener('click', function() {autoplayaddWhitelistDomain();});

// autoplay Remove website
$("autoplayremovebutton").addEventListener('click', function() {autoplayremoveSelectedExcludedDomain();});

// YouTube quality
$("youtubequality").addEventListener('click', function() {save_options();});

// atmosphere Add website
$("atmosphereaddbutton").addEventListener('click', function() {atmosphereaddWhitelistDomain();});

// atmosphere Remove website
$("atmosphereremovebutton").addEventListener('click', function() {atmosphereremoveSelectedExcludedDomain();});

// night Add website
$("nightaddbutton").addEventListener('click', function() {nightaddWhitelistDomain();});

// night Remove website
$("nightremovebutton").addEventListener('click', function() {nightremoveSelectedExcludedDomain();});

// cam motion Add website
$("cammotionaddbutton").addEventListener('click', function() {cammotionaddWhitelistDomain();});

// cam motion Remove website
$("cammotionremovebutton").addEventListener('click', function() {cammotionremoveSelectedExcludedDomain();});

// speech Add website
$("speechaddbutton").addEventListener('click', function() {speechaddWhitelistDomain();});

// speech Remove website
$("speechremovebutton").addEventListener('click', function() {speechremoveSelectedExcludedDomain();});

// autostop Add website
$("autostopaddbutton").addEventListener('click', function() {autostopaddWhitelistDomain();});

// autostop Remove website
$("autostopremovebutton").addEventListener('click', function() {autostopremoveSelectedExcludedDomain();});

// Reset settings
$("resettotl").addEventListener('click', function() {safari.extension.clear;location.reload();});

// linearsq
$("linearsq").addEventListener('click', function() {test();save_options();});

// Review box
$("war").addEventListener('click', function() {window.open(reviewstefanvdurl);$("sectionreviewbox").style.display = "none";window.localStorage['reviewedlastonversion'] = $("version_number").innerText;});
$("nt").addEventListener('click', function() {$("sectionreviewbox").style.display = "none";window.localStorage['reviewedlastonversion'] = $("version_number").innerText;});

// Aurora Player app box
$("apgetapp").addEventListener('click', function() {window.open("http://www.stefanvd.net/project/auroraplayer.htm");$("sectionauroraplayerappbox").style.display = "none";window.localStorage['applastonversion'] = $("version_number").innerText;});
$("apnt").addEventListener('click', function() {$("sectionauroraplayerappbox").style.display = "none";window.localStorage['applastonversion'] = $("version_number").innerText;});

// retina check
if(window.devicePixelRatio >= 2) {
$("loadinglamp").src = "icons/icon16@2x.png";$("loadinglamp").style.width = "16px"; $("loadinglamp").style.height = "16px";
$("welcomelamp").src = "icons/icon16@2x.png";$("welcomelamp").style.width = "16px"; $("welcomelamp").style.height = "16px";
$("rememberlamp").src = "icons/icon16@2x.png";$("rememberlamp").style.width = "16px"; $("rememberlamp").style.height = "16px";
$("auroraplayericon").src = "images/aurora-player_32x32@2x.png";
}

// browser check
if (browserName == "Safari") {
	// feature check speech and camera
	$("helpcameramotion").style.display = "";
	$("helpspeech").style.display = "";
	$("speech").disabled = true;
	$("select_language").disabled = true;
	$("select_dialect").disabled = true;
	$("speechonly").disabled = true;
	$("motion").disabled = true;
	$("cammotiononly").disabled = true;
} else if (browserName == "Google Chrome") {
	// feature check speech and camera
	$("helpcameramotion").style.display = "none";
	$("helpspeech").style.display = "none";
} else {
	// feature check speech and camera
	$("helpcameramotion").style.display = "none";
	$("helpspeech").style.display = "none";
}

});