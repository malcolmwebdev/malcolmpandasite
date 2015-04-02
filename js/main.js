$(document).ready(function(){
	
	//////////////global vars
	var win = $(window);
	var scroll_pos = win.scrollTop()
	var win_height = win.height(),
		win_width = win.width();

	//////////////global vars
	
	function create_and_place_clouds(){ 
	
		function creat_clouds(){ ///////////////// create clouds	
			var min = 0;
			var max = 2;
			var random1 = Math.floor(Math.random() * 2 *(max - min + 1)) + min,
				random2 = Math.floor(Math.random() * 2 *(max - min + 1)) + min,
				random3 = Math.floor(Math.random() * 2 *(max - min + 1)) + min,
				random4 = Math.floor(Math.random() * 2 *(max - min + 1)) + min;
			
			for(i=0; i < 1; i++){
				$('.cloud').append("<div class='cloud1' data-value='-5'></div>");
			};
			for(i=0; i < random2; i++){
				$('.cloud').append("<div class='cloud2' data-value='6'></div>");
			};
			for(i=0; i < random3; i++){
				$('.cloud').append("<div class='slow_cloud cloud3' data-value='2'></div>");
			};
			for(i=0; i < random4; i++){
				$('.cloud').append("<div class='slow_cloud cloud4' data-value='-2'></div>");
			};
			for(i=0; i < random4; i++){
				$('.cloud').append("<div class='cloud5' data-value='-6'></div>");
			};
			for(i=0; i < random4; i++){
				$('.cloud').append("<div class='slow_cloud cloud6' data-value='-1'></div>");
			};
		}////////////////////end create clouds;
		
		
		function place_and_move_clouds(){    //////place clouds
			$('.cloud div').each(function(){
				/////////////////////////////// place clouds
				var y_pos = (Math.floor(Math.random()*100));
				var x_pos = (Math.floor(Math.random()*100));
				var that = $(this);	
				var time;				
				var movement_number = parseInt(that.data('value'));
				if(Math.abs(movement_number)>3){
					time = (Math.floor(Math.random()*1000)+500);
				}else{
					time = (Math.floor(Math.random()*100)+500);
				}
				that.css({
					right:x_pos+'%',
					top:y_pos+'%'
				});
				new TimelineLite()
					.to($(that), time, {
						x: movement_number*2000
					});
				
		
				
			});
			
				
		
			
			
		}; ////end place clouds
		
		creat_clouds();
		place_and_move_clouds()	
		
	}; //////// end creat_and_place_clouds
	create_and_place_clouds();
	
		/*********
	set bg clouds 
	***********/
	function bg_clouds(){
		var mountains_width = $('.mountains').width();	
		$('.bg_cloud_holder').css({
			width:mountains_width,
			height:win_height/2,
			top:'0'
		});
		
		$('.bg_cloud').each(function(){
			var y_pos = (Math.floor(Math.random()*100));
			var x_pos = (Math.floor(Math.random()*100));
			var that = $(this);	
			var time;				
			var movement_number = parseInt(that.data('value'));
			var movement;
			var repeat_location;
			if(Math.abs(movement_number)>3){
				time = (Math.floor(Math.random()*70)+80);
			}else{
				time = (Math.floor(Math.random()*100)+80);
			}
			that.css({
				right:x_pos+'%',
				top:y_pos+'%'
			});
			if(movement_number<0){
				movement = 125;
				repeat_location =-5;
			}else{
				movement = -5;
				repeat_location = 125;
			}
			function move_bg_clouds(){
				new TimelineMax({onComplete:move_bg_clouds})
					.to($(that), time, {
						css:{right:movement+'%'},
						ease:Linear.easeNone
					})
					.to($(that), 1, {
						css:{opacity:0}
					})
					.to($(that), .001, {
						css:{right:repeat_location+"%"},
						ease:Linear.easeNone
					})
					.to($(that), 1, {
						css:{opacity:1}
					})

			}	
			move_bg_clouds();
				
		});
	};
		/*************************
		dragon animation
	**************************/
	function dragon_animate(){
		new TimelineMax({repeat:-1,repeatDelay:5})
				.to($('.dragon'), 8, {
					y:50,
					x:200,
					ease:Linear.easeNone
				})
				.to($('.dragon'), 8, {
					y:0,
					x:400,
					ease:Linear.easeNone
				})
				.to($('.dragon'), 8, {
					y:100,
					x:600,
					ease:Linear.easeNone
				})
				.to($('.dragon'), 8, {
					y:0,
					x:800,
					ease:Linear.easeNone
				})
					.to($('.dragon'), 8, {
					y:100,
					x:1000,
					ease:Linear.easeNone
				})
				.to($('.dragon'), 8, {
					y:0,
					x:1200,
					ease:Linear.easeNone
				})
				.to($('.dragon'), 8, {
					y:100,
					x:1400,
					ease:Linear.easeNone
				})
				.to($('.dragon'), 8, {
					y:0,
					x:1600,
					ease:Linear.easeNone
				})
				.to($('.dragon'), 8, {
					y:100,
					x:1800,
					ease:Linear.easeNone
				})
				.to($('.dragon'), 8, {
					y:0,
					x:2000,
					ease:Linear.easeNone
				})
				.to($('.dragon'), 8, {
					y:100,
					x:2200,
					ease:Linear.easeNone
				})
				.to($('.dragon'), 8, {
					y:0,
					x:2400,
					ease:Linear.easeNone
				})
				.to($('.dragon'), 8, {
					y:100,
					x:2800,
					ease:Linear.easeNone
				})
				

	}//end dragon animate function
	/*************************
		start animation
	**************************/
	$('.click_div').click(function(){
		setTimeout(function(){
			$('body').css('overflow-y','scroll');
			$(window).scrollTop(0);
		},3900);
	
		new TimelineLite()
			.call(function(){
					bg_clouds();
			})
			.to($('.p_balloon'), .001, {
				opacity: 0
			})
			.to($('.p_balloon_pop'), .001, {
				opacity: 1
			})
			.to($('.p_balloon_pop'), .001, {
				opacity: 1
			})
			.to($('.p_balloon_pop'), .3, {
				scaleX: 1.5,
				scaleY: 1.5,
				opacity:.01
			})
			.to($('.p_balloon_pop'), .001, {
				opacity:.001
			})
			.to($('.bear_balloon_div'), 3, {
				y:win_height+win_height/15,
				rotation:-200
			},'+=.1')
			.to($('.slow_cloud'), 1, {
				y:-win_height*.3,
			},'-=3')
			.to($('.cloud div:not(.slow_cloud)'), 1, {
				y:-win_height*.6
			},'-=3')
			.to($('.start_div'), 1.5, {
				opacity:0
			},'-=1.2')
			.to($('.ocean_and_city'), 2.5, {
				opacity:1
			},'+=.8')		
			.call(function(){
				$('.start_div').remove();		
				dragon_animate();					
			})
			.to($('.bear'), .001, {
				opacity:1
			},'-=3.8')
			.to($('.bear'), 1, {
				y:800,
				rotation:-360,
				ease:Linear.easeNone
			},'-=3.8')
			
			.to($('.bear, .leaf_boat'), .001, {
				opacity:0
			},'-=2.8')
			.to($('.bear_in_boat, .poof, .lantern_light, .wheel1, .wheel2'), .001, {
				opacity:1
			},'-=2.8')
			.to($('.poof'), .7, {
				y:-50,
				scale:2,
				opacity:0				
			},'-=2.8')

	});/////click
	
	$('.wave').each(function(index){
		var that = $(this),
			delay = index -1;
		new TimelineMax({delay:delay,repeat:-1})
			.to(that, 1, {
				x:10,
				y:5,
				ease:Linear.easeNone
			})
			.to(that, 1, {
				x:20,
				y:0,
				ease:Linear.easeNone
			})
			.to(that, 1, {
				x:10,
				y:5,
				ease:Linear.easeNone
			})
			.to(that, 1, {
				x:0,
				y:0,
				ease:Linear.easeNone
			})			
	});//////// end waves
	
	
	/********************
		parallxscrolling effects
	********************/
	var controller = $.superscrollorama({}); /////////////inst. controller
	
	controller.addTween(0, new TimelineLite()
	.to($('.mountains, .bg_cloud_holder'), 3, {
			x:-1100,
			ease:Linear.easeNone
		})
	.to($('.pmountains'), 3, {
			x:-2390,
			ease:Linear.easeNone
		},'-=3')
	.to($('.ocean_layout'), 3, {
			x:-6698,
			ease:Linear.easeNone
		},'-=3')
	.to($('.bear_and_boat_holder_div'), 3, {
			x:6690,
			ease:Linear.easeNone
		},'-=3')
	.to($('.bear_in_boat, .wheel2, .wheel1, .lantern_light'), .001, {
				opacity:0
		})
	.to($('.bear, .leaf_boat'), .001, {
				opacity:1
		},'-=.001')
	.to($('.bear'), 1, {				
				rotation:360,
				x:390,
				y:500				
		})
	.to($('.leaf_boat'), .1, {				
		rotation:45,	
		y:-50,
		ease:Linear.easeNone
	},'-=.99')
	.to($('.leaf_boat'), .1, {				
		rotation:0,
		x:0,	
		y:0,
		ease:Linear.easeNone
	},'-=.8')
		
	,55000);
	
	
	 //$(window).scrollTop();
	win.scroll(function(){
		if($(window).scrollTop()>31655){
			$('.bear_and_boat_holder_div').css('z-index','11').animate('','');
		}else{
			$('.bear_and_boat_holder_div').css('z-index','2');
		}
	})
	
	
	win.unload(function() {
		win.scrollTop(0);
	});
});/**********
end doc ready
***************/











