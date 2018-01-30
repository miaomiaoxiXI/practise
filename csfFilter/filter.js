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
  $scope.list=angular.copy($scope.pers);
  $scope.data={
      selected:[2],
      items:[{name:"男",id:"1"},{name:"女",id:"2"}],
      submit:function(a){
        //点击OK的操作
       var str=[],item=[],newArray=[];
       var item=angular.copy($scope.list);
       for(var i=0,l=a.length;i<l;i++){
           str+=a[i].name;
       }
       for(var i=0,l=item.length;i<l;i++){
           if(str.indexOf(item[i].gender)>-1){
                newArray.push(item[i]);
           }
           $scope.pers=newArray;
       }

         console.log(arguments);
         console.log("ok");
      },
      cancel:function(){
         //点击Reset的操作
         console.log("reset");
    },

  };



});

app.directive('myFilter',['$compile',function($compile){
    return{
        restrict:'EA',
        template:"<i class='blue filter icon link'></i>",
        replace:true,
        scope:{
            options:'='
        },
        link:function(scope,elm,attrs,ctrl){
         
         //拼接popup中显示的html
            var list = scope.options.items,sel=scope.options.selected;
             html="<div class='conts'>"+
                     "<div class='options'>"+
                        "<ul>";
         for(var i=0,len=list.length;i<len;i++){
                   html+="<li>"+
                           
                                "<div class='ui checkbox'>"+
                                    "<input type='checkbox' name='example' value="+list[i].id+">"+
                                    "<label for="+list[i].id+">"+list[i].name+"</label>"+
                            
                            "</div>"+
                        "</li>";
         }
         
                 html+="</ul>"+
                    "</div>"+
                    "<div class='btns'>"+
                    "<button class='ui small  button' ng-click='clr()'>"+
                    "Clear"+
                    "</button>"+
                    "<button class='ui small button' ng-click='sub()'>"+
                    "OK"+
                    "</button>"+
                    "</div>"+
                    "</div>"
      
            //执行popup程序
            $(elm).popup({ on:"click",html:html,className:{popup:'ui test popup'},onCreate:function(){
                $compile($('.ui.test.popup'))(scope);
                for(var i=0,l=sel.length;i<l;i++){
                    $('.ui.test.popup .ui.checkbox input[value='+sel[i]+']').prop("checked",true);
                };$(".ui.test.popup .ui.checkbox").checkbox();
            },duration:0});


            scope.sub=function(){
                sel=[];
                newA=[],lists={};
                for(i=0,l=list.length;i<l;i++){
                    lists[list[i].id]=list[i];
                }
                $(".ui.test.popup .ui.checkbox input:checked").each(function(){
                    newA.push(lists[$(this).val()]);
                    sel.push($(this).val());
                });
                scope.options.submit(newA);
                $(elm).popup('hide');
            }

            scope.clr=function(){
                $(".ui.test.popup .ui.checkbox input:checked").prop("checked",false);
                scope.options.cancel();
                $(elm).popup('hide');
            }

        }
    }
}])