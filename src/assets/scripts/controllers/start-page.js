StarFighter.controller('startPageController', function($scope, $route, $routeParams, $location, answerService) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

    $scope.heading = 'Start Page';
});
