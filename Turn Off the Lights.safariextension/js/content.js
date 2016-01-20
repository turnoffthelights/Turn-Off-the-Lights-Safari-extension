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

(function() {

if (window.top === window) {

function $(id) { return document.getElementById(id); }
// settings
var autoplay = null, eastereggs = null, shortcutlight = null, eyen = null, eyea = null, eyealist = null, contextmenus = null, excludedDomains = null, nighttime = null, begintime = null, endtime = null, ambilight = null, ambilightrangeblurradius = null, ambilightrangespreadradius = null, ambilightfixcolor = null, ambilightvarcolor = null, ambilightcolorhex = null, ambilight4color = null, ambilight1colorhex = null, ambilight2colorhex = null, ambilight3colorhex = null, ambilight4colorhex = null, ecosavertime = null, ecosavertime = null, autoplayonly = null, autoplayDomains = null, interval = null, autowidthyoutube = null, customqualityyoutube = null, maxquality = null, atmosphereonly = null, atmosphereDomains = null, nighttheme = null, nightonly = null, nightDomains = null, nightenabletheme = null, autoplaydelay = null, autoplaydelaytime = null, atmosvivid = null, autoplaychecklistwhite = null, autoplaychecklistblack = null, nighthover = null, nmbegintime = null, nmendtime = null, nightmodechecklistblack = null, nightmodechecklistwhite = null, nmtopleft = null, nmtopright = null, nmbottomright = null, nmbottomleft = null, nmcustom = null, nmcustomx = null, nmcustomy = null, lampandnightmode = null, autostop = null, autostoponly = null, autostopDomains = null, autostopchecklistwhite = null, autostopchecklistblack = null, eyechecklistwhite = null, eyechecklistblack = null, nightmodebck = null, nightmodetxt = null, no360youtube = null, videotool = null, reflection = null, reflectionamount = null, videotoolonly = null, videotoolDomains = null, videotoolchecklistwhite = null, videotoolchecklistblack = null;
var settings;

// Install on www.stefanvd.net
// Install on www.turnoffthelights.com
if (window.location.href.match(/http:\/\/(.*stefanvd\.net\/.*|www\.stefanvd\.net\/.*\/.*)/i)|| window.location.href.match(/http:\/\/(.*turnoffthelights\.com\/.*|www\.turnoffthelights\.com\/.*\/.*)/i)){
	if ($('turnoffthelights-safari-install-button')) {
		$('turnoffthelights-safari-install-button').style.display = 'none';
		$('turnoffthelights-safari-thanks-button').style.display = '';
	}
}

var safaddlistdone = false; // This must be here, else it create a double Safari addEvenListener
// listen for an incoming setSettings message
safari.self.addEventListener("message", function(e) {
    if(e.name === "setSettings") {
        if(safaddlistdone == false){safaddlistdone = true;}
        else {return}
		settings = e.message;
		autoplay = settings["autoplay"];
		eastereggs = settings["eastereggs"];
		shortcutlight = settings["shortcutlight"];
		eyea = settings["eyea"];
		eyealist = settings["eyealist"];
		excludedDomains = settings["excludedDomains"];
		readera = settings["readera"];
		nighttime = settings["nighttime"];
		begintime = settings["begintime"];
		endtime = settings["endtime"];
		ambilight = settings["ambilight"];
		ambilightrangeblurradius = settings["ambilightrangeblurradius"];
		ambilightrangespreadradius = settings["ambilightrangespreadradius"];
		ambilightfixcolor = settings["ambilightfixcolor"];
		ambilightvarcolor = settings["ambilightvarcolor"];
		ambilightcolorhex = settings["ambilightcolorhex"];if(ambilightcolorhex)ambilightcolorhex = settings["ambilightcolorhex"];else ambilightcolorhex = '#47C2FF';
		ambilight4color = settings["ambilight4color"];
		ambilight1colorhex = settings["ambilight1colorhex"];if(ambilight1colorhex)ambilight1colorhex = settings["ambilight1colorhex"];else ambilight1colorhex = '#FF0000';
		ambilight2colorhex = settings["ambilight2colorhex"];if(ambilight2colorhex)ambilight2colorhex = settings["ambilight2colorhex"];else ambilight2colorhex = '#FFEE00';
		ambilight3colorhex = settings["ambilight3colorhex"];if(ambilight3colorhex)ambilight3colorhex = settings["ambilight3colorhex"];else ambilight3colorhex = '#00FF00';
		ambilight4colorhex = settings["ambilight4colorhex"];if(ambilight4colorhex)ambilight4colorhex = settings["ambilight4colorhex"];else ambilight4colorhex = '#0000FF';
		ecosaver = settings["ecosaver"];
		ecosavertime = settings["ecosavertime"];
		autoplayonly = settings["autoplayonly"];
		autoplayDomains = settings["autoplayDomains"];
		interval = settings["interval"];
		maxquality = settings["maxquality"];
		autowidthyoutube = settings["autowidthyoutube"];
		customqualityyoutube = settings["customqualityyoutube"];
		atmosphereonly = settings["atmosphereonly"];
		atmosphereDomains = settings["atmosphereDomains"];
		nighttheme = settings["nighttheme"];
		nightonly = settings["nightonly"];
		nightDomains = settings["nightDomains"];
		nightenabletheme = settings["nightenabletheme"];
		autoplaydelay = settings["autoplaydelay"];
		autoplaydelaytime = settings["autoplaydelaytime"];
		atmosvivid = settings["atmosvivid"];
		autoplaychecklistwhite = settings["autoplaychecklistwhite"];
		autoplaychecklistblack = settings["autoplaychecklistblack"];
		nighthover = settings["nighthover"];
		nightactivetime = settings["nightactivetime"];
		nmbegintime = settings["nmbegintime"];
		nmendtime = settings["nmendtime"];
		nightmodechecklistblack = settings["nightmodechecklistblack"];
		nightmodechecklistwhite = settings["nightmodechecklistwhite"];
		nmtopleft = settings["nmtopleft"];
		nmtopright = settings["nmtopright"];
		nmbottomright = settings["nmbottomright"];
		nmbottomleft = settings["nmbottomleft"];
		nmcustom = settings["nmcustom"];
		nmcustomx = settings["nmcustomx"];if(!nmcustomx)nmcustomx = '25px';
		nmcustomy = settings["nmcustomy"];if(!nmcustomy)nmcustomy = '25px';
		lampandnightmode = settings["lampandnightmode"];
		autostop = settings["autostop"];
		autostoponly = settings["autostoponly"];
		autostopDomains = settings["autostopDomains"];
		autostopchecklistwhite = settings["autostopchecklistwhite"];
		autostopchecklistblack = settings["autostopchecklistblack"];
		eyechecklistwhite = settings["eyechecklistwhite"];
		eyechecklistblack = settings["eyechecklistblack"];
        nightmodebck = settings['nightmodebck'];if(!nightmodebck)nightmodebck = '#000000';
        nightmodetxt = settings['nightmodetxt'];if(!nightmodetxt)nightmodetxt = '#ffffff';
        no360youtube = settings['no360youtube'];
        videotool = settings['videotool'];
        reflection = settings['reflection'];
        reflectionamount = settings['reflectionamount'];
        videotoolonly = settings['videotoolonly'];
        videotoolDomains = settings['videotoolDomains'];
        videotoolchecklistwhite = settings['videotoolchecklistwhite'];
        videotoolchecklistblack = settings['videotoolchecklistblack'];

// observeDOM - dynamic check
var observeDOM = (function(){
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
        eventListenerSupported = window.addEventListener;

    return function(obj, callback){
        if( MutationObserver ){
            // define a new observer
            var obs = new MutationObserver(function(mutations, observer){
                if( mutations[0].addedNodes.length || mutations[0].removedNodes.length )
                    callback();
            });
            // have the observer observe foo for changes in children
            obs.observe( obj, { childList:true, subtree:true });
        }
        else if( eventListenerSupported ){
            obj.addEventListener('DOMNodeInserted', callback, false);
            obj.addEventListener('DOMNodeRemoved', callback, false);
        }
    }
})();

// Shortcutlight
window.addEventListener('keydown', function(e) {
		if (e.which == 76 && e.ctrlKey && e.shiftKey && !e.altKey) {
		// Run code for CTRL+SHIFT+L
			// Shortcutlight
			if(shortcutlight == 'true'){
				safari.self.tab.dispatchMessage("lightshortcut","there");
			}
		}
		
		if (e.which == 119 && !e.ctrlKey && !e.shiftKey && e.altKey) {
		// Run code for Alt+F8
			// Shortcutlight
			if(shortcutlight == 'true'){
			if($('stefanvdlightareoff1')){
			//control opacity for all <div>
				var div = document.querySelectorAll('div.stefanvdlightareoff');
				for(var i = 0; i < div.length; i++ ){div[i].style.opacity = interval/100;}
			}
			}
		}
		
		if (e.which == 120 && !e.ctrlKey && !e.shiftKey && e.altKey) {
		// Run code for Alt+F9
			// Shortcutlight
			if(shortcutlight == 'true'){
			if($('stefanvdlightareoff1')){
				var F9saving = Math.round(($('stefanvdlightareoff1').style.opacity)*100);
				safari.self.tab.dispatchMessage('readersaveme', F9saving);
			}
			}
		}
		
		if (e.which == 38 && !e.ctrlKey && !e.shiftKey && e.altKey) {
		// Run code for Alt+arrow up
			// Shortcutlight
			if(shortcutlight == 'true'){
			if($('stefanvdlightareoff1')){
				var shorcutcurrentopacity = $('stefanvdlightareoff1').style.opacity;
				shorcutcurrentopacity = (shorcutcurrentopacity*100 + 1)/100;
				// if higher then 1, stay 1
				if(shorcutcurrentopacity >= 1) { shorcutcurrentopacity = 1; }
				//control opacity for all <div>
				var div = document.querySelectorAll('div.stefanvdlightareoff');
				for(var i = 0; i < div.length; i++ ){div[i].style.opacity = shorcutcurrentopacity;}
			}
			}
		}

		if (e.which == 40 && !e.ctrlKey && !e.shiftKey && e.altKey) {
		// Run code for Alt+arrow down
			// Shortcutlight
			if(shortcutlight == 'true'){
			if($('stefanvdlightareoff1')){
				var shorcutcurrentopacity = $('stefanvdlightareoff1').style.opacity;
				shorcutcurrentopacity -= 0.01;
				// if zero
				if(shorcutcurrentopacity <= 0) {
					var stefanvdlightareoff1 = $('stefanvdlightareoff1');
					var stefanvdlightareoff2 = $('stefanvdlightareoff2');
					var stefanvdlightareoff3 = $('stefanvdlightareoff3');
					var stefanvdlightareoff4 = $('stefanvdlightareoff4');
					if(stefanvdlightareoff1) {document.body.removeChild(stefanvdlightareoff1);}
					if(stefanvdlightareoff2) {document.body.removeChild(stefanvdlightareoff2);}
					if(stefanvdlightareoff3) {document.body.removeChild(stefanvdlightareoff3);}
					if(stefanvdlightareoff4) {document.body.removeChild(stefanvdlightareoff4);}				
				} else {
				//control opacity for all <div>
				var div = document.querySelectorAll('div.stefanvdlightareoff');
				for(var i = 0; i < div.length; i++ ){div[i].style.opacity = shorcutcurrentopacity;}
				}
			}
			}
		}

		if (e.which == 106 && !e.ctrlKey && !e.shiftKey && e.altKey) {
		// Run code for Alt+*
			// Shortcutlight
			if(shortcutlight == 'true'){
			// all tabs lights off
			safari.self.tab.dispatchMessage('emergencyalf');
			}
		}
		
		if (e.which == 121 && !e.ctrlKey && !e.shiftKey && e.altKey) {
		// Run code for Alt+F10
			// Shortcutlight
			if(shortcutlight == 'true'){
				var i18neyedivoff = "OFF";
				var i18neyedivon = "ON";
				var i18ntiteleye = "Eye Protection";
			
			// enable/disable the "Eye Protection" feature
			if(eyea == 'true'){var eyeoptionvalue = 'false';
			var stefanvdlightseye = $('stefanvdlightseye');
			if(stefanvdlightseye) {document.body.removeChild(stefanvdlightseye);} // remove it
			// create div on top page, and say this is OFF
				var neweyediv = document.createElement('div');
				neweyediv.setAttribute('id','stefanvdlightseye');
				neweyediv.innerHTML = "" + i18ntiteleye + " " + i18neyedivoff + "";
				document.body.appendChild(neweyediv);
			}
			else{var eyeoptionvalue = 'true';	
			var stefanvdlightseye = $('stefanvdlightseye');
			if(stefanvdlightseye) {document.body.removeChild(stefanvdlightseye);} // remove it
			// create div on top page, and say this is ON
				var neweyediv = document.createElement('div');
				neweyediv.setAttribute('id','stefanvdlightseye');
				neweyediv.innerHTML = "" + i18ntiteleye + " " + i18neyedivon + "";
				document.body.appendChild(neweyediv);
			}
			safari.self.tab.dispatchMessage('eyesaveme', eyeoptionvalue);
			
			// remove div after 3s
			var myVar=setInterval(function(){
				var stefanvdlightseye = $('stefanvdlightseye');
				if(stefanvdlightseye) {document.body.removeChild(stefanvdlightseye);} // remove it
				clearInterval(myVar);
				document.location.reload(true); // reload current web page
			},3000);
			}
		}		
		
}, false);
window.addEventListener('keypress', function(e) {
		if (e.which == 116) {
		gogotheater();
		}	
}, false);

if(autoplay == 'true'){
function autoplayfunction(){
var gracePeriod = 250, lastEvent = null, timeout = null;

			function trigger (data) {
				var that = this;
				if (gracePeriod > 0 && (lastEvent === null || String(lastEvent).split(":")[0] === String(data).split(":")[0])) {
					clearTimeout(timeout);
					timeout = window.setTimeout(function () {dispatch(data);}, gracePeriod);
				} else {
					dispatch(data);
				}
			}
			
			function dispatch (data) {
				if (data !== lastEvent) {
					lastEvent = data;
					data = String(data).split(":");
					switch (data[0]) {
						case "playerStateChange":
							//console.log("received playerStateChange", data[1]);
							if (data[1] === "2" || data[1] === "0" || data[1] === "-1") {
								shadesOff(this.player);
								if (data[1] === "0") {
									try {
									//playerReset(this.player);
									//playerStop(this.player);
									playerPause(this.player);
									} catch(e){};
								}
							} else {
								shadesOn(this.player);
							}
							break;
						default:
							//console.log("unknown event", data);
							break;
					}
				}
			}

	function playerPause(player) {
		if (player !== null) {
			if (typeof(player.pauseVideo) === "function") {
				player.pauseVideo();
			} else if (typeof(player.pause) === "function") {
				player.pause();
			}
		}
	}
	function playerReady(player) {
		this.player = player;
		//this.playerPause(player);
		//this.playerReset(player);
	}
	function playerReset(player) {
		if (player !== null) {
			if (typeof(player.seekTo) === "function") {
				player.seekTo(0, false);
			} else if (typeof(player.currentTime) !== "undefined") {
				player.currentTime = 0;
			}
		}
	}
	function playerStop(player) {
		if (player !== null) {
			if (typeof(player.stopVideo) === "function") {
				player.stopVideo();
			} else if (typeof(player.pause) === "function") {
				player.pause();
			}
		}
	}
	var godelay;
	function shadesOff(player) {
		if (player !== null) {
		var blackon = $('stefanvdlightareoff1');
			if(autoplaydelay == 'true'){
			var delaytime = autoplaydelaytime * 1000;
			godelay = window.setTimeout(function(){
				if (blackon) {safari.self.tab.dispatchMessage("automatic","there");}
				else {} // do nothing
				window.clearTimeout(godelay);
			},delaytime);
			} else {
				if (blackon) {safari.self.tab.dispatchMessage("automatic","there");}
				else {} // do nothing
			}
		}
	}
	function shadesOn(player) {
		if (player !== null) {
		var blackon = $('stefanvdlightareoff1');
			if (blackon) {} // do nothing
			else {safari.self.tab.dispatchMessage("automatic","there");}		
			if(autoplaydelay == 'true'){
				try{window.clearTimeout(godelay);}catch(e){}
			}
		}
	}

		// player ready check
		var startautoplay = setInterval(function () {
		try {
			var youtubeplayer = $("movie_player") || null
			var htmlplayer = document.getElementsByTagName("video") || null;

			// check first for the HTML5 player
			// if nothing then try the flash for YouTube
			if (htmlplayer !== null) { // html5 video elements
				for(var j=0; j<htmlplayer.length; j++) {
	   				if (htmlplayer[j].pause) {playerReady(htmlplayer[j]);}
				}
			} else {
				if (youtubeplayer !== null) { // youtube video element
						if (youtubeplayer.pauseVideo) {playerReady(youtubeplayer);}
				} 
			}
		}
		catch(err) {} // i see nothing, that is good
		},1000); // 1000 refreshing it

var messagediv = $('ytCinemaMessage');
if(messagediv) {}
else {		
		// injected code messaging
		var message = document.createElement("div");
		var bt=document.getElementsByTagName("body");if(!bt.length)return;
		message.setAttribute("id", "ytCinemaMessage");
		message.style.display = "none";
		if(!bt.length)return;
		bt[0].appendChild(message);
		$(message.id).addEventListener(message.id, function (e) {
			var eventData = $(message.id).textContent;
			trigger(eventData);
  		}, false);
}
}

if(autoplayonly == 'true'){
var currenturl = window.location.protocol + '//' + window.location.host;
var blackrabbit = false;
if(typeof autoplayDomains == "string") {
	autoplayDomains = JSON.parse(autoplayDomains);
	var abuf = [];
	for(var domain in autoplayDomains)
		abuf.push(domain);
        abuf.sort();
		for(var i = 0; i < abuf.length; i++){
			if(autoplaychecklistwhite == 'true'){
				if(currenturl == abuf[i]){autoplayfunction();}
			}
			else if(autoplaychecklistblack == 'true'){
				if(currenturl == abuf[i]){blackrabbit=true;}
			}
		}
    }
	if(autoplaychecklistblack == 'true'){
		if(blackrabbit == false){autoplayfunction();blackrabbit = false;}
	}
} else {autoplayfunction();}

} // option autoplay on end

if(autostop == 'true'){

function autostopvideo(video) {
	video.pause();
	video.oncanplay = null;
	video.onplay = null;
}
	
function autostopfunction(){
    var ytps = document.querySelector('.ytp-play-button');
    if(ytps) {
        if (ytps.getAttribute("aria-label") == "Pause") {
            ytps.click();
             // add active player label
            if($('eow-title')){$('eow-title').setAttribute('data-totlplayer','activeplayer');}
        }
    }
	else {
        var videos = document.querySelectorAll('video');
        for (var i=0; i<videos.length; i++) {
            video = videos[i];
            if (video && video.readyState == 4){autostopvideo(video);}
            else {
                video.oncanplay = function() { autostopvideo(video); };
                video.onplay = function() { autostopvideo(video); };
            }
        }
    }
}

// Observe a specific DOM element:
if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)){
	if(document.getElementById('movie_player')){ // from youtube website
        // for update later also
		observeDOM( document.querySelector('#player-api') ,function(){ 
                var ytps = document.querySelector('.ytp-play-button');
                if($('eow-title').getAttribute('data-totlplayer') == "activeplayer"){}
                else{autostopfunction();}
		});
	}
}

window.addEventListener("load", function(){
if(autostoponly == 'true'){
var currenturl = window.location.protocol + '//' + window.location.host;
var stoprabbit = false;
if(typeof autostopDomains == "string") {
	autostopDomains = JSON.parse(autostopDomains);
	var atbuf = [];
	for(var domain in autostopDomains)
		atbuf.push(domain);
        atbuf.sort();
		for(var i = 0; i < atbuf.length; i++){
			if(autostopchecklistwhite == 'true'){
				if(currenturl == atbuf[i]){autostopfunction();}
			}
			else if(autostopchecklistblack == 'true'){
				if(currenturl == atbuf[i]){stoprabbit=true;}
			}
		}
    }
	if(autostopchecklistblack == 'true'){
		if(stoprabbit == false){autostopfunction();stoprabbit = false;}
	}
} else {autostopfunction();}
}, false);

} // option autostop on end

if(videotool == 'true'){

function videotoolfunction(){
if($("stefanvdvideotool")){}else{
var newvideocontrol = document.createElement("div");
newvideocontrol.setAttribute('id','stefanvdvideotool');
document.body.appendChild(newvideocontrol);

var newvcpartul = document.createElement("ul");
newvideocontrol.appendChild(newvcpartul);

var newvcpartli0btn = document.createElement("li");
newvcpartul.appendChild(newvcpartli0btn);
var newvcparta0btn = document.createElement("a");
newvcparta0btn.title = "Like";
newvcparta0btn.addEventListener("click", function(){window.open("https://www.turnoffthelights.com/youtube/totlfb.html","_blank");}, false);
newvcpartli0btn.appendChild(newvcparta0btn);
var newvcpartimage = document.createElement("img");
newvcpartimage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACdUlEQVRoQ+2Z7TEEQRCG+83AZUAEiAARIAMiQASIgAwQASJwIkAEXASIoNWrZlSf2p2Zve1Vc2rnl3K7ff1Mf/dB/snBP+GQEaQ2S/6JRVR1RUTWReQTwPMQlzA4SIB4EJGNAPAhIocA7jyBBgVpgLC673vCDAaSgSDQB4CJl1UGAWmBuBGRMxF5NcpvesWMO0gbBIADAqiqGpAdAFMPq7iCFECs/rLIBACDv/dxA8lBBGvcishe0PoFQMxkdYAsAEHFmYKvexMEAb0tUgjBm38ySj8C2PaCoJxeICUQwaWOReQiKD5jcfSKjXgZSRDTWrRd3qWp2HzmJmYn+4Kqsorvhv/xb76XPQAesw+VuJaq0vxsL0pOI0SwiE25JbLiM28hlrIpOmeRUpAURKmMFGC23nQFsabeMt/c+kWqykL4XQw7Hit/CmAn9X4nEAA/zw9VoaOyDW6dLJ7VgjTEVtK9qgVR1bnaY72hycVqBmFcXQWls+1MzSCsNUcBpDUrlhbEudT5x8HOliY2ldm+rGaL2CKaHcCqBPmdenOBTveqFcQ2mUWdcq0gtsk8B8BZP3lqBeGCgmMxT9HaqDqQMDq8m+tfA8AueLksoqqc6Tnb88wARMssHQjj4TRofQ8gLiuWDoRDVGzhTwCUTZMpzFQ+H6qNV1XGB7f3PNmBqsoWRVXnFnglhbBWkE4dr/WmTuk3LKHj+7ZIcdGWTZGZDEp3Ikh0q6JCuJBFcrnc8fNPFsQuu6+uFnHUtVUUF3h7XX9uyIFwHihKfw6E/G3xedF9cK+VqYPybiJGELerdBI0WsTpIt3EjBZxu0onQaNFnC7STcwXkMeXQh73qawAAAAASUVORK5CYII=";
newvcpartimage.style.width = "25px";
newvcpartimage.style.height = "25px";
newvcparta0btn.appendChild(newvcpartimage);

var newvcpartli1btn = document.createElement("li");
newvcpartul.appendChild(newvcpartli1btn);
var newvcparta1btn = document.createElement("a");
newvcparta1btn.title = "Subscribe";
newvcparta1btn.addEventListener("click", function(){window.open("https://www.youtube.com/c/turnoffthelights?sub_confirmation=1","_blank");}, false);
newvcpartli1btn.appendChild(newvcparta1btn);
var newvcpartimage = document.createElement("img");
newvcpartimage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACm0lEQVRoQ+1ZgXETMRDcqwA6gA6gA5IKAhUAHaQD0klCB0kFJB1ABYQOoIJl9kfnkZ3/l/SR/O+MbuZnbL9s3d7une7Phhdi9kJwoAPZGpOdkc5IowicnLRIvgbwAcBHM/vqcTkJICTfArgAcCYAO+fNdv5vFgjJ98F5Oa7XT8y2CoSkoi7HFXmxMGubARL0Hjsv/U/ZHwA/A0vDmlWBRHr/MiWZCMkvADcAbs3skaSY+rFajpAcqky45iTzD8C9HA/O/43pOTqQuEQG51OSGZw3MwGYtKMAmSqRE15JMnL+xsyk+yxrBiSnREYe3rlspPcszw8WVQVSUCKld0nFZbOn96ZAQoRfjWyiBPX6ntK7J6oAVLVsRkhqc1WYEvMSeV+i95INfG0LINL7IJulel8LiE7VrBK5xMHc7yxl5NzMqus81+mxdR1IZ+Q5+qnRohyU354jjQjB0mRXMxe3FeqP1KHqDFnFlgKZc3ZoQwA8nNqBOAdKzOkpTqCyW/IllJYwomnFWFMYN41jTaX7NcgvtC7VJZgNJCdKJJmzLuSXt/F3Zna8Nj7lYHgK/B2tO4+GZu8S349BrftgNUdtAOmTQI14UnmlPu57SV61lNansYEBSSX/5xTD4b7Y8c56Nq9qA5FEPOKqUuoAdvonqXnV9YH8dF+f6ynzTYYEtceTvKoNZG9IFpJaDMhZ3dPlppIcv9fp7BVQwFJ55aVdoOoP6EheAfiWiKyGD2dzORDmXz64E+BUaRewutN4kpcABGhs8wcAlyWJrKCQjEGlJFhv9htFVHLR5f3Ys0/4MNFxYKMSXHWInVnJ9pZFeSX57Ur7yQGJUQUVDOeVmalgDLbZf6xKmetASiPWen1npHWES3+/M1Iasdbr/wNE7m5C7M5pcAAAAABJRU5ErkJggg==";
newvcpartimage.style.width = "25px";
newvcpartimage.style.height = "25px";
newvcparta1btn.appendChild(newvcpartimage);

var newvcpartli2btn = document.createElement("li");
newvcpartul.appendChild(newvcpartli2btn);
var newvcparta2btn = document.createElement("a");
newvcparta2btn.title = "Repeat";
newvcparta2btn.addEventListener("click", function(){
	var onevideo = document.getElementsByTagName("video")[0];
	if(document.getElementById("stefanvdvideowindow")){
		var ytplayer_window = document.getElementById("stefanvdvideowindow").contentWindow;
		onevideo = ytplayer_window.document.getElementsByTagName("video")[0];
	}else{
		onevideo = document.getElementsByTagName("video")[0];
	}
	
	if(onevideo){
		onevideo.autoplay = true;
		if(onevideo.loop == true){onevideo.loop = false;newvcparta2btn.className = "";}else{onevideo.loop = true;newvcparta2btn.className = "vtactive";}
	}
	}, false);
newvcpartli2btn.appendChild(newvcparta2btn);
var newvcpartimage = document.createElement("img");
newvcpartimage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABnUlEQVRoQ+3Y623DIBQF4HMmaEbpBk0nabNJO0mSSdpu0FHaCU51IyeyEK7BGAwR/IoUjO/H4xog7qTwThzokNpGso/I3IhIOpI8zNVb6/9sIyJJAE6lMLkh1uFFMCUgRTClINkxJSFZMZMQSZ8AntbKKqN2bmtG0iMAe89D4Hu+SO59dbeAWBwHkif7IekVwLFFyJmkBW8IG5EPALtSkHeSb4Evu1QbviPuIzdEaFuSbCoZ1kry1FoDEo0YOqQqyCJEbZDFiJogSYhaIPa9uGSnlLL5Yk8Jfvxsh1x7w9miRKffPiJOD/Sp1afWWouiT62JnuxZa2aKSdqR/AmdiVVmLbu0A2D7LzveBpXqIAPC9l7PzUJGCBuFNiEOok2IB9EeZAKxOWQuw/wC2JP8Hk51lp2SD1WelybfosxBll64zbXr/p8dYh84y0bXEbFbxJfYKAPqx0MCGv23iqQpTFT6DY0j2238sFZ8mPYgE5g2IR5MuxAH0zZkhLGLu+DdbxWL3RdE7HmkWkhoYLH1sqbf2GBS6ndISu/lePYP2W6YQr7GhnMAAAAASUVORK5CYII=";
newvcpartimage.style.width = "25px";
newvcpartimage.style.height = "25px";
newvcparta2btn.appendChild(newvcpartimage);

var newvcpartli3btn = document.createElement("li");
newvcpartul.appendChild(newvcpartli3btn);
var newvcparta3btn = document.createElement("a");
newvcparta3btn.title = "Filter";
var currentvideostepfilter = 0;
var i18ntitelvideotoolnormal = "normal";
var i18ntitelvideotoolgrayscale = "grayscale";
var i18ntitelvideotoolsepia = "sepia";
var i18ntitelvideotoolinvert = "invert";
var i18ntitelvideotoolcontrast = "contrast";
var i18ntitelvideotoolsaturate = "saturate";
var i18ntitelvideotoolhueroration = "hue rotation";
var i18ntitelvideotoolbrightness = "brightness";

var filtertype = "normal";
newvcparta3btn.addEventListener("click", function(){
	var getstefanvdvideotoolrange = document.getElementById("stefanvdvideotoolrange");
	var onevideo = document.getElementsByTagName("video")[0];
	if(document.getElementById("stefanvdvideowindow")){
		onevideo = document.getElementById("stefanvdvideowindow");
	}else{
		onevideo = document.getElementsByTagName("video")[0];
	}
	
	if(onevideo){
		if(currentvideostepfilter == 0){
			filtertype = "grayscale";
			getstefanvdvideotoolrange.step = "0.1";
			getstefanvdvideotoolrange.min = "0";
			getstefanvdvideotoolrange.max = "1";
			getstefanvdvideotoolrange.value = "1";
			onevideo.style.webkitFilter = "grayscale(1)";currentvideostepfilter +=1;newvcpartiaspan.textContent = i18ntitelvideotoolgrayscale;
		}
		else if(currentvideostepfilter == 1){
			filtertype = "sepia";
			getstefanvdvideotoolrange.step = "0.1";
			getstefanvdvideotoolrange.min = "0";
			getstefanvdvideotoolrange.max = "1";
			getstefanvdvideotoolrange.value = "1";
			onevideo.style.webkitFilter = "sepia(1)";currentvideostepfilter +=1;newvcpartiaspan.textContent = i18ntitelvideotoolsepia;
			}
		else if(currentvideostepfilter == 2){
			filtertype = "invert";
			getstefanvdvideotoolrange.step = "0.1";
			getstefanvdvideotoolrange.min = "0";
			getstefanvdvideotoolrange.max = "1";
			getstefanvdvideotoolrange.value = "1";
			onevideo.style.webkitFilter = "invert(1)";currentvideostepfilter +=1;newvcpartiaspan.textContent = i18ntitelvideotoolinvert;
			}
		else if(currentvideostepfilter == 3){
			filtertype = "contrast";
			getstefanvdvideotoolrange.step = "0.1";
			getstefanvdvideotoolrange.min = "0";
			getstefanvdvideotoolrange.max = "10";
			getstefanvdvideotoolrange.value = "10";
			onevideo.style.webkitFilter = "contrast(10)";currentvideostepfilter +=1;newvcpartiaspan.textContent = i18ntitelvideotoolcontrast;
			}
		else if(currentvideostepfilter == 4){
			filtertype = "saturate";
			getstefanvdvideotoolrange.step = "0.1";
			getstefanvdvideotoolrange.min = "0";
			getstefanvdvideotoolrange.max = "10";
			getstefanvdvideotoolrange.value = "10";
			onevideo.style.webkitFilter = "saturate(10)";currentvideostepfilter +=1;newvcpartiaspan.textContent = i18ntitelvideotoolsaturate;
			}
		else if(currentvideostepfilter == 5){
			filtertype = "hue-rotate";
			getstefanvdvideotoolrange.step = "30";
			getstefanvdvideotoolrange.min = "0";
			getstefanvdvideotoolrange.max = "360";
			getstefanvdvideotoolrange.value = "90";
			onevideo.style.webkitFilter = "hue-rotate(90deg)";currentvideostepfilter +=1;newvcpartiaspan.textContent = i18ntitelvideotoolhueroration;
			}
		else if(currentvideostepfilter == 6){
			filtertype = "brightness";
			getstefanvdvideotoolrange.step = "0.1";
			getstefanvdvideotoolrange.min = "0";
			getstefanvdvideotoolrange.max = "10";
			getstefanvdvideotoolrange.value = "0.5";
			onevideo.style.webkitFilter = "brightness(1.5)";currentvideostepfilter +=1;newvcpartiaspan.textContent = i18ntitelvideotoolbrightness;
			}
		else if(currentvideostepfilter == 7){
			filtertype = "normal";
			getstefanvdvideotoolrange.step = "0.1";
			getstefanvdvideotoolrange.min = "0";
			getstefanvdvideotoolrange.max = "10";
			getstefanvdvideotoolrange.value = "1";
			onevideo.style.webkitFilter = "";currentvideostepfilter = 0;newvcpartiaspan.textContent = i18ntitelvideotoolnormal;
			}
		}
	}, false);
newvcpartli3btn.appendChild(newvcparta3btn);
var newvcpartimage = document.createElement("img");
newvcpartimage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAC80lEQVRoQ+1Z23EUMRDsjgAywEQAjgATATgC7AiACIAIgAg4R2ATASYC7AxMBkcEQ7WRKNWedvXaFWzVTtV9nE+P6Xn1jEx0EDN7D+AdgB3J8yWu5BKHDs80M/N/I7nInYscGgGyA/AKwFeSL5cwXhcgSyg+PHMRIGb2FMCe5F0PELpjdiBm9gbARwfgmORNDzBNQJzlvdJeX3njofsij+R65YKkcqlKWoGcAPhWdfPhpg8kVaarZAMis5nZEYAz93nkTHmREU7ap3Is+SmiBHBN8rrKHXMlu5lJgWdOiecphcwsDMnvJPW9SZpCy9+8Afljic0jYSxuoRVaI5UjZiaCfALgluR+tcluZj8AiPHvSD5eM5A9gAfyouaRNQPRDKJmUhPibrVAhky3AZng/uby6yqSkln9k6S0RVGbr7lFeVQtcwC5BBDO4clhys0xAu/liuRpNYrWpjF45vE6vCX5KUehwSSpLf9mHhkkrBQpfiExsysALwLgybAcM1JVaLk5RKHhR9pbACelce7ySyOAWF+iPFFo5o7Hf3HVAvFMrYN+ORBVjwwuXwTmnjAB3JA8zgnPcE0xEDP74iZCf855y6OBDjEzTZk610vx02oRkMiFCoUqT0QsHr6+6OciA2UDcSGgFxOfF6XeL10vIyn5swyVBSRCeqVK1a4XCIFJkmUukCHp6V8DxZUlE406hDBfssgyCaSF9DIVP1gWIcsk0U4CmYP0GsAUkeUokEheVJFeAxAVlZAs76fLYmaPlNpkM1ir9Ni+SHM5WpKnPBK69jNJTXjdxczUhL52F+vFXuR5IFNAwmfQps60Bf2g2Iw+5q3NI6Md9hSQsP8pYtkWD4R7I91EVY6oaoj0fFcqMHr+F9suRYYeh0hRvZeM6VsiddlHYyyf4hGNsGL1/0FOSaoARSWH2QVGnvCe6Q1KnjibAiGFkkC0yJGjAOnTs/uVB9RrzdM09nZBzX1ZHqk5uPeeDUhvi6fu2zySslDv338DROiFQsyzoMoAAAAASUVORK5CYII=";
newvcpartimage.style.width = "25px";
newvcpartimage.style.height = "25px";
newvcparta3btn.appendChild(newvcpartimage);
var newvcpartiaspan = document.createElement("div");
newvcpartiaspan.textContent = i18ntitelvideotoolnormal;
newvcparta3btn.appendChild(newvcpartiaspan);
var newvcpartiarange = document.createElement("input");
newvcpartiarange.setAttribute('id','stefanvdvideotoolrange');
newvcpartiarange.setAttribute('type','range');
newvcpartiarange.setAttribute('step','0.1');
newvcpartiarange.setAttribute('min','0');
newvcpartiarange.setAttribute('max','10');
newvcpartiarange.addEventListener("change", function(){
var onevideo = document.getElementsByTagName("video")[0];
var gsvtrange = document.getElementById("stefanvdvideotoolrange").value;
if(filtertype == "grayscale"){onevideo.style.webkitFilter = "" + filtertype + "("+gsvtrange+")";}
else if(filtertype == "sepia"){onevideo.style.webkitFilter = "" + filtertype + "("+gsvtrange+")";}
else if(filtertype == "invert"){onevideo.style.webkitFilter = "" + filtertype + "("+gsvtrange+")";}
else if(filtertype == "contrast"){onevideo.style.webkitFilter = "" + filtertype + "("+gsvtrange+")";}
else if(filtertype == "saturate"){onevideo.style.webkitFilter = "" + filtertype + "("+gsvtrange+")";}
else if(filtertype == "hue-rotate"){onevideo.style.webkitFilter = "" + filtertype + "("+gsvtrange+"deg)";}
else if(filtertype == "brightness"){onevideo.style.webkitFilter = "" + filtertype + "("+gsvtrange+")";}
}, false);
newvcpartli3btn.appendChild(newvcpartiarange);


var newvcpartli4btn = document.createElement("li");
newvcpartul.appendChild(newvcpartli4btn);
var newvcparta4btn = document.createElement("a");
newvcparta4btn.title = "Full window";
var videowindow = false;
var timeout;
newvcparta4btn.addEventListener("click", function(){
	var onevideo = document.getElementsByTagName("video")[0];
	if(onevideo){
		// icon change
		var swicon = document.getElementById("stefanvdwindowicon");
		var tempstefanvdvideotool = document.getElementById("stefanvdvideotool");
		if(videowindow == true){
		videowindow = false;
		swicon.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACVUlEQVRoQ+2Z21EDMQxFryqADqAD6ACohNABdEAqACqAVAJ0AB1AB0kFYu7MesbjrNcvOQmw+snH+qFjKXrYgj8i8kc4MIMcmiVni/wai6jqI4CzCoXvRORjap6qngN4qFj7U0Rux+ZFXUtV3wBcVGx2JSKcGxVVvQTwWrH2u4hw7pb8W5A1gKfESb6IyFfCIqcAFhNjjgFcA+CvL6YWoaI3FW6RNUVVqTzdjv+jUJpBNgCOvFW7wEQgPr2g0wyyBEB3oLmdmMJEIFYAXrzA0A4iIveqykXNYWIQIrIIIpwNCE1hDTMFMeznh2o7EEuYFER3EAuYHIidgLTA5ELsDKQGpgRipyAlMKUQViDMrK5E+MooO8LQ/BRWqiOF6IohNlHOUAeX5dexytq0sfJCMyuBy3DToXxnZcwqIQmRVdMMg0xBBldgH8OsP9qTDDCLWF9Rorw/1hykVpHWeTNI6wlaz58tEjtRVX0GwOKO4XhLVJXh9sK6OTO1yADh8sJNCDNAEJRi2s9MXT4wCbmu8DsjIVJBP7lt5YmaFmCoBty11KY4IQZZeMnGKuFOkxBubilMt8YqhAnciZ+TGbsEZicgNRCllukO0gJRAtMVxAIiF6YbiCVEDkwXkB4QKRhzEAAnqTzRWj+NRTNGQcsLOl5e+xfKyRBbCzUCw77GdYjN91q+Xt0gJtzMfTID4emMvhh5pHxVogWjEpQdsXHsNMMbeTOQHI+ZX6wyTqnKImOmzdgLt5mPoVy/VD6KH0NLd9j3eNPGap8wM8g+T39s79kih2aRH8NkAVGMEdb6AAAAAElFTkSuQmCC";
		
		// remove action hover mode
		window.clearTimeout(timeout);
		window.onmousemove = null;
		tempstefanvdvideotool.style.opacity = 1;
		} else {
		//onevideo.pause();
		videowindow = true;
		swicon.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACj0lEQVRoQ+2Z/VHDMAzFnyaAEdgANgAmYARgAsoGMAEwAbABGwAbwCZsIO5xbs9NLcsf6TVX4v96sRP/9BzpVRHsyZA94cAMMjUl918RVT0BcCkit1OIvqo+AHgVka/UfpKKBIh3AIcAXkTkepcwqvoM4ArAD4DzFIwF8gjgJtq8C6OqhD5erhGRzxR8CNJBuPYtItycOSKI5ZwnEVkMF5jviKq+8GiVwqjqGQCq+DdExArSB4DTMI3R5e/kSEDwaFGZjZF92WtgxgapgfgLnHf2S2HGBKmFKALhpBKYsUBaIIpBSmDGAGmFqALxYHpBeiCqQXIwPSC9EE0gFgyrbkv6DSk+Tqlmis0lJjdrZXL8sM7QOtDW1NSRtTXBgiTrhJddm0EMZVbPKyyI8f6alFgFLkc6tB3GXNqZlRKViiynU5kN2zF4XtbOeJV9zXZ48sbXGxTxbp+1MzOIF75JKeJtdkrXu7LWDLKFCMyKbCGoXbf8H4qERgHbMNVDRM5Ti1SVTmDVpKi48a3VCuI95oLoRXJSBTGYxg1DGEGwl8WjdzQEqwShafQ6ml+5Hljzyx4g2cdKglaCMA5uEzB3CppADIjvQaexpEG3tqYHphrEgODfXP5jrO40hp5ucUfTUqUKxIJgG7Oz+VDVnk3BFIPkIHjjHpCwvgumCMSDGAOkF8YFKYEYC6QHxqvsrBPDFJvsdvQerfjcl/SaN+qWlQVKlViuHxOkRRkr1xcrsS2QWhgL5A3ARaSW2zwb2hnrS1Rw1AwUR9Z2GDD3InJXdLTCpvhJjHbbhfAMZO/16J2hEzhLea7cN0RGbZGi791Yy3pVpQqPlnF002/LQ3exZgbZRdRHt/FTg+B+9uZo/QI21+RCJ4hK5QAAAABJRU5ErkJggg==";
		
		// action hover mode
		window.onmousemove = function(){
  		window.clearTimeout(timeout);
		tempstefanvdvideotool.style.opacity = 1;
		timeout = window.setTimeout(function(){tempstefanvdvideotool.style.opacity = 0;}, 3500);
		}
		}

		// window action
		if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)){
		// YouTube website
			var ytplayerapi = document.getElementById("player-api");
			if(ytplayerapi){
				var stefanvdregularhtmlplayer = document.getElementsByClassName('stefanvdvideowindow')[0];
				var stefanyoutubecontrols = document.getElementsByClassName('ytp-chrome-bottom')[0];
				if(stefanvdregularhtmlplayer){
					ytplayerapi.classList.remove("stefanvdvideowindow");
					onevideo.classList.remove("stefanvdvideowindow");
				} else {
					ytplayerapi.className += " stefanvdvideowindow";
					onevideo.className += " stefanvdvideowindow";
					stefanyoutubecontrols.style.width = "98%";
				}
			}
		} else {
		// regular HTML5
			var stefanvdregularhtmlplayer = document.getElementsByClassName('stefanvdvideowindow')[0];
			if(stefanvdregularhtmlplayer){
				onevideo.classList.remove("stefanvdvideowindow");
			}else{
				onevideo.className += " stefanvdvideowindow";
				onevideo.controls = true;
				onevideo.style.background = "black";
			}
		}
	}
}, false);
newvcpartli4btn.appendChild(newvcparta4btn);
var newvcpartimage = document.createElement("img");
newvcpartimage.id = "stefanvdwindowicon";
newvcpartimage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACVUlEQVRoQ+2Z21EDMQxFryqADqAD6ACohNABdEAqACqAVAJ0AB1AB0kFYu7MesbjrNcvOQmw+snH+qFjKXrYgj8i8kc4MIMcmiVni/wai6jqI4CzCoXvRORjap6qngN4qFj7U0Rux+ZFXUtV3wBcVGx2JSKcGxVVvQTwWrH2u4hw7pb8W5A1gKfESb6IyFfCIqcAFhNjjgFcA+CvL6YWoaI3FW6RNUVVqTzdjv+jUJpBNgCOvFW7wEQgPr2g0wyyBEB3oLmdmMJEIFYAXrzA0A4iIveqykXNYWIQIrIIIpwNCE1hDTMFMeznh2o7EEuYFER3EAuYHIidgLTA5ELsDKQGpgRipyAlMKUQViDMrK5E+MooO8LQ/BRWqiOF6IohNlHOUAeX5dexytq0sfJCMyuBy3DToXxnZcwqIQmRVdMMg0xBBldgH8OsP9qTDDCLWF9Rorw/1hykVpHWeTNI6wlaz58tEjtRVX0GwOKO4XhLVJXh9sK6OTO1yADh8sJNCDNAEJRi2s9MXT4wCbmu8DsjIVJBP7lt5YmaFmCoBty11KY4IQZZeMnGKuFOkxBubilMt8YqhAnciZ+TGbsEZicgNRCllukO0gJRAtMVxAIiF6YbiCVEDkwXkB4QKRhzEAAnqTzRWj+NRTNGQcsLOl5e+xfKyRBbCzUCw77GdYjN91q+Xt0gJtzMfTID4emMvhh5pHxVogWjEpQdsXHsNMMbeTOQHI+ZX6wyTqnKImOmzdgLt5mPoVy/VD6KH0NLd9j3eNPGap8wM8g+T39s79kih2aRH8NkAVGMEdb6AAAAAElFTkSuQmCC";
newvcpartimage.style.width = "25px";
newvcpartimage.style.height = "25px";
newvcparta4btn.appendChild(newvcpartimage);
}
}

if(videotoolonly == 'true'){
var currenturl = window.location.protocol + '//' + window.location.host;
var videotoolrabbit = false;
if(typeof videotoolDomains == "string") {
	videotoolDomains = JSON.parse(videotoolDomains);
	var vtbbuf = [];
	for(var domain in videotoolDomains)
		vtbbuf.push(domain);
        vtbbuf.sort();
		for(var i = 0; i < vtbbuf.length; i++){
			if(videotoolchecklistwhite == 'true'){
				if(currenturl == vtbbuf[i]){videotoolfunction();}
			}
			else if(videotoolchecklistblack == 'true'){
				if(currenturl == vtbbuf[i]){videotoolrabbit=true;}
			}
		}
    }
	if(videotoolchecklistblack == 'true'){
		if(videotoolrabbit == false){videotoolfunction();videotoolrabbit = false;}
	}
} else {videotoolfunction();}

} // option videotool on end

// easter eggs
function gogotheater(){
if(eastereggs == 'true'){
// here the easter egg => movie theater
	var lightareoff = $('stefanvdlightareoff1');
	if (lightareoff != null) {
		// shortcut key T
		if ($('stefanvdtheater')){}
		else {
		window.alert('Do you like a real movie theater?');
		var newimg = document.createElement('img');
		newimg.setAttribute('id','stefanvdtheater');
		newimg.src = safari.extension.baseURI + "images/theater.jpg";
		newimg.onclick = function() { document.body.removeChild(newimg); };
		document.body.appendChild(newimg);
		}
	}
} // end easter eggs
}

// eye protection
function eyedojob(){

document.onreadystatechange = function () { // safari fix, wait if everything is loaded then run this code
    if (document.readyState == "complete") { // idem

if(ecosaver == 'true'){

document.onmousemove = (function() {
  var onmousestop = function() {
	var blackon = $('stefanvdlightareoff1');
	if(blackon){}else{eyeprotection();}
  }, thread;

  return function() {
    clearTimeout(thread);
    thread = window.setTimeout(onmousestop, ecosavertime * 1000);
  };
})();

} else {
eyeprotection();
///////
function eyeprotection(){
// normal use only enabled -> do nothing

// normal use -> only screensaver is enabled wirh a value for nighttime (true or false)
if((ecosaver == 'true') && (eyen == 'true')){safari.self.tab.dispatchMessage("automatic","there");}

if(eyea == 'true'){safari.self.tab.dispatchMessage("automatic","there");}
else if(eyealist == 'true'){
var currenturl = window.location.protocol + '//' + window.location.host;

var eyerabbit = false;
if(typeof excludedDomains == "string") {
	excludedDomains = JSON.parse(excludedDomains);
	var eyebuf = [];
	for(var domain in excludedDomains)
		eyebuf.push(domain);
        eyebuf.sort();
		for(var i = 0; i < eyebuf.length; i++){
			if(eyechecklistwhite == 'true'){
				if(currenturl == eyebuf[i]){safari.self.tab.dispatchMessage("automatic","there");}
			}
			else if(eyechecklistblack == 'true'){
				if(currenturl == eyebuf[i]){eyerabbit=true;}
			}
		}
    }
	if(eyechecklistblack == 'true'){
		if(eyerabbit == false){safari.self.tab.dispatchMessage("automatic","there");eyerabbit = false;}
	}
}
}
///////
}
    } // end complete
} // idem

}

// night time
if(nighttime == 'true'){ // yes night time
var now = new Date();var hours = now.getHours();var minutes = now.getMinutes();var gettime = hours + ":" + minutes;
var gettimesecond = gettime.split(":")[0] * 3600 + gettime.split(":")[1] * 60;

var time1 = begintime;var time2 = endtime;
var seconds1 = time1.split(":")[0] * 3600 + time1.split(":")[1] * 60;
var seconds2 = time2.split(":")[0] * 3600 + time2.split(":")[1] * 60;

// example
// if begintime set 10:00 but endtime is 18:00
// then do this
if(seconds1 <= seconds2){ // default for user
if((seconds1 <= gettimesecond) && (gettimesecond <= seconds2)){eyedojob();}
}
// example
else if (seconds1 > seconds2){
var getotherdaypart = 86400; // ... to 24:00 end
var getothernightpart = 0; // start from 0:00 to seconds2 (example 11:00) 

if((seconds1 <= gettimesecond) && (gettimesecond <= getotherdaypart)){ // 13 -> 24
eyedojob();
} else if((getothernightpart <= gettimesecond) && (gettimesecond <= seconds2)){ // 0 -> 11
eyedojob();
}
}

}
else{eyedojob();} // no night time

// ambilight time
if(ambilight == 'true'){

if(atmosphereonly == 'true'){
var currenturl = location.protocol + '//' + location.host;
if(typeof atmosphereDomains == "string") {
	atmosphereDomains = JSON.parse(atmosphereDomains);
	var albuf = [];
	for(var domain in atmosphereDomains)
		albuf.push(domain);
        albuf.sort();
	for(var i = 0; i < albuf.length; i++)
		if(currenturl == albuf[i]){ambilightfunction();}
    }
} else {ambilightfunction();}

function ambilightfunction(){
		// yes show time
		var startambilight = setInterval(function () {
		try {
		var htmlplayer = document.getElementsByTagName("video") || null;
		var playerid = null, item = null;
		for(var j=0; j<htmlplayer.length; j++) {
			if (htmlplayer[j].play){playerid = htmlplayer[j]; item = j + 1; drawImage(playerid, item);}
		}
		
		// YouTube flash detect play
		if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)){
		var yttest = $("movie_player"); item = 1;
		
		/* temp fix watch7-video */
		var watch7video = $('watch7-video');
		if(watch7video)$('watch7-video').style.zIndex = 'auto';

		div = document.getElementsByTagName('div'); 
		for(var i = 0; i < div.length; i++ )
		{if(div[i].className == ('html5-video-player')) {div[i].style.overflow = 'visible';}}
		
		// fix 16 augustus 2013
		var playerapilegacy = $('player-api-legacy');
		if(playerapilegacy)$('player-api-legacy').style.overflow = 'visible';

		// fix 22 februari 2014
		var html5playermessages = $('html5-player-messages');
		if(html5playermessages)$('html5-player-messages').style.display = 'none';
		
		
		var youtubewatchplayershadow = $("watch-player"); // YouTube video page
		if(youtubewatchplayershadow){ youtubewatchplayershadow.style.overflow = "visible"; } // show the overflow out the video element
		var youtubevideoplayershadow = $("video-player"); // YouTube video page
		if(youtubevideoplayershadow){ youtubevideoplayershadow.style.overflow = "visible"; } // show the overflow out the video element
		var youtubewatchvideoshadow = $("watch-video"); // YouTube video page
		if(youtubewatchvideoshadow){ youtubewatchvideoshadow.style.overflow = "visible"; } // show the overflow out the video element	
		var youtubewindow = $("watch-player") || $("watch7-player") || $("player-api");
		if(youtubewindow){youtubewindow.style.zIndex = 1001;}
		var youtubemovieplayer = $("movie_player"); // YouTube video page
		if(youtubemovieplayer){ youtubemovieplayer.style.overflow = "visible"; youtubemovieplayer.style.zIndex = 1001; } // show the overflow out the video element
		
		if(yttest){
		if ($("movie_player").getPlayerState() == 1) {drawImage(youtubewindow, item);}
		else { drawImage(youtubewindow, item); }
		}
		}
		
		}
		catch(err) {} // i see nothing, that is good
		},20); // 20 refreshing it

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
function drawImage(playerid, item){
try {
	if(playerid.paused || playerid.ended || $("movie_player").getPlayerState() == 0 || $("movie_player").getPlayerState() == 2){
	// animation go out
	countA=countA-1;if (countA <= 0){countA=0;}
	countB=countB-1;if (countB <= 0){countB=0;}
	countC=countC-1;if (countC <= 0){countC=0;}
	var textcountA = countA + "px";
	var textcountB = countB + "px";
	
var k = item;
	if(typeof k == "undefined") {
	return
	}
var canvas = $("totlCanvas" + k + "");
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
	// ----

	if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)){
		// var youtubewindow = $("watch-player") || $("watch7-player") || $("player-api");
		var youtubewindow = $("movie_player");
		if(ambilightvarcolor == 'true'){
			if(atmosvivid == 'true'){
				if($("stefanvdvivideffect")){
				var stefanvdvivideffect = $('stefanvdvivideffect');
				stefanvdvivideffect.parentNode.removeChild(stefanvdvivideffect);
				}
			} else {
				if(typeof downhex1 != "undefined" || typeof downhex2 != "undefined" || typeof downhex3 != "undefined" || typeof downhex4 != "undefined"){
					try{
					youtubewindow.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + downhex3 + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + downhex1 + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + downhex2 + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + downhex4 + "";
					}catch(e){}
				}
				else{
					youtubewindow.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilightcolorhex + "";
				}
			}
		}
		else if(ambilightfixcolor == 'true'){
		youtubewindow.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilightcolorhex + "";
		}
		else if(ambilight4color == 'true'){
		youtubewindow.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + ambilight1colorhex + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + ambilight2colorhex + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilight3colorhex + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilight4colorhex + "";
		}
	}else{
		if(ambilightvarcolor == 'true'){
		playerid.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + downhex3 + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + downhex1 + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + downhex2 + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + downhex4 + ""; 
		}
		else if(ambilightfixcolor == 'true'){
		playerid.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilightcolorhex + "";
		}
		else if(ambilight4color == 'true'){
		playerid.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + ambilight1colorhex + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + ambilight2colorhex + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilight3colorhex + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilight4colorhex + "";
		}
	}
	
	return false;}
}catch(err) {}

try {
	var k = item;
	if(typeof k == "undefined") {
	return
	}
}catch(err) {}

    var totlshowtime = playerid;
	// var youtubewindow = $("watch-player") || $("watch7-player") || $("player-api");
	var youtubewindow = $("movie_player");
	var getblur = ambilightrangeblurradius + "px";
	var getspread = ambilightrangespreadradius + "px";
	
	// animate out and in
	if (countA < ambilightrangespreadradius){countA=countA+1;}
	if (countB < ambilightrangeblurradius){countB=countB+1;}
	if (countC < 20){countC=countC+.5;}
	var textcountA = countA + "px";
	var textcountB = countB + "px";
	
	if(ambilightvarcolor == 'true'){
	// Cross detection
	// if url is the same as the video source
	// then posible to play real ambilight
	var cross = null;
	
	// check for the current page URL
	var pageurl = location.protocol + '//' + location.host; // http://www.stefanvd.net
	var pageurllengt = pageurl.length; // lengte url

	function subDomain(url) {
	// IF THERE, REMOVE WHITE SPACE FROM BOTH ENDS
	url = url.replace(new RegExp(/^\s+/),""); // START
	url = url.replace(new RegExp(/\s+$/),""); // END
	// IF FOUND, CONVERT BACK SLASHES TO FORWARD SLASHES
	url = url.replace(new RegExp(/\\/g),"/");
	// IF THERE, REMOVES 'http://', 'https://' or 'ftp://' FROM THE START
	url = url.replace(new RegExp(/^http\:\/\/|^https\:\/\/|^ftp\:\/\//i),"");
	// IF THERE, REMOVES 'www.' FROM THE START OF THE STRING
	url = url.replace(new RegExp(/^www\./i),"");
	// REMOVE COMPLETE STRING FROM FIRST FORWARD SLASH ON
	url = url.replace(new RegExp(/\/(.*)/),"");
	// REMOVES '.??.??' OR '.???.??' FROM END - e.g. '.CO.UK', '.COM.AU'
	if (url.match(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i))) {
		url = url.replace(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i),"");
	// REMOVES '.??' or '.???' or '.????' FROM END - e.g. '.US', '.COM', '.INFO'
	} else if (url.match(new RegExp(/\.[a-z]{2,4}$/i))) {
		url = url.replace(new RegExp(/\.[a-z]{2,4}$/i),"");
	} 
	// CHECK TO SEE IF THERE IS A DOT '.' LEFT IN THE STRING
	var subDomain = (url.match(new RegExp(/\./g))) ? true : false;

	return(subDomain);
	}
	var yesornosubdomain = subDomain(pageurl);

	if (totlshowtime != typeof HTMLVideoElement !== "undefined" && totlshowtime instanceof HTMLVideoElement) {
		var insideitem = totlshowtime.src;
		var insideitemlengt = 0;
		if(insideitem){	var insideitemlengt = insideitem.length; } // lengte url
	} else { var insideitemlengt = "undefined"; }

	// mission controll
	if((insideitemlengt == 0) && (yesornosubdomain == false)){
		// check for video -> source URL
		var items = totlshowtime.getElementsByTagName("source");
		for(var i= 0; i < 1; i++){ // 1 source needed
			cross = items[i].getAttribute('src');
		}
		if(cross.substring(0, pageurllengt) == pageurl) {runreal();}
		else if(cross.substring(0, 2) == './') {runreal();}
		else if(cross.substring(0, 3) == '../') {runreal();}
		else if((cross.substring(0, 4) != 'http') && (cross.substring(0, 5) != 'https') && (cross.substring(0, 3) != 'ftp')) {runreal();}
		else {rundefault();}
	} else if ((insideitemlengt > 0) && (yesornosubdomain == false)) {
		if(insideitem.substring(0, pageurllengt) == pageurl) {runreal();}
		else if(insideitem.substring(0, 2) == './') {runreal();}
		else if(insideitem.substring(0, 3) == '../') {runreal();}
		else if((insideitem.substring(0, 4) != 'http') && (insideitem.substring(0, 5) != 'https') && (insideitem.substring(0, 3) != 'ftp')) {runreal();}
		else {rundefault();}
	} else {rundefault();}

function runreal(){
    var sourceWidth = totlshowtime.videoWidth;
    var sourceHeight = totlshowtime.videoHeight;
	
	var totlcheckcanvas = $("totlCanvas" + k + "");
	if(totlcheckcanvas){} else{
 	var totlnewcanvas = document.createElement("canvas");
	totlnewcanvas.setAttribute('id','totlCanvas' + k + '');
	totlnewcanvas.width = "4";
	totlnewcanvas.height = "1";
	totlnewcanvas.style.display = "none";
	document.body.appendChild(totlnewcanvas);
	}
	
var canvas = $("totlCanvas" + k + "");
var context = canvas.getContext('2d');

var colorlamp1X = (sourceWidth * 50) /100; // up midden
var colorlamp1Y = (sourceHeight * 95) /100;
var colorlamp2X = (sourceWidth * 95) /100; // right midden
var colorlamp2Y = (sourceHeight * 50) /100;
var colorlamp3X = (sourceWidth * 50) /100; // down midden
var colorlamp3Y = (sourceHeight * 5) /100;
var colorlamp4X = (sourceWidth * 5) /100; // left midden
var colorlamp4Y = (sourceHeight * 50) /100;

	context.drawImage(totlshowtime, colorlamp1X, colorlamp1Y, 1, 1, 0, 0, 1, 1);
	context.drawImage(totlshowtime, colorlamp2X, colorlamp2Y, 1, 1, 1, 0, 1, 1);
	context.drawImage(totlshowtime, colorlamp3X, colorlamp3Y, 1, 1, 2, 0, 1, 1);
	context.drawImage(totlshowtime, colorlamp4X, colorlamp4Y, 1, 1, 3, 0, 1, 1);

try{
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

	if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)){
		if(atmosvivid == 'true'){
			var calcvividscale = 1+(ambilightrangespreadradius/100);
			var html5videoplayer = document.querySelector('video');
				if($("stefanvdvivideffect")){
				var stefanvdvivideffect = $('stefanvdvivideffect');
					if((stefanvdvivideffect.style.height != totlshowtime.style.height) && (totlshowtime.style.height != "")){
					stefanvdvivideffect.style.height = html5videoplayer.style.height;
					stefanvdvivideffect.style.width = html5videoplayer.style.width;
					}
				var vividctx = stefanvdvivideffect.getContext('2d');
				vividctx.drawImage(totlshowtime, 0, 0,totlshowtime.offsetWidth*1,totlshowtime.offsetHeight*1);
				} else{
				var newvivid = document.createElement("canvas");
				newvivid.setAttribute('id','stefanvdvivideffect');
				newvivid.style.webkitTransform = "scale("+calcvividscale+")";
				newvivid.style.webkitFilter = "blur("+ambilightrangeblurradius+"px)";
				newvivid.setAttribute('width',totlshowtime.offsetWidth);
				newvivid.setAttribute('height',totlshowtime.offsetHeight);
				newvivid.style.opacity = .88;
				newvivid.style.position = "absolute";
				newvivid.style.top = "0px";
				newvivid.style.left = "0px";
				$("player-api").appendChild(newvivid);
				}
		} else {
		youtubewindow.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + hex3 + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + hex1 + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + hex2 + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + hex4 + "";
		}
	}
	else { totlshowtime.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + hex3 + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + hex1 + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + hex2 + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + hex4 + ""; }

}catch(e) {rundefault();}
}

		// if catch error in URL
		function rundefault(){
		if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)){ youtubewindow.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ""; }
		else { totlshowtime.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ""; }
		}
	} else if(ambilightfixcolor == 'true'){
		if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)){ youtubewindow.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ""; }
		else { totlshowtime.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilightcolorhex + ""; }
	} else if (ambilight4color == 'true'){
		if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)){ youtubewindow.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + ambilight1colorhex + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + ambilight2colorhex + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilight3colorhex + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilight4colorhex + ""; }
		else { totlshowtime.style.boxShadow = "0px 0px 5px black , 0px -" + countC + "px " + textcountB + " " + textcountA + " " + ambilight1colorhex + ", 0px " + countC + "px " + textcountB + " " + textcountA + " " + ambilight2colorhex + ", " + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilight3colorhex + ", -" + countC + "px 0px " + textcountB + " " + textcountA + " " + ambilight4colorhex + ""; }
	}
	
	window.requestAnimFrame(drawImage);	
}
}


}

var isitdark = false;
// Observe a specific DOM element:
if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)){
if(document.getElementById('content')){ // from youtube website
observeDOM( document.getElementById('content') ,function(){
        // for the night mode live update
        if(isitdark == true){
			sun = true; gogonightmode(); // make it dark
			
			var i, frames;
			frames = document.getElementsByTagName("iframe");
			for (i = 0; i < frames.length; ++i)
			{
				frames[i].onload = function(){
					sun = true; gogonightmode(); // make it dark
				}
			}
		}

        // for the no360 live update  
		if (no360youtube == 'true'){
        var ytfullvideo = document.getElementsByTagName('video');
        for(var i = 0; i < ytfullvideo.length; i++) {
            ytfullvideo[i].style.cssText += "position:relative; z-index:1000; display:block !important";
        }
        var ytwebgl = document.getElementsByClassName('webgl');
        for(var i = 0; i < ytwebgl.length; i++ ){ytwebgl[i].style.display = 'none';}
        }
        
});
}
}

// Night Theme feature
var sun = true;
var oldbackgroundImage = document.body.style.backgroundImage;
var oldbackgroundColor = document.body.style.backgroundColor;
var oldbackground = document.body.style.background;
var oldtextcolor = document.body.style.color;

// gogo night mode
function gogonightmode(){
    var css = '.stefanvdnight{color:'+nightmodetxt+'!important;background:'+nightmodebck+'!important;background-color:'+nightmodebck+'!important;border:0px!important}',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
    
    if($("totlnightmodestyle")){
        $("totlnightmodestyle").innerText = css;
    }else{
        style.type = 'text/css';
        style.setAttribute("id", "totlnightmodestyle");
        if (style.styleSheet){
        style.styleSheet.cssText = css;
        } else {
        style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);
    }
    //---
        
    if (sun == true) {
			sun = false; isitdark = true;
			if ($("stefanvdnighti")) {
				$("stefanvdnighti").setAttribute("id", "stefanvdnightin"); // change day background button
			}
			if ($("stefanvdnightthemecheckbox")){$("stefanvdnightthemecheckbox").checked = true;}
					
			if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)) { } else {
				// search all elements and add night class
				var n = document.getElementsByTagName('*');
				for (var i = 0; i < n.length; i++) {
                    n[i].className += " stefanvdnight"; 
				}
			}
			//---

			document.body.style.backgroundColor = nightmodebck;
			document.body.style.background = nightmodebck;
			document.body.style.color = nightmodetxt;
            
			if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)){
            if($("logo-container")){$("logo-container").style.cssText = "-webkit-filter: grayscale(100%) brightness(100%) contrast(100%);";}
			if($("watch7-action-buttons")){$("watch7-action-buttons").style.cssText = "-webkit-filter: grayscale(0%) brightness(100%) contrast(0%);";}
			if($("watch7-content")){$("watch7-content").style.background = nightmodebck;} //#fff
			if($("yt-masthead-container")){$("yt-masthead-container").style.background = nightmodebck;} //#f1f1f1
			if($("watch7-sidebar")){$("watch7-sidebar").style.background = nightmodebck;} //#fff
			if($("watch7-headline")){$("watch7-headline").style.background = nightmodebck;} //#fff
			if($("watch7-user-header")){$("watch7-user-header").style.background = nightmodebck;} //#fff
			if($("footer-container")){$("footer-container").style.background = nightmodebck;} //#f2f2f2
			if($("c4-shelves-container")){$("c4-shelves-container").style.background = nightmodebck;} //#fff
			if($("watch7-creator-bar")){$("watch7-creator-bar").style.background = nightmodebck;} //#fff
			if($("non-appbar-vm-video-actions-bar")){$("non-appbar-vm-video-actions-bar").style.background = nightmodebck;} //#fff
			if($("masthead-search-terms")){$("masthead-search-terms").style.background = nightmodebck;} //#fff
			if($("watch7-action-panel-footer")){$("watch7-action-panel-footer").style.background = nightmodebck;} //#fff
			var ytbranddiv = document.querySelectorAll('div.branded-page-v2-primary-col');
			for(var i = 0; i < ytbranddiv.length; i++ ){ytbranddiv[i].style.background = nightmodebck;} //#fff
			var ytheaddiv = document.querySelectorAll('div.secondary-header-contents');
			for(var i = 0; i < ytheaddiv.length; i++ ){ytheaddiv[i].style.background = nightmodebck;} //#fff
			var ytmastersearchtermdiv = document.querySelectorAll('div.masthead-search-terms-border');
			for(var i = 0; i < ytmastersearchtermdiv.length; i++ ){ytmastersearchtermdiv[i].style.border = "1px solid #414141";} //#414141
			var ytuixbuttondiv = document.querySelectorAll('button.yt-uix-button-default');
			for(var i = 0; i < ytuixbuttondiv.length; i++ ){ytuixbuttondiv[i].style.background = "#333333";ytuixbuttondiv[i].style.color = "#fff";ytuixbuttondiv[i].style.borderColor = "#5E5E5E";}
			var ytuixadiv = document.querySelectorAll('a.yt-uix-button-default');
			for(var i = 0; i < ytuixadiv.length; i++ ){ytuixadiv[i].style.background = "#333333";ytuixadiv[i].style.color = "#fff";ytuixadiv[i].style.borderColor = "#5E5E5E";}
			var ytuploadlidiv = document.querySelectorAll('li.vm-video-item');
			for(var i = 0; i < ytuploadlidiv.length; i++ ){ytuploadlidiv[i].style.background = nightmodebck;}
			var ytuploadmetrixdiv = document.querySelectorAll('div.vm-video-metrics');
			for(var i = 0; i < ytuploadmetrixdiv.length; i++ ){ytuploadmetrixdiv[i].style.backgroundImage = "linear-gradient(to right,#000000 0,#000 11px)";}
			var ytmetadatadiv = document.querySelectorAll('button.metadata-inline');
			for(var i = 0; i < ytmetadatadiv.length; i++ ){ytmetadatadiv[i].style.background = nightmodebck;}
			if($("watch7-container")){$("watch7-container").style.background = nightmodebck;} //#fff
			if($("masthead-appbar")){$("masthead-appbar").style.background = nightmodebck;} //#fff
			if($("gh-activityfeed")){$("gh-activityfeed").style.background = nightmodebck;} //#fff
			if($("appbar-guide-menu")){$("appbar-guide-menu").style.background = nightmodebck;} //#fff
			if($("gh-overviewtab")){$("gh-overviewtab").style.background = nightmodebck;} //#fff
			if($("c4-primary-header-contents")){$("c4-primary-header-contents").style.background = nightmodebck;} //#fff
			if($("channel-subheader")){$("channel-subheader").style.background = nightmodebck;} //#fff
			if($("eow-title")){$("eow-title").style.color = "#7C7C7C";}
			var ytcard = document.querySelectorAll('.yt-card');
			for(var i = 0; i < ytcard.length; i++ ){ytcard[i].style.background = nightmodebck; ytcard[i].style.color = "#7C7C7C"; }
			// update 11 may 2014
			var ytguideitem = document.querySelectorAll('a.guide-item');
			for(var i = 0; i < ytguideitem.length; i++ ){ytguideitem[i].style.color = "#999";}
			var ytuiellipsis = document.querySelectorAll('a.yt-ui-ellipsis');
			for(var i = 0; i < ytuiellipsis.length; i++ ){ytuiellipsis[i].style.background = nightmodebck;}
			var ytnbc = document.querySelectorAll('div.nbc');
			for(var i = 0; i < ytnbc.length; i++ ){ytnbc[i].style.backgroundColor = nightmodebck;}
			if ($("watch-description-clip")) { $("watch-description-clip").style.color = "#999"; }
			if ($("masthead-expanded-container")) { $("masthead-expanded-container").style.background = nightmodebck; }
			// update 12 june 2014
			var ytselectedguideitem = document.querySelectorAll('a.guide-item-selected');
			for(var i = 0; i < ytselectedguideitem.length; i++ ){ytselectedguideitem[i].style.color = "#999";}
			if ($("masthead-search-term")) { $("masthead-search-term").style.color = "white"; }
			var ytuiellipsisdv = document.querySelectorAll('div.yt-ui-ellipsis');
			for(var i = 0; i < ytuiellipsisdv.length; i++ ){ytuiellipsisdv[i].style.background = nightmodebck;}
			var ytgssbmtable = document.querySelectorAll('table.gssb_m');
			for(var i = 0; i < ytgssbmtable.length; i++ ){ytgssbmtable[i].style.background = nightmodebck;ytgssbmtable[i].style.color = "white";}
			var ytdivytuixexpander = document.querySelectorAll('div.yt-uix-expander-ellipsis');
			for(var i = 0; i < ytdivytuixexpander.length; i++ ){ytdivytuixexpander[i].style.background = nightmodebck;}
			// update 3 april 2015
			var ytdivallcomments = document.querySelectorAll('div.all-comments');
			for(var i = 0; i < ytdivallcomments.length; i++ ){ytdivallcomments[i].style.background = nightmodebck;}
			var ytbtnuixdiv = document.querySelectorAll('button.yt-uix-button');
			for(var i = 0; i < ytbtnuixdiv.length; i++ ){ytbtnuixdiv[i].style.background = "#333333";ytbtnuixdiv[i].style.color = "#fff";}
			// update 16 april 2015
			var ytdivcomments = document.querySelectorAll('div.comments');
			for(var i = 0; i < ytdivcomments.length; i++ ){ytdivcomments[i].style.color = "#999";}

			safari.self.tab.dispatchMessage("adddarkyoutube","there");
}
//-----
    } else {
        sun = true; isitdark = false;
        if ($("stefanvdnightin")) {
            $("stefanvdnightin").setAttribute("id", "stefanvdnighti"); // change night background button
        }
		if ($("stefanvdnightthemecheckbox")){$("stefanvdnightthemecheckbox").checked = false;}
        document.body.style.backgroundImage = oldbackgroundImage;
        document.body.style.backgroundColor = oldbackgroundColor;
        document.body.style.backgroundColor = oldbackground;
        document.body.style.color = oldtextcolor;

        if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)) { } else {
            // search all elements and remove night class
            var elems = document.querySelectorAll(".stefanvdnight");
            [].forEach.call(elems, function (el) {
                el.classList.remove("stefanvdnight");
            });
        }
		//---

        if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)) {
            if ($("logo-container")) { $("logo-container").style.cssText = ""; }
            if ($("watch7-action-buttons")) { $("watch7-action-buttons").style.cssText = ""; }
            if ($("watch7-content")) { $("watch7-content").style.background = "#fff"; } //#fff
            if ($("yt-masthead-container")) { $("yt-masthead-container").style.background = "white"; } //#f1f1f1
            if ($("watch7-sidebar")) { $("watch7-sidebar").style.background = "#fff"; } //#fff
            if ($("watch7-headline")) { $("watch7-headline").style.background = "#fff"; } //#fff
            if ($("watch7-user-header")) { $("watch7-user-header").style.background = "#fff"; } //#fff
            if ($("footer-container")) { $("footer-container").style.background = "#f2f2f2"; } //#f2f2f2
            if ($("c4-shelves-container")) { $("c4-shelves-container").style.background = "#fff"; } //#fff
            if ($("watch7-creator-bar")) { $("watch7-creator-bar").style.background = "#fff"; } //#fff
            if ($("masthead-search-terms")) { $("masthead-search-terms").style.background = "#fff"; } //#fff
            if ($("non-appbar-vm-video-actions-bar")) { $("non-appbar-vm-video-actions-bar").style.background = "#fff"; } //#fff
            if ($("watch7-action-panel-footer")) { $("watch7-action-panel-footer").style.background = "#fff"; } //#fff
            var ytbranddiv = document.querySelectorAll('div.branded-page-v2-primary-col');
            for (var i = 0; i < ytbranddiv.length; i++) { ytbranddiv[i].style.background = "#fff"; } //#fff
            var ytheaddiv = document.querySelectorAll('div.secondary-header-contents');
            for (var i = 0; i < ytheaddiv.length; i++) { ytheaddiv[i].style.background = "#fff"; } //#fff
            var ytmastersearchtermdiv = document.querySelectorAll('div.masthead-search-terms-border');
            for (var i = 0; i < ytmastersearchtermdiv.length; i++) { ytmastersearchtermdiv[i].style.border = "1px solid #b9b9b9"; } //#b9b9b9
            var ytuixbuttondiv = document.querySelectorAll('button.yt-uix-button-default');
            for (var i = 0; i < ytuixbuttondiv.length; i++) { ytuixbuttondiv[i].style.background = "#f8f8f8"; ytuixbuttondiv[i].style.color = "#333"; ytuixbuttondiv[i].style.borderColor = "#d3d3d3"; }
            var ytuixadiv = document.querySelectorAll('a.yt-uix-button-default');
            for (var i = 0; i < ytuixadiv.length; i++) { ytuixadiv[i].style.background = "#f8f8f8"; ytuixadiv[i].style.color = "#333"; ytuixadiv[i].style.borderColor = "#d3d3d3"; }
            var ytuploadlidiv = document.querySelectorAll('li.vm-video-item');
            for (var i = 0; i < ytuploadlidiv.length; i++) { ytuploadlidiv[i].style.background = "#fff"; }
            var ytuploadmetrixdiv = document.querySelectorAll('div.vm-video-metrics');
            for (var i = 0; i < ytuploadmetrixdiv.length; i++) { ytuploadmetrixdiv[i].style.backgroundImage = "linear-gradient(to right,#f9f9f9 0,#FFF 11px)"; }
            var ytmetadatadiv = document.querySelectorAll('button.metadata-inline');
            for (var i = 0; i < ytmetadatadiv.length; i++) { ytmetadatadiv[i].style.background = "#fff"; }
            if ($("watch7-container")) { $("watch7-container").style.background = "#fff"; } //#fff
            if ($("masthead-appbar")) { $("masthead-appbar").style.background = "#fff"; } //#fff
            if ($("gh-activityfeed")) { $("gh-activityfeed").style.background = "#fff"; } //#fff
            if ($("appbar-guide-menu")) { $("appbar-guide-menu").style.background = "#fff"; } //#fff
            if ($("gh-overviewtab")) { $("gh-overviewtab").style.background = "#fff"; } //#fff
            if ($("c4-primary-header-contents")) { $("c4-primary-header-contents").style.background = "#fff"; } //#fff
            if ($("channel-subheader")) { $("channel-subheader").style.background = "#fff"; } //#fff
            if ($("eow-title")) { $("eow-title").style.color = "black"; }
            var ytcard = document.querySelectorAll('.yt-card');
            for (var i = 0; i < ytcard.length; i++) { ytcard[i].style.background = "#fff"; ytcard[i].style.color = "white"; }
			// update 11 may 2014
			var ytguideitem = document.querySelectorAll('a.guide-item');
			for(var i = 0; i < ytguideitem.length; i++ ){ytguideitem[i].style.color = "#222";}
			var ytuiellipsis = document.querySelectorAll('a.yt-ui-ellipsis');
			for(var i = 0; i < ytuiellipsis.length; i++ ){ytuiellipsis[i].style.background = "white";}
			var ytnbc = document.querySelectorAll('div.nbc');
			for(var i = 0; i < ytnbc.length; i++ ){ytnbc[i].style.backgroundColor = "white";}
			if ($("watch-description-clip")) { $("watch-description-clip").style.color = "#333"; }
			if ($("masthead-expanded-container")) { $("masthead-expanded-container").style.background = "white"; }
			// update 12 june 2014
			var ytselectedguideitem = document.querySelectorAll('a.guide-item-selected');
			for(var i = 0; i < ytselectedguideitem.length; i++ ){ytselectedguideitem[i].style.color = "white";}
			if ($("masthead-search-term")) { $("masthead-search-term").style.color = "black"; }
			var ytuiellipsisdv = document.querySelectorAll('div.yt-ui-ellipsis');
			for(var i = 0; i < ytuiellipsisdv.length; i++ ){ytuiellipsisdv[i].style.background = "white";}
			var ytgssbmtable = document.querySelectorAll('table.gssb_m');
			for(var i = 0; i < ytgssbmtable.length; i++ ){ytgssbmtable[i].style.background = "white";ytgssbmtable[i].style.color = "black";}
			var ytdivytuixexpander = document.querySelectorAll('div.yt-uix-expander-ellipsis');
			for(var i = 0; i < ytdivytuixexpander.length; i++ ){ytdivytuixexpander[i].style.background = "white";}
			// update 3 april 2015
			var ytdivallcomments = document.querySelectorAll('div.all-comments');
			for(var i = 0; i < ytdivallcomments.length; i++ ){ytdivallcomments[i].style.background = "white";}
			var ytbtnuixdiv = document.querySelectorAll('button.yt-uix-button');
			for(var i = 0; i < ytbtnuixdiv.length; i++ ){ytbtnuixdiv[i].style.background = "white";ytbtnuixdiv[i].style.color = "#777";}
			// update 16 april 2015
			var ytdivcomments = document.querySelectorAll('div.comments');
			for(var i = 0; i < ytdivcomments.length; i++ ){ytdivcomments[i].style.color = "black";}
			
			safari.self.tab.dispatchMessage("addnormalyoutube","there");
		}
	}
}

function nightfunction(){
	if($('stefanvdnighttheme')){}else{
		var newnight = document.createElement('label');
		newnight.setAttribute('id','stefanvdnighttheme');
		document.body.appendChild(newnight);
		if(nighthover == 'true'){
			newnight.style.opacity = '.2';
			var item = document.getElementById("stefanvdnighttheme");
			item.addEventListener("mouseover", function(){item.style.opacity = "1"}, false);
			item.addEventListener("mouseout", function(){item.style.opacity = ".2"}, false);
		}
		var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
		if(nmcustom == 'true'){newnight.style.left = nmcustomx;newnight.style.bottom = nmcustomy;}
		else if(nmtopleft == 'true'){newnight.style.left = "25px";newnight.style.top = "25px";}
		else if(nmtopright == 'true'){newnight.style.right = "25px";newnight.style.top = "25px";}
		else if(nmbottomright == 'true'){newnight.style.right = "25px";newnight.style.bottom = "25px";}
		else if(nmbottomleft == 'true'){newnight.style.left = "25px";newnight.style.bottom = "25px";}
		
		var newnightinput = document.createElement('input');
		newnightinput.setAttribute('type','checkbox');
		newnightinput.setAttribute('id','stefanvdnightthemecheckbox');
		if (nightenabletheme == 'true'){ newnightinput.setAttribute('checked','true'); }
		newnight.appendChild(newnightinput);

		var newnightspan = document.createElement('span');
		newnightspan.setAttribute('id','stefanvdnightthemeslider');
		newnight.appendChild(newnightspan);

		var newnightspansun = document.createElement('span');
		newnightspansun.setAttribute('class','sun');
		newnightspan.appendChild(newnightspansun);
		var newnightspansunspan = document.createElement('span');
		newnightspansun.appendChild(newnightspansunspan);
	
		var newnightspannight = document.createElement('span');
		newnightspannight.setAttribute('class','night');
		newnightspan.appendChild(newnightspannight);
		var newnightspannightspan = document.createElement('span');
		newnightspannight.appendChild(newnightspannightspan);

		var newnightspanblock = document.createElement('span');
		newnightspanblock.setAttribute('id','sliderblock');
		newnightspan.appendChild(newnightspanblock);
		var newnightspanblockspan = document.createElement('span');
		newnightspanblockspan.setAttribute('id','stefanvdnighti');
		newnightspanblockspan.setAttribute('class','turnoffthelightsdrag');
		newnightspanblockspan.textContent = '≡';
		newnightspanblock.appendChild(newnightspanblockspan);

		$("stefanvdnighttheme").addEventListener('change', function(e) { gogonightmode(); }, false);
	}
}

// tricker the switch
function showswitchtricker(){
		if(nightactivetime == 'true'){
			var now = new Date();var hours = now.getHours();var minutes = now.getMinutes();var gettime = hours + ":" + minutes;
			var gettimesecond = gettime.split(":")[0] * 3600 + gettime.split(":")[1] * 60;

			var time1 = nmbegintime;var time2 = nmendtime;
			var seconds1 = time1.split(":")[0] * 3600 + time1.split(":")[1] * 60;
			var seconds2 = time2.split(":")[0] * 3600 + time2.split(":")[1] * 60;

			// example
			// if begintime set 10:00 but endtime is 18:00
			// then do this
			if(seconds1 <= seconds2){ // default for user
			if((seconds1 <= gettimesecond) && (gettimesecond <= seconds2)){nightfunction();}
			}
			// example
			else if (seconds1 > seconds2){
			var getotherdaypart = 86400; // ... to 24:00 end
			var getothernightpart = 0; // start from 0:00 to seconds2 (example 11:00) 

			if((seconds1 <= gettimesecond) && (gettimesecond <= getotherdaypart)){ // 13 -> 24
			nightfunction();
			} else if((getothernightpart <= gettimesecond) && (gettimesecond <= seconds2)){ // 0 -> 11
			nightfunction();
			}
			}
		}
		else{
			nightfunction();
		}
}

// show all options the night switch CSS
// but not the "only" websites
if (nighttheme == 'true'){
	if(nightonly != 'true'){
		showswitchtricker()
	}
}

function timergonighttricker(){
	if(nightactivetime == 'true'){
		var now = new Date();var hours = now.getHours();var minutes = now.getMinutes();var gettime = hours + ":" + minutes;
		var gettimesecond = gettime.split(":")[0] * 3600 + gettime.split(":")[1] * 60;
		
		var time1 = nmbegintime;var time2 = nmendtime;
		var seconds1 = time1.split(":")[0] * 3600 + time1.split(":")[1] * 60;
		var seconds2 = time2.split(":")[0] * 3600 + time2.split(":")[1] * 60;

		// example
		// if begintime set 10:00 but endtime is 18:00
		// then do this
		if(seconds1 <= seconds2){ // default for user
		if((seconds1 <= gettimesecond) && (gettimesecond <= seconds2)){gogonightmode();}
		}
		// example
		else if (seconds1 > seconds2){
		var getotherdaypart = 86400; // ... to 24:00 end
		var getothernightpart = 0; // start from 0:00 to seconds2 (example 11:00) 

		if((seconds1 <= gettimesecond) && (gettimesecond <= getotherdaypart)){ // 13 -> 24
			gogonightmode();
		} else if((getothernightpart <= gettimesecond) && (gettimesecond <= seconds2)){ // 0 -> 11
			gogonightmode();
		}
	}
	}
	else{
	gogonightmode();
	}
}

if(nightonly == 'true'){
	var currenturl = window.location.protocol + '//' + window.location.host;
	var nightrabbit = false;
	if(typeof nightDomains == "string") {
		nightDomains = JSON.parse(nightDomains);
		var nbuf = [];
		for(var domain in nightDomains)
			nbuf.push(domain);
			nbuf.sort();
		for(var i = 0; i < nbuf.length; i++){
			if(nightmodechecklistwhite == 'true'){
				if(currenturl == nbuf[i]){
					if (nighttheme == 'true'){ showswitchtricker(); }
					if (nightenabletheme == 'true'){
						timergonighttricker();
					}
				}
			}
			else if(nightmodechecklistblack == 'true'){
				if(currenturl == nbuf[i]){nightrabbit=true;}
			}
		}
	}
	if(nightmodechecklistblack == 'true'){
		if(nightrabbit == false){showswitchtricker();timergonighttricker();nightrabbit = false;}
	}
}else{
	if (nightenabletheme == 'true'){
		timergonighttricker();
	} // auto the night mode
}

// draggable object for the Night Mode feature switch
if($('stefanvdnighttheme')){
if(nmcustom == 'true'){
var dragobject = { z: 0, x: 0, y: 0, offsetx : null, offsety : null, targetobj : null, dragapproved : 0,
initialize:function(){
document.onmousedown = this.drag;
document.onmouseup = function(){ this.dragapproved = 0;
// save the x and y value
if(nmcustom == 'true'){
var getnmcx = $('stefanvdnighttheme').style.left;
var getnmcy = $('stefanvdnighttheme').style.bottom;
safari.self.tab.dispatchMessage('nmcustomx', getnmcx);
safari.self.tab.dispatchMessage('nmcustomy', getnmcy);
}
}
},
drag:function(e){
var evtobj = window.event? window.event : e;
this.targetobj = window.event? event.srcElement : e.target;
if (this.targetobj.className == "turnoffthelightsdrag"){
this.dragapproved = 1;
$('stefanvdnighttheme').offsetx = parseInt($('stefanvdnighttheme').style.left);
$('stefanvdnighttheme').offsety = parseInt($('stefanvdnighttheme').style.bottom);
$('stefanvdnighttheme').x = evtobj.clientX; $('stefanvdnighttheme').y = evtobj.clientY;
if (evtobj.preventDefault)evtobj.preventDefault();
document.onmousemove = dragobject.moveit;
}
},
moveit:function(e){
var evtobj = window.event? window.event : e;
if (this.dragapproved == 1){
	if(nmcustom == 'true' || nmbottomleft == 'true'){
		$('stefanvdnighttheme').style.left = $('stefanvdnighttheme').offsetx + evtobj.clientX - $('stefanvdnighttheme').x + "px";
		$('stefanvdnighttheme').style.bottom = $('stefanvdnighttheme').offsety - evtobj.clientY + $('stefanvdnighttheme').y + "px";
	}
	else if(nmtopleft == 'true'){
		$('stefanvdnighttheme').style.left = $('stefanvdnighttheme').offsetx + evtobj.clientX - $('stefanvdnighttheme').x + "px";
		$('stefanvdnighttheme').style.top = $('stefanvdnighttheme').offsety - evtobj.clientY + $('stefanvdnighttheme').y + "px";
	}
	else if(nmtopright == 'true'){
		$('stefanvdnighttheme').style.right = $('stefanvdnighttheme').offsetx + evtobj.clientX - $('stefanvdnighttheme').x + "px";
		$('stefanvdnighttheme').style.top = $('stefanvdnighttheme').offsety - evtobj.clientY + $('stefanvdnighttheme').y + "px";
	}
	else if(nmbottomright == 'true'){
		$('stefanvdnighttheme').style.left = $('stefanvdnighttheme').offsetx + evtobj.clientX - $('stefanvdnighttheme').x + "px";
		$('stefanvdnighttheme').style.bottom = $('stefanvdnighttheme').offsety - evtobj.clientY + $('stefanvdnighttheme').y + "px";
	}
return false;
}
}
}

dragobject.initialize();
}
}
                                 
// lamp and night mode active with one click
if(lampandnightmode == 'true'){
	// Observe a specific DOM element:
	if(document.body){
	observeDOM( document.body ,function(){	
		if(isitdark == false){
			if(document.getElementById('stefanvdlightareoff1')){ sun = true; gogonightmode(); } // make it dark
		}else{if(document.getElementById('stefanvdlightareoff1')){}else{sun = false; gogonightmode();}}
	});
	}
}

// reflection
if(reflection == 'true'){
		var startreflection = window.setInterval(function () {
		try {
		var reflectionplayer = document.getElementsByTagName("video") || null;
		var reflectionid = null, ritem = null;
		for(var k=0; k<reflectionplayer.length; k++) {
			if (reflectionplayer[k].play){reflectionid = reflectionplayer[k]; ritem = k + 1; drawReflection(reflectionid, ritem);}
		}
		
		// YouTube flash detect play
		if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)){
		var yttest = $("movie_player"); ritem = 1;

		if(yttest){
		if ($("movie_player").getPlayerState() == 1) {drawReflection(youtubewindow, ritem);}
		else { drawReflection(youtubewindow, ritem); }
		}
		}
		
		}
		catch(err) {} // I see nothing, that is good
		},20); // 20 refreshing it	
		
function drawReflection(reflectionid,ritem){
	var calcreflection = (100 - reflectionamount)/100;
	try {
		if(reflectionid.paused || reflectionid.ended || $("movie_player").getPlayerState() == 0 || $("movie_player").getPlayerState() == 2){
			if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)){
				// var youtubewindow = $("watch-player") || $("watch7-player") || $("player-api");
				var youtubewindow = $("movie_player");
				youtubewindow.style.webkitBoxReflect = "";
			} else {
				reflectionid.style.webkitBoxReflect = "";
			}
		 return false;}
	}catch(err) {}
		
			if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)){
				// var youtubewindow = $("watch-player") || $("watch7-player") || $("player-api");
				var youtubewindow = $("movie_player");
				youtubewindow.style.webkitBoxReflect = "below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), to(black),color-stop("+calcreflection+", transparent))";
			} else {
				reflectionid.style.webkitBoxReflect = "below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), to(black),color-stop("+calcreflection+", transparent))";
			}
		
	window.requestAnimFrame(drawReflection);	
}
		
} // end reflection

// YouTube auto width the video player content
// URL control for YouTube only
if (window.location.href.match(/((http:\/\/(.*youtube\.com\/.*))|(https:\/\/(.*youtube\.com\/.*)))/i)){
if (no360youtube == 'true'){
	var ytfullvideo = document.getElementsByTagName('video');
	for(var i = 0; i < ytfullvideo.length; i++) {
        ytfullvideo[i].style.cssText += "position:relative; z-index:1000; display:block !important";
	}
	var ytwebgl = document.getElementsByClassName('webgl');
	for(var i = 0; i < ytwebgl.length; i++ ){ytwebgl[i].style.display = 'none';}
}

// new YouTube october 2013
var mastheadpositioner = $('masthead-positioner');
if(mastheadpositioner){$('masthead-positioner').style.zIndex = '10';}

var appbarguidemenu = $('appbar-guide-menu');
if(appbarguidemenu){$('appbar-guide-menu').style.zIndex = '10';}

var appbarguideiframemask = $('appbar-guide-iframe-mask');
if(appbarguideiframemask){$('appbar-guide-iframe-mask').style.zIndex = '-1';}

// fix self YouTube.com outline to none
var fixselfyoutubeplayeroutline = $('movie_player');
if(fixselfyoutubeplayeroutline){$('movie_player').style.outline = 'none';}

// fix self YouTube.com outline to none
var fixselfyoutubeplayeroutline = $('movie_player');
if(fixselfyoutubeplayeroutline){$('movie_player').style.outline = 'none';}

if (autowidthyoutube == 'true'){
var donesetquality = false;
var yt = yt;
yt = yt || {};
yt.playerConfig = {"player_wide": 1};
document.cookie = "wide=1; domain=.youtube.com; expires=31536e3; path=/";
function $(a) {return document.getElementById(a);}
// with playlist hide
if($("watch7-container")){$("watch7-container").className = "watch-wide watch-playlist-collapsed";}
// YouTube wide June 2015
if($("page")){$("page").className = "  watch clearfix watch-stage-mode watch-wide";}
}

if (customqualityyoutube == 'true') {
//see http://code.google.com/apis/youtube/flash_api_reference.html#setPlaybackQuality
// one of "highres", "hd1080", "hd720", "large", "medium", "small" or "default" to let youtube pick

var ythdinit = function onYouTubePlayerReady(player) {
  try{
      donesetquality = false;
      mplayer = player;
      if(typeof mplayer == "string"){
    	  mplayer = document.getElementById(mplayer);
      }
      if(typeof movie_player != 'undefined'){
    	  mplayer = movie_player;
      }
      mplayer.addEventListener("onStateChange", "onytplayerStateChange");
	  updateQuality();
  }
  catch(e){
  }
}

var ythdstatechange = function onytplayerStateChange(newState) {
		if(newState == 3 && !donesetquality){
			updateQuality();
		}
		if(newState == -1){
			donesetquality = false;
		}
}

var ythduq = function updateQuality(){
	var aq = mplayer.getAvailableQualityLevels();
	//console.log("Available qualities: " + aq);
	if(aq.indexOf(maxquality) == -1){
		//console.log("Set to highest available level: " + aq[0]);
		mplayer.setPlaybackQuality(aq[0]);
	}
	else{
		//console.log("Set to " + maxquality + " in accordance with user settings");
		mplayer.setPlaybackQuality(maxquality);
	}
	donesetquality = true;
}

function injectScript(codetext){
var messagescript = $('ytScriptMessage');
if(messagescript) {}
else {		
	var ythdscript = document.createElement("script");
	ythdscript.setAttribute("id", "ytScriptMessage");
	ythdscript.textContent = codetext;
	document.head.appendChild(ythdscript);
	}
}

var codetext = "var maxquality = '" + maxquality + "';\n";
codetext += (ythdinit.toString() +"\n");
codetext += (ythdstatechange.toString() + "\n");
codetext += (ythduq.toString() + "\n");
injectScript(codetext);

}

} // end check youtube.com website
	}
}, false);

// ask global.html for settings
safari.self.tab.dispatchMessage("getSettings","now");

// Context Menu
// Keep track of the last right-clicked element.
var lastRightClickedElement;
// Keep the timestamp of when lastRightClickedElement is saved.
var lastContextMenuEventTime;

// Register for the contextmenu event.
document.addEventListener("contextmenu", handleContextMenu, false);

function handleContextMenu(event)
{
    lastRightClickedElement = event.target;
    lastContextMenuEventTime = new Date().getTime();
    
    // Pass the right-clicked element's tag name and the timestamp up to the global page.
    safari.self.tab.setContextMenuEventUserInfo(event, { "tagName": event.target.tagName, "timestamp": lastContextMenuEventTime });
}

try {
var script = document.createElement("script");script.type = "text/javascript";script.src = safari.extension.baseURI + "js/injected.js";document.getElementsByTagName("head")[0].appendChild(script);
} catch(e) {}
}
}())