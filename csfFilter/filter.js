var app=angular.module('myApp',[]);
app.controller("myCtrl",function($scope){ 
  $scope.pers=[
  {"name":"Mary","gender":"女","num":"001"},
  {"name":"Anna","gender":"女","num":"002"},
  {"name":"Jim","gender":"男","num":"003"},
  {"name":"Tizzy","gender":"男",  "num":"004"},
  {"name":"Pop",  "gender":"女","num":"005"},
  {"name":"Herry","gender":"男",  "num":"006"},
  {"name":"Keive","gender":"男",  "num":"007"}
];

  $scope.data={
      items:["男","女","老","少"],
      submit:function(){
         //点击OK的操作
         console.log("ok");
      },
      cancel:function(){
         //点击Reset的操作
         console.log("reset");
    },

  };

});

app.directive('myFilter',[function(){
    return{
        restrict:'EA',
        template:"<i class='blue filter icon'></i>",
        replace:true,
        scope:{
            options:'='
        },
        link:function(scope,elm,attrs,ctrl){
         
         //拼接popup中显示的html
            var list = scope.options.items,
             html="<div class='conts'>"+
                     "<div class='options'>"+
                        "<ul>";
         for(var i=0,len=list.length;i<len;i++){
                   html+="<li ng-repeat='x in itms'>"+
                            "<div class='field'>"+
                                "<div class='ui checkbox'>"+
                                    "<input type='checkbox' name='example'>"+
                                    "<label>"+list[i]+"</label>"+
                                "</div>"+
                            "</div>"+
                        "</li>";
         }
         
                 html+="</ul>"+
                    "</div>"+
                    "<hr>"+
                    "<button class='ui small  button filter-no'>"+
                    "Reset"+
                    "</button>"+
                    "<button class='ui small button filter-yes'>"+
                    "OK"+
                    "</button>"+
                    "</div>"
      
            //事件委托
            $("body").on("click",".filter-yes",function(){
                scope.options.submit();
                $('.icon').popup('hide');
            })

            $("body").on("click",".filter-no",function(){
                scope.options.cancel();
                $('.icon').popup('hide');
            })
            
            //执行popup程序
            $('.icon').popup({ hoverable: true,html:html});
            // $('checkbox').checkbox();

        }
    }
}])