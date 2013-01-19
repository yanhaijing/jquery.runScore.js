jquery.runScore.js
==================

跑分器。jquery插件

说明：本插件能实现将一个数字从一个数字在一定时间内以渐变方式变成另外一个数字，本程序以来jquery才能实现

文档：
	head中引入
	<script type="text/javascript" src="./js/jquery-1.8.2.js"></script>
	<script type="text/javascript" src="./js/jquery.runScore.min.js"></script>

	默认方法	
		<script>
			$(function(){
				$('#page1').runScore();
			})
		</script>
		
	将实现在1秒内将page1中的数字由0变为1000，每次变化为10。

参数:	
	$('#x').runScore({time:1000,
				start:0,
				end:1000,
				speed:10,
				callback:function(){},
				callstep:function(){}
				});
				
	start:设置起数数字，默认为0
	
	end:设置结束数字，默认为1000
	
	speed:设置每步变化多少，默认为10
	
	callback:程序运行结束回调函数
	
	callstep:每次变更数字调用
	
demo:下载下来见demo.html
