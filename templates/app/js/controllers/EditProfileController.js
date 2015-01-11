'use strict';

app.controller('EditProfileController',
    function ($scope, $location, townsService, userService, notifyService, $rootScope) {
        $rootScope.pageTitle = "Edit Profile";

        $scope.userData = {townId: null};
        $scope.towns = townsService.getTowns();


        $scope.update = function (userData) {
            userService.updateProfile(userData,
                function success() {
                    notifyService.showInfo("User profile successfully updated");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("User profile update failed", err);
                }
            );
        };
        $scope.isEditProfileForm = true;
    }
);

