'use strict';

app.controller('RegisterController',
    function ($scope, $location, townsService, authService, notifyService) {
        $rootScope.pageTitle = "Register";

        $scope.userData = {townId: null};
        $scope.towns = townsService.getTowns();

        $scope.register = function (userData) {
            authService.register(userData,
                function success() {
                    notifyService.showInfo("User register successful");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("User registration failed", err);
                }
            );
        };
    }
);
