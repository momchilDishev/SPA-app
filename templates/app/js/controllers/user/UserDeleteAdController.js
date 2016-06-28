'use strict';

app.controller('UserDeleteAdController',
    function ($scope, $location, townsService, categoriesService, userService, notifyService, $rootScope) {
        $rootScope.pageTitle = "Delete Ad";

        $scope.$on("DeleteAdData", function (event, editAdData) {
            $scope.adData = editAdData;
        });

        $scope.deleteAd = function (id) {
            userService.deleteAd(id,
                function success() {
                    notifyService.showInfo("Ad was successfully deleted.");
                    $location.path("/user/ads");
                },
                function error(err) {
                    notifyService.showError("Ad failed to be deleted.", err);
                })
        };


    });