$(document).ready(function(){
	 var mypanel = $("#workspace");

	 function load_demo1(panel){
	 	var xm = $.xmlayout.layout();
	    var data = xm.design(2,3);
	    xm.init({
	        data : data,
	        panel : panel,
	        drag_bar_unit : 3,
	        pborder : "1px solid gray",
	        timer : 2000
	    });

	    $.xmlayout.pages['demo1/test1.html'] = function(){
	    	var lmyChart = null;

			function init_lisitener() {
				$.xmlayout.getParam('xm').resize(function () {
					lmyChart.resize();
				});
			};

			function draw_charts(){
				lmyChart = echarts.init($("#echart1")[0]);
				lmyChart.setOption(cal_option());
				window.onresize = function(){
					lmyChart.resize();
				}
			};

			function cal_option(){
				var base = +new Date(1968, 9, 3);
				var oneDay = 24 * 3600 * 1000;
				var date = [];

				var data = [Math.random() * 300];

				for (var i = 1; i < 20000; i++) {
				    var now = new Date(base += oneDay);
				    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
				    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
				}

				var option = {
				    tooltip: {
				        trigger: 'axis',
				        position: function (pt) {
				            return [pt[0], '10%'];
				        }
				    },
				    title: {
				        left: 'center',
				        text: '大数据量面积图',
				        textStyle : {
				        	fontSize : 12
				        }
				    },
				    toolbox: {
				        feature: {
				            dataZoom: {
				                yAxisIndex: 'none'
				            },
				            restore: {},
				            saveAsImage: {}
				        }
				    },
				    xAxis: {
				        type: 'category',
				        boundaryGap: false,
				        data: date
				    },
				    yAxis: {
				        type: 'value',
				        boundaryGap: [0, '100%']
				    },
				    dataZoom: [{
				        type: 'inside',
				        start: 0,
				        end: 10
				    }, {
				        start: 0,
				        end: 10,
				        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
				        handleSize: '80%',
				        handleStyle: {
				            color: '#fff',
				            shadowBlur: 3,
				            shadowColor: 'rgba(0, 0, 0, 0.6)',
				            shadowOffsetX: 2,
				            shadowOffsetY: 2
				        }
				    }],
				    series: [
				        {
				            name:'模拟数据',
				            type:'line',
				            smooth:true,
				            symbol: 'none',
				            sampling: 'average',
				            itemStyle: {
				                normal: {
				                    color: 'rgb(255, 70, 131)'
				                }
				            },
				            areaStyle: {
				                normal: {
				                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
				                        offset: 0,
				                        color: 'rgb(255, 158, 68)'
				                    }, {
				                        offset: 1,
				                        color: 'rgb(255, 70, 131)'
				                    }])
				                }
				            },
				            data: data
				        }
				    ]
				}
				return option;
			};
			init_lisitener();
			draw_charts();
	    };

	    $.xmlayout.pages['demo1/test2.html'] = function(){
	    	var lmyChart = null;

			function init_lisitener() {
				$.xmlayout.getParam('xm').resize(function () {
					lmyChart.resize();
				});
			};

			function draw_charts(){
				lmyChart = echarts.init($("#echart2")[0]);
				lmyChart.setOption(cal_option());
				window.onresize = function(){
					lmyChart.resize();
				}
			};

			function cal_option(){
				var option = {
				    title : {
				        text: '某站点用户访问来源',
				        subtext: '纯属虚构',
				        x:'center',
				        textStyle : {
				        	fontSize : 12
				        }
				    },
				    tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
				    legend: {
				        orient : 'vertical',
				        x : 'left',
				        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
				    },
				    toolbox: {
				        show : true,
				        feature : {
				            mark : {show: true},
				            dataView : {show: true, readOnly: false},
				            magicType : {
				                show: true, 
				                type: ['pie', 'funnel'],
				                option: {
				                    funnel: {
				                        x: '25%',
				                        width: '50%',
				                        funnelAlign: 'left',
				                        max: 1548
				                    }
				                }
				            },
				            restore : {show: true},
				            saveAsImage : {show: true}
				        }
				    },
				    calculable : true,
				    series : [
				        {
				            name:'访问来源',
				            type:'pie',
				            radius : '55%',
				            center: ['50%', '60%'],
				            data:[
				                {value:335, name:'直接访问'},
				                {value:310, name:'邮件营销'},
				                {value:234, name:'联盟广告'},
				                {value:135, name:'视频广告'},
				                {value:1548, name:'搜索引擎'}
				            ]
				        }
				    ]
				}
	                    
				return option;
			};
			init_lisitener();
			draw_charts();
	    };

	    $.xmlayout.pages['demo1/test3.html'] = function(){
	    	var lmyChart = null;

			function init_lisitener() {
				$.xmlayout.getParam('xm').resize(function () {
					lmyChart.resize();
				});
			};

			function draw_charts(){
				lmyChart = echarts.init($("#echart3")[0]);
				lmyChart.setOption(cal_option());
				window.onresize = function(){
					lmyChart.resize();
				}
			};

			function cal_option(){
				var option = {
			    tooltip : {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
			    },
			    toolbox: {
			        show : true,
			        feature : {
			            mark : {show: true},
			            dataView : {show: true, readOnly: false},
			            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
			            restore : {show: true},
			            saveAsImage : {show: true}
			        }
			    },
			    calculable : true,
			    xAxis : [
			        {
			            type : 'category',
			            boundaryGap : false,
			            data : ['周一','周二','周三','周四','周五','周六','周日']
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'邮件营销',
			            type:'line',
			            stack: '总量',
			            data:[120, 132, 101, 134, 90, 230, 210]
			        },
			        {
			            name:'联盟广告',
			            type:'line',
			            stack: '总量',
			            data:[220, 182, 191, 234, 290, 330, 310]
			        },
			        {
			            name:'视频广告',
			            type:'line',
			            stack: '总量',
			            data:[150, 232, 201, 154, 190, 330, 410]
			        },
			        {
			            name:'直接访问',
			            type:'line',
			            stack: '总量',
			            data:[320, 332, 301, 334, 390, 330, 320]
			        },
			        {
			            name:'搜索引擎',
			            type:'line',
			            stack: '总量',
			            data:[820, 932, 901, 934, 1290, 1330, 1320]
			        }
			    ]
			}

			return option;
	                    
			};
			init_lisitener();
			draw_charts();
	    };

	    var panels = xm.getPanels();
	    panels[0].loadPage("demo1/test1.html", null, null, "大数据量面积图");
	    panels[1].loadPage("demo1/test2.html", null, null, "某站点用户访问来源");
	    panels[2].loadPage("demo1/test3.html", null, null, "折线图");
	    panels[3].loadPage("demo1/test4.html", null, null, "极坐标双数值轴");
	    panels[4].loadPage("demo1/test5.html", null, null, "某地区蒸发量和降水量");
	    panels[5].loadPage("demo1/test6.html", null, null, "实时数据更新动态图");
	    
	   // $.xmlayout.setPlay([panels[0], panels[1]]);//只播放panels[0]与panels[1]

	    $.xmlayout.addParam({xm : xm});
	 }

	 function load_demo2(panel){
	 	var xm = $.xmlayout.layout();
	    var data = xm.element(10, true, true, null, [
	            xm.element(2, true, true, true),
	            xm.element(8, true, true, null, null, [
	                xm.element(8, true, true, null, [
	                    xm.element(8, true, true, null, null, [
	                        xm.element(8, true, true, false),
	                        xm.element(5, true, true, true)
	                        ]),
	                    xm.element(2, true, true, false)
	                    ]),
	                xm.element(2, false, false, true)//不让拖动
	                ])
	        ]);
	    
	    xm.init({
	        data : data,
	        panel : panel,
	        timer : 2000,
	        drag_bar_unit : 5
	    });

	    var panels = xm.getPanels();
	    panels[0].loadPage("demo2/test1.html", null, function(){
	    	panels[0].design_i(2,1, [[1,1], [5,1]]);
          	panels[0].getPanels_i('2:1').design_i(1,3, [[1,1,18,1]]);
           	panels[0].getPanels_i('2:1').getPanels_i('1:2').design_i(3,1,[[1,1],[2,1],[4,1]]);

          	//绘制布局
          	panels[0].draw();
	    }, "panel1", {bgcolor:"red", fontcolor:"white"});

	    panels[1].loadPage("demo2/test2.html", null, function(){
	    	panels[1].design_i(2,1, [["auto",1], ["auto",1]]);
          	panels[1].getPanels_i('2:1').design_i(1,3, [[1,1,18,1]]);
           	panels[1].getPanels_i('2:1').getPanels_i('1:2').design_i(2,1,[["auto",1],["auto",1]]);

          	//绘制布局
          	panels[1].draw();
	    });

	    panels[2].loadPage("demo2/test3.html", null, null, "panel3", {fontcolor:"blue"});

	    panels[3].loadPage("demo2/test4.html", null, function(){
	    	panels[3].design_i(2,1, [["auto",1], ["auto",1]]);
          	panels[3].getPanels_i('2:1').design_i(1,3, [[1,1,18,1]]);
          	panels[3].getPanels_i('2:1').getPanels_i('1:2').design_i(2,1,[["auto",1],["auto",1]]);
          
          	//绘制布局
          	panels[3].draw();
	    });

	    panels[4].loadPage("demo2/test5.html", null, function(){
	    	panels[4].design_i(2,1, [["auto",1], ["auto",1]]);
          	panels[4].getPanels_i('2:1').design_i(1,3, [[1,1,18,1]]);
          	panels[4].getPanels_i('2:1').getPanels_i('1:2').design_i(2,1,[["auto",1],["auto",1]]);

          	//绘制布局
          	panels[4].draw();
	    }, "panel5", {fontcolor:"red", pos:"center", fontsize:"24"});

	    //对Panel 1添加自定义右键按钮和事件
	    var id = xm.addRightPanelItem(panels[0], "user-defiend", function(e){
	        alert("user-defiend click");
	        xm.removeRightPanelItem(panels[0], id);
	    });

	    xm.disablePanelItem(panels[0], xm.RPID.ZOOM_OUT, true);//对Panel 1禁用放大、缩小功能
	    $.xmlayout.addParam({xm : xm});
	 }


    load_demo1(mypanel);
    $(".demo").click(function(){
     	
        if($(this).attr("name") == "demo1"){
            load_demo1(mypanel);
        }
        else{
            load_demo2(mypanel);
        }
    });
});