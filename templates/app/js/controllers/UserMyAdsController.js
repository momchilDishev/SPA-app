'use strict';

app.controller('UserMyAdsController',
    function ($scope, $location, adsService, townsService, categoriesService, userService, notifyService, $rootScope, pageSize) {
        $rootScope.pageTitle = "My Ads";
        $scope.adData = {townId: null, categoryId: null};
        $scope.category = categoriesService.getCategories();
        $scope.towns = townsService.getTowns();

        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };

        $scope.reloadUserAds = function() {
            adsService.getUserAds(
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

