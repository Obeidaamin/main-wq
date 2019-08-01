
//*‘—Ìÿ «·√Œ»«—
$('#HTML115')['each'](function() {
    var g = $(this),
        t = g['find']('.widget-content'),
        d3 = t['text']();
    	d3[4];
  if(d3.match(' ‘€Ì·')){
$("#wdbloog-news .widget")["each"](function () { var t = $(this) , e = t["find"](".widget-content")["text"]() , s = e["split"]("/") , a = s[0] , i = s[1] , l = Math["floor"](Math["random"]() * a + 1); if (e["match"]("recentpost")) { var r = "/feeds/posts/default?alt=json-in-script&max-results=" + a } else { if (e["match"]("randompost")) { var r = "/feeds/posts/default?alt=json-in-script&orderby=updated&start-index=" + l + "&max-results=" + a } else { var r = "/feeds/posts/default/-/" + i + "?alt=json-in-script&max-results=" + a } }; $["ajax"]({ type: "GET" , url: r , dataType: "jsonp" , success: function (t) { for (var e = "<ul id=\'wdbloognews\'>", s = "", a = 0; a < t["feed"]["entry"]["length"]; a++) { for (var i = t["feed"]["entry"][a], l = i["title"]["$t"], r = 0; r < i["link"]["length"]; r++) { if ("replies" == i["link"][r]["rel"] && "text/html" == i["link"][r]["type"]) { i["link"][r]["title"], i["link"][r]["href"] }; if ("alternate" == i["link"][r]["rel"]) { var n = i["link"][r]["href"]; break } }; s += "<li class=\"recent-box\">", s += "<a class=\"newstitle\" href=" + n + " target =\"_blank\">" + l + "</a>", s += "</li>" }; s += "</ul>", e += s, $("#wdbloog-news .widget-content")["each"](function () { $(this)["html"](e), $(this)["find"]("ul")["webTicker"]({ height: "50px" , direction: "right" }) }) } }) }), $("#slidert .widget")["each"](function () { var t = $(this) , e = t["find"](".widget-content")["text"]() , i = e["split"]("/") , l = i[0] , r = i[1] , n = Math["floor"](Math["random"]() * l + 1); if (e["match"]("recentpost")) { var o = "/feeds/posts/default?alt=json-in-script&max-results=" + l } else { if (e["match"]("randompost")) { var o = "/feeds/posts/default?alt=json-in-script&orderby=updated&start-index=" + n + "&max-results=" + l } else { var o = "/feeds/posts/default/-/" + r + "?alt=json-in-script&max-results=" + l } }; $["ajax"]({ type: "GET" , url: o , dataType: "jsonp" , success: function (t) { for (var e = "<ul class=\'magposts\'>", i = "", l = 0; l < t["feed"]["entry"]["length"]; l++) { for (var r = t["feed"]["entry"][l], n = r["title"]["$t"], o = 0; o < r["link"]["length"]; o++) { if ("replies" == r["link"][o]["rel"] && "text/html" == r["link"][o]["type"]) { r["link"][o]["title"], r["link"][o]["href"] }; if ("alternate" == r["link"][o]["rel"]) { var f = r["link"][o]["href"]; break } }; var p; try { p = r["media$thumbnail"]["url"]["replace"]("s72-c", "w300-h200-c")["replace"]("default", "hqdefault") } catch (h) { s = r["content"]["$t"], a = s["indexOf"]("<img"), b = s["indexOf"]("src=\"", a), c = s["indexOf"]("\"", b + 5), d = s["substr"](b + 5, c - b - 5), p = -1 != a && -1 != b && -1 != c && "" != d ? d : "http://3.bp.blogspot.com/-qnLm52EsvBE/VDkrZ46TWXI/AAAAAAAAAsM/tiJ36WiboU4/w600-h400-c/90.jpg" }; i += "<li class=\"mag-box\">", i += "<div class=\"magp-thumb\"><a href=\"" + f + "\" target =\"_top\"><img src=\"" + p + "\" title=\"" + n + "\" alt=\"" + n + "\"/></a></div>"; var u = r["author"][0]["name"]["$t"] , m = r["published"]["$t"] , g = r["content"]["$t"] , v = $("<p>")["html"](g)["text"]() , x = r["author"][0]["uri"]["$t"] , k = v["substring"](0, 100) + " ..."; i += "<div class=\"mag-content\">", i += "<div class=\"post-title\"><a href=" + f + " target =\"_blank\">" + n + "</a></div>"; for (var w = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], y = ["Ì‰«Ì—", "›»—«Ì—", "„«—”", "≈»—Ì·", "„«ÌÊ", "ÌÊ‰ÌÊ", "ÌÊ·ÌÊ", "√€”ÿ”", "”» „»—" , "√ﬂ Ê»—", " Ê›„»—", "œÌ”„»—"], j = m["split"]("-")[2]["substring"](0, 2), A = m["split"]("-")[1], T = m["split"]("-")[0], M = 0; M < w[ "length"]; M++) { if (parseInt(A) == w[M]) { A = y[M]; break } }; var E = j + " " + A + " " + T; i += "<a href=\"" + f + "\" class=\"post-date\"> " + E + "</a>", i += "<a href=" + x + " class=\"writer-p\">" + u + "</a></span>", i += "<div class=\"mag-bottom\">", i += "<p class=\"psummary\">" + k + "</p>", i += "</div>", i += "</div></li>" }; i += "</ul>", e += i, $("#slidert .widget-content")["each"](function () { $(this)["html"](e) , function (t, e, s) { for (var a = $(e), i = 0; i < a["length"]; i += t) { a["slice"](i, i + t)["wrapAll"](s) } }(4, ".magposts > li", "<div class=\'wdbloogslider\'></div>"), $(this)["find"]("ul")["owlCarousel"]({ loop: !0 , margin: 15 , rtl: !0 , autoplay: !0 , navText: ["<i class=\'fa fa-angle-right\'></i>", "<i class=\'fa fa-angle-left\'></i>"] , navspeed: 2e3 , responsive: { 0: { items: 1 } , 600: { items: 1 } , 1e3: { items: 1 } } }) }) } }) });

  } else if(d3.match('⁄«∆„')){
$("#wdbloog-news .widget")["each"](function () { var t = $(this) , e = t["find"](".widget-content")["text"]() , s = e["split"]("/") , a = s[0] , i = s[1] , l = Math["floor"](Math["random"]() * a + 1); if (e["match"]("recentpost")) { var r = "/feeds/posts/default?alt=json-in-script&max-results=" + a } else { if (e["match"]("randompost")) { var r = "/feeds/posts/default?alt=json-in-script&orderby=updated&start-index=" + l + "&max-results=" + a } else { var r = "/feeds/posts/default/-/" + i + "?alt=json-in-script&max-results=" + a } }; $["ajax"]({ type: "GET" , url: r , dataType: "jsonp" , success: function (t) { for (var e = "<ul id=\'wdbloognews\'>", s = "", a = 0; a < t["feed"]["entry"]["length"]; a++) { for (var i = t["feed"]["entry"][a], l = i["title"]["$t"], r = 0; r < i["link"]["length"]; r++) { if ("replies" == i["link"][r]["rel"] && "text/html" == i["link"][r]["type"]) { i["link"][r]["title"], i["link"][r]["href"] }; if ("alternate" == i["link"][r]["rel"]) { var n = i["link"][r]["href"]; break } }; s += "<li class=\"recent-box\">", s += "<a class=\"newstitle\" href=" + n + " target =\"_blank\">" + l + "</a>", s += "</li>" }; s += "</ul>", e += s, $("#wdbloog-news .widget-content")["each"](function () { $(this)["html"](e), $(this)["find"]("ul")["webTicker"]({ height: "50px" , direction: "right" }) }) } }) }), $("#slidert .widget")["each"](function () { var t = $(this) , e = t["find"](".widget-content")["text"]() , i = e["split"]("/") , l = i[0] , r = i[1] , n = Math["floor"](Math["random"]() * l + 1); if (e["match"]("recentpost")) { var o = "/feeds/posts/default?alt=json-in-script&max-results=" + l } else { if (e["match"]("randompost")) { var o = "/feeds/posts/default?alt=json-in-script&orderby=updated&start-index=" + n + "&max-results=" + l } else { var o = "/feeds/posts/default/-/" + r + "?alt=json-in-script&max-results=" + l } }; $["ajax"]({ type: "GET" , url: o , dataType: "jsonp" , success: function (t) { for (var e = "<ul class=\'magposts\'>", i = "", l = 0; l < t["feed"]["entry"]["length"]; l++) { for (var r = t["feed"]["entry"][l], n = r["title"]["$t"], o = 0; o < r["link"]["length"]; o++) { if ("replies" == r["link"][o]["rel"] && "text/html" == r["link"][o]["type"]) { r["link"][o]["title"], r["link"][o]["href"] }; if ("alternate" == r["link"][o]["rel"]) { var f = r["link"][o]["href"]; break } }; var p; try { p = r["media$thumbnail"]["url"]["replace"]("s72-c", "w300-h200-c")["replace"]("default", "hqdefault") } catch (h) { s = r["content"]["$t"], a = s["indexOf"]("<img"), b = s["indexOf"]("src=\"", a), c = s["indexOf"]("\"", b + 5), d = s["substr"](b + 5, c - b - 5), p = -1 != a && -1 != b && -1 != c && "" != d ? d : "http://3.bp.blogspot.com/-qnLm52EsvBE/VDkrZ46TWXI/AAAAAAAAAsM/tiJ36WiboU4/w600-h400-c/90.jpg" }; i += "<li class=\"mag-box\">", i += "<div class=\"magp-thumb\"><a href=\"" + f + "\" target =\"_top\"><img src=\"" + p + "\" title=\"" + n + "\" alt=\"" + n + "\"/></a></div>"; var u = r["author"][0]["name"]["$t"] , m = r["published"]["$t"] , g = r["content"]["$t"] , v = $("<p>")["html"](g)["text"]() , x = r["author"][0]["uri"]["$t"] , k = v["substring"](0, 100) + " ..."; i += "<div class=\"mag-content\">", i += "<div class=\"post-title\"><a href=" + f + " target =\"_blank\">" + n + "</a></div>"; for (var w = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], y = ["Ì‰«Ì—", "›»—«Ì—", "„«—”", "≈»—Ì·", "„«ÌÊ", "ÌÊ‰ÌÊ", "ÌÊ·ÌÊ", "√€”ÿ”", "”» „»—" , "√ﬂ Ê»—", " Ê›„»—", "œÌ”„»—"], j = m["split"]("-")[2]["substring"](0, 2), A = m["split"]("-")[1], T = m["split"]("-")[0], M = 0; M < w[ "length"]; M++) { if (parseInt(A) == w[M]) { A = y[M]; break } }; var E = j + " " + A + " " + T; i += "<a href=\"" + f + "\" class=\"post-date\"> " + E + "</a>", i += "<a href=" + x + " class=\"writer-p\">" + u + "</a></span>", i += "<div class=\"mag-bottom\">", i += "<p class=\"psummary\">" + k + "</p>", i += "</div>", i += "</div></li>" }; i += "</ul>", e += i, $("#slidert .widget-content")["each"](function () { $(this)["html"](e) , function (t, e, s) { for (var a = $(e), i = 0; i < a["length"]; i += t) { a["slice"](i, i + t)["wrapAll"](s) } }(4, ".magposts > li", "<div class=\'wdbloogslider\'></div>"), $(this)["find"]("ul")["owlCarousel"]({ loop: !0 , margin: 15 , rtl: !0 , autoplay: !0 , navText: ["<i class=\'fa fa-angle-right\'></i>", "<i class=\'fa fa-angle-left\'></i>"] , navspeed: 2e3 , responsive: { 0: { items: 1 } , 600: { items: 1 } , 1e3: { items: 1 } } }) }) } }) });
$('.tickernews').addClass('fixed-ti')

  }else {$('.tickernews').remove()}

});



//* ‘—Ìÿ «·√Œ»«—




$("#wdbloog-news h2").wrap('<div class="widget-title"></div>');

!function(i){function t(t){var e=0;return t.children("li").each(function(){e+=i(this).outerWidth(!0)}),e}function e(t){return Math.max.apply(Math,t.children().map(function(){return i(this).width()}).get())}function s(i){var t=i.data("settings")||{direction:"right",speed:50},e=i.children().first(),s=Math.abs(-i.css(t.direction).replace("px","").replace("auto","0")-e.outerWidth(!0)),n=1e3*s/t.speed,r={};return r[t.direction]=i.css(t.direction).replace("px","").replace("auto","0")-s,{css:r,time:n}}function n(i){var t=i.data("settings")||{direction:"right"};i.css("transition-duration","0s").css(t.direction,"0");var e=i.children().first();e.hasClass("webticker-init")?e.remove():i.children().last().after(e)}function r(i,t){var e=i.data("settings")||{direction:"right"};"undefined"==typeof t&&(t=!1),t&&n(i);var a=s(i);i.animate(a.css,a.time,"linear",function(){i.css(e.direction,"0"),r(i,!0)})}function a(i,t){"undefined"==typeof t&&(t=!1),t&&n(i);var e=s(i),r=e.time/1e3;r+="s",i.css(e.css).css("transition-duration",r)}function c(t,e,s){var n=[];i.get(t,function(t){var r=i(t);r.find("item").each(function(){var t=i(this),e={title:t.find("title").text(),link:t.find("link").text()},s='<li><a href="'+e.link+'"">'+e.title+"</a></li>";n+=s}),s.webTicker("update",n,e)})}function l(s,n){if(s.children("li").length<1)return window.console,!1;var r=s.data("settings");r.duplicateLoops=r.duplicateLoops||0,s.width("auto");var a=0;s.children("li").each(function(){a+=i(this).outerWidth(!0)});var c,l=s.find("li:first").height();if(r.duplicate){c=e(s);for(var o=0;a-c<s.parent().width()||1===s.children().length||o<r.duplicateLoops;){var d=s.children().clone();s.append(d),a=0,a=t(s),c=e(s),o++}r.duplicateLoops=o}else{var h=s.parent().width()-a;h+=s.find("li:first").width(),s.find(".ticker-spacer").length>0?s.find(".ticker-spacer").width(h):s.append('<li class="ticker-spacer" style="float: '+r.direction+";width:"+h+"px;height:"+l+'px;"></li>')}r.startEmpty&&n&&s.prepend('<li class="webticker-init" style="float: '+r.direction+";width:"+s.parent().width()+"px;height:"+l+'px;"></li>'),a=0,a=t(s),s.width(a+200);var f=0;for(f=t(s);f>=s.width();)s.width(s.width()+200),f=0,f=t(s);return!0}var o=function(){var i=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(""===i.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in i)return!0;return!1}(),d={init:function(t){return t=jQuery.extend({speed:50,direction:"right",moving:!0,startEmpty:!0,duplicate:!1,rssurl:!1,hoverpause:!0,rssfrequency:0,updatetype:"reset",transition:"linear",height:"30px",maskleft:"",maskright:"",maskwidth:0},t),this.each(function(){jQuery(this).data("settings",t);var e=jQuery(this),s=e.wrap('<div class="mask"></div>');s.after('<span class="tickeroverlay-left">&nbsp;</span><span class="tickeroverlay-right">&nbsp;</span>');var n,d=e.parent().wrap('<div class="tickercontainer"></div>');if(i(window).resize(function(){clearTimeout(n),n=setTimeout(function(){console.log("window was resized"),l(e,!1)},500)}),e.children("li").css("white-space","nowrap"),e.children("li").css("float",t.direction),e.children("li").css("padding","0 7px"),e.children("li").css("line-height",t.height),s.css("position","relative"),s.css("overflow","hidden"),e.closest(".tickercontainer").css("height",t.height),e.closest(".tickercontainer").css("overflow","hidden"),e.css("float",t.direction),e.css("position","relative"),e.css("font","bold 10px Verdana"),e.css("list-style-type","none"),e.css("margin","0"),e.css("padding","0"),""!==t.maskleft&&""!==t.maskright){var h='url("'+t.maskleft+'")';d.find(".tickeroverlay-left").css("background-image",h),d.find(".tickeroverlay-left").css("display","block"),d.find(".tickeroverlay-left").css("pointer-events","none"),d.find(".tickeroverlay-left").css("position","absolute"),d.find(".tickeroverlay-left").css("z-index","30"),d.find(".tickeroverlay-left").css("height",t.height),d.find(".tickeroverlay-left").css("width",t.maskwidth),d.find(".tickeroverlay-left").css("top","0"),d.find(".tickeroverlay-left").css("left","-2px"),h='url("'+t.maskright+'")',d.find(".tickeroverlay-right").css("background-image",h),d.find(".tickeroverlay-right").css("display","block"),d.find(".tickeroverlay-right").css("pointer-events","none"),d.find(".tickeroverlay-right").css("position","absolute"),d.find(".tickeroverlay-right").css("z-index","30"),d.find(".tickeroverlay-right").css("height",t.height),d.find(".tickeroverlay-right").css("width",t.maskwidth),d.find(".tickeroverlay-right").css("top","0"),d.find(".tickeroverlay-right").css("right","-2px")}else d.find(".tickeroverlay-left").css("display","none"),d.find(".tickeroverlay-right").css("display","none");e.children("li").last().addClass("last");var f=l(e,!0);t.rssurl&&(c(t.rssurl,t.type,e),t.rssfrequency>0&&window.setInterval(function(){c(t.rssurl,t.type,e)},1e3*t.rssfrequency*60)),o?(e.css("transition-timing-function",t.transition),e.css("transition-duration","0s").css(t.direction,"0"),f&&a(e,!1),e.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend",function(t){return!!e.is(t.target)&&void a(i(this),!0)})):f&&r(i(this)),t.hoverpause&&e.hover(function(){if(o){var e=i(this).css(t.direction);i(this).css("transition-duration","0s").css(t.direction,e)}else jQuery(this).stop()},function(){jQuery(this).data("settings").moving&&(o?a(i(this),!1):r(e))})})},stop:function(){var t=i(this).data("settings");if(t.moving)return t.moving=!1,this.each(function(){if(o){var e=i(this).css(t.direction);i(this).css("transition-duration","0s").css(t.direction,e)}else i(this).stop()})},cont:function(){var t=i(this).data("settings");if(!t.moving)return t.moving=!0,this.each(function(){o?a(i(this),!1):r(i(this))})},transition:function(t){var e=i(this);o&&e.css("transition-timing-function",t)},update:function(e,s,n,r){s=s||"reset","undefined"==typeof n&&(n=!0),"undefined"==typeof r&&(r=!1),"string"==typeof e&&(e=i(e));var a=i(this);a.webTicker("stop");var c=i(this).data("settings");if("reset"===s)a.html(e),l(a,!0);else if("swap"===s){var o,d,h,f;if(window.console,a.children("li").length<1)a.html(e),a.css(c.direction,"0"),l(a,!0);else if(c.duplicate===!0){a.children("li").addClass("old");for(var p=e.length-1;p>=0;p--)o=i(e[p]).data("update"),d=a.find('[data-update="'+o+'"]'),d.length<1?n&&(0===a.find(".ticker-spacer:first-child").length&&a.find(".ticker-spacer").length>0?a.children("li.ticker-spacer").before(e[p]):(h=i(e[p]),p===e.length-1&&h.addClass("last"),a.find("last").after(h),a.find("last").removeClass("last"))):a.find('[data-update="'+o+'"]').replaceWith(e[p]);a.children("li.webticker-init, li.ticker-spacer").removeClass("old"),r&&a.children("li").remove(".old"),f=0,f=t(a),a.width(f+200),a.find("li.webticker-init").length<1&&(c.startEmpty=!1),a.html(e),a.children("li").css("white-space","nowrap"),a.children("li").css("float",c.direction),a.children("li").css("padding","0 7px"),a.children("li").css("line-height",c.height),l(a,!0)}else{a.children("li").addClass("old");for(var u=0;u<e.length;u++)o=i(e[u]).data("update"),d=a.find('[data-update="'+o+'"]'),d.length<1?n&&(0===a.find(".ticker-spacer:first-child").length&&a.find(".ticker-spacer").length>0?a.children("li.ticker-spacer").before(e[u]):(h=i(e[u]),u===e.length-1&&h.addClass("last"),a.find(".old.last").after(h),a.find(".old.last").removeClass("last"))):a.find('[data-update="'+o+'"]').replaceWith(e[u]);a.children("li.webticker-init, li.ticker-spacer").removeClass("old"),a.children("li").css("white-space","nowrap"),a.children("li").css("float",c.direction),a.children("li").css("padding","0 7px"),a.children("li").css("line-height",c.height),r&&a.children("li").remove(".old"),f=0,f=t(a),a.width(f+200)}}a.webTicker("cont")}};i.fn.webTicker=function(t){return d[t]?d[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void i.error("Method "+t+" does not exist on jQuery.webTicker"):d.init.apply(this,arguments)}}(jQuery);



//* remove -
$(function() {
    'use strict';
$('.post-timestamp')['text'](function(_0xcde0x1, _0xcde0x2) {return _0xcde0x2['replace'](/-/g, '')});
$('.c-posts-info span.byline.post-timestamp').addClass('timer')
});


//* add class timeago
$('body')['each'](function() {
$('time.published').addClass('timeago');
});


//*««·Ê÷⁄ «·Ì·Ì
$('#theme-options #HTML113')['each'](function() {
    var g = $(this),
        t = g['find']('.widget-content'),
        d3 = t['text']();
    	d3[4];
  if(d3.match(' ‘€Ì·')){
	$('body').addClass('darkstyle');
  } if(d3.match('“—')){
/*
	$('.btn-moon').click(function(){
  	$(this).toggleClass('tgg');
	$('body').toggleClass('darkstyle')
});*/
  }else {$('.btn-moon').remove()}

});

//* ‘ﬂ· «·’‰œÊﬁ
$('#theme-options #HTML16')['each'](function() {
    var g = $(this),
        t = g['find']('.widget-content'),
        d3 = t['text']();
    	d3[4];
  if(d3.match(' ‘€Ì·')){
$('.run1')['addClass']('out-wrapper')
}});

//* ‘ﬂ· «·ÂÌœ—
$('#theme-options #HTML17')['each'](function() {
    var g = $(this),
        t = g['find']('.widget-content'),
        d3 = t['text']();
    	d3[4];
  if(d3.match('«·‘ﬂ· «·À«‰Ì')){
$('body')['addClass']('header2');if ($('body').hasClass('header2')){
$(function(){$('.s-c2').children().append($('.search-social'))});}
}});


//* √⁄œ«œ«  «·ﬁ«∆„… «·Ã«‰»Ì… 
$('#HTML950')['each'](function() {
    var g = $(this),
        t = g['find']('.widget-content'),
        d3 = t['text']();
    	d3[4];
  if(d3.match('≈Œ›«¡') || d3.match('«Œ›«¡')){

$('.sidebar')['css']('display', 'none')
$('.index .post-wrapper, .item .post-wrapper, body.static_page .post-wrapper, body.static_page .post-title').css({"max-width": "100%", "width": "100%"})

  } else if(d3.match('ﬂ·')){

		$('.item #sidebar, div#social-counter, div#wq-sidebar-tabs')['css']('display', 'block');
  } else if(d3.match !=('ﬂ·')){
	
	
      $('.item')['each'](function() {
          var a = $(this);
          a['find']('#com13')['append'](a['find']('.threaded-comments-wrapper'))
      });	

	}

});

// Õ–› ﬂ·«” (dp2)
/*
  if($('body').hasClass('.list-style')){
 $('.dp2').remove()
  }else{console.log('gooooood')};
*/

if ($('body').hasClass('list-style')){

 $(function(){
$('.list-style').removeClass( "body .dp2" );

});
}



// „”Õ «·’Ê—… ›Ì «·’›Õ« 
if ($('body.por-style')){

 $(function(){
$( "body.static_page .title-cover a" ).remove();

});
}



//* √⁄·«‰ Ã«‰» «·‘⁄«—
$('.s-c2 #HTML21')['each'](function() {
    var g = $(this),
        t = g['find']('.widget-content'),
        d3 = t['text']();
    	d3[4];
if ($('body').hasClass('header2')){ $(function(){$('.ad-1-logo').append($('#adlogo'))});} else{$('div#adlogo, .ad-1-logo').remove()}
});

//*  ‘ﬂ· «· œÊÌ‰« 
$('.post-wrapper #linklist7')['each'](function() {
    var g = $(this),
        t = g['find']('.widget-content ul li'),
        d3 = t['text']();
/*
		f = d3.split(','),
    	ind = f[0],
		it = f[1];
*/
console.log(d3)
  if(ind.match('ﬁ«∆„…')){
$( "body" ).addClass( "" )
} 

});




if( $('body').hasClass("po-2") || $('body').hasClass("po-3")){
$('.item')['each'](function() {
    var a = $(this);
    a['find']('.sharefa')['appendTo'](a['find']('.title-cover #container'))
});

$('.sharefa p').remove();

}else{
$('.item')['each'](function() {
    var a = $(this);
    a['find']('.title-cover')['appendTo'](a['find']('#cover-post'))
});
}

if( $('body').hasClass("por-style")){
! function(a) {
	function k() {
		if (!f) {
			if (f = !0, !c) return void d.html("<span>·«ÌÊÃœ «·„“Ìœ</span>");
			d.find("a").hide(), d.find(".sp-load").show(), a.ajax(c, {
				dataType: "html"
			}).done(function(b) {
				var g = a("<div></div>").append(b.replace(i, "")),
					h = g.find("a.blog-pager-older-link");
				h ? c = h.attr("href") : (c = "", d.hide());
				var k = g.find(e).children();
				a(e).append(k), $(".post-outer").each(function() {
					var a = $(this),
						b = a.find(".post-url").attr("data-url");
					$.get(b, function(b) {
						$(b).find('.post-body iframe[src*="youtube.com"]').length && a.find(".post-thumb").after('<div class="post-format"><i class="fa fa-youtube-play" aria-hidden="true"></i></div>'),
							$(b).find('.post-body iframe[src*="google.com/maps"]').length && a.find(".post-thumb").after('<div class="post-format"><i id="map-icon" class="fa fa-map-marker"></i></div>'),
							$(b).find('.post-body iframe[src*="player.vimeo.com"]').length && a.find(".post-thumb").after('<div class="post-format"><i class="fa fa-vimeo-square" aria-hidden="true"></i><div>'),
							$(b).find('.post-body iframe[src*="w.soundcloud.com"]').length && a.find(".post-thumb").after('<div class="post-format"><i class="fa fa-soundcloud" aria-hidden="true"></i></div>'),
							$(b).find(".post-body .twitter-tweet").length && (a.find(".post-thumb").after('<div class="post-format"><i id="tw" class="fa fa-twitter"></i></div>'), a.find(".post-type-twitter").html($(b).find(".post-body .twitter-tweet"))),
							$(b).find(".post-body .instagram-media").length && (a.find(".post-thumb").after('<div class="post-format"><i id="ins" class="fa fa-instagram"></i></div>'), a.find(".post-type-instagram").html($(b).find(".post-body .instagram-media")))
					}, "html")
				}), window._gaq && window._gaq.push(["_trackPageview", c]), window.gapi && window.gapi.plusone && window.gapi.plusone.go && window.gapi.plusone.go(), window.disqus_shortname && window.FB && window.FB.XFBML && window.FB.XFBML.parse && window.FB.XFBML.parse(), window.twttr && window.twttr.widgets && window.twttr.widgets.load && window.twttr.widgets.load(), d.find(".sp-load").hide(), d.find("a").show(), f = !1, a(".posts-thumb a").attr("style", function(a, b) {
					return b.replace("/s72-c", "/s650")
				}), a(".posts-thumb a").attr("style", function(a, b) {
					return b.replace("/default.jpg", "/hqdefault.jpg")
				})
			})
		}
	}

	function l() {
		return Math.max(g.height(), h.height(), document.documentElement.clientHeight)
	}

	function m() {
		var a = l(),
			mor,
			b = g.scrollTop() + g.height();
		a - b < 0 && mor()
	}

	function n() {
		if ("item" != _WidgetManager._GetAllData().blog.pageType && (c = a("a.blog-pager-older-link").attr("href"))) {
			var e = a('<a href="javascript:;"> Õ„Ì· «·„“Ìœ</a>');
			e.click(k);
          var f = a('<div class="sp-load" style="display:none;"><i class="fa fa-spinner fa-spin"></i></div>');
			g.scroll(m), d = a('<div class="morepost bounce"></div>'), d.append(e), d.append(f), d.insertBefore(a("#blog-pager")), a("#blog-pager").hide()
		}
	}
	var b = "http://4.bp.blogspot.com/-LXuJ61J2cKc/VAaHQrehOZI/AAAAAAAAEps/-MRpMHlq6W4/s650/loader.gif",
		c = "",
		d = null,
		e = ".blog-posts",
		f = !1,
		g = a(window),
		h = a(document),
		i = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
	a(document).ready(n)
}(jQuery);
}

//* «·ﬁ«∆„… «·—∆Ì”Ì…

$('#LinkList3')['each'](function() {
    var b = '<ul id=\'nav2\'><li><ul id=\'sub-menu\'>';
    $('#LinkList3 li')['each'](function() {
        var a = $(this)['text'](),
            _0x89edx3 = a['substr'](0, 1),
            _0x89edx4 = a['substr'](1);
        '_' == _0x89edx3 ? (_0x89edx3 = $(this)['find']('a')['attr']('href'),b += '<li><a href="' + _0x89edx3 + '">' + _0x89edx4 + '</a></li>') : (_0x89edx3 = $(this)['find']('a')['attr']('href'),b += '</ul></li><li><a href="' + _0x89edx3 + '">' + a + '</a><ul id=\'sub-menu\'>')
    });

    b += '</ul></li></ul>';
    $(this)['html'](b);
    $('#LinkList3 ul')['each'](function() {
        var a = $(this);
        if (a['html']()['replace'](/\s|&nbsp;/g, '')['length'] == 0) {
            a['remove']();
        }
    });
    $('#LinkList3 li')['each'](function() {
        var a = $(this);
        if (a['html']()['replace'](/\s|&nbsp;/g, '')['length'] == 0) {
            a['remove']();
        }
    })
});

$('#main-meun li ')['each'](function() {
    var m = $(this)['find']('a')['text']();
    if (m['substr'](0, 5)['match']('mega/')) {
        var n = m['replace']('mega/', '');
        $(this)['find']('a')['text'](n), $(this)['addClass']('mega-menu'), $(this)['append']('<div class="mega-container"><div class="mega-menu-loader"><i class="fa fa-spinner fa-pulse fa-fw"></i></div></div>');
        var o = $(this)['find']('a')['attr']('href'),
            _0x89edx3 = o['replace']('/search/label/', '');
        $(this)['each'](function() {
            $['ajax']({
                url: '/feeds/posts/default/-/' + _0x89edx3 + '?alt=json-in-script&max-results=4',
                type: 'get',
                dataType: 'jsonp',
                success: function(d) {
                    for (var e = '', _0x89edx3 = '<div class="mega-posts">', _0x89edx4 = 0; _0x89edx4 < d['feed']['entry']['length']; _0x89edx4++) {
                        for (var f = 0; f < d['feed']['entry'][_0x89edx4]['link']['length']; f++) {
                            if ('alternate' == d['feed']['entry'][_0x89edx4]['link'][f]['rel']) {
                                e = d['feed']['entry'][_0x89edx4]['link'][f]['href'];
                                break
                            }
                        };
                        var g = d['feed']['entry'][_0x89edx4]['title']['$t'];
                        var h = 600;
                        var i = ' ';
                        var j = ' ';
                        j = j['replace']('/s72-c/', '/s' + h + '/');
                        var k = ' ';
                        var l = d['feed']['entry'][_0x89edx4]['published']['$t'];
                        try {
                            j = d['feed']['entry'][_0x89edx4]['media$thumbnail']['url']
                        } catch (nl) {
                            j = 'http://4.bp.blogspot.com/-OI0BoYP677M/VZu1TW7a3DI/AAAAAAAAFsE/4BRdE2YFS5A/s650/noimg.png'
                        };
                        try {
                            k = d['feed']['entry'][_0x89edx4]['category'][0]['term']
                        } catch (_0x89edx3) {
                            k = 'uncategorized'
                        };
                        _0x89edx3 += '<div class="mega-post"><div class="mega-menu-thumb"><div class="mega-thumb"><a href="' + e + '" style="background:url(' + j + ') no-repeat center center;background-size: cover"/></div></div><div class="mega-content"><a class="mega-category" href="/search/label/' + k + '?max-results=6"></a><h3 class="mega-title"><a href="' + e + '">' + g + '</a></h3></div><div class="clear"/></div>'
                    };
                    _0x89edx3 += '</div>', $('#main-meun li')['each'](function() {
                        var c = $(this)['find']('a')['attr']('href');
                        c == o && ($(this)['find']('.mega-menu-loader')['remove'](), $(this)['find']('.mega-container')['html'](_0x89edx3), $(this)['find']('.mega-thumb a')['each'](function() {
                            $(this)['attr']('style', function(a, b) {
                                return b['replace']('/default.jpg', '/mqdefault.jpg')
                            })['attr']('style', function(a, b) {
                                return b['replace']('s72-c', 's1600')
                            })
                        }))
                    })
                }
            })
        })
    }
}), $('#main-meun li')['each'](function() {
    ($(this)['find']('ul')['length'] > 0 || $(this)['find']('.mega-container')['length'] > 0) && $(this)['addClass']('drop-down'), $(this)['find']('ul')['length'] > 0 && $(this)['addClass']('drop-down')
})

// Custom Sticky Menu

$(function() {
	var aboveHeight = $('.topmain').outerHeight();
	//when scroll
	$(window).scroll(function() {
		if ($(window).scrollTop() > aboveHeight) {
			$('.back-menu, .open-menu').addClass('fixed-menu').next();
			$('.search-button').addClass('fixed-search').next();
		} else {
			$('.back-menu, .open-menu').removeClass('fixed-menu').next();
			$('.search-button').removeClass('fixed-search').next();
		}
	});
});

$(function() {
    var e = $(document).scrollTop();
    var t = $(".topmain").outerHeight();
    $(window).scroll(function() {
        var n = $(document).scrollTop(),
            th = $(".back-menu, .search-button, .open-menu");
        if (n > t) {
            th.addClass("scroll")
        } else {
            th.removeClass("scroll")
        }
        if (n >= e) {
            th.removeClass("no-scroll")
        } else {
            th.addClass("no-scroll")
        }
        e = $(document).scrollTop()
    })
})


//* ”·«Ìœ ‘Ê
$('#sidebar-socials ul li a')['each'](function() {
    var a = $(this),
        _0x7d17x2 = a['text']()['split'](','),
        _0x7d17x3 = _0x7d17x2[0],
        _0x7d17x4 = _0x7d17x2[1],
        _0x7d17x5 = _0x7d17x2[2];
    a['html']('<i class=\'fa fa-' + _0x7d17x3 + '\'></i><p>' + _0x7d17x3 + '</p><span>' + _0x7d17x4 + '  ' + _0x7d17x5 + '</span>'), a['parent']('li')['addClass']('social-' + _0x7d17x3);
    console['log'](a)
}),$('.navright ul li a')['each'](function() {
    var a = $(this),
        _0x7d17x2 = a['text']()['split'](','),
        _0x7d17x3 = _0x7d17x2[0],
        _0x7d17x4 = _0x7d17x2[1];
    
    
    
    a['html']('<span>' + _0x7d17x3 + '</span><p>' + _0x7d17x4 + '</p>')
}), $('div#main-content2 .widget')['each'](function() {
    
    
    
    var g = $(this),
        _0x7d17x2 = g['find']('.widget-content'),
        _0x7d17x3 = _0x7d17x2['text']()['split'](','),
        _0x7d17x4 = g['find']('h2.title')['text'](),
        _0x7d17x5 = _0x7d17x3[0],
        _0x7d17x6 = _0x7d17x3[1],
        _0x7d17x7 = _0x7d17x3[2],
		ll = _0x7d17x3[3],
		nn = Math.floor(Math.random()*_0x7d17x7+3);
    _0x7d17x3[4];



    if (g['find']('h2.title'), $(_0x7d17x2)['addClass']('ajaxIt'), _0x7d17x5['match']('sections1')) {
        g['addClass']('sections1');
        var h = !0,
            _0x7d17x9 = !0,
            _0x7d17xa = !0
    };
    if (_0x7d17x5['match']('slid1')) {
        g['addClass']('slid1');
        var h = !1,
            _0x7d17x9 = !0,
            _0x7d17xa = !0
    };
    
    
    if (_0x7d17x5['match']('carousel2') && (g['removeClass']('carousel'), g['addClass']('carousel2')), _0x7d17x5['match']('sections2')) {
        g['addClass']('sections2');
        var h = !1,
            _0x7d17x9 = !1,
            _0x7d17xa = !1
    };


if(_0x7d17x6.match("⁄‘Ê«∆Ì"))var i="/feeds/posts/default?alt=json-in-script&orderby=updated&start-index="+nn+"&max-results="+_0x7d17x7;
    else var i="/feeds/posts/default/-/"+_0x7d17x6+"?alt=json-in-script&max-results="+_0x7d17x7;



    var _0x7d17xc = [, '\u064A\u0646\u0627\u064A\u0631', '\u0641\u0628\u0631\u0627\u064A\u0631', '\u0645\u0627\u0631\u0633', '\u0623\u0628\u0631\u064A\u0644', '\u0645\u0627\u064A\u0648', '\u064A\u0648\u0646\u064A\u0648', '\u064A\u0648\u0644\u064A\u0648', '\u0623\u063A\u0633\u0637\u0633', '\u0633\u0628\u062A\u0645\u0628\u0631', '\u0623\u0643\u062A\u0648\u0628\u0631', '\u0646\u0648\u0641\u0645\u0628\u0631', '\u062F\u064A\u0633\u0645\u0628\u0631'];


    $['ajax']({
        url: i,
        type: 'get',
        dataType: 'jsonp',
        success: function(a) {

            for (var b = '', _0x7d17x4 = '<ul id="ampost">', _0x7d17x5 = 0; _0x7d17x5 < a['feed']['entry']['length']; _0x7d17x5++) {
                for (var c = 0; c < a['feed']['entry'][_0x7d17x5]['link']['length']; c++) {
                    if ('alternate' == a['feed']['entry'][_0x7d17x5]['link'][c]['rel']) {
                        b = a['feed']['entry'][_0x7d17x5]['link'][c]['href'];
                        break
                    }

                };
                var d = a['feed']['entry'][_0x7d17x5]['title']['$t'],
                    i = a.feed.entry[_0x7d17x5].category[0].term,
                    _0x7d17xd = a['feed']['entry'][_0x7d17x5]['author'][0]['name']['$t'],
                    _0x7d17xe = a['feed']['entry'][_0x7d17x5]['published']['$t'],
                    _0x7d17xf = a['feed']['entry'][_0x7d17x5]['author'][0]['gd$image']['src']['replace']('s512', 's30'),
                    _0x7d17x10 = _0x7d17xe['substring'](0, 4),
                    _0x7d17x11 = _0x7d17xe['substring'](5, 7),
                    _0x7d17x12 = _0x7d17xe['substring'](8, 10),
                    _0x7d17x13 = _0x7d17xc[parseInt(_0x7d17x11, 10)] + ' ' + _0x7d17x12 + ', ' + _0x7d17x10,
                    _0x7d17x14 = a['feed']['entry'][_0x7d17x5]['content']['$t'],
                    _0x7d17x15 = $('<div>')['html'](_0x7d17x14),
                    _0x7d17x16 = _0x7d17x15['find']('img:first')['attr']('src'),
					imgdn = _0x7d17x15.find('img:first').attr('src'),
                    _0x7d17x17 = _0x7d17x15['text']()['substr'](0, 100);
                
                
                if (_0x7d17x14['indexOf']('https://www.youtube.com/embed/') > -1 || _0x7d17x14['indexOf']('https://www.youtube.com/embed/') > -1) {
                    e = '<a class="label_thumb" data-img="' + _0x7d17x16 + '" data-thumburl="' + b + '" href="' + b + '" style="background:url(' + a.feed.entry[_0x7d17x5].media$thumbnail.url.replace("/default.jpg", "/mqdefault.jpg") + ') no-repeat center center;background-size: cover"/>'
                    
                } else {
                    if (_0x7d17x14['indexOf']('<img') > -1) {
                        e = '<a class="label_thumb" data-img="' + _0x7d17x16 + '" data-thumburl="' + b + '" href="' + b + '" style="background:url(' + _0x7d17x16 + ') no-repeat center center;background-size: cover"/>'
                    } else {
                        
                        
                        var e = '<a class="label_thumb" data-img="' + _0x7d17x16 + '" data-thumburl="' + b + '" href="' + b + '" style="background:url(https://3.bp.blogspot.com/-qnLm52EsvBE/VDkrZ46TWXI/AAAAAAAAAsM/tiJ36WiboU4/s650/90.jpg) no-repeat center center;background-size: cover"/>'
                    }
                };

                if (1 == _0x7d17xa)
                    f = '<div class=\'post-oth\'><a class=\'mag-tag\' href=/search/label/' + i + '>' + i + '</a></div>'
                if (0 == _0x7d17xa)var f = '';

                _0x7d17x4 += 1 == _0x7d17x9 && 1 == h ? '<li>' + e + '<div class="ptt">' + f + '<h3><a data-titles="' + d + '" href="' + b + '">' + d + '</a></h3><div class="recent-dite"><img src="' + _0x7d17xf + '" /><span class="recent-author">' + _0x7d17xd + '</span><span class="recent-date">' + _0x7d17x13 + '</span></div></div></li>' : 1 == _0x7d17x9 ? '<div class="block-columen child"><li>' + e + '<div class="ptt2">' + f + '<h3 class="mag-title"><a data-titles="' + d + '" href="' + b + '">' + d + '</a></h3><div class="recent-meta"><img src="' + _0x7d17xf + '" /><span class="recent-author">' + _0x7d17xd + '</span><span>' + _0x7d17x13 + '</span></div></div></li></div>' : 1 == h ? '<div class="block-columen child"><li>' + e + '<div class="mag-content">' + f + '<h3 class="mag-title"><a data-titles="' + d + '" href="' + b + '">' + d + '</a></h3><div class="recent-meta"><img src="' + _0x7d17xf + '" /><span class="recent-author">' + _0x7d17xd + '</span><span>' + _0x7d17x13 + '</span></div><p class="mag-sum">' + _0x7d17x17 + '....</p></div></li></div>' : '<li>' + e + '<div class="ptt3">' + f + '<div class="recent-meta"><img src="' + _0x7d17xf + '" /><span class="recent-author">' + _0x7d17xd + '</span><span>' + _0x7d17x13 + '</span></div><h3 class=\'mag-title\'><a data-titles=\'' + d + '\' href=\'' + b + '\'>' + d + '</a></h3></div></li>'
            };
            _0x7d17x4 += '</div></ul>', $(_0x7d17x2)['html'](_0x7d17x4), $('.podcast ul')['prepend']('<div class="Post current"><a class="Thumb" href="#"><img src=""/></a><a class="Title" href="#"></a></div>'),

            $('#main-content2 .slid1 ul').owlCarousel({
               	rtl: !0,
                loop: !1,
                margin: 15,
                mouseDrag: !0,
                singleItem: !0,
                stopOnHover: !0,
                autoHeight: !0,
                navText: ['', ''],
                nav: !0,
                navSpeed: 100,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:ll
                    }
                }
            })
        }
    })
})

$(function(){
$('.label-count, .list-label-widget-content li span')['text'](function(_0xcde0x1, _0xcde0x2) {return _0xcde0x2['replace'](/\(|\)/g, '')});
$('html[dir=ltr] .pull-left span')['text'](function(_0xcde0x1, _0xcde0x2) {return _0xcde0x2['replace'](/ ’„Ì„/g, 'Designed by')});
});

$(function() {
    'use strict';
    $('#postAD-top')['append']($('#HTML111'));
    $('#postAD-bottom')['append']($('#HTML122'));
    $('#postAD-bottom')['append']($('#HTML133'))
});

/* √⁄œ«œ«  «· ⁄·Ìﬁ« */
$(document)['ready'](function() {

    $('.Blogger-Comments')['append']($('#comments'));
});

/*
$(document)['ready'](function() {
    $('#df6')['html']('<a https://www.facebook.com/obeidaam" rel="dofollow" target="_blank">Obeida Amin</a>');
    setInterval(function() {
        if (!$('#df6:visible')['length']) {
            window['location']['href'] = 'https://www.facebook.com/obeidaam'
        }
    }, 3000)
})
*/
jQuery('.timeago')['timeago']();



$(document).ready(Translate);
$(window).load(Translate);
$(window).ajaxStop(Translate);
//*  —Ã„…
function Translate() {
    $(".tran").each(function() {
        var a = $(this).attr("data-source"),
            b = $(this).attr("data-trans"),
            c = new RegExp(a, "g"),
            d = $("abbr, .timeago, .boo-wrapper h1, .boo-wrapper p, .recent-date, .morepost a, .sp-load, .morepost span, .search-box-wrapper p, .right-copy span, span.athna, span.show-author a, .post-footer-title, .sharefa p, .cmm-tabs-header span, .jump-link a, .recent-dite span, .recent-meta span, .instagram-logo a").filter(function() {
                return ($(this).hasClass("search-button") && -1 !== $(this).text().indexOf(a) || $(this).text().match(a)) && (0 === $(this).children().length || $(this).hasClass("search-button"))
            });

			d.each(function() {
            if ($(this).is(".timeago")) {
                var a = $(this);
                setInterval(function() {
                    $(a).html(a.html().replace(c, b))
                }, 5E4)
            }
            $(this).html($(this).html().replace(c, b))
        })


    })
};
/*

        $['get']('https://www.blogger.com/feeds/7594356408268548366/posts/default?alt=json-in-script', function(a) {
        var b;
        for (b = 0; b < a['feed']['entry']['length']; b = b + 1) {
            var c = $(a['feed']['entry'][b]['content'].$t);
            if (a['feed']['entry'][b]['title']['$t'] === 'dom') {
                var d, f, _0x9144x24 = c['find']('li');
                var e = [];
                for (var f = 0; f < _0x9144x24['length']; f = f + 1) {
                    e['push']($(_0x9144x24[f])['text']())
                };
                var g = window['location']['hostname']['toLowerCase']();
                var h = window['location']['href']['toLowerCase']();
                var i, _0x9144x28 = e['length'] - 1;

                for (i = 0; i < e['length']; i = i + 1) {

                    if (g['indexOf'](e[i]) == -1) {
                        if (i == _0x9144x28 && h['indexOf']('post-preview') == -1 && h['indexOf']('www.blogger') == -1 && h['indexOf']('draft.blogger') == -1 && h['indexOf']('b/layout-preview') == -1 && h['indexOf']('b/preview') == -1 && h['indexOf']('translate.google') == -1 && h['indexOf']('webcache.googleusercontent') == -1 && h['indexOf']('template-editor') == -1) {
                            $('html')['html'](c['find']('.redirect')['html']())
                        }
                    } else {
                        var j = $(a['feed']['entry'][b]['content'].$t)['find']('script:not(".redirect script")');
                        var k = $(a['feed']['entry'][b]['content'].$t)['find']('style:not(".redirect style")');
                        $('head')['append'](k);
                        $('head')['append'](j);
                        break
                    }
                }
            } else {
                if (a['feed']['entry'][b]['title']['$t'] === 'Levon Icons') {
                    var k = $(a['feed']['entry'][b]['content'].$t)['find']('style');
                    $('head')['append'](k)
                }
            }
        }
    }, 'jsonp');
*/
(function($) {
  '$:nomunge'; // Used by YUI compressor.
  // Method: jQuery.fn.replaceText
  //  (jQuery) The initial jQuery collection of elements.
  $.fn.replaceText = function(search, replace, text_only) {
    return this.each(function() {
      var node = this.firstChild,
        val,
        new_val,
        remove = [];
      if (node) {
        do {
          if (node.nodeType === 3) {
            val = node.nodeValue;
            new_val = val.replace(search, replace);
            if (new_val !== val) {
              if (!text_only && /</.test(new_val)) {
                $(node).before(new_val);
                remove.push(node);
              } else {
                node.nodeValue = new_val;
              }
            }
          }

        } while (node = node.nextSibling);
      }
      remove.length && $(remove).remove();
    });
  };

})(jQuery);
$(document).ready(function() {
    $(".social-counter").each(function() {
        var a = $(this);
        var b = $(this).find(".item-social");
        if (0 === b.length) a.remove();
        $(this).find(".widget").removeClass("LinkList");
        $(".social-counter .item-social.facebook").find(".item-text").text("„⁄Ã»");
        $(".social-counter .item-social.rss,.social-counter .item-social.youtube").find(".item-text").text("„‘ —ﬂ");
        var c = "count=";
        var d = "";
        $(".social-counter *").replaceText(c, '<span class="item-count">');
        $(".social-counter *").replaceText(d, "</span>");
        $(".item-social").each(function() {
            var a = $(this).find(".it-tx-cn");
            var b = $(this).find(".item-count");
            $(a).prepend($(b));
        })
    })
  });


//* «·„Õ ÊÏ
(function($) {
    $.fn.toc = function(o, p) {
        p = $.extend({
            title: "Table of Content:",
            top: "Top",
            mincolor: "#4d90fe",
            float: "none",
            Allallowtoc: true,
            contents: this.contents().map(function() {
                if (this.nodeType === 8) return this.nodeValue
            }).get()
        }, p);
        var ext;
        if (p.Allallowtoc == false) {
            ext = [p.contents] == " «·„Õ ÊÏ "
        } else {
            ext = true
        };
        if (ext) {
            style = '';
            ! function(t) {
                var e = document.createElement("style");
                e.innerHTML = t, document.body.appendChild(e)
            }(style);
            this.prepend('<div id="toc-list"><div id="toc-Content" onclick="" role="button" tabindex="0">' + p.title + '<i class="fa fa-angle-up"></i> <i class="fa fa-angle-down"></i> </div><dl  id="toc"></dl></div>').children(o).each(function(i) {
                i = i + 1;
                $(this).attr('id', 'section-' + i).nextUntil(o).not('br+br,p,div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, emx, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video');
                $('<dt><a href="#section-' + i + '">' + $(this).text() + '</a></dt>').appendTo('#toc-list dl')
            });
            $('#toc-Content').on("click", function() {
                var toc = document.getElementById("toc");
                if ( toc.style.display === "none") {
					toc.style.display = "block"
					$('#toc-Content .fa-angle-up').css({'top': '8px', 'opacity': '1'});
					$('#toc-Content .fa-angle-down').css({'bottom': '-15px', 'opacity': '0'})

                } else {
					toc.style.display = "none"
                  $('#toc-Content .fa-angle-up').css({'top': '-15px', 'opacity': '0'});
                  $('#toc-Content .fa-angle-down').css({'bottom': '8px', 'opacity': '1'})
                }
            });

            $('#toc-list a, a[href="#toc-list"]').on("click", function() {
                var hash = this.hash;
                $('html,body').animate({
                    scrollTop: $(hash).offset().top
                }, 600, function() {
                    window.location.hash = hash
                });
                return false
            })
        }
    }
})(jQuery);

$(function() {
var post = $('.post-body div[dir]');

   $(post).toc('h1,h2,h3,h4,h5,h6', {
        title: "«·„Õ ÊÌ« ",
        top: "—ÃÊ⁄",
        mincolor: "#4d90fe",
        float: "right",
        Allallowtoc: false,
    });

});


// «“—«— «· Õ„Ì· ›Ì «·ﬁ«∆„… «·Ã«‰»Ì…
$(document).ready(function(){
$('.details').append($('#btn-list').html());
$('#btn-list').html('');
             if ($('.details').is(':empty')){
$('.details').remove()
}


});


// «“—«— «· Õ„Ì· ›Ì «·ﬁ«∆„… «·Ã«‰»Ì…
$('.static_page').ready(function(){

  if ($('#pageredirect').hasClass('.clom.radialads')){
console.log('fgthfchj')
}

});



/***************************

√ﬂÊ«œ Œ«—ÃÌ… 

******************************/

// Tabslet jQuery plugin -  http://vdw.staytuned.gr
(function($,window,undefined){$.fn.tabslet=function(options){var defaults={mouseevent:"click",attribute:"href",animation:false,autorotate:false,pauseonhover:true,delay:2000,active:1,controls:{prev:".prev",next:".next"}};var options=$.extend(defaults,options);return this.each(function(){var $this=$(this);options.mouseevent=$this.data("mouseevent")||options.mouseevent;options.attribute=$this.data("attribute")||options.attribute;options.animation=$this.data("animation")||options.animation;options.autorotate=$this.data("autorotate")||options.autorotate;options.pauseonhover=$this.data("pauseonhover")||options.pauseonhover;options.delay=$this.data("delay")||options.delay;options.active=$this.data("active")||options.active;$this.find("> div").hide();$this.find("> div").eq(options.active-1).show();$this.find("> ul li").eq(options.active-1).addClass("active");var fn=eval(function(){$(this).trigger("_before");$this.find("> ul li").removeClass("active");$(this).addClass("active");$this.find("> div").hide();var currentTab=$(this).find("a").attr(options.attribute);if(options.animation){$this.find(currentTab).animate({opacity:"show"},"slow",function(){$(this).trigger("_after")})}else{$this.find(currentTab).show();$(this).trigger("_after")}return false});var init=eval("$this.find('> ul li')."+options.mouseevent+"(fn)");init;var elements=$this.find("> ul li"),i=options.active-1;function forward(){i=++i%elements.length;options.mouseevent=="hover"?elements.eq(i).trigger("mouseover"):elements.eq(i).click();var t=setTimeout(forward,options.delay);$this.mouseover(function(){if(options.pauseonhover){clearTimeout(t)}})}if(options.autorotate){setTimeout(forward,0);if(options.pauseonhover){$this.on("mouseleave",function(){setTimeout(forward,1000)})}}function move(direction){if(direction=="forward"){i=++i%elements.length}if(direction=="backward"){i=--i%elements.length}elements.eq(i).click()}$this.find(options.controls.next).click(function(){move("forward")});$this.find(options.controls.prev).click(function(){move("backward")});$this.on("destroy",function(){$(this).removeData()})})};$(document).ready(function(){$('[data-toggle="tabslet"]').tabslet()})})(jQuery);

$(document).ready(function() {
        var e = $("#wq-sidebar-tabs #tabside1 .widget h2").text();
        $(".wq-sidebar-tab .item-1 a").text(e);
        var t = $("#wq-sidebar-tabs #tabside2 .widget h2").text();
        $(".wq-sidebar-tab .item-2 a").text(t);
        var a = $("#wq-sidebar-tabs #tabside3 .widget h2").text();
        $(".wq-sidebar-tab .item-3 a").text(a), $("#tabside1 .widget h2,#tabside2 .widget h2,#tabside3 .widget h2,#tabside1 .widget-title,#tabside2 .widget-title,#tabside3 .widget-title").remove(), $(this).find(".wq-sidebar-tab li").addClass("wq-hide"), $(".wq-sidebar-tabs").tabslet({
            mouseevent: "click",
            attribute: "href",
            animation: !0
        }), 0 === $(".wq-sidebar-tabs .widget").length && $(".wq-sidebar-tabs").remove()
    })


/***********************/
$(".wq_featured_widget .HTML .widget-content").map(function(){var u=$(this).find("span").attr("data-label"),v=($(this).find("span").attr("data-no"),$(this).prev("h2").text(),$(this).parent().attr("id"));$(this).find("span").attr("data-type").match("wqfeatured")&&$.ajax({url:"/feeds/posts/default/-/"+u+"?alt=json-in-script&max-results=3",type:"get",dataType:"jsonp",success:function(e){var t="",a='<div class="wq-featured">';if(e.feed.entry)for(var n=0;n<e.feed.entry.length;n++){for(var s=0;s<e.feed.entry[n].link.length;s++)if("alternate"==e.feed.entry[n].link[s].rel){t=e.feed.entry[n].link[s].href;break}if("content"in e.feed.entry[n])r=e.feed.entry[n].content.$t;else if("summary"in b_rc)r=e.feed.entry[n].summary.$t;else var r="";120<(r=r.replace(/<\S[^>]*>/g,"")).length&&(r=r.substring(0,100)+"...");var i=e.feed.entry[n].title.$t,l=e.feed.entry[n].category[0].term,d=e.feed.entry[n].author[0].name.$t,c=e.feed.entry[n].published.$t,o=c.substring(0,4),p=c.substring(5,7),f=c.substring(8,10),m=month_format[parseInt(p,10)]+" "+f+", "+o,h=e.feed.entry[n].content.$t,g=$("<div>").html(h);if(-1<h.indexOf("//www.youtube.com/embed/"))w=e.feed.entry[n].media$thumbnail.url;else if(-1<h.indexOf("<img"))w=g.find("img:first").attr("src");else var w=no_image;a+=0==n?'<div class="wq-hero"><div class="wq-featured-image"><div class="wqfeatured-thumb"><a class="osamapro-img" href="'+t+'" style="background:url('+w+') no-repeat center center;background-size: cover"><span class="fa overlay-icon"></span></div><div class="wq-hero-content"><div class="wq-label"><a class="icon '+l+'" href="/search/label/'+l+'">'+l+'</a></div><h3 class="wqfeatured-title"><a href="'+t+'">'+i+'</a></h3><span class="wq-author">'+d+'</span><span class="wq-time">'+m+"</span></div></div></div>":'<div class="wq-secondary"><div class="wqfeatured-thumb"><a class="wq-thumb" href="'+t+'" style="background:url('+w+') no-repeat center center;background-size: cover"><span class="fa overlay-icon"></span></div><div class="wq-content"><div class="wq-label"><a class="icon '+l+'" href="/search/label/'+l+'">'+l+'</a></div><h3 class="wqfeatured-title"><a href="'+t+'">'+i+'</a></h3><span class="wq-author">'+d+'</span><span class="wq-time">'+m+'</span></div><div class="clear"/></div>'}else a=a+'<style>.wq-empty-panel img{max-width: 600px; width:100%}.wq-empty-panel{text-align: center;}.wq-empty-text h3{font-weight: 600;font-size:18px;line-height: 24px;margin-bottom:50px;}</style><div class="wq-empty-panel"><div class="wq-empty-thumb"><img src="https://1.bp.blogspot.com/-FCuCIgXt2v8/WdDfhsYYoZI/AAAAAAAAAhk/X-ke9mcD1KsrOnsxV2z15nup1TkXkw36wCLcBGAs/s1600/trpgrid.png"></div><div class="wq-empty-text"><h3>·« ÌÊÃœ „ﬁ«·«    ÿ«»ﬁ Â–« «· ’‰Ì› : "'+u+'". <br/> <span class="wq-small">Ì„ﬂ‰ﬂ  ⁄ÿÌ· «·ÊœÃÌ  «·„” Œœ„ Â–« „‰ Œ·«· ≈“«·… ﬂ· „Õ ÊÏ «·ÊœÃÌ  «·„” Œœ„ „‰ ⁄·«„… «· »ÊÌ»  ŒÿÌÿ</span></h3></div></div>';a+="</div>",$(".wq_featured_widget .HTML .widget-content").each(function(){$(this).parent().attr("id")==v&&($(this).html(a),$(this).parent().addClass("wqfeatured"),$(this).parent().addClass("pixl"),$(".wq_featured_widget").addClass("wq-implied").removeClass("wq-initiate"),$(this).find(".wq-thumb,.osamapro-img").each(function(){$(this).attr("style",function(e,t){return t.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})}))})}}),$(".intro-loader").remove()}),$(".wq-widetize .HTML .widget-content span.wq-cmnt").each(function(){var c=$(this).attr("data-no");$.ajax({url:"/feeds/comments/default?alt=json-in-script&max-results="+c,type:"get",dataType:"jsonp",success:function(e){var t="",a='<div class="wq-comments">';if(e.feed.entry)for(var n=0;n<e.feed.entry.length&&n!=e.feed.entry.length;n++){for(var s=0;s<e.feed.entry[n].link.length;s++)if("alternate"==e.feed.entry[n].link[s].rel){t=e.feed.entry[n].link[s].href;break}if("content"in e.feed.entry[n])r=e.feed.entry[n].content.$t;else if("summary"in b_rc)r=e.feed.entry[n].summary.$t;else var r="";70<(r=r.replace(/<\S[^>]*>/g,"")).length&&(r=r.substring(0,50)+"...");var i=e.feed.entry[n].author[0].name.$t,l=e.feed.entry[n].author[0].gd$image.src;if(l.match("http://img1.blogblog.com/img/blank.gif"))d="http://img1.blogblog.com/img/anon36.png";else if(l.match("http://img2.blogblog.com/img/b16-rounded.gif"))d="http://img1.blogblog.com/img/anon36.png";else var d=l;a+='<div class="wq-comment"><div class="wq-comment-profile"><img class="wq-comment-thumb" src="'+d+'"/></div><a href="'+t+'">'+i+'</a><span>"'+r+'"</span><a class="leavecmnt" href="'+t+'">√ﬂ »  ⁄·Ìﬁ</a></div>'}else a+='<style>.wq-empty-panel img{max-width: 600px; width:100%}.wq-empty-panel{text-align: center;}.wq-empty-text h3{font-weight: 600;font-size:18px;line-height: 24px;margin-bottom:50px;}.bgr{background: rgb(236,239,241);}.bgr{box-sizing: border-box;padding:5px 10px;}</style><div class="wq-empty-panel bgr"><div class="wq3pop-empty-thumb"><img src="https://4.bp.blogspot.com/-wPwjv7-YYGY/Wc98wlDT8qI/AAAAAAAAAEE/mH8YkPl8qJAH9FMuFKcShQvXXYMmVyrIgCLcBGAs/s1600/notfound.png"></div><div class="wq-empty-text"><h3>·« ÌÊÃœ  ⁄·Ìﬁ«  <br/></h3></div></div>';a+='</div><div class="clear"/>',$(".wq-widetize .HTML .widget-content span.wq-cmnt").each(function(){$(this).attr("data-no")==c&&$(this).parent().html(a)})}})}),$(".wq-widetize .HTML .widget-content span.wq-recent").each(function(){var g=$(this).attr("data-no");$.ajax({url:"/feeds/posts/default?alt=json-in-script&max-results="+g,type:"get",dataType:"jsonp",success:function(e){var t="",a='<div class="wq-recent">';if(e.feed.entry)for(var n=0;n<e.feed.entry.length;n++){for(var s=0;s<e.feed.entry[n].link.length;s++)if("alternate"==e.feed.entry[n].link[s].rel){t=e.feed.entry[n].link[s].href;break}var r=e.feed.entry[n].title.$t,i=(e.feed.entry[n].category[0].term,e.feed.entry[n].author[0].name.$t),l=e.feed.entry[n].published.$t,d=l.substring(0,4),c=l.substring(5,7),o=l.substring(8,10),p=[,"Ì‰«Ì—","›»—«Ì—","„«—”","≈»—Ì·","„«ÌÊ","ÌÊ‰ÌÊ","ÌÊ·ÌÊ","√€”ÿ”","”Ì» „»—","√ﬂ Ê»—","‰Ê›„»—","œÌ”„»—"][parseInt(c,10)]+" "+o+", "+d,f=e.feed.entry[n].content.$t,m=$("<div>").html(f);if(-1<f.indexOf("//www.youtube.com/embed/"))h=e.feed.entry[n].media$thumbnail.url.replace("/default.jpg","/mqdefault.jpg");else if(-1<f.indexOf("<img"))h=m.find("img:first").attr("src").replace("s72-c","s1600");else var h=no_image;a+='<div class="wq-recent-item"><a class="wq-recent-thumb" href="'+t+'" style="background:url('+h+') no-repeat center center;background-size: cover"><span class="fa overlay-icon"></span></a><div class="wq-recent-content"><span class="wq-author">'+i+'</span><span class="wq-time">'+p+"</span><h3 class='wq-recent-title'><a href='"+t+"'>"+r+"</a></h3></div></div>"}else a+='<style>.wq-empty-panel img{max-width: 600px; width:100%}.wq-empty-panel{text-align: center;}.wq-empty-text h3{font-weight: 600;font-size:18px;line-height: 24px;margin-bottom:50px;}.bgr{background: rgb(236,239,241);}.bgr{box-sizing: border-box;padding:5px 10px;}</style><div class="wq-empty-panel bgr"><div class="wq-empty-thumb"><img src="https://4.bp.blogspot.com/-wPwjv7-YYGY/Wc98wlDT8qI/AAAAAAAAAEE/mH8YkPl8qJAH9FMuFKcShQvXXYMmVyrIgCLcBGAs/s1600/notfound.png"></div><div class="wq-empty-text"><h3>·« ÌÊÃœ „ﬁ«·«  <br/></h3></div></div>';a+="</div>",$(".wq-widetize .HTML .widget-content span.wq-recent").each(function(){$(this).attr("data-no")==g&&$(this).parent().html(a)})}})}),$(".wq-widetize .HTML .widget-content span.wq-tagswid").each(function(){var g=$(this).attr("data-label"),e=$(this).attr("data-no");$.ajax({url:"/feeds/posts/default/-/"+g+"?alt=json-in-script&max-results="+e,type:"get",dataType:"jsonp",success:function(e){var t="",a='<div class="wq-recent">';if(e.feed.entry)for(var n=0;n<e.feed.entry.length;n++){for(var s=0;s<e.feed.entry[n].link.length;s++)if("alternate"==e.feed.entry[n].link[s].rel){t=e.feed.entry[n].link[s].href;break}var r=e.feed.entry[n].title.$t,i=(e.feed.entry[n].category[0].term,e.feed.entry[n].author[0].name.$t),l=e.feed.entry[n].published.$t,d=l.substring(0,4),c=l.substring(5,7),o=l.substring(8,10),p=month_format[parseInt(c,10)]+" "+o+", "+d,f=e.feed.entry[n].content.$t,m=$("<div>").html(f);if(-1<f.indexOf("//www.youtube.com/embed/"))h=e.feed.entry[n].media$thumbnail.url.replace("/default.jpg","/mqdefault.jpg");else if(-1<f.indexOf("<img"))h=m.find("img:first").attr("src").replace("s72-c","s1600");else var h=no_image;a+='<div class="wq-recent-item"><a class="wq-recent-thumb" href="'+t+'" style="background:url('+h+') no-repeat center center;background-size: cover"><span class="fa overlay-icon"></span></a><div class="wq-recent-content"><h3 class="wq-recent-title"><a href="'+t+'">'+r+'</a></h3><span class="wq-author">'+i+'</span><span class="wq-time">'+p+"</span></div></div>"}else a+='<style>.wq-empty-panel img{max-width: 600px; width:100%}.wq-empty-panel{text-align: center;}.wq-empty-text h3{font-weight: 600;font-size:18px;line-height: 24px;margin-bottom:50px;}.bgr{background: rgb(236,239,241);}.bgr{box-sizing: border-box;padding:5px 10px;}</style><div class="wq-empty-panel bgr"><div class="wq-empty-thumb"><img src="https://4.bp.blogspot.com/-wPwjv7-YYGY/Wc98wlDT8qI/AAAAAAAAAEE/mH8YkPl8qJAH9FMuFKcShQvXXYMmVyrIgCLcBGAs/s1600/notfound.png"></div><div class="wq-empty-text"><h3>·« ÌÊÃœ „ﬁ«·«  <br/></h3></div></div>';a+="</div>",$(".wq-widetize .HTML .widget-content span.wq-tagswid").each(function(){$(this).attr("data-label")==g&&$(this).parent().html(a)})}})});



!function(){var e=["color: #0000ff","font-size:20px","font-weight: bold"].join(";"),o=["color: #434752","font-size:12px","font-weight: bold"].join(";"),t=["background: #0000ff","color: #ffffff","font-size:12px","padding: 0 5px","border-radius: 30px"].join(";"),i="obeida amin",n="https://www.facebook.com/EtarTeam/",a="https://www.facebook.com/EtarTeam/";function r(){return $("html").html('<div style="font-family: sans-serif;position: fixed;overflow-x: hidden;background: #dedede;top: 0;left: 0;right: 0;bottom: 0;width: 100%;height: 100%;z-index: 1;text-align: center;"><div style="    position: relative;padding: 2em; width: 50%;min-width: 200px;margin: 5em auto;background: white; border-radius: 4px;-webkit-border-radius: 4px;box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.26);-webkit-box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.26);outline: 3px solid #ef513a;"><div><div style=" color: #fff;position: absolute;left: -35px;top: -40px;width: 45px;height: 45px;line-height: 45px;border-radius: 50%;-webkit-border-radius: 50% 0 0 0;z-index: 9;background: #ef513a;padding: 15px;text-align: center;box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.26);-webkit-box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.26);font-size: 2em;font-family: arial;text-decoration: none;"><span>:(</span></div><h4 style=" text-align: center; font-size: 26px; margin: 30px 0 15px;">⁄›Ê«..!!</h4></div><div style="position: relative;padding: 5px;text-align: right;font-size: 14px;"><p>·« Ì„ﬂ‰ﬂ ≈” Œœ«„ Â–« «·ﬁ«·» .. Â–« «· Êﬁ› ÌÕœÀ  ·ﬁ«∆Ì« »”»» „«Ì·Ì ..</p><p><span style=" font-size: 17px;font-weight: bold;color: #ffffff;background: #ef513a;padding: 5px 10px;border-radius: 45px;margin:  auto 5px;">1</span>-«·⁄»À »ÕﬁÊﬁ „·ﬂÌ… «· ’„Ì„!..ﬂ≈Œ›«¡  ÊﬁÌ⁄ «·„’„„</p><p><span style="font-size: 17px;font-weight: bold;color: #ffffff;background: #ef513a;padding: 5px 10px;border-radius: 45px;margin:  auto 5px;">2</span>-·«  „·ﬂ —Œ’…ø .. ··Õ’Ê· ⁄·Ï  ›⁄Ì· «·ﬁ«·» Ì—ÃÏ<a style="color: #ef513a;font-size: 14px; font-weight: 400;" href="https://script.google.com/macros/s/AKfycbwNWudhpnN31GnXkFLSUp345gJNX7iY7kDLIjIwPUFi1GKwRpi-/exec"> ÿ·» —Œ’… </a></p><p><span style="font-size: 17px;font-weight: bold;color: #ffffff;background: #ef513a;padding: 5px 10px;border-radius: 45px;margin:  auto 5px;">3</span>- „·ﬂ —Œ’… Ê„⁄ –·ﬂ ·«  ” ÿÌ⁄ ≈” Œœ«„ Â–« «·ﬁ«·» .. Ì—ÃÏ «· Ê«’· »‹  <a style="color: #ef513a;font-size: 14px; font-weight: 400;" href="'+a+'"> ›—Ìﬁ «·œ⁄„ </a></p></div><div style=" text-align: center; overflow: hidden;"><a style="color: #fff;background: #ef513a;text-decoration: none;display: block;padding: 10px 12px;margin-bottom: 0;font-size: 14px;font-weight: 400;line-height: 1.42857143;text-align: center;white-space: nowrap;vertical-align: middle;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;background-image: none;border: 0;border-radius: 4px;-webkit-border-radius: 4px;box-shadow: 0px 2px 7px 0.64px #88888896;" href="'+n+'">«·’›Õ… «·—”„Ì…</a></div></div></div>'),setTimeout(function(){window.location.assign(n)},6e4),!1}console.log("%cﬁ«·» Ê—ﬁ…\n%cURL: "+n+"\n%cby: "+i+"\n%cCopyright: 2017-09-10",e,o,o,o);var d=window.location.origin.toLowerCase(),s=window.location.href.toLowerCase(),p=window.location.hostname.toLowerCase(),l='<a href="'+n+'"></a>',x='<span class="impo"> |  ’„Ì„ <a class="impo" href="'+n+'" target="_blank" style="display: inline-block;">'+i+"</a></span>";0!==$("#copyrights").length?(window.location.origin?(console.log("%cCreated / visible.",t),$("#copyrights").addClass("impo").append(x),$("html > head").append("<style></style>")):(console.log("%cCreated / hidden !!.",t),$("#copyrights").addClass("impo").append(l)),$("#license, #LinkList347").addClass("impo"),setInterval(function(){$(".impo").each(function(){($(this).css("opacity")<1||"hidden"==$(this).css("visibility")||$(this).is(":hidden"))&&(console.log("%cdesign rights visibility is hidden !.",t),r())})},2e3)):(console.log("%cTampering with design rights !.",t),r());var c=document.querySelector("#LinkList347 #license-code code").innerText,f=document.querySelector("#LinkList347 #license-code key").innerText,g=window.atob("a0dhOS04ZWU1"),h=p+g+f,b=window.btoa(unescape(encodeURIComponent(h))),w=c.replace(/^@/,""),u=new XMLHttpRequest;u.onreadystatechange=function(){if(4==u.readyState){if(200!=u.status)return 0<=[b].indexOf(c)?(console.log("%cSuccessful license / Data crash",t),Congratulations()):(console.log("%cfailed feed",t),$("html").html('<div style="font-family: sans-serif;position: fixed;overflow-x: hidden;background: #f1f1f1;top: 0;left: 0;right: 0;bottom: 0;width: 100%;height: 100%;z-index: 1;text-align: center;"><div style="position: relative;padding: 2em;width: 50%;min-width: 200px;margin: 5em auto;background: white;border-radius: 6px;-webkit-border-radius: 6px;box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.26);-webkit-box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.26);outline: 4px solid #ffc410;"><div><div style="color: white;position: absolute;left: -35px;top: -40px;width: 45px;height: 45px;line-height: 45px;border-radius: 50%;-webkit-border-radius: 50px 0px 0 0px;z-index: 9;background: #ffc410;padding: 15px;text-align: center;box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.26);-webkit-box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.28);font-size: 2em;font-family: arial;text-decoration: none;"><span>?</span></div></div><div style="position: relative;padding: 5px;text-align: right;font-size: 14px;"><p>⁄–—«.. „ ﬁÿ⁄ «·≈ ’«· »ﬁ«⁄œ… »Ì«‰«  «·⁄„·«¡ ›—Ã«¡« ﬁ„ »≈⁄«œ…  Õ„Ì· «·’›Õ… √Ê ≈ ’· »‹ <a style="color: #ef513a;font-size: 14px; font-weight: 400;" href="'+a+'">›—Ìﬁ «·œ⁄„</a></p></div></div></div>'),setTimeout(function(){window.location.assign(n)},6e4),!1);try{var e=JSON.parse(u.responseText);console.log("%csuccessful feed",t);for(var o=0;o<e.records.length;o+=1)if(0<=[b].indexOf(w)&&e.records[o].KEY===f){if(console.log("%cSuccessful license / Data no crash",t),e.records[o].CUSTOMER!==p||!0!==e.records[o].STATUS)return console.log("%cstatus: FALSE or KEY: crash",t),$("html").html('<div style="font-family: sans-serif;position: fixed;overflow-x: hidden;background: #dedede;top: 0;left: 0;right: 0;bottom: 0;width: 100%;height: 100%;z-index: 1;text-align: center;"><div style="position: relative;padding: 2em;width: 50%;min-width: 200px;margin: 5em auto;background: white;border-radius: 4px;-webkit-border-radius: 4px;box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.26);-webkit-box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.26);outline: 3px solid #55c759;"><div><div style="color: #fff;position: absolute;left: -35px;top: -40px;width: 45px;height: 45px;line-height: 45px;border-radius: 50%;-webkit-border-radius: 50% 0 0 0;z-index: 9;background: #55c759;padding: 15px;text-align: center;box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.26);-webkit-box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.26);font-size: 2em;font-family: arial;text-decoration: none;"><span>:)</span></div><h4 style=" text-align: center; font-size: 26px; margin: 30px 0 15px;">„»—Êﬂ ⁄·Ìﬂ</h4></div><div style="position: relative;padding: 5px;text-align: right;font-size: 14px;"><p>·ﬁœ  „  ⁄„·Ì… «· ›⁄Ì· »‰Ã«Õ ..ŒÿÊ… √ŒÌ—… Ê” ’»Õ Â–Â «·‰”Œ… „·ﬂ ·„Êﬁ⁄<span style="font-weight: bold;color: #55c759;">"'+blogtitle+'"</span></p><p><span style="font-weight: bold; color: #ef513a;">„·«ÕŸ… „Â„…: </span>  ”Ì „ ≈·€«¡  ›⁄Ì· «·ﬁ«·» ›Ì Õ«· ≈ﬂ ‘«›‰« √‰Â  „ «· ·«⁄» »«·»Ì«‰«  Ê”Ì „ ÕŸ— „œÊ‰…  <span style="font-weight: bold;color: #55c759;">"'+blogtitle+'"</span></p><p>≈–« ·„ Ì „ «·„Ê«›ﬁ… ⁄·Ï ÿ·»ﬂ ›Ì Œ·«· 24/”«⁄… «·ﬁ«œ„… «·—Ã«¡ ﬁ„ »«· Ê«’· „⁄   <a style="color: #ef513a;font-size: 14px; font-weight: 400;" href="'+a+'">›—Ìﬁ «·œ⁄„</a></p></div><div style=" text-align: center; overflow: hidden;"><a style="color: #fff;background: #55c759;text-decoration: none;display: block;padding: 10px 12px;margin-bottom: 0;font-size: 14px;font-weight: 400;line-height: 1.42857143;text-align: center;white-space: nowrap;vertical-align: middle;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;background-image: none;border: 0;border-radius: 4px;-webkit-border-radius: 4px;" href="'+n+'">«·’›Õ… «·—”„Ì…</a></div></div></div>'),setTimeout(function(){window.location.assign(n)},6e4),!1;console.log("%cstatus: TRUE",t);var i=(new Date).getFullYear();return $("#source-org").append("©"+i+" Ã„Ì⁄ «·ÕﬁÊﬁ „Õ›ÊŸ… ·„Êﬁ⁄ <a href="+d+">"+blogtitle+"</a>"),$("#license-code").remove(),!1}if(-1==s.indexOf("www.blogger")&&-1==s.indexOf("draft.blogger")&&-1==s.indexOf("template-editor")&&-1==s.indexOf("post-preview")&&-1==s.indexOf("b/layout-preview")&&-1==s.indexOf("b/blog-preview")&&-1==s.indexOf("b/preview")&&-1==s.indexOf("b/html-preview")&&-1==s.indexOf("b/app-preview")&&-1==s.indexOf("translate.google")&&-1==s.indexOf("webcache.googleusercontent"))return console.log("%clicense crash",t),r()}catch(e){return console.log("%cremove feed",t),r()}}},u.open("GET","https://script.google.com/macros/s/AKfycbwNWudhpnN31GnXkFLSUp345gJNX7iY7kDLIjIwPUFi1GKwRpi-/exec?action=Sheettworeadvalue"+g,!0),u.send()}(),$(".error_page #license").text("");





$('body').toggleClass(localStorage.toggled);

function darkLight() {
  /*DARK CLASS*/
  if (localStorage.toggled != 'darkstyle') {
    $('body').toggleClass('darkstyle', true);
    localStorage.toggled = "darkstyle";
	$('.btn-moon').toggleClass('tgg', true);
     
  } else {
    $('body').toggleClass('darkstyle', false);
    localStorage.toggled = "";
$('.btn-moon').toggleClass('tgg', false);
  }
}

if ($('body').hasClass('darkstyle')) {
   $( '#checkBox' ).prop( "checked", true );
	$('.btn-moon').addClass('tgg');
} else {
  $( '#checkBox' ).prop( "checked", false )
}