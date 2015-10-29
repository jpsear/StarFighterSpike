var StarFighter = angular.module('starFighterApp', ['ngRoute']);

StarFighter.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/views/start-page.html',
            controller: 'startPageController'
        })
        .when('/quote-questions', {
            templateUrl: 'views/quote-questions.html',
            controller: 'quoteQuestionsController'
        })
        .when('/prices', {
            templateUrl: 'views/prices.html',
            controller: 'pricePageController'
        });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
});
StarFighter.service('answerService', function() {
    var answerData = this;

    answerData = {
        price: '',
        location: ''
    }

    var addAnswer = function(key, value) {
        answerData[key] = value;
    };

    return {
        addAnswer : addAnswer,
        answerData : answerData
    }
});
StarFighter.controller('pricePageController', function($scope, $routeParams, $location, answerService) {
    $scope.params = $routeParams;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

    $scope.heading = 'Price Page';
});
StarFighter.controller('quoteQuestionsController', function($scope, $routeParams, $location, answerService) {
    $scope.params = $routeParams;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

    $scope.heading = 'Quote Questions';
    // $scope.answers = answerService.answerData;
    console.log(answerService.answerData);
    answerService.addAnswer('price', 3000);
    console.log(answerService.answerData);
});

StarFighter.controller('starFighterController', function($scope, $route, $routeParams, $location, answerService) {
    $scope.heading = 'Star Fighter';
});
StarFighter.controller('startPageController', function($scope, $route, $routeParams, $location, answerService) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

    $scope.heading = 'Start Page';
});