angular.module("treeApp", [])
  .controller("treeController", function ($scope) {
    $scope.data = {
      jsonData1: [
        { id: '2', name: 'A', pid: null, checked: true },
        { id: '3', name: 'A.1', pid: '2' },
        { id: '4', name: 'A.1.1', pid: '3' },
        { id: '5', name: 'A.2', pid: '2' },
        { id: '6', name: 'A.2.1', pid: '5' },
        { id: '7', name: 'A.2.1.1', pid: '6' },
        { id: '8', name: 'A.2.2', pid: '5' },
        { id: '9', name: 'B', pid: null, disabled: true, checked: true },
        { id: '10', name: 'B.1', pid: '9' },
        { id: '11', name: 'B.2', pid: '9' },
        { id: '12', name: 'C', pid: null, disabled: true }
      ],

      jsonData: {
        // name: 'menu',
        // id:'1',
        // children: [{
        //   name: 'A',
        //   id:'2',
        //   checked:true,
        //   children: [{
        //     name: 'A.1',
        //     id:'3',
        //     children: [{
        //       id:'4',
        //       name: 'A.1.1',
        //       children: []
        //     }]
        //   },{
        //     name: 'A.2',
        //     id:"5",
        //     children: [{
        //       name: 'A.2.1',
        //       id:'6',
        //       children: [{
        //         name: 'A.2.1.1',
        //         id:'7',
        //         children: []
        //       }]
        //     },{
        //       name: 'A.2.2',
        //       id:'8',
        //       children: []
        //     }]
        //   }]
        // },{
        //   name: 'B',
        //   id:'9',
        //   disabled:true,
        //   checked:true,
        //   children: [{
        //     name: 'B.1',
        //     id:'10',
        //     children: []
        //   },{
        //     name: 'B.2',
        //     id:'11',
        //     children: []
        //   }]
        // },{
        //   name: 'C',
        //   id:'12',
        //   disabled:true,
        //   children: []
        // }]
      },

      isExpand: true, //可选项，默认为false
      isCheckbox: true, //可选项，默认为false
    }

  }).directive('treeView', function () {
    return {
      restrict: 'E',
      template: "<ul class='myTr'>" +
      "<li ng-repeat='item in json1' ng-include=\"'template/treeItem.html'\"></li>" +
      "</ul>",
      scope: {
        options: '='
      },
      link: function ($scope, elm, attr) {
        $scope.treeData = $scope.options.jsonData,
          $scope.list = {};
        $scope.transData = function (data) {
          var list = $scope.list, l = data.length, json = [];
          for (var i = 0; i < l; i++) {
            data[i].isExpand = $scope.options.isExpand || '';
            list[data[i].id] = data[i];
          }
          for (var j = 0; j < l; j++) {
            var parent = list[data[j].pid];
            if (parent) {
              !parent.children && (parent.children = []);
              parent.children.push(data[j]);
            } else {
              json.push(data[j]);
            }
          }
          return json;
        }
        $scope.json1 = $scope.transData($scope.options.jsonData1);
        $scope.isLeaf = function (item) {
          return !item.children || !item.children.length;
        };

        $scope.toggleExpandStatus = function (item) {
          item.isExpand = !item.isExpand;
        };

        $scope.options.getData = function () {
          var data = [];
          $("input:checked").each(function () {
            data.push($scope.list[$(this).val()]);
          });
          return data;
        };

      }
    };

  });