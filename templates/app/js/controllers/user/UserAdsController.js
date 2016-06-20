'use strict';

app.controller('UserAdsController',
    function ($scope, $location, userService, notifyService, $rootScope, pageSize) {
        $rootScope.pageTitle = "My Ads";
        $scope.adData = {townId: null, categoryId: null};

        $scope.adsParams = {
            'startPage': 1,
            'pageSize': pageSize,
            'status': null

        };

        $scope.getAd = function (id) {
            userService.getAd(id,
                function success(data) {
                    $scope.editAdData = data;
                    $rootScope.$broadcast("EditAdData", data);
                    notifyService.showInfo("Ad info was successfully gotten.");
                    $location.path("/user/ads/edit");
                },
                function error(err) {
                    notifyService.showError("Ad failed to be edited.", err);
                })
        };

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

        $scope.deactivateAd = function (id) {
            userService.deactivateAd(id,
                function success() {
                    notifyService.showInfo("Ad was successfully deactivated.");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("Ad failed to be deactivated.", err);
                })
        };

        $scope.publishAgainAd = function (id) {
            userService.publishAgainAd(id,
                function success() {
                    notifyService.showInfo("Ad was successfully published again.");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("Ad failed to be published again.", err);
                })
        };

        $scope.deleteAd = function (id) {
            userService.deleteAd(id,
                function success() {
                    notifyService.showInfo("Ad was successfully deleted.");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("Ad failed to be deleted.", err);
                })
        };


        $scope.reloadAds = function () {
            userService.getAds(
                $scope.adsParams,
                function success(data) {
                    $scope.userAds = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load user ads", err);
                }
            );
        };
        $scope.reloadAds();

        $scope.$on("statusSelectionChanged", function (event, selectedStatusId) {
            $scope.adsParams.status = selectedStatusId;
            $scope.adsParams.startPage = 1;
            $scope.reloadAds();
        });
    }
);

