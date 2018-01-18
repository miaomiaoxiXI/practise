var app = angular.module('myApp', []);
// app.run(function ($rootScope) {
//     $rootScope.$watch("defTime", function (newVal, oldVal) {
//         console.log(newVal, oldVal);
//     })
// });
app.directive('defLaydate', function () {
    return {
        require: '?ngModel',
        restrict: 'A',
        scope: {
            ngModel: '=',
        },
        link: function (scope, element, attr, ngModelCrl) {
            var _date = null, _config = {};
            // 初始化参数    
                          
            _config = {
                type:attr.typeDate||"date",
                lang: 'cn',
                elem: element[0],
                btns: ['now', 'confirm'],
                format: !!attr.format ? attr.format : 'yyyy-MM-dd',
                range: attr.range,
                done: function (value, date, endDate) {
                    ngModelCrl.$setViewValue(value);
                }
            };
            // 初始化
            _date = laydate.render(_config);
            // 模型值同步到视图上
            // ngModelCrl.$render = function () {
            //     element.val(ngModelCrl.$viewValue || '');
            // };
        }
    }
})
