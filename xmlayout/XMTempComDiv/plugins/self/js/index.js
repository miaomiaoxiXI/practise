$(document).ready(function(){
	/*
	*启动函数（main）
	*/
	(function (){


		var con=document.getElementsByClassName("con");
		for(var i=0,l=con.length;i<l;i++){
			if(l==0){
				console.log(111);
			}else{
				console.log(con[i].innerHTML);
			}
			  
		}
		


		/*
		*2+1分为左上、左下、右三个panel
		*/
		var xm_main = $.xmlayout.layout();
		xm_main.design(1,2,0,[[1,1,6]],[false, false])
		       .getData("1:1")
		       .design(2,1,0,null,[false,false]);
		xm_main.init({
			data: xm_main.getData(),
			panel : $(".temp-com-body").eq(0),
	    	isdestroy : false,
	    	playuseable : false,
	    	drag_bar_color : "#336666",
	    	pborder : "1px solid #CCCCCC",
	    	drag_bar_unit : 5
		});

		//先加载 右panel 1:2的工作区div（#xm-temp-window），因为 左上panel 1:1;1:1处的div（#accordion）要用到该#xm-temp-window
		xm_main.getPanels("1:2").loadElement($("#xm-temp-window"), function(){
			
			//加载 左上panel div（#accordion）
			xm_main.getPanels("1:1;1:1").loadElement($("#accordion"), function(){
				$("button").click(function(){
					$(this).siblings().css("background-color", "");
					$(this).css("background-color", "#EBEBEB");

					//对#xm-temp-window进行布局
					var div = $("#xm-temp-window");
					var xm_ss = $.xmlayout.layout();
					switch(parseInt($(this).attr("mid"))){
						case 1:
							xm_ss.init({
								data: xm_ss.design(1,1,0,null,[true,true]),
								panel : div,
								//isindexshow : true,
								drag_bar_unit : 5,
								pborder : "1px solid #CCCCCC",
						    	drag_bar_color : "white"
							});
							break;
						case 2:
							xm_ss.init({
								data: xm_ss.design(2,2,0,null,[true,true]),
								panel : div,
								//isindexshow : true,
								drag_bar_unit : 5,
								pborder : "1px solid #CCCCCC",
						    	drag_bar_color : "white"
							});
							break;
						case 3:
							xm_ss.init({
								data: xm_ss.design(3,3,0,null,[true,true]),
								panel : div,
								//isindexshow : true,
								drag_bar_unit : 5,
						    	pborder : "1px solid #CCCCCC",
						    	drag_bar_color : "white"
							});
							break;
						case 4:
							xm_ss.init({
								data: xm_ss.design(4,4,0,null,[true,true]),
								panel : div,
								//isindexshow : true,
								drag_bar_unit : 5,
						    	pborder : "1px solid #CCCCCC",
						    	drag_bar_color : "white"
							});
							break;
						case 5:
							xm_ss.init({
								data: xm_ss.design(5,5,0,null,[true,true]),
								panel : div,
								//isindexshow : true,
								drag_bar_unit : 5,
						    	pborder : "1px solid #CCCCCC",
						    	drag_bar_color : "white"
							});
							break;
						case 6:
							xm_ss.design(1,2,0,null,[true,false]).getData("1:2").design(2,1,0,null,[true,false]);
							xm_ss.init({
								data: xm_ss.getData(),
								panel : div,
								//isindexshow : true,
								drag_bar_unit : 5,
						    	pborder : "1px solid #CCCCCC",
						    	drag_bar_color : "white"
							});
							break;
						case 7:
							var obj1 = xm_ss.design(2,2,0,[[2,2,1],[1,2,1]],[true,false]);
						    obj1.getData("1:2").design(2,1,0,null,[true,false]);
						    obj1.getData("2:1").design(1,2,0,null,[true,false]);
							xm_ss.init({
								data: xm_ss.getData(),
								panel : div,
								//isindexshow : true,
								drag_bar_unit : 5,
						    	pborder : "1px solid #CCCCCC",
						    	drag_bar_color : "white"
							});
							break;
						case 8:
						    var obj1 = xm_ss.design(2,2,0,[[3,3,1],[1,3,1]],[true,false]);
						    obj1.getData("1:2").design(3,1,0,null,[true,false]);
						    obj1.getData("2:1").design(1,3,0,null,[true,false]);
							xm_ss.init({
								data: xm_ss.getData(),
								panel : div,
								//isindexshow : true,
								drag_bar_unit : 5,
						    	pborder : "1px solid #CCCCCC",
						    	drag_bar_color : "white"
							});
							break;
						case 9:
							var obj1 = xm_ss.design(2,2,0,[[4,4,1],[1,4,1]],[true,false]);
						    obj1.getData("1:2").design(4,1,0,null,[true,false]);
						    obj1.getData("2:1").design(1,4,0,null,[true,false]);
							xm_ss.init({
								data: xm_ss.getData(),
								panel : div,
								//isindexshow : true,
								drag_bar_unit : 5,
						    	pborder : "1px solid #CCCCCC",
						    	drag_bar_color : "white"
							});
							break;
						case 10:
							var obj1 = xm_ss.design(2,2,0,null,[true,false]);
						    obj1.getData("1:2").design(2,2,0,null,[true,false]);
						    obj1.getData("2:1").design(2,2,0,null,[true,false]);
						    obj1.getData("2:2").design(2,2,0,null,[true,false]);
							xm_ss.init({
								data: xm_ss.getData(),
								panel : div,
								//isindexshow : true,
								drag_bar_unit : 5,
						    	pborder : "1px solid #CCCCCC",
						    	drag_bar_color : "white"
							});
							break;
						case 11:
							var obj1 = xm_ss.design(2,2,0,[[3,3,2],[2,3,2]],[true,false]);
						    obj1.getData("1:2").design(3,2,0,null,[true,false]);
						    obj1.getData("2:1").design(2,3,0,null,[true,false]);
						    obj1.getData("2:2").design(2,2,0,null,[true,false]);
							xm_ss.init({
								data: xm_ss.getData(),
								panel : div,
								//isindexshow : true,
								drag_bar_unit : 5,
						    	pborder : "1px solid #CCCCCC",
						    	drag_bar_color : "white"
							});
							break;
						case 12:
							var obj1 = xm_ss.design(2,2,0,[[2,2,3],[3,2,3]],[true,false]);
						    obj1.getData("1:2").design(2,3,0,null,[true,false]);
						    obj1.getData("2:1").design(3,2,0,null,[true,false]);
						    obj1.getData("2:2").design(3,3,0,null,[true,false]);
							xm_ss.init({
								data: xm_ss.getData(),
								panel : div,
								//isindexshow : true,
								drag_bar_unit : 5,
						    	pborder : "1px solid #CCCCCC",
						    	drag_bar_color : "white"
							});
							break;
						default:
							break;
					}
					 
					
					var panels=xm_ss.getPanels();

					for(var i=0,l=panels.length;i<l;i++){
						 panels[i].loadElement($(con[i].innerHTML));
					}

					// $.each(xm_ss.getPanels(), function(i,v){
					// 	//右panel 划分的区域加载div（.xm-temp-panel1）
					// 	v.loadElement($('<div class="xm-temp-panel1"><span></span></div>'), function(){
							
					// 		v.find("div").html("<h1>hello</h1>");
					// 		v.click(function(){
					// 			$.each(xm_ss.getPanels(), function(j,o){
					// 				o.children().attr("class", "xm-temp-panel1");
					// 			});
					// 			v.children().attr("class", "xm-temp-panel1 xm-temp-panel2");
					// 		});
					// 		if(i == 0){
					// 			v.trigger("click");
					// 		}
					// 	});
						
					// });
				});

				$("#xm_temp_ss>li").eq(1).trigger("click");
			});

			//加载 左下panel div（#accordion1）
			xm_main.getPanels("1:1;2:1").loadElement($("#accordion1"), function(){
				$("#xm_temp_fs>li").click(function(){
					$(this).siblings().css("background-color", "");
					$(this).css("background-color", "#EBEBEB");
					
					switch(parseInt($(this).attr("mid"))){
						case 1:
							$("#xm-temp-window").attr("class", "xm-temp-window1")
							break;
						case 2:
							$("#xm-temp-window").attr("class", "xm-temp-window2")
							break;
						case 3:
							$("#xm-temp-window").attr("class", "xm-temp-window3")
							break;
						case 4:
							$("#xm-temp-window").attr("class", "xm-temp-window4")
							break;
						case 5:
							$("#xm-temp-window").attr("class", "xm-temp-window5")
							break;
						case 6:
							$("#xm-temp-window").attr("class", "xm-temp-window6")
							break;
						default:
							break;
					};
				});

				$("#xm_temp_fs>li").eq(1).trigger("click");
			});
		});
	})();
});