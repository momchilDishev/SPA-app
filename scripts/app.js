var app = angular.module("home", []);

app.config(function($routeProvider){
	$routeProvider
	    .when('/',
		{
		    controller: 'homer',
		    templateUrl: 'views/view-home.html
		})
	    .when('/partial2',
		{
		    controller: 'homer',
		    templateUrl: 'views/view-2.html
		})
	    .otherwise({redirectTo:'/'});
})

app.controller("homer", function($scope){
	$scope.customers = [
	    {name: Momo, city: Sofia},
	    {name: Pesho, city: Varna}
	];

});
			
 	