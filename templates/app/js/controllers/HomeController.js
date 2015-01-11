'use strict';

app.controller('HomeController',
    function ($scope, adsService, notifyService, pageSize, $rootScope, userService) {
        $rootScope.pageTitle = "Home";

        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize,
            'status': null
        };

        $scope.reloadAds = function() {
            adsService.getAds(
                $scope.adsParams,
                function success(data) {
                    $scope.ads = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load ads", err);
                }
            );
        };

        $scope.reloadAds();

        // This event is sent by RightSideBarController when the current category is changed
        $scope.$on("categorySelectionChanged", function(event, selectedCategoryId) {
            $scope.adsParams.categoryId = selectedCategoryId;
            $scope.adsParams.startPage = 1;
            $scope.reloadAds();
        });

        $scope.$on("townSelectionChanged", function(event, selectedTownId) {
            $scope.adsParams.townId = selectedTownId;
            $scope.adsParams.startPage = 1;
            $scope.reloadAds();
        });

        $scope.$on("statusSelectionChanged", function(event, selectedStatusId) {
            $scope.adsParams.status = {status:selectedStatusId};
            $scope.adsParams.startPage = 1;
            $scope.reloadUserAds();
        });

    }
);

