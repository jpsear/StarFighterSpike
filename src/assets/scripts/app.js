angular.module('starFighterApp', ['ngRoute'])
    .controller('personalDetailsController', function($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;

        $scope.heading = 'Star Fighter';
    })

    .controller('quoteQuestionsController', function($scope, $routeParams) {
        $scope.name = 'quoteQuestionsController';
        $scope.params = $routeParams;
        $scope.heading = 'Quote for a Star Fighter';
    })

    .controller('pricePageController', function($scope, $routeParams) {
        $scope.name = 'pricePageController';
        $scope.params = $routeParams;
        $scope.heading = 'See some Prices for your Star Fighter';
    })

    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/QuoteDetails', {
                templateUrl: 'quoteDetails.html',
                controller: 'quoteQuestionsController'
            })
            .when('/Prices', {
                templateUrl: 'Prices.html',
                controller: 'pricePageController'
            });

            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
    });