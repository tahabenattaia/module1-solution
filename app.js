(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchItems = "";
        $scope.message = "";

        $scope.checkLunch = function () {
            var items = $scope.lunchItems.split(',');
            var itemCount = items.filter(item => item.trim() !== '').length;

            if (itemCount === 0) {
                $scope.message = "Please enter your dishes first.";
            } else if (itemCount <= 3) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too much!";
            }
        };
    }
})();