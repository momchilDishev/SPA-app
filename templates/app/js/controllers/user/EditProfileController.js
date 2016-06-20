'use strict';

app.controller('EditProfileController',
    function ($scope, $location, adData, townsService, userService, notifyService, $rootScope) {
        $rootScope.pageTitle = "Edit Profile";
        $scope.towns = townsService.getTowns();


        $scope.getProfile = function(){
            userService.getProfile(
                function success(data) {
                    $scope.userData = data;
                    notifyService.showInfo("User info was successfully gotten.");
                },
                function error(err) {
                    notifyService.showError("Cannot load user data", err);
                }
            );
        };
        $scope.getProfile();

        $scope.update = function (userData) {
            userService.updateProfile(userData,
                function success() {
                    notifyService.showInfo("User profile successfully updated.");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("User profile update failed.", err);
                }
            );
        };

        $scope.changePassword = function (userData) {
            userService.changePass(userData,
                function success() {
                    notifyService.showInfo("Password changed successfully.");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("Password change failed", err);
                }
            );
        };
    }
);

