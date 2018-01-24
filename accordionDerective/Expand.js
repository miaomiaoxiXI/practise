var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
  $scope.title="我是标题";
  $scope.text="我是内容";
});

app.directive('expander',function(){
    return{
        restrict:'EA',
        replace:true,
        transclude:true,
        scope:{
            title:'=expanderTitle'
        },
        template:'<div>'          
                +'<div ng-click="toggle()">{{title}}</div>'
                +'<div ng-show="showMe" ng-transclude></div>'//指令内部的内容的位置
                +'</div>',
        link:function(scope,ele,attr){
           scope.showMe=true;
           scope.toggle=function(){
               scope.showMe=!scope.showMe;
           }
        }
    }
});