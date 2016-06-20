'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource', 'angular-loading-bar', 'ui.bootstrap.pagination']);


app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net');
app.constant('pageSize', 4);

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/views/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/views/login.html',
        controller: 'LoginController'
    });

    $routeProvider.when('/register', {
        templateUrl: 'templates/views/register.html',
        controller: 'RegisterController'
    });

    $routeProvider.when('/user/ads', {
        templateUrl: 'templates/views/user/my-ads.html',
        controller: 'UserAdsController'
    });

    $routeProvider.when('/user/ads/publish', {
        templateUrl: 'templates/views/user/publish-new-ad.html',
        controller: 'UserPublishNewAdController'
    });

    $routeProvider.when('/user/profile', {
        templateUrl: 'templates/views/user/edit-profile.html',
        controller: 'EditProfileController'
    });

    $routeProvider.when('/user/ads/edit/:id', {
        templateUrl: 'templates/views/user/edit-ad.html',
        controller: 'UserEditAdController'
    });

    $routeProvider.when('/admin/ads', {
        templateUrl: 'templates/views/admin/all-ads.html',
        controller: 'AdminAllAdsController'
    });

    $routeProvider.when('/admin/users', {
        templateUrl: 'templates/views/admin/towns.html',
        controller: 'AdminUsersController'
    });

    $routeProvider.when('/admin/categories', {
        templateUrl: 'templates/views/admin/categories.html',
        controller: 'AdminCategoriesController'
    });
    
    $routeProvider.when('/admin/towns', {
        templateUrl: 'templates/views/admin/towns.html',
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
