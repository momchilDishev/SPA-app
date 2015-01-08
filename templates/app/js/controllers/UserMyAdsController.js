'use strict';

app.controller('UserMyAdsController',
    function ($scope,  $location, townsService, categoriesService, statusService,userService, notifyService, $rootScope) {
        $rootScope.pageTitle = "My Ads";
        $scope.adData = {townId: null, categoryId: null};
        $scope.category = categoriesService.getCategories();
        $scope.towns = townsService.getTowns();
        $scope.status = statusService.getStatus();

        $scope.myAds = function(userData){


        }
    }
);

