
(function( $ ) {

	'use strict';

	// Slider
	$("#revolutionSlider").revolution({
		sliderType: 'standard',
		sliderLayout: 'fullwidth',
		delay: 7000,
		gridwidth: 1280,
		gridheight: 720,
		spinner: 'spinner3',
		disableProgressBar: 'on',
		parallax: {
			type: 'on',
			speed: '1.7',
			bgparallax: 'on'
		},
		navigation: {
			keyboardNavigation: "off",
			keyboard_direction: "horizontal",
			mouseScrollNavigation: "off",
			onHoverStop: "off",
			touch: {
				touchenabled: "off",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: "horizontal",
				drag_block_vertical: false
			},
			arrows: {
				style: "uranus",
				enable: false,
				hide_onmobile: true,
				hide_onleave: true,
				tmp: '',
				left: {
					h_align: "left",
					v_align: "center",
					h_offset: 20,
					v_offset: 0
				},
				right: {
					h_align: "right",
					v_align: "center",
					h_offset: 20,
					v_offset: 0
				}
			},
			bullets: {
				enable: false,
				hide_onmobile: true,
				style: "dione",
				hide_onleave: false,
				direction: "horizontal",
				h_align: "top",
				v_align: "left",
				h_offset: 20,
				v_offset: 30,
				space: 5,
				tmp: '<span class="tp-bullet-img-wrap">  <span class="tp-bullet-image"></span></span><span class="tp-bullet-title">{{title}}</span>'
			}
		}
	});

	// Combination Filters
	if($('#combinationFilters').get(0)) {

		$(window).on('load', function() {

			var $grid = $('.team-list').isotope({
				itemSelector: '.isotope-item'
			});

			var filters = {};

			$('.filters').on('click', 'a', function(e) {
				
				e.preventDefault();
				
				var $this = $(this);

				var $buttonGroup = $this.parents('.team-filter-group');
				var filterGroup = $buttonGroup.attr('data-filter-group');
				
				filters[filterGroup] = $this.parent().attr('data-option-value');
				
				var filterValue = concatValues(filters);
				
				$grid.isotope({
					filter: filterValue
				});
			});

			$('.team-filter-group').each(function(i, buttonGroup) {
				var $buttonGroup = $(buttonGroup);
				$buttonGroup.on('click', 'a', function() {
					$buttonGroup.find('.active').removeClass('active');
					$(this).parent().addClass('active');
				});
			});

			var concatValues = function(obj) {
				var value = '';
				for (var prop in obj) {
					value += obj[prop];
				}
				return value;
			}

		});

	}

}).apply( this, [ jQuery ]);