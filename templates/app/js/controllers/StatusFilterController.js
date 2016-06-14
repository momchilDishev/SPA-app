app.controller('StatusFilterController',
    function ($scope, $location, notifyService, $rootScope, pageSize) {
        $scope.adsParams = {
            'startPage': 1,
            'pageSize': pageSize
        };

        $scope.statusClicked = function (clickedStatusId) {
            $scope.selectedStatusId = clickedStatusId;
            $rootScope.$broadcast("statusSelectionChanged", clickedStatusId);
        };

        $scope.$on('$routeChangeSuccess', function () {
            $scope.statusNavVisible = false;

            var path = $location.path();

            if (path === '/user/ads') {
                $rootScope.pageTitle = "My Ads";
                $scope.statusNavVisible = true;

            } else if (path === '/admin/ads') {
                $rootScope.pageTitle = "Ads";
                $scope.statusNavVisible = true;

            } else {
                $scope.statusNavVisible = false;
            }
        });

    }
);
