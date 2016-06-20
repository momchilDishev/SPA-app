'use strict';

app.controller('UserEditAdController',
    function ($scope, $location, townsService, categoriesService, userService, notifyService, $rootScope) {
        $rootScope.pageTitle = "Edit Ad";
        $scope.categories = categoriesService.getCategories();
        $scope.towns = townsService.getTowns();

        $scope.$on("EditAdData", function (event, editAdData) {
            $scope.adData = editAdData;
        });

        
        $scope.editAd = function (id, adData) {
            userService.editAd(id, adData,
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
