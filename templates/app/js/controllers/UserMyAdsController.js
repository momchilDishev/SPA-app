'use strict';

app.controller('UserMyAdsController',
    function ($scope, $location, townsService, categoriesService, userService, notifyService, $rootScope) {
        $rootScope.pageTitle = "My Ads";
        $scope.adData = {townId: null, categoryId: null};
        $scope.categories = categoriesService.getCategories();
        $scope.towns = townsService.getTowns();
    }
);

