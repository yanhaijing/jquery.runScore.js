(function($, widnow){
	'use strict';
	
	$.fn.extend({
		runScore:function(options){
			var setting = {
				time:1000,
				start:0,
				end:1000,
				speed:10,
				callback:function(){},
				callstep:function(){}
			},
			step = 0,
			currentScore,
			that = this;
			
			$.extend(setting, options);
			
			step = Math.round((setting.end - setting.start) / (setting.time/setting.speed));
			
			currentScore = setting.start;
			
			function run(){
				setting.callstep();//执行每步回调函数
				$(that).html(currentScore);
				
				currentScore += step;
				
				
				
				if(currentScore <= setting.end){
					window.setTimeout(function(){
						run();
					}, setting.speed);
				}else{
					setting.callback();//结束执行回调函数
				}
				
				setting.end - currentScore < step ? currentScore = setting.end : '0';
			}
			
			run();
		}
	});
}(jQuery, window));
