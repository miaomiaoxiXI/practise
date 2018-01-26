var app = angular.module('myApp', []);
app.controller("myCtrl", function ($scope) {
    $scope.pers = [
        { "name": "Mary", "gender": "女", "num": "001" },
        { "name": "Anna", "gender": "女", "num": "002" },
        { "name": "Jim", "gender": "男", "num": "003" },
        { "name": "Tizzy", "gender": "男", "num": "004" },
        { "name": "Pop", "gender": "女", "num": "005" },
        { "name": "Herry", "gender": "男", "num": "006" },
        { "name": "Keive", "gender": "男", "num": "007" }
    ];
    // var list = [{name:"",id:""}]
    $scope.data = {
        selected:[1,2],
        items : [{name:"男",id:"1"},{name:"女",id:"2"}],
        submit: function (newArr) {
            console.log(arguments);
            //点击OK的操作
            console.log("ok");
        },
        cancel: function () {
            //点击Reset的操作
            console.log("reset");
        },
    };

    $scope.data1 = {
        items : [{name:"老",id:"1"},{name:"少",id:"2"}],
        selected:[1],
        submit: function (newArr) {
            //点击OK的操作
            console.log(arguments);
            console.log("ok111");
        },
        cancel: function () {
            //点击Reset的操作
            console.log("reset22");
        },

    };
});

app.directive('myFilter', ['$compile', function ($compile) {
    return {
        restrict: 'EA',
        template: "<i class='blue filter icon link'></i>",
        replace: true,
        scope: {
            options: '='
        },
        link: function (scope, elm, attrs, ctrl) {
            //拼接popup中显示的html
            var list = scope.options.items,
                html = "<div class='conts'>" +
                    "<div class='options'>" +
                    "<ul>";
            for (var i = 0, len = list.length; i < len; i++) {
                html += "<li>" +
                    "<div class='field'>" +
                    "<div class='ui checkbox'>" +
                    "<input type='checkbox' name='example'  value="+list[i].id+">" +
                    "<label>" + list[i].name + "</label>" +
                    "</div>" +
                    "</div>" +
                    "</li>";
            }

            html += "</ul>" +
                "</div>" +
                "<div class='csfbts'>" +
                "<button class='ui small  button' ng-click='canc()'>" +
                "Clear" +
                "</button>" +
                "<button class='ui small button' ng-click='subm()'>" +
                "OK" +
                "</button>" +
                "</div>" +
                "</div>"
            
            var select=scope.options.selected;  //默认的勾选项
            //执行popup程序
            $(elm).popup({
                html: html, className: { popup: 'ui colfilter popup ' },
                on: 'click', onCreate: function () {
                    $compile($('.ui.colfilter.popup'))(scope);  //重新编译angular的语句
                    for(var i=0,l=select.length;i<l;i++){ 
                        $(".ui.colfilter.popup input[value="+select[i]+"]").each(function () {
                            $(this).prop("checked", true);
                        });
                    };
                }, duration: 0, offset: -10,
            });
            
            scope.subm=function(){
                var lists={},newArr=[];
                for(var i = 0; i < list.length; i++)
                {  
                    lists[list[i].id] = list[i];
                }
                select=[];
                $(".ui.colfilter.popup input:checked").each(function() {
                    newArr.push((lists[$(this).val()]));
                    select.push($(this).val());
                });
                scope.options.submit(newArr);
                $(elm).popup('hide');
            }

            scope.canc=function(){
                $(".ui.colfilter.popup input:checked").prop("checked",false);   //清空默认的勾选项
                // select=[]; 
                scope.options.cancel();
            }
        }
    }
}])