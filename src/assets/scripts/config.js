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