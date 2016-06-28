'use strict';

app.controller('UserEditAdController',
    function ($scope, $location, townsService, categoriesService, userService, notifyService, $rootScope) {
        $rootScope.pageTitle = "Edit Ad";

        $scope.$on("EditAdData", function (event, editAdData) {
            $scope.adData = editAdData;
        });

        $scope.categories = categoriesService.getCategories();
        $scope.towns = townsService.getTowns();


        $scope.editAd = function (adData) {
            userService.editAd(adData,
                function success() {
                    notifyService.showInfo("Advertisement edited. Don't forget to submit it for publishing.");
                    $location.path("/user/ads");
                },
                function error(err) {
                    notifyService.showError("Ad failed to be edited.", err);
                })
        };
    }
);
