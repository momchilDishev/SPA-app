/**
 * Created by MOmoDi on 13.6.2016 г..
 */
'use strict';

app.controller('AdminAllAdsController',
    function ($scope, $location, adminService, notifyService, $rootScope, pageSize) {
        $rootScope.pageTitle = "Ads Administration - Ads";

        $scope.adsParams = {
            'startPage': 1,
            'pageSize': pageSize
        };

        $scope.reloadAllAds = function () {
            adminService.getAds(
                $scope.adsParams,
                function success(data) {
                    $scope.adminAds = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load ads", err);
                }
            );
        };
        $scope.reloadAllAds();
    }
);