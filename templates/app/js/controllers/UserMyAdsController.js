'use strict';

app.controller('UserMyAdsController',
    function ($scope, $location, townsService, categoriesService, userService, notifyService, $rootScope, pageSize) {
        $rootScope.pageTitle = "My Ads";

        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };

        $scope.reloadUserAds = function() {
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
        $scope.reloadUserAds();

        $scope.$on("statusSelectionChanged", function(event, selectedStatus) {
            $scope.adsParams.status = selectedStatus;
            $scope.adsParams.startPage = 1;
            $scope.reloadUserAds();
        });
    }
);

