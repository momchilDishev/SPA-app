app.controller('StatusFilterController',
    function ($scope, $location, userService, notifyService, $rootScope, pageSize) {
        $rootScope.pageTitle = "My Ads";

        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };

        $scope.statusClicked = function (clickedStatusId) {
            $scope.selectedStatusId = clickedStatusId;
            $rootScope.$broadcast("statusSelectionChanged", clickedStatusId);
        };

        $scope.reloadUserAds = function() {
            userService.getAdsByStatus(
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

        $scope.$on('$routeChangeSuccess', function () {
            var path = $location.path();
            $scope.statusNavVisible = false;
            if (path === '/user/ads' ){
                $scope.statusNavVisible = true;
            } else {
                $scope.statusNavVisible = false;
            }
        });

    }
);
