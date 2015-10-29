StarFighter.controller('pricePageController', function($scope, $routeParams, $location, answerService) {
    $scope.params = $routeParams;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

    $scope.heading = 'Price Page';
});
