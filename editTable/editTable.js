
var app = angular.module('myApp',[]);
app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
  $scope.employees =[{id:101, name:'John', phone:'555-1276'},
                   {id:102, name:'Mary', phone:'800-1233'},
                   {id:103,name:'Mike', phone:'555-4321'},
                   {id:104,name:'Adam', phone:'555-5678'},
                   {id:105,name:'Julie', phone:'555-8765'},
                   {id:106,name:'Juliette', phone:'555-5678'}];
$scope.showEdit = true;
 $scope.master = {};


 $("table").find(".dbclicktd").bind("dblclick", function () {
    var input = "<input type='text' id='temp' style='width:130px;' value=" + $(this).text() + " >";
    $(this).text("");
    $(this).append(input);
    $("input#temp").focus();
    $("input").blur(function () {
        if ($(this).val() == "") {
            $(this).remove();
        } else {
            $(this).closest("td").text($(this).val());
        }
    });
});
});