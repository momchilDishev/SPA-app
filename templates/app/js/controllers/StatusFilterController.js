app.controller('StatusFilterController',
    function ($scope, $location,  notifyService, $rootScope, pageSize) {
        $rootScope.pageTitle = "My Ads";

        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };

        $scope.statusClicked = function (clickedStatusId) {
            $scope.selectedStatusId = clickedStatusId;
            $rootScope.$broadcast("statusSelectionChanged", clickedStatusId);
        };

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
