'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource', 'angular-loading-bar', 'ui.bootstrap.pagination']);


app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net');
app.constant('pageSize', 4);

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    });

    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });

    $routeProvider.when('/user/ads', {
        templateUrl: 'templates/user/my-ads.html',
        controller: 'UserAdsController'
    });

    $routeProvider.when('/user/ads/publish', {
        templateUrl: 'templates/user/publish-new-ad.html',
        controller: 'UserPublishNewAdController'
    });

    $routeProvider.when('/user/profile', {
        templateUrl: 'templates/user/edit-profile.html',
        controller: 'EditProfileController'
    });

    $routeProvider.when('/admin/ads', {
        templateUrl: 'templates/admin/all-ads.html',
        controller: 'AdminAllAdsController'
    });

    $routeProvider.when('/admin/users', {
        templateUrl: 'templates/admin/towns.html',
        controller: 'AdminUsersController'
    });

    $routeProvider.when('/admin/categories', {
        templateUrl: 'templates/admin/categories.html',
        controller: 'AdminCategoriesController'
    });
    
    $routeProvider.when('/admin/towns', {
        templateUrl: 'templates/admin/towns.html',
        controller: 'AdminTownsController'
    });


    $routeProvider.otherwise(
        { redirectTo: '/' }
    );

});

app.run(function ($rootScope, $location, authService) {
    $rootScope.$on('$locationChangeStart', function (event) {
        if ($location.path().indexOf("/user/") != -1 && !authService.isLoggedIn()) {
            // Authorization check: anonymous site visitors cannot access user routes
            $location.path("/");
        }
    });
});
