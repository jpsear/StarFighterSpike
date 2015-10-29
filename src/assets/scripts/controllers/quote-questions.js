StarFighter.controller('quoteQuestionsController', function($scope, $routeParams, $location, answerService) {
    $scope.params = $routeParams;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

    $scope.heading = 'Quote Questions';
    // $scope.answers = answerService.answerData;
});
