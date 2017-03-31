function $(id) { return document.getElementById(id); }
// Install on www.stefanvd.net
// Install on www.turnoffthelights.com
if (window.location.href.match(/http:\/\/(.*stefanvd\.net\/.*|www\.stefanvd\.net\/.*\/.*)/i)|| window.location.href.match(/http:\/\/(.*turnoffthelights\.com\/.*|www\.turnoffthelights\.com\/.*\/.*)/i)){
	if ($('turnoffthelights-safari-install-button')) {
		$('turnoffthelights-safari-install-button').style.display = 'none';
		$('turnoffthelights-safari-thanks-button').style.display = '';
	}
}
var ambientaureaproduct = "https://safari-extensions.apple.com/details/?id=com.stefanvd.ambientaurea-PRR97757HF";
var datetodayproduct = "https://safari-extensions.apple.com/details/?id=com.stefanvd.datetoday-PRR97757HF";
var turnoffthelightsproduct = "https://safari-extensions.apple.com/details/?id=com.stefanvd.turnoffthelights-PRR97757HF";
var financetoolbarproduct = "https://safari-extensions.apple.com/details/?id=com.stefanvd.financetoolbar-PRR97757HF";
var propermenubarproduct = "https://safari-extensions.apple.com/details/?id=com.stefanvd.propermenubar-PRR97757HF";
var fullscreenproduct = "https://safari-extensions.apple.com/details/?id=com.stefanvd.fullscreen-PRR97757HF";
var zoomproduct = "https://safari-extensions.apple.com/details/?id=com.stefanvd.zoom-PRR97757HF";
var donatewebsite = "https://www.turnoffthelights.com/donate.html";
var writereview = "https://safari-extensions.apple.com/details/?id=com.stefanvd.turnoffthelights-PRR97757HF";
var linkchangelog = "https://www.turnoffthelights.com/extension/safarichangelog.html";
var linktranslate = "https://www.turnoffthelights.com/extension/translate.html";
var linksupport = "https://www.turnoffthelights.com/support/";
var linkwelcomepage = "https://www.turnoffthelights.com/extension/safariwelcome.html";
var linkuninstall = "https://www.turnoffthelights.com/extension/safariuninstalled.html";
var linkguide = "https://www.turnoffthelights.com/extension/safariguide.html";
var linkshare = "https://www.turnoffthelights.com/shareextension.html";
var linkthemedownload = "https://www.turnoffthelights.com/browser.html";
var browsernewtab = "";
var browserstore = "https://safari-extensions.apple.com";
var linkyoutube = "https://www.youtube.com/c/turnoffthelights?sub_confirmation=1";