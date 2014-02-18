(function($) {

    $.fn.touchSelect = function( options ) {

      jQuery.expr[':'].Contains = function(a,i,m){
          return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
      };

      var settings = $.extend({
        search      : true,
        multiple    : null
      }, options);

      return this.each( function(){

        if ( $(this).is("[multiple]") ) {
          settings.multiple = true
        }

        var select = $(this),
            optgroup = $('optgroup', this),
            option = $('option', this),

            genContainer = $('<div class="touch-select"><div class="touch-select-container"></div></div>'),
            genSearch = $('<div class="touch-select-search-container"><input type="text" class="touch-select-search" placeholder="Search"></div>');

        select.css({
          'position' : 'absolute',
          'left' : -9999,
          'visibility' : 'hidden'
        });
        select.before(genContainer);

        var container = $('.touch-select-container');

        if ( settings.search ) {
          genSearch.prependTo('.touch-select');
          var search = $('.touch-select-search');
          container.height($(this).parent().height() - 51);
        }

        optgroup.each(function(){
          container.append('<div class="touch-optgroup">'+$(this).attr("label")+'</div>');
          $('option', this).each(function(){
            container.append('<a class="touch-option" data-value="'+$(this).val()+'">'+$(this).text()+'</a>');
          });
        });

        var tOption = $('.touch-option');
        tOption.each(function(){
          var value = $(this).data('value');

          $(this).on('click', function(){


            if ( settings.multiple ) {

              $(this).toggleClass('active');
              $('option[value="'+value+'"]').attr('selected', !$('option[value="'+value+'"]').is(':selected'));

            } else {

              tOption.removeClass('active');
              $('option', select).removeAttr('selected');

              $(this).toggleClass('active');
              $('option[value="'+value+'"]').attr('selected', !$('option[value="'+value+'"]').is(':selected'));

            }


          });
        });

        if ( settings.search ) {
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
        }


      });

    }

}(jQuery));
