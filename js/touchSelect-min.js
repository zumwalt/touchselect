(function(e){e.fn.touchSelect=function(t){jQuery.expr[":"].Contains=function(e,t,n){return(e.textContent||e.innerText||"").toUpperCase().indexOf(n[3].toUpperCase())>=0};var n=e.extend({search:!0},t);return this.each(function(){var t=e(this),r=e("optgroup",this),i=e("option",this),s=e('<div class="touch-select"><div class="touch-select-container"></div></div>'),o=e('<div class="touch-select-search-container"><input type="text" class="touch-select-search" placeholder="Search"></div>');t.css({position:"absolute",left:-9999,visibility:"hidden"});t.before(s);var u=e(".touch-select-container");if(n.search){o.prependTo(".touch-select");var a=e(".touch-select-search");u.height(e(this).parent().height()-51)}r.each(function(){u.append('<div class="touch-optgroup">'+e(this).attr("label")+"</div>");e("option",this).each(function(){u.append('<a class="touch-option" data-value="'+e(this).val()+'">'+e(this).text()+"</a>")})});var f=e(".touch-option");f.each(function(){e(this).on("click",function(){e(this).toggleClass("active");var t=e(this).data("value");e('option[value="'+t+'"]').attr("selected",!e('option[value="'+t+'"]').is(":selected"))})});n.search&&a.change(function(){var t=e(this).val();if(t){e(u).find("a:not(:Contains("+t+"))").hide();e(u).find("a:Contains("+t+")").show()}else e(u).find("a").show()}).keyup(function(){e(this).change()})})}})(jQuery);