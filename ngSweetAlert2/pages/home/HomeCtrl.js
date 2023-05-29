'use strict';

angular.module('myApp').controller('HomeCtrl', ['$scope', 'SweetAlert2',
    function ($scope, SweetAlert2) {

        $scope.demo1 = function () {
            SweetAlert2.fire('Any fool can use a computer')
        }

        $scope.demo2 = function () {
            SweetAlert2.fire(
                'The Internet?',
                'That thing is still around?',
                'question'
            )
        }

        $scope.demo3 = function () {
            SweetAlert2.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',   
              buttons: [true, 'Yes, delete it!']
            }).then((result) => {
              if (result.value) {
                SweetAlert2.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
              }
            })
        }

    }]);
