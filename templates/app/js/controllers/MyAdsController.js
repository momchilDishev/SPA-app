'use strict';

// The MyAdsController controls the content displayed in the extra left-sidebar navigation
app.controller('MyAdsController',
    function ($scope, $rootScope, statusService) {
        $scope.status = statusService.getStatus();

        $scope.statusClicked = function(clickedStatusId) {
            $scope.selectedStatusId = clickedStatusId;
            $rootScope.$broadcast("statusSelectionChanged", clickedStatusId);
        };

    }

);
