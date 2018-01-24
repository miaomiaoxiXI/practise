var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
  $scope.expanders=[
      {title:'title1',text:'text11111'},
      {title:'title2',text:'text2222222'},
      {title:'title3',text:'text333333'},
      {title:'title4',text:'text44444444'}
    ];
});

app.directive('accordion',function(){
    return{
        restrict:'EA',
        relpace:true,
        transclude:true,
        template:'<div ng-transclude></div>',
        controller:function(){
            var expanders=[];
            this.gotOpened=function(selectedExpander){
                 angular.forEach(expanders,function(expander){
                   if(selectedExpander!=expander){
                       expander.showMe=false;
                   }
                 });
            }
            this.addExpander=function(expander){
                expanders.push(expander);
            }
        }
    }
});

app.directive('expander',function(){
    return{
        restrict:'EA',
        replace:true,
        transclude:true,
        require:'^?accordion',
        scope:{
            title:'=expanderTitle'
        },
        template:'<div>'          
                +'<div ng-click="toggle()">{{title}}</div>'
                +'<div ng-show="showMe" ng-transclude></div>'//指令内部的内容的位置
                +'</div>',
        link:function(scope,ele,attrs,accordionCtrl){
           scope.showMe=false;
        //    console.log(scope);
           accordionCtrl.addExpander(scope);
           scope.toggle=function(){
               scope.showMe=!scope.showMe;
               accordionCtrl.gotOpened(scope);
           }
        }
    }
});

