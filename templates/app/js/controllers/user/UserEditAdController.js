'use strict';

app.controller('UserEditAdController',
    function ($scope, $location, townsService, categoriesService, userService, notifyService, $rootScope) {
        $rootScope.pageTitle = "Edit Ad";
        $scope.adData = {townId: null, categoryId: null};
        $scope.categories = categoriesService.getCategories();
        $scope.towns = townsService.getTowns();

        $scope.editAd = function (id, adData) {
            userService.editAd(id,
                function success() {
                    notifyService.showInfo("Ad was successfully edited.");
                    $location.path("/user/ads");
                },
                function error(err) {
                    notifyService.showError("Ad failed to be edited.", err);
                })
        };
    }
);
