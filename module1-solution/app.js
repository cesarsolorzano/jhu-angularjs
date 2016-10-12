(function(){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
    $scope.lunchList = '';
    $scope.message = '';
    $scope.lunchListStatus = '';
    $scope.messageColor = '';

    $scope.checkIfTooMuch = function () {

        var lunchListInput = $scope.lunchList.split(',').filter(function(value){
            return (value.trim().length != 0);
        });

        if (lunchListInput.length == 0) {
            $scope.message = "Please enter data first";
            $scope.messageColor = '';
            $scope.lunchListStatus = "has-error";
        } else if (lunchListInput.length <= 3) {
            $scope.message = "Enjoy!";
            $scope.messageColor = 'success';
            $scope.lunchListStatus = "has-success";
        } else{
            $scope.message = "Too much!";
            $scope.messageColor = 'danger';
            $scope.lunchListStatus = "has-success";
        }
    };
}

})();
