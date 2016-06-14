'use strict';

// The RightSidebarController controls the content displayed in the right sidebar
app.controller('RightSidebarController',
    function ($scope, $rootScope, categoriesService, townsService, $route, $location) {
        $scope.categories = categoriesService.getCategories();
        $scope.towns = townsService.getTowns();

        $scope.categoryClicked = function (clickedCategoryId) {
            $scope.selectedCategoryId = clickedCategoryId;
            $rootScope.$broadcast("categorySelectionChanged", clickedCategoryId);
        };
        $scope.townClicked = function (clickedTownId) {
            $scope.selectedTownId = clickedTownId;
            $rootScope.$broadcast("townSelectionChanged", clickedTownId);
        };

        $scope.$on('$routeChangeSuccess', function () {
            var path = $location.path();
            $scope.rightSidebarVisible = true;
            if (path === '/login' ||
                path === '/register' ||
                path === '/user/ads/publish' ||
                path === '/user/profile' ||
                path === '/user/ads') {
                $scope.rightSidebarVisible = false;
            } else {
                $scope.rightSidebarVisible = true;
            }
        });

    }
);


