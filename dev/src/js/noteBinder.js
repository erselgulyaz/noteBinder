
var noteBinderLength = 0;

var noteBinderDefaults = {
	openEffect: "fade",
	closeEffect: "fade",
	horAnimate: false,
	maxItem: 3,
	waiting: 5000,
	message: "hi!",
	verticalPos: "top",
	verticalSpace: 32,
	horizontalPos: "right",
	horizontalSpace: 32,
	clickClose: false,
	wrapClass: "noteBinder",
	closeElement: false,
	posForGroup: "before"
};

var noteBinder = {
	openEffect: function(value,options,item,posValue) {
		if (value == "fade") {
			item.fadeIn();
		}

		if(value == "slideToHor") {
			if (options.horizontalPos == "left") {
				item.css({
					"left" : - $(window).outerWidth(true) - 100
				});
				setTimeout(function(){
					item.fadeIn(function(){
						item.animate({
							"left" : options.horizontalSpace
						},250);
					});
				},250);
			}
			
			if (options.horizontalPos == "right") {
				item.css({
					"right" : - $(window).outerWidth(true) - 100
				});
				setTimeout(function(){
					item.fadeIn(function(){
						item.animate({
							"right" : options.horizontalSpace
						},250);
					});
				},250);
			}

			if (options.horizontalPos == "center") {
				item.css({
					"left" : - item.outerWidth(true) - 100
				}).show();
				item.animate({
					"left" : ($(window).width() / 2) - (item.outerWidth() / 2)
				});
			}
		}

		if (value == "slideToVer") {
			if (options.verticalPos == "top") {
				item.css({
					"top" : - item.outerHeight(true) - 100
				});
				item.show();
				if ($.isNumeric(posValue)) {
					setTimeout(function(){
						item.animate({
							"top" : posValue
						},250);
					},250);
				}else{
					setTimeout(function(){
						item.animate({
							"top" : options.verticalSpace
						},250);
					},250);
				}
			}

			if (options.verticalPos == "bottom") {
				item.css({
					"bottom" : - item.outerHeight(true) - 100
				});
				item.show();
				if ($.isNumeric(posValue)) {
					setTimeout(function(){
						item.animate({
							"bottom" : posValue
						},250);
					},250);
				}else{
					setTimeout(function(){
						item.animate({
							"bottom" : options.verticalSpace
						},250);
					},250);
				}
			}

			if (options.verticalPos == "center") {
				item.css({
					"top" : - item.outerHeight(true) - 100
				});
				item.show();
				if ($.isNumeric(posValue)) {
					setTimeout(function(){
						item.animate({
							"top" : posValue
						},250);
					},250);
				}else{
					setTimeout(function(){
						item.animate({
							"top" : options.verticalSpace
						},250);
					},250);
				}
			}
		}

		if (value == "bounce") {
			item.show();
			item.addClass("bounceIn");
			setTimeout(function(){
				item.removeClass("bounceIn");
			},2000);
		}

		if (value == "flipToVer") {
			if (options.verticalPos == "top") {
				item.css({
					"top" : - item.outerHeight(true) - 100
				}).show().addClass("flipper");
				if ($.isNumeric(posValue)) {
					item.animate({
						"top" : posValue
					});
				}else{
					item.animate({
						"top" : options.verticalSpace
					});
				}
			}
			if (options.verticalPos == "bottom") {
				item.css({
					"bottom" : - item.outerHeight(true) - 100
				}).show().addClass("flipper");
				if ($.isNumeric(posValue)) {
					item.animate({
						"bottom" : posValue
					});
				}else{
					item.animate({
						"bottom" : options.verticalSpace
					});
				}
			}
			if (options.verticalPos == "center") {
				item.css({
					"top" : - item.outerHeight(true) - 100
				}).show().addClass("flipper");
				if ($.isNumeric(posValue)) {
					item.animate({
						"top" : posValue
					});
				}else{
					item.animate({
						"top" : ($(window).outerHeight(true) / 2) - (item.outerHeight(true) / 2)
					});
				}
			}

			setTimeout(function(){
				item.removeClass("flipper");
			},2000);

		}
			
		if (value == "flipToHor") {
			if (options.horizontalPos == "left") {
				item.css({
					"left" : - item.outerWidth(true) - 100
				}).show().addClass("flipper");
				item.animate({
					"left" : options.horizontalSpace
				});
			}
			if (options.horizontalPos == "right") {
				item.css({
					"right" : - item.outerWidth(true) - 100
				}).show().addClass("flipper");
				item.animate({
					"right" : options.horizontalSpace
				});
			}
			if (options.horizontalPos == "center") {
				item.css({
					"left" : - item.outerWidth(true) - 100
				}).show().addClass("flipper");
				item.animate({
					"left" : ($(window).outerWidth(true) / 2) - (item.outerWidth(true) / 2)
				});
			}

			setTimeout(function(){
				item.removeClass("flipper")
			},2000);

		}

	},
	closeEffect: function(value,options,item) {
		if (value == "fade") {
			item.fadeOut(function(){
				item.remove();
			});
		}

		if(value == "slideToHor") {
			if (options.horizontalPos == "left") {
				item.animate({
					"left" : - item.outerWidth(true) - 100
				},250);
			}
			
			if (options.horizontalPos == "right") {
				item.animate({
					"right" :  - item.outerWidth(true) - 100
				},250);
			}

			if (options.horizontalPos == "center") {
				item.animate({
					"left" : - item.outerWidth(true) - 100
				},250);
			}

			setTimeout(function(){
				item.remove();
			},500);
		}

		if (value == "slideToVer") {
			if (options.verticalPos == "top") {
				item.animate({
					"top" : - item.outerHeight(true) - 100
				});
			}

			if (options.verticalPos == "bottom") {
				item.animate({
					"bottom" : - item.outerHeight(true) - 100
				});
			}

			if (options.verticalPos == "center") {
				item.animate({
					"top" : - item.outerHeight(true) - 100
				});
			}
			
			setTimeout(function(){
				item.remove();
			},500);
		}

		if (value == "bounce") {
			item.addClass("bounceOut");
			setTimeout(function(){
				item.fadeOut(function(){
					item.remove();
				});
			},1700);
		}

		if (value == "flipToVer") {
			if (options.verticalPos == "top") {
				item.addClass("flipper");
				setTimeout(function(){
					item.animate({
						"top" : - item.outerHeight(true) - 100
					},function(){
						item.remove();
					});
				},500);
			}
			if (options.verticalPos == "bottom") {
				item.addClass("flipper");
				setTimeout(function(){
					item.animate({
						"bottom" : - item.outerHeight(true) - 100
					},function(){
						item.remove();
					});
				},500);
			}
			if (options.verticalPos == "center") {
				item.addClass("flipper");
				setTimeout(function(){
					item.animate({
						"top" : - item.outerHeight(true) - 100
					},function(){
						item.remove();
					});
				},500);
			}
		}

		if (value == "flipToHor") {
			if (options.horizontalPos == "left") {
				item.addClass("flipper");
				setTimeout(function(){
					item.animate({
						"left" : - item.outerWidth(true) - 100
					},function(){
						item.remove();
					});
				},500);
			}
			if (options.horizontalPos == "right") {
				item.addClass("flipper");
				setTimeout(function(){
					item.animate({
						"right" : - item.outerWidth(true) - 100
					},function(){
						item.remove();
					});
				},500);
			}
			if (options.horizontalPos == "center") {
				item.addClass("flipper");
				setTimeout(function(){
					item.animate({
						"left" : - item.outerWidth(true) - 100
					},function(){
						item.remove();
					});
				},500);
			}
		}

	},
	maxItem: function(value,options,item) {
		var groupLength = $("." + options.wrapClass + "[data-verticalpos="+ options.verticalPos +"][data-horizontalpos="+ options.horizontalPos +"]").length;
		if (groupLength > value) {
			$("." + options.wrapClass + "[data-verticalpos="+ options.verticalPos +"][data-horizontalpos="+ options.horizontalPos +"]").eq(0).fadeOut(function(){
				$(this).remove();
				noteBinder.maxItem(options.maxItem,options,item);
			});
		}else{
			noteBinder.posForGroup(options.posForGroup,options,item);
		}
	},
	waiting: function(value,options,item) {
		setTimeout(function(){
			noteBinder.closeEffect(options.closeEffect,options,item);
		},value);
	},
	clickClose: function(value,options,item) {
		if (value == true) {
			noteBinder.closeElement(options.closeElement,options,item);
		}
	},
	closeElement: function(value,options,item){
		item.find(value).click(function(){
			noteBinder.closeEffect(options.closeEffect,options,item);
		});
	},
	posForGroup: function(value,options,item){
		var itemHeight = item.outerHeight(true) + 10;
		var groupHeight = 0;
		var groupLength = $("." + options.wrapClass + "[data-verticalpos="+ options.verticalPos +"][data-horizontalpos="+ options.horizontalPos +"]").length;
		var lastItemTop = parseInt($("." + options.wrapClass + "[data-verticalpos="+ options.verticalPos +"][data-horizontalpos="+ options.horizontalPos +"]:last").prev().css("top")) + $("." + options.wrapClass + "[data-verticalpos="+ options.verticalPos +"][data-horizontalpos="+ options.horizontalPos +"]:last").prev().outerHeight(true) + 10;
		var lastItemBottom = parseInt($("." + options.wrapClass + "[data-verticalpos="+ options.verticalPos +"][data-horizontalpos="+ options.horizontalPos +"]:last").prev().css("bottom")) + $("." + options.wrapClass + "[data-verticalpos="+ options.verticalPos +"][data-horizontalpos="+ options.horizontalPos +"]:last").prev().outerHeight(true) + 10;
		if (value == "before") {
			if (options.verticalPos == "top") {
				if (groupLength > 1) {
					$("." + options.wrapClass + "[data-verticalpos="+ options.verticalPos +"][data-horizontalpos="+ options.horizontalPos +"]").not(item).each(function(){
						$(this).animate({
							"top" : parseInt($(this).css("top")) + itemHeight
						});
					});
					item.css({
						"top" : options.verticalSpace
					});
				}

				if(groupLength == 1) {
					item.css({
						"top" : options.verticalSpace
					});
				}
			}

			if(options.verticalPos == "bottom") {
				if (groupLength > 1) {
					$("." + options.wrapClass + "[data-verticalpos="+ options.verticalPos +"][data-horizontalpos="+ options.horizontalPos +"]").not(item).each(function(){
						$(this).animate({
							"bottom" : parseInt($(this).css("bottom")) + itemHeight
						});
					});
					item.css({
						"bottom" : options.verticalSpace
					});
				}

				if (groupLength == 1) {
					item.css({
						"bottom" : options.verticalSpace
					});
				}
			}

			if (options.verticalPos == "center") {
				if (groupLength > 1) {
					$("." + options.wrapClass + "[data-verticalpos="+ options.verticalPos +"][data-horizontalpos="+ options.horizontalPos +"]").not(item).each(function(){
						$(this).animate({
							"top" : parseInt($(this).css("top")) + itemHeight
						});
					});
					item.css({
						"top" : ($(window).height() / 2) - (item.outerHeight(true) / 2)
					});
				}

				if (groupLength == 1) {
					item.css({
						"top" : ($(window).height() / 2) - (item.outerHeight(true) / 2)
					});
				}

			}

			noteBinder.openEffect(options.openEffect,options,item);
		
		}

		if (value == "after") {
			if (options.verticalPos == "top") {
				if (groupLength > 1) {
					item.css({
						"top" : lastItemTop
					});
				}

				if (groupLength == 1) {
					item.css({
						"top" : options.verticalSpace
					});
				}
				noteBinder.openEffect(options.openEffect,options,item,lastItemTop);

			}

			if (options.verticalPos == "bottom") {
				if (groupLength > 1) {
					item.css({
						"bottom" : lastItemBottom
					});
				}

				if (groupLength == 1) {
					item.css({
						"bottom" : options.verticalSpace
					});
				}

				noteBinder.openEffect(options.openEffect,options,item,lastItemBottom);

			}

			if (options.verticalPos == "center") {
				if (groupLength > 1) {
					item.css({
						"top" : lastItemTop
					});
				}

				if (groupLength == 1) {
					item.css({
						"top" : ($(window).height() / 2) - (item.outerHeight(true) / 2)
					});
				}

				noteBinder.openEffect(options.openEffect,options,item,lastItemTop);

			}

		}

		if (options.horAnimate == false) {
			if (options.horizontalPos == "left") {
				item.css({
					"left" : options.horizontalSpace
				});
			}

			if (options.horizontalPos == "right" && options.openEffect != "slideToHor") {
				item.css({
					"right" : options.horizontalSpace
				});
			}
			
			if (options.horizontalPos == "center") {
				item.css({
					"left" : ($(window).width() / 2) - (item.outerWidth(true) / 2)
				});
			}
		}



		noteBinder.waiting(options.waiting,options,item);
		noteBinder.clickClose(options.clickClose,options,item);

	},
	init: function(options) {
		noteBinderLength++;
		options = $.extend({},noteBinderDefaults,options);
		
		$("body").append('<div id="noteBinder-'+noteBinderLength+'" class="'+options.wrapClass+'" data-verticalpos="'+options.verticalPos+'" data-horizontalpos="'+options.horizontalPos+'" style="display: none;">'+ options.message +'</div>');
		var item = $("#noteBinder-" + noteBinderLength);
		
		noteBinder.maxItem(options.maxItem,options,item);
	}
}
