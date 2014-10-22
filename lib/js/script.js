/* ALL FUNCTION
---------------------------------------------------------------------------------------------------------------------------------- */


(function($){

    window['scripts'] = {

        filter: function() {
            $('.dropdown-toggle').dropdown();

        },

        customSelect: function() {
            'use strict';

            $( document.body ).on( 'click', '.dropdown-menu li', function( event ) {

               var $target = $( event.currentTarget );

               $target.closest( '.dropdown' )
                  .find( '[data-bind="label"]' ).html( $target.html() )
                     .end()
                  .children( '.dropdown-toggle' ).dropdown( 'toggle' );

               return false;

            });

        },

        Toggle: function() {
            'use strict';

            var hover = 0;

            $(".mobile-toggle").click(function(e){
                var el = $(this),
                    id = el.data('id');
                el.toggleClass('active');
                $('#'+id+'-content').stop(true,true).slideToggle(500);
                e.stopPropagation();

                $('body, html').stop().animate({scrollTop: 0}, 400);

            });

            $(".mobile-toggle-content").hover(function() {
                hover = 1;
            }, function() {
                hover = 0;
            });

            $('body').click(function(){
                if ( hover != 1 ) {
                    $(".mobile-toggle-content").stop(true,true).slideUp(500);
                    $(".mobile-toggle").removeClass('active');
                }
            });

        },

        pageDetail: function() {
        	'use strict';

        	$('.btn-toTop').click(function() {
            	$('html,body').animate({scrollTop: 0}, 800);
            });

			$('.btn-toRegister').on('click', function(e) {
				e.preventDefault();

				var target = "#" + $(this).data('target'),
					$target = $(target);

				$('html,body').stop().animate({ scrollTop : $target.offset().top -20},
				800, 'swing', function() {
					window.location.hash = $target;
				});
			});
        },

        menuHover: function() {
            'use strict';

            $('.menu-inner-mobile ul li').click(function(){
                $(this).find('ul',this).stop(true, true).slideToggle(200);
            });

            $('ul.sf-menu').superfish({
                delay: 0,
                speed: 'fast'
            });
        },

        textToggle: function() {
            'use strict';

            $('a.btn-banner').click(function(){
                $('.subtext').toggleClass('normal-height');
                $('a.btn-banner').toggleClass('icon-up');
            });
        },

        listOrder: function() {
            'use strict';
            var check= $('.check-out'),
                listD = $('#list-order'),
                listM = $('#list-order-mobile'),
                sold_out = $('.sold-out');

            check.click(function() {
                $(this).hide();
                sold_out.show();
                var num = listD.text(),
                    int_num = parseInt(num),
                    new_num = (++int_num),
                    new_numM = new_num;
                listD.text(new_num);
                listM.text(new_numM);
            });

            sold_out.click(function() {
                $(this).hide();
                check.show();
                var num = listD.text(),
                    int_num = parseInt(num),
                    new_num = (--int_num),
                    new_numM = new_num;
                listD.text(new_num);
                listM.text(new_numM);
            });

            $('.menu-detail li').click(function() {
                $(this).find('a').toggleClass('active');
            });

        },

        listColumn: function() {
		    var num_cols = 3,
		    container = $('.split-list'),
		    listItem = 'li',
		    listClass = 'sub-list';
		    container.each(function() {
		        var items_per_col = new Array(),
		        items = $(this).find(listItem),
		        min_items_per_col = Math.floor(items.length / num_cols),
		        difference = items.length - (min_items_per_col * num_cols);
		        for (var i = 0; i < num_cols; i++) {
		            if (i < difference) {
		                items_per_col[i] = min_items_per_col + 1;
		            } else {
		                items_per_col[i] = min_items_per_col;
		            }
		        }
		        for (var i = 0; i < num_cols; i++) {
		            $(this).append($('<ul ></ul>').addClass(listClass));
		            for (var j = 0; j < items_per_col[i]; j++) {
		                var pointer = 0;
		                for (var k = 0; k < i; k++) {
		                    pointer += items_per_col[k];
		                }
		                $(this).find('.' + listClass).last().append(items[j + pointer]);
		            }
		        }
		    });
	    },

	    popUP: function() {
			'use strict';

			$('.gallery-item').each(function(){
				$(this).find('.gallery-icon a').attr('title', $(this).find('.caption-image').text());
			});

			$( '.link-standard' ).fancybox({
				padding: 0,
                width: '90%',
				maxWidth: 840,
                helpers: {
					overlay: {
					      css: { 'background': 'rgba(255, 255, 255, 0.9)' }
					}
				},
				tpl : {
                    wrap     : '<div class="fancybox-wrap fancybox-image" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                    closeBtn : '<a title="Close" class="fancybox-item fancybox-imageclose" href="javascript:;"><i class="icon icon-right"></i>schliessen</a>',
                    next     : '<a title="Next" class="fancybox-imagenav fancybox-imagenext" href="javascript:;"><i class="icon icon-singlenext icon-btn"></i></a>',
                    prev     : '<a title="Previous" class="fancybox-imagenav fancybox-imageprev" href="javascript:;"><i class="icon icon-singleprev icon-btn"></i></a>'
                }
			});

            $( '.link-image' ).fancybox({
                padding: 0,
                helpers: {
                    overlay: {
                          css: { 'background': 'rgba(255, 255, 255, 0.9)' }
                    }
                },
                tpl : {
                    wrap     : '<div class="fancybox-wrap fancybox-image" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                    closeBtn : '<a title="Close" class="fancybox-item fancybox-imageclose" href="javascript:;"><i class="icon icon-right"></i>schliessen</a>',
                    next     : '<a title="Next" class="fancybox-imagenav fancybox-imagenext" href="javascript:;"><i class="icon icon-singlenext icon-btn"></i></a>',
                    prev     : '<a title="Previous" class="fancybox-imagenav fancybox-imageprev" href="javascript:;"><i class="icon icon-singleprev icon-btn"></i></a>'
                }
            });

            $( '.map-fancybox' ).click(function(){
                var content = $(this).next().html();

                $.fancybox({
                    padding     : 0,
                    maxWidth    : 620,
                    maxHeight   : 'auto',
                    type        : 'iframe',
                    autoSize    : false,
                    scrolling   : 'no',
                    content     : content,
                    helpers: {
                        overlay: {
                              css: { 'background': 'rgba(255, 255, 255, 0.9)' }
                        }
                    },
                    tpl : {
                        wrap     : '<div class="fancybox-wrap fancybox-map" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                        closeBtn : '<a title="Close" class="fancybox-item fancybox-imageclose" href="javascript:;"><i class="icon icon-right"></i>schliessen</a>',
                        next     : '<a title="Next" class="fancybox-imagenav fancybox-imagenext" href="javascript:;"><i class="icon icon-singlenext icon-btn"></i></a>',
                        prev     : '<a title="Previous" class="fancybox-imagenav fancybox-imageprev" href="javascript:;"><i class="icon icon-singleprev icon-btn"></i></a>'
                    }
                });
            });
		},

        ready: function() {
            'use strict';

            scripts.Toggle();
            scripts.menuHover();
            scripts.textToggle();
            scripts.listColumn();
            scripts.popUP();
            scripts.filter();
            scripts.customSelect();
            scripts.listOrder();
            scripts.pageDetail();
        }

    };
    $(scripts.ready);

})( jQuery );