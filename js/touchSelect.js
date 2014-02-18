(function($) {

    $.fn.touchSelect = function( options ) {

      jQuery.expr[':'].Contains = function(a,i,m){
          return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
      };

      var settings = $.extend({
        search      : true
      }, options);

      return this.each( function(){

        var select = $(this),
            optgroup = $('optgroup', this),
            option = $('option', this);

        select.css({
          'position' : 'absolute',
          'left' : -9999,
          'visibility' : 'hidden'
        });
        select.before('<div class="touch-select"><div class="touch-select-search-container"><input type="text" class="touch-select-search" placeholder="Search"></div><div class="touch-select-container"></div></div>');

        var container = $('.touch-select-container'),
            search = $('.touch-select-search');

        container.height($(this).parent().height() - 51);

        optgroup.each(function(){
          container.append('<div class="touch-optgroup">'+$(this).attr("label")+'</div>');
          $('option', this).each(function(){
            container.append('<a class="touch-option" data-value="'+$(this).val()+'">'+$(this).text()+'</a>');
          });
        });

        var tOption = $('.touch-option');
        tOption.each(function(){
          $(this).on('click', function(){
            $(this).toggleClass('active');
            var value = $(this).data('value');

            $('option[value="'+value+'"]').attr('selected', !$('option[value="'+value+'"]').is(':selected'));

          });
        });

        // Filter the list
        search.change( function(){
          var filter = $(this).val(); // get the value of the input, which we use to filter
          if (filter) {
            $(container).find('a:not(:Contains(' + filter + '))').hide();
            $(container).find('a:Contains(' + filter + ')').show();
          } else {
           $(container).find('a').show();
          }
        }).keyup(function(){
          $(this).change();
        });

      });

    }

}(jQuery));