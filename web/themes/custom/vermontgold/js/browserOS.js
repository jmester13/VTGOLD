(function ($, Drupal) {
	'use strict';
// jQBrowser v0.2: http://davecardwell.co.uk/javascript/jquery/plugins/jquery-browserdetect/
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(c/a))+String.fromCharCode(c%a+161)};while(c--){if(k[c]){p=p.replace(new RegExp(e(c),'g'),k[c])}}return p}('Ö ¡(){® Ø={\'¥\':¡(){¢ £.¥},\'©\':{\'±\':¡(){¢ £.©.±},\'¯\':¡(){¢ £.©.¯}},\'¬\':¡(){¢ £.¬},\'¶\':¡(){¢ £.¶},\'º\':¡(){¢ £.º},\'Á\':¡(){¢ £.Á},\'À\':¡(){¢ £.À},\'½\':¡(){¢ £.½},\'¾\':¡(){¢ £.¾},\'¼\':¡(){¢ £.¼},\'·\':¡(){¢ £.·},\'Â\':¡(){¢ £.Â},\'³\':¡(){¢ £.³},\'Ä\':¡(){¢ £.Ä},\'Ã\':¡(){¢ £.Ã},\'Å\':¡(){¢ £.Å},\'¸\':¡(){¢ £.¸}};$.¥=Ø;® £={\'¥\':\'¿\',\'©\':{\'±\':²,\'¯\':\'¿\'},\'¬\':\'¿\',\'¶\':§,\'º\':§,\'Á\':§,\'À\':§,\'½\':§,\'¾\':§,\'¼\':§,\'·\':§,\'Â\':§,\'³\':§,\'Ä\':§,\'Ã\':§,\'Å\':§,\'¸\':§};Î(® i=0,«=».ì,°=».í,¦=[{\'¤\':\'Ý\',\'¥\':¡(){¢/Ù/.¨(°)}},{\'¤\':\'Ú\',\'¥\':¡(){¢ Û.³!=²}},{\'¤\':\'È\',\'¥\':¡(){¢/È/.¨(°)}},{\'¤\':\'Ü\',\'¥\':¡(){¢/Þ/.¨(°)}},{\'ª\':\'¶\',\'¤\':\'ß Ñ\',\'¥\':¡(){¢/à á â/.¨(«)},\'©\':¡(){¢ «.¹(/ã(\\d+(?:\\.\\d+)+)/)}},{\'¤\':\'Ì\',\'¥\':¡(){¢/Ì/.¨(«)}},{\'¤\':\'Í\',\'¥\':¡(){¢/Í/.¨(°)}},{\'¤\':\'Ï\',\'¥\':¡(){¢/Ï/.¨(«)}},{\'¤\':\'Ð\',\'¥\':¡(){¢/Ð/.¨(«)}},{\'ª\':\'·\',\'¤\':\'å Ñ\',\'¥\':¡(){¢/Ò/.¨(«)},\'©\':¡(){¢ «.¹(/Ò (\\d+(?:\\.\\d+)+(?:b\\d*)?)/)}},{\'¤\':\'Ó\',\'¥\':¡(){¢/æ|Ó/.¨(«)},\'©\':¡(){¢ «.¹(/è:(\\d+(?:\\.\\d+)+)/)}}];i<¦.Ë;i++){µ(¦[i].¥()){® ª=¦[i].ª?¦[i].ª:¦[i].¤.Õ();£[ª]=É;£.¥=¦[i].¤;® ­;µ(¦[i].©!=²&&(­=¦[i].©())){£.©.¯=­[1];£.©.±=Ê(­[1])}ê{® Ç=Ö ë(¦[i].¤+\'(?:\\\\s|\\\\/)(\\\\d+(?:\\\\.\\\\d+)+(?:(?:a|b)\\\\d*)?)\');­=«.¹(Ç);µ(­!=²){£.©.¯=­[1];£.©.±=Ê(­[1])}}×}};Î(® i=0,´=».ä,¦=[{\'ª\':\'¸\',\'¤\':\'ç\',\'¬\':¡(){¢/é/.¨(´)}},{\'¤\':\'Ô\',\'¬\':¡(){¢/Ô/.¨(´)}},{\'¤\':\'Æ\',\'¬\':¡(){¢/Æ/.¨(´)}}];i<¦.Ë;i++){µ(¦[i].¬()){® ª=¦[i].ª?¦[i].ª:¦[i].¤.Õ();£[ª]=É;£.¬=¦[i].¤;×}}}();',77,77,'function|return|Private|name|browser|data|false|test|version|identifier|ua|OS|result|var|string|ve|number|undefined|opera|pl|if|aol|msie|win|match|camino|navigator|mozilla|icab|konqueror|Unknown|flock|firefox|netscape|linux|safari|mac|Linux|re|iCab|true|parseFloat|length|Flock|Camino|for|Firefox|Netscape|Explorer|MSIE|Mozilla|Mac|toLowerCase|new|break|Public|Apple|Opera|window|Konqueror|Safari|KDE|AOL|America|Online|Browser|rev|platform|Internet|Gecko|Windows|rv|Win|else|RegExp|userAgent|vendor'.split('|')))

/* ----------------------------------------------------------------- */

var aol       = $.browser.aol();       // AOL Explorer
var camino    = $.browser.camino();    // Camino
var firefox   = $.browser.firefox();   // Firefox
var flock     = $.browser.flock();     // Flock
var icab      = $.browser.icab();      // iCab
var konqueror = $.browser.konqueror(); // Konqueror
var mozilla   = $.browser.mozilla();   // Mozilla
var msie      = $.browser.msie();      // Internet Explorer Win / Mac
var netscape  = $.browser.netscape();  // Netscape
var opera     = $.browser.opera();     // Opera
var safari    = $.browser.safari();    // Safari
			
var userbrowser     = $.browser.browser(); //detected user browser

//operating systems

var linux = $.browser.linux(); // Linux
var mac   = $.browser.mac();   // Mac OS
var win   = $.browser.win();   // Microsoft Windows

//version

var userversion    = $.browser.version.number();

/* ----------------------------------------------------------------- */
			
if (mac == true) { 
	
	$("html").addClass("mac"); 
			
	
} else if (linux == true) {
	
	$("html").addClass("linux"); 
	
} else if (win == true) {
	
	$("html").addClass("windows");
	$("body").addClass("windows");
	
}

/* ----------------------------------------------------------------- */			

if (userbrowser == "Safari") {
	
	$("html").addClass("safari"); 
	
} else if (userbrowser == "Firefox") {

	$("html").addClass("firefox"); 

} else if (userbrowser == "Camino") {

	$("html").addClass("camino"); 

} else if (userbrowser == "AOL Explorer") {

	$("html").addClass("aol"); 

} else if (userbrowser == "Flock") {

	$("html").addClass("flock"); 

} else if (userbrowser == "iCab") {

	$("html").addClass("icab"); 

} else if (userbrowser == "Konqueror") {

	$("html").addClass("konqueror"); 

} else if (userbrowser == "Mozilla") {

	$("html").addClass("mozilla"); 
	$("body").addClass("mozilla"); 

} else if (userbrowser == "Netscape") {

	$("html").addClass("netscape"); 

} else if (userbrowser == "Opera") {

	$("html").addClass("opera"); 

} else if (userbrowser == "Internet Explorer") {
	
	$("html").addClass("ie");
	$("body").addClass("ie");
	
} else {}

$("html").addClass("" + userversion + "");
$("body").addClass("" + userversion + "");

// IE Styling 

if (userversion == "11") {

	$(".register-workshops .flex .item .wrap .num").css(
		"text-indent", "-24px"
	);

	$(".sign-up .burst").css({
		"left" : "0",
		"position" : "absolute",
		"background-size" : "cover"
	});

	$(".sign-up .inner-container").css({
		"position" : "relative",
		"left" : "-13%",
		"top" : "110px"
	});

	$(".sign-up .gradient-cover").css(
		"left", "0"
	);

	$(".wpcf7-form-control-wrap.Interested-In").css(
		"left","-55%!important"
	);

	$(".single-workshop-signup .inner-container").css(
		"min-height","1600px"
	);

	$(".single-workshop-signup .inner-container .wpcf7-form-control.wpcf7-checkbox.wpcf7-validates-as-required").css(
		"flex-direction","column"
	);

	$(".single-workshop-signup .inner-container .wpcf7-list-item").css(
		"width","100%"
	);

	$(".workshop-signup .inner-container").css(
		"min-height","1600px"
	);

	$(".workshop-signup .inner-container .wpcf7-form-control.wpcf7-checkbox.wpcf7-validates-as-required").css(
		"flex-direction","column"
	);

	$(".workshop-signup .inner-container .wpcf7-list-item").css(
		"width","100%"
	);

	$(".page-template-page-provider-partner-resources .resources li.resource .center img").css({
		"max-width" : "300px",
		"margin" : "0 auto"
	});

	$(".post-type-archive-workshop_dates .filter-tools form#filter .cat-filters").css(
		"max-width", "1300px"
	);

	$(".page-template-page-provider-partner-resources article.page .content").css(
		"max-width", "1300px"
	);



} else {
	// console.log('not IE 11');
}
})(jQuery, Drupal);
