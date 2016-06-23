
'use strict';

// The NavbarController controls the content displayed in the navigation
app.controller('NavbarController',
    function ($scope, $rootScope) {
        $scope.selectedNavId = null;

        $scope.navClicked = function (clickedNavId) {
            $scope.selectedNavId = clickedNavId;
            $rootScope.$broadcast("navSelectionChanged", clickedNavId);
        };
        $scope.$on("navSelectionChanged", function (event, clickedNavId) {
            $scope.selectedNavId = clickedNavId;
        });
    }
);
