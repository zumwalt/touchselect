(function(e){e.fn.touchSelect=function(t){jQuery.expr[":"].Contains=function(e,t,n){return(e.textContent||e.innerText||"").toUpperCase().indexOf(n[3].toUpperCase())>=0};var n=e.extend({search:!0},t);return this.each(function(){var t=e(this),n=e("optgroup",this),r=e("option",this);t.css({position:"absolute",left:-9999,visibility:"hidden"});t.before('<div class="touch-select"><div class="touch-select-search-container"><input type="text" class="touch-select-search" placeholder="Search"></div><div class="touch-select-container"></div></div>');var i=e(".touch-select-container"),s=e(".touch-select-search");i.height(e(this).parent().height()-51);n.each(function(){i.append('<div class="touch-optgroup">'+e(this).attr("label")+"</div>");e("option",this).each(function(){i.append('<a class="touch-option" data-value="'+e(this).val()+'">'+e(this).text()+"</a>")})});var o=e(".touch-option");o.each(function(){e(this).on("click",function(){e(this).toggleClass("active");var t=e(this).data("value");e('option[value="'+t+'"]').attr("selected",!e('option[value="'+t+'"]').is(":selected"))})});s.change(function(){var t=e(this).val();if(t){e(i).find("a:not(:Contains("+t+"))").hide();e(i).find("a:Contains("+t+")").show()}else e(i).find("a").show()}).keyup(function(){e(this).change()})})}})(jQuery);